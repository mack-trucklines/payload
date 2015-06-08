// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26266_26278 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26267_26279 = null;
var count__26268_26280 = (0);
var i__26269_26281 = (0);
while(true){
if((i__26269_26281 < count__26268_26280)){
var f_26282 = cljs.core._nth.call(null,chunk__26267_26279,i__26269_26281);
cljs.core.println.call(null,"  ",f_26282);

var G__26283 = seq__26266_26278;
var G__26284 = chunk__26267_26279;
var G__26285 = count__26268_26280;
var G__26286 = (i__26269_26281 + (1));
seq__26266_26278 = G__26283;
chunk__26267_26279 = G__26284;
count__26268_26280 = G__26285;
i__26269_26281 = G__26286;
continue;
} else {
var temp__4126__auto___26287 = cljs.core.seq.call(null,seq__26266_26278);
if(temp__4126__auto___26287){
var seq__26266_26288__$1 = temp__4126__auto___26287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26266_26288__$1)){
var c__18898__auto___26289 = cljs.core.chunk_first.call(null,seq__26266_26288__$1);
var G__26290 = cljs.core.chunk_rest.call(null,seq__26266_26288__$1);
var G__26291 = c__18898__auto___26289;
var G__26292 = cljs.core.count.call(null,c__18898__auto___26289);
var G__26293 = (0);
seq__26266_26278 = G__26290;
chunk__26267_26279 = G__26291;
count__26268_26280 = G__26292;
i__26269_26281 = G__26293;
continue;
} else {
var f_26294 = cljs.core.first.call(null,seq__26266_26288__$1);
cljs.core.println.call(null,"  ",f_26294);

var G__26295 = cljs.core.next.call(null,seq__26266_26288__$1);
var G__26296 = null;
var G__26297 = (0);
var G__26298 = (0);
seq__26266_26278 = G__26295;
chunk__26267_26279 = G__26296;
count__26268_26280 = G__26297;
i__26269_26281 = G__26298;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18113__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18113__auto__)){
return or__18113__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26270 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26271 = null;
var count__26272 = (0);
var i__26273 = (0);
while(true){
if((i__26273 < count__26272)){
var vec__26274 = cljs.core._nth.call(null,chunk__26271,i__26273);
var name = cljs.core.nth.call(null,vec__26274,(0),null);
var map__26275 = cljs.core.nth.call(null,vec__26274,(1),null);
var map__26275__$1 = ((cljs.core.seq_QMARK_.call(null,map__26275))?cljs.core.apply.call(null,cljs.core.hash_map,map__26275):map__26275);
var arglists = cljs.core.get.call(null,map__26275__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26275__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26299 = seq__26270;
var G__26300 = chunk__26271;
var G__26301 = count__26272;
var G__26302 = (i__26273 + (1));
seq__26270 = G__26299;
chunk__26271 = G__26300;
count__26272 = G__26301;
i__26273 = G__26302;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26270);
if(temp__4126__auto__){
var seq__26270__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26270__$1)){
var c__18898__auto__ = cljs.core.chunk_first.call(null,seq__26270__$1);
var G__26303 = cljs.core.chunk_rest.call(null,seq__26270__$1);
var G__26304 = c__18898__auto__;
var G__26305 = cljs.core.count.call(null,c__18898__auto__);
var G__26306 = (0);
seq__26270 = G__26303;
chunk__26271 = G__26304;
count__26272 = G__26305;
i__26273 = G__26306;
continue;
} else {
var vec__26276 = cljs.core.first.call(null,seq__26270__$1);
var name = cljs.core.nth.call(null,vec__26276,(0),null);
var map__26277 = cljs.core.nth.call(null,vec__26276,(1),null);
var map__26277__$1 = ((cljs.core.seq_QMARK_.call(null,map__26277))?cljs.core.apply.call(null,cljs.core.hash_map,map__26277):map__26277);
var arglists = cljs.core.get.call(null,map__26277__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26277__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26307 = cljs.core.next.call(null,seq__26270__$1);
var G__26308 = null;
var G__26309 = (0);
var G__26310 = (0);
seq__26270 = G__26307;
chunk__26271 = G__26308;
count__26272 = G__26309;
i__26273 = G__26310;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map