(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

var Cobre = require("./cobre.js")
var Compiler = require("./compiler.js")

Cobre.escape = Compiler.escape
Cobre.compile = Compiler.compile

if (typeof window === "undefined")
  throw new Error("Not running in a browser")

window.Cobre = Cobre

},{"./cobre.js":2,"./compiler.js":4}],2:[function(require,module,exports){
(function (process){
(function () {

function $require (name) {
  if (typeof require !== "function") return null
  try { return require(name) }
  catch (e) {
    if (e.code === "MODULE_NOT_FOUND") return null
    else throw e
  }
}

var Cobre = {};

Cobre._modules = {};

function LazyItem (callback) {
  var item = null

  var fn = function () { return (item || (item = callback())).apply(null, arguments) }

  fn.resolve = function () { return item || (item = callback()) }

  var fields = ["get", "test", "wrap", "unwrap", "build", "equals"]
  fields.forEach(function (field) {
    fn[field] = function (...args) {
      return LazyItem(function () {
        return (item || (item = callback()))[field].apply(item, args)
      })
    }
  })

  return fn
}

Cobre.$import = function $import (name) {
  return Cobre._modules[name] || LazyItem(function () {
    var mod = Cobre._modules[name]
    if (!mod) throw new Error("module " + name + " not found")
    return mod
  })
}

Cobre.$export = function $export (name, mod) {
  if (Cobre._modules[name])
    console.warn("module " + name + " already exists")
  if (typeof mod === "function") mod = LazyItem(mod)
  Cobre._modules[name] = mod
}

Cobre.Module = function Module (data) { this.data = data }
Cobre.Module.prototype.get = function get (name) {
  if (this.data instanceof Function)
    return this.data(name)
  return this.data[name]
}

Cobre.Lazy = function (fn) {
  var val = null
  return function () {
    return val || (val = fn())
  }
}

Cobre.system = {
  println: function (msg) {
    console.log(msg)
  },
  exit: function () {
    if (typeof process !== "undefined") process.exit()
    else throw "Cobre Exit"
  },
  error: function (msg) {
    throw new Error(msg)
  },
  argv: (typeof argv !== "undefined")? argv : []
}

function teq (a, b) {
  if (a.equals) return a.equals(b)
  if (b.equals) return b.equals(a)
  return a === b
}

var typeCount = 0
Cobre.Type = function (base, name, equals) {
  this.wrap = function (val) { return {type: this, value: val} }
  this.test = function (val) { return val.type && teq(val.type, this) }
  this.unwrap = function (val) { return val.value }
}

Cobre.Any = new Cobre.Type(null, "Any")
Cobre.Int = {
  wrap: function (str) { return str },
  unwrap: function (any) { return any },
  test: function (any) { return typeof any === "number" }
}
Cobre.Bool = {
  wrap: function (str) { return str },
  unwrap: function (any) { return any },
  test: function (any) { return typeof any === "boolean" }
}

Cobre.Null = function (base) {
  Cobre.Type.call(this, null, "cobre.null")
  this.is_null = true
  this.base = base
  this.equals = function (t) {
    return t.is_null && teq(base, t.base)
  }
}
Cobre.Array = function (base) {
  Cobre.Type.call(this, null, "cobre.array")
  this.is_array = true
  this.base = base
  this.equals = function (t) {
    return t.is_array && teq(base, t.base)
  }
}
Cobre.Record = function (fields) {
  Cobre.Type.call(this, null, "cobre.record")
  this.is_record = true
  this.fields = fields
  this.equals = function (t) {
    if (!t.is_record || (t.fields.length != fields.length))
      return false
    for (var i = 0; i < fields.length; i++)
      if (!teq(fields[i], t.fields[i]))
        return false
    return true
  }
}
Cobre.Function = function (ins, outs) {
  Cobre.Type.call(this, null, "cobre.function")
  this.is_fn = true
  this.ins = ins
  this.outs = outs
  this.equals = function (t) {
    if (!t.is_fn
      || t.ins.length != ins.length
      || t.outs.length != outs.length)
      return false
    for (var i = 0; i < ins.length; i++)
      if (!teq(ins[i], t.ins[i]))
        return false
    for (var i = 0; i < outs.length; i++)
      if (!teq(outs[i], t.outs[i]))
        return false
    return true
  }
}

Cobre.Closure = {
  build: function (arg) {
    var fn = arg.get("0")
    return new Cobre.Module({
      "new": function (bound) {
        return function () {
          arguments[arguments.length++] = bound
          return fn.apply(null, arguments)
        }
      }
    })
  }
}

Cobre.String = {
  wrap: function (str) { return str },
  unwrap: function (any) { return any },
  test: function (any) { return typeof any === "string" },

  $new: function (buf) {
    if (typeof buf === "string") return buf
    var str = ""
    for (var i = 0; i < buf.length; i++)
      str += String.fromCharCode(buf[i])
    return decodeURIComponent(escape(str))
  },
  tobuf: function (str) {
    str = unescape(encodeURIComponent(str))
    var buf = new Uint8Array(str.length)
    for (var i = 0; i < str.length; i++)
      buf[i] = str.charCodeAt(i)
    return buf
  },
  charat: function (str, i) { return [str[i], i+1] }
}

var fs = $require("fs")
if (fs) Cobre.$export("cobre\x1fio", new Cobre.Module({
  r: function () {return "r"},
  w: function () {return "w"},
  a: function () {return "a"},
  open: function (path, mode) {
    return {f: fs.openSync(path, mode), size: fs.statSync(path).size, pos: 0}
  },
  close: function (file) { fs.closeSync(file.f) },
  read: function (file, size) {
    var buf = new Uint8Array(size)
    var redd = fs.readSync(file.f, buf, 0, size, file.pos)
    file.pos += redd
    return buf.slice(0, redd)
  },
  write: function (file, buf) {
    var written = fs.writeSync(file.f, buf, 0, buf.length, file.pos)
    file.pos += written
  },
  eof: function (file) { return file.pos >= file.size },
}))

if (typeof window !== "undefined")
  window.Cobre = Cobre
if (typeof module !== "undefined")
  module.exports = Cobre
})();
}).call(this,require('_process'))
},{"_process":11}],3:[function(require,module,exports){

function writeNodes (writer, nodes) {
  for (var i = 0; i < nodes.length; i++) {
    var stmt = nodes[i];
    if (stmt.write) stmt.write(writer);
    else if (stmt.use) writer.write(nodes[i].use() + ";");
    else writer.write("// ", JSON.stringify(nodes[i]));
  }
}

//=== Nodes ===//

function Assign (reg, expr) {
  this.reg = reg;
  this.expr = expr;

  this.use = function () { return this.reg.use() + " = " + this.expr.use() }
}

function Call (fn, args, outs) {
  this.fn = fn;
  this.args = args;
  this.outs = outs;

  this.use = function () {
    var args = this.args.map(function (arg) {return arg.use()});
    var left = "", right = "";
    if (this.outs != "inline") {
      if (this.outs.length > 1) {
        left = "var _r = ";
        for (var i = 0; i < this.outs.length; i++) {
          right += "; " + this.outs[i].use() + " = _r[" + i + "]";
        }
      } else if (this.outs.length == 1) {
        left = this.outs[0].use() + " = ";
      }
    }
    return left + this.fn.use(args) + right;
  }
}

function Return (args) {
  this.args = args;

  this.use = function () {
    if (this.args.length == 0) return "return";
    if (this.args.length == 1) return "return " + this.args[0].use();
    return "return [" + this.args.map(function (arg) {return arg.use()}).join(", ") + "]";
  }
}

function Label (id) {
  this.label = id;
  this.use = function () { return "// label " + this.label }
}

function Not (expr) {
  if (expr.isNot) return expr.expr
  if (expr == True) return False
  if (expr == False) return True
  return {
    expr: expr,
    isNot: true,
    use: function () { return "!" + this.expr.use() }
  }
}

function Or (a, b) {
  this.use = function () { return "(" + a.use() + " || " + b.use() + ")" }
}

var True  = {use: function () { return "true" }}
var False = {use: function () { return "false" }}



//=== Transformations ===//

function insertLabels (old, lbls) {
  var out = [];

  var insert = true;
  for (var i = 0; i < old.length; i++) {
    var stmt = old[i];
    if (insert || lbls.indexOf(i) >= 0) {
      out.push(new Label(i));
      insert = false;
    }
    if (!stmt.nop) out.push(stmt);
    if (stmt.isBranch) {
      insert = true;
      stmt.index = i;
    }
  }

  return out;
}

function expand (stmts) {
  // A register is propagated when the assignment that sets its value can be
  //   removed and the expression is moved directly where it is used.
  // An expression is said to be expanded when any of the values it uses
  //   is a register and it has been propagated.
  // Registers can only be propagated when doing so does not modify the order
  //   of execution of the expressions in the code, that is, when nothing is
  //   done between where they are evaluated and where they are used. In C-like
  //   languages, function arguments are evaluated in positional order and then
  //   the function is called with those values.
  // This is done before identifying control flow structures, so the statements
  //   with expressions are assignemnts, function calls and branches.
  // Removed statements are also processed because they contain previously
  //   propagated expressions and can be expanded further.
  // While processing statements, no expressions have been propagated, so all
  //   expressions are registers.
  // If a register is only used once and its assignment is known to be right
  //   before the statement that uses it, previous assignments are irrelevant
  //   and it can be expanded.

  function tryPropagate (stmt, reg) {
    if (reg.uses > 1) return false;
    if (stmt instanceof Assign && stmt.reg == reg) {
      stmt.remove = true;
      reg.prev = stmt.expr;
      reg.sets--;
      reg.uses--;
      return true;
    } else if (stmt instanceof Call && stmt.outs.length == 1 && stmt.outs[0] == reg) {
      stmt.outs = "inline";
      reg.prev = stmt;
      reg.sets--;
      reg.uses--;
      return true;
    }
    return false;
  }

  function getExpanded (reg) {
    while (reg.prev) {
      var prev = reg.prev;
      reg.prev = undefined;
      reg = prev;
    }
    return reg;
  }

  for (var i = stmts.length-1; i >= 0; i--) {
    var stmt = stmts[i];
    if (stmt instanceof Assign) {
      var prev = stmts[i-1];
      var reg = stmt.expr;
      tryPropagate(prev, reg);
    } else if (stmt instanceof Call) {
      var k = 1;
      for (var j = stmt.args.length - 1; j >= 0; j--) {
        var arg = stmt.args[j];
        var prev = stmts[i-k];
        if (tryPropagate(prev, arg)) k++
      }
    } else if (stmt.isBranch && stmt.cond) {
      var prev = stmts[i-1];
      var reg = stmt.cond;
      tryPropagate(prev, reg);
    }
  }

  var old = stmts;
  stmts = [];
  for (var i = 0; i < old.length; i++) {
    var stmt = old[i];
    if (stmt instanceof Assign) {
      if (stmt.reg.prev) continue;
      stmt.expr = getExpanded(stmt.expr);
      if (stmt.reg.uses == 0) stmt = stmt.expr;
    } else if (stmt instanceof Call) {
      for (var j = 0; j < stmt.args.length; j++) {
        stmt.args[j] = getExpanded(stmt.args[j]);
      }
      if (stmt.outs === "inline") continue;
    } else if (stmt.isBranch && stmt.cond) {
      stmt.cond = getExpanded(stmt.cond);
    }
    stmts.push(stmt);
  }
  return stmts;
}

function regularizeBranches (stmts) {
  for (var i = 0; i < stmts.length; i++) {
    var stmt = stmts[i]
    if (stmt.isBranch) {
      if (!stmt.cond) {
        stmt.cond = True
      } else if (stmt.neg) {
        stmt.cond = Not(stmt.cond)
        stmt.neg = false
      }
    }
  }
}

function removeGotos (stmts, fnName) {
  // Structured code generation:
  // Stupid papers do not include dates god dammit
  // "Taming Control Flow: A Structured Approach to Eliminating Goto Statements"
  //    Ana M. Erosa and Laurie J. Hendren

  var gotos = []
  var labels = {}
  var usedLabels = {}

  function getLabelReg (lbl) {
    var r = usedLabels[lbl]
    if (!r) {
      r = {use: function () {return "goto_" + lbl}}
      usedLabels[lbl] = r
    }
    return  r
  }

  function Block (stmts, parent) {
    this.stmts = stmts

    this.lineage = [this]
    this.level = 1
    this.setParent = function (parent) {
      this.parent = parent
      this.lineage = parent.lineage.slice(0)
      this.lineage.push(this)
      this.level = this.lineage.length
      for (var i = 0; i < this.stmts.length; i++) {
        if (stmt.body !== undefined) stmt.body.setParent(this)
      }
    }
    if (parent) this.setParent(parent)

    this.calculateOffsets = function () {
      for (var i = 0; i < this.stmts.length; i++) {
        var stmt = this.stmts[i]
        if (stmt.isBranch || stmt.label !== undefined) {
          stmt.offset = i
          stmt.block = this
        }
        if (stmt.body !== undefined) {
          stmt.body.offset = i
          stmt.body.setParent(this)
        }
      }
    }

    this.slice = function (start, end) { return this.stmts.slice(start, end) }

    this.replace = function (start, end, item) {
      this.stmts.splice(start, end-start, item)
      this.calculateOffsets()
    }

    this.insert = function (pos, item) {
      this.stmts.splice(pos, 0, item)
      this.calculateOffsets()
    }

    this.direct = function (other) {
      var min = Math.min(this.level, other.level)
      for (var i = 0; i < min; i++) {
        if (this.lineage[i] != other.lineage[i]) return false
      }
      return true
    }

    this.calculateOffsets()
  }

  function Break (cond, target) {
    this.cond = cond
    this.target = target
    this.use = function () { return "if (" + this.cond.use() + ") break " + this.target.name }
  }

  function Continue (cond, target) {
    this.cond = cond
    this.target = target
    this.use = function () { return "if (" + this.cond.use() + ") continue " + this.target.name }
  }

  function If (body, cond) {
    this.isIf = true
    this.body = body
    this.cond = Not(cond)
    body.container = this
    this.write = function (writer) {
      var cond = this.cond ? this.cond.use() : "true"
      writer.write("if (", cond, ") {")
      writer.indent();
      writeNodes(writer, this.body.stmts);
      writer.dedent();
      writer.write("}");
    }
  }

  var loopcount = 1
  function Loop (body, cond, startlbl, breaklbl) {
    this.isLoop = true
    this.body = body
    body.container = this
    this.name = "loop_" + (loopcount++)

    var stmts = body.stmts

    for (var i = 0; i < stmts.length; i++) {
      var stmt = stmts[i]
      if (stmt.isBranch && stmt.lbl === breaklbl) {
        stmts[i] = new Break(stmt.cond, this)
        gotos.splice(gotos.indexOf(stmt), 1)
      }
      if (stmt.isBranch && stmt.lbl === startlbl) {
        stmts[i] = new Continue(stmt.cond, this)
        gotos.splice(gotos.indexOf(stmt), 1)
      }
    }

    if (cond != True) stmts.push(new Break(Not(cond), this))

    this.cond = True
    if (stmts[0] instanceof Break && stmts[0].target == this) {
      this.cond = Not(stmts.shift().cond)
    }

    body.calculateOffsets()

    this.write = function (writer) {
      writer.write(this.name + ": while (", this.cond.use(), ") {");
      writer.indent();
      writeNodes(writer, this.body.stmts);
      writer.dedent();
      writer.write("}")
    }
  }

  for (var i = 0; i < stmts.length; i++) {
    var stmt = stmts[i]
    if (stmt.isBranch) {
      gotos.push(stmt)
    } else if (stmt.label) {
      labels[stmt.label] = stmt
    }
  }

  var topBlock = new Block(stmts)

  mainloop:
  while (gotos.length > 0) {
    var stmt = gotos.pop()
    var label = labels[stmt.lbl]

    if (!label) {
      console.warn("WARNING: A goto in " + fnName + " goes to non-existing label " + stmt.lbl)
      continue mainloop
    }

    var block = stmt.block

    // Move outwards until direct and the goto not inmost
    while (!block.direct(label.block) || block.level > label.block.level) {
      var reg = getLabelReg(label.label)
      if (block.container instanceof Loop) {
        block.replace(stmt.offset, stmt.offset+1, new Break(reg, block.container))
      } else {
        var inner = block.slice(stmt.offset+1, block.stmts.length)
        var body = new Block(inner, block)
        var ifstmt = new If(body, reg)
        block.replace(stmt.offset, block.stmts.length, ifstmt)
      }
      block.insert(stmt.offset, new Assign(reg, stmt.cond))
      stmt.cond = reg
      block.parent.insert(block.offset+1, stmt)
      block = stmt.block
    }

    // Already direct, move inwards until siblings
    while (block.level < label.block.level) {
      var nextblock = label.block.lineage[block.level]
      if (nextblock.offset < stmt.offset) {
        throw new Exception("Goto Lifting not implemented")
        continue mainloop
      } else {
        var reg = getLabelReg(label.label)
        var inner = block.slice(stmt.offset+1, nextblock.offset)
        var body = new Block(inner, block)
        var ifstmt = new If(body, reg)
        block.replace(stmt.offset, nextblock.offset, ifstmt)
        block.insert(stmt.offset, new Assign(reg, stmt.cond))
        nextblock.container.cond = new Or(reg, nextblock.container.cond)
        nextblock.insert(0, stmt)
        stmt.cond = reg
        block = stmt.block
      }
    }

    // Guaranteed to be siblings... I think
    if (stmt.offset < label.offset) {
      // The label must end up outside the if, because the gotos are
      // processed bottom up and no inner structure will use the labels
      // again
      if (stmt.offset+1 == label.offset) {
        block.replace(stmt.offset, label.offset+1, label)
      } else {
        var inner = block.slice(stmt.offset+1, label.offset)
        var body = new Block(inner, block)
        var ifstmt = new If(body, stmt.cond)
        block.replace(stmt.offset, label.offset, ifstmt)
      }
    } else {
      // The label must end up outside the loop, because any inner goto
      // using it must necessarily be a continue statement
      var inner = block.slice(label.offset+1, stmt.offset)
      var body = new Block(inner, block)
      var breakstmt = block.stmts[stmt.offset+1]
      var breaklbl = breakstmt ? block.stmts[stmt.offset+1].label : null
      var ifstmt = new Loop(body, stmt.cond, label.label, breaklbl)
      block.replace(label.offset+1, stmt.offset+1, ifstmt)
    }
    var reg = usedLabels[label.label]
    if (reg) {
      label.block.insert(label.offset, new Assign(reg, False))
    }
  }

  if (Object.keys(usedLabels).length) {
    topBlock.stmts.unshift({
      use: function () {
        var names = []
        for (var key in usedLabels) {
          names.push(usedLabels[key].use() + "=false")
        }
        return "var " + names.join(", ")
      }
    })
  }

  return topBlock.stmts
}

function cleanUp (old) {
  var stmts = []
  for (var i = 0; i < old.length; i++) {
    var stmt = old[i]
    if (stmt instanceof Label) continue
    if (stmt.isIf) {
      if (stmt.cond == False) continue
      var body = cleanUp(stmt.body.stmts)
      if (stmt.cond == True) {
        stmts = stmts.join(body)
        continue
      } else {
        stmt.body.stmts = body
      }
    } else if (stmt.isLoop) {
      var body = cleanUp(stmt.body.stmts)
      stmt.body.stmts = body
    }
    stmts.push(stmt)
  }
  return stmts
}


//=== Main Interface ===//

function Code (fn, getfn) {
  this._fn = fn;
  this._getfn = getfn;

  this.ins = fn.ins;
  this.outs = fn.outs;
}

Code.prototype.build = function () {
  var fn = this._fn;

  var lbls = [];
  var regs = {};
  var regc = 0;

  function Reg (id, set) {
    if (this instanceof Reg) {
      this.id = id;
      this.uses = 0;
      this.sets = 0;
    } else {
      var reg;
      if (regs[id]) {
        reg = regs[id];
      } else {
        var reg = new Reg(id);
        regs[id] = reg;
      }
      if (set) reg.sets++;
      else reg.uses++;
      return reg;
    }
  }
  Reg.prototype.use = function () { return "reg_" + this.id; }

  function Branch (lbl, cond, neg) {
    this.isBranch = true;
    this.lbl = lbl;
    this.cond = cond;
    this.neg = Boolean(neg);
    lbls.push(lbl);
  }
  Branch.prototype.use = function () {
    if (this.cond) {
      var cond = this.cond.use();
      if (this.neg) cond = "!" + cond;
      return "if (" + cond + ") { goto(" + this.lbl + "); }";
    }
    return "goto(" + this.lbl + ")";
  }

  for (var i = 0; i < fn.ins.length; i++) { Reg(regc++, true) }

  var stmts = [];

  for (var i = 0; i < fn.code.length; i++) {
    var stmt = undefined;
    var inst = fn.code[i];
    var k = inst.type;
    if (k=="hlt") stmt = new Halt();
    if (k=="var") {Reg(regc++, true); stmt = {nop: true};}
    if (k=="dup") stmt = new Assign(Reg(regc++, true), Reg(inst.a));
    if (k=="set") stmt = new Assign(Reg(inst.a, true), Reg(inst.b));
    if (k=="jmp") stmt = new Branch(inst.a);
    if (k=="jif") stmt = new Branch(inst.a, Reg(inst.b));
    if (k=="nif") stmt = new Branch(inst.a, Reg(inst.b), true);
    if (k=="call") {
      var ff = this._getfn(inst.index);
      var args = inst.args.map(function (x) {return Reg(x);});
      var outs = [];
      for (var j = 0; j < ff.outs.length; j++) {
        outs.push(Reg(regc++, true));
      }
      stmt = new Call(ff, args, outs);
    }
    if (k=="end") {
      var args = inst.args.map(function (x) {return Reg(x);});
      stmt = new Return(args);
    }
    if (stmt === undefined) throw new Error("Unknown instruction " + k);
    else if (stmt) stmts.push(stmt);
  }

  regs.length = regc;

  stmts = insertLabels(stmts, lbls)
  stmts = expand(stmts)
  regularizeBranches(stmts)

  stmts = removeGotos(stmts, this.fnName)
  stmts = cleanUp(stmts)

  this.ast = stmts;
  this.regs = regs;
  
  var args = [], regs = [];
  for (var i = 0; i < this.ins.length; i++)
    args.push(this.regs[i].use());
  for (var i = this.ins.length; i < this.regs.length; i++) {
    var reg = this.regs[i];
    if (reg && reg.uses > 0 && reg.sets > 0) {
      regs.push(reg.use());
    }
  }

  this.regs = regs
  this.args = args
}

Code.prototype.compile = function (writer) {
  writer.write("function ", this.name, " (" + this.args.join(", ") + ") {");
  writer.indent();

  if (this.regs.length > 0) {
    writer.write("var " + this.regs.join(", ") + ";");
  }
  writeNodes(writer, this.ast);
  writer.dedent();
  writer.write("}");
}

Code.prototype.use = function (args) { return this.name + "(" + args.join(", ") + ")"; }

module.exports = Code;
},{}],4:[function(require,module,exports){
(function (Buffer){

const parse = require("./parse.js")
const Writer = require("./writer.js")
const Code = require("./code.js")
const macros = require("./macros.js")

const macro_modules = macros.modules
const macro = macros.macro

const Cobre = require("./cobre.js")

var modLoader = function () { return null }

function escape (_str) {
  var str = ""
  for (var j = 0; j < _str.length; j++) {
    var code = _str.charCodeAt(j)
    var char = _str[j]
    if (char == '"') char = "\\\""
    else if (char == '\\') char = "\\\\"
    else if (char == "\n") char = "\\n"
    else if (char == "\t") char = "\\t"
    else if (code < 32 || code == 127) {
      var s = code.toString(16)
      while (s.length < 2) s = "0" + s
      char = "\\x" + s
    }
    str += char
  }
  return '"' + str + '"'
}

var reservedNames =  [
  // https://www.w3schools.com/js/js_reserved.asp
  "abstract", "await", "arguments", "boolean",
  "break", "byte", "case", "catch",
  "char", "class", "const", "continue",
  "debugger", "default", "delete", "do",
  "double", "else", "enum", "eval",
  "export", "extends", "false", "final",
  "finally", "float", "for", "function",
  "goto", "if", "implements", "import",
  "in", "instanceof", "int", "interface",
  "let", "long", "native", "new",
  "null", "package", "private", "protected",
  "public", "return", "short", "static",
  "super", "switch", "synchronized", "this",
  "throw", "throws", "transient", "true",
  "try", "typeof", "var", "void",
  "volatile", "while", "with", "yield",
  // Other keywords
  "undefined", "NaN", "Infinity",
  // Global Objects
  "Object", "Function", "Boolean", "Error", "Number", "Math", "String", "Array",
  // Browser specific
  "document", "window", "console",
  // NodeJS specific
  "global", "require", "module", "process", "Buffer",
  // Cobre
  "Cobre"
];


function compile (data, moduleName) {
  var parsed = parse(data)
  var toCompile = []
  var modcache = {};
  var sourcemap = {};

  var nameSet = {}

  reservedNames.forEach(function (name) {nameSet[name] = true})

  function findName (orig, modname) {
    function normalize (name) {
      name = name.replace(/[^$\w]+/g, "_")
      if (name.match(/^\d/)) name = "_"+name
      return name
    }
    var name = normalize(orig)
    if (nameSet[name] && modname)
      name = normalize(modname + "$" + orig)
    var i = 1
    while (nameSet[name]) {
      name = normalize(orig + "$" + i++)
    }
    nameSet[name] = true
    return name
  }

  function tryPush (item, itemtype) {
    var index = toCompile.indexOf(item)
    if (index < 0) {
      if (!item.name)
        item.name = findName((itemtype || "item") + toCompile.length)
      toCompile.push(item)
    }
  }

  var fnCount = 0, tpCount = 0, modCount = 0, cnsCount = 0

  function Item (line, name) {
    if (!name) name = "item" + toCompile.length

    this.name = name
    this.compile = function (writer) { writer.write("var " + name + " = " + line + ";") }

    // For modules
    this.get = function (iname) { return new Item(name + ".get(" + escape(iname) + ")", findName(iname, name)) }
    this.build = function (arg) { return new Item(name + ".build(" + arg.name + ")") }

    // For functions
    this.use = function (args) { return name + "(" + args.join(", ") + ")" }

    toCompile.push(this)
  }

  function get_module (n) {
    if (modcache[n]) {
      var m = modcache[n]
      tryPush(m)
      return m
    }
    var mdata = parsed.modules[n-1]
    if (mdata.type == "build") {
      var base = get_module(mdata.base)
      var arg = get_module(mdata.argument)
      if (!base.build) console.log(base)
      var mod = base.build(arg)
      if (mod instanceof Item) mod.name = findName(base.name)
      modcache[n] = mod
      return mod
    }
    if (mdata.type == "import") {
      var mod = macro_modules[mdata.name]
      if (!mod) mod = modLoader(mdata.name)
      if (!mod) mod = new Item("Cobre.$import(" + escape(mdata.name) + ")", findName(mdata.name))
      modcache[n] = mod;
      return mod
    }
    if (mdata.type == "define") {
      var name = "mod" + ++modCount
      var items = {}
      for (var i = 0; i < mdata.items.length; i++) {
        var item = mdata.items[i]
        items[item.name] = {
          type: item.type,
          index: item.index,
          value: null
        }
      }
      function getItem (name) {
        var item = items[name]
        if (!item) return null
        if (!item.value) {
          if (item.type == "function")
            item.value = get_function(item.index)
          else if (item.type == "type")
            item.value = get_type(item.index)
          else if (item.type == "module")
            item.value = get_module(item.index)
        }
        return item.value
      }
      var mod = {
        name: name,
        get: function (iname) { return getItem(iname, findName(iname, name)) },
        build: function () { throw new Error("module is not a functor"); },
        compile: function (writer) {
          writer.write("var " + name + " = new Cobre.Module({")
          writer.indent()
          for (var nm in items) {
            var item = getItem(nm)
            writer.write(escape(nm), ": ", item.name, ",")
          }
          writer.dedent()
          writer.write("});")
        }
      }
      modcache[n] = mod;
      for (var nm in items) getItem(nm)
      toCompile.push(mod);
      return mod;
    }
    if (mdata.type == "use") {
      var mod = get_module(mdata.module)
      var item = mod.get(mdata.item)
      if (!item) throw new Error("Module", mdata.item, "not found in", mod)
      tryPush(item)
      modcache[n] = item
      return item
    }
    throw new Error(mdata.type + " modules not yet supported");
  }

  var funcache = {};
  function get_function (n) {
    if (funcache[n]) return funcache[n];
    var fn = parsed.functions[n];
    var f;
    if (fn.type == "import") {
      var mod = get_module(fn.module)
      f = mod.get(fn.name)
      if (f instanceof Item) {
        f.name = findName("fn" + ++fnCount)
        f.ins = fn.ins
        f.outs = fn.outs
      }
      tryPush(f)
    } else if (fn.type == "code") {
      f = new Code(fn, get_function);
      if (sourcemap[n] && sourcemap[n].name) {
        f.name = findName(sourcemap[n].name, moduleName)
      } else {
        f.name = findName("fn" + ++fnCount)
      }
      f.fnName = f.name
    } else if (fn.type == "int") {
      f = macro(String(fn.value), 0, 1);
    } else if (fn.type == "bin") {
      var str = "\"";
      for (var j = 0; j < fn.data.length; j++) {
        var code = fn.data[j]
        var char = String.fromCharCode(code)
        if (char == '"') {char = "\\\""}
        else if (char == "\n") {char = "\\n"}
        else if (char == "\t") {char = "\\t"}
        else if (code < 32) {
          var s = code.toString(16)
          while (s.length < 2) s = "0" + s
          char = "\\x" + s
        }
        str += char;
      }
      str += "\"";
      f = macro(str, 0, 1);
      f.bytes = fn.data
    } else if (fn.type == "call") {
      var cfn = get_function(fn.index);
      if (cfn == macro_modules["cobre\x1fstring"].data["new"]) {
        var bytes = get_function(fn.args[0]).bytes
        if (bytes instanceof Array) {
          // This is necessary to correctly read multi-byte characters
          var _str = String(Buffer.from(bytes))
          var str = ""
          for (var j = 0; j < _str.length; j++) {
            var code = _str.charCodeAt(j)
            var char = _str[j]
            if (char == '"') char = "\\\""
            else if (char == '\\') char = "\\\\"
            else if (char == "\n") char = "\\n"
            else if (char == "\t") char = "\\t"
            else if (code < 32 || code == 127) {
              var s = code.toString(16)
              while (s.length < 2) s = "0" + s
              char = "\\x" + s
            }
            str += char;
          }
          f = macro('"'+str+'"', 0, 1);
        }
      } else {
        var args = fn.args.map(function (ix) {
          return get_function(ix).use([]);
        });
        var expr = cfn.use(args);
        if (cfn.pure) {
          f = macro(expr, 0, 1);
        } else {
          var name = "cns" + ++cnsCount;
          toCompile.push({
            compile: function (writer) {
              writer.write("var " + name + " = Cobre.Lazy(function () { return " + expr + "});")
            }
          });
          f = {ins: [], outs: [-1], use: function () {return name + "()";}};
        }
      }
    } else {
      throw new Error("Unsupported function kind " + fn.type);
    }
    funcache[n] = f;
    if (f instanceof Code) {
      f.build()
      toCompile.push(f)
    }
    return f;
  }

  var tpcache = {};
  function get_type (n) {
    if (tpcache[n]) return tpcache[n]
    var tp = parsed.types[n]
    var mod = get_module(tp.module)
    var t = mod.get(tp.name)
    tpcache[n] = t
    if (!t.name) t.name = "tp" + ++tpCount
    tryPush(t, "type")
    return t
  }

  function getNode (node, name) {
    if (node instanceof Object) {
      for (k in node) {
        var x = node[k];
        if (x instanceof Object && x[0] === name) {
          return x;
        }
      }
    }
  }

  var srcnode = getNode(parsed.metadata, "source map");
  if (srcnode) {
    var file_node = getNode(srcnode, "file")
    var file = file_node ? file_node[1] : "file"
    for (var i = 1; i < srcnode.length; i++) {
      var item = srcnode[i]
      if (item[0] == "function") {
        var index = item[1];
        var name_node = getNode(item, "name")
        var line_node = getNode(item, "line")
        if (getNode(item, "name")) name = 
        sourcemap[index] = {
          file: file,
          name: name_node ? name_node[1] : "",
          line: line_node ? line_node[1] : "",
        }
      }
    }
  }

  var mod = get_module(1);

  var writer = new Writer()
  writer.write("Cobre.$export(", escape(moduleName), ", function () {")
  writer.indent()

  while (toCompile.length > 0) {
    var item = toCompile.shift()
    if (item.compile) {
      item.compile(writer)
    }
  }

  writer.write("return ", mod.name, ";")

  writer.dedent()
  writer.write("});")

  return writer.text
}

exports.setModuleLoader = function (fn) { modLoader = fn }
exports.escape = escape
exports.compile = compile

}).call(this,require("buffer").Buffer)
},{"./cobre.js":2,"./code.js":3,"./macros.js":5,"./parse.js":6,"./writer.js":7,"buffer":9}],5:[function(require,module,exports){

var types = [];

var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("")

function newType (name, line) {
  var tp = {name: name, id: types.length, compile: function (writer) {
    if (line) writer.write("var " + this.name + " = " + line + ";");
  }};
  types.push(tp)
  return tp
}

function BaseModule (data) {
  this.data = data
  this.get = function (name) {
    var val = data[name]
    if (!val) throw new Error(name + " not found in module")
    return val
  }
}

function macro (str, inc, outc) {
  var m = {
    type: "macro", macro: str,
    ins: new Array(inc), outs: new Array(outc),
    use: function (args) {
      var expr = this.macro;
      for (var i = 0; i < this.ins.length; i++) {
        var patt = new RegExp("\\$" + (i+1), "g");
        expr = expr.replace(patt, args[i]);
      }
      return expr;
    },
  }
  var args = alphabet.slice(0, inc)
  m.name = "(function (" + args.join(",") + ") {return " + m.use(args) + "})"
  return m
}

var recordcache = {}
var arraycache = {}

var anyModule = new BaseModule({ "any": newType("Cobre.Any") })

var macro_modules = {
  "cobre\x1fbool": new BaseModule({
    "bool": newType("Cobre.Bool"),
    "true": macro("true", 0, 1),
    "false": macro("false", 0, 1),
    "not": macro("!$1", 1, 1),
  }),
  "cobre\x1fsystem": new BaseModule({
    "println": macro("Cobre.system.println($1)", 1, 0),
    "error": macro("Cobre.system.error($1)", 1, 0),
    "exit": macro("Cobre.system.exit()", 0, 0),
    argc: macro("Cobre.system.argv.length", 0, 1),
    argv: macro("Cobre.system.argv[$1]", 1, 1),
  }),
  "cobre\x1fint": new BaseModule({
    "int": newType("Cobre.Int"),
    "add": macro("($1 + $2)", 2, 1),
    "sub": macro("($1 - $2)", 2, 1),
    "mul": macro("($1 * $2)", 2, 1),
    "div": macro("(($1 / $2) | 0)", 2, 1),
    "eq": macro("($1 == $2)", 2, 1),
    "ne": macro("($1 != $2)", 2, 1),
    "gt": macro("($1 > $2)", 2, 1),
    "lt": macro("($1 < $2)", 2, 1),
    "ge": macro("($1 >= $2)", 2, 1),
    "le": macro("($1 <= $2)", 2, 1),
  }),
  "cobre\x1fstring": new BaseModule({
    "string": newType("Cobre.String"),
    "new": macro("Cobre.String.$new($1)", 1, 1),
    "itos": macro("String($1)", 1, 1),
    "concat": macro("($1 + $2)", 2, 1),
    "add": macro("($1 + $2)", 2, 1),
    "eq": macro("($1 == $2)", 2, 1),
    "length": macro("$1.length", 1, 1),
    "charat": macro("Cobre.String.charat($1, $2)", 2, 2),
    "newchar": macro("String.fromCharCode($1)", 1, 1),
    "codeof": macro("$1.charCodeAt(0)", 1, 1),
    "tobuffer": macro("Cobre.String.tobuf($1)", 1, 1),
  }),
  "cobre\x1fbuffer": new BaseModule({
    "new": macro("new Uint8Array($1)", 1, 1),
    get: macro("$1[$2]", 2, 1),
    set: macro("$1[$2]=$3", 3, 0),
    size: macro("$1.length", 1, 1),
    readonly: macro("false", 1, 1),
  }),
  "cobre\x1farray": {build: function (arg) {
    var base = arg.get("0");
    var mod = arraycache[base.id];
    if (mod) return mod;
    var tp = newType(null, "new Cobre.Array(" + base.name + ")");
    mod = new BaseModule({
      "": tp,
      "new": macro("new Array($2).fill($1)", 2, 1),
      "empty": macro("[]", 0, 1),
      "get": macro("$1[$2]", 2, 1),
      "set": macro("$1[$2]=$3", 3, 0),
      "len": macro("$1.length", 1, 1),
      "push": macro("$1.push($2)", 2, 0),
    });
    arraycache[base.id] = mod;
    return mod;
  } },
  "cobre\x1fany": {
    build: function (arg) {
      var base = arg.get("0");
      if (!base) return anyModule;
      var id = base.id;
      return { "get": function (name) {
        if (name == "new") return macro(base.name + ".wrap($1)", 1, 1);
        if (name == "test") return macro(base.name + ".test($1)", 1, 1);
        if (name == "get") return macro(base.name + ".unwrap($1)", 1, 1);
      } };
    },
    get: function (name) {
      if (name == "any") return anyModule.data.any;
    }
  },
  "cobre\x1fnull": { build: function (arg) {
    var base = arg.get("0");
    var tp = newType("new Cobre.Null(" + base.name + ")");
    return new BaseModule({
      "": tp,
      "null": macro("null", 0, 1),
      "new": macro("$1", 1, 1),
      "get": macro("$1", 1, 1),
      "isnull": macro("($1 === null)", 1, 1),
    });
  } },
  "cobre\x1frecord": { build: function (arg) {
    var arr = [];
    var names = [];
    var i = 0;
    while (true) {
      var a = arg.get(String(i));
      if (!a) break;
      arr.push(a.id);
      names.push(a.name);
      i++;
    }
    var id = arr.join(",");

    var mod = recordcache[id];
    if (mod) return mod;

    var tp = newType(null, "new Cobre.Record([" + names.join(",") + "])");

    mod = { "get": function (name) {
      if (name == "new") {
        return {ins: [], outs: [0], use: function (args) {
          return "[" + args.join(", ") + "]";
        }};
      }
      var a = name.slice(0, 3);
      var n = name.slice(3);
      if (a == "") return tp;
      if (a == "get") return macro("$1[" + n + "]", 1, 1);
      if (a == "set") return macro("$1[" + n + "] = $2", 2, 0);
    } };

    recordcache[id] = mod;
    return mod;
  } },
  "cobre\x1ftypeshell": {build: function (arg) {
    // Each time it's called, a new type is created
    return new BaseModule({
      "": newType(null, "new Cobre.Type()"),
      "new": macro("$1", 1, 1),
      "get": macro("$1", 1, 1),
    });
  } },
  "cobre\x1ffunction": { build: function (arg) {
    var inlist = [];
    var innames = [];
    var outlist = [];
    var outnames = [];

    var i = 0;
    while (true) {
      var a = arg.get("in" + String(i));
      if (!a) break;
      inlist.push(a.id);
      innames.push(a.name);
      i++;
    }

    var i = 0;
    while (true) {
      var a = arg.get("out" + String(i));
      if (!a) break;
      outlist.push(a.id);
      outnames.push(a.name);
      i++;
    }

    var id = inlist.join(",") + "->" + outlist.join(",");

    var mod = recordcache[id];
    if (mod) return mod;

    var tp = newType(null, "new Cobre.Function([" + innames.join(",") + "], [" + outnames.join(",") + "])");

    var argnames = alphabet.slice(0, inlist.length)

    function createDefinition (fn, last) {
      var args = argnames.slice()
      if (last) args.push(last)
      return "(function (" + argnames.join(",") + ") {return " + fn.use(args) + "})"
    }

    mod = new BaseModule({
      "": tp,
      "apply": {
        ins: inlist,
        outs: outlist,
        use: function (fargs) {
          return fargs[0] + "(" + fargs.slice(1).join(", ") + ")"
        }
      },
      "new": { build: function (args) {
        var fn = args.get("0")

        return new BaseModule({"": {
          ins: inlist,
          outs: outlist,
          use: function (fargs) { return fn.name }
        }})
      } },
      closure: {
        name: "Cobre.Closure",
        build: function (args) {
          var fn = args.get("0")

          return new BaseModule({"new": {
            ins: inlist,
            outs: outlist,
            use: function (fargs) {
              var def = createDefinition(fn, "this")
              return def + ".bind(" + fargs[0] + ")"
            }
          }});
        }
      }
    });
    mod.name = "function" + tp.name
    recordcache[id] = mod;
    return mod;
  } },
}

exports.macro = macro
exports.modules = macro_modules
},{}],6:[function(require,module,exports){
(function (process){
module.exports = function parse (buffer) {

buffer = new Uint8Array(buffer);
var pos = 0;

function fail (msg) { console.log(msg + ". at byte " + pos.toString(16)); process.exit(1); }
function unsupported (msg) { fail("Unsupported " + msg); }

function readByte () {
  if (pos >= buffer.length)
    fail("Unexpected end of file");
  return buffer[pos++];
}

function readInt () {
  var n = 0;
  var b = readByte();
  while ((b & 0x80) > 0) {
    n = (n << 7) | (b & 0x7f);
    b = readByte();
  }
  return (n << 7) | (b & 0x7f);
}

function readStr () {
  var len = readInt();
  var str = "";
  while (len > 0) {
    byte = readByte();
    str += String.fromCharCode(byte);
    len--;
  }
  return str;
}

function parseN (n, f) {
  var arr = [];
  for (var i = 0; i < n; i++)
    arr.push(f());
  return arr;
}

function readInts (n) { return parseN(n, readInt); }

var magic = "";
while (true) {
  var byte = readByte();
  if (byte == 0) break;
  magic += String.fromCharCode(byte);
}
if (magic !== "Cobre 0.6") fail("Not a Cobre 0.6 module");

var modules = parseN(readInt(), function () {
  var k = readInt();
  switch (k) {
    case 0: fail("Unknown import");
    case 1: return {
      type: "import",
      name: readStr(),
    };
    case 2: return {
      type: "define",
      items: parseN(readInt(), function () {
        var types = ["module", "type", "function", "const"];
        var k = readInt();
        if (k > 3) fail("Unknown item kind " + k);
        return {
          type: types[k],
          index: readInt(),
          name: readStr(),
        }
      })
    };
    case 3: return {
      type: "use",
      module: readInt(),
      item: readStr(),
    };
    case 4: return {
      type: "build",
      base: readInt(),
      argument: readInt(),
    };
    default: fail("Unknown import kind " + k);
  }
});

var types = parseN(readInt(), function () {
  var k = readInt();
  if (k == 0) fail("Null type");
  return {
    type: "import",
    module: k-1,
    name: readStr(),
  };
});

var functions = parseN(readInt(), function () {
  var k = readInt();
  var f;
  switch (k) {
    case 0: fail("Null function");
    case 1: f = {
      type: "code"
    }; break;
    default: f = {
      type: "import",
      module: k-2,
    };
  }
  f.ins = parseN(readInt(), readInt);
  f.outs = parseN(readInt(), readInt);
  if (k>1) f.name = readStr();
  return f;
});

var constCount = readInt();
for (var i = 0; i < constCount; i++) {
  var f;
  var k = readInt();
  if (k == 1) {
    f = {type: "int", value: readInt()};
  } else if (k == 2) {
    var len = readInt();
    var arr = [];
    for (var j = 0; j < len; j++)
      arr.push(readByte());
    f = {
      type: "bin",
      data: arr,
    };
  } else if (k < 16) {
    fail("Unknown constant kind " + k);
  } else {
    var ix = k-16;
    // Functions not yet in the function list are constants
    var argcount = (ix >= functions.length)? 0 : functions[ix].ins.length;
    f = {
      type: "call",
      index: ix,
      args: readInts(argcount),
    };
  }
  f.ins = [];
  f.outs = [-1];
  functions.push(f);
}

function parseCode (fn) {
  function one (tp) { return {type: tp, a: readInt()}; }
  function two (tp) { return {type: tp, a: readInt(), b: readInt()}; }
  var count = readInt();
  return parseN(count, function () {
    var k = readInt();
    switch (k) {
      case 0: return {
        type: "end",
        args: readInts(fn.outs.length)
      };
      case 1: return {type: "hlt"};
      case 2: return {type: "var"};
      case 3: return one("dup");
      case 4: return two("set");
      case 5: return one("jmp");
      case 6: return two("jif");
      case 7: return two("nif");
    }
    if (k < 16) fail("Unknown instruction " + k);
    var ix = k-16;
    if (ix >= functions.length)
      fail("Function index out of bounds");
    var ff = functions[ix];
    return {
      type: "call",
      index: ix,
      args: readInts(ff.ins.length),
    }
  });
}

for (var i = 0; i < functions.length; i++) {
  var fn = functions[i];
  if (fn.type == "code")
    fn.code = parseCode(fn);
}

function parseNode () {
  var n = readInt();
  if (n & 1) return n>>1;
  if (n & 2) {
    n = n >> 2;
    var str = "";
    while (n > 0) {
      byte = readByte();
      str += String.fromCharCode(byte);
      n--;
    }
    return str;
  }
  return parseN(n>>2, parseNode);
}

var metadata = parseNode();

return {
  modules: modules,
  types: types,
  functions: functions,
  metadata: metadata,
};

}
}).call(this,require('_process'))
},{"_process":11}],7:[function(require,module,exports){

function Writer (text) {
  if (!(this instanceof Writer)) return new Writer()
  this.text = text ? text + "\n" : ""
  this._pre = ""
}

Writer.prototype.indent = function () { this._pre += "  "; }
Writer.prototype.dedent = function () { this._pre = this._pre.slice(2); }

Writer.prototype.write = function () {
  var line = this._pre;
  for (var i = 0; i < arguments.length; i++) {
    line += arguments[i];
  }
  this.text += line + "\n";
}

Writer.prototype.append = function (string) {
  var lines = string.replace(/\n$/, "").split("\n")

  for (var i = 0; i < lines.length; i++) {
    lines[i] = this._pre + lines[i]
  }
  this.text += lines.join("\n") + "\n"
}

module.exports = Writer;

},{}],8:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],9:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

},{"base64-js":8,"ieee754":10}],10:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],11:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1]);
