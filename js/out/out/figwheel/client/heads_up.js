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
var seq__26023_26031 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26024_26032 = null;
var count__26025_26033 = (0);
var i__26026_26034 = (0);
while(true){
if((i__26026_26034 < count__26025_26033)){
var k_26035 = cljs.core._nth.call(null,chunk__26024_26032,i__26026_26034);
e.setAttribute(cljs.core.name.call(null,k_26035),cljs.core.get.call(null,attrs,k_26035));

var G__26036 = seq__26023_26031;
var G__26037 = chunk__26024_26032;
var G__26038 = count__26025_26033;
var G__26039 = (i__26026_26034 + (1));
seq__26023_26031 = G__26036;
chunk__26024_26032 = G__26037;
count__26025_26033 = G__26038;
i__26026_26034 = G__26039;
continue;
} else {
var temp__4126__auto___26040 = cljs.core.seq.call(null,seq__26023_26031);
if(temp__4126__auto___26040){
var seq__26023_26041__$1 = temp__4126__auto___26040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26023_26041__$1)){
var c__18898__auto___26042 = cljs.core.chunk_first.call(null,seq__26023_26041__$1);
var G__26043 = cljs.core.chunk_rest.call(null,seq__26023_26041__$1);
var G__26044 = c__18898__auto___26042;
var G__26045 = cljs.core.count.call(null,c__18898__auto___26042);
var G__26046 = (0);
seq__26023_26031 = G__26043;
chunk__26024_26032 = G__26044;
count__26025_26033 = G__26045;
i__26026_26034 = G__26046;
continue;
} else {
var k_26047 = cljs.core.first.call(null,seq__26023_26041__$1);
e.setAttribute(cljs.core.name.call(null,k_26047),cljs.core.get.call(null,attrs,k_26047));

var G__26048 = cljs.core.next.call(null,seq__26023_26041__$1);
var G__26049 = null;
var G__26050 = (0);
var G__26051 = (0);
seq__26023_26031 = G__26048;
chunk__26024_26032 = G__26049;
count__26025_26033 = G__26050;
i__26026_26034 = G__26051;
continue;
}
} else {
}
}
break;
}

var seq__26027_26052 = cljs.core.seq.call(null,children);
var chunk__26028_26053 = null;
var count__26029_26054 = (0);
var i__26030_26055 = (0);
while(true){
if((i__26030_26055 < count__26029_26054)){
var ch_26056 = cljs.core._nth.call(null,chunk__26028_26053,i__26030_26055);
e.appendChild(ch_26056);

var G__26057 = seq__26027_26052;
var G__26058 = chunk__26028_26053;
var G__26059 = count__26029_26054;
var G__26060 = (i__26030_26055 + (1));
seq__26027_26052 = G__26057;
chunk__26028_26053 = G__26058;
count__26029_26054 = G__26059;
i__26030_26055 = G__26060;
continue;
} else {
var temp__4126__auto___26061 = cljs.core.seq.call(null,seq__26027_26052);
if(temp__4126__auto___26061){
var seq__26027_26062__$1 = temp__4126__auto___26061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26027_26062__$1)){
var c__18898__auto___26063 = cljs.core.chunk_first.call(null,seq__26027_26062__$1);
var G__26064 = cljs.core.chunk_rest.call(null,seq__26027_26062__$1);
var G__26065 = c__18898__auto___26063;
var G__26066 = cljs.core.count.call(null,c__18898__auto___26063);
var G__26067 = (0);
seq__26027_26052 = G__26064;
chunk__26028_26053 = G__26065;
count__26029_26054 = G__26066;
i__26030_26055 = G__26067;
continue;
} else {
var ch_26068 = cljs.core.first.call(null,seq__26027_26062__$1);
e.appendChild(ch_26068);

var G__26069 = cljs.core.next.call(null,seq__26027_26062__$1);
var G__26070 = null;
var G__26071 = (0);
var G__26072 = (0);
seq__26027_26052 = G__26069;
chunk__26028_26053 = G__26070;
count__26029_26054 = G__26071;
i__26030_26055 = G__26072;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26020){
var G__26021 = cljs.core.first.call(null,seq26020);
var seq26020__$1 = cljs.core.next.call(null,seq26020);
var G__26022 = cljs.core.first.call(null,seq26020__$1);
var seq26020__$2 = cljs.core.next.call(null,seq26020__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26021,G__26022,seq26020__$2);
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
var el_26073 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26073.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26073.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_26073.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26073);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26074,st_map){
var map__26078 = p__26074;
var map__26078__$1 = ((cljs.core.seq_QMARK_.call(null,map__26078))?cljs.core.apply.call(null,cljs.core.hash_map,map__26078):map__26078);
var container_el = cljs.core.get.call(null,map__26078__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26078,map__26078__$1,container_el){
return (function (p__26079){
var vec__26080 = p__26079;
var k = cljs.core.nth.call(null,vec__26080,(0),null);
var v = cljs.core.nth.call(null,vec__26080,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26078,map__26078__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26081,dom_str){
var map__26083 = p__26081;
var map__26083__$1 = ((cljs.core.seq_QMARK_.call(null,map__26083))?cljs.core.apply.call(null,cljs.core.hash_map,map__26083):map__26083);
var c = map__26083__$1;
var content_area_el = cljs.core.get.call(null,map__26083__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26084){
var map__26086 = p__26084;
var map__26086__$1 = ((cljs.core.seq_QMARK_.call(null,map__26086))?cljs.core.apply.call(null,cljs.core.hash_map,map__26086):map__26086);
var content_area_el = cljs.core.get.call(null,map__26086__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto__){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto__){
return (function (state_26128){
var state_val_26129 = (state_26128[(1)]);
if((state_val_26129 === (2))){
var inst_26113 = (state_26128[(7)]);
var inst_26122 = (state_26128[(2)]);
var inst_26123 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26124 = ["auto"];
var inst_26125 = cljs.core.PersistentHashMap.fromArrays(inst_26123,inst_26124);
var inst_26126 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26113,inst_26125);
var state_26128__$1 = (function (){var statearr_26130 = state_26128;
(statearr_26130[(8)] = inst_26122);

return statearr_26130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26128__$1,inst_26126);
} else {
if((state_val_26129 === (1))){
var inst_26113 = (state_26128[(7)]);
var inst_26113__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26114 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26115 = ["10px","10px","100%","68px","1.0"];
var inst_26116 = cljs.core.PersistentHashMap.fromArrays(inst_26114,inst_26115);
var inst_26117 = cljs.core.merge.call(null,inst_26116,style);
var inst_26118 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26113__$1,inst_26117);
var inst_26119 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26113__$1,msg);
var inst_26120 = cljs.core.async.timeout.call(null,(300));
var state_26128__$1 = (function (){var statearr_26131 = state_26128;
(statearr_26131[(9)] = inst_26118);

(statearr_26131[(7)] = inst_26113__$1);

(statearr_26131[(10)] = inst_26119);

return statearr_26131;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26128__$1,(2),inst_26120);
} else {
return null;
}
}
});})(c__21665__auto__))
;
return ((function (switch__21603__auto__,c__21665__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21604__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21604__auto____0 = (function (){
var statearr_26135 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26135[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21604__auto__);

(statearr_26135[(1)] = (1));

return statearr_26135;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21604__auto____1 = (function (state_26128){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_26128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e26136){if((e26136 instanceof Object)){
var ex__21607__auto__ = e26136;
var statearr_26137_26139 = state_26128;
(statearr_26137_26139[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26140 = state_26128;
state_26128 = G__26140;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21604__auto__ = function(state_26128){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21604__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21604__auto____1.call(this,state_26128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21604__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21604__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto__))
})();
var state__21667__auto__ = (function (){var statearr_26138 = f__21666__auto__.call(null);
(statearr_26138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto__);

return statearr_26138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto__))
);

return c__21665__auto__;
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
var vec__26142 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__26142,(0),null);
var ln = cljs.core.nth.call(null,vec__26142,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26145 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26145,(0),null);
var file_line = cljs.core.nth.call(null,vec__26145,(1),null);
var file_column = cljs.core.nth.call(null,vec__26145,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26145,file_name,file_line,file_column){
return (function (p1__26143_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__26143_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__26145,file_name,file_line,file_column))
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
var map__26147 = figwheel.client.heads_up.ensure_container.call(null);
var map__26147__$1 = ((cljs.core.seq_QMARK_.call(null,map__26147))?cljs.core.apply.call(null,cljs.core.hash_map,map__26147):map__26147);
var content_area_el = cljs.core.get.call(null,map__26147__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto__){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto__){
return (function (state_26194){
var state_val_26195 = (state_26194[(1)]);
if((state_val_26195 === (3))){
var inst_26177 = (state_26194[(7)]);
var inst_26191 = (state_26194[(2)]);
var inst_26192 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26177,"");
var state_26194__$1 = (function (){var statearr_26196 = state_26194;
(statearr_26196[(8)] = inst_26191);

return statearr_26196;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26194__$1,inst_26192);
} else {
if((state_val_26195 === (2))){
var inst_26177 = (state_26194[(7)]);
var inst_26184 = (state_26194[(2)]);
var inst_26185 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26186 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26187 = cljs.core.PersistentHashMap.fromArrays(inst_26185,inst_26186);
var inst_26188 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26177,inst_26187);
var inst_26189 = cljs.core.async.timeout.call(null,(200));
var state_26194__$1 = (function (){var statearr_26197 = state_26194;
(statearr_26197[(9)] = inst_26184);

(statearr_26197[(10)] = inst_26188);

return statearr_26197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26194__$1,(3),inst_26189);
} else {
if((state_val_26195 === (1))){
var inst_26177 = (state_26194[(7)]);
var inst_26177__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26178 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26179 = ["0.0"];
var inst_26180 = cljs.core.PersistentHashMap.fromArrays(inst_26178,inst_26179);
var inst_26181 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26177__$1,inst_26180);
var inst_26182 = cljs.core.async.timeout.call(null,(300));
var state_26194__$1 = (function (){var statearr_26198 = state_26194;
(statearr_26198[(7)] = inst_26177__$1);

(statearr_26198[(11)] = inst_26181);

return statearr_26198;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26194__$1,(2),inst_26182);
} else {
return null;
}
}
}
});})(c__21665__auto__))
;
return ((function (switch__21603__auto__,c__21665__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21604__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21604__auto____0 = (function (){
var statearr_26202 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26202[(0)] = figwheel$client$heads_up$clear_$_state_machine__21604__auto__);

(statearr_26202[(1)] = (1));

return statearr_26202;
});
var figwheel$client$heads_up$clear_$_state_machine__21604__auto____1 = (function (state_26194){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_26194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e26203){if((e26203 instanceof Object)){
var ex__21607__auto__ = e26203;
var statearr_26204_26206 = state_26194;
(statearr_26204_26206[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26207 = state_26194;
state_26194 = G__26207;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21604__auto__ = function(state_26194){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21604__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21604__auto____1.call(this,state_26194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21604__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21604__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto__))
})();
var state__21667__auto__ = (function (){var statearr_26205 = f__21666__auto__.call(null);
(statearr_26205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto__);

return statearr_26205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto__))
);

return c__21665__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto__){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto__){
return (function (state_26239){
var state_val_26240 = (state_26239[(1)]);
if((state_val_26240 === (4))){
var inst_26237 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26239__$1,inst_26237);
} else {
if((state_val_26240 === (3))){
var inst_26234 = (state_26239[(2)]);
var inst_26235 = figwheel.client.heads_up.clear.call(null);
var state_26239__$1 = (function (){var statearr_26241 = state_26239;
(statearr_26241[(7)] = inst_26234);

return statearr_26241;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26239__$1,(4),inst_26235);
} else {
if((state_val_26240 === (2))){
var inst_26231 = (state_26239[(2)]);
var inst_26232 = cljs.core.async.timeout.call(null,(400));
var state_26239__$1 = (function (){var statearr_26242 = state_26239;
(statearr_26242[(8)] = inst_26231);

return statearr_26242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26239__$1,(3),inst_26232);
} else {
if((state_val_26240 === (1))){
var inst_26229 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26239__$1 = state_26239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26239__$1,(2),inst_26229);
} else {
return null;
}
}
}
}
});})(c__21665__auto__))
;
return ((function (switch__21603__auto__,c__21665__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21604__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21604__auto____0 = (function (){
var statearr_26246 = [null,null,null,null,null,null,null,null,null];
(statearr_26246[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21604__auto__);

(statearr_26246[(1)] = (1));

return statearr_26246;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21604__auto____1 = (function (state_26239){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_26239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e26247){if((e26247 instanceof Object)){
var ex__21607__auto__ = e26247;
var statearr_26248_26250 = state_26239;
(statearr_26248_26250[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26251 = state_26239;
state_26239 = G__26251;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21604__auto__ = function(state_26239){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21604__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21604__auto____1.call(this,state_26239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21604__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21604__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto__))
})();
var state__21667__auto__ = (function (){var statearr_26249 = f__21666__auto__.call(null);
(statearr_26249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto__);

return statearr_26249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto__))
);

return c__21665__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map