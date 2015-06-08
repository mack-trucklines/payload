// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25254__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25255__i = 0, G__25255__a = new Array(arguments.length -  0);
while (G__25255__i < G__25255__a.length) {G__25255__a[G__25255__i] = arguments[G__25255__i + 0]; ++G__25255__i;}
  args = new cljs.core.IndexedSeq(G__25255__a,0);
} 
return G__25254__delegate.call(this,args);};
G__25254.cljs$lang$maxFixedArity = 0;
G__25254.cljs$lang$applyTo = (function (arglist__25256){
var args = cljs.core.seq(arglist__25256);
return G__25254__delegate(args);
});
G__25254.cljs$core$IFn$_invoke$arity$variadic = G__25254__delegate;
return G__25254;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25257){
var map__25259 = p__25257;
var map__25259__$1 = ((cljs.core.seq_QMARK_.call(null,map__25259))?cljs.core.apply.call(null,cljs.core.hash_map,map__25259):map__25259);
var class$ = cljs.core.get.call(null,map__25259__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__25259__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18113__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18113__auto__)){
return or__18113__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18101__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18101__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18101__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21665__auto___25388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___25388,ch){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___25388,ch){
return (function (state_25362){
var state_val_25363 = (state_25362[(1)]);
if((state_val_25363 === (7))){
var inst_25358 = (state_25362[(2)]);
var state_25362__$1 = state_25362;
var statearr_25364_25389 = state_25362__$1;
(statearr_25364_25389[(2)] = inst_25358);

(statearr_25364_25389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25363 === (1))){
var state_25362__$1 = state_25362;
var statearr_25365_25390 = state_25362__$1;
(statearr_25365_25390[(2)] = null);

(statearr_25365_25390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25363 === (4))){
var inst_25326 = (state_25362[(7)]);
var inst_25326__$1 = (state_25362[(2)]);
var state_25362__$1 = (function (){var statearr_25366 = state_25362;
(statearr_25366[(7)] = inst_25326__$1);

return statearr_25366;
})();
if(cljs.core.truth_(inst_25326__$1)){
var statearr_25367_25391 = state_25362__$1;
(statearr_25367_25391[(1)] = (5));

} else {
var statearr_25368_25392 = state_25362__$1;
(statearr_25368_25392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25363 === (13))){
var state_25362__$1 = state_25362;
var statearr_25369_25393 = state_25362__$1;
(statearr_25369_25393[(2)] = null);

(statearr_25369_25393[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25363 === (6))){
var state_25362__$1 = state_25362;
var statearr_25370_25394 = state_25362__$1;
(statearr_25370_25394[(2)] = null);

(statearr_25370_25394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25363 === (3))){
var inst_25360 = (state_25362[(2)]);
var state_25362__$1 = state_25362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25362__$1,inst_25360);
} else {
if((state_val_25363 === (12))){
var inst_25333 = (state_25362[(8)]);
var inst_25346 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25333);
var inst_25347 = cljs.core.first.call(null,inst_25346);
var inst_25348 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25347);
var inst_25349 = console.warn("Figwheel: Not loading code with warnings - ",inst_25348);
var state_25362__$1 = state_25362;
var statearr_25371_25395 = state_25362__$1;
(statearr_25371_25395[(2)] = inst_25349);

(statearr_25371_25395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25363 === (2))){
var state_25362__$1 = state_25362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25362__$1,(4),ch);
} else {
if((state_val_25363 === (11))){
var inst_25342 = (state_25362[(2)]);
var state_25362__$1 = state_25362;
var statearr_25372_25396 = state_25362__$1;
(statearr_25372_25396[(2)] = inst_25342);

(statearr_25372_25396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25363 === (9))){
var inst_25332 = (state_25362[(9)]);
var inst_25344 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25332,opts);
var state_25362__$1 = state_25362;
if(cljs.core.truth_(inst_25344)){
var statearr_25373_25397 = state_25362__$1;
(statearr_25373_25397[(1)] = (12));

} else {
var statearr_25374_25398 = state_25362__$1;
(statearr_25374_25398[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25363 === (5))){
var inst_25332 = (state_25362[(9)]);
var inst_25326 = (state_25362[(7)]);
var inst_25328 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25329 = (new cljs.core.PersistentArrayMap(null,2,inst_25328,null));
var inst_25330 = (new cljs.core.PersistentHashSet(null,inst_25329,null));
var inst_25331 = figwheel.client.focus_msgs.call(null,inst_25330,inst_25326);
var inst_25332__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25331);
var inst_25333 = cljs.core.first.call(null,inst_25331);
var inst_25334 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25332__$1,opts);
var state_25362__$1 = (function (){var statearr_25375 = state_25362;
(statearr_25375[(8)] = inst_25333);

(statearr_25375[(9)] = inst_25332__$1);

return statearr_25375;
})();
if(cljs.core.truth_(inst_25334)){
var statearr_25376_25399 = state_25362__$1;
(statearr_25376_25399[(1)] = (8));

} else {
var statearr_25377_25400 = state_25362__$1;
(statearr_25377_25400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25363 === (14))){
var inst_25352 = (state_25362[(2)]);
var state_25362__$1 = state_25362;
var statearr_25378_25401 = state_25362__$1;
(statearr_25378_25401[(2)] = inst_25352);

(statearr_25378_25401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25363 === (10))){
var inst_25354 = (state_25362[(2)]);
var state_25362__$1 = (function (){var statearr_25379 = state_25362;
(statearr_25379[(10)] = inst_25354);

return statearr_25379;
})();
var statearr_25380_25402 = state_25362__$1;
(statearr_25380_25402[(2)] = null);

(statearr_25380_25402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25363 === (8))){
var inst_25333 = (state_25362[(8)]);
var inst_25336 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25337 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25333);
var inst_25338 = cljs.core.async.timeout.call(null,(1000));
var inst_25339 = [inst_25337,inst_25338];
var inst_25340 = (new cljs.core.PersistentVector(null,2,(5),inst_25336,inst_25339,null));
var state_25362__$1 = state_25362;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25362__$1,(11),inst_25340);
} else {
return null;
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
});})(c__21665__auto___25388,ch))
;
return ((function (switch__21603__auto__,c__21665__auto___25388,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21604__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21604__auto____0 = (function (){
var statearr_25384 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25384[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21604__auto__);

(statearr_25384[(1)] = (1));

return statearr_25384;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21604__auto____1 = (function (state_25362){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_25362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e25385){if((e25385 instanceof Object)){
var ex__21607__auto__ = e25385;
var statearr_25386_25403 = state_25362;
(statearr_25386_25403[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25404 = state_25362;
state_25362 = G__25404;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21604__auto__ = function(state_25362){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21604__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21604__auto____1.call(this,state_25362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21604__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21604__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___25388,ch))
})();
var state__21667__auto__ = (function (){var statearr_25387 = f__21666__auto__.call(null);
(statearr_25387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___25388);

return statearr_25387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___25388,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25405_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25405_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_25412 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25412){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_25410 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25411 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25410,_STAR_print_newline_STAR_25411,base_path_25412){
return (function() { 
var G__25413__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25414__i = 0, G__25414__a = new Array(arguments.length -  0);
while (G__25414__i < G__25414__a.length) {G__25414__a[G__25414__i] = arguments[G__25414__i + 0]; ++G__25414__i;}
  args = new cljs.core.IndexedSeq(G__25414__a,0);
} 
return G__25413__delegate.call(this,args);};
G__25413.cljs$lang$maxFixedArity = 0;
G__25413.cljs$lang$applyTo = (function (arglist__25415){
var args = cljs.core.seq(arglist__25415);
return G__25413__delegate(args);
});
G__25413.cljs$core$IFn$_invoke$arity$variadic = G__25413__delegate;
return G__25413;
})()
;})(_STAR_print_fn_STAR_25410,_STAR_print_newline_STAR_25411,base_path_25412))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25411;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25410;
}}catch (e25409){if((e25409 instanceof Error)){
var e = e25409;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25412], null));
} else {
var e = e25409;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25412))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25416){
var map__25421 = p__25416;
var map__25421__$1 = ((cljs.core.seq_QMARK_.call(null,map__25421))?cljs.core.apply.call(null,cljs.core.hash_map,map__25421):map__25421);
var opts = map__25421__$1;
var build_id = cljs.core.get.call(null,map__25421__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25421,map__25421__$1,opts,build_id){
return (function (p__25422){
var vec__25423 = p__25422;
var map__25424 = cljs.core.nth.call(null,vec__25423,(0),null);
var map__25424__$1 = ((cljs.core.seq_QMARK_.call(null,map__25424))?cljs.core.apply.call(null,cljs.core.hash_map,map__25424):map__25424);
var msg = map__25424__$1;
var msg_name = cljs.core.get.call(null,map__25424__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25423,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__25423,map__25424,map__25424__$1,msg,msg_name,_,map__25421,map__25421__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25423,map__25424,map__25424__$1,msg,msg_name,_,map__25421,map__25421__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25421,map__25421__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25428){
var vec__25429 = p__25428;
var map__25430 = cljs.core.nth.call(null,vec__25429,(0),null);
var map__25430__$1 = ((cljs.core.seq_QMARK_.call(null,map__25430))?cljs.core.apply.call(null,cljs.core.hash_map,map__25430):map__25430);
var msg = map__25430__$1;
var msg_name = cljs.core.get.call(null,map__25430__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25429,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25431){
var map__25439 = p__25431;
var map__25439__$1 = ((cljs.core.seq_QMARK_.call(null,map__25439))?cljs.core.apply.call(null,cljs.core.hash_map,map__25439):map__25439);
var on_compile_fail = cljs.core.get.call(null,map__25439__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__25439__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__25439,map__25439__$1,on_compile_fail,on_compile_warning){
return (function (p__25440){
var vec__25441 = p__25440;
var map__25442 = cljs.core.nth.call(null,vec__25441,(0),null);
var map__25442__$1 = ((cljs.core.seq_QMARK_.call(null,map__25442))?cljs.core.apply.call(null,cljs.core.hash_map,map__25442):map__25442);
var msg = map__25442__$1;
var msg_name = cljs.core.get.call(null,map__25442__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25441,(1));
var pred__25443 = cljs.core._EQ_;
var expr__25444 = msg_name;
if(cljs.core.truth_(pred__25443.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25444))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25443.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25444))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25439,map__25439__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto__,msg_hist,msg_names,msg){
return (function (state_25645){
var state_val_25646 = (state_25645[(1)]);
if((state_val_25646 === (7))){
var inst_25579 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25647_25688 = state_25645__$1;
(statearr_25647_25688[(2)] = inst_25579);

(statearr_25647_25688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (20))){
var inst_25607 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25645__$1 = state_25645;
if(cljs.core.truth_(inst_25607)){
var statearr_25648_25689 = state_25645__$1;
(statearr_25648_25689[(1)] = (22));

} else {
var statearr_25649_25690 = state_25645__$1;
(statearr_25649_25690[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (27))){
var inst_25619 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25620 = figwheel.client.heads_up.display_warning.call(null,inst_25619);
var state_25645__$1 = state_25645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25645__$1,(30),inst_25620);
} else {
if((state_val_25646 === (1))){
var inst_25567 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25645__$1 = state_25645;
if(cljs.core.truth_(inst_25567)){
var statearr_25650_25691 = state_25645__$1;
(statearr_25650_25691[(1)] = (2));

} else {
var statearr_25651_25692 = state_25645__$1;
(statearr_25651_25692[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (24))){
var inst_25635 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25652_25693 = state_25645__$1;
(statearr_25652_25693[(2)] = inst_25635);

(statearr_25652_25693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (4))){
var inst_25643 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25645__$1,inst_25643);
} else {
if((state_val_25646 === (15))){
var inst_25595 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25596 = figwheel.client.format_messages.call(null,inst_25595);
var inst_25597 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25598 = figwheel.client.heads_up.display_error.call(null,inst_25596,inst_25597);
var state_25645__$1 = state_25645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25645__$1,(18),inst_25598);
} else {
if((state_val_25646 === (21))){
var inst_25637 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25653_25694 = state_25645__$1;
(statearr_25653_25694[(2)] = inst_25637);

(statearr_25653_25694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (31))){
var inst_25626 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25645__$1 = state_25645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25645__$1,(34),inst_25626);
} else {
if((state_val_25646 === (32))){
var state_25645__$1 = state_25645;
var statearr_25654_25695 = state_25645__$1;
(statearr_25654_25695[(2)] = null);

(statearr_25654_25695[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (33))){
var inst_25631 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25655_25696 = state_25645__$1;
(statearr_25655_25696[(2)] = inst_25631);

(statearr_25655_25696[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (13))){
var inst_25585 = (state_25645[(2)]);
var inst_25586 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25587 = figwheel.client.format_messages.call(null,inst_25586);
var inst_25588 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25589 = figwheel.client.heads_up.display_error.call(null,inst_25587,inst_25588);
var state_25645__$1 = (function (){var statearr_25656 = state_25645;
(statearr_25656[(7)] = inst_25585);

return statearr_25656;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25645__$1,(14),inst_25589);
} else {
if((state_val_25646 === (22))){
var inst_25609 = figwheel.client.heads_up.clear.call(null);
var state_25645__$1 = state_25645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25645__$1,(25),inst_25609);
} else {
if((state_val_25646 === (29))){
var inst_25633 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25657_25697 = state_25645__$1;
(statearr_25657_25697[(2)] = inst_25633);

(statearr_25657_25697[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (6))){
var inst_25575 = figwheel.client.heads_up.clear.call(null);
var state_25645__$1 = state_25645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25645__$1,(9),inst_25575);
} else {
if((state_val_25646 === (28))){
var inst_25624 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25645__$1 = state_25645;
if(cljs.core.truth_(inst_25624)){
var statearr_25658_25698 = state_25645__$1;
(statearr_25658_25698[(1)] = (31));

} else {
var statearr_25659_25699 = state_25645__$1;
(statearr_25659_25699[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (25))){
var inst_25611 = (state_25645[(2)]);
var inst_25612 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25613 = figwheel.client.heads_up.display_warning.call(null,inst_25612);
var state_25645__$1 = (function (){var statearr_25660 = state_25645;
(statearr_25660[(8)] = inst_25611);

return statearr_25660;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25645__$1,(26),inst_25613);
} else {
if((state_val_25646 === (34))){
var inst_25628 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25661_25700 = state_25645__$1;
(statearr_25661_25700[(2)] = inst_25628);

(statearr_25661_25700[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (17))){
var inst_25639 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25662_25701 = state_25645__$1;
(statearr_25662_25701[(2)] = inst_25639);

(statearr_25662_25701[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (3))){
var inst_25581 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25645__$1 = state_25645;
if(cljs.core.truth_(inst_25581)){
var statearr_25663_25702 = state_25645__$1;
(statearr_25663_25702[(1)] = (10));

} else {
var statearr_25664_25703 = state_25645__$1;
(statearr_25664_25703[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (12))){
var inst_25641 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25665_25704 = state_25645__$1;
(statearr_25665_25704[(2)] = inst_25641);

(statearr_25665_25704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (2))){
var inst_25569 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25645__$1 = state_25645;
if(cljs.core.truth_(inst_25569)){
var statearr_25666_25705 = state_25645__$1;
(statearr_25666_25705[(1)] = (5));

} else {
var statearr_25667_25706 = state_25645__$1;
(statearr_25667_25706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (23))){
var inst_25617 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25645__$1 = state_25645;
if(cljs.core.truth_(inst_25617)){
var statearr_25668_25707 = state_25645__$1;
(statearr_25668_25707[(1)] = (27));

} else {
var statearr_25669_25708 = state_25645__$1;
(statearr_25669_25708[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (19))){
var inst_25604 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25605 = figwheel.client.heads_up.append_message.call(null,inst_25604);
var state_25645__$1 = state_25645;
var statearr_25670_25709 = state_25645__$1;
(statearr_25670_25709[(2)] = inst_25605);

(statearr_25670_25709[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (11))){
var inst_25593 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25645__$1 = state_25645;
if(cljs.core.truth_(inst_25593)){
var statearr_25671_25710 = state_25645__$1;
(statearr_25671_25710[(1)] = (15));

} else {
var statearr_25672_25711 = state_25645__$1;
(statearr_25672_25711[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (9))){
var inst_25577 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25673_25712 = state_25645__$1;
(statearr_25673_25712[(2)] = inst_25577);

(statearr_25673_25712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (5))){
var inst_25571 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25645__$1 = state_25645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25645__$1,(8),inst_25571);
} else {
if((state_val_25646 === (14))){
var inst_25591 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25674_25713 = state_25645__$1;
(statearr_25674_25713[(2)] = inst_25591);

(statearr_25674_25713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (26))){
var inst_25615 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25675_25714 = state_25645__$1;
(statearr_25675_25714[(2)] = inst_25615);

(statearr_25675_25714[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (16))){
var inst_25602 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25645__$1 = state_25645;
if(cljs.core.truth_(inst_25602)){
var statearr_25676_25715 = state_25645__$1;
(statearr_25676_25715[(1)] = (19));

} else {
var statearr_25677_25716 = state_25645__$1;
(statearr_25677_25716[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (30))){
var inst_25622 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25678_25717 = state_25645__$1;
(statearr_25678_25717[(2)] = inst_25622);

(statearr_25678_25717[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (10))){
var inst_25583 = figwheel.client.heads_up.clear.call(null);
var state_25645__$1 = state_25645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25645__$1,(13),inst_25583);
} else {
if((state_val_25646 === (18))){
var inst_25600 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25679_25718 = state_25645__$1;
(statearr_25679_25718[(2)] = inst_25600);

(statearr_25679_25718[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25646 === (8))){
var inst_25573 = (state_25645[(2)]);
var state_25645__$1 = state_25645;
var statearr_25680_25719 = state_25645__$1;
(statearr_25680_25719[(2)] = inst_25573);

(statearr_25680_25719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__21665__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21603__auto__,c__21665__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21604__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21604__auto____0 = (function (){
var statearr_25684 = [null,null,null,null,null,null,null,null,null];
(statearr_25684[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21604__auto__);

(statearr_25684[(1)] = (1));

return statearr_25684;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21604__auto____1 = (function (state_25645){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_25645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e25685){if((e25685 instanceof Object)){
var ex__21607__auto__ = e25685;
var statearr_25686_25720 = state_25645;
(statearr_25686_25720[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25721 = state_25645;
state_25645 = G__25721;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21604__auto__ = function(state_25645){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21604__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21604__auto____1.call(this,state_25645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21604__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21604__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto__,msg_hist,msg_names,msg))
})();
var state__21667__auto__ = (function (){var statearr_25687 = f__21666__auto__.call(null);
(statearr_25687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto__);

return statearr_25687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto__,msg_hist,msg_names,msg))
);

return c__21665__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21665__auto___25784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___25784,ch){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___25784,ch){
return (function (state_25767){
var state_val_25768 = (state_25767[(1)]);
if((state_val_25768 === (8))){
var inst_25759 = (state_25767[(2)]);
var state_25767__$1 = (function (){var statearr_25769 = state_25767;
(statearr_25769[(7)] = inst_25759);

return statearr_25769;
})();
var statearr_25770_25785 = state_25767__$1;
(statearr_25770_25785[(2)] = null);

(statearr_25770_25785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25768 === (7))){
var inst_25763 = (state_25767[(2)]);
var state_25767__$1 = state_25767;
var statearr_25771_25786 = state_25767__$1;
(statearr_25771_25786[(2)] = inst_25763);

(statearr_25771_25786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25768 === (6))){
var state_25767__$1 = state_25767;
var statearr_25772_25787 = state_25767__$1;
(statearr_25772_25787[(2)] = null);

(statearr_25772_25787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25768 === (5))){
var inst_25755 = (state_25767[(8)]);
var inst_25757 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25755);
var state_25767__$1 = state_25767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25767__$1,(8),inst_25757);
} else {
if((state_val_25768 === (4))){
var inst_25755 = (state_25767[(8)]);
var inst_25755__$1 = (state_25767[(2)]);
var state_25767__$1 = (function (){var statearr_25773 = state_25767;
(statearr_25773[(8)] = inst_25755__$1);

return statearr_25773;
})();
if(cljs.core.truth_(inst_25755__$1)){
var statearr_25774_25788 = state_25767__$1;
(statearr_25774_25788[(1)] = (5));

} else {
var statearr_25775_25789 = state_25767__$1;
(statearr_25775_25789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25768 === (3))){
var inst_25765 = (state_25767[(2)]);
var state_25767__$1 = state_25767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25767__$1,inst_25765);
} else {
if((state_val_25768 === (2))){
var state_25767__$1 = state_25767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25767__$1,(4),ch);
} else {
if((state_val_25768 === (1))){
var state_25767__$1 = state_25767;
var statearr_25776_25790 = state_25767__$1;
(statearr_25776_25790[(2)] = null);

(statearr_25776_25790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21665__auto___25784,ch))
;
return ((function (switch__21603__auto__,c__21665__auto___25784,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21604__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21604__auto____0 = (function (){
var statearr_25780 = [null,null,null,null,null,null,null,null,null];
(statearr_25780[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21604__auto__);

(statearr_25780[(1)] = (1));

return statearr_25780;
});
var figwheel$client$heads_up_plugin_$_state_machine__21604__auto____1 = (function (state_25767){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_25767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e25781){if((e25781 instanceof Object)){
var ex__21607__auto__ = e25781;
var statearr_25782_25791 = state_25767;
(statearr_25782_25791[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25792 = state_25767;
state_25767 = G__25792;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21604__auto__ = function(state_25767){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21604__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21604__auto____1.call(this,state_25767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21604__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21604__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___25784,ch))
})();
var state__21667__auto__ = (function (){var statearr_25783 = f__21666__auto__.call(null);
(statearr_25783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___25784);

return statearr_25783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___25784,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto__){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto__){
return (function (state_25813){
var state_val_25814 = (state_25813[(1)]);
if((state_val_25814 === (2))){
var inst_25810 = (state_25813[(2)]);
var inst_25811 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25813__$1 = (function (){var statearr_25815 = state_25813;
(statearr_25815[(7)] = inst_25810);

return statearr_25815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25813__$1,inst_25811);
} else {
if((state_val_25814 === (1))){
var inst_25808 = cljs.core.async.timeout.call(null,(3000));
var state_25813__$1 = state_25813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25813__$1,(2),inst_25808);
} else {
return null;
}
}
});})(c__21665__auto__))
;
return ((function (switch__21603__auto__,c__21665__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21604__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21604__auto____0 = (function (){
var statearr_25819 = [null,null,null,null,null,null,null,null];
(statearr_25819[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21604__auto__);

(statearr_25819[(1)] = (1));

return statearr_25819;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21604__auto____1 = (function (state_25813){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_25813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e25820){if((e25820 instanceof Object)){
var ex__21607__auto__ = e25820;
var statearr_25821_25823 = state_25813;
(statearr_25821_25823[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25824 = state_25813;
state_25813 = G__25824;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21604__auto__ = function(state_25813){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21604__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21604__auto____1.call(this,state_25813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21604__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21604__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto__))
})();
var state__21667__auto__ = (function (){var statearr_25822 = f__21666__auto__.call(null);
(statearr_25822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto__);

return statearr_25822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto__))
);

return c__21665__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__18101__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__18101__auto__)){
return ("CustomEvent" in window);
} else {
return and__18101__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj25828 = {"detail":url};
return obj25828;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25829){
var map__25835 = p__25829;
var map__25835__$1 = ((cljs.core.seq_QMARK_.call(null,map__25835))?cljs.core.apply.call(null,cljs.core.hash_map,map__25835):map__25835);
var ed = map__25835__$1;
var cause = cljs.core.get.call(null,map__25835__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__25835__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__25835__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25836_25840 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25837_25841 = null;
var count__25838_25842 = (0);
var i__25839_25843 = (0);
while(true){
if((i__25839_25843 < count__25838_25842)){
var msg_25844 = cljs.core._nth.call(null,chunk__25837_25841,i__25839_25843);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25844);

var G__25845 = seq__25836_25840;
var G__25846 = chunk__25837_25841;
var G__25847 = count__25838_25842;
var G__25848 = (i__25839_25843 + (1));
seq__25836_25840 = G__25845;
chunk__25837_25841 = G__25846;
count__25838_25842 = G__25847;
i__25839_25843 = G__25848;
continue;
} else {
var temp__4126__auto___25849 = cljs.core.seq.call(null,seq__25836_25840);
if(temp__4126__auto___25849){
var seq__25836_25850__$1 = temp__4126__auto___25849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25836_25850__$1)){
var c__18898__auto___25851 = cljs.core.chunk_first.call(null,seq__25836_25850__$1);
var G__25852 = cljs.core.chunk_rest.call(null,seq__25836_25850__$1);
var G__25853 = c__18898__auto___25851;
var G__25854 = cljs.core.count.call(null,c__18898__auto___25851);
var G__25855 = (0);
seq__25836_25840 = G__25852;
chunk__25837_25841 = G__25853;
count__25838_25842 = G__25854;
i__25839_25843 = G__25855;
continue;
} else {
var msg_25856 = cljs.core.first.call(null,seq__25836_25850__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25856);

var G__25857 = cljs.core.next.call(null,seq__25836_25850__$1);
var G__25858 = null;
var G__25859 = (0);
var G__25860 = (0);
seq__25836_25840 = G__25857;
chunk__25837_25841 = G__25858;
count__25838_25842 = G__25859;
i__25839_25843 = G__25860;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25861){
var map__25863 = p__25861;
var map__25863__$1 = ((cljs.core.seq_QMARK_.call(null,map__25863))?cljs.core.apply.call(null,cljs.core.hash_map,map__25863):map__25863);
var w = map__25863__$1;
var message = cljs.core.get.call(null,map__25863__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18101__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18101__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18101__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25870 = cljs.core.seq.call(null,plugins);
var chunk__25871 = null;
var count__25872 = (0);
var i__25873 = (0);
while(true){
if((i__25873 < count__25872)){
var vec__25874 = cljs.core._nth.call(null,chunk__25871,i__25873);
var k = cljs.core.nth.call(null,vec__25874,(0),null);
var plugin = cljs.core.nth.call(null,vec__25874,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25876 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25870,chunk__25871,count__25872,i__25873,pl_25876,vec__25874,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25876.call(null,msg_hist);
});})(seq__25870,chunk__25871,count__25872,i__25873,pl_25876,vec__25874,k,plugin))
);
} else {
}

var G__25877 = seq__25870;
var G__25878 = chunk__25871;
var G__25879 = count__25872;
var G__25880 = (i__25873 + (1));
seq__25870 = G__25877;
chunk__25871 = G__25878;
count__25872 = G__25879;
i__25873 = G__25880;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25870);
if(temp__4126__auto__){
var seq__25870__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25870__$1)){
var c__18898__auto__ = cljs.core.chunk_first.call(null,seq__25870__$1);
var G__25881 = cljs.core.chunk_rest.call(null,seq__25870__$1);
var G__25882 = c__18898__auto__;
var G__25883 = cljs.core.count.call(null,c__18898__auto__);
var G__25884 = (0);
seq__25870 = G__25881;
chunk__25871 = G__25882;
count__25872 = G__25883;
i__25873 = G__25884;
continue;
} else {
var vec__25875 = cljs.core.first.call(null,seq__25870__$1);
var k = cljs.core.nth.call(null,vec__25875,(0),null);
var plugin = cljs.core.nth.call(null,vec__25875,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25885 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25870,chunk__25871,count__25872,i__25873,pl_25885,vec__25875,k,plugin,seq__25870__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25885.call(null,msg_hist);
});})(seq__25870,chunk__25871,count__25872,i__25873,pl_25885,vec__25875,k,plugin,seq__25870__$1,temp__4126__auto__))
);
} else {
}

var G__25886 = cljs.core.next.call(null,seq__25870__$1);
var G__25887 = null;
var G__25888 = (0);
var G__25889 = (0);
seq__25870 = G__25886;
chunk__25871 = G__25887;
count__25872 = G__25888;
i__25873 = G__25889;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__25891 = arguments.length;
switch (G__25891) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19153__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19153__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25894){
var map__25895 = p__25894;
var map__25895__$1 = ((cljs.core.seq_QMARK_.call(null,map__25895))?cljs.core.apply.call(null,cljs.core.hash_map,map__25895):map__25895);
var opts = map__25895__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25893){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25893));
});

//# sourceMappingURL=client.js.map