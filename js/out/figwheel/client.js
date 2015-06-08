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
var G__26670__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26671__i = 0, G__26671__a = new Array(arguments.length -  0);
while (G__26671__i < G__26671__a.length) {G__26671__a[G__26671__i] = arguments[G__26671__i + 0]; ++G__26671__i;}
  args = new cljs.core.IndexedSeq(G__26671__a,0);
} 
return G__26670__delegate.call(this,args);};
G__26670.cljs$lang$maxFixedArity = 0;
G__26670.cljs$lang$applyTo = (function (arglist__26672){
var args = cljs.core.seq(arglist__26672);
return G__26670__delegate(args);
});
G__26670.cljs$core$IFn$_invoke$arity$variadic = G__26670__delegate;
return G__26670;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26673){
var map__26675 = p__26673;
var map__26675__$1 = ((cljs.core.seq_QMARK_.call(null,map__26675))?cljs.core.apply.call(null,cljs.core.hash_map,map__26675):map__26675);
var class$ = cljs.core.get.call(null,map__26675__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__26675__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__21304__auto___26804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___26804,ch){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto___26804,ch){
return (function (state_26778){
var state_val_26779 = (state_26778[(1)]);
if((state_val_26779 === (7))){
var inst_26774 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26780_26805 = state_26778__$1;
(statearr_26780_26805[(2)] = inst_26774);

(statearr_26780_26805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (1))){
var state_26778__$1 = state_26778;
var statearr_26781_26806 = state_26778__$1;
(statearr_26781_26806[(2)] = null);

(statearr_26781_26806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (4))){
var inst_26742 = (state_26778[(7)]);
var inst_26742__$1 = (state_26778[(2)]);
var state_26778__$1 = (function (){var statearr_26782 = state_26778;
(statearr_26782[(7)] = inst_26742__$1);

return statearr_26782;
})();
if(cljs.core.truth_(inst_26742__$1)){
var statearr_26783_26807 = state_26778__$1;
(statearr_26783_26807[(1)] = (5));

} else {
var statearr_26784_26808 = state_26778__$1;
(statearr_26784_26808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (13))){
var state_26778__$1 = state_26778;
var statearr_26785_26809 = state_26778__$1;
(statearr_26785_26809[(2)] = null);

(statearr_26785_26809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (6))){
var state_26778__$1 = state_26778;
var statearr_26786_26810 = state_26778__$1;
(statearr_26786_26810[(2)] = null);

(statearr_26786_26810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (3))){
var inst_26776 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26778__$1,inst_26776);
} else {
if((state_val_26779 === (12))){
var inst_26749 = (state_26778[(8)]);
var inst_26762 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26749);
var inst_26763 = cljs.core.first.call(null,inst_26762);
var inst_26764 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26763);
var inst_26765 = console.warn("Figwheel: Not loading code with warnings - ",inst_26764);
var state_26778__$1 = state_26778;
var statearr_26787_26811 = state_26778__$1;
(statearr_26787_26811[(2)] = inst_26765);

(statearr_26787_26811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (2))){
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26778__$1,(4),ch);
} else {
if((state_val_26779 === (11))){
var inst_26758 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26788_26812 = state_26778__$1;
(statearr_26788_26812[(2)] = inst_26758);

(statearr_26788_26812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (9))){
var inst_26748 = (state_26778[(9)]);
var inst_26760 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26748,opts);
var state_26778__$1 = state_26778;
if(cljs.core.truth_(inst_26760)){
var statearr_26789_26813 = state_26778__$1;
(statearr_26789_26813[(1)] = (12));

} else {
var statearr_26790_26814 = state_26778__$1;
(statearr_26790_26814[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (5))){
var inst_26742 = (state_26778[(7)]);
var inst_26748 = (state_26778[(9)]);
var inst_26744 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26745 = (new cljs.core.PersistentArrayMap(null,2,inst_26744,null));
var inst_26746 = (new cljs.core.PersistentHashSet(null,inst_26745,null));
var inst_26747 = figwheel.client.focus_msgs.call(null,inst_26746,inst_26742);
var inst_26748__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26747);
var inst_26749 = cljs.core.first.call(null,inst_26747);
var inst_26750 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26748__$1,opts);
var state_26778__$1 = (function (){var statearr_26791 = state_26778;
(statearr_26791[(9)] = inst_26748__$1);

(statearr_26791[(8)] = inst_26749);

return statearr_26791;
})();
if(cljs.core.truth_(inst_26750)){
var statearr_26792_26815 = state_26778__$1;
(statearr_26792_26815[(1)] = (8));

} else {
var statearr_26793_26816 = state_26778__$1;
(statearr_26793_26816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (14))){
var inst_26768 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26794_26817 = state_26778__$1;
(statearr_26794_26817[(2)] = inst_26768);

(statearr_26794_26817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (10))){
var inst_26770 = (state_26778[(2)]);
var state_26778__$1 = (function (){var statearr_26795 = state_26778;
(statearr_26795[(10)] = inst_26770);

return statearr_26795;
})();
var statearr_26796_26818 = state_26778__$1;
(statearr_26796_26818[(2)] = null);

(statearr_26796_26818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (8))){
var inst_26749 = (state_26778[(8)]);
var inst_26752 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26753 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26749);
var inst_26754 = cljs.core.async.timeout.call(null,(1000));
var inst_26755 = [inst_26753,inst_26754];
var inst_26756 = (new cljs.core.PersistentVector(null,2,(5),inst_26752,inst_26755,null));
var state_26778__$1 = state_26778;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26778__$1,(11),inst_26756);
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
});})(c__21304__auto___26804,ch))
;
return ((function (switch__21283__auto__,c__21304__auto___26804,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____0 = (function (){
var statearr_26800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26800[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__);

(statearr_26800[(1)] = (1));

return statearr_26800;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____1 = (function (state_26778){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26801){if((e26801 instanceof Object)){
var ex__21287__auto__ = e26801;
var statearr_26802_26819 = state_26778;
(statearr_26802_26819[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26820 = state_26778;
state_26778 = G__26820;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__ = function(state_26778){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____1.call(this,state_26778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto___26804,ch))
})();
var state__21306__auto__ = (function (){var statearr_26803 = f__21305__auto__.call(null);
(statearr_26803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___26804);

return statearr_26803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___26804,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26821_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26821_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_26828 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26828){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_26826 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26827 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26826,_STAR_print_newline_STAR_26827,base_path_26828){
return (function() { 
var G__26829__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26830__i = 0, G__26830__a = new Array(arguments.length -  0);
while (G__26830__i < G__26830__a.length) {G__26830__a[G__26830__i] = arguments[G__26830__i + 0]; ++G__26830__i;}
  args = new cljs.core.IndexedSeq(G__26830__a,0);
} 
return G__26829__delegate.call(this,args);};
G__26829.cljs$lang$maxFixedArity = 0;
G__26829.cljs$lang$applyTo = (function (arglist__26831){
var args = cljs.core.seq(arglist__26831);
return G__26829__delegate(args);
});
G__26829.cljs$core$IFn$_invoke$arity$variadic = G__26829__delegate;
return G__26829;
})()
;})(_STAR_print_fn_STAR_26826,_STAR_print_newline_STAR_26827,base_path_26828))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26827;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26826;
}}catch (e26825){if((e26825 instanceof Error)){
var e = e26825;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26828], null));
} else {
var e = e26825;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26828))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26832){
var map__26837 = p__26832;
var map__26837__$1 = ((cljs.core.seq_QMARK_.call(null,map__26837))?cljs.core.apply.call(null,cljs.core.hash_map,map__26837):map__26837);
var opts = map__26837__$1;
var build_id = cljs.core.get.call(null,map__26837__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26837,map__26837__$1,opts,build_id){
return (function (p__26838){
var vec__26839 = p__26838;
var map__26840 = cljs.core.nth.call(null,vec__26839,(0),null);
var map__26840__$1 = ((cljs.core.seq_QMARK_.call(null,map__26840))?cljs.core.apply.call(null,cljs.core.hash_map,map__26840):map__26840);
var msg = map__26840__$1;
var msg_name = cljs.core.get.call(null,map__26840__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26839,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__26839,map__26840,map__26840__$1,msg,msg_name,_,map__26837,map__26837__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26839,map__26840,map__26840__$1,msg,msg_name,_,map__26837,map__26837__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26837,map__26837__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26844){
var vec__26845 = p__26844;
var map__26846 = cljs.core.nth.call(null,vec__26845,(0),null);
var map__26846__$1 = ((cljs.core.seq_QMARK_.call(null,map__26846))?cljs.core.apply.call(null,cljs.core.hash_map,map__26846):map__26846);
var msg = map__26846__$1;
var msg_name = cljs.core.get.call(null,map__26846__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26845,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26847){
var map__26855 = p__26847;
var map__26855__$1 = ((cljs.core.seq_QMARK_.call(null,map__26855))?cljs.core.apply.call(null,cljs.core.hash_map,map__26855):map__26855);
var on_compile_fail = cljs.core.get.call(null,map__26855__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__26855__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__26855,map__26855__$1,on_compile_fail,on_compile_warning){
return (function (p__26856){
var vec__26857 = p__26856;
var map__26858 = cljs.core.nth.call(null,vec__26857,(0),null);
var map__26858__$1 = ((cljs.core.seq_QMARK_.call(null,map__26858))?cljs.core.apply.call(null,cljs.core.hash_map,map__26858):map__26858);
var msg = map__26858__$1;
var msg_name = cljs.core.get.call(null,map__26858__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26857,(1));
var pred__26859 = cljs.core._EQ_;
var expr__26860 = msg_name;
if(cljs.core.truth_(pred__26859.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26860))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26859.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26860))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26855,map__26855__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto__,msg_hist,msg_names,msg){
return (function (state_27061){
var state_val_27062 = (state_27061[(1)]);
if((state_val_27062 === (7))){
var inst_26995 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
var statearr_27063_27104 = state_27061__$1;
(statearr_27063_27104[(2)] = inst_26995);

(statearr_27063_27104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (20))){
var inst_27023 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27061__$1 = state_27061;
if(cljs.core.truth_(inst_27023)){
var statearr_27064_27105 = state_27061__$1;
(statearr_27064_27105[(1)] = (22));

} else {
var statearr_27065_27106 = state_27061__$1;
(statearr_27065_27106[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (27))){
var inst_27035 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27036 = figwheel.client.heads_up.display_warning.call(null,inst_27035);
var state_27061__$1 = state_27061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27061__$1,(30),inst_27036);
} else {
if((state_val_27062 === (1))){
var inst_26983 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27061__$1 = state_27061;
if(cljs.core.truth_(inst_26983)){
var statearr_27066_27107 = state_27061__$1;
(statearr_27066_27107[(1)] = (2));

} else {
var statearr_27067_27108 = state_27061__$1;
(statearr_27067_27108[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (24))){
var inst_27051 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
var statearr_27068_27109 = state_27061__$1;
(statearr_27068_27109[(2)] = inst_27051);

(statearr_27068_27109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (4))){
var inst_27059 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27061__$1,inst_27059);
} else {
if((state_val_27062 === (15))){
var inst_27011 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27012 = figwheel.client.format_messages.call(null,inst_27011);
var inst_27013 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27014 = figwheel.client.heads_up.display_error.call(null,inst_27012,inst_27013);
var state_27061__$1 = state_27061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27061__$1,(18),inst_27014);
} else {
if((state_val_27062 === (21))){
var inst_27053 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
var statearr_27069_27110 = state_27061__$1;
(statearr_27069_27110[(2)] = inst_27053);

(statearr_27069_27110[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (31))){
var inst_27042 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27061__$1 = state_27061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27061__$1,(34),inst_27042);
} else {
if((state_val_27062 === (32))){
var state_27061__$1 = state_27061;
var statearr_27070_27111 = state_27061__$1;
(statearr_27070_27111[(2)] = null);

(statearr_27070_27111[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (33))){
var inst_27047 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
var statearr_27071_27112 = state_27061__$1;
(statearr_27071_27112[(2)] = inst_27047);

(statearr_27071_27112[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (13))){
var inst_27001 = (state_27061[(2)]);
var inst_27002 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27003 = figwheel.client.format_messages.call(null,inst_27002);
var inst_27004 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27005 = figwheel.client.heads_up.display_error.call(null,inst_27003,inst_27004);
var state_27061__$1 = (function (){var statearr_27072 = state_27061;
(statearr_27072[(7)] = inst_27001);

return statearr_27072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27061__$1,(14),inst_27005);
} else {
if((state_val_27062 === (22))){
var inst_27025 = figwheel.client.heads_up.clear.call(null);
var state_27061__$1 = state_27061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27061__$1,(25),inst_27025);
} else {
if((state_val_27062 === (29))){
var inst_27049 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
var statearr_27073_27113 = state_27061__$1;
(statearr_27073_27113[(2)] = inst_27049);

(statearr_27073_27113[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (6))){
var inst_26991 = figwheel.client.heads_up.clear.call(null);
var state_27061__$1 = state_27061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27061__$1,(9),inst_26991);
} else {
if((state_val_27062 === (28))){
var inst_27040 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27061__$1 = state_27061;
if(cljs.core.truth_(inst_27040)){
var statearr_27074_27114 = state_27061__$1;
(statearr_27074_27114[(1)] = (31));

} else {
var statearr_27075_27115 = state_27061__$1;
(statearr_27075_27115[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (25))){
var inst_27027 = (state_27061[(2)]);
var inst_27028 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27029 = figwheel.client.heads_up.display_warning.call(null,inst_27028);
var state_27061__$1 = (function (){var statearr_27076 = state_27061;
(statearr_27076[(8)] = inst_27027);

return statearr_27076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27061__$1,(26),inst_27029);
} else {
if((state_val_27062 === (34))){
var inst_27044 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
var statearr_27077_27116 = state_27061__$1;
(statearr_27077_27116[(2)] = inst_27044);

(statearr_27077_27116[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (17))){
var inst_27055 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
var statearr_27078_27117 = state_27061__$1;
(statearr_27078_27117[(2)] = inst_27055);

(statearr_27078_27117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (3))){
var inst_26997 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27061__$1 = state_27061;
if(cljs.core.truth_(inst_26997)){
var statearr_27079_27118 = state_27061__$1;
(statearr_27079_27118[(1)] = (10));

} else {
var statearr_27080_27119 = state_27061__$1;
(statearr_27080_27119[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (12))){
var inst_27057 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
var statearr_27081_27120 = state_27061__$1;
(statearr_27081_27120[(2)] = inst_27057);

(statearr_27081_27120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (2))){
var inst_26985 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27061__$1 = state_27061;
if(cljs.core.truth_(inst_26985)){
var statearr_27082_27121 = state_27061__$1;
(statearr_27082_27121[(1)] = (5));

} else {
var statearr_27083_27122 = state_27061__$1;
(statearr_27083_27122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (23))){
var inst_27033 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27061__$1 = state_27061;
if(cljs.core.truth_(inst_27033)){
var statearr_27084_27123 = state_27061__$1;
(statearr_27084_27123[(1)] = (27));

} else {
var statearr_27085_27124 = state_27061__$1;
(statearr_27085_27124[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (19))){
var inst_27020 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27021 = figwheel.client.heads_up.append_message.call(null,inst_27020);
var state_27061__$1 = state_27061;
var statearr_27086_27125 = state_27061__$1;
(statearr_27086_27125[(2)] = inst_27021);

(statearr_27086_27125[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (11))){
var inst_27009 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27061__$1 = state_27061;
if(cljs.core.truth_(inst_27009)){
var statearr_27087_27126 = state_27061__$1;
(statearr_27087_27126[(1)] = (15));

} else {
var statearr_27088_27127 = state_27061__$1;
(statearr_27088_27127[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (9))){
var inst_26993 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
var statearr_27089_27128 = state_27061__$1;
(statearr_27089_27128[(2)] = inst_26993);

(statearr_27089_27128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (5))){
var inst_26987 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27061__$1 = state_27061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27061__$1,(8),inst_26987);
} else {
if((state_val_27062 === (14))){
var inst_27007 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
var statearr_27090_27129 = state_27061__$1;
(statearr_27090_27129[(2)] = inst_27007);

(statearr_27090_27129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (26))){
var inst_27031 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
var statearr_27091_27130 = state_27061__$1;
(statearr_27091_27130[(2)] = inst_27031);

(statearr_27091_27130[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (16))){
var inst_27018 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27061__$1 = state_27061;
if(cljs.core.truth_(inst_27018)){
var statearr_27092_27131 = state_27061__$1;
(statearr_27092_27131[(1)] = (19));

} else {
var statearr_27093_27132 = state_27061__$1;
(statearr_27093_27132[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (30))){
var inst_27038 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
var statearr_27094_27133 = state_27061__$1;
(statearr_27094_27133[(2)] = inst_27038);

(statearr_27094_27133[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (10))){
var inst_26999 = figwheel.client.heads_up.clear.call(null);
var state_27061__$1 = state_27061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27061__$1,(13),inst_26999);
} else {
if((state_val_27062 === (18))){
var inst_27016 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
var statearr_27095_27134 = state_27061__$1;
(statearr_27095_27134[(2)] = inst_27016);

(statearr_27095_27134[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (8))){
var inst_26989 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
var statearr_27096_27135 = state_27061__$1;
(statearr_27096_27135[(2)] = inst_26989);

(statearr_27096_27135[(1)] = (7));


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
});})(c__21304__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21283__auto__,c__21304__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____0 = (function (){
var statearr_27100 = [null,null,null,null,null,null,null,null,null];
(statearr_27100[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__);

(statearr_27100[(1)] = (1));

return statearr_27100;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____1 = (function (state_27061){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27101){if((e27101 instanceof Object)){
var ex__21287__auto__ = e27101;
var statearr_27102_27136 = state_27061;
(statearr_27102_27136[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27137 = state_27061;
state_27061 = G__27137;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__ = function(state_27061){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____1.call(this,state_27061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto__,msg_hist,msg_names,msg))
})();
var state__21306__auto__ = (function (){var statearr_27103 = f__21305__auto__.call(null);
(statearr_27103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_27103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__,msg_hist,msg_names,msg))
);

return c__21304__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21304__auto___27200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___27200,ch){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto___27200,ch){
return (function (state_27183){
var state_val_27184 = (state_27183[(1)]);
if((state_val_27184 === (8))){
var inst_27175 = (state_27183[(2)]);
var state_27183__$1 = (function (){var statearr_27185 = state_27183;
(statearr_27185[(7)] = inst_27175);

return statearr_27185;
})();
var statearr_27186_27201 = state_27183__$1;
(statearr_27186_27201[(2)] = null);

(statearr_27186_27201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27184 === (7))){
var inst_27179 = (state_27183[(2)]);
var state_27183__$1 = state_27183;
var statearr_27187_27202 = state_27183__$1;
(statearr_27187_27202[(2)] = inst_27179);

(statearr_27187_27202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27184 === (6))){
var state_27183__$1 = state_27183;
var statearr_27188_27203 = state_27183__$1;
(statearr_27188_27203[(2)] = null);

(statearr_27188_27203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27184 === (5))){
var inst_27171 = (state_27183[(8)]);
var inst_27173 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27171);
var state_27183__$1 = state_27183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27183__$1,(8),inst_27173);
} else {
if((state_val_27184 === (4))){
var inst_27171 = (state_27183[(8)]);
var inst_27171__$1 = (state_27183[(2)]);
var state_27183__$1 = (function (){var statearr_27189 = state_27183;
(statearr_27189[(8)] = inst_27171__$1);

return statearr_27189;
})();
if(cljs.core.truth_(inst_27171__$1)){
var statearr_27190_27204 = state_27183__$1;
(statearr_27190_27204[(1)] = (5));

} else {
var statearr_27191_27205 = state_27183__$1;
(statearr_27191_27205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27184 === (3))){
var inst_27181 = (state_27183[(2)]);
var state_27183__$1 = state_27183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27183__$1,inst_27181);
} else {
if((state_val_27184 === (2))){
var state_27183__$1 = state_27183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27183__$1,(4),ch);
} else {
if((state_val_27184 === (1))){
var state_27183__$1 = state_27183;
var statearr_27192_27206 = state_27183__$1;
(statearr_27192_27206[(2)] = null);

(statearr_27192_27206[(1)] = (2));


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
});})(c__21304__auto___27200,ch))
;
return ((function (switch__21283__auto__,c__21304__auto___27200,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21284__auto____0 = (function (){
var statearr_27196 = [null,null,null,null,null,null,null,null,null];
(statearr_27196[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21284__auto__);

(statearr_27196[(1)] = (1));

return statearr_27196;
});
var figwheel$client$heads_up_plugin_$_state_machine__21284__auto____1 = (function (state_27183){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27197){if((e27197 instanceof Object)){
var ex__21287__auto__ = e27197;
var statearr_27198_27207 = state_27183;
(statearr_27198_27207[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27208 = state_27183;
state_27183 = G__27208;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21284__auto__ = function(state_27183){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21284__auto____1.call(this,state_27183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21284__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21284__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto___27200,ch))
})();
var state__21306__auto__ = (function (){var statearr_27199 = f__21305__auto__.call(null);
(statearr_27199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___27200);

return statearr_27199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___27200,ch))
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
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto__){
return (function (state_27229){
var state_val_27230 = (state_27229[(1)]);
if((state_val_27230 === (2))){
var inst_27226 = (state_27229[(2)]);
var inst_27227 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27229__$1 = (function (){var statearr_27231 = state_27229;
(statearr_27231[(7)] = inst_27226);

return statearr_27231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27229__$1,inst_27227);
} else {
if((state_val_27230 === (1))){
var inst_27224 = cljs.core.async.timeout.call(null,(3000));
var state_27229__$1 = state_27229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27229__$1,(2),inst_27224);
} else {
return null;
}
}
});})(c__21304__auto__))
;
return ((function (switch__21283__auto__,c__21304__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____0 = (function (){
var statearr_27235 = [null,null,null,null,null,null,null,null];
(statearr_27235[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__);

(statearr_27235[(1)] = (1));

return statearr_27235;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____1 = (function (state_27229){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27236){if((e27236 instanceof Object)){
var ex__21287__auto__ = e27236;
var statearr_27237_27239 = state_27229;
(statearr_27237_27239[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27240 = state_27229;
state_27229 = G__27240;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__ = function(state_27229){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____1.call(this,state_27229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto__))
})();
var state__21306__auto__ = (function (){var statearr_27238 = f__21305__auto__.call(null);
(statearr_27238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_27238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__))
);

return c__21304__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj27244 = {"detail":url};
return obj27244;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27245){
var map__27251 = p__27245;
var map__27251__$1 = ((cljs.core.seq_QMARK_.call(null,map__27251))?cljs.core.apply.call(null,cljs.core.hash_map,map__27251):map__27251);
var ed = map__27251__$1;
var cause = cljs.core.get.call(null,map__27251__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__27251__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__27251__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27252_27256 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27253_27257 = null;
var count__27254_27258 = (0);
var i__27255_27259 = (0);
while(true){
if((i__27255_27259 < count__27254_27258)){
var msg_27260 = cljs.core._nth.call(null,chunk__27253_27257,i__27255_27259);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27260);

var G__27261 = seq__27252_27256;
var G__27262 = chunk__27253_27257;
var G__27263 = count__27254_27258;
var G__27264 = (i__27255_27259 + (1));
seq__27252_27256 = G__27261;
chunk__27253_27257 = G__27262;
count__27254_27258 = G__27263;
i__27255_27259 = G__27264;
continue;
} else {
var temp__4126__auto___27265 = cljs.core.seq.call(null,seq__27252_27256);
if(temp__4126__auto___27265){
var seq__27252_27266__$1 = temp__4126__auto___27265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27252_27266__$1)){
var c__18898__auto___27267 = cljs.core.chunk_first.call(null,seq__27252_27266__$1);
var G__27268 = cljs.core.chunk_rest.call(null,seq__27252_27266__$1);
var G__27269 = c__18898__auto___27267;
var G__27270 = cljs.core.count.call(null,c__18898__auto___27267);
var G__27271 = (0);
seq__27252_27256 = G__27268;
chunk__27253_27257 = G__27269;
count__27254_27258 = G__27270;
i__27255_27259 = G__27271;
continue;
} else {
var msg_27272 = cljs.core.first.call(null,seq__27252_27266__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27272);

var G__27273 = cljs.core.next.call(null,seq__27252_27266__$1);
var G__27274 = null;
var G__27275 = (0);
var G__27276 = (0);
seq__27252_27256 = G__27273;
chunk__27253_27257 = G__27274;
count__27254_27258 = G__27275;
i__27255_27259 = G__27276;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27277){
var map__27279 = p__27277;
var map__27279__$1 = ((cljs.core.seq_QMARK_.call(null,map__27279))?cljs.core.apply.call(null,cljs.core.hash_map,map__27279):map__27279);
var w = map__27279__$1;
var message = cljs.core.get.call(null,map__27279__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__27286 = cljs.core.seq.call(null,plugins);
var chunk__27287 = null;
var count__27288 = (0);
var i__27289 = (0);
while(true){
if((i__27289 < count__27288)){
var vec__27290 = cljs.core._nth.call(null,chunk__27287,i__27289);
var k = cljs.core.nth.call(null,vec__27290,(0),null);
var plugin = cljs.core.nth.call(null,vec__27290,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27292 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27286,chunk__27287,count__27288,i__27289,pl_27292,vec__27290,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27292.call(null,msg_hist);
});})(seq__27286,chunk__27287,count__27288,i__27289,pl_27292,vec__27290,k,plugin))
);
} else {
}

var G__27293 = seq__27286;
var G__27294 = chunk__27287;
var G__27295 = count__27288;
var G__27296 = (i__27289 + (1));
seq__27286 = G__27293;
chunk__27287 = G__27294;
count__27288 = G__27295;
i__27289 = G__27296;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__27286);
if(temp__4126__auto__){
var seq__27286__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27286__$1)){
var c__18898__auto__ = cljs.core.chunk_first.call(null,seq__27286__$1);
var G__27297 = cljs.core.chunk_rest.call(null,seq__27286__$1);
var G__27298 = c__18898__auto__;
var G__27299 = cljs.core.count.call(null,c__18898__auto__);
var G__27300 = (0);
seq__27286 = G__27297;
chunk__27287 = G__27298;
count__27288 = G__27299;
i__27289 = G__27300;
continue;
} else {
var vec__27291 = cljs.core.first.call(null,seq__27286__$1);
var k = cljs.core.nth.call(null,vec__27291,(0),null);
var plugin = cljs.core.nth.call(null,vec__27291,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27301 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27286,chunk__27287,count__27288,i__27289,pl_27301,vec__27291,k,plugin,seq__27286__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27301.call(null,msg_hist);
});})(seq__27286,chunk__27287,count__27288,i__27289,pl_27301,vec__27291,k,plugin,seq__27286__$1,temp__4126__auto__))
);
} else {
}

var G__27302 = cljs.core.next.call(null,seq__27286__$1);
var G__27303 = null;
var G__27304 = (0);
var G__27305 = (0);
seq__27286 = G__27302;
chunk__27287 = G__27303;
count__27288 = G__27304;
i__27289 = G__27305;
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
var G__27307 = arguments.length;
switch (G__27307) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27310){
var map__27311 = p__27310;
var map__27311__$1 = ((cljs.core.seq_QMARK_.call(null,map__27311))?cljs.core.apply.call(null,cljs.core.hash_map,map__27311):map__27311);
var opts = map__27311__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27309){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27309));
});

//# sourceMappingURL=client.js.map