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
var seq__27681_27693 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27682_27694 = null;
var count__27683_27695 = (0);
var i__27684_27696 = (0);
while(true){
if((i__27684_27696 < count__27683_27695)){
var f_27697 = cljs.core._nth.call(null,chunk__27682_27694,i__27684_27696);
cljs.core.println.call(null,"  ",f_27697);

var G__27698 = seq__27681_27693;
var G__27699 = chunk__27682_27694;
var G__27700 = count__27683_27695;
var G__27701 = (i__27684_27696 + (1));
seq__27681_27693 = G__27698;
chunk__27682_27694 = G__27699;
count__27683_27695 = G__27700;
i__27684_27696 = G__27701;
continue;
} else {
var temp__4126__auto___27702 = cljs.core.seq.call(null,seq__27681_27693);
if(temp__4126__auto___27702){
var seq__27681_27703__$1 = temp__4126__auto___27702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27681_27703__$1)){
var c__18898__auto___27704 = cljs.core.chunk_first.call(null,seq__27681_27703__$1);
var G__27705 = cljs.core.chunk_rest.call(null,seq__27681_27703__$1);
var G__27706 = c__18898__auto___27704;
var G__27707 = cljs.core.count.call(null,c__18898__auto___27704);
var G__27708 = (0);
seq__27681_27693 = G__27705;
chunk__27682_27694 = G__27706;
count__27683_27695 = G__27707;
i__27684_27696 = G__27708;
continue;
} else {
var f_27709 = cljs.core.first.call(null,seq__27681_27703__$1);
cljs.core.println.call(null,"  ",f_27709);

var G__27710 = cljs.core.next.call(null,seq__27681_27703__$1);
var G__27711 = null;
var G__27712 = (0);
var G__27713 = (0);
seq__27681_27693 = G__27710;
chunk__27682_27694 = G__27711;
count__27683_27695 = G__27712;
i__27684_27696 = G__27713;
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
var seq__27685 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27686 = null;
var count__27687 = (0);
var i__27688 = (0);
while(true){
if((i__27688 < count__27687)){
var vec__27689 = cljs.core._nth.call(null,chunk__27686,i__27688);
var name = cljs.core.nth.call(null,vec__27689,(0),null);
var map__27690 = cljs.core.nth.call(null,vec__27689,(1),null);
var map__27690__$1 = ((cljs.core.seq_QMARK_.call(null,map__27690))?cljs.core.apply.call(null,cljs.core.hash_map,map__27690):map__27690);
var arglists = cljs.core.get.call(null,map__27690__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__27690__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27714 = seq__27685;
var G__27715 = chunk__27686;
var G__27716 = count__27687;
var G__27717 = (i__27688 + (1));
seq__27685 = G__27714;
chunk__27686 = G__27715;
count__27687 = G__27716;
i__27688 = G__27717;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__27685);
if(temp__4126__auto__){
var seq__27685__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27685__$1)){
var c__18898__auto__ = cljs.core.chunk_first.call(null,seq__27685__$1);
var G__27718 = cljs.core.chunk_rest.call(null,seq__27685__$1);
var G__27719 = c__18898__auto__;
var G__27720 = cljs.core.count.call(null,c__18898__auto__);
var G__27721 = (0);
seq__27685 = G__27718;
chunk__27686 = G__27719;
count__27687 = G__27720;
i__27688 = G__27721;
continue;
} else {
var vec__27691 = cljs.core.first.call(null,seq__27685__$1);
var name = cljs.core.nth.call(null,vec__27691,(0),null);
var map__27692 = cljs.core.nth.call(null,vec__27691,(1),null);
var map__27692__$1 = ((cljs.core.seq_QMARK_.call(null,map__27692))?cljs.core.apply.call(null,cljs.core.hash_map,map__27692):map__27692);
var arglists = cljs.core.get.call(null,map__27692__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__27692__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27722 = cljs.core.next.call(null,seq__27685__$1);
var G__27723 = null;
var G__27724 = (0);
var G__27725 = (0);
seq__27685 = G__27722;
chunk__27686 = G__27723;
count__27687 = G__27724;
i__27688 = G__27725;
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