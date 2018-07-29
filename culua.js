Cobre.$export("lua_lib\x1ftable", function () {
  var lua = Cobre.$import("lua");
  var nil = lua.get("nil");
  var mod2 = new Cobre.Module({
    "0": Cobre.Any,
    "1": Cobre.Any,
    "2": Cobre.Any,
  });
  var closure = lua.get("closure");
  var tp1 = new Cobre.Record([Cobre.Any,Cobre.Any,Cobre.Any]);
  var mod4 = new Cobre.Module({
    "0": tp1,
  });
  var next_Stack = lua.get("next\x1dStack");
  var tp2 = new Cobre.Record([tp1]);
  var mod6 = new Cobre.Module({
    "0": tp2,
  });
  var lua$int = lua.get("int");
  var cns1 = Cobre.Lazy(function () { return lua$int(1)});
  var add = lua.get("add");
  var get = lua.get("get");
  var tobool = lua.get("tobool");
  var newStack = lua.get("newStack");
  var push_Stack = lua.get("push\x1dStack");
  function function$1 (reg_0, reg_1) {
    var reg_5, reg_6, reg_9, reg_11, reg_12;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_6 = add(reg_6, cns1());
    reg_9 = get(reg_5, reg_6);
    if (tobool(reg_9)) {
      reg_11 = newStack();
      push_Stack(reg_11, reg_6);
      push_Stack(reg_11, reg_9);
      return reg_11;
    }
    reg_12 = newStack();
    return reg_12;
  }
  var mod5 = new Cobre.Module({
    "0": function$1,
  });
  var item27 = closure.build(mod5);
  var item27$new = item27.get("new");
  var lua$function = lua.get("function");
  var cns2 = Cobre.Lazy(function () { return lua$int(0)});
  function lua_lib_table$function (reg_0, reg_1) {
    var reg_3, reg_4, reg_6, reg_7;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_6 = lua$function(item27$new(reg_3));
    reg_7 = newStack();
    push_Stack(reg_7, reg_6);
    push_Stack(reg_7, reg_4);
    push_Stack(reg_7, cns2());
    return reg_7;
  }
  var mod3 = new Cobre.Module({
    "0": lua_lib_table$function,
  });
  var item33 = closure.build(mod3);
  var item33$new = item33.get("new");
  var string = lua.get("string");
  var cns3 = Cobre.Lazy(function () { return string("ipairs")});
  var set = lua.get("set");
  var mod8 = new Cobre.Module({
    "0": tp1,
  });
  var mod10 = new Cobre.Module({
    "0": tp2,
  });
  var cns4 = Cobre.Lazy(function () { return string("next")});
  var call = lua.get("call");
  var first_Stack = lua.get("first\x1dStack");
  function function$3 (reg_0, reg_1) {
    var reg_2, reg_5, reg_6, reg_9, reg_10, reg_13;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_9 = get(reg_2[0], cns4());
    reg_10 = newStack();
    push_Stack(reg_10, reg_5);
    push_Stack(reg_10, reg_6);
    reg_6 = first_Stack(call(reg_9, reg_10));
    reg_13 = newStack();
    push_Stack(reg_13, reg_6);
    push_Stack(reg_13, get(reg_5, reg_6));
    return reg_13;
  }
  var mod9 = new Cobre.Module({
    "0": function$3,
  });
  var item50 = closure.build(mod9);
  var item50$new = item50.get("new");
  function function$2 (reg_0, reg_1) {
    var reg_3, reg_4, reg_6, reg_7;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_6 = lua$function(item50$new(reg_3));
    reg_7 = newStack();
    push_Stack(reg_7, reg_6);
    push_Stack(reg_7, reg_4);
    push_Stack(reg_7, nil());
    return reg_7;
  }
  var mod7 = new Cobre.Module({
    "0": function$2,
  });
  var item54 = closure.build(mod7);
  var item54$new = item54.get("new");
  var cns5 = Cobre.Lazy(function () { return string("pairs")});
  var mod12 = new Cobre.Module({
    "0": tp1,
  });
  var cns6 = Cobre.Lazy(function () { return string("type")});
  var eq = lua.get("eq");
  var cns7 = Cobre.Lazy(function () { return string("number")});
  var cns8 = Cobre.Lazy(function () { return string("tostring")});
  var cns9 = Cobre.Lazy(function () { return string("string")});
  var cns10 = Cobre.Lazy(function () { return string("error")});
  var cns11 = Cobre.Lazy(function () { return string("bad argument #")});
  var cns12 = Cobre.Lazy(function () { return string(" for '")});
  var cns13 = Cobre.Lazy(function () { return string(" (expected string, got ")});
  var cns14 = Cobre.Lazy(function () { return string(")")});
  var concat = lua.get("concat");
  function function$4 (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_10, reg_11, reg_13, reg_15, reg_18, reg_24, reg_25, reg_30, reg_31, reg_37, reg_40, reg_41, reg_42, reg_43, reg_44, reg_53;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_7 = next_Stack(reg_0);
    reg_10 = get(reg_1[0], cns6());
    reg_11 = newStack();
    push_Stack(reg_11, reg_4);
    reg_13 = first_Stack(call(reg_10, reg_11));
    reg_15 = eq(reg_4, nil());
    if (tobool(reg_15)) {
      reg_15 = reg_5;
    }
    if (tobool(reg_15)) {
      reg_18 = newStack();
      push_Stack(reg_18, reg_5);
      return reg_18;
    }
    if (tobool(eq(reg_13, cns7()))) {
      reg_24 = get(reg_1[0], cns8());
      reg_25 = newStack();
      push_Stack(reg_25, reg_4);
      reg_4 = first_Stack(call(reg_24, reg_25));
    }
    reg_30 = get(reg_1[0], cns6());
    reg_31 = newStack();
    push_Stack(reg_31, reg_4);
    if (tobool(eq(first_Stack(call(reg_30, reg_31)), cns9()))) {
      reg_37 = newStack();
      push_Stack(reg_37, reg_4);
      return reg_37;
    }
    reg_40 = get(reg_1[0], cns10());
    reg_41 = newStack();
    reg_42 = cns11();
    reg_43 = cns12();
    reg_44 = cns13();
    push_Stack(reg_41, concat(reg_42, concat(reg_6, concat(reg_43, concat(reg_7, concat(reg_44, concat(reg_13, cns14())))))));
    reg_52 = call(reg_40, reg_41);
    reg_53 = newStack();
    return reg_53;
  }
  var mod11 = new Cobre.Module({
    "0": function$4,
  });
  var item72 = closure.build(mod11);
  var item72$new = item72.get("new");
  var mod14 = new Cobre.Module({
    "0": tp1,
  });
  var cns15 = Cobre.Lazy(function () { return string("i")});
  var cns16 = Cobre.Lazy(function () { return string("tonumber")});
  var cns17 = Cobre.Lazy(function () { return string(" (expected number, got ")});
  function function$5 (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_10, reg_11, reg_16, reg_18, reg_21, reg_27, reg_28, reg_33, reg_34, reg_40, reg_43, reg_44, reg_45, reg_46, reg_47, reg_56;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_7 = next_Stack(reg_0);
    reg_10 = get(reg_1[0], cns6());
    reg_11 = newStack();
    push_Stack(reg_11, get(reg_1[0], cns15()));
    reg_16 = first_Stack(call(reg_10, reg_11));
    reg_18 = eq(reg_4, nil());
    if (tobool(reg_18)) {
      reg_18 = reg_5;
    }
    if (tobool(reg_18)) {
      reg_21 = newStack();
      push_Stack(reg_21, reg_5);
      return reg_21;
    }
    if (tobool(eq(reg_16, cns9()))) {
      reg_27 = get(reg_1[0], cns16());
      reg_28 = newStack();
      push_Stack(reg_28, reg_4);
      reg_4 = first_Stack(call(reg_27, reg_28));
    }
    reg_33 = get(reg_1[0], cns6());
    reg_34 = newStack();
    push_Stack(reg_34, reg_4);
    if (tobool(eq(first_Stack(call(reg_33, reg_34)), cns7()))) {
      reg_40 = newStack();
      push_Stack(reg_40, reg_4);
      return reg_40;
    }
    reg_43 = get(reg_1[0], cns10());
    reg_44 = newStack();
    reg_45 = cns11();
    reg_46 = cns12();
    reg_47 = cns17();
    push_Stack(reg_44, concat(reg_45, concat(reg_6, concat(reg_46, concat(reg_7, concat(reg_47, concat(reg_16, cns14())))))));
    reg_55 = call(reg_43, reg_44);
    reg_56 = newStack();
    return reg_56;
  }
  var mod13 = new Cobre.Module({
    "0": function$5,
  });
  var item82 = closure.build(mod13);
  var item82$new = item82.get("new");
  var cns18 = Cobre.Lazy(function () { return string("table")});
  var cns19 = Cobre.Lazy(function () { return string("concat")});
  var mod16 = new Cobre.Module({
    "0": tp1,
  });
  var ne = lua.get("ne");
  var cns20 = Cobre.Lazy(function () { return string("bad argument #1 for 'table.concat' (expected table, got ")});
  var cns21 = Cobre.Lazy(function () { return string("")});
  var cns22 = Cobre.Lazy(function () { return string("table.concat")});
  var cns23 = Cobre.Lazy(function () { return lua$int(2)});
  var length = lua.get("length");
  var cns24 = Cobre.Lazy(function () { return lua$int(3)});
  var gt = lua.get("gt");
  var lt = lua.get("lt");
  function table_concat (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_10, reg_11, reg_19, reg_20, reg_21, reg_24, reg_25, reg_32, reg_33, reg_39, reg_40, reg_46, reg_47, reg_59, reg_61, reg_63, reg_64, reg_65, reg_67, reg_77;
    var goto_99=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_7 = next_Stack(reg_0);
    reg_10 = get(reg_1[0], cns6());
    reg_11 = newStack();
    push_Stack(reg_11, reg_4);
    if (tobool(ne(first_Stack(call(reg_10, reg_11)), cns18()))) {
      reg_19 = get(reg_1[0], cns10());
      reg_20 = newStack();
      reg_21 = cns20();
      reg_24 = get(reg_1[0], cns6());
      reg_25 = newStack();
      push_Stack(reg_25, reg_4);
      push_Stack(reg_20, concat(reg_21, concat(first_Stack(call(reg_24, reg_25)), cns14())));
      reg_31 = call(reg_19, reg_20);
    }
    reg_32 = reg_1[1];
    reg_33 = newStack();
    push_Stack(reg_33, reg_5);
    push_Stack(reg_33, cns21());
    push_Stack(reg_33, cns1());
    push_Stack(reg_33, cns22());
    reg_5 = first_Stack(call(reg_32, reg_33));
    reg_39 = reg_1[2];
    reg_40 = newStack();
    push_Stack(reg_40, reg_6);
    push_Stack(reg_40, cns1());
    push_Stack(reg_40, cns23());
    push_Stack(reg_40, cns22());
    reg_6 = first_Stack(call(reg_39, reg_40));
    reg_46 = reg_1[2];
    reg_47 = newStack();
    push_Stack(reg_47, reg_7);
    push_Stack(reg_47, length(reg_4));
    push_Stack(reg_47, cns24());
    push_Stack(reg_47, cns22());
    reg_7 = first_Stack(call(reg_46, reg_47));
    if (tobool(gt(reg_7, length(reg_4)))) {
      reg_7 = length(reg_4);
    }
    if (tobool(gt(reg_6, reg_7))) {
      reg_59 = newStack();
      push_Stack(reg_59, cns21());
      return reg_59;
    }
    reg_61 = get(reg_4, reg_6);
    reg_63 = add(reg_6, cns1());
    reg_64 = reg_7;
    reg_65 = cns1();
    reg_67 = lt(reg_65, cns2());
    loop_1: while (true) {
      goto_99 = tobool(reg_67);
      if (!goto_99) {
        if (tobool(gt(reg_63, reg_64))) break loop_1;
      }
      if ((goto_99 || false)) {
        goto_99 = false;
        if (tobool(lt(reg_63, reg_64))) break loop_1;
      }
      reg_61 = concat(reg_61, reg_5);
      reg_61 = concat(reg_61, get(reg_4, reg_63));
      reg_63 = add(reg_63, reg_65);
    }
    reg_77 = newStack();
    push_Stack(reg_77, reg_61);
    return reg_77;
  }
  var mod15 = new Cobre.Module({
    "0": table_concat,
  });
  var item102 = closure.build(mod15);
  var item102$new = item102.get("new");
  var cns25 = Cobre.Lazy(function () { return string("insert")});
  var mod18 = new Cobre.Module({
    "0": tp1,
  });
  var cns26 = Cobre.Lazy(function () { return string("table.insert")});
  var le = lua.get("le");
  var neg = lua.get("neg");
  function table_insert (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_13, reg_14, reg_23, reg_24, reg_26, reg_28, reg_38;
    var goto_43=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    if (tobool(eq(reg_6, nil()))) {
      reg_6 = reg_5;
      reg_5 = add(length(reg_4), cns1());
    }
    reg_13 = reg_1[2];
    reg_14 = newStack();
    push_Stack(reg_14, reg_5);
    push_Stack(reg_14, nil());
    push_Stack(reg_14, cns23());
    push_Stack(reg_14, cns26());
    reg_5 = first_Stack(call(reg_13, reg_14));
    if (tobool(le(reg_5, length(reg_4)))) {
      reg_23 = length(reg_4);
      reg_24 = reg_5;
      reg_26 = neg(cns1());
      reg_28 = lt(reg_26, cns2());
      loop_1: while (true) {
        goto_43 = tobool(reg_28);
        if (!goto_43) {
          if (tobool(gt(reg_23, reg_24))) break loop_1;
        }
        if ((goto_43 || false)) {
          goto_43 = false;
          if (tobool(lt(reg_23, reg_24))) break loop_1;
        }
        set(reg_4, add(reg_23, cns1()), get(reg_4, reg_23));
        reg_23 = add(reg_23, reg_26);
      }
    }
    set(reg_4, reg_5, reg_6);
    reg_38 = newStack();
    return reg_38;
  }
  var mod17 = new Cobre.Module({
    "0": table_insert,
  });
  var item112 = closure.build(mod17);
  var item112$new = item112.get("new");
  var cns27 = Cobre.Lazy(function () { return string("move")});
  var mod20 = new Cobre.Module({
    "0": tp1,
  });
  var sub = lua.get("sub");
  var ge = lua.get("ge");
  function table_move (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_8, reg_9, reg_11, reg_31;
    var goto_32=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_7 = next_Stack(reg_0);
    reg_8 = next_Stack(reg_0);
    reg_9 = reg_8;
    if (!tobool(reg_9)) {
      reg_9 = reg_4;
    }
    reg_8 = reg_9;
    reg_11 = gt(reg_7, reg_6);
    if (!tobool(reg_11)) {
      reg_11 = le(reg_7, reg_5);
    }
    goto_32 = !tobool(reg_11);
    if (!goto_32) {
      loop_2: while (tobool(le(reg_5, reg_6))) {
        set(reg_8, reg_7, get(reg_4, reg_5));
        reg_7 = add(reg_7, cns1());
        reg_5 = add(reg_5, cns1());
      }
    }
    if ((goto_32 || false)) {
      goto_32 = false;
      reg_7 = add(reg_7, sub(reg_6, reg_5));
      loop_1: while (tobool(ge(reg_6, reg_5))) {
        set(reg_8, reg_7, get(reg_4, reg_6));
        reg_7 = sub(reg_7, cns1());
        reg_6 = sub(reg_6, cns1());
      }
    }
    reg_31 = newStack();
    push_Stack(reg_31, reg_8);
    return reg_31;
  }
  var mod19 = new Cobre.Module({
    "0": table_move,
  });
  var item121 = closure.build(mod19);
  var item121$new = item121.get("new");
  var cns28 = Cobre.Lazy(function () { return string("remove")});
  var mod22 = new Cobre.Module({
    "0": tp1,
  });
  function table_remove (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_8, reg_20, reg_21, reg_26;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = length(reg_4);
    reg_8 = ne(reg_5, nil());
    if (tobool(reg_8)) {
      reg_8 = ne(reg_5, reg_6);
    }
    if (tobool(reg_8)) {
      reg_8 = ne(reg_5, add(reg_6, cns1()));
    }
    if (tobool(reg_8)) {
      reg_20 = get(get(reg_1[0], cns18()), cns27());
      reg_21 = newStack();
      push_Stack(reg_21, reg_4);
      push_Stack(reg_21, reg_5);
      push_Stack(reg_21, reg_6);
      push_Stack(reg_21, sub(reg_5, cns1()));
      reg_24 = call(reg_20, reg_21);
    }
    set(reg_4, reg_6, nil());
    reg_26 = newStack();
    return reg_26;
  }
  var mod21 = new Cobre.Module({
    "0": table_remove,
  });
  var item128 = closure.build(mod21);
  var item128$new = item128.get("new");
  function lua_main (reg_0) {
    var reg_1, reg_2, reg_4, reg_8, reg_17, reg_18, reg_23, reg_24, reg_29, reg_30, reg_35, reg_36, reg_39;
    reg_1 = nil();
    reg_2 = [reg_1, reg_1, reg_1];
    reg_2[0] = reg_0;
    reg_4 = lua$function(item33$new(reg_2));
    set(reg_2[0], cns3(), reg_4);
    reg_8 = lua$function(item54$new(reg_2));
    set(reg_2[0], cns5(), reg_8);
    reg_2[1] = lua$function(item72$new(reg_2));
    reg_2[2] = lua$function(item82$new(reg_2));
    reg_17 = get(reg_2[0], cns18());
    reg_18 = cns19();
    set(reg_17, reg_18, lua$function(item102$new(reg_2)));
    reg_23 = get(reg_2[0], cns18());
    reg_24 = cns25();
    set(reg_23, reg_24, lua$function(item112$new(reg_2)));
    reg_29 = get(reg_2[0], cns18());
    reg_30 = cns27();
    set(reg_29, reg_30, lua$function(item121$new(reg_2)));
    reg_35 = get(reg_2[0], cns18());
    reg_36 = cns28();
    set(reg_35, reg_36, lua$function(item128$new(reg_2)));
    reg_39 = newStack();
    return reg_39;
  }
  var get_global = lua.get("get_global");
  function main () {
    reg_1 = lua_main(get_global());
    return;
  }
  var mod1 = new Cobre.Module({
    "lua_main": lua_main,
    "main": main,
  });
  return mod1;
});
Cobre.$export("lua_lib\x1fstring", function () {
  var lua = Cobre.$import("lua");
  var nil = lua.get("nil");
  var mod2 = new Cobre.Module({
    "0": Cobre.Any,
    "1": Cobre.Any,
  });
  var closure = lua.get("closure");
  var tp5 = new Cobre.Record([Cobre.Any,Cobre.Any]);
  var mod4 = new Cobre.Module({
    "0": tp5,
  });
  var next_Stack = lua.get("next\x1dStack");
  var tobool = lua.get("tobool");
  var lua$int = lua.get("int");
  var cns1 = Cobre.Lazy(function () { return lua$int(1)});
  var string = lua.get("string");
  var cns2 = Cobre.Lazy(function () { return string("type")});
  var get = lua.get("get");
  var newStack = lua.get("newStack");
  var push_Stack = lua.get("push\x1dStack");
  var call = lua.get("call");
  var first_Stack = lua.get("first\x1dStack");
  var cns3 = Cobre.Lazy(function () { return string("number")});
  var eq = lua.get("eq");
  var cns4 = Cobre.Lazy(function () { return string("tostring")});
  var cns5 = Cobre.Lazy(function () { return string("string")});
  var cns6 = Cobre.Lazy(function () { return string("error")});
  var cns7 = Cobre.Lazy(function () { return string("bad argument #")});
  var cns8 = Cobre.Lazy(function () { return string(" to 'string.len' (string expected, got ")});
  var cns9 = Cobre.Lazy(function () { return string(")")});
  var concat = lua.get("concat");
  function lua_lib_string$function (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_11, reg_12, reg_14, reg_20, reg_21, reg_26, reg_27, reg_33, reg_36, reg_37, reg_38, reg_39, reg_46;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = reg_5;
    if (!tobool(reg_6)) {
      reg_6 = cns1();
    }
    reg_5 = reg_6;
    reg_11 = get(reg_1[0], cns2());
    reg_12 = newStack();
    push_Stack(reg_12, reg_4);
    reg_14 = first_Stack(call(reg_11, reg_12));
    if (tobool(eq(reg_14, cns3()))) {
      reg_20 = get(reg_1[0], cns4());
      reg_21 = newStack();
      push_Stack(reg_21, reg_4);
      reg_4 = first_Stack(call(reg_20, reg_21));
    }
    reg_26 = get(reg_1[0], cns2());
    reg_27 = newStack();
    push_Stack(reg_27, reg_4);
    if (tobool(eq(first_Stack(call(reg_26, reg_27)), cns5()))) {
      reg_33 = newStack();
      push_Stack(reg_33, reg_4);
      return reg_33;
    }
    reg_36 = get(reg_1[0], cns6());
    reg_37 = newStack();
    reg_38 = cns7();
    reg_39 = cns8();
    push_Stack(reg_37, concat(reg_38, concat(reg_5, concat(reg_39, concat(reg_14, cns9())))));
    reg_45 = call(reg_36, reg_37);
    reg_46 = newStack();
    return reg_46;
  }
  var mod3 = new Cobre.Module({
    "0": lua_lib_string$function,
  });
  var item36 = closure.build(mod3);
  var item36$new = item36.get("new");
  var lua$function = lua.get("function");
  var cns10 = Cobre.Lazy(function () { return string("len")});
  var mod6 = new Cobre.Module({
    "0": tp5,
  });
  var length = lua.get("length");
  function string_len (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newStack();
    reg_6 = reg_1[1];
    reg_7 = newStack();
    push_Stack(reg_7, reg_4);
    push_Stack(reg_5, length(first_Stack(call(reg_6, reg_7))));
    return reg_5;
  }
  var mod5 = new Cobre.Module({
    "0": string_len,
  });
  var item47 = closure.build(mod5);
  var item47$new = item47.get("new");
  var set = lua.get("set");
  var cns11 = Cobre.Lazy(function () { return string("upper")});
  var mod8 = new Cobre.Module({
    "0": tp5,
  });
  var cns12 = Cobre.Lazy(function () { return string("")});
  var cns13 = Cobre.Lazy(function () { return lua$int(0)});
  var lt = lua.get("lt");
  var gt = lua.get("gt");
  var cns14 = Cobre.Lazy(function () { return string("byte")});
  var cns15 = Cobre.Lazy(function () { return lua$int(97)});
  var ge = lua.get("ge");
  var cns16 = Cobre.Lazy(function () { return lua$int(122)});
  var le = lua.get("le");
  var cns17 = Cobre.Lazy(function () { return lua$int(32)});
  var sub = lua.get("sub");
  var cns18 = Cobre.Lazy(function () { return string("char")});
  var add = lua.get("add");
  function string_upper (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_9, reg_10, reg_11, reg_12, reg_14, reg_21, reg_22, reg_24, reg_26, reg_37, reg_38, reg_43;
    var goto_21=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = reg_1[1];
    reg_6 = newStack();
    push_Stack(reg_6, reg_4);
    reg_4 = first_Stack(call(reg_5, reg_6));
    reg_9 = cns12();
    reg_10 = cns1();
    reg_11 = length(reg_4);
    reg_12 = cns1();
    reg_14 = lt(reg_12, cns13());
    loop_1: while (true) {
      goto_21 = tobool(reg_14);
      if (!goto_21) {
        if (tobool(gt(reg_10, reg_11))) break loop_1;
      }
      if ((goto_21 || false)) {
        goto_21 = false;
        if (tobool(lt(reg_10, reg_11))) break loop_1;
      }
      reg_21 = get(reg_4, cns14());
      reg_22 = newStack();
      push_Stack(reg_22, reg_4);
      push_Stack(reg_22, reg_10);
      reg_24 = first_Stack(call(reg_21, reg_22));
      reg_26 = ge(reg_24, cns15());
      if (tobool(reg_26)) {
        reg_26 = le(reg_24, cns16());
      }
      if (tobool(reg_26)) {
        reg_24 = sub(reg_24, cns17());
      }
      reg_37 = get(get(reg_1[0], cns5()), cns18());
      reg_38 = newStack();
      push_Stack(reg_38, reg_24);
      reg_9 = concat(reg_9, first_Stack(call(reg_37, reg_38)));
      reg_10 = add(reg_10, reg_12);
    }
    reg_43 = newStack();
    push_Stack(reg_43, reg_9);
    return reg_43;
  }
  var mod7 = new Cobre.Module({
    "0": string_upper,
  });
  var item68 = closure.build(mod7);
  var item68$new = item68.get("new");
  var cns19 = Cobre.Lazy(function () { return string("lower")});
  var mod10 = new Cobre.Module({
    "0": tp5,
  });
  var cns20 = Cobre.Lazy(function () { return lua$int(65)});
  var cns21 = Cobre.Lazy(function () { return lua$int(90)});
  function string_lower (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_9, reg_10, reg_11, reg_12, reg_14, reg_21, reg_22, reg_24, reg_26, reg_37, reg_38, reg_43;
    var goto_21=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = reg_1[1];
    reg_6 = newStack();
    push_Stack(reg_6, reg_4);
    reg_4 = first_Stack(call(reg_5, reg_6));
    reg_9 = cns12();
    reg_10 = cns1();
    reg_11 = length(reg_4);
    reg_12 = cns1();
    reg_14 = lt(reg_12, cns13());
    loop_1: while (true) {
      goto_21 = tobool(reg_14);
      if (!goto_21) {
        if (tobool(gt(reg_10, reg_11))) break loop_1;
      }
      if ((goto_21 || false)) {
        goto_21 = false;
        if (tobool(lt(reg_10, reg_11))) break loop_1;
      }
      reg_21 = get(reg_4, cns14());
      reg_22 = newStack();
      push_Stack(reg_22, reg_4);
      push_Stack(reg_22, reg_10);
      reg_24 = first_Stack(call(reg_21, reg_22));
      reg_26 = ge(reg_24, cns20());
      if (tobool(reg_26)) {
        reg_26 = le(reg_24, cns21());
      }
      if (tobool(reg_26)) {
        reg_24 = add(reg_24, cns17());
      }
      reg_37 = get(get(reg_1[0], cns5()), cns18());
      reg_38 = newStack();
      push_Stack(reg_38, reg_24);
      reg_9 = concat(reg_9, first_Stack(call(reg_37, reg_38)));
      reg_10 = add(reg_10, reg_12);
    }
    reg_43 = newStack();
    push_Stack(reg_43, reg_9);
    return reg_43;
  }
  var mod9 = new Cobre.Module({
    "0": string_lower,
  });
  var item77 = closure.build(mod9);
  var item77$new = item77.get("new");
  var cns22 = Cobre.Lazy(function () { return string("reverse")});
  var mod12 = new Cobre.Module({
    "0": tp5,
  });
  var neg = lua.get("neg");
  var cns23 = Cobre.Lazy(function () { return string("sub")});
  function string_reverse (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_9, reg_10, reg_11, reg_13, reg_15, reg_23, reg_25, reg_26, reg_31;
    var goto_22=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = reg_1[1];
    reg_6 = newStack();
    push_Stack(reg_6, reg_4);
    reg_4 = first_Stack(call(reg_5, reg_6));
    reg_9 = cns12();
    reg_10 = length(reg_4);
    reg_11 = cns1();
    reg_13 = neg(cns1());
    reg_15 = lt(reg_13, cns13());
    loop_1: while (true) {
      goto_22 = tobool(reg_15);
      if (!goto_22) {
        if (tobool(gt(reg_10, reg_11))) break loop_1;
      }
      if ((goto_22 || false)) {
        goto_22 = false;
        if (tobool(lt(reg_10, reg_11))) break loop_1;
      }
      reg_23 = get(reg_1[0], cns5());
      reg_25 = get(reg_23, cns23());
      reg_26 = newStack();
      push_Stack(reg_26, reg_23);
      push_Stack(reg_26, reg_10);
      push_Stack(reg_26, reg_10);
      reg_9 = concat(reg_9, first_Stack(call(reg_25, reg_26)));
      reg_10 = add(reg_10, reg_13);
    }
    reg_31 = newStack();
    push_Stack(reg_31, reg_9);
    return reg_31;
  }
  var mod11 = new Cobre.Module({
    "0": string_reverse,
  });
  var item86 = closure.build(mod11);
  var item86$new = item86.get("new");
  var cns24 = Cobre.Lazy(function () { return string("rep")});
  var mod14 = new Cobre.Module({
    "0": tp5,
  });
  var cns25 = Cobre.Lazy(function () { return lua$int(2)});
  function string_rep (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_13, reg_15, reg_16, reg_17, reg_18, reg_20, reg_29;
    var goto_32=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_7 = reg_6;
    if (!tobool(reg_7)) {
      reg_7 = cns12();
    }
    reg_6 = reg_7;
    if (tobool(lt(reg_5, cns1()))) {
      reg_13 = newStack();
      push_Stack(reg_13, cns12());
      return reg_13;
    }
    reg_15 = reg_4;
    reg_16 = cns25();
    reg_17 = reg_5;
    reg_18 = cns1();
    reg_20 = lt(reg_18, cns13());
    loop_1: while (true) {
      goto_32 = tobool(reg_20);
      if (!goto_32) {
        if (tobool(gt(reg_16, reg_17))) break loop_1;
      }
      if ((goto_32 || false)) {
        goto_32 = false;
        if (tobool(lt(reg_16, reg_17))) break loop_1;
      }
      reg_15 = concat(reg_15, concat(reg_6, reg_4));
      reg_16 = add(reg_16, reg_18);
    }
    reg_29 = newStack();
    push_Stack(reg_29, reg_15);
    return reg_29;
  }
  var mod13 = new Cobre.Module({
    "0": string_rep,
  });
  var item94 = closure.build(mod13);
  var item94$new = item94.get("new");
  var cns26 = Cobre.Lazy(function () { return string("_G")});
  var cns27 = Cobre.Lazy(function () { return string("utf8")});
  var newTable = lua.get("newTable");
  var mod16 = new Cobre.Module({
    "0": tp5,
  });
  var copy_Stack = lua.get("copy\x1dStack");
  var table_append = lua.get("table_append");
  var cns28 = Cobre.Lazy(function () { return string("ipairs")});
  var cns29 = Cobre.Lazy(function () { return string("tonumber")});
  var cns30 = Cobre.Lazy(function () { return lua$int(127)});
  var cns31 = Cobre.Lazy(function () { return string("Full unicode is not yet supported, only ASCII")});
  var append_Stack = lua.get("append\x1dStack");
  function utf8_char (reg_0, reg_1) {
    var reg_4, reg_9, reg_10, reg_11, reg_12, reg_13, reg_14, reg_15, reg_16, reg_18, reg_24, reg_25, reg_33, reg_34, reg_37, reg_42, reg_43;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = newTable();
    table_append(reg_4, cns1(), copy_Stack(reg_0));
    reg_9 = get(reg_1[0], cns28());
    reg_10 = newStack();
    push_Stack(reg_10, reg_4);
    reg_11 = call(reg_9, reg_10);
    reg_12 = next_Stack(reg_11);
    reg_13 = next_Stack(reg_11);
    reg_14 = next_Stack(reg_11);
    loop_1: while (true) {
      reg_15 = newStack();
      push_Stack(reg_15, reg_13);
      push_Stack(reg_15, reg_14);
      reg_16 = call(reg_12, reg_15);
      reg_14 = next_Stack(reg_16);
      reg_18 = next_Stack(reg_16);
      if (tobool(eq(reg_14, nil()))) break loop_1;
      reg_24 = get(reg_1[0], cns29());
      reg_25 = newStack();
      push_Stack(reg_25, reg_18);
      if (tobool(gt(first_Stack(call(reg_24, reg_25)), cns30()))) {
        reg_33 = get(reg_1[0], cns6());
        reg_34 = newStack();
        push_Stack(reg_34, cns31());
        reg_36 = call(reg_33, reg_34);
      }
    }
    reg_37 = newStack();
    reg_42 = get(get(reg_1[0], cns5()), cns18());
    reg_43 = newStack();
    append_Stack(reg_43, reg_0);
    append_Stack(reg_37, call(reg_42, reg_43));
    return reg_37;
  }
  var mod15 = new Cobre.Module({
    "0": utf8_char,
  });
  var item110 = closure.build(mod15);
  var item110$new = item110.get("new");
  function lua_main (reg_0) {
    var reg_1, reg_2, reg_7, reg_8, reg_13, reg_14, reg_19, reg_20, reg_25, reg_26, reg_31, reg_32, reg_42, reg_43, reg_46;
    reg_1 = nil();
    reg_2 = [reg_1, reg_1];
    reg_2[0] = reg_0;
    reg_2[1] = lua$function(item36$new(reg_2));
    reg_7 = get(reg_2[0], cns5());
    reg_8 = cns10();
    set(reg_7, reg_8, lua$function(item47$new(reg_2)));
    reg_13 = get(reg_2[0], cns5());
    reg_14 = cns11();
    set(reg_13, reg_14, lua$function(item68$new(reg_2)));
    reg_19 = get(reg_2[0], cns5());
    reg_20 = cns19();
    set(reg_19, reg_20, lua$function(item77$new(reg_2)));
    reg_25 = get(reg_2[0], cns5());
    reg_26 = cns22();
    set(reg_25, reg_26, lua$function(item86$new(reg_2)));
    reg_31 = get(reg_2[0], cns5());
    reg_32 = cns24();
    set(reg_31, reg_32, lua$function(item94$new(reg_2)));
    set(get(reg_2[0], cns26()), cns27(), newTable());
    reg_42 = get(reg_2[0], cns27());
    reg_43 = cns18();
    set(reg_42, reg_43, lua$function(item110$new(reg_2)));
    reg_46 = newStack();
    return reg_46;
  }
  var get_global = lua.get("get_global");
  function main () {
    reg_1 = lua_main(get_global());
    return;
  }
  var mod1 = new Cobre.Module({
    "lua_main": lua_main,
    "main": main,
  });
  return mod1;
});
Cobre.$export("lua_lib\x1fpattern", function () {
  var lua = Cobre.$import("lua");
  var nil = lua.get("nil");
  var mod2 = new Cobre.Module({
    "0": Cobre.Any,
    "1": Cobre.Any,
    "2": Cobre.Any,
    "3": Cobre.Any,
    "4": Cobre.Any,
    "5": Cobre.Any,
    "6": Cobre.Any,
    "7": Cobre.Any,
    "8": Cobre.Any,
    "9": Cobre.Any,
    "10": Cobre.Any,
    "11": Cobre.Any,
    "12": Cobre.Any,
    "13": Cobre.Any,
    "14": Cobre.Any,
    "15": Cobre.Any,
    "16": Cobre.Any,
    "17": Cobre.Any,
    "18": Cobre.Any,
    "19": Cobre.Any,
    "20": Cobre.Any,
    "21": Cobre.Any,
    "22": Cobre.Any,
    "23": Cobre.Any,
    "24": Cobre.Any,
  });
  var string = lua.get("string");
  var cns1 = Cobre.Lazy(function () { return string("string")});
  var get = lua.get("get");
  var cns2 = Cobre.Lazy(function () { return string("charat")});
  var closure = lua.get("closure");
  var tp1 = new Cobre.Record([Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any]);
  var mod4 = new Cobre.Module({
    "0": tp1,
  });
  var next_Stack = lua.get("next\x1dStack");
  var newStack = lua.get("newStack");
  var cns3 = Cobre.Lazy(function () { return string("sub")});
  var push_Stack = lua.get("push\x1dStack");
  var call = lua.get("call");
  var append_Stack = lua.get("append\x1dStack");
  function string_charat (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_8, reg_9;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = newStack();
    reg_8 = get(reg_4, cns3());
    reg_9 = newStack();
    push_Stack(reg_9, reg_4);
    push_Stack(reg_9, reg_5);
    push_Stack(reg_9, reg_5);
    append_Stack(reg_6, call(reg_8, reg_9));
    return reg_6;
  }
  var mod3 = new Cobre.Module({
    "0": string_charat,
  });
  var item26 = closure.build(mod3);
  var item26$new = item26.get("new");
  var lua$function = lua.get("function");
  var set = lua.get("set");
  var mod6 = new Cobre.Module({
    "0": tp1,
  });
  var lua$int = lua.get("int");
  var cns4 = Cobre.Lazy(function () { return lua$int(48)});
  var ge = lua.get("ge");
  var tobool = lua.get("tobool");
  var cns5 = Cobre.Lazy(function () { return lua$int(57)});
  var le = lua.get("le");
  function lua_lib_pattern$function (reg_0, reg_1) {
    var reg_4, reg_5, reg_7;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newStack();
    reg_7 = ge(reg_4, cns4());
    if (tobool(reg_7)) {
      reg_7 = le(reg_4, cns5());
    }
    push_Stack(reg_5, reg_7);
    return reg_5;
  }
  var mod5 = new Cobre.Module({
    "0": lua_lib_pattern$function,
  });
  var item40 = closure.build(mod5);
  var item40$new = item40.get("new");
  var mod8 = new Cobre.Module({
    "0": tp1,
  });
  var cns6 = Cobre.Lazy(function () { return lua$int(97)});
  var cns7 = Cobre.Lazy(function () { return lua$int(122)});
  function function$1 (reg_0, reg_1) {
    var reg_4, reg_5, reg_7;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newStack();
    reg_7 = ge(reg_4, cns6());
    if (tobool(reg_7)) {
      reg_7 = le(reg_4, cns7());
    }
    push_Stack(reg_5, reg_7);
    return reg_5;
  }
  var mod7 = new Cobre.Module({
    "0": function$1,
  });
  var item49 = closure.build(mod7);
  var item49$new = item49.get("new");
  var mod10 = new Cobre.Module({
    "0": tp1,
  });
  var cns8 = Cobre.Lazy(function () { return lua$int(65)});
  var cns9 = Cobre.Lazy(function () { return lua$int(90)});
  function function$2 (reg_0, reg_1) {
    var reg_4, reg_5, reg_7;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newStack();
    reg_7 = ge(reg_4, cns8());
    if (tobool(reg_7)) {
      reg_7 = le(reg_4, cns9());
    }
    push_Stack(reg_5, reg_7);
    return reg_5;
  }
  var mod9 = new Cobre.Module({
    "0": function$2,
  });
  var item58 = closure.build(mod9);
  var item58$new = item58.get("new");
  var mod12 = new Cobre.Module({
    "0": tp1,
  });
  var first_Stack = lua.get("first\x1dStack");
  function function$3 (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_9, reg_11, reg_12;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newStack();
    reg_6 = reg_1[0];
    reg_7 = newStack();
    push_Stack(reg_7, reg_4);
    reg_9 = first_Stack(call(reg_6, reg_7));
    if (!tobool(reg_9)) {
      reg_11 = reg_1[1];
      reg_12 = newStack();
      push_Stack(reg_12, reg_4);
      reg_9 = first_Stack(call(reg_11, reg_12));
    }
    push_Stack(reg_5, reg_9);
    return reg_5;
  }
  var mod11 = new Cobre.Module({
    "0": function$3,
  });
  var item68 = closure.build(mod11);
  var item68$new = item68.get("new");
  var mod14 = new Cobre.Module({
    "0": tp1,
  });
  var cns10 = Cobre.Lazy(function () { return lua$int(9)});
  var eq = lua.get("eq");
  var cns11 = Cobre.Lazy(function () { return lua$int(10)});
  var cns12 = Cobre.Lazy(function () { return lua$int(32)});
  function function$4 (reg_0, reg_1) {
    var reg_4, reg_5, reg_7;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newStack();
    reg_7 = eq(reg_4, cns10());
    if (!tobool(reg_7)) {
      reg_7 = eq(reg_4, cns11());
    }
    if (!tobool(reg_7)) {
      reg_7 = eq(reg_4, cns12());
    }
    push_Stack(reg_5, reg_7);
    return reg_5;
  }
  var mod13 = new Cobre.Module({
    "0": function$4,
  });
  var item79 = closure.build(mod13);
  var item79$new = item79.get("new");
  var mod16 = new Cobre.Module({
    "0": tp1,
  });
  var lt = lua.get("lt");
  var cns13 = Cobre.Lazy(function () { return lua$int(127)});
  function function$5 (reg_0, reg_1) {
    var reg_4, reg_5, reg_7;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newStack();
    reg_7 = lt(reg_4, cns12());
    if (!tobool(reg_7)) {
      reg_7 = eq(reg_4, cns13());
    }
    push_Stack(reg_5, reg_7);
    return reg_5;
  }
  var mod15 = new Cobre.Module({
    "0": function$5,
  });
  var item88 = closure.build(mod15);
  var item88$new = item88.get("new");
  var mod18 = new Cobre.Module({
    "0": tp1,
  });
  var not = lua.get("not");
  function function$6 (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_10, reg_12, reg_13;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newStack();
    reg_6 = reg_1[2];
    reg_7 = newStack();
    push_Stack(reg_7, reg_4);
    reg_10 = not(first_Stack(call(reg_6, reg_7)));
    if (tobool(reg_10)) {
      reg_12 = reg_1[3];
      reg_13 = newStack();
      push_Stack(reg_13, reg_4);
      reg_10 = not(first_Stack(call(reg_12, reg_13)));
    }
    push_Stack(reg_5, reg_10);
    return reg_5;
  }
  var mod17 = new Cobre.Module({
    "0": function$6,
  });
  var item98 = closure.build(mod17);
  var item98$new = item98.get("new");
  var mod20 = new Cobre.Module({
    "0": tp1,
  });
  function function$7 (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_9, reg_11, reg_12;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newStack();
    reg_6 = reg_1[4];
    reg_7 = newStack();
    push_Stack(reg_7, reg_4);
    reg_9 = first_Stack(call(reg_6, reg_7));
    if (!tobool(reg_9)) {
      reg_11 = reg_1[5];
      reg_12 = newStack();
      push_Stack(reg_12, reg_4);
      reg_9 = first_Stack(call(reg_11, reg_12));
    }
    push_Stack(reg_5, reg_9);
    return reg_5;
  }
  var mod19 = new Cobre.Module({
    "0": function$7,
  });
  var item107 = closure.build(mod19);
  var item107$new = item107.get("new");
  var mod22 = new Cobre.Module({
    "0": tp1,
  });
  function function$8 (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_9, reg_11, reg_12;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newStack();
    reg_6 = reg_1[6];
    reg_7 = newStack();
    push_Stack(reg_7, reg_4);
    reg_9 = first_Stack(call(reg_6, reg_7));
    if (tobool(reg_9)) {
      reg_11 = reg_1[7];
      reg_12 = newStack();
      push_Stack(reg_12, reg_4);
      reg_9 = not(first_Stack(call(reg_11, reg_12)));
    }
    push_Stack(reg_5, reg_9);
    return reg_5;
  }
  var mod21 = new Cobre.Module({
    "0": function$8,
  });
  var item116 = closure.build(mod21);
  var item116$new = item116.get("new");
  var mod24 = new Cobre.Module({
    "0": tp1,
  });
  var cns14 = Cobre.Lazy(function () { return lua$int(70)});
  var cns15 = Cobre.Lazy(function () { return lua$int(102)});
  function function$9 (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_9, reg_12, reg_18;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newStack();
    reg_6 = reg_1[5];
    reg_7 = newStack();
    push_Stack(reg_7, reg_4);
    reg_9 = first_Stack(call(reg_6, reg_7));
    if (!tobool(reg_9)) {
      reg_12 = ge(reg_4, cns8());
      if (tobool(reg_12)) {
        reg_12 = le(reg_4, cns14());
      }
      reg_9 = reg_12;
    }
    if (!tobool(reg_9)) {
      reg_18 = ge(reg_4, cns6());
      if (tobool(reg_18)) {
        reg_18 = le(reg_4, cns15());
      }
      reg_9 = reg_18;
    }
    push_Stack(reg_5, reg_9);
    return reg_5;
  }
  var mod23 = new Cobre.Module({
    "0": function$9,
  });
  var item125 = closure.build(mod23);
  var item125$new = item125.get("new");
  var mod26 = new Cobre.Module({
    "0": tp1,
  });
  var lua$true = lua.get("true");
  function function$10 (reg_0, reg_1) {
    var reg_4;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = newStack();
    push_Stack(reg_4, lua$true());
    return reg_4;
  }
  var mod25 = new Cobre.Module({
    "0": function$10,
  });
  var item133 = closure.build(mod25);
  var item133$new = item133.get("new");
  var mod28 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
  });
  var tp2 = new Cobre.Record([tp1,Cobre.Any]);
  var mod30 = new Cobre.Module({
    "0": tp2,
  });
  function function$12 (reg_0, reg_1) {
    var reg_5, reg_6, reg_7, reg_8;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = newStack();
    reg_7 = reg_1[1];
    reg_8 = newStack();
    push_Stack(reg_8, reg_5);
    push_Stack(reg_6, not(first_Stack(call(reg_7, reg_8))));
    return reg_6;
  }
  var mod29 = new Cobre.Module({
    "0": function$12,
  });
  var item147 = closure.build(mod29);
  var item147$new = item147.get("new");
  function function$11 (reg_0, reg_1) {
    var reg_3, reg_5;
    reg_3 = [reg_1, nil()];
    reg_3[1] = next_Stack(reg_0);
    reg_5 = newStack();
    push_Stack(reg_5, lua$function(item147$new(reg_3)));
    return reg_5;
  }
  var mod27 = new Cobre.Module({
    "0": function$11,
  });
  var item151 = closure.build(mod27);
  var item151$new = item151.get("new");
  var mod32 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
    "2": Cobre.Any,
  });
  var cns16 = Cobre.Lazy(function () { return string("byte")});
  var tp3 = new Cobre.Record([tp1,Cobre.Any,Cobre.Any]);
  var mod34 = new Cobre.Module({
    "0": tp3,
  });
  function function$14 (reg_0, reg_1) {
    var reg_5, reg_6, reg_8;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = newStack();
    reg_8 = ge(reg_5, reg_1[1]);
    if (tobool(reg_8)) {
      reg_8 = le(reg_5, reg_1[2]);
    }
    push_Stack(reg_6, reg_8);
    return reg_6;
  }
  var mod33 = new Cobre.Module({
    "0": function$14,
  });
  var item168 = closure.build(mod33);
  var item168$new = item168.get("new");
  function function$13 (reg_0, reg_1) {
    var reg_2, reg_3, reg_4, reg_5, reg_7, reg_8, reg_12, reg_13, reg_16;
    reg_2 = nil();
    reg_3 = [reg_1, reg_2, reg_2];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_7 = get(reg_4, cns16());
    reg_8 = newStack();
    push_Stack(reg_8, reg_4);
    reg_3[1] = first_Stack(call(reg_7, reg_8));
    reg_12 = get(reg_5, cns16());
    reg_13 = newStack();
    push_Stack(reg_13, reg_5);
    reg_3[2] = first_Stack(call(reg_12, reg_13));
    reg_16 = newStack();
    push_Stack(reg_16, lua$function(item168$new(reg_3)));
    return reg_16;
  }
  var mod31 = new Cobre.Module({
    "0": function$13,
  });
  var item172 = closure.build(mod31);
  var item172$new = item172.get("new");
  var mod36 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
  });
  var newTable = lua.get("newTable");
  var cns17 = Cobre.Lazy(function () { return lua$int(1)});
  var length = lua.get("length");
  var table_append = lua.get("table_append");
  var mod38 = new Cobre.Module({
    "0": tp2,
  });
  var cns18 = Cobre.Lazy(function () { return string("ipairs")});
  var lua$false = lua.get("false");
  function function$16 (reg_0, reg_1) {
    var reg_2, reg_5, reg_8, reg_9, reg_11, reg_12, reg_13, reg_14, reg_15, reg_16, reg_18, reg_24, reg_26;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_8 = get(reg_2[8], cns18());
    reg_9 = newStack();
    push_Stack(reg_9, reg_1[1]);
    reg_11 = call(reg_8, reg_9);
    reg_12 = next_Stack(reg_11);
    reg_13 = next_Stack(reg_11);
    reg_14 = next_Stack(reg_11);
    loop_1: while (true) {
      reg_15 = newStack();
      push_Stack(reg_15, reg_13);
      push_Stack(reg_15, reg_14);
      reg_16 = call(reg_12, reg_15);
      reg_14 = next_Stack(reg_16);
      reg_18 = next_Stack(reg_16);
      if (tobool(eq(reg_14, nil()))) break loop_1;
      if (tobool(eq(reg_5, reg_18))) {
        reg_24 = newStack();
        push_Stack(reg_24, lua$true());
        return reg_24;
      }
    }
    reg_26 = newStack();
    push_Stack(reg_26, lua$false());
    return reg_26;
  }
  var mod37 = new Cobre.Module({
    "0": function$16,
  });
  var item190 = closure.build(mod37);
  var item190$new = item190.get("new");
  function function$15 (reg_0, reg_1) {
    var reg_3, reg_4, reg_5, reg_6, reg_8, reg_9, reg_13;
    reg_3 = [reg_1, nil()];
    reg_4 = next_Stack(reg_0);
    reg_5 = newTable();
    reg_6 = cns17();
    reg_8 = get(reg_4, cns16());
    reg_9 = newStack();
    push_Stack(reg_9, reg_4);
    push_Stack(reg_9, cns17());
    push_Stack(reg_9, length(reg_4));
    table_append(reg_5, reg_6, call(reg_8, reg_9));
    reg_3[1] = reg_5;
    reg_13 = newStack();
    push_Stack(reg_13, lua$function(item190$new(reg_3)));
    return reg_13;
  }
  var mod35 = new Cobre.Module({
    "0": function$15,
  });
  var item194 = closure.build(mod35);
  var item194$new = item194.get("new");
  var mod40 = new Cobre.Module({
    "0": tp1,
  });
  var cns19 = Cobre.Lazy(function () { return string("%")});
  var ne = lua.get("ne");
  var add = lua.get("add");
  var cns20 = Cobre.Lazy(function () { return string("lower")});
  var cns21 = Cobre.Lazy(function () { return string("a")});
  var cns22 = Cobre.Lazy(function () { return string("c")});
  var cns23 = Cobre.Lazy(function () { return string("d")});
  var cns24 = Cobre.Lazy(function () { return string("g")});
  var cns25 = Cobre.Lazy(function () { return string("l")});
  var cns26 = Cobre.Lazy(function () { return string("p")});
  var cns27 = Cobre.Lazy(function () { return string("s")});
  var cns28 = Cobre.Lazy(function () { return string("u")});
  var cns29 = Cobre.Lazy(function () { return string("w")});
  var cns30 = Cobre.Lazy(function () { return string("x")});
  var cns31 = Cobre.Lazy(function () { return lua$int(2)});
  function function$17 (reg_0, reg_1) {
    var reg_4, reg_5, reg_7, reg_8, reg_14, reg_15, reg_17, reg_18, reg_22, reg_24, reg_25, reg_27, reg_71, reg_72, reg_75, reg_78, reg_79, reg_80, reg_85;
    var goto_41=false, goto_48=false, goto_55=false, goto_62=false, goto_69=false, goto_76=false, goto_83=false, goto_90=false, goto_97=false, goto_123=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_7 = get(reg_4, cns2());
    reg_8 = newStack();
    push_Stack(reg_8, reg_4);
    push_Stack(reg_8, reg_5);
    if (tobool(ne(first_Stack(call(reg_7, reg_8)), cns19()))) {
      reg_14 = newStack();
      return reg_14;
    }
    reg_15 = nil();
    reg_17 = get(reg_4, cns2());
    reg_18 = newStack();
    push_Stack(reg_18, reg_4);
    push_Stack(reg_18, add(reg_5, cns17()));
    reg_22 = first_Stack(call(reg_17, reg_18));
    reg_24 = get(reg_22, cns20());
    reg_25 = newStack();
    push_Stack(reg_25, reg_22);
    reg_27 = first_Stack(call(reg_24, reg_25));
    goto_41 = !tobool(eq(reg_27, cns21()));
    if (!goto_41) {
      reg_15 = reg_1[4];
    }
    if ((goto_41 || false)) {
      goto_41 = false;
      goto_48 = !tobool(eq(reg_27, cns22()));
      if (!goto_48) {
        reg_15 = reg_1[2];
      }
      if ((goto_48 || false)) {
        goto_48 = false;
        goto_55 = !tobool(eq(reg_27, cns23()));
        if (!goto_55) {
          reg_15 = reg_1[5];
        }
        if ((goto_55 || false)) {
          goto_55 = false;
          goto_62 = !tobool(eq(reg_27, cns24()));
          if (!goto_62) {
            reg_15 = reg_1[6];
          }
          if ((goto_62 || false)) {
            goto_62 = false;
            goto_69 = !tobool(eq(reg_27, cns25()));
            if (!goto_69) {
              reg_15 = reg_1[0];
            }
            if ((goto_69 || false)) {
              goto_69 = false;
              goto_76 = !tobool(eq(reg_27, cns26()));
              if (!goto_76) {
                reg_15 = reg_1[9];
              }
              if ((goto_76 || false)) {
                goto_76 = false;
                goto_83 = !tobool(eq(reg_27, cns27()));
                if (!goto_83) {
                  reg_15 = reg_1[3];
                }
                if ((goto_83 || false)) {
                  goto_83 = false;
                  goto_90 = !tobool(eq(reg_27, cns28()));
                  if (!goto_90) {
                    reg_15 = reg_1[1];
                  }
                  if ((goto_90 || false)) {
                    goto_90 = false;
                    goto_97 = !tobool(eq(reg_27, cns29()));
                    if (!goto_97) {
                      reg_15 = reg_1[7];
                    }
                    if ((goto_97 || false)) {
                      goto_97 = false;
                      if (tobool(eq(reg_27, cns30()))) {
                        reg_15 = reg_1[10];
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    goto_123 = !tobool(reg_15);
    if (!goto_123) {
      if (tobool(ne(reg_27, reg_22))) {
        reg_71 = reg_1[11];
        reg_72 = newStack();
        push_Stack(reg_72, reg_15);
        reg_15 = first_Stack(call(reg_71, reg_72));
      }
      reg_75 = newStack();
      push_Stack(reg_75, reg_15);
      push_Stack(reg_75, add(reg_5, cns31()));
      return reg_75;
    }
    if ((goto_123 || false)) {
      goto_123 = false;
      reg_78 = newStack();
      reg_79 = reg_1[12];
      reg_80 = newStack();
      push_Stack(reg_80, reg_22);
      push_Stack(reg_78, first_Stack(call(reg_79, reg_80)));
      push_Stack(reg_78, add(reg_5, cns31()));
      return reg_78;
    }
    reg_85 = newStack();
    return reg_85;
  }
  var mod39 = new Cobre.Module({
    "0": function$17,
  });
  var item220 = closure.build(mod39);
  var item220$new = item220.get("new");
  var mod42 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
  });
  var cns32 = Cobre.Lazy(function () { return string("^")});
  var cns33 = Cobre.Lazy(function () { return string("")});
  var cns34 = Cobre.Lazy(function () { return string("]")});
  var cns35 = Cobre.Lazy(function () { return string("-")});
  var concat = lua.get("concat");
  var cns36 = Cobre.Lazy(function () { return string("table")});
  var cns37 = Cobre.Lazy(function () { return string("insert")});
  var mod44 = new Cobre.Module({
    "0": tp2,
  });
  function f (reg_0, reg_1) {
    var reg_2, reg_5, reg_8, reg_9, reg_11, reg_12, reg_13, reg_14, reg_15, reg_16, reg_18, reg_22, reg_26, reg_28;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_8 = get(reg_2[8], cns18());
    reg_9 = newStack();
    push_Stack(reg_9, reg_1[1]);
    reg_11 = call(reg_8, reg_9);
    reg_12 = next_Stack(reg_11);
    reg_13 = next_Stack(reg_11);
    reg_14 = next_Stack(reg_11);
    loop_1: while (true) {
      reg_15 = newStack();
      push_Stack(reg_15, reg_13);
      push_Stack(reg_15, reg_14);
      reg_16 = call(reg_12, reg_15);
      reg_14 = next_Stack(reg_16);
      reg_18 = next_Stack(reg_16);
      if (tobool(eq(reg_14, nil()))) break loop_1;
      reg_22 = newStack();
      push_Stack(reg_22, reg_5);
      if (tobool(first_Stack(call(reg_18, reg_22)))) {
        reg_26 = newStack();
        push_Stack(reg_26, lua$true());
        return reg_26;
      }
    }
    reg_28 = newStack();
    push_Stack(reg_28, lua$false());
    return reg_28;
  }
  var mod43 = new Cobre.Module({
    "0": f,
  });
  var item242 = closure.build(mod43);
  var item242$new = item242.get("new");
  function function$18 (reg_0, reg_1) {
    var reg_3, reg_4, reg_5, reg_7, reg_8, reg_10, reg_14, reg_15, reg_18, reg_19, reg_20, reg_21, reg_22, reg_23, reg_26, reg_28, reg_33, reg_34, reg_36, reg_37, reg_38, reg_41, reg_42, reg_50, reg_51, reg_53, reg_54, reg_70, reg_71, reg_75, reg_76, reg_86, reg_87, reg_89, reg_90, reg_97, reg_98, reg_101;
    var goto_58=false, goto_90=false;
    reg_3 = [reg_1, nil()];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_7 = get(reg_4, cns2());
    reg_8 = newStack();
    push_Stack(reg_8, reg_4);
    push_Stack(reg_8, reg_5);
    reg_10 = first_Stack(call(reg_7, reg_8));
    if (tobool(eq(reg_10, cns32()))) {
      reg_14 = reg_1[13];
      reg_15 = newStack();
      push_Stack(reg_15, reg_4);
      push_Stack(reg_15, add(reg_5, cns17()));
      reg_18 = call(reg_14, reg_15);
      reg_19 = next_Stack(reg_18);
      reg_20 = next_Stack(reg_18);
      reg_21 = newStack();
      reg_22 = reg_1[11];
      reg_23 = newStack();
      push_Stack(reg_23, reg_19);
      push_Stack(reg_21, first_Stack(call(reg_22, reg_23)));
      push_Stack(reg_21, reg_20);
      return reg_21;
    }
    reg_26 = cns33();
    reg_3[1] = newTable();
    loop_1: while (true) {
      reg_28 = reg_10;
      if (tobool(reg_28)) {
        reg_28 = ne(reg_10, cns34());
      }
      if (!tobool(reg_28)) break loop_1;
      reg_33 = reg_1[14];
      reg_34 = newStack();
      push_Stack(reg_34, reg_4);
      push_Stack(reg_34, reg_5);
      push_Stack(reg_34, lua$true());
      reg_36 = call(reg_33, reg_34);
      reg_37 = next_Stack(reg_36);
      reg_38 = next_Stack(reg_36);
      goto_58 = !tobool(reg_37);
      if (!goto_58) {
        reg_5 = reg_38;
      }
      if ((goto_58 || false)) {
        goto_58 = false;
        reg_41 = get(reg_4, cns2());
        reg_42 = newStack();
        push_Stack(reg_42, reg_4);
        push_Stack(reg_42, add(reg_5, cns17()));
        goto_90 = !tobool(eq(first_Stack(call(reg_41, reg_42)), cns35()));
        if (!goto_90) {
          reg_50 = reg_1[15];
          reg_51 = newStack();
          push_Stack(reg_51, reg_10);
          reg_53 = get(reg_4, cns2());
          reg_54 = newStack();
          push_Stack(reg_54, reg_4);
          push_Stack(reg_54, add(reg_5, cns31()));
          append_Stack(reg_51, call(reg_53, reg_54));
          reg_37 = first_Stack(call(reg_50, reg_51));
          reg_5 = add(reg_5, cns31());
        }
        if ((goto_90 || false)) {
          goto_90 = false;
          reg_26 = concat(reg_26, reg_10);
          reg_5 = add(reg_5, cns17());
        }
      }
      if (tobool(reg_37)) {
        reg_70 = get(get(reg_1[8], cns36()), cns37());
        reg_71 = newStack();
        push_Stack(reg_71, reg_3[1]);
        push_Stack(reg_71, reg_37);
        reg_73 = call(reg_70, reg_71);
      }
      reg_75 = get(reg_4, cns3());
      reg_76 = newStack();
      push_Stack(reg_76, reg_4);
      push_Stack(reg_76, reg_5);
      push_Stack(reg_76, reg_5);
      reg_10 = first_Stack(call(reg_75, reg_76));
    }
    if (tobool(ne(reg_26, cns33()))) {
      reg_86 = get(get(reg_1[8], cns36()), cns37());
      reg_87 = newStack();
      push_Stack(reg_87, reg_3[1]);
      reg_89 = reg_1[12];
      reg_90 = newStack();
      push_Stack(reg_90, reg_26);
      append_Stack(reg_87, call(reg_89, reg_90));
      reg_92 = call(reg_86, reg_87);
    }
    if (tobool(eq(reg_10, cns34()))) {
      reg_97 = lua$function(item242$new(reg_3));
      reg_98 = newStack();
      push_Stack(reg_98, reg_97);
      push_Stack(reg_98, add(reg_5, cns17()));
      return reg_98;
    }
    reg_101 = newStack();
    return reg_101;
  }
  var mod41 = new Cobre.Module({
    "0": function$18,
  });
  var item246 = closure.build(mod41);
  var item246$new = item246.get("new");
  var mod46 = new Cobre.Module({
    "0": tp1,
  });
  var cns38 = Cobre.Lazy(function () { return string("[")});
  var cns39 = Cobre.Lazy(function () { return string(".")});
  function function$19 (reg_0, reg_1) {
    var reg_4, reg_5, reg_7, reg_8, reg_10, reg_14, reg_15, reg_16, reg_23, reg_27, reg_28, reg_29, reg_31;
    var goto_26=false, goto_38=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_7 = get(reg_4, cns2());
    reg_8 = newStack();
    push_Stack(reg_8, reg_4);
    push_Stack(reg_8, reg_5);
    reg_10 = first_Stack(call(reg_7, reg_8));
    goto_26 = !tobool(eq(reg_10, cns38()));
    if (!goto_26) {
      reg_14 = newStack();
      reg_15 = reg_1[13];
      reg_16 = newStack();
      push_Stack(reg_16, reg_4);
      push_Stack(reg_16, add(reg_5, cns17()));
      append_Stack(reg_14, call(reg_15, reg_16));
      return reg_14;
    }
    if ((goto_26 || false)) {
      goto_26 = false;
      goto_38 = !tobool(eq(reg_10, cns39()));
      if (!goto_38) {
        reg_23 = newStack();
        push_Stack(reg_23, reg_1[16]);
        push_Stack(reg_23, add(reg_5, cns17()));
        return reg_23;
      }
      if ((goto_38 || false)) {
        goto_38 = false;
        reg_27 = newStack();
        reg_28 = reg_1[14];
        reg_29 = newStack();
        push_Stack(reg_29, reg_4);
        push_Stack(reg_29, reg_5);
        append_Stack(reg_27, call(reg_28, reg_29));
        return reg_27;
      }
    }
    reg_31 = newStack();
    return reg_31;
  }
  var mod45 = new Cobre.Module({
    "0": function$19,
  });
  var item256 = closure.build(mod45);
  var item256$new = item256.get("new");
  var mod48 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
    "2": Cobre.Any,
  });
  var mod50 = new Cobre.Module({
    "0": tp3,
  });
  var sub = lua.get("sub");
  function function$21 (reg_0, reg_1) {
    var reg_5, reg_6, reg_8, reg_9, reg_20, reg_21, reg_22, reg_27;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_8 = get(reg_5, cns3());
    reg_9 = newStack();
    push_Stack(reg_9, reg_5);
    push_Stack(reg_9, reg_6);
    push_Stack(reg_9, sub(add(reg_6, length(reg_1[1])), cns17()));
    if (tobool(eq(first_Stack(call(reg_8, reg_9)), reg_1[1]))) {
      reg_20 = newStack();
      reg_21 = reg_1[2];
      reg_22 = newStack();
      push_Stack(reg_22, reg_5);
      push_Stack(reg_22, add(reg_6, length(reg_1[1])));
      append_Stack(reg_20, call(reg_21, reg_22));
      return reg_20;
    }
    reg_27 = newStack();
    return reg_27;
  }
  var mod49 = new Cobre.Module({
    "0": function$21,
  });
  var item271 = closure.build(mod49);
  var item271$new = item271.get("new");
  function function$20 (reg_0, reg_1) {
    var reg_2, reg_3, reg_6;
    reg_2 = nil();
    reg_3 = [reg_1, reg_2, reg_2];
    reg_3[1] = next_Stack(reg_0);
    reg_3[2] = next_Stack(reg_0);
    reg_6 = newStack();
    push_Stack(reg_6, lua$function(item271$new(reg_3)));
    return reg_6;
  }
  var mod47 = new Cobre.Module({
    "0": function$20,
  });
  var item275 = closure.build(mod47);
  var item275$new = item275.get("new");
  var mod52 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
    "2": Cobre.Any,
  });
  var mod54 = new Cobre.Module({
    "0": tp3,
  });
  var gt = lua.get("gt");
  function function$23 (reg_0, reg_1) {
    var reg_5, reg_6, reg_10, reg_11, reg_12, reg_14, reg_15, reg_20, reg_21, reg_22, reg_26;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    if (tobool(gt(reg_6, length(reg_5)))) {
      reg_10 = newStack();
      return reg_10;
    }
    reg_11 = reg_1[1];
    reg_12 = newStack();
    reg_14 = get(reg_5, cns16());
    reg_15 = newStack();
    push_Stack(reg_15, reg_5);
    push_Stack(reg_15, reg_6);
    append_Stack(reg_12, call(reg_14, reg_15));
    if (tobool(first_Stack(call(reg_11, reg_12)))) {
      reg_20 = newStack();
      reg_21 = reg_1[2];
      reg_22 = newStack();
      push_Stack(reg_22, reg_5);
      push_Stack(reg_22, add(reg_6, cns17()));
      append_Stack(reg_20, call(reg_21, reg_22));
      return reg_20;
    }
    reg_26 = newStack();
    return reg_26;
  }
  var mod53 = new Cobre.Module({
    "0": function$23,
  });
  var item290 = closure.build(mod53);
  var item290$new = item290.get("new");
  function function$22 (reg_0, reg_1) {
    var reg_2, reg_3, reg_6;
    reg_2 = nil();
    reg_3 = [reg_1, reg_2, reg_2];
    reg_3[1] = next_Stack(reg_0);
    reg_3[2] = next_Stack(reg_0);
    reg_6 = newStack();
    push_Stack(reg_6, lua$function(item290$new(reg_3)));
    return reg_6;
  }
  var mod51 = new Cobre.Module({
    "0": function$22,
  });
  var item294 = closure.build(mod51);
  var item294$new = item294.get("new");
  var mod56 = new Cobre.Module({
    "0": tp1,
  });
  function function$24 (reg_0, reg_1) {
    var reg_5, reg_6;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = newStack();
    push_Stack(reg_6, sub(reg_5, cns17()));
    return reg_6;
  }
  var mod55 = new Cobre.Module({
    "0": function$24,
  });
  var item301 = closure.build(mod55);
  var item301$new = item301.get("new");
  var mod58 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
    "2": Cobre.Any,
  });
  var mod60 = new Cobre.Module({
    "0": tp3,
  });
  function function$26 (reg_0, reg_1) {
    var reg_5, reg_6, reg_7, reg_9, reg_11, reg_12, reg_14, reg_15, reg_24, reg_25, reg_27, reg_29, reg_32;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_7 = reg_6;
    loop_2: while (true) {
      reg_9 = le(reg_7, length(reg_5));
      if (tobool(reg_9)) {
        reg_11 = reg_1[1];
        reg_12 = newStack();
        reg_14 = get(reg_5, cns16());
        reg_15 = newStack();
        push_Stack(reg_15, reg_5);
        push_Stack(reg_15, reg_7);
        append_Stack(reg_12, call(reg_14, reg_15));
        reg_9 = first_Stack(call(reg_11, reg_12));
      }
      if (!tobool(reg_9)) break loop_2;
      reg_7 = add(reg_7, cns17());
    }
    loop_1: while (tobool(ge(reg_7, reg_6))) {
      reg_24 = reg_1[2];
      reg_25 = newStack();
      push_Stack(reg_25, reg_5);
      push_Stack(reg_25, reg_7);
      reg_27 = first_Stack(call(reg_24, reg_25));
      if (tobool(reg_27)) {
        reg_29 = newStack();
        push_Stack(reg_29, reg_27);
        return reg_29;
      }
      reg_7 = sub(reg_7, cns17());
    }
    reg_32 = newStack();
    return reg_32;
  }
  var mod59 = new Cobre.Module({
    "0": function$26,
  });
  var item315 = closure.build(mod59);
  var item315$new = item315.get("new");
  function function$25 (reg_0, reg_1) {
    var reg_2, reg_3, reg_6;
    reg_2 = nil();
    reg_3 = [reg_1, reg_2, reg_2];
    reg_3[1] = next_Stack(reg_0);
    reg_3[2] = next_Stack(reg_0);
    reg_6 = newStack();
    push_Stack(reg_6, lua$function(item315$new(reg_3)));
    return reg_6;
  }
  var mod57 = new Cobre.Module({
    "0": function$25,
  });
  var item319 = closure.build(mod57);
  var item319$new = item319.get("new");
  var mod62 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
    "2": Cobre.Any,
  });
  var mod64 = new Cobre.Module({
    "0": tp3,
  });
  function function$28 (reg_0, reg_1) {
    var reg_5, reg_6, reg_9, reg_10, reg_12, reg_14, reg_16, reg_18, reg_19, reg_21, reg_22, reg_29, reg_30;
    var goto_42=false;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    loop_1: while (tobool(lua$true())) {
      reg_9 = reg_1[1];
      reg_10 = newStack();
      push_Stack(reg_10, reg_5);
      push_Stack(reg_10, reg_6);
      reg_12 = first_Stack(call(reg_9, reg_10));
      if (tobool(reg_12)) {
        reg_14 = newStack();
        push_Stack(reg_14, reg_12);
        return reg_14;
      }
      reg_16 = le(reg_6, length(reg_5));
      if (tobool(reg_16)) {
        reg_18 = reg_1[2];
        reg_19 = newStack();
        reg_21 = get(reg_5, cns16());
        reg_22 = newStack();
        push_Stack(reg_22, reg_5);
        push_Stack(reg_22, reg_6);
        append_Stack(reg_19, call(reg_21, reg_22));
        reg_16 = first_Stack(call(reg_18, reg_19));
      }
      goto_42 = !tobool(reg_16);
      if (!goto_42) {
        reg_6 = add(reg_6, cns17());
      }
      if ((goto_42 || false)) {
        goto_42 = false;
        reg_29 = newStack();
        return reg_29;
      }
    }
    reg_30 = newStack();
    return reg_30;
  }
  var mod63 = new Cobre.Module({
    "0": function$28,
  });
  var item333 = closure.build(mod63);
  var item333$new = item333.get("new");
  function function$27 (reg_0, reg_1) {
    var reg_2, reg_3, reg_6;
    reg_2 = nil();
    reg_3 = [reg_1, reg_2, reg_2];
    reg_3[2] = next_Stack(reg_0);
    reg_3[1] = next_Stack(reg_0);
    reg_6 = newStack();
    push_Stack(reg_6, lua$function(item333$new(reg_3)));
    return reg_6;
  }
  var mod61 = new Cobre.Module({
    "0": function$27,
  });
  var item337 = closure.build(mod61);
  var item337$new = item337.get("new");
  var mod66 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
    "2": Cobre.Any,
  });
  var mod68 = new Cobre.Module({
    "0": tp3,
  });
  function function$30 (reg_0, reg_1) {
    var reg_5, reg_6, reg_7, reg_8, reg_10, reg_11, reg_16, reg_17, reg_21, reg_23, reg_24, reg_25, reg_26;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_7 = reg_1[1];
    reg_8 = newStack();
    reg_10 = get(reg_5, cns16());
    reg_11 = newStack();
    push_Stack(reg_11, reg_5);
    push_Stack(reg_11, reg_6);
    append_Stack(reg_8, call(reg_10, reg_11));
    if (tobool(first_Stack(call(reg_7, reg_8)))) {
      reg_16 = reg_1[2];
      reg_17 = newStack();
      push_Stack(reg_17, reg_5);
      push_Stack(reg_17, add(reg_6, cns17()));
      reg_21 = first_Stack(call(reg_16, reg_17));
      if (tobool(reg_21)) {
        reg_23 = newStack();
        push_Stack(reg_23, reg_21);
        return reg_23;
      }
    }
    reg_24 = newStack();
    reg_25 = reg_1[2];
    reg_26 = newStack();
    push_Stack(reg_26, reg_5);
    push_Stack(reg_26, reg_6);
    append_Stack(reg_24, call(reg_25, reg_26));
    return reg_24;
  }
  var mod67 = new Cobre.Module({
    "0": function$30,
  });
  var item351 = closure.build(mod67);
  var item351$new = item351.get("new");
  function function$29 (reg_0, reg_1) {
    var reg_2, reg_3, reg_6;
    reg_2 = nil();
    reg_3 = [reg_1, reg_2, reg_2];
    reg_3[1] = next_Stack(reg_0);
    reg_3[2] = next_Stack(reg_0);
    reg_6 = newStack();
    push_Stack(reg_6, lua$function(item351$new(reg_3)));
    return reg_6;
  }
  var mod65 = new Cobre.Module({
    "0": function$29,
  });
  var item355 = closure.build(mod65);
  var item355$new = item355.get("new");
  var mod70 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
  });
  var mod72 = new Cobre.Module({
    "0": tp2,
  });
  var cns40 = Cobre.Lazy(function () { return string("type")});
  var cns41 = Cobre.Lazy(function () { return string("value")});
  function function$32 (reg_0, reg_1) {
    var reg_2, reg_5, reg_6, reg_11, reg_12, reg_14, reg_18;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_11 = get(get(reg_2[8], cns36()), cns37());
    reg_12 = newStack();
    push_Stack(reg_12, reg_1[1]);
    reg_14 = newTable();
    set(reg_14, cns40(), reg_5);
    set(reg_14, cns41(), reg_6);
    push_Stack(reg_12, reg_14);
    reg_17 = call(reg_11, reg_12);
    reg_18 = newStack();
    return reg_18;
  }
  var mod71 = new Cobre.Module({
    "0": function$32,
  });
  var item369 = closure.build(mod71);
  var item369$new = item369.get("new");
  var cns42 = Cobre.Lazy(function () { return string("+")});
  var cns43 = Cobre.Lazy(function () { return string("*")});
  var cns44 = Cobre.Lazy(function () { return string("?")});
  var cns45 = Cobre.Lazy(function () { return string("class")});
  var neg = lua.get("neg");
  var cns46 = Cobre.Lazy(function () { return lua$int(0)});
  function function$31 (reg_0, reg_1) {
    var reg_3, reg_4, reg_5, reg_8, reg_9, reg_13, reg_14, reg_15, reg_16, reg_17, reg_22, reg_27, reg_28, reg_34, reg_35, reg_37, reg_39, reg_52, reg_53, reg_59, reg_60, reg_63, reg_69, reg_70, reg_77, reg_83, reg_87, reg_89, reg_90, reg_92, reg_94, reg_101, reg_107, reg_108, reg_118, reg_119, reg_129, reg_130, reg_140, reg_141, reg_146, reg_147, reg_157, reg_158, reg_168, reg_169, reg_175;
    var goto_36=false, goto_99=false, goto_113=false, goto_144=false, goto_165=false, goto_181=false, goto_197=false, goto_222=false, goto_238=false;
    reg_3 = [reg_1, nil()];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_3[1] = newTable();
    reg_8 = lua$function(item369$new(reg_3));
    reg_9 = cns33();
    loop_2: while (tobool(le(reg_5, length(reg_4)))) {
      reg_13 = reg_1[17];
      reg_14 = newStack();
      push_Stack(reg_14, reg_4);
      push_Stack(reg_14, reg_5);
      reg_15 = call(reg_13, reg_14);
      reg_16 = next_Stack(reg_15);
      reg_17 = next_Stack(reg_15);
      goto_36 = !tobool(reg_16);
      if (!goto_36) {
        if (tobool(ne(reg_9, cns33()))) {
          reg_22 = newStack();
          push_Stack(reg_22, cns1());
          push_Stack(reg_22, reg_9);
          reg_24 = call(reg_8, reg_22);
          reg_9 = cns33();
        }
        reg_5 = reg_17;
      }
      if ((goto_36 || false)) {
        goto_36 = false;
        reg_27 = get(reg_4, cns2());
        reg_28 = newStack();
        push_Stack(reg_28, reg_4);
        push_Stack(reg_28, reg_5);
        reg_16 = first_Stack(call(reg_27, reg_28));
        reg_5 = add(reg_5, cns17());
      }
      reg_34 = get(reg_4, cns2());
      reg_35 = newStack();
      push_Stack(reg_35, reg_4);
      push_Stack(reg_35, reg_5);
      reg_37 = first_Stack(call(reg_34, reg_35));
      reg_39 = eq(reg_37, cns42());
      if (!tobool(reg_39)) {
        reg_39 = eq(reg_37, cns43());
      }
      if (!tobool(reg_39)) {
        reg_39 = eq(reg_37, cns35());
      }
      if (!tobool(reg_39)) {
        reg_39 = eq(reg_37, cns44());
      }
      goto_99 = !tobool(reg_39);
      if (!goto_99) {
        reg_52 = get(reg_1[8], cns40());
        reg_53 = newStack();
        push_Stack(reg_53, reg_16);
        if (tobool(eq(first_Stack(call(reg_52, reg_53)), cns1()))) {
          reg_59 = reg_1[12];
          reg_60 = newStack();
          push_Stack(reg_60, reg_16);
          reg_16 = first_Stack(call(reg_59, reg_60));
        }
        reg_63 = newStack();
        push_Stack(reg_63, reg_37);
        push_Stack(reg_63, reg_16);
        reg_64 = call(reg_8, reg_63);
        reg_5 = add(reg_5, cns17());
      }
      if ((goto_99 || false)) {
        goto_99 = false;
        reg_69 = get(reg_1[8], cns40());
        reg_70 = newStack();
        push_Stack(reg_70, reg_16);
        goto_113 = !tobool(eq(first_Stack(call(reg_69, reg_70)), cns1()));
        if (!goto_113) {
          reg_9 = concat(reg_9, reg_16);
        }
        if ((goto_113 || false)) {
          goto_113 = false;
          reg_77 = newStack();
          push_Stack(reg_77, cns45());
          push_Stack(reg_77, reg_16);
          reg_79 = call(reg_8, reg_77);
        }
      }
    }
    if (tobool(ne(reg_9, cns33()))) {
      reg_83 = newStack();
      push_Stack(reg_83, cns1());
      push_Stack(reg_83, reg_9);
      reg_85 = call(reg_8, reg_83);
    }
    reg_87 = reg_1[18];
    reg_89 = length(reg_3[1]);
    reg_90 = cns17();
    reg_92 = neg(cns17());
    reg_94 = lt(reg_92, cns46());
    loop_1: while (true) {
      goto_144 = tobool(reg_94);
      if (!goto_144) {
        if (tobool(gt(reg_89, reg_90))) break loop_1;
      }
      if ((goto_144 || false)) {
        goto_144 = false;
        if (tobool(lt(reg_89, reg_90))) break loop_1;
      }
      reg_101 = get(reg_3[1], reg_89);
      goto_165 = !tobool(eq(get(reg_101, cns40()), cns1()));
      if (!goto_165) {
        reg_107 = reg_1[19];
        reg_108 = newStack();
        push_Stack(reg_108, get(reg_101, cns41()));
        push_Stack(reg_108, reg_87);
        reg_87 = first_Stack(call(reg_107, reg_108));
      }
      if ((goto_165 || false)) {
        goto_165 = false;
        goto_181 = !tobool(eq(get(reg_101, cns40()), cns45()));
        if (!goto_181) {
          reg_118 = reg_1[20];
          reg_119 = newStack();
          push_Stack(reg_119, get(reg_101, cns41()));
          push_Stack(reg_119, reg_87);
          reg_87 = first_Stack(call(reg_118, reg_119));
        }
        if ((goto_181 || false)) {
          goto_181 = false;
          goto_197 = !tobool(eq(get(reg_101, cns40()), cns43()));
          if (!goto_197) {
            reg_129 = reg_1[21];
            reg_130 = newStack();
            push_Stack(reg_130, get(reg_101, cns41()));
            push_Stack(reg_130, reg_87);
            reg_87 = first_Stack(call(reg_129, reg_130));
          }
          if ((goto_197 || false)) {
            goto_197 = false;
            goto_222 = !tobool(eq(get(reg_101, cns40()), cns42()));
            if (!goto_222) {
              reg_140 = reg_1[21];
              reg_141 = newStack();
              push_Stack(reg_141, get(reg_101, cns41()));
              push_Stack(reg_141, reg_87);
              reg_87 = first_Stack(call(reg_140, reg_141));
              reg_146 = reg_1[20];
              reg_147 = newStack();
              push_Stack(reg_147, get(reg_101, cns41()));
              push_Stack(reg_147, reg_87);
              reg_87 = first_Stack(call(reg_146, reg_147));
            }
            if ((goto_222 || false)) {
              goto_222 = false;
              goto_238 = !tobool(eq(get(reg_101, cns40()), cns35()));
              if (!goto_238) {
                reg_157 = reg_1[22];
                reg_158 = newStack();
                push_Stack(reg_158, get(reg_101, cns41()));
                push_Stack(reg_158, reg_87);
                reg_87 = first_Stack(call(reg_157, reg_158));
              }
              if ((goto_238 || false)) {
                goto_238 = false;
                if (tobool(eq(get(reg_101, cns40()), cns44()))) {
                  reg_168 = reg_1[23];
                  reg_169 = newStack();
                  push_Stack(reg_169, get(reg_101, cns41()));
                  push_Stack(reg_169, reg_87);
                  reg_87 = first_Stack(call(reg_168, reg_169));
                }
              }
            }
          }
        }
      }
      reg_89 = add(reg_89, reg_92);
    }
    reg_175 = newStack();
    push_Stack(reg_175, reg_87);
    return reg_175;
  }
  var mod69 = new Cobre.Module({
    "0": function$31,
  });
  var item386 = closure.build(mod69);
  var item386$new = item386.get("new");
  var mod74 = new Cobre.Module({
    "0": tp1,
  });
  function function$33 (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_8, reg_9, reg_12, reg_13, reg_14, reg_15;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_7 = newTable();
    reg_8 = reg_1[24];
    reg_9 = newStack();
    push_Stack(reg_9, reg_5);
    push_Stack(reg_9, cns17());
    reg_12 = first_Stack(call(reg_8, reg_9));
    reg_13 = newStack();
    reg_14 = newStack();
    push_Stack(reg_14, reg_4);
    reg_15 = reg_6;
    if (!tobool(reg_15)) {
      reg_15 = cns17();
    }
    push_Stack(reg_14, reg_15);
    append_Stack(reg_13, call(reg_12, reg_14));
    return reg_13;
  }
  var mod73 = new Cobre.Module({
    "0": function$33,
  });
  var item394 = closure.build(mod73);
  var item394$new = item394.get("new");
  var cns47 = Cobre.Lazy(function () { return string("find")});
  var mod76 = new Cobre.Module({
    "0": tp1,
  });
  var cns48 = Cobre.Lazy(function () { return string("error")});
  var cns49 = Cobre.Lazy(function () { return string("bad argument #1 to 'string.find' (value expected)")});
  var cns50 = Cobre.Lazy(function () { return string("number")});
  var cns51 = Cobre.Lazy(function () { return string("tostring")});
  var cns52 = Cobre.Lazy(function () { return string("bad argument #1 to 'string.find' (string expected, got ")});
  var cns53 = Cobre.Lazy(function () { return string(")")});
  var cns54 = Cobre.Lazy(function () { return string("tonumber")});
  var cns55 = Cobre.Lazy(function () { return string("bad argument #2 to 'string.find' (number expected, got ")});
  var cns56 = Cobre.Lazy(function () { return string("$")});
  function string_find (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_12, reg_13, reg_18, reg_19, reg_27, reg_28, reg_33, reg_34, reg_42, reg_43, reg_44, reg_47, reg_48, reg_55, reg_62, reg_63, reg_70, reg_71, reg_72, reg_75, reg_76, reg_95, reg_100, reg_101, reg_103, reg_112, reg_114, reg_115, reg_120, reg_122, reg_124, reg_125, reg_134, reg_135, reg_141, reg_143, reg_144, reg_150, reg_153, reg_154, reg_164, reg_165, reg_171, reg_172, reg_175, reg_176, reg_177, reg_178, reg_180, reg_186, reg_188, reg_189, reg_193, reg_195;
    var goto_17=false, goto_37=false, goto_137=false, goto_164=false, goto_253=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_7 = next_Stack(reg_0);
    goto_17 = !tobool(not(reg_5));
    if (!goto_17) {
      reg_12 = get(reg_1[8], cns48());
      reg_13 = newStack();
      push_Stack(reg_13, cns49());
      reg_15 = call(reg_12, reg_13);
    }
    if ((goto_17 || false)) {
      goto_17 = false;
      reg_18 = get(reg_1[8], cns40());
      reg_19 = newStack();
      push_Stack(reg_19, reg_5);
      goto_37 = !tobool(eq(first_Stack(call(reg_18, reg_19)), cns50()));
      if (!goto_37) {
        reg_27 = get(reg_1[8], cns51());
        reg_28 = newStack();
        push_Stack(reg_28, reg_5);
        reg_5 = first_Stack(call(reg_27, reg_28));
      }
      if ((goto_37 || false)) {
        goto_37 = false;
        reg_33 = get(reg_1[8], cns40());
        reg_34 = newStack();
        push_Stack(reg_34, reg_5);
        if (tobool(ne(first_Stack(call(reg_33, reg_34)), cns1()))) {
          reg_42 = get(reg_1[8], cns48());
          reg_43 = newStack();
          reg_44 = cns52();
          reg_47 = get(reg_1[8], cns40());
          reg_48 = newStack();
          push_Stack(reg_48, reg_5);
          push_Stack(reg_43, concat(reg_44, concat(first_Stack(call(reg_47, reg_48)), cns53())));
          reg_54 = call(reg_42, reg_43);
        }
      }
    }
    reg_55 = reg_6;
    if (tobool(eq(reg_6, nil()))) {
      reg_6 = cns17();
    }
    reg_62 = get(reg_1[8], cns54());
    reg_63 = newStack();
    push_Stack(reg_63, reg_6);
    reg_6 = first_Stack(call(reg_62, reg_63));
    if (tobool(not(reg_6))) {
      reg_70 = get(reg_1[8], cns48());
      reg_71 = newStack();
      reg_72 = cns55();
      reg_75 = get(reg_1[8], cns40());
      reg_76 = newStack();
      push_Stack(reg_76, reg_55);
      push_Stack(reg_71, concat(reg_72, concat(first_Stack(call(reg_75, reg_76)), cns53())));
      reg_82 = call(reg_70, reg_71);
    }
    if (tobool(lt(reg_6, cns46()))) {
      reg_6 = add(add(length(reg_4), cns17()), reg_6);
    }
    if (tobool(lt(reg_6, cns17()))) {
      reg_6 = cns17();
    }
    goto_164 = !tobool(reg_7);
    if (!goto_164) {
      reg_95 = reg_6;
      reg_100 = sub(add(length(reg_4), cns17()), length(reg_5));
      reg_101 = cns17();
      reg_103 = lt(reg_101, cns46());
      loop_2: while (true) {
        goto_137 = tobool(reg_103);
        if (!goto_137) {
          if (tobool(gt(reg_95, reg_100))) break loop_2;
        }
        if ((goto_137 || false)) {
          goto_137 = false;
          if (tobool(lt(reg_95, reg_100))) break loop_2;
        }
        reg_112 = sub(add(reg_95, length(reg_5)), cns17());
        reg_114 = get(reg_4, cns3());
        reg_115 = newStack();
        push_Stack(reg_115, reg_4);
        push_Stack(reg_115, reg_95);
        push_Stack(reg_115, reg_112);
        if (tobool(eq(first_Stack(call(reg_114, reg_115)), reg_5))) {
          reg_120 = newStack();
          push_Stack(reg_120, reg_95);
          push_Stack(reg_120, reg_112);
          return reg_120;
        }
        reg_95 = add(reg_95, reg_101);
      }
    }
    if ((goto_164 || false)) {
      goto_164 = false;
      reg_122 = length(reg_4);
      reg_124 = get(reg_5, cns2());
      reg_125 = newStack();
      push_Stack(reg_125, reg_5);
      push_Stack(reg_125, cns17());
      if (tobool(eq(first_Stack(call(reg_124, reg_125)), cns32()))) {
        reg_122 = cns17();
        reg_134 = get(reg_5, cns3());
        reg_135 = newStack();
        push_Stack(reg_135, reg_5);
        push_Stack(reg_135, cns31());
        push_Stack(reg_135, neg(cns17()));
        reg_5 = first_Stack(call(reg_134, reg_135));
      }
      reg_141 = cns46();
      reg_143 = get(reg_5, cns2());
      reg_144 = newStack();
      push_Stack(reg_144, reg_5);
      push_Stack(reg_144, neg(cns17()));
      reg_150 = eq(first_Stack(call(reg_143, reg_144)), cns56());
      if (tobool(reg_150)) {
        reg_153 = get(reg_5, cns2());
        reg_154 = newStack();
        push_Stack(reg_154, reg_5);
        push_Stack(reg_154, neg(cns31()));
        reg_150 = ne(first_Stack(call(reg_153, reg_154)), cns19());
      }
      if (tobool(reg_150)) {
        reg_141 = length(reg_4);
        reg_164 = get(reg_5, cns3());
        reg_165 = newStack();
        push_Stack(reg_165, reg_5);
        push_Stack(reg_165, cns17());
        push_Stack(reg_165, neg(cns31()));
        reg_5 = first_Stack(call(reg_164, reg_165));
      }
      reg_171 = reg_1[24];
      reg_172 = newStack();
      push_Stack(reg_172, reg_5);
      push_Stack(reg_172, cns17());
      reg_175 = first_Stack(call(reg_171, reg_172));
      reg_176 = reg_6;
      reg_177 = reg_122;
      reg_178 = cns17();
      reg_180 = lt(reg_178, cns46());
      loop_1: while (true) {
        goto_253 = tobool(reg_180);
        if (!goto_253) {
          if (tobool(gt(reg_176, reg_177))) break loop_1;
        }
        if ((goto_253 || false)) {
          goto_253 = false;
          if (tobool(lt(reg_176, reg_177))) break loop_1;
        }
        reg_186 = newStack();
        push_Stack(reg_186, reg_4);
        push_Stack(reg_186, reg_176);
        reg_188 = first_Stack(call(reg_175, reg_186));
        reg_189 = reg_188;
        if (tobool(reg_189)) {
          reg_189 = ge(reg_188, reg_141);
        }
        if (tobool(reg_189)) {
          reg_193 = newStack();
          push_Stack(reg_193, reg_176);
          push_Stack(reg_193, reg_188);
          return reg_193;
        }
        reg_176 = add(reg_176, reg_178);
      }
    }
    reg_195 = newStack();
    return reg_195;
  }
  var mod75 = new Cobre.Module({
    "0": string_find,
  });
  var item410 = closure.build(mod75);
  var item410$new = item410.get("new");
  var cns57 = Cobre.Lazy(function () { return string("match")});
  var mod78 = new Cobre.Module({
    "0": tp1,
  });
  function string_match (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_9, reg_10, reg_11, reg_12, reg_13, reg_15, reg_17, reg_18, reg_20;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_7 = next_Stack(reg_0);
    reg_9 = get(reg_4, cns47());
    reg_10 = newStack();
    push_Stack(reg_10, reg_4);
    push_Stack(reg_10, reg_5);
    push_Stack(reg_10, reg_6);
    push_Stack(reg_10, reg_7);
    reg_11 = call(reg_9, reg_10);
    reg_12 = next_Stack(reg_11);
    reg_13 = next_Stack(reg_11);
    if (tobool(reg_12)) {
      reg_15 = newStack();
      reg_17 = get(reg_4, cns3());
      reg_18 = newStack();
      push_Stack(reg_18, reg_4);
      push_Stack(reg_18, reg_12);
      push_Stack(reg_18, reg_13);
      append_Stack(reg_15, call(reg_17, reg_18));
      return reg_15;
    }
    reg_20 = newStack();
    return reg_20;
  }
  var mod77 = new Cobre.Module({
    "0": string_match,
  });
  var item417 = closure.build(mod77);
  var item417$new = item417.get("new");
  function lua_main (reg_0) {
    var reg_1, reg_2, reg_5, reg_6, reg_61, reg_62, reg_67, reg_68, reg_71;
    reg_1 = nil();
    reg_2 = [reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1, reg_1];
    reg_2[8] = reg_0;
    reg_5 = get(reg_2[8], cns1());
    reg_6 = cns2();
    set(reg_5, reg_6, lua$function(item26$new(reg_2)));
    reg_2[5] = lua$function(item40$new(reg_2));
    reg_2[0] = lua$function(item49$new(reg_2));
    reg_2[1] = lua$function(item58$new(reg_2));
    reg_2[4] = lua$function(item68$new(reg_2));
    reg_2[3] = lua$function(item79$new(reg_2));
    reg_2[2] = lua$function(item88$new(reg_2));
    reg_2[6] = lua$function(item98$new(reg_2));
    reg_2[7] = lua$function(item107$new(reg_2));
    reg_2[9] = lua$function(item116$new(reg_2));
    reg_2[10] = lua$function(item125$new(reg_2));
    reg_2[16] = lua$function(item133$new(reg_2));
    reg_2[11] = lua$function(item151$new(reg_2));
    reg_2[15] = lua$function(item172$new(reg_2));
    reg_2[12] = lua$function(item194$new(reg_2));
    reg_2[14] = lua$function(item220$new(reg_2));
    reg_2[13] = lua$function(item246$new(reg_2));
    reg_2[17] = lua$function(item256$new(reg_2));
    reg_2[19] = lua$function(item275$new(reg_2));
    reg_2[20] = lua$function(item294$new(reg_2));
    reg_2[18] = lua$function(item301$new(reg_2));
    reg_2[21] = lua$function(item319$new(reg_2));
    reg_2[22] = lua$function(item337$new(reg_2));
    reg_2[23] = lua$function(item355$new(reg_2));
    reg_2[24] = lua$function(item386$new(reg_2));
    reg_58 = lua$function(item394$new(reg_2));
    reg_61 = get(reg_2[8], cns1());
    reg_62 = cns47();
    set(reg_61, reg_62, lua$function(item410$new(reg_2)));
    reg_67 = get(reg_2[8], cns1());
    reg_68 = cns57();
    set(reg_67, reg_68, lua$function(item417$new(reg_2)));
    reg_71 = newStack();
    return reg_71;
  }
  var get_global = lua.get("get_global");
  function main () {
    reg_1 = lua_main(get_global());
    return;
  }
  var mod1 = new Cobre.Module({
    "lua_main": lua_main,
    "main": main,
  });
  return mod1;
});
Cobre.$export("lua", function () {
  var mod2 = new Cobre.Module({
    "0": Cobre.Bool,
  });
  var tp1 = new Cobre.Record([Cobre.Bool]);
  var mod3 = new Cobre.Module({
    "0": tp1,
  });
  var tp2 = new Cobre.Type();
  var mod5 = new Cobre.Module({
    "0": Cobre.Any,
  });
  var tp3 = new Cobre.Array(Cobre.Any);
  var mod4 = new Cobre.Module({
    "0": Cobre.Int,
    "1": tp3,
  });
  var tp4 = new Cobre.Record([Cobre.Int,tp3]);
  var mod6 = new Cobre.Module({
    "0": Cobre.Any,
    "1": Cobre.Any,
  });
  var tp5 = new Cobre.Record([Cobre.Any,Cobre.Any]);
  var mod8 = new Cobre.Module({
    "0": tp5,
  });
  var tp6 = new Cobre.Array(tp5);
  var mod7 = new Cobre.Module({
    "0": tp6,
    "1": new Cobre.Null(tp9),
  });
  var mod9 = new Cobre.Module({
    "0": tp9,
  });
  var mod10 = new Cobre.Module({
    "0": tp8,
  });
  var tp7 = new Cobre.Type();
  var tp8 = new Cobre.Record([tp6,new Cobre.Null(tp7)]);
  var mod10 = new Cobre.Module({
    "0": tp8,
  });
  var tp9 = new Cobre.Type();
  var mod9 = new Cobre.Module({
    "0": tp9,
  });
  var mod7 = new Cobre.Module({
    "0": tp6,
    "1": new Cobre.Null(tp9),
  });
  var tp10 = new Cobre.Record([tp6,new Cobre.Null(tp9)]);
  var mod11 = new Cobre.Module({
    "0": Cobre.Bool,
    "1": tp10,
    "2": tp10,
    "3": tp10,
    "4": tp10,
  });
  var tp11 = new Cobre.Record([Cobre.Bool,tp10,tp10,tp10,tp10]);
  var mod12 = new Cobre.Module({
    "in0": tp4,
    "out0": tp4,
  });
  var tp12 = new Cobre.Function([tp4], [tp4]);
  function more (reg_0) {
    var reg_1, reg_4;
    reg_1 = reg_0[0];
    reg_4 = (reg_1 < reg_0[1].length);
    return reg_4;
  }
  var mod13 = new Cobre.Module({
    "0": tp2,
  });
  function nil () {
    var reg_3;
    reg_3 = tp2.wrap([true]);
    return reg_3;
  }
  function first (reg_0) {
    var reg_2, reg_4, reg_5;
    if (more(reg_0)) {
      reg_2 = reg_0[0];
      reg_4 = reg_0[1][reg_2];
      return reg_4;
      if (true) { goto(9); };
    }
    reg_5 = nil();
    return reg_5;
  }
  function next (reg_0) {
    var reg_2, reg_4, reg_8;
    if (more(reg_0)) {
      reg_2 = reg_0[0];
      reg_4 = reg_0[1][reg_2];
      reg_0[0] = (reg_0[0] + 1);
      return reg_4;
      if (true) { goto(13); };
    }
    reg_8 = nil();
    return reg_8;
  }
  function push (reg_0, reg_1) {
    reg_0[1].push(reg_1);
    return;
  }
  function append (reg_0, reg_1) {
    var reg_2;
    reg_2 = reg_1[0];
    loop_1: while ((reg_2 < reg_1[1].length)) {
      push(reg_0, reg_1[1][reg_2]);
      reg_2 = (reg_2 + 1);
    }
    return;
  }
  function length (reg_0) {
    var reg_4, reg_7;
    reg_4 = (reg_0[1].length - reg_0[0]);
    if ((reg_4 < 0)) {
      reg_7 = 0;
      return reg_7;
    }
    return reg_4;
  }
  function copy (reg_0) {
    var reg_3;
    reg_3 = [reg_0[0], reg_0[1]];
    return reg_3;
  }
  var mod14 = new Cobre.Module({
    "0": Cobre.String,
  });
  function testStr (reg_0) {
    var reg_1;
    reg_1 = Cobre.String.test(reg_0);
    return reg_1;
  }
  var mod15 = new Cobre.Module({
    "0": Cobre.Int,
  });
  function testInt (reg_0) {
    var reg_1;
    reg_1 = Cobre.Int.test(reg_0);
    return reg_1;
  }
  function checkKey (reg_0) {
    var reg_1;
    reg_1 = testStr(reg_0);
    if (!reg_1) {
      reg_1 = testInt(reg_0);
    }
    return reg_1;
  }
  function getInt (reg_0) {
    var reg_1;
    reg_1 = Cobre.Int.unwrap(reg_0);
    return reg_1;
  }
  function getStr (reg_0) {
    var reg_1;
    reg_1 = Cobre.String.unwrap(reg_0);
    return reg_1;
  }
  var mod16 = new Cobre.Module({
    "0": Cobre.Bool,
  });
  function testBool (reg_0) {
    var reg_1;
    reg_1 = Cobre.Bool.test(reg_0);
    return reg_1;
  }
  function getBool (reg_0) {
    var reg_1;
    reg_1 = Cobre.Bool.unwrap(reg_0);
    return reg_1;
  }
  function testNil (reg_0) {
    var reg_1;
    reg_1 = tp2.test(reg_0);
    return reg_1;
  }
  function equals (reg_0, reg_1) {
    var reg_2, reg_7, reg_8, reg_13, reg_14, reg_17, reg_18, reg_19, reg_20, reg_21, reg_24, reg_27, reg_28;
    reg_2 = testInt(reg_0);
    if (reg_2) {
      reg_2 = testInt(reg_1);
    }
    if (reg_2) {
      reg_7 = (getInt(reg_0) == getInt(reg_1));
      return reg_7;
    }
    reg_8 = testStr(reg_0);
    if (reg_8) {
      reg_8 = testStr(reg_1);
    }
    if (reg_8) {
      reg_13 = (getStr(reg_0) == getStr(reg_1));
      return reg_13;
    }
    reg_14 = testBool(reg_0);
    if (reg_14) {
      reg_14 = testBool(reg_1);
    }
    if (reg_14) {
      reg_17 = getBool(reg_0);
      reg_18 = getBool(reg_1);
      reg_20 = reg_17;
      if (reg_20) {
        reg_20 = reg_18;
      }
      reg_19 = reg_20;
      if (!reg_19) {
        reg_21 = !reg_17;
        if (reg_21) {
          reg_21 = !reg_18;
        }
        reg_19 = reg_21;
      }
      return reg_19;
    }
    reg_24 = testNil(reg_0);
    if (reg_24) {
      reg_24 = testNil(reg_1);
    }
    if (reg_24) {
      reg_27 = true;
      return reg_27;
    }
    reg_28 = false;
    return reg_28;
  }
  function get (reg_0, reg_1) {
    var reg_4, reg_5, reg_10, reg_13, reg_16;
    if (!checkKey(reg_1)) {
      reg_4 = nil();
      return reg_4;
    }
    reg_5 = 0;
    loop_1: while ((reg_5 < reg_0[0].length)) {
      reg_10 = reg_0[0][reg_5];
      if (equals(reg_1, reg_10[0])) {
        reg_13 = reg_10[1];
        return reg_13;
      }
      reg_5 = (reg_5 + 1);
    }
    reg_16 = nil();
    return reg_16;
  }
  var mod17 = new Cobre.Module({
    "0": tp10,
  });
  function testTable (reg_0) {
    var reg_1;
    reg_1 = tp10.test(reg_0);
    return reg_1;
  }
  var mod18 = new Cobre.Module({
    "0": tp12,
  });
  function testFn (reg_0) {
    var reg_1;
    reg_1 = tp12.test(reg_0);
    return reg_1;
  }
  function typestr (reg_0) {
    var reg_2, reg_4, reg_6, reg_8, reg_10, reg_12, reg_13;
    if (testTable(reg_0)) {
      reg_2 = "table";
      return reg_2;
      if (true) { goto(32); };
    }
    if (testStr(reg_0)) {
      reg_4 = "string";
      return reg_4;
      if (true) { goto(32); };
    }
    if (testInt(reg_0)) {
      reg_6 = "number";
      return reg_6;
      if (true) { goto(32); };
    }
    if (testNil(reg_0)) {
      reg_8 = "nil";
      return reg_8;
      if (true) { goto(32); };
    }
    if (testBool(reg_0)) {
      reg_10 = "bool";
      return reg_10;
      if (true) { goto(32); };
    }
    if (testFn(reg_0)) {
      reg_12 = "function";
      return reg_12;
      if (true) { goto(32); };
    }
    reg_13 = "unknown";
    return reg_13;
  }
  function tostr (reg_0) {
    var reg_2, reg_5, reg_8, reg_9, reg_10;
    var goto_18=false;
    if (testStr(reg_0)) {
      reg_2 = getStr(reg_0);
      return reg_2;
      if (true) { goto(23); };
    }
    if (testInt(reg_0)) {
      reg_5 = String(getInt(reg_0));
      return reg_5;
      if (true) { goto(23); };
    }
    if (testBool(reg_0)) {
      goto_18 = !getBool(reg_0);
      if (!goto_18) {
        reg_8 = "true";
        return reg_8;
      }
      if ((goto_18 || false)) {
        goto_18 = false;
        reg_9 = "false";
        return reg_9;
      }
      if (true) { goto(23); };
    }
    reg_10 = typestr(reg_0);
    return reg_10;
  }
  function set (reg_0, reg_1, reg_2) {
    var reg_10, reg_15, reg_20;
    if (!checkKey(reg_1)) {
      Cobre.system.error((("Lua: " + tostr(reg_1)) + " is not a valid key"));
    }
    reg_10 = 0;
    loop_1: while ((reg_10 < reg_0[0].length)) {
      reg_15 = reg_0[0][reg_10];
      if (equals(reg_1, reg_15[0])) {
        reg_15[1] = reg_2;
        return;
      }
      reg_10 = (reg_10 + 1);
    }
    reg_20 = [reg_1, reg_2];
    reg_0[0].push(reg_20);
    return;
  }
  function nextKey (reg_0, reg_1) {
    var reg_2, reg_8, reg_11, reg_12, reg_21, reg_26, reg_29, reg_30, reg_33;
    reg_2 = testNil(reg_1);
    if (reg_2) {
      reg_2 = (reg_0[0].length > 0);
    }
    if (reg_2) {
      reg_8 = 0;
      reg_11 = reg_0[0][reg_8][0];
      return reg_11;
    }
    reg_12 = 0;
    loop_1: while ((reg_12 < reg_0[0].length)) {
      if (equals(reg_1, reg_0[0][reg_12][0])) {
        reg_21 = (reg_12 + 1);
        if ((reg_21 < reg_0[0].length)) {
          reg_26 = (reg_12 + 1);
          reg_29 = reg_0[0][reg_26][0];
          return reg_29;
        }
        reg_30 = nil();
        return reg_30;
      }
      reg_12 = (reg_12 + 1);
    }
    reg_33 = nil();
    return reg_33;
  }
  function anyInt (reg_0) {
    var reg_1;
    reg_1 = Cobre.Int.wrap(reg_0);
    return reg_1;
  }
  function anyStr (reg_0) {
    var reg_1;
    reg_1 = Cobre.String.wrap(reg_0);
    return reg_1;
  }
  function anyTable (reg_0) {
    var reg_1;
    reg_1 = tp10.wrap(reg_0);
    return reg_1;
  }
  function anyFn (reg_0) {
    var reg_1;
    reg_1 = tp12.wrap(reg_0);
    return reg_1;
  }
  function anyBool (reg_0) {
    var reg_1;
    reg_1 = Cobre.Bool.wrap(reg_0);
    return reg_1;
  }
  function getTable (reg_0) {
    var reg_1;
    reg_1 = tp10.unwrap(reg_0);
    return reg_1;
  }
  function getFn (reg_0) {
    var reg_1;
    reg_1 = tp12.unwrap(reg_0);
    return reg_1;
  }
  function newStack () {
    var reg_2;
    reg_2 = [0, []];
    return reg_2;
  }
  function atoi (reg_0) {
    var reg_1, reg_2, reg_5, reg_6, reg_7, reg_8, reg_10;
    reg_1 = 0;
    reg_2 = 0;
    loop_1: while ((reg_2 < reg_0.length)) {
      var _r = Cobre.String.charat(reg_0, reg_2); reg_6 = _r[0]; reg_7 = _r[1];
      reg_5 = reg_6;
      reg_2 = reg_7;
      reg_8 = reg_5.charCodeAt(0);
      reg_10 = (reg_1 * 10);
      reg_1 = (reg_10 + (reg_8 - 48));
    }
    return reg_1;
  }
  function isDigit (reg_0) {
    var reg_5, reg_8;
    if ((reg_0 >= 48)) {
      if ((reg_0 <= 57)) {
        reg_5 = true;
        return reg_5;
      }
    }
    reg_8 = (0 < 0);
    return reg_8;
  }
  function isSpace (reg_0) {
    var reg_3, reg_6, reg_9, reg_12;
    if ((reg_0 == 9)) {
      reg_3 = true;
      return reg_3;
    }
    if ((reg_0 == 10)) {
      reg_6 = true;
      return reg_6;
    }
    if ((reg_0 == 32)) {
      reg_9 = true;
      return reg_9;
    }
    reg_12 = (0 < 0);
    return reg_12;
  }
  function parseNum (reg_0) {
    var reg_1, reg_2, reg_6, reg_7, reg_8, reg_9, reg_11, reg_15;
    reg_1 = 0;
    reg_2 = 0;
    reg_3 = 0;
    loop_1: while ((reg_2 < reg_0.length)) {
      var _r = Cobre.String.charat(reg_0, reg_2); reg_7 = _r[0]; reg_8 = _r[1];
      reg_6 = reg_7;
      reg_2 = reg_8;
      reg_9 = reg_6.charCodeAt(0);
      reg_11 = (reg_1 * 10);
      reg_1 = (reg_11 + (reg_9 - 48));
    }
    reg_15 = true;
    return [reg_1, reg_15];
  }
  function getNum (reg_0) {
    var reg_2, reg_3, reg_6, reg_7, reg_8, reg_9, reg_10, reg_11;
    var goto_6=false;
    goto_6 = !testInt(reg_0);
    if (!goto_6) {
      reg_2 = getInt(reg_0);
      reg_3 = true;
      return [reg_2, reg_3];
    }
    if ((goto_6 || false)) {
      goto_6 = false;
      if (testStr(reg_0)) {
        var _r = parseNum(getStr(reg_0)); reg_8 = _r[0]; reg_9 = _r[1];
        reg_6 = reg_8;
        reg_7 = reg_9;
        return [reg_6, reg_7];
      }
    }
    reg_10 = 0;
    reg_11 = false;
    return [reg_10, reg_11];
  }
  function getNums (reg_0, reg_1) {
    var reg_2, reg_3, reg_4, reg_5, reg_6, reg_7, reg_8, reg_9, reg_10, reg_11, reg_12;
    var _r = getNum(reg_0); reg_5 = _r[0]; reg_6 = _r[1];
    reg_2 = reg_5;
    reg_4 = reg_6;
    if (reg_4) {
      var _r = getNum(reg_1); reg_7 = _r[0]; reg_8 = _r[1];
      reg_3 = reg_7;
      reg_4 = reg_8;
      if (reg_4) {
        reg_9 = true;
        return [reg_2, reg_3, reg_9];
      }
    }
    reg_10 = 0;
    reg_11 = 0;
    reg_12 = false;
    return [reg_10, reg_11, reg_12];
  }
  function getInts (reg_0, reg_1) {
    var reg_4, reg_5, reg_8, reg_9, reg_10, reg_11;
    if (testInt(reg_0)) {
      if (testInt(reg_1)) {
        reg_4 = getInt(reg_0);
        reg_5 = getInt(reg_1);
        reg_8 = (1 > 0);
        return [reg_4, reg_5, reg_8];
      }
    }
    reg_9 = 0;
    reg_10 = 0;
    reg_11 = false;
    return [reg_9, reg_10, reg_11];
  }
  function add (reg_0, reg_1) {
    var reg_2, reg_3, reg_4, reg_5, reg_6, reg_7, reg_9, reg_10, reg_11, reg_12, reg_14;
    var _r = getInts(reg_0, reg_1); reg_5 = _r[0]; reg_6 = _r[1]; reg_7 = _r[2];
    reg_3 = reg_5;
    reg_4 = reg_6;
    reg_2 = reg_7;
    if (reg_2) {
      reg_9 = anyInt((reg_3 + reg_4));
      return reg_9;
    }
    var _r = getNums(reg_0, reg_1); reg_10 = _r[0]; reg_11 = _r[1]; reg_12 = _r[2];
    reg_3 = reg_10;
    reg_4 = reg_11;
    reg_2 = reg_12;
    if (reg_2) {
      reg_14 = anyInt((reg_3 + reg_4));
      return reg_14;
    }
    Cobre.system.error("Lua: attempt to perform arithmetic on a non-numeric value");
  }
  function sub (reg_0, reg_1) {
    var reg_2, reg_3, reg_4, reg_5, reg_6, reg_7, reg_9, reg_10, reg_11, reg_12, reg_14;
    var _r = getInts(reg_0, reg_1); reg_5 = _r[0]; reg_6 = _r[1]; reg_7 = _r[2];
    reg_3 = reg_5;
    reg_4 = reg_6;
    reg_2 = reg_7;
    if (reg_2) {
      reg_9 = anyInt((reg_3 - reg_4));
      return reg_9;
    }
    var _r = getNums(reg_0, reg_1); reg_10 = _r[0]; reg_11 = _r[1]; reg_12 = _r[2];
    reg_3 = reg_10;
    reg_4 = reg_11;
    reg_2 = reg_12;
    if (reg_2) {
      reg_14 = anyInt((reg_3 - reg_4));
      return reg_14;
    }
    Cobre.system.error("Lua: attempt to perform arithmetic on a non-numeric value");
  }
  function mul (reg_0, reg_1) {
    var reg_2, reg_3, reg_4, reg_5, reg_6, reg_7, reg_9, reg_10, reg_11, reg_12, reg_14;
    var _r = getInts(reg_0, reg_1); reg_5 = _r[0]; reg_6 = _r[1]; reg_7 = _r[2];
    reg_3 = reg_5;
    reg_4 = reg_6;
    reg_2 = reg_7;
    if (reg_2) {
      reg_9 = anyInt((reg_3 * reg_4));
      return reg_9;
    }
    var _r = getNums(reg_0, reg_1); reg_10 = _r[0]; reg_11 = _r[1]; reg_12 = _r[2];
    reg_3 = reg_10;
    reg_4 = reg_11;
    reg_2 = reg_12;
    if (reg_2) {
      reg_14 = anyInt((reg_3 * reg_4));
      return reg_14;
    }
    Cobre.system.error("Lua: attempt to perform arithmetic on a non-numeric value");
  }
  function div (reg_0, reg_1) {
    var reg_2, reg_3, reg_4, reg_5, reg_6, reg_7, reg_9, reg_10, reg_11, reg_12, reg_14;
    var _r = getInts(reg_0, reg_1); reg_5 = _r[0]; reg_6 = _r[1]; reg_7 = _r[2];
    reg_3 = reg_5;
    reg_4 = reg_6;
    reg_2 = reg_7;
    if (reg_2) {
      reg_9 = anyInt(((reg_3 / reg_4) | 0));
      return reg_9;
    }
    var _r = getNums(reg_0, reg_1); reg_10 = _r[0]; reg_11 = _r[1]; reg_12 = _r[2];
    reg_3 = reg_10;
    reg_4 = reg_11;
    reg_2 = reg_12;
    if (reg_2) {
      reg_14 = anyInt(((reg_3 / reg_4) | 0));
      return reg_14;
    }
    Cobre.system.error("Lua: attempt to perform arithmetic on a non-numeric value");
  }
  function concat (reg_0, reg_1) {
    var reg_5;
    reg_5 = anyStr((tostr(reg_0) + tostr(reg_1)));
    return reg_5;
  }
  function lua$true () {
    var reg_1;
    reg_1 = Cobre.Bool.wrap(true);
    return reg_1;
  }
  function lua$false () {
    var reg_1;
    reg_1 = Cobre.Bool.wrap(false);
    return reg_1;
  }
  function tobool (reg_0) {
    var reg_2, reg_4, reg_5;
    if (testBool(reg_0)) {
      reg_2 = getBool(reg_0);
      return reg_2;
      if (true) { goto(12); };
    }
    if (testNil(reg_0)) {
      reg_4 = false;
      return reg_4;
      if (true) { goto(12); };
    }
    reg_5 = true;
    return reg_5;
  }
  function cmp (reg_0, reg_1) {
    var reg_2, reg_5, reg_6, reg_10, reg_12, reg_13, reg_14, reg_17, reg_18, reg_19, reg_20, reg_21, reg_23, reg_25, reg_27, reg_28, reg_30, reg_34, reg_36, reg_42, reg_44, reg_45;
    reg_2 = testInt(reg_0);
    if (reg_2) {
      reg_2 = testInt(reg_1);
    }
    if (reg_2) {
      reg_5 = getInt(reg_0);
      reg_6 = getInt(reg_1);
      if ((reg_5 < reg_6)) {
        reg_10 = (0 - 1);
        return reg_10;
      }
      if ((reg_5 == reg_6)) {
        reg_12 = 0;
        return reg_12;
      }
      reg_13 = 1;
      return reg_13;
    }
    reg_14 = testStr(reg_0);
    if (reg_14) {
      reg_14 = testStr(reg_1);
    }
    if (reg_14) {
      reg_17 = getStr(reg_0);
      reg_18 = getStr(reg_1);
      reg_19 = reg_17.length;
      reg_20 = reg_18.length;
      reg_21 = reg_19;
      if ((reg_20 < reg_19)) {
        reg_21 = reg_20;
      }
      reg_23 = 0;
      loop_1: while ((reg_23 < reg_21)) {
        var _r = Cobre.String.charat(reg_17, reg_23); reg_25 = _r[0]; reg_26 = _r[1];
        reg_27 = reg_25.charCodeAt(0);
        var _r = Cobre.String.charat(reg_18, reg_23); reg_28 = _r[0]; reg_29 = _r[1];
        reg_30 = reg_28.charCodeAt(0);
        if ((reg_27 < reg_30)) {
          reg_34 = (0 - 1);
          return reg_34;
        }
        if ((reg_27 > reg_30)) {
          reg_36 = 1;
          return reg_36;
        }
        reg_23 = (reg_23 + 1);
      }
      if ((reg_19 < reg_20)) {
        reg_42 = (0 - 1);
        return reg_42;
      }
      if ((reg_19 > reg_20)) {
        reg_44 = 1;
        return reg_44;
      }
      reg_45 = 0;
      return reg_45;
    }
    Cobre.system.error(((("Lua: attempt to compare " + typestr(reg_0)) + " with ") + typestr(reg_1)));
  }
  function eq (reg_0, reg_1) {
    var reg_3;
    reg_3 = Cobre.Bool.wrap(equals(reg_0, reg_1));
    return reg_3;
  }
  function ne (reg_0, reg_1) {
    var reg_4;
    reg_4 = anyBool(!equals(reg_0, reg_1));
    return reg_4;
  }
  function lt (reg_0, reg_1) {
    var reg_5;
    reg_5 = anyBool((cmp(reg_0, reg_1) < 0));
    return reg_5;
  }
  function le (reg_0, reg_1) {
    var reg_5;
    reg_5 = anyBool((cmp(reg_0, reg_1) <= 0));
    return reg_5;
  }
  function gt (reg_0, reg_1) {
    var reg_5;
    reg_5 = anyBool((cmp(reg_0, reg_1) > 0));
    return reg_5;
  }
  function ge (reg_0, reg_1) {
    var reg_5;
    reg_5 = anyBool((cmp(reg_0, reg_1) >= 0));
    return reg_5;
  }
  function not (reg_0) {
    var reg_3;
    reg_3 = anyBool(!tobool(reg_0));
    return reg_3;
  }
  function neg (reg_0) {
    var reg_1, reg_3, reg_4, reg_7;
    var _r = getNum(reg_0); reg_3 = _r[0]; reg_4 = _r[1];
    reg_1 = reg_3;
    if (reg_4) {
      reg_7 = anyInt((0 - reg_1));
      return reg_7;
    }
    Cobre.system.error("Lua: attempt to perform arithmetic on a non-numeric value");
  }
  function call (reg_0, reg_1) {
    var reg_4;
    if (testFn(reg_0)) {
      reg_4 = getFn(reg_0)(reg_1);
      return reg_4;
      if (true) { goto(8); };
    }
    Cobre.system.error("Lua: attempt to call a non-function value");
  }
  function table_append (reg_0, reg_1, reg_2) {
    var reg_3, reg_4;
    reg_3 = getTable(reg_0);
    reg_4 = getInt(reg_1);
    loop_1: while (more(reg_2)) {
      set(reg_3, anyInt(reg_4), next(reg_2));
      reg_4 = (reg_4 + 1);
    }
    return;
  }
  function emptyTable () {
    var reg_2;
    reg_2 = [[], null];
    return reg_2;
  }
  function newTable () {
    var reg_1;
    reg_1 = anyTable(emptyTable());
    return reg_1;
  }
  var mod19 = new Cobre.Module({
    "0": tp10,
  });
  function State () {
    var reg_5;
    reg_5 = [false, emptyTable(), emptyTable(), emptyTable(), emptyTable()];
    return reg_5;
  }
  var cns1 = Cobre.Lazy(function () { return State()});
  function get_metatable (reg_0) {
    var reg_3, reg_5, reg_8, reg_12, reg_13;
    if (testTable(reg_0)) {
      reg_3 = getTable(reg_0)[1];
      if ((reg_3 === null)) {
        reg_5 = null;
        return reg_5;
      }
      reg_8 = reg_3;
      return reg_8;
    }
    if (testStr(reg_0)) {
      reg_12 = cns1()[3];
      return reg_12;
    }
    reg_13 = null;
    return reg_13;
  }
  function lua$get (reg_0, reg_1) {
    var reg_4, reg_7, reg_10, reg_13, reg_15, reg_17, reg_18, reg_20, reg_22;
    if (testTable(reg_0)) {
      reg_4 = get(getTable(reg_0), reg_1);
      if (!testNil(reg_4)) {
        return reg_4;
      }
    }
    reg_7 = get_metatable(reg_0);
    if (!(reg_7 === null)) {
      reg_10 = reg_7;
      reg_13 = get(reg_10, anyStr("__index"));
      if (testTable(reg_13)) {
        reg_15 = lua$get(reg_13, reg_1);
        return reg_15;
      }
      if (testFn(reg_13)) {
        reg_17 = getFn(reg_13);
        reg_18 = newStack();
        push(reg_18, reg_0);
        push(reg_18, reg_1);
        reg_20 = first(reg_17(reg_18));
        return reg_20;
      }
    }
    if (testTable(reg_0)) {
      reg_22 = nil();
      return reg_22;
    }
    Cobre.system.error((("Lua: tried to index a non-table value (" + tostr(reg_0)) + ")"));
  }
  function lua$set (reg_0, reg_1, reg_2) {
    var goto_5=false;
    goto_5 = !testTable(reg_0);
    if (!goto_5) {
      set(getTable(reg_0), reg_1, reg_2);
    }
    if ((goto_5 || false)) {
      goto_5 = false;
      Cobre.system.error((("Lua: tried to index a non-table value (" + tostr(reg_0)) + ")"));
    }
    return;
  }
  function stackof (reg_0) {
    var reg_1;
    reg_1 = newStack();
    push(reg_1, reg_0);
    return reg_1;
  }
  function lua$length (reg_0) {
    var reg_4, reg_6, reg_12, reg_15, reg_20, reg_21, reg_28;
    if (testStr(reg_0)) {
      reg_4 = anyInt(getStr(reg_0).length);
      return reg_4;
    }
    if (testTable(reg_0)) {
      reg_6 = getTable(reg_0);
      if (!(reg_6[1] === null)) {
        reg_12 = reg_6[1];
        reg_15 = get(reg_12, anyStr("__len"));
        if (!testNil(reg_15)) {
          reg_20 = first(call(reg_15, stackof(reg_0)));
          return reg_20;
        }
      }
      reg_21 = 1;
      loop_1: while (true) {
        if (testNil(get(reg_6, anyInt(reg_21)))) {
          reg_28 = anyInt((reg_21 - 1));
          return reg_28;
        }
        reg_21 = (reg_21 + 1);
      }
    }
    Cobre.system.error((("Lua: attempt to get length of a " + typestr(reg_0)) + " value"));
  }
  function _print (reg_0) {
    var reg_1, reg_2, reg_4, reg_10;
    var goto_9=false;
    reg_1 = true;
    reg_2 = "";
    loop_1: while (more(reg_0)) {
      reg_4 = next(reg_0);
      goto_9 = !reg_1;
      if (!goto_9) {
        reg_1 = false;
      }
      if ((goto_9 || false)) {
        goto_9 = false;
        reg_2 = (reg_2 + "\t");
      }
      reg_2 = (reg_2 + tostr(reg_4));
    }
    Cobre.system.println(reg_2);
    reg_10 = newStack();
    return reg_10;
  }
  function _assert (reg_0) {
    var reg_1, reg_3, reg_4, reg_5;
    reg_1 = next(reg_0);
    if (tobool(reg_1)) {
      reg_3 = newStack();
      push(reg_3, reg_1);
      return reg_3;
      if (true) { goto(15); };
    }
    reg_4 = next(reg_0);
    reg_5 = tostr(reg_4);
    if (testNil(reg_4)) {
      reg_5 = "assertion failed!";
    }
    Cobre.system.error(reg_5);
  }
  function _error (reg_0) {
    Cobre.system.error(tostr(next(reg_0)));
  }
  function _tostring (reg_0) {
    var reg_4;
    reg_4 = stackof(anyStr(tostr(next(reg_0))));
    return reg_4;
  }
  function _tonumber (reg_0) {
    var reg_1, reg_4, reg_5, reg_7, reg_9;
    var _r = getNum(next(reg_0)); reg_4 = _r[0]; reg_5 = _r[1];
    reg_1 = reg_4;
    if (reg_5) {
      reg_7 = stackof(anyInt(reg_1));
      return reg_7;
      if (true) { goto(14); };
    }
    reg_9 = stackof(nil());
    return reg_9;
  }
  function _type (reg_0) {
    var reg_4;
    reg_4 = stackof(anyStr(typestr(next(reg_0))));
    return reg_4;
  }
  function _getmeta (reg_0) {
    var reg_1, reg_4, reg_9, reg_11;
    reg_1 = next(reg_0);
    if (testNil(reg_1)) {
      Cobre.system.error("Lua: bad argument #1 to 'getmetatable' (value expected)");
    }
    reg_4 = get_metatable(reg_1);
    if (!(reg_4 === null)) {
      reg_9 = stackof(anyTable(reg_4));
      return reg_9;
    }
    reg_11 = stackof(nil());
    return reg_11;
  }
  function _setmeta (reg_0) {
    var reg_1, reg_2, reg_17, reg_21;
    reg_1 = next(reg_0);
    reg_2 = next(reg_0);
    if (!testTable(reg_1)) {
      Cobre.system.error((("Lua: bad argument #1 to 'getmetatable' (table expected, got " + typestr(reg_1)) + ")"));
    }
    if (!testTable(reg_2)) {
      Cobre.system.error((("Lua: bad argument #2 to 'getmetatable' (table expected, got " + typestr(reg_2)) + ")"));
    }
    reg_17 = getTable(reg_1);
    reg_17[1] = getTable(reg_2);
    reg_21 = stackof(reg_1);
    return reg_21;
  }
  function _next (reg_0) {
    var reg_1, reg_9, reg_12;
    reg_1 = next(reg_0);
    if (!testTable(reg_1)) {
      Cobre.system.error((("Lua: bad argument #1 to 'next' (table expected, got " + typestr(reg_1)) + ")"));
    }
    reg_9 = next(reg_0);
    reg_12 = stackof(nextKey(getTable(reg_1), reg_9));
    return reg_12;
  }
  function _pack (reg_0) {
    var reg_1, reg_2, reg_12;
    reg_1 = emptyTable();
    reg_2 = 0;
    loop_1: while (more(reg_0)) {
      reg_2 = (reg_2 + 1);
      set(reg_1, anyInt(reg_2), next(reg_0));
    }
    set(reg_1, anyStr("n"), anyInt(reg_2));
    reg_12 = stackof(anyTable(reg_1));
    return reg_12;
  }
  function simple_number (reg_0, reg_1, reg_2) {
    var reg_3, reg_5, reg_6;
    var _r = getNum(reg_0); reg_5 = _r[0]; reg_6 = _r[1];
    reg_3 = reg_5;
    if (reg_6) {
      return reg_3;
    }
    Cobre.system.error((((((("Lua: bad argument #" + reg_1) + " to '") + reg_2) + "' (number expected, got ") + typestr(reg_0)) + ")"));
  }
  function simple_number_or (reg_0, reg_1, reg_2, reg_3) {
    var reg_5;
    if (testNil(reg_0)) {
      return reg_1;
    }
    reg_5 = simple_number(reg_0, reg_2, reg_3);
    return reg_5;
  }
  function _unpack (reg_0) {
    var reg_1, reg_9, reg_14, reg_15, reg_20, reg_21;
    reg_1 = next(reg_0);
    if (!testTable(reg_1)) {
      Cobre.system.error((("Lua: bad argument #1 to 'table.unpack' (table expected, got " + typestr(reg_1)) + ")"));
    }
    reg_9 = getTable(reg_1);
    reg_14 = simple_number_or(next(reg_0), 1, "2", "table.unpack");
    reg_15 = next(reg_0);
    reg_20 = simple_number_or(reg_15, getInt(lua$length(reg_1)), "3", "table.unpack");
    reg_21 = newStack();
    loop_1: while ((reg_14 <= reg_20)) {
      push(reg_21, get(reg_9, anyInt(reg_14)));
      reg_14 = (reg_14 + 1);
    }
    return reg_21;
  }
  function _select (reg_0) {
    var reg_1, reg_2, reg_9, reg_12;
    reg_1 = next(reg_0);
    reg_2 = testStr(reg_1);
    if (reg_2) {
      reg_2 = (getStr(reg_1) == "#");
    }
    if (reg_2) {
      reg_9 = stackof(anyInt(length(reg_0)));
      return reg_9;
    }
    reg_12 = simple_number(reg_1, "1", "select");
    if ((reg_12 < 1)) {
      Cobre.system.error("bad argument #1 to 'select' (index out of range)");
    }
    reg_0[0] = reg_12;
    return reg_0;
  }
  function valid_start_index (reg_0, reg_1) {
    var reg_9;
    var goto_6=false;
    goto_6 = !(reg_0 < 0);
    if (!goto_6) {
      reg_0 = (reg_1 + reg_0);
    }
    if ((goto_6 || false)) {
      goto_6 = false;
      reg_0 = (reg_0 - 1);
    }
    if ((reg_0 < 0)) {
      reg_9 = 0;
      return reg_9;
    }
    return reg_0;
  }
  function valid_end_index (reg_0, reg_1) {
    var reg_9;
    var goto_6=false;
    goto_6 = !(reg_0 < 0);
    if (!goto_6) {
      reg_0 = (reg_1 + reg_0);
    }
    if ((goto_6 || false)) {
      goto_6 = false;
      reg_0 = (reg_0 - 1);
    }
    if ((reg_0 >= reg_1)) {
      reg_9 = (reg_1 - 1);
      return reg_9;
    }
    return reg_0;
  }
  function simple_string (reg_0, reg_1, reg_2) {
    var reg_4, reg_7;
    if (testStr(reg_0)) {
      reg_4 = getStr(reg_0);
      return reg_4;
    }
    if (testInt(reg_0)) {
      reg_7 = String(getInt(reg_0));
      return reg_7;
    }
    Cobre.system.error((((((("Lua: bad argument #" + reg_1) + " to '") + reg_2) + "' (string expected, got ") + typestr(reg_0)) + ")"));
  }
  function _strsub (reg_0) {
    var reg_4, reg_5, reg_10, reg_11, reg_12, reg_19, reg_21, reg_22, reg_23, reg_26;
    reg_4 = simple_string(next(reg_0), "1", "string.sub");
    reg_5 = reg_4.length;
    reg_10 = valid_start_index(simple_number(next(reg_0), "2", "string.sub"), reg_5);
    reg_11 = reg_5;
    reg_12 = next(reg_0);
    if (!testNil(reg_12)) {
      reg_11 = valid_end_index(simple_number(reg_12, "3", "string.sub"), reg_5);
    }
    reg_19 = "";
    loop_1: while ((reg_10 <= reg_11)) {
      var _r = Cobre.String.charat(reg_4, reg_10); reg_22 = _r[0]; reg_23 = _r[1];
      reg_21 = reg_22;
      reg_10 = reg_23;
      reg_19 = (reg_19 + reg_21);
    }
    reg_26 = stackof(anyStr(reg_19));
    return reg_26;
  }
  function _strbyte (reg_0) {
    var reg_4, reg_5, reg_6, reg_7, reg_14, reg_15, reg_25, reg_27, reg_28, reg_29;
    reg_4 = simple_string(next(reg_0), "1", "string.byte");
    reg_5 = reg_4.length;
    reg_6 = 0;
    reg_7 = next(reg_0);
    if (!testNil(reg_7)) {
      reg_6 = valid_start_index(simple_number(reg_7, "2", "string.byte"), reg_5);
    }
    reg_14 = reg_6;
    reg_15 = next(reg_0);
    if (!testNil(reg_15)) {
      reg_14 = valid_end_index(simple_number(reg_15, "2", "string.byte"), reg_5);
    }
    if ((reg_14 >= reg_5)) {
      reg_14 = (reg_5 - 1);
    }
    reg_25 = newStack();
    loop_1: while ((reg_6 <= reg_14)) {
      var _r = Cobre.String.charat(reg_4, reg_6); reg_28 = _r[0]; reg_29 = _r[1];
      reg_27 = reg_28;
      reg_6 = reg_29;
      push(reg_25, anyInt(reg_27.charCodeAt(0)));
    }
    return reg_25;
  }
  function _strchar (reg_0) {
    var reg_1, reg_2, reg_13;
    reg_1 = "";
    reg_2 = 1;
    loop_1: while (more(reg_0)) {
      reg_1 = (reg_1 + String.fromCharCode(simple_number(next(reg_0), String(reg_2), "string.char")));
      reg_2 = (reg_2 + 1);
    }
    reg_13 = stackof(anyStr(reg_1));
    return reg_13;
  }
  var mod20 = new Cobre.Module({
    "0": _assert,
  });
  var mod21 = new Cobre.Module({
    "0": _error,
  });
  var mod22 = new Cobre.Module({
    "0": _getmeta,
  });
  var mod23 = new Cobre.Module({
    "0": _next,
  });
  var mod24 = new Cobre.Module({
    "0": _print,
  });
  var mod25 = new Cobre.Module({
    "0": _select,
  });
  var mod26 = new Cobre.Module({
    "0": _setmeta,
  });
  var mod27 = new Cobre.Module({
    "0": _tostring,
  });
  var mod28 = new Cobre.Module({
    "0": _tonumber,
  });
  var mod29 = new Cobre.Module({
    "0": _type,
  });
  var mod30 = new Cobre.Module({
    "0": _pack,
  });
  var mod31 = new Cobre.Module({
    "0": _unpack,
  });
  var lua_lib_table = Cobre.$import("lua_lib\x1ftable");
  var lua_main = lua_lib_table.get("lua_main");
  var mod32 = new Cobre.Module({
    "0": _strsub,
  });
  var mod33 = new Cobre.Module({
    "0": _strbyte,
  });
  var mod34 = new Cobre.Module({
    "0": _strchar,
  });
  var lua_lib_string = Cobre.$import("lua_lib\x1fstring");
  var lua_lib_string$lua_main = lua_lib_string.get("lua_main");
  var lua_lib_pattern = Cobre.$import("lua_lib\x1fpattern");
  var lua_lib_pattern$lua_main = lua_lib_pattern.get("lua_main");
  function get_global () {
    var reg_3, reg_6, reg_11, reg_15, reg_19, reg_23, reg_27, reg_31, reg_35, reg_39, reg_43, reg_47, reg_51, reg_55, reg_58, reg_63, reg_67, reg_75, reg_77, reg_82, reg_87, reg_89, reg_93, reg_95, reg_99, reg_101, reg_114;
    if (!cns1()[0]) {
      reg_3 = true;
      cns1()[0] = reg_3;
      reg_6 = cns1()[1];
      set(reg_6, anyStr("_G"), anyTable(reg_6));
      reg_11 = anyStr("_VERSION");
      set(reg_6, reg_11, anyStr("Lua 5.3"));
      reg_15 = anyStr("_CU_VERSION");
      set(reg_6, reg_15, anyStr("0.6"));
      reg_19 = anyStr("assert");
      set(reg_6, reg_19, anyFn(_assert));
      reg_23 = anyStr("error");
      set(reg_6, reg_23, anyFn(_error));
      reg_27 = anyStr("getmetatable");
      set(reg_6, reg_27, anyFn(_getmeta));
      reg_31 = anyStr("next");
      set(reg_6, reg_31, anyFn(_next));
      reg_35 = anyStr("print");
      set(reg_6, reg_35, anyFn(_print));
      reg_39 = anyStr("select");
      set(reg_6, reg_39, anyFn(_select));
      reg_43 = anyStr("setmetatable");
      set(reg_6, reg_43, anyFn(_setmeta));
      reg_47 = anyStr("tostring");
      set(reg_6, reg_47, anyFn(_tostring));
      reg_51 = anyStr("tonumber");
      set(reg_6, reg_51, anyFn(_tonumber));
      reg_55 = anyStr("type");
      set(reg_6, reg_55, anyFn(_type));
      reg_58 = emptyTable();
      set(reg_6, anyStr("table"), anyTable(reg_58));
      reg_63 = anyStr("pack");
      set(reg_58, reg_63, anyFn(_pack));
      reg_67 = anyStr("unpack");
      set(reg_58, reg_67, anyFn(_unpack));
      reg_73 = lua_main(anyTable(cns1()[1]));
      reg_75 = cns1()[3];
      reg_77 = anyStr("__index");
      set(reg_75, reg_77, anyTable(cns1()[2]));
      reg_82 = anyStr("string");
      set(reg_6, reg_82, anyTable(cns1()[2]));
      reg_87 = cns1()[2];
      reg_89 = anyStr("sub");
      set(reg_87, reg_89, anyFn(_strsub));
      reg_93 = cns1()[2];
      reg_95 = anyStr("byte");
      set(reg_93, reg_95, anyFn(_strbyte));
      reg_99 = cns1()[2];
      reg_101 = anyStr("char");
      set(reg_99, reg_101, anyFn(_strchar));
      reg_107 = lua_lib_string$lua_main(anyTable(cns1()[1]));
      reg_111 = lua_lib_pattern$lua_main(anyTable(cns1()[1]));
    }
    reg_114 = anyTable(cns1()[1]);
    return reg_114;
  }
  var mod1 = new Cobre.Module({
    "unit_t": tp1,
    "nil_t": tp2,
    "Stack": tp4,
    "Pair": tp5,
    "Table": tp10,
    "MetaTable": tp9,
    "StateT": tp11,
    "Function": tp12,
    "dummy\x1dget\x1dunit_t": (function (a) {return a[0]}),
    "dummy\x1dset\x1dunit_t": (function (a,b) {return a[0] = b}),
    "pos\x1dget\x1dStack": (function (a) {return a[0]}),
    "pos\x1dset\x1dStack": (function (a,b) {return a[0] = b}),
    "arr\x1dget\x1dStack": (function (a) {return a[1]}),
    "arr\x1dset\x1dStack": (function (a,b) {return a[1] = b}),
    "first\x1dStack": first,
    "next\x1dStack": next,
    "push\x1dStack": push,
    "more\x1dStack": more,
    "append\x1dStack": append,
    "length\x1dStack": length,
    "copy\x1dStack": copy,
    "key\x1dget\x1dPair": (function (a) {return a[0]}),
    "key\x1dset\x1dPair": (function (a,b) {return a[0] = b}),
    "val\x1dget\x1dPair": (function (a) {return a[1]}),
    "val\x1dset\x1dPair": (function (a,b) {return a[1] = b}),
    "arr\x1dget\x1dTable": (function (a) {return a[0]}),
    "arr\x1dset\x1dTable": (function (a,b) {return a[0] = b}),
    "meta\x1dget\x1dTable": (function (a) {return a[1]}),
    "meta\x1dset\x1dTable": (function (a,b) {return a[1] = b}),
    "get\x1dTable": get,
    "set\x1dTable": set,
    "nextKey\x1dTable": nextKey,
    "ready\x1dget\x1dStateT": (function (a) {return a[0]}),
    "ready\x1dset\x1dStateT": (function (a,b) {return a[0] = b}),
    "_G\x1dget\x1dStateT": (function (a) {return a[1]}),
    "_G\x1dset\x1dStateT": (function (a,b) {return a[1] = b}),
    "string\x1dget\x1dStateT": (function (a) {return a[2]}),
    "string\x1dset\x1dStateT": (function (a,b) {return a[2] = b}),
    "string_meta\x1dget\x1dStateT": (function (a) {return a[3]}),
    "string_meta\x1dset\x1dStateT": (function (a,b) {return a[3] = b}),
    "loaded\x1dget\x1dStateT": (function (a) {return a[4]}),
    "loaded\x1dset\x1dStateT": (function (a,b) {return a[4] = b}),
    "anyInt": anyInt,
    "anyStr": anyStr,
    "anyTable": anyTable,
    "anyFn": anyFn,
    "anyBool": anyBool,
    "testInt": testInt,
    "testStr": testStr,
    "testBool": testBool,
    "testTable": testTable,
    "testFn": testFn,
    "testNil": testNil,
    "getInt": getInt,
    "getStr": getStr,
    "getBool": getBool,
    "getTable": getTable,
    "getFn": getFn,
    "newStack": newStack,
    "atoi": atoi,
    "isDigit": isDigit,
    "isSpace": isSpace,
    "parseNum": parseNum,
    "getNum": getNum,
    "getNums": getNums,
    "getInts": getInts,
    "add": add,
    "sub": sub,
    "mul": mul,
    "div": div,
    "concat": concat,
    "nil": nil,
    "true": lua$true,
    "false": lua$false,
    "typestr": typestr,
    "tostr": tostr,
    "tobool": tobool,
    "equals": equals,
    "cmp": cmp,
    "eq": eq,
    "ne": ne,
    "lt": lt,
    "le": le,
    "gt": gt,
    "ge": ge,
    "not": not,
    "neg": neg,
    "call": call,
    "checkKey": checkKey,
    "table_append": table_append,
    "newTable": newTable,
    "get_metatable": get_metatable,
    "get": lua$get,
    "set": lua$set,
    "length": lua$length,
    "_print": _print,
    "_assert": _assert,
    "_error": _error,
    "_tostring": _tostring,
    "_tonumber": _tonumber,
    "_type": _type,
    "_getmeta": _getmeta,
    "_setmeta": _setmeta,
    "_next": _next,
    "_pack": _pack,
    "_unpack": _unpack,
    "_select": _select,
    "valid_start_index": valid_start_index,
    "valid_end_index": valid_end_index,
    "_strsub": _strsub,
    "_strbyte": _strbyte,
    "_strchar": _strchar,
    "get_global": get_global,
    "string": anyStr,
    "int": anyInt,
    "function": anyFn,
    "closure": Cobre.Closure,
  });
  return mod1;
});
Cobre.$export("lua_parser.lexer", function () {
  var lua = Cobre.$import("lua");
  var nil = lua.get("nil");
  var mod2 = new Cobre.Module({
    "0": Cobre.Any,
    "1": Cobre.Any,
    "2": Cobre.Any,
  });
  var string = lua.get("string");
  var cns1 = Cobre.Lazy(function () { return string("setmetatable")});
  var get = lua.get("get");
  var newStack = lua.get("newStack");
  var newTable = lua.get("newTable");
  var push_Stack = lua.get("push\x1dStack");
  var cns2 = Cobre.Lazy(function () { return string("__index")});
  var set = lua.get("set");
  var call = lua.get("call");
  var first_Stack = lua.get("first\x1dStack");
  var cns3 = Cobre.Lazy(function () { return string("Lexer")});
  var cns4 = Cobre.Lazy(function () { return string("open")});
  var closure = lua.get("closure");
  var tp1 = new Cobre.Record([Cobre.Any,Cobre.Any,Cobre.Any]);
  var mod4 = new Cobre.Module({
    "0": tp1,
  });
  var next_Stack = lua.get("next\x1dStack");
  var cns5 = Cobre.Lazy(function () { return string("error")});
  var cns6 = Cobre.Lazy(function () { return string("source")});
  var cns7 = Cobre.Lazy(function () { return string("sub")});
  var lua$int = lua.get("int");
  var cns8 = Cobre.Lazy(function () { return lua$int(1)});
  var cns9 = Cobre.Lazy(function () { return string("char")});
  var cns10 = Cobre.Lazy(function () { return string("")});
  var eq = lua.get("eq");
  var cns11 = Cobre.Lazy(function () { return string("eof")});
  var cns12 = Cobre.Lazy(function () { return string("line")});
  var cns13 = Cobre.Lazy(function () { return string("col")});
  var cns14 = Cobre.Lazy(function () { return string("pos")});
  var cns15 = Cobre.Lazy(function () { return string("saved_pos")});
  function Lexer_open (reg_0, reg_1) {
    var reg_4, reg_13, reg_14, reg_18, reg_25, reg_28, reg_35, reg_38;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    set(get(reg_1[0], cns3()), cns5(), nil());
    set(reg_1[0], cns6(), reg_4);
    reg_13 = get(reg_4, cns7());
    reg_14 = newStack();
    push_Stack(reg_14, reg_4);
    push_Stack(reg_14, cns8());
    push_Stack(reg_14, cns8());
    reg_18 = first_Stack(call(reg_13, reg_14));
    set(reg_1[0], cns9(), reg_18);
    reg_25 = eq(get(reg_1[0], cns9()), cns10());
    set(reg_1[0], cns11(), reg_25);
    reg_28 = newTable();
    set(reg_28, cns12(), cns8());
    set(reg_28, cns13(), cns8());
    set(reg_1[0], cns14(), reg_28);
    reg_35 = nil();
    set(reg_1[0], cns15(), reg_35);
    reg_38 = newStack();
    return reg_38;
  }
  var mod3 = new Cobre.Module({
    "0": Lexer_open,
  });
  var item42 = closure.build(mod3);
  var item42$new = item42.get("new");
  var lua$function = lua.get("function");
  var mod6 = new Cobre.Module({
    "0": tp1,
  });
  var cns16 = Cobre.Lazy(function () { return string(":")});
  var concat = lua.get("concat");
  function lua_parser_lexer$function (reg_0, reg_1) {
    var reg_4, reg_7, reg_8, reg_13, reg_14, reg_19, reg_27, reg_28, reg_35;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_7 = get(reg_1[0], cns3());
    reg_8 = cns5();
    reg_13 = get(get(reg_1[0], cns14()), cns12());
    reg_14 = cns16();
    reg_19 = get(get(reg_1[0], cns14()), cns13());
    set(reg_7, reg_8, concat(reg_13, concat(reg_14, concat(reg_19, concat(cns16(), reg_4)))));
    reg_27 = get(reg_1[0], cns5());
    reg_28 = newStack();
    push_Stack(reg_28, get(get(reg_1[0], cns3()), cns5()));
    reg_34 = call(reg_27, reg_28);
    reg_35 = newStack();
    return reg_35;
  }
  var mod5 = new Cobre.Module({
    "0": lua_parser_lexer$function,
  });
  var item51 = closure.build(mod5);
  var item51$new = item51.get("new");
  var cns17 = Cobre.Lazy(function () { return string("err")});
  var mod8 = new Cobre.Module({
    "0": tp1,
  });
  var tobool = lua.get("tobool");
  var cns18 = Cobre.Lazy(function () { return string("find")});
  var lua$true = lua.get("true");
  var cns19 = Cobre.Lazy(function () { return string("match")});
  var cns20 = Cobre.Lazy(function () { return string("^")});
  var append_Stack = lua.get("append\x1dStack");
  function function$1 (reg_0, reg_1) {
    var reg_4, reg_9, reg_11, reg_12, reg_20, reg_21, reg_24, reg_26, reg_27, reg_31;
    var goto_29=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    goto_29 = !tobool(next_Stack(reg_0));
    if (!goto_29) {
      reg_9 = get(reg_1[0], cns6());
      reg_11 = get(reg_9, cns18());
      reg_12 = newStack();
      push_Stack(reg_12, reg_9);
      push_Stack(reg_12, reg_4);
      push_Stack(reg_12, cns8());
      push_Stack(reg_12, lua$true());
      if (tobool(eq(first_Stack(call(reg_11, reg_12)), cns8()))) {
        reg_20 = newStack();
        push_Stack(reg_20, reg_4);
        return reg_20;
      }
    }
    if ((goto_29 || false)) {
      goto_29 = false;
      reg_21 = newStack();
      reg_24 = get(reg_1[0], cns6());
      reg_26 = get(reg_24, cns19());
      reg_27 = newStack();
      push_Stack(reg_27, reg_24);
      push_Stack(reg_27, concat(cns20(), reg_4));
      append_Stack(reg_21, call(reg_26, reg_27));
      return reg_21;
    }
    reg_31 = newStack();
    return reg_31;
  }
  var mod7 = new Cobre.Module({
    "0": function$1,
  });
  var item64 = closure.build(mod7);
  var item64$new = item64.get("new");
  var cns21 = Cobre.Lazy(function () { return string("check")});
  var mod10 = new Cobre.Module({
    "0": tp1,
  });
  var length = lua.get("length");
  var cns22 = Cobre.Lazy(function () { return lua$int(0)});
  var gt = lua.get("gt");
  var cns23 = Cobre.Lazy(function () { return string("\n")});
  var add = lua.get("add");
  var neg = lua.get("neg");
  function function$2 (reg_0, reg_1) {
    var reg_4, reg_5, reg_8, reg_9, reg_11, reg_12, reg_18, reg_20, reg_21, reg_24, reg_28, reg_29, reg_40, reg_41, reg_45, reg_48, reg_49, reg_59, reg_60, reg_70, reg_72, reg_73, reg_80, reg_89, reg_92;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_8 = get(reg_1[0], cns21());
    reg_9 = newStack();
    push_Stack(reg_9, reg_4);
    push_Stack(reg_9, reg_5);
    reg_11 = first_Stack(call(reg_8, reg_9));
    reg_12 = reg_11;
    if (tobool(reg_12)) {
      reg_12 = gt(length(reg_11), cns22());
    }
    if (tobool(reg_12)) {
      reg_18 = nil();
      reg_20 = get(reg_11, cns18());
      reg_21 = newStack();
      push_Stack(reg_21, reg_11);
      push_Stack(reg_21, cns23());
      reg_24 = first_Stack(call(reg_20, reg_21));
      loop_1: while (tobool(reg_24)) {
        reg_28 = get(reg_1[0], cns14());
        reg_29 = cns12();
        set(reg_28, reg_29, add(get(get(reg_1[0], cns14()), cns12()), cns8()));
        reg_18 = add(reg_24, cns8());
        reg_40 = get(reg_11, cns18());
        reg_41 = newStack();
        push_Stack(reg_41, reg_11);
        push_Stack(reg_41, cns23());
        push_Stack(reg_41, reg_18);
        reg_24 = first_Stack(call(reg_40, reg_41));
      }
      reg_45 = reg_11;
      if (tobool(reg_18)) {
        reg_48 = get(reg_11, cns7());
        reg_49 = newStack();
        push_Stack(reg_49, reg_11);
        push_Stack(reg_49, reg_18);
        reg_45 = first_Stack(call(reg_48, reg_49));
        set(get(reg_1[0], cns14()), cns13(), cns8());
      }
      reg_59 = get(reg_1[0], cns14());
      reg_60 = cns13();
      set(reg_59, reg_60, add(get(get(reg_1[0], cns14()), cns13()), length(reg_45)));
      reg_70 = get(reg_1[0], cns6());
      reg_72 = get(reg_70, cns7());
      reg_73 = newStack();
      push_Stack(reg_73, reg_70);
      push_Stack(reg_73, add(length(reg_11), cns8()));
      push_Stack(reg_73, neg(cns8()));
      reg_80 = first_Stack(call(reg_72, reg_73));
      set(reg_1[0], cns6(), reg_80);
      if (tobool(eq(get(reg_1[0], cns6()), cns10()))) {
        reg_89 = lua$true();
        set(reg_1[0], cns11(), reg_89);
      }
    }
    reg_92 = newStack();
    push_Stack(reg_92, reg_11);
    return reg_92;
  }
  var mod9 = new Cobre.Module({
    "0": function$2,
  });
  var item77 = closure.build(mod9);
  var item77$new = item77.get("new");
  var mod12 = new Cobre.Module({
    "0": tp1,
  });
  var cns24 = Cobre.Lazy(function () { return string("\n\x0d")});
  var cns25 = Cobre.Lazy(function () { return string("\x0d\n")});
  var cns26 = Cobre.Lazy(function () { return string("[\n\x0d]")});
  function function$3 (reg_0, reg_1) {
    var reg_4, reg_7, reg_8, reg_11, reg_15, reg_16, reg_23, reg_24;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = newStack();
    reg_7 = get(reg_1[0], cns19());
    reg_8 = newStack();
    push_Stack(reg_8, cns24());
    reg_11 = first_Stack(call(reg_7, reg_8));
    if (!tobool(reg_11)) {
      reg_15 = get(reg_1[0], cns19());
      reg_16 = newStack();
      push_Stack(reg_16, cns25());
      reg_11 = first_Stack(call(reg_15, reg_16));
    }
    if (!tobool(reg_11)) {
      reg_23 = get(reg_1[0], cns19());
      reg_24 = newStack();
      push_Stack(reg_24, cns26());
      reg_11 = first_Stack(call(reg_23, reg_24));
    }
    push_Stack(reg_4, reg_11);
    return reg_4;
  }
  var mod11 = new Cobre.Module({
    "0": function$3,
  });
  var item86 = closure.build(mod11);
  var item86$new = item86.get("new");
  var cns27 = Cobre.Lazy(function () { return string("match_nl")});
  var mod14 = new Cobre.Module({
    "0": tp1,
  });
  var cns28 = Cobre.Lazy(function () { return string("type")});
  var cns29 = Cobre.Lazy(function () { return string("value")});
  var cns30 = Cobre.Lazy(function () { return string("column")});
  function function$4 (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_10, reg_16;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = newStack();
    reg_7 = newTable();
    set(reg_7, cns28(), reg_4);
    set(reg_7, cns29(), reg_5);
    reg_10 = cns12();
    set(reg_7, reg_10, get(get(reg_1[0], cns15()), cns12()));
    reg_16 = cns30();
    set(reg_7, reg_16, get(get(reg_1[0], cns15()), cns13()));
    push_Stack(reg_6, reg_7);
    return reg_6;
  }
  var mod13 = new Cobre.Module({
    "0": function$4,
  });
  var item96 = closure.build(mod13);
  var item96$new = item96.get("new");
  var cns31 = Cobre.Lazy(function () { return string("TK")});
  var cns32 = Cobre.Lazy(function () { return string("  | and break do else elseif end false for function goto if in |\n  | local nil not or repeat return then true until while |\n")});
  var cns33 = Cobre.Lazy(function () { return string("==")});
  var cns34 = Cobre.Lazy(function () { return lua$int(2)});
  var cns35 = Cobre.Lazy(function () { return string("~=")});
  var cns36 = Cobre.Lazy(function () { return lua$int(3)});
  var cns37 = Cobre.Lazy(function () { return string("<=")});
  var cns38 = Cobre.Lazy(function () { return lua$int(4)});
  var cns39 = Cobre.Lazy(function () { return string(">=")});
  var cns40 = Cobre.Lazy(function () { return lua$int(5)});
  var cns41 = Cobre.Lazy(function () { return string("<<")});
  var cns42 = Cobre.Lazy(function () { return lua$int(6)});
  var cns43 = Cobre.Lazy(function () { return string(">>")});
  var cns44 = Cobre.Lazy(function () { return lua$int(7)});
  var cns45 = Cobre.Lazy(function () { return string("=")});
  var cns46 = Cobre.Lazy(function () { return lua$int(8)});
  var cns47 = Cobre.Lazy(function () { return string("&")});
  var cns48 = Cobre.Lazy(function () { return lua$int(9)});
  var cns49 = Cobre.Lazy(function () { return string("~")});
  var cns50 = Cobre.Lazy(function () { return lua$int(10)});
  var cns51 = Cobre.Lazy(function () { return string("|")});
  var cns52 = Cobre.Lazy(function () { return lua$int(11)});
  var cns53 = Cobre.Lazy(function () { return string("<")});
  var cns54 = Cobre.Lazy(function () { return lua$int(12)});
  var cns55 = Cobre.Lazy(function () { return string(">")});
  var cns56 = Cobre.Lazy(function () { return lua$int(13)});
  var cns57 = Cobre.Lazy(function () { return string("//")});
  var cns58 = Cobre.Lazy(function () { return lua$int(14)});
  var cns59 = Cobre.Lazy(function () { return string("+")});
  var cns60 = Cobre.Lazy(function () { return lua$int(15)});
  var cns61 = Cobre.Lazy(function () { return string("-")});
  var cns62 = Cobre.Lazy(function () { return lua$int(16)});
  var cns63 = Cobre.Lazy(function () { return string("*")});
  var cns64 = Cobre.Lazy(function () { return lua$int(17)});
  var cns65 = Cobre.Lazy(function () { return string("/")});
  var cns66 = Cobre.Lazy(function () { return lua$int(18)});
  var cns67 = Cobre.Lazy(function () { return string("%")});
  var cns68 = Cobre.Lazy(function () { return lua$int(19)});
  var cns69 = Cobre.Lazy(function () { return lua$int(20)});
  var cns70 = Cobre.Lazy(function () { return string("#")});
  var cns71 = Cobre.Lazy(function () { return lua$int(21)});
  var cns72 = Cobre.Lazy(function () { return string("(")});
  var cns73 = Cobre.Lazy(function () { return lua$int(22)});
  var cns74 = Cobre.Lazy(function () { return string(")")});
  var cns75 = Cobre.Lazy(function () { return lua$int(23)});
  var cns76 = Cobre.Lazy(function () { return string("{")});
  var cns77 = Cobre.Lazy(function () { return lua$int(24)});
  var cns78 = Cobre.Lazy(function () { return string("}")});
  var cns79 = Cobre.Lazy(function () { return lua$int(25)});
  var cns80 = Cobre.Lazy(function () { return string("[")});
  var cns81 = Cobre.Lazy(function () { return lua$int(26)});
  var cns82 = Cobre.Lazy(function () { return string("]")});
  var cns83 = Cobre.Lazy(function () { return lua$int(27)});
  var cns84 = Cobre.Lazy(function () { return string("::")});
  var cns85 = Cobre.Lazy(function () { return lua$int(28)});
  var cns86 = Cobre.Lazy(function () { return string(";")});
  var cns87 = Cobre.Lazy(function () { return lua$int(29)});
  var cns88 = Cobre.Lazy(function () { return lua$int(30)});
  var cns89 = Cobre.Lazy(function () { return string(",")});
  var cns90 = Cobre.Lazy(function () { return lua$int(31)});
  var cns91 = Cobre.Lazy(function () { return string("...")});
  var cns92 = Cobre.Lazy(function () { return lua$int(32)});
  var cns93 = Cobre.Lazy(function () { return string("..")});
  var cns94 = Cobre.Lazy(function () { return lua$int(33)});
  var cns95 = Cobre.Lazy(function () { return string(".")});
  var mod16 = new Cobre.Module({
    "0": tp1,
  });
  var cns96 = Cobre.Lazy(function () { return string("%[%[")});
  var cns97 = Cobre.Lazy(function () { return string("%[=+")});
  var cns98 = Cobre.Lazy(function () { return string("%[")});
  var cns99 = Cobre.Lazy(function () { return string("=+")});
  var not = lua.get("not");
  var cns100 = Cobre.Lazy(function () { return string("invalid long string delimiter")});
  var cns101 = Cobre.Lazy(function () { return string("str")});
  var cns102 = Cobre.Lazy(function () { return string("%]=*%]?")});
  var cns103 = Cobre.Lazy(function () { return string("[^%]]*")});
  var cns104 = Cobre.Lazy(function () { return string("unfinished long string")});
  function function$5 (reg_0, reg_1) {
    var reg_4, reg_7, reg_8, reg_16, reg_17, reg_24, reg_25, reg_30, reg_31, reg_37, reg_38, reg_46, reg_47, reg_50, reg_52, reg_55, reg_61, reg_71, reg_72, reg_75, reg_79, reg_86, reg_91, reg_94, reg_95, reg_99, reg_104, reg_105, reg_108;
    var goto_16=false, goto_62=false, goto_105=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = nil();
    reg_7 = get(reg_1[0], cns19());
    reg_8 = newStack();
    push_Stack(reg_8, cns96());
    goto_16 = !tobool(first_Stack(call(reg_7, reg_8)));
    if (!goto_16) {
      reg_4 = cns10();
    }
    if ((goto_16 || false)) {
      goto_16 = false;
      reg_16 = get(reg_1[0], cns21());
      reg_17 = newStack();
      push_Stack(reg_17, cns97());
      goto_62 = !tobool(first_Stack(call(reg_16, reg_17)));
      if (!goto_62) {
        reg_24 = get(reg_1[0], cns19());
        reg_25 = newStack();
        push_Stack(reg_25, cns98());
        reg_27 = call(reg_24, reg_25);
        reg_30 = get(reg_1[0], cns19());
        reg_31 = newStack();
        push_Stack(reg_31, cns99());
        reg_4 = first_Stack(call(reg_30, reg_31));
        reg_37 = get(reg_1[0], cns19());
        reg_38 = newStack();
        push_Stack(reg_38, cns98());
        if (tobool(not(first_Stack(call(reg_37, reg_38))))) {
          reg_46 = get(reg_1[0], cns17());
          reg_47 = newStack();
          push_Stack(reg_47, cns100());
          reg_49 = call(reg_46, reg_47);
        }
      }
      if ((goto_62 || false)) {
        goto_62 = false;
        reg_50 = newStack();
        push_Stack(reg_50, nil());
        return reg_50;
      }
    }
    reg_52 = cns82();
    reg_55 = concat(reg_52, concat(reg_4, cns82()));
    reg_60 = call(get(reg_1[0], cns27()), newStack());
    reg_61 = cns10();
    set(reg_1[0], cns101(), reg_61);
    loop_1: while (tobool(not(get(reg_1[0], cns11())))) {
      reg_71 = get(reg_1[0], cns19());
      reg_72 = newStack();
      push_Stack(reg_72, cns102());
      reg_75 = first_Stack(call(reg_71, reg_72));
      if (tobool(reg_75)) {
        goto_105 = !tobool(eq(reg_75, reg_55));
        if (!goto_105) {
          reg_79 = newStack();
          push_Stack(reg_79, get(reg_1[0], cns101()));
          return reg_79;
        }
        if ((goto_105 || false)) {
          goto_105 = false;
          reg_86 = concat(get(reg_1[0], cns101()), reg_75);
          set(reg_1[0], cns101(), reg_86);
        }
      }
      reg_91 = get(reg_1[0], cns101());
      reg_94 = get(reg_1[0], cns19());
      reg_95 = newStack();
      push_Stack(reg_95, cns103());
      reg_99 = concat(reg_91, first_Stack(call(reg_94, reg_95)));
      set(reg_1[0], cns101(), reg_99);
    }
    reg_104 = get(reg_1[0], cns17());
    reg_105 = newStack();
    push_Stack(reg_105, cns104());
    reg_107 = call(reg_104, reg_105);
    reg_108 = newStack();
    return reg_108;
  }
  var mod15 = new Cobre.Module({
    "0": function$5,
  });
  var item179 = closure.build(mod15);
  var item179$new = item179.get("new");
  var cns105 = Cobre.Lazy(function () { return string("long_string")});
  var mod18 = new Cobre.Module({
    "0": tp1,
  });
  var cns106 = Cobre.Lazy(function () { return string("[a-fA-F%d]")});
  var cns107 = Cobre.Lazy(function () { return string("lower")});
  var cns108 = Cobre.Lazy(function () { return string("a")});
  var ge = lua.get("ge");
  var cns109 = Cobre.Lazy(function () { return string("byte")});
  var cns110 = Cobre.Lazy(function () { return lua$int(97)});
  var sub = lua.get("sub");
  var cns111 = Cobre.Lazy(function () { return lua$int(48)});
  var cns112 = Cobre.Lazy(function () { return string("hexadecimal digit expected")});
  function function$6 (reg_0, reg_1) {
    var reg_6, reg_7, reg_14, reg_15, reg_18, reg_20, reg_21, reg_23, reg_27, reg_29, reg_30, reg_37, reg_39, reg_40, reg_47, reg_48, reg_51;
    var goto_44=false, goto_56=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_6 = get(reg_1[0], cns21());
    reg_7 = newStack();
    push_Stack(reg_7, cns106());
    goto_56 = !tobool(first_Stack(call(reg_6, reg_7)));
    if (!goto_56) {
      reg_14 = get(reg_1[0], cns19());
      reg_15 = newStack();
      push_Stack(reg_15, cns95());
      reg_18 = first_Stack(call(reg_14, reg_15));
      reg_20 = get(reg_18, cns107());
      reg_21 = newStack();
      push_Stack(reg_21, reg_18);
      reg_23 = first_Stack(call(reg_20, reg_21));
      goto_44 = !tobool(ge(reg_23, cns108()));
      if (!goto_44) {
        reg_27 = newStack();
        reg_29 = get(reg_23, cns109());
        reg_30 = newStack();
        push_Stack(reg_30, reg_23);
        push_Stack(reg_27, add(sub(first_Stack(call(reg_29, reg_30)), cns110()), cns50()));
        return reg_27;
      }
      if ((goto_44 || false)) {
        goto_44 = false;
        reg_37 = newStack();
        reg_39 = get(reg_23, cns109());
        reg_40 = newStack();
        push_Stack(reg_40, reg_23);
        push_Stack(reg_37, sub(first_Stack(call(reg_39, reg_40)), cns111()));
        return reg_37;
      }
    }
    if ((goto_56 || false)) {
      goto_56 = false;
      reg_47 = get(reg_1[0], cns17());
      reg_48 = newStack();
      push_Stack(reg_48, cns112());
      reg_50 = call(reg_47, reg_48);
    }
    reg_51 = newStack();
    return reg_51;
  }
  var mod17 = new Cobre.Module({
    "0": function$6,
  });
  var item195 = closure.build(mod17);
  var item195$new = item195.get("new");
  var cns113 = Cobre.Lazy(function () { return string("get_hex")});
  var mod20 = new Cobre.Module({
    "0": tp1,
  });
  var ne = lua.get("ne");
  var cns114 = Cobre.Lazy(function () { return string("[ \x08\n\x0d\t\x0b]*")});
  var cns115 = Cobre.Lazy(function () { return string("--")});
  var cns116 = Cobre.Lazy(function () { return string("[^\n\x0d]*")});
  var cns117 = Cobre.Lazy(function () { return string("['\"]")});
  var cns118 = Cobre.Lazy(function () { return string("unfinished string")});
  var cns119 = Cobre.Lazy(function () { return string("\\")});
  var cns120 = Cobre.Lazy(function () { return string("\x07")});
  var cns121 = Cobre.Lazy(function () { return string("b")});
  var cns122 = Cobre.Lazy(function () { return string("\x08")});
  var cns123 = Cobre.Lazy(function () { return string("f")});
  var cns124 = Cobre.Lazy(function () { return string("\x0c")});
  var cns125 = Cobre.Lazy(function () { return string("n")});
  var cns126 = Cobre.Lazy(function () { return string("r")});
  var cns127 = Cobre.Lazy(function () { return string("\x0d")});
  var cns128 = Cobre.Lazy(function () { return string("t")});
  var cns129 = Cobre.Lazy(function () { return string("\t")});
  var cns130 = Cobre.Lazy(function () { return string("v")});
  var cns131 = Cobre.Lazy(function () { return string("\x0b")});
  var cns132 = Cobre.Lazy(function () { return string("[abfnrtv]")});
  var cns133 = Cobre.Lazy(function () { return string("['\"\\]")});
  var cns134 = Cobre.Lazy(function () { return string("%d")});
  var cns135 = Cobre.Lazy(function () { return string("tonumber")});
  var cns136 = Cobre.Lazy(function () { return string("%d%d?%d?")});
  var cns137 = Cobre.Lazy(function () { return lua$int(265)});
  var cns138 = Cobre.Lazy(function () { return string("decimal escape too large")});
  var cns139 = Cobre.Lazy(function () { return string("string")});
  var cns140 = Cobre.Lazy(function () { return string("x")});
  var mul = lua.get("mul");
  var cns141 = Cobre.Lazy(function () { return string("u")});
  var cns142 = Cobre.Lazy(function () { return string("missing {")});
  var cns143 = Cobre.Lazy(function () { return lua$int(1114111)});
  var cns144 = Cobre.Lazy(function () { return string("UTF-8 value too large")});
  var cns145 = Cobre.Lazy(function () { return string("utf8")});
  var cns146 = Cobre.Lazy(function () { return string("z")});
  var cns147 = Cobre.Lazy(function () { return string("invalid escape sequence")});
  var cns148 = Cobre.Lazy(function () { return string("STR")});
  var cns149 = Cobre.Lazy(function () { return string("0[xX]")});
  var cns150 = Cobre.Lazy(function () { return string("[a-fA-F%d]*%.?[a-fA-F%d]*")});
  var cns151 = Cobre.Lazy(function () { return string("0x")});
  var cns152 = Cobre.Lazy(function () { return string("0x.")});
  var cns153 = Cobre.Lazy(function () { return string("malformed number")});
  var cns154 = Cobre.Lazy(function () { return string("[pP]")});
  var cns155 = Cobre.Lazy(function () { return string("[pP][%+%-]?")});
  var cns156 = Cobre.Lazy(function () { return string("%d+")});
  var cns157 = Cobre.Lazy(function () { return string("NUM")});
  var cns158 = Cobre.Lazy(function () { return string("%.?%d")});
  var cns159 = Cobre.Lazy(function () { return string("%d*%.?%d*")});
  var cns160 = Cobre.Lazy(function () { return string("[eE]")});
  var cns161 = Cobre.Lazy(function () { return string("[eE][%+%-]?")});
  var cns162 = Cobre.Lazy(function () { return string("[_%a][_%w]*")});
  var cns163 = Cobre.Lazy(function () { return string(" ")});
  var cns164 = Cobre.Lazy(function () { return string("NAME")});
  var cns165 = Cobre.Lazy(function () { return string("pairs")});
  var cns166 = Cobre.Lazy(function () { return string("Unrecognized token ")});
  function function$7 (reg_0, reg_1) {
    var reg_12, reg_13, reg_18, reg_19, reg_30, reg_41, reg_42, reg_45, reg_46, reg_52, reg_64, reg_72, reg_73, reg_77, reg_78, reg_85, reg_86, reg_89, reg_95, reg_96, reg_103, reg_107, reg_108, reg_115, reg_116, reg_121, reg_122, reg_127, reg_142, reg_145, reg_146, reg_153, reg_154, reg_161, reg_162, reg_169, reg_170, reg_184, reg_185, reg_192, reg_193, reg_196, reg_197, reg_201, reg_207, reg_208, reg_215, reg_216, reg_221, reg_222, reg_234, reg_241, reg_246, reg_247, reg_252, reg_253, reg_260, reg_261, reg_269, reg_270, reg_273, reg_280, reg_281, reg_285, reg_298, reg_299, reg_304, reg_305, reg_314, reg_315, reg_320, reg_321, reg_328, reg_329, reg_335, reg_336, reg_342, reg_343, reg_349, reg_352, reg_353, reg_358, reg_359, reg_362, reg_366, reg_367, reg_373, reg_380, reg_381, reg_386, reg_387, reg_394, reg_395, reg_402, reg_403, reg_410, reg_411, reg_418, reg_419, reg_422, reg_425, reg_426, reg_431, reg_432, reg_439, reg_440, reg_446, reg_447, reg_454, reg_455, reg_462, reg_463, reg_470, reg_471, reg_478, reg_479, reg_482, reg_485, reg_486, reg_491, reg_492, reg_495, reg_497, reg_499, reg_500, reg_501, reg_510, reg_513, reg_514, reg_516, reg_519, reg_520, reg_525, reg_526, reg_528, reg_529, reg_530, reg_531, reg_532, reg_533, reg_535, reg_541, reg_542, reg_549, reg_550, reg_552, reg_553, reg_556, reg_557, reg_558, reg_561, reg_562, reg_568;
    var goto_53=false, goto_130=false, goto_154=false, goto_208=false, goto_228=false, goto_239=false, goto_286=false, goto_322=false, goto_408=false, goto_428=false, goto_438=false, goto_501=false, goto_542=false, goto_622=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    loop_4: while (tobool(ne(get(reg_1[0], cns9()), cns10()))) {
      reg_12 = get(reg_1[0], cns19());
      reg_13 = newStack();
      push_Stack(reg_13, cns114());
      reg_15 = call(reg_12, reg_13);
      reg_18 = get(reg_1[0], cns19());
      reg_19 = newStack();
      push_Stack(reg_19, cns115());
      push_Stack(reg_19, lua$true());
      goto_53 = !tobool(first_Stack(call(reg_18, reg_19)));
      if (!goto_53) {
        reg_30 = first_Stack(call(get(reg_1[0], cns105()), newStack()));
        set(reg_1[0], cns101(), reg_30);
        if (tobool(eq(get(reg_1[0], cns101()), nil()))) {
          reg_41 = get(reg_1[0], cns19());
          reg_42 = newStack();
          push_Stack(reg_42, cns116());
          reg_44 = call(reg_41, reg_42);
        }
      }
      if ((goto_53 || false)) {
        goto_53 = false;
        if (true) break loop_4;
      }
    }
    reg_45 = newTable();
    reg_46 = cns12();
    set(reg_45, reg_46, get(get(reg_1[0], cns14()), cns12()));
    reg_52 = cns13();
    set(reg_45, reg_52, get(get(reg_1[0], cns14()), cns13()));
    set(reg_1[0], cns15(), reg_45);
    if (tobool(get(reg_1[0], cns11()))) {
      reg_64 = newStack();
      push_Stack(reg_64, nil());
      return reg_64;
    }
    reg_66 = nil();
    reg_72 = first_Stack(call(get(reg_1[0], cns105()), newStack()));
    reg_73 = not(reg_72);
    if (tobool(reg_73)) {
      reg_77 = get(reg_1[0], cns21());
      reg_78 = newStack();
      push_Stack(reg_78, cns117());
      reg_73 = first_Stack(call(reg_77, reg_78));
    }
    if (tobool(reg_73)) {
      reg_85 = get(reg_1[0], cns19());
      reg_86 = newStack();
      push_Stack(reg_86, cns95());
      reg_89 = first_Stack(call(reg_85, reg_86));
      reg_72 = cns10();
      loop_2: while (tobool(lua$true())) {
        reg_95 = get(reg_1[0], cns19());
        reg_96 = newStack();
        push_Stack(reg_96, reg_89);
        push_Stack(reg_96, lua$true());
        goto_130 = !tobool(first_Stack(call(reg_95, reg_96)));
        if (!goto_130) {
          if (true) break loop_2;
        }
        if ((goto_130 || false)) {
          goto_130 = false;
          reg_103 = get(reg_1[0], cns11());
          if (!tobool(reg_103)) {
            reg_107 = get(reg_1[0], cns21());
            reg_108 = newStack();
            push_Stack(reg_108, cns26());
            reg_103 = first_Stack(call(reg_107, reg_108));
          }
          goto_154 = !tobool(reg_103);
          if (!goto_154) {
            reg_115 = get(reg_1[0], cns17());
            reg_116 = newStack();
            push_Stack(reg_116, cns118());
            reg_118 = call(reg_115, reg_116);
          }
          if ((goto_154 || false)) {
            goto_154 = false;
            reg_121 = get(reg_1[0], cns19());
            reg_122 = newStack();
            push_Stack(reg_122, cns119());
            goto_438 = !tobool(first_Stack(call(reg_121, reg_122)));
            if (!goto_438) {
              reg_127 = newTable();
              set(reg_127, cns108(), cns120());
              set(reg_127, cns121(), cns122());
              set(reg_127, cns123(), cns124());
              set(reg_127, cns125(), cns23());
              set(reg_127, cns126(), cns127());
              set(reg_127, cns128(), cns129());
              set(reg_127, cns130(), cns131());
              reg_142 = nil();
              reg_145 = get(reg_1[0], cns21());
              reg_146 = newStack();
              push_Stack(reg_146, cns132());
              goto_208 = !tobool(first_Stack(call(reg_145, reg_146)));
              if (!goto_208) {
                reg_153 = get(reg_1[0], cns19());
                reg_154 = newStack();
                push_Stack(reg_154, cns95());
                reg_142 = get(reg_127, first_Stack(call(reg_153, reg_154)));
              }
              if ((goto_208 || false)) {
                goto_208 = false;
                reg_161 = get(reg_1[0], cns21());
                reg_162 = newStack();
                push_Stack(reg_162, cns133());
                goto_228 = !tobool(first_Stack(call(reg_161, reg_162)));
                if (!goto_228) {
                  reg_169 = get(reg_1[0], cns19());
                  reg_170 = newStack();
                  push_Stack(reg_170, cns95());
                  reg_142 = first_Stack(call(reg_169, reg_170));
                }
                if ((goto_228 || false)) {
                  goto_228 = false;
                  goto_239 = !tobool(first_Stack(call(get(reg_1[0], cns27()), newStack())));
                  if (!goto_239) {
                    reg_142 = cns23();
                  }
                  if ((goto_239 || false)) {
                    goto_239 = false;
                    reg_184 = get(reg_1[0], cns21());
                    reg_185 = newStack();
                    push_Stack(reg_185, cns134());
                    goto_286 = !tobool(first_Stack(call(reg_184, reg_185)));
                    if (!goto_286) {
                      reg_192 = get(reg_1[0], cns135());
                      reg_193 = newStack();
                      reg_196 = get(reg_1[0], cns19());
                      reg_197 = newStack();
                      push_Stack(reg_197, cns136());
                      append_Stack(reg_193, call(reg_196, reg_197));
                      reg_201 = first_Stack(call(reg_192, reg_193));
                      if (tobool(gt(reg_201, cns137()))) {
                        reg_207 = get(reg_1[0], cns17());
                        reg_208 = newStack();
                        push_Stack(reg_208, cns138());
                        reg_210 = call(reg_207, reg_208);
                      }
                      reg_215 = get(get(reg_1[0], cns139()), cns9());
                      reg_216 = newStack();
                      push_Stack(reg_216, reg_201);
                      reg_142 = first_Stack(call(reg_215, reg_216));
                    }
                    if ((goto_286 || false)) {
                      goto_286 = false;
                      reg_221 = get(reg_1[0], cns19());
                      reg_222 = newStack();
                      push_Stack(reg_222, cns140());
                      goto_322 = !tobool(first_Stack(call(reg_221, reg_222)));
                      if (!goto_322) {
                        reg_234 = mul(first_Stack(call(get(reg_1[0], cns113()), newStack())), cns62());
                        reg_241 = add(reg_234, first_Stack(call(get(reg_1[0], cns113()), newStack())));
                        reg_246 = get(get(reg_1[0], cns139()), cns9());
                        reg_247 = newStack();
                        push_Stack(reg_247, reg_241);
                        reg_142 = first_Stack(call(reg_246, reg_247));
                      }
                      if ((goto_322 || false)) {
                        goto_322 = false;
                        reg_252 = get(reg_1[0], cns19());
                        reg_253 = newStack();
                        push_Stack(reg_253, cns141());
                        goto_408 = !tobool(first_Stack(call(reg_252, reg_253)));
                        if (!goto_408) {
                          reg_260 = get(reg_1[0], cns19());
                          reg_261 = newStack();
                          push_Stack(reg_261, cns76());
                          if (tobool(not(first_Stack(call(reg_260, reg_261))))) {
                            reg_269 = get(reg_1[0], cns17());
                            reg_270 = newStack();
                            push_Stack(reg_270, cns142());
                            reg_272 = call(reg_269, reg_270);
                          }
                          reg_273 = cns22();
                          loop_3: while (true) {
                            if (tobool(get(reg_1[0], cns11()))) {
                              reg_280 = get(reg_1[0], cns17());
                              reg_281 = newStack();
                              push_Stack(reg_281, cns118());
                              reg_283 = call(reg_280, reg_281);
                            }
                            reg_285 = mul(reg_273, cns62());
                            reg_273 = add(reg_285, first_Stack(call(get(reg_1[0], cns113()), newStack())));
                            if (tobool(gt(reg_273, cns143()))) {
                              reg_298 = get(reg_1[0], cns17());
                              reg_299 = newStack();
                              push_Stack(reg_299, cns144());
                              reg_301 = call(reg_298, reg_299);
                            }
                            reg_304 = get(reg_1[0], cns19());
                            reg_305 = newStack();
                            push_Stack(reg_305, cns78());
                            if (tobool(first_Stack(call(reg_304, reg_305)))) break loop_3;
                          }
                          reg_314 = get(get(reg_1[0], cns145()), cns9());
                          reg_315 = newStack();
                          push_Stack(reg_315, reg_273);
                          reg_142 = first_Stack(call(reg_314, reg_315));
                        }
                        if ((goto_408 || false)) {
                          goto_408 = false;
                          reg_320 = get(reg_1[0], cns19());
                          reg_321 = newStack();
                          push_Stack(reg_321, cns146());
                          goto_428 = !tobool(first_Stack(call(reg_320, reg_321)));
                          if (!goto_428) {
                            reg_328 = get(reg_1[0], cns19());
                            reg_329 = newStack();
                            push_Stack(reg_329, cns114());
                            reg_331 = call(reg_328, reg_329);
                            reg_142 = cns10();
                          }
                          if ((goto_428 || false)) {
                            goto_428 = false;
                            reg_335 = get(reg_1[0], cns17());
                            reg_336 = newStack();
                            push_Stack(reg_336, cns147());
                            reg_338 = call(reg_335, reg_336);
                          }
                        }
                      }
                    }
                  }
                }
              }
              reg_72 = concat(reg_72, reg_142);
            }
            if ((goto_438 || false)) {
              goto_438 = false;
              reg_342 = get(reg_1[0], cns19());
              reg_343 = newStack();
              push_Stack(reg_343, cns95());
              reg_72 = concat(reg_72, first_Stack(call(reg_342, reg_343)));
            }
          }
        }
      }
    }
    if (tobool(reg_72)) {
      reg_349 = newStack();
      reg_352 = get(reg_1[0], cns31());
      reg_353 = newStack();
      push_Stack(reg_353, cns148());
      push_Stack(reg_353, reg_72);
      append_Stack(reg_349, call(reg_352, reg_353));
      return reg_349;
    }
    reg_358 = get(reg_1[0], cns19());
    reg_359 = newStack();
    push_Stack(reg_359, cns149());
    reg_362 = first_Stack(call(reg_358, reg_359));
    if (tobool(reg_362)) {
      reg_366 = get(reg_1[0], cns19());
      reg_367 = newStack();
      push_Stack(reg_367, cns150());
      reg_362 = concat(reg_362, first_Stack(call(reg_366, reg_367)));
      reg_373 = eq(reg_362, cns151());
      if (!tobool(reg_373)) {
        reg_373 = eq(reg_362, cns152());
      }
      goto_501 = !tobool(reg_373);
      if (!goto_501) {
        reg_380 = get(reg_1[0], cns17());
        reg_381 = newStack();
        push_Stack(reg_381, cns153());
        reg_383 = call(reg_380, reg_381);
      }
      if ((goto_501 || false)) {
        goto_501 = false;
        reg_386 = get(reg_1[0], cns21());
        reg_387 = newStack();
        push_Stack(reg_387, cns154());
        if (tobool(first_Stack(call(reg_386, reg_387)))) {
          reg_394 = get(reg_1[0], cns19());
          reg_395 = newStack();
          push_Stack(reg_395, cns155());
          reg_362 = concat(reg_362, first_Stack(call(reg_394, reg_395)));
          reg_402 = get(reg_1[0], cns21());
          reg_403 = newStack();
          push_Stack(reg_403, cns134());
          goto_542 = !tobool(first_Stack(call(reg_402, reg_403)));
          if (!goto_542) {
            reg_410 = get(reg_1[0], cns19());
            reg_411 = newStack();
            push_Stack(reg_411, cns156());
            reg_362 = concat(reg_362, first_Stack(call(reg_410, reg_411)));
          }
          if ((goto_542 || false)) {
            goto_542 = false;
            reg_418 = get(reg_1[0], cns17());
            reg_419 = newStack();
            push_Stack(reg_419, cns153());
            reg_421 = call(reg_418, reg_419);
          }
        }
      }
      reg_422 = newStack();
      reg_425 = get(reg_1[0], cns31());
      reg_426 = newStack();
      push_Stack(reg_426, cns157());
      push_Stack(reg_426, reg_362);
      append_Stack(reg_422, call(reg_425, reg_426));
      return reg_422;
    }
    reg_431 = get(reg_1[0], cns21());
    reg_432 = newStack();
    push_Stack(reg_432, cns158());
    if (tobool(first_Stack(call(reg_431, reg_432)))) {
      reg_439 = get(reg_1[0], cns19());
      reg_440 = newStack();
      push_Stack(reg_440, cns159());
      reg_362 = first_Stack(call(reg_439, reg_440));
      reg_446 = get(reg_1[0], cns21());
      reg_447 = newStack();
      push_Stack(reg_447, cns160());
      if (tobool(first_Stack(call(reg_446, reg_447)))) {
        reg_454 = get(reg_1[0], cns19());
        reg_455 = newStack();
        push_Stack(reg_455, cns161());
        reg_362 = concat(reg_362, first_Stack(call(reg_454, reg_455)));
        reg_462 = get(reg_1[0], cns21());
        reg_463 = newStack();
        push_Stack(reg_463, cns134());
        goto_622 = !tobool(first_Stack(call(reg_462, reg_463)));
        if (!goto_622) {
          reg_470 = get(reg_1[0], cns19());
          reg_471 = newStack();
          push_Stack(reg_471, cns156());
          reg_362 = concat(reg_362, first_Stack(call(reg_470, reg_471)));
        }
        if ((goto_622 || false)) {
          goto_622 = false;
          reg_478 = get(reg_1[0], cns17());
          reg_479 = newStack();
          push_Stack(reg_479, cns153());
          reg_481 = call(reg_478, reg_479);
        }
      }
      reg_482 = newStack();
      reg_485 = get(reg_1[0], cns31());
      reg_486 = newStack();
      push_Stack(reg_486, cns157());
      push_Stack(reg_486, reg_362);
      append_Stack(reg_482, call(reg_485, reg_486));
      return reg_482;
    }
    reg_491 = get(reg_1[0], cns19());
    reg_492 = newStack();
    push_Stack(reg_492, cns162());
    reg_495 = first_Stack(call(reg_491, reg_492));
    if (tobool(reg_495)) {
      reg_497 = reg_1[1];
      reg_499 = get(reg_497, cns18());
      reg_500 = newStack();
      push_Stack(reg_500, reg_497);
      reg_501 = cns163();
      push_Stack(reg_500, concat(reg_501, concat(reg_495, cns163())));
      if (tobool(ne(first_Stack(call(reg_499, reg_500)), nil()))) {
        reg_510 = newStack();
        reg_513 = get(reg_1[0], cns31());
        reg_514 = newStack();
        push_Stack(reg_514, reg_495);
        append_Stack(reg_510, call(reg_513, reg_514));
        return reg_510;
      }
      reg_516 = newStack();
      reg_519 = get(reg_1[0], cns31());
      reg_520 = newStack();
      push_Stack(reg_520, cns164());
      push_Stack(reg_520, reg_495);
      append_Stack(reg_516, call(reg_519, reg_520));
      return reg_516;
    }
    reg_525 = get(reg_1[0], cns165());
    reg_526 = newStack();
    push_Stack(reg_526, reg_1[2]);
    reg_528 = call(reg_525, reg_526);
    reg_529 = next_Stack(reg_528);
    reg_530 = next_Stack(reg_528);
    reg_531 = next_Stack(reg_528);
    loop_1: while (true) {
      reg_532 = newStack();
      push_Stack(reg_532, reg_530);
      push_Stack(reg_532, reg_531);
      reg_533 = call(reg_529, reg_532);
      reg_531 = next_Stack(reg_533);
      reg_535 = next_Stack(reg_533);
      if (tobool(eq(reg_531, nil()))) break loop_1;
      reg_541 = get(reg_1[0], cns19());
      reg_542 = newStack();
      push_Stack(reg_542, reg_535);
      push_Stack(reg_542, lua$true());
      if (tobool(first_Stack(call(reg_541, reg_542)))) {
        reg_549 = get(reg_1[0], cns31());
        reg_550 = newStack();
        push_Stack(reg_550, reg_535);
        reg_552 = first_Stack(call(reg_549, reg_550));
        reg_553 = newStack();
        push_Stack(reg_553, reg_552);
        return reg_553;
      }
    }
    reg_556 = get(reg_1[0], cns17());
    reg_557 = newStack();
    reg_558 = cns166();
    reg_561 = get(reg_1[0], cns21());
    reg_562 = newStack();
    push_Stack(reg_562, cns95());
    push_Stack(reg_557, concat(reg_558, first_Stack(call(reg_561, reg_562))));
    reg_567 = call(reg_556, reg_557);
    reg_568 = newStack();
    return reg_568;
  }
  var mod19 = new Cobre.Module({
    "0": function$7,
  });
  var item259 = closure.build(mod19);
  var item259$new = item259.get("new");
  var cns167 = Cobre.Lazy(function () { return string("lex")});
  var cns168 = Cobre.Lazy(function () { return string("next")});
  var mod22 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
  });
  var cns169 = Cobre.Lazy(function () { return string("xpcall")});
  var tp1 = new Cobre.Record([tp1,Cobre.Any]);
  var mod24 = new Cobre.Module({
    "0": tp1,
  });
  function function$8 (reg_0, reg_1) {
    var reg_5, reg_6;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = newStack();
    push_Stack(reg_6, lua$true());
    append_Stack(reg_6, call(reg_5, newStack()));
    return reg_6;
  }
  var mod23 = new Cobre.Module({
    "0": function$8,
  });
  var item274 = closure.build(mod23);
  var item274$new = item274.get("new");
  var mod26 = new Cobre.Module({
    "0": tp1,
  });
  var cns170 = Cobre.Lazy(function () { return string("debug")});
  var cns171 = Cobre.Lazy(function () { return string("traceback")});
  var cns172 = Cobre.Lazy(function () { return string("\x1b[31mFATAL\x1b[39m ")});
  function function$9 (reg_0, reg_1) {
    var reg_2, reg_5, reg_18, reg_19, reg_24;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    if (tobool(eq(get(get(reg_2[0], cns3()), cns5()), nil()))) {
      reg_18 = get(get(reg_2[0], cns170()), cns171());
      reg_19 = newStack();
      push_Stack(reg_19, concat(cns172(), reg_5));
      reg_1[1] = first_Stack(call(reg_18, reg_19));
    }
    reg_24 = newStack();
    return reg_24;
  }
  var mod25 = new Cobre.Module({
    "0": function$9,
  });
  var item283 = closure.build(mod25);
  var item283$new = item283.get("new");
  var cns173 = Cobre.Lazy(function () { return string("status")});
  var cns174 = Cobre.Lazy(function () { return string("tk")});
  function Lexer_next (reg_0, reg_1) {
    var reg_3, reg_11, reg_16, reg_17, reg_23, reg_24, reg_27, reg_34, reg_35, reg_42, reg_52, reg_59, reg_60, reg_65;
    var goto_59=false, goto_75=false;
    reg_3 = [reg_1, nil()];
    reg_3[1] = nil();
    if (tobool(not(get(reg_1[0], cns169())))) {
      reg_11 = lua$function(item274$new(reg_3));
      set(reg_1[0], cns169(), reg_11);
    }
    reg_16 = get(reg_1[0], cns169());
    reg_17 = newStack();
    push_Stack(reg_17, get(reg_1[0], cns167()));
    push_Stack(reg_17, lua$function(item283$new(reg_3)));
    reg_23 = call(reg_16, reg_17);
    reg_24 = next_Stack(reg_23);
    set(reg_1[0], cns173(), reg_24);
    reg_27 = next_Stack(reg_23);
    set(reg_1[0], cns174(), reg_27);
    if (tobool(reg_3[1])) {
      reg_34 = get(reg_1[0], cns5());
      reg_35 = newStack();
      push_Stack(reg_35, reg_3[1]);
      reg_37 = call(reg_34, reg_35);
    }
    goto_59 = !tobool(get(reg_1[0], cns173()));
    if (!goto_59) {
      reg_42 = newStack();
      push_Stack(reg_42, get(reg_1[0], cns174()));
      return reg_42;
    }
    if ((goto_59 || false)) {
      goto_59 = false;
      goto_75 = !tobool(get(get(reg_1[0], cns3()), cns5()));
      if (!goto_75) {
        reg_52 = newStack();
        push_Stack(reg_52, nil());
        push_Stack(reg_52, get(reg_1[0], cns174()));
        return reg_52;
      }
      if ((goto_75 || false)) {
        goto_75 = false;
        reg_59 = get(reg_1[0], cns5());
        reg_60 = newStack();
        push_Stack(reg_60, get(reg_1[0], cns174()));
        reg_64 = call(reg_59, reg_60);
      }
    }
    reg_65 = newStack();
    return reg_65;
  }
  var mod21 = new Cobre.Module({
    "0": Lexer_next,
  });
  var item290 = closure.build(mod21);
  var item290$new = item290.get("new");
  var cns175 = Cobre.Lazy(function () { return string("tokens")});
  var mod28 = new Cobre.Module({
    "0": tp1,
  });
  var cns176 = Cobre.Lazy(function () { return string("table")});
  var cns177 = Cobre.Lazy(function () { return string("insert")});
  function Lexer_tokens (reg_0, reg_1) {
    var reg_4, reg_12, reg_20, reg_21, reg_38, reg_39;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = newTable();
    reg_12 = first_Stack(call(get(get(reg_1[0], cns3()), cns168()), newStack()));
    loop_1: while (tobool(ne(reg_12, nil()))) {
      reg_20 = get(get(reg_1[0], cns176()), cns177());
      reg_21 = newStack();
      push_Stack(reg_21, reg_4);
      push_Stack(reg_21, reg_12);
      reg_22 = call(reg_20, reg_21);
      reg_12 = first_Stack(call(get(get(reg_1[0], cns3()), cns168()), newStack()));
    }
    if (tobool(not(get(get(reg_1[0], cns3()), cns5())))) {
      reg_38 = newStack();
      push_Stack(reg_38, reg_4);
      return reg_38;
    }
    reg_39 = newStack();
    return reg_39;
  }
  var mod27 = new Cobre.Module({
    "0": Lexer_tokens,
  });
  var item299 = closure.build(mod27);
  var item299$new = item299.get("new");
  function lua_main (reg_0) {
    var reg_1, reg_2, reg_5, reg_6, reg_8, reg_13, reg_18, reg_19, reg_23, reg_27, reg_31, reg_35, reg_39, reg_43, reg_111, reg_115, reg_119, reg_124, reg_125, reg_130, reg_131, reg_134;
    reg_1 = nil();
    reg_2 = [reg_1, reg_1, reg_1];
    reg_2[0] = reg_0;
    reg_5 = get(reg_2[0], cns1());
    reg_6 = newStack();
    push_Stack(reg_6, newTable());
    reg_8 = newTable();
    set(reg_8, cns2(), reg_2[0]);
    push_Stack(reg_6, reg_8);
    reg_2[0] = first_Stack(call(reg_5, reg_6));
    reg_13 = newTable();
    set(reg_2[0], cns3(), reg_13);
    reg_18 = get(reg_2[0], cns3());
    reg_19 = cns4();
    set(reg_18, reg_19, lua$function(item42$new(reg_2)));
    reg_23 = lua$function(item51$new(reg_2));
    set(reg_2[0], cns17(), reg_23);
    reg_27 = lua$function(item64$new(reg_2));
    set(reg_2[0], cns21(), reg_27);
    reg_31 = lua$function(item77$new(reg_2));
    set(reg_2[0], cns19(), reg_31);
    reg_35 = lua$function(item86$new(reg_2));
    set(reg_2[0], cns27(), reg_35);
    reg_39 = lua$function(item96$new(reg_2));
    set(reg_2[0], cns31(), reg_39);
    reg_2[1] = cns32();
    reg_43 = newTable();
    set(reg_43, cns8(), cns33());
    set(reg_43, cns34(), cns35());
    set(reg_43, cns36(), cns37());
    set(reg_43, cns38(), cns39());
    set(reg_43, cns40(), cns41());
    set(reg_43, cns42(), cns43());
    set(reg_43, cns44(), cns45());
    set(reg_43, cns46(), cns47());
    set(reg_43, cns48(), cns49());
    set(reg_43, cns50(), cns51());
    set(reg_43, cns52(), cns53());
    set(reg_43, cns54(), cns55());
    set(reg_43, cns56(), cns57());
    set(reg_43, cns58(), cns59());
    set(reg_43, cns60(), cns61());
    set(reg_43, cns62(), cns63());
    set(reg_43, cns64(), cns65());
    set(reg_43, cns66(), cns67());
    set(reg_43, cns68(), cns20());
    set(reg_43, cns69(), cns70());
    set(reg_43, cns71(), cns72());
    set(reg_43, cns73(), cns74());
    set(reg_43, cns75(), cns76());
    set(reg_43, cns77(), cns78());
    set(reg_43, cns79(), cns80());
    set(reg_43, cns81(), cns82());
    set(reg_43, cns83(), cns84());
    set(reg_43, cns85(), cns86());
    set(reg_43, cns87(), cns16());
    set(reg_43, cns88(), cns89());
    set(reg_43, cns90(), cns91());
    set(reg_43, cns92(), cns93());
    set(reg_43, cns94(), cns95());
    reg_2[2] = reg_43;
    reg_111 = lua$function(item179$new(reg_2));
    set(reg_2[0], cns105(), reg_111);
    reg_115 = lua$function(item195$new(reg_2));
    set(reg_2[0], cns113(), reg_115);
    reg_119 = lua$function(item259$new(reg_2));
    set(reg_2[0], cns167(), reg_119);
    reg_124 = get(reg_2[0], cns3());
    reg_125 = cns168();
    set(reg_124, reg_125, lua$function(item290$new(reg_2)));
    reg_130 = get(reg_2[0], cns3());
    reg_131 = cns175();
    set(reg_130, reg_131, lua$function(item299$new(reg_2)));
    reg_134 = newStack();
    push_Stack(reg_134, get(reg_2[0], cns3()));
    return reg_134;
  }
  var get_global = lua.get("get_global");
  function main () {
    reg_1 = lua_main(get_global());
    return;
  }
  var mod1 = new Cobre.Module({
    "lua_main": lua_main,
    "main": main,
  });
  return mod1;
});
Cobre.$export("lua_parser.parser", function () {
  var lua = Cobre.$import("lua");
  var nil = lua.get("nil");
  var mod2 = new Cobre.Module({
    "0": Cobre.Any,
  });
  var string = lua.get("string");
  var cns1 = Cobre.Lazy(function () { return string("setmetatable")});
  var get = lua.get("get");
  var newStack = lua.get("newStack");
  var newTable = lua.get("newTable");
  var push_Stack = lua.get("push\x1dStack");
  var cns2 = Cobre.Lazy(function () { return string("__index")});
  var set = lua.get("set");
  var call = lua.get("call");
  var first_Stack = lua.get("first\x1dStack");
  var lua_parser_lexer = Cobre.$import("lua_parser.lexer");
  var lua_parser_lexer$lua_main = lua_parser_lexer.get("lua_main");
  var cns3 = Cobre.Lazy(function () { return string("Lexer")});
  var cns4 = Cobre.Lazy(function () { return string("Parser")});
  var cns5 = Cobre.Lazy(function () { return string("open")});
  var closure = lua.get("closure");
  var tp1 = new Cobre.Record([Cobre.Any]);
  var mod4 = new Cobre.Module({
    "0": tp1,
  });
  var next_Stack = lua.get("next\x1dStack");
  var cns6 = Cobre.Lazy(function () { return string("next")});
  var cns7 = Cobre.Lazy(function () { return string("token")});
  var cns8 = Cobre.Lazy(function () { return string("error")});
  function Parser_open (reg_0, reg_1) {
    var reg_4, reg_9, reg_10, reg_14, reg_16, reg_17, reg_19, reg_27;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_9 = get(get(reg_1[0], cns3()), cns5());
    reg_10 = newStack();
    push_Stack(reg_10, reg_4);
    reg_11 = call(reg_9, reg_10);
    reg_14 = get(reg_1[0], cns3());
    reg_16 = get(reg_14, cns6());
    reg_17 = newStack();
    push_Stack(reg_17, reg_14);
    reg_19 = first_Stack(call(reg_16, reg_17));
    set(reg_1[0], cns7(), reg_19);
    set(get(reg_1[0], cns4()), cns8(), nil());
    reg_27 = newStack();
    return reg_27;
  }
  var mod3 = new Cobre.Module({
    "0": Parser_open,
  });
  var item35 = closure.build(mod3);
  var item35$new = item35.get("new");
  var lua$function = lua.get("function");
  var mod6 = new Cobre.Module({
    "0": tp1,
  });
  var cns9 = Cobre.Lazy(function () { return string("<eof>")});
  var tobool = lua.get("tobool");
  var cns10 = Cobre.Lazy(function () { return string("line")});
  var cns11 = Cobre.Lazy(function () { return string(":")});
  var cns12 = Cobre.Lazy(function () { return string("column")});
  var concat = lua.get("concat");
  var cns13 = Cobre.Lazy(function () { return string(": ")});
  function lua_parser_parser$function (reg_0, reg_1) {
    var reg_4, reg_5, reg_14, reg_15, reg_25, reg_26, reg_32, reg_33, reg_40;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = cns9();
    if (tobool(get(reg_1[0], cns7()))) {
      reg_14 = get(get(reg_1[0], cns7()), cns10());
      reg_15 = cns11();
      reg_5 = concat(reg_14, concat(reg_15, get(get(reg_1[0], cns7()), cns12())));
    }
    reg_25 = get(reg_1[0], cns4());
    reg_26 = cns8();
    set(reg_25, reg_26, concat(reg_5, concat(cns13(), reg_4)));
    reg_32 = get(reg_1[0], cns8());
    reg_33 = newStack();
    push_Stack(reg_33, get(get(reg_1[0], cns4()), cns8()));
    reg_39 = call(reg_32, reg_33);
    reg_40 = newStack();
    return reg_40;
  }
  var mod5 = new Cobre.Module({
    "0": lua_parser_parser$function,
  });
  var item49 = closure.build(mod5);
  var item49$new = item49.get("new");
  var cns14 = Cobre.Lazy(function () { return string("err")});
  var mod8 = new Cobre.Module({
    "0": tp1,
  });
  var cns15 = Cobre.Lazy(function () { return string("_lookahead")});
  function function$1 (reg_0, reg_1) {
    var reg_6, reg_9, reg_21, reg_32, reg_33, reg_41, reg_42, reg_49;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_6 = get(reg_1[0], cns7());
    reg_9 = get(reg_1[0], cns15());
    if (!tobool(reg_9)) {
      reg_9 = first_Stack(call(get(get(reg_1[0], cns3()), cns6()), newStack()));
    }
    set(reg_1[0], cns7(), reg_9);
    reg_21 = nil();
    set(reg_1[0], cns15(), reg_21);
    if (tobool(get(get(reg_1[0], cns3()), cns8()))) {
      reg_32 = get(reg_1[0], cns4());
      reg_33 = cns8();
      set(reg_32, reg_33, get(get(reg_1[0], cns3()), cns8()));
      reg_41 = get(reg_1[0], cns8());
      reg_42 = newStack();
      push_Stack(reg_42, get(get(reg_1[0], cns4()), cns8()));
      reg_48 = call(reg_41, reg_42);
    }
    reg_49 = newStack();
    push_Stack(reg_49, reg_6);
    return reg_49;
  }
  var mod7 = new Cobre.Module({
    "0": function$1,
  });
  var item57 = closure.build(mod7);
  var item57$new = item57.get("new");
  var mod10 = new Cobre.Module({
    "0": tp1,
  });
  var not = lua.get("not");
  var lua$false = lua.get("false");
  var lua$int = lua.get("int");
  var cns16 = Cobre.Lazy(function () { return lua$int(1)});
  var copy_Stack = lua.get("copy\x1dStack");
  var table_append = lua.get("table_append");
  var cns17 = Cobre.Lazy(function () { return string("ipairs")});
  var eq = lua.get("eq");
  var cns18 = Cobre.Lazy(function () { return string("type")});
  var lua$true = lua.get("true");
  function function$2 (reg_0, reg_1) {
    var reg_9, reg_11, reg_16, reg_17, reg_18, reg_19, reg_20, reg_21, reg_22, reg_23, reg_25, reg_36, reg_38;
    reg_2 = nil();
    reg_3 = [reg_1];
    if (tobool(not(get(reg_1[0], cns7())))) {
      reg_9 = newStack();
      push_Stack(reg_9, lua$false());
      return reg_9;
    }
    reg_11 = newTable();
    table_append(reg_11, cns16(), copy_Stack(reg_0));
    reg_16 = get(reg_1[0], cns17());
    reg_17 = newStack();
    push_Stack(reg_17, reg_11);
    reg_18 = call(reg_16, reg_17);
    reg_19 = next_Stack(reg_18);
    reg_20 = next_Stack(reg_18);
    reg_21 = next_Stack(reg_18);
    loop_1: while (true) {
      reg_22 = newStack();
      push_Stack(reg_22, reg_20);
      push_Stack(reg_22, reg_21);
      reg_23 = call(reg_19, reg_22);
      reg_21 = next_Stack(reg_23);
      reg_25 = next_Stack(reg_23);
      if (tobool(eq(reg_21, nil()))) break loop_1;
      if (tobool(eq(get(get(reg_1[0], cns7()), cns18()), reg_25))) {
        reg_36 = newStack();
        push_Stack(reg_36, lua$true());
        return reg_36;
      }
    }
    reg_38 = newStack();
    push_Stack(reg_38, lua$false());
    return reg_38;
  }
  var mod9 = new Cobre.Module({
    "0": function$2,
  });
  var item73 = closure.build(mod9);
  var item73$new = item73.get("new");
  var cns19 = Cobre.Lazy(function () { return string("check")});
  var mod12 = new Cobre.Module({
    "0": tp1,
  });
  var append_Stack = lua.get("append\x1dStack");
  function function$3 (reg_0, reg_1) {
    var reg_4, reg_7, reg_11, reg_12;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = newStack();
    reg_7 = get(reg_1[0], cns7());
    if (tobool(reg_7)) {
      reg_11 = get(reg_1[0], cns19());
      reg_12 = newStack();
      append_Stack(reg_12, reg_0);
      reg_7 = not(first_Stack(call(reg_11, reg_12)));
    }
    push_Stack(reg_4, reg_7);
    return reg_4;
  }
  var mod11 = new Cobre.Module({
    "0": function$3,
  });
  var item81 = closure.build(mod11);
  var item81$new = item81.get("new");
  var cns20 = Cobre.Lazy(function () { return string("check_not")});
  var mod14 = new Cobre.Module({
    "0": tp1,
  });
  function function$4 (reg_0, reg_1) {
    var reg_6, reg_7, reg_11, reg_17, reg_19;
    var goto_20=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_6 = get(reg_1[0], cns19());
    reg_7 = newStack();
    append_Stack(reg_7, reg_0);
    goto_20 = !tobool(first_Stack(call(reg_6, reg_7)));
    if (!goto_20) {
      reg_11 = newStack();
      append_Stack(reg_11, call(get(reg_1[0], cns6()), newStack()));
      return reg_11;
    }
    if ((goto_20 || false)) {
      goto_20 = false;
      reg_17 = newStack();
      push_Stack(reg_17, nil());
      return reg_17;
    }
    reg_19 = newStack();
    return reg_19;
  }
  var mod13 = new Cobre.Module({
    "0": function$4,
  });
  var item88 = closure.build(mod13);
  var item88$new = item88.get("new");
  var cns21 = Cobre.Lazy(function () { return string("try")});
  var mod16 = new Cobre.Module({
    "0": tp1,
  });
  var cns22 = Cobre.Lazy(function () { return string("table")});
  var cns23 = Cobre.Lazy(function () { return string("concat")});
  var cns24 = Cobre.Lazy(function () { return string(" or ")});
  var cns25 = Cobre.Lazy(function () { return string("lower")});
  var cns26 = Cobre.Lazy(function () { return string(" expected")});
  function function$5 (reg_0, reg_1) {
    var reg_6, reg_7, reg_9, reg_11, reg_14, reg_15, reg_20, reg_21, reg_22, reg_27, reg_29, reg_30, reg_36;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_6 = get(reg_1[0], cns21());
    reg_7 = newStack();
    append_Stack(reg_7, reg_0);
    reg_9 = first_Stack(call(reg_6, reg_7));
    if (tobool(reg_9)) {
      reg_11 = newStack();
      push_Stack(reg_11, reg_9);
      return reg_11;
    }
    reg_14 = get(reg_1[0], cns14());
    reg_15 = newStack();
    reg_20 = get(get(reg_1[0], cns22()), cns23());
    reg_21 = newStack();
    reg_22 = newTable();
    table_append(reg_22, cns16(), copy_Stack(reg_0));
    push_Stack(reg_21, reg_22);
    push_Stack(reg_21, cns24());
    reg_27 = first_Stack(call(reg_20, reg_21));
    reg_29 = get(reg_27, cns25());
    reg_30 = newStack();
    push_Stack(reg_30, reg_27);
    push_Stack(reg_15, concat(first_Stack(call(reg_29, reg_30)), cns26()));
    reg_35 = call(reg_14, reg_15);
    reg_36 = newStack();
    return reg_36;
  }
  var mod15 = new Cobre.Module({
    "0": function$5,
  });
  var item100 = closure.build(mod15);
  var item100$new = item100.get("new");
  var cns27 = Cobre.Lazy(function () { return string("expect")});
  var mod18 = new Cobre.Module({
    "0": tp1,
  });
  var cns28 = Cobre.Lazy(function () { return string(" expected (to close ")});
  var cns29 = Cobre.Lazy(function () { return string(" at line ")});
  var cns30 = Cobre.Lazy(function () { return string(")")});
  function function$6 (reg_0, reg_1) {
    var reg_4, reg_5, reg_8, reg_9, reg_11, reg_13, reg_16, reg_17, reg_18, reg_20, reg_21, reg_31;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_8 = get(reg_1[0], cns21());
    reg_9 = newStack();
    push_Stack(reg_9, reg_4);
    reg_11 = first_Stack(call(reg_8, reg_9));
    if (tobool(reg_11)) {
      reg_13 = newStack();
      push_Stack(reg_13, reg_11);
      return reg_13;
    }
    reg_16 = get(reg_1[0], cns14());
    reg_17 = newStack();
    reg_18 = cns28();
    reg_20 = get(reg_5, cns18());
    reg_21 = cns29();
    push_Stack(reg_17, concat(reg_4, concat(reg_18, concat(reg_20, concat(reg_21, concat(get(reg_5, cns10()), cns30()))))));
    reg_30 = call(reg_16, reg_17);
    reg_31 = newStack();
    return reg_31;
  }
  var mod17 = new Cobre.Module({
    "0": function$6,
  });
  var item110 = closure.build(mod17);
  var item110$new = item110.get("new");
  var cns31 = Cobre.Lazy(function () { return string("match")});
  var mod20 = new Cobre.Module({
    "0": tp1,
  });
  var cns32 = Cobre.Lazy(function () { return string("NAME")});
  var cns33 = Cobre.Lazy(function () { return string("value")});
  function function$7 (reg_0, reg_1) {
    var reg_6, reg_7, reg_10, reg_12, reg_15, reg_17;
    var goto_18=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_6 = get(reg_1[0], cns27());
    reg_7 = newStack();
    push_Stack(reg_7, cns32());
    reg_10 = first_Stack(call(reg_6, reg_7));
    goto_18 = !tobool(reg_10);
    if (!goto_18) {
      reg_12 = newStack();
      push_Stack(reg_12, get(reg_10, cns33()));
      return reg_12;
    }
    if ((goto_18 || false)) {
      goto_18 = false;
      reg_15 = newStack();
      push_Stack(reg_15, nil());
      return reg_15;
    }
    reg_17 = newStack();
    return reg_17;
  }
  var mod19 = new Cobre.Module({
    "0": function$7,
  });
  var item119 = closure.build(mod19);
  var item119$new = item119.get("new");
  var cns34 = Cobre.Lazy(function () { return string("get_name")});
  var mod22 = new Cobre.Module({
    "0": tp1,
  });
  function function$8 (reg_0, reg_1) {
    var reg_6, reg_18;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_6 = get(reg_1[0], cns15());
    if (!tobool(reg_6)) {
      reg_6 = first_Stack(call(get(get(reg_1[0], cns3()), cns6()), newStack()));
    }
    set(reg_1[0], cns15(), reg_6);
    reg_18 = newStack();
    push_Stack(reg_18, get(reg_1[0], cns15()));
    return reg_18;
  }
  var mod21 = new Cobre.Module({
    "0": function$8,
  });
  var item126 = closure.build(mod21);
  var item126$new = item126.get("new");
  var cns35 = Cobre.Lazy(function () { return string("lookahead")});
  var mod24 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
    "2": Cobre.Any,
  });
  var cns36 = Cobre.Lazy(function () { return lua$int(0)});
  var tp2 = new Cobre.Record([tp1,Cobre.Any,Cobre.Any]);
  var mod26 = new Cobre.Module({
    "0": tp2,
  });
  function function$10 (reg_0, reg_1) {
    var reg_5, reg_10;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    set(reg_5, cns10(), reg_1[1]);
    set(reg_5, cns12(), reg_1[2]);
    reg_10 = newStack();
    push_Stack(reg_10, reg_5);
    return reg_10;
  }
  var mod25 = new Cobre.Module({
    "0": function$10,
  });
  var item143 = closure.build(mod25);
  var item143$new = item143.get("new");
  function function$9 (reg_0, reg_1) {
    var reg_2, reg_3, reg_20;
    reg_2 = nil();
    reg_3 = [reg_1, reg_2, reg_2];
    reg_3[1] = cns36();
    reg_3[2] = cns36();
    if (tobool(get(reg_1[0], cns7()))) {
      reg_3[1] = get(get(reg_1[0], cns7()), cns10());
      reg_3[2] = get(get(reg_1[0], cns7()), cns12());
    }
    reg_20 = newStack();
    push_Stack(reg_20, lua$function(item143$new(reg_3)));
    return reg_20;
  }
  var mod23 = new Cobre.Module({
    "0": function$9,
  });
  var item147 = closure.build(mod23);
  var item147$new = item147.get("new");
  var cns37 = Cobre.Lazy(function () { return string("get_pos")});
  var cns38 = Cobre.Lazy(function () { return string("singlevar")});
  var mod28 = new Cobre.Module({
    "0": tp1,
  });
  var cns39 = Cobre.Lazy(function () { return string("var")});
  var cns40 = Cobre.Lazy(function () { return string("name")});
  function Parser_singlevar (reg_0, reg_1) {
    var reg_9, reg_15, reg_16, reg_17, reg_18;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_9 = first_Stack(call(get(reg_1[0], cns37()), newStack()));
    reg_15 = first_Stack(call(get(reg_1[0], cns34()), newStack()));
    reg_16 = newStack();
    reg_17 = newStack();
    reg_18 = newTable();
    set(reg_18, cns18(), cns39());
    set(reg_18, cns40(), reg_15);
    push_Stack(reg_17, reg_18);
    append_Stack(reg_16, call(reg_9, reg_17));
    return reg_16;
  }
  var mod27 = new Cobre.Module({
    "0": Parser_singlevar,
  });
  var item157 = closure.build(mod27);
  var item157$new = item157.get("new");
  var mod30 = new Cobre.Module({
    "0": tp1,
  });
  var cns41 = Cobre.Lazy(function () { return string("{")});
  var cns42 = Cobre.Lazy(function () { return string("}")});
  var cns43 = Cobre.Lazy(function () { return string("[")});
  var cns44 = Cobre.Lazy(function () { return string("expr")});
  var cns45 = Cobre.Lazy(function () { return string("]")});
  var cns46 = Cobre.Lazy(function () { return string("=")});
  var cns47 = Cobre.Lazy(function () { return string("insert")});
  var cns48 = Cobre.Lazy(function () { return string("indexitem")});
  var cns49 = Cobre.Lazy(function () { return string("key")});
  var cns50 = Cobre.Lazy(function () { return string("fielditem")});
  var cns51 = Cobre.Lazy(function () { return string("item")});
  var cns52 = Cobre.Lazy(function () { return string(",")});
  var cns53 = Cobre.Lazy(function () { return string(";")});
  var cns54 = Cobre.Lazy(function () { return string("constructor")});
  var cns55 = Cobre.Lazy(function () { return string("items")});
  function function$11 (reg_0, reg_1) {
    var reg_9, reg_12, reg_13, reg_16, reg_17, reg_20, reg_21, reg_28, reg_29, reg_41, reg_44, reg_45, reg_50, reg_51, reg_61, reg_66, reg_67, reg_68, reg_76, reg_77, reg_80, reg_105, reg_108, reg_109, reg_119, reg_124, reg_125, reg_126, reg_139, reg_144, reg_145, reg_146, reg_153, reg_154, reg_160, reg_161, reg_164, reg_165, reg_166;
    var goto_85=false, goto_156=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_9 = first_Stack(call(get(reg_1[0], cns37()), newStack()));
    reg_12 = get(reg_1[0], cns27());
    reg_13 = newStack();
    push_Stack(reg_13, cns41());
    reg_16 = first_Stack(call(reg_12, reg_13));
    reg_17 = newTable();
    loop_1: while (true) {
      reg_20 = get(reg_1[0], cns20());
      reg_21 = newStack();
      push_Stack(reg_21, cns42());
      if (!tobool(first_Stack(call(reg_20, reg_21)))) break loop_1;
      reg_28 = get(reg_1[0], cns21());
      reg_29 = newStack();
      push_Stack(reg_29, cns43());
      goto_85 = !tobool(first_Stack(call(reg_28, reg_29)));
      if (!goto_85) {
        reg_41 = first_Stack(call(get(get(reg_1[0], cns4()), cns44()), newStack()));
        reg_44 = get(reg_1[0], cns27());
        reg_45 = newStack();
        push_Stack(reg_45, cns45());
        reg_47 = call(reg_44, reg_45);
        reg_50 = get(reg_1[0], cns27());
        reg_51 = newStack();
        push_Stack(reg_51, cns46());
        reg_53 = call(reg_50, reg_51);
        reg_61 = first_Stack(call(get(get(reg_1[0], cns4()), cns44()), newStack()));
        reg_66 = get(get(reg_1[0], cns22()), cns47());
        reg_67 = newStack();
        push_Stack(reg_67, reg_17);
        reg_68 = newTable();
        set(reg_68, cns18(), cns48());
        set(reg_68, cns49(), reg_41);
        set(reg_68, cns33(), reg_61);
        push_Stack(reg_67, reg_68);
        reg_73 = call(reg_66, reg_67);
      }
      if ((goto_85 || false)) {
        goto_85 = false;
        reg_76 = get(reg_1[0], cns19());
        reg_77 = newStack();
        push_Stack(reg_77, cns32());
        reg_80 = first_Stack(call(reg_76, reg_77));
        if (tobool(reg_80)) {
          reg_80 = first_Stack(call(get(reg_1[0], cns35()), newStack()));
        }
        if (tobool(reg_80)) {
          reg_80 = eq(get(first_Stack(call(get(reg_1[0], cns35()), newStack())), cns18()), cns46());
        }
        goto_156 = !tobool(reg_80);
        if (!goto_156) {
          reg_105 = first_Stack(call(get(reg_1[0], cns34()), newStack()));
          reg_108 = get(reg_1[0], cns27());
          reg_109 = newStack();
          push_Stack(reg_109, cns46());
          reg_111 = call(reg_108, reg_109);
          reg_119 = first_Stack(call(get(get(reg_1[0], cns4()), cns44()), newStack()));
          reg_124 = get(get(reg_1[0], cns22()), cns47());
          reg_125 = newStack();
          push_Stack(reg_125, reg_17);
          reg_126 = newTable();
          set(reg_126, cns18(), cns50());
          set(reg_126, cns49(), reg_105);
          set(reg_126, cns33(), reg_119);
          push_Stack(reg_125, reg_126);
          reg_131 = call(reg_124, reg_125);
        }
        if ((goto_156 || false)) {
          goto_156 = false;
          reg_139 = first_Stack(call(get(get(reg_1[0], cns4()), cns44()), newStack()));
          reg_144 = get(get(reg_1[0], cns22()), cns47());
          reg_145 = newStack();
          push_Stack(reg_145, reg_17);
          reg_146 = newTable();
          set(reg_146, cns18(), cns51());
          set(reg_146, cns33(), reg_139);
          push_Stack(reg_145, reg_146);
          reg_150 = call(reg_144, reg_145);
        }
      }
      reg_153 = get(reg_1[0], cns21());
      reg_154 = newStack();
      push_Stack(reg_154, cns52());
      push_Stack(reg_154, cns53());
      reg_157 = call(reg_153, reg_154);
    }
    reg_160 = get(reg_1[0], cns31());
    reg_161 = newStack();
    push_Stack(reg_161, cns42());
    push_Stack(reg_161, reg_16);
    reg_163 = call(reg_160, reg_161);
    reg_164 = newStack();
    reg_165 = newStack();
    reg_166 = newTable();
    set(reg_166, cns18(), cns54());
    set(reg_166, cns55(), reg_17);
    push_Stack(reg_165, reg_166);
    append_Stack(reg_164, call(reg_9, reg_165));
    return reg_164;
  }
  var mod29 = new Cobre.Module({
    "0": function$11,
  });
  var item178 = closure.build(mod29);
  var item178$new = item178.get("new");
  var mod32 = new Cobre.Module({
    "0": tp1,
  });
  var cns56 = Cobre.Lazy(function () { return string("STR")});
  var cns57 = Cobre.Lazy(function () { return string("simpleexp")});
  var cns58 = Cobre.Lazy(function () { return string("(")});
  var cns59 = Cobre.Lazy(function () { return string("explist")});
  var cns60 = Cobre.Lazy(function () { return string("call")});
  var cns61 = Cobre.Lazy(function () { return string("base")});
  var cns62 = Cobre.Lazy(function () { return string("values")});
  function function$12 (reg_0, reg_1) {
    var reg_4, reg_6, reg_8, reg_10, reg_11, reg_14, reg_15, reg_42, reg_43, reg_48, reg_49, reg_59, reg_60, reg_65, reg_66, reg_74, reg_75, reg_78, reg_81, reg_82, reg_97, reg_98, reg_101, reg_102;
    var goto_68=false, goto_88=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = newTable();
    reg_8 = get(reg_4, cns10());
    reg_10 = get(reg_4, cns12());
    reg_11 = nil();
    reg_14 = get(reg_1[0], cns21());
    reg_15 = newStack();
    push_Stack(reg_15, cns11());
    if (tobool(first_Stack(call(reg_14, reg_15)))) {
      if (tobool(get(reg_1[0], cns7()))) {
        reg_8 = get(get(reg_1[0], cns7()), cns10());
        reg_10 = get(get(reg_1[0], cns7()), cns12());
      }
      reg_11 = first_Stack(call(get(reg_1[0], cns34()), newStack()));
    }
    reg_42 = get(reg_1[0], cns19());
    reg_43 = newStack();
    push_Stack(reg_43, cns56());
    goto_68 = !tobool(first_Stack(call(reg_42, reg_43)));
    if (!goto_68) {
      reg_48 = newTable();
      reg_49 = cns16();
      table_append(reg_48, reg_49, call(get(get(reg_1[0], cns4()), cns57()), newStack()));
      reg_6 = reg_48;
    }
    if ((goto_68 || false)) {
      goto_68 = false;
      reg_59 = get(reg_1[0], cns19());
      reg_60 = newStack();
      push_Stack(reg_60, cns41());
      goto_88 = !tobool(first_Stack(call(reg_59, reg_60)));
      if (!goto_88) {
        reg_65 = newTable();
        reg_66 = cns16();
        table_append(reg_65, reg_66, call(get(reg_1[0], cns54()), newStack()));
        reg_6 = reg_65;
      }
      if ((goto_88 || false)) {
        goto_88 = false;
        reg_74 = get(reg_1[0], cns27());
        reg_75 = newStack();
        push_Stack(reg_75, cns58());
        reg_78 = first_Stack(call(reg_74, reg_75));
        reg_81 = get(reg_1[0], cns20());
        reg_82 = newStack();
        push_Stack(reg_82, cns30());
        if (tobool(first_Stack(call(reg_81, reg_82)))) {
          reg_6 = first_Stack(call(get(get(reg_1[0], cns4()), cns59()), newStack()));
        }
        reg_97 = get(reg_1[0], cns31());
        reg_98 = newStack();
        push_Stack(reg_98, cns30());
        push_Stack(reg_98, reg_78);
        reg_100 = call(reg_97, reg_98);
      }
    }
    reg_101 = newStack();
    reg_102 = newTable();
    set(reg_102, cns18(), cns60());
    set(reg_102, cns61(), reg_4);
    set(reg_102, cns62(), reg_6);
    set(reg_102, cns49(), reg_11);
    set(reg_102, cns10(), reg_8);
    set(reg_102, cns12(), reg_10);
    push_Stack(reg_101, reg_102);
    return reg_101;
  }
  var mod31 = new Cobre.Module({
    "0": function$12,
  });
  var item191 = closure.build(mod31);
  var item191$new = item191.get("new");
  var cns63 = Cobre.Lazy(function () { return string("funcargs")});
  var cns64 = Cobre.Lazy(function () { return string("suffixedexp")});
  var mod34 = new Cobre.Module({
    "0": tp1,
  });
  var cns65 = Cobre.Lazy(function () { return string("syntax error")});
  var cns66 = Cobre.Lazy(function () { return string(".")});
  var cns67 = Cobre.Lazy(function () { return string("fieldsel")});
  var cns68 = Cobre.Lazy(function () { return string("index")});
  function Parser_suffixedexp (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_9, reg_10, reg_17, reg_18, reg_21, reg_32, reg_33, reg_39, reg_40, reg_55, reg_56, reg_57, reg_65, reg_66, reg_73, reg_74, reg_80, reg_81, reg_91, reg_99, reg_102, reg_103, reg_106, reg_107, reg_117, reg_118, reg_128, reg_129, reg_133, reg_134;
    var goto_43=false, goto_63=false, goto_98=false, goto_145=false, goto_172=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = nil();
    reg_6 = lua$false();
    reg_9 = get(reg_1[0], cns19());
    reg_10 = newStack();
    push_Stack(reg_10, cns58());
    goto_43 = !tobool(first_Stack(call(reg_9, reg_10)));
    if (!goto_43) {
      reg_17 = get(reg_1[0], cns27());
      reg_18 = newStack();
      push_Stack(reg_18, cns58());
      reg_21 = first_Stack(call(reg_17, reg_18));
      reg_5 = first_Stack(call(get(get(reg_1[0], cns4()), cns44()), newStack()));
      reg_32 = get(reg_1[0], cns31());
      reg_33 = newStack();
      push_Stack(reg_33, cns30());
      push_Stack(reg_33, reg_21);
      reg_35 = call(reg_32, reg_33);
      reg_6 = lua$true();
    }
    if ((goto_43 || false)) {
      goto_43 = false;
      reg_39 = get(reg_1[0], cns19());
      reg_40 = newStack();
      push_Stack(reg_40, cns32());
      goto_63 = !tobool(first_Stack(call(reg_39, reg_40)));
      if (!goto_63) {
        reg_5 = first_Stack(call(get(get(reg_1[0], cns4()), cns38()), newStack()));
      }
      if ((goto_63 || false)) {
        goto_63 = false;
        reg_55 = get(reg_1[0], cns14());
        reg_56 = newStack();
        reg_57 = reg_4;
        if (!tobool(reg_57)) {
          reg_57 = cns65();
        }
        push_Stack(reg_56, reg_57);
        reg_60 = call(reg_55, reg_56);
      }
    }
    loop_1: while (tobool(lua$true())) {
      reg_65 = get(reg_1[0], cns19());
      reg_66 = newStack();
      push_Stack(reg_66, cns66());
      goto_98 = !tobool(first_Stack(call(reg_65, reg_66)));
      if (!goto_98) {
        reg_73 = get(reg_1[0], cns67());
        reg_74 = newStack();
        push_Stack(reg_74, reg_5);
        reg_5 = first_Stack(call(reg_73, reg_74));
        reg_6 = lua$false();
      }
      if ((goto_98 || false)) {
        goto_98 = false;
        reg_80 = get(reg_1[0], cns21());
        reg_81 = newStack();
        push_Stack(reg_81, cns43());
        goto_145 = !tobool(first_Stack(call(reg_80, reg_81)));
        if (!goto_145) {
          reg_91 = first_Stack(call(get(reg_1[0], cns37()), newStack()));
          reg_99 = first_Stack(call(get(get(reg_1[0], cns4()), cns44()), newStack()));
          reg_102 = get(reg_1[0], cns27());
          reg_103 = newStack();
          push_Stack(reg_103, cns45());
          reg_105 = call(reg_102, reg_103);
          reg_106 = newStack();
          reg_107 = newTable();
          set(reg_107, cns18(), cns68());
          set(reg_107, cns61(), reg_5);
          set(reg_107, cns49(), reg_99);
          push_Stack(reg_106, reg_107);
          reg_5 = first_Stack(call(reg_91, reg_106));
          reg_6 = lua$false();
        }
        if ((goto_145 || false)) {
          goto_145 = false;
          reg_117 = get(reg_1[0], cns19());
          reg_118 = newStack();
          push_Stack(reg_118, cns11());
          push_Stack(reg_118, cns58());
          push_Stack(reg_118, cns41());
          push_Stack(reg_118, cns56());
          goto_172 = !tobool(first_Stack(call(reg_117, reg_118)));
          if (!goto_172) {
            reg_128 = get(reg_1[0], cns63());
            reg_129 = newStack();
            push_Stack(reg_129, reg_5);
            reg_5 = first_Stack(call(reg_128, reg_129));
            reg_6 = lua$false();
          }
          if ((goto_172 || false)) {
            goto_172 = false;
            reg_133 = newStack();
            push_Stack(reg_133, reg_5);
            push_Stack(reg_133, reg_6);
            return reg_133;
          }
        }
      }
    }
    reg_134 = newStack();
    return reg_134;
  }
  var mod33 = new Cobre.Module({
    "0": Parser_suffixedexp,
  });
  var item203 = closure.build(mod33);
  var item203$new = item203.get("new");
  var mod36 = new Cobre.Module({
    "0": tp1,
  });
  var cns69 = Cobre.Lazy(function () { return string("NUM")});
  var cns70 = Cobre.Lazy(function () { return string("num")});
  var cns71 = Cobre.Lazy(function () { return string("true")});
  var cns72 = Cobre.Lazy(function () { return string("false")});
  var cns73 = Cobre.Lazy(function () { return string("nil")});
  var cns74 = Cobre.Lazy(function () { return string("const")});
  var cns75 = Cobre.Lazy(function () { return string("...")});
  var cns76 = Cobre.Lazy(function () { return string("vararg")});
  var cns77 = Cobre.Lazy(function () { return string("str")});
  var cns78 = Cobre.Lazy(function () { return string("function")});
  var cns79 = Cobre.Lazy(function () { return string("funcbody")});
  var cns80 = Cobre.Lazy(function () { return string("invalid expression")});
  function Parser_simpleexp (reg_0, reg_1) {
    var reg_9, reg_12, reg_13, reg_18, reg_19, reg_20, reg_23, reg_35, reg_36, reg_43, reg_44, reg_45, reg_48, reg_60, reg_61, reg_66, reg_67, reg_68, reg_74, reg_75, reg_80, reg_81, reg_82, reg_85, reg_97, reg_98, reg_103, reg_111, reg_112, reg_122, reg_123, reg_124, reg_129, reg_130, reg_133, reg_138, reg_139, reg_142;
    var goto_39=false, goto_74=false, goto_95=false, goto_126=false, goto_145=false, goto_176=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_9 = first_Stack(call(get(reg_1[0], cns37()), newStack()));
    reg_12 = get(reg_1[0], cns19());
    reg_13 = newStack();
    push_Stack(reg_13, cns69());
    goto_39 = !tobool(first_Stack(call(reg_12, reg_13)));
    if (!goto_39) {
      reg_18 = newStack();
      reg_19 = newStack();
      reg_20 = newTable();
      set(reg_20, cns18(), cns70());
      reg_23 = cns33();
      set(reg_20, reg_23, get(first_Stack(call(get(reg_1[0], cns6()), newStack())), cns33()));
      push_Stack(reg_19, reg_20);
      append_Stack(reg_18, call(reg_9, reg_19));
      return reg_18;
    }
    if ((goto_39 || false)) {
      goto_39 = false;
      reg_35 = get(reg_1[0], cns19());
      reg_36 = newStack();
      push_Stack(reg_36, cns71());
      push_Stack(reg_36, cns72());
      push_Stack(reg_36, cns73());
      goto_74 = !tobool(first_Stack(call(reg_35, reg_36)));
      if (!goto_74) {
        reg_43 = newStack();
        reg_44 = newStack();
        reg_45 = newTable();
        set(reg_45, cns18(), cns74());
        reg_48 = cns33();
        set(reg_45, reg_48, get(first_Stack(call(get(reg_1[0], cns6()), newStack())), cns18()));
        push_Stack(reg_44, reg_45);
        append_Stack(reg_43, call(reg_9, reg_44));
        return reg_43;
      }
      if ((goto_74 || false)) {
        goto_74 = false;
        reg_60 = get(reg_1[0], cns21());
        reg_61 = newStack();
        push_Stack(reg_61, cns75());
        goto_95 = !tobool(first_Stack(call(reg_60, reg_61)));
        if (!goto_95) {
          reg_66 = newStack();
          reg_67 = newStack();
          reg_68 = newTable();
          set(reg_68, cns18(), cns76());
          push_Stack(reg_67, reg_68);
          append_Stack(reg_66, call(reg_9, reg_67));
          return reg_66;
        }
        if ((goto_95 || false)) {
          goto_95 = false;
          reg_74 = get(reg_1[0], cns19());
          reg_75 = newStack();
          push_Stack(reg_75, cns56());
          goto_126 = !tobool(first_Stack(call(reg_74, reg_75)));
          if (!goto_126) {
            reg_80 = newStack();
            reg_81 = newStack();
            reg_82 = newTable();
            set(reg_82, cns18(), cns77());
            reg_85 = cns33();
            set(reg_82, reg_85, get(first_Stack(call(get(reg_1[0], cns6()), newStack())), cns33()));
            push_Stack(reg_81, reg_82);
            append_Stack(reg_80, call(reg_9, reg_81));
            return reg_80;
          }
          if ((goto_126 || false)) {
            goto_126 = false;
            reg_97 = get(reg_1[0], cns19());
            reg_98 = newStack();
            push_Stack(reg_98, cns41());
            goto_145 = !tobool(first_Stack(call(reg_97, reg_98)));
            if (!goto_145) {
              reg_103 = newStack();
              append_Stack(reg_103, call(get(reg_1[0], cns54()), newStack()));
              return reg_103;
            }
            if ((goto_145 || false)) {
              goto_145 = false;
              reg_111 = get(reg_1[0], cns19());
              reg_112 = newStack();
              push_Stack(reg_112, cns78());
              goto_176 = !tobool(first_Stack(call(reg_111, reg_112)));
              if (!goto_176) {
                reg_122 = first_Stack(call(get(reg_1[0], cns6()), newStack()));
                reg_123 = newStack();
                reg_124 = newStack();
                reg_129 = get(get(reg_1[0], cns4()), cns79());
                reg_130 = newStack();
                push_Stack(reg_130, reg_122);
                append_Stack(reg_124, call(reg_129, reg_130));
                append_Stack(reg_123, call(reg_9, reg_124));
                return reg_123;
              }
              if ((goto_176 || false)) {
                goto_176 = false;
                reg_133 = newStack();
                reg_138 = get(get(reg_1[0], cns4()), cns64());
                reg_139 = newStack();
                push_Stack(reg_139, cns80());
                append_Stack(reg_133, call(reg_138, reg_139));
                return reg_133;
              }
            }
          }
        }
      }
    }
    reg_142 = newStack();
    return reg_142;
  }
  var mod35 = new Cobre.Module({
    "0": Parser_simpleexp,
  });
  var item221 = closure.build(mod35);
  var item221$new = item221.get("new");
  var cns81 = Cobre.Lazy(function () { return string("+")});
  var cns82 = Cobre.Lazy(function () { return lua$int(10)});
  var cns83 = Cobre.Lazy(function () { return lua$int(2)});
  var cns84 = Cobre.Lazy(function () { return string("-")});
  var cns85 = Cobre.Lazy(function () { return string("*")});
  var cns86 = Cobre.Lazy(function () { return lua$int(11)});
  var cns87 = Cobre.Lazy(function () { return string("%")});
  var cns88 = Cobre.Lazy(function () { return string("/")});
  var cns89 = Cobre.Lazy(function () { return string("//")});
  var cns90 = Cobre.Lazy(function () { return string("^")});
  var cns91 = Cobre.Lazy(function () { return lua$int(14)});
  var cns92 = Cobre.Lazy(function () { return lua$int(13)});
  var cns93 = Cobre.Lazy(function () { return string("&")});
  var cns94 = Cobre.Lazy(function () { return lua$int(6)});
  var cns95 = Cobre.Lazy(function () { return string("|")});
  var cns96 = Cobre.Lazy(function () { return lua$int(4)});
  var cns97 = Cobre.Lazy(function () { return string("~")});
  var cns98 = Cobre.Lazy(function () { return lua$int(5)});
  var cns99 = Cobre.Lazy(function () { return string("<<")});
  var cns100 = Cobre.Lazy(function () { return lua$int(7)});
  var cns101 = Cobre.Lazy(function () { return string(">>")});
  var cns102 = Cobre.Lazy(function () { return string("..")});
  var cns103 = Cobre.Lazy(function () { return lua$int(9)});
  var cns104 = Cobre.Lazy(function () { return lua$int(8)});
  var cns105 = Cobre.Lazy(function () { return string("<")});
  var cns106 = Cobre.Lazy(function () { return lua$int(3)});
  var cns107 = Cobre.Lazy(function () { return string(">")});
  var cns108 = Cobre.Lazy(function () { return string("==")});
  var cns109 = Cobre.Lazy(function () { return string("~=")});
  var cns110 = Cobre.Lazy(function () { return string("<=")});
  var cns111 = Cobre.Lazy(function () { return string(">=")});
  var cns112 = Cobre.Lazy(function () { return string("and")});
  var cns113 = Cobre.Lazy(function () { return string("or")});
  var cns114 = Cobre.Lazy(function () { return string("priority")});
  var cns115 = Cobre.Lazy(function () { return lua$int(12)});
  var cns116 = Cobre.Lazy(function () { return string("unary_priority")});
  var mod38 = new Cobre.Module({
    "0": tp1,
  });
  var cns117 = Cobre.Lazy(function () { return string("not")});
  var cns118 = Cobre.Lazy(function () { return string("#")});
  var cns119 = Cobre.Lazy(function () { return string("unop")});
  var cns120 = Cobre.Lazy(function () { return string("op")});
  var gt = lua.get("gt");
  var cns121 = Cobre.Lazy(function () { return string("binop")});
  var cns122 = Cobre.Lazy(function () { return string("left")});
  var cns123 = Cobre.Lazy(function () { return string("right")});
  function Parser_expr (reg_0, reg_1) {
    var reg_4, reg_5, reg_8, reg_11, reg_12, reg_25, reg_26, reg_27, reg_30, reg_39, reg_44, reg_45, reg_63, reg_67, reg_74, reg_85, reg_93, reg_98, reg_99, reg_103, reg_104, reg_105, reg_115, reg_119, reg_126;
    var goto_66=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = reg_4;
    if (!tobool(reg_5)) {
      reg_5 = cns36();
    }
    reg_4 = reg_5;
    reg_8 = nil();
    reg_11 = get(reg_1[0], cns19());
    reg_12 = newStack();
    push_Stack(reg_12, cns117());
    push_Stack(reg_12, cns84());
    push_Stack(reg_12, cns97());
    push_Stack(reg_12, cns118());
    goto_66 = !tobool(first_Stack(call(reg_11, reg_12)));
    if (!goto_66) {
      reg_25 = first_Stack(call(get(reg_1[0], cns37()), newStack()));
      reg_26 = newStack();
      reg_27 = newTable();
      set(reg_27, cns18(), cns119());
      reg_30 = cns120();
      set(reg_27, reg_30, get(first_Stack(call(get(reg_1[0], cns6()), newStack())), cns18()));
      reg_39 = cns33();
      reg_44 = get(get(reg_1[0], cns4()), cns44());
      reg_45 = newStack();
      push_Stack(reg_45, get(reg_1[0], cns116()));
      set(reg_27, reg_39, first_Stack(call(reg_44, reg_45)));
      push_Stack(reg_26, reg_27);
      reg_8 = first_Stack(call(reg_25, reg_26));
    }
    if ((goto_66 || false)) {
      goto_66 = false;
      reg_8 = first_Stack(call(get(get(reg_1[0], cns4()), cns57()), newStack()));
    }
    reg_63 = get(reg_1[0], cns7());
    if (tobool(reg_63)) {
      reg_67 = get(reg_1[0], cns114());
      reg_63 = get(reg_67, get(get(reg_1[0], cns7()), cns18()));
    }
    loop_1: while (true) {
      reg_74 = reg_63;
      if (tobool(reg_74)) {
        reg_74 = gt(get(reg_63, cns16()), reg_4);
      }
      if (!tobool(reg_74)) break loop_1;
      reg_85 = first_Stack(call(get(reg_1[0], cns37()), newStack()));
      reg_93 = get(first_Stack(call(get(reg_1[0], cns6()), newStack())), cns18());
      reg_98 = get(get(reg_1[0], cns4()), cns44());
      reg_99 = newStack();
      push_Stack(reg_99, get(reg_63, cns83()));
      reg_103 = first_Stack(call(reg_98, reg_99));
      reg_104 = newStack();
      reg_105 = newTable();
      set(reg_105, cns18(), cns121());
      set(reg_105, cns120(), reg_93);
      set(reg_105, cns122(), reg_8);
      set(reg_105, cns123(), reg_103);
      push_Stack(reg_104, reg_105);
      reg_8 = first_Stack(call(reg_85, reg_104));
      reg_115 = get(reg_1[0], cns7());
      if (tobool(reg_115)) {
        reg_119 = get(reg_1[0], cns114());
        reg_115 = get(reg_119, get(get(reg_1[0], cns7()), cns18()));
      }
      reg_63 = reg_115;
    }
    reg_126 = newStack();
    push_Stack(reg_126, reg_8);
    return reg_126;
  }
  var mod37 = new Cobre.Module({
    "0": Parser_expr,
  });
  var item271 = closure.build(mod37);
  var item271$new = item271.get("new");
  var mod40 = new Cobre.Module({
    "0": tp1,
  });
  function Parser_explist (reg_0, reg_1) {
    var reg_4, reg_12, reg_17, reg_18, reg_22, reg_23, reg_29;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = newTable();
    loop_1: while (true) {
      reg_12 = first_Stack(call(get(get(reg_1[0], cns4()), cns44()), newStack()));
      reg_17 = get(get(reg_1[0], cns22()), cns47());
      reg_18 = newStack();
      push_Stack(reg_18, reg_4);
      push_Stack(reg_18, reg_12);
      reg_19 = call(reg_17, reg_18);
      reg_22 = get(reg_1[0], cns21());
      reg_23 = newStack();
      push_Stack(reg_23, cns52());
      if (tobool(not(first_Stack(call(reg_22, reg_23))))) break loop_1;
    }
    reg_29 = newStack();
    push_Stack(reg_29, reg_4);
    return reg_29;
  }
  var mod39 = new Cobre.Module({
    "0": Parser_explist,
  });
  var item277 = closure.build(mod39);
  var item277$new = item277.get("new");
  var mod42 = new Cobre.Module({
    "0": tp1,
  });
  var cns124 = Cobre.Lazy(function () { return string("statlist")});
  var cns125 = Cobre.Lazy(function () { return string("end")});
  var cns126 = Cobre.Lazy(function () { return string("names")});
  var cns127 = Cobre.Lazy(function () { return string("body")});
  function Parser_funcbody (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_9, reg_10, reg_15, reg_16, reg_24, reg_25, reg_34, reg_35, reg_44, reg_45, reg_53, reg_54, reg_60, reg_61, reg_69, reg_70, reg_80, reg_83, reg_84, reg_87, reg_88;
    var goto_48=false, goto_62=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = lua$false();
    reg_6 = newTable();
    reg_9 = get(reg_1[0], cns27());
    reg_10 = newStack();
    push_Stack(reg_10, cns58());
    reg_12 = call(reg_9, reg_10);
    reg_15 = get(reg_1[0], cns19());
    reg_16 = newStack();
    push_Stack(reg_16, cns30());
    if (tobool(not(first_Stack(call(reg_15, reg_16))))) {
      loop_1: while (true) {
        reg_24 = get(reg_1[0], cns19());
        reg_25 = newStack();
        push_Stack(reg_25, cns32());
        goto_48 = !tobool(first_Stack(call(reg_24, reg_25)));
        if (!goto_48) {
          reg_34 = get(get(reg_1[0], cns22()), cns47());
          reg_35 = newStack();
          push_Stack(reg_35, reg_6);
          append_Stack(reg_35, call(get(reg_1[0], cns34()), newStack()));
          reg_41 = call(reg_34, reg_35);
        }
        if ((goto_48 || false)) {
          goto_48 = false;
          reg_44 = get(reg_1[0], cns21());
          reg_45 = newStack();
          push_Stack(reg_45, cns75());
          goto_62 = !tobool(first_Stack(call(reg_44, reg_45)));
          if (!goto_62) {
            reg_5 = lua$true();
            if (true) break loop_1;
          }
          if ((goto_62 || false)) {
            goto_62 = false;
            reg_53 = get(reg_1[0], cns27());
            reg_54 = newStack();
            push_Stack(reg_54, cns32());
            push_Stack(reg_54, cns75());
            reg_57 = call(reg_53, reg_54);
          }
        }
        reg_60 = get(reg_1[0], cns21());
        reg_61 = newStack();
        push_Stack(reg_61, cns52());
        if (tobool(not(first_Stack(call(reg_60, reg_61))))) break loop_1;
      }
    }
    reg_69 = get(reg_1[0], cns27());
    reg_70 = newStack();
    push_Stack(reg_70, cns30());
    reg_72 = call(reg_69, reg_70);
    reg_80 = first_Stack(call(get(get(reg_1[0], cns4()), cns124()), newStack()));
    reg_83 = get(reg_1[0], cns31());
    reg_84 = newStack();
    push_Stack(reg_84, cns125());
    push_Stack(reg_84, reg_4);
    reg_86 = call(reg_83, reg_84);
    reg_87 = newStack();
    reg_88 = newTable();
    set(reg_88, cns18(), cns78());
    set(reg_88, cns76(), reg_5);
    set(reg_88, cns126(), reg_6);
    set(reg_88, cns127(), reg_80);
    push_Stack(reg_87, reg_88);
    return reg_87;
  }
  var mod41 = new Cobre.Module({
    "0": Parser_funcbody,
  });
  var item287 = closure.build(mod41);
  var item287$new = item287.get("new");
  var mod44 = new Cobre.Module({
    "0": tp1,
  });
  var cns128 = Cobre.Lazy(function () { return string("field")});
  function function$13 (reg_0, reg_1) {
    var reg_4, reg_9, reg_10, reg_15, reg_16, reg_24, reg_30, reg_31, reg_32, reg_33;
    var goto_14=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    goto_14 = !tobool(next_Stack(reg_0));
    if (!goto_14) {
      reg_9 = get(reg_1[0], cns27());
      reg_10 = newStack();
      push_Stack(reg_10, cns11());
      reg_12 = call(reg_9, reg_10);
    }
    if ((goto_14 || false)) {
      goto_14 = false;
      reg_15 = get(reg_1[0], cns27());
      reg_16 = newStack();
      push_Stack(reg_16, cns66());
      reg_18 = call(reg_15, reg_16);
    }
    reg_24 = first_Stack(call(get(reg_1[0], cns37()), newStack()));
    reg_30 = first_Stack(call(get(reg_1[0], cns34()), newStack()));
    reg_31 = newStack();
    reg_32 = newStack();
    reg_33 = newTable();
    set(reg_33, cns18(), cns128());
    set(reg_33, cns61(), reg_4);
    set(reg_33, cns49(), reg_30);
    push_Stack(reg_32, reg_33);
    append_Stack(reg_31, call(reg_24, reg_32));
    return reg_31;
  }
  var mod43 = new Cobre.Module({
    "0": function$13,
  });
  var item294 = closure.build(mod43);
  var item294$new = item294.get("new");
  var cns129 = Cobre.Lazy(function () { return string("exprstat")});
  var mod46 = new Cobre.Module({
    "0": tp1,
  });
  var cns130 = Cobre.Lazy(function () { return string("invalid statement")});
  var cns131 = Cobre.Lazy(function () { return string("assignment to a parenthesized expression")});
  var cns132 = Cobre.Lazy(function () { return string("pairs")});
  var ne = lua.get("ne");
  var cns133 = Cobre.Lazy(function () { return string("assignment to a non lvalue expression")});
  var cns134 = Cobre.Lazy(function () { return string("assignment")});
  var cns135 = Cobre.Lazy(function () { return string("lhs")});
  function Parser_exprstat (reg_0, reg_1) {
    var reg_9, reg_14, reg_15, reg_17, reg_18, reg_19, reg_20, reg_27, reg_28, reg_32, reg_33, reg_43, reg_44, reg_46, reg_55, reg_56, reg_60, reg_61, reg_67, reg_68, reg_73, reg_74, reg_75, reg_76, reg_77, reg_78, reg_79, reg_80, reg_82, reg_89, reg_103, reg_104, reg_114, reg_115, reg_116, reg_117, reg_123;
    var goto_33=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_9 = first_Stack(call(get(reg_1[0], cns37()), newStack()));
    reg_14 = get(get(reg_1[0], cns4()), cns64());
    reg_15 = newStack();
    push_Stack(reg_15, cns130());
    reg_17 = call(reg_14, reg_15);
    reg_18 = next_Stack(reg_17);
    reg_19 = next_Stack(reg_17);
    reg_20 = not(reg_19);
    if (tobool(reg_20)) {
      reg_20 = eq(get(reg_18, cns18()), cns60());
    }
    goto_33 = !tobool(reg_20);
    if (!goto_33) {
      reg_27 = newStack();
      push_Stack(reg_27, reg_18);
      return reg_27;
    }
    if ((goto_33 || false)) {
      goto_33 = false;
      reg_28 = newTable();
      set(reg_28, cns16(), reg_18);
      loop_2: while (true) {
        reg_32 = get(reg_1[0], cns21());
        reg_33 = newStack();
        push_Stack(reg_33, cns52());
        if (!tobool(first_Stack(call(reg_32, reg_33)))) break loop_2;
        reg_38 = nil();
        reg_43 = get(get(reg_1[0], cns4()), cns64());
        reg_44 = newStack();
        push_Stack(reg_44, cns130());
        reg_46 = call(reg_43, reg_44);
        reg_18 = next_Stack(reg_46);
        if (tobool(next_Stack(reg_46))) {
          reg_19 = lua$true();
        }
        reg_55 = get(get(reg_1[0], cns22()), cns47());
        reg_56 = newStack();
        push_Stack(reg_56, reg_28);
        push_Stack(reg_56, reg_18);
        reg_57 = call(reg_55, reg_56);
      }
      reg_60 = get(reg_1[0], cns27());
      reg_61 = newStack();
      push_Stack(reg_61, cns46());
      reg_63 = call(reg_60, reg_61);
      if (tobool(reg_19)) {
        reg_67 = get(reg_1[0], cns14());
        reg_68 = newStack();
        push_Stack(reg_68, cns131());
        reg_70 = call(reg_67, reg_68);
      }
      reg_73 = get(reg_1[0], cns132());
      reg_74 = newStack();
      push_Stack(reg_74, reg_28);
      reg_75 = call(reg_73, reg_74);
      reg_76 = next_Stack(reg_75);
      reg_77 = next_Stack(reg_75);
      reg_78 = next_Stack(reg_75);
      loop_1: while (true) {
        reg_79 = newStack();
        push_Stack(reg_79, reg_77);
        push_Stack(reg_79, reg_78);
        reg_80 = call(reg_76, reg_79);
        reg_78 = next_Stack(reg_80);
        reg_82 = next_Stack(reg_80);
        if (tobool(eq(reg_78, nil()))) break loop_1;
        reg_89 = ne(get(reg_82, cns18()), cns39());
        if (tobool(reg_89)) {
          reg_89 = ne(get(reg_82, cns18()), cns128());
        }
        if (tobool(reg_89)) {
          reg_89 = ne(get(reg_82, cns18()), cns68());
        }
        if (tobool(reg_89)) {
          reg_103 = get(reg_1[0], cns14());
          reg_104 = newStack();
          push_Stack(reg_104, cns133());
          reg_106 = call(reg_103, reg_104);
        }
      }
      reg_114 = first_Stack(call(get(get(reg_1[0], cns4()), cns59()), newStack()));
      reg_115 = newStack();
      reg_116 = newStack();
      reg_117 = newTable();
      set(reg_117, cns18(), cns134());
      set(reg_117, cns135(), reg_28);
      set(reg_117, cns62(), reg_114);
      push_Stack(reg_116, reg_117);
      append_Stack(reg_115, call(reg_9, reg_116));
      return reg_115;
    }
    reg_123 = newStack();
    return reg_123;
  }
  var mod45 = new Cobre.Module({
    "0": Parser_exprstat,
  });
  var item308 = closure.build(mod45);
  var item308$new = item308.get("new");
  var cns136 = Cobre.Lazy(function () { return string("forstat")});
  var mod48 = new Cobre.Module({
    "0": tp1,
  });
  var cns137 = Cobre.Lazy(function () { return string("for")});
  var cns138 = Cobre.Lazy(function () { return string("do")});
  var cns139 = Cobre.Lazy(function () { return string("numfor")});
  var cns140 = Cobre.Lazy(function () { return string("init")});
  var cns141 = Cobre.Lazy(function () { return string("limit")});
  var cns142 = Cobre.Lazy(function () { return string("step")});
  var cns143 = Cobre.Lazy(function () { return string("in")});
  var cns144 = Cobre.Lazy(function () { return string("genfor")});
  function Parser_forstat (reg_0, reg_1) {
    var reg_6, reg_7, reg_10, reg_13, reg_14, reg_17, reg_20, reg_23, reg_24, reg_30, reg_38, reg_41, reg_42, reg_52, reg_53, reg_56, reg_57, reg_72, reg_73, reg_83, reg_86, reg_87, reg_90, reg_91, reg_101, reg_102, reg_108, reg_109, reg_114, reg_115, reg_122, reg_123, reg_129, reg_134, reg_135, reg_141, reg_142, reg_152, reg_155, reg_156, reg_166, reg_169, reg_170, reg_173, reg_174, reg_182, reg_183, reg_188;
    var goto_121=false, goto_227=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_6 = get(reg_1[0], cns27());
    reg_7 = newStack();
    push_Stack(reg_7, cns137());
    reg_10 = first_Stack(call(reg_6, reg_7));
    reg_13 = get(reg_1[0], cns27());
    reg_14 = newStack();
    push_Stack(reg_14, cns32());
    reg_17 = first_Stack(call(reg_13, reg_14));
    if (tobool(not(reg_17))) {
      reg_20 = newStack();
      return reg_20;
    }
    reg_23 = get(reg_1[0], cns21());
    reg_24 = newStack();
    push_Stack(reg_24, cns46());
    goto_121 = !tobool(first_Stack(call(reg_23, reg_24)));
    if (!goto_121) {
      reg_30 = get(reg_17, cns33());
      reg_38 = first_Stack(call(get(get(reg_1[0], cns4()), cns44()), newStack()));
      reg_41 = get(reg_1[0], cns27());
      reg_42 = newStack();
      push_Stack(reg_42, cns52());
      reg_44 = call(reg_41, reg_42);
      reg_52 = first_Stack(call(get(get(reg_1[0], cns4()), cns44()), newStack()));
      reg_53 = nil();
      reg_56 = get(reg_1[0], cns21());
      reg_57 = newStack();
      push_Stack(reg_57, cns52());
      if (tobool(first_Stack(call(reg_56, reg_57)))) {
        reg_53 = first_Stack(call(get(get(reg_1[0], cns4()), cns44()), newStack()));
      }
      reg_72 = get(reg_1[0], cns27());
      reg_73 = newStack();
      push_Stack(reg_73, cns138());
      reg_75 = call(reg_72, reg_73);
      reg_83 = first_Stack(call(get(get(reg_1[0], cns4()), cns124()), newStack()));
      reg_86 = get(reg_1[0], cns31());
      reg_87 = newStack();
      push_Stack(reg_87, cns125());
      push_Stack(reg_87, reg_10);
      reg_89 = call(reg_86, reg_87);
      reg_90 = newStack();
      reg_91 = newTable();
      set(reg_91, cns18(), cns139());
      set(reg_91, cns40(), reg_30);
      set(reg_91, cns127(), reg_83);
      set(reg_91, cns140(), reg_38);
      set(reg_91, cns141(), reg_52);
      set(reg_91, cns142(), reg_53);
      push_Stack(reg_90, reg_91);
      return reg_90;
    }
    if ((goto_121 || false)) {
      goto_121 = false;
      reg_101 = get(reg_1[0], cns19());
      reg_102 = newStack();
      push_Stack(reg_102, cns52());
      push_Stack(reg_102, cns143());
      goto_227 = !tobool(first_Stack(call(reg_101, reg_102)));
      if (!goto_227) {
        reg_108 = newTable();
        reg_109 = cns16();
        set(reg_108, reg_109, get(reg_17, cns33()));
        loop_1: while (true) {
          reg_114 = get(reg_1[0], cns21());
          reg_115 = newStack();
          push_Stack(reg_115, cns52());
          if (!tobool(first_Stack(call(reg_114, reg_115)))) break loop_1;
          reg_122 = get(reg_1[0], cns27());
          reg_123 = newStack();
          push_Stack(reg_123, cns32());
          reg_17 = first_Stack(call(reg_122, reg_123));
          if (tobool(not(reg_17))) {
            reg_129 = newStack();
            return reg_129;
          }
          reg_134 = get(get(reg_1[0], cns22()), cns47());
          reg_135 = newStack();
          push_Stack(reg_135, reg_108);
          push_Stack(reg_135, get(reg_17, cns33()));
          reg_138 = call(reg_134, reg_135);
        }
        reg_141 = get(reg_1[0], cns27());
        reg_142 = newStack();
        push_Stack(reg_142, cns143());
        reg_144 = call(reg_141, reg_142);
        reg_152 = first_Stack(call(get(get(reg_1[0], cns4()), cns59()), newStack()));
        reg_155 = get(reg_1[0], cns27());
        reg_156 = newStack();
        push_Stack(reg_156, cns138());
        reg_158 = call(reg_155, reg_156);
        reg_166 = first_Stack(call(get(get(reg_1[0], cns4()), cns124()), newStack()));
        reg_169 = get(reg_1[0], cns31());
        reg_170 = newStack();
        push_Stack(reg_170, cns125());
        push_Stack(reg_170, reg_10);
        reg_172 = call(reg_169, reg_170);
        reg_173 = newStack();
        reg_174 = newTable();
        set(reg_174, cns18(), cns144());
        set(reg_174, cns126(), reg_108);
        set(reg_174, cns62(), reg_152);
        set(reg_174, cns127(), reg_166);
        push_Stack(reg_173, reg_174);
        return reg_173;
      }
      if ((goto_227 || false)) {
        goto_227 = false;
        reg_182 = get(reg_1[0], cns27());
        reg_183 = newStack();
        push_Stack(reg_183, cns46());
        push_Stack(reg_183, cns52());
        push_Stack(reg_183, cns143());
        reg_187 = call(reg_182, reg_183);
      }
    }
    reg_188 = newStack();
    return reg_188;
  }
  var mod47 = new Cobre.Module({
    "0": Parser_forstat,
  });
  var item323 = closure.build(mod47);
  var item323$new = item323.get("new");
  var cns145 = Cobre.Lazy(function () { return string("ifstat")});
  var mod50 = new Cobre.Module({
    "0": tp1,
  });
  var cns146 = Cobre.Lazy(function () { return string("if")});
  var cns147 = Cobre.Lazy(function () { return string("then")});
  var cns148 = Cobre.Lazy(function () { return string("clause")});
  var cns149 = Cobre.Lazy(function () { return string("cond")});
  var cns150 = Cobre.Lazy(function () { return string("elseif")});
  var cns151 = Cobre.Lazy(function () { return string("else")});
  var cns152 = Cobre.Lazy(function () { return string("clauses")});
  var cns153 = Cobre.Lazy(function () { return string("els")});
  function Parser_ifstat (reg_0, reg_1) {
    var reg_6, reg_7, reg_10, reg_11, reg_19, reg_22, reg_23, reg_33, reg_38, reg_39, reg_40, reg_48, reg_49, reg_64, reg_65, reg_80, reg_81, reg_82, reg_88, reg_91, reg_92, reg_107, reg_108, reg_111, reg_112;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_6 = get(reg_1[0], cns27());
    reg_7 = newStack();
    push_Stack(reg_7, cns146());
    reg_10 = first_Stack(call(reg_6, reg_7));
    reg_11 = newTable();
    reg_19 = first_Stack(call(get(get(reg_1[0], cns4()), cns44()), newStack()));
    reg_22 = get(reg_1[0], cns27());
    reg_23 = newStack();
    push_Stack(reg_23, cns147());
    reg_25 = call(reg_22, reg_23);
    reg_33 = first_Stack(call(get(get(reg_1[0], cns4()), cns124()), newStack()));
    reg_38 = get(get(reg_1[0], cns22()), cns47());
    reg_39 = newStack();
    push_Stack(reg_39, reg_11);
    reg_40 = newTable();
    set(reg_40, cns18(), cns148());
    set(reg_40, cns149(), reg_19);
    set(reg_40, cns127(), reg_33);
    push_Stack(reg_39, reg_40);
    reg_45 = call(reg_38, reg_39);
    loop_1: while (true) {
      reg_48 = get(reg_1[0], cns21());
      reg_49 = newStack();
      push_Stack(reg_49, cns150());
      if (!tobool(first_Stack(call(reg_48, reg_49)))) break loop_1;
      reg_19 = first_Stack(call(get(get(reg_1[0], cns4()), cns44()), newStack()));
      reg_64 = get(reg_1[0], cns27());
      reg_65 = newStack();
      push_Stack(reg_65, cns147());
      reg_67 = call(reg_64, reg_65);
      reg_33 = first_Stack(call(get(get(reg_1[0], cns4()), cns124()), newStack()));
      reg_80 = get(get(reg_1[0], cns22()), cns47());
      reg_81 = newStack();
      push_Stack(reg_81, reg_11);
      reg_82 = newTable();
      set(reg_82, cns18(), cns148());
      set(reg_82, cns149(), reg_19);
      set(reg_82, cns127(), reg_33);
      push_Stack(reg_81, reg_82);
      reg_87 = call(reg_80, reg_81);
    }
    reg_88 = newTable();
    reg_91 = get(reg_1[0], cns21());
    reg_92 = newStack();
    push_Stack(reg_92, cns151());
    if (tobool(first_Stack(call(reg_91, reg_92)))) {
      reg_88 = first_Stack(call(get(get(reg_1[0], cns4()), cns124()), newStack()));
    }
    reg_107 = get(reg_1[0], cns31());
    reg_108 = newStack();
    push_Stack(reg_108, cns125());
    push_Stack(reg_108, reg_10);
    reg_110 = call(reg_107, reg_108);
    reg_111 = newStack();
    reg_112 = newTable();
    set(reg_112, cns18(), cns146());
    set(reg_112, cns152(), reg_11);
    set(reg_112, cns153(), reg_88);
    push_Stack(reg_111, reg_112);
    return reg_111;
  }
  var mod49 = new Cobre.Module({
    "0": Parser_ifstat,
  });
  var item338 = closure.build(mod49);
  var item338$new = item338.get("new");
  var cns154 = Cobre.Lazy(function () { return string("statement")});
  var mod52 = new Cobre.Module({
    "0": tp1,
  });
  var cns155 = Cobre.Lazy(function () { return string("while")});
  var cns156 = Cobre.Lazy(function () { return string("repeat")});
  var cns157 = Cobre.Lazy(function () { return string("until")});
  var cns158 = Cobre.Lazy(function () { return string("funcstat")});
  var cns159 = Cobre.Lazy(function () { return string("method")});
  var cns160 = Cobre.Lazy(function () { return string("local")});
  var cns161 = Cobre.Lazy(function () { return string("localfunc")});
  var cns162 = Cobre.Lazy(function () { return string("::")});
  var cns163 = Cobre.Lazy(function () { return string("label")});
  var cns164 = Cobre.Lazy(function () { return string("return")});
  var cns165 = Cobre.Lazy(function () { return string("break")});
  var cns166 = Cobre.Lazy(function () { return string("goto")});
  function Parser_statement (reg_0, reg_1) {
    var reg_9, reg_12, reg_13, reg_18, reg_22, reg_23, reg_28, reg_29, reg_40, reg_41, reg_51, reg_59, reg_62, reg_63, reg_73, reg_76, reg_77, reg_80, reg_81, reg_82, reg_90, reg_91, reg_101, reg_109, reg_112, reg_113, reg_116, reg_117, reg_118, reg_125, reg_126, reg_131, reg_132, reg_143, reg_144, reg_154, reg_162, reg_165, reg_166, reg_176, reg_177, reg_178, reg_179, reg_187, reg_188, reg_195, reg_196, reg_199, reg_207, reg_208, reg_211, reg_212, reg_219, reg_220, reg_225, reg_226, reg_233, reg_234, reg_243, reg_244, reg_246, reg_247, reg_248, reg_249, reg_258, reg_259, reg_266, reg_267, reg_274, reg_275, reg_278, reg_284, reg_289, reg_290, reg_292, reg_293, reg_294, reg_295, reg_301, reg_306, reg_307, reg_316, reg_317, reg_323, reg_326, reg_327, reg_340, reg_341, reg_342, reg_350, reg_351, reg_361, reg_364, reg_365, reg_368, reg_369, reg_370, reg_377, reg_378, reg_383, reg_386, reg_387, reg_406, reg_407, reg_410, reg_411, reg_412, reg_419, reg_420, reg_425, reg_426, reg_427, reg_433, reg_434, reg_444, reg_445, reg_446, reg_447, reg_452, reg_460;
    var goto_23=false, goto_47=false, goto_109=false, goto_154=false, goto_178=false, goto_233=false, goto_328=false, goto_386=false, goto_448=false, goto_484=false, goto_543=false, goto_564=false, goto_593=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_9 = first_Stack(call(get(reg_1[0], cns37()), newStack()));
    reg_12 = get(reg_1[0], cns21());
    reg_13 = newStack();
    push_Stack(reg_13, cns53());
    goto_23 = !tobool(first_Stack(call(reg_12, reg_13)));
    if (!goto_23) {
      reg_18 = newStack();
      push_Stack(reg_18, nil());
      return reg_18;
    }
    if ((goto_23 || false)) {
      goto_23 = false;
      reg_22 = get(reg_1[0], cns19());
      reg_23 = newStack();
      push_Stack(reg_23, cns146());
      goto_47 = !tobool(first_Stack(call(reg_22, reg_23)));
      if (!goto_47) {
        reg_28 = newStack();
        reg_29 = newStack();
        append_Stack(reg_29, call(get(get(reg_1[0], cns4()), cns145()), newStack()));
        append_Stack(reg_28, call(reg_9, reg_29));
        return reg_28;
      }
      if ((goto_47 || false)) {
        goto_47 = false;
        reg_40 = get(reg_1[0], cns19());
        reg_41 = newStack();
        push_Stack(reg_41, cns155());
        goto_109 = !tobool(first_Stack(call(reg_40, reg_41)));
        if (!goto_109) {
          reg_51 = first_Stack(call(get(reg_1[0], cns6()), newStack()));
          reg_59 = first_Stack(call(get(get(reg_1[0], cns4()), cns44()), newStack()));
          reg_62 = get(reg_1[0], cns27());
          reg_63 = newStack();
          push_Stack(reg_63, cns138());
          reg_65 = call(reg_62, reg_63);
          reg_73 = first_Stack(call(get(get(reg_1[0], cns4()), cns124()), newStack()));
          reg_76 = get(reg_1[0], cns31());
          reg_77 = newStack();
          push_Stack(reg_77, cns125());
          push_Stack(reg_77, reg_51);
          reg_79 = call(reg_76, reg_77);
          reg_80 = newStack();
          reg_81 = newStack();
          reg_82 = newTable();
          set(reg_82, cns18(), cns155());
          set(reg_82, cns149(), reg_59);
          set(reg_82, cns127(), reg_73);
          push_Stack(reg_81, reg_82);
          append_Stack(reg_80, call(reg_9, reg_81));
          return reg_80;
        }
        if ((goto_109 || false)) {
          goto_109 = false;
          reg_90 = get(reg_1[0], cns19());
          reg_91 = newStack();
          push_Stack(reg_91, cns138());
          goto_154 = !tobool(first_Stack(call(reg_90, reg_91)));
          if (!goto_154) {
            reg_101 = first_Stack(call(get(reg_1[0], cns6()), newStack()));
            reg_109 = first_Stack(call(get(get(reg_1[0], cns4()), cns124()), newStack()));
            reg_112 = get(reg_1[0], cns31());
            reg_113 = newStack();
            push_Stack(reg_113, cns125());
            push_Stack(reg_113, reg_101);
            reg_115 = call(reg_112, reg_113);
            reg_116 = newStack();
            reg_117 = newStack();
            reg_118 = newTable();
            set(reg_118, cns18(), cns138());
            set(reg_118, cns127(), reg_109);
            push_Stack(reg_117, reg_118);
            append_Stack(reg_116, call(reg_9, reg_117));
            return reg_116;
          }
          if ((goto_154 || false)) {
            goto_154 = false;
            reg_125 = get(reg_1[0], cns19());
            reg_126 = newStack();
            push_Stack(reg_126, cns137());
            goto_178 = !tobool(first_Stack(call(reg_125, reg_126)));
            if (!goto_178) {
              reg_131 = newStack();
              reg_132 = newStack();
              append_Stack(reg_132, call(get(get(reg_1[0], cns4()), cns136()), newStack()));
              append_Stack(reg_131, call(reg_9, reg_132));
              return reg_131;
            }
            if ((goto_178 || false)) {
              goto_178 = false;
              reg_143 = get(reg_1[0], cns19());
              reg_144 = newStack();
              push_Stack(reg_144, cns156());
              goto_233 = !tobool(first_Stack(call(reg_143, reg_144)));
              if (!goto_233) {
                reg_154 = first_Stack(call(get(reg_1[0], cns6()), newStack()));
                reg_162 = first_Stack(call(get(get(reg_1[0], cns4()), cns124()), newStack()));
                reg_165 = get(reg_1[0], cns31());
                reg_166 = newStack();
                push_Stack(reg_166, cns157());
                push_Stack(reg_166, reg_154);
                reg_168 = call(reg_165, reg_166);
                reg_176 = first_Stack(call(get(get(reg_1[0], cns4()), cns44()), newStack()));
                reg_177 = newStack();
                reg_178 = newStack();
                reg_179 = newTable();
                set(reg_179, cns18(), cns156());
                set(reg_179, cns149(), reg_176);
                set(reg_179, cns127(), reg_162);
                push_Stack(reg_178, reg_179);
                append_Stack(reg_177, call(reg_9, reg_178));
                return reg_177;
              }
              if ((goto_233 || false)) {
                goto_233 = false;
                reg_187 = get(reg_1[0], cns19());
                reg_188 = newStack();
                push_Stack(reg_188, cns78());
                goto_328 = !tobool(first_Stack(call(reg_187, reg_188)));
                if (!goto_328) {
                  reg_195 = get(reg_1[0], cns27());
                  reg_196 = newStack();
                  push_Stack(reg_196, cns78());
                  reg_199 = first_Stack(call(reg_195, reg_196));
                  reg_207 = first_Stack(call(get(get(reg_1[0], cns4()), cns38()), newStack()));
                  reg_208 = lua$false();
                  loop_2: while (true) {
                    reg_211 = get(reg_1[0], cns19());
                    reg_212 = newStack();
                    push_Stack(reg_212, cns66());
                    if (!tobool(first_Stack(call(reg_211, reg_212)))) break loop_2;
                    reg_219 = get(reg_1[0], cns67());
                    reg_220 = newStack();
                    push_Stack(reg_220, reg_207);
                    reg_207 = first_Stack(call(reg_219, reg_220));
                  }
                  reg_225 = get(reg_1[0], cns19());
                  reg_226 = newStack();
                  push_Stack(reg_226, cns11());
                  if (tobool(first_Stack(call(reg_225, reg_226)))) {
                    reg_233 = get(reg_1[0], cns67());
                    reg_234 = newStack();
                    push_Stack(reg_234, reg_207);
                    push_Stack(reg_234, lua$true());
                    reg_207 = first_Stack(call(reg_233, reg_234));
                    reg_208 = lua$true();
                  }
                  reg_243 = get(get(reg_1[0], cns4()), cns79());
                  reg_244 = newStack();
                  push_Stack(reg_244, reg_199);
                  reg_246 = first_Stack(call(reg_243, reg_244));
                  reg_247 = newStack();
                  reg_248 = newStack();
                  reg_249 = newTable();
                  set(reg_249, cns18(), cns158());
                  set(reg_249, cns135(), reg_207);
                  set(reg_249, cns127(), reg_246);
                  set(reg_249, cns159(), reg_208);
                  push_Stack(reg_248, reg_249);
                  append_Stack(reg_247, call(reg_9, reg_248));
                  return reg_247;
                }
                if ((goto_328 || false)) {
                  goto_328 = false;
                  reg_258 = get(reg_1[0], cns21());
                  reg_259 = newStack();
                  push_Stack(reg_259, cns160());
                  goto_448 = !tobool(first_Stack(call(reg_258, reg_259)));
                  if (!goto_448) {
                    reg_266 = get(reg_1[0], cns19());
                    reg_267 = newStack();
                    push_Stack(reg_267, cns78());
                    goto_386 = !tobool(first_Stack(call(reg_266, reg_267)));
                    if (!goto_386) {
                      reg_274 = get(reg_1[0], cns27());
                      reg_275 = newStack();
                      push_Stack(reg_275, cns78());
                      reg_278 = first_Stack(call(reg_274, reg_275));
                      reg_284 = first_Stack(call(get(reg_1[0], cns34()), newStack()));
                      reg_289 = get(get(reg_1[0], cns4()), cns79());
                      reg_290 = newStack();
                      push_Stack(reg_290, reg_278);
                      reg_292 = first_Stack(call(reg_289, reg_290));
                      reg_293 = newStack();
                      reg_294 = newStack();
                      reg_295 = newTable();
                      set(reg_295, cns18(), cns161());
                      set(reg_295, cns40(), reg_284);
                      set(reg_295, cns127(), reg_292);
                      push_Stack(reg_294, reg_295);
                      append_Stack(reg_293, call(reg_9, reg_294));
                      return reg_293;
                    }
                    if ((goto_386 || false)) {
                      goto_386 = false;
                      reg_301 = newTable();
                      loop_1: while (true) {
                        reg_306 = get(get(reg_1[0], cns22()), cns47());
                        reg_307 = newStack();
                        push_Stack(reg_307, reg_301);
                        append_Stack(reg_307, call(get(reg_1[0], cns34()), newStack()));
                        reg_313 = call(reg_306, reg_307);
                        reg_316 = get(reg_1[0], cns21());
                        reg_317 = newStack();
                        push_Stack(reg_317, cns52());
                        if (tobool(not(first_Stack(call(reg_316, reg_317))))) break loop_1;
                      }
                      reg_323 = newTable();
                      reg_326 = get(reg_1[0], cns21());
                      reg_327 = newStack();
                      push_Stack(reg_327, cns46());
                      if (tobool(first_Stack(call(reg_326, reg_327)))) {
                        reg_323 = first_Stack(call(get(get(reg_1[0], cns4()), cns59()), newStack()));
                      }
                      reg_340 = newStack();
                      reg_341 = newStack();
                      reg_342 = newTable();
                      set(reg_342, cns18(), cns160());
                      set(reg_342, cns126(), reg_301);
                      set(reg_342, cns62(), reg_323);
                      push_Stack(reg_341, reg_342);
                      append_Stack(reg_340, call(reg_9, reg_341));
                      return reg_340;
                    }
                  }
                  if ((goto_448 || false)) {
                    goto_448 = false;
                    reg_350 = get(reg_1[0], cns21());
                    reg_351 = newStack();
                    push_Stack(reg_351, cns162());
                    goto_484 = !tobool(first_Stack(call(reg_350, reg_351)));
                    if (!goto_484) {
                      reg_361 = first_Stack(call(get(reg_1[0], cns34()), newStack()));
                      reg_364 = get(reg_1[0], cns27());
                      reg_365 = newStack();
                      push_Stack(reg_365, cns162());
                      reg_367 = call(reg_364, reg_365);
                      reg_368 = newStack();
                      reg_369 = newStack();
                      reg_370 = newTable();
                      set(reg_370, cns18(), cns163());
                      set(reg_370, cns40(), reg_361);
                      push_Stack(reg_369, reg_370);
                      append_Stack(reg_368, call(reg_9, reg_369));
                      return reg_368;
                    }
                    if ((goto_484 || false)) {
                      goto_484 = false;
                      reg_377 = get(reg_1[0], cns21());
                      reg_378 = newStack();
                      push_Stack(reg_378, cns164());
                      goto_543 = !tobool(first_Stack(call(reg_377, reg_378)));
                      if (!goto_543) {
                        reg_383 = newTable();
                        reg_386 = get(reg_1[0], cns20());
                        reg_387 = newStack();
                        push_Stack(reg_387, cns53());
                        push_Stack(reg_387, cns125());
                        push_Stack(reg_387, cns151());
                        push_Stack(reg_387, cns150());
                        push_Stack(reg_387, cns157());
                        if (tobool(first_Stack(call(reg_386, reg_387)))) {
                          reg_383 = first_Stack(call(get(get(reg_1[0], cns4()), cns59()), newStack()));
                        }
                        reg_406 = get(reg_1[0], cns21());
                        reg_407 = newStack();
                        push_Stack(reg_407, cns53());
                        reg_409 = call(reg_406, reg_407);
                        reg_410 = newStack();
                        reg_411 = newStack();
                        reg_412 = newTable();
                        set(reg_412, cns18(), cns164());
                        set(reg_412, cns62(), reg_383);
                        push_Stack(reg_411, reg_412);
                        append_Stack(reg_410, call(reg_9, reg_411));
                        return reg_410;
                      }
                      if ((goto_543 || false)) {
                        goto_543 = false;
                        reg_419 = get(reg_1[0], cns21());
                        reg_420 = newStack();
                        push_Stack(reg_420, cns165());
                        goto_564 = !tobool(first_Stack(call(reg_419, reg_420)));
                        if (!goto_564) {
                          reg_425 = newStack();
                          reg_426 = newStack();
                          reg_427 = newTable();
                          set(reg_427, cns18(), cns165());
                          push_Stack(reg_426, reg_427);
                          append_Stack(reg_425, call(reg_9, reg_426));
                          return reg_425;
                        }
                        if ((goto_564 || false)) {
                          goto_564 = false;
                          reg_433 = get(reg_1[0], cns21());
                          reg_434 = newStack();
                          push_Stack(reg_434, cns166());
                          goto_593 = !tobool(first_Stack(call(reg_433, reg_434)));
                          if (!goto_593) {
                            reg_444 = first_Stack(call(get(reg_1[0], cns34()), newStack()));
                            reg_445 = newStack();
                            reg_446 = newStack();
                            reg_447 = newTable();
                            set(reg_447, cns18(), cns166());
                            set(reg_447, cns40(), reg_444);
                            push_Stack(reg_446, reg_447);
                            append_Stack(reg_445, call(reg_9, reg_446));
                            return reg_445;
                          }
                          if ((goto_593 || false)) {
                            goto_593 = false;
                            reg_452 = newStack();
                            append_Stack(reg_452, call(get(get(reg_1[0], cns4()), cns129()), newStack()));
                            return reg_452;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    reg_460 = newStack();
    return reg_460;
  }
  var mod51 = new Cobre.Module({
    "0": Parser_statement,
  });
  var item357 = closure.build(mod51);
  var item357$new = item357.get("new");
  var mod54 = new Cobre.Module({
    "0": tp1,
  });
  function Parser_statlist (reg_0, reg_1) {
    var reg_4, reg_7, reg_8, reg_23, reg_29, reg_30, reg_37;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = newTable();
    loop_1: while (true) {
      reg_7 = get(reg_1[0], cns20());
      reg_8 = newStack();
      push_Stack(reg_8, cns125());
      push_Stack(reg_8, cns151());
      push_Stack(reg_8, cns150());
      push_Stack(reg_8, cns157());
      if (!tobool(first_Stack(call(reg_7, reg_8)))) break loop_1;
      reg_23 = first_Stack(call(get(get(reg_1[0], cns4()), cns154()), newStack()));
      if (tobool(reg_23)) {
        reg_29 = get(get(reg_1[0], cns22()), cns47());
        reg_30 = newStack();
        push_Stack(reg_30, reg_4);
        push_Stack(reg_30, reg_23);
        reg_31 = call(reg_29, reg_30);
        if (tobool(eq(get(reg_23, cns18()), cns164()))) {
          if (true) break loop_1;
        }
      }
    }
    reg_37 = newStack();
    push_Stack(reg_37, reg_4);
    return reg_37;
  }
  var mod53 = new Cobre.Module({
    "0": Parser_statlist,
  });
  var item363 = closure.build(mod53);
  var item363$new = item363.get("new");
  var mod56 = new Cobre.Module({
    "0": tp1,
  });
  var cns167 = Cobre.Lazy(function () { return string("end of file expected")});
  function function$14 (reg_0, reg_1) {
    var reg_11, reg_18, reg_19, reg_22;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_11 = first_Stack(call(get(get(reg_1[0], cns4()), cns124()), newStack()));
    if (tobool(get(reg_1[0], cns7()))) {
      reg_18 = get(reg_1[0], cns14());
      reg_19 = newStack();
      push_Stack(reg_19, cns167());
      reg_21 = call(reg_18, reg_19);
    }
    reg_22 = newStack();
    push_Stack(reg_22, reg_11);
    return reg_22;
  }
  var mod55 = new Cobre.Module({
    "0": function$14,
  });
  var item370 = closure.build(mod55);
  var item370$new = item370.get("new");
  var cns168 = Cobre.Lazy(function () { return string("parse_program")});
  var cns169 = Cobre.Lazy(function () { return string("parse")});
  var mod58 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
  });
  var cns170 = Cobre.Lazy(function () { return string("xpcall")});
  var tp3 = new Cobre.Record([tp1,Cobre.Any]);
  var mod60 = new Cobre.Module({
    "0": tp3,
  });
  function function$15 (reg_0, reg_1) {
    var reg_5, reg_6;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = newStack();
    push_Stack(reg_6, lua$true());
    append_Stack(reg_6, call(reg_5, newStack()));
    return reg_6;
  }
  var mod59 = new Cobre.Module({
    "0": function$15,
  });
  var item385 = closure.build(mod59);
  var item385$new = item385.get("new");
  var mod62 = new Cobre.Module({
    "0": tp3,
  });
  var cns171 = Cobre.Lazy(function () { return string("debug")});
  var cns172 = Cobre.Lazy(function () { return string("traceback")});
  var cns173 = Cobre.Lazy(function () { return string("trace")});
  function function$16 (reg_0, reg_1) {
    var reg_2, reg_5, reg_18, reg_19, reg_25, reg_26, reg_31, reg_32, reg_36;
    var goto_26=false;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    goto_26 = !tobool(eq(get(get(reg_2[0], cns4()), cns8()), nil()));
    if (!goto_26) {
      reg_18 = get(get(reg_2[0], cns171()), cns172());
      reg_19 = newStack();
      push_Stack(reg_19, reg_5);
      push_Stack(reg_19, cns83());
      reg_1[1] = first_Stack(call(reg_18, reg_19));
    }
    if ((goto_26 || false)) {
      goto_26 = false;
      reg_25 = get(reg_2[0], cns4());
      reg_26 = cns173();
      reg_31 = get(get(reg_2[0], cns171()), cns172());
      reg_32 = newStack();
      push_Stack(reg_32, reg_5);
      push_Stack(reg_32, cns96());
      set(reg_25, reg_26, first_Stack(call(reg_31, reg_32)));
    }
    reg_36 = newStack();
    return reg_36;
  }
  var mod61 = new Cobre.Module({
    "0": function$16,
  });
  var item394 = closure.build(mod61);
  var item394$new = item394.get("new");
  var cns174 = Cobre.Lazy(function () { return string("status")});
  var cns175 = Cobre.Lazy(function () { return string("prog")});
  var cns176 = Cobre.Lazy(function () { return string("print")});
  var cns177 = Cobre.Lazy(function () { return string("os")});
  var cns178 = Cobre.Lazy(function () { return string("exit")});
  var cns179 = Cobre.Lazy(function () { return string("tk")});
  function Parser_parse (reg_0, reg_1) {
    var reg_3, reg_11, reg_16, reg_17, reg_23, reg_24, reg_27, reg_34, reg_35, reg_42, reg_43, reg_50, reg_60, reg_67, reg_68, reg_73;
    var goto_68=false, goto_84=false;
    reg_3 = [reg_1, nil()];
    reg_3[1] = nil();
    if (tobool(not(get(reg_1[0], cns170())))) {
      reg_11 = lua$function(item385$new(reg_3));
      set(reg_1[0], cns170(), reg_11);
    }
    reg_16 = get(reg_1[0], cns170());
    reg_17 = newStack();
    push_Stack(reg_17, get(reg_1[0], cns168()));
    push_Stack(reg_17, lua$function(item394$new(reg_3)));
    reg_23 = call(reg_16, reg_17);
    reg_24 = next_Stack(reg_23);
    set(reg_1[0], cns174(), reg_24);
    reg_27 = next_Stack(reg_23);
    set(reg_1[0], cns175(), reg_27);
    if (tobool(reg_3[1])) {
      reg_34 = get(reg_1[0], cns176());
      reg_35 = newStack();
      push_Stack(reg_35, reg_3[1]);
      reg_37 = call(reg_34, reg_35);
      reg_42 = get(get(reg_1[0], cns177()), cns178());
      reg_43 = newStack();
      push_Stack(reg_43, cns16());
      reg_45 = call(reg_42, reg_43);
    }
    goto_68 = !tobool(get(reg_1[0], cns174()));
    if (!goto_68) {
      reg_50 = newStack();
      push_Stack(reg_50, get(reg_1[0], cns175()));
      return reg_50;
    }
    if ((goto_68 || false)) {
      goto_68 = false;
      goto_84 = !tobool(get(get(reg_1[0], cns4()), cns8()));
      if (!goto_84) {
        reg_60 = newStack();
        push_Stack(reg_60, nil());
        push_Stack(reg_60, get(reg_1[0], cns179()));
        return reg_60;
      }
      if ((goto_84 || false)) {
        goto_84 = false;
        reg_67 = get(reg_1[0], cns8());
        reg_68 = newStack();
        push_Stack(reg_68, get(reg_1[0], cns179()));
        reg_72 = call(reg_67, reg_68);
      }
    }
    reg_73 = newStack();
    return reg_73;
  }
  var mod57 = new Cobre.Module({
    "0": Parser_parse,
  });
  var item405 = closure.build(mod57);
  var item405$new = item405.get("new");
  function lua_main (reg_0) {
    var reg_2, reg_5, reg_6, reg_8, reg_14, reg_17, reg_22, reg_23, reg_27, reg_31, reg_35, reg_39, reg_43, reg_47, reg_51, reg_55, reg_59, reg_63, reg_68, reg_69, reg_73, reg_77, reg_82, reg_83, reg_88, reg_89, reg_92, reg_93, reg_94, reg_99, reg_100, reg_105, reg_106, reg_111, reg_112, reg_117, reg_118, reg_123, reg_124, reg_129, reg_130, reg_135, reg_136, reg_141, reg_142, reg_147, reg_148, reg_153, reg_154, reg_159, reg_160, reg_165, reg_166, reg_171, reg_172, reg_177, reg_178, reg_183, reg_184, reg_189, reg_190, reg_195, reg_196, reg_201, reg_202, reg_207, reg_208, reg_213, reg_214, reg_221, reg_226, reg_227, reg_232, reg_233, reg_238, reg_239, reg_243, reg_248, reg_249, reg_254, reg_255, reg_260, reg_261, reg_266, reg_267, reg_272, reg_273, reg_277, reg_282, reg_283, reg_286;
    reg_2 = [nil()];
    reg_2[0] = reg_0;
    reg_5 = get(reg_2[0], cns1());
    reg_6 = newStack();
    push_Stack(reg_6, newTable());
    reg_8 = newTable();
    set(reg_8, cns2(), reg_2[0]);
    push_Stack(reg_6, reg_8);
    reg_2[0] = first_Stack(call(reg_5, reg_6));
    reg_14 = first_Stack(lua_parser_lexer$lua_main(reg_0));
    set(reg_2[0], cns3(), reg_14);
    reg_17 = newTable();
    set(reg_2[0], cns4(), reg_17);
    reg_22 = get(reg_2[0], cns4());
    reg_23 = cns5();
    set(reg_22, reg_23, lua$function(item35$new(reg_2)));
    reg_27 = lua$function(item49$new(reg_2));
    set(reg_2[0], cns14(), reg_27);
    reg_31 = lua$function(item57$new(reg_2));
    set(reg_2[0], cns6(), reg_31);
    reg_35 = lua$function(item73$new(reg_2));
    set(reg_2[0], cns19(), reg_35);
    reg_39 = lua$function(item81$new(reg_2));
    set(reg_2[0], cns20(), reg_39);
    reg_43 = lua$function(item88$new(reg_2));
    set(reg_2[0], cns21(), reg_43);
    reg_47 = lua$function(item100$new(reg_2));
    set(reg_2[0], cns27(), reg_47);
    reg_51 = lua$function(item110$new(reg_2));
    set(reg_2[0], cns31(), reg_51);
    reg_55 = lua$function(item119$new(reg_2));
    set(reg_2[0], cns34(), reg_55);
    reg_59 = lua$function(item126$new(reg_2));
    set(reg_2[0], cns35(), reg_59);
    reg_63 = lua$function(item147$new(reg_2));
    set(reg_2[0], cns37(), reg_63);
    reg_68 = get(reg_2[0], cns4());
    reg_69 = cns38();
    set(reg_68, reg_69, lua$function(item157$new(reg_2)));
    reg_73 = lua$function(item178$new(reg_2));
    set(reg_2[0], cns54(), reg_73);
    reg_77 = lua$function(item191$new(reg_2));
    set(reg_2[0], cns63(), reg_77);
    reg_82 = get(reg_2[0], cns4());
    reg_83 = cns64();
    set(reg_82, reg_83, lua$function(item203$new(reg_2)));
    reg_88 = get(reg_2[0], cns4());
    reg_89 = cns57();
    set(reg_88, reg_89, lua$function(item221$new(reg_2)));
    reg_92 = newTable();
    reg_93 = cns81();
    reg_94 = newTable();
    set(reg_94, cns16(), cns82());
    set(reg_94, cns83(), cns82());
    set(reg_92, reg_93, reg_94);
    reg_99 = cns84();
    reg_100 = newTable();
    set(reg_100, cns16(), cns82());
    set(reg_100, cns83(), cns82());
    set(reg_92, reg_99, reg_100);
    reg_105 = cns85();
    reg_106 = newTable();
    set(reg_106, cns16(), cns86());
    set(reg_106, cns83(), cns86());
    set(reg_92, reg_105, reg_106);
    reg_111 = cns87();
    reg_112 = newTable();
    set(reg_112, cns16(), cns86());
    set(reg_112, cns83(), cns86());
    set(reg_92, reg_111, reg_112);
    reg_117 = cns88();
    reg_118 = newTable();
    set(reg_118, cns16(), cns86());
    set(reg_118, cns83(), cns86());
    set(reg_92, reg_117, reg_118);
    reg_123 = cns89();
    reg_124 = newTable();
    set(reg_124, cns16(), cns86());
    set(reg_124, cns83(), cns86());
    set(reg_92, reg_123, reg_124);
    reg_129 = cns90();
    reg_130 = newTable();
    set(reg_130, cns16(), cns91());
    set(reg_130, cns83(), cns92());
    set(reg_92, reg_129, reg_130);
    reg_135 = cns93();
    reg_136 = newTable();
    set(reg_136, cns16(), cns94());
    set(reg_136, cns83(), cns94());
    set(reg_92, reg_135, reg_136);
    reg_141 = cns95();
    reg_142 = newTable();
    set(reg_142, cns16(), cns96());
    set(reg_142, cns83(), cns96());
    set(reg_92, reg_141, reg_142);
    reg_147 = cns97();
    reg_148 = newTable();
    set(reg_148, cns16(), cns98());
    set(reg_148, cns83(), cns98());
    set(reg_92, reg_147, reg_148);
    reg_153 = cns99();
    reg_154 = newTable();
    set(reg_154, cns16(), cns100());
    set(reg_154, cns83(), cns100());
    set(reg_92, reg_153, reg_154);
    reg_159 = cns101();
    reg_160 = newTable();
    set(reg_160, cns16(), cns100());
    set(reg_160, cns83(), cns100());
    set(reg_92, reg_159, reg_160);
    reg_165 = cns102();
    reg_166 = newTable();
    set(reg_166, cns16(), cns103());
    set(reg_166, cns83(), cns104());
    set(reg_92, reg_165, reg_166);
    reg_171 = cns105();
    reg_172 = newTable();
    set(reg_172, cns16(), cns106());
    set(reg_172, cns83(), cns106());
    set(reg_92, reg_171, reg_172);
    reg_177 = cns107();
    reg_178 = newTable();
    set(reg_178, cns16(), cns106());
    set(reg_178, cns83(), cns106());
    set(reg_92, reg_177, reg_178);
    reg_183 = cns108();
    reg_184 = newTable();
    set(reg_184, cns16(), cns106());
    set(reg_184, cns83(), cns106());
    set(reg_92, reg_183, reg_184);
    reg_189 = cns109();
    reg_190 = newTable();
    set(reg_190, cns16(), cns106());
    set(reg_190, cns83(), cns106());
    set(reg_92, reg_189, reg_190);
    reg_195 = cns110();
    reg_196 = newTable();
    set(reg_196, cns16(), cns106());
    set(reg_196, cns83(), cns106());
    set(reg_92, reg_195, reg_196);
    reg_201 = cns111();
    reg_202 = newTable();
    set(reg_202, cns16(), cns106());
    set(reg_202, cns83(), cns106());
    set(reg_92, reg_201, reg_202);
    reg_207 = cns112();
    reg_208 = newTable();
    set(reg_208, cns16(), cns83());
    set(reg_208, cns83(), cns83());
    set(reg_92, reg_207, reg_208);
    reg_213 = cns113();
    reg_214 = newTable();
    set(reg_214, cns16(), cns16());
    set(reg_214, cns83(), cns16());
    set(reg_92, reg_213, reg_214);
    set(reg_2[0], cns114(), reg_92);
    reg_221 = cns115();
    set(reg_2[0], cns116(), reg_221);
    reg_226 = get(reg_2[0], cns4());
    reg_227 = cns44();
    set(reg_226, reg_227, lua$function(item271$new(reg_2)));
    reg_232 = get(reg_2[0], cns4());
    reg_233 = cns59();
    set(reg_232, reg_233, lua$function(item277$new(reg_2)));
    reg_238 = get(reg_2[0], cns4());
    reg_239 = cns79();
    set(reg_238, reg_239, lua$function(item287$new(reg_2)));
    reg_243 = lua$function(item294$new(reg_2));
    set(reg_2[0], cns67(), reg_243);
    reg_248 = get(reg_2[0], cns4());
    reg_249 = cns129();
    set(reg_248, reg_249, lua$function(item308$new(reg_2)));
    reg_254 = get(reg_2[0], cns4());
    reg_255 = cns136();
    set(reg_254, reg_255, lua$function(item323$new(reg_2)));
    reg_260 = get(reg_2[0], cns4());
    reg_261 = cns145();
    set(reg_260, reg_261, lua$function(item338$new(reg_2)));
    reg_266 = get(reg_2[0], cns4());
    reg_267 = cns154();
    set(reg_266, reg_267, lua$function(item357$new(reg_2)));
    reg_272 = get(reg_2[0], cns4());
    reg_273 = cns124();
    set(reg_272, reg_273, lua$function(item363$new(reg_2)));
    reg_277 = lua$function(item370$new(reg_2));
    set(reg_2[0], cns168(), reg_277);
    reg_282 = get(reg_2[0], cns4());
    reg_283 = cns169();
    set(reg_282, reg_283, lua$function(item405$new(reg_2)));
    reg_286 = newStack();
    push_Stack(reg_286, get(reg_2[0], cns4()));
    return reg_286;
  }
  var get_global = lua.get("get_global");
  function main () {
    reg_1 = lua_main(get_global());
    return;
  }
  var mod1 = new Cobre.Module({
    "lua_main": lua_main,
    "main": main,
  });
  return mod1;
});
Cobre.$export("culua.helpers", function () {
  var lua = Cobre.$import("lua");
  var nil = lua.get("nil");
  var mod2 = new Cobre.Module({
    "0": Cobre.Any,
  });
  var closure = lua.get("closure");
  var tp1 = new Cobre.Record([Cobre.Any]);
  var mod4 = new Cobre.Module({
    "0": tp1,
  });
  var next_Stack = lua.get("next\x1dStack");
  var tobool = lua.get("tobool");
  var lua$int = lua.get("int");
  var cns1 = Cobre.Lazy(function () { return lua$int(1)});
  var string = lua.get("string");
  var cns2 = Cobre.Lazy(function () { return string("")});
  var cns3 = Cobre.Lazy(function () { return string("type")});
  var get = lua.get("get");
  var newStack = lua.get("newStack");
  var push_Stack = lua.get("push\x1dStack");
  var call = lua.get("call");
  var first_Stack = lua.get("first\x1dStack");
  var cns4 = Cobre.Lazy(function () { return string("table")});
  var ne = lua.get("ne");
  var cns5 = Cobre.Lazy(function () { return lua$int(0)});
  var eq = lua.get("eq");
  var cns6 = Cobre.Lazy(function () { return string("tostring")});
  var append_Stack = lua.get("append\x1dStack");
  var length = lua.get("length");
  var gt = lua.get("gt");
  var cns7 = Cobre.Lazy(function () { return string("[")});
  var lt = lua.get("lt");
  var cns8 = Cobre.Lazy(function () { return string(",")});
  var concat = lua.get("concat");
  var cns9 = Cobre.Lazy(function () { return string("\n")});
  var cns10 = Cobre.Lazy(function () { return string("  ")});
  var cns11 = Cobre.Lazy(function () { return string("tostr")});
  var sub = lua.get("sub");
  var add = lua.get("add");
  var cns12 = Cobre.Lazy(function () { return string("pairs")});
  var cns13 = Cobre.Lazy(function () { return string("number")});
  var cns14 = Cobre.Lazy(function () { return string(",\n")});
  var cns15 = Cobre.Lazy(function () { return string(" = ")});
  var cns16 = Cobre.Lazy(function () { return string("]")});
  var lua$true = lua.get("true");
  var cns17 = Cobre.Lazy(function () { return string("{")});
  var lua$false = lua.get("false");
  var cns18 = Cobre.Lazy(function () { return string("}")});
  var cns19 = Cobre.Lazy(function () { return string("[]")});
  function culua_helpers$function (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_10, reg_15, reg_16, reg_20, reg_25, reg_28, reg_29, reg_35, reg_36, reg_37, reg_38, reg_40, reg_51, reg_52, reg_55, reg_56, reg_71, reg_72, reg_73, reg_74, reg_75, reg_76, reg_77, reg_78, reg_79, reg_80, reg_86, reg_87, reg_93, reg_94, reg_97, reg_98, reg_100, reg_101, reg_104, reg_105, reg_118, reg_119, reg_124, reg_125, reg_128, reg_129, reg_130, reg_131, reg_132, reg_133, reg_134, reg_135, reg_136, reg_137, reg_145, reg_146, reg_149, reg_150, reg_152, reg_153, reg_156, reg_157, reg_170, reg_176, reg_178;
    var goto_60=false, goto_194=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_7 = reg_5;
    if (!tobool(reg_7)) {
      reg_7 = cns1();
    }
    reg_5 = reg_7;
    reg_10 = reg_6;
    if (!tobool(reg_10)) {
      reg_10 = cns2();
    }
    reg_6 = reg_10;
    reg_15 = get(reg_1[0], cns3());
    reg_16 = newStack();
    push_Stack(reg_16, reg_4);
    reg_20 = ne(first_Stack(call(reg_15, reg_16)), cns4());
    if (!tobool(reg_20)) {
      reg_20 = eq(reg_5, cns5());
    }
    if (tobool(reg_20)) {
      reg_25 = newStack();
      reg_28 = get(reg_1[0], cns6());
      reg_29 = newStack();
      push_Stack(reg_29, reg_4);
      append_Stack(reg_25, call(reg_28, reg_29));
      return reg_25;
    }
    if (tobool(gt(length(reg_4), cns5()))) {
      reg_35 = cns7();
      reg_36 = cns1();
      reg_37 = length(reg_4);
      reg_38 = cns1();
      reg_40 = lt(reg_38, cns5());
      loop_3: while (true) {
        goto_60 = tobool(reg_40);
        if (!goto_60) {
          if (tobool(gt(reg_36, reg_37))) break loop_3;
        }
        if ((goto_60 || false)) {
          goto_60 = false;
          if (tobool(lt(reg_36, reg_37))) break loop_3;
        }
        if (tobool(gt(reg_36, cns1()))) {
          reg_35 = concat(reg_35, cns8());
        }
        reg_51 = cns9();
        reg_52 = cns10();
        reg_55 = get(reg_1[0], cns11());
        reg_56 = newStack();
        push_Stack(reg_56, get(reg_4, reg_36));
        push_Stack(reg_56, sub(reg_5, cns1()));
        push_Stack(reg_56, concat(reg_6, cns10()));
        reg_35 = concat(reg_35, concat(reg_51, concat(reg_6, concat(reg_52, first_Stack(call(reg_55, reg_56))))));
        reg_36 = add(reg_36, reg_38);
      }
      reg_71 = get(reg_1[0], cns12());
      reg_72 = newStack();
      push_Stack(reg_72, reg_4);
      reg_73 = call(reg_71, reg_72);
      reg_74 = next_Stack(reg_73);
      reg_75 = next_Stack(reg_73);
      reg_76 = next_Stack(reg_73);
      loop_2: while (true) {
        reg_77 = newStack();
        push_Stack(reg_77, reg_75);
        push_Stack(reg_77, reg_76);
        reg_78 = call(reg_74, reg_77);
        reg_79 = next_Stack(reg_78);
        reg_76 = reg_79;
        reg_80 = next_Stack(reg_78);
        if (tobool(eq(reg_76, nil()))) break loop_2;
        reg_86 = get(reg_1[0], cns3());
        reg_87 = newStack();
        push_Stack(reg_87, reg_79);
        if (tobool(ne(first_Stack(call(reg_86, reg_87)), cns13()))) {
          reg_93 = cns14();
          reg_94 = cns10();
          reg_97 = get(reg_1[0], cns6());
          reg_98 = newStack();
          push_Stack(reg_98, reg_79);
          reg_100 = first_Stack(call(reg_97, reg_98));
          reg_101 = cns15();
          reg_104 = get(reg_1[0], cns11());
          reg_105 = newStack();
          push_Stack(reg_105, reg_80);
          push_Stack(reg_105, sub(reg_5, cns1()));
          push_Stack(reg_105, concat(reg_6, cns10()));
          reg_35 = concat(reg_35, concat(reg_93, concat(reg_6, concat(reg_94, concat(reg_100, concat(reg_101, first_Stack(call(reg_104, reg_105))))))));
        }
      }
      reg_118 = newStack();
      reg_119 = cns9();
      push_Stack(reg_118, concat(reg_35, concat(reg_119, concat(reg_6, cns16()))));
      return reg_118;
    }
    reg_124 = lua$true();
    reg_125 = cns17();
    reg_128 = get(reg_1[0], cns12());
    reg_129 = newStack();
    push_Stack(reg_129, reg_4);
    reg_130 = call(reg_128, reg_129);
    reg_131 = next_Stack(reg_130);
    reg_132 = next_Stack(reg_130);
    reg_133 = next_Stack(reg_130);
    loop_1: while (true) {
      reg_134 = newStack();
      push_Stack(reg_134, reg_132);
      push_Stack(reg_134, reg_133);
      reg_135 = call(reg_131, reg_134);
      reg_136 = next_Stack(reg_135);
      reg_133 = reg_136;
      reg_137 = next_Stack(reg_135);
      if (tobool(eq(reg_133, nil()))) break loop_1;
      goto_194 = !tobool(reg_124);
      if (!goto_194) {
        reg_124 = lua$false();
      }
      if ((goto_194 || false)) {
        goto_194 = false;
        reg_125 = concat(reg_125, cns8());
      }
      reg_145 = cns9();
      reg_146 = cns10();
      reg_149 = get(reg_1[0], cns6());
      reg_150 = newStack();
      push_Stack(reg_150, reg_136);
      reg_152 = first_Stack(call(reg_149, reg_150));
      reg_153 = cns15();
      reg_156 = get(reg_1[0], cns11());
      reg_157 = newStack();
      push_Stack(reg_157, reg_137);
      push_Stack(reg_157, sub(reg_5, cns1()));
      push_Stack(reg_157, concat(reg_6, cns10()));
      reg_125 = concat(reg_125, concat(reg_145, concat(reg_6, concat(reg_146, concat(reg_152, concat(reg_153, first_Stack(call(reg_156, reg_157))))))));
    }
    reg_170 = cns9();
    reg_125 = concat(reg_125, concat(reg_170, concat(reg_6, cns18())));
    if (tobool(reg_124)) {
      reg_176 = newStack();
      push_Stack(reg_176, cns19());
      return reg_176;
    }
    reg_178 = newStack();
    push_Stack(reg_178, reg_125);
    return reg_178;
  }
  var mod3 = new Cobre.Module({
    "0": culua_helpers$function,
  });
  var item55 = closure.build(mod3);
  var item55$new = item55.get("new");
  var lua$function = lua.get("function");
  var set = lua.get("set");
  var mod6 = new Cobre.Module({
    "0": tp1,
  });
  var cns20 = Cobre.Lazy(function () { return string(", at ")});
  var cns21 = Cobre.Lazy(function () { return string("line")});
  var cns22 = Cobre.Lazy(function () { return string(":")});
  var cns23 = Cobre.Lazy(function () { return string("column")});
  var cns24 = Cobre.Lazy(function () { return string("error")});
  function function$1 (reg_0, reg_1) {
    var reg_4, reg_5, reg_7, reg_9, reg_10, reg_19, reg_20, reg_22;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    if (tobool(reg_5)) {
      reg_7 = cns20();
      reg_9 = get(reg_5, cns21());
      reg_10 = cns22();
      reg_4 = concat(reg_4, concat(reg_7, concat(reg_9, concat(reg_10, get(reg_5, cns23())))));
    }
    reg_19 = get(reg_1[0], cns24());
    reg_20 = newStack();
    push_Stack(reg_20, reg_4);
    reg_21 = call(reg_19, reg_20);
    reg_22 = newStack();
    return reg_22;
  }
  var mod5 = new Cobre.Module({
    "0": function$1,
  });
  var item68 = closure.build(mod5);
  var item68$new = item68.get("new");
  var cns25 = Cobre.Lazy(function () { return string("err")});
  function lua_main (reg_0) {
    var reg_2, reg_4, reg_8, reg_11;
    reg_2 = [nil()];
    reg_2[0] = reg_0;
    reg_4 = lua$function(item55$new(reg_2));
    set(reg_2[0], cns11(), reg_4);
    reg_8 = lua$function(item68$new(reg_2));
    set(reg_2[0], cns25(), reg_8);
    reg_11 = newStack();
    return reg_11;
  }
  var get_global = lua.get("get_global");
  function main () {
    reg_1 = lua_main(get_global());
    return;
  }
  var mod1 = new Cobre.Module({
    "lua_main": lua_main,
    "main": main,
  });
  return mod1;
});
Cobre.$export("culua.basics", function () {
  var lua = Cobre.$import("lua");
  var nil = lua.get("nil");
  var mod2 = new Cobre.Module({
    "0": Cobre.Any,
    "1": Cobre.Any,
  });
  var closure = lua.get("closure");
  var tp5 = new Cobre.Record([Cobre.Any,Cobre.Any]);
  var mod4 = new Cobre.Module({
    "0": tp5,
  });
  var newTable = lua.get("newTable");
  var string = lua.get("string");
  var cns1 = Cobre.Lazy(function () { return string("modules")});
  var set = lua.get("set");
  var cns2 = Cobre.Lazy(function () { return string("types")});
  var cns3 = Cobre.Lazy(function () { return string("funcs")});
  var cns4 = Cobre.Lazy(function () { return string("metadata")});
  var lua$int = lua.get("int");
  var cns5 = Cobre.Lazy(function () { return lua$int(1)});
  var cns6 = Cobre.Lazy(function () { return string("source map")});
  var cns7 = Cobre.Lazy(function () { return string("sourcemap")});
  var cns8 = Cobre.Lazy(function () { return string("constants")});
  var cns9 = Cobre.Lazy(function () { return string("constant_cache")});
  var newStack = lua.get("newStack");
  var call = lua.get("call");
  function culua_basics$function (reg_0, reg_1) {
    var reg_4, reg_7, reg_10, reg_13, reg_16, reg_21, reg_24, reg_30;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = newTable();
    set(reg_1[0], cns1(), reg_4);
    reg_7 = newTable();
    set(reg_1[0], cns2(), reg_7);
    reg_10 = newTable();
    set(reg_1[0], cns3(), reg_10);
    reg_13 = newTable();
    set(reg_1[0], cns4(), reg_13);
    reg_16 = newTable();
    set(reg_16, cns5(), cns6());
    set(reg_1[0], cns7(), reg_16);
    reg_21 = newTable();
    set(reg_1[0], cns8(), reg_21);
    reg_24 = newTable();
    set(reg_1[0], cns9(), reg_24);
    reg_29 = call(reg_1[1], newStack());
    reg_30 = newStack();
    return reg_30;
  }
  var mod3 = new Cobre.Module({
    "0": culua_basics$function,
  });
  var item33 = closure.build(mod3);
  var item33$new = item33.get("new");
  var lua$function = lua.get("function");
  var cns10 = Cobre.Lazy(function () { return string("create_compiler_state")});
  var cns11 = Cobre.Lazy(function () { return string("Module")});
  var get = lua.get("get");
  var cns12 = Cobre.Lazy(function () { return string("__index")});
  var cns13 = Cobre.Lazy(function () { return string("type")});
  var mod6 = new Cobre.Module({
    "0": tp5,
    "1": Cobre.Any,
    "2": Cobre.Any,
  });
  var next_Stack = lua.get("next\x1dStack");
  var cns14 = Cobre.Lazy(function () { return string("id")});
  var length = lua.get("length");
  var cns15 = Cobre.Lazy(function () { return string("name")});
  var cns16 = Cobre.Lazy(function () { return string("module")});
  var cns17 = Cobre.Lazy(function () { return string("table")});
  var cns18 = Cobre.Lazy(function () { return string("insert")});
  var push_Stack = lua.get("push\x1dStack");
  var cns19 = Cobre.Lazy(function () { return string("setmetatable")});
  var cns20 = Cobre.Lazy(function () { return string("__tostring")});
  var tp1 = new Cobre.Record([tp5,Cobre.Any,Cobre.Any]);
  var mod8 = new Cobre.Module({
    "0": tp1,
  });
  var cns21 = Cobre.Lazy(function () { return string("fullname")});
  var first_Stack = lua.get("first\x1dStack");
  var cns22 = Cobre.Lazy(function () { return string(".")});
  var concat = lua.get("concat");
  function function$1 (reg_0, reg_1) {
    var reg_6, reg_7, reg_9, reg_10, reg_12;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = newStack();
    reg_7 = reg_1[1];
    reg_9 = get(reg_7, cns21());
    reg_10 = newStack();
    push_Stack(reg_10, reg_7);
    reg_12 = first_Stack(call(reg_9, reg_10));
    push_Stack(reg_6, concat(reg_12, concat(cns22(), reg_1[2])));
    return reg_6;
  }
  var mod7 = new Cobre.Module({
    "0": function$1,
  });
  var item68 = closure.build(mod7);
  var item68$new = item68.get("new");
  function Module_type (reg_0, reg_1) {
    var reg_2, reg_3, reg_6, reg_7, reg_14, reg_22, reg_23, reg_30, reg_31, reg_32, reg_33, reg_37;
    reg_2 = nil();
    reg_3 = [reg_1, reg_2, reg_2];
    reg_3[1] = next_Stack(reg_0);
    reg_3[2] = next_Stack(reg_0);
    reg_6 = newTable();
    reg_7 = cns14();
    set(reg_6, reg_7, length(get(reg_1[0], cns2())));
    set(reg_6, cns15(), reg_3[2]);
    reg_14 = cns16();
    set(reg_6, reg_14, get(reg_3[1], cns14()));
    reg_22 = get(get(reg_1[0], cns17()), cns18());
    reg_23 = newStack();
    push_Stack(reg_23, get(reg_1[0], cns2()));
    push_Stack(reg_23, reg_6);
    reg_27 = call(reg_22, reg_23);
    reg_30 = get(reg_1[0], cns19());
    reg_31 = newStack();
    push_Stack(reg_31, reg_6);
    reg_32 = newTable();
    reg_33 = cns20();
    set(reg_32, reg_33, lua$function(item68$new(reg_3)));
    push_Stack(reg_31, reg_32);
    reg_36 = call(reg_30, reg_31);
    reg_37 = newStack();
    push_Stack(reg_37, reg_6);
    return reg_37;
  }
  var mod5 = new Cobre.Module({
    "0": Module_type,
  });
  var item72 = closure.build(mod5);
  var item72$new = item72.get("new");
  var cns23 = Cobre.Lazy(function () { return string("func")});
  var mod10 = new Cobre.Module({
    "0": tp5,
    "1": Cobre.Any,
    "2": Cobre.Any,
  });
  var cns24 = Cobre.Lazy(function () { return string("_id")});
  var cns25 = Cobre.Lazy(function () { return string("ins")});
  var cns26 = Cobre.Lazy(function () { return string("outs")});
  var mod12 = new Cobre.Module({
    "0": tp1,
  });
  function f_id (reg_0, reg_1) {
    var reg_5, reg_6;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = newStack();
    push_Stack(reg_6, get(reg_5, cns24()));
    return reg_6;
  }
  var mod11 = new Cobre.Module({
    "0": f_id,
  });
  var item89 = closure.build(mod11);
  var item89$new = item89.get("new");
  var cns27 = Cobre.Lazy(function () { return string("ipairs")});
  var eq = lua.get("eq");
  var tobool = lua.get("tobool");
  var mod14 = new Cobre.Module({
    "0": tp1,
  });
  function function$2 (reg_0, reg_1) {
    var reg_6, reg_7, reg_9, reg_10, reg_12;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = newStack();
    reg_7 = reg_1[1];
    reg_9 = get(reg_7, cns21());
    reg_10 = newStack();
    push_Stack(reg_10, reg_7);
    reg_12 = first_Stack(call(reg_9, reg_10));
    push_Stack(reg_6, concat(reg_12, concat(cns22(), reg_1[2])));
    return reg_6;
  }
  var mod13 = new Cobre.Module({
    "0": function$2,
  });
  var item98 = closure.build(mod13);
  var item98$new = item98.get("new");
  function Module_func (reg_0, reg_1) {
    var reg_2, reg_3, reg_6, reg_7, reg_8, reg_9, reg_20, reg_24, reg_29, reg_30, reg_31, reg_32, reg_33, reg_34, reg_35, reg_36, reg_37, reg_38, reg_43, reg_48, reg_49, reg_50, reg_51, reg_52, reg_53, reg_54, reg_55, reg_56, reg_57, reg_62, reg_69, reg_70, reg_77, reg_78, reg_79, reg_80, reg_84;
    reg_2 = nil();
    reg_3 = [reg_1, reg_2, reg_2];
    reg_3[1] = next_Stack(reg_0);
    reg_3[2] = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_7 = next_Stack(reg_0);
    reg_8 = newTable();
    reg_9 = cns24();
    set(reg_8, reg_9, length(get(reg_1[0], cns3())));
    set(reg_8, cns15(), reg_3[2]);
    set(reg_8, cns25(), newTable());
    set(reg_8, cns26(), newTable());
    reg_20 = cns16();
    set(reg_8, reg_20, get(reg_3[1], cns14()));
    reg_24 = cns14();
    set(reg_8, reg_24, lua$function(item89$new(reg_3)));
    reg_29 = get(reg_1[0], cns27());
    reg_30 = newStack();
    push_Stack(reg_30, reg_6);
    reg_31 = call(reg_29, reg_30);
    reg_32 = next_Stack(reg_31);
    reg_33 = next_Stack(reg_31);
    reg_34 = next_Stack(reg_31);
    loop_2: while (true) {
      reg_35 = newStack();
      push_Stack(reg_35, reg_33);
      push_Stack(reg_35, reg_34);
      reg_36 = call(reg_32, reg_35);
      reg_37 = next_Stack(reg_36);
      reg_34 = reg_37;
      reg_38 = next_Stack(reg_36);
      if (tobool(eq(reg_34, nil()))) break loop_2;
      reg_43 = get(reg_8, cns25());
      set(reg_43, reg_37, get(reg_38, cns14()));
    }
    reg_48 = get(reg_1[0], cns27());
    reg_49 = newStack();
    push_Stack(reg_49, reg_7);
    reg_50 = call(reg_48, reg_49);
    reg_51 = next_Stack(reg_50);
    reg_52 = next_Stack(reg_50);
    reg_53 = next_Stack(reg_50);
    loop_1: while (true) {
      reg_54 = newStack();
      push_Stack(reg_54, reg_52);
      push_Stack(reg_54, reg_53);
      reg_55 = call(reg_51, reg_54);
      reg_56 = next_Stack(reg_55);
      reg_53 = reg_56;
      reg_57 = next_Stack(reg_55);
      if (tobool(eq(reg_53, nil()))) break loop_1;
      reg_62 = get(reg_8, cns26());
      set(reg_62, reg_56, get(reg_57, cns14()));
    }
    reg_69 = get(get(reg_1[0], cns17()), cns18());
    reg_70 = newStack();
    push_Stack(reg_70, get(reg_1[0], cns3()));
    push_Stack(reg_70, reg_8);
    reg_74 = call(reg_69, reg_70);
    reg_77 = get(reg_1[0], cns19());
    reg_78 = newStack();
    push_Stack(reg_78, reg_8);
    reg_79 = newTable();
    reg_80 = cns20();
    set(reg_79, reg_80, lua$function(item98$new(reg_3)));
    push_Stack(reg_78, reg_79);
    reg_83 = call(reg_77, reg_78);
    reg_84 = newStack();
    push_Stack(reg_84, reg_8);
    return reg_84;
  }
  var mod9 = new Cobre.Module({
    "0": Module_func,
  });
  var item102 = closure.build(mod9);
  var item102$new = item102.get("new");
  var mod16 = new Cobre.Module({
    "0": tp5,
  });
  var cns28 = Cobre.Lazy(function () { return string("base")});
  var cns29 = Cobre.Lazy(function () { return string("argument")});
  var cns30 = Cobre.Lazy(function () { return string("items")});
  var cns31 = Cobre.Lazy(function () { return string("=")});
  var cns32 = Cobre.Lazy(function () { return string("tostring")});
  var cns33 = Cobre.Lazy(function () { return string("tp")});
  var cns34 = Cobre.Lazy(function () { return string("fn")});
  var cns35 = Cobre.Lazy(function () { return string("¿?")});
  var cns36 = Cobre.Lazy(function () { return string("(")});
  var cns37 = Cobre.Lazy(function () { return string("concat")});
  var cns38 = Cobre.Lazy(function () { return string(" ")});
  var cns39 = Cobre.Lazy(function () { return string(")")});
  var cns40 = Cobre.Lazy(function () { return string("<unknown>")});
  function Module_fullname (reg_0, reg_1) {
    var reg_4, reg_8, reg_11, reg_12, reg_17, reg_18, reg_19, reg_20, reg_21, reg_22, reg_24, reg_28, reg_30, reg_31, reg_34, reg_35, reg_37, reg_47, reg_51, reg_52, reg_57, reg_58, reg_66, reg_68, reg_71;
    var goto_82=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    goto_82 = !tobool(get(reg_4, cns28()));
    if (!goto_82) {
      reg_8 = newTable();
      reg_11 = get(reg_1[0], cns27());
      reg_12 = newStack();
      push_Stack(reg_12, get(get(reg_4, cns29()), cns30()));
      reg_17 = call(reg_11, reg_12);
      reg_18 = next_Stack(reg_17);
      reg_19 = next_Stack(reg_17);
      reg_20 = next_Stack(reg_17);
      loop_1: while (true) {
        reg_21 = newStack();
        push_Stack(reg_21, reg_19);
        push_Stack(reg_21, reg_20);
        reg_22 = call(reg_18, reg_21);
        reg_20 = next_Stack(reg_22);
        reg_24 = next_Stack(reg_22);
        if (tobool(eq(reg_20, nil()))) break loop_1;
        reg_28 = length(reg_8);
        reg_30 = get(reg_24, cns15());
        reg_31 = cns31();
        reg_34 = get(reg_1[0], cns32());
        reg_35 = newStack();
        reg_37 = get(reg_24, cns33());
        if (!tobool(reg_37)) {
          reg_37 = get(reg_24, cns34());
        }
        if (!tobool(reg_37)) {
          reg_37 = cns35();
        }
        push_Stack(reg_35, reg_37);
        set(reg_8, reg_28, concat(reg_30, concat(reg_31, first_Stack(call(reg_34, reg_35)))));
      }
      reg_47 = newStack();
      reg_51 = get(get(reg_4, cns28()), cns15());
      reg_52 = cns36();
      reg_57 = get(get(reg_1[0], cns17()), cns37());
      reg_58 = newStack();
      push_Stack(reg_58, reg_8);
      push_Stack(reg_58, cns38());
      push_Stack(reg_47, concat(reg_51, concat(reg_52, concat(first_Stack(call(reg_57, reg_58)), cns39()))));
      return reg_47;
    }
    if ((goto_82 || false)) {
      goto_82 = false;
      reg_66 = newStack();
      reg_68 = get(reg_4, cns15());
      if (!tobool(reg_68)) {
        reg_68 = cns40();
      }
      push_Stack(reg_66, reg_68);
      return reg_66;
    }
    reg_71 = newStack();
    return reg_71;
  }
  var mod15 = new Cobre.Module({
    "0": Module_fullname,
  });
  var item121 = closure.build(mod15);
  var item121$new = item121.get("new");
  var mod18 = new Cobre.Module({
    "0": tp5,
  });
  var cns41 = Cobre.Lazy(function () { return lua$int(2)});
  var add = lua.get("add");
  function function$3 (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_16, reg_17, reg_26, reg_27, reg_32;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newTable();
    reg_6 = cns14();
    set(reg_5, reg_6, add(length(get(reg_1[0], cns1())), cns41()));
    set(reg_5, cns15(), reg_4);
    reg_16 = get(reg_1[0], cns19());
    reg_17 = newStack();
    push_Stack(reg_17, reg_5);
    push_Stack(reg_17, get(reg_1[0], cns11()));
    reg_21 = call(reg_16, reg_17);
    reg_26 = get(get(reg_1[0], cns17()), cns18());
    reg_27 = newStack();
    push_Stack(reg_27, get(reg_1[0], cns1()));
    push_Stack(reg_27, reg_5);
    reg_31 = call(reg_26, reg_27);
    reg_32 = newStack();
    push_Stack(reg_32, reg_5);
    return reg_32;
  }
  var mod17 = new Cobre.Module({
    "0": function$3,
  });
  var item129 = closure.build(mod17);
  var item129$new = item129.get("new");
  var cns42 = Cobre.Lazy(function () { return string("Function")});
  var mod20 = new Cobre.Module({
    "0": tp5,
  });
  function Function_id (reg_0, reg_1) {
    var reg_4, reg_5;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newStack();
    push_Stack(reg_5, get(reg_4, cns24()));
    return reg_5;
  }
  var mod19 = new Cobre.Module({
    "0": Function_id,
  });
  var item136 = closure.build(mod19);
  var item136$new = item136.get("new");
  var cns43 = Cobre.Lazy(function () { return string("reg")});
  var mod22 = new Cobre.Module({
    "0": tp5,
  });
  var cns44 = Cobre.Lazy(function () { return string("regs")});
  var tp2 = new Cobre.Record([tp5]);
  var mod24 = new Cobre.Module({
    "0": tp2,
  });
  var cns45 = Cobre.Lazy(function () { return string("reg_")});
  function function$4 (reg_0, reg_1) {
    var reg_5, reg_6, reg_7;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = newStack();
    reg_7 = cns45();
    push_Stack(reg_6, concat(reg_7, get(reg_5, cns14())));
    return reg_6;
  }
  var mod23 = new Cobre.Module({
    "0": function$4,
  });
  var item150 = closure.build(mod23);
  var item150$new = item150.get("new");
  function Function_reg (reg_0, reg_1) {
    var reg_3, reg_4, reg_5, reg_6, reg_14, reg_15, reg_21, reg_22, reg_23, reg_24, reg_28;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newTable();
    reg_6 = cns14();
    set(reg_5, reg_6, length(get(reg_4, cns44())));
    reg_14 = get(get(reg_1[0], cns17()), cns18());
    reg_15 = newStack();
    push_Stack(reg_15, get(reg_4, cns44()));
    push_Stack(reg_15, reg_5);
    reg_18 = call(reg_14, reg_15);
    reg_21 = get(reg_1[0], cns19());
    reg_22 = newStack();
    push_Stack(reg_22, reg_5);
    reg_23 = newTable();
    reg_24 = cns20();
    set(reg_23, reg_24, lua$function(item150$new(reg_3)));
    push_Stack(reg_22, reg_23);
    reg_27 = call(reg_21, reg_22);
    reg_28 = newStack();
    push_Stack(reg_28, reg_5);
    return reg_28;
  }
  var mod21 = new Cobre.Module({
    "0": Function_reg,
  });
  var item154 = closure.build(mod21);
  var item154$new = item154.get("new");
  var cns46 = Cobre.Lazy(function () { return string("inst")});
  var mod26 = new Cobre.Module({
    "0": tp5,
  });
  var mod28 = new Cobre.Module({
    "0": tp2,
  });
  var append_Stack = lua.get("append\x1dStack");
  function function$5 (reg_0, reg_1) {
    var reg_2, reg_5, reg_9, reg_10, reg_14, reg_17, reg_18, reg_22;
    var goto_16=false;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    goto_16 = !tobool(get(reg_5, cns43()));
    if (!goto_16) {
      reg_9 = newStack();
      reg_10 = cns45();
      push_Stack(reg_9, concat(reg_10, get(reg_5, cns43())));
      return reg_9;
    }
    if ((goto_16 || false)) {
      goto_16 = false;
      reg_14 = newStack();
      reg_17 = get(reg_2[0], cns32());
      reg_18 = newStack();
      push_Stack(reg_18, get(reg_5, cns46()));
      append_Stack(reg_14, call(reg_17, reg_18));
      return reg_14;
    }
    reg_22 = newStack();
    return reg_22;
  }
  var mod27 = new Cobre.Module({
    "0": function$5,
  });
  var item165 = closure.build(mod27);
  var item165$new = item165.get("new");
  var cns47 = Cobre.Lazy(function () { return string("code")});
  function Function_inst (reg_0, reg_1) {
    var reg_3, reg_4, reg_5, reg_8, reg_9, reg_10, reg_11, reg_19, reg_20, reg_24;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_8 = get(reg_1[0], cns19());
    reg_9 = newStack();
    push_Stack(reg_9, reg_5);
    reg_10 = newTable();
    reg_11 = cns20();
    set(reg_10, reg_11, lua$function(item165$new(reg_3)));
    push_Stack(reg_9, reg_10);
    reg_14 = call(reg_8, reg_9);
    reg_19 = get(get(reg_1[0], cns17()), cns18());
    reg_20 = newStack();
    push_Stack(reg_20, get(reg_4, cns47()));
    push_Stack(reg_20, reg_5);
    reg_23 = call(reg_19, reg_20);
    reg_24 = newStack();
    push_Stack(reg_24, reg_5);
    return reg_24;
  }
  var mod25 = new Cobre.Module({
    "0": Function_inst,
  });
  var item170 = closure.build(mod25);
  var item170$new = item170.get("new");
  var cns48 = Cobre.Lazy(function () { return string("lbl")});
  var mod30 = new Cobre.Module({
    "0": tp5,
  });
  var cns49 = Cobre.Lazy(function () { return string("label_count")});
  function Function_lbl (reg_0, reg_1) {
    var reg_4, reg_8, reg_10;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_8 = add(get(reg_4, cns49()), cns5());
    set(reg_4, cns49(), reg_8);
    reg_10 = newStack();
    push_Stack(reg_10, reg_8);
    return reg_10;
  }
  var mod29 = new Cobre.Module({
    "0": Function_lbl,
  });
  var item178 = closure.build(mod29);
  var item178$new = item178.get("new");
  var cns50 = Cobre.Lazy(function () { return string("call")});
  var mod32 = new Cobre.Module({
    "0": tp5,
  });
  var copy_Stack = lua.get("copy\x1dStack");
  var table_append = lua.get("table_append");
  function Function_call (reg_0, reg_1) {
    var reg_4, reg_5, reg_7, reg_8, reg_9;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newStack();
    reg_7 = get(reg_4, cns46());
    reg_8 = newStack();
    push_Stack(reg_8, reg_4);
    reg_9 = newTable();
    table_append(reg_9, cns5(), copy_Stack(reg_0));
    push_Stack(reg_8, reg_9);
    append_Stack(reg_5, call(reg_7, reg_8));
    return reg_5;
  }
  var mod31 = new Cobre.Module({
    "0": Function_call,
  });
  var item187 = closure.build(mod31);
  var item187$new = item187.get("new");
  var cns51 = Cobre.Lazy(function () { return string("push_scope")});
  var mod34 = new Cobre.Module({
    "0": tp5,
  });
  var cns52 = Cobre.Lazy(function () { return string("scope")});
  var cns53 = Cobre.Lazy(function () { return string("locals")});
  var cns54 = Cobre.Lazy(function () { return string("labels")});
  var cns55 = Cobre.Lazy(function () { return string("scopes")});
  function Function_push_scope (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_15, reg_16, reg_22;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = cns52();
    reg_6 = newTable();
    set(reg_6, cns53(), newTable());
    set(reg_6, cns54(), newTable());
    set(reg_4, reg_5, reg_6);
    reg_15 = get(get(reg_1[0], cns17()), cns18());
    reg_16 = newStack();
    push_Stack(reg_16, get(reg_4, cns55()));
    push_Stack(reg_16, get(reg_4, cns52()));
    reg_21 = call(reg_15, reg_16);
    reg_22 = newStack();
    return reg_22;
  }
  var mod33 = new Cobre.Module({
    "0": Function_push_scope,
  });
  var item198 = closure.build(mod33);
  var item198$new = item198.get("new");
  var cns56 = Cobre.Lazy(function () { return string("pop_scope")});
  var mod36 = new Cobre.Module({
    "0": tp5,
  });
  var cns57 = Cobre.Lazy(function () { return string("remove")});
  function Function_pop_scope (reg_0, reg_1) {
    var reg_4, reg_9, reg_10, reg_14, reg_16, reg_21;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_9 = get(get(reg_1[0], cns17()), cns57());
    reg_10 = newStack();
    push_Stack(reg_10, get(reg_4, cns55()));
    reg_13 = call(reg_9, reg_10);
    reg_14 = cns52();
    reg_16 = get(reg_4, cns55());
    set(reg_4, reg_14, get(reg_16, length(get(reg_4, cns55()))));
    reg_21 = newStack();
    return reg_21;
  }
  var mod35 = new Cobre.Module({
    "0": Function_pop_scope,
  });
  var item206 = closure.build(mod35);
  var item206$new = item206.get("new");
  var mod38 = new Cobre.Module({
    "0": tp5,
  });
  var cns58 = Cobre.Lazy(function () { return lua$int(0)});
  var cns59 = Cobre.Lazy(function () { return string("upvals")});
  var cns60 = Cobre.Lazy(function () { return string("loops")});
  function function$6 (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_32, reg_33, reg_42, reg_43, reg_49, reg_50, reg_52;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newTable();
    reg_6 = cns24();
    set(reg_5, reg_6, length(get(reg_1[0], cns3())));
    set(reg_5, cns15(), reg_4);
    set(reg_5, cns44(), newTable());
    set(reg_5, cns47(), newTable());
    set(reg_5, cns49(), cns58());
    set(reg_5, cns54(), newTable());
    set(reg_5, cns25(), newTable());
    set(reg_5, cns26(), newTable());
    set(reg_5, cns59(), newTable());
    set(reg_5, cns55(), newTable());
    set(reg_5, cns60(), newTable());
    reg_32 = get(reg_1[0], cns19());
    reg_33 = newStack();
    push_Stack(reg_33, reg_5);
    push_Stack(reg_33, get(reg_1[0], cns42()));
    reg_37 = call(reg_32, reg_33);
    reg_42 = get(get(reg_1[0], cns17()), cns18());
    reg_43 = newStack();
    push_Stack(reg_43, get(reg_1[0], cns3()));
    push_Stack(reg_43, reg_5);
    reg_47 = call(reg_42, reg_43);
    reg_49 = get(reg_5, cns51());
    reg_50 = newStack();
    push_Stack(reg_50, reg_5);
    reg_51 = call(reg_49, reg_50);
    reg_52 = newStack();
    push_Stack(reg_52, reg_5);
    return reg_52;
  }
  var mod37 = new Cobre.Module({
    "0": function$6,
  });
  var item215 = closure.build(mod37);
  var item215$new = item215.get("new");
  var mod40 = new Cobre.Module({
    "0": tp5,
  });
  var cns61 = Cobre.Lazy(function () { return string(":lua:")});
  var cns62 = Cobre.Lazy(function () { return string("")});
  function Function___tostring (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_8;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newStack();
    reg_6 = cns61();
    reg_8 = get(reg_4, cns15());
    if (!tobool(reg_8)) {
      reg_8 = cns62();
    }
    push_Stack(reg_5, concat(reg_6, reg_8));
    return reg_5;
  }
  var mod39 = new Cobre.Module({
    "0": Function___tostring,
  });
  var item223 = closure.build(mod39);
  var item223$new = item223.get("new");
  var mod42 = new Cobre.Module({
    "0": tp5,
  });
  var cns63 = Cobre.Lazy(function () { return string("value")});
  var mod44 = new Cobre.Module({
    "0": tp2,
  });
  function data_id (reg_0, reg_1) {
    var reg_2, reg_5, reg_6, reg_8;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = newStack();
    reg_8 = get(reg_5, cns24());
    push_Stack(reg_6, add(reg_8, length(get(reg_2[0], cns3()))));
    return reg_6;
  }
  var mod43 = new Cobre.Module({
    "0": data_id,
  });
  var item233 = closure.build(mod43);
  var item233$new = item233.get("new");
  var mod46 = new Cobre.Module({
    "0": tp2,
  });
  var cns64 = Cobre.Lazy(function () { return string("cns_")});
  function function$8 (reg_0, reg_1) {
    var reg_5, reg_6, reg_7, reg_9, reg_10;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = newStack();
    reg_7 = cns64();
    reg_9 = get(reg_5, cns14());
    reg_10 = newStack();
    push_Stack(reg_10, reg_5);
    push_Stack(reg_6, concat(reg_7, first_Stack(call(reg_9, reg_10))));
    return reg_6;
  }
  var mod45 = new Cobre.Module({
    "0": function$8,
  });
  var item240 = closure.build(mod45);
  var item240$new = item240.get("new");
  function function$7 (reg_0, reg_1) {
    var reg_3, reg_4, reg_5, reg_6, reg_7, reg_16, reg_17, reg_20, reg_27, reg_28, reg_35, reg_36, reg_37, reg_38, reg_42;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = newTable();
    reg_7 = cns24();
    set(reg_6, reg_7, length(get(reg_1[0], cns8())));
    set(reg_6, cns13(), reg_4);
    set(reg_6, cns63(), reg_5);
    set(reg_6, cns25(), newTable());
    reg_16 = cns26();
    reg_17 = newTable();
    set(reg_17, cns5(), cns58());
    set(reg_6, reg_16, reg_17);
    reg_20 = cns14();
    set(reg_6, reg_20, lua$function(item233$new(reg_3)));
    reg_27 = get(get(reg_1[0], cns17()), cns18());
    reg_28 = newStack();
    push_Stack(reg_28, get(reg_1[0], cns8()));
    push_Stack(reg_28, reg_6);
    reg_32 = call(reg_27, reg_28);
    reg_35 = get(reg_1[0], cns19());
    reg_36 = newStack();
    push_Stack(reg_36, reg_6);
    reg_37 = newTable();
    reg_38 = cns20();
    set(reg_37, reg_38, lua$function(item240$new(reg_3)));
    push_Stack(reg_36, reg_37);
    reg_41 = call(reg_35, reg_36);
    reg_42 = newStack();
    push_Stack(reg_42, reg_6);
    return reg_42;
  }
  var mod41 = new Cobre.Module({
    "0": function$7,
  });
  var item244 = closure.build(mod41);
  var item244$new = item244.get("new");
  var cns65 = Cobre.Lazy(function () { return string("raw_const")});
  var mod48 = new Cobre.Module({
    "0": tp5,
  });
  var cns66 = Cobre.Lazy(function () { return string("f")});
  var cns67 = Cobre.Lazy(function () { return string("args")});
  var cns68 = Cobre.Lazy(function () { return string("pack")});
  function function$9 (reg_0, reg_1) {
    var reg_4, reg_7, reg_8, reg_11, reg_13, reg_18, reg_19, reg_22;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_7 = get(reg_1[0], cns65());
    reg_8 = newStack();
    push_Stack(reg_8, cns50());
    reg_11 = first_Stack(call(reg_7, reg_8));
    set(reg_11, cns66(), reg_4);
    reg_13 = cns67();
    reg_18 = get(get(reg_1[0], cns17()), cns68());
    reg_19 = newStack();
    append_Stack(reg_19, reg_0);
    set(reg_11, reg_13, first_Stack(call(reg_18, reg_19)));
    reg_22 = newStack();
    push_Stack(reg_22, reg_11);
    return reg_22;
  }
  var mod47 = new Cobre.Module({
    "0": function$9,
  });
  var item254 = closure.build(mod47);
  var item254$new = item254.get("new");
  var cns69 = Cobre.Lazy(function () { return string("const_call")});
  var mod50 = new Cobre.Module({
    "0": tp5,
  });
  var cns70 = Cobre.Lazy(function () { return string("string")});
  var cns71 = Cobre.Lazy(function () { return string("bin")});
  var cns72 = Cobre.Lazy(function () { return string("rawstr_f")});
  var cns73 = Cobre.Lazy(function () { return string("anystr_f")});
  var cns74 = Cobre.Lazy(function () { return string("number")});
  var cns75 = Cobre.Lazy(function () { return string("int")});
  var cns76 = Cobre.Lazy(function () { return string("anyint_f")});
  function function$10 (reg_0, reg_1) {
    var reg_4, reg_8, reg_10, reg_13, reg_14, reg_22, reg_23, reg_26, reg_29, reg_30, reg_35, reg_38, reg_39, reg_47, reg_48, reg_56, reg_57, reg_60, reg_63, reg_64, reg_73;
    var goto_57=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_8 = get(get(reg_1[0], cns9()), reg_4);
    if (tobool(reg_8)) {
      reg_10 = newStack();
      push_Stack(reg_10, reg_8);
      return reg_10;
    }
    reg_13 = get(reg_1[0], cns13());
    reg_14 = newStack();
    push_Stack(reg_14, reg_4);
    goto_57 = !tobool(eq(first_Stack(call(reg_13, reg_14)), cns70()));
    if (!goto_57) {
      reg_22 = get(reg_1[0], cns65());
      reg_23 = newStack();
      push_Stack(reg_23, cns71());
      push_Stack(reg_23, reg_4);
      reg_26 = first_Stack(call(reg_22, reg_23));
      reg_29 = get(reg_1[0], cns69());
      reg_30 = newStack();
      push_Stack(reg_30, get(reg_1[0], cns72()));
      push_Stack(reg_30, reg_26);
      reg_35 = first_Stack(call(reg_29, reg_30));
      reg_38 = get(reg_1[0], cns69());
      reg_39 = newStack();
      push_Stack(reg_39, get(reg_1[0], cns73()));
      push_Stack(reg_39, reg_35);
      reg_8 = first_Stack(call(reg_38, reg_39));
    }
    if ((goto_57 || false)) {
      goto_57 = false;
      reg_47 = get(reg_1[0], cns13());
      reg_48 = newStack();
      push_Stack(reg_48, reg_4);
      if (tobool(eq(first_Stack(call(reg_47, reg_48)), cns74()))) {
        reg_56 = get(reg_1[0], cns65());
        reg_57 = newStack();
        push_Stack(reg_57, cns75());
        push_Stack(reg_57, reg_4);
        reg_60 = first_Stack(call(reg_56, reg_57));
        reg_63 = get(reg_1[0], cns69());
        reg_64 = newStack();
        push_Stack(reg_64, get(reg_1[0], cns76()));
        push_Stack(reg_64, reg_60);
        reg_8 = first_Stack(call(reg_63, reg_64));
      }
    }
    set(get(reg_1[0], cns9()), reg_4, reg_8);
    reg_73 = newStack();
    push_Stack(reg_73, reg_8);
    return reg_73;
  }
  var mod49 = new Cobre.Module({
    "0": function$10,
  });
  var item268 = closure.build(mod49);
  var item268$new = item268.get("new");
  var cns77 = Cobre.Lazy(function () { return string("constant")});
  var mod52 = new Cobre.Module({
    "0": tp5,
  });
  var cns78 = Cobre.Lazy(function () { return string("cobre\x1fint")});
  var cns79 = Cobre.Lazy(function () { return string("int_m")});
  var cns80 = Cobre.Lazy(function () { return string("cobre\x1fbool")});
  var cns81 = Cobre.Lazy(function () { return string("bool_m")});
  var cns82 = Cobre.Lazy(function () { return string("cobre\x1fstring")});
  var cns83 = Cobre.Lazy(function () { return string("str_m")});
  var cns84 = Cobre.Lazy(function () { return string("lua")});
  var cns85 = Cobre.Lazy(function () { return string("lua_m")});
  var cns86 = Cobre.Lazy(function () { return string("closure")});
  var cns87 = Cobre.Lazy(function () { return string("closure_m")});
  var cns88 = Cobre.Lazy(function () { return string("from")});
  var cns89 = Cobre.Lazy(function () { return string("cobre\x1frecord")});
  var cns90 = Cobre.Lazy(function () { return string("record_m")});
  var cns91 = Cobre.Lazy(function () { return string("cobre\x1fany")});
  var cns92 = Cobre.Lazy(function () { return string("any_m")});
  var cns93 = Cobre.Lazy(function () { return string("cobre\x1fbuffer")});
  var cns94 = Cobre.Lazy(function () { return string("buffer_m")});
  var cns95 = Cobre.Lazy(function () { return string("any")});
  var cns96 = Cobre.Lazy(function () { return string("any_t")});
  var cns97 = Cobre.Lazy(function () { return string("bool")});
  var cns98 = Cobre.Lazy(function () { return string("bool_t")});
  var cns99 = Cobre.Lazy(function () { return string("buffer")});
  var cns100 = Cobre.Lazy(function () { return string("bin_t")});
  var cns101 = Cobre.Lazy(function () { return string("int_t")});
  var cns102 = Cobre.Lazy(function () { return string("string_t")});
  var cns103 = Cobre.Lazy(function () { return string("Stack")});
  var cns104 = Cobre.Lazy(function () { return string("stack_t")});
  var cns105 = Cobre.Lazy(function () { return string("func_t")});
  var cns106 = Cobre.Lazy(function () { return string("new")});
  var cns107 = Cobre.Lazy(function () { return string("nil")});
  var cns108 = Cobre.Lazy(function () { return string("nil_f")});
  var cns109 = Cobre.Lazy(function () { return string("true")});
  var cns110 = Cobre.Lazy(function () { return string("true_f")});
  var cns111 = Cobre.Lazy(function () { return string("false")});
  var cns112 = Cobre.Lazy(function () { return string("false_f")});
  var cns113 = Cobre.Lazy(function () { return string("tobool")});
  var cns114 = Cobre.Lazy(function () { return string("bool_f")});
  var cns115 = Cobre.Lazy(function () { return string("function")});
  var cns116 = Cobre.Lazy(function () { return string("func_f")});
  var cns117 = Cobre.Lazy(function () { return string("call_f")});
  var cns118 = Cobre.Lazy(function () { return string("get_global")});
  var cns119 = Cobre.Lazy(function () { return string("global_f")});
  var cns120 = Cobre.Lazy(function () { return string("newStack")});
  var cns121 = Cobre.Lazy(function () { return string("stack_f")});
  var cns122 = Cobre.Lazy(function () { return string("push\x1dStack")});
  var cns123 = Cobre.Lazy(function () { return string("push_f")});
  var cns124 = Cobre.Lazy(function () { return string("next\x1dStack")});
  var cns125 = Cobre.Lazy(function () { return string("next_f")});
  var cns126 = Cobre.Lazy(function () { return string("first\x1dStack")});
  var cns127 = Cobre.Lazy(function () { return string("first_f")});
  var cns128 = Cobre.Lazy(function () { return string("append\x1dStack")});
  var cns129 = Cobre.Lazy(function () { return string("append_f")});
  var cns130 = Cobre.Lazy(function () { return string("copy\x1dStack")});
  var cns131 = Cobre.Lazy(function () { return string("copystack_f")});
  var cns132 = Cobre.Lazy(function () { return string("newTable")});
  var cns133 = Cobre.Lazy(function () { return string("table_f")});
  var cns134 = Cobre.Lazy(function () { return string("table_append")});
  var cns135 = Cobre.Lazy(function () { return lua$int(3)});
  var cns136 = Cobre.Lazy(function () { return string("table_append_f")});
  var cns137 = Cobre.Lazy(function () { return string("get")});
  var cns138 = Cobre.Lazy(function () { return string("get_f")});
  var cns139 = Cobre.Lazy(function () { return string("set")});
  var cns140 = Cobre.Lazy(function () { return string("set_f")});
  var cns141 = Cobre.Lazy(function () { return string("+")});
  var cns142 = Cobre.Lazy(function () { return string("add")});
  var cns143 = Cobre.Lazy(function () { return string("-")});
  var cns144 = Cobre.Lazy(function () { return string("sub")});
  var cns145 = Cobre.Lazy(function () { return string("*")});
  var cns146 = Cobre.Lazy(function () { return string("mul")});
  var cns147 = Cobre.Lazy(function () { return string("/")});
  var cns148 = Cobre.Lazy(function () { return string("div")});
  var cns149 = Cobre.Lazy(function () { return string("//")});
  var cns150 = Cobre.Lazy(function () { return string("..")});
  var cns151 = Cobre.Lazy(function () { return string("==")});
  var cns152 = Cobre.Lazy(function () { return string("eq")});
  var cns153 = Cobre.Lazy(function () { return string("~=")});
  var cns154 = Cobre.Lazy(function () { return string("ne")});
  var cns155 = Cobre.Lazy(function () { return string("<")});
  var cns156 = Cobre.Lazy(function () { return string("lt")});
  var cns157 = Cobre.Lazy(function () { return string(">")});
  var cns158 = Cobre.Lazy(function () { return string("gt")});
  var cns159 = Cobre.Lazy(function () { return string("<=")});
  var cns160 = Cobre.Lazy(function () { return string("le")});
  var cns161 = Cobre.Lazy(function () { return string(">=")});
  var cns162 = Cobre.Lazy(function () { return string("ge")});
  var cns163 = Cobre.Lazy(function () { return string("binops")});
  var cns164 = Cobre.Lazy(function () { return string("not")});
  var cns165 = Cobre.Lazy(function () { return string("neg")});
  var cns166 = Cobre.Lazy(function () { return string("#")});
  var cns167 = Cobre.Lazy(function () { return string("length")});
  var cns168 = Cobre.Lazy(function () { return string("unops")});
  function function$11 (reg_0, reg_1) {
    var reg_6, reg_7, reg_10, reg_15, reg_16, reg_19, reg_24, reg_25, reg_28, reg_33, reg_34, reg_37, reg_42, reg_43, reg_46, reg_51, reg_52, reg_58, reg_59, reg_62, reg_67, reg_68, reg_71, reg_76, reg_77, reg_80, reg_85, reg_87, reg_88, reg_91, reg_96, reg_98, reg_99, reg_102, reg_107, reg_109, reg_110, reg_113, reg_118, reg_120, reg_121, reg_124, reg_129, reg_131, reg_132, reg_135, reg_140, reg_142, reg_143, reg_146, reg_151, reg_153, reg_154, reg_157, reg_162, reg_164, reg_165, reg_167, reg_168, reg_172, reg_173, reg_178, reg_183, reg_185, reg_186, reg_188, reg_189, reg_193, reg_194, reg_199, reg_204, reg_206, reg_207, reg_209, reg_210, reg_214, reg_215, reg_220, reg_225, reg_227, reg_228, reg_231, reg_232, reg_237, reg_242, reg_244, reg_245, reg_248, reg_249, reg_254, reg_259, reg_261, reg_262, reg_265, reg_266, reg_271, reg_276, reg_278, reg_279, reg_281, reg_282, reg_286, reg_287, reg_292, reg_297, reg_299, reg_300, reg_302, reg_303, reg_307, reg_308, reg_313, reg_318, reg_320, reg_321, reg_323, reg_324, reg_328, reg_332, reg_333, reg_338, reg_343, reg_345, reg_346, reg_349, reg_350, reg_355, reg_360, reg_362, reg_363, reg_366, reg_367, reg_372, reg_377, reg_379, reg_380, reg_382, reg_383, reg_387, reg_393, reg_398, reg_400, reg_401, reg_403, reg_404, reg_408, reg_409, reg_414, reg_419, reg_421, reg_422, reg_424, reg_425, reg_429, reg_430, reg_435, reg_440, reg_442, reg_443, reg_445, reg_446, reg_450, reg_456, reg_461, reg_463, reg_464, reg_466, reg_467, reg_471, reg_472, reg_477, reg_482, reg_484, reg_485, reg_488, reg_489, reg_494, reg_499, reg_501, reg_502, reg_504, reg_505, reg_509, reg_513, reg_519, reg_524, reg_526, reg_527, reg_529, reg_530, reg_534, reg_538, reg_539, reg_544, reg_549, reg_551, reg_552, reg_554, reg_555, reg_559, reg_563, reg_569, reg_572, reg_573, reg_576, reg_578, reg_579, reg_581, reg_582, reg_586, reg_590, reg_591, reg_597, reg_600, reg_602, reg_603, reg_605, reg_606, reg_610, reg_614, reg_615, reg_621, reg_624, reg_626, reg_627, reg_629, reg_630, reg_634, reg_638, reg_639, reg_645, reg_648, reg_650, reg_651, reg_653, reg_654, reg_658, reg_662, reg_663, reg_669, reg_672, reg_674, reg_675, reg_677, reg_678, reg_682, reg_686, reg_687, reg_693, reg_696, reg_698, reg_699, reg_701, reg_702, reg_706, reg_710, reg_711, reg_717, reg_720, reg_722, reg_723, reg_725, reg_726, reg_730, reg_734, reg_735, reg_741, reg_744, reg_746, reg_747, reg_749, reg_750, reg_754, reg_758, reg_759, reg_765, reg_768, reg_770, reg_771, reg_773, reg_774, reg_778, reg_782, reg_783, reg_789, reg_792, reg_794, reg_795, reg_797, reg_798, reg_802, reg_806, reg_807, reg_813, reg_816, reg_818, reg_819, reg_821, reg_822, reg_826, reg_830, reg_831, reg_837, reg_840, reg_842, reg_843, reg_845, reg_846, reg_850, reg_854, reg_855, reg_863, reg_864, reg_867, reg_869, reg_870, reg_872, reg_873, reg_877, reg_878, reg_884, reg_887, reg_889, reg_890, reg_892, reg_893, reg_897, reg_898, reg_904, reg_907, reg_909, reg_910, reg_912, reg_913, reg_917, reg_918, reg_926;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_6 = get(reg_1[0], cns16());
    reg_7 = newStack();
    push_Stack(reg_7, cns78());
    reg_10 = first_Stack(call(reg_6, reg_7));
    set(reg_1[0], cns79(), reg_10);
    reg_15 = get(reg_1[0], cns16());
    reg_16 = newStack();
    push_Stack(reg_16, cns80());
    reg_19 = first_Stack(call(reg_15, reg_16));
    set(reg_1[0], cns81(), reg_19);
    reg_24 = get(reg_1[0], cns16());
    reg_25 = newStack();
    push_Stack(reg_25, cns82());
    reg_28 = first_Stack(call(reg_24, reg_25));
    set(reg_1[0], cns83(), reg_28);
    reg_33 = get(reg_1[0], cns16());
    reg_34 = newStack();
    push_Stack(reg_34, cns84());
    reg_37 = first_Stack(call(reg_33, reg_34));
    set(reg_1[0], cns85(), reg_37);
    reg_42 = get(reg_1[0], cns16());
    reg_43 = newStack();
    push_Stack(reg_43, cns86());
    reg_46 = first_Stack(call(reg_42, reg_43));
    set(reg_1[0], cns87(), reg_46);
    reg_51 = get(reg_1[0], cns87());
    reg_52 = cns88();
    set(reg_51, reg_52, get(reg_1[0], cns85()));
    reg_58 = get(reg_1[0], cns16());
    reg_59 = newStack();
    push_Stack(reg_59, cns89());
    reg_62 = first_Stack(call(reg_58, reg_59));
    set(reg_1[0], cns90(), reg_62);
    reg_67 = get(reg_1[0], cns16());
    reg_68 = newStack();
    push_Stack(reg_68, cns91());
    reg_71 = first_Stack(call(reg_67, reg_68));
    set(reg_1[0], cns92(), reg_71);
    reg_76 = get(reg_1[0], cns16());
    reg_77 = newStack();
    push_Stack(reg_77, cns93());
    reg_80 = first_Stack(call(reg_76, reg_77));
    set(reg_1[0], cns94(), reg_80);
    reg_85 = get(reg_1[0], cns92());
    reg_87 = get(reg_85, cns13());
    reg_88 = newStack();
    push_Stack(reg_88, reg_85);
    push_Stack(reg_88, cns95());
    reg_91 = first_Stack(call(reg_87, reg_88));
    set(reg_1[0], cns96(), reg_91);
    reg_96 = get(reg_1[0], cns81());
    reg_98 = get(reg_96, cns13());
    reg_99 = newStack();
    push_Stack(reg_99, reg_96);
    push_Stack(reg_99, cns97());
    reg_102 = first_Stack(call(reg_98, reg_99));
    set(reg_1[0], cns98(), reg_102);
    reg_107 = get(reg_1[0], cns94());
    reg_109 = get(reg_107, cns13());
    reg_110 = newStack();
    push_Stack(reg_110, reg_107);
    push_Stack(reg_110, cns99());
    reg_113 = first_Stack(call(reg_109, reg_110));
    set(reg_1[0], cns100(), reg_113);
    reg_118 = get(reg_1[0], cns79());
    reg_120 = get(reg_118, cns13());
    reg_121 = newStack();
    push_Stack(reg_121, reg_118);
    push_Stack(reg_121, cns75());
    reg_124 = first_Stack(call(reg_120, reg_121));
    set(reg_1[0], cns101(), reg_124);
    reg_129 = get(reg_1[0], cns83());
    reg_131 = get(reg_129, cns13());
    reg_132 = newStack();
    push_Stack(reg_132, reg_129);
    push_Stack(reg_132, cns70());
    reg_135 = first_Stack(call(reg_131, reg_132));
    set(reg_1[0], cns102(), reg_135);
    reg_140 = get(reg_1[0], cns85());
    reg_142 = get(reg_140, cns13());
    reg_143 = newStack();
    push_Stack(reg_143, reg_140);
    push_Stack(reg_143, cns103());
    reg_146 = first_Stack(call(reg_142, reg_143));
    set(reg_1[0], cns104(), reg_146);
    reg_151 = get(reg_1[0], cns85());
    reg_153 = get(reg_151, cns13());
    reg_154 = newStack();
    push_Stack(reg_154, reg_151);
    push_Stack(reg_154, cns42());
    reg_157 = first_Stack(call(reg_153, reg_154));
    set(reg_1[0], cns105(), reg_157);
    reg_162 = get(reg_1[0], cns83());
    reg_164 = get(reg_162, cns23());
    reg_165 = newStack();
    push_Stack(reg_165, reg_162);
    push_Stack(reg_165, cns106());
    reg_167 = newTable();
    reg_168 = cns5();
    set(reg_167, reg_168, get(reg_1[0], cns100()));
    push_Stack(reg_165, reg_167);
    reg_172 = newTable();
    reg_173 = cns5();
    set(reg_172, reg_173, get(reg_1[0], cns102()));
    push_Stack(reg_165, reg_172);
    reg_178 = first_Stack(call(reg_164, reg_165));
    set(reg_1[0], cns72(), reg_178);
    reg_183 = get(reg_1[0], cns85());
    reg_185 = get(reg_183, cns23());
    reg_186 = newStack();
    push_Stack(reg_186, reg_183);
    push_Stack(reg_186, cns75());
    reg_188 = newTable();
    reg_189 = cns5();
    set(reg_188, reg_189, get(reg_1[0], cns101()));
    push_Stack(reg_186, reg_188);
    reg_193 = newTable();
    reg_194 = cns5();
    set(reg_193, reg_194, get(reg_1[0], cns96()));
    push_Stack(reg_186, reg_193);
    reg_199 = first_Stack(call(reg_185, reg_186));
    set(reg_1[0], cns76(), reg_199);
    reg_204 = get(reg_1[0], cns85());
    reg_206 = get(reg_204, cns23());
    reg_207 = newStack();
    push_Stack(reg_207, reg_204);
    push_Stack(reg_207, cns70());
    reg_209 = newTable();
    reg_210 = cns5();
    set(reg_209, reg_210, get(reg_1[0], cns102()));
    push_Stack(reg_207, reg_209);
    reg_214 = newTable();
    reg_215 = cns5();
    set(reg_214, reg_215, get(reg_1[0], cns96()));
    push_Stack(reg_207, reg_214);
    reg_220 = first_Stack(call(reg_206, reg_207));
    set(reg_1[0], cns73(), reg_220);
    reg_225 = get(reg_1[0], cns85());
    reg_227 = get(reg_225, cns23());
    reg_228 = newStack();
    push_Stack(reg_228, reg_225);
    push_Stack(reg_228, cns107());
    push_Stack(reg_228, newTable());
    reg_231 = newTable();
    reg_232 = cns5();
    set(reg_231, reg_232, get(reg_1[0], cns96()));
    push_Stack(reg_228, reg_231);
    reg_237 = first_Stack(call(reg_227, reg_228));
    set(reg_1[0], cns108(), reg_237);
    reg_242 = get(reg_1[0], cns85());
    reg_244 = get(reg_242, cns23());
    reg_245 = newStack();
    push_Stack(reg_245, reg_242);
    push_Stack(reg_245, cns109());
    push_Stack(reg_245, newTable());
    reg_248 = newTable();
    reg_249 = cns5();
    set(reg_248, reg_249, get(reg_1[0], cns96()));
    push_Stack(reg_245, reg_248);
    reg_254 = first_Stack(call(reg_244, reg_245));
    set(reg_1[0], cns110(), reg_254);
    reg_259 = get(reg_1[0], cns85());
    reg_261 = get(reg_259, cns23());
    reg_262 = newStack();
    push_Stack(reg_262, reg_259);
    push_Stack(reg_262, cns111());
    push_Stack(reg_262, newTable());
    reg_265 = newTable();
    reg_266 = cns5();
    set(reg_265, reg_266, get(reg_1[0], cns96()));
    push_Stack(reg_262, reg_265);
    reg_271 = first_Stack(call(reg_261, reg_262));
    set(reg_1[0], cns112(), reg_271);
    reg_276 = get(reg_1[0], cns85());
    reg_278 = get(reg_276, cns23());
    reg_279 = newStack();
    push_Stack(reg_279, reg_276);
    push_Stack(reg_279, cns113());
    reg_281 = newTable();
    reg_282 = cns5();
    set(reg_281, reg_282, get(reg_1[0], cns96()));
    push_Stack(reg_279, reg_281);
    reg_286 = newTable();
    reg_287 = cns5();
    set(reg_286, reg_287, get(reg_1[0], cns98()));
    push_Stack(reg_279, reg_286);
    reg_292 = first_Stack(call(reg_278, reg_279));
    set(reg_1[0], cns114(), reg_292);
    reg_297 = get(reg_1[0], cns85());
    reg_299 = get(reg_297, cns23());
    reg_300 = newStack();
    push_Stack(reg_300, reg_297);
    push_Stack(reg_300, cns115());
    reg_302 = newTable();
    reg_303 = cns5();
    set(reg_302, reg_303, get(reg_1[0], cns105()));
    push_Stack(reg_300, reg_302);
    reg_307 = newTable();
    reg_308 = cns5();
    set(reg_307, reg_308, get(reg_1[0], cns96()));
    push_Stack(reg_300, reg_307);
    reg_313 = first_Stack(call(reg_299, reg_300));
    set(reg_1[0], cns116(), reg_313);
    reg_318 = get(reg_1[0], cns85());
    reg_320 = get(reg_318, cns23());
    reg_321 = newStack();
    push_Stack(reg_321, reg_318);
    push_Stack(reg_321, cns50());
    reg_323 = newTable();
    reg_324 = cns5();
    set(reg_323, reg_324, get(reg_1[0], cns96()));
    reg_328 = cns41();
    set(reg_323, reg_328, get(reg_1[0], cns104()));
    push_Stack(reg_321, reg_323);
    reg_332 = newTable();
    reg_333 = cns5();
    set(reg_332, reg_333, get(reg_1[0], cns104()));
    push_Stack(reg_321, reg_332);
    reg_338 = first_Stack(call(reg_320, reg_321));
    set(reg_1[0], cns117(), reg_338);
    reg_343 = get(reg_1[0], cns85());
    reg_345 = get(reg_343, cns23());
    reg_346 = newStack();
    push_Stack(reg_346, reg_343);
    push_Stack(reg_346, cns118());
    push_Stack(reg_346, newTable());
    reg_349 = newTable();
    reg_350 = cns5();
    set(reg_349, reg_350, get(reg_1[0], cns96()));
    push_Stack(reg_346, reg_349);
    reg_355 = first_Stack(call(reg_345, reg_346));
    set(reg_1[0], cns119(), reg_355);
    reg_360 = get(reg_1[0], cns85());
    reg_362 = get(reg_360, cns23());
    reg_363 = newStack();
    push_Stack(reg_363, reg_360);
    push_Stack(reg_363, cns120());
    push_Stack(reg_363, newTable());
    reg_366 = newTable();
    reg_367 = cns5();
    set(reg_366, reg_367, get(reg_1[0], cns104()));
    push_Stack(reg_363, reg_366);
    reg_372 = first_Stack(call(reg_362, reg_363));
    set(reg_1[0], cns121(), reg_372);
    reg_377 = get(reg_1[0], cns85());
    reg_379 = get(reg_377, cns23());
    reg_380 = newStack();
    push_Stack(reg_380, reg_377);
    push_Stack(reg_380, cns122());
    reg_382 = newTable();
    reg_383 = cns5();
    set(reg_382, reg_383, get(reg_1[0], cns104()));
    reg_387 = cns41();
    set(reg_382, reg_387, get(reg_1[0], cns96()));
    push_Stack(reg_380, reg_382);
    push_Stack(reg_380, newTable());
    reg_393 = first_Stack(call(reg_379, reg_380));
    set(reg_1[0], cns123(), reg_393);
    reg_398 = get(reg_1[0], cns85());
    reg_400 = get(reg_398, cns23());
    reg_401 = newStack();
    push_Stack(reg_401, reg_398);
    push_Stack(reg_401, cns124());
    reg_403 = newTable();
    reg_404 = cns5();
    set(reg_403, reg_404, get(reg_1[0], cns104()));
    push_Stack(reg_401, reg_403);
    reg_408 = newTable();
    reg_409 = cns5();
    set(reg_408, reg_409, get(reg_1[0], cns96()));
    push_Stack(reg_401, reg_408);
    reg_414 = first_Stack(call(reg_400, reg_401));
    set(reg_1[0], cns125(), reg_414);
    reg_419 = get(reg_1[0], cns85());
    reg_421 = get(reg_419, cns23());
    reg_422 = newStack();
    push_Stack(reg_422, reg_419);
    push_Stack(reg_422, cns126());
    reg_424 = newTable();
    reg_425 = cns5();
    set(reg_424, reg_425, get(reg_1[0], cns104()));
    push_Stack(reg_422, reg_424);
    reg_429 = newTable();
    reg_430 = cns5();
    set(reg_429, reg_430, get(reg_1[0], cns96()));
    push_Stack(reg_422, reg_429);
    reg_435 = first_Stack(call(reg_421, reg_422));
    set(reg_1[0], cns127(), reg_435);
    reg_440 = get(reg_1[0], cns85());
    reg_442 = get(reg_440, cns23());
    reg_443 = newStack();
    push_Stack(reg_443, reg_440);
    push_Stack(reg_443, cns128());
    reg_445 = newTable();
    reg_446 = cns5();
    set(reg_445, reg_446, get(reg_1[0], cns104()));
    reg_450 = cns41();
    set(reg_445, reg_450, get(reg_1[0], cns104()));
    push_Stack(reg_443, reg_445);
    push_Stack(reg_443, newTable());
    reg_456 = first_Stack(call(reg_442, reg_443));
    set(reg_1[0], cns129(), reg_456);
    reg_461 = get(reg_1[0], cns85());
    reg_463 = get(reg_461, cns23());
    reg_464 = newStack();
    push_Stack(reg_464, reg_461);
    push_Stack(reg_464, cns130());
    reg_466 = newTable();
    reg_467 = cns5();
    set(reg_466, reg_467, get(reg_1[0], cns104()));
    push_Stack(reg_464, reg_466);
    reg_471 = newTable();
    reg_472 = cns5();
    set(reg_471, reg_472, get(reg_1[0], cns104()));
    push_Stack(reg_464, reg_471);
    reg_477 = first_Stack(call(reg_463, reg_464));
    set(reg_1[0], cns131(), reg_477);
    reg_482 = get(reg_1[0], cns85());
    reg_484 = get(reg_482, cns23());
    reg_485 = newStack();
    push_Stack(reg_485, reg_482);
    push_Stack(reg_485, cns132());
    push_Stack(reg_485, newTable());
    reg_488 = newTable();
    reg_489 = cns5();
    set(reg_488, reg_489, get(reg_1[0], cns96()));
    push_Stack(reg_485, reg_488);
    reg_494 = first_Stack(call(reg_484, reg_485));
    set(reg_1[0], cns133(), reg_494);
    reg_499 = get(reg_1[0], cns85());
    reg_501 = get(reg_499, cns23());
    reg_502 = newStack();
    push_Stack(reg_502, reg_499);
    push_Stack(reg_502, cns134());
    reg_504 = newTable();
    reg_505 = cns5();
    set(reg_504, reg_505, get(reg_1[0], cns96()));
    reg_509 = cns41();
    set(reg_504, reg_509, get(reg_1[0], cns96()));
    reg_513 = cns135();
    set(reg_504, reg_513, get(reg_1[0], cns104()));
    push_Stack(reg_502, reg_504);
    push_Stack(reg_502, newTable());
    reg_519 = first_Stack(call(reg_501, reg_502));
    set(reg_1[0], cns136(), reg_519);
    reg_524 = get(reg_1[0], cns85());
    reg_526 = get(reg_524, cns23());
    reg_527 = newStack();
    push_Stack(reg_527, reg_524);
    push_Stack(reg_527, cns137());
    reg_529 = newTable();
    reg_530 = cns5();
    set(reg_529, reg_530, get(reg_1[0], cns96()));
    reg_534 = cns41();
    set(reg_529, reg_534, get(reg_1[0], cns96()));
    push_Stack(reg_527, reg_529);
    reg_538 = newTable();
    reg_539 = cns5();
    set(reg_538, reg_539, get(reg_1[0], cns96()));
    push_Stack(reg_527, reg_538);
    reg_544 = first_Stack(call(reg_526, reg_527));
    set(reg_1[0], cns138(), reg_544);
    reg_549 = get(reg_1[0], cns85());
    reg_551 = get(reg_549, cns23());
    reg_552 = newStack();
    push_Stack(reg_552, reg_549);
    push_Stack(reg_552, cns139());
    reg_554 = newTable();
    reg_555 = cns5();
    set(reg_554, reg_555, get(reg_1[0], cns96()));
    reg_559 = cns41();
    set(reg_554, reg_559, get(reg_1[0], cns96()));
    reg_563 = cns135();
    set(reg_554, reg_563, get(reg_1[0], cns96()));
    push_Stack(reg_552, reg_554);
    push_Stack(reg_552, newTable());
    reg_569 = first_Stack(call(reg_551, reg_552));
    set(reg_1[0], cns140(), reg_569);
    reg_572 = newTable();
    reg_573 = cns141();
    reg_576 = get(reg_1[0], cns85());
    reg_578 = get(reg_576, cns23());
    reg_579 = newStack();
    push_Stack(reg_579, reg_576);
    push_Stack(reg_579, cns142());
    reg_581 = newTable();
    reg_582 = cns5();
    set(reg_581, reg_582, get(reg_1[0], cns96()));
    reg_586 = cns41();
    set(reg_581, reg_586, get(reg_1[0], cns96()));
    push_Stack(reg_579, reg_581);
    reg_590 = newTable();
    reg_591 = cns5();
    set(reg_590, reg_591, get(reg_1[0], cns96()));
    push_Stack(reg_579, reg_590);
    set(reg_572, reg_573, first_Stack(call(reg_578, reg_579)));
    reg_597 = cns143();
    reg_600 = get(reg_1[0], cns85());
    reg_602 = get(reg_600, cns23());
    reg_603 = newStack();
    push_Stack(reg_603, reg_600);
    push_Stack(reg_603, cns144());
    reg_605 = newTable();
    reg_606 = cns5();
    set(reg_605, reg_606, get(reg_1[0], cns96()));
    reg_610 = cns41();
    set(reg_605, reg_610, get(reg_1[0], cns96()));
    push_Stack(reg_603, reg_605);
    reg_614 = newTable();
    reg_615 = cns5();
    set(reg_614, reg_615, get(reg_1[0], cns96()));
    push_Stack(reg_603, reg_614);
    set(reg_572, reg_597, first_Stack(call(reg_602, reg_603)));
    reg_621 = cns145();
    reg_624 = get(reg_1[0], cns85());
    reg_626 = get(reg_624, cns23());
    reg_627 = newStack();
    push_Stack(reg_627, reg_624);
    push_Stack(reg_627, cns146());
    reg_629 = newTable();
    reg_630 = cns5();
    set(reg_629, reg_630, get(reg_1[0], cns96()));
    reg_634 = cns41();
    set(reg_629, reg_634, get(reg_1[0], cns96()));
    push_Stack(reg_627, reg_629);
    reg_638 = newTable();
    reg_639 = cns5();
    set(reg_638, reg_639, get(reg_1[0], cns96()));
    push_Stack(reg_627, reg_638);
    set(reg_572, reg_621, first_Stack(call(reg_626, reg_627)));
    reg_645 = cns147();
    reg_648 = get(reg_1[0], cns85());
    reg_650 = get(reg_648, cns23());
    reg_651 = newStack();
    push_Stack(reg_651, reg_648);
    push_Stack(reg_651, cns148());
    reg_653 = newTable();
    reg_654 = cns5();
    set(reg_653, reg_654, get(reg_1[0], cns96()));
    reg_658 = cns41();
    set(reg_653, reg_658, get(reg_1[0], cns96()));
    push_Stack(reg_651, reg_653);
    reg_662 = newTable();
    reg_663 = cns5();
    set(reg_662, reg_663, get(reg_1[0], cns96()));
    push_Stack(reg_651, reg_662);
    set(reg_572, reg_645, first_Stack(call(reg_650, reg_651)));
    reg_669 = cns149();
    reg_672 = get(reg_1[0], cns85());
    reg_674 = get(reg_672, cns23());
    reg_675 = newStack();
    push_Stack(reg_675, reg_672);
    push_Stack(reg_675, cns148());
    reg_677 = newTable();
    reg_678 = cns5();
    set(reg_677, reg_678, get(reg_1[0], cns96()));
    reg_682 = cns41();
    set(reg_677, reg_682, get(reg_1[0], cns96()));
    push_Stack(reg_675, reg_677);
    reg_686 = newTable();
    reg_687 = cns5();
    set(reg_686, reg_687, get(reg_1[0], cns96()));
    push_Stack(reg_675, reg_686);
    set(reg_572, reg_669, first_Stack(call(reg_674, reg_675)));
    reg_693 = cns150();
    reg_696 = get(reg_1[0], cns85());
    reg_698 = get(reg_696, cns23());
    reg_699 = newStack();
    push_Stack(reg_699, reg_696);
    push_Stack(reg_699, cns37());
    reg_701 = newTable();
    reg_702 = cns5();
    set(reg_701, reg_702, get(reg_1[0], cns96()));
    reg_706 = cns41();
    set(reg_701, reg_706, get(reg_1[0], cns96()));
    push_Stack(reg_699, reg_701);
    reg_710 = newTable();
    reg_711 = cns5();
    set(reg_710, reg_711, get(reg_1[0], cns96()));
    push_Stack(reg_699, reg_710);
    set(reg_572, reg_693, first_Stack(call(reg_698, reg_699)));
    reg_717 = cns151();
    reg_720 = get(reg_1[0], cns85());
    reg_722 = get(reg_720, cns23());
    reg_723 = newStack();
    push_Stack(reg_723, reg_720);
    push_Stack(reg_723, cns152());
    reg_725 = newTable();
    reg_726 = cns5();
    set(reg_725, reg_726, get(reg_1[0], cns96()));
    reg_730 = cns41();
    set(reg_725, reg_730, get(reg_1[0], cns96()));
    push_Stack(reg_723, reg_725);
    reg_734 = newTable();
    reg_735 = cns5();
    set(reg_734, reg_735, get(reg_1[0], cns96()));
    push_Stack(reg_723, reg_734);
    set(reg_572, reg_717, first_Stack(call(reg_722, reg_723)));
    reg_741 = cns153();
    reg_744 = get(reg_1[0], cns85());
    reg_746 = get(reg_744, cns23());
    reg_747 = newStack();
    push_Stack(reg_747, reg_744);
    push_Stack(reg_747, cns154());
    reg_749 = newTable();
    reg_750 = cns5();
    set(reg_749, reg_750, get(reg_1[0], cns96()));
    reg_754 = cns41();
    set(reg_749, reg_754, get(reg_1[0], cns96()));
    push_Stack(reg_747, reg_749);
    reg_758 = newTable();
    reg_759 = cns5();
    set(reg_758, reg_759, get(reg_1[0], cns96()));
    push_Stack(reg_747, reg_758);
    set(reg_572, reg_741, first_Stack(call(reg_746, reg_747)));
    reg_765 = cns155();
    reg_768 = get(reg_1[0], cns85());
    reg_770 = get(reg_768, cns23());
    reg_771 = newStack();
    push_Stack(reg_771, reg_768);
    push_Stack(reg_771, cns156());
    reg_773 = newTable();
    reg_774 = cns5();
    set(reg_773, reg_774, get(reg_1[0], cns96()));
    reg_778 = cns41();
    set(reg_773, reg_778, get(reg_1[0], cns96()));
    push_Stack(reg_771, reg_773);
    reg_782 = newTable();
    reg_783 = cns5();
    set(reg_782, reg_783, get(reg_1[0], cns96()));
    push_Stack(reg_771, reg_782);
    set(reg_572, reg_765, first_Stack(call(reg_770, reg_771)));
    reg_789 = cns157();
    reg_792 = get(reg_1[0], cns85());
    reg_794 = get(reg_792, cns23());
    reg_795 = newStack();
    push_Stack(reg_795, reg_792);
    push_Stack(reg_795, cns158());
    reg_797 = newTable();
    reg_798 = cns5();
    set(reg_797, reg_798, get(reg_1[0], cns96()));
    reg_802 = cns41();
    set(reg_797, reg_802, get(reg_1[0], cns96()));
    push_Stack(reg_795, reg_797);
    reg_806 = newTable();
    reg_807 = cns5();
    set(reg_806, reg_807, get(reg_1[0], cns96()));
    push_Stack(reg_795, reg_806);
    set(reg_572, reg_789, first_Stack(call(reg_794, reg_795)));
    reg_813 = cns159();
    reg_816 = get(reg_1[0], cns85());
    reg_818 = get(reg_816, cns23());
    reg_819 = newStack();
    push_Stack(reg_819, reg_816);
    push_Stack(reg_819, cns160());
    reg_821 = newTable();
    reg_822 = cns5();
    set(reg_821, reg_822, get(reg_1[0], cns96()));
    reg_826 = cns41();
    set(reg_821, reg_826, get(reg_1[0], cns96()));
    push_Stack(reg_819, reg_821);
    reg_830 = newTable();
    reg_831 = cns5();
    set(reg_830, reg_831, get(reg_1[0], cns96()));
    push_Stack(reg_819, reg_830);
    set(reg_572, reg_813, first_Stack(call(reg_818, reg_819)));
    reg_837 = cns161();
    reg_840 = get(reg_1[0], cns85());
    reg_842 = get(reg_840, cns23());
    reg_843 = newStack();
    push_Stack(reg_843, reg_840);
    push_Stack(reg_843, cns162());
    reg_845 = newTable();
    reg_846 = cns5();
    set(reg_845, reg_846, get(reg_1[0], cns96()));
    reg_850 = cns41();
    set(reg_845, reg_850, get(reg_1[0], cns96()));
    push_Stack(reg_843, reg_845);
    reg_854 = newTable();
    reg_855 = cns5();
    set(reg_854, reg_855, get(reg_1[0], cns96()));
    push_Stack(reg_843, reg_854);
    set(reg_572, reg_837, first_Stack(call(reg_842, reg_843)));
    set(reg_1[0], cns163(), reg_572);
    reg_863 = newTable();
    reg_864 = cns164();
    reg_867 = get(reg_1[0], cns85());
    reg_869 = get(reg_867, cns23());
    reg_870 = newStack();
    push_Stack(reg_870, reg_867);
    push_Stack(reg_870, cns164());
    reg_872 = newTable();
    reg_873 = cns5();
    set(reg_872, reg_873, get(reg_1[0], cns96()));
    push_Stack(reg_870, reg_872);
    reg_877 = newTable();
    reg_878 = cns5();
    set(reg_877, reg_878, get(reg_1[0], cns96()));
    push_Stack(reg_870, reg_877);
    set(reg_863, reg_864, first_Stack(call(reg_869, reg_870)));
    reg_884 = cns143();
    reg_887 = get(reg_1[0], cns85());
    reg_889 = get(reg_887, cns23());
    reg_890 = newStack();
    push_Stack(reg_890, reg_887);
    push_Stack(reg_890, cns165());
    reg_892 = newTable();
    reg_893 = cns5();
    set(reg_892, reg_893, get(reg_1[0], cns96()));
    push_Stack(reg_890, reg_892);
    reg_897 = newTable();
    reg_898 = cns5();
    set(reg_897, reg_898, get(reg_1[0], cns96()));
    push_Stack(reg_890, reg_897);
    set(reg_863, reg_884, first_Stack(call(reg_889, reg_890)));
    reg_904 = cns166();
    reg_907 = get(reg_1[0], cns85());
    reg_909 = get(reg_907, cns23());
    reg_910 = newStack();
    push_Stack(reg_910, reg_907);
    push_Stack(reg_910, cns167());
    reg_912 = newTable();
    reg_913 = cns5();
    set(reg_912, reg_913, get(reg_1[0], cns96()));
    push_Stack(reg_910, reg_912);
    reg_917 = newTable();
    reg_918 = cns5();
    set(reg_917, reg_918, get(reg_1[0], cns96()));
    push_Stack(reg_910, reg_917);
    set(reg_863, reg_904, first_Stack(call(reg_909, reg_910)));
    set(reg_1[0], cns168(), reg_863);
    reg_926 = newStack();
    return reg_926;
  }
  var mod51 = new Cobre.Module({
    "0": function$11,
  });
  var item366 = closure.build(mod51);
  var item366$new = item366.get("new");
  function lua_main (reg_0) {
    var reg_1, reg_2, reg_5, reg_8, reg_13, reg_14, reg_20, reg_21, reg_26, reg_27, reg_32, reg_33, reg_37, reg_40, reg_45, reg_46, reg_52, reg_53, reg_58, reg_59, reg_64, reg_65, reg_70, reg_71, reg_76, reg_77, reg_82, reg_83, reg_88, reg_89, reg_93, reg_98, reg_99, reg_103, reg_107, reg_111, reg_116;
    reg_1 = nil();
    reg_2 = [reg_1, reg_1];
    reg_2[0] = reg_0;
    reg_2[1] = nil();
    reg_5 = lua$function(item33$new(reg_2));
    set(reg_2[0], cns10(), reg_5);
    reg_8 = newTable();
    set(reg_2[0], cns11(), reg_8);
    reg_13 = get(reg_2[0], cns11());
    reg_14 = cns12();
    set(reg_13, reg_14, get(reg_2[0], cns11()));
    reg_20 = get(reg_2[0], cns11());
    reg_21 = cns13();
    set(reg_20, reg_21, lua$function(item72$new(reg_2)));
    reg_26 = get(reg_2[0], cns11());
    reg_27 = cns23();
    set(reg_26, reg_27, lua$function(item102$new(reg_2)));
    reg_32 = get(reg_2[0], cns11());
    reg_33 = cns21();
    set(reg_32, reg_33, lua$function(item121$new(reg_2)));
    reg_37 = lua$function(item129$new(reg_2));
    set(reg_2[0], cns16(), reg_37);
    reg_40 = newTable();
    set(reg_2[0], cns42(), reg_40);
    reg_45 = get(reg_2[0], cns42());
    reg_46 = cns12();
    set(reg_45, reg_46, get(reg_2[0], cns42()));
    reg_52 = get(reg_2[0], cns42());
    reg_53 = cns14();
    set(reg_52, reg_53, lua$function(item136$new(reg_2)));
    reg_58 = get(reg_2[0], cns42());
    reg_59 = cns43();
    set(reg_58, reg_59, lua$function(item154$new(reg_2)));
    reg_64 = get(reg_2[0], cns42());
    reg_65 = cns46();
    set(reg_64, reg_65, lua$function(item170$new(reg_2)));
    reg_70 = get(reg_2[0], cns42());
    reg_71 = cns48();
    set(reg_70, reg_71, lua$function(item178$new(reg_2)));
    reg_76 = get(reg_2[0], cns42());
    reg_77 = cns50();
    set(reg_76, reg_77, lua$function(item187$new(reg_2)));
    reg_82 = get(reg_2[0], cns42());
    reg_83 = cns51();
    set(reg_82, reg_83, lua$function(item198$new(reg_2)));
    reg_88 = get(reg_2[0], cns42());
    reg_89 = cns56();
    set(reg_88, reg_89, lua$function(item206$new(reg_2)));
    reg_93 = lua$function(item215$new(reg_2));
    set(reg_2[0], cns47(), reg_93);
    reg_98 = get(reg_2[0], cns42());
    reg_99 = cns20();
    set(reg_98, reg_99, lua$function(item223$new(reg_2)));
    reg_103 = lua$function(item244$new(reg_2));
    set(reg_2[0], cns65(), reg_103);
    reg_107 = lua$function(item254$new(reg_2));
    set(reg_2[0], cns69(), reg_107);
    reg_111 = lua$function(item268$new(reg_2));
    set(reg_2[0], cns77(), reg_111);
    reg_2[1] = lua$function(item366$new(reg_2));
    reg_116 = newStack();
    return reg_116;
  }
  var get_global = lua.get("get_global");
  function main () {
    reg_1 = lua_main(get_global());
    return;
  }
  var mod1 = new Cobre.Module({
    "lua_main": lua_main,
    "main": main,
  });
  return mod1;
});
Cobre.$export("culua.codegen", function () {
  var lua = Cobre.$import("lua");
  var nil = lua.get("nil");
  var mod2 = new Cobre.Module({
    "0": Cobre.Any,
  });
  var culua_helpers = Cobre.$import("culua.helpers");
  var culua_helpers$lua_main = culua_helpers.get("lua_main");
  var culua_basics = Cobre.$import("culua.basics");
  var culua_basics$lua_main = culua_basics.get("lua_main");
  var string = lua.get("string");
  var cns1 = Cobre.Lazy(function () { return string("_CU_VERSION")});
  var get = lua.get("get");
  var tobool = lua.get("tobool");
  var newTable = lua.get("newTable");
  var cns2 = Cobre.Lazy(function () { return string("max")});
  var closure = lua.get("closure");
  var tp1 = new Cobre.Record([Cobre.Any]);
  var mod4 = new Cobre.Module({
    "0": tp1,
  });
  var next_Stack = lua.get("next\x1dStack");
  var ge = lua.get("ge");
  var newStack = lua.get("newStack");
  var push_Stack = lua.get("push\x1dStack");
  function culua_codegen$function (reg_0, reg_1) {
    var reg_4, reg_5, reg_8, reg_9, reg_10;
    var goto_11=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    goto_11 = !tobool(ge(reg_4, reg_5));
    if (!goto_11) {
      reg_8 = newStack();
      push_Stack(reg_8, reg_4);
      return reg_8;
    }
    if ((goto_11 || false)) {
      goto_11 = false;
      reg_9 = newStack();
      push_Stack(reg_9, reg_5);
      return reg_9;
    }
    reg_10 = newStack();
    return reg_10;
  }
  var mod3 = new Cobre.Module({
    "0": culua_codegen$function,
  });
  var item30 = closure.build(mod3);
  var item30$new = item30.get("new");
  var lua$function = lua.get("function");
  var set = lua.get("set");
  var cns3 = Cobre.Lazy(function () { return string("math")});
  var cns4 = Cobre.Lazy(function () { return string("table")});
  var cns5 = Cobre.Lazy(function () { return string("move")});
  var mod6 = new Cobre.Module({
    "0": tp1,
  });
  var not = lua.get("not");
  var cns6 = Cobre.Lazy(function () { return string("error")});
  var cns7 = Cobre.Lazy(function () { return string("cannot move into same table")});
  var call = lua.get("call");
  var lua$int = lua.get("int");
  var cns8 = Cobre.Lazy(function () { return lua$int(1)});
  var cns9 = Cobre.Lazy(function () { return lua$int(0)});
  var lt = lua.get("lt");
  var gt = lua.get("gt");
  var add = lua.get("add");
  function table_move (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_8, reg_13, reg_14, reg_17, reg_18, reg_19, reg_21, reg_31;
    var goto_29=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_7 = next_Stack(reg_0);
    reg_8 = next_Stack(reg_0);
    if (tobool(not(reg_8))) {
      reg_13 = get(reg_1[0], cns6());
      reg_14 = newStack();
      push_Stack(reg_14, cns7());
      reg_16 = call(reg_13, reg_14);
    }
    reg_17 = reg_5;
    reg_18 = reg_6;
    reg_19 = cns8();
    reg_21 = lt(reg_19, cns9());
    loop_1: while (true) {
      goto_29 = tobool(reg_21);
      if (!goto_29) {
        if (tobool(gt(reg_17, reg_18))) break loop_1;
      }
      if ((goto_29 || false)) {
        goto_29 = false;
        if (tobool(lt(reg_17, reg_18))) break loop_1;
      }
      set(reg_8, reg_7, get(reg_4, reg_17));
      reg_7 = add(reg_7, cns8());
      reg_17 = add(reg_17, reg_19);
    }
    reg_31 = newStack();
    return reg_31;
  }
  var mod5 = new Cobre.Module({
    "0": table_move,
  });
  var item51 = closure.build(mod5);
  var item51$new = item51.get("new");
  var cns10 = Cobre.Lazy(function () { return string("Function")});
  var cns11 = Cobre.Lazy(function () { return string("create_upval_info")});
  var mod8 = new Cobre.Module({
    "0": tp1,
  });
  var cns12 = Cobre.Lazy(function () { return string("upval_module")});
  var cns13 = Cobre.Lazy(function () { return string("module")});
  var first_Stack = lua.get("first\x1dStack");
  var cns14 = Cobre.Lazy(function () { return string("base")});
  var cns15 = Cobre.Lazy(function () { return string("record_m")});
  var cns16 = Cobre.Lazy(function () { return string("items")});
  var cns17 = Cobre.Lazy(function () { return string("argument")});
  var cns18 = Cobre.Lazy(function () { return string("upval_type")});
  var cns19 = Cobre.Lazy(function () { return string("type")});
  var cns20 = Cobre.Lazy(function () { return string("")});
  var cns21 = Cobre.Lazy(function () { return string("upval_new_fn")});
  var cns22 = Cobre.Lazy(function () { return string("func")});
  var cns23 = Cobre.Lazy(function () { return string("new")});
  var cns24 = Cobre.Lazy(function () { return string("upval_new_call")});
  var cns25 = Cobre.Lazy(function () { return string("inst")});
  var cns26 = Cobre.Lazy(function () { return string("parent")});
  var cns27 = Cobre.Lazy(function () { return string("insert")});
  var cns28 = Cobre.Lazy(function () { return string("name")});
  var cns29 = Cobre.Lazy(function () { return string("0")});
  var cns30 = Cobre.Lazy(function () { return string("tp")});
  var cns31 = Cobre.Lazy(function () { return string("ins")});
  var cns32 = Cobre.Lazy(function () { return string("id")});
  var cns33 = Cobre.Lazy(function () { return string("upval_arg")});
  var cns34 = Cobre.Lazy(function () { return string("parent_upval_getter")});
  var cns35 = Cobre.Lazy(function () { return string("get0")});
  var cns36 = Cobre.Lazy(function () { return string("upval_accessors")});
  function Function_create_upval_info (reg_0, reg_1) {
    var reg_4, reg_5, reg_13, reg_14, reg_23, reg_29, reg_31, reg_33, reg_34, reg_38, reg_40, reg_42, reg_43, reg_46, reg_47, reg_52, reg_54, reg_55, reg_56, reg_57, reg_68, reg_73, reg_74, reg_77, reg_86, reg_87, reg_99, reg_100, reg_106, reg_108, reg_110, reg_111, reg_113, reg_114, reg_117, reg_123;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = cns12();
    set(reg_4, reg_5, first_Stack(call(get(reg_1[0], cns13()), newStack())));
    reg_13 = get(reg_4, cns12());
    reg_14 = cns14();
    set(reg_13, reg_14, get(reg_1[0], cns15()));
    reg_23 = first_Stack(call(get(reg_1[0], cns13()), newStack()));
    set(reg_23, cns16(), newTable());
    set(get(reg_4, cns12()), cns17(), reg_23);
    reg_29 = cns18();
    reg_31 = get(reg_4, cns12());
    reg_33 = get(reg_31, cns19());
    reg_34 = newStack();
    push_Stack(reg_34, reg_31);
    push_Stack(reg_34, cns20());
    set(reg_4, reg_29, first_Stack(call(reg_33, reg_34)));
    reg_38 = cns21();
    reg_40 = get(reg_4, cns12());
    reg_42 = get(reg_40, cns22());
    reg_43 = newStack();
    push_Stack(reg_43, reg_40);
    push_Stack(reg_43, cns23());
    push_Stack(reg_43, newTable());
    reg_46 = newTable();
    reg_47 = cns8();
    set(reg_46, reg_47, get(reg_4, cns18()));
    push_Stack(reg_43, reg_46);
    set(reg_4, reg_38, first_Stack(call(reg_42, reg_43)));
    reg_52 = cns24();
    reg_54 = get(reg_4, cns25());
    reg_55 = newStack();
    push_Stack(reg_55, reg_4);
    reg_56 = newTable();
    reg_57 = cns8();
    set(reg_56, reg_57, get(reg_4, cns21()));
    push_Stack(reg_55, reg_56);
    set(reg_4, reg_52, first_Stack(call(reg_54, reg_55)));
    if (tobool(get(reg_4, cns26()))) {
      reg_68 = get(get(reg_4, cns26()), cns18());
      reg_73 = get(get(reg_1[0], cns4()), cns27());
      reg_74 = newStack();
      push_Stack(reg_74, get(reg_23, cns16()));
      reg_77 = newTable();
      set(reg_77, cns28(), cns29());
      set(reg_77, cns30(), reg_68);
      push_Stack(reg_74, reg_77);
      reg_81 = call(reg_73, reg_74);
      reg_86 = get(get(reg_1[0], cns4()), cns27());
      reg_87 = newStack();
      push_Stack(reg_87, get(get(reg_4, cns21()), cns31()));
      push_Stack(reg_87, get(reg_68, cns32()));
      reg_94 = call(reg_86, reg_87);
      reg_99 = get(get(reg_1[0], cns4()), cns27());
      reg_100 = newStack();
      push_Stack(reg_100, get(reg_4, cns24()));
      push_Stack(reg_100, get(reg_4, cns33()));
      reg_105 = call(reg_99, reg_100);
      reg_106 = cns34();
      reg_108 = get(reg_4, cns12());
      reg_110 = get(reg_108, cns22());
      reg_111 = newStack();
      push_Stack(reg_111, reg_108);
      push_Stack(reg_111, cns35());
      reg_113 = newTable();
      reg_114 = cns8();
      set(reg_113, reg_114, get(reg_4, cns18()));
      push_Stack(reg_111, reg_113);
      reg_117 = newTable();
      set(reg_117, cns8(), reg_68);
      push_Stack(reg_111, reg_117);
      set(reg_4, reg_106, first_Stack(call(reg_110, reg_111)));
    }
    set(reg_4, cns36(), newTable());
    reg_123 = newStack();
    return reg_123;
  }
  var mod7 = new Cobre.Module({
    "0": Function_create_upval_info,
  });
  var item85 = closure.build(mod7);
  var item85$new = item85.get("new");
  var cns37 = Cobre.Lazy(function () { return string("build_upvals")});
  var mod10 = new Cobre.Module({
    "0": tp1,
  });
  var cns38 = Cobre.Lazy(function () { return string("code")});
  var cns39 = Cobre.Lazy(function () { return string("upval_level_regs")});
  var cns40 = Cobre.Lazy(function () { return string("level")});
  var cns41 = Cobre.Lazy(function () { return lua$int(2)});
  var cns42 = Cobre.Lazy(function () { return string("nil_f")});
  var cns43 = Cobre.Lazy(function () { return string("ipairs")});
  var cns44 = Cobre.Lazy(function () { return string("upvals")});
  var eq = lua.get("eq");
  var cns45 = Cobre.Lazy(function () { return string("upval_id")});
  var cns46 = Cobre.Lazy(function () { return string("tostring")});
  var cns47 = Cobre.Lazy(function () { return string("any_t")});
  var length = lua.get("length");
  function Function_build_upvals (reg_0, reg_1) {
    var reg_4, reg_10, reg_12, reg_15, reg_16, reg_18, reg_25, reg_27, reg_33, reg_38, reg_39, reg_40, reg_41, reg_48, reg_56, reg_57, reg_58, reg_59, reg_64, reg_67, reg_68, reg_71, reg_72, reg_73, reg_74, reg_75, reg_76, reg_78, reg_83, reg_88, reg_89, reg_90, reg_91, reg_94, reg_95, reg_98, reg_107, reg_108, reg_123, reg_124, reg_132, reg_133, reg_144;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_10 = get(get(get(reg_4, cns12()), cns17()), cns16());
    reg_12 = get(reg_4, cns38());
    set(reg_4, cns38(), newTable());
    reg_15 = cns39();
    reg_16 = newTable();
    reg_18 = get(reg_4, cns40());
    set(reg_16, reg_18, get(reg_4, cns24()));
    set(reg_4, reg_15, reg_16);
    if (tobool(get(reg_4, cns26()))) {
      reg_25 = get(reg_4, cns33());
      reg_27 = get(reg_4, cns39());
      set(reg_27, get(get(reg_4, cns26()), cns40()), reg_25);
      reg_33 = get(reg_4, cns26());
      loop_2: while (tobool(get(reg_33, cns26()))) {
        reg_38 = get(reg_4, cns25());
        reg_39 = newStack();
        push_Stack(reg_39, reg_4);
        reg_40 = newTable();
        reg_41 = cns8();
        set(reg_40, reg_41, get(reg_33, cns34()));
        set(reg_40, cns41(), reg_25);
        push_Stack(reg_39, reg_40);
        reg_25 = first_Stack(call(reg_38, reg_39));
        reg_48 = get(reg_4, cns39());
        set(reg_48, get(get(reg_33, cns26()), cns40()), reg_25);
        reg_33 = get(reg_33, cns26());
      }
    }
    reg_56 = get(reg_4, cns25());
    reg_57 = newStack();
    push_Stack(reg_57, reg_4);
    reg_58 = newTable();
    reg_59 = cns8();
    set(reg_58, reg_59, get(reg_1[0], cns42()));
    push_Stack(reg_57, reg_58);
    reg_64 = first_Stack(call(reg_56, reg_57));
    reg_67 = get(reg_1[0], cns43());
    reg_68 = newStack();
    push_Stack(reg_68, get(reg_4, cns44()));
    reg_71 = call(reg_67, reg_68);
    reg_72 = next_Stack(reg_71);
    reg_73 = next_Stack(reg_71);
    reg_74 = next_Stack(reg_71);
    loop_1: while (true) {
      reg_75 = newStack();
      push_Stack(reg_75, reg_73);
      push_Stack(reg_75, reg_74);
      reg_76 = call(reg_72, reg_75);
      reg_74 = next_Stack(reg_76);
      reg_78 = next_Stack(reg_76);
      if (tobool(eq(reg_74, nil()))) break loop_1;
      reg_83 = get(reg_78, cns45());
      reg_88 = get(get(reg_1[0], cns4()), cns27());
      reg_89 = newStack();
      push_Stack(reg_89, reg_10);
      reg_90 = newTable();
      reg_91 = cns28();
      reg_94 = get(reg_1[0], cns46());
      reg_95 = newStack();
      push_Stack(reg_95, reg_83);
      set(reg_90, reg_91, first_Stack(call(reg_94, reg_95)));
      reg_98 = cns30();
      set(reg_90, reg_98, get(reg_1[0], cns47()));
      push_Stack(reg_89, reg_90);
      reg_102 = call(reg_88, reg_89);
      reg_107 = get(get(reg_1[0], cns4()), cns27());
      reg_108 = newStack();
      push_Stack(reg_108, get(get(reg_4, cns21()), cns31()));
      push_Stack(reg_108, get(get(reg_1[0], cns47()), cns32()));
      reg_118 = call(reg_107, reg_108);
      reg_123 = get(get(reg_1[0], cns4()), cns27());
      reg_124 = newStack();
      push_Stack(reg_124, get(reg_4, cns24()));
      push_Stack(reg_124, reg_64);
      reg_127 = call(reg_123, reg_124);
    }
    reg_132 = get(get(reg_1[0], cns4()), cns5());
    reg_133 = newStack();
    push_Stack(reg_133, reg_12);
    push_Stack(reg_133, cns8());
    push_Stack(reg_133, length(reg_12));
    push_Stack(reg_133, add(length(get(reg_4, cns38())), cns8()));
    push_Stack(reg_133, get(reg_4, cns38()));
    reg_143 = call(reg_132, reg_133);
    reg_144 = newStack();
    return reg_144;
  }
  var mod9 = new Cobre.Module({
    "0": Function_build_upvals,
  });
  var item104 = closure.build(mod9);
  var item104$new = item104.get("new");
  var cns48 = Cobre.Lazy(function () { return string("get_vararg")});
  var mod12 = new Cobre.Module({
    "0": tp1,
  });
  var cns49 = Cobre.Lazy(function () { return string("vararg")});
  var cns50 = Cobre.Lazy(function () { return string("cannot use '...' outside a vararg function")});
  function Function_get_vararg (reg_0, reg_1) {
    var reg_4, reg_8, reg_13, reg_14, reg_17;
    var goto_13=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    goto_13 = !tobool(get(reg_4, cns49()));
    if (!goto_13) {
      reg_8 = newStack();
      push_Stack(reg_8, get(reg_4, cns49()));
      return reg_8;
    }
    if ((goto_13 || false)) {
      goto_13 = false;
      reg_13 = get(reg_1[0], cns6());
      reg_14 = newStack();
      push_Stack(reg_14, cns50());
      reg_16 = call(reg_13, reg_14);
    }
    reg_17 = newStack();
    return reg_17;
  }
  var mod11 = new Cobre.Module({
    "0": Function_get_vararg,
  });
  var item113 = closure.build(mod11);
  var item113$new = item113.get("new");
  var cns51 = Cobre.Lazy(function () { return string("get_local")});
  var mod14 = new Cobre.Module({
    "0": tp1,
  });
  var cns52 = Cobre.Lazy(function () { return string("scopes")});
  var neg = lua.get("neg");
  var cns53 = Cobre.Lazy(function () { return string("locals")});
  var cns54 = Cobre.Lazy(function () { return string("is_upval")});
  var lua$true = lua.get("true");
  var cns55 = Cobre.Lazy(function () { return string("upval_level")});
  var cns56 = Cobre.Lazy(function () { return string("getter")});
  var cns57 = Cobre.Lazy(function () { return string("get")});
  var concat = lua.get("concat");
  var cns58 = Cobre.Lazy(function () { return string("setter")});
  var cns59 = Cobre.Lazy(function () { return string("set")});
  var append_Stack = lua.get("append\x1dStack");
  function Function_get_local (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_10, reg_11, reg_13, reg_15, reg_30, reg_38, reg_46, reg_51, reg_52, reg_53, reg_55, reg_57, reg_58, reg_61, reg_62, reg_65, reg_66, reg_72, reg_74, reg_76, reg_77, reg_80, reg_81, reg_84, reg_95, reg_96, reg_100, reg_104, reg_106, reg_108, reg_109, reg_112;
    var goto_20=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_7 = nil();
    reg_10 = length(get(reg_4, cns52()));
    reg_11 = cns8();
    reg_13 = neg(cns8());
    reg_15 = lt(reg_13, cns9());
    loop_1: while (true) {
      goto_20 = tobool(reg_15);
      if (!goto_20) {
        if (tobool(gt(reg_10, reg_11))) break loop_1;
      }
      if ((goto_20 || false)) {
        goto_20 = false;
        if (tobool(lt(reg_10, reg_11))) break loop_1;
      }
      reg_7 = get(get(get(get(reg_4, cns52()), reg_10), cns53()), reg_5);
      if (tobool(reg_7)) {
        if (true) break loop_1;
      }
      reg_10 = add(reg_10, reg_13);
    }
    if (tobool(reg_7)) {
      reg_30 = reg_6;
      if (tobool(reg_30)) {
        reg_30 = not(get(reg_7, cns54()));
      }
      if (tobool(reg_30)) {
        reg_38 = length(get(reg_4, cns44()));
        if (tobool(get(reg_4, cns26()))) {
          reg_38 = add(reg_38, cns8());
        }
        set(reg_7, cns54(), lua$true());
        reg_46 = cns55();
        set(reg_7, reg_46, get(reg_4, cns40()));
        set(reg_7, cns45(), reg_38);
        reg_51 = get(reg_4, cns36());
        reg_52 = newTable();
        reg_53 = cns56();
        reg_55 = get(reg_4, cns12());
        reg_57 = get(reg_55, cns22());
        reg_58 = newStack();
        push_Stack(reg_58, reg_55);
        push_Stack(reg_58, concat(cns57(), reg_38));
        reg_61 = newTable();
        reg_62 = cns8();
        set(reg_61, reg_62, get(reg_4, cns18()));
        push_Stack(reg_58, reg_61);
        reg_65 = newTable();
        reg_66 = cns8();
        set(reg_65, reg_66, get(reg_1[0], cns47()));
        push_Stack(reg_58, reg_65);
        set(reg_52, reg_53, first_Stack(call(reg_57, reg_58)));
        reg_72 = cns58();
        reg_74 = get(reg_4, cns12());
        reg_76 = get(reg_74, cns22());
        reg_77 = newStack();
        push_Stack(reg_77, reg_74);
        push_Stack(reg_77, concat(cns59(), reg_38));
        reg_80 = newTable();
        reg_81 = cns8();
        set(reg_80, reg_81, get(reg_4, cns18()));
        reg_84 = cns41();
        set(reg_80, reg_84, get(reg_1[0], cns47()));
        push_Stack(reg_77, reg_80);
        push_Stack(reg_77, newTable());
        set(reg_52, reg_72, first_Stack(call(reg_76, reg_77)));
        set(reg_51, reg_38, reg_52);
        reg_95 = get(get(reg_1[0], cns4()), cns27());
        reg_96 = newStack();
        push_Stack(reg_96, get(reg_4, cns44()));
        push_Stack(reg_96, reg_7);
        reg_99 = call(reg_95, reg_96);
      }
      reg_100 = newStack();
      push_Stack(reg_100, reg_7);
      return reg_100;
    }
    if (tobool(get(reg_4, cns26()))) {
      reg_104 = newStack();
      reg_106 = get(reg_4, cns26());
      reg_108 = get(reg_106, cns51());
      reg_109 = newStack();
      push_Stack(reg_109, reg_106);
      push_Stack(reg_109, reg_5);
      push_Stack(reg_109, lua$true());
      append_Stack(reg_104, call(reg_108, reg_109));
      return reg_104;
    }
    reg_112 = newStack();
    return reg_112;
  }
  var mod13 = new Cobre.Module({
    "0": Function_get_local,
  });
  var item132 = closure.build(mod13);
  var item132$new = item132.get("new");
  var cns60 = Cobre.Lazy(function () { return string("get_level_ancestor")});
  var mod16 = new Cobre.Module({
    "0": tp1,
  });
  var cns61 = Cobre.Lazy(function () { return string("Could not find ancestor of level ")});
  function Function_get_level_ancestor (reg_0, reg_1) {
    var reg_4, reg_5, reg_11, reg_16, reg_17, reg_21;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    loop_1: while (tobool(reg_4)) {
      if (tobool(eq(get(reg_4, cns40()), reg_5))) {
        reg_11 = newStack();
        push_Stack(reg_11, reg_4);
        return reg_11;
      }
      reg_4 = get(reg_4, cns26());
    }
    reg_16 = get(reg_1[0], cns6());
    reg_17 = newStack();
    push_Stack(reg_17, concat(cns61(), reg_5));
    reg_20 = call(reg_16, reg_17);
    reg_21 = newStack();
    return reg_21;
  }
  var mod15 = new Cobre.Module({
    "0": Function_get_level_ancestor,
  });
  var item140 = closure.build(mod15);
  var item140$new = item140.get("new");
  var cns62 = Cobre.Lazy(function () { return string("createFunction")});
  var mod18 = new Cobre.Module({
    "0": tp1,
  });
  var cns63 = Cobre.Lazy(function () { return string("repr")});
  var cns64 = Cobre.Lazy(function () { return string("function")});
  var cns65 = Cobre.Lazy(function () { return string("node")});
  var cns66 = Cobre.Lazy(function () { return string("stack_t")});
  var cns67 = Cobre.Lazy(function () { return string("outs")});
  var cns68 = Cobre.Lazy(function () { return string("line")});
  var cns69 = Cobre.Lazy(function () { return string("reg")});
  var cns70 = Cobre.Lazy(function () { return string("method")});
  var cns71 = Cobre.Lazy(function () { return string("names")});
  var cns72 = Cobre.Lazy(function () { return string("self")});
  var cns73 = Cobre.Lazy(function () { return string("next_f")});
  var cns74 = Cobre.Lazy(function () { return string("scope")});
  var cns75 = Cobre.Lazy(function () { return string("local")});
  var cns76 = Cobre.Lazy(function () { return string("compileBlock")});
  var cns77 = Cobre.Lazy(function () { return string("body")});
  var cns78 = Cobre.Lazy(function () { return string("return")});
  var ne = lua.get("ne");
  var cns79 = Cobre.Lazy(function () { return string("call")});
  var cns80 = Cobre.Lazy(function () { return string("stack_f")});
  var cns81 = Cobre.Lazy(function () { return string("end")});
  var cns82 = Cobre.Lazy(function () { return string("transform")});
  var cns83 = Cobre.Lazy(function () { return string("fn")});
  var cns84 = Cobre.Lazy(function () { return string("closure_m")});
  var cns85 = Cobre.Lazy(function () { return string("func_t")});
  var cns86 = Cobre.Lazy(function () { return string("func_f")});
  function Function_createFunction (reg_0, reg_1) {
    var reg_4, reg_5, reg_8, reg_9, reg_11, reg_15, reg_18, reg_23, reg_24, reg_25, reg_31, reg_36, reg_37, reg_38, reg_44, reg_47, reg_54, reg_55, reg_59, reg_60, reg_69, reg_70, reg_78, reg_79, reg_82, reg_83, reg_84, reg_85, reg_86, reg_87, reg_89, reg_94, reg_95, reg_96, reg_97, reg_103, reg_107, reg_109, reg_110, reg_111, reg_118, reg_119, reg_127, reg_130, reg_141, reg_142, reg_147, reg_149, reg_150, reg_151, reg_157, reg_158, reg_161, reg_162, reg_169, reg_170, reg_171, reg_172, reg_173, reg_182, reg_183, reg_189, reg_190, reg_192, reg_193, reg_196, reg_197, reg_202, reg_204, reg_205, reg_209, reg_210, reg_212, reg_213;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_8 = get(reg_1[0], cns38());
    reg_9 = newStack();
    reg_11 = get(reg_5, cns63());
    if (!tobool(reg_11)) {
      reg_11 = cns64();
    }
    push_Stack(reg_9, reg_11);
    reg_15 = first_Stack(call(reg_8, reg_9));
    set(reg_15, cns65(), reg_5);
    set(reg_15, cns26(), reg_4);
    reg_18 = cns40();
    set(reg_15, reg_18, add(get(reg_4, cns40()), cns8()));
    reg_23 = cns31();
    reg_24 = newTable();
    reg_25 = cns8();
    set(reg_24, reg_25, get(get(reg_1[0], cns66()), cns32()));
    reg_31 = cns41();
    set(reg_24, reg_31, get(get(reg_4, cns18()), cns32()));
    set(reg_15, reg_23, reg_24);
    reg_36 = cns67();
    reg_37 = newTable();
    reg_38 = cns8();
    set(reg_37, reg_38, get(get(reg_1[0], cns66()), cns32()));
    set(reg_15, reg_36, reg_37);
    reg_44 = cns68();
    set(reg_15, reg_44, get(reg_5, cns68()));
    reg_47 = newTable();
    set(reg_47, cns69(), cns9());
    if (tobool(get(reg_5, cns49()))) {
      set(reg_15, cns49(), reg_47);
    }
    reg_54 = cns33();
    reg_55 = newTable();
    set(reg_55, cns69(), cns8());
    set(reg_15, reg_54, reg_55);
    reg_59 = get(reg_15, cns11());
    reg_60 = newStack();
    push_Stack(reg_60, reg_15);
    reg_61 = call(reg_59, reg_60);
    if (tobool(get(reg_5, cns70()))) {
      reg_69 = get(get(reg_1[0], cns4()), cns27());
      reg_70 = newStack();
      push_Stack(reg_70, get(reg_5, cns71()));
      push_Stack(reg_70, cns8());
      push_Stack(reg_70, cns72());
      reg_75 = call(reg_69, reg_70);
    }
    reg_78 = get(reg_1[0], cns43());
    reg_79 = newStack();
    push_Stack(reg_79, get(reg_5, cns71()));
    reg_82 = call(reg_78, reg_79);
    reg_83 = next_Stack(reg_82);
    reg_84 = next_Stack(reg_82);
    reg_85 = next_Stack(reg_82);
    loop_1: while (true) {
      reg_86 = newStack();
      push_Stack(reg_86, reg_84);
      push_Stack(reg_86, reg_85);
      reg_87 = call(reg_83, reg_86);
      reg_85 = next_Stack(reg_87);
      reg_89 = next_Stack(reg_87);
      if (tobool(eq(reg_85, nil()))) break loop_1;
      reg_94 = get(reg_15, cns25());
      reg_95 = newStack();
      push_Stack(reg_95, reg_15);
      reg_96 = newTable();
      reg_97 = cns8();
      set(reg_96, reg_97, get(reg_1[0], cns73()));
      set(reg_96, cns41(), reg_47);
      push_Stack(reg_95, reg_96);
      reg_103 = first_Stack(call(reg_94, reg_95));
      reg_107 = get(get(reg_15, cns74()), cns53());
      reg_109 = get(reg_15, cns25());
      reg_110 = newStack();
      push_Stack(reg_110, reg_15);
      reg_111 = newTable();
      set(reg_111, cns8(), cns75());
      set(reg_111, cns41(), reg_103);
      push_Stack(reg_110, reg_111);
      set(reg_107, reg_89, first_Stack(call(reg_109, reg_110)));
    }
    reg_118 = get(reg_15, cns76());
    reg_119 = newStack();
    push_Stack(reg_119, reg_15);
    push_Stack(reg_119, get(reg_5, cns77()));
    reg_122 = call(reg_118, reg_119);
    reg_127 = eq(length(get(reg_5, cns77())), cns9());
    if (!tobool(reg_127)) {
      reg_130 = get(reg_5, cns77());
      reg_127 = ne(get(get(reg_130, length(get(reg_5, cns77()))), cns19()), cns78());
    }
    if (tobool(reg_127)) {
      reg_141 = get(reg_15, cns79());
      reg_142 = newStack();
      push_Stack(reg_142, reg_15);
      push_Stack(reg_142, get(reg_1[0], cns80()));
      reg_147 = first_Stack(call(reg_141, reg_142));
      reg_149 = get(reg_15, cns25());
      reg_150 = newStack();
      push_Stack(reg_150, reg_15);
      reg_151 = newTable();
      set(reg_151, cns8(), cns81());
      set(reg_151, cns41(), reg_147);
      push_Stack(reg_150, reg_151);
      reg_155 = call(reg_149, reg_150);
    }
    reg_157 = get(reg_15, cns37());
    reg_158 = newStack();
    push_Stack(reg_158, reg_15);
    reg_159 = call(reg_157, reg_158);
    reg_161 = get(reg_15, cns82());
    reg_162 = newStack();
    push_Stack(reg_162, reg_15);
    reg_163 = call(reg_161, reg_162);
    reg_169 = first_Stack(call(get(reg_1[0], cns13()), newStack()));
    reg_170 = cns16();
    reg_171 = newTable();
    reg_172 = cns8();
    reg_173 = newTable();
    set(reg_173, cns28(), cns29());
    set(reg_173, cns83(), reg_15);
    set(reg_171, reg_172, reg_173);
    set(reg_169, reg_170, reg_171);
    reg_182 = first_Stack(call(get(reg_1[0], cns13()), newStack()));
    reg_183 = cns14();
    set(reg_182, reg_183, get(reg_1[0], cns84()));
    set(reg_182, cns17(), reg_169);
    reg_189 = get(reg_182, cns22());
    reg_190 = newStack();
    push_Stack(reg_190, reg_182);
    push_Stack(reg_190, cns23());
    reg_192 = newTable();
    reg_193 = cns8();
    set(reg_192, reg_193, get(reg_4, cns18()));
    push_Stack(reg_190, reg_192);
    reg_196 = newTable();
    reg_197 = cns8();
    set(reg_196, reg_197, get(reg_1[0], cns85()));
    push_Stack(reg_190, reg_196);
    reg_202 = first_Stack(call(reg_189, reg_190));
    reg_204 = get(reg_4, cns79());
    reg_205 = newStack();
    push_Stack(reg_205, reg_4);
    push_Stack(reg_205, reg_202);
    push_Stack(reg_205, get(reg_4, cns24()));
    reg_209 = first_Stack(call(reg_204, reg_205));
    reg_210 = newStack();
    reg_212 = get(reg_4, cns79());
    reg_213 = newStack();
    push_Stack(reg_213, reg_4);
    push_Stack(reg_213, get(reg_1[0], cns86()));
    push_Stack(reg_213, reg_209);
    append_Stack(reg_210, call(reg_212, reg_213));
    return reg_210;
  }
  var mod17 = new Cobre.Module({
    "0": Function_createFunction,
  });
  var item172 = closure.build(mod17);
  var item172$new = item172.get("new");
  var cns87 = Cobre.Lazy(function () { return string("compile_require")});
  var mod20 = new Cobre.Module({
    "0": tp1,
  });
  var cns88 = Cobre.Lazy(function () { return string("key")});
  var cns89 = Cobre.Lazy(function () { return string("var")});
  var cns90 = Cobre.Lazy(function () { return string("require")});
  var cns91 = Cobre.Lazy(function () { return string("values")});
  var cns92 = Cobre.Lazy(function () { return string("lua:")});
  var cns93 = Cobre.Lazy(function () { return string(": require expects exactly one argument")});
  var cns94 = Cobre.Lazy(function () { return string("str")});
  var cns95 = Cobre.Lazy(function () { return string(": module name can only be a string literal")});
  var cns96 = Cobre.Lazy(function () { return string("value")});
  var cns97 = Cobre.Lazy(function () { return string("lua_main")});
  var cns98 = Cobre.Lazy(function () { return string(".ENV")});
  function Function_compile_require (reg_0, reg_1) {
    var reg_4, reg_5, reg_7, reg_24, reg_25, reg_30, reg_39, reg_40, reg_41, reg_59, reg_60, reg_61, reg_70, reg_71, reg_79, reg_81, reg_82, reg_84, reg_85, reg_89, reg_90, reg_95, reg_97, reg_98, reg_101, reg_102, reg_104, reg_105, reg_106;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_7 = get(reg_5, cns88());
    if (!tobool(reg_7)) {
      reg_7 = ne(get(get(reg_5, cns14()), cns19()), cns89());
    }
    if (!tobool(reg_7)) {
      reg_7 = ne(get(get(reg_5, cns14()), cns28()), cns90());
    }
    if (!tobool(reg_7)) {
      reg_24 = get(reg_4, cns51());
      reg_25 = newStack();
      push_Stack(reg_25, reg_4);
      push_Stack(reg_25, cns90());
      reg_7 = first_Stack(call(reg_24, reg_25));
    }
    if (tobool(reg_7)) {
      reg_30 = newStack();
      return reg_30;
    }
    if (tobool(ne(length(get(reg_5, cns91())), cns8()))) {
      reg_39 = get(reg_1[0], cns6());
      reg_40 = newStack();
      reg_41 = cns92();
      push_Stack(reg_40, concat(reg_41, concat(get(reg_5, cns68()), cns93())));
      reg_47 = call(reg_39, reg_40);
    }
    if (tobool(ne(get(get(get(reg_5, cns91()), cns8()), cns19()), cns94()))) {
      reg_59 = get(reg_1[0], cns6());
      reg_60 = newStack();
      reg_61 = cns92();
      push_Stack(reg_60, concat(reg_61, concat(get(reg_5, cns68()), cns95())));
      reg_67 = call(reg_59, reg_60);
    }
    reg_70 = get(reg_1[0], cns13());
    reg_71 = newStack();
    push_Stack(reg_71, get(get(get(reg_5, cns91()), cns8()), cns96()));
    reg_79 = first_Stack(call(reg_70, reg_71));
    reg_81 = get(reg_79, cns22());
    reg_82 = newStack();
    push_Stack(reg_82, reg_79);
    push_Stack(reg_82, cns97());
    reg_84 = newTable();
    reg_85 = cns8();
    set(reg_84, reg_85, get(reg_1[0], cns47()));
    push_Stack(reg_82, reg_84);
    reg_89 = newTable();
    reg_90 = cns8();
    set(reg_89, reg_90, get(reg_1[0], cns66()));
    push_Stack(reg_82, reg_89);
    reg_95 = first_Stack(call(reg_81, reg_82));
    reg_97 = get(reg_4, cns51());
    reg_98 = newStack();
    push_Stack(reg_98, reg_4);
    push_Stack(reg_98, cns98());
    reg_101 = first_Stack(call(reg_97, reg_98));
    reg_102 = newStack();
    reg_104 = get(reg_4, cns25());
    reg_105 = newStack();
    push_Stack(reg_105, reg_4);
    reg_106 = newTable();
    set(reg_106, cns8(), reg_95);
    set(reg_106, cns41(), reg_101);
    push_Stack(reg_105, reg_106);
    append_Stack(reg_102, call(reg_104, reg_105));
    return reg_102;
  }
  var mod19 = new Cobre.Module({
    "0": Function_compile_require,
  });
  var item190 = closure.build(mod19);
  var item190$new = item190.get("new");
  var cns99 = Cobre.Lazy(function () { return string("compile_call")});
  var mod22 = new Cobre.Module({
    "0": tp1,
  });
  var cns100 = Cobre.Lazy(function () { return string("compileExpr")});
  var cns101 = Cobre.Lazy(function () { return string("get_f")});
  var cns102 = Cobre.Lazy(function () { return lua$int(3)});
  var cns103 = Cobre.Lazy(function () { return string("push_f")});
  var cns104 = Cobre.Lazy(function () { return string("append_f")});
  var table_append = lua.get("table_append");
  var cns105 = Cobre.Lazy(function () { return string("call_f")});
  function Function_compile_call (reg_0, reg_1) {
    var reg_4, reg_5, reg_7, reg_8, reg_10, reg_12, reg_14, reg_15, reg_19, reg_20, reg_25, reg_26, reg_27, reg_30, reg_34, reg_36, reg_37, reg_38, reg_39, reg_48, reg_49, reg_54, reg_59, reg_60, reg_61, reg_62, reg_71, reg_72, reg_75, reg_76, reg_77, reg_78, reg_79, reg_80, reg_81, reg_82, reg_89, reg_90, reg_98, reg_99, reg_101, reg_103, reg_104, reg_105, reg_106, reg_113, reg_121, reg_122, reg_123, reg_124, reg_129, reg_131, reg_132, reg_136, reg_137, reg_139, reg_141, reg_142, reg_143, reg_144, reg_151, reg_153, reg_154, reg_155, reg_156, reg_162;
    var goto_156=false, goto_188=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_7 = get(reg_4, cns87());
    reg_8 = newStack();
    push_Stack(reg_8, reg_4);
    push_Stack(reg_8, reg_5);
    reg_10 = first_Stack(call(reg_7, reg_8));
    if (tobool(reg_10)) {
      reg_12 = newStack();
      push_Stack(reg_12, reg_10);
      return reg_12;
    }
    reg_14 = get(reg_4, cns100());
    reg_15 = newStack();
    push_Stack(reg_15, reg_4);
    push_Stack(reg_15, get(reg_5, cns14()));
    reg_19 = first_Stack(call(reg_14, reg_15));
    reg_20 = reg_19;
    if (tobool(get(reg_5, cns88()))) {
      reg_25 = get(reg_4, cns100());
      reg_26 = newStack();
      push_Stack(reg_26, reg_4);
      reg_27 = newTable();
      set(reg_27, cns19(), cns94());
      reg_30 = cns96();
      set(reg_27, reg_30, get(reg_5, cns88()));
      push_Stack(reg_26, reg_27);
      reg_34 = first_Stack(call(reg_25, reg_26));
      reg_36 = get(reg_4, cns25());
      reg_37 = newStack();
      push_Stack(reg_37, reg_4);
      reg_38 = newTable();
      reg_39 = cns8();
      set(reg_38, reg_39, get(reg_1[0], cns101()));
      set(reg_38, cns41(), reg_19);
      set(reg_38, cns102(), reg_34);
      push_Stack(reg_37, reg_38);
      reg_20 = first_Stack(call(reg_36, reg_37));
    }
    reg_48 = get(reg_4, cns79());
    reg_49 = newStack();
    push_Stack(reg_49, reg_4);
    push_Stack(reg_49, get(reg_1[0], cns80()));
    reg_54 = first_Stack(call(reg_48, reg_49));
    if (tobool(get(reg_5, cns88()))) {
      reg_59 = get(reg_4, cns25());
      reg_60 = newStack();
      push_Stack(reg_60, reg_4);
      reg_61 = newTable();
      reg_62 = cns8();
      set(reg_61, reg_62, get(reg_1[0], cns103()));
      set(reg_61, cns41(), reg_54);
      set(reg_61, cns102(), reg_19);
      push_Stack(reg_60, reg_61);
      reg_68 = call(reg_59, reg_60);
    }
    reg_71 = get(reg_1[0], cns43());
    reg_72 = newStack();
    push_Stack(reg_72, get(reg_5, cns91()));
    reg_75 = call(reg_71, reg_72);
    reg_76 = next_Stack(reg_75);
    reg_77 = next_Stack(reg_75);
    reg_78 = next_Stack(reg_75);
    loop_1: while (true) {
      reg_79 = newStack();
      push_Stack(reg_79, reg_77);
      push_Stack(reg_79, reg_78);
      reg_80 = call(reg_76, reg_79);
      reg_81 = next_Stack(reg_80);
      reg_78 = reg_81;
      reg_82 = next_Stack(reg_80);
      if (tobool(eq(reg_78, nil()))) break loop_1;
      reg_89 = eq(reg_81, length(get(reg_5, cns91())));
      reg_90 = reg_89;
      if (tobool(reg_90)) {
        reg_90 = eq(get(reg_82, cns19()), cns79());
      }
      goto_156 = !tobool(reg_90);
      if (!goto_156) {
        reg_98 = get(reg_4, cns99());
        reg_99 = newStack();
        push_Stack(reg_99, reg_4);
        push_Stack(reg_99, reg_82);
        reg_101 = first_Stack(call(reg_98, reg_99));
        reg_103 = get(reg_4, cns25());
        reg_104 = newStack();
        push_Stack(reg_104, reg_4);
        reg_105 = newTable();
        reg_106 = cns8();
        set(reg_105, reg_106, get(reg_1[0], cns104()));
        set(reg_105, cns41(), reg_54);
        set(reg_105, cns102(), reg_101);
        push_Stack(reg_104, reg_105);
        reg_112 = call(reg_103, reg_104);
      }
      if ((goto_156 || false)) {
        goto_156 = false;
        reg_113 = reg_89;
        if (tobool(reg_113)) {
          reg_113 = eq(get(reg_82, cns19()), cns49());
        }
        goto_188 = !tobool(reg_113);
        if (!goto_188) {
          reg_121 = get(reg_4, cns25());
          reg_122 = newStack();
          push_Stack(reg_122, reg_4);
          reg_123 = newTable();
          reg_124 = cns8();
          set(reg_123, reg_124, get(reg_1[0], cns104()));
          set(reg_123, cns41(), reg_54);
          reg_129 = cns102();
          reg_131 = get(reg_4, cns48());
          reg_132 = newStack();
          push_Stack(reg_132, reg_4);
          table_append(reg_123, reg_129, call(reg_131, reg_132));
          push_Stack(reg_122, reg_123);
          reg_134 = call(reg_121, reg_122);
        }
        if ((goto_188 || false)) {
          goto_188 = false;
          reg_136 = get(reg_4, cns100());
          reg_137 = newStack();
          push_Stack(reg_137, reg_4);
          push_Stack(reg_137, reg_82);
          reg_139 = first_Stack(call(reg_136, reg_137));
          reg_141 = get(reg_4, cns25());
          reg_142 = newStack();
          push_Stack(reg_142, reg_4);
          reg_143 = newTable();
          reg_144 = cns8();
          set(reg_143, reg_144, get(reg_1[0], cns103()));
          set(reg_143, cns41(), reg_54);
          set(reg_143, cns102(), reg_139);
          push_Stack(reg_142, reg_143);
          reg_150 = call(reg_141, reg_142);
        }
      }
    }
    reg_151 = newStack();
    reg_153 = get(reg_4, cns25());
    reg_154 = newStack();
    push_Stack(reg_154, reg_4);
    reg_155 = newTable();
    reg_156 = cns8();
    set(reg_155, reg_156, get(reg_1[0], cns105()));
    set(reg_155, cns41(), reg_20);
    set(reg_155, cns102(), reg_54);
    reg_162 = cns68();
    set(reg_155, reg_162, get(reg_5, cns68()));
    push_Stack(reg_154, reg_155);
    append_Stack(reg_151, call(reg_153, reg_154));
    return reg_151;
  }
  var mod21 = new Cobre.Module({
    "0": Function_compile_call,
  });
  var item204 = closure.build(mod21);
  var item204$new = item204.get("new");
  var mod24 = new Cobre.Module({
    "0": tp1,
  });
  var cns106 = Cobre.Lazy(function () { return string("const")});
  var cns107 = Cobre.Lazy(function () { return string("nil")});
  var cns108 = Cobre.Lazy(function () { return string("true")});
  var cns109 = Cobre.Lazy(function () { return string("true_f")});
  var cns110 = Cobre.Lazy(function () { return string("false")});
  var cns111 = Cobre.Lazy(function () { return string("false_f")});
  var cns112 = Cobre.Lazy(function () { return string("num")});
  var cns113 = Cobre.Lazy(function () { return string("constant")});
  var cns114 = Cobre.Lazy(function () { return string("tonumber")});
  var cns115 = Cobre.Lazy(function () { return string("first_f")});
  var cns116 = Cobre.Lazy(function () { return string("_ENV")});
  var cns117 = Cobre.Lazy(function () { return string("err")});
  var cns118 = Cobre.Lazy(function () { return string("local \"_ENV\" not in sight")});
  var cns119 = Cobre.Lazy(function () { return string("unop")});
  var cns120 = Cobre.Lazy(function () { return string("unops")});
  var cns121 = Cobre.Lazy(function () { return string("op")});
  var cns122 = Cobre.Lazy(function () { return string("binop")});
  var cns123 = Cobre.Lazy(function () { return string("and")});
  var cns124 = Cobre.Lazy(function () { return string("or")});
  var cns125 = Cobre.Lazy(function () { return string("lbl")});
  var cns126 = Cobre.Lazy(function () { return string("left")});
  var cns127 = Cobre.Lazy(function () { return string("jif")});
  var cns128 = Cobre.Lazy(function () { return string("nif")});
  var cns129 = Cobre.Lazy(function () { return string("right")});
  var cns130 = Cobre.Lazy(function () { return string("label")});
  var cns131 = Cobre.Lazy(function () { return string("binops")});
  var cns132 = Cobre.Lazy(function () { return string("index")});
  var cns133 = Cobre.Lazy(function () { return string("field")});
  var cns134 = Cobre.Lazy(function () { return string("constructor")});
  var cns135 = Cobre.Lazy(function () { return string("table_f")});
  var cns136 = Cobre.Lazy(function () { return string("indexitem")});
  var cns137 = Cobre.Lazy(function () { return string("fielditem")});
  var cns138 = Cobre.Lazy(function () { return string("item")});
  var cns139 = Cobre.Lazy(function () { return string("copystack_f")});
  var cns140 = Cobre.Lazy(function () { return string("table_append_f")});
  var cns141 = Cobre.Lazy(function () { return lua$int(4)});
  var cns142 = Cobre.Lazy(function () { return string("set_f")});
  var cns143 = Cobre.Lazy(function () { return string("expression ")});
  var cns144 = Cobre.Lazy(function () { return string(" not supported")});
  function Function_compileExpr (reg_0, reg_1) {
    var reg_4, reg_5, reg_7, reg_11, reg_36, reg_38, reg_39, reg_40, reg_48, reg_49, reg_52, reg_53, reg_58, reg_59, reg_61, reg_62, reg_63, reg_71, reg_72, reg_76, reg_77, reg_79, reg_80, reg_81, reg_87, reg_89, reg_90, reg_91, reg_92, reg_96, reg_98, reg_99, reg_106, reg_107, reg_111, reg_113, reg_115, reg_116, reg_117, reg_123, reg_124, reg_127, reg_132, reg_133, reg_137, reg_138, reg_139, reg_144, reg_146, reg_147, reg_148, reg_151, reg_155, reg_156, reg_158, reg_159, reg_169, reg_172, reg_174, reg_175, reg_179, reg_180, reg_182, reg_183, reg_184, reg_187, reg_197, reg_205, reg_206, reg_208, reg_210, reg_211, reg_215, reg_217, reg_218, reg_219, reg_224, reg_231, reg_232, reg_233, reg_240, reg_241, reg_242, reg_249, reg_250, reg_254, reg_256, reg_257, reg_258, reg_265, reg_266, reg_267, reg_272, reg_275, reg_278, reg_280, reg_281, reg_285, reg_287, reg_288, reg_292, reg_293, reg_295, reg_296, reg_297, reg_301, reg_309, reg_310, reg_314, reg_316, reg_317, reg_321, reg_322, reg_324, reg_325, reg_333, reg_336, reg_339, reg_341, reg_342, reg_343, reg_346, reg_350, reg_357, reg_359, reg_360, reg_366, reg_367, reg_372, reg_373, reg_376, reg_377, reg_380, reg_381, reg_382, reg_383, reg_384, reg_385, reg_386, reg_387, reg_391, reg_398, reg_399, reg_410, reg_411, reg_412, reg_415, reg_426, reg_427, reg_428, reg_441, reg_450, reg_451, reg_464, reg_465, reg_466, reg_467, reg_471, reg_473, reg_474, reg_480, reg_481, reg_482, reg_483, reg_492, reg_493, reg_497, reg_499, reg_500, reg_501, reg_502, reg_510, reg_515, reg_516, reg_518, reg_519, reg_521, reg_522, reg_523, reg_524, reg_532, reg_533, reg_534, reg_539;
    var goto_22=false, goto_33=false, goto_57=false, goto_89=false, goto_115=false, goto_142=false, goto_173=false, goto_236=false, goto_274=false, goto_340=false, goto_393=false, goto_438=false, goto_475=false, goto_511=false, goto_525=false, goto_580=false, goto_603=false, goto_652=false, goto_738=false, goto_767=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_7 = get(reg_5, cns19());
    goto_57 = !tobool(eq(reg_7, cns106()));
    if (!goto_57) {
      reg_11 = nil();
      goto_22 = !tobool(eq(get(reg_5, cns96()), cns107()));
      if (!goto_22) {
        reg_11 = get(reg_1[0], cns42());
      }
      if ((goto_22 || false)) {
        goto_22 = false;
        goto_33 = !tobool(eq(get(reg_5, cns96()), cns108()));
        if (!goto_33) {
          reg_11 = get(reg_1[0], cns109());
        }
        if ((goto_33 || false)) {
          goto_33 = false;
          if (tobool(eq(get(reg_5, cns96()), cns110()))) {
            reg_11 = get(reg_1[0], cns111());
          }
        }
      }
      reg_36 = newStack();
      reg_38 = get(reg_4, cns25());
      reg_39 = newStack();
      push_Stack(reg_39, reg_4);
      reg_40 = newTable();
      set(reg_40, cns8(), reg_11);
      push_Stack(reg_39, reg_40);
      append_Stack(reg_36, call(reg_38, reg_39));
      return reg_36;
    }
    if ((goto_57 || false)) {
      goto_57 = false;
      goto_89 = !tobool(eq(reg_7, cns112()));
      if (!goto_89) {
        reg_48 = get(reg_1[0], cns113());
        reg_49 = newStack();
        reg_52 = get(reg_1[0], cns114());
        reg_53 = newStack();
        push_Stack(reg_53, get(reg_5, cns96()));
        append_Stack(reg_49, call(reg_52, reg_53));
        reg_58 = first_Stack(call(reg_48, reg_49));
        reg_59 = newStack();
        reg_61 = get(reg_4, cns25());
        reg_62 = newStack();
        push_Stack(reg_62, reg_4);
        reg_63 = newTable();
        set(reg_63, cns8(), reg_58);
        push_Stack(reg_62, reg_63);
        append_Stack(reg_59, call(reg_61, reg_62));
        return reg_59;
      }
      if ((goto_89 || false)) {
        goto_89 = false;
        goto_115 = !tobool(eq(reg_7, cns94()));
        if (!goto_115) {
          reg_71 = get(reg_1[0], cns113());
          reg_72 = newStack();
          push_Stack(reg_72, get(reg_5, cns96()));
          reg_76 = first_Stack(call(reg_71, reg_72));
          reg_77 = newStack();
          reg_79 = get(reg_4, cns25());
          reg_80 = newStack();
          push_Stack(reg_80, reg_4);
          reg_81 = newTable();
          set(reg_81, cns8(), reg_76);
          push_Stack(reg_80, reg_81);
          append_Stack(reg_77, call(reg_79, reg_80));
          return reg_77;
        }
        if ((goto_115 || false)) {
          goto_115 = false;
          goto_142 = !tobool(eq(reg_7, cns49()));
          if (!goto_142) {
            reg_87 = newStack();
            reg_89 = get(reg_4, cns25());
            reg_90 = newStack();
            push_Stack(reg_90, reg_4);
            reg_91 = newTable();
            reg_92 = cns8();
            set(reg_91, reg_92, get(reg_1[0], cns115()));
            reg_96 = cns41();
            reg_98 = get(reg_4, cns48());
            reg_99 = newStack();
            push_Stack(reg_99, reg_4);
            table_append(reg_91, reg_96, call(reg_98, reg_99));
            push_Stack(reg_90, reg_91);
            append_Stack(reg_87, call(reg_89, reg_90));
            return reg_87;
          }
          if ((goto_142 || false)) {
            goto_142 = false;
            goto_236 = !tobool(eq(reg_7, cns89()));
            if (!goto_236) {
              reg_106 = get(reg_4, cns51());
              reg_107 = newStack();
              push_Stack(reg_107, reg_4);
              push_Stack(reg_107, get(reg_5, cns28()));
              reg_111 = first_Stack(call(reg_106, reg_107));
              goto_173 = !tobool(reg_111);
              if (!goto_173) {
                reg_113 = newStack();
                reg_115 = get(reg_4, cns25());
                reg_116 = newStack();
                push_Stack(reg_116, reg_4);
                reg_117 = newTable();
                set(reg_117, cns8(), cns89());
                set(reg_117, cns41(), reg_111);
                push_Stack(reg_116, reg_117);
                append_Stack(reg_113, call(reg_115, reg_116));
                return reg_113;
              }
              if ((goto_173 || false)) {
                goto_173 = false;
                reg_123 = get(reg_4, cns51());
                reg_124 = newStack();
                push_Stack(reg_124, reg_4);
                push_Stack(reg_124, cns116());
                reg_127 = first_Stack(call(reg_123, reg_124));
                if (tobool(not(reg_127))) {
                  reg_132 = get(reg_1[0], cns117());
                  reg_133 = newStack();
                  push_Stack(reg_133, cns118());
                  push_Stack(reg_133, reg_5);
                  reg_135 = call(reg_132, reg_133);
                }
                reg_137 = get(reg_4, cns25());
                reg_138 = newStack();
                push_Stack(reg_138, reg_4);
                reg_139 = newTable();
                set(reg_139, cns8(), cns89());
                set(reg_139, cns41(), reg_127);
                push_Stack(reg_138, reg_139);
                reg_144 = first_Stack(call(reg_137, reg_138));
                reg_146 = get(reg_4, cns100());
                reg_147 = newStack();
                push_Stack(reg_147, reg_4);
                reg_148 = newTable();
                set(reg_148, cns19(), cns94());
                reg_151 = cns96();
                set(reg_148, reg_151, get(reg_5, cns28()));
                push_Stack(reg_147, reg_148);
                reg_155 = first_Stack(call(reg_146, reg_147));
                reg_156 = newStack();
                reg_158 = get(reg_4, cns79());
                reg_159 = newStack();
                push_Stack(reg_159, reg_4);
                push_Stack(reg_159, get(reg_1[0], cns101()));
                push_Stack(reg_159, reg_144);
                push_Stack(reg_159, reg_155);
                append_Stack(reg_156, call(reg_158, reg_159));
                return reg_156;
              }
            }
            if ((goto_236 || false)) {
              goto_236 = false;
              goto_274 = !tobool(eq(reg_7, cns119()));
              if (!goto_274) {
                reg_169 = get(reg_1[0], cns120());
                reg_172 = get(reg_169, get(reg_5, cns121()));
                reg_174 = get(reg_4, cns100());
                reg_175 = newStack();
                push_Stack(reg_175, reg_4);
                push_Stack(reg_175, get(reg_5, cns96()));
                reg_179 = first_Stack(call(reg_174, reg_175));
                reg_180 = newStack();
                reg_182 = get(reg_4, cns25());
                reg_183 = newStack();
                push_Stack(reg_183, reg_4);
                reg_184 = newTable();
                set(reg_184, cns8(), reg_172);
                set(reg_184, cns41(), reg_179);
                reg_187 = cns68();
                set(reg_184, reg_187, get(reg_5, cns68()));
                push_Stack(reg_183, reg_184);
                append_Stack(reg_180, call(reg_182, reg_183));
                return reg_180;
              }
              if ((goto_274 || false)) {
                goto_274 = false;
                goto_438 = !tobool(eq(reg_7, cns122()));
                if (!goto_438) {
                  reg_197 = eq(get(reg_5, cns121()), cns123());
                  if (!tobool(reg_197)) {
                    reg_197 = eq(get(reg_5, cns121()), cns124());
                  }
                  goto_393 = !tobool(reg_197);
                  if (!goto_393) {
                    reg_205 = get(reg_4, cns125());
                    reg_206 = newStack();
                    push_Stack(reg_206, reg_4);
                    reg_208 = first_Stack(call(reg_205, reg_206));
                    reg_210 = get(reg_4, cns100());
                    reg_211 = newStack();
                    push_Stack(reg_211, reg_4);
                    push_Stack(reg_211, get(reg_5, cns126()));
                    reg_215 = first_Stack(call(reg_210, reg_211));
                    reg_217 = get(reg_4, cns25());
                    reg_218 = newStack();
                    push_Stack(reg_218, reg_4);
                    reg_219 = newTable();
                    set(reg_219, cns8(), cns75());
                    set(reg_219, cns41(), reg_215);
                    push_Stack(reg_218, reg_219);
                    reg_224 = first_Stack(call(reg_217, reg_218));
                    goto_340 = !tobool(eq(get(reg_5, cns121()), cns124()));
                    if (!goto_340) {
                      reg_231 = get(reg_4, cns25());
                      reg_232 = newStack();
                      push_Stack(reg_232, reg_4);
                      reg_233 = newTable();
                      set(reg_233, cns8(), cns127());
                      set(reg_233, cns41(), reg_208);
                      set(reg_233, cns102(), reg_224);
                      push_Stack(reg_232, reg_233);
                      reg_238 = call(reg_231, reg_232);
                    }
                    if ((goto_340 || false)) {
                      goto_340 = false;
                      reg_240 = get(reg_4, cns25());
                      reg_241 = newStack();
                      push_Stack(reg_241, reg_4);
                      reg_242 = newTable();
                      set(reg_242, cns8(), cns128());
                      set(reg_242, cns41(), reg_208);
                      set(reg_242, cns102(), reg_224);
                      push_Stack(reg_241, reg_242);
                      reg_247 = call(reg_240, reg_241);
                    }
                    reg_249 = get(reg_4, cns100());
                    reg_250 = newStack();
                    push_Stack(reg_250, reg_4);
                    push_Stack(reg_250, get(reg_5, cns129()));
                    reg_254 = first_Stack(call(reg_249, reg_250));
                    reg_256 = get(reg_4, cns25());
                    reg_257 = newStack();
                    push_Stack(reg_257, reg_4);
                    reg_258 = newTable();
                    set(reg_258, cns8(), cns59());
                    set(reg_258, cns41(), reg_224);
                    set(reg_258, cns102(), reg_254);
                    push_Stack(reg_257, reg_258);
                    reg_263 = call(reg_256, reg_257);
                    reg_265 = get(reg_4, cns25());
                    reg_266 = newStack();
                    push_Stack(reg_266, reg_4);
                    reg_267 = newTable();
                    set(reg_267, cns8(), cns130());
                    set(reg_267, cns41(), reg_208);
                    push_Stack(reg_266, reg_267);
                    reg_271 = call(reg_265, reg_266);
                    reg_272 = newStack();
                    push_Stack(reg_272, reg_224);
                    return reg_272;
                  }
                  if ((goto_393 || false)) {
                    goto_393 = false;
                    reg_275 = get(reg_1[0], cns131());
                    reg_278 = get(reg_275, get(reg_5, cns121()));
                    reg_280 = get(reg_4, cns100());
                    reg_281 = newStack();
                    push_Stack(reg_281, reg_4);
                    push_Stack(reg_281, get(reg_5, cns126()));
                    reg_285 = first_Stack(call(reg_280, reg_281));
                    reg_287 = get(reg_4, cns100());
                    reg_288 = newStack();
                    push_Stack(reg_288, reg_4);
                    push_Stack(reg_288, get(reg_5, cns129()));
                    reg_292 = first_Stack(call(reg_287, reg_288));
                    reg_293 = newStack();
                    reg_295 = get(reg_4, cns25());
                    reg_296 = newStack();
                    push_Stack(reg_296, reg_4);
                    reg_297 = newTable();
                    set(reg_297, cns8(), reg_278);
                    set(reg_297, cns41(), reg_285);
                    set(reg_297, cns102(), reg_292);
                    reg_301 = cns68();
                    set(reg_297, reg_301, get(reg_5, cns68()));
                    push_Stack(reg_296, reg_297);
                    append_Stack(reg_293, call(reg_295, reg_296));
                    return reg_293;
                  }
                }
                if ((goto_438 || false)) {
                  goto_438 = false;
                  goto_475 = !tobool(eq(reg_7, cns132()));
                  if (!goto_475) {
                    reg_309 = get(reg_4, cns100());
                    reg_310 = newStack();
                    push_Stack(reg_310, reg_4);
                    push_Stack(reg_310, get(reg_5, cns14()));
                    reg_314 = first_Stack(call(reg_309, reg_310));
                    reg_316 = get(reg_4, cns100());
                    reg_317 = newStack();
                    push_Stack(reg_317, reg_4);
                    push_Stack(reg_317, get(reg_5, cns88()));
                    reg_321 = first_Stack(call(reg_316, reg_317));
                    reg_322 = newStack();
                    reg_324 = get(reg_4, cns79());
                    reg_325 = newStack();
                    push_Stack(reg_325, reg_4);
                    push_Stack(reg_325, get(reg_1[0], cns101()));
                    push_Stack(reg_325, reg_314);
                    push_Stack(reg_325, reg_321);
                    append_Stack(reg_322, call(reg_324, reg_325));
                    return reg_322;
                  }
                  if ((goto_475 || false)) {
                    goto_475 = false;
                    goto_511 = !tobool(eq(reg_7, cns133()));
                    if (!goto_511) {
                      reg_333 = newTable();
                      set(reg_333, cns19(), cns94());
                      reg_336 = cns96();
                      set(reg_333, reg_336, get(reg_5, cns88()));
                      reg_339 = newStack();
                      reg_341 = get(reg_4, cns100());
                      reg_342 = newStack();
                      push_Stack(reg_342, reg_4);
                      reg_343 = newTable();
                      set(reg_343, cns19(), cns132());
                      reg_346 = cns14();
                      set(reg_343, reg_346, get(reg_5, cns14()));
                      set(reg_343, cns88(), reg_333);
                      reg_350 = cns68();
                      set(reg_343, reg_350, get(reg_5, cns68()));
                      push_Stack(reg_342, reg_343);
                      append_Stack(reg_339, call(reg_341, reg_342));
                      return reg_339;
                    }
                    if ((goto_511 || false)) {
                      goto_511 = false;
                      goto_525 = !tobool(eq(reg_7, cns64()));
                      if (!goto_525) {
                        reg_357 = newStack();
                        reg_359 = get(reg_4, cns62());
                        reg_360 = newStack();
                        push_Stack(reg_360, reg_4);
                        push_Stack(reg_360, reg_5);
                        append_Stack(reg_357, call(reg_359, reg_360));
                        return reg_357;
                      }
                      if ((goto_525 || false)) {
                        goto_525 = false;
                        goto_738 = !tobool(eq(reg_7, cns134()));
                        if (!goto_738) {
                          reg_366 = get(reg_4, cns79());
                          reg_367 = newStack();
                          push_Stack(reg_367, reg_4);
                          push_Stack(reg_367, get(reg_1[0], cns135()));
                          reg_372 = first_Stack(call(reg_366, reg_367));
                          reg_373 = cns8();
                          reg_376 = get(reg_1[0], cns43());
                          reg_377 = newStack();
                          push_Stack(reg_377, get(reg_5, cns16()));
                          reg_380 = call(reg_376, reg_377);
                          reg_381 = next_Stack(reg_380);
                          reg_382 = next_Stack(reg_380);
                          reg_383 = next_Stack(reg_380);
                          loop_1: while (true) {
                            reg_384 = newStack();
                            push_Stack(reg_384, reg_382);
                            push_Stack(reg_384, reg_383);
                            reg_385 = call(reg_381, reg_384);
                            reg_386 = next_Stack(reg_385);
                            reg_383 = reg_386;
                            reg_387 = next_Stack(reg_385);
                            if (tobool(eq(reg_383, nil()))) break loop_1;
                            reg_391 = nil();
                            goto_580 = !tobool(eq(get(reg_387, cns19()), cns136()));
                            if (!goto_580) {
                              reg_398 = get(reg_4, cns100());
                              reg_399 = newStack();
                              push_Stack(reg_399, reg_4);
                              push_Stack(reg_399, get(reg_387, cns88()));
                              reg_391 = first_Stack(call(reg_398, reg_399));
                            }
                            if ((goto_580 || false)) {
                              goto_580 = false;
                              goto_603 = !tobool(eq(get(reg_387, cns19()), cns137()));
                              if (!goto_603) {
                                reg_410 = get(reg_4, cns100());
                                reg_411 = newStack();
                                push_Stack(reg_411, reg_4);
                                reg_412 = newTable();
                                set(reg_412, cns19(), cns94());
                                reg_415 = cns96();
                                set(reg_412, reg_415, get(reg_387, cns88()));
                                push_Stack(reg_411, reg_412);
                                reg_391 = first_Stack(call(reg_410, reg_411));
                              }
                              if ((goto_603 || false)) {
                                goto_603 = false;
                                if (tobool(eq(get(reg_387, cns19()), cns138()))) {
                                  reg_426 = get(reg_4, cns100());
                                  reg_427 = newStack();
                                  push_Stack(reg_427, reg_4);
                                  reg_428 = newTable();
                                  set(reg_428, cns19(), cns112());
                                  set(reg_428, cns96(), reg_373);
                                  push_Stack(reg_427, reg_428);
                                  reg_391 = first_Stack(call(reg_426, reg_427));
                                  reg_373 = add(reg_373, cns8());
                                  if (tobool(eq(reg_386, length(get(reg_5, cns16()))))) {
                                    reg_441 = nil();
                                    goto_652 = !tobool(eq(get(get(reg_387, cns96()), cns19()), cns79()));
                                    if (!goto_652) {
                                      reg_450 = get(reg_4, cns99());
                                      reg_451 = newStack();
                                      push_Stack(reg_451, reg_4);
                                      push_Stack(reg_451, get(reg_387, cns96()));
                                      reg_441 = first_Stack(call(reg_450, reg_451));
                                    }
                                    if ((goto_652 || false)) {
                                      goto_652 = false;
                                      if (tobool(eq(get(get(reg_387, cns96()), cns19()), cns49()))) {
                                        reg_464 = get(reg_4, cns25());
                                        reg_465 = newStack();
                                        push_Stack(reg_465, reg_4);
                                        reg_466 = newTable();
                                        reg_467 = cns8();
                                        set(reg_466, reg_467, get(reg_1[0], cns139()));
                                        reg_471 = cns41();
                                        reg_473 = get(reg_4, cns48());
                                        reg_474 = newStack();
                                        push_Stack(reg_474, reg_4);
                                        table_append(reg_466, reg_471, call(reg_473, reg_474));
                                        push_Stack(reg_465, reg_466);
                                        reg_441 = first_Stack(call(reg_464, reg_465));
                                      }
                                    }
                                    if (tobool(reg_441)) {
                                      reg_480 = get(reg_4, cns25());
                                      reg_481 = newStack();
                                      push_Stack(reg_481, reg_4);
                                      reg_482 = newTable();
                                      reg_483 = cns8();
                                      set(reg_482, reg_483, get(reg_1[0], cns140()));
                                      set(reg_482, cns41(), reg_372);
                                      set(reg_482, cns102(), reg_391);
                                      set(reg_482, cns141(), reg_441);
                                      push_Stack(reg_481, reg_482);
                                      reg_490 = call(reg_480, reg_481);
                                      if (true) break loop_1;
                                    }
                                  }
                                }
                              }
                            }
                            reg_492 = get(reg_4, cns100());
                            reg_493 = newStack();
                            push_Stack(reg_493, reg_4);
                            push_Stack(reg_493, get(reg_387, cns96()));
                            reg_497 = first_Stack(call(reg_492, reg_493));
                            reg_499 = get(reg_4, cns25());
                            reg_500 = newStack();
                            push_Stack(reg_500, reg_4);
                            reg_501 = newTable();
                            reg_502 = cns8();
                            set(reg_501, reg_502, get(reg_1[0], cns142()));
                            set(reg_501, cns41(), reg_372);
                            set(reg_501, cns102(), reg_391);
                            set(reg_501, cns141(), reg_497);
                            push_Stack(reg_500, reg_501);
                            reg_509 = call(reg_499, reg_500);
                          }
                          reg_510 = newStack();
                          push_Stack(reg_510, reg_372);
                          return reg_510;
                        }
                        if ((goto_738 || false)) {
                          goto_738 = false;
                          goto_767 = !tobool(eq(reg_7, cns79()));
                          if (!goto_767) {
                            reg_515 = get(reg_4, cns99());
                            reg_516 = newStack();
                            push_Stack(reg_516, reg_4);
                            push_Stack(reg_516, reg_5);
                            reg_518 = first_Stack(call(reg_515, reg_516));
                            reg_519 = newStack();
                            reg_521 = get(reg_4, cns25());
                            reg_522 = newStack();
                            push_Stack(reg_522, reg_4);
                            reg_523 = newTable();
                            reg_524 = cns8();
                            set(reg_523, reg_524, get(reg_1[0], cns115()));
                            set(reg_523, cns41(), reg_518);
                            push_Stack(reg_522, reg_523);
                            append_Stack(reg_519, call(reg_521, reg_522));
                            return reg_519;
                          }
                          if ((goto_767 || false)) {
                            goto_767 = false;
                            reg_532 = get(reg_1[0], cns117());
                            reg_533 = newStack();
                            reg_534 = cns143();
                            push_Stack(reg_533, concat(reg_534, concat(reg_7, cns144())));
                            push_Stack(reg_533, reg_5);
                            reg_538 = call(reg_532, reg_533);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    reg_539 = newStack();
    return reg_539;
  }
  var mod23 = new Cobre.Module({
    "0": Function_compileExpr,
  });
  var item249 = closure.build(mod23);
  var item249$new = item249.get("new");
  var cns145 = Cobre.Lazy(function () { return string("assign")});
  var mod26 = new Cobre.Module({
    "0": tp1,
  });
  var cns146 = Cobre.Lazy(function () { return string("lcl")});
  function Function_assign (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_7, reg_12, reg_13, reg_17, reg_18, reg_19, reg_20, reg_21, reg_23, reg_29, reg_30, reg_31, reg_33, reg_44, reg_45, reg_54, reg_55, reg_56, reg_57, reg_61, reg_63, reg_64, reg_70, reg_71, reg_81, reg_87, reg_91, reg_92, reg_96, reg_97, reg_110, reg_112, reg_114, reg_115, reg_116, reg_126, reg_127, reg_128, reg_129, reg_133, reg_136, reg_142, reg_143, reg_145, reg_148, reg_149, reg_150, reg_158, reg_159, reg_162, reg_167, reg_168, reg_175, reg_176, reg_177, reg_182, reg_184, reg_185, reg_186, reg_191, reg_193, reg_194, reg_200;
    var goto_30=false, goto_60=false, goto_104=false, goto_115=false, goto_133=false, goto_171=false, goto_198=false, goto_224=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_7 = next_Stack(reg_0);
    reg_12 = get(get(reg_1[0], cns3()), cns2());
    reg_13 = newStack();
    push_Stack(reg_13, length(reg_5));
    push_Stack(reg_13, length(reg_6));
    reg_17 = first_Stack(call(reg_12, reg_13));
    reg_18 = nil();
    reg_19 = cns8();
    reg_20 = reg_17;
    reg_21 = cns8();
    reg_23 = lt(reg_21, cns9());
    loop_1: while (true) {
      goto_30 = tobool(reg_23);
      if (!goto_30) {
        if (tobool(gt(reg_19, reg_20))) break loop_1;
      }
      if ((goto_30 || false)) {
        goto_30 = false;
        if (tobool(lt(reg_19, reg_20))) break loop_1;
      }
      reg_29 = get(reg_5, reg_19);
      reg_30 = get(reg_6, reg_19);
      reg_31 = nil();
      reg_33 = eq(reg_19, length(reg_6));
      if (tobool(reg_33)) {
        reg_33 = lt(reg_19, length(reg_5));
      }
      if (tobool(reg_33)) {
        goto_60 = !tobool(eq(get(reg_30, cns19()), cns79()));
        if (!goto_60) {
          reg_44 = get(reg_4, cns99());
          reg_45 = newStack();
          push_Stack(reg_45, reg_4);
          push_Stack(reg_45, reg_30);
          reg_18 = first_Stack(call(reg_44, reg_45));
        }
        if ((goto_60 || false)) {
          goto_60 = false;
          if (tobool(eq(get(reg_30, cns19()), cns49()))) {
            reg_54 = get(reg_4, cns25());
            reg_55 = newStack();
            push_Stack(reg_55, reg_4);
            reg_56 = newTable();
            reg_57 = cns8();
            set(reg_56, reg_57, get(reg_1[0], cns139()));
            reg_61 = cns41();
            reg_63 = get(reg_4, cns48());
            reg_64 = newStack();
            push_Stack(reg_64, reg_4);
            table_append(reg_56, reg_61, call(reg_63, reg_64));
            push_Stack(reg_55, reg_56);
            reg_18 = first_Stack(call(reg_54, reg_55));
          }
        }
      }
      goto_104 = !tobool(reg_18);
      if (!goto_104) {
        reg_70 = get(reg_4, cns79());
        reg_71 = newStack();
        push_Stack(reg_71, reg_4);
        push_Stack(reg_71, get(reg_1[0], cns73()));
        push_Stack(reg_71, reg_18);
        reg_31 = first_Stack(call(reg_70, reg_71));
      }
      if ((goto_104 || false)) {
        goto_104 = false;
        goto_133 = !tobool(reg_30);
        if (!goto_133) {
          goto_115 = !tobool(get(reg_29, cns63()));
          if (!goto_115) {
            reg_81 = cns63();
            set(reg_30, reg_81, get(reg_29, cns63()));
          }
          if ((goto_115 || false)) {
            goto_115 = false;
            if (tobool(get(reg_29, cns146()))) {
              reg_87 = cns63();
              set(reg_30, reg_87, get(reg_29, cns146()));
            }
          }
          reg_91 = get(reg_4, cns100());
          reg_92 = newStack();
          push_Stack(reg_92, reg_4);
          push_Stack(reg_92, reg_30);
          reg_31 = first_Stack(call(reg_91, reg_92));
        }
        if ((goto_133 || false)) {
          goto_133 = false;
          reg_96 = get(reg_4, cns79());
          reg_97 = newStack();
          push_Stack(reg_97, reg_4);
          push_Stack(reg_97, get(reg_1[0], cns42()));
          reg_31 = first_Stack(call(reg_96, reg_97));
        }
      }
      if (tobool(reg_29)) {
        goto_171 = !tobool(get(reg_29, cns146()));
        if (!goto_171) {
          reg_110 = get(get(reg_4, cns74()), cns53());
          reg_112 = get(reg_29, cns146());
          reg_114 = get(reg_4, cns25());
          reg_115 = newStack();
          push_Stack(reg_115, reg_4);
          reg_116 = newTable();
          set(reg_116, cns8(), cns75());
          set(reg_116, cns41(), reg_31);
          push_Stack(reg_115, reg_116);
          set(reg_110, reg_112, first_Stack(call(reg_114, reg_115)));
        }
        if ((goto_171 || false)) {
          goto_171 = false;
          goto_198 = !tobool(get(reg_29, cns14()));
          if (!goto_198) {
            reg_126 = get(reg_4, cns25());
            reg_127 = newStack();
            push_Stack(reg_127, reg_4);
            reg_128 = newTable();
            reg_129 = cns8();
            set(reg_128, reg_129, get(reg_1[0], cns142()));
            reg_133 = cns41();
            set(reg_128, reg_133, get(reg_29, cns14()));
            reg_136 = cns102();
            set(reg_128, reg_136, get(reg_29, cns88()));
            set(reg_128, cns141(), reg_31);
            push_Stack(reg_127, reg_128);
            reg_140 = call(reg_126, reg_127);
          }
          if ((goto_198 || false)) {
            goto_198 = false;
            reg_142 = get(reg_4, cns51());
            reg_143 = newStack();
            push_Stack(reg_143, reg_4);
            push_Stack(reg_143, reg_29);
            reg_145 = first_Stack(call(reg_142, reg_143));
            goto_224 = !tobool(reg_145);
            if (!goto_224) {
              reg_148 = get(reg_4, cns25());
              reg_149 = newStack();
              push_Stack(reg_149, reg_4);
              reg_150 = newTable();
              set(reg_150, cns8(), cns59());
              set(reg_150, cns41(), reg_145);
              set(reg_150, cns102(), reg_31);
              set(reg_150, cns68(), reg_7);
              push_Stack(reg_149, reg_150);
              reg_156 = call(reg_148, reg_149);
            }
            if ((goto_224 || false)) {
              goto_224 = false;
              reg_158 = get(reg_4, cns51());
              reg_159 = newStack();
              push_Stack(reg_159, reg_4);
              push_Stack(reg_159, cns116());
              reg_162 = first_Stack(call(reg_158, reg_159));
              if (tobool(not(reg_162))) {
                reg_167 = get(reg_1[0], cns117());
                reg_168 = newStack();
                push_Stack(reg_168, cns118());
                push_Stack(reg_168, get(reg_1[0], cns65()));
                reg_173 = call(reg_167, reg_168);
              }
              reg_175 = get(reg_4, cns25());
              reg_176 = newStack();
              push_Stack(reg_176, reg_4);
              reg_177 = newTable();
              set(reg_177, cns8(), cns89());
              set(reg_177, cns41(), reg_162);
              push_Stack(reg_176, reg_177);
              reg_182 = first_Stack(call(reg_175, reg_176));
              reg_184 = get(reg_4, cns100());
              reg_185 = newStack();
              push_Stack(reg_185, reg_4);
              reg_186 = newTable();
              set(reg_186, cns19(), cns94());
              set(reg_186, cns96(), reg_29);
              push_Stack(reg_185, reg_186);
              reg_191 = first_Stack(call(reg_184, reg_185));
              reg_193 = get(reg_4, cns79());
              reg_194 = newStack();
              push_Stack(reg_194, reg_4);
              push_Stack(reg_194, get(reg_1[0], cns142()));
              push_Stack(reg_194, reg_182);
              push_Stack(reg_194, reg_191);
              push_Stack(reg_194, reg_31);
              reg_198 = call(reg_193, reg_194);
            }
          }
        }
      }
      reg_19 = add(reg_19, reg_21);
    }
    reg_200 = newStack();
    return reg_200;
  }
  var mod25 = new Cobre.Module({
    "0": Function_assign,
  });
  var item257 = closure.build(mod25);
  var item257$new = item257.get("new");
  var cns147 = Cobre.Lazy(function () { return string("compileLhs")});
  var mod28 = new Cobre.Module({
    "0": tp1,
  });
  var cns148 = Cobre.Lazy(function () { return string("getRepr")});
  var cns149 = Cobre.Lazy(function () { return string("wtf")});
  function Function_compileLhs (reg_0, reg_1) {
    var reg_4, reg_5, reg_11, reg_19, reg_20, reg_21, reg_23, reg_24, reg_29, reg_31, reg_32, reg_37, reg_40, reg_41, reg_49, reg_50, reg_51, reg_53, reg_54, reg_59, reg_61, reg_62, reg_63, reg_66, reg_71, reg_74, reg_75, reg_80, reg_81, reg_84;
    var goto_16=false, goto_58=false, goto_106=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    goto_16 = !tobool(eq(get(reg_5, cns19()), cns89()));
    if (!goto_16) {
      reg_11 = newStack();
      push_Stack(reg_11, get(reg_5, cns28()));
      return reg_11;
    }
    if ((goto_16 || false)) {
      goto_16 = false;
      goto_58 = !tobool(eq(get(reg_5, cns19()), cns132()));
      if (!goto_58) {
        reg_19 = newStack();
        reg_20 = newTable();
        reg_21 = cns14();
        reg_23 = get(reg_4, cns100());
        reg_24 = newStack();
        push_Stack(reg_24, reg_4);
        push_Stack(reg_24, get(reg_5, cns14()));
        set(reg_20, reg_21, first_Stack(call(reg_23, reg_24)));
        reg_29 = cns88();
        reg_31 = get(reg_4, cns100());
        reg_32 = newStack();
        push_Stack(reg_32, reg_4);
        push_Stack(reg_32, get(reg_5, cns88()));
        set(reg_20, reg_29, first_Stack(call(reg_31, reg_32)));
        reg_37 = cns63();
        reg_40 = get(reg_1[0], cns148());
        reg_41 = newStack();
        push_Stack(reg_41, reg_5);
        set(reg_20, reg_37, first_Stack(call(reg_40, reg_41)));
        push_Stack(reg_19, reg_20);
        return reg_19;
      }
      if ((goto_58 || false)) {
        goto_58 = false;
        goto_106 = !tobool(eq(get(reg_5, cns19()), cns133()));
        if (!goto_106) {
          reg_49 = newStack();
          reg_50 = newTable();
          reg_51 = cns14();
          reg_53 = get(reg_4, cns100());
          reg_54 = newStack();
          push_Stack(reg_54, reg_4);
          push_Stack(reg_54, get(reg_5, cns14()));
          set(reg_50, reg_51, first_Stack(call(reg_53, reg_54)));
          reg_59 = cns88();
          reg_61 = get(reg_4, cns100());
          reg_62 = newStack();
          push_Stack(reg_62, reg_4);
          reg_63 = newTable();
          set(reg_63, cns19(), cns94());
          reg_66 = cns96();
          set(reg_63, reg_66, get(reg_5, cns88()));
          push_Stack(reg_62, reg_63);
          set(reg_50, reg_59, first_Stack(call(reg_61, reg_62)));
          reg_71 = cns63();
          reg_74 = get(reg_1[0], cns148());
          reg_75 = newStack();
          push_Stack(reg_75, reg_5);
          set(reg_50, reg_71, first_Stack(call(reg_74, reg_75)));
          push_Stack(reg_49, reg_50);
          return reg_49;
        }
        if ((goto_106 || false)) {
          goto_106 = false;
          reg_80 = get(reg_1[0], cns6());
          reg_81 = newStack();
          push_Stack(reg_81, cns149());
          reg_83 = call(reg_80, reg_81);
        }
      }
    }
    reg_84 = newStack();
    return reg_84;
  }
  var mod27 = new Cobre.Module({
    "0": Function_compileLhs,
  });
  var item266 = closure.build(mod27);
  var item266$new = item266.get("new");
  var mod30 = new Cobre.Module({
    "0": tp1,
  });
  var cns150 = Cobre.Lazy(function () { return string(".")});
  var cns151 = Cobre.Lazy(function () { return string("[")});
  var cns152 = Cobre.Lazy(function () { return string("]")});
  var cns153 = Cobre.Lazy(function () { return string("string")});
  var cns154 = Cobre.Lazy(function () { return string("\"")});
  function function$1 (reg_0, reg_1) {
    var reg_4, reg_10, reg_18, reg_21, reg_22, reg_26, reg_27, reg_44, reg_47, reg_48, reg_52, reg_53, reg_62, reg_63, reg_67, reg_69, reg_72, reg_73, reg_77, reg_78, reg_86, reg_93, reg_101, reg_102, reg_108;
    var goto_15=false, goto_39=false, goto_73=false, goto_103=false, goto_122=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    goto_15 = !tobool(eq(get(reg_4, cns19()), cns89()));
    if (!goto_15) {
      reg_10 = newStack();
      push_Stack(reg_10, get(reg_4, cns28()));
      return reg_10;
    }
    if ((goto_15 || false)) {
      goto_15 = false;
      goto_39 = !tobool(eq(get(reg_4, cns19()), cns133()));
      if (!goto_39) {
        reg_18 = newStack();
        reg_21 = get(reg_1[0], cns148());
        reg_22 = newStack();
        push_Stack(reg_22, get(reg_4, cns14()));
        reg_26 = first_Stack(call(reg_21, reg_22));
        reg_27 = cns150();
        push_Stack(reg_18, concat(reg_26, concat(reg_27, get(reg_4, cns88()))));
        return reg_18;
      }
      if ((goto_39 || false)) {
        goto_39 = false;
        goto_103 = !tobool(eq(get(reg_4, cns19()), cns132()));
        if (!goto_103) {
          goto_73 = !tobool(eq(get(get(reg_4, cns88()), cns19()), cns94()));
          if (!goto_73) {
            reg_44 = newStack();
            reg_47 = get(reg_1[0], cns148());
            reg_48 = newStack();
            push_Stack(reg_48, get(reg_4, cns14()));
            reg_52 = first_Stack(call(reg_47, reg_48));
            reg_53 = cns150();
            push_Stack(reg_44, concat(reg_52, concat(reg_53, get(get(reg_4, cns88()), cns96()))));
            return reg_44;
          }
          if ((goto_73 || false)) {
            goto_73 = false;
            reg_62 = get(reg_1[0], cns148());
            reg_63 = newStack();
            push_Stack(reg_63, get(reg_4, cns88()));
            reg_67 = first_Stack(call(reg_62, reg_63));
            if (tobool(reg_67)) {
              reg_69 = newStack();
              reg_72 = get(reg_1[0], cns148());
              reg_73 = newStack();
              push_Stack(reg_73, get(reg_4, cns14()));
              reg_77 = first_Stack(call(reg_72, reg_73));
              reg_78 = cns151();
              push_Stack(reg_69, concat(reg_77, concat(reg_78, concat(reg_67, cns152()))));
              return reg_69;
            }
          }
        }
        if ((goto_103 || false)) {
          goto_103 = false;
          reg_86 = eq(get(reg_4, cns19()), cns112());
          if (!tobool(reg_86)) {
            reg_86 = eq(get(reg_4, cns19()), cns106());
          }
          goto_122 = !tobool(reg_86);
          if (!goto_122) {
            reg_93 = newStack();
            push_Stack(reg_93, get(reg_4, cns96()));
            return reg_93;
          }
          if ((goto_122 || false)) {
            goto_122 = false;
            if (tobool(eq(get(reg_4, cns19()), cns153()))) {
              reg_101 = newStack();
              reg_102 = cns154();
              push_Stack(reg_101, concat(reg_102, concat(get(reg_4, cns96()), cns154())));
              return reg_101;
            }
          }
        }
      }
    }
    reg_108 = newStack();
    return reg_108;
  }
  var mod29 = new Cobre.Module({
    "0": function$1,
  });
  var item277 = closure.build(mod29);
  var item277$new = item277.get("new");
  var cns155 = Cobre.Lazy(function () { return string("compile_numfor")});
  var mod32 = new Cobre.Module({
    "0": tp1,
  });
  var cns156 = Cobre.Lazy(function () { return string("loops")});
  var cns157 = Cobre.Lazy(function () { return string("push_scope")});
  var cns158 = Cobre.Lazy(function () { return string("init")});
  var cns159 = Cobre.Lazy(function () { return string("limit")});
  var cns160 = Cobre.Lazy(function () { return string("step")});
  var cns161 = Cobre.Lazy(function () { return string("1")});
  var cns162 = Cobre.Lazy(function () { return string("<")});
  var cns163 = Cobre.Lazy(function () { return string(">")});
  var cns164 = Cobre.Lazy(function () { return string("jmp")});
  var cns165 = Cobre.Lazy(function () { return string("+")});
  var cns166 = Cobre.Lazy(function () { return string("pop_scope")});
  var cns167 = Cobre.Lazy(function () { return string("remove")});
  function Function_compile_numfor (reg_0, reg_1) {
    var reg_4, reg_5, reg_7, reg_8, reg_10, reg_12, reg_13, reg_15, reg_17, reg_18, reg_20, reg_25, reg_26, reg_31, reg_32, reg_35, reg_36, reg_37, reg_40, reg_42, reg_43, reg_48, reg_50, reg_51, reg_52, reg_55, reg_57, reg_58, reg_63, reg_64, reg_69, reg_70, reg_76, reg_77, reg_78, reg_86, reg_87, reg_88, reg_93, reg_97, reg_101, reg_102, reg_103, reg_104, reg_111, reg_113, reg_114, reg_115, reg_122, reg_124, reg_125, reg_126, reg_132, reg_133, reg_135, reg_137, reg_138, reg_139, reg_146, reg_147, reg_148, reg_149, reg_158, reg_160, reg_161, reg_162, reg_169, reg_170, reg_171, reg_177, reg_178, reg_179, reg_185, reg_186, reg_187, reg_188, reg_199, reg_200, reg_201, reg_208, reg_209, reg_210, reg_216, reg_217, reg_222, reg_223, reg_224, reg_225, reg_234, reg_236, reg_237, reg_238, reg_245, reg_246, reg_247, reg_253, reg_254, reg_255, reg_261, reg_262, reg_268, reg_269, reg_273;
    var goto_96=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_7 = get(reg_4, cns125());
    reg_8 = newStack();
    push_Stack(reg_8, reg_4);
    reg_10 = first_Stack(call(reg_7, reg_8));
    reg_12 = get(reg_4, cns125());
    reg_13 = newStack();
    push_Stack(reg_13, reg_4);
    reg_15 = first_Stack(call(reg_12, reg_13));
    reg_17 = get(reg_4, cns125());
    reg_18 = newStack();
    push_Stack(reg_18, reg_4);
    reg_20 = first_Stack(call(reg_17, reg_18));
    reg_25 = get(get(reg_1[0], cns4()), cns27());
    reg_26 = newStack();
    push_Stack(reg_26, get(reg_4, cns156()));
    push_Stack(reg_26, reg_15);
    reg_29 = call(reg_25, reg_26);
    reg_31 = get(reg_4, cns157());
    reg_32 = newStack();
    push_Stack(reg_32, reg_4);
    reg_33 = call(reg_31, reg_32);
    reg_35 = get(reg_4, cns25());
    reg_36 = newStack();
    push_Stack(reg_36, reg_4);
    reg_37 = newTable();
    set(reg_37, cns8(), cns75());
    reg_40 = cns41();
    reg_42 = get(reg_4, cns100());
    reg_43 = newStack();
    push_Stack(reg_43, reg_4);
    push_Stack(reg_43, get(reg_5, cns158()));
    table_append(reg_37, reg_40, call(reg_42, reg_43));
    push_Stack(reg_36, reg_37);
    reg_48 = first_Stack(call(reg_35, reg_36));
    reg_50 = get(reg_4, cns25());
    reg_51 = newStack();
    push_Stack(reg_51, reg_4);
    reg_52 = newTable();
    set(reg_52, cns8(), cns75());
    reg_55 = cns41();
    reg_57 = get(reg_4, cns100());
    reg_58 = newStack();
    push_Stack(reg_58, reg_4);
    push_Stack(reg_58, get(reg_5, cns159()));
    table_append(reg_52, reg_55, call(reg_57, reg_58));
    push_Stack(reg_51, reg_52);
    reg_63 = first_Stack(call(reg_50, reg_51));
    reg_64 = nil();
    goto_96 = !tobool(get(reg_5, cns160()));
    if (!goto_96) {
      reg_69 = get(reg_4, cns100());
      reg_70 = newStack();
      push_Stack(reg_70, reg_4);
      push_Stack(reg_70, get(reg_5, cns160()));
      reg_64 = first_Stack(call(reg_69, reg_70));
    }
    if ((goto_96 || false)) {
      goto_96 = false;
      reg_76 = get(reg_4, cns100());
      reg_77 = newStack();
      push_Stack(reg_77, reg_4);
      reg_78 = newTable();
      set(reg_78, cns19(), cns112());
      set(reg_78, cns96(), cns161());
      push_Stack(reg_77, reg_78);
      reg_64 = first_Stack(call(reg_76, reg_77));
    }
    reg_86 = get(reg_4, cns25());
    reg_87 = newStack();
    push_Stack(reg_87, reg_4);
    reg_88 = newTable();
    set(reg_88, cns8(), cns75());
    set(reg_88, cns41(), reg_64);
    push_Stack(reg_87, reg_88);
    reg_93 = first_Stack(call(reg_86, reg_87));
    reg_97 = get(get(reg_4, cns74()), cns53());
    set(reg_97, get(reg_5, cns28()), reg_48);
    reg_101 = get(reg_4, cns25());
    reg_102 = newStack();
    push_Stack(reg_102, reg_4);
    reg_103 = newTable();
    reg_104 = cns8();
    set(reg_103, reg_104, get(get(reg_1[0], cns131()), cns162()));
    set(reg_103, cns41(), reg_93);
    reg_111 = cns102();
    reg_113 = get(reg_4, cns100());
    reg_114 = newStack();
    push_Stack(reg_114, reg_4);
    reg_115 = newTable();
    set(reg_115, cns19(), cns112());
    set(reg_115, cns96(), cns29());
    push_Stack(reg_114, reg_115);
    table_append(reg_103, reg_111, call(reg_113, reg_114));
    push_Stack(reg_102, reg_103);
    reg_122 = first_Stack(call(reg_101, reg_102));
    reg_124 = get(reg_4, cns25());
    reg_125 = newStack();
    push_Stack(reg_125, reg_4);
    reg_126 = newTable();
    set(reg_126, cns8(), cns130());
    set(reg_126, cns41(), reg_10);
    push_Stack(reg_125, reg_126);
    reg_130 = call(reg_124, reg_125);
    reg_132 = get(reg_4, cns125());
    reg_133 = newStack();
    push_Stack(reg_133, reg_4);
    reg_135 = first_Stack(call(reg_132, reg_133));
    reg_137 = get(reg_4, cns25());
    reg_138 = newStack();
    push_Stack(reg_138, reg_4);
    reg_139 = newTable();
    set(reg_139, cns8(), cns127());
    set(reg_139, cns41(), reg_135);
    set(reg_139, cns102(), reg_122);
    push_Stack(reg_138, reg_139);
    reg_144 = call(reg_137, reg_138);
    reg_146 = get(reg_4, cns25());
    reg_147 = newStack();
    push_Stack(reg_147, reg_4);
    reg_148 = newTable();
    reg_149 = cns8();
    set(reg_148, reg_149, get(get(reg_1[0], cns131()), cns163()));
    set(reg_148, cns41(), reg_48);
    set(reg_148, cns102(), reg_63);
    push_Stack(reg_147, reg_148);
    reg_158 = first_Stack(call(reg_146, reg_147));
    reg_160 = get(reg_4, cns25());
    reg_161 = newStack();
    push_Stack(reg_161, reg_4);
    reg_162 = newTable();
    set(reg_162, cns8(), cns127());
    set(reg_162, cns41(), reg_15);
    set(reg_162, cns102(), reg_158);
    push_Stack(reg_161, reg_162);
    reg_167 = call(reg_160, reg_161);
    reg_169 = get(reg_4, cns25());
    reg_170 = newStack();
    push_Stack(reg_170, reg_4);
    reg_171 = newTable();
    set(reg_171, cns8(), cns164());
    set(reg_171, cns41(), reg_20);
    push_Stack(reg_170, reg_171);
    reg_175 = call(reg_169, reg_170);
    reg_177 = get(reg_4, cns25());
    reg_178 = newStack();
    push_Stack(reg_178, reg_4);
    reg_179 = newTable();
    set(reg_179, cns8(), cns130());
    set(reg_179, cns41(), reg_135);
    push_Stack(reg_178, reg_179);
    reg_183 = call(reg_177, reg_178);
    reg_185 = get(reg_4, cns25());
    reg_186 = newStack();
    push_Stack(reg_186, reg_4);
    reg_187 = newTable();
    reg_188 = cns8();
    set(reg_187, reg_188, get(get(reg_1[0], cns131()), cns162()));
    set(reg_187, cns41(), reg_48);
    set(reg_187, cns102(), reg_63);
    push_Stack(reg_186, reg_187);
    reg_158 = first_Stack(call(reg_185, reg_186));
    reg_199 = get(reg_4, cns25());
    reg_200 = newStack();
    push_Stack(reg_200, reg_4);
    reg_201 = newTable();
    set(reg_201, cns8(), cns127());
    set(reg_201, cns41(), reg_15);
    set(reg_201, cns102(), reg_158);
    push_Stack(reg_200, reg_201);
    reg_206 = call(reg_199, reg_200);
    reg_208 = get(reg_4, cns25());
    reg_209 = newStack();
    push_Stack(reg_209, reg_4);
    reg_210 = newTable();
    set(reg_210, cns8(), cns130());
    set(reg_210, cns41(), reg_20);
    push_Stack(reg_209, reg_210);
    reg_214 = call(reg_208, reg_209);
    reg_216 = get(reg_4, cns76());
    reg_217 = newStack();
    push_Stack(reg_217, reg_4);
    push_Stack(reg_217, get(reg_5, cns77()));
    reg_220 = call(reg_216, reg_217);
    reg_222 = get(reg_4, cns25());
    reg_223 = newStack();
    push_Stack(reg_223, reg_4);
    reg_224 = newTable();
    reg_225 = cns8();
    set(reg_224, reg_225, get(get(reg_1[0], cns131()), cns165()));
    set(reg_224, cns41(), reg_48);
    set(reg_224, cns102(), reg_93);
    push_Stack(reg_223, reg_224);
    reg_234 = first_Stack(call(reg_222, reg_223));
    reg_236 = get(reg_4, cns25());
    reg_237 = newStack();
    push_Stack(reg_237, reg_4);
    reg_238 = newTable();
    set(reg_238, cns8(), cns59());
    set(reg_238, cns41(), reg_48);
    set(reg_238, cns102(), reg_234);
    push_Stack(reg_237, reg_238);
    reg_243 = call(reg_236, reg_237);
    reg_245 = get(reg_4, cns25());
    reg_246 = newStack();
    push_Stack(reg_246, reg_4);
    reg_247 = newTable();
    set(reg_247, cns8(), cns164());
    set(reg_247, cns41(), reg_10);
    push_Stack(reg_246, reg_247);
    reg_251 = call(reg_245, reg_246);
    reg_253 = get(reg_4, cns25());
    reg_254 = newStack();
    push_Stack(reg_254, reg_4);
    reg_255 = newTable();
    set(reg_255, cns8(), cns130());
    set(reg_255, cns41(), reg_15);
    push_Stack(reg_254, reg_255);
    reg_259 = call(reg_253, reg_254);
    reg_261 = get(reg_4, cns166());
    reg_262 = newStack();
    push_Stack(reg_262, reg_4);
    reg_263 = call(reg_261, reg_262);
    reg_268 = get(get(reg_1[0], cns4()), cns167());
    reg_269 = newStack();
    push_Stack(reg_269, get(reg_4, cns156()));
    reg_272 = call(reg_268, reg_269);
    reg_273 = newStack();
    return reg_273;
  }
  var mod31 = new Cobre.Module({
    "0": Function_compile_numfor,
  });
  var item296 = closure.build(mod31);
  var item296$new = item296.get("new");
  var cns168 = Cobre.Lazy(function () { return string("compile_genfor")});
  var mod34 = new Cobre.Module({
    "0": tp1,
  });
  var cns169 = Cobre.Lazy(function () { return string(".f")});
  var cns170 = Cobre.Lazy(function () { return string(".s")});
  var cns171 = Cobre.Lazy(function () { return string(".var")});
  var cns172 = Cobre.Lazy(function () { return string("==")});
  function Function_compile_genfor (reg_0, reg_1) {
    var reg_4, reg_5, reg_7, reg_8, reg_10, reg_12, reg_13, reg_15, reg_20, reg_21, reg_26, reg_27, reg_30, reg_31, reg_32, reg_33, reg_34, reg_37, reg_38, reg_41, reg_42, reg_53, reg_59, reg_65, reg_67, reg_68, reg_69, reg_75, reg_76, reg_77, reg_78, reg_83, reg_85, reg_86, reg_87, reg_88, reg_96, reg_97, reg_98, reg_99, reg_107, reg_108, reg_109, reg_110, reg_117, reg_120, reg_121, reg_124, reg_125, reg_126, reg_127, reg_128, reg_129, reg_130, reg_131, reg_136, reg_137, reg_138, reg_139, reg_145, reg_149, reg_151, reg_152, reg_153, reg_163, reg_164, reg_165, reg_172, reg_173, reg_174, reg_175, reg_182, reg_184, reg_185, reg_186, reg_187, reg_193, reg_195, reg_196, reg_197, reg_204, reg_205, reg_210, reg_211, reg_212, reg_218, reg_219, reg_220, reg_226, reg_227, reg_233, reg_234, reg_238;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_7 = get(reg_4, cns125());
    reg_8 = newStack();
    push_Stack(reg_8, reg_4);
    reg_10 = first_Stack(call(reg_7, reg_8));
    reg_12 = get(reg_4, cns125());
    reg_13 = newStack();
    push_Stack(reg_13, reg_4);
    reg_15 = first_Stack(call(reg_12, reg_13));
    reg_20 = get(get(reg_1[0], cns4()), cns27());
    reg_21 = newStack();
    push_Stack(reg_21, get(reg_4, cns156()));
    push_Stack(reg_21, reg_15);
    reg_24 = call(reg_20, reg_21);
    reg_26 = get(reg_4, cns157());
    reg_27 = newStack();
    push_Stack(reg_27, reg_4);
    reg_28 = call(reg_26, reg_27);
    reg_30 = get(reg_4, cns145());
    reg_31 = newStack();
    push_Stack(reg_31, reg_4);
    reg_32 = newTable();
    reg_33 = cns8();
    reg_34 = newTable();
    set(reg_34, cns146(), cns169());
    set(reg_32, reg_33, reg_34);
    reg_37 = cns41();
    reg_38 = newTable();
    set(reg_38, cns146(), cns170());
    set(reg_32, reg_37, reg_38);
    reg_41 = cns102();
    reg_42 = newTable();
    set(reg_42, cns146(), cns171());
    set(reg_32, reg_41, reg_42);
    push_Stack(reg_31, reg_32);
    push_Stack(reg_31, get(reg_5, cns91()));
    reg_47 = call(reg_30, reg_31);
    reg_53 = get(get(get(reg_4, cns74()), cns53()), cns169());
    reg_59 = get(get(get(reg_4, cns74()), cns53()), cns170());
    reg_65 = get(get(get(reg_4, cns74()), cns53()), cns171());
    reg_67 = get(reg_4, cns25());
    reg_68 = newStack();
    push_Stack(reg_68, reg_4);
    reg_69 = newTable();
    set(reg_69, cns8(), cns130());
    set(reg_69, cns41(), reg_10);
    push_Stack(reg_68, reg_69);
    reg_73 = call(reg_67, reg_68);
    reg_75 = get(reg_4, cns25());
    reg_76 = newStack();
    push_Stack(reg_76, reg_4);
    reg_77 = newTable();
    reg_78 = cns8();
    set(reg_77, reg_78, get(reg_1[0], cns80()));
    push_Stack(reg_76, reg_77);
    reg_83 = first_Stack(call(reg_75, reg_76));
    reg_85 = get(reg_4, cns25());
    reg_86 = newStack();
    push_Stack(reg_86, reg_4);
    reg_87 = newTable();
    reg_88 = cns8();
    set(reg_87, reg_88, get(reg_1[0], cns103()));
    set(reg_87, cns41(), reg_83);
    set(reg_87, cns102(), reg_59);
    push_Stack(reg_86, reg_87);
    reg_94 = call(reg_85, reg_86);
    reg_96 = get(reg_4, cns25());
    reg_97 = newStack();
    push_Stack(reg_97, reg_4);
    reg_98 = newTable();
    reg_99 = cns8();
    set(reg_98, reg_99, get(reg_1[0], cns103()));
    set(reg_98, cns41(), reg_83);
    set(reg_98, cns102(), reg_65);
    push_Stack(reg_97, reg_98);
    reg_105 = call(reg_96, reg_97);
    reg_107 = get(reg_4, cns25());
    reg_108 = newStack();
    push_Stack(reg_108, reg_4);
    reg_109 = newTable();
    reg_110 = cns8();
    set(reg_109, reg_110, get(reg_1[0], cns105()));
    set(reg_109, cns41(), reg_53);
    set(reg_109, cns102(), reg_83);
    push_Stack(reg_108, reg_109);
    reg_117 = first_Stack(call(reg_107, reg_108));
    reg_120 = get(reg_1[0], cns43());
    reg_121 = newStack();
    push_Stack(reg_121, get(reg_5, cns71()));
    reg_124 = call(reg_120, reg_121);
    reg_125 = next_Stack(reg_124);
    reg_126 = next_Stack(reg_124);
    reg_127 = next_Stack(reg_124);
    loop_1: while (true) {
      reg_128 = newStack();
      push_Stack(reg_128, reg_126);
      push_Stack(reg_128, reg_127);
      reg_129 = call(reg_125, reg_128);
      reg_130 = next_Stack(reg_129);
      reg_127 = reg_130;
      reg_131 = next_Stack(reg_129);
      if (tobool(eq(reg_127, nil()))) break loop_1;
      reg_136 = get(reg_4, cns25());
      reg_137 = newStack();
      push_Stack(reg_137, reg_4);
      reg_138 = newTable();
      reg_139 = cns8();
      set(reg_138, reg_139, get(reg_1[0], cns73()));
      set(reg_138, cns41(), reg_117);
      push_Stack(reg_137, reg_138);
      reg_145 = first_Stack(call(reg_136, reg_137));
      reg_149 = get(get(reg_4, cns74()), cns53());
      reg_151 = get(reg_4, cns25());
      reg_152 = newStack();
      push_Stack(reg_152, reg_4);
      reg_153 = newTable();
      set(reg_153, cns8(), cns75());
      set(reg_153, cns41(), reg_145);
      push_Stack(reg_152, reg_153);
      set(reg_149, reg_131, first_Stack(call(reg_151, reg_152)));
      if (tobool(eq(reg_130, cns8()))) {
        reg_163 = get(reg_4, cns25());
        reg_164 = newStack();
        push_Stack(reg_164, reg_4);
        reg_165 = newTable();
        set(reg_165, cns8(), cns59());
        set(reg_165, cns41(), reg_65);
        set(reg_165, cns102(), reg_145);
        push_Stack(reg_164, reg_165);
        reg_170 = call(reg_163, reg_164);
      }
    }
    reg_172 = get(reg_4, cns25());
    reg_173 = newStack();
    push_Stack(reg_173, reg_4);
    reg_174 = newTable();
    reg_175 = cns8();
    set(reg_174, reg_175, get(get(reg_1[0], cns131()), cns172()));
    set(reg_174, cns41(), reg_65);
    reg_182 = cns102();
    reg_184 = get(reg_4, cns25());
    reg_185 = newStack();
    push_Stack(reg_185, reg_4);
    reg_186 = newTable();
    reg_187 = cns8();
    set(reg_186, reg_187, get(reg_1[0], cns42()));
    push_Stack(reg_185, reg_186);
    table_append(reg_174, reg_182, call(reg_184, reg_185));
    push_Stack(reg_173, reg_174);
    reg_193 = first_Stack(call(reg_172, reg_173));
    reg_195 = get(reg_4, cns25());
    reg_196 = newStack();
    push_Stack(reg_196, reg_4);
    reg_197 = newTable();
    set(reg_197, cns8(), cns127());
    set(reg_197, cns41(), reg_15);
    set(reg_197, cns102(), reg_193);
    push_Stack(reg_196, reg_197);
    reg_202 = call(reg_195, reg_196);
    reg_204 = get(reg_4, cns76());
    reg_205 = newStack();
    push_Stack(reg_205, reg_4);
    push_Stack(reg_205, get(reg_5, cns77()));
    reg_208 = call(reg_204, reg_205);
    reg_210 = get(reg_4, cns25());
    reg_211 = newStack();
    push_Stack(reg_211, reg_4);
    reg_212 = newTable();
    set(reg_212, cns8(), cns164());
    set(reg_212, cns41(), reg_10);
    push_Stack(reg_211, reg_212);
    reg_216 = call(reg_210, reg_211);
    reg_218 = get(reg_4, cns25());
    reg_219 = newStack();
    push_Stack(reg_219, reg_4);
    reg_220 = newTable();
    set(reg_220, cns8(), cns130());
    set(reg_220, cns41(), reg_15);
    push_Stack(reg_219, reg_220);
    reg_224 = call(reg_218, reg_219);
    reg_226 = get(reg_4, cns166());
    reg_227 = newStack();
    push_Stack(reg_227, reg_4);
    reg_228 = call(reg_226, reg_227);
    reg_233 = get(get(reg_1[0], cns4()), cns167());
    reg_234 = newStack();
    push_Stack(reg_234, get(reg_4, cns156()));
    reg_237 = call(reg_233, reg_234);
    reg_238 = newStack();
    return reg_238;
  }
  var mod33 = new Cobre.Module({
    "0": Function_compile_genfor,
  });
  var item307 = closure.build(mod33);
  var item307$new = item307.get("new");
  var cns173 = Cobre.Lazy(function () { return string("compileStmt")});
  var mod36 = new Cobre.Module({
    "0": tp1,
  });
  var cns174 = Cobre.Lazy(function () { return string("assignment")});
  var cns175 = Cobre.Lazy(function () { return string("lhs")});
  var cns176 = Cobre.Lazy(function () { return string("funcstat")});
  var cns177 = Cobre.Lazy(function () { return string("localfunc")});
  var cns178 = Cobre.Lazy(function () { return string("do")});
  var cns179 = Cobre.Lazy(function () { return string("if")});
  var cns180 = Cobre.Lazy(function () { return string("clauses")});
  var cns181 = Cobre.Lazy(function () { return string("cond")});
  var cns182 = Cobre.Lazy(function () { return string("els")});
  var cns183 = Cobre.Lazy(function () { return string("while")});
  var cns184 = Cobre.Lazy(function () { return string("repeat")});
  var cns185 = Cobre.Lazy(function () { return string("numfor")});
  var cns186 = Cobre.Lazy(function () { return string("genfor")});
  var cns187 = Cobre.Lazy(function () { return string("break")});
  var cns188 = Cobre.Lazy(function () { return string("goto")});
  var cns189 = Cobre.Lazy(function () { return string("statement not supported: ")});
  function Function_compileStmt (reg_0, reg_1) {
    var reg_4, reg_5, reg_7, reg_11, reg_14, reg_15, reg_18, reg_19, reg_20, reg_21, reg_22, reg_23, reg_24, reg_25, reg_29, reg_32, reg_33, reg_43, reg_44, reg_49, reg_52, reg_53, reg_56, reg_57, reg_58, reg_59, reg_60, reg_61, reg_62, reg_63, reg_68, reg_69, reg_73, reg_74, reg_84, reg_85, reg_90, reg_93, reg_94, reg_97, reg_98, reg_99, reg_100, reg_101, reg_102, reg_103, reg_104, reg_111, reg_119, reg_120, reg_122, reg_124, reg_125, reg_131, reg_132, reg_134, reg_136, reg_137, reg_143, reg_144, reg_145, reg_160, reg_161, reg_170, reg_171, reg_172, reg_173, reg_175, reg_176, reg_180, reg_181, reg_190, reg_196, reg_199, reg_202, reg_204, reg_205, reg_211, reg_212, reg_218, reg_219, reg_222, reg_223, reg_228, reg_229, reg_235, reg_236, reg_238, reg_241, reg_242, reg_245, reg_246, reg_247, reg_248, reg_249, reg_250, reg_252, reg_257, reg_258, reg_260, reg_262, reg_263, reg_267, reg_269, reg_270, reg_271, reg_278, reg_279, reg_282, reg_283, reg_288, reg_289, reg_292, reg_293, reg_294, reg_300, reg_301, reg_302, reg_311, reg_312, reg_315, reg_316, reg_321, reg_322, reg_325, reg_326, reg_327, reg_336, reg_337, reg_339, reg_341, reg_342, reg_344, reg_346, reg_347, reg_348, reg_354, reg_355, reg_359, reg_361, reg_362, reg_363, reg_373, reg_374, reg_379, reg_380, reg_383, reg_384, reg_389, reg_390, reg_396, reg_397, reg_402, reg_403, reg_404, reg_410, reg_411, reg_412, reg_421, reg_422, reg_424, reg_426, reg_427, reg_429, reg_434, reg_435, reg_440, reg_441, reg_444, reg_445, reg_446, reg_452, reg_453, reg_458, reg_459, reg_463, reg_465, reg_466, reg_467, reg_474, reg_475, reg_476, reg_482, reg_483, reg_489, reg_490, reg_498, reg_499, reg_505, reg_506, reg_512, reg_513, reg_514, reg_517, reg_519, reg_529, reg_530, reg_531, reg_534, reg_542, reg_543, reg_544, reg_547, reg_550, reg_556, reg_557, reg_561;
    var goto_51=false, goto_62=false, goto_111=false, goto_179=false, goto_211=false, goto_263=false, goto_300=false, goto_323=false, goto_463=false, goto_578=false, goto_681=false, goto_692=false, goto_703=false, goto_726=false, goto_745=false, goto_768=false;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_7 = get(reg_5, cns19());
    goto_51 = !tobool(eq(reg_7, cns75()));
    if (!goto_51) {
      reg_11 = newTable();
      reg_14 = get(reg_1[0], cns43());
      reg_15 = newStack();
      push_Stack(reg_15, get(reg_5, cns71()));
      reg_18 = call(reg_14, reg_15);
      reg_19 = next_Stack(reg_18);
      reg_20 = next_Stack(reg_18);
      reg_21 = next_Stack(reg_18);
      loop_4: while (true) {
        reg_22 = newStack();
        push_Stack(reg_22, reg_20);
        push_Stack(reg_22, reg_21);
        reg_23 = call(reg_19, reg_22);
        reg_24 = next_Stack(reg_23);
        reg_21 = reg_24;
        reg_25 = next_Stack(reg_23);
        if (tobool(eq(reg_21, nil()))) break loop_4;
        reg_29 = newTable();
        set(reg_29, cns146(), reg_25);
        set(reg_11, reg_24, reg_29);
      }
      reg_32 = get(reg_4, cns145());
      reg_33 = newStack();
      push_Stack(reg_33, reg_4);
      push_Stack(reg_33, reg_11);
      push_Stack(reg_33, get(reg_5, cns91()));
      push_Stack(reg_33, get(reg_5, cns68()));
      reg_38 = call(reg_32, reg_33);
    }
    if ((goto_51 || false)) {
      goto_51 = false;
      goto_62 = !tobool(eq(reg_7, cns79()));
      if (!goto_62) {
        reg_43 = get(reg_4, cns99());
        reg_44 = newStack();
        push_Stack(reg_44, reg_4);
        push_Stack(reg_44, reg_5);
        reg_45 = call(reg_43, reg_44);
      }
      if ((goto_62 || false)) {
        goto_62 = false;
        goto_111 = !tobool(eq(reg_7, cns174()));
        if (!goto_111) {
          reg_49 = newTable();
          reg_52 = get(reg_1[0], cns43());
          reg_53 = newStack();
          push_Stack(reg_53, get(reg_5, cns175()));
          reg_56 = call(reg_52, reg_53);
          reg_57 = next_Stack(reg_56);
          reg_58 = next_Stack(reg_56);
          reg_59 = next_Stack(reg_56);
          loop_3: while (true) {
            reg_60 = newStack();
            push_Stack(reg_60, reg_58);
            push_Stack(reg_60, reg_59);
            reg_61 = call(reg_57, reg_60);
            reg_62 = next_Stack(reg_61);
            reg_59 = reg_62;
            reg_63 = next_Stack(reg_61);
            if (tobool(eq(reg_59, nil()))) break loop_3;
            reg_68 = get(reg_4, cns147());
            reg_69 = newStack();
            push_Stack(reg_69, reg_4);
            push_Stack(reg_69, reg_63);
            set(reg_49, reg_62, first_Stack(call(reg_68, reg_69)));
          }
          reg_73 = get(reg_4, cns145());
          reg_74 = newStack();
          push_Stack(reg_74, reg_4);
          push_Stack(reg_74, reg_49);
          push_Stack(reg_74, get(reg_5, cns91()));
          push_Stack(reg_74, get(reg_5, cns68()));
          reg_79 = call(reg_73, reg_74);
        }
        if ((goto_111 || false)) {
          goto_111 = false;
          goto_211 = !tobool(eq(reg_7, cns78()));
          if (!goto_211) {
            reg_84 = get(reg_4, cns79());
            reg_85 = newStack();
            push_Stack(reg_85, reg_4);
            push_Stack(reg_85, get(reg_1[0], cns80()));
            reg_90 = first_Stack(call(reg_84, reg_85));
            reg_93 = get(reg_1[0], cns43());
            reg_94 = newStack();
            push_Stack(reg_94, get(reg_5, cns91()));
            reg_97 = call(reg_93, reg_94);
            reg_98 = next_Stack(reg_97);
            reg_99 = next_Stack(reg_97);
            reg_100 = next_Stack(reg_97);
            loop_2: while (true) {
              reg_101 = newStack();
              push_Stack(reg_101, reg_99);
              push_Stack(reg_101, reg_100);
              reg_102 = call(reg_98, reg_101);
              reg_103 = next_Stack(reg_102);
              reg_100 = reg_103;
              reg_104 = next_Stack(reg_102);
              if (tobool(eq(reg_100, nil()))) break loop_2;
              reg_111 = eq(reg_103, length(get(reg_5, cns91())));
              if (tobool(reg_111)) {
                reg_111 = eq(get(reg_104, cns19()), cns79());
              }
              goto_179 = !tobool(reg_111);
              if (!goto_179) {
                reg_119 = get(reg_4, cns99());
                reg_120 = newStack();
                push_Stack(reg_120, reg_4);
                push_Stack(reg_120, reg_104);
                reg_122 = first_Stack(call(reg_119, reg_120));
                reg_124 = get(reg_4, cns79());
                reg_125 = newStack();
                push_Stack(reg_125, reg_4);
                push_Stack(reg_125, get(reg_1[0], cns104()));
                push_Stack(reg_125, reg_90);
                push_Stack(reg_125, reg_122);
                reg_129 = call(reg_124, reg_125);
              }
              if ((goto_179 || false)) {
                goto_179 = false;
                reg_131 = get(reg_4, cns100());
                reg_132 = newStack();
                push_Stack(reg_132, reg_4);
                push_Stack(reg_132, reg_104);
                reg_134 = first_Stack(call(reg_131, reg_132));
                reg_136 = get(reg_4, cns79());
                reg_137 = newStack();
                push_Stack(reg_137, reg_4);
                push_Stack(reg_137, get(reg_1[0], cns103()));
                push_Stack(reg_137, reg_90);
                push_Stack(reg_137, reg_134);
                reg_141 = call(reg_136, reg_137);
              }
            }
            reg_143 = get(reg_4, cns25());
            reg_144 = newStack();
            push_Stack(reg_144, reg_4);
            reg_145 = newTable();
            set(reg_145, cns8(), cns81());
            set(reg_145, cns41(), reg_90);
            push_Stack(reg_144, reg_145);
            reg_149 = call(reg_143, reg_144);
          }
          if ((goto_211 || false)) {
            goto_211 = false;
            goto_263 = !tobool(eq(reg_7, cns176()));
            if (!goto_263) {
              if (tobool(get(reg_5, cns70()))) {
                reg_160 = get(get(reg_1[0], cns4()), cns27());
                reg_161 = newStack();
                push_Stack(reg_161, get(get(reg_5, cns77()), cns71()));
                push_Stack(reg_161, cns8());
                push_Stack(reg_161, cns72());
                reg_168 = call(reg_160, reg_161);
              }
              reg_170 = get(reg_4, cns145());
              reg_171 = newStack();
              push_Stack(reg_171, reg_4);
              reg_172 = newTable();
              reg_173 = cns8();
              reg_175 = get(reg_4, cns147());
              reg_176 = newStack();
              push_Stack(reg_176, reg_4);
              push_Stack(reg_176, get(reg_5, cns175()));
              table_append(reg_172, reg_173, call(reg_175, reg_176));
              push_Stack(reg_171, reg_172);
              reg_180 = newTable();
              reg_181 = cns8();
              set(reg_180, reg_181, get(reg_5, cns77()));
              push_Stack(reg_171, reg_180);
              push_Stack(reg_171, get(reg_5, cns68()));
              reg_186 = call(reg_170, reg_171);
            }
            if ((goto_263 || false)) {
              goto_263 = false;
              goto_300 = !tobool(eq(reg_7, cns177()));
              if (!goto_300) {
                reg_190 = newTable();
                set(reg_190, cns8(), cns75());
                reg_196 = get(get(reg_4, cns74()), cns53());
                set(reg_196, get(reg_5, cns28()), reg_190);
                reg_199 = cns63();
                set(reg_5, reg_199, get(reg_5, cns28()));
                reg_202 = cns41();
                reg_204 = get(reg_4, cns100());
                reg_205 = newStack();
                push_Stack(reg_205, reg_4);
                push_Stack(reg_205, get(reg_5, cns77()));
                set(reg_190, reg_202, first_Stack(call(reg_204, reg_205)));
                reg_211 = get(reg_4, cns25());
                reg_212 = newStack();
                push_Stack(reg_212, reg_4);
                push_Stack(reg_212, reg_190);
                reg_213 = call(reg_211, reg_212);
              }
              if ((goto_300 || false)) {
                goto_300 = false;
                goto_323 = !tobool(eq(reg_7, cns178()));
                if (!goto_323) {
                  reg_218 = get(reg_4, cns157());
                  reg_219 = newStack();
                  push_Stack(reg_219, reg_4);
                  reg_220 = call(reg_218, reg_219);
                  reg_222 = get(reg_4, cns76());
                  reg_223 = newStack();
                  push_Stack(reg_223, reg_4);
                  push_Stack(reg_223, get(reg_5, cns77()));
                  reg_226 = call(reg_222, reg_223);
                  reg_228 = get(reg_4, cns166());
                  reg_229 = newStack();
                  push_Stack(reg_229, reg_4);
                  reg_230 = call(reg_228, reg_229);
                }
                if ((goto_323 || false)) {
                  goto_323 = false;
                  goto_463 = !tobool(eq(reg_7, cns179()));
                  if (!goto_463) {
                    reg_235 = get(reg_4, cns125());
                    reg_236 = newStack();
                    push_Stack(reg_236, reg_4);
                    reg_238 = first_Stack(call(reg_235, reg_236));
                    reg_241 = get(reg_1[0], cns43());
                    reg_242 = newStack();
                    push_Stack(reg_242, get(reg_5, cns180()));
                    reg_245 = call(reg_241, reg_242);
                    reg_246 = next_Stack(reg_245);
                    reg_247 = next_Stack(reg_245);
                    reg_248 = next_Stack(reg_245);
                    loop_1: while (true) {
                      reg_249 = newStack();
                      push_Stack(reg_249, reg_247);
                      push_Stack(reg_249, reg_248);
                      reg_250 = call(reg_246, reg_249);
                      reg_248 = next_Stack(reg_250);
                      reg_252 = next_Stack(reg_250);
                      if (tobool(eq(reg_248, nil()))) break loop_1;
                      reg_257 = get(reg_4, cns125());
                      reg_258 = newStack();
                      push_Stack(reg_258, reg_4);
                      reg_260 = first_Stack(call(reg_257, reg_258));
                      reg_262 = get(reg_4, cns100());
                      reg_263 = newStack();
                      push_Stack(reg_263, reg_4);
                      push_Stack(reg_263, get(reg_252, cns181()));
                      reg_267 = first_Stack(call(reg_262, reg_263));
                      reg_269 = get(reg_4, cns25());
                      reg_270 = newStack();
                      push_Stack(reg_270, reg_4);
                      reg_271 = newTable();
                      set(reg_271, cns8(), cns128());
                      set(reg_271, cns41(), reg_260);
                      set(reg_271, cns102(), reg_267);
                      push_Stack(reg_270, reg_271);
                      reg_276 = call(reg_269, reg_270);
                      reg_278 = get(reg_4, cns157());
                      reg_279 = newStack();
                      push_Stack(reg_279, reg_4);
                      reg_280 = call(reg_278, reg_279);
                      reg_282 = get(reg_4, cns76());
                      reg_283 = newStack();
                      push_Stack(reg_283, reg_4);
                      push_Stack(reg_283, get(reg_252, cns77()));
                      reg_286 = call(reg_282, reg_283);
                      reg_288 = get(reg_4, cns166());
                      reg_289 = newStack();
                      push_Stack(reg_289, reg_4);
                      reg_290 = call(reg_288, reg_289);
                      reg_292 = get(reg_4, cns25());
                      reg_293 = newStack();
                      push_Stack(reg_293, reg_4);
                      reg_294 = newTable();
                      set(reg_294, cns8(), cns164());
                      set(reg_294, cns41(), reg_238);
                      push_Stack(reg_293, reg_294);
                      reg_298 = call(reg_292, reg_293);
                      reg_300 = get(reg_4, cns25());
                      reg_301 = newStack();
                      push_Stack(reg_301, reg_4);
                      reg_302 = newTable();
                      set(reg_302, cns8(), cns130());
                      set(reg_302, cns41(), reg_260);
                      push_Stack(reg_301, reg_302);
                      reg_306 = call(reg_300, reg_301);
                    }
                    if (tobool(get(reg_5, cns182()))) {
                      reg_311 = get(reg_4, cns157());
                      reg_312 = newStack();
                      push_Stack(reg_312, reg_4);
                      reg_313 = call(reg_311, reg_312);
                      reg_315 = get(reg_4, cns76());
                      reg_316 = newStack();
                      push_Stack(reg_316, reg_4);
                      push_Stack(reg_316, get(reg_5, cns182()));
                      reg_319 = call(reg_315, reg_316);
                      reg_321 = get(reg_4, cns166());
                      reg_322 = newStack();
                      push_Stack(reg_322, reg_4);
                      reg_323 = call(reg_321, reg_322);
                    }
                    reg_325 = get(reg_4, cns25());
                    reg_326 = newStack();
                    push_Stack(reg_326, reg_4);
                    reg_327 = newTable();
                    set(reg_327, cns8(), cns130());
                    set(reg_327, cns41(), reg_238);
                    push_Stack(reg_326, reg_327);
                    reg_331 = call(reg_325, reg_326);
                  }
                  if ((goto_463 || false)) {
                    goto_463 = false;
                    goto_578 = !tobool(eq(reg_7, cns183()));
                    if (!goto_578) {
                      reg_336 = get(reg_4, cns125());
                      reg_337 = newStack();
                      push_Stack(reg_337, reg_4);
                      reg_339 = first_Stack(call(reg_336, reg_337));
                      reg_341 = get(reg_4, cns125());
                      reg_342 = newStack();
                      push_Stack(reg_342, reg_4);
                      reg_344 = first_Stack(call(reg_341, reg_342));
                      reg_346 = get(reg_4, cns25());
                      reg_347 = newStack();
                      push_Stack(reg_347, reg_4);
                      reg_348 = newTable();
                      set(reg_348, cns8(), cns130());
                      set(reg_348, cns41(), reg_339);
                      push_Stack(reg_347, reg_348);
                      reg_352 = call(reg_346, reg_347);
                      reg_354 = get(reg_4, cns100());
                      reg_355 = newStack();
                      push_Stack(reg_355, reg_4);
                      push_Stack(reg_355, get(reg_5, cns181()));
                      reg_359 = first_Stack(call(reg_354, reg_355));
                      reg_361 = get(reg_4, cns25());
                      reg_362 = newStack();
                      push_Stack(reg_362, reg_4);
                      reg_363 = newTable();
                      set(reg_363, cns8(), cns128());
                      set(reg_363, cns41(), reg_344);
                      set(reg_363, cns102(), reg_359);
                      push_Stack(reg_362, reg_363);
                      reg_368 = call(reg_361, reg_362);
                      reg_373 = get(get(reg_1[0], cns4()), cns27());
                      reg_374 = newStack();
                      push_Stack(reg_374, get(reg_4, cns156()));
                      push_Stack(reg_374, reg_344);
                      reg_377 = call(reg_373, reg_374);
                      reg_379 = get(reg_4, cns157());
                      reg_380 = newStack();
                      push_Stack(reg_380, reg_4);
                      reg_381 = call(reg_379, reg_380);
                      reg_383 = get(reg_4, cns76());
                      reg_384 = newStack();
                      push_Stack(reg_384, reg_4);
                      push_Stack(reg_384, get(reg_5, cns77()));
                      reg_387 = call(reg_383, reg_384);
                      reg_389 = get(reg_4, cns166());
                      reg_390 = newStack();
                      push_Stack(reg_390, reg_4);
                      reg_391 = call(reg_389, reg_390);
                      reg_396 = get(get(reg_1[0], cns4()), cns167());
                      reg_397 = newStack();
                      push_Stack(reg_397, get(reg_4, cns156()));
                      reg_400 = call(reg_396, reg_397);
                      reg_402 = get(reg_4, cns25());
                      reg_403 = newStack();
                      push_Stack(reg_403, reg_4);
                      reg_404 = newTable();
                      set(reg_404, cns8(), cns164());
                      set(reg_404, cns41(), reg_339);
                      push_Stack(reg_403, reg_404);
                      reg_408 = call(reg_402, reg_403);
                      reg_410 = get(reg_4, cns25());
                      reg_411 = newStack();
                      push_Stack(reg_411, reg_4);
                      reg_412 = newTable();
                      set(reg_412, cns8(), cns130());
                      set(reg_412, cns41(), reg_344);
                      push_Stack(reg_411, reg_412);
                      reg_416 = call(reg_410, reg_411);
                    }
                    if ((goto_578 || false)) {
                      goto_578 = false;
                      goto_681 = !tobool(eq(reg_7, cns184()));
                      if (!goto_681) {
                        reg_421 = get(reg_4, cns125());
                        reg_422 = newStack();
                        push_Stack(reg_422, reg_4);
                        reg_424 = first_Stack(call(reg_421, reg_422));
                        reg_426 = get(reg_4, cns125());
                        reg_427 = newStack();
                        push_Stack(reg_427, reg_4);
                        reg_429 = first_Stack(call(reg_426, reg_427));
                        reg_434 = get(get(reg_1[0], cns4()), cns27());
                        reg_435 = newStack();
                        push_Stack(reg_435, get(reg_4, cns156()));
                        push_Stack(reg_435, reg_429);
                        reg_438 = call(reg_434, reg_435);
                        reg_440 = get(reg_4, cns157());
                        reg_441 = newStack();
                        push_Stack(reg_441, reg_4);
                        reg_442 = call(reg_440, reg_441);
                        reg_444 = get(reg_4, cns25());
                        reg_445 = newStack();
                        push_Stack(reg_445, reg_4);
                        reg_446 = newTable();
                        set(reg_446, cns8(), cns130());
                        set(reg_446, cns41(), reg_424);
                        push_Stack(reg_445, reg_446);
                        reg_450 = call(reg_444, reg_445);
                        reg_452 = get(reg_4, cns76());
                        reg_453 = newStack();
                        push_Stack(reg_453, reg_4);
                        push_Stack(reg_453, get(reg_5, cns77()));
                        reg_456 = call(reg_452, reg_453);
                        reg_458 = get(reg_4, cns100());
                        reg_459 = newStack();
                        push_Stack(reg_459, reg_4);
                        push_Stack(reg_459, get(reg_5, cns181()));
                        reg_463 = first_Stack(call(reg_458, reg_459));
                        reg_465 = get(reg_4, cns25());
                        reg_466 = newStack();
                        push_Stack(reg_466, reg_4);
                        reg_467 = newTable();
                        set(reg_467, cns8(), cns128());
                        set(reg_467, cns41(), reg_424);
                        set(reg_467, cns102(), reg_463);
                        push_Stack(reg_466, reg_467);
                        reg_472 = call(reg_465, reg_466);
                        reg_474 = get(reg_4, cns25());
                        reg_475 = newStack();
                        push_Stack(reg_475, reg_4);
                        reg_476 = newTable();
                        set(reg_476, cns8(), cns130());
                        set(reg_476, cns41(), reg_429);
                        push_Stack(reg_475, reg_476);
                        reg_480 = call(reg_474, reg_475);
                        reg_482 = get(reg_4, cns166());
                        reg_483 = newStack();
                        push_Stack(reg_483, reg_4);
                        reg_484 = call(reg_482, reg_483);
                        reg_489 = get(get(reg_1[0], cns4()), cns167());
                        reg_490 = newStack();
                        push_Stack(reg_490, get(reg_4, cns156()));
                        reg_493 = call(reg_489, reg_490);
                      }
                      if ((goto_681 || false)) {
                        goto_681 = false;
                        goto_692 = !tobool(eq(reg_7, cns185()));
                        if (!goto_692) {
                          reg_498 = get(reg_4, cns155());
                          reg_499 = newStack();
                          push_Stack(reg_499, reg_4);
                          push_Stack(reg_499, reg_5);
                          reg_500 = call(reg_498, reg_499);
                        }
                        if ((goto_692 || false)) {
                          goto_692 = false;
                          goto_703 = !tobool(eq(reg_7, cns186()));
                          if (!goto_703) {
                            reg_505 = get(reg_4, cns168());
                            reg_506 = newStack();
                            push_Stack(reg_506, reg_4);
                            push_Stack(reg_506, reg_5);
                            reg_507 = call(reg_505, reg_506);
                          }
                          if ((goto_703 || false)) {
                            goto_703 = false;
                            goto_726 = !tobool(eq(reg_7, cns187()));
                            if (!goto_726) {
                              reg_512 = get(reg_4, cns25());
                              reg_513 = newStack();
                              push_Stack(reg_513, reg_4);
                              reg_514 = newTable();
                              set(reg_514, cns8(), cns164());
                              reg_517 = cns41();
                              reg_519 = get(reg_4, cns156());
                              set(reg_514, reg_517, get(reg_519, length(get(reg_4, cns156()))));
                              push_Stack(reg_513, reg_514);
                              reg_524 = call(reg_512, reg_513);
                            }
                            if ((goto_726 || false)) {
                              goto_726 = false;
                              goto_745 = !tobool(eq(reg_7, cns130()));
                              if (!goto_745) {
                                reg_529 = get(reg_4, cns25());
                                reg_530 = newStack();
                                push_Stack(reg_530, reg_4);
                                reg_531 = newTable();
                                set(reg_531, cns8(), cns130());
                                reg_534 = cns41();
                                set(reg_531, reg_534, get(reg_5, cns28()));
                                push_Stack(reg_530, reg_531);
                                reg_537 = call(reg_529, reg_530);
                              }
                              if ((goto_745 || false)) {
                                goto_745 = false;
                                goto_768 = !tobool(eq(reg_7, cns188()));
                                if (!goto_768) {
                                  reg_542 = get(reg_4, cns25());
                                  reg_543 = newStack();
                                  push_Stack(reg_543, reg_4);
                                  reg_544 = newTable();
                                  set(reg_544, cns8(), cns164());
                                  reg_547 = cns41();
                                  set(reg_544, reg_547, get(reg_5, cns28()));
                                  reg_550 = cns68();
                                  set(reg_544, reg_550, get(reg_5, cns68()));
                                  push_Stack(reg_543, reg_544);
                                  reg_553 = call(reg_542, reg_543);
                                }
                                if ((goto_768 || false)) {
                                  goto_768 = false;
                                  reg_556 = get(reg_1[0], cns117());
                                  reg_557 = newStack();
                                  push_Stack(reg_557, concat(cns189(), reg_7));
                                  push_Stack(reg_557, reg_5);
                                  reg_560 = call(reg_556, reg_557);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    reg_561 = newStack();
    return reg_561;
  }
  var mod35 = new Cobre.Module({
    "0": Function_compileStmt,
  });
  var item330 = closure.build(mod35);
  var item330$new = item330.get("new");
  var mod38 = new Cobre.Module({
    "0": tp1,
  });
  function Function_compileBlock (reg_0, reg_1) {
    var reg_4, reg_5, reg_8, reg_9, reg_10, reg_11, reg_12, reg_13, reg_14, reg_15, reg_17, reg_22, reg_23, reg_25;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_8 = get(reg_1[0], cns43());
    reg_9 = newStack();
    push_Stack(reg_9, reg_5);
    reg_10 = call(reg_8, reg_9);
    reg_11 = next_Stack(reg_10);
    reg_12 = next_Stack(reg_10);
    reg_13 = next_Stack(reg_10);
    loop_1: while (true) {
      reg_14 = newStack();
      push_Stack(reg_14, reg_12);
      push_Stack(reg_14, reg_13);
      reg_15 = call(reg_11, reg_14);
      reg_13 = next_Stack(reg_15);
      reg_17 = next_Stack(reg_15);
      if (tobool(eq(reg_13, nil()))) break loop_1;
      reg_22 = get(reg_4, cns173());
      reg_23 = newStack();
      push_Stack(reg_23, reg_4);
      push_Stack(reg_23, reg_17);
      reg_24 = call(reg_22, reg_23);
    }
    reg_25 = newStack();
    return reg_25;
  }
  var mod37 = new Cobre.Module({
    "0": Function_compileBlock,
  });
  var item336 = closure.build(mod37);
  var item336$new = item336.get("new");
  var mod40 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
  });
  var cns190 = Cobre.Lazy(function () { return string("labels")});
  var tp3 = new Cobre.Record([tp1,Cobre.Any]);
  var mod42 = new Cobre.Module({
    "0": tp3,
  });
  function function$2 (reg_0, reg_1) {
    var reg_6, reg_9;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_6 = reg_1[1];
    reg_1[1] = add(reg_6, cns8());
    reg_9 = newStack();
    push_Stack(reg_9, reg_6);
    return reg_9;
  }
  var mod41 = new Cobre.Module({
    "0": function$2,
  });
  var item350 = closure.build(mod41);
  var item350$new = item350.get("new");
  var cns191 = Cobre.Lazy(function () { return string("reginc")});
  var cns192 = Cobre.Lazy(function () { return string("dup")});
  var cns193 = Cobre.Lazy(function () { return string("print")});
  var cns194 = Cobre.Lazy(function () { return string("argument does not have register")});
  var cns195 = Cobre.Lazy(function () { return string("bool_f")});
  var sub = lua.get("sub");
  var cns196 = Cobre.Lazy(function () { return string(" expects ")});
  var cns197 = Cobre.Lazy(function () { return string(" arguments, but got ")});
  var cns198 = Cobre.Lazy(function () { return string("Function with multiple returns?")});
  function Function_transform (reg_0, reg_1) {
    var reg_3, reg_4, reg_6, reg_15, reg_20, reg_21, reg_22, reg_23, reg_24, reg_25, reg_26, reg_27, reg_29, reg_34, reg_39, reg_44, reg_47, reg_49, reg_54, reg_56, reg_57, reg_58, reg_66, reg_73, reg_74, reg_75, reg_80, reg_90, reg_95, reg_96, reg_103, reg_108, reg_111, reg_113, reg_114, reg_120, reg_125, reg_127, reg_128, reg_129, reg_133, reg_140, reg_149, reg_151, reg_156, reg_159, reg_161, reg_162, reg_168, reg_173, reg_175, reg_176, reg_177, reg_183, reg_184, reg_190, reg_192, reg_197, reg_202, reg_204, reg_205, reg_206, reg_207, reg_211, reg_217, reg_218, reg_226, reg_227, reg_231, reg_232, reg_240, reg_248, reg_249, reg_252, reg_253, reg_255, reg_256, reg_259, reg_260, reg_275, reg_290, reg_291, reg_295, reg_296, reg_299, reg_300, reg_302;
    var goto_78=false, goto_111=false, goto_120=false, goto_128=false, goto_179=false, goto_186=false, goto_233=false, goto_240=false, goto_253=false, goto_298=false, goto_360=false, goto_382=false;
    reg_3 = [reg_1, nil()];
    reg_4 = next_Stack(reg_0);
    reg_6 = get(reg_4, cns38());
    set(reg_4, cns38(), newTable());
    set(reg_4, cns190(), newTable());
    reg_3[1] = length(get(reg_4, cns31()));
    reg_15 = lua$function(item350$new(reg_3));
    set(reg_1[0], cns191(), reg_15);
    reg_20 = get(reg_1[0], cns43());
    reg_21 = newStack();
    push_Stack(reg_21, reg_6);
    reg_22 = call(reg_20, reg_21);
    reg_23 = next_Stack(reg_22);
    reg_24 = next_Stack(reg_22);
    reg_25 = next_Stack(reg_22);
    loop_1: while (true) {
      reg_26 = newStack();
      push_Stack(reg_26, reg_24);
      push_Stack(reg_26, reg_25);
      reg_27 = call(reg_23, reg_26);
      reg_25 = next_Stack(reg_27);
      reg_29 = next_Stack(reg_27);
      if (tobool(eq(reg_25, nil()))) break loop_1;
      reg_34 = get(reg_29, cns8());
      goto_128 = !tobool(eq(reg_34, cns75()));
      if (!goto_128) {
        reg_39 = get(reg_29, cns41());
        goto_78 = !tobool(get(reg_29, cns54()));
        if (!goto_78) {
          reg_44 = get(reg_4, cns39());
          reg_47 = get(reg_44, get(reg_4, cns40()));
          reg_49 = get(reg_4, cns36());
          reg_54 = get(get(reg_49, get(reg_29, cns45())), cns58());
          reg_56 = get(reg_4, cns25());
          reg_57 = newStack();
          push_Stack(reg_57, reg_4);
          reg_58 = newTable();
          set(reg_58, cns8(), reg_54);
          set(reg_58, cns41(), reg_47);
          set(reg_58, cns102(), reg_39);
          push_Stack(reg_57, reg_58);
          reg_62 = call(reg_56, reg_57);
        }
        if ((goto_78 || false)) {
          goto_78 = false;
          reg_66 = eq(get(reg_39, cns8()), cns89());
          if (tobool(reg_66)) {
            reg_66 = not(get(reg_39, cns54()));
          }
          goto_111 = !tobool(reg_66);
          if (!goto_111) {
            reg_73 = get(reg_4, cns25());
            reg_74 = newStack();
            push_Stack(reg_74, reg_4);
            reg_75 = newTable();
            set(reg_75, cns8(), cns192());
            set(reg_75, cns41(), reg_39);
            push_Stack(reg_74, reg_75);
            reg_79 = call(reg_73, reg_74);
            reg_80 = cns69();
            set(reg_29, reg_80, first_Stack(call(get(reg_1[0], cns191()), newStack())));
          }
          if ((goto_111 || false)) {
            goto_111 = false;
            goto_120 = !tobool(get(reg_39, cns69()));
            if (!goto_120) {
              reg_90 = cns69();
              set(reg_29, reg_90, get(reg_39, cns69()));
            }
            if ((goto_120 || false)) {
              goto_120 = false;
              reg_95 = get(reg_1[0], cns193());
              reg_96 = newStack();
              push_Stack(reg_96, cns194());
              reg_98 = call(reg_95, reg_96);
            }
          }
        }
      }
      if ((goto_128 || false)) {
        goto_128 = false;
        goto_186 = !tobool(eq(reg_34, cns89()));
        if (!goto_186) {
          reg_103 = get(reg_29, cns41());
          goto_179 = !tobool(get(reg_103, cns54()));
          if (!goto_179) {
            reg_108 = get(reg_4, cns39());
            reg_111 = get(reg_108, get(reg_103, cns55()));
            reg_113 = get(reg_4, cns60());
            reg_114 = newStack();
            push_Stack(reg_114, reg_4);
            push_Stack(reg_114, get(reg_103, cns55()));
            reg_120 = get(first_Stack(call(reg_113, reg_114)), cns36());
            reg_125 = get(get(reg_120, get(reg_103, cns45())), cns56());
            reg_127 = get(reg_4, cns25());
            reg_128 = newStack();
            push_Stack(reg_128, reg_4);
            reg_129 = newTable();
            set(reg_129, cns8(), reg_125);
            set(reg_129, cns41(), reg_111);
            push_Stack(reg_128, reg_129);
            reg_132 = call(reg_127, reg_128);
            reg_133 = cns69();
            set(reg_29, reg_133, first_Stack(call(get(reg_1[0], cns191()), newStack())));
          }
          if ((goto_179 || false)) {
            goto_179 = false;
            reg_140 = cns69();
            set(reg_29, reg_140, get(get(reg_29, cns41()), cns69()));
          }
        }
        if ((goto_186 || false)) {
          goto_186 = false;
          goto_240 = !tobool(eq(reg_34, cns59()));
          if (!goto_240) {
            reg_149 = get(reg_29, cns41());
            reg_151 = get(reg_29, cns102());
            goto_233 = !tobool(get(reg_149, cns54()));
            if (!goto_233) {
              reg_156 = get(reg_4, cns39());
              reg_159 = get(reg_156, get(reg_149, cns55()));
              reg_161 = get(reg_4, cns60());
              reg_162 = newStack();
              push_Stack(reg_162, reg_4);
              push_Stack(reg_162, get(reg_149, cns55()));
              reg_168 = get(first_Stack(call(reg_161, reg_162)), cns36());
              reg_173 = get(get(reg_168, get(reg_149, cns45())), cns58());
              reg_175 = get(reg_4, cns25());
              reg_176 = newStack();
              push_Stack(reg_176, reg_4);
              reg_177 = newTable();
              set(reg_177, cns8(), reg_173);
              set(reg_177, cns41(), reg_159);
              set(reg_177, cns102(), reg_151);
              push_Stack(reg_176, reg_177);
              reg_181 = call(reg_175, reg_176);
            }
            if ((goto_233 || false)) {
              goto_233 = false;
              reg_183 = get(reg_4, cns25());
              reg_184 = newStack();
              push_Stack(reg_184, reg_4);
              push_Stack(reg_184, reg_29);
              reg_185 = call(reg_183, reg_184);
            }
          }
          if ((goto_240 || false)) {
            goto_240 = false;
            goto_253 = !tobool(eq(reg_34, cns130()));
            if (!goto_253) {
              reg_190 = get(reg_4, cns190());
              reg_192 = get(reg_29, cns41());
              set(reg_190, reg_192, length(get(reg_4, cns38())));
            }
            if ((goto_253 || false)) {
              goto_253 = false;
              reg_197 = eq(reg_34, cns127());
              if (!tobool(reg_197)) {
                reg_197 = eq(reg_34, cns128());
              }
              goto_298 = !tobool(reg_197);
              if (!goto_298) {
                reg_202 = cns102();
                reg_204 = get(reg_4, cns25());
                reg_205 = newStack();
                push_Stack(reg_205, reg_4);
                reg_206 = newTable();
                reg_207 = cns8();
                set(reg_206, reg_207, get(reg_1[0], cns195()));
                reg_211 = cns41();
                set(reg_206, reg_211, get(reg_29, cns102()));
                push_Stack(reg_205, reg_206);
                set(reg_29, reg_202, first_Stack(call(reg_204, reg_205)));
                reg_217 = get(reg_29, cns102());
                reg_218 = cns69();
                set(reg_217, reg_218, first_Stack(call(get(reg_1[0], cns191()), newStack())));
                reg_226 = get(reg_4, cns25());
                reg_227 = newStack();
                push_Stack(reg_227, reg_4);
                push_Stack(reg_227, reg_29);
                reg_228 = call(reg_226, reg_227);
              }
              if ((goto_298 || false)) {
                goto_298 = false;
                reg_231 = get(reg_1[0], cns19());
                reg_232 = newStack();
                push_Stack(reg_232, reg_34);
                goto_382 = !tobool(eq(first_Stack(call(reg_231, reg_232)), cns4()));
                if (!goto_382) {
                  reg_240 = sub(length(reg_29), cns8());
                  if (tobool(ne(reg_240, length(get(reg_34, cns31()))))) {
                    reg_248 = get(reg_1[0], cns6());
                    reg_249 = newStack();
                    reg_252 = get(reg_1[0], cns46());
                    reg_253 = newStack();
                    push_Stack(reg_253, reg_34);
                    reg_255 = first_Stack(call(reg_252, reg_253));
                    reg_256 = cns196();
                    reg_259 = length(get(reg_34, cns31()));
                    reg_260 = cns197();
                    push_Stack(reg_249, concat(reg_255, concat(reg_256, concat(reg_259, concat(reg_260, sub(length(reg_29), cns8()))))));
                    reg_268 = call(reg_248, reg_249);
                  }
                  goto_360 = !tobool(eq(length(get(reg_34, cns67())), cns8()));
                  if (!goto_360) {
                    reg_275 = cns69();
                    set(reg_29, reg_275, first_Stack(call(get(reg_1[0], cns191()), newStack())));
                  }
                  if ((goto_360 || false)) {
                    goto_360 = false;
                    if (tobool(gt(length(get(reg_34, cns67())), cns8()))) {
                      reg_290 = get(reg_1[0], cns6());
                      reg_291 = newStack();
                      push_Stack(reg_291, cns198());
                      reg_293 = call(reg_290, reg_291);
                    }
                  }
                  reg_295 = get(reg_4, cns25());
                  reg_296 = newStack();
                  push_Stack(reg_296, reg_4);
                  push_Stack(reg_296, reg_29);
                  reg_297 = call(reg_295, reg_296);
                }
                if ((goto_382 || false)) {
                  goto_382 = false;
                  reg_299 = get(reg_4, cns25());
                  reg_300 = newStack();
                  push_Stack(reg_300, reg_4);
                  push_Stack(reg_300, reg_29);
                  reg_301 = call(reg_299, reg_300);
                }
              }
            }
          }
        }
      }
    }
    reg_302 = newStack();
    return reg_302;
  }
  var mod39 = new Cobre.Module({
    "0": Function_transform,
  });
  var item363 = closure.build(mod39);
  var item363$new = item363.get("new");
  var cns199 = Cobre.Lazy(function () { return string("generate_sourcemap")});
  var mod44 = new Cobre.Module({
    "0": tp1,
  });
  var cns200 = Cobre.Lazy(function () { return string("column")});
  var cns201 = Cobre.Lazy(function () { return string("sourcemap")});
  function Function_generate_sourcemap (reg_0, reg_1) {
    var reg_4, reg_5, reg_10, reg_11, reg_14, reg_15, reg_16, reg_17, reg_18, reg_19, reg_20, reg_21, reg_32, reg_33, reg_34, reg_36, reg_39, reg_43, reg_46, reg_48, reg_49, reg_60, reg_61, reg_62, reg_65, reg_76, reg_77, reg_78, reg_81, reg_89, reg_90, reg_95;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = newTable();
    set(reg_5, cns8(), cns38());
    reg_10 = get(reg_1[0], cns43());
    reg_11 = newStack();
    push_Stack(reg_11, get(reg_4, cns38()));
    reg_14 = call(reg_10, reg_11);
    reg_15 = next_Stack(reg_14);
    reg_16 = next_Stack(reg_14);
    reg_17 = next_Stack(reg_14);
    loop_1: while (true) {
      reg_18 = newStack();
      push_Stack(reg_18, reg_16);
      push_Stack(reg_18, reg_17);
      reg_19 = call(reg_15, reg_18);
      reg_20 = next_Stack(reg_19);
      reg_17 = reg_20;
      reg_21 = next_Stack(reg_19);
      if (tobool(eq(reg_17, nil()))) break loop_1;
      if (tobool(get(reg_21, cns68()))) {
        reg_32 = get(get(reg_1[0], cns4()), cns27());
        reg_33 = newStack();
        push_Stack(reg_33, reg_5);
        reg_34 = newTable();
        set(reg_34, cns8(), reg_20);
        reg_36 = cns41();
        set(reg_34, reg_36, get(reg_21, cns68()));
        reg_39 = cns102();
        set(reg_34, reg_39, get(reg_21, cns200()));
        push_Stack(reg_33, reg_34);
        reg_42 = call(reg_32, reg_33);
      }
    }
    reg_43 = newTable();
    set(reg_43, cns8(), cns64());
    reg_46 = cns41();
    reg_48 = get(reg_4, cns32());
    reg_49 = newStack();
    push_Stack(reg_49, reg_4);
    set(reg_43, reg_46, first_Stack(call(reg_48, reg_49)));
    set(reg_43, cns102(), reg_5);
    if (tobool(get(reg_4, cns28()))) {
      reg_60 = get(get(reg_1[0], cns4()), cns27());
      reg_61 = newStack();
      push_Stack(reg_61, reg_43);
      reg_62 = newTable();
      set(reg_62, cns8(), cns28());
      reg_65 = cns41();
      set(reg_62, reg_65, get(reg_4, cns28()));
      push_Stack(reg_61, reg_62);
      reg_68 = call(reg_60, reg_61);
    }
    if (tobool(get(reg_4, cns68()))) {
      reg_76 = get(get(reg_1[0], cns4()), cns27());
      reg_77 = newStack();
      push_Stack(reg_77, reg_43);
      reg_78 = newTable();
      set(reg_78, cns8(), cns68());
      reg_81 = cns41();
      set(reg_78, reg_81, get(reg_4, cns68()));
      push_Stack(reg_77, reg_78);
      reg_84 = call(reg_76, reg_77);
    }
    reg_89 = get(get(reg_1[0], cns4()), cns27());
    reg_90 = newStack();
    push_Stack(reg_90, get(reg_1[0], cns201()));
    push_Stack(reg_90, reg_43);
    reg_94 = call(reg_89, reg_90);
    reg_95 = newStack();
    return reg_95;
  }
  var mod43 = new Cobre.Module({
    "0": Function_generate_sourcemap,
  });
  var item372 = closure.build(mod43);
  var item372$new = item372.get("new");
  var mod46 = new Cobre.Module({
    "0": tp1,
  });
  var cns202 = Cobre.Lazy(function () { return string("create_compiler_state")});
  var cns203 = Cobre.Lazy(function () { return string("main")});
  var cns204 = Cobre.Lazy(function () { return string("global_f")});
  var cns205 = Cobre.Lazy(function () { return string("file")});
  var cns206 = Cobre.Lazy(function () { return string("funcs")});
  var cns207 = Cobre.Lazy(function () { return string("metadata")});
  function function$3 (reg_0, reg_1) {
    var reg_4, reg_5, reg_13, reg_14, reg_17, reg_22, reg_23, reg_24, reg_25, reg_33, reg_34, reg_35, reg_36, reg_54, reg_56, reg_57, reg_65, reg_66, reg_69, reg_71, reg_72, reg_73, reg_76, reg_77, reg_88, reg_89, reg_92, reg_94, reg_95, reg_96, reg_99, reg_100, reg_107, reg_109, reg_110, reg_114, reg_125, reg_127, reg_128, reg_133, reg_136, reg_138, reg_139, reg_140, reg_147, reg_149, reg_150, reg_154, reg_156, reg_157, reg_161, reg_162, reg_165, reg_170, reg_172, reg_173, reg_174, reg_175, reg_182, reg_185, reg_187, reg_188, reg_189, reg_190, reg_200, reg_202, reg_203, reg_204, reg_213, reg_214, reg_218, reg_225, reg_226, reg_230, reg_231, reg_232, reg_233, reg_234, reg_235, reg_237, reg_245, reg_246, reg_252, reg_253, reg_261;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_10 = call(get(reg_1[0], cns202()), newStack());
    reg_13 = get(reg_1[0], cns38());
    reg_14 = newStack();
    push_Stack(reg_14, cns97());
    reg_17 = first_Stack(call(reg_13, reg_14));
    set(reg_1[0], cns97(), reg_17);
    reg_22 = get(reg_1[0], cns97());
    reg_23 = cns31();
    reg_24 = newTable();
    reg_25 = cns8();
    set(reg_24, reg_25, get(get(reg_1[0], cns47()), cns32()));
    set(reg_22, reg_23, reg_24);
    reg_33 = get(reg_1[0], cns97());
    reg_34 = cns67();
    reg_35 = newTable();
    reg_36 = cns8();
    set(reg_35, reg_36, get(get(reg_1[0], cns66()), cns32()));
    set(reg_33, reg_34, reg_35);
    set(get(reg_1[0], cns97()), cns40(), cns8());
    set(get(reg_1[0], cns97()), cns68(), cns8());
    reg_54 = get(reg_1[0], cns97());
    reg_56 = get(reg_54, cns11());
    reg_57 = newStack();
    push_Stack(reg_57, reg_54);
    reg_58 = call(reg_56, reg_57);
    reg_65 = get(get(get(reg_1[0], cns97()), cns74()), cns53());
    reg_66 = cns116();
    reg_69 = get(reg_1[0], cns97());
    reg_71 = get(reg_69, cns25());
    reg_72 = newStack();
    push_Stack(reg_72, reg_69);
    reg_73 = newTable();
    set(reg_73, cns8(), cns75());
    reg_76 = cns41();
    reg_77 = newTable();
    set(reg_77, cns69(), cns9());
    set(reg_73, reg_76, reg_77);
    push_Stack(reg_72, reg_73);
    set(reg_65, reg_66, first_Stack(call(reg_71, reg_72)));
    reg_88 = get(get(get(reg_1[0], cns97()), cns74()), cns53());
    reg_89 = cns98();
    reg_92 = get(reg_1[0], cns97());
    reg_94 = get(reg_92, cns25());
    reg_95 = newStack();
    push_Stack(reg_95, reg_92);
    reg_96 = newTable();
    set(reg_96, cns8(), cns75());
    reg_99 = cns41();
    reg_100 = newTable();
    set(reg_100, cns69(), cns9());
    set(reg_96, reg_99, reg_100);
    push_Stack(reg_95, reg_96);
    set(reg_88, reg_89, first_Stack(call(reg_94, reg_95)));
    reg_107 = get(reg_1[0], cns97());
    reg_109 = get(reg_107, cns76());
    reg_110 = newStack();
    push_Stack(reg_110, reg_107);
    push_Stack(reg_110, reg_4);
    reg_111 = call(reg_109, reg_110);
    reg_114 = eq(length(reg_4), cns9());
    if (!tobool(reg_114)) {
      reg_114 = ne(get(get(reg_4, length(reg_4)), cns19()), cns78());
    }
    if (tobool(reg_114)) {
      reg_125 = get(reg_1[0], cns97());
      reg_127 = get(reg_125, cns79());
      reg_128 = newStack();
      push_Stack(reg_128, reg_125);
      push_Stack(reg_128, get(reg_1[0], cns80()));
      reg_133 = first_Stack(call(reg_127, reg_128));
      reg_136 = get(reg_1[0], cns97());
      reg_138 = get(reg_136, cns25());
      reg_139 = newStack();
      push_Stack(reg_139, reg_136);
      reg_140 = newTable();
      set(reg_140, cns8(), cns81());
      set(reg_140, cns41(), reg_133);
      push_Stack(reg_139, reg_140);
      reg_144 = call(reg_138, reg_139);
    }
    reg_147 = get(reg_1[0], cns97());
    reg_149 = get(reg_147, cns37());
    reg_150 = newStack();
    push_Stack(reg_150, reg_147);
    reg_151 = call(reg_149, reg_150);
    reg_154 = get(reg_1[0], cns97());
    reg_156 = get(reg_154, cns82());
    reg_157 = newStack();
    push_Stack(reg_157, reg_154);
    reg_158 = call(reg_156, reg_157);
    reg_161 = get(reg_1[0], cns38());
    reg_162 = newStack();
    push_Stack(reg_162, cns203());
    reg_165 = first_Stack(call(reg_161, reg_162));
    set(reg_1[0], cns203(), reg_165);
    reg_170 = get(reg_1[0], cns203());
    reg_172 = get(reg_170, cns25());
    reg_173 = newStack();
    push_Stack(reg_173, reg_170);
    reg_174 = newTable();
    reg_175 = cns8();
    set(reg_174, reg_175, get(reg_1[0], cns204()));
    set(reg_174, cns69(), cns9());
    push_Stack(reg_173, reg_174);
    reg_182 = first_Stack(call(reg_172, reg_173));
    reg_185 = get(reg_1[0], cns203());
    reg_187 = get(reg_185, cns25());
    reg_188 = newStack();
    push_Stack(reg_188, reg_185);
    reg_189 = newTable();
    reg_190 = cns8();
    set(reg_189, reg_190, get(reg_1[0], cns97()));
    set(reg_189, cns41(), reg_182);
    set(reg_189, cns69(), cns8());
    push_Stack(reg_188, reg_189);
    reg_197 = call(reg_187, reg_188);
    reg_200 = get(reg_1[0], cns203());
    reg_202 = get(reg_200, cns25());
    reg_203 = newStack();
    push_Stack(reg_203, reg_200);
    reg_204 = newTable();
    set(reg_204, cns8(), cns81());
    push_Stack(reg_203, reg_204);
    reg_207 = call(reg_202, reg_203);
    if (tobool(reg_5)) {
      reg_213 = get(get(reg_1[0], cns4()), cns27());
      reg_214 = newStack();
      push_Stack(reg_214, get(reg_1[0], cns201()));
      reg_218 = newTable();
      set(reg_218, cns8(), cns205());
      set(reg_218, cns41(), reg_5);
      push_Stack(reg_214, reg_218);
      reg_222 = call(reg_213, reg_214);
    }
    reg_225 = get(reg_1[0], cns43());
    reg_226 = newStack();
    push_Stack(reg_226, get(reg_1[0], cns206()));
    reg_230 = call(reg_225, reg_226);
    reg_231 = next_Stack(reg_230);
    reg_232 = next_Stack(reg_230);
    reg_233 = next_Stack(reg_230);
    loop_1: while (true) {
      reg_234 = newStack();
      push_Stack(reg_234, reg_232);
      push_Stack(reg_234, reg_233);
      reg_235 = call(reg_231, reg_234);
      reg_233 = next_Stack(reg_235);
      reg_237 = next_Stack(reg_235);
      if (tobool(eq(reg_233, nil()))) break loop_1;
      if (tobool(get(reg_237, cns38()))) {
        reg_245 = get(reg_237, cns199());
        reg_246 = newStack();
        push_Stack(reg_246, reg_237);
        reg_247 = call(reg_245, reg_246);
      }
    }
    reg_252 = get(get(reg_1[0], cns4()), cns27());
    reg_253 = newStack();
    push_Stack(reg_253, get(reg_1[0], cns207()));
    push_Stack(reg_253, get(reg_1[0], cns201()));
    reg_260 = call(reg_252, reg_253);
    reg_261 = newStack();
    return reg_261;
  }
  var mod45 = new Cobre.Module({
    "0": function$3,
  });
  var item384 = closure.build(mod45);
  var item384$new = item384.get("new");
  function lua_main (reg_0) {
    var reg_2, reg_9, reg_10, reg_17, reg_18, reg_23, reg_24, reg_29, reg_30, reg_35, reg_36, reg_41, reg_42, reg_47, reg_48, reg_53, reg_54, reg_59, reg_60, reg_65, reg_66, reg_71, reg_72, reg_77, reg_78, reg_83, reg_84, reg_88, reg_93, reg_94, reg_99, reg_100, reg_105, reg_106, reg_111, reg_112, reg_117, reg_118, reg_123, reg_124, reg_127;
    reg_2 = [nil()];
    reg_2[0] = reg_0;
    reg_3 = culua_helpers$lua_main(reg_0);
    reg_4 = culua_basics$lua_main(reg_0);
    if (tobool(get(reg_2[0], cns1()))) {
      reg_9 = newTable();
      reg_10 = cns2();
      set(reg_9, reg_10, lua$function(item30$new(reg_2)));
      set(reg_2[0], cns3(), reg_9);
      reg_17 = get(reg_2[0], cns4());
      reg_18 = cns5();
      set(reg_17, reg_18, lua$function(item51$new(reg_2)));
    }
    reg_23 = get(reg_2[0], cns10());
    reg_24 = cns11();
    set(reg_23, reg_24, lua$function(item85$new(reg_2)));
    reg_29 = get(reg_2[0], cns10());
    reg_30 = cns37();
    set(reg_29, reg_30, lua$function(item104$new(reg_2)));
    reg_35 = get(reg_2[0], cns10());
    reg_36 = cns48();
    set(reg_35, reg_36, lua$function(item113$new(reg_2)));
    reg_41 = get(reg_2[0], cns10());
    reg_42 = cns51();
    set(reg_41, reg_42, lua$function(item132$new(reg_2)));
    reg_47 = get(reg_2[0], cns10());
    reg_48 = cns60();
    set(reg_47, reg_48, lua$function(item140$new(reg_2)));
    reg_53 = get(reg_2[0], cns10());
    reg_54 = cns62();
    set(reg_53, reg_54, lua$function(item172$new(reg_2)));
    reg_59 = get(reg_2[0], cns10());
    reg_60 = cns87();
    set(reg_59, reg_60, lua$function(item190$new(reg_2)));
    reg_65 = get(reg_2[0], cns10());
    reg_66 = cns99();
    set(reg_65, reg_66, lua$function(item204$new(reg_2)));
    reg_71 = get(reg_2[0], cns10());
    reg_72 = cns100();
    set(reg_71, reg_72, lua$function(item249$new(reg_2)));
    reg_77 = get(reg_2[0], cns10());
    reg_78 = cns145();
    set(reg_77, reg_78, lua$function(item257$new(reg_2)));
    reg_83 = get(reg_2[0], cns10());
    reg_84 = cns147();
    set(reg_83, reg_84, lua$function(item266$new(reg_2)));
    reg_88 = lua$function(item277$new(reg_2));
    set(reg_2[0], cns148(), reg_88);
    reg_93 = get(reg_2[0], cns10());
    reg_94 = cns155();
    set(reg_93, reg_94, lua$function(item296$new(reg_2)));
    reg_99 = get(reg_2[0], cns10());
    reg_100 = cns168();
    set(reg_99, reg_100, lua$function(item307$new(reg_2)));
    reg_105 = get(reg_2[0], cns10());
    reg_106 = cns173();
    set(reg_105, reg_106, lua$function(item330$new(reg_2)));
    reg_111 = get(reg_2[0], cns10());
    reg_112 = cns76();
    set(reg_111, reg_112, lua$function(item336$new(reg_2)));
    reg_117 = get(reg_2[0], cns10());
    reg_118 = cns82();
    set(reg_117, reg_118, lua$function(item363$new(reg_2)));
    reg_123 = get(reg_2[0], cns10());
    reg_124 = cns199();
    set(reg_123, reg_124, lua$function(item372$new(reg_2)));
    reg_127 = newStack();
    push_Stack(reg_127, lua$function(item384$new(reg_2)));
    return reg_127;
  }
  var get_global = lua.get("get_global");
  function main () {
    reg_1 = lua_main(get_global());
    return;
  }
  var mod1 = new Cobre.Module({
    "lua_main": lua_main,
    "main": main,
  });
  return mod1;
});
Cobre.$export("culua.write", function () {
  var lua = Cobre.$import("lua");
  var nil = lua.get("nil");
  var mod2 = new Cobre.Module({
    "0": Cobre.Any,
  });
  var newStack = lua.get("newStack");
  var closure = lua.get("closure");
  var tp1 = new Cobre.Record([Cobre.Any]);
  var mod4 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
    "2": Cobre.Any,
    "3": Cobre.Any,
    "4": Cobre.Any,
  });
  var next_Stack = lua.get("next\x1dStack");
  var tp1 = new Cobre.Record([tp1,Cobre.Any,Cobre.Any,Cobre.Any,Cobre.Any]);
  var mod6 = new Cobre.Module({
    "0": tp1,
  });
  var string = lua.get("string");
  var cns1 = Cobre.Lazy(function () { return string("ipairs")});
  var get = lua.get("get");
  var newTable = lua.get("newTable");
  var lua$int = lua.get("int");
  var cns2 = Cobre.Lazy(function () { return lua$int(1)});
  var copy_Stack = lua.get("copy\x1dStack");
  var table_append = lua.get("table_append");
  var push_Stack = lua.get("push\x1dStack");
  var call = lua.get("call");
  var eq = lua.get("eq");
  var tobool = lua.get("tobool");
  function function$1 (reg_0, reg_1) {
    var reg_2, reg_7, reg_8, reg_9, reg_12, reg_13, reg_14, reg_15, reg_16, reg_17, reg_19, reg_23, reg_24, reg_26;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_7 = get(reg_2[0], cns1());
    reg_8 = newStack();
    reg_9 = newTable();
    table_append(reg_9, cns2(), copy_Stack(reg_0));
    push_Stack(reg_8, reg_9);
    reg_12 = call(reg_7, reg_8);
    reg_13 = next_Stack(reg_12);
    reg_14 = next_Stack(reg_12);
    reg_15 = next_Stack(reg_12);
    loop_1: while (true) {
      reg_16 = newStack();
      push_Stack(reg_16, reg_14);
      push_Stack(reg_16, reg_15);
      reg_17 = call(reg_13, reg_16);
      reg_15 = next_Stack(reg_17);
      reg_19 = next_Stack(reg_17);
      if (tobool(eq(reg_15, nil()))) break loop_1;
      reg_23 = reg_1[1];
      reg_24 = newStack();
      push_Stack(reg_24, reg_19);
      reg_25 = call(reg_23, reg_24);
    }
    reg_26 = newStack();
    return reg_26;
  }
  var mod5 = new Cobre.Module({
    "0": function$1,
  });
  var item37 = closure.build(mod5);
  var item37$new = item37.get("new");
  var lua$function = lua.get("function");
  var mod8 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
  });
  var tp2 = new Cobre.Record([tp1,Cobre.Any]);
  var mod10 = new Cobre.Module({
    "0": tp2,
  });
  var cns3 = Cobre.Lazy(function () { return lua$int(0)});
  var gt = lua.get("gt");
  var cns4 = Cobre.Lazy(function () { return lua$int(128)});
  var div = lua.get("div");
  var mul = lua.get("mul");
  var sub = lua.get("sub");
  var add = lua.get("add");
  function function$3 (reg_0, reg_1) {
    var reg_2, reg_6, reg_11, reg_12, reg_13, reg_15, reg_16, reg_23;
    reg_2 = reg_1[0];
    reg_3 = reg_2[0];
    reg_4 = nil();
    reg_5 = [reg_1];
    reg_6 = next_Stack(reg_0);
    if (tobool(gt(reg_6, cns3()))) {
      reg_11 = div(reg_6, cns4());
      reg_12 = reg_1[1];
      reg_13 = newStack();
      push_Stack(reg_13, reg_11);
      reg_14 = call(reg_12, reg_13);
      reg_15 = reg_2[2];
      reg_16 = newStack();
      push_Stack(reg_16, add(sub(reg_6, mul(reg_11, cns4())), cns4()));
      reg_22 = call(reg_15, reg_16);
    }
    reg_23 = newStack();
    return reg_23;
  }
  var mod9 = new Cobre.Module({
    "0": function$3,
  });
  var item59 = closure.build(mod9);
  var item59$new = item59.get("new");
  function function$2 (reg_0, reg_1) {
    var reg_4, reg_5, reg_9, reg_10, reg_11, reg_13, reg_14, reg_19;
    reg_2 = reg_1[0];
    reg_4 = [reg_1, nil()];
    reg_5 = next_Stack(reg_0);
    reg_4[1] = lua$function(item59$new(reg_4));
    reg_9 = div(reg_5, cns4());
    reg_10 = reg_4[1];
    reg_11 = newStack();
    push_Stack(reg_11, reg_9);
    reg_12 = call(reg_10, reg_11);
    reg_13 = reg_1[2];
    reg_14 = newStack();
    push_Stack(reg_14, sub(reg_5, mul(reg_9, cns4())));
    reg_18 = call(reg_13, reg_14);
    reg_19 = newStack();
    return reg_19;
  }
  var mod7 = new Cobre.Module({
    "0": function$2,
  });
  var item64 = closure.build(mod7);
  var item64$new = item64.get("new");
  var mod12 = new Cobre.Module({
    "0": tp1,
  });
  var cns5 = Cobre.Lazy(function () { return string("byte")});
  var neg = lua.get("neg");
  var append_Stack = lua.get("append\x1dStack");
  function function$4 (reg_0, reg_1) {
    var reg_5, reg_6, reg_7, reg_9, reg_10, reg_16;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = reg_1[2];
    reg_7 = newStack();
    reg_9 = get(reg_5, cns5());
    reg_10 = newStack();
    push_Stack(reg_10, reg_5);
    push_Stack(reg_10, cns2());
    push_Stack(reg_10, neg(cns2()));
    append_Stack(reg_7, call(reg_9, reg_10));
    reg_15 = call(reg_6, reg_7);
    reg_16 = newStack();
    return reg_16;
  }
  var mod11 = new Cobre.Module({
    "0": function$4,
  });
  var item74 = closure.build(mod11);
  var item74$new = item74.get("new");
  var mod14 = new Cobre.Module({
    "0": tp1,
  });
  var length = lua.get("length");
  function function$5 (reg_0, reg_1) {
    var reg_5, reg_6, reg_7, reg_10, reg_11, reg_13;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_6 = reg_1[3];
    reg_7 = newStack();
    push_Stack(reg_7, length(reg_5));
    reg_9 = call(reg_6, reg_7);
    reg_10 = reg_1[4];
    reg_11 = newStack();
    push_Stack(reg_11, reg_5);
    reg_12 = call(reg_10, reg_11);
    reg_13 = newStack();
    return reg_13;
  }
  var mod13 = new Cobre.Module({
    "0": function$5,
  });
  var item84 = closure.build(mod13);
  var item84$new = item84.get("new");
  var cns6 = Cobre.Lazy(function () { return string("Cobre 0.6\x00")});
  var cns7 = Cobre.Lazy(function () { return string("modules")});
  var cns8 = Cobre.Lazy(function () { return lua$int(2)});
  var cns9 = Cobre.Lazy(function () { return string("lua_main")});
  var cns10 = Cobre.Lazy(function () { return string("id")});
  var cns11 = Cobre.Lazy(function () { return string("main")});
  var cns12 = Cobre.Lazy(function () { return string("items")});
  var cns13 = Cobre.Lazy(function () { return string("fn")});
  var cns14 = Cobre.Lazy(function () { return string("tp")});
  var cns15 = Cobre.Lazy(function () { return string("err")});
  var cns16 = Cobre.Lazy(function () { return string("Unknown item kind for ")});
  var cns17 = Cobre.Lazy(function () { return string("tostr")});
  var first_Stack = lua.get("first\x1dStack");
  var concat = lua.get("concat");
  var cns18 = Cobre.Lazy(function () { return string("name")});
  var cns19 = Cobre.Lazy(function () { return string("base")});
  var cns20 = Cobre.Lazy(function () { return string("argument")});
  var cns21 = Cobre.Lazy(function () { return lua$int(4)});
  var cns22 = Cobre.Lazy(function () { return string("from")});
  var cns23 = Cobre.Lazy(function () { return lua$int(3)});
  var cns24 = Cobre.Lazy(function () { return string("types")});
  var cns25 = Cobre.Lazy(function () { return string("module")});
  var cns26 = Cobre.Lazy(function () { return string("funcs")});
  var cns27 = Cobre.Lazy(function () { return string("code")});
  var cns28 = Cobre.Lazy(function () { return string("error")});
  var cns29 = Cobre.Lazy(function () { return string("???")});
  var cns30 = Cobre.Lazy(function () { return string("ins")});
  var cns31 = Cobre.Lazy(function () { return string("outs")});
  var cns32 = Cobre.Lazy(function () { return string("constants")});
  var cns33 = Cobre.Lazy(function () { return string("type")});
  var cns34 = Cobre.Lazy(function () { return string("int")});
  var cns35 = Cobre.Lazy(function () { return string("value")});
  var cns36 = Cobre.Lazy(function () { return string("bin")});
  var cns37 = Cobre.Lazy(function () { return string("call")});
  var cns38 = Cobre.Lazy(function () { return string("args")});
  var cns39 = Cobre.Lazy(function () { return string("f")});
  var ne = lua.get("ne");
  var cns40 = Cobre.Lazy(function () { return string(" expects ")});
  var cns41 = Cobre.Lazy(function () { return string(" arguments, but got ")});
  var cns42 = Cobre.Lazy(function () { return lua$int(16)});
  var cns43 = Cobre.Lazy(function () { return string("constant ")});
  var cns44 = Cobre.Lazy(function () { return string(" not supported")});
  var mod16 = new Cobre.Module({
    "0": tp1,
    "1": Cobre.Any,
  });
  var cns45 = Cobre.Lazy(function () { return string("regs")});
  var mod18 = new Cobre.Module({
    "0": tp2,
  });
  var cns46 = Cobre.Lazy(function () { return string("labels")});
  var not = lua.get("not");
  var cns47 = Cobre.Lazy(function () { return string("no visible label '")});
  var cns48 = Cobre.Lazy(function () { return string("' for <goto> at line ")});
  function function$7 (reg_0, reg_1) {
    var reg_3, reg_6, reg_7, reg_11, reg_16, reg_17, reg_18, reg_24;
    reg_3 = reg_1[0][0];
    reg_4 = nil();
    reg_5 = [reg_1];
    reg_6 = next_Stack(reg_0);
    reg_7 = next_Stack(reg_0);
    reg_11 = get(get(reg_1[1], cns46()), reg_6);
    if (tobool(not(reg_11))) {
      reg_16 = get(reg_3[0], cns28());
      reg_17 = newStack();
      reg_18 = cns47();
      push_Stack(reg_17, concat(reg_18, concat(reg_6, concat(cns48(), reg_7))));
      reg_23 = call(reg_16, reg_17);
    }
    reg_24 = newStack();
    push_Stack(reg_24, reg_11);
    return reg_24;
  }
  var mod17 = new Cobre.Module({
    "0": function$7,
  });
  var item142 = closure.build(mod17);
  var item142$new = item142.get("new");
  var cns49 = Cobre.Lazy(function () { return string("end")});
  var cns50 = Cobre.Lazy(function () { return string(" outputs ")});
  var cns51 = Cobre.Lazy(function () { return string(" results, but end instrucion has ")});
  var lt = lua.get("lt");
  var cns52 = Cobre.Lazy(function () { return string("reg")});
  var cns53 = Cobre.Lazy(function () { return string("dup")});
  var set = lua.get("set");
  var cns54 = Cobre.Lazy(function () { return string("set")});
  var cns55 = Cobre.Lazy(function () { return string("jmp")});
  var cns56 = Cobre.Lazy(function () { return lua$int(5)});
  var cns57 = Cobre.Lazy(function () { return string("line")});
  var cns58 = Cobre.Lazy(function () { return string("jif")});
  var cns59 = Cobre.Lazy(function () { return lua$int(6)});
  var cns60 = Cobre.Lazy(function () { return string("nif")});
  var cns61 = Cobre.Lazy(function () { return lua$int(7)});
  var cns62 = Cobre.Lazy(function () { return string("table")});
  var cns63 = Cobre.Lazy(function () { return string("Unsupported instruction: ")});
  function function$6 (reg_0, reg_1) {
    var reg_2, reg_4, reg_11, reg_13, reg_14, reg_15, reg_23, reg_24, reg_28, reg_29, reg_30, reg_31, reg_32, reg_33, reg_35, reg_40, reg_46, reg_55, reg_56, reg_59, reg_60, reg_64, reg_65, reg_74, reg_75, reg_78, reg_79, reg_80, reg_82, reg_88, reg_89, reg_98, reg_99, reg_102, reg_103, reg_115, reg_116, reg_119, reg_120, reg_126, reg_127, reg_136, reg_137, reg_140, reg_141, reg_142, reg_152, reg_153, reg_156, reg_157, reg_158, reg_163, reg_164, reg_173, reg_174, reg_177, reg_178, reg_179, reg_184, reg_185, reg_193, reg_194, reg_200, reg_201, reg_203, reg_204, reg_210, reg_211, reg_212, reg_214, reg_220, reg_221, reg_229, reg_230, reg_234;
    var goto_99=false, goto_113=false, goto_136=false, goto_162=false, goto_184=false, goto_211=false, goto_238=false, goto_272=false, goto_286=false;
    reg_2 = reg_1[0];
    reg_4 = [reg_1, nil()];
    reg_4[1] = next_Stack(reg_0);
    reg_6 = newTable();
    reg_7 = cns3();
    reg_11 = length(get(reg_4[1], cns45()));
    reg_13 = lua$function(item142$new(reg_4));
    reg_14 = reg_1[3];
    reg_15 = newStack();
    push_Stack(reg_15, length(get(reg_4[1], cns27())));
    reg_20 = call(reg_14, reg_15);
    reg_23 = get(reg_2[0], cns1());
    reg_24 = newStack();
    push_Stack(reg_24, get(reg_4[1], cns27()));
    reg_28 = call(reg_23, reg_24);
    reg_29 = next_Stack(reg_28);
    reg_30 = next_Stack(reg_28);
    reg_31 = next_Stack(reg_28);
    loop_1: while (true) {
      reg_32 = newStack();
      push_Stack(reg_32, reg_30);
      push_Stack(reg_32, reg_31);
      reg_33 = call(reg_29, reg_32);
      reg_31 = next_Stack(reg_33);
      reg_35 = next_Stack(reg_33);
      if (tobool(eq(reg_31, nil()))) break loop_1;
      reg_40 = get(reg_35, cns2());
      goto_113 = !tobool(eq(reg_40, cns49()));
      if (!goto_113) {
        reg_46 = sub(length(reg_35), cns2());
        if (tobool(ne(reg_46, length(get(reg_4[1], cns31()))))) {
          reg_55 = get(reg_2[0], cns28());
          reg_56 = newStack();
          reg_59 = get(reg_4[1], cns18());
          reg_60 = cns50();
          reg_64 = length(get(reg_4[1], cns31()));
          reg_65 = cns51();
          push_Stack(reg_56, concat(reg_59, concat(reg_60, concat(reg_64, concat(reg_65, sub(length(reg_35), cns2()))))));
          reg_73 = call(reg_55, reg_56);
        }
        reg_74 = reg_1[2];
        reg_75 = newStack();
        push_Stack(reg_75, cns3());
        reg_77 = call(reg_74, reg_75);
        reg_78 = cns8();
        reg_79 = length(reg_35);
        reg_80 = cns2();
        reg_82 = lt(reg_80, cns3());
        loop_3: while (true) {
          goto_99 = tobool(reg_82);
          if (!goto_99) {
            if (tobool(gt(reg_78, reg_79))) break loop_3;
          }
          if ((goto_99 || false)) {
            goto_99 = false;
            if (tobool(lt(reg_78, reg_79))) break loop_3;
          }
          reg_88 = reg_1[3];
          reg_89 = newStack();
          push_Stack(reg_89, get(get(reg_35, reg_78), cns52()));
          reg_93 = call(reg_88, reg_89);
          reg_78 = add(reg_78, reg_80);
        }
      }
      if ((goto_113 || false)) {
        goto_113 = false;
        goto_136 = !tobool(eq(reg_40, cns53()));
        if (!goto_136) {
          reg_98 = reg_1[2];
          reg_99 = newStack();
          push_Stack(reg_99, cns23());
          reg_101 = call(reg_98, reg_99);
          reg_102 = reg_1[3];
          reg_103 = newStack();
          push_Stack(reg_103, get(get(reg_35, cns8()), cns52()));
          reg_108 = call(reg_102, reg_103);
          set(reg_35, cns52(), reg_11);
          reg_11 = add(reg_11, cns2());
        }
        if ((goto_136 || false)) {
          goto_136 = false;
          goto_162 = !tobool(eq(reg_40, cns54()));
          if (!goto_162) {
            reg_115 = reg_1[2];
            reg_116 = newStack();
            push_Stack(reg_116, cns21());
            reg_118 = call(reg_115, reg_116);
            reg_119 = reg_1[3];
            reg_120 = newStack();
            push_Stack(reg_120, get(get(reg_35, cns8()), cns52()));
            reg_125 = call(reg_119, reg_120);
            reg_126 = reg_1[3];
            reg_127 = newStack();
            push_Stack(reg_127, get(get(reg_35, cns23()), cns52()));
            reg_132 = call(reg_126, reg_127);
          }
          if ((goto_162 || false)) {
            goto_162 = false;
            goto_184 = !tobool(eq(reg_40, cns55()));
            if (!goto_184) {
              reg_136 = reg_1[2];
              reg_137 = newStack();
              push_Stack(reg_137, cns56());
              reg_139 = call(reg_136, reg_137);
              reg_140 = reg_1[3];
              reg_141 = newStack();
              reg_142 = newStack();
              push_Stack(reg_142, get(reg_35, cns8()));
              push_Stack(reg_142, get(reg_35, cns57()));
              append_Stack(reg_141, call(reg_13, reg_142));
              reg_148 = call(reg_140, reg_141);
            }
            if ((goto_184 || false)) {
              goto_184 = false;
              goto_211 = !tobool(eq(reg_40, cns58()));
              if (!goto_211) {
                reg_152 = reg_1[2];
                reg_153 = newStack();
                push_Stack(reg_153, cns59());
                reg_155 = call(reg_152, reg_153);
                reg_156 = reg_1[3];
                reg_157 = newStack();
                reg_158 = newStack();
                push_Stack(reg_158, get(reg_35, cns8()));
                append_Stack(reg_157, call(reg_13, reg_158));
                reg_162 = call(reg_156, reg_157);
                reg_163 = reg_1[3];
                reg_164 = newStack();
                push_Stack(reg_164, get(get(reg_35, cns23()), cns52()));
                reg_169 = call(reg_163, reg_164);
              }
              if ((goto_211 || false)) {
                goto_211 = false;
                goto_238 = !tobool(eq(reg_40, cns60()));
                if (!goto_238) {
                  reg_173 = reg_1[2];
                  reg_174 = newStack();
                  push_Stack(reg_174, cns61());
                  reg_176 = call(reg_173, reg_174);
                  reg_177 = reg_1[3];
                  reg_178 = newStack();
                  reg_179 = newStack();
                  push_Stack(reg_179, get(reg_35, cns8()));
                  append_Stack(reg_178, call(reg_13, reg_179));
                  reg_183 = call(reg_177, reg_178);
                  reg_184 = reg_1[3];
                  reg_185 = newStack();
                  push_Stack(reg_185, get(get(reg_35, cns23()), cns52()));
                  reg_190 = call(reg_184, reg_185);
                }
                if ((goto_238 || false)) {
                  goto_238 = false;
                  reg_193 = get(reg_2[0], cns33());
                  reg_194 = newStack();
                  push_Stack(reg_194, reg_40);
                  goto_286 = !tobool(eq(first_Stack(call(reg_193, reg_194)), cns62()));
                  if (!goto_286) {
                    reg_200 = reg_1[3];
                    reg_201 = newStack();
                    reg_203 = get(reg_40, cns10());
                    reg_204 = newStack();
                    push_Stack(reg_204, reg_40);
                    push_Stack(reg_201, add(first_Stack(call(reg_203, reg_204)), cns42()));
                    reg_209 = call(reg_200, reg_201);
                    reg_210 = cns8();
                    reg_211 = length(reg_35);
                    reg_212 = cns2();
                    reg_214 = lt(reg_212, cns3());
                    loop_2: while (true) {
                      goto_272 = tobool(reg_214);
                      if (!goto_272) {
                        if (tobool(gt(reg_210, reg_211))) break loop_2;
                      }
                      if ((goto_272 || false)) {
                        goto_272 = false;
                        if (tobool(lt(reg_210, reg_211))) break loop_2;
                      }
                      reg_220 = reg_1[3];
                      reg_221 = newStack();
                      push_Stack(reg_221, get(get(reg_35, reg_210), cns52()));
                      reg_225 = call(reg_220, reg_221);
                      reg_210 = add(reg_210, reg_212);
                    }
                  }
                  if ((goto_286 || false)) {
                    goto_286 = false;
                    reg_229 = get(reg_2[0], cns28());
                    reg_230 = newStack();
                    push_Stack(reg_230, concat(cns63(), reg_40));
                    reg_233 = call(reg_229, reg_230);
                  }
                }
              }
            }
          }
        }
      }
    }
    reg_234 = newStack();
    return reg_234;
  }
  var mod15 = new Cobre.Module({
    "0": function$6,
  });
  var item163 = closure.build(mod15);
  var item163$new = item163.get("new");
  var mod20 = new Cobre.Module({
    "0": tp1,
  });
  var cns64 = Cobre.Lazy(function () { return string("number")});
  var cns65 = Cobre.Lazy(function () { return string("string")});
  var cns66 = Cobre.Lazy(function () { return string("write_node")});
  var cns67 = Cobre.Lazy(function () { return string("wtf: ")});
  var cns68 = Cobre.Lazy(function () { return string("tostring")});
  function function$8 (reg_0, reg_1) {
    var reg_2, reg_5, reg_8, reg_9, reg_15, reg_16, reg_24, reg_25, reg_31, reg_32, reg_39, reg_40, reg_44, reg_45, reg_51, reg_52, reg_57, reg_58, reg_59, reg_61, reg_69, reg_70, reg_76, reg_77, reg_78, reg_81, reg_82, reg_87;
    var goto_24=false, goto_49=false, goto_78=false, goto_92=false;
    reg_2 = reg_1[0];
    reg_3 = nil();
    reg_4 = [reg_1];
    reg_5 = next_Stack(reg_0);
    reg_8 = get(reg_2[0], cns33());
    reg_9 = newStack();
    push_Stack(reg_9, reg_5);
    goto_24 = !tobool(eq(first_Stack(call(reg_8, reg_9)), cns64()));
    if (!goto_24) {
      reg_15 = reg_1[3];
      reg_16 = newStack();
      push_Stack(reg_16, add(mul(reg_5, cns8()), cns2()));
      reg_21 = call(reg_15, reg_16);
    }
    if ((goto_24 || false)) {
      goto_24 = false;
      reg_24 = get(reg_2[0], cns33());
      reg_25 = newStack();
      push_Stack(reg_25, reg_5);
      goto_49 = !tobool(eq(first_Stack(call(reg_24, reg_25)), cns65()));
      if (!goto_49) {
        reg_31 = reg_1[3];
        reg_32 = newStack();
        push_Stack(reg_32, add(mul(length(reg_5), cns21()), cns8()));
        reg_38 = call(reg_31, reg_32);
        reg_39 = reg_1[4];
        reg_40 = newStack();
        push_Stack(reg_40, reg_5);
        reg_41 = call(reg_39, reg_40);
      }
      if ((goto_49 || false)) {
        goto_49 = false;
        reg_44 = get(reg_2[0], cns33());
        reg_45 = newStack();
        push_Stack(reg_45, reg_5);
        goto_92 = !tobool(eq(first_Stack(call(reg_44, reg_45)), cns62()));
        if (!goto_92) {
          reg_51 = reg_1[3];
          reg_52 = newStack();
          push_Stack(reg_52, mul(length(reg_5), cns21()));
          reg_56 = call(reg_51, reg_52);
          reg_57 = cns2();
          reg_58 = length(reg_5);
          reg_59 = cns2();
          reg_61 = lt(reg_59, cns3());
          loop_1: while (true) {
            goto_78 = tobool(reg_61);
            if (!goto_78) {
              if (tobool(gt(reg_57, reg_58))) break loop_1;
            }
            if ((goto_78 || false)) {
              goto_78 = false;
              if (tobool(lt(reg_57, reg_58))) break loop_1;
            }
            reg_69 = get(reg_2[0], cns66());
            reg_70 = newStack();
            push_Stack(reg_70, get(reg_5, reg_57));
            reg_72 = call(reg_69, reg_70);
            reg_57 = add(reg_57, reg_59);
          }
        }
        if ((goto_92 || false)) {
          goto_92 = false;
          reg_76 = get(reg_2[0], cns28());
          reg_77 = newStack();
          reg_78 = cns67();
          reg_81 = get(reg_2[0], cns68());
          reg_82 = newStack();
          push_Stack(reg_82, reg_5);
          push_Stack(reg_77, concat(reg_78, first_Stack(call(reg_81, reg_82))));
          reg_86 = call(reg_76, reg_77);
        }
      }
    }
    reg_87 = newStack();
    return reg_87;
  }
  var mod19 = new Cobre.Module({
    "0": function$8,
  });
  var item174 = closure.build(mod19);
  var item174$new = item174.get("new");
  var cns69 = Cobre.Lazy(function () { return string("metadata")});
  function culua_write$function (reg_0, reg_1) {
    var reg_2, reg_3, reg_12, reg_13, reg_14, reg_17, reg_18, reg_26, reg_27, reg_31, reg_32, reg_35, reg_36, reg_39, reg_41, reg_42, reg_45, reg_48, reg_49, reg_52, reg_53, reg_56, reg_58, reg_59, reg_62, reg_67, reg_68, reg_72, reg_73, reg_74, reg_75, reg_76, reg_77, reg_79, reg_86, reg_87, reg_90, reg_91, reg_98, reg_99, reg_102, reg_103, reg_104, reg_105, reg_106, reg_107, reg_109, reg_116, reg_117, reg_120, reg_121, reg_123, reg_125, reg_126, reg_132, reg_133, reg_136, reg_137, reg_145, reg_146, reg_147, reg_150, reg_151, reg_156, reg_161, reg_166, reg_167, reg_170, reg_171, reg_177, reg_178, reg_187, reg_188, reg_191, reg_192, reg_198, reg_202, reg_203, reg_206, reg_210, reg_211, reg_219, reg_220, reg_224, reg_225, reg_226, reg_227, reg_228, reg_229, reg_231, reg_235, reg_236, reg_242, reg_246, reg_247, reg_255, reg_256, reg_260, reg_261, reg_262, reg_263, reg_264, reg_265, reg_267, reg_274, reg_275, reg_281, reg_282, reg_290, reg_291, reg_294, reg_295, reg_302, reg_303, reg_306, reg_307, reg_308, reg_309, reg_310, reg_311, reg_313, reg_317, reg_318, reg_320, reg_321, reg_328, reg_329, reg_332, reg_333, reg_334, reg_335, reg_336, reg_337, reg_339, reg_343, reg_344, reg_349, reg_353, reg_354, reg_362, reg_363, reg_367, reg_368, reg_369, reg_370, reg_371, reg_372, reg_374, reg_383, reg_384, reg_387, reg_388, reg_397, reg_398, reg_401, reg_412, reg_422, reg_423, reg_427, reg_428, reg_433, reg_434, reg_443, reg_444, reg_446, reg_448, reg_449, reg_457, reg_458, reg_461, reg_462, reg_463, reg_464, reg_465, reg_466, reg_468, reg_472, reg_473, reg_475, reg_476, reg_481, reg_482, reg_483, reg_491, reg_494, reg_495, reg_499, reg_500, reg_501, reg_502, reg_503, reg_504, reg_506, reg_513, reg_516, reg_521, reg_522, reg_527;
    var goto_161=false, goto_179=false, goto_201=false, goto_232=false, goto_255=false, goto_352=false, goto_365=false, goto_500=false, goto_517=false, goto_606=false;
    reg_2 = nil();
    reg_3 = [reg_1, reg_2, reg_2, reg_2, reg_2];
    reg_3[1] = next_Stack(reg_0);
    reg_3[2] = lua$function(item37$new(reg_3));
    reg_3[3] = lua$function(item64$new(reg_3));
    reg_3[4] = lua$function(item74$new(reg_3));
    reg_12 = lua$function(item84$new(reg_3));
    reg_13 = reg_3[4];
    reg_14 = newStack();
    push_Stack(reg_14, cns6());
    reg_16 = call(reg_13, reg_14);
    reg_17 = reg_3[3];
    reg_18 = newStack();
    push_Stack(reg_18, add(length(get(reg_1[0], cns7())), cns2()));
    reg_25 = call(reg_17, reg_18);
    reg_26 = reg_3[2];
    reg_27 = newStack();
    push_Stack(reg_27, cns8());
    push_Stack(reg_27, cns8());
    reg_30 = call(reg_26, reg_27);
    reg_31 = reg_3[2];
    reg_32 = newStack();
    push_Stack(reg_32, cns8());
    reg_34 = call(reg_31, reg_32);
    reg_35 = reg_3[3];
    reg_36 = newStack();
    reg_39 = get(reg_1[0], cns9());
    reg_41 = get(reg_39, cns10());
    reg_42 = newStack();
    push_Stack(reg_42, reg_39);
    append_Stack(reg_36, call(reg_41, reg_42));
    reg_44 = call(reg_35, reg_36);
    reg_45 = newStack();
    push_Stack(reg_45, cns9());
    reg_47 = call(reg_12, reg_45);
    reg_48 = reg_3[2];
    reg_49 = newStack();
    push_Stack(reg_49, cns8());
    reg_51 = call(reg_48, reg_49);
    reg_52 = reg_3[3];
    reg_53 = newStack();
    reg_56 = get(reg_1[0], cns11());
    reg_58 = get(reg_56, cns10());
    reg_59 = newStack();
    push_Stack(reg_59, reg_56);
    append_Stack(reg_53, call(reg_58, reg_59));
    reg_61 = call(reg_52, reg_53);
    reg_62 = newStack();
    push_Stack(reg_62, cns11());
    reg_64 = call(reg_12, reg_62);
    reg_67 = get(reg_1[0], cns1());
    reg_68 = newStack();
    push_Stack(reg_68, get(reg_1[0], cns7()));
    reg_72 = call(reg_67, reg_68);
    reg_73 = next_Stack(reg_72);
    reg_74 = next_Stack(reg_72);
    reg_75 = next_Stack(reg_72);
    loop_8: while (true) {
      reg_76 = newStack();
      push_Stack(reg_76, reg_74);
      push_Stack(reg_76, reg_75);
      reg_77 = call(reg_73, reg_76);
      reg_75 = next_Stack(reg_77);
      reg_79 = next_Stack(reg_77);
      if (tobool(eq(reg_75, nil()))) break loop_8;
      goto_201 = !tobool(get(reg_79, cns12()));
      if (!goto_201) {
        reg_86 = reg_3[2];
        reg_87 = newStack();
        push_Stack(reg_87, cns8());
        reg_89 = call(reg_86, reg_87);
        reg_90 = reg_3[3];
        reg_91 = newStack();
        push_Stack(reg_91, length(get(reg_79, cns12())));
        reg_95 = call(reg_90, reg_91);
        reg_98 = get(reg_1[0], cns1());
        reg_99 = newStack();
        push_Stack(reg_99, get(reg_79, cns12()));
        reg_102 = call(reg_98, reg_99);
        reg_103 = next_Stack(reg_102);
        reg_104 = next_Stack(reg_102);
        reg_105 = next_Stack(reg_102);
        loop_9: while (true) {
          reg_106 = newStack();
          push_Stack(reg_106, reg_104);
          push_Stack(reg_106, reg_105);
          reg_107 = call(reg_103, reg_106);
          reg_105 = next_Stack(reg_107);
          reg_109 = next_Stack(reg_107);
          if (tobool(eq(reg_105, nil()))) break loop_9;
          goto_161 = !tobool(get(reg_109, cns13()));
          if (!goto_161) {
            reg_116 = reg_3[2];
            reg_117 = newStack();
            push_Stack(reg_117, cns8());
            reg_119 = call(reg_116, reg_117);
            reg_120 = reg_3[3];
            reg_121 = newStack();
            reg_123 = get(reg_109, cns13());
            reg_125 = get(reg_123, cns10());
            reg_126 = newStack();
            push_Stack(reg_126, reg_123);
            append_Stack(reg_121, call(reg_125, reg_126));
            reg_128 = call(reg_120, reg_121);
          }
          if ((goto_161 || false)) {
            goto_161 = false;
            goto_179 = !tobool(get(reg_109, cns14()));
            if (!goto_179) {
              reg_132 = reg_3[2];
              reg_133 = newStack();
              push_Stack(reg_133, cns2());
              reg_135 = call(reg_132, reg_133);
              reg_136 = reg_3[3];
              reg_137 = newStack();
              push_Stack(reg_137, get(get(reg_109, cns14()), cns10()));
              reg_142 = call(reg_136, reg_137);
            }
            if ((goto_179 || false)) {
              goto_179 = false;
              reg_145 = get(reg_1[0], cns15());
              reg_146 = newStack();
              reg_147 = cns16();
              reg_150 = get(reg_1[0], cns17());
              reg_151 = newStack();
              push_Stack(reg_151, reg_109);
              push_Stack(reg_146, concat(reg_147, first_Stack(call(reg_150, reg_151))));
              reg_155 = call(reg_145, reg_146);
            }
          }
          reg_156 = newStack();
          push_Stack(reg_156, get(reg_109, cns18()));
          reg_159 = call(reg_12, reg_156);
        }
      }
      if ((goto_201 || false)) {
        goto_201 = false;
        reg_161 = get(reg_79, cns19());
        if (tobool(reg_161)) {
          reg_161 = get(reg_79, cns20());
        }
        goto_232 = !tobool(reg_161);
        if (!goto_232) {
          reg_166 = reg_3[2];
          reg_167 = newStack();
          push_Stack(reg_167, cns21());
          reg_169 = call(reg_166, reg_167);
          reg_170 = reg_3[3];
          reg_171 = newStack();
          push_Stack(reg_171, get(get(reg_79, cns19()), cns10()));
          reg_176 = call(reg_170, reg_171);
          reg_177 = reg_3[3];
          reg_178 = newStack();
          push_Stack(reg_178, get(get(reg_79, cns20()), cns10()));
          reg_183 = call(reg_177, reg_178);
        }
        if ((goto_232 || false)) {
          goto_232 = false;
          goto_255 = !tobool(get(reg_79, cns22()));
          if (!goto_255) {
            reg_187 = reg_3[2];
            reg_188 = newStack();
            push_Stack(reg_188, cns23());
            reg_190 = call(reg_187, reg_188);
            reg_191 = reg_3[3];
            reg_192 = newStack();
            push_Stack(reg_192, get(get(reg_79, cns22()), cns10()));
            reg_197 = call(reg_191, reg_192);
            reg_198 = newStack();
            push_Stack(reg_198, get(reg_79, cns18()));
            reg_201 = call(reg_12, reg_198);
          }
          if ((goto_255 || false)) {
            goto_255 = false;
            reg_202 = reg_3[2];
            reg_203 = newStack();
            push_Stack(reg_203, cns2());
            reg_205 = call(reg_202, reg_203);
            reg_206 = newStack();
            push_Stack(reg_206, get(reg_79, cns18()));
            reg_209 = call(reg_12, reg_206);
          }
        }
      }
    }
    reg_210 = reg_3[3];
    reg_211 = newStack();
    push_Stack(reg_211, length(get(reg_1[0], cns24())));
    reg_216 = call(reg_210, reg_211);
    reg_219 = get(reg_1[0], cns1());
    reg_220 = newStack();
    push_Stack(reg_220, get(reg_1[0], cns24()));
    reg_224 = call(reg_219, reg_220);
    reg_225 = next_Stack(reg_224);
    reg_226 = next_Stack(reg_224);
    reg_227 = next_Stack(reg_224);
    loop_7: while (true) {
      reg_228 = newStack();
      push_Stack(reg_228, reg_226);
      push_Stack(reg_228, reg_227);
      reg_229 = call(reg_225, reg_228);
      reg_227 = next_Stack(reg_229);
      reg_231 = next_Stack(reg_229);
      if (tobool(eq(reg_227, nil()))) break loop_7;
      reg_235 = reg_3[3];
      reg_236 = newStack();
      push_Stack(reg_236, add(get(reg_231, cns25()), cns2()));
      reg_241 = call(reg_235, reg_236);
      reg_242 = newStack();
      push_Stack(reg_242, get(reg_231, cns18()));
      reg_245 = call(reg_12, reg_242);
    }
    reg_246 = reg_3[3];
    reg_247 = newStack();
    push_Stack(reg_247, length(get(reg_1[0], cns26())));
    reg_252 = call(reg_246, reg_247);
    reg_255 = get(reg_1[0], cns1());
    reg_256 = newStack();
    push_Stack(reg_256, get(reg_1[0], cns26()));
    reg_260 = call(reg_255, reg_256);
    reg_261 = next_Stack(reg_260);
    reg_262 = next_Stack(reg_260);
    reg_263 = next_Stack(reg_260);
    loop_4: while (true) {
      reg_264 = newStack();
      push_Stack(reg_264, reg_262);
      push_Stack(reg_264, reg_263);
      reg_265 = call(reg_261, reg_264);
      reg_263 = next_Stack(reg_265);
      reg_267 = next_Stack(reg_265);
      if (tobool(eq(reg_263, nil()))) break loop_4;
      goto_352 = !tobool(get(reg_267, cns27()));
      if (!goto_352) {
        reg_274 = reg_3[2];
        reg_275 = newStack();
        push_Stack(reg_275, cns2());
        reg_277 = call(reg_274, reg_275);
      }
      if ((goto_352 || false)) {
        goto_352 = false;
        goto_365 = !tobool(get(reg_267, cns25()));
        if (!goto_365) {
          reg_281 = reg_3[3];
          reg_282 = newStack();
          push_Stack(reg_282, add(get(reg_267, cns25()), cns8()));
          reg_287 = call(reg_281, reg_282);
        }
        if ((goto_365 || false)) {
          goto_365 = false;
          reg_290 = get(reg_1[0], cns28());
          reg_291 = newStack();
          push_Stack(reg_291, cns29());
          reg_293 = call(reg_290, reg_291);
        }
      }
      reg_294 = reg_3[3];
      reg_295 = newStack();
      push_Stack(reg_295, length(get(reg_267, cns30())));
      reg_299 = call(reg_294, reg_295);
      reg_302 = get(reg_1[0], cns1());
      reg_303 = newStack();
      push_Stack(reg_303, get(reg_267, cns30()));
      reg_306 = call(reg_302, reg_303);
      reg_307 = next_Stack(reg_306);
      reg_308 = next_Stack(reg_306);
      reg_309 = next_Stack(reg_306);
      loop_6: while (true) {
        reg_310 = newStack();
        push_Stack(reg_310, reg_308);
        push_Stack(reg_310, reg_309);
        reg_311 = call(reg_307, reg_310);
        reg_309 = next_Stack(reg_311);
        reg_313 = next_Stack(reg_311);
        if (tobool(eq(reg_309, nil()))) break loop_6;
        reg_317 = reg_3[3];
        reg_318 = newStack();
        push_Stack(reg_318, reg_313);
        reg_319 = call(reg_317, reg_318);
      }
      reg_320 = reg_3[3];
      reg_321 = newStack();
      push_Stack(reg_321, length(get(reg_267, cns31())));
      reg_325 = call(reg_320, reg_321);
      reg_328 = get(reg_1[0], cns1());
      reg_329 = newStack();
      push_Stack(reg_329, get(reg_267, cns31()));
      reg_332 = call(reg_328, reg_329);
      reg_333 = next_Stack(reg_332);
      reg_334 = next_Stack(reg_332);
      reg_335 = next_Stack(reg_332);
      loop_5: while (true) {
        reg_336 = newStack();
        push_Stack(reg_336, reg_334);
        push_Stack(reg_336, reg_335);
        reg_337 = call(reg_333, reg_336);
        reg_335 = next_Stack(reg_337);
        reg_339 = next_Stack(reg_337);
        if (tobool(eq(reg_335, nil()))) break loop_5;
        reg_343 = reg_3[3];
        reg_344 = newStack();
        push_Stack(reg_344, reg_339);
        reg_345 = call(reg_343, reg_344);
      }
      if (tobool(get(reg_267, cns25()))) {
        reg_349 = newStack();
        push_Stack(reg_349, get(reg_267, cns18()));
        reg_352 = call(reg_12, reg_349);
      }
    }
    reg_353 = reg_3[3];
    reg_354 = newStack();
    push_Stack(reg_354, length(get(reg_1[0], cns32())));
    reg_359 = call(reg_353, reg_354);
    reg_362 = get(reg_1[0], cns1());
    reg_363 = newStack();
    push_Stack(reg_363, get(reg_1[0], cns32()));
    reg_367 = call(reg_362, reg_363);
    reg_368 = next_Stack(reg_367);
    reg_369 = next_Stack(reg_367);
    reg_370 = next_Stack(reg_367);
    loop_2: while (true) {
      reg_371 = newStack();
      push_Stack(reg_371, reg_369);
      push_Stack(reg_371, reg_370);
      reg_372 = call(reg_368, reg_371);
      reg_370 = next_Stack(reg_372);
      reg_374 = next_Stack(reg_372);
      if (tobool(eq(reg_370, nil()))) break loop_2;
      goto_500 = !tobool(eq(get(reg_374, cns33()), cns34()));
      if (!goto_500) {
        reg_383 = reg_3[2];
        reg_384 = newStack();
        push_Stack(reg_384, cns2());
        reg_386 = call(reg_383, reg_384);
        reg_387 = reg_3[3];
        reg_388 = newStack();
        push_Stack(reg_388, get(reg_374, cns35()));
        reg_391 = call(reg_387, reg_388);
      }
      if ((goto_500 || false)) {
        goto_500 = false;
        goto_517 = !tobool(eq(get(reg_374, cns33()), cns36()));
        if (!goto_517) {
          reg_397 = reg_3[2];
          reg_398 = newStack();
          push_Stack(reg_398, cns8());
          reg_400 = call(reg_397, reg_398);
          reg_401 = newStack();
          push_Stack(reg_401, get(reg_374, cns35()));
          reg_404 = call(reg_12, reg_401);
        }
        if ((goto_517 || false)) {
          goto_517 = false;
          goto_606 = !tobool(eq(get(reg_374, cns33()), cns37()));
          if (!goto_606) {
            reg_412 = length(get(reg_374, cns38()));
            if (tobool(ne(reg_412, length(get(get(reg_374, cns39()), cns30()))))) {
              reg_422 = get(reg_1[0], cns28());
              reg_423 = newStack();
              reg_427 = get(get(reg_374, cns39()), cns18());
              reg_428 = cns40();
              reg_433 = length(get(get(reg_374, cns39()), cns30()));
              reg_434 = cns41();
              push_Stack(reg_423, concat(reg_427, concat(reg_428, concat(reg_433, concat(reg_434, length(get(reg_374, cns38())))))));
              reg_442 = call(reg_422, reg_423);
            }
            reg_443 = reg_3[3];
            reg_444 = newStack();
            reg_446 = get(reg_374, cns39());
            reg_448 = get(reg_446, cns10());
            reg_449 = newStack();
            push_Stack(reg_449, reg_446);
            push_Stack(reg_444, add(first_Stack(call(reg_448, reg_449)), cns42()));
            reg_454 = call(reg_443, reg_444);
            reg_457 = get(reg_1[0], cns1());
            reg_458 = newStack();
            push_Stack(reg_458, get(reg_374, cns38()));
            reg_461 = call(reg_457, reg_458);
            reg_462 = next_Stack(reg_461);
            reg_463 = next_Stack(reg_461);
            reg_464 = next_Stack(reg_461);
            loop_3: while (true) {
              reg_465 = newStack();
              push_Stack(reg_465, reg_463);
              push_Stack(reg_465, reg_464);
              reg_466 = call(reg_462, reg_465);
              reg_464 = next_Stack(reg_466);
              reg_468 = next_Stack(reg_466);
              if (tobool(eq(reg_464, nil()))) break loop_3;
              reg_472 = reg_3[3];
              reg_473 = newStack();
              reg_475 = get(reg_468, cns10());
              reg_476 = newStack();
              push_Stack(reg_476, reg_468);
              append_Stack(reg_473, call(reg_475, reg_476));
              reg_478 = call(reg_472, reg_473);
            }
          }
          if ((goto_606 || false)) {
            goto_606 = false;
            reg_481 = get(reg_1[0], cns28());
            reg_482 = newStack();
            reg_483 = cns43();
            push_Stack(reg_482, concat(reg_483, concat(get(reg_374, cns33()), cns44())));
            reg_489 = call(reg_481, reg_482);
          }
        }
      }
    }
    reg_491 = lua$function(item163$new(reg_3));
    reg_494 = get(reg_1[0], cns1());
    reg_495 = newStack();
    push_Stack(reg_495, get(reg_1[0], cns26()));
    reg_499 = call(reg_494, reg_495);
    reg_500 = next_Stack(reg_499);
    reg_501 = next_Stack(reg_499);
    reg_502 = next_Stack(reg_499);
    loop_1: while (true) {
      reg_503 = newStack();
      push_Stack(reg_503, reg_501);
      push_Stack(reg_503, reg_502);
      reg_504 = call(reg_500, reg_503);
      reg_502 = next_Stack(reg_504);
      reg_506 = next_Stack(reg_504);
      if (tobool(eq(reg_502, nil()))) break loop_1;
      if (tobool(get(reg_506, cns27()))) {
        reg_513 = newStack();
        push_Stack(reg_513, reg_506);
        reg_514 = call(reg_491, reg_513);
      }
    }
    reg_516 = lua$function(item174$new(reg_3));
    set(reg_1[0], cns66(), reg_516);
    reg_521 = get(reg_1[0], cns66());
    reg_522 = newStack();
    push_Stack(reg_522, get(reg_1[0], cns69()));
    reg_526 = call(reg_521, reg_522);
    reg_527 = newStack();
    return reg_527;
  }
  var mod3 = new Cobre.Module({
    "0": culua_write$function,
  });
  var item179 = closure.build(mod3);
  var item179$new = item179.get("new");
  function lua_main (reg_0) {
    var reg_2, reg_3;
    reg_2 = [nil()];
    reg_2[0] = reg_0;
    reg_3 = newStack();
    push_Stack(reg_3, lua$function(item179$new(reg_2)));
    return reg_3;
  }
  var get_global = lua.get("get_global");
  function main () {
    reg_1 = lua_main(get_global());
    return;
  }
  var mod1 = new Cobre.Module({
    "lua_main": lua_main,
    "main": main,
  });
  return mod1;
});
Cobre.$export("culua\x1fcompile", function () {
  var lua = Cobre.$import("lua");
  var nil = lua.get("nil");
  var mod2 = new Cobre.Module({
    "0": Cobre.Any,
    "1": Cobre.Any,
    "2": Cobre.Any,
  });
  var lua_parser_parser = Cobre.$import("lua_parser.parser");
  var lua_parser_parser$lua_main = lua_parser_parser.get("lua_main");
  var first_Stack = lua.get("first\x1dStack");
  var culua_codegen = Cobre.$import("culua.codegen");
  var culua_codegen$lua_main = culua_codegen.get("lua_main");
  var culua_write = Cobre.$import("culua.write");
  var culua_write$lua_main = culua_write.get("lua_main");
  var newStack = lua.get("newStack");
  var closure = lua.get("closure");
  var tp1 = new Cobre.Record([Cobre.Any,Cobre.Any,Cobre.Any]);
  var mod4 = new Cobre.Module({
    "0": tp1,
  });
  var next_Stack = lua.get("next\x1dStack");
  var string = lua.get("string");
  var cns1 = Cobre.Lazy(function () { return string("open")});
  var get = lua.get("get");
  var push_Stack = lua.get("push\x1dStack");
  var call = lua.get("call");
  var cns2 = Cobre.Lazy(function () { return string("parse")});
  var tobool = lua.get("tobool");
  function culua_compile$function (reg_0, reg_1) {
    var reg_4, reg_5, reg_6, reg_9, reg_10, reg_16, reg_17, reg_18, reg_20, reg_21, reg_22, reg_24, reg_25, reg_27;
    reg_2 = nil();
    reg_3 = [reg_1];
    reg_4 = next_Stack(reg_0);
    reg_5 = next_Stack(reg_0);
    reg_6 = next_Stack(reg_0);
    reg_9 = get(reg_1[0], cns1());
    reg_10 = newStack();
    push_Stack(reg_10, reg_4);
    reg_11 = call(reg_9, reg_10);
    reg_16 = call(get(reg_1[0], cns2()), newStack());
    reg_17 = next_Stack(reg_16);
    reg_18 = next_Stack(reg_16);
    if (tobool(reg_18)) {
      reg_20 = newStack();
      push_Stack(reg_20, reg_18);
      return reg_20;
    }
    reg_21 = reg_1[1];
    reg_22 = newStack();
    push_Stack(reg_22, reg_17);
    push_Stack(reg_22, reg_6);
    reg_23 = call(reg_21, reg_22);
    reg_24 = reg_1[2];
    reg_25 = newStack();
    push_Stack(reg_25, reg_5);
    reg_26 = call(reg_24, reg_25);
    reg_27 = newStack();
    return reg_27;
  }
  var mod3 = new Cobre.Module({
    "0": culua_compile$function,
  });
  var item36 = closure.build(mod3);
  var item36$new = item36.get("new");
  var lua$function = lua.get("function");
  function lua_main (reg_0) {
    var reg_1, reg_2, reg_9;
    reg_1 = nil();
    reg_2 = [reg_1, reg_1, reg_1];
    reg_2[0] = first_Stack(lua_parser_parser$lua_main(reg_0));
    reg_2[1] = first_Stack(culua_codegen$lua_main(reg_0));
    reg_2[2] = first_Stack(culua_write$lua_main(reg_0));
    reg_9 = newStack();
    push_Stack(reg_9, lua$function(item36$new(reg_2)));
    return reg_9;
  }
  var get_global = lua.get("get_global");
  function main () {
    reg_1 = lua_main(get_global());
    return;
  }
  var mod1 = new Cobre.Module({
    "lua_main": lua_main,
    "main": main,
  });
  return mod1;
});
