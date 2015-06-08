// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19153__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19153__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27438_27446 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27439_27447 = null;
var count__27440_27448 = (0);
var i__27441_27449 = (0);
while(true){
if((i__27441_27449 < count__27440_27448)){
var k_27450 = cljs.core._nth.call(null,chunk__27439_27447,i__27441_27449);
e.setAttribute(cljs.core.name.call(null,k_27450),cljs.core.get.call(null,attrs,k_27450));

var G__27451 = seq__27438_27446;
var G__27452 = chunk__27439_27447;
var G__27453 = count__27440_27448;
var G__27454 = (i__27441_27449 + (1));
seq__27438_27446 = G__27451;
chunk__27439_27447 = G__27452;
count__27440_27448 = G__27453;
i__27441_27449 = G__27454;
continue;
} else {
var temp__4126__auto___27455 = cljs.core.seq.call(null,seq__27438_27446);
if(temp__4126__auto___27455){
var seq__27438_27456__$1 = temp__4126__auto___27455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27438_27456__$1)){
var c__18898__auto___27457 = cljs.core.chunk_first.call(null,seq__27438_27456__$1);
var G__27458 = cljs.core.chunk_rest.call(null,seq__27438_27456__$1);
var G__27459 = c__18898__auto___27457;
var G__27460 = cljs.core.count.call(null,c__18898__auto___27457);
var G__27461 = (0);
seq__27438_27446 = G__27458;
chunk__27439_27447 = G__27459;
count__27440_27448 = G__27460;
i__27441_27449 = G__27461;
continue;
} else {
var k_27462 = cljs.core.first.call(null,seq__27438_27456__$1);
e.setAttribute(cljs.core.name.call(null,k_27462),cljs.core.get.call(null,attrs,k_27462));

var G__27463 = cljs.core.next.call(null,seq__27438_27456__$1);
var G__27464 = null;
var G__27465 = (0);
var G__27466 = (0);
seq__27438_27446 = G__27463;
chunk__27439_27447 = G__27464;
count__27440_27448 = G__27465;
i__27441_27449 = G__27466;
continue;
}
} else {
}
}
break;
}

var seq__27442_27467 = cljs.core.seq.call(null,children);
var chunk__27443_27468 = null;
var count__27444_27469 = (0);
var i__27445_27470 = (0);
while(true){
if((i__27445_27470 < count__27444_27469)){
var ch_27471 = cljs.core._nth.call(null,chunk__27443_27468,i__27445_27470);
e.appendChild(ch_27471);

var G__27472 = seq__27442_27467;
var G__27473 = chunk__27443_27468;
var G__27474 = count__27444_27469;
var G__27475 = (i__27445_27470 + (1));
seq__27442_27467 = G__27472;
chunk__27443_27468 = G__27473;
count__27444_27469 = G__27474;
i__27445_27470 = G__27475;
continue;
} else {
var temp__4126__auto___27476 = cljs.core.seq.call(null,seq__27442_27467);
if(temp__4126__auto___27476){
var seq__27442_27477__$1 = temp__4126__auto___27476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27442_27477__$1)){
var c__18898__auto___27478 = cljs.core.chunk_first.call(null,seq__27442_27477__$1);
var G__27479 = cljs.core.chunk_rest.call(null,seq__27442_27477__$1);
var G__27480 = c__18898__auto___27478;
var G__27481 = cljs.core.count.call(null,c__18898__auto___27478);
var G__27482 = (0);
seq__27442_27467 = G__27479;
chunk__27443_27468 = G__27480;
count__27444_27469 = G__27481;
i__27445_27470 = G__27482;
continue;
} else {
var ch_27483 = cljs.core.first.call(null,seq__27442_27477__$1);
e.appendChild(ch_27483);

var G__27484 = cljs.core.next.call(null,seq__27442_27477__$1);
var G__27485 = null;
var G__27486 = (0);
var G__27487 = (0);
seq__27442_27467 = G__27484;
chunk__27443_27468 = G__27485;
count__27444_27469 = G__27486;
i__27445_27470 = G__27487;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27435){
var G__27436 = cljs.core.first.call(null,seq27435);
var seq27435__$1 = cljs.core.next.call(null,seq27435);
var G__27437 = cljs.core.first.call(null,seq27435__$1);
var seq27435__$2 = cljs.core.next.call(null,seq27435__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27436,G__27437,seq27435__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19008__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19009__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19010__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19012__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19008__auto__,prefer_table__19009__auto__,method_cache__19010__auto__,cached_hierarchy__19011__auto__,hierarchy__19012__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19008__auto__,prefer_table__19009__auto__,method_cache__19010__auto__,cached_hierarchy__19011__auto__,hierarchy__19012__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19012__auto__,method_table__19008__auto__,prefer_table__19009__auto__,method_cache__19010__auto__,cached_hierarchy__19011__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27488 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27488.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27488.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_27488.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27488);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27489,st_map){
var map__27493 = p__27489;
var map__27493__$1 = ((cljs.core.seq_QMARK_.call(null,map__27493))?cljs.core.apply.call(null,cljs.core.hash_map,map__27493):map__27493);
var container_el = cljs.core.get.call(null,map__27493__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27493,map__27493__$1,container_el){
return (function (p__27494){
var vec__27495 = p__27494;
var k = cljs.core.nth.call(null,vec__27495,(0),null);
var v = cljs.core.nth.call(null,vec__27495,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27493,map__27493__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27496,dom_str){
var map__27498 = p__27496;
var map__27498__$1 = ((cljs.core.seq_QMARK_.call(null,map__27498))?cljs.core.apply.call(null,cljs.core.hash_map,map__27498):map__27498);
var c = map__27498__$1;
var content_area_el = cljs.core.get.call(null,map__27498__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27499){
var map__27501 = p__27499;
var map__27501__$1 = ((cljs.core.seq_QMARK_.call(null,map__27501))?cljs.core.apply.call(null,cljs.core.hash_map,map__27501):map__27501);
var content_area_el = cljs.core.get.call(null,map__27501__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto__){
return (function (state_27543){
var state_val_27544 = (state_27543[(1)]);
if((state_val_27544 === (2))){
var inst_27528 = (state_27543[(7)]);
var inst_27537 = (state_27543[(2)]);
var inst_27538 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27539 = ["auto"];
var inst_27540 = cljs.core.PersistentHashMap.fromArrays(inst_27538,inst_27539);
var inst_27541 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27528,inst_27540);
var state_27543__$1 = (function (){var statearr_27545 = state_27543;
(statearr_27545[(8)] = inst_27537);

return statearr_27545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27543__$1,inst_27541);
} else {
if((state_val_27544 === (1))){
var inst_27528 = (state_27543[(7)]);
var inst_27528__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27529 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27530 = ["10px","10px","100%","68px","1.0"];
var inst_27531 = cljs.core.PersistentHashMap.fromArrays(inst_27529,inst_27530);
var inst_27532 = cljs.core.merge.call(null,inst_27531,style);
var inst_27533 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27528__$1,inst_27532);
var inst_27534 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27528__$1,msg);
var inst_27535 = cljs.core.async.timeout.call(null,(300));
var state_27543__$1 = (function (){var statearr_27546 = state_27543;
(statearr_27546[(9)] = inst_27534);

(statearr_27546[(10)] = inst_27533);

(statearr_27546[(7)] = inst_27528__$1);

return statearr_27546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27543__$1,(2),inst_27535);
} else {
return null;
}
}
});})(c__21304__auto__))
;
return ((function (switch__21283__auto__,c__21304__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____0 = (function (){
var statearr_27550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27550[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__);

(statearr_27550[(1)] = (1));

return statearr_27550;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____1 = (function (state_27543){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27551){if((e27551 instanceof Object)){
var ex__21287__auto__ = e27551;
var statearr_27552_27554 = state_27543;
(statearr_27552_27554[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27555 = state_27543;
state_27543 = G__27555;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__ = function(state_27543){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____1.call(this,state_27543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto__))
})();
var state__21306__auto__ = (function (){var statearr_27553 = f__21305__auto__.call(null);
(statearr_27553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_27553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__))
);

return c__21304__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__27557 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__27557,(0),null);
var ln = cljs.core.nth.call(null,vec__27557,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27560 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27560,(0),null);
var file_line = cljs.core.nth.call(null,vec__27560,(1),null);
var file_column = cljs.core.nth.call(null,vec__27560,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27560,file_name,file_line,file_column){
return (function (p1__27558_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__27558_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__27560,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18113__auto__ = file_line;
if(cljs.core.truth_(or__18113__auto__)){
return or__18113__auto__;
} else {
var and__18101__auto__ = cause;
if(cljs.core.truth_(and__18101__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18101__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__27562 = figwheel.client.heads_up.ensure_container.call(null);
var map__27562__$1 = ((cljs.core.seq_QMARK_.call(null,map__27562))?cljs.core.apply.call(null,cljs.core.hash_map,map__27562):map__27562);
var content_area_el = cljs.core.get.call(null,map__27562__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto__){
return (function (state_27609){
var state_val_27610 = (state_27609[(1)]);
if((state_val_27610 === (3))){
var inst_27592 = (state_27609[(7)]);
var inst_27606 = (state_27609[(2)]);
var inst_27607 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27592,"");
var state_27609__$1 = (function (){var statearr_27611 = state_27609;
(statearr_27611[(8)] = inst_27606);

return statearr_27611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27609__$1,inst_27607);
} else {
if((state_val_27610 === (2))){
var inst_27592 = (state_27609[(7)]);
var inst_27599 = (state_27609[(2)]);
var inst_27600 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27601 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27602 = cljs.core.PersistentHashMap.fromArrays(inst_27600,inst_27601);
var inst_27603 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27592,inst_27602);
var inst_27604 = cljs.core.async.timeout.call(null,(200));
var state_27609__$1 = (function (){var statearr_27612 = state_27609;
(statearr_27612[(9)] = inst_27603);

(statearr_27612[(10)] = inst_27599);

return statearr_27612;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27609__$1,(3),inst_27604);
} else {
if((state_val_27610 === (1))){
var inst_27592 = (state_27609[(7)]);
var inst_27592__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27593 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27594 = ["0.0"];
var inst_27595 = cljs.core.PersistentHashMap.fromArrays(inst_27593,inst_27594);
var inst_27596 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27592__$1,inst_27595);
var inst_27597 = cljs.core.async.timeout.call(null,(300));
var state_27609__$1 = (function (){var statearr_27613 = state_27609;
(statearr_27613[(11)] = inst_27596);

(statearr_27613[(7)] = inst_27592__$1);

return statearr_27613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27609__$1,(2),inst_27597);
} else {
return null;
}
}
}
});})(c__21304__auto__))
;
return ((function (switch__21283__auto__,c__21304__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21284__auto____0 = (function (){
var statearr_27617 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27617[(0)] = figwheel$client$heads_up$clear_$_state_machine__21284__auto__);

(statearr_27617[(1)] = (1));

return statearr_27617;
});
var figwheel$client$heads_up$clear_$_state_machine__21284__auto____1 = (function (state_27609){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27618){if((e27618 instanceof Object)){
var ex__21287__auto__ = e27618;
var statearr_27619_27621 = state_27609;
(statearr_27619_27621[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27622 = state_27609;
state_27609 = G__27622;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21284__auto__ = function(state_27609){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21284__auto____1.call(this,state_27609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21284__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21284__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto__))
})();
var state__21306__auto__ = (function (){var statearr_27620 = f__21305__auto__.call(null);
(statearr_27620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_27620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__))
);

return c__21304__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto__){
return (function (state_27654){
var state_val_27655 = (state_27654[(1)]);
if((state_val_27655 === (4))){
var inst_27652 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27654__$1,inst_27652);
} else {
if((state_val_27655 === (3))){
var inst_27649 = (state_27654[(2)]);
var inst_27650 = figwheel.client.heads_up.clear.call(null);
var state_27654__$1 = (function (){var statearr_27656 = state_27654;
(statearr_27656[(7)] = inst_27649);

return statearr_27656;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27654__$1,(4),inst_27650);
} else {
if((state_val_27655 === (2))){
var inst_27646 = (state_27654[(2)]);
var inst_27647 = cljs.core.async.timeout.call(null,(400));
var state_27654__$1 = (function (){var statearr_27657 = state_27654;
(statearr_27657[(8)] = inst_27646);

return statearr_27657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27654__$1,(3),inst_27647);
} else {
if((state_val_27655 === (1))){
var inst_27644 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27654__$1 = state_27654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27654__$1,(2),inst_27644);
} else {
return null;
}
}
}
}
});})(c__21304__auto__))
;
return ((function (switch__21283__auto__,c__21304__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____0 = (function (){
var statearr_27661 = [null,null,null,null,null,null,null,null,null];
(statearr_27661[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__);

(statearr_27661[(1)] = (1));

return statearr_27661;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____1 = (function (state_27654){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27662){if((e27662 instanceof Object)){
var ex__21287__auto__ = e27662;
var statearr_27663_27665 = state_27654;
(statearr_27663_27665[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27666 = state_27654;
state_27654 = G__27666;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__ = function(state_27654){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____1.call(this,state_27654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto__))
})();
var state__21306__auto__ = (function (){var statearr_27664 = f__21305__auto__.call(null);
(statearr_27664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_27664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__))
);

return c__21304__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map