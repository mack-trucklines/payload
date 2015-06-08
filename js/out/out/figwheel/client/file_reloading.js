// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__26327_SHARP_,p2__26328_SHARP_){
var and__18101__auto__ = p1__26327_SHARP_;
if(cljs.core.truth_(and__18101__auto__)){
return p2__26328_SHARP_;
} else {
return and__18101__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18113__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18113__auto__){
return or__18113__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18113__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18113__auto__){
return or__18113__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18113__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18113__auto__)){
return or__18113__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19008__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19009__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19010__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19012__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19012__auto__,method_table__19008__auto__,prefer_table__19009__auto__,method_cache__19010__auto__,cached_hierarchy__19011__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26329){
var map__26330 = p__26329;
var map__26330__$1 = ((cljs.core.seq_QMARK_.call(null,map__26330))?cljs.core.apply.call(null,cljs.core.hash_map,map__26330):map__26330);
var file = cljs.core.get.call(null,map__26330__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__26331){
var map__26332 = p__26331;
var map__26332__$1 = ((cljs.core.seq_QMARK_.call(null,map__26332))?cljs.core.apply.call(null,cljs.core.hash_map,map__26332):map__26332);
var namespace = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19008__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19009__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19010__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19012__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19012__auto__,method_table__19008__auto__,prefer_table__19009__auto__,method_cache__19010__auto__,cached_hierarchy__19011__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e26333){if((e26333 instanceof Error)){
var e = e26333;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26333;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__26335 = arguments.length;
switch (G__26335) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26337,callback){
var map__26339 = p__26337;
var map__26339__$1 = ((cljs.core.seq_QMARK_.call(null,map__26339))?cljs.core.apply.call(null,cljs.core.hash_map,map__26339):map__26339);
var file_msg = map__26339__$1;
var request_url = cljs.core.get.call(null,map__26339__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26339,map__26339__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26339,map__26339__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26340){
var map__26342 = p__26340;
var map__26342__$1 = ((cljs.core.seq_QMARK_.call(null,map__26342))?cljs.core.apply.call(null,cljs.core.hash_map,map__26342):map__26342);
var file_msg = map__26342__$1;
var meta_data = cljs.core.get.call(null,map__26342__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__26342__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18113__auto__ = meta_data;
if(cljs.core.truth_(or__18113__auto__)){
return or__18113__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18101__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18101__auto__){
var or__18113__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18113__auto__)){
return or__18113__auto__;
} else {
var or__18113__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18113__auto____$1)){
return or__18113__auto____$1;
} else {
var and__18101__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18101__auto____$1){
var or__18113__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18113__auto____$2){
return or__18113__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18101__auto____$1;
}
}
}
} else {
return and__18101__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26343,callback){
var map__26345 = p__26343;
var map__26345__$1 = ((cljs.core.seq_QMARK_.call(null,map__26345))?cljs.core.apply.call(null,cljs.core.hash_map,map__26345):map__26345);
var file_msg = map__26345__$1;
var namespace = cljs.core.get.call(null,map__26345__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__26345__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21665__auto___26436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___26436,out){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___26436,out){
return (function (state_26414){
var state_val_26415 = (state_26414[(1)]);
if((state_val_26415 === (7))){
var inst_26398 = (state_26414[(7)]);
var inst_26404 = (state_26414[(2)]);
var inst_26405 = cljs.core.async.put_BANG_.call(null,out,inst_26404);
var inst_26394 = inst_26398;
var state_26414__$1 = (function (){var statearr_26416 = state_26414;
(statearr_26416[(8)] = inst_26394);

(statearr_26416[(9)] = inst_26405);

return statearr_26416;
})();
var statearr_26417_26437 = state_26414__$1;
(statearr_26417_26437[(2)] = null);

(statearr_26417_26437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (6))){
var inst_26410 = (state_26414[(2)]);
var state_26414__$1 = state_26414;
var statearr_26418_26438 = state_26414__$1;
(statearr_26418_26438[(2)] = inst_26410);

(statearr_26418_26438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (5))){
var inst_26408 = cljs.core.async.close_BANG_.call(null,out);
var state_26414__$1 = state_26414;
var statearr_26419_26439 = state_26414__$1;
(statearr_26419_26439[(2)] = inst_26408);

(statearr_26419_26439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (4))){
var inst_26397 = (state_26414[(10)]);
var inst_26402 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26397);
var state_26414__$1 = state_26414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26414__$1,(7),inst_26402);
} else {
if((state_val_26415 === (3))){
var inst_26412 = (state_26414[(2)]);
var state_26414__$1 = state_26414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26414__$1,inst_26412);
} else {
if((state_val_26415 === (2))){
var inst_26394 = (state_26414[(8)]);
var inst_26397 = (state_26414[(10)]);
var inst_26397__$1 = cljs.core.nth.call(null,inst_26394,(0),null);
var inst_26398 = cljs.core.nthnext.call(null,inst_26394,(1));
var inst_26399 = (inst_26397__$1 == null);
var inst_26400 = cljs.core.not.call(null,inst_26399);
var state_26414__$1 = (function (){var statearr_26420 = state_26414;
(statearr_26420[(7)] = inst_26398);

(statearr_26420[(10)] = inst_26397__$1);

return statearr_26420;
})();
if(inst_26400){
var statearr_26421_26440 = state_26414__$1;
(statearr_26421_26440[(1)] = (4));

} else {
var statearr_26422_26441 = state_26414__$1;
(statearr_26422_26441[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (1))){
var inst_26392 = cljs.core.nth.call(null,files,(0),null);
var inst_26393 = cljs.core.nthnext.call(null,files,(1));
var inst_26394 = files;
var state_26414__$1 = (function (){var statearr_26423 = state_26414;
(statearr_26423[(8)] = inst_26394);

(statearr_26423[(11)] = inst_26393);

(statearr_26423[(12)] = inst_26392);

return statearr_26423;
})();
var statearr_26424_26442 = state_26414__$1;
(statearr_26424_26442[(2)] = null);

(statearr_26424_26442[(1)] = (2));


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
});})(c__21665__auto___26436,out))
;
return ((function (switch__21603__auto__,c__21665__auto___26436,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21604__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21604__auto____0 = (function (){
var statearr_26428 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26428[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21604__auto__);

(statearr_26428[(1)] = (1));

return statearr_26428;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21604__auto____1 = (function (state_26414){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_26414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e26429){if((e26429 instanceof Object)){
var ex__21607__auto__ = e26429;
var statearr_26430_26443 = state_26414;
(statearr_26430_26443[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26444 = state_26414;
state_26414 = G__26444;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21604__auto__ = function(state_26414){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21604__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21604__auto____1.call(this,state_26414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21604__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21604__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___26436,out))
})();
var state__21667__auto__ = (function (){var statearr_26431 = f__21666__auto__.call(null);
(statearr_26431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___26436);

return statearr_26431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___26436,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__26445,p__26446){
var map__26450 = p__26445;
var map__26450__$1 = ((cljs.core.seq_QMARK_.call(null,map__26450))?cljs.core.apply.call(null,cljs.core.hash_map,map__26450):map__26450);
var opts = map__26450__$1;
var url_rewriter = cljs.core.get.call(null,map__26450__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__26451 = p__26446;
var map__26451__$1 = ((cljs.core.seq_QMARK_.call(null,map__26451))?cljs.core.apply.call(null,cljs.core.hash_map,map__26451):map__26451);
var file_msg = map__26451__$1;
var file = cljs.core.get.call(null,map__26451__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26452){
var map__26455 = p__26452;
var map__26455__$1 = ((cljs.core.seq_QMARK_.call(null,map__26455))?cljs.core.apply.call(null,cljs.core.hash_map,map__26455):map__26455);
var file = cljs.core.get.call(null,map__26455__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__26455__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18101__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18101__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18101__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e26456){var e = e26456;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26461,p__26462){
var map__26663 = p__26461;
var map__26663__$1 = ((cljs.core.seq_QMARK_.call(null,map__26663))?cljs.core.apply.call(null,cljs.core.hash_map,map__26663):map__26663);
var opts = map__26663__$1;
var load_unchanged_files = cljs.core.get.call(null,map__26663__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__26663__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__26663__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__26664 = p__26462;
var map__26664__$1 = ((cljs.core.seq_QMARK_.call(null,map__26664))?cljs.core.apply.call(null,cljs.core.hash_map,map__26664):map__26664);
var msg = map__26664__$1;
var files = cljs.core.get.call(null,map__26664__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files){
return (function (state_26788){
var state_val_26789 = (state_26788[(1)]);
if((state_val_26789 === (7))){
var inst_26678 = (state_26788[(7)]);
var inst_26677 = (state_26788[(8)]);
var inst_26675 = (state_26788[(9)]);
var inst_26676 = (state_26788[(10)]);
var inst_26683 = cljs.core._nth.call(null,inst_26676,inst_26678);
var inst_26684 = figwheel.client.file_reloading.eval_body.call(null,inst_26683);
var inst_26685 = (inst_26678 + (1));
var tmp26790 = inst_26677;
var tmp26791 = inst_26675;
var tmp26792 = inst_26676;
var inst_26675__$1 = tmp26791;
var inst_26676__$1 = tmp26792;
var inst_26677__$1 = tmp26790;
var inst_26678__$1 = inst_26685;
var state_26788__$1 = (function (){var statearr_26793 = state_26788;
(statearr_26793[(7)] = inst_26678__$1);

(statearr_26793[(11)] = inst_26684);

(statearr_26793[(8)] = inst_26677__$1);

(statearr_26793[(9)] = inst_26675__$1);

(statearr_26793[(10)] = inst_26676__$1);

return statearr_26793;
})();
var statearr_26794_26864 = state_26788__$1;
(statearr_26794_26864[(2)] = null);

(statearr_26794_26864[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (20))){
var inst_26725 = (state_26788[(12)]);
var inst_26727 = (state_26788[(13)]);
var inst_26724 = (state_26788[(14)]);
var inst_26721 = (state_26788[(15)]);
var inst_26720 = (state_26788[(16)]);
var inst_26730 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26732 = (function (){var files_not_loaded = inst_26727;
var res = inst_26725;
var res_SINGLEQUOTE_ = inst_26724;
var files_SINGLEQUOTE_ = inst_26721;
var all_files = inst_26720;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26725,inst_26727,inst_26724,inst_26721,inst_26720,inst_26730,state_val_26789,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files){
return (function (p__26731){
var map__26795 = p__26731;
var map__26795__$1 = ((cljs.core.seq_QMARK_.call(null,map__26795))?cljs.core.apply.call(null,cljs.core.hash_map,map__26795):map__26795);
var file = cljs.core.get.call(null,map__26795__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__26795__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26725,inst_26727,inst_26724,inst_26721,inst_26720,inst_26730,state_val_26789,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files))
})();
var inst_26733 = cljs.core.map.call(null,inst_26732,inst_26725);
var inst_26734 = cljs.core.pr_str.call(null,inst_26733);
var inst_26735 = figwheel.client.utils.log.call(null,inst_26734);
var inst_26736 = (function (){var files_not_loaded = inst_26727;
var res = inst_26725;
var res_SINGLEQUOTE_ = inst_26724;
var files_SINGLEQUOTE_ = inst_26721;
var all_files = inst_26720;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26725,inst_26727,inst_26724,inst_26721,inst_26720,inst_26730,inst_26732,inst_26733,inst_26734,inst_26735,state_val_26789,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26725,inst_26727,inst_26724,inst_26721,inst_26720,inst_26730,inst_26732,inst_26733,inst_26734,inst_26735,state_val_26789,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files))
})();
var inst_26737 = setTimeout(inst_26736,(10));
var state_26788__$1 = (function (){var statearr_26796 = state_26788;
(statearr_26796[(17)] = inst_26735);

(statearr_26796[(18)] = inst_26730);

return statearr_26796;
})();
var statearr_26797_26867 = state_26788__$1;
(statearr_26797_26867[(2)] = inst_26737);

(statearr_26797_26867[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (27))){
var inst_26747 = (state_26788[(19)]);
var state_26788__$1 = state_26788;
var statearr_26798_26868 = state_26788__$1;
(statearr_26798_26868[(2)] = inst_26747);

(statearr_26798_26868[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (1))){
var inst_26667 = (state_26788[(20)]);
var inst_26665 = before_jsload.call(null,files);
var inst_26666 = (function (){return ((function (inst_26667,inst_26665,state_val_26789,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files){
return (function (p1__26457_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26457_SHARP_);
});
;})(inst_26667,inst_26665,state_val_26789,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files))
})();
var inst_26667__$1 = cljs.core.filter.call(null,inst_26666,files);
var inst_26668 = cljs.core.not_empty.call(null,inst_26667__$1);
var state_26788__$1 = (function (){var statearr_26799 = state_26788;
(statearr_26799[(21)] = inst_26665);

(statearr_26799[(20)] = inst_26667__$1);

return statearr_26799;
})();
if(cljs.core.truth_(inst_26668)){
var statearr_26800_26869 = state_26788__$1;
(statearr_26800_26869[(1)] = (2));

} else {
var statearr_26801_26870 = state_26788__$1;
(statearr_26801_26870[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (24))){
var state_26788__$1 = state_26788;
var statearr_26802_26871 = state_26788__$1;
(statearr_26802_26871[(2)] = null);

(statearr_26802_26871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (4))){
var inst_26712 = (state_26788[(2)]);
var inst_26713 = (function (){return ((function (inst_26712,state_val_26789,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files){
return (function (p1__26458_SHARP_){
var and__18101__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26458_SHARP_);
if(cljs.core.truth_(and__18101__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26458_SHARP_));
} else {
return and__18101__auto__;
}
});
;})(inst_26712,state_val_26789,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files))
})();
var inst_26714 = cljs.core.filter.call(null,inst_26713,files);
var state_26788__$1 = (function (){var statearr_26803 = state_26788;
(statearr_26803[(22)] = inst_26712);

(statearr_26803[(23)] = inst_26714);

return statearr_26803;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_26804_26872 = state_26788__$1;
(statearr_26804_26872[(1)] = (16));

} else {
var statearr_26805_26873 = state_26788__$1;
(statearr_26805_26873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (15))){
var inst_26702 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
var statearr_26806_26875 = state_26788__$1;
(statearr_26806_26875[(2)] = inst_26702);

(statearr_26806_26875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (21))){
var state_26788__$1 = state_26788;
var statearr_26807_26876 = state_26788__$1;
(statearr_26807_26876[(2)] = null);

(statearr_26807_26876[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (31))){
var inst_26755 = (state_26788[(24)]);
var inst_26765 = (state_26788[(2)]);
var inst_26766 = cljs.core.not_empty.call(null,inst_26755);
var state_26788__$1 = (function (){var statearr_26808 = state_26788;
(statearr_26808[(25)] = inst_26765);

return statearr_26808;
})();
if(cljs.core.truth_(inst_26766)){
var statearr_26809_26877 = state_26788__$1;
(statearr_26809_26877[(1)] = (32));

} else {
var statearr_26810_26878 = state_26788__$1;
(statearr_26810_26878[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (32))){
var inst_26755 = (state_26788[(24)]);
var inst_26768 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26755);
var inst_26769 = cljs.core.pr_str.call(null,inst_26768);
var inst_26770 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_26769)].join('');
var inst_26771 = figwheel.client.utils.log.call(null,inst_26770);
var state_26788__$1 = state_26788;
var statearr_26811_26879 = state_26788__$1;
(statearr_26811_26879[(2)] = inst_26771);

(statearr_26811_26879[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (33))){
var state_26788__$1 = state_26788;
var statearr_26812_26880 = state_26788__$1;
(statearr_26812_26880[(2)] = null);

(statearr_26812_26880[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (13))){
var inst_26688 = (state_26788[(26)]);
var inst_26692 = cljs.core.chunk_first.call(null,inst_26688);
var inst_26693 = cljs.core.chunk_rest.call(null,inst_26688);
var inst_26694 = cljs.core.count.call(null,inst_26692);
var inst_26675 = inst_26693;
var inst_26676 = inst_26692;
var inst_26677 = inst_26694;
var inst_26678 = (0);
var state_26788__$1 = (function (){var statearr_26813 = state_26788;
(statearr_26813[(7)] = inst_26678);

(statearr_26813[(8)] = inst_26677);

(statearr_26813[(9)] = inst_26675);

(statearr_26813[(10)] = inst_26676);

return statearr_26813;
})();
var statearr_26814_26881 = state_26788__$1;
(statearr_26814_26881[(2)] = null);

(statearr_26814_26881[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (22))){
var inst_26727 = (state_26788[(13)]);
var inst_26740 = (state_26788[(2)]);
var inst_26741 = cljs.core.not_empty.call(null,inst_26727);
var state_26788__$1 = (function (){var statearr_26815 = state_26788;
(statearr_26815[(27)] = inst_26740);

return statearr_26815;
})();
if(cljs.core.truth_(inst_26741)){
var statearr_26816_26883 = state_26788__$1;
(statearr_26816_26883[(1)] = (23));

} else {
var statearr_26817_26884 = state_26788__$1;
(statearr_26817_26884[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (36))){
var state_26788__$1 = state_26788;
var statearr_26818_26885 = state_26788__$1;
(statearr_26818_26885[(2)] = null);

(statearr_26818_26885[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (29))){
var inst_26756 = (state_26788[(28)]);
var inst_26759 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26756);
var inst_26760 = cljs.core.pr_str.call(null,inst_26759);
var inst_26761 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26760)].join('');
var inst_26762 = figwheel.client.utils.log.call(null,inst_26761);
var state_26788__$1 = state_26788;
var statearr_26819_26886 = state_26788__$1;
(statearr_26819_26886[(2)] = inst_26762);

(statearr_26819_26886[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (6))){
var inst_26709 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
var statearr_26820_26887 = state_26788__$1;
(statearr_26820_26887[(2)] = inst_26709);

(statearr_26820_26887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (28))){
var inst_26756 = (state_26788[(28)]);
var inst_26753 = (state_26788[(2)]);
var inst_26754 = cljs.core.get.call(null,inst_26753,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26755 = cljs.core.get.call(null,inst_26753,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_26756__$1 = cljs.core.get.call(null,inst_26753,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26757 = cljs.core.not_empty.call(null,inst_26756__$1);
var state_26788__$1 = (function (){var statearr_26821 = state_26788;
(statearr_26821[(29)] = inst_26754);

(statearr_26821[(24)] = inst_26755);

(statearr_26821[(28)] = inst_26756__$1);

return statearr_26821;
})();
if(cljs.core.truth_(inst_26757)){
var statearr_26822_26889 = state_26788__$1;
(statearr_26822_26889[(1)] = (29));

} else {
var statearr_26823_26890 = state_26788__$1;
(statearr_26823_26890[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (25))){
var inst_26786 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26788__$1,inst_26786);
} else {
if((state_val_26789 === (34))){
var inst_26754 = (state_26788[(29)]);
var inst_26774 = (state_26788[(2)]);
var inst_26775 = cljs.core.not_empty.call(null,inst_26754);
var state_26788__$1 = (function (){var statearr_26824 = state_26788;
(statearr_26824[(30)] = inst_26774);

return statearr_26824;
})();
if(cljs.core.truth_(inst_26775)){
var statearr_26825_26891 = state_26788__$1;
(statearr_26825_26891[(1)] = (35));

} else {
var statearr_26826_26892 = state_26788__$1;
(statearr_26826_26892[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (17))){
var inst_26714 = (state_26788[(23)]);
var state_26788__$1 = state_26788;
var statearr_26827_26893 = state_26788__$1;
(statearr_26827_26893[(2)] = inst_26714);

(statearr_26827_26893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (3))){
var state_26788__$1 = state_26788;
var statearr_26828_26894 = state_26788__$1;
(statearr_26828_26894[(2)] = null);

(statearr_26828_26894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (12))){
var inst_26705 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
var statearr_26829_26895 = state_26788__$1;
(statearr_26829_26895[(2)] = inst_26705);

(statearr_26829_26895[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (2))){
var inst_26667 = (state_26788[(20)]);
var inst_26674 = cljs.core.seq.call(null,inst_26667);
var inst_26675 = inst_26674;
var inst_26676 = null;
var inst_26677 = (0);
var inst_26678 = (0);
var state_26788__$1 = (function (){var statearr_26830 = state_26788;
(statearr_26830[(7)] = inst_26678);

(statearr_26830[(8)] = inst_26677);

(statearr_26830[(9)] = inst_26675);

(statearr_26830[(10)] = inst_26676);

return statearr_26830;
})();
var statearr_26831_26896 = state_26788__$1;
(statearr_26831_26896[(2)] = null);

(statearr_26831_26896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (23))){
var inst_26725 = (state_26788[(12)]);
var inst_26727 = (state_26788[(13)]);
var inst_26724 = (state_26788[(14)]);
var inst_26721 = (state_26788[(15)]);
var inst_26747 = (state_26788[(19)]);
var inst_26720 = (state_26788[(16)]);
var inst_26743 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26746 = (function (){var files_not_loaded = inst_26727;
var res = inst_26725;
var res_SINGLEQUOTE_ = inst_26724;
var files_SINGLEQUOTE_ = inst_26721;
var all_files = inst_26720;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26725,inst_26727,inst_26724,inst_26721,inst_26747,inst_26720,inst_26743,state_val_26789,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files){
return (function (p__26745){
var map__26832 = p__26745;
var map__26832__$1 = ((cljs.core.seq_QMARK_.call(null,map__26832))?cljs.core.apply.call(null,cljs.core.hash_map,map__26832):map__26832);
var meta_data = cljs.core.get.call(null,map__26832__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26725,inst_26727,inst_26724,inst_26721,inst_26747,inst_26720,inst_26743,state_val_26789,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files))
})();
var inst_26747__$1 = cljs.core.group_by.call(null,inst_26746,inst_26727);
var inst_26748 = cljs.core.seq_QMARK_.call(null,inst_26747__$1);
var state_26788__$1 = (function (){var statearr_26833 = state_26788;
(statearr_26833[(31)] = inst_26743);

(statearr_26833[(19)] = inst_26747__$1);

return statearr_26833;
})();
if(inst_26748){
var statearr_26834_26898 = state_26788__$1;
(statearr_26834_26898[(1)] = (26));

} else {
var statearr_26835_26899 = state_26788__$1;
(statearr_26835_26899[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (35))){
var inst_26754 = (state_26788[(29)]);
var inst_26777 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26754);
var inst_26778 = cljs.core.pr_str.call(null,inst_26777);
var inst_26779 = [cljs.core.str("not required: "),cljs.core.str(inst_26778)].join('');
var inst_26780 = figwheel.client.utils.log.call(null,inst_26779);
var state_26788__$1 = state_26788;
var statearr_26836_26900 = state_26788__$1;
(statearr_26836_26900[(2)] = inst_26780);

(statearr_26836_26900[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (19))){
var inst_26725 = (state_26788[(12)]);
var inst_26724 = (state_26788[(14)]);
var inst_26721 = (state_26788[(15)]);
var inst_26720 = (state_26788[(16)]);
var inst_26724__$1 = (state_26788[(2)]);
var inst_26725__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26724__$1);
var inst_26726 = (function (){var res = inst_26725__$1;
var res_SINGLEQUOTE_ = inst_26724__$1;
var files_SINGLEQUOTE_ = inst_26721;
var all_files = inst_26720;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26725,inst_26724,inst_26721,inst_26720,inst_26724__$1,inst_26725__$1,state_val_26789,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files){
return (function (p1__26460_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26460_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26725,inst_26724,inst_26721,inst_26720,inst_26724__$1,inst_26725__$1,state_val_26789,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files))
})();
var inst_26727 = cljs.core.filter.call(null,inst_26726,inst_26724__$1);
var inst_26728 = cljs.core.not_empty.call(null,inst_26725__$1);
var state_26788__$1 = (function (){var statearr_26837 = state_26788;
(statearr_26837[(12)] = inst_26725__$1);

(statearr_26837[(13)] = inst_26727);

(statearr_26837[(14)] = inst_26724__$1);

return statearr_26837;
})();
if(cljs.core.truth_(inst_26728)){
var statearr_26838_26902 = state_26788__$1;
(statearr_26838_26902[(1)] = (20));

} else {
var statearr_26839_26903 = state_26788__$1;
(statearr_26839_26903[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (11))){
var state_26788__$1 = state_26788;
var statearr_26840_26904 = state_26788__$1;
(statearr_26840_26904[(2)] = null);

(statearr_26840_26904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (9))){
var inst_26707 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
var statearr_26841_26905 = state_26788__$1;
(statearr_26841_26905[(2)] = inst_26707);

(statearr_26841_26905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (5))){
var inst_26678 = (state_26788[(7)]);
var inst_26677 = (state_26788[(8)]);
var inst_26680 = (inst_26678 < inst_26677);
var inst_26681 = inst_26680;
var state_26788__$1 = state_26788;
if(cljs.core.truth_(inst_26681)){
var statearr_26842_26906 = state_26788__$1;
(statearr_26842_26906[(1)] = (7));

} else {
var statearr_26843_26907 = state_26788__$1;
(statearr_26843_26907[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (14))){
var inst_26688 = (state_26788[(26)]);
var inst_26697 = cljs.core.first.call(null,inst_26688);
var inst_26698 = figwheel.client.file_reloading.eval_body.call(null,inst_26697);
var inst_26699 = cljs.core.next.call(null,inst_26688);
var inst_26675 = inst_26699;
var inst_26676 = null;
var inst_26677 = (0);
var inst_26678 = (0);
var state_26788__$1 = (function (){var statearr_26844 = state_26788;
(statearr_26844[(7)] = inst_26678);

(statearr_26844[(32)] = inst_26698);

(statearr_26844[(8)] = inst_26677);

(statearr_26844[(9)] = inst_26675);

(statearr_26844[(10)] = inst_26676);

return statearr_26844;
})();
var statearr_26845_26909 = state_26788__$1;
(statearr_26845_26909[(2)] = null);

(statearr_26845_26909[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (26))){
var inst_26747 = (state_26788[(19)]);
var inst_26750 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26747);
var state_26788__$1 = state_26788;
var statearr_26846_26910 = state_26788__$1;
(statearr_26846_26910[(2)] = inst_26750);

(statearr_26846_26910[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (16))){
var inst_26714 = (state_26788[(23)]);
var inst_26716 = (function (){var all_files = inst_26714;
return ((function (all_files,inst_26714,state_val_26789,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files){
return (function (p1__26459_SHARP_){
return cljs.core.update_in.call(null,p1__26459_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_26714,state_val_26789,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files))
})();
var inst_26717 = cljs.core.map.call(null,inst_26716,inst_26714);
var state_26788__$1 = state_26788;
var statearr_26848_26911 = state_26788__$1;
(statearr_26848_26911[(2)] = inst_26717);

(statearr_26848_26911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (30))){
var state_26788__$1 = state_26788;
var statearr_26849_26912 = state_26788__$1;
(statearr_26849_26912[(2)] = null);

(statearr_26849_26912[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (10))){
var inst_26688 = (state_26788[(26)]);
var inst_26690 = cljs.core.chunked_seq_QMARK_.call(null,inst_26688);
var state_26788__$1 = state_26788;
if(inst_26690){
var statearr_26850_26914 = state_26788__$1;
(statearr_26850_26914[(1)] = (13));

} else {
var statearr_26851_26915 = state_26788__$1;
(statearr_26851_26915[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (18))){
var inst_26721 = (state_26788[(15)]);
var inst_26720 = (state_26788[(16)]);
var inst_26720__$1 = (state_26788[(2)]);
var inst_26721__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_26720__$1);
var inst_26722 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26721__$1);
var state_26788__$1 = (function (){var statearr_26852 = state_26788;
(statearr_26852[(15)] = inst_26721__$1);

(statearr_26852[(16)] = inst_26720__$1);

return statearr_26852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26788__$1,(19),inst_26722);
} else {
if((state_val_26789 === (37))){
var inst_26783 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
var statearr_26853_26916 = state_26788__$1;
(statearr_26853_26916[(2)] = inst_26783);

(statearr_26853_26916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (8))){
var inst_26675 = (state_26788[(9)]);
var inst_26688 = (state_26788[(26)]);
var inst_26688__$1 = cljs.core.seq.call(null,inst_26675);
var state_26788__$1 = (function (){var statearr_26854 = state_26788;
(statearr_26854[(26)] = inst_26688__$1);

return statearr_26854;
})();
if(inst_26688__$1){
var statearr_26855_26917 = state_26788__$1;
(statearr_26855_26917[(1)] = (10));

} else {
var statearr_26856_26918 = state_26788__$1;
(statearr_26856_26918[(1)] = (11));

}

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
}
}
}
});})(c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files))
;
return ((function (switch__21603__auto__,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21604__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21604__auto____0 = (function (){
var statearr_26860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26860[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21604__auto__);

(statearr_26860[(1)] = (1));

return statearr_26860;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21604__auto____1 = (function (state_26788){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_26788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e26861){if((e26861 instanceof Object)){
var ex__21607__auto__ = e26861;
var statearr_26862_26920 = state_26788;
(statearr_26862_26920[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26921 = state_26788;
state_26788 = G__26921;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21604__auto__ = function(state_26788){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21604__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21604__auto____1.call(this,state_26788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21604__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21604__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files))
})();
var state__21667__auto__ = (function (){var statearr_26863 = f__21666__auto__.call(null);
(statearr_26863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto__);

return statearr_26863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto__,map__26663,map__26663__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26664,map__26664__$1,msg,files))
);

return c__21665__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26924,link){
var map__26926 = p__26924;
var map__26926__$1 = ((cljs.core.seq_QMARK_.call(null,map__26926))?cljs.core.apply.call(null,cljs.core.hash_map,map__26926):map__26926);
var file = cljs.core.get.call(null,map__26926__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__26926,map__26926__$1,file){
return (function (p1__26922_SHARP_,p2__26923_SHARP_){
if(cljs.core._EQ_.call(null,p1__26922_SHARP_,p2__26923_SHARP_)){
return p1__26922_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__26926,map__26926__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26930){
var map__26931 = p__26930;
var map__26931__$1 = ((cljs.core.seq_QMARK_.call(null,map__26931))?cljs.core.apply.call(null,cljs.core.hash_map,map__26931):map__26931);
var current_url_length = cljs.core.get.call(null,map__26931__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__26931__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26927_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26927_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__26933 = arguments.length;
switch (G__26933) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26935){
var map__26937 = p__26935;
var map__26937__$1 = ((cljs.core.seq_QMARK_.call(null,map__26937))?cljs.core.apply.call(null,cljs.core.hash_map,map__26937):map__26937);
var f_data = map__26937__$1;
var request_url = cljs.core.get.call(null,map__26937__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__26937__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18113__auto__ = request_url;
if(cljs.core.truth_(or__18113__auto__)){
return or__18113__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26938,files_msg){
var map__26960 = p__26938;
var map__26960__$1 = ((cljs.core.seq_QMARK_.call(null,map__26960))?cljs.core.apply.call(null,cljs.core.hash_map,map__26960):map__26960);
var opts = map__26960__$1;
var on_cssload = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26961_26981 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26962_26982 = null;
var count__26963_26983 = (0);
var i__26964_26984 = (0);
while(true){
if((i__26964_26984 < count__26963_26983)){
var f_26985 = cljs.core._nth.call(null,chunk__26962_26982,i__26964_26984);
figwheel.client.file_reloading.reload_css_file.call(null,f_26985);

var G__26986 = seq__26961_26981;
var G__26987 = chunk__26962_26982;
var G__26988 = count__26963_26983;
var G__26989 = (i__26964_26984 + (1));
seq__26961_26981 = G__26986;
chunk__26962_26982 = G__26987;
count__26963_26983 = G__26988;
i__26964_26984 = G__26989;
continue;
} else {
var temp__4126__auto___26990 = cljs.core.seq.call(null,seq__26961_26981);
if(temp__4126__auto___26990){
var seq__26961_26991__$1 = temp__4126__auto___26990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26961_26991__$1)){
var c__18898__auto___26992 = cljs.core.chunk_first.call(null,seq__26961_26991__$1);
var G__26993 = cljs.core.chunk_rest.call(null,seq__26961_26991__$1);
var G__26994 = c__18898__auto___26992;
var G__26995 = cljs.core.count.call(null,c__18898__auto___26992);
var G__26996 = (0);
seq__26961_26981 = G__26993;
chunk__26962_26982 = G__26994;
count__26963_26983 = G__26995;
i__26964_26984 = G__26996;
continue;
} else {
var f_26997 = cljs.core.first.call(null,seq__26961_26991__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26997);

var G__26998 = cljs.core.next.call(null,seq__26961_26991__$1);
var G__26999 = null;
var G__27000 = (0);
var G__27001 = (0);
seq__26961_26981 = G__26998;
chunk__26962_26982 = G__26999;
count__26963_26983 = G__27000;
i__26964_26984 = G__27001;
continue;
}
} else {
}
}
break;
}

var c__21665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto__,map__26960,map__26960__$1,opts,on_cssload){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto__,map__26960,map__26960__$1,opts,on_cssload){
return (function (state_26971){
var state_val_26972 = (state_26971[(1)]);
if((state_val_26972 === (2))){
var inst_26967 = (state_26971[(2)]);
var inst_26968 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_26969 = on_cssload.call(null,inst_26968);
var state_26971__$1 = (function (){var statearr_26973 = state_26971;
(statearr_26973[(7)] = inst_26967);

return statearr_26973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26971__$1,inst_26969);
} else {
if((state_val_26972 === (1))){
var inst_26965 = cljs.core.async.timeout.call(null,(100));
var state_26971__$1 = state_26971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26971__$1,(2),inst_26965);
} else {
return null;
}
}
});})(c__21665__auto__,map__26960,map__26960__$1,opts,on_cssload))
;
return ((function (switch__21603__auto__,c__21665__auto__,map__26960,map__26960__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21604__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21604__auto____0 = (function (){
var statearr_26977 = [null,null,null,null,null,null,null,null];
(statearr_26977[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21604__auto__);

(statearr_26977[(1)] = (1));

return statearr_26977;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21604__auto____1 = (function (state_26971){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_26971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e26978){if((e26978 instanceof Object)){
var ex__21607__auto__ = e26978;
var statearr_26979_27002 = state_26971;
(statearr_26979_27002[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27003 = state_26971;
state_26971 = G__27003;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21604__auto__ = function(state_26971){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21604__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21604__auto____1.call(this,state_26971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21604__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21604__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto__,map__26960,map__26960__$1,opts,on_cssload))
})();
var state__21667__auto__ = (function (){var statearr_26980 = f__21666__auto__.call(null);
(statearr_26980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto__);

return statearr_26980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto__,map__26960,map__26960__$1,opts,on_cssload))
);

return c__21665__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map