// Compiled by ClojureScript 0.0-3211 {}
goog.provide('payload.core');
goog.require('cljs.core');
goog.require('reagent.core');
payload.core.trigger = reagent.core.atom.call(null,true);
payload.core.pro = reagent.core.atom.call(null,"");
payload.core.date = reagent.core.atom.call(null,"");
payload.core.trk = reagent.core.atom.call(null,"");
payload.core.origin = reagent.core.atom.call(null,"");
payload.core.destination = reagent.core.atom.call(null,"");
payload.core.revenue = reagent.core.atom.call(null,(0));
payload.core.total_revenue = reagent.core.atom.call(null,(0));
payload.core.advances = reagent.core.atom.call(null,(0));
payload.core.expenses = reagent.core.atom.call(null,(0));
payload.core.hours = reagent.core.atom.call(null,(0));
payload.core.total_hours = reagent.core.atom.call(null,(0));
payload.core.fuel = reagent.core.atom.call(null,(0));
payload.core.total_fuel = reagent.core.atom.call(null,(0));
payload.core.per_dm = reagent.core.atom.call(null,(0));
payload.core.total_per_dm = reagent.core.atom.call(null,(0));
payload.core.stops = reagent.core.atom.call(null,(0));
payload.core.total_stops = reagent.core.atom.call(null,(0));
payload.core.dh = reagent.core.atom.call(null,(0));
payload.core.total_dh = reagent.core.atom.call(null,(0));
payload.core.loaded = reagent.core.atom.call(null,(0));
payload.core.total_loaded = reagent.core.atom.call(null,(0));
payload.core.mi = reagent.core.atom.call(null,(0));
payload.core.total_mi = reagent.core.atom.call(null,(0));
payload.core.submitted = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
payload.core.counter = cljs.core.atom.call(null,(2));
payload.core.add_input = (function payload$core$add_input(input){
var id = cljs.core.swap_BANG_.call(null,payload.core.counter,cljs.core.inc);
var input_with_id = cljs.core.assoc.call(null,input,new cljs.core.Keyword(null,"id","id",-1388402092),id);
return cljs.core.swap_BANG_.call(null,payload.core.submitted,cljs.core.assoc,id,input_with_id);
});
payload.core.input = (function payload$core$input(type,at,int_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border-less","input.border-less",-702697400),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,at),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20355_SHARP_){
if(cljs.core.truth_(int_QMARK_)){
return cljs.core.reset_BANG_.call(null,at,(p1__20355_SHARP_.target.value | (0)));
} else {
return cljs.core.reset_BANG_.call(null,at,p1__20355_SHARP_.target.value);
}
})], null)], null);
});
payload.core.header = (function payload$core$header(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Settlement #:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border-less","input.border-less",-702697400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Gross Pay:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.deref.call(null,payload.core.total_revenue)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(5)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Driver's name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border-less","input.border-less",-702697400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"- Advances:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.advances,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(5)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Pay Type:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border-less","input.border-less",-702697400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"+ Expenses:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.expenses,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(5)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Pay Rate:"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border-less","input.border-less",-702697400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.deref.call(null,payload.core.trk)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Net Pay:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cljs.core.deref.call(null,payload.core.total_revenue) * 0.82) - cljs.core.deref.call(null,payload.core.advances)) + cljs.core.deref.call(null,payload.core.expenses))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(4)], null)], null)], null)], null)], null);
});
payload.core.heading_row = (function payload$core$heading_row(){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Pro #"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Trk/Trl"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Origin"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Destination"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Revenue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Fuel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Stops"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"DH"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Hours"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Loaded"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Tot Mi"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Per Dm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Total Pay"], null)], null);
});
payload.core.previous_inputs = (function payload$core$previous_inputs(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.deref.call(null,payload.core.trigger)], null),cljs.core.doall.call(null,(function (){var iter__18867__auto__ = (function payload$core$previous_inputs_$_iter__20364(s__20365){
return (new cljs.core.LazySeq(null,(function (){
var s__20365__$1 = s__20365;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20365__$1);
if(temp__4126__auto__){
var s__20365__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20365__$2)){
var c__18865__auto__ = cljs.core.chunk_first.call(null,s__20365__$2);
var size__18866__auto__ = cljs.core.count.call(null,c__18865__auto__);
var b__20367 = cljs.core.chunk_buffer.call(null,size__18866__auto__);
if((function (){var i__20366 = (0);
while(true){
if((i__20366 < size__18866__auto__)){
var vec__20370 = cljs.core._nth.call(null,c__18865__auto__,i__20366);
var key = cljs.core.nth.call(null,vec__20370,(0),null);
var value = cljs.core.nth.call(null,vec__20370,(1),null);
if((cljs.core.deref.call(null,payload.core.counter) > (0))){
cljs.core.chunk_append.call(null,b__20367,cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"pro","pro",-1081599089).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"trk","trk",-1676835364).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"revenue","revenue",943993380).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"fuel","fuel",10405485).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"dh","dh",528137731).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"loaded","loaded",-1246482293).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"mi","mi",-387784306).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"per-dm","per-dm",1800334995).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(new cljs.core.Keyword(null,"revenue","revenue",943993380).cljs$core$IFn$_invoke$arity$1(value) * 0.92)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(value)], null)));

var G__20372 = (i__20366 + (1));
i__20366 = G__20372;
continue;
} else {
var G__20373 = (i__20366 + (1));
i__20366 = G__20373;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20367),payload$core$previous_inputs_$_iter__20364.call(null,cljs.core.chunk_rest.call(null,s__20365__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20367),null);
}
} else {
var vec__20371 = cljs.core.first.call(null,s__20365__$2);
var key = cljs.core.nth.call(null,vec__20371,(0),null);
var value = cljs.core.nth.call(null,vec__20371,(1),null);
if((cljs.core.deref.call(null,payload.core.counter) > (0))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"pro","pro",-1081599089).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"trk","trk",-1676835364).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"revenue","revenue",943993380).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"fuel","fuel",10405485).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"dh","dh",528137731).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"loaded","loaded",-1246482293).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"mi","mi",-387784306).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"per-dm","per-dm",1800334995).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(new cljs.core.Keyword(null,"revenue","revenue",943993380).cljs$core$IFn$_invoke$arity$1(value) * 0.92)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(value)], null)),payload$core$previous_inputs_$_iter__20364.call(null,cljs.core.rest.call(null,s__20365__$2)));
} else {
var G__20374 = cljs.core.rest.call(null,s__20365__$2);
s__20365__$1 = G__20374;
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
return iter__18867__auto__.call(null,cljs.core.deref.call(null,payload.core.submitted));
})())], null);
});
payload.core.input_row = (function payload$core$input_row(){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"type",payload.core.pro,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"date",payload.core.date,false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"number",payload.core.trk,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.origin,false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.destination,false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.revenue,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.fuel,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.stops,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.dh,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.hours,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.loaded,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.mi,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input,"text",payload.core.per_dm,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.deref.call(null,payload.core.revenue) * 0.92)], null)], null);
});
payload.core.total_row = (function payload$core$total_row(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.deref.call(null,payload.core.total_revenue) + cljs.core.deref.call(null,payload.core.revenue))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.deref.call(null,payload.core.total_stops) + cljs.core.deref.call(null,payload.core.stops))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.deref.call(null,payload.core.total_dh) + cljs.core.deref.call(null,payload.core.dh))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.deref.call(null,payload.core.total_hours) + cljs.core.deref.call(null,payload.core.hours))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.deref.call(null,payload.core.total_loaded) + cljs.core.deref.call(null,payload.core.loaded))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.deref.call(null,payload.core.total_mi) + cljs.core.deref.call(null,payload.core.mi))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.deref.call(null,payload.core.total_per_dm) + cljs.core.deref.call(null,payload.core.per_dm))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(0.92 * (cljs.core.deref.call(null,payload.core.total_revenue) + cljs.core.deref.call(null,payload.core.revenue)))], null)], null);
});
payload.core.handle_click = (function payload$core$handle_click(input_attrs){
cljs.core.reset_BANG_.call(null,payload.core.total_revenue,(cljs.core.deref.call(null,payload.core.total_revenue) + cljs.core.deref.call(null,payload.core.revenue)));

cljs.core.reset_BANG_.call(null,payload.core.total_stops,(cljs.core.deref.call(null,payload.core.total_stops) + cljs.core.deref.call(null,payload.core.stops)));

cljs.core.reset_BANG_.call(null,payload.core.total_dh,(cljs.core.deref.call(null,payload.core.total_dh) + cljs.core.deref.call(null,payload.core.dh)));

cljs.core.reset_BANG_.call(null,payload.core.total_hours,(cljs.core.deref.call(null,payload.core.total_hours) + cljs.core.deref.call(null,payload.core.hours)));

cljs.core.reset_BANG_.call(null,payload.core.total_fuel,(cljs.core.deref.call(null,payload.core.total_fuel) + cljs.core.deref.call(null,payload.core.fuel)));

cljs.core.reset_BANG_.call(null,payload.core.total_mi,(cljs.core.deref.call(null,payload.core.total_mi) + cljs.core.deref.call(null,payload.core.mi)));

cljs.core.reset_BANG_.call(null,payload.core.total_loaded,(cljs.core.deref.call(null,payload.core.total_loaded) + cljs.core.deref.call(null,payload.core.loaded)));

cljs.core.reset_BANG_.call(null,payload.core.total_per_dm,(cljs.core.deref.call(null,payload.core.total_per_dm) + cljs.core.deref.call(null,payload.core.per_dm)));

cljs.core.reset_BANG_.call(null,payload.core.pro,"");

cljs.core.reset_BANG_.call(null,payload.core.trk,"");

cljs.core.reset_BANG_.call(null,payload.core.origin,"");

cljs.core.reset_BANG_.call(null,payload.core.destination,"");

cljs.core.reset_BANG_.call(null,payload.core.revenue,"");

cljs.core.reset_BANG_.call(null,payload.core.stops,"");

cljs.core.reset_BANG_.call(null,payload.core.dh,"");

cljs.core.reset_BANG_.call(null,payload.core.hours,"");

cljs.core.reset_BANG_.call(null,payload.core.fuel,"");

cljs.core.reset_BANG_.call(null,payload.core.mi,"");

cljs.core.reset_BANG_.call(null,payload.core.loaded,"");

cljs.core.reset_BANG_.call(null,payload.core.per_dm,"");

payload.core.add_input.call(null,input_attrs);

return cljs.core.reset_BANG_.call(null,payload.core.trigger,cljs.core.not.call(null,cljs.core.deref.call(null,payload.core.trigger)));
});
payload.core.button = (function payload$core$button(){
var pro_val = cljs.core.deref.call(null,payload.core.pro);
var date_val = cljs.core.deref.call(null,payload.core.date);
var trk_val = cljs.core.deref.call(null,payload.core.trk);
var origin_val = cljs.core.deref.call(null,payload.core.origin);
var destination_val = cljs.core.deref.call(null,payload.core.destination);
var revenue_val = cljs.core.deref.call(null,payload.core.revenue);
var stops_val = cljs.core.deref.call(null,payload.core.stops);
var fuel_val = cljs.core.deref.call(null,payload.core.fuel);
var dh_val = cljs.core.deref.call(null,payload.core.dh);
var hours_val = cljs.core.deref.call(null,payload.core.hours);
var loaded_val = cljs.core.deref.call(null,payload.core.loaded);
var mi_val = cljs.core.deref.call(null,payload.core.mi);
var per_dm_val = cljs.core.deref.call(null,payload.core.per_dm);
var mi_val__$1 = cljs.core.deref.call(null,payload.core.mi);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pro_val,date_val,trk_val,origin_val,destination_val,revenue_val,stops_val,fuel_val,dh_val,hours_val,loaded_val,mi_val,per_dm_val,mi_val__$1){
return (function (){
return payload.core.handle_click.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"dh","dh",528137731),new cljs.core.Keyword(null,"stops","stops",-1205459005),new cljs.core.Keyword(null,"revenue","revenue",943993380),new cljs.core.Keyword(null,"loaded","loaded",-1246482293),new cljs.core.Keyword(null,"fuel","fuel",10405485),new cljs.core.Keyword(null,"mi","mi",-387784306),new cljs.core.Keyword(null,"pro","pro",-1081599089),new cljs.core.Keyword(null,"per-dm","per-dm",1800334995),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"trk","trk",-1676835364),new cljs.core.Keyword(null,"destination","destination",-253872483)],[date_val,dh_val,stops_val,revenue_val,loaded_val,fuel_val,mi_val__$1,pro_val,per_dm_val,hours_val,origin_val,trk_val,destination_val]));
});})(pro_val,date_val,trk_val,origin_val,destination_val,revenue_val,stops_val,fuel_val,dh_val,hours_val,loaded_val,mi_val,per_dm_val,mi_val__$1))
], null),"Add row"], null);
});
payload.core.full = (function payload$core$full(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.heading_row], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.previous_inputs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.input_row], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.total_row], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.button], null)], null);
});
});
/**
 * Mounts the necessary reagent component to document element with id 'id'
 */
payload.core.start = (function payload$core$start(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload.core.full], null),document.getElementById("app"));
});
payload.core.start.call(null);

//# sourceMappingURL=core.js.map