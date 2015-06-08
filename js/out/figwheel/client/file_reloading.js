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
return cljs.core.reduce.call(null,(function (p1__27742_SHARP_,p2__27743_SHARP_){
var and__18101__auto__ = p1__27742_SHARP_;
if(cljs.core.truth_(and__18101__auto__)){
return p2__27743_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27744){
var map__27745 = p__27744;
var map__27745__$1 = ((cljs.core.seq_QMARK_.call(null,map__27745))?cljs.core.apply.call(null,cljs.core.hash_map,map__27745):map__27745);
var file = cljs.core.get.call(null,map__27745__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__27746){
var map__27747 = p__27746;
var map__27747__$1 = ((cljs.core.seq_QMARK_.call(null,map__27747))?cljs.core.apply.call(null,cljs.core.hash_map,map__27747):map__27747);
var namespace = cljs.core.get.call(null,map__27747__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e27748){if((e27748 instanceof Error)){
var e = e27748;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27748;

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
var G__27750 = arguments.length;
switch (G__27750) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27752,callback){
var map__27754 = p__27752;
var map__27754__$1 = ((cljs.core.seq_QMARK_.call(null,map__27754))?cljs.core.apply.call(null,cljs.core.hash_map,map__27754):map__27754);
var file_msg = map__27754__$1;
var request_url = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27754,map__27754__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27754,map__27754__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27755){
var map__27757 = p__27755;
var map__27757__$1 = ((cljs.core.seq_QMARK_.call(null,map__27757))?cljs.core.apply.call(null,cljs.core.hash_map,map__27757):map__27757);
var file_msg = map__27757__$1;
var meta_data = cljs.core.get.call(null,map__27757__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__27757__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27758,callback){
var map__27760 = p__27758;
var map__27760__$1 = ((cljs.core.seq_QMARK_.call(null,map__27760))?cljs.core.apply.call(null,cljs.core.hash_map,map__27760):map__27760);
var file_msg = map__27760__$1;
var namespace = cljs.core.get.call(null,map__27760__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__27760__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__21304__auto___27847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___27847,out){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto___27847,out){
return (function (state_27829){
var state_val_27830 = (state_27829[(1)]);
if((state_val_27830 === (7))){
var inst_27813 = (state_27829[(7)]);
var inst_27819 = (state_27829[(2)]);
var inst_27820 = cljs.core.async.put_BANG_.call(null,out,inst_27819);
var inst_27809 = inst_27813;
var state_27829__$1 = (function (){var statearr_27831 = state_27829;
(statearr_27831[(8)] = inst_27820);

(statearr_27831[(9)] = inst_27809);

return statearr_27831;
})();
var statearr_27832_27848 = state_27829__$1;
(statearr_27832_27848[(2)] = null);

(statearr_27832_27848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (6))){
var inst_27825 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27833_27849 = state_27829__$1;
(statearr_27833_27849[(2)] = inst_27825);

(statearr_27833_27849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (5))){
var inst_27823 = cljs.core.async.close_BANG_.call(null,out);
var state_27829__$1 = state_27829;
var statearr_27834_27850 = state_27829__$1;
(statearr_27834_27850[(2)] = inst_27823);

(statearr_27834_27850[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (4))){
var inst_27812 = (state_27829[(10)]);
var inst_27817 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27812);
var state_27829__$1 = state_27829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27829__$1,(7),inst_27817);
} else {
if((state_val_27830 === (3))){
var inst_27827 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27829__$1,inst_27827);
} else {
if((state_val_27830 === (2))){
var inst_27809 = (state_27829[(9)]);
var inst_27812 = (state_27829[(10)]);
var inst_27812__$1 = cljs.core.nth.call(null,inst_27809,(0),null);
var inst_27813 = cljs.core.nthnext.call(null,inst_27809,(1));
var inst_27814 = (inst_27812__$1 == null);
var inst_27815 = cljs.core.not.call(null,inst_27814);
var state_27829__$1 = (function (){var statearr_27835 = state_27829;
(statearr_27835[(7)] = inst_27813);

(statearr_27835[(10)] = inst_27812__$1);

return statearr_27835;
})();
if(inst_27815){
var statearr_27836_27851 = state_27829__$1;
(statearr_27836_27851[(1)] = (4));

} else {
var statearr_27837_27852 = state_27829__$1;
(statearr_27837_27852[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (1))){
var inst_27807 = cljs.core.nth.call(null,files,(0),null);
var inst_27808 = cljs.core.nthnext.call(null,files,(1));
var inst_27809 = files;
var state_27829__$1 = (function (){var statearr_27838 = state_27829;
(statearr_27838[(11)] = inst_27807);

(statearr_27838[(9)] = inst_27809);

(statearr_27838[(12)] = inst_27808);

return statearr_27838;
})();
var statearr_27839_27853 = state_27829__$1;
(statearr_27839_27853[(2)] = null);

(statearr_27839_27853[(1)] = (2));


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
});})(c__21304__auto___27847,out))
;
return ((function (switch__21283__auto__,c__21304__auto___27847,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____0 = (function (){
var statearr_27843 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27843[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__);

(statearr_27843[(1)] = (1));

return statearr_27843;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____1 = (function (state_27829){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27844){if((e27844 instanceof Object)){
var ex__21287__auto__ = e27844;
var statearr_27845_27854 = state_27829;
(statearr_27845_27854[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27855 = state_27829;
state_27829 = G__27855;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__ = function(state_27829){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____1.call(this,state_27829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto___27847,out))
})();
var state__21306__auto__ = (function (){var statearr_27846 = f__21305__auto__.call(null);
(statearr_27846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___27847);

return statearr_27846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___27847,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__27856,p__27857){
var map__27860 = p__27856;
var map__27860__$1 = ((cljs.core.seq_QMARK_.call(null,map__27860))?cljs.core.apply.call(null,cljs.core.hash_map,map__27860):map__27860);
var opts = map__27860__$1;
var url_rewriter = cljs.core.get.call(null,map__27860__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__27861 = p__27857;
var map__27861__$1 = ((cljs.core.seq_QMARK_.call(null,map__27861))?cljs.core.apply.call(null,cljs.core.hash_map,map__27861):map__27861);
var file_msg = map__27861__$1;
var file = cljs.core.get.call(null,map__27861__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27862){
var map__27865 = p__27862;
var map__27865__$1 = ((cljs.core.seq_QMARK_.call(null,map__27865))?cljs.core.apply.call(null,cljs.core.hash_map,map__27865):map__27865);
var file = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e27866){var e = e27866;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27871,p__27872){
var map__28073 = p__27871;
var map__28073__$1 = ((cljs.core.seq_QMARK_.call(null,map__28073))?cljs.core.apply.call(null,cljs.core.hash_map,map__28073):map__28073);
var opts = map__28073__$1;
var load_unchanged_files = cljs.core.get.call(null,map__28073__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__28073__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__28073__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__28074 = p__27872;
var map__28074__$1 = ((cljs.core.seq_QMARK_.call(null,map__28074))?cljs.core.apply.call(null,cljs.core.hash_map,map__28074):map__28074);
var msg = map__28074__$1;
var files = cljs.core.get.call(null,map__28074__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files){
return (function (state_28198){
var state_val_28199 = (state_28198[(1)]);
if((state_val_28199 === (7))){
var inst_28088 = (state_28198[(7)]);
var inst_28085 = (state_28198[(8)]);
var inst_28086 = (state_28198[(9)]);
var inst_28087 = (state_28198[(10)]);
var inst_28093 = cljs.core._nth.call(null,inst_28086,inst_28088);
var inst_28094 = figwheel.client.file_reloading.eval_body.call(null,inst_28093);
var inst_28095 = (inst_28088 + (1));
var tmp28200 = inst_28085;
var tmp28201 = inst_28086;
var tmp28202 = inst_28087;
var inst_28085__$1 = tmp28200;
var inst_28086__$1 = tmp28201;
var inst_28087__$1 = tmp28202;
var inst_28088__$1 = inst_28095;
var state_28198__$1 = (function (){var statearr_28203 = state_28198;
(statearr_28203[(7)] = inst_28088__$1);

(statearr_28203[(8)] = inst_28085__$1);

(statearr_28203[(9)] = inst_28086__$1);

(statearr_28203[(11)] = inst_28094);

(statearr_28203[(10)] = inst_28087__$1);

return statearr_28203;
})();
var statearr_28204_28273 = state_28198__$1;
(statearr_28204_28273[(2)] = null);

(statearr_28204_28273[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (20))){
var inst_28135 = (state_28198[(12)]);
var inst_28134 = (state_28198[(13)]);
var inst_28131 = (state_28198[(14)]);
var inst_28130 = (state_28198[(15)]);
var inst_28137 = (state_28198[(16)]);
var inst_28140 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28142 = (function (){var files_not_loaded = inst_28137;
var res = inst_28135;
var res_SINGLEQUOTE_ = inst_28134;
var files_SINGLEQUOTE_ = inst_28131;
var all_files = inst_28130;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28135,inst_28134,inst_28131,inst_28130,inst_28137,inst_28140,state_val_28199,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files){
return (function (p__28141){
var map__28205 = p__28141;
var map__28205__$1 = ((cljs.core.seq_QMARK_.call(null,map__28205))?cljs.core.apply.call(null,cljs.core.hash_map,map__28205):map__28205);
var file = cljs.core.get.call(null,map__28205__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__28205__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28135,inst_28134,inst_28131,inst_28130,inst_28137,inst_28140,state_val_28199,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files))
})();
var inst_28143 = cljs.core.map.call(null,inst_28142,inst_28135);
var inst_28144 = cljs.core.pr_str.call(null,inst_28143);
var inst_28145 = figwheel.client.utils.log.call(null,inst_28144);
var inst_28146 = (function (){var files_not_loaded = inst_28137;
var res = inst_28135;
var res_SINGLEQUOTE_ = inst_28134;
var files_SINGLEQUOTE_ = inst_28131;
var all_files = inst_28130;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28135,inst_28134,inst_28131,inst_28130,inst_28137,inst_28140,inst_28142,inst_28143,inst_28144,inst_28145,state_val_28199,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28135,inst_28134,inst_28131,inst_28130,inst_28137,inst_28140,inst_28142,inst_28143,inst_28144,inst_28145,state_val_28199,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files))
})();
var inst_28147 = setTimeout(inst_28146,(10));
var state_28198__$1 = (function (){var statearr_28206 = state_28198;
(statearr_28206[(17)] = inst_28140);

(statearr_28206[(18)] = inst_28145);

return statearr_28206;
})();
var statearr_28207_28274 = state_28198__$1;
(statearr_28207_28274[(2)] = inst_28147);

(statearr_28207_28274[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (27))){
var inst_28157 = (state_28198[(19)]);
var state_28198__$1 = state_28198;
var statearr_28208_28275 = state_28198__$1;
(statearr_28208_28275[(2)] = inst_28157);

(statearr_28208_28275[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (1))){
var inst_28077 = (state_28198[(20)]);
var inst_28075 = before_jsload.call(null,files);
var inst_28076 = (function (){return ((function (inst_28077,inst_28075,state_val_28199,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files){
return (function (p1__27867_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27867_SHARP_);
});
;})(inst_28077,inst_28075,state_val_28199,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files))
})();
var inst_28077__$1 = cljs.core.filter.call(null,inst_28076,files);
var inst_28078 = cljs.core.not_empty.call(null,inst_28077__$1);
var state_28198__$1 = (function (){var statearr_28209 = state_28198;
(statearr_28209[(21)] = inst_28075);

(statearr_28209[(20)] = inst_28077__$1);

return statearr_28209;
})();
if(cljs.core.truth_(inst_28078)){
var statearr_28210_28276 = state_28198__$1;
(statearr_28210_28276[(1)] = (2));

} else {
var statearr_28211_28277 = state_28198__$1;
(statearr_28211_28277[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (24))){
var state_28198__$1 = state_28198;
var statearr_28212_28278 = state_28198__$1;
(statearr_28212_28278[(2)] = null);

(statearr_28212_28278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (4))){
var inst_28122 = (state_28198[(2)]);
var inst_28123 = (function (){return ((function (inst_28122,state_val_28199,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files){
return (function (p1__27868_SHARP_){
var and__18101__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27868_SHARP_);
if(cljs.core.truth_(and__18101__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27868_SHARP_));
} else {
return and__18101__auto__;
}
});
;})(inst_28122,state_val_28199,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files))
})();
var inst_28124 = cljs.core.filter.call(null,inst_28123,files);
var state_28198__$1 = (function (){var statearr_28213 = state_28198;
(statearr_28213[(22)] = inst_28124);

(statearr_28213[(23)] = inst_28122);

return statearr_28213;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_28214_28279 = state_28198__$1;
(statearr_28214_28279[(1)] = (16));

} else {
var statearr_28215_28280 = state_28198__$1;
(statearr_28215_28280[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (15))){
var inst_28112 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
var statearr_28216_28281 = state_28198__$1;
(statearr_28216_28281[(2)] = inst_28112);

(statearr_28216_28281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (21))){
var state_28198__$1 = state_28198;
var statearr_28217_28282 = state_28198__$1;
(statearr_28217_28282[(2)] = null);

(statearr_28217_28282[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (31))){
var inst_28165 = (state_28198[(24)]);
var inst_28175 = (state_28198[(2)]);
var inst_28176 = cljs.core.not_empty.call(null,inst_28165);
var state_28198__$1 = (function (){var statearr_28218 = state_28198;
(statearr_28218[(25)] = inst_28175);

return statearr_28218;
})();
if(cljs.core.truth_(inst_28176)){
var statearr_28219_28283 = state_28198__$1;
(statearr_28219_28283[(1)] = (32));

} else {
var statearr_28220_28284 = state_28198__$1;
(statearr_28220_28284[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (32))){
var inst_28165 = (state_28198[(24)]);
var inst_28178 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28165);
var inst_28179 = cljs.core.pr_str.call(null,inst_28178);
var inst_28180 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_28179)].join('');
var inst_28181 = figwheel.client.utils.log.call(null,inst_28180);
var state_28198__$1 = state_28198;
var statearr_28221_28285 = state_28198__$1;
(statearr_28221_28285[(2)] = inst_28181);

(statearr_28221_28285[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (33))){
var state_28198__$1 = state_28198;
var statearr_28222_28286 = state_28198__$1;
(statearr_28222_28286[(2)] = null);

(statearr_28222_28286[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (13))){
var inst_28098 = (state_28198[(26)]);
var inst_28102 = cljs.core.chunk_first.call(null,inst_28098);
var inst_28103 = cljs.core.chunk_rest.call(null,inst_28098);
var inst_28104 = cljs.core.count.call(null,inst_28102);
var inst_28085 = inst_28103;
var inst_28086 = inst_28102;
var inst_28087 = inst_28104;
var inst_28088 = (0);
var state_28198__$1 = (function (){var statearr_28223 = state_28198;
(statearr_28223[(7)] = inst_28088);

(statearr_28223[(8)] = inst_28085);

(statearr_28223[(9)] = inst_28086);

(statearr_28223[(10)] = inst_28087);

return statearr_28223;
})();
var statearr_28224_28287 = state_28198__$1;
(statearr_28224_28287[(2)] = null);

(statearr_28224_28287[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (22))){
var inst_28137 = (state_28198[(16)]);
var inst_28150 = (state_28198[(2)]);
var inst_28151 = cljs.core.not_empty.call(null,inst_28137);
var state_28198__$1 = (function (){var statearr_28225 = state_28198;
(statearr_28225[(27)] = inst_28150);

return statearr_28225;
})();
if(cljs.core.truth_(inst_28151)){
var statearr_28226_28288 = state_28198__$1;
(statearr_28226_28288[(1)] = (23));

} else {
var statearr_28227_28289 = state_28198__$1;
(statearr_28227_28289[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (36))){
var state_28198__$1 = state_28198;
var statearr_28228_28290 = state_28198__$1;
(statearr_28228_28290[(2)] = null);

(statearr_28228_28290[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (29))){
var inst_28166 = (state_28198[(28)]);
var inst_28169 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28166);
var inst_28170 = cljs.core.pr_str.call(null,inst_28169);
var inst_28171 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28170)].join('');
var inst_28172 = figwheel.client.utils.log.call(null,inst_28171);
var state_28198__$1 = state_28198;
var statearr_28229_28291 = state_28198__$1;
(statearr_28229_28291[(2)] = inst_28172);

(statearr_28229_28291[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (6))){
var inst_28119 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
var statearr_28230_28292 = state_28198__$1;
(statearr_28230_28292[(2)] = inst_28119);

(statearr_28230_28292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (28))){
var inst_28166 = (state_28198[(28)]);
var inst_28163 = (state_28198[(2)]);
var inst_28164 = cljs.core.get.call(null,inst_28163,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28165 = cljs.core.get.call(null,inst_28163,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_28166__$1 = cljs.core.get.call(null,inst_28163,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28167 = cljs.core.not_empty.call(null,inst_28166__$1);
var state_28198__$1 = (function (){var statearr_28231 = state_28198;
(statearr_28231[(28)] = inst_28166__$1);

(statearr_28231[(24)] = inst_28165);

(statearr_28231[(29)] = inst_28164);

return statearr_28231;
})();
if(cljs.core.truth_(inst_28167)){
var statearr_28232_28293 = state_28198__$1;
(statearr_28232_28293[(1)] = (29));

} else {
var statearr_28233_28294 = state_28198__$1;
(statearr_28233_28294[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (25))){
var inst_28196 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28198__$1,inst_28196);
} else {
if((state_val_28199 === (34))){
var inst_28164 = (state_28198[(29)]);
var inst_28184 = (state_28198[(2)]);
var inst_28185 = cljs.core.not_empty.call(null,inst_28164);
var state_28198__$1 = (function (){var statearr_28234 = state_28198;
(statearr_28234[(30)] = inst_28184);

return statearr_28234;
})();
if(cljs.core.truth_(inst_28185)){
var statearr_28235_28295 = state_28198__$1;
(statearr_28235_28295[(1)] = (35));

} else {
var statearr_28236_28296 = state_28198__$1;
(statearr_28236_28296[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (17))){
var inst_28124 = (state_28198[(22)]);
var state_28198__$1 = state_28198;
var statearr_28237_28297 = state_28198__$1;
(statearr_28237_28297[(2)] = inst_28124);

(statearr_28237_28297[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (3))){
var state_28198__$1 = state_28198;
var statearr_28238_28298 = state_28198__$1;
(statearr_28238_28298[(2)] = null);

(statearr_28238_28298[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (12))){
var inst_28115 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
var statearr_28239_28299 = state_28198__$1;
(statearr_28239_28299[(2)] = inst_28115);

(statearr_28239_28299[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (2))){
var inst_28077 = (state_28198[(20)]);
var inst_28084 = cljs.core.seq.call(null,inst_28077);
var inst_28085 = inst_28084;
var inst_28086 = null;
var inst_28087 = (0);
var inst_28088 = (0);
var state_28198__$1 = (function (){var statearr_28240 = state_28198;
(statearr_28240[(7)] = inst_28088);

(statearr_28240[(8)] = inst_28085);

(statearr_28240[(9)] = inst_28086);

(statearr_28240[(10)] = inst_28087);

return statearr_28240;
})();
var statearr_28241_28300 = state_28198__$1;
(statearr_28241_28300[(2)] = null);

(statearr_28241_28300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (23))){
var inst_28135 = (state_28198[(12)]);
var inst_28134 = (state_28198[(13)]);
var inst_28131 = (state_28198[(14)]);
var inst_28130 = (state_28198[(15)]);
var inst_28157 = (state_28198[(19)]);
var inst_28137 = (state_28198[(16)]);
var inst_28153 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28156 = (function (){var files_not_loaded = inst_28137;
var res = inst_28135;
var res_SINGLEQUOTE_ = inst_28134;
var files_SINGLEQUOTE_ = inst_28131;
var all_files = inst_28130;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28135,inst_28134,inst_28131,inst_28130,inst_28157,inst_28137,inst_28153,state_val_28199,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files){
return (function (p__28155){
var map__28242 = p__28155;
var map__28242__$1 = ((cljs.core.seq_QMARK_.call(null,map__28242))?cljs.core.apply.call(null,cljs.core.hash_map,map__28242):map__28242);
var meta_data = cljs.core.get.call(null,map__28242__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28135,inst_28134,inst_28131,inst_28130,inst_28157,inst_28137,inst_28153,state_val_28199,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files))
})();
var inst_28157__$1 = cljs.core.group_by.call(null,inst_28156,inst_28137);
var inst_28158 = cljs.core.seq_QMARK_.call(null,inst_28157__$1);
var state_28198__$1 = (function (){var statearr_28243 = state_28198;
(statearr_28243[(19)] = inst_28157__$1);

(statearr_28243[(31)] = inst_28153);

return statearr_28243;
})();
if(inst_28158){
var statearr_28244_28301 = state_28198__$1;
(statearr_28244_28301[(1)] = (26));

} else {
var statearr_28245_28302 = state_28198__$1;
(statearr_28245_28302[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (35))){
var inst_28164 = (state_28198[(29)]);
var inst_28187 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28164);
var inst_28188 = cljs.core.pr_str.call(null,inst_28187);
var inst_28189 = [cljs.core.str("not required: "),cljs.core.str(inst_28188)].join('');
var inst_28190 = figwheel.client.utils.log.call(null,inst_28189);
var state_28198__$1 = state_28198;
var statearr_28246_28303 = state_28198__$1;
(statearr_28246_28303[(2)] = inst_28190);

(statearr_28246_28303[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (19))){
var inst_28135 = (state_28198[(12)]);
var inst_28134 = (state_28198[(13)]);
var inst_28131 = (state_28198[(14)]);
var inst_28130 = (state_28198[(15)]);
var inst_28134__$1 = (state_28198[(2)]);
var inst_28135__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28134__$1);
var inst_28136 = (function (){var res = inst_28135__$1;
var res_SINGLEQUOTE_ = inst_28134__$1;
var files_SINGLEQUOTE_ = inst_28131;
var all_files = inst_28130;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28135,inst_28134,inst_28131,inst_28130,inst_28134__$1,inst_28135__$1,state_val_28199,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files){
return (function (p1__27870_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27870_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28135,inst_28134,inst_28131,inst_28130,inst_28134__$1,inst_28135__$1,state_val_28199,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files))
})();
var inst_28137 = cljs.core.filter.call(null,inst_28136,inst_28134__$1);
var inst_28138 = cljs.core.not_empty.call(null,inst_28135__$1);
var state_28198__$1 = (function (){var statearr_28247 = state_28198;
(statearr_28247[(12)] = inst_28135__$1);

(statearr_28247[(13)] = inst_28134__$1);

(statearr_28247[(16)] = inst_28137);

return statearr_28247;
})();
if(cljs.core.truth_(inst_28138)){
var statearr_28248_28304 = state_28198__$1;
(statearr_28248_28304[(1)] = (20));

} else {
var statearr_28249_28305 = state_28198__$1;
(statearr_28249_28305[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (11))){
var state_28198__$1 = state_28198;
var statearr_28250_28306 = state_28198__$1;
(statearr_28250_28306[(2)] = null);

(statearr_28250_28306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (9))){
var inst_28117 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
var statearr_28251_28307 = state_28198__$1;
(statearr_28251_28307[(2)] = inst_28117);

(statearr_28251_28307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (5))){
var inst_28088 = (state_28198[(7)]);
var inst_28087 = (state_28198[(10)]);
var inst_28090 = (inst_28088 < inst_28087);
var inst_28091 = inst_28090;
var state_28198__$1 = state_28198;
if(cljs.core.truth_(inst_28091)){
var statearr_28252_28308 = state_28198__$1;
(statearr_28252_28308[(1)] = (7));

} else {
var statearr_28253_28309 = state_28198__$1;
(statearr_28253_28309[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (14))){
var inst_28098 = (state_28198[(26)]);
var inst_28107 = cljs.core.first.call(null,inst_28098);
var inst_28108 = figwheel.client.file_reloading.eval_body.call(null,inst_28107);
var inst_28109 = cljs.core.next.call(null,inst_28098);
var inst_28085 = inst_28109;
var inst_28086 = null;
var inst_28087 = (0);
var inst_28088 = (0);
var state_28198__$1 = (function (){var statearr_28254 = state_28198;
(statearr_28254[(7)] = inst_28088);

(statearr_28254[(8)] = inst_28085);

(statearr_28254[(9)] = inst_28086);

(statearr_28254[(10)] = inst_28087);

(statearr_28254[(32)] = inst_28108);

return statearr_28254;
})();
var statearr_28255_28310 = state_28198__$1;
(statearr_28255_28310[(2)] = null);

(statearr_28255_28310[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (26))){
var inst_28157 = (state_28198[(19)]);
var inst_28160 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28157);
var state_28198__$1 = state_28198;
var statearr_28256_28311 = state_28198__$1;
(statearr_28256_28311[(2)] = inst_28160);

(statearr_28256_28311[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (16))){
var inst_28124 = (state_28198[(22)]);
var inst_28126 = (function (){var all_files = inst_28124;
return ((function (all_files,inst_28124,state_val_28199,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files){
return (function (p1__27869_SHARP_){
return cljs.core.update_in.call(null,p1__27869_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_28124,state_val_28199,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files))
})();
var inst_28127 = cljs.core.map.call(null,inst_28126,inst_28124);
var state_28198__$1 = state_28198;
var statearr_28257_28312 = state_28198__$1;
(statearr_28257_28312[(2)] = inst_28127);

(statearr_28257_28312[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (30))){
var state_28198__$1 = state_28198;
var statearr_28258_28313 = state_28198__$1;
(statearr_28258_28313[(2)] = null);

(statearr_28258_28313[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (10))){
var inst_28098 = (state_28198[(26)]);
var inst_28100 = cljs.core.chunked_seq_QMARK_.call(null,inst_28098);
var state_28198__$1 = state_28198;
if(inst_28100){
var statearr_28259_28314 = state_28198__$1;
(statearr_28259_28314[(1)] = (13));

} else {
var statearr_28260_28315 = state_28198__$1;
(statearr_28260_28315[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (18))){
var inst_28131 = (state_28198[(14)]);
var inst_28130 = (state_28198[(15)]);
var inst_28130__$1 = (state_28198[(2)]);
var inst_28131__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_28130__$1);
var inst_28132 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28131__$1);
var state_28198__$1 = (function (){var statearr_28261 = state_28198;
(statearr_28261[(14)] = inst_28131__$1);

(statearr_28261[(15)] = inst_28130__$1);

return statearr_28261;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28198__$1,(19),inst_28132);
} else {
if((state_val_28199 === (37))){
var inst_28193 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
var statearr_28262_28316 = state_28198__$1;
(statearr_28262_28316[(2)] = inst_28193);

(statearr_28262_28316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (8))){
var inst_28085 = (state_28198[(8)]);
var inst_28098 = (state_28198[(26)]);
var inst_28098__$1 = cljs.core.seq.call(null,inst_28085);
var state_28198__$1 = (function (){var statearr_28263 = state_28198;
(statearr_28263[(26)] = inst_28098__$1);

return statearr_28263;
})();
if(inst_28098__$1){
var statearr_28264_28317 = state_28198__$1;
(statearr_28264_28317[(1)] = (10));

} else {
var statearr_28265_28318 = state_28198__$1;
(statearr_28265_28318[(1)] = (11));

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
});})(c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files))
;
return ((function (switch__21283__auto__,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____0 = (function (){
var statearr_28269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28269[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__);

(statearr_28269[(1)] = (1));

return statearr_28269;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____1 = (function (state_28198){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28270){if((e28270 instanceof Object)){
var ex__21287__auto__ = e28270;
var statearr_28271_28319 = state_28198;
(statearr_28271_28319[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28320 = state_28198;
state_28198 = G__28320;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__ = function(state_28198){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____1.call(this,state_28198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files))
})();
var state__21306__auto__ = (function (){var statearr_28272 = f__21305__auto__.call(null);
(statearr_28272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_28272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__,map__28073,map__28073__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28074,map__28074__$1,msg,files))
);

return c__21304__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28323,link){
var map__28325 = p__28323;
var map__28325__$1 = ((cljs.core.seq_QMARK_.call(null,map__28325))?cljs.core.apply.call(null,cljs.core.hash_map,map__28325):map__28325);
var file = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__28325,map__28325__$1,file){
return (function (p1__28321_SHARP_,p2__28322_SHARP_){
if(cljs.core._EQ_.call(null,p1__28321_SHARP_,p2__28322_SHARP_)){
return p1__28321_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__28325,map__28325__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28329){
var map__28330 = p__28329;
var map__28330__$1 = ((cljs.core.seq_QMARK_.call(null,map__28330))?cljs.core.apply.call(null,cljs.core.hash_map,map__28330):map__28330);
var current_url_length = cljs.core.get.call(null,map__28330__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__28330__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28326_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28326_SHARP_);
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
var G__28332 = arguments.length;
switch (G__28332) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28334){
var map__28336 = p__28334;
var map__28336__$1 = ((cljs.core.seq_QMARK_.call(null,map__28336))?cljs.core.apply.call(null,cljs.core.hash_map,map__28336):map__28336);
var f_data = map__28336__$1;
var request_url = cljs.core.get.call(null,map__28336__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__28336__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28337,files_msg){
var map__28359 = p__28337;
var map__28359__$1 = ((cljs.core.seq_QMARK_.call(null,map__28359))?cljs.core.apply.call(null,cljs.core.hash_map,map__28359):map__28359);
var opts = map__28359__$1;
var on_cssload = cljs.core.get.call(null,map__28359__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28360_28380 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28361_28381 = null;
var count__28362_28382 = (0);
var i__28363_28383 = (0);
while(true){
if((i__28363_28383 < count__28362_28382)){
var f_28384 = cljs.core._nth.call(null,chunk__28361_28381,i__28363_28383);
figwheel.client.file_reloading.reload_css_file.call(null,f_28384);

var G__28385 = seq__28360_28380;
var G__28386 = chunk__28361_28381;
var G__28387 = count__28362_28382;
var G__28388 = (i__28363_28383 + (1));
seq__28360_28380 = G__28385;
chunk__28361_28381 = G__28386;
count__28362_28382 = G__28387;
i__28363_28383 = G__28388;
continue;
} else {
var temp__4126__auto___28389 = cljs.core.seq.call(null,seq__28360_28380);
if(temp__4126__auto___28389){
var seq__28360_28390__$1 = temp__4126__auto___28389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28360_28390__$1)){
var c__18898__auto___28391 = cljs.core.chunk_first.call(null,seq__28360_28390__$1);
var G__28392 = cljs.core.chunk_rest.call(null,seq__28360_28390__$1);
var G__28393 = c__18898__auto___28391;
var G__28394 = cljs.core.count.call(null,c__18898__auto___28391);
var G__28395 = (0);
seq__28360_28380 = G__28392;
chunk__28361_28381 = G__28393;
count__28362_28382 = G__28394;
i__28363_28383 = G__28395;
continue;
} else {
var f_28396 = cljs.core.first.call(null,seq__28360_28390__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28396);

var G__28397 = cljs.core.next.call(null,seq__28360_28390__$1);
var G__28398 = null;
var G__28399 = (0);
var G__28400 = (0);
seq__28360_28380 = G__28397;
chunk__28361_28381 = G__28398;
count__28362_28382 = G__28399;
i__28363_28383 = G__28400;
continue;
}
} else {
}
}
break;
}

var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__,map__28359,map__28359__$1,opts,on_cssload){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto__,map__28359,map__28359__$1,opts,on_cssload){
return (function (state_28370){
var state_val_28371 = (state_28370[(1)]);
if((state_val_28371 === (2))){
var inst_28366 = (state_28370[(2)]);
var inst_28367 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_28368 = on_cssload.call(null,inst_28367);
var state_28370__$1 = (function (){var statearr_28372 = state_28370;
(statearr_28372[(7)] = inst_28366);

return statearr_28372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28370__$1,inst_28368);
} else {
if((state_val_28371 === (1))){
var inst_28364 = cljs.core.async.timeout.call(null,(100));
var state_28370__$1 = state_28370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28370__$1,(2),inst_28364);
} else {
return null;
}
}
});})(c__21304__auto__,map__28359,map__28359__$1,opts,on_cssload))
;
return ((function (switch__21283__auto__,c__21304__auto__,map__28359,map__28359__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____0 = (function (){
var statearr_28376 = [null,null,null,null,null,null,null,null];
(statearr_28376[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__);

(statearr_28376[(1)] = (1));

return statearr_28376;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____1 = (function (state_28370){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28377){if((e28377 instanceof Object)){
var ex__21287__auto__ = e28377;
var statearr_28378_28401 = state_28370;
(statearr_28378_28401[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28402 = state_28370;
state_28370 = G__28402;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__ = function(state_28370){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____1.call(this,state_28370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto__,map__28359,map__28359__$1,opts,on_cssload))
})();
var state__21306__auto__ = (function (){var statearr_28379 = f__21305__auto__.call(null);
(statearr_28379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_28379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__,map__28359,map__28359__$1,opts,on_cssload))
);

return c__21304__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map