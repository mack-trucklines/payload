// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('payload.core');
goog.require('cljs.core');
goog.require('reagent.core');
payload.core.trigger = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
payload.core.pro = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
payload.core.date = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
payload.core.trk = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
payload.core.origin = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
payload.core.destination = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
payload.core.revenue = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.total_revenue = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.advances = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.expenses = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.hours = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.total_hours = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.fuel = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.total_fuel = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.per_dm = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.total_per_dm = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.stops = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.total_stops = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.dh = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.total_dh = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.loaded = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.total_loaded = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.mi = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.total_mi = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
payload.core.submitted = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
payload.core.counter = (function (){var G__10259 = (2);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10259) : cljs.core.atom.call(null,G__10259));
})();
payload.core.add_input = (function payload$core$add_input(input){
var id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(payload.core.counter,cljs.core.inc);
var input_with_id = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(input,cljs.core.constant$keyword$id,id);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(payload.core.submitted,cljs.core.assoc,id,input_with_id);
});
payload.core.input = (function payload$core$input(type,at,int_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$border_DASH_less,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,type,cljs.core.constant$keyword$value,(function (){var G__10266 = at;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10266) : cljs.core.deref.call(null,G__10266));
})(),cljs.core.constant$keyword$on_DASH_change,(function (p1__10260_SHARP_){
if(cljs.core.truth_(int_QMARK_)){
var G__10267 = at;
var G__10268 = (p1__10260_SHARP_.target.value | (0));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10267,G__10268) : cljs.core.reset_BANG_.call(null,G__10267,G__10268));
} else {
var G__10269 = at;
var G__10270 = p1__10260_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10269,G__10270) : cljs.core.reset_BANG_.call(null,G__10269,G__10270));
}
})], null)], null);
});
payload.core.header = (function payload$core$header(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tbody,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,"Settlement #:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$border_DASH_less,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,"text"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$colSpan,(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,"Gross Pay:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,(function (){var G__10276 = payload.core.total_revenue;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10276) : cljs.core.deref.call(null,G__10276));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$colSpan,(5)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,"Driver's name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$border_DASH_less,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,"text"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$colSpan,(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,"- Advances:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.advances,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$colSpan,(5)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,"Pay Type:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$border_DASH_less,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,"text"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$colSpan,(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,"+ Expenses:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.expenses,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$colSpan,(5)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,"Pay Rate:"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$border_DASH_less,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,"text"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,(function (){var G__10277 = payload.core.trk;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10277) : cljs.core.deref.call(null,G__10277));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$colSpan,(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,"Net Pay:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,((((function (){var G__10278 = payload.core.total_revenue;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10278) : cljs.core.deref.call(null,G__10278));
})() * 0.82) - (function (){var G__10279 = payload.core.advances;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10279) : cljs.core.deref.call(null,G__10279));
})()) + (function (){var G__10280 = payload.core.expenses;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10280) : cljs.core.deref.call(null,G__10280));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$colSpan,(4)], null)], null)], null)], null)], null);
});
payload.core.heading_row = (function payload$core$heading_row(){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$th,"Pro #"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$th,"Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$th,"Trk/Trl"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$th,"Origin"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$th,"Destination"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$th,"Revenue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$th,"Fuel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$th,"Stops"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$th,"DH"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$th,"Hours"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$th,"Loaded"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$th,"Tot Mi"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$th,"Per Dm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$th,"Total Pay"], null)], null);
});
payload.core.previous_inputs = (function payload$core$previous_inputs(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tbody,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tr,(function (){var G__10297 = payload.core.trigger;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10297) : cljs.core.deref.call(null,G__10297));
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5087__auto__ = (function payload$core$previous_inputs_$_iter__10298(s__10299){
return (new cljs.core.LazySeq(null,(function (){
var s__10299__$1 = s__10299;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__10299__$1);
if(temp__4126__auto__){
var s__10299__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10299__$2)){
var c__5085__auto__ = cljs.core.chunk_first(s__10299__$2);
var size__5086__auto__ = cljs.core.count(c__5085__auto__);
var b__10301 = cljs.core.chunk_buffer(size__5086__auto__);
if((function (){var i__10300 = (0);
while(true){
if((i__10300 < size__5086__auto__)){
var vec__10308 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5085__auto__,i__10300);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10308,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10308,(1),null);
if(((function (){var G__10309 = payload.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10309) : cljs.core.deref.call(null,G__10309));
})() > (0))){
cljs.core.chunk_append(b__10301,cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$pro.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$date.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$trk.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$origin.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$destination.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$revenue.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$fuel.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$stops.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$dh.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$hours.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$loaded.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$mi.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$per_DASH_dm.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,(cljs.core.constant$keyword$revenue.cljs$core$IFn$_invoke$arity$1(value) * 0.92)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,cljs.core.constant$keyword$id.cljs$core$IFn$_invoke$arity$1(value)], null)));

var G__10313 = (i__10300 + (1));
i__10300 = G__10313;
continue;
} else {
var G__10314 = (i__10300 + (1));
i__10300 = G__10314;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10301),payload$core$previous_inputs_$_iter__10298(cljs.core.chunk_rest(s__10299__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10301),null);
}
} else {
var vec__10310 = cljs.core.first(s__10299__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10310,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10310,(1),null);
if(((function (){var G__10311 = payload.core.counter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10311) : cljs.core.deref.call(null,G__10311));
})() > (0))){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$pro.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$date.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$trk.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$origin.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$destination.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$revenue.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$fuel.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$stops.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$dh.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$hours.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$loaded.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$mi.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,cljs.core.constant$keyword$per_DASH_dm.cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,(cljs.core.constant$keyword$revenue.cljs$core$IFn$_invoke$arity$1(value) * 0.92)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,cljs.core.constant$keyword$id.cljs$core$IFn$_invoke$arity$1(value)], null)),payload$core$previous_inputs_$_iter__10298(cljs.core.rest(s__10299__$2)));
} else {
var G__10315 = cljs.core.rest(s__10299__$2);
s__10299__$1 = G__10315;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5087__auto__((function (){var G__10312 = payload.core.submitted;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10312) : cljs.core.deref.call(null,G__10312));
})());
})())], null);
});
payload.core.input_row = (function payload$core$input_row(){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"type",payload.core.pro,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"date",payload.core.date,false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"number",payload.core.trk,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.origin,false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.destination,false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.revenue,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.fuel,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.stops,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.dh,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.hours,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.loaded,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.mi,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.per_dm,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,((function (){var G__10317 = payload.core.revenue;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10317) : cljs.core.deref.call(null,G__10317));
})() * 0.92)], null)], null);
});
payload.core.total_row = (function payload$core$total_row(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$colSpan,(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,((function (){var G__10334 = payload.core.total_revenue;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10334) : cljs.core.deref.call(null,G__10334));
})() + (function (){var G__10335 = payload.core.revenue;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10335) : cljs.core.deref.call(null,G__10335));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,((function (){var G__10336 = payload.core.total_stops;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10336) : cljs.core.deref.call(null,G__10336));
})() + (function (){var G__10337 = payload.core.stops;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10337) : cljs.core.deref.call(null,G__10337));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,((function (){var G__10338 = payload.core.total_dh;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10338) : cljs.core.deref.call(null,G__10338));
})() + (function (){var G__10339 = payload.core.dh;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10339) : cljs.core.deref.call(null,G__10339));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,((function (){var G__10340 = payload.core.total_hours;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10340) : cljs.core.deref.call(null,G__10340));
})() + (function (){var G__10341 = payload.core.hours;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10341) : cljs.core.deref.call(null,G__10341));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,((function (){var G__10342 = payload.core.total_loaded;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10342) : cljs.core.deref.call(null,G__10342));
})() + (function (){var G__10343 = payload.core.loaded;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10343) : cljs.core.deref.call(null,G__10343));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,((function (){var G__10344 = payload.core.total_mi;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10344) : cljs.core.deref.call(null,G__10344));
})() + (function (){var G__10345 = payload.core.mi;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10345) : cljs.core.deref.call(null,G__10345));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,((function (){var G__10346 = payload.core.total_per_dm;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10346) : cljs.core.deref.call(null,G__10346));
})() + (function (){var G__10347 = payload.core.per_dm;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10347) : cljs.core.deref.call(null,G__10347));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$td,(0.92 * ((function (){var G__10348 = payload.core.total_revenue;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10348) : cljs.core.deref.call(null,G__10348));
})() + (function (){var G__10349 = payload.core.revenue;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10349) : cljs.core.deref.call(null,G__10349));
})()))], null)], null);
});
payload.core.handle_click = (function payload$core$handle_click(input_attrs){
var G__10409_10468 = payload.core.total_revenue;
var G__10410_10469 = ((function (){var G__10411 = payload.core.total_revenue;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10411) : cljs.core.deref.call(null,G__10411));
})() + (function (){var G__10412 = payload.core.revenue;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10412) : cljs.core.deref.call(null,G__10412));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10409_10468,G__10410_10469) : cljs.core.reset_BANG_.call(null,G__10409_10468,G__10410_10469));

var G__10413_10470 = payload.core.total_stops;
var G__10414_10471 = ((function (){var G__10415 = payload.core.total_stops;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10415) : cljs.core.deref.call(null,G__10415));
})() + (function (){var G__10416 = payload.core.stops;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10416) : cljs.core.deref.call(null,G__10416));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10413_10470,G__10414_10471) : cljs.core.reset_BANG_.call(null,G__10413_10470,G__10414_10471));

var G__10417_10472 = payload.core.total_dh;
var G__10418_10473 = ((function (){var G__10419 = payload.core.total_dh;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10419) : cljs.core.deref.call(null,G__10419));
})() + (function (){var G__10420 = payload.core.dh;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10420) : cljs.core.deref.call(null,G__10420));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10417_10472,G__10418_10473) : cljs.core.reset_BANG_.call(null,G__10417_10472,G__10418_10473));

var G__10421_10474 = payload.core.total_hours;
var G__10422_10475 = ((function (){var G__10423 = payload.core.total_hours;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10423) : cljs.core.deref.call(null,G__10423));
})() + (function (){var G__10424 = payload.core.hours;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10424) : cljs.core.deref.call(null,G__10424));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10421_10474,G__10422_10475) : cljs.core.reset_BANG_.call(null,G__10421_10474,G__10422_10475));

var G__10425_10476 = payload.core.total_fuel;
var G__10426_10477 = ((function (){var G__10427 = payload.core.total_fuel;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10427) : cljs.core.deref.call(null,G__10427));
})() + (function (){var G__10428 = payload.core.fuel;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10428) : cljs.core.deref.call(null,G__10428));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10425_10476,G__10426_10477) : cljs.core.reset_BANG_.call(null,G__10425_10476,G__10426_10477));

var G__10429_10478 = payload.core.total_mi;
var G__10430_10479 = ((function (){var G__10431 = payload.core.total_mi;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10431) : cljs.core.deref.call(null,G__10431));
})() + (function (){var G__10432 = payload.core.mi;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10432) : cljs.core.deref.call(null,G__10432));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10429_10478,G__10430_10479) : cljs.core.reset_BANG_.call(null,G__10429_10478,G__10430_10479));

var G__10433_10480 = payload.core.total_loaded;
var G__10434_10481 = ((function (){var G__10435 = payload.core.total_loaded;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10435) : cljs.core.deref.call(null,G__10435));
})() + (function (){var G__10436 = payload.core.loaded;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10436) : cljs.core.deref.call(null,G__10436));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10433_10480,G__10434_10481) : cljs.core.reset_BANG_.call(null,G__10433_10480,G__10434_10481));

var G__10437_10482 = payload.core.total_per_dm;
var G__10438_10483 = ((function (){var G__10439 = payload.core.total_per_dm;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10439) : cljs.core.deref.call(null,G__10439));
})() + (function (){var G__10440 = payload.core.per_dm;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10440) : cljs.core.deref.call(null,G__10440));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10437_10482,G__10438_10483) : cljs.core.reset_BANG_.call(null,G__10437_10482,G__10438_10483));

var G__10441_10484 = payload.core.pro;
var G__10442_10485 = "";
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10441_10484,G__10442_10485) : cljs.core.reset_BANG_.call(null,G__10441_10484,G__10442_10485));

var G__10443_10486 = payload.core.trk;
var G__10444_10487 = "";
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10443_10486,G__10444_10487) : cljs.core.reset_BANG_.call(null,G__10443_10486,G__10444_10487));

var G__10445_10488 = payload.core.origin;
var G__10446_10489 = "";
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10445_10488,G__10446_10489) : cljs.core.reset_BANG_.call(null,G__10445_10488,G__10446_10489));

var G__10447_10490 = payload.core.destination;
var G__10448_10491 = "";
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10447_10490,G__10448_10491) : cljs.core.reset_BANG_.call(null,G__10447_10490,G__10448_10491));

var G__10449_10492 = payload.core.revenue;
var G__10450_10493 = "";
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10449_10492,G__10450_10493) : cljs.core.reset_BANG_.call(null,G__10449_10492,G__10450_10493));

var G__10451_10494 = payload.core.stops;
var G__10452_10495 = "";
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10451_10494,G__10452_10495) : cljs.core.reset_BANG_.call(null,G__10451_10494,G__10452_10495));

var G__10453_10496 = payload.core.dh;
var G__10454_10497 = "";
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10453_10496,G__10454_10497) : cljs.core.reset_BANG_.call(null,G__10453_10496,G__10454_10497));

var G__10455_10498 = payload.core.hours;
var G__10456_10499 = "";
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10455_10498,G__10456_10499) : cljs.core.reset_BANG_.call(null,G__10455_10498,G__10456_10499));

var G__10457_10500 = payload.core.fuel;
var G__10458_10501 = "";
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10457_10500,G__10458_10501) : cljs.core.reset_BANG_.call(null,G__10457_10500,G__10458_10501));

var G__10459_10502 = payload.core.mi;
var G__10460_10503 = "";
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10459_10502,G__10460_10503) : cljs.core.reset_BANG_.call(null,G__10459_10502,G__10460_10503));

var G__10461_10504 = payload.core.loaded;
var G__10462_10505 = "";
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10461_10504,G__10462_10505) : cljs.core.reset_BANG_.call(null,G__10461_10504,G__10462_10505));

var G__10463_10506 = payload.core.per_dm;
var G__10464_10507 = "";
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10463_10506,G__10464_10507) : cljs.core.reset_BANG_.call(null,G__10463_10506,G__10464_10507));

payload.core.add_input(input_attrs);

var G__10465 = payload.core.trigger;
var G__10466 = cljs.core.not((function (){var G__10467 = payload.core.trigger;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10467) : cljs.core.deref.call(null,G__10467));
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10465,G__10466) : cljs.core.reset_BANG_.call(null,G__10465,G__10466));
});
payload.core.button = (function payload$core$button(){
var pro_val = (function (){var G__10522 = payload.core.pro;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10522) : cljs.core.deref.call(null,G__10522));
})();
var date_val = (function (){var G__10523 = payload.core.date;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10523) : cljs.core.deref.call(null,G__10523));
})();
var trk_val = (function (){var G__10524 = payload.core.trk;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10524) : cljs.core.deref.call(null,G__10524));
})();
var origin_val = (function (){var G__10525 = payload.core.origin;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10525) : cljs.core.deref.call(null,G__10525));
})();
var destination_val = (function (){var G__10526 = payload.core.destination;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10526) : cljs.core.deref.call(null,G__10526));
})();
var revenue_val = (function (){var G__10527 = payload.core.revenue;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10527) : cljs.core.deref.call(null,G__10527));
})();
var stops_val = (function (){var G__10528 = payload.core.stops;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10528) : cljs.core.deref.call(null,G__10528));
})();
var fuel_val = (function (){var G__10529 = payload.core.fuel;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10529) : cljs.core.deref.call(null,G__10529));
})();
var dh_val = (function (){var G__10530 = payload.core.dh;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10530) : cljs.core.deref.call(null,G__10530));
})();
var hours_val = (function (){var G__10531 = payload.core.hours;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10531) : cljs.core.deref.call(null,G__10531));
})();
var loaded_val = (function (){var G__10532 = payload.core.loaded;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10532) : cljs.core.deref.call(null,G__10532));
})();
var mi_val = (function (){var G__10533 = payload.core.mi;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10533) : cljs.core.deref.call(null,G__10533));
})();
var per_dm_val = (function (){var G__10534 = payload.core.per_dm;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10534) : cljs.core.deref.call(null,G__10534));
})();
var mi_val__$1 = (function (){var G__10535 = payload.core.mi;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10535) : cljs.core.deref.call(null,G__10535));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,((function (pro_val,date_val,trk_val,origin_val,destination_val,revenue_val,stops_val,fuel_val,dh_val,hours_val,loaded_val,mi_val,per_dm_val,mi_val__$1){
return (function (){
return payload.core.handle_click(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$date,cljs.core.constant$keyword$dh,cljs.core.constant$keyword$stops,cljs.core.constant$keyword$revenue,cljs.core.constant$keyword$loaded,cljs.core.constant$keyword$fuel,cljs.core.constant$keyword$mi,cljs.core.constant$keyword$pro,cljs.core.constant$keyword$per_DASH_dm,cljs.core.constant$keyword$hours,cljs.core.constant$keyword$origin,cljs.core.constant$keyword$trk,cljs.core.constant$keyword$destination],[date_val,dh_val,stops_val,revenue_val,loaded_val,fuel_val,mi_val__$1,pro_val,per_dm_val,hours_val,origin_val,trk_val,destination_val]));
});})(pro_val,date_val,trk_val,origin_val,destination_val,revenue_val,stops_val,fuel_val,dh_val,hours_val,loaded_val,mi_val,per_dm_val,mi_val__$1))
], null),"Add row"], null);
});
payload.core.full = (function payload$core$full(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$table,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.heading_row], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.previous_inputs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input_row], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.total_row], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.button], null)], null);
});
});
/**
 * Mounts the necessary reagent component to document element with id 'id'
 */
payload.core.start = (function payload$core$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.full], null),document.getElementById("app"));
});
payload.core.start();
