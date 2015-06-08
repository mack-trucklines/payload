// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t27054 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27054 = (function (f,fn_handler,meta27055){
this.f = f;
this.fn_handler = fn_handler;
this.meta27055 = meta27055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27054.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27056){
var self__ = this;
var _27056__$1 = this;
return self__.meta27055;
});

cljs.core.async.t27054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27056,meta27055__$1){
var self__ = this;
var _27056__$1 = this;
return (new cljs.core.async.t27054(self__.f,self__.fn_handler,meta27055__$1));
});

cljs.core.async.t27054.cljs$lang$type = true;

cljs.core.async.t27054.cljs$lang$ctorStr = "cljs.core.async/t27054";

cljs.core.async.t27054.cljs$lang$ctorPrWriter = (function (this__18692__auto__,writer__18693__auto__,opt__18694__auto__){
return cljs.core._write.call(null,writer__18693__auto__,"cljs.core.async/t27054");
});

cljs.core.async.__GT_t27054 = (function cljs$core$async$fn_handler_$___GT_t27054(f__$1,fn_handler__$1,meta27055){
return (new cljs.core.async.t27054(f__$1,fn_handler__$1,meta27055));
});

}

return (new cljs.core.async.t27054(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__27058 = buff;
if(G__27058){
var bit__18787__auto__ = null;
if(cljs.core.truth_((function (){var or__18113__auto__ = bit__18787__auto__;
if(cljs.core.truth_(or__18113__auto__)){
return or__18113__auto__;
} else {
return G__27058.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27058.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27058);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27058);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__27060 = arguments.length;
switch (G__27060) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__27063 = arguments.length;
switch (G__27063) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27065 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27065);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27065,ret){
return (function (){
return fn1.call(null,val_27065);
});})(val_27065,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__27067 = arguments.length;
switch (G__27067) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18998__auto___27069 = n;
var x_27070 = (0);
while(true){
if((x_27070 < n__18998__auto___27069)){
(a[x_27070] = (0));

var G__27071 = (x_27070 + (1));
x_27070 = G__27071;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27072 = (i + (1));
i = G__27072;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27076 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27076 = (function (flag,alt_flag,meta27077){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27077 = meta27077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27076.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27078){
var self__ = this;
var _27078__$1 = this;
return self__.meta27077;
});})(flag))
;

cljs.core.async.t27076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27078,meta27077__$1){
var self__ = this;
var _27078__$1 = this;
return (new cljs.core.async.t27076(self__.flag,self__.alt_flag,meta27077__$1));
});})(flag))
;

cljs.core.async.t27076.cljs$lang$type = true;

cljs.core.async.t27076.cljs$lang$ctorStr = "cljs.core.async/t27076";

cljs.core.async.t27076.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18692__auto__,writer__18693__auto__,opt__18694__auto__){
return cljs.core._write.call(null,writer__18693__auto__,"cljs.core.async/t27076");
});})(flag))
;

cljs.core.async.__GT_t27076 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t27076(flag__$1,alt_flag__$1,meta27077){
return (new cljs.core.async.t27076(flag__$1,alt_flag__$1,meta27077));
});})(flag))
;

}

return (new cljs.core.async.t27076(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t27082 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27082 = (function (cb,flag,alt_handler,meta27083){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27083 = meta27083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27082.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27084){
var self__ = this;
var _27084__$1 = this;
return self__.meta27083;
});

cljs.core.async.t27082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27084,meta27083__$1){
var self__ = this;
var _27084__$1 = this;
return (new cljs.core.async.t27082(self__.cb,self__.flag,self__.alt_handler,meta27083__$1));
});

cljs.core.async.t27082.cljs$lang$type = true;

cljs.core.async.t27082.cljs$lang$ctorStr = "cljs.core.async/t27082";

cljs.core.async.t27082.cljs$lang$ctorPrWriter = (function (this__18692__auto__,writer__18693__auto__,opt__18694__auto__){
return cljs.core._write.call(null,writer__18693__auto__,"cljs.core.async/t27082");
});

cljs.core.async.__GT_t27082 = (function cljs$core$async$alt_handler_$___GT_t27082(cb__$1,flag__$1,alt_handler__$1,meta27083){
return (new cljs.core.async.t27082(cb__$1,flag__$1,alt_handler__$1,meta27083));
});

}

return (new cljs.core.async.t27082(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27085_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27085_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27086_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27086_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18113__auto__ = wport;
if(cljs.core.truth_(or__18113__auto__)){
return or__18113__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27087 = (i + (1));
i = G__27087;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18113__auto__ = ret;
if(cljs.core.truth_(or__18113__auto__)){
return or__18113__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18101__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18101__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18101__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19153__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19153__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27090){
var map__27091 = p__27090;
var map__27091__$1 = ((cljs.core.seq_QMARK_.call(null,map__27091))?cljs.core.apply.call(null,cljs.core.hash_map,map__27091):map__27091);
var opts = map__27091__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27088){
var G__27089 = cljs.core.first.call(null,seq27088);
var seq27088__$1 = cljs.core.next.call(null,seq27088);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27089,seq27088__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__27093 = arguments.length;
switch (G__27093) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21665__auto___27142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___27142){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___27142){
return (function (state_27117){
var state_val_27118 = (state_27117[(1)]);
if((state_val_27118 === (7))){
var inst_27113 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
var statearr_27119_27143 = state_27117__$1;
(statearr_27119_27143[(2)] = inst_27113);

(statearr_27119_27143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (1))){
var state_27117__$1 = state_27117;
var statearr_27120_27144 = state_27117__$1;
(statearr_27120_27144[(2)] = null);

(statearr_27120_27144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (4))){
var inst_27096 = (state_27117[(7)]);
var inst_27096__$1 = (state_27117[(2)]);
var inst_27097 = (inst_27096__$1 == null);
var state_27117__$1 = (function (){var statearr_27121 = state_27117;
(statearr_27121[(7)] = inst_27096__$1);

return statearr_27121;
})();
if(cljs.core.truth_(inst_27097)){
var statearr_27122_27145 = state_27117__$1;
(statearr_27122_27145[(1)] = (5));

} else {
var statearr_27123_27146 = state_27117__$1;
(statearr_27123_27146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (13))){
var state_27117__$1 = state_27117;
var statearr_27124_27147 = state_27117__$1;
(statearr_27124_27147[(2)] = null);

(statearr_27124_27147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (6))){
var inst_27096 = (state_27117[(7)]);
var state_27117__$1 = state_27117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27117__$1,(11),to,inst_27096);
} else {
if((state_val_27118 === (3))){
var inst_27115 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27117__$1,inst_27115);
} else {
if((state_val_27118 === (12))){
var state_27117__$1 = state_27117;
var statearr_27125_27148 = state_27117__$1;
(statearr_27125_27148[(2)] = null);

(statearr_27125_27148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (2))){
var state_27117__$1 = state_27117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27117__$1,(4),from);
} else {
if((state_val_27118 === (11))){
var inst_27106 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
if(cljs.core.truth_(inst_27106)){
var statearr_27126_27149 = state_27117__$1;
(statearr_27126_27149[(1)] = (12));

} else {
var statearr_27127_27150 = state_27117__$1;
(statearr_27127_27150[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (9))){
var state_27117__$1 = state_27117;
var statearr_27128_27151 = state_27117__$1;
(statearr_27128_27151[(2)] = null);

(statearr_27128_27151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (5))){
var state_27117__$1 = state_27117;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27129_27152 = state_27117__$1;
(statearr_27129_27152[(1)] = (8));

} else {
var statearr_27130_27153 = state_27117__$1;
(statearr_27130_27153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (14))){
var inst_27111 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
var statearr_27131_27154 = state_27117__$1;
(statearr_27131_27154[(2)] = inst_27111);

(statearr_27131_27154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (10))){
var inst_27103 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
var statearr_27132_27155 = state_27117__$1;
(statearr_27132_27155[(2)] = inst_27103);

(statearr_27132_27155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (8))){
var inst_27100 = cljs.core.async.close_BANG_.call(null,to);
var state_27117__$1 = state_27117;
var statearr_27133_27156 = state_27117__$1;
(statearr_27133_27156[(2)] = inst_27100);

(statearr_27133_27156[(1)] = (10));


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
});})(c__21665__auto___27142))
;
return ((function (switch__21603__auto__,c__21665__auto___27142){
return (function() {
var cljs$core$async$state_machine__21604__auto__ = null;
var cljs$core$async$state_machine__21604__auto____0 = (function (){
var statearr_27137 = [null,null,null,null,null,null,null,null];
(statearr_27137[(0)] = cljs$core$async$state_machine__21604__auto__);

(statearr_27137[(1)] = (1));

return statearr_27137;
});
var cljs$core$async$state_machine__21604__auto____1 = (function (state_27117){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_27117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e27138){if((e27138 instanceof Object)){
var ex__21607__auto__ = e27138;
var statearr_27139_27157 = state_27117;
(statearr_27139_27157[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27158 = state_27117;
state_27117 = G__27158;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$state_machine__21604__auto__ = function(state_27117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21604__auto____1.call(this,state_27117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21604__auto____0;
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21604__auto____1;
return cljs$core$async$state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___27142))
})();
var state__21667__auto__ = (function (){var statearr_27140 = f__21666__auto__.call(null);
(statearr_27140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___27142);

return statearr_27140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___27142))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27342){
var vec__27343 = p__27342;
var v = cljs.core.nth.call(null,vec__27343,(0),null);
var p = cljs.core.nth.call(null,vec__27343,(1),null);
var job = vec__27343;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21665__auto___27525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___27525,res,vec__27343,v,p,job,jobs,results){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___27525,res,vec__27343,v,p,job,jobs,results){
return (function (state_27348){
var state_val_27349 = (state_27348[(1)]);
if((state_val_27349 === (2))){
var inst_27345 = (state_27348[(2)]);
var inst_27346 = cljs.core.async.close_BANG_.call(null,res);
var state_27348__$1 = (function (){var statearr_27350 = state_27348;
(statearr_27350[(7)] = inst_27345);

return statearr_27350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27348__$1,inst_27346);
} else {
if((state_val_27349 === (1))){
var state_27348__$1 = state_27348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27348__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21665__auto___27525,res,vec__27343,v,p,job,jobs,results))
;
return ((function (switch__21603__auto__,c__21665__auto___27525,res,vec__27343,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____0 = (function (){
var statearr_27354 = [null,null,null,null,null,null,null,null];
(statearr_27354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__);

(statearr_27354[(1)] = (1));

return statearr_27354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____1 = (function (state_27348){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_27348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e27355){if((e27355 instanceof Object)){
var ex__21607__auto__ = e27355;
var statearr_27356_27526 = state_27348;
(statearr_27356_27526[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27527 = state_27348;
state_27348 = G__27527;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__ = function(state_27348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____1.call(this,state_27348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___27525,res,vec__27343,v,p,job,jobs,results))
})();
var state__21667__auto__ = (function (){var statearr_27357 = f__21666__auto__.call(null);
(statearr_27357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___27525);

return statearr_27357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___27525,res,vec__27343,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27358){
var vec__27359 = p__27358;
var v = cljs.core.nth.call(null,vec__27359,(0),null);
var p = cljs.core.nth.call(null,vec__27359,(1),null);
var job = vec__27359;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18998__auto___27528 = n;
var __27529 = (0);
while(true){
if((__27529 < n__18998__auto___27528)){
var G__27360_27530 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27360_27530) {
case "async":
var c__21665__auto___27532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27529,c__21665__auto___27532,G__27360_27530,n__18998__auto___27528,jobs,results,process,async){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (__27529,c__21665__auto___27532,G__27360_27530,n__18998__auto___27528,jobs,results,process,async){
return (function (state_27373){
var state_val_27374 = (state_27373[(1)]);
if((state_val_27374 === (7))){
var inst_27369 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27375_27533 = state_27373__$1;
(statearr_27375_27533[(2)] = inst_27369);

(statearr_27375_27533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (6))){
var state_27373__$1 = state_27373;
var statearr_27376_27534 = state_27373__$1;
(statearr_27376_27534[(2)] = null);

(statearr_27376_27534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (5))){
var state_27373__$1 = state_27373;
var statearr_27377_27535 = state_27373__$1;
(statearr_27377_27535[(2)] = null);

(statearr_27377_27535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (4))){
var inst_27363 = (state_27373[(2)]);
var inst_27364 = async.call(null,inst_27363);
var state_27373__$1 = state_27373;
if(cljs.core.truth_(inst_27364)){
var statearr_27378_27536 = state_27373__$1;
(statearr_27378_27536[(1)] = (5));

} else {
var statearr_27379_27537 = state_27373__$1;
(statearr_27379_27537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (3))){
var inst_27371 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27373__$1,inst_27371);
} else {
if((state_val_27374 === (2))){
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27373__$1,(4),jobs);
} else {
if((state_val_27374 === (1))){
var state_27373__$1 = state_27373;
var statearr_27380_27538 = state_27373__$1;
(statearr_27380_27538[(2)] = null);

(statearr_27380_27538[(1)] = (2));


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
});})(__27529,c__21665__auto___27532,G__27360_27530,n__18998__auto___27528,jobs,results,process,async))
;
return ((function (__27529,switch__21603__auto__,c__21665__auto___27532,G__27360_27530,n__18998__auto___27528,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____0 = (function (){
var statearr_27384 = [null,null,null,null,null,null,null];
(statearr_27384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__);

(statearr_27384[(1)] = (1));

return statearr_27384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____1 = (function (state_27373){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_27373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e27385){if((e27385 instanceof Object)){
var ex__21607__auto__ = e27385;
var statearr_27386_27539 = state_27373;
(statearr_27386_27539[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27540 = state_27373;
state_27373 = G__27540;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__ = function(state_27373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____1.call(this,state_27373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__;
})()
;})(__27529,switch__21603__auto__,c__21665__auto___27532,G__27360_27530,n__18998__auto___27528,jobs,results,process,async))
})();
var state__21667__auto__ = (function (){var statearr_27387 = f__21666__auto__.call(null);
(statearr_27387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___27532);

return statearr_27387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(__27529,c__21665__auto___27532,G__27360_27530,n__18998__auto___27528,jobs,results,process,async))
);


break;
case "compute":
var c__21665__auto___27541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27529,c__21665__auto___27541,G__27360_27530,n__18998__auto___27528,jobs,results,process,async){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (__27529,c__21665__auto___27541,G__27360_27530,n__18998__auto___27528,jobs,results,process,async){
return (function (state_27400){
var state_val_27401 = (state_27400[(1)]);
if((state_val_27401 === (7))){
var inst_27396 = (state_27400[(2)]);
var state_27400__$1 = state_27400;
var statearr_27402_27542 = state_27400__$1;
(statearr_27402_27542[(2)] = inst_27396);

(statearr_27402_27542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (6))){
var state_27400__$1 = state_27400;
var statearr_27403_27543 = state_27400__$1;
(statearr_27403_27543[(2)] = null);

(statearr_27403_27543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (5))){
var state_27400__$1 = state_27400;
var statearr_27404_27544 = state_27400__$1;
(statearr_27404_27544[(2)] = null);

(statearr_27404_27544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (4))){
var inst_27390 = (state_27400[(2)]);
var inst_27391 = process.call(null,inst_27390);
var state_27400__$1 = state_27400;
if(cljs.core.truth_(inst_27391)){
var statearr_27405_27545 = state_27400__$1;
(statearr_27405_27545[(1)] = (5));

} else {
var statearr_27406_27546 = state_27400__$1;
(statearr_27406_27546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (3))){
var inst_27398 = (state_27400[(2)]);
var state_27400__$1 = state_27400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27400__$1,inst_27398);
} else {
if((state_val_27401 === (2))){
var state_27400__$1 = state_27400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27400__$1,(4),jobs);
} else {
if((state_val_27401 === (1))){
var state_27400__$1 = state_27400;
var statearr_27407_27547 = state_27400__$1;
(statearr_27407_27547[(2)] = null);

(statearr_27407_27547[(1)] = (2));


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
});})(__27529,c__21665__auto___27541,G__27360_27530,n__18998__auto___27528,jobs,results,process,async))
;
return ((function (__27529,switch__21603__auto__,c__21665__auto___27541,G__27360_27530,n__18998__auto___27528,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____0 = (function (){
var statearr_27411 = [null,null,null,null,null,null,null];
(statearr_27411[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__);

(statearr_27411[(1)] = (1));

return statearr_27411;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____1 = (function (state_27400){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_27400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e27412){if((e27412 instanceof Object)){
var ex__21607__auto__ = e27412;
var statearr_27413_27548 = state_27400;
(statearr_27413_27548[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27549 = state_27400;
state_27400 = G__27549;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__ = function(state_27400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____1.call(this,state_27400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__;
})()
;})(__27529,switch__21603__auto__,c__21665__auto___27541,G__27360_27530,n__18998__auto___27528,jobs,results,process,async))
})();
var state__21667__auto__ = (function (){var statearr_27414 = f__21666__auto__.call(null);
(statearr_27414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___27541);

return statearr_27414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(__27529,c__21665__auto___27541,G__27360_27530,n__18998__auto___27528,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27550 = (__27529 + (1));
__27529 = G__27550;
continue;
} else {
}
break;
}

var c__21665__auto___27551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___27551,jobs,results,process,async){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___27551,jobs,results,process,async){
return (function (state_27436){
var state_val_27437 = (state_27436[(1)]);
if((state_val_27437 === (9))){
var inst_27429 = (state_27436[(2)]);
var state_27436__$1 = (function (){var statearr_27438 = state_27436;
(statearr_27438[(7)] = inst_27429);

return statearr_27438;
})();
var statearr_27439_27552 = state_27436__$1;
(statearr_27439_27552[(2)] = null);

(statearr_27439_27552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (8))){
var inst_27422 = (state_27436[(8)]);
var inst_27427 = (state_27436[(2)]);
var state_27436__$1 = (function (){var statearr_27440 = state_27436;
(statearr_27440[(9)] = inst_27427);

return statearr_27440;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27436__$1,(9),results,inst_27422);
} else {
if((state_val_27437 === (7))){
var inst_27432 = (state_27436[(2)]);
var state_27436__$1 = state_27436;
var statearr_27441_27553 = state_27436__$1;
(statearr_27441_27553[(2)] = inst_27432);

(statearr_27441_27553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (6))){
var inst_27422 = (state_27436[(8)]);
var inst_27417 = (state_27436[(10)]);
var inst_27422__$1 = cljs.core.async.chan.call(null,(1));
var inst_27423 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27424 = [inst_27417,inst_27422__$1];
var inst_27425 = (new cljs.core.PersistentVector(null,2,(5),inst_27423,inst_27424,null));
var state_27436__$1 = (function (){var statearr_27442 = state_27436;
(statearr_27442[(8)] = inst_27422__$1);

return statearr_27442;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27436__$1,(8),jobs,inst_27425);
} else {
if((state_val_27437 === (5))){
var inst_27420 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27436__$1 = state_27436;
var statearr_27443_27554 = state_27436__$1;
(statearr_27443_27554[(2)] = inst_27420);

(statearr_27443_27554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (4))){
var inst_27417 = (state_27436[(10)]);
var inst_27417__$1 = (state_27436[(2)]);
var inst_27418 = (inst_27417__$1 == null);
var state_27436__$1 = (function (){var statearr_27444 = state_27436;
(statearr_27444[(10)] = inst_27417__$1);

return statearr_27444;
})();
if(cljs.core.truth_(inst_27418)){
var statearr_27445_27555 = state_27436__$1;
(statearr_27445_27555[(1)] = (5));

} else {
var statearr_27446_27556 = state_27436__$1;
(statearr_27446_27556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (3))){
var inst_27434 = (state_27436[(2)]);
var state_27436__$1 = state_27436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27436__$1,inst_27434);
} else {
if((state_val_27437 === (2))){
var state_27436__$1 = state_27436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27436__$1,(4),from);
} else {
if((state_val_27437 === (1))){
var state_27436__$1 = state_27436;
var statearr_27447_27557 = state_27436__$1;
(statearr_27447_27557[(2)] = null);

(statearr_27447_27557[(1)] = (2));


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
});})(c__21665__auto___27551,jobs,results,process,async))
;
return ((function (switch__21603__auto__,c__21665__auto___27551,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____0 = (function (){
var statearr_27451 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27451[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__);

(statearr_27451[(1)] = (1));

return statearr_27451;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____1 = (function (state_27436){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_27436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e27452){if((e27452 instanceof Object)){
var ex__21607__auto__ = e27452;
var statearr_27453_27558 = state_27436;
(statearr_27453_27558[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27559 = state_27436;
state_27436 = G__27559;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__ = function(state_27436){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____1.call(this,state_27436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___27551,jobs,results,process,async))
})();
var state__21667__auto__ = (function (){var statearr_27454 = f__21666__auto__.call(null);
(statearr_27454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___27551);

return statearr_27454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___27551,jobs,results,process,async))
);


var c__21665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto__,jobs,results,process,async){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto__,jobs,results,process,async){
return (function (state_27492){
var state_val_27493 = (state_27492[(1)]);
if((state_val_27493 === (7))){
var inst_27488 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27494_27560 = state_27492__$1;
(statearr_27494_27560[(2)] = inst_27488);

(statearr_27494_27560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (20))){
var state_27492__$1 = state_27492;
var statearr_27495_27561 = state_27492__$1;
(statearr_27495_27561[(2)] = null);

(statearr_27495_27561[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (1))){
var state_27492__$1 = state_27492;
var statearr_27496_27562 = state_27492__$1;
(statearr_27496_27562[(2)] = null);

(statearr_27496_27562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (4))){
var inst_27457 = (state_27492[(7)]);
var inst_27457__$1 = (state_27492[(2)]);
var inst_27458 = (inst_27457__$1 == null);
var state_27492__$1 = (function (){var statearr_27497 = state_27492;
(statearr_27497[(7)] = inst_27457__$1);

return statearr_27497;
})();
if(cljs.core.truth_(inst_27458)){
var statearr_27498_27563 = state_27492__$1;
(statearr_27498_27563[(1)] = (5));

} else {
var statearr_27499_27564 = state_27492__$1;
(statearr_27499_27564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (15))){
var inst_27470 = (state_27492[(8)]);
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27492__$1,(18),to,inst_27470);
} else {
if((state_val_27493 === (21))){
var inst_27483 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27500_27565 = state_27492__$1;
(statearr_27500_27565[(2)] = inst_27483);

(statearr_27500_27565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (13))){
var inst_27485 = (state_27492[(2)]);
var state_27492__$1 = (function (){var statearr_27501 = state_27492;
(statearr_27501[(9)] = inst_27485);

return statearr_27501;
})();
var statearr_27502_27566 = state_27492__$1;
(statearr_27502_27566[(2)] = null);

(statearr_27502_27566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (6))){
var inst_27457 = (state_27492[(7)]);
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27492__$1,(11),inst_27457);
} else {
if((state_val_27493 === (17))){
var inst_27478 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
if(cljs.core.truth_(inst_27478)){
var statearr_27503_27567 = state_27492__$1;
(statearr_27503_27567[(1)] = (19));

} else {
var statearr_27504_27568 = state_27492__$1;
(statearr_27504_27568[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (3))){
var inst_27490 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27492__$1,inst_27490);
} else {
if((state_val_27493 === (12))){
var inst_27467 = (state_27492[(10)]);
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27492__$1,(14),inst_27467);
} else {
if((state_val_27493 === (2))){
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27492__$1,(4),results);
} else {
if((state_val_27493 === (19))){
var state_27492__$1 = state_27492;
var statearr_27505_27569 = state_27492__$1;
(statearr_27505_27569[(2)] = null);

(statearr_27505_27569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (11))){
var inst_27467 = (state_27492[(2)]);
var state_27492__$1 = (function (){var statearr_27506 = state_27492;
(statearr_27506[(10)] = inst_27467);

return statearr_27506;
})();
var statearr_27507_27570 = state_27492__$1;
(statearr_27507_27570[(2)] = null);

(statearr_27507_27570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (9))){
var state_27492__$1 = state_27492;
var statearr_27508_27571 = state_27492__$1;
(statearr_27508_27571[(2)] = null);

(statearr_27508_27571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (5))){
var state_27492__$1 = state_27492;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27509_27572 = state_27492__$1;
(statearr_27509_27572[(1)] = (8));

} else {
var statearr_27510_27573 = state_27492__$1;
(statearr_27510_27573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (14))){
var inst_27470 = (state_27492[(8)]);
var inst_27472 = (state_27492[(11)]);
var inst_27470__$1 = (state_27492[(2)]);
var inst_27471 = (inst_27470__$1 == null);
var inst_27472__$1 = cljs.core.not.call(null,inst_27471);
var state_27492__$1 = (function (){var statearr_27511 = state_27492;
(statearr_27511[(8)] = inst_27470__$1);

(statearr_27511[(11)] = inst_27472__$1);

return statearr_27511;
})();
if(inst_27472__$1){
var statearr_27512_27574 = state_27492__$1;
(statearr_27512_27574[(1)] = (15));

} else {
var statearr_27513_27575 = state_27492__$1;
(statearr_27513_27575[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (16))){
var inst_27472 = (state_27492[(11)]);
var state_27492__$1 = state_27492;
var statearr_27514_27576 = state_27492__$1;
(statearr_27514_27576[(2)] = inst_27472);

(statearr_27514_27576[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (10))){
var inst_27464 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27515_27577 = state_27492__$1;
(statearr_27515_27577[(2)] = inst_27464);

(statearr_27515_27577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (18))){
var inst_27475 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27516_27578 = state_27492__$1;
(statearr_27516_27578[(2)] = inst_27475);

(statearr_27516_27578[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (8))){
var inst_27461 = cljs.core.async.close_BANG_.call(null,to);
var state_27492__$1 = state_27492;
var statearr_27517_27579 = state_27492__$1;
(statearr_27517_27579[(2)] = inst_27461);

(statearr_27517_27579[(1)] = (10));


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
});})(c__21665__auto__,jobs,results,process,async))
;
return ((function (switch__21603__auto__,c__21665__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____0 = (function (){
var statearr_27521 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__);

(statearr_27521[(1)] = (1));

return statearr_27521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____1 = (function (state_27492){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_27492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e27522){if((e27522 instanceof Object)){
var ex__21607__auto__ = e27522;
var statearr_27523_27580 = state_27492;
(statearr_27523_27580[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27581 = state_27492;
state_27492 = G__27581;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__ = function(state_27492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____1.call(this,state_27492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21604__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto__,jobs,results,process,async))
})();
var state__21667__auto__ = (function (){var statearr_27524 = f__21666__auto__.call(null);
(statearr_27524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto__);

return statearr_27524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto__,jobs,results,process,async))
);

return c__21665__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__27583 = arguments.length;
switch (G__27583) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__27586 = arguments.length;
switch (G__27586) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__27589 = arguments.length;
switch (G__27589) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21665__auto___27641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___27641,tc,fc){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___27641,tc,fc){
return (function (state_27615){
var state_val_27616 = (state_27615[(1)]);
if((state_val_27616 === (7))){
var inst_27611 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
var statearr_27617_27642 = state_27615__$1;
(statearr_27617_27642[(2)] = inst_27611);

(statearr_27617_27642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (1))){
var state_27615__$1 = state_27615;
var statearr_27618_27643 = state_27615__$1;
(statearr_27618_27643[(2)] = null);

(statearr_27618_27643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (4))){
var inst_27592 = (state_27615[(7)]);
var inst_27592__$1 = (state_27615[(2)]);
var inst_27593 = (inst_27592__$1 == null);
var state_27615__$1 = (function (){var statearr_27619 = state_27615;
(statearr_27619[(7)] = inst_27592__$1);

return statearr_27619;
})();
if(cljs.core.truth_(inst_27593)){
var statearr_27620_27644 = state_27615__$1;
(statearr_27620_27644[(1)] = (5));

} else {
var statearr_27621_27645 = state_27615__$1;
(statearr_27621_27645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (13))){
var state_27615__$1 = state_27615;
var statearr_27622_27646 = state_27615__$1;
(statearr_27622_27646[(2)] = null);

(statearr_27622_27646[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (6))){
var inst_27592 = (state_27615[(7)]);
var inst_27598 = p.call(null,inst_27592);
var state_27615__$1 = state_27615;
if(cljs.core.truth_(inst_27598)){
var statearr_27623_27647 = state_27615__$1;
(statearr_27623_27647[(1)] = (9));

} else {
var statearr_27624_27648 = state_27615__$1;
(statearr_27624_27648[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (3))){
var inst_27613 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27615__$1,inst_27613);
} else {
if((state_val_27616 === (12))){
var state_27615__$1 = state_27615;
var statearr_27625_27649 = state_27615__$1;
(statearr_27625_27649[(2)] = null);

(statearr_27625_27649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (2))){
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27615__$1,(4),ch);
} else {
if((state_val_27616 === (11))){
var inst_27592 = (state_27615[(7)]);
var inst_27602 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27615__$1,(8),inst_27602,inst_27592);
} else {
if((state_val_27616 === (9))){
var state_27615__$1 = state_27615;
var statearr_27626_27650 = state_27615__$1;
(statearr_27626_27650[(2)] = tc);

(statearr_27626_27650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (5))){
var inst_27595 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27596 = cljs.core.async.close_BANG_.call(null,fc);
var state_27615__$1 = (function (){var statearr_27627 = state_27615;
(statearr_27627[(8)] = inst_27595);

return statearr_27627;
})();
var statearr_27628_27651 = state_27615__$1;
(statearr_27628_27651[(2)] = inst_27596);

(statearr_27628_27651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (14))){
var inst_27609 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
var statearr_27629_27652 = state_27615__$1;
(statearr_27629_27652[(2)] = inst_27609);

(statearr_27629_27652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (10))){
var state_27615__$1 = state_27615;
var statearr_27630_27653 = state_27615__$1;
(statearr_27630_27653[(2)] = fc);

(statearr_27630_27653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (8))){
var inst_27604 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
if(cljs.core.truth_(inst_27604)){
var statearr_27631_27654 = state_27615__$1;
(statearr_27631_27654[(1)] = (12));

} else {
var statearr_27632_27655 = state_27615__$1;
(statearr_27632_27655[(1)] = (13));

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
});})(c__21665__auto___27641,tc,fc))
;
return ((function (switch__21603__auto__,c__21665__auto___27641,tc,fc){
return (function() {
var cljs$core$async$state_machine__21604__auto__ = null;
var cljs$core$async$state_machine__21604__auto____0 = (function (){
var statearr_27636 = [null,null,null,null,null,null,null,null,null];
(statearr_27636[(0)] = cljs$core$async$state_machine__21604__auto__);

(statearr_27636[(1)] = (1));

return statearr_27636;
});
var cljs$core$async$state_machine__21604__auto____1 = (function (state_27615){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_27615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e27637){if((e27637 instanceof Object)){
var ex__21607__auto__ = e27637;
var statearr_27638_27656 = state_27615;
(statearr_27638_27656[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27657 = state_27615;
state_27615 = G__27657;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$state_machine__21604__auto__ = function(state_27615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21604__auto____1.call(this,state_27615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21604__auto____0;
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21604__auto____1;
return cljs$core$async$state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___27641,tc,fc))
})();
var state__21667__auto__ = (function (){var statearr_27639 = f__21666__auto__.call(null);
(statearr_27639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___27641);

return statearr_27639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___27641,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto__){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto__){
return (function (state_27704){
var state_val_27705 = (state_27704[(1)]);
if((state_val_27705 === (7))){
var inst_27700 = (state_27704[(2)]);
var state_27704__$1 = state_27704;
var statearr_27706_27722 = state_27704__$1;
(statearr_27706_27722[(2)] = inst_27700);

(statearr_27706_27722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27705 === (6))){
var inst_27690 = (state_27704[(7)]);
var inst_27693 = (state_27704[(8)]);
var inst_27697 = f.call(null,inst_27690,inst_27693);
var inst_27690__$1 = inst_27697;
var state_27704__$1 = (function (){var statearr_27707 = state_27704;
(statearr_27707[(7)] = inst_27690__$1);

return statearr_27707;
})();
var statearr_27708_27723 = state_27704__$1;
(statearr_27708_27723[(2)] = null);

(statearr_27708_27723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27705 === (5))){
var inst_27690 = (state_27704[(7)]);
var state_27704__$1 = state_27704;
var statearr_27709_27724 = state_27704__$1;
(statearr_27709_27724[(2)] = inst_27690);

(statearr_27709_27724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27705 === (4))){
var inst_27693 = (state_27704[(8)]);
var inst_27693__$1 = (state_27704[(2)]);
var inst_27694 = (inst_27693__$1 == null);
var state_27704__$1 = (function (){var statearr_27710 = state_27704;
(statearr_27710[(8)] = inst_27693__$1);

return statearr_27710;
})();
if(cljs.core.truth_(inst_27694)){
var statearr_27711_27725 = state_27704__$1;
(statearr_27711_27725[(1)] = (5));

} else {
var statearr_27712_27726 = state_27704__$1;
(statearr_27712_27726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27705 === (3))){
var inst_27702 = (state_27704[(2)]);
var state_27704__$1 = state_27704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27704__$1,inst_27702);
} else {
if((state_val_27705 === (2))){
var state_27704__$1 = state_27704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27704__$1,(4),ch);
} else {
if((state_val_27705 === (1))){
var inst_27690 = init;
var state_27704__$1 = (function (){var statearr_27713 = state_27704;
(statearr_27713[(7)] = inst_27690);

return statearr_27713;
})();
var statearr_27714_27727 = state_27704__$1;
(statearr_27714_27727[(2)] = null);

(statearr_27714_27727[(1)] = (2));


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
});})(c__21665__auto__))
;
return ((function (switch__21603__auto__,c__21665__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21604__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21604__auto____0 = (function (){
var statearr_27718 = [null,null,null,null,null,null,null,null,null];
(statearr_27718[(0)] = cljs$core$async$reduce_$_state_machine__21604__auto__);

(statearr_27718[(1)] = (1));

return statearr_27718;
});
var cljs$core$async$reduce_$_state_machine__21604__auto____1 = (function (state_27704){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_27704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e27719){if((e27719 instanceof Object)){
var ex__21607__auto__ = e27719;
var statearr_27720_27728 = state_27704;
(statearr_27720_27728[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27729 = state_27704;
state_27704 = G__27729;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21604__auto__ = function(state_27704){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21604__auto____1.call(this,state_27704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21604__auto____0;
cljs$core$async$reduce_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21604__auto____1;
return cljs$core$async$reduce_$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto__))
})();
var state__21667__auto__ = (function (){var statearr_27721 = f__21666__auto__.call(null);
(statearr_27721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto__);

return statearr_27721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto__))
);

return c__21665__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__27731 = arguments.length;
switch (G__27731) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto__){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto__){
return (function (state_27756){
var state_val_27757 = (state_27756[(1)]);
if((state_val_27757 === (7))){
var inst_27738 = (state_27756[(2)]);
var state_27756__$1 = state_27756;
var statearr_27758_27782 = state_27756__$1;
(statearr_27758_27782[(2)] = inst_27738);

(statearr_27758_27782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (1))){
var inst_27732 = cljs.core.seq.call(null,coll);
var inst_27733 = inst_27732;
var state_27756__$1 = (function (){var statearr_27759 = state_27756;
(statearr_27759[(7)] = inst_27733);

return statearr_27759;
})();
var statearr_27760_27783 = state_27756__$1;
(statearr_27760_27783[(2)] = null);

(statearr_27760_27783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (4))){
var inst_27733 = (state_27756[(7)]);
var inst_27736 = cljs.core.first.call(null,inst_27733);
var state_27756__$1 = state_27756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27756__$1,(7),ch,inst_27736);
} else {
if((state_val_27757 === (13))){
var inst_27750 = (state_27756[(2)]);
var state_27756__$1 = state_27756;
var statearr_27761_27784 = state_27756__$1;
(statearr_27761_27784[(2)] = inst_27750);

(statearr_27761_27784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (6))){
var inst_27741 = (state_27756[(2)]);
var state_27756__$1 = state_27756;
if(cljs.core.truth_(inst_27741)){
var statearr_27762_27785 = state_27756__$1;
(statearr_27762_27785[(1)] = (8));

} else {
var statearr_27763_27786 = state_27756__$1;
(statearr_27763_27786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (3))){
var inst_27754 = (state_27756[(2)]);
var state_27756__$1 = state_27756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27756__$1,inst_27754);
} else {
if((state_val_27757 === (12))){
var state_27756__$1 = state_27756;
var statearr_27764_27787 = state_27756__$1;
(statearr_27764_27787[(2)] = null);

(statearr_27764_27787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (2))){
var inst_27733 = (state_27756[(7)]);
var state_27756__$1 = state_27756;
if(cljs.core.truth_(inst_27733)){
var statearr_27765_27788 = state_27756__$1;
(statearr_27765_27788[(1)] = (4));

} else {
var statearr_27766_27789 = state_27756__$1;
(statearr_27766_27789[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (11))){
var inst_27747 = cljs.core.async.close_BANG_.call(null,ch);
var state_27756__$1 = state_27756;
var statearr_27767_27790 = state_27756__$1;
(statearr_27767_27790[(2)] = inst_27747);

(statearr_27767_27790[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (9))){
var state_27756__$1 = state_27756;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27768_27791 = state_27756__$1;
(statearr_27768_27791[(1)] = (11));

} else {
var statearr_27769_27792 = state_27756__$1;
(statearr_27769_27792[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (5))){
var inst_27733 = (state_27756[(7)]);
var state_27756__$1 = state_27756;
var statearr_27770_27793 = state_27756__$1;
(statearr_27770_27793[(2)] = inst_27733);

(statearr_27770_27793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (10))){
var inst_27752 = (state_27756[(2)]);
var state_27756__$1 = state_27756;
var statearr_27771_27794 = state_27756__$1;
(statearr_27771_27794[(2)] = inst_27752);

(statearr_27771_27794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (8))){
var inst_27733 = (state_27756[(7)]);
var inst_27743 = cljs.core.next.call(null,inst_27733);
var inst_27733__$1 = inst_27743;
var state_27756__$1 = (function (){var statearr_27772 = state_27756;
(statearr_27772[(7)] = inst_27733__$1);

return statearr_27772;
})();
var statearr_27773_27795 = state_27756__$1;
(statearr_27773_27795[(2)] = null);

(statearr_27773_27795[(1)] = (2));


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
});})(c__21665__auto__))
;
return ((function (switch__21603__auto__,c__21665__auto__){
return (function() {
var cljs$core$async$state_machine__21604__auto__ = null;
var cljs$core$async$state_machine__21604__auto____0 = (function (){
var statearr_27777 = [null,null,null,null,null,null,null,null];
(statearr_27777[(0)] = cljs$core$async$state_machine__21604__auto__);

(statearr_27777[(1)] = (1));

return statearr_27777;
});
var cljs$core$async$state_machine__21604__auto____1 = (function (state_27756){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_27756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e27778){if((e27778 instanceof Object)){
var ex__21607__auto__ = e27778;
var statearr_27779_27796 = state_27756;
(statearr_27779_27796[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27797 = state_27756;
state_27756 = G__27797;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$state_machine__21604__auto__ = function(state_27756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21604__auto____1.call(this,state_27756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21604__auto____0;
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21604__auto____1;
return cljs$core$async$state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto__))
})();
var state__21667__auto__ = (function (){var statearr_27780 = f__21666__auto__.call(null);
(statearr_27780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto__);

return statearr_27780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto__))
);

return c__21665__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27799 = {};
return obj27799;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18101__auto__ = _;
if(and__18101__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18101__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18749__auto__ = (((_ == null))?null:_);
return (function (){var or__18113__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18749__auto__)]);
if(or__18113__auto__){
return or__18113__auto__;
} else {
var or__18113__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18113__auto____$1){
return or__18113__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27801 = {};
return obj27801;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18101__auto__ = m;
if(and__18101__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18101__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18749__auto__ = (((m == null))?null:m);
return (function (){var or__18113__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18749__auto__)]);
if(or__18113__auto__){
return or__18113__auto__;
} else {
var or__18113__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18113__auto____$1){
return or__18113__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18101__auto__ = m;
if(and__18101__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18101__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18749__auto__ = (((m == null))?null:m);
return (function (){var or__18113__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18749__auto__)]);
if(or__18113__auto__){
return or__18113__auto__;
} else {
var or__18113__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18113__auto____$1){
return or__18113__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18101__auto__ = m;
if(and__18101__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18101__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18749__auto__ = (((m == null))?null:m);
return (function (){var or__18113__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18749__auto__)]);
if(or__18113__auto__){
return or__18113__auto__;
} else {
var or__18113__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18113__auto____$1){
return or__18113__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t28023 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28023 = (function (cs,ch,mult,meta28024){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28024 = meta28024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28023.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28023.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28023.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28023.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28023.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28023.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28025){
var self__ = this;
var _28025__$1 = this;
return self__.meta28024;
});})(cs))
;

cljs.core.async.t28023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28025,meta28024__$1){
var self__ = this;
var _28025__$1 = this;
return (new cljs.core.async.t28023(self__.cs,self__.ch,self__.mult,meta28024__$1));
});})(cs))
;

cljs.core.async.t28023.cljs$lang$type = true;

cljs.core.async.t28023.cljs$lang$ctorStr = "cljs.core.async/t28023";

cljs.core.async.t28023.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18692__auto__,writer__18693__auto__,opt__18694__auto__){
return cljs.core._write.call(null,writer__18693__auto__,"cljs.core.async/t28023");
});})(cs))
;

cljs.core.async.__GT_t28023 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t28023(cs__$1,ch__$1,mult__$1,meta28024){
return (new cljs.core.async.t28023(cs__$1,ch__$1,mult__$1,meta28024));
});})(cs))
;

}

return (new cljs.core.async.t28023(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21665__auto___28244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___28244,cs,m,dchan,dctr,done){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___28244,cs,m,dchan,dctr,done){
return (function (state_28156){
var state_val_28157 = (state_28156[(1)]);
if((state_val_28157 === (7))){
var inst_28152 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
var statearr_28158_28245 = state_28156__$1;
(statearr_28158_28245[(2)] = inst_28152);

(statearr_28158_28245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (20))){
var inst_28057 = (state_28156[(7)]);
var inst_28067 = cljs.core.first.call(null,inst_28057);
var inst_28068 = cljs.core.nth.call(null,inst_28067,(0),null);
var inst_28069 = cljs.core.nth.call(null,inst_28067,(1),null);
var state_28156__$1 = (function (){var statearr_28159 = state_28156;
(statearr_28159[(8)] = inst_28068);

return statearr_28159;
})();
if(cljs.core.truth_(inst_28069)){
var statearr_28160_28246 = state_28156__$1;
(statearr_28160_28246[(1)] = (22));

} else {
var statearr_28161_28247 = state_28156__$1;
(statearr_28161_28247[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (27))){
var inst_28099 = (state_28156[(9)]);
var inst_28104 = (state_28156[(10)]);
var inst_28028 = (state_28156[(11)]);
var inst_28097 = (state_28156[(12)]);
var inst_28104__$1 = cljs.core._nth.call(null,inst_28097,inst_28099);
var inst_28105 = cljs.core.async.put_BANG_.call(null,inst_28104__$1,inst_28028,done);
var state_28156__$1 = (function (){var statearr_28162 = state_28156;
(statearr_28162[(10)] = inst_28104__$1);

return statearr_28162;
})();
if(cljs.core.truth_(inst_28105)){
var statearr_28163_28248 = state_28156__$1;
(statearr_28163_28248[(1)] = (30));

} else {
var statearr_28164_28249 = state_28156__$1;
(statearr_28164_28249[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (1))){
var state_28156__$1 = state_28156;
var statearr_28165_28250 = state_28156__$1;
(statearr_28165_28250[(2)] = null);

(statearr_28165_28250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (24))){
var inst_28057 = (state_28156[(7)]);
var inst_28074 = (state_28156[(2)]);
var inst_28075 = cljs.core.next.call(null,inst_28057);
var inst_28037 = inst_28075;
var inst_28038 = null;
var inst_28039 = (0);
var inst_28040 = (0);
var state_28156__$1 = (function (){var statearr_28166 = state_28156;
(statearr_28166[(13)] = inst_28038);

(statearr_28166[(14)] = inst_28074);

(statearr_28166[(15)] = inst_28037);

(statearr_28166[(16)] = inst_28040);

(statearr_28166[(17)] = inst_28039);

return statearr_28166;
})();
var statearr_28167_28251 = state_28156__$1;
(statearr_28167_28251[(2)] = null);

(statearr_28167_28251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (39))){
var state_28156__$1 = state_28156;
var statearr_28171_28252 = state_28156__$1;
(statearr_28171_28252[(2)] = null);

(statearr_28171_28252[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (4))){
var inst_28028 = (state_28156[(11)]);
var inst_28028__$1 = (state_28156[(2)]);
var inst_28029 = (inst_28028__$1 == null);
var state_28156__$1 = (function (){var statearr_28172 = state_28156;
(statearr_28172[(11)] = inst_28028__$1);

return statearr_28172;
})();
if(cljs.core.truth_(inst_28029)){
var statearr_28173_28253 = state_28156__$1;
(statearr_28173_28253[(1)] = (5));

} else {
var statearr_28174_28254 = state_28156__$1;
(statearr_28174_28254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (15))){
var inst_28038 = (state_28156[(13)]);
var inst_28037 = (state_28156[(15)]);
var inst_28040 = (state_28156[(16)]);
var inst_28039 = (state_28156[(17)]);
var inst_28053 = (state_28156[(2)]);
var inst_28054 = (inst_28040 + (1));
var tmp28168 = inst_28038;
var tmp28169 = inst_28037;
var tmp28170 = inst_28039;
var inst_28037__$1 = tmp28169;
var inst_28038__$1 = tmp28168;
var inst_28039__$1 = tmp28170;
var inst_28040__$1 = inst_28054;
var state_28156__$1 = (function (){var statearr_28175 = state_28156;
(statearr_28175[(18)] = inst_28053);

(statearr_28175[(13)] = inst_28038__$1);

(statearr_28175[(15)] = inst_28037__$1);

(statearr_28175[(16)] = inst_28040__$1);

(statearr_28175[(17)] = inst_28039__$1);

return statearr_28175;
})();
var statearr_28176_28255 = state_28156__$1;
(statearr_28176_28255[(2)] = null);

(statearr_28176_28255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (21))){
var inst_28078 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
var statearr_28180_28256 = state_28156__$1;
(statearr_28180_28256[(2)] = inst_28078);

(statearr_28180_28256[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (31))){
var inst_28104 = (state_28156[(10)]);
var inst_28108 = done.call(null,null);
var inst_28109 = cljs.core.async.untap_STAR_.call(null,m,inst_28104);
var state_28156__$1 = (function (){var statearr_28181 = state_28156;
(statearr_28181[(19)] = inst_28108);

return statearr_28181;
})();
var statearr_28182_28257 = state_28156__$1;
(statearr_28182_28257[(2)] = inst_28109);

(statearr_28182_28257[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (32))){
var inst_28099 = (state_28156[(9)]);
var inst_28097 = (state_28156[(12)]);
var inst_28098 = (state_28156[(20)]);
var inst_28096 = (state_28156[(21)]);
var inst_28111 = (state_28156[(2)]);
var inst_28112 = (inst_28099 + (1));
var tmp28177 = inst_28097;
var tmp28178 = inst_28098;
var tmp28179 = inst_28096;
var inst_28096__$1 = tmp28179;
var inst_28097__$1 = tmp28177;
var inst_28098__$1 = tmp28178;
var inst_28099__$1 = inst_28112;
var state_28156__$1 = (function (){var statearr_28183 = state_28156;
(statearr_28183[(22)] = inst_28111);

(statearr_28183[(9)] = inst_28099__$1);

(statearr_28183[(12)] = inst_28097__$1);

(statearr_28183[(20)] = inst_28098__$1);

(statearr_28183[(21)] = inst_28096__$1);

return statearr_28183;
})();
var statearr_28184_28258 = state_28156__$1;
(statearr_28184_28258[(2)] = null);

(statearr_28184_28258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (40))){
var inst_28124 = (state_28156[(23)]);
var inst_28128 = done.call(null,null);
var inst_28129 = cljs.core.async.untap_STAR_.call(null,m,inst_28124);
var state_28156__$1 = (function (){var statearr_28185 = state_28156;
(statearr_28185[(24)] = inst_28128);

return statearr_28185;
})();
var statearr_28186_28259 = state_28156__$1;
(statearr_28186_28259[(2)] = inst_28129);

(statearr_28186_28259[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (33))){
var inst_28115 = (state_28156[(25)]);
var inst_28117 = cljs.core.chunked_seq_QMARK_.call(null,inst_28115);
var state_28156__$1 = state_28156;
if(inst_28117){
var statearr_28187_28260 = state_28156__$1;
(statearr_28187_28260[(1)] = (36));

} else {
var statearr_28188_28261 = state_28156__$1;
(statearr_28188_28261[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (13))){
var inst_28047 = (state_28156[(26)]);
var inst_28050 = cljs.core.async.close_BANG_.call(null,inst_28047);
var state_28156__$1 = state_28156;
var statearr_28189_28262 = state_28156__$1;
(statearr_28189_28262[(2)] = inst_28050);

(statearr_28189_28262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (22))){
var inst_28068 = (state_28156[(8)]);
var inst_28071 = cljs.core.async.close_BANG_.call(null,inst_28068);
var state_28156__$1 = state_28156;
var statearr_28190_28263 = state_28156__$1;
(statearr_28190_28263[(2)] = inst_28071);

(statearr_28190_28263[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (36))){
var inst_28115 = (state_28156[(25)]);
var inst_28119 = cljs.core.chunk_first.call(null,inst_28115);
var inst_28120 = cljs.core.chunk_rest.call(null,inst_28115);
var inst_28121 = cljs.core.count.call(null,inst_28119);
var inst_28096 = inst_28120;
var inst_28097 = inst_28119;
var inst_28098 = inst_28121;
var inst_28099 = (0);
var state_28156__$1 = (function (){var statearr_28191 = state_28156;
(statearr_28191[(9)] = inst_28099);

(statearr_28191[(12)] = inst_28097);

(statearr_28191[(20)] = inst_28098);

(statearr_28191[(21)] = inst_28096);

return statearr_28191;
})();
var statearr_28192_28264 = state_28156__$1;
(statearr_28192_28264[(2)] = null);

(statearr_28192_28264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (41))){
var inst_28115 = (state_28156[(25)]);
var inst_28131 = (state_28156[(2)]);
var inst_28132 = cljs.core.next.call(null,inst_28115);
var inst_28096 = inst_28132;
var inst_28097 = null;
var inst_28098 = (0);
var inst_28099 = (0);
var state_28156__$1 = (function (){var statearr_28193 = state_28156;
(statearr_28193[(9)] = inst_28099);

(statearr_28193[(27)] = inst_28131);

(statearr_28193[(12)] = inst_28097);

(statearr_28193[(20)] = inst_28098);

(statearr_28193[(21)] = inst_28096);

return statearr_28193;
})();
var statearr_28194_28265 = state_28156__$1;
(statearr_28194_28265[(2)] = null);

(statearr_28194_28265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (43))){
var state_28156__$1 = state_28156;
var statearr_28195_28266 = state_28156__$1;
(statearr_28195_28266[(2)] = null);

(statearr_28195_28266[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (29))){
var inst_28140 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
var statearr_28196_28267 = state_28156__$1;
(statearr_28196_28267[(2)] = inst_28140);

(statearr_28196_28267[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (44))){
var inst_28149 = (state_28156[(2)]);
var state_28156__$1 = (function (){var statearr_28197 = state_28156;
(statearr_28197[(28)] = inst_28149);

return statearr_28197;
})();
var statearr_28198_28268 = state_28156__$1;
(statearr_28198_28268[(2)] = null);

(statearr_28198_28268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (6))){
var inst_28088 = (state_28156[(29)]);
var inst_28087 = cljs.core.deref.call(null,cs);
var inst_28088__$1 = cljs.core.keys.call(null,inst_28087);
var inst_28089 = cljs.core.count.call(null,inst_28088__$1);
var inst_28090 = cljs.core.reset_BANG_.call(null,dctr,inst_28089);
var inst_28095 = cljs.core.seq.call(null,inst_28088__$1);
var inst_28096 = inst_28095;
var inst_28097 = null;
var inst_28098 = (0);
var inst_28099 = (0);
var state_28156__$1 = (function (){var statearr_28199 = state_28156;
(statearr_28199[(9)] = inst_28099);

(statearr_28199[(30)] = inst_28090);

(statearr_28199[(29)] = inst_28088__$1);

(statearr_28199[(12)] = inst_28097);

(statearr_28199[(20)] = inst_28098);

(statearr_28199[(21)] = inst_28096);

return statearr_28199;
})();
var statearr_28200_28269 = state_28156__$1;
(statearr_28200_28269[(2)] = null);

(statearr_28200_28269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (28))){
var inst_28115 = (state_28156[(25)]);
var inst_28096 = (state_28156[(21)]);
var inst_28115__$1 = cljs.core.seq.call(null,inst_28096);
var state_28156__$1 = (function (){var statearr_28201 = state_28156;
(statearr_28201[(25)] = inst_28115__$1);

return statearr_28201;
})();
if(inst_28115__$1){
var statearr_28202_28270 = state_28156__$1;
(statearr_28202_28270[(1)] = (33));

} else {
var statearr_28203_28271 = state_28156__$1;
(statearr_28203_28271[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (25))){
var inst_28099 = (state_28156[(9)]);
var inst_28098 = (state_28156[(20)]);
var inst_28101 = (inst_28099 < inst_28098);
var inst_28102 = inst_28101;
var state_28156__$1 = state_28156;
if(cljs.core.truth_(inst_28102)){
var statearr_28204_28272 = state_28156__$1;
(statearr_28204_28272[(1)] = (27));

} else {
var statearr_28205_28273 = state_28156__$1;
(statearr_28205_28273[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (34))){
var state_28156__$1 = state_28156;
var statearr_28206_28274 = state_28156__$1;
(statearr_28206_28274[(2)] = null);

(statearr_28206_28274[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (17))){
var state_28156__$1 = state_28156;
var statearr_28207_28275 = state_28156__$1;
(statearr_28207_28275[(2)] = null);

(statearr_28207_28275[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (3))){
var inst_28154 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28156__$1,inst_28154);
} else {
if((state_val_28157 === (12))){
var inst_28083 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
var statearr_28208_28276 = state_28156__$1;
(statearr_28208_28276[(2)] = inst_28083);

(statearr_28208_28276[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (2))){
var state_28156__$1 = state_28156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28156__$1,(4),ch);
} else {
if((state_val_28157 === (23))){
var state_28156__$1 = state_28156;
var statearr_28209_28277 = state_28156__$1;
(statearr_28209_28277[(2)] = null);

(statearr_28209_28277[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (35))){
var inst_28138 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
var statearr_28210_28278 = state_28156__$1;
(statearr_28210_28278[(2)] = inst_28138);

(statearr_28210_28278[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (19))){
var inst_28057 = (state_28156[(7)]);
var inst_28061 = cljs.core.chunk_first.call(null,inst_28057);
var inst_28062 = cljs.core.chunk_rest.call(null,inst_28057);
var inst_28063 = cljs.core.count.call(null,inst_28061);
var inst_28037 = inst_28062;
var inst_28038 = inst_28061;
var inst_28039 = inst_28063;
var inst_28040 = (0);
var state_28156__$1 = (function (){var statearr_28211 = state_28156;
(statearr_28211[(13)] = inst_28038);

(statearr_28211[(15)] = inst_28037);

(statearr_28211[(16)] = inst_28040);

(statearr_28211[(17)] = inst_28039);

return statearr_28211;
})();
var statearr_28212_28279 = state_28156__$1;
(statearr_28212_28279[(2)] = null);

(statearr_28212_28279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (11))){
var inst_28057 = (state_28156[(7)]);
var inst_28037 = (state_28156[(15)]);
var inst_28057__$1 = cljs.core.seq.call(null,inst_28037);
var state_28156__$1 = (function (){var statearr_28213 = state_28156;
(statearr_28213[(7)] = inst_28057__$1);

return statearr_28213;
})();
if(inst_28057__$1){
var statearr_28214_28280 = state_28156__$1;
(statearr_28214_28280[(1)] = (16));

} else {
var statearr_28215_28281 = state_28156__$1;
(statearr_28215_28281[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (9))){
var inst_28085 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
var statearr_28216_28282 = state_28156__$1;
(statearr_28216_28282[(2)] = inst_28085);

(statearr_28216_28282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (5))){
var inst_28035 = cljs.core.deref.call(null,cs);
var inst_28036 = cljs.core.seq.call(null,inst_28035);
var inst_28037 = inst_28036;
var inst_28038 = null;
var inst_28039 = (0);
var inst_28040 = (0);
var state_28156__$1 = (function (){var statearr_28217 = state_28156;
(statearr_28217[(13)] = inst_28038);

(statearr_28217[(15)] = inst_28037);

(statearr_28217[(16)] = inst_28040);

(statearr_28217[(17)] = inst_28039);

return statearr_28217;
})();
var statearr_28218_28283 = state_28156__$1;
(statearr_28218_28283[(2)] = null);

(statearr_28218_28283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (14))){
var state_28156__$1 = state_28156;
var statearr_28219_28284 = state_28156__$1;
(statearr_28219_28284[(2)] = null);

(statearr_28219_28284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (45))){
var inst_28146 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
var statearr_28220_28285 = state_28156__$1;
(statearr_28220_28285[(2)] = inst_28146);

(statearr_28220_28285[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (26))){
var inst_28088 = (state_28156[(29)]);
var inst_28142 = (state_28156[(2)]);
var inst_28143 = cljs.core.seq.call(null,inst_28088);
var state_28156__$1 = (function (){var statearr_28221 = state_28156;
(statearr_28221[(31)] = inst_28142);

return statearr_28221;
})();
if(inst_28143){
var statearr_28222_28286 = state_28156__$1;
(statearr_28222_28286[(1)] = (42));

} else {
var statearr_28223_28287 = state_28156__$1;
(statearr_28223_28287[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (16))){
var inst_28057 = (state_28156[(7)]);
var inst_28059 = cljs.core.chunked_seq_QMARK_.call(null,inst_28057);
var state_28156__$1 = state_28156;
if(inst_28059){
var statearr_28224_28288 = state_28156__$1;
(statearr_28224_28288[(1)] = (19));

} else {
var statearr_28225_28289 = state_28156__$1;
(statearr_28225_28289[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (38))){
var inst_28135 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
var statearr_28226_28290 = state_28156__$1;
(statearr_28226_28290[(2)] = inst_28135);

(statearr_28226_28290[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (30))){
var state_28156__$1 = state_28156;
var statearr_28227_28291 = state_28156__$1;
(statearr_28227_28291[(2)] = null);

(statearr_28227_28291[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (10))){
var inst_28038 = (state_28156[(13)]);
var inst_28040 = (state_28156[(16)]);
var inst_28046 = cljs.core._nth.call(null,inst_28038,inst_28040);
var inst_28047 = cljs.core.nth.call(null,inst_28046,(0),null);
var inst_28048 = cljs.core.nth.call(null,inst_28046,(1),null);
var state_28156__$1 = (function (){var statearr_28228 = state_28156;
(statearr_28228[(26)] = inst_28047);

return statearr_28228;
})();
if(cljs.core.truth_(inst_28048)){
var statearr_28229_28292 = state_28156__$1;
(statearr_28229_28292[(1)] = (13));

} else {
var statearr_28230_28293 = state_28156__$1;
(statearr_28230_28293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (18))){
var inst_28081 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
var statearr_28231_28294 = state_28156__$1;
(statearr_28231_28294[(2)] = inst_28081);

(statearr_28231_28294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (42))){
var state_28156__$1 = state_28156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28156__$1,(45),dchan);
} else {
if((state_val_28157 === (37))){
var inst_28028 = (state_28156[(11)]);
var inst_28124 = (state_28156[(23)]);
var inst_28115 = (state_28156[(25)]);
var inst_28124__$1 = cljs.core.first.call(null,inst_28115);
var inst_28125 = cljs.core.async.put_BANG_.call(null,inst_28124__$1,inst_28028,done);
var state_28156__$1 = (function (){var statearr_28232 = state_28156;
(statearr_28232[(23)] = inst_28124__$1);

return statearr_28232;
})();
if(cljs.core.truth_(inst_28125)){
var statearr_28233_28295 = state_28156__$1;
(statearr_28233_28295[(1)] = (39));

} else {
var statearr_28234_28296 = state_28156__$1;
(statearr_28234_28296[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (8))){
var inst_28040 = (state_28156[(16)]);
var inst_28039 = (state_28156[(17)]);
var inst_28042 = (inst_28040 < inst_28039);
var inst_28043 = inst_28042;
var state_28156__$1 = state_28156;
if(cljs.core.truth_(inst_28043)){
var statearr_28235_28297 = state_28156__$1;
(statearr_28235_28297[(1)] = (10));

} else {
var statearr_28236_28298 = state_28156__$1;
(statearr_28236_28298[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__21665__auto___28244,cs,m,dchan,dctr,done))
;
return ((function (switch__21603__auto__,c__21665__auto___28244,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21604__auto__ = null;
var cljs$core$async$mult_$_state_machine__21604__auto____0 = (function (){
var statearr_28240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28240[(0)] = cljs$core$async$mult_$_state_machine__21604__auto__);

(statearr_28240[(1)] = (1));

return statearr_28240;
});
var cljs$core$async$mult_$_state_machine__21604__auto____1 = (function (state_28156){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_28156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e28241){if((e28241 instanceof Object)){
var ex__21607__auto__ = e28241;
var statearr_28242_28299 = state_28156;
(statearr_28242_28299[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28300 = state_28156;
state_28156 = G__28300;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21604__auto__ = function(state_28156){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21604__auto____1.call(this,state_28156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21604__auto____0;
cljs$core$async$mult_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21604__auto____1;
return cljs$core$async$mult_$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___28244,cs,m,dchan,dctr,done))
})();
var state__21667__auto__ = (function (){var statearr_28243 = f__21666__auto__.call(null);
(statearr_28243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___28244);

return statearr_28243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___28244,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__28302 = arguments.length;
switch (G__28302) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj28305 = {};
return obj28305;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18101__auto__ = m;
if(and__18101__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18101__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18749__auto__ = (((m == null))?null:m);
return (function (){var or__18113__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18749__auto__)]);
if(or__18113__auto__){
return or__18113__auto__;
} else {
var or__18113__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18113__auto____$1){
return or__18113__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18101__auto__ = m;
if(and__18101__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18101__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18749__auto__ = (((m == null))?null:m);
return (function (){var or__18113__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18749__auto__)]);
if(or__18113__auto__){
return or__18113__auto__;
} else {
var or__18113__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18113__auto____$1){
return or__18113__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18101__auto__ = m;
if(and__18101__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18101__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18749__auto__ = (((m == null))?null:m);
return (function (){var or__18113__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18749__auto__)]);
if(or__18113__auto__){
return or__18113__auto__;
} else {
var or__18113__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18113__auto____$1){
return or__18113__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18101__auto__ = m;
if(and__18101__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18101__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18749__auto__ = (((m == null))?null:m);
return (function (){var or__18113__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18749__auto__)]);
if(or__18113__auto__){
return or__18113__auto__;
} else {
var or__18113__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18113__auto____$1){
return or__18113__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18101__auto__ = m;
if(and__18101__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18101__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18749__auto__ = (((m == null))?null:m);
return (function (){var or__18113__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18749__auto__)]);
if(or__18113__auto__){
return or__18113__auto__;
} else {
var or__18113__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18113__auto____$1){
return or__18113__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19153__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19153__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28310){
var map__28311 = p__28310;
var map__28311__$1 = ((cljs.core.seq_QMARK_.call(null,map__28311))?cljs.core.apply.call(null,cljs.core.hash_map,map__28311):map__28311);
var opts = map__28311__$1;
var statearr_28312_28315 = state;
(statearr_28312_28315[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28311,map__28311__$1,opts){
return (function (val){
var statearr_28313_28316 = state;
(statearr_28313_28316[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28311,map__28311__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28314_28317 = state;
(statearr_28314_28317[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28306){
var G__28307 = cljs.core.first.call(null,seq28306);
var seq28306__$1 = cljs.core.next.call(null,seq28306);
var G__28308 = cljs.core.first.call(null,seq28306__$1);
var seq28306__$2 = cljs.core.next.call(null,seq28306__$1);
var G__28309 = cljs.core.first.call(null,seq28306__$2);
var seq28306__$3 = cljs.core.next.call(null,seq28306__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28307,G__28308,G__28309,seq28306__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t28437 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28437 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28438){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28438 = meta28438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28437.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28437.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28437.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28437.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28437.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28437.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28437.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28437.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28437.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28439){
var self__ = this;
var _28439__$1 = this;
return self__.meta28438;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28439,meta28438__$1){
var self__ = this;
var _28439__$1 = this;
return (new cljs.core.async.t28437(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28438__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28437.cljs$lang$type = true;

cljs.core.async.t28437.cljs$lang$ctorStr = "cljs.core.async/t28437";

cljs.core.async.t28437.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18692__auto__,writer__18693__auto__,opt__18694__auto__){
return cljs.core._write.call(null,writer__18693__auto__,"cljs.core.async/t28437");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28437 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t28437(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28438){
return (new cljs.core.async.t28437(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28438));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28437(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21665__auto___28556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___28556,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___28556,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28509){
var state_val_28510 = (state_28509[(1)]);
if((state_val_28510 === (7))){
var inst_28453 = (state_28509[(7)]);
var inst_28458 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28453);
var state_28509__$1 = state_28509;
var statearr_28511_28557 = state_28509__$1;
(statearr_28511_28557[(2)] = inst_28458);

(statearr_28511_28557[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (20))){
var inst_28468 = (state_28509[(8)]);
var state_28509__$1 = state_28509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28509__$1,(23),out,inst_28468);
} else {
if((state_val_28510 === (1))){
var inst_28443 = (state_28509[(9)]);
var inst_28443__$1 = calc_state.call(null);
var inst_28444 = cljs.core.seq_QMARK_.call(null,inst_28443__$1);
var state_28509__$1 = (function (){var statearr_28512 = state_28509;
(statearr_28512[(9)] = inst_28443__$1);

return statearr_28512;
})();
if(inst_28444){
var statearr_28513_28558 = state_28509__$1;
(statearr_28513_28558[(1)] = (2));

} else {
var statearr_28514_28559 = state_28509__$1;
(statearr_28514_28559[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (24))){
var inst_28461 = (state_28509[(10)]);
var inst_28453 = inst_28461;
var state_28509__$1 = (function (){var statearr_28515 = state_28509;
(statearr_28515[(7)] = inst_28453);

return statearr_28515;
})();
var statearr_28516_28560 = state_28509__$1;
(statearr_28516_28560[(2)] = null);

(statearr_28516_28560[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (4))){
var inst_28443 = (state_28509[(9)]);
var inst_28449 = (state_28509[(2)]);
var inst_28450 = cljs.core.get.call(null,inst_28449,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28451 = cljs.core.get.call(null,inst_28449,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28452 = cljs.core.get.call(null,inst_28449,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28453 = inst_28443;
var state_28509__$1 = (function (){var statearr_28517 = state_28509;
(statearr_28517[(11)] = inst_28450);

(statearr_28517[(12)] = inst_28452);

(statearr_28517[(13)] = inst_28451);

(statearr_28517[(7)] = inst_28453);

return statearr_28517;
})();
var statearr_28518_28561 = state_28509__$1;
(statearr_28518_28561[(2)] = null);

(statearr_28518_28561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (15))){
var state_28509__$1 = state_28509;
var statearr_28519_28562 = state_28509__$1;
(statearr_28519_28562[(2)] = null);

(statearr_28519_28562[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (21))){
var inst_28461 = (state_28509[(10)]);
var inst_28453 = inst_28461;
var state_28509__$1 = (function (){var statearr_28520 = state_28509;
(statearr_28520[(7)] = inst_28453);

return statearr_28520;
})();
var statearr_28521_28563 = state_28509__$1;
(statearr_28521_28563[(2)] = null);

(statearr_28521_28563[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (13))){
var inst_28505 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
var statearr_28522_28564 = state_28509__$1;
(statearr_28522_28564[(2)] = inst_28505);

(statearr_28522_28564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (22))){
var inst_28503 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
var statearr_28523_28565 = state_28509__$1;
(statearr_28523_28565[(2)] = inst_28503);

(statearr_28523_28565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (6))){
var inst_28507 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28509__$1,inst_28507);
} else {
if((state_val_28510 === (25))){
var state_28509__$1 = state_28509;
var statearr_28524_28566 = state_28509__$1;
(statearr_28524_28566[(2)] = null);

(statearr_28524_28566[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (17))){
var inst_28483 = (state_28509[(14)]);
var state_28509__$1 = state_28509;
var statearr_28525_28567 = state_28509__$1;
(statearr_28525_28567[(2)] = inst_28483);

(statearr_28525_28567[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (3))){
var inst_28443 = (state_28509[(9)]);
var state_28509__$1 = state_28509;
var statearr_28526_28568 = state_28509__$1;
(statearr_28526_28568[(2)] = inst_28443);

(statearr_28526_28568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (12))){
var inst_28464 = (state_28509[(15)]);
var inst_28483 = (state_28509[(14)]);
var inst_28469 = (state_28509[(16)]);
var inst_28483__$1 = inst_28464.call(null,inst_28469);
var state_28509__$1 = (function (){var statearr_28527 = state_28509;
(statearr_28527[(14)] = inst_28483__$1);

return statearr_28527;
})();
if(cljs.core.truth_(inst_28483__$1)){
var statearr_28528_28569 = state_28509__$1;
(statearr_28528_28569[(1)] = (17));

} else {
var statearr_28529_28570 = state_28509__$1;
(statearr_28529_28570[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (2))){
var inst_28443 = (state_28509[(9)]);
var inst_28446 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28443);
var state_28509__$1 = state_28509;
var statearr_28530_28571 = state_28509__$1;
(statearr_28530_28571[(2)] = inst_28446);

(statearr_28530_28571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (23))){
var inst_28494 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
if(cljs.core.truth_(inst_28494)){
var statearr_28531_28572 = state_28509__$1;
(statearr_28531_28572[(1)] = (24));

} else {
var statearr_28532_28573 = state_28509__$1;
(statearr_28532_28573[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (19))){
var inst_28491 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
if(cljs.core.truth_(inst_28491)){
var statearr_28533_28574 = state_28509__$1;
(statearr_28533_28574[(1)] = (20));

} else {
var statearr_28534_28575 = state_28509__$1;
(statearr_28534_28575[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (11))){
var inst_28468 = (state_28509[(8)]);
var inst_28474 = (inst_28468 == null);
var state_28509__$1 = state_28509;
if(cljs.core.truth_(inst_28474)){
var statearr_28535_28576 = state_28509__$1;
(statearr_28535_28576[(1)] = (14));

} else {
var statearr_28536_28577 = state_28509__$1;
(statearr_28536_28577[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (9))){
var inst_28461 = (state_28509[(10)]);
var inst_28461__$1 = (state_28509[(2)]);
var inst_28462 = cljs.core.get.call(null,inst_28461__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28463 = cljs.core.get.call(null,inst_28461__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28464 = cljs.core.get.call(null,inst_28461__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28509__$1 = (function (){var statearr_28537 = state_28509;
(statearr_28537[(17)] = inst_28463);

(statearr_28537[(15)] = inst_28464);

(statearr_28537[(10)] = inst_28461__$1);

return statearr_28537;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28509__$1,(10),inst_28462);
} else {
if((state_val_28510 === (5))){
var inst_28453 = (state_28509[(7)]);
var inst_28456 = cljs.core.seq_QMARK_.call(null,inst_28453);
var state_28509__$1 = state_28509;
if(inst_28456){
var statearr_28538_28578 = state_28509__$1;
(statearr_28538_28578[(1)] = (7));

} else {
var statearr_28539_28579 = state_28509__$1;
(statearr_28539_28579[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (14))){
var inst_28469 = (state_28509[(16)]);
var inst_28476 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28469);
var state_28509__$1 = state_28509;
var statearr_28540_28580 = state_28509__$1;
(statearr_28540_28580[(2)] = inst_28476);

(statearr_28540_28580[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (26))){
var inst_28499 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
var statearr_28541_28581 = state_28509__$1;
(statearr_28541_28581[(2)] = inst_28499);

(statearr_28541_28581[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (16))){
var inst_28479 = (state_28509[(2)]);
var inst_28480 = calc_state.call(null);
var inst_28453 = inst_28480;
var state_28509__$1 = (function (){var statearr_28542 = state_28509;
(statearr_28542[(7)] = inst_28453);

(statearr_28542[(18)] = inst_28479);

return statearr_28542;
})();
var statearr_28543_28582 = state_28509__$1;
(statearr_28543_28582[(2)] = null);

(statearr_28543_28582[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (10))){
var inst_28469 = (state_28509[(16)]);
var inst_28468 = (state_28509[(8)]);
var inst_28467 = (state_28509[(2)]);
var inst_28468__$1 = cljs.core.nth.call(null,inst_28467,(0),null);
var inst_28469__$1 = cljs.core.nth.call(null,inst_28467,(1),null);
var inst_28470 = (inst_28468__$1 == null);
var inst_28471 = cljs.core._EQ_.call(null,inst_28469__$1,change);
var inst_28472 = (inst_28470) || (inst_28471);
var state_28509__$1 = (function (){var statearr_28544 = state_28509;
(statearr_28544[(16)] = inst_28469__$1);

(statearr_28544[(8)] = inst_28468__$1);

return statearr_28544;
})();
if(cljs.core.truth_(inst_28472)){
var statearr_28545_28583 = state_28509__$1;
(statearr_28545_28583[(1)] = (11));

} else {
var statearr_28546_28584 = state_28509__$1;
(statearr_28546_28584[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (18))){
var inst_28463 = (state_28509[(17)]);
var inst_28464 = (state_28509[(15)]);
var inst_28469 = (state_28509[(16)]);
var inst_28486 = cljs.core.empty_QMARK_.call(null,inst_28464);
var inst_28487 = inst_28463.call(null,inst_28469);
var inst_28488 = cljs.core.not.call(null,inst_28487);
var inst_28489 = (inst_28486) && (inst_28488);
var state_28509__$1 = state_28509;
var statearr_28547_28585 = state_28509__$1;
(statearr_28547_28585[(2)] = inst_28489);

(statearr_28547_28585[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (8))){
var inst_28453 = (state_28509[(7)]);
var state_28509__$1 = state_28509;
var statearr_28548_28586 = state_28509__$1;
(statearr_28548_28586[(2)] = inst_28453);

(statearr_28548_28586[(1)] = (9));


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
});})(c__21665__auto___28556,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21603__auto__,c__21665__auto___28556,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21604__auto__ = null;
var cljs$core$async$mix_$_state_machine__21604__auto____0 = (function (){
var statearr_28552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28552[(0)] = cljs$core$async$mix_$_state_machine__21604__auto__);

(statearr_28552[(1)] = (1));

return statearr_28552;
});
var cljs$core$async$mix_$_state_machine__21604__auto____1 = (function (state_28509){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_28509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e28553){if((e28553 instanceof Object)){
var ex__21607__auto__ = e28553;
var statearr_28554_28587 = state_28509;
(statearr_28554_28587[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28588 = state_28509;
state_28509 = G__28588;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21604__auto__ = function(state_28509){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21604__auto____1.call(this,state_28509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21604__auto____0;
cljs$core$async$mix_$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21604__auto____1;
return cljs$core$async$mix_$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___28556,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21667__auto__ = (function (){var statearr_28555 = f__21666__auto__.call(null);
(statearr_28555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___28556);

return statearr_28555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___28556,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28590 = {};
return obj28590;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18101__auto__ = p;
if(and__18101__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18101__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18749__auto__ = (((p == null))?null:p);
return (function (){var or__18113__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18749__auto__)]);
if(or__18113__auto__){
return or__18113__auto__;
} else {
var or__18113__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18113__auto____$1){
return or__18113__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18101__auto__ = p;
if(and__18101__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18101__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18749__auto__ = (((p == null))?null:p);
return (function (){var or__18113__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18749__auto__)]);
if(or__18113__auto__){
return or__18113__auto__;
} else {
var or__18113__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18113__auto____$1){
return or__18113__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__28592 = arguments.length;
switch (G__28592) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18101__auto__ = p;
if(and__18101__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18101__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18749__auto__ = (((p == null))?null:p);
return (function (){var or__18113__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18749__auto__)]);
if(or__18113__auto__){
return or__18113__auto__;
} else {
var or__18113__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18113__auto____$1){
return or__18113__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18101__auto__ = p;
if(and__18101__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18101__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18749__auto__ = (((p == null))?null:p);
return (function (){var or__18113__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18749__auto__)]);
if(or__18113__auto__){
return or__18113__auto__;
} else {
var or__18113__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18113__auto____$1){
return or__18113__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__28596 = arguments.length;
switch (G__28596) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18113__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18113__auto__)){
return or__18113__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18113__auto__,mults){
return (function (p1__28594_SHARP_){
if(cljs.core.truth_(p1__28594_SHARP_.call(null,topic))){
return p1__28594_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28594_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18113__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28597 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28597 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta28598){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta28598 = meta28598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28597.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28597.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28597.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28597.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28597.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28597.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28597.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28597.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28599){
var self__ = this;
var _28599__$1 = this;
return self__.meta28598;
});})(mults,ensure_mult))
;

cljs.core.async.t28597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28599,meta28598__$1){
var self__ = this;
var _28599__$1 = this;
return (new cljs.core.async.t28597(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta28598__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28597.cljs$lang$type = true;

cljs.core.async.t28597.cljs$lang$ctorStr = "cljs.core.async/t28597";

cljs.core.async.t28597.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18692__auto__,writer__18693__auto__,opt__18694__auto__){
return cljs.core._write.call(null,writer__18693__auto__,"cljs.core.async/t28597");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28597 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28597(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28598){
return (new cljs.core.async.t28597(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28598));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28597(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21665__auto___28720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___28720,mults,ensure_mult,p){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___28720,mults,ensure_mult,p){
return (function (state_28671){
var state_val_28672 = (state_28671[(1)]);
if((state_val_28672 === (7))){
var inst_28667 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
var statearr_28673_28721 = state_28671__$1;
(statearr_28673_28721[(2)] = inst_28667);

(statearr_28673_28721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (20))){
var state_28671__$1 = state_28671;
var statearr_28674_28722 = state_28671__$1;
(statearr_28674_28722[(2)] = null);

(statearr_28674_28722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (1))){
var state_28671__$1 = state_28671;
var statearr_28675_28723 = state_28671__$1;
(statearr_28675_28723[(2)] = null);

(statearr_28675_28723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (24))){
var inst_28650 = (state_28671[(7)]);
var inst_28659 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28650);
var state_28671__$1 = state_28671;
var statearr_28676_28724 = state_28671__$1;
(statearr_28676_28724[(2)] = inst_28659);

(statearr_28676_28724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (4))){
var inst_28602 = (state_28671[(8)]);
var inst_28602__$1 = (state_28671[(2)]);
var inst_28603 = (inst_28602__$1 == null);
var state_28671__$1 = (function (){var statearr_28677 = state_28671;
(statearr_28677[(8)] = inst_28602__$1);

return statearr_28677;
})();
if(cljs.core.truth_(inst_28603)){
var statearr_28678_28725 = state_28671__$1;
(statearr_28678_28725[(1)] = (5));

} else {
var statearr_28679_28726 = state_28671__$1;
(statearr_28679_28726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (15))){
var inst_28644 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
var statearr_28680_28727 = state_28671__$1;
(statearr_28680_28727[(2)] = inst_28644);

(statearr_28680_28727[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (21))){
var inst_28664 = (state_28671[(2)]);
var state_28671__$1 = (function (){var statearr_28681 = state_28671;
(statearr_28681[(9)] = inst_28664);

return statearr_28681;
})();
var statearr_28682_28728 = state_28671__$1;
(statearr_28682_28728[(2)] = null);

(statearr_28682_28728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (13))){
var inst_28626 = (state_28671[(10)]);
var inst_28628 = cljs.core.chunked_seq_QMARK_.call(null,inst_28626);
var state_28671__$1 = state_28671;
if(inst_28628){
var statearr_28683_28729 = state_28671__$1;
(statearr_28683_28729[(1)] = (16));

} else {
var statearr_28684_28730 = state_28671__$1;
(statearr_28684_28730[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (22))){
var inst_28656 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
if(cljs.core.truth_(inst_28656)){
var statearr_28685_28731 = state_28671__$1;
(statearr_28685_28731[(1)] = (23));

} else {
var statearr_28686_28732 = state_28671__$1;
(statearr_28686_28732[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (6))){
var inst_28652 = (state_28671[(11)]);
var inst_28602 = (state_28671[(8)]);
var inst_28650 = (state_28671[(7)]);
var inst_28650__$1 = topic_fn.call(null,inst_28602);
var inst_28651 = cljs.core.deref.call(null,mults);
var inst_28652__$1 = cljs.core.get.call(null,inst_28651,inst_28650__$1);
var state_28671__$1 = (function (){var statearr_28687 = state_28671;
(statearr_28687[(11)] = inst_28652__$1);

(statearr_28687[(7)] = inst_28650__$1);

return statearr_28687;
})();
if(cljs.core.truth_(inst_28652__$1)){
var statearr_28688_28733 = state_28671__$1;
(statearr_28688_28733[(1)] = (19));

} else {
var statearr_28689_28734 = state_28671__$1;
(statearr_28689_28734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (25))){
var inst_28661 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
var statearr_28690_28735 = state_28671__$1;
(statearr_28690_28735[(2)] = inst_28661);

(statearr_28690_28735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (17))){
var inst_28626 = (state_28671[(10)]);
var inst_28635 = cljs.core.first.call(null,inst_28626);
var inst_28636 = cljs.core.async.muxch_STAR_.call(null,inst_28635);
var inst_28637 = cljs.core.async.close_BANG_.call(null,inst_28636);
var inst_28638 = cljs.core.next.call(null,inst_28626);
var inst_28612 = inst_28638;
var inst_28613 = null;
var inst_28614 = (0);
var inst_28615 = (0);
var state_28671__$1 = (function (){var statearr_28691 = state_28671;
(statearr_28691[(12)] = inst_28614);

(statearr_28691[(13)] = inst_28612);

(statearr_28691[(14)] = inst_28637);

(statearr_28691[(15)] = inst_28613);

(statearr_28691[(16)] = inst_28615);

return statearr_28691;
})();
var statearr_28692_28736 = state_28671__$1;
(statearr_28692_28736[(2)] = null);

(statearr_28692_28736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (3))){
var inst_28669 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28671__$1,inst_28669);
} else {
if((state_val_28672 === (12))){
var inst_28646 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
var statearr_28693_28737 = state_28671__$1;
(statearr_28693_28737[(2)] = inst_28646);

(statearr_28693_28737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (2))){
var state_28671__$1 = state_28671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28671__$1,(4),ch);
} else {
if((state_val_28672 === (23))){
var state_28671__$1 = state_28671;
var statearr_28694_28738 = state_28671__$1;
(statearr_28694_28738[(2)] = null);

(statearr_28694_28738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (19))){
var inst_28652 = (state_28671[(11)]);
var inst_28602 = (state_28671[(8)]);
var inst_28654 = cljs.core.async.muxch_STAR_.call(null,inst_28652);
var state_28671__$1 = state_28671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28671__$1,(22),inst_28654,inst_28602);
} else {
if((state_val_28672 === (11))){
var inst_28626 = (state_28671[(10)]);
var inst_28612 = (state_28671[(13)]);
var inst_28626__$1 = cljs.core.seq.call(null,inst_28612);
var state_28671__$1 = (function (){var statearr_28695 = state_28671;
(statearr_28695[(10)] = inst_28626__$1);

return statearr_28695;
})();
if(inst_28626__$1){
var statearr_28696_28739 = state_28671__$1;
(statearr_28696_28739[(1)] = (13));

} else {
var statearr_28697_28740 = state_28671__$1;
(statearr_28697_28740[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (9))){
var inst_28648 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
var statearr_28698_28741 = state_28671__$1;
(statearr_28698_28741[(2)] = inst_28648);

(statearr_28698_28741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (5))){
var inst_28609 = cljs.core.deref.call(null,mults);
var inst_28610 = cljs.core.vals.call(null,inst_28609);
var inst_28611 = cljs.core.seq.call(null,inst_28610);
var inst_28612 = inst_28611;
var inst_28613 = null;
var inst_28614 = (0);
var inst_28615 = (0);
var state_28671__$1 = (function (){var statearr_28699 = state_28671;
(statearr_28699[(12)] = inst_28614);

(statearr_28699[(13)] = inst_28612);

(statearr_28699[(15)] = inst_28613);

(statearr_28699[(16)] = inst_28615);

return statearr_28699;
})();
var statearr_28700_28742 = state_28671__$1;
(statearr_28700_28742[(2)] = null);

(statearr_28700_28742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (14))){
var state_28671__$1 = state_28671;
var statearr_28704_28743 = state_28671__$1;
(statearr_28704_28743[(2)] = null);

(statearr_28704_28743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (16))){
var inst_28626 = (state_28671[(10)]);
var inst_28630 = cljs.core.chunk_first.call(null,inst_28626);
var inst_28631 = cljs.core.chunk_rest.call(null,inst_28626);
var inst_28632 = cljs.core.count.call(null,inst_28630);
var inst_28612 = inst_28631;
var inst_28613 = inst_28630;
var inst_28614 = inst_28632;
var inst_28615 = (0);
var state_28671__$1 = (function (){var statearr_28705 = state_28671;
(statearr_28705[(12)] = inst_28614);

(statearr_28705[(13)] = inst_28612);

(statearr_28705[(15)] = inst_28613);

(statearr_28705[(16)] = inst_28615);

return statearr_28705;
})();
var statearr_28706_28744 = state_28671__$1;
(statearr_28706_28744[(2)] = null);

(statearr_28706_28744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (10))){
var inst_28614 = (state_28671[(12)]);
var inst_28612 = (state_28671[(13)]);
var inst_28613 = (state_28671[(15)]);
var inst_28615 = (state_28671[(16)]);
var inst_28620 = cljs.core._nth.call(null,inst_28613,inst_28615);
var inst_28621 = cljs.core.async.muxch_STAR_.call(null,inst_28620);
var inst_28622 = cljs.core.async.close_BANG_.call(null,inst_28621);
var inst_28623 = (inst_28615 + (1));
var tmp28701 = inst_28614;
var tmp28702 = inst_28612;
var tmp28703 = inst_28613;
var inst_28612__$1 = tmp28702;
var inst_28613__$1 = tmp28703;
var inst_28614__$1 = tmp28701;
var inst_28615__$1 = inst_28623;
var state_28671__$1 = (function (){var statearr_28707 = state_28671;
(statearr_28707[(12)] = inst_28614__$1);

(statearr_28707[(13)] = inst_28612__$1);

(statearr_28707[(15)] = inst_28613__$1);

(statearr_28707[(16)] = inst_28615__$1);

(statearr_28707[(17)] = inst_28622);

return statearr_28707;
})();
var statearr_28708_28745 = state_28671__$1;
(statearr_28708_28745[(2)] = null);

(statearr_28708_28745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (18))){
var inst_28641 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
var statearr_28709_28746 = state_28671__$1;
(statearr_28709_28746[(2)] = inst_28641);

(statearr_28709_28746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (8))){
var inst_28614 = (state_28671[(12)]);
var inst_28615 = (state_28671[(16)]);
var inst_28617 = (inst_28615 < inst_28614);
var inst_28618 = inst_28617;
var state_28671__$1 = state_28671;
if(cljs.core.truth_(inst_28618)){
var statearr_28710_28747 = state_28671__$1;
(statearr_28710_28747[(1)] = (10));

} else {
var statearr_28711_28748 = state_28671__$1;
(statearr_28711_28748[(1)] = (11));

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
});})(c__21665__auto___28720,mults,ensure_mult,p))
;
return ((function (switch__21603__auto__,c__21665__auto___28720,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21604__auto__ = null;
var cljs$core$async$state_machine__21604__auto____0 = (function (){
var statearr_28715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28715[(0)] = cljs$core$async$state_machine__21604__auto__);

(statearr_28715[(1)] = (1));

return statearr_28715;
});
var cljs$core$async$state_machine__21604__auto____1 = (function (state_28671){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_28671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e28716){if((e28716 instanceof Object)){
var ex__21607__auto__ = e28716;
var statearr_28717_28749 = state_28671;
(statearr_28717_28749[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28750 = state_28671;
state_28671 = G__28750;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$state_machine__21604__auto__ = function(state_28671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21604__auto____1.call(this,state_28671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21604__auto____0;
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21604__auto____1;
return cljs$core$async$state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___28720,mults,ensure_mult,p))
})();
var state__21667__auto__ = (function (){var statearr_28718 = f__21666__auto__.call(null);
(statearr_28718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___28720);

return statearr_28718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___28720,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__28752 = arguments.length;
switch (G__28752) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__28755 = arguments.length;
switch (G__28755) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__28758 = arguments.length;
switch (G__28758) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21665__auto___28828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___28828,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___28828,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28797){
var state_val_28798 = (state_28797[(1)]);
if((state_val_28798 === (7))){
var state_28797__$1 = state_28797;
var statearr_28799_28829 = state_28797__$1;
(statearr_28799_28829[(2)] = null);

(statearr_28799_28829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (1))){
var state_28797__$1 = state_28797;
var statearr_28800_28830 = state_28797__$1;
(statearr_28800_28830[(2)] = null);

(statearr_28800_28830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (4))){
var inst_28761 = (state_28797[(7)]);
var inst_28763 = (inst_28761 < cnt);
var state_28797__$1 = state_28797;
if(cljs.core.truth_(inst_28763)){
var statearr_28801_28831 = state_28797__$1;
(statearr_28801_28831[(1)] = (6));

} else {
var statearr_28802_28832 = state_28797__$1;
(statearr_28802_28832[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (15))){
var inst_28793 = (state_28797[(2)]);
var state_28797__$1 = state_28797;
var statearr_28803_28833 = state_28797__$1;
(statearr_28803_28833[(2)] = inst_28793);

(statearr_28803_28833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (13))){
var inst_28786 = cljs.core.async.close_BANG_.call(null,out);
var state_28797__$1 = state_28797;
var statearr_28804_28834 = state_28797__$1;
(statearr_28804_28834[(2)] = inst_28786);

(statearr_28804_28834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (6))){
var state_28797__$1 = state_28797;
var statearr_28805_28835 = state_28797__$1;
(statearr_28805_28835[(2)] = null);

(statearr_28805_28835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (3))){
var inst_28795 = (state_28797[(2)]);
var state_28797__$1 = state_28797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28797__$1,inst_28795);
} else {
if((state_val_28798 === (12))){
var inst_28783 = (state_28797[(8)]);
var inst_28783__$1 = (state_28797[(2)]);
var inst_28784 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28783__$1);
var state_28797__$1 = (function (){var statearr_28806 = state_28797;
(statearr_28806[(8)] = inst_28783__$1);

return statearr_28806;
})();
if(cljs.core.truth_(inst_28784)){
var statearr_28807_28836 = state_28797__$1;
(statearr_28807_28836[(1)] = (13));

} else {
var statearr_28808_28837 = state_28797__$1;
(statearr_28808_28837[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (2))){
var inst_28760 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28761 = (0);
var state_28797__$1 = (function (){var statearr_28809 = state_28797;
(statearr_28809[(7)] = inst_28761);

(statearr_28809[(9)] = inst_28760);

return statearr_28809;
})();
var statearr_28810_28838 = state_28797__$1;
(statearr_28810_28838[(2)] = null);

(statearr_28810_28838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (11))){
var inst_28761 = (state_28797[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28797,(10),Object,null,(9));
var inst_28770 = chs__$1.call(null,inst_28761);
var inst_28771 = done.call(null,inst_28761);
var inst_28772 = cljs.core.async.take_BANG_.call(null,inst_28770,inst_28771);
var state_28797__$1 = state_28797;
var statearr_28811_28839 = state_28797__$1;
(statearr_28811_28839[(2)] = inst_28772);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28797__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (9))){
var inst_28761 = (state_28797[(7)]);
var inst_28774 = (state_28797[(2)]);
var inst_28775 = (inst_28761 + (1));
var inst_28761__$1 = inst_28775;
var state_28797__$1 = (function (){var statearr_28812 = state_28797;
(statearr_28812[(10)] = inst_28774);

(statearr_28812[(7)] = inst_28761__$1);

return statearr_28812;
})();
var statearr_28813_28840 = state_28797__$1;
(statearr_28813_28840[(2)] = null);

(statearr_28813_28840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (5))){
var inst_28781 = (state_28797[(2)]);
var state_28797__$1 = (function (){var statearr_28814 = state_28797;
(statearr_28814[(11)] = inst_28781);

return statearr_28814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28797__$1,(12),dchan);
} else {
if((state_val_28798 === (14))){
var inst_28783 = (state_28797[(8)]);
var inst_28788 = cljs.core.apply.call(null,f,inst_28783);
var state_28797__$1 = state_28797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28797__$1,(16),out,inst_28788);
} else {
if((state_val_28798 === (16))){
var inst_28790 = (state_28797[(2)]);
var state_28797__$1 = (function (){var statearr_28815 = state_28797;
(statearr_28815[(12)] = inst_28790);

return statearr_28815;
})();
var statearr_28816_28841 = state_28797__$1;
(statearr_28816_28841[(2)] = null);

(statearr_28816_28841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (10))){
var inst_28765 = (state_28797[(2)]);
var inst_28766 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28797__$1 = (function (){var statearr_28817 = state_28797;
(statearr_28817[(13)] = inst_28765);

return statearr_28817;
})();
var statearr_28818_28842 = state_28797__$1;
(statearr_28818_28842[(2)] = inst_28766);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28797__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (8))){
var inst_28779 = (state_28797[(2)]);
var state_28797__$1 = state_28797;
var statearr_28819_28843 = state_28797__$1;
(statearr_28819_28843[(2)] = inst_28779);

(statearr_28819_28843[(1)] = (5));


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
});})(c__21665__auto___28828,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21603__auto__,c__21665__auto___28828,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21604__auto__ = null;
var cljs$core$async$state_machine__21604__auto____0 = (function (){
var statearr_28823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28823[(0)] = cljs$core$async$state_machine__21604__auto__);

(statearr_28823[(1)] = (1));

return statearr_28823;
});
var cljs$core$async$state_machine__21604__auto____1 = (function (state_28797){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_28797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e28824){if((e28824 instanceof Object)){
var ex__21607__auto__ = e28824;
var statearr_28825_28844 = state_28797;
(statearr_28825_28844[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28845 = state_28797;
state_28797 = G__28845;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$state_machine__21604__auto__ = function(state_28797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21604__auto____1.call(this,state_28797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21604__auto____0;
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21604__auto____1;
return cljs$core$async$state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___28828,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21667__auto__ = (function (){var statearr_28826 = f__21666__auto__.call(null);
(statearr_28826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___28828);

return statearr_28826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___28828,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__28848 = arguments.length;
switch (G__28848) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21665__auto___28903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___28903,out){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___28903,out){
return (function (state_28878){
var state_val_28879 = (state_28878[(1)]);
if((state_val_28879 === (7))){
var inst_28857 = (state_28878[(7)]);
var inst_28858 = (state_28878[(8)]);
var inst_28857__$1 = (state_28878[(2)]);
var inst_28858__$1 = cljs.core.nth.call(null,inst_28857__$1,(0),null);
var inst_28859 = cljs.core.nth.call(null,inst_28857__$1,(1),null);
var inst_28860 = (inst_28858__$1 == null);
var state_28878__$1 = (function (){var statearr_28880 = state_28878;
(statearr_28880[(9)] = inst_28859);

(statearr_28880[(7)] = inst_28857__$1);

(statearr_28880[(8)] = inst_28858__$1);

return statearr_28880;
})();
if(cljs.core.truth_(inst_28860)){
var statearr_28881_28904 = state_28878__$1;
(statearr_28881_28904[(1)] = (8));

} else {
var statearr_28882_28905 = state_28878__$1;
(statearr_28882_28905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (1))){
var inst_28849 = cljs.core.vec.call(null,chs);
var inst_28850 = inst_28849;
var state_28878__$1 = (function (){var statearr_28883 = state_28878;
(statearr_28883[(10)] = inst_28850);

return statearr_28883;
})();
var statearr_28884_28906 = state_28878__$1;
(statearr_28884_28906[(2)] = null);

(statearr_28884_28906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (4))){
var inst_28850 = (state_28878[(10)]);
var state_28878__$1 = state_28878;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28878__$1,(7),inst_28850);
} else {
if((state_val_28879 === (6))){
var inst_28874 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28885_28907 = state_28878__$1;
(statearr_28885_28907[(2)] = inst_28874);

(statearr_28885_28907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (3))){
var inst_28876 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28878__$1,inst_28876);
} else {
if((state_val_28879 === (2))){
var inst_28850 = (state_28878[(10)]);
var inst_28852 = cljs.core.count.call(null,inst_28850);
var inst_28853 = (inst_28852 > (0));
var state_28878__$1 = state_28878;
if(cljs.core.truth_(inst_28853)){
var statearr_28887_28908 = state_28878__$1;
(statearr_28887_28908[(1)] = (4));

} else {
var statearr_28888_28909 = state_28878__$1;
(statearr_28888_28909[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (11))){
var inst_28850 = (state_28878[(10)]);
var inst_28867 = (state_28878[(2)]);
var tmp28886 = inst_28850;
var inst_28850__$1 = tmp28886;
var state_28878__$1 = (function (){var statearr_28889 = state_28878;
(statearr_28889[(11)] = inst_28867);

(statearr_28889[(10)] = inst_28850__$1);

return statearr_28889;
})();
var statearr_28890_28910 = state_28878__$1;
(statearr_28890_28910[(2)] = null);

(statearr_28890_28910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (9))){
var inst_28858 = (state_28878[(8)]);
var state_28878__$1 = state_28878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28878__$1,(11),out,inst_28858);
} else {
if((state_val_28879 === (5))){
var inst_28872 = cljs.core.async.close_BANG_.call(null,out);
var state_28878__$1 = state_28878;
var statearr_28891_28911 = state_28878__$1;
(statearr_28891_28911[(2)] = inst_28872);

(statearr_28891_28911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (10))){
var inst_28870 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28892_28912 = state_28878__$1;
(statearr_28892_28912[(2)] = inst_28870);

(statearr_28892_28912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (8))){
var inst_28850 = (state_28878[(10)]);
var inst_28859 = (state_28878[(9)]);
var inst_28857 = (state_28878[(7)]);
var inst_28858 = (state_28878[(8)]);
var inst_28862 = (function (){var c = inst_28859;
var v = inst_28858;
var vec__28855 = inst_28857;
var cs = inst_28850;
return ((function (c,v,vec__28855,cs,inst_28850,inst_28859,inst_28857,inst_28858,state_val_28879,c__21665__auto___28903,out){
return (function (p1__28846_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28846_SHARP_);
});
;})(c,v,vec__28855,cs,inst_28850,inst_28859,inst_28857,inst_28858,state_val_28879,c__21665__auto___28903,out))
})();
var inst_28863 = cljs.core.filterv.call(null,inst_28862,inst_28850);
var inst_28850__$1 = inst_28863;
var state_28878__$1 = (function (){var statearr_28893 = state_28878;
(statearr_28893[(10)] = inst_28850__$1);

return statearr_28893;
})();
var statearr_28894_28913 = state_28878__$1;
(statearr_28894_28913[(2)] = null);

(statearr_28894_28913[(1)] = (2));


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
});})(c__21665__auto___28903,out))
;
return ((function (switch__21603__auto__,c__21665__auto___28903,out){
return (function() {
var cljs$core$async$state_machine__21604__auto__ = null;
var cljs$core$async$state_machine__21604__auto____0 = (function (){
var statearr_28898 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28898[(0)] = cljs$core$async$state_machine__21604__auto__);

(statearr_28898[(1)] = (1));

return statearr_28898;
});
var cljs$core$async$state_machine__21604__auto____1 = (function (state_28878){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_28878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e28899){if((e28899 instanceof Object)){
var ex__21607__auto__ = e28899;
var statearr_28900_28914 = state_28878;
(statearr_28900_28914[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28915 = state_28878;
state_28878 = G__28915;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$state_machine__21604__auto__ = function(state_28878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21604__auto____1.call(this,state_28878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21604__auto____0;
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21604__auto____1;
return cljs$core$async$state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___28903,out))
})();
var state__21667__auto__ = (function (){var statearr_28901 = f__21666__auto__.call(null);
(statearr_28901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___28903);

return statearr_28901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___28903,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__28917 = arguments.length;
switch (G__28917) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21665__auto___28965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___28965,out){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___28965,out){
return (function (state_28941){
var state_val_28942 = (state_28941[(1)]);
if((state_val_28942 === (7))){
var inst_28923 = (state_28941[(7)]);
var inst_28923__$1 = (state_28941[(2)]);
var inst_28924 = (inst_28923__$1 == null);
var inst_28925 = cljs.core.not.call(null,inst_28924);
var state_28941__$1 = (function (){var statearr_28943 = state_28941;
(statearr_28943[(7)] = inst_28923__$1);

return statearr_28943;
})();
if(inst_28925){
var statearr_28944_28966 = state_28941__$1;
(statearr_28944_28966[(1)] = (8));

} else {
var statearr_28945_28967 = state_28941__$1;
(statearr_28945_28967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (1))){
var inst_28918 = (0);
var state_28941__$1 = (function (){var statearr_28946 = state_28941;
(statearr_28946[(8)] = inst_28918);

return statearr_28946;
})();
var statearr_28947_28968 = state_28941__$1;
(statearr_28947_28968[(2)] = null);

(statearr_28947_28968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (4))){
var state_28941__$1 = state_28941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28941__$1,(7),ch);
} else {
if((state_val_28942 === (6))){
var inst_28936 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_28948_28969 = state_28941__$1;
(statearr_28948_28969[(2)] = inst_28936);

(statearr_28948_28969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (3))){
var inst_28938 = (state_28941[(2)]);
var inst_28939 = cljs.core.async.close_BANG_.call(null,out);
var state_28941__$1 = (function (){var statearr_28949 = state_28941;
(statearr_28949[(9)] = inst_28938);

return statearr_28949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28941__$1,inst_28939);
} else {
if((state_val_28942 === (2))){
var inst_28918 = (state_28941[(8)]);
var inst_28920 = (inst_28918 < n);
var state_28941__$1 = state_28941;
if(cljs.core.truth_(inst_28920)){
var statearr_28950_28970 = state_28941__$1;
(statearr_28950_28970[(1)] = (4));

} else {
var statearr_28951_28971 = state_28941__$1;
(statearr_28951_28971[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (11))){
var inst_28918 = (state_28941[(8)]);
var inst_28928 = (state_28941[(2)]);
var inst_28929 = (inst_28918 + (1));
var inst_28918__$1 = inst_28929;
var state_28941__$1 = (function (){var statearr_28952 = state_28941;
(statearr_28952[(8)] = inst_28918__$1);

(statearr_28952[(10)] = inst_28928);

return statearr_28952;
})();
var statearr_28953_28972 = state_28941__$1;
(statearr_28953_28972[(2)] = null);

(statearr_28953_28972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (9))){
var state_28941__$1 = state_28941;
var statearr_28954_28973 = state_28941__$1;
(statearr_28954_28973[(2)] = null);

(statearr_28954_28973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (5))){
var state_28941__$1 = state_28941;
var statearr_28955_28974 = state_28941__$1;
(statearr_28955_28974[(2)] = null);

(statearr_28955_28974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (10))){
var inst_28933 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_28956_28975 = state_28941__$1;
(statearr_28956_28975[(2)] = inst_28933);

(statearr_28956_28975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (8))){
var inst_28923 = (state_28941[(7)]);
var state_28941__$1 = state_28941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28941__$1,(11),out,inst_28923);
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
});})(c__21665__auto___28965,out))
;
return ((function (switch__21603__auto__,c__21665__auto___28965,out){
return (function() {
var cljs$core$async$state_machine__21604__auto__ = null;
var cljs$core$async$state_machine__21604__auto____0 = (function (){
var statearr_28960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28960[(0)] = cljs$core$async$state_machine__21604__auto__);

(statearr_28960[(1)] = (1));

return statearr_28960;
});
var cljs$core$async$state_machine__21604__auto____1 = (function (state_28941){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_28941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e28961){if((e28961 instanceof Object)){
var ex__21607__auto__ = e28961;
var statearr_28962_28976 = state_28941;
(statearr_28962_28976[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28977 = state_28941;
state_28941 = G__28977;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$state_machine__21604__auto__ = function(state_28941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21604__auto____1.call(this,state_28941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21604__auto____0;
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21604__auto____1;
return cljs$core$async$state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___28965,out))
})();
var state__21667__auto__ = (function (){var statearr_28963 = f__21666__auto__.call(null);
(statearr_28963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___28965);

return statearr_28963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___28965,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28985 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28985 = (function (ch,f,map_LT_,meta28986){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28986 = meta28986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28985.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28985.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28985.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28985.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28988 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28988 = (function (fn1,_,meta28986,map_LT_,f,ch,meta28989){
this.fn1 = fn1;
this._ = _;
this.meta28986 = meta28986;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28989 = meta28989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28988.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28988.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28988.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28978_SHARP_){
return f1.call(null,(((p1__28978_SHARP_ == null))?null:self__.f.call(null,p1__28978_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28988.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28990){
var self__ = this;
var _28990__$1 = this;
return self__.meta28989;
});})(___$1))
;

cljs.core.async.t28988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28990,meta28989__$1){
var self__ = this;
var _28990__$1 = this;
return (new cljs.core.async.t28988(self__.fn1,self__._,self__.meta28986,self__.map_LT_,self__.f,self__.ch,meta28989__$1));
});})(___$1))
;

cljs.core.async.t28988.cljs$lang$type = true;

cljs.core.async.t28988.cljs$lang$ctorStr = "cljs.core.async/t28988";

cljs.core.async.t28988.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18692__auto__,writer__18693__auto__,opt__18694__auto__){
return cljs.core._write.call(null,writer__18693__auto__,"cljs.core.async/t28988");
});})(___$1))
;

cljs.core.async.__GT_t28988 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28988(fn1__$1,___$2,meta28986__$1,map_LT___$1,f__$1,ch__$1,meta28989){
return (new cljs.core.async.t28988(fn1__$1,___$2,meta28986__$1,map_LT___$1,f__$1,ch__$1,meta28989));
});})(___$1))
;

}

return (new cljs.core.async.t28988(fn1,___$1,self__.meta28986,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18101__auto__ = ret;
if(cljs.core.truth_(and__18101__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18101__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28985.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28985.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28985.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28987){
var self__ = this;
var _28987__$1 = this;
return self__.meta28986;
});

cljs.core.async.t28985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28987,meta28986__$1){
var self__ = this;
var _28987__$1 = this;
return (new cljs.core.async.t28985(self__.ch,self__.f,self__.map_LT_,meta28986__$1));
});

cljs.core.async.t28985.cljs$lang$type = true;

cljs.core.async.t28985.cljs$lang$ctorStr = "cljs.core.async/t28985";

cljs.core.async.t28985.cljs$lang$ctorPrWriter = (function (this__18692__auto__,writer__18693__auto__,opt__18694__auto__){
return cljs.core._write.call(null,writer__18693__auto__,"cljs.core.async/t28985");
});

cljs.core.async.__GT_t28985 = (function cljs$core$async$map_LT__$___GT_t28985(ch__$1,f__$1,map_LT___$1,meta28986){
return (new cljs.core.async.t28985(ch__$1,f__$1,map_LT___$1,meta28986));
});

}

return (new cljs.core.async.t28985(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28994 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28994 = (function (ch,f,map_GT_,meta28995){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28995 = meta28995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28994.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28994.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28994.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28996){
var self__ = this;
var _28996__$1 = this;
return self__.meta28995;
});

cljs.core.async.t28994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28996,meta28995__$1){
var self__ = this;
var _28996__$1 = this;
return (new cljs.core.async.t28994(self__.ch,self__.f,self__.map_GT_,meta28995__$1));
});

cljs.core.async.t28994.cljs$lang$type = true;

cljs.core.async.t28994.cljs$lang$ctorStr = "cljs.core.async/t28994";

cljs.core.async.t28994.cljs$lang$ctorPrWriter = (function (this__18692__auto__,writer__18693__auto__,opt__18694__auto__){
return cljs.core._write.call(null,writer__18693__auto__,"cljs.core.async/t28994");
});

cljs.core.async.__GT_t28994 = (function cljs$core$async$map_GT__$___GT_t28994(ch__$1,f__$1,map_GT___$1,meta28995){
return (new cljs.core.async.t28994(ch__$1,f__$1,map_GT___$1,meta28995));
});

}

return (new cljs.core.async.t28994(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t29000 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29000 = (function (ch,p,filter_GT_,meta29001){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29001 = meta29001;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29000.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29000.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29000.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29000.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29000.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29000.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29000.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29002){
var self__ = this;
var _29002__$1 = this;
return self__.meta29001;
});

cljs.core.async.t29000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29002,meta29001__$1){
var self__ = this;
var _29002__$1 = this;
return (new cljs.core.async.t29000(self__.ch,self__.p,self__.filter_GT_,meta29001__$1));
});

cljs.core.async.t29000.cljs$lang$type = true;

cljs.core.async.t29000.cljs$lang$ctorStr = "cljs.core.async/t29000";

cljs.core.async.t29000.cljs$lang$ctorPrWriter = (function (this__18692__auto__,writer__18693__auto__,opt__18694__auto__){
return cljs.core._write.call(null,writer__18693__auto__,"cljs.core.async/t29000");
});

cljs.core.async.__GT_t29000 = (function cljs$core$async$filter_GT__$___GT_t29000(ch__$1,p__$1,filter_GT___$1,meta29001){
return (new cljs.core.async.t29000(ch__$1,p__$1,filter_GT___$1,meta29001));
});

}

return (new cljs.core.async.t29000(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__29004 = arguments.length;
switch (G__29004) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21665__auto___29047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___29047,out){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___29047,out){
return (function (state_29025){
var state_val_29026 = (state_29025[(1)]);
if((state_val_29026 === (7))){
var inst_29021 = (state_29025[(2)]);
var state_29025__$1 = state_29025;
var statearr_29027_29048 = state_29025__$1;
(statearr_29027_29048[(2)] = inst_29021);

(statearr_29027_29048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (1))){
var state_29025__$1 = state_29025;
var statearr_29028_29049 = state_29025__$1;
(statearr_29028_29049[(2)] = null);

(statearr_29028_29049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (4))){
var inst_29007 = (state_29025[(7)]);
var inst_29007__$1 = (state_29025[(2)]);
var inst_29008 = (inst_29007__$1 == null);
var state_29025__$1 = (function (){var statearr_29029 = state_29025;
(statearr_29029[(7)] = inst_29007__$1);

return statearr_29029;
})();
if(cljs.core.truth_(inst_29008)){
var statearr_29030_29050 = state_29025__$1;
(statearr_29030_29050[(1)] = (5));

} else {
var statearr_29031_29051 = state_29025__$1;
(statearr_29031_29051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (6))){
var inst_29007 = (state_29025[(7)]);
var inst_29012 = p.call(null,inst_29007);
var state_29025__$1 = state_29025;
if(cljs.core.truth_(inst_29012)){
var statearr_29032_29052 = state_29025__$1;
(statearr_29032_29052[(1)] = (8));

} else {
var statearr_29033_29053 = state_29025__$1;
(statearr_29033_29053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (3))){
var inst_29023 = (state_29025[(2)]);
var state_29025__$1 = state_29025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29025__$1,inst_29023);
} else {
if((state_val_29026 === (2))){
var state_29025__$1 = state_29025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29025__$1,(4),ch);
} else {
if((state_val_29026 === (11))){
var inst_29015 = (state_29025[(2)]);
var state_29025__$1 = state_29025;
var statearr_29034_29054 = state_29025__$1;
(statearr_29034_29054[(2)] = inst_29015);

(statearr_29034_29054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (9))){
var state_29025__$1 = state_29025;
var statearr_29035_29055 = state_29025__$1;
(statearr_29035_29055[(2)] = null);

(statearr_29035_29055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (5))){
var inst_29010 = cljs.core.async.close_BANG_.call(null,out);
var state_29025__$1 = state_29025;
var statearr_29036_29056 = state_29025__$1;
(statearr_29036_29056[(2)] = inst_29010);

(statearr_29036_29056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (10))){
var inst_29018 = (state_29025[(2)]);
var state_29025__$1 = (function (){var statearr_29037 = state_29025;
(statearr_29037[(8)] = inst_29018);

return statearr_29037;
})();
var statearr_29038_29057 = state_29025__$1;
(statearr_29038_29057[(2)] = null);

(statearr_29038_29057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (8))){
var inst_29007 = (state_29025[(7)]);
var state_29025__$1 = state_29025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29025__$1,(11),out,inst_29007);
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
});})(c__21665__auto___29047,out))
;
return ((function (switch__21603__auto__,c__21665__auto___29047,out){
return (function() {
var cljs$core$async$state_machine__21604__auto__ = null;
var cljs$core$async$state_machine__21604__auto____0 = (function (){
var statearr_29042 = [null,null,null,null,null,null,null,null,null];
(statearr_29042[(0)] = cljs$core$async$state_machine__21604__auto__);

(statearr_29042[(1)] = (1));

return statearr_29042;
});
var cljs$core$async$state_machine__21604__auto____1 = (function (state_29025){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_29025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e29043){if((e29043 instanceof Object)){
var ex__21607__auto__ = e29043;
var statearr_29044_29058 = state_29025;
(statearr_29044_29058[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29059 = state_29025;
state_29025 = G__29059;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$state_machine__21604__auto__ = function(state_29025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21604__auto____1.call(this,state_29025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21604__auto____0;
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21604__auto____1;
return cljs$core$async$state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___29047,out))
})();
var state__21667__auto__ = (function (){var statearr_29045 = f__21666__auto__.call(null);
(statearr_29045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___29047);

return statearr_29045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___29047,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__29061 = arguments.length;
switch (G__29061) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto__){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto__){
return (function (state_29228){
var state_val_29229 = (state_29228[(1)]);
if((state_val_29229 === (7))){
var inst_29224 = (state_29228[(2)]);
var state_29228__$1 = state_29228;
var statearr_29230_29271 = state_29228__$1;
(statearr_29230_29271[(2)] = inst_29224);

(statearr_29230_29271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (20))){
var inst_29194 = (state_29228[(7)]);
var inst_29205 = (state_29228[(2)]);
var inst_29206 = cljs.core.next.call(null,inst_29194);
var inst_29180 = inst_29206;
var inst_29181 = null;
var inst_29182 = (0);
var inst_29183 = (0);
var state_29228__$1 = (function (){var statearr_29231 = state_29228;
(statearr_29231[(8)] = inst_29181);

(statearr_29231[(9)] = inst_29183);

(statearr_29231[(10)] = inst_29180);

(statearr_29231[(11)] = inst_29182);

(statearr_29231[(12)] = inst_29205);

return statearr_29231;
})();
var statearr_29232_29272 = state_29228__$1;
(statearr_29232_29272[(2)] = null);

(statearr_29232_29272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (1))){
var state_29228__$1 = state_29228;
var statearr_29233_29273 = state_29228__$1;
(statearr_29233_29273[(2)] = null);

(statearr_29233_29273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (4))){
var inst_29169 = (state_29228[(13)]);
var inst_29169__$1 = (state_29228[(2)]);
var inst_29170 = (inst_29169__$1 == null);
var state_29228__$1 = (function (){var statearr_29234 = state_29228;
(statearr_29234[(13)] = inst_29169__$1);

return statearr_29234;
})();
if(cljs.core.truth_(inst_29170)){
var statearr_29235_29274 = state_29228__$1;
(statearr_29235_29274[(1)] = (5));

} else {
var statearr_29236_29275 = state_29228__$1;
(statearr_29236_29275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (15))){
var state_29228__$1 = state_29228;
var statearr_29240_29276 = state_29228__$1;
(statearr_29240_29276[(2)] = null);

(statearr_29240_29276[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (21))){
var state_29228__$1 = state_29228;
var statearr_29241_29277 = state_29228__$1;
(statearr_29241_29277[(2)] = null);

(statearr_29241_29277[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (13))){
var inst_29181 = (state_29228[(8)]);
var inst_29183 = (state_29228[(9)]);
var inst_29180 = (state_29228[(10)]);
var inst_29182 = (state_29228[(11)]);
var inst_29190 = (state_29228[(2)]);
var inst_29191 = (inst_29183 + (1));
var tmp29237 = inst_29181;
var tmp29238 = inst_29180;
var tmp29239 = inst_29182;
var inst_29180__$1 = tmp29238;
var inst_29181__$1 = tmp29237;
var inst_29182__$1 = tmp29239;
var inst_29183__$1 = inst_29191;
var state_29228__$1 = (function (){var statearr_29242 = state_29228;
(statearr_29242[(8)] = inst_29181__$1);

(statearr_29242[(9)] = inst_29183__$1);

(statearr_29242[(10)] = inst_29180__$1);

(statearr_29242[(11)] = inst_29182__$1);

(statearr_29242[(14)] = inst_29190);

return statearr_29242;
})();
var statearr_29243_29278 = state_29228__$1;
(statearr_29243_29278[(2)] = null);

(statearr_29243_29278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (22))){
var state_29228__$1 = state_29228;
var statearr_29244_29279 = state_29228__$1;
(statearr_29244_29279[(2)] = null);

(statearr_29244_29279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (6))){
var inst_29169 = (state_29228[(13)]);
var inst_29178 = f.call(null,inst_29169);
var inst_29179 = cljs.core.seq.call(null,inst_29178);
var inst_29180 = inst_29179;
var inst_29181 = null;
var inst_29182 = (0);
var inst_29183 = (0);
var state_29228__$1 = (function (){var statearr_29245 = state_29228;
(statearr_29245[(8)] = inst_29181);

(statearr_29245[(9)] = inst_29183);

(statearr_29245[(10)] = inst_29180);

(statearr_29245[(11)] = inst_29182);

return statearr_29245;
})();
var statearr_29246_29280 = state_29228__$1;
(statearr_29246_29280[(2)] = null);

(statearr_29246_29280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (17))){
var inst_29194 = (state_29228[(7)]);
var inst_29198 = cljs.core.chunk_first.call(null,inst_29194);
var inst_29199 = cljs.core.chunk_rest.call(null,inst_29194);
var inst_29200 = cljs.core.count.call(null,inst_29198);
var inst_29180 = inst_29199;
var inst_29181 = inst_29198;
var inst_29182 = inst_29200;
var inst_29183 = (0);
var state_29228__$1 = (function (){var statearr_29247 = state_29228;
(statearr_29247[(8)] = inst_29181);

(statearr_29247[(9)] = inst_29183);

(statearr_29247[(10)] = inst_29180);

(statearr_29247[(11)] = inst_29182);

return statearr_29247;
})();
var statearr_29248_29281 = state_29228__$1;
(statearr_29248_29281[(2)] = null);

(statearr_29248_29281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (3))){
var inst_29226 = (state_29228[(2)]);
var state_29228__$1 = state_29228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29228__$1,inst_29226);
} else {
if((state_val_29229 === (12))){
var inst_29214 = (state_29228[(2)]);
var state_29228__$1 = state_29228;
var statearr_29249_29282 = state_29228__$1;
(statearr_29249_29282[(2)] = inst_29214);

(statearr_29249_29282[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (2))){
var state_29228__$1 = state_29228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29228__$1,(4),in$);
} else {
if((state_val_29229 === (23))){
var inst_29222 = (state_29228[(2)]);
var state_29228__$1 = state_29228;
var statearr_29250_29283 = state_29228__$1;
(statearr_29250_29283[(2)] = inst_29222);

(statearr_29250_29283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (19))){
var inst_29209 = (state_29228[(2)]);
var state_29228__$1 = state_29228;
var statearr_29251_29284 = state_29228__$1;
(statearr_29251_29284[(2)] = inst_29209);

(statearr_29251_29284[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (11))){
var inst_29194 = (state_29228[(7)]);
var inst_29180 = (state_29228[(10)]);
var inst_29194__$1 = cljs.core.seq.call(null,inst_29180);
var state_29228__$1 = (function (){var statearr_29252 = state_29228;
(statearr_29252[(7)] = inst_29194__$1);

return statearr_29252;
})();
if(inst_29194__$1){
var statearr_29253_29285 = state_29228__$1;
(statearr_29253_29285[(1)] = (14));

} else {
var statearr_29254_29286 = state_29228__$1;
(statearr_29254_29286[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (9))){
var inst_29216 = (state_29228[(2)]);
var inst_29217 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29228__$1 = (function (){var statearr_29255 = state_29228;
(statearr_29255[(15)] = inst_29216);

return statearr_29255;
})();
if(cljs.core.truth_(inst_29217)){
var statearr_29256_29287 = state_29228__$1;
(statearr_29256_29287[(1)] = (21));

} else {
var statearr_29257_29288 = state_29228__$1;
(statearr_29257_29288[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (5))){
var inst_29172 = cljs.core.async.close_BANG_.call(null,out);
var state_29228__$1 = state_29228;
var statearr_29258_29289 = state_29228__$1;
(statearr_29258_29289[(2)] = inst_29172);

(statearr_29258_29289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (14))){
var inst_29194 = (state_29228[(7)]);
var inst_29196 = cljs.core.chunked_seq_QMARK_.call(null,inst_29194);
var state_29228__$1 = state_29228;
if(inst_29196){
var statearr_29259_29290 = state_29228__$1;
(statearr_29259_29290[(1)] = (17));

} else {
var statearr_29260_29291 = state_29228__$1;
(statearr_29260_29291[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (16))){
var inst_29212 = (state_29228[(2)]);
var state_29228__$1 = state_29228;
var statearr_29261_29292 = state_29228__$1;
(statearr_29261_29292[(2)] = inst_29212);

(statearr_29261_29292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29229 === (10))){
var inst_29181 = (state_29228[(8)]);
var inst_29183 = (state_29228[(9)]);
var inst_29188 = cljs.core._nth.call(null,inst_29181,inst_29183);
var state_29228__$1 = state_29228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29228__$1,(13),out,inst_29188);
} else {
if((state_val_29229 === (18))){
var inst_29194 = (state_29228[(7)]);
var inst_29203 = cljs.core.first.call(null,inst_29194);
var state_29228__$1 = state_29228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29228__$1,(20),out,inst_29203);
} else {
if((state_val_29229 === (8))){
var inst_29183 = (state_29228[(9)]);
var inst_29182 = (state_29228[(11)]);
var inst_29185 = (inst_29183 < inst_29182);
var inst_29186 = inst_29185;
var state_29228__$1 = state_29228;
if(cljs.core.truth_(inst_29186)){
var statearr_29262_29293 = state_29228__$1;
(statearr_29262_29293[(1)] = (10));

} else {
var statearr_29263_29294 = state_29228__$1;
(statearr_29263_29294[(1)] = (11));

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
});})(c__21665__auto__))
;
return ((function (switch__21603__auto__,c__21665__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21604__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21604__auto____0 = (function (){
var statearr_29267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29267[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21604__auto__);

(statearr_29267[(1)] = (1));

return statearr_29267;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21604__auto____1 = (function (state_29228){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_29228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e29268){if((e29268 instanceof Object)){
var ex__21607__auto__ = e29268;
var statearr_29269_29295 = state_29228;
(statearr_29269_29295[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29296 = state_29228;
state_29228 = G__29296;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21604__auto__ = function(state_29228){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21604__auto____1.call(this,state_29228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21604__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21604__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto__))
})();
var state__21667__auto__ = (function (){var statearr_29270 = f__21666__auto__.call(null);
(statearr_29270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto__);

return statearr_29270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto__))
);

return c__21665__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__29298 = arguments.length;
switch (G__29298) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__29301 = arguments.length;
switch (G__29301) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__29304 = arguments.length;
switch (G__29304) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21665__auto___29354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___29354,out){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___29354,out){
return (function (state_29328){
var state_val_29329 = (state_29328[(1)]);
if((state_val_29329 === (7))){
var inst_29323 = (state_29328[(2)]);
var state_29328__$1 = state_29328;
var statearr_29330_29355 = state_29328__$1;
(statearr_29330_29355[(2)] = inst_29323);

(statearr_29330_29355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (1))){
var inst_29305 = null;
var state_29328__$1 = (function (){var statearr_29331 = state_29328;
(statearr_29331[(7)] = inst_29305);

return statearr_29331;
})();
var statearr_29332_29356 = state_29328__$1;
(statearr_29332_29356[(2)] = null);

(statearr_29332_29356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (4))){
var inst_29308 = (state_29328[(8)]);
var inst_29308__$1 = (state_29328[(2)]);
var inst_29309 = (inst_29308__$1 == null);
var inst_29310 = cljs.core.not.call(null,inst_29309);
var state_29328__$1 = (function (){var statearr_29333 = state_29328;
(statearr_29333[(8)] = inst_29308__$1);

return statearr_29333;
})();
if(inst_29310){
var statearr_29334_29357 = state_29328__$1;
(statearr_29334_29357[(1)] = (5));

} else {
var statearr_29335_29358 = state_29328__$1;
(statearr_29335_29358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (6))){
var state_29328__$1 = state_29328;
var statearr_29336_29359 = state_29328__$1;
(statearr_29336_29359[(2)] = null);

(statearr_29336_29359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (3))){
var inst_29325 = (state_29328[(2)]);
var inst_29326 = cljs.core.async.close_BANG_.call(null,out);
var state_29328__$1 = (function (){var statearr_29337 = state_29328;
(statearr_29337[(9)] = inst_29325);

return statearr_29337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29328__$1,inst_29326);
} else {
if((state_val_29329 === (2))){
var state_29328__$1 = state_29328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29328__$1,(4),ch);
} else {
if((state_val_29329 === (11))){
var inst_29308 = (state_29328[(8)]);
var inst_29317 = (state_29328[(2)]);
var inst_29305 = inst_29308;
var state_29328__$1 = (function (){var statearr_29338 = state_29328;
(statearr_29338[(7)] = inst_29305);

(statearr_29338[(10)] = inst_29317);

return statearr_29338;
})();
var statearr_29339_29360 = state_29328__$1;
(statearr_29339_29360[(2)] = null);

(statearr_29339_29360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (9))){
var inst_29308 = (state_29328[(8)]);
var state_29328__$1 = state_29328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29328__$1,(11),out,inst_29308);
} else {
if((state_val_29329 === (5))){
var inst_29305 = (state_29328[(7)]);
var inst_29308 = (state_29328[(8)]);
var inst_29312 = cljs.core._EQ_.call(null,inst_29308,inst_29305);
var state_29328__$1 = state_29328;
if(inst_29312){
var statearr_29341_29361 = state_29328__$1;
(statearr_29341_29361[(1)] = (8));

} else {
var statearr_29342_29362 = state_29328__$1;
(statearr_29342_29362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (10))){
var inst_29320 = (state_29328[(2)]);
var state_29328__$1 = state_29328;
var statearr_29343_29363 = state_29328__$1;
(statearr_29343_29363[(2)] = inst_29320);

(statearr_29343_29363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (8))){
var inst_29305 = (state_29328[(7)]);
var tmp29340 = inst_29305;
var inst_29305__$1 = tmp29340;
var state_29328__$1 = (function (){var statearr_29344 = state_29328;
(statearr_29344[(7)] = inst_29305__$1);

return statearr_29344;
})();
var statearr_29345_29364 = state_29328__$1;
(statearr_29345_29364[(2)] = null);

(statearr_29345_29364[(1)] = (2));


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
});})(c__21665__auto___29354,out))
;
return ((function (switch__21603__auto__,c__21665__auto___29354,out){
return (function() {
var cljs$core$async$state_machine__21604__auto__ = null;
var cljs$core$async$state_machine__21604__auto____0 = (function (){
var statearr_29349 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29349[(0)] = cljs$core$async$state_machine__21604__auto__);

(statearr_29349[(1)] = (1));

return statearr_29349;
});
var cljs$core$async$state_machine__21604__auto____1 = (function (state_29328){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_29328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e29350){if((e29350 instanceof Object)){
var ex__21607__auto__ = e29350;
var statearr_29351_29365 = state_29328;
(statearr_29351_29365[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29366 = state_29328;
state_29328 = G__29366;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$state_machine__21604__auto__ = function(state_29328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21604__auto____1.call(this,state_29328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21604__auto____0;
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21604__auto____1;
return cljs$core$async$state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___29354,out))
})();
var state__21667__auto__ = (function (){var statearr_29352 = f__21666__auto__.call(null);
(statearr_29352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___29354);

return statearr_29352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___29354,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__29368 = arguments.length;
switch (G__29368) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21665__auto___29437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___29437,out){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___29437,out){
return (function (state_29406){
var state_val_29407 = (state_29406[(1)]);
if((state_val_29407 === (7))){
var inst_29402 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29408_29438 = state_29406__$1;
(statearr_29408_29438[(2)] = inst_29402);

(statearr_29408_29438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (1))){
var inst_29369 = (new Array(n));
var inst_29370 = inst_29369;
var inst_29371 = (0);
var state_29406__$1 = (function (){var statearr_29409 = state_29406;
(statearr_29409[(7)] = inst_29371);

(statearr_29409[(8)] = inst_29370);

return statearr_29409;
})();
var statearr_29410_29439 = state_29406__$1;
(statearr_29410_29439[(2)] = null);

(statearr_29410_29439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (4))){
var inst_29374 = (state_29406[(9)]);
var inst_29374__$1 = (state_29406[(2)]);
var inst_29375 = (inst_29374__$1 == null);
var inst_29376 = cljs.core.not.call(null,inst_29375);
var state_29406__$1 = (function (){var statearr_29411 = state_29406;
(statearr_29411[(9)] = inst_29374__$1);

return statearr_29411;
})();
if(inst_29376){
var statearr_29412_29440 = state_29406__$1;
(statearr_29412_29440[(1)] = (5));

} else {
var statearr_29413_29441 = state_29406__$1;
(statearr_29413_29441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (15))){
var inst_29396 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29414_29442 = state_29406__$1;
(statearr_29414_29442[(2)] = inst_29396);

(statearr_29414_29442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (13))){
var state_29406__$1 = state_29406;
var statearr_29415_29443 = state_29406__$1;
(statearr_29415_29443[(2)] = null);

(statearr_29415_29443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (6))){
var inst_29371 = (state_29406[(7)]);
var inst_29392 = (inst_29371 > (0));
var state_29406__$1 = state_29406;
if(cljs.core.truth_(inst_29392)){
var statearr_29416_29444 = state_29406__$1;
(statearr_29416_29444[(1)] = (12));

} else {
var statearr_29417_29445 = state_29406__$1;
(statearr_29417_29445[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (3))){
var inst_29404 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29406__$1,inst_29404);
} else {
if((state_val_29407 === (12))){
var inst_29370 = (state_29406[(8)]);
var inst_29394 = cljs.core.vec.call(null,inst_29370);
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29406__$1,(15),out,inst_29394);
} else {
if((state_val_29407 === (2))){
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29406__$1,(4),ch);
} else {
if((state_val_29407 === (11))){
var inst_29386 = (state_29406[(2)]);
var inst_29387 = (new Array(n));
var inst_29370 = inst_29387;
var inst_29371 = (0);
var state_29406__$1 = (function (){var statearr_29418 = state_29406;
(statearr_29418[(10)] = inst_29386);

(statearr_29418[(7)] = inst_29371);

(statearr_29418[(8)] = inst_29370);

return statearr_29418;
})();
var statearr_29419_29446 = state_29406__$1;
(statearr_29419_29446[(2)] = null);

(statearr_29419_29446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (9))){
var inst_29370 = (state_29406[(8)]);
var inst_29384 = cljs.core.vec.call(null,inst_29370);
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29406__$1,(11),out,inst_29384);
} else {
if((state_val_29407 === (5))){
var inst_29374 = (state_29406[(9)]);
var inst_29379 = (state_29406[(11)]);
var inst_29371 = (state_29406[(7)]);
var inst_29370 = (state_29406[(8)]);
var inst_29378 = (inst_29370[inst_29371] = inst_29374);
var inst_29379__$1 = (inst_29371 + (1));
var inst_29380 = (inst_29379__$1 < n);
var state_29406__$1 = (function (){var statearr_29420 = state_29406;
(statearr_29420[(11)] = inst_29379__$1);

(statearr_29420[(12)] = inst_29378);

return statearr_29420;
})();
if(cljs.core.truth_(inst_29380)){
var statearr_29421_29447 = state_29406__$1;
(statearr_29421_29447[(1)] = (8));

} else {
var statearr_29422_29448 = state_29406__$1;
(statearr_29422_29448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (14))){
var inst_29399 = (state_29406[(2)]);
var inst_29400 = cljs.core.async.close_BANG_.call(null,out);
var state_29406__$1 = (function (){var statearr_29424 = state_29406;
(statearr_29424[(13)] = inst_29399);

return statearr_29424;
})();
var statearr_29425_29449 = state_29406__$1;
(statearr_29425_29449[(2)] = inst_29400);

(statearr_29425_29449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (10))){
var inst_29390 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29426_29450 = state_29406__$1;
(statearr_29426_29450[(2)] = inst_29390);

(statearr_29426_29450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (8))){
var inst_29379 = (state_29406[(11)]);
var inst_29370 = (state_29406[(8)]);
var tmp29423 = inst_29370;
var inst_29370__$1 = tmp29423;
var inst_29371 = inst_29379;
var state_29406__$1 = (function (){var statearr_29427 = state_29406;
(statearr_29427[(7)] = inst_29371);

(statearr_29427[(8)] = inst_29370__$1);

return statearr_29427;
})();
var statearr_29428_29451 = state_29406__$1;
(statearr_29428_29451[(2)] = null);

(statearr_29428_29451[(1)] = (2));


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
});})(c__21665__auto___29437,out))
;
return ((function (switch__21603__auto__,c__21665__auto___29437,out){
return (function() {
var cljs$core$async$state_machine__21604__auto__ = null;
var cljs$core$async$state_machine__21604__auto____0 = (function (){
var statearr_29432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29432[(0)] = cljs$core$async$state_machine__21604__auto__);

(statearr_29432[(1)] = (1));

return statearr_29432;
});
var cljs$core$async$state_machine__21604__auto____1 = (function (state_29406){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_29406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e29433){if((e29433 instanceof Object)){
var ex__21607__auto__ = e29433;
var statearr_29434_29452 = state_29406;
(statearr_29434_29452[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29453 = state_29406;
state_29406 = G__29453;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$state_machine__21604__auto__ = function(state_29406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21604__auto____1.call(this,state_29406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21604__auto____0;
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21604__auto____1;
return cljs$core$async$state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___29437,out))
})();
var state__21667__auto__ = (function (){var statearr_29435 = f__21666__auto__.call(null);
(statearr_29435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___29437);

return statearr_29435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___29437,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__29455 = arguments.length;
switch (G__29455) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21665__auto___29528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21665__auto___29528,out){
return (function (){
var f__21666__auto__ = (function (){var switch__21603__auto__ = ((function (c__21665__auto___29528,out){
return (function (state_29497){
var state_val_29498 = (state_29497[(1)]);
if((state_val_29498 === (7))){
var inst_29493 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29499_29529 = state_29497__$1;
(statearr_29499_29529[(2)] = inst_29493);

(statearr_29499_29529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (1))){
var inst_29456 = [];
var inst_29457 = inst_29456;
var inst_29458 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29497__$1 = (function (){var statearr_29500 = state_29497;
(statearr_29500[(7)] = inst_29457);

(statearr_29500[(8)] = inst_29458);

return statearr_29500;
})();
var statearr_29501_29530 = state_29497__$1;
(statearr_29501_29530[(2)] = null);

(statearr_29501_29530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (4))){
var inst_29461 = (state_29497[(9)]);
var inst_29461__$1 = (state_29497[(2)]);
var inst_29462 = (inst_29461__$1 == null);
var inst_29463 = cljs.core.not.call(null,inst_29462);
var state_29497__$1 = (function (){var statearr_29502 = state_29497;
(statearr_29502[(9)] = inst_29461__$1);

return statearr_29502;
})();
if(inst_29463){
var statearr_29503_29531 = state_29497__$1;
(statearr_29503_29531[(1)] = (5));

} else {
var statearr_29504_29532 = state_29497__$1;
(statearr_29504_29532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (15))){
var inst_29487 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29505_29533 = state_29497__$1;
(statearr_29505_29533[(2)] = inst_29487);

(statearr_29505_29533[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (13))){
var state_29497__$1 = state_29497;
var statearr_29506_29534 = state_29497__$1;
(statearr_29506_29534[(2)] = null);

(statearr_29506_29534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (6))){
var inst_29457 = (state_29497[(7)]);
var inst_29482 = inst_29457.length;
var inst_29483 = (inst_29482 > (0));
var state_29497__$1 = state_29497;
if(cljs.core.truth_(inst_29483)){
var statearr_29507_29535 = state_29497__$1;
(statearr_29507_29535[(1)] = (12));

} else {
var statearr_29508_29536 = state_29497__$1;
(statearr_29508_29536[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (3))){
var inst_29495 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29497__$1,inst_29495);
} else {
if((state_val_29498 === (12))){
var inst_29457 = (state_29497[(7)]);
var inst_29485 = cljs.core.vec.call(null,inst_29457);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29497__$1,(15),out,inst_29485);
} else {
if((state_val_29498 === (2))){
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29497__$1,(4),ch);
} else {
if((state_val_29498 === (11))){
var inst_29465 = (state_29497[(10)]);
var inst_29461 = (state_29497[(9)]);
var inst_29475 = (state_29497[(2)]);
var inst_29476 = [];
var inst_29477 = inst_29476.push(inst_29461);
var inst_29457 = inst_29476;
var inst_29458 = inst_29465;
var state_29497__$1 = (function (){var statearr_29509 = state_29497;
(statearr_29509[(11)] = inst_29475);

(statearr_29509[(12)] = inst_29477);

(statearr_29509[(7)] = inst_29457);

(statearr_29509[(8)] = inst_29458);

return statearr_29509;
})();
var statearr_29510_29537 = state_29497__$1;
(statearr_29510_29537[(2)] = null);

(statearr_29510_29537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (9))){
var inst_29457 = (state_29497[(7)]);
var inst_29473 = cljs.core.vec.call(null,inst_29457);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29497__$1,(11),out,inst_29473);
} else {
if((state_val_29498 === (5))){
var inst_29465 = (state_29497[(10)]);
var inst_29461 = (state_29497[(9)]);
var inst_29458 = (state_29497[(8)]);
var inst_29465__$1 = f.call(null,inst_29461);
var inst_29466 = cljs.core._EQ_.call(null,inst_29465__$1,inst_29458);
var inst_29467 = cljs.core.keyword_identical_QMARK_.call(null,inst_29458,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29468 = (inst_29466) || (inst_29467);
var state_29497__$1 = (function (){var statearr_29511 = state_29497;
(statearr_29511[(10)] = inst_29465__$1);

return statearr_29511;
})();
if(cljs.core.truth_(inst_29468)){
var statearr_29512_29538 = state_29497__$1;
(statearr_29512_29538[(1)] = (8));

} else {
var statearr_29513_29539 = state_29497__$1;
(statearr_29513_29539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (14))){
var inst_29490 = (state_29497[(2)]);
var inst_29491 = cljs.core.async.close_BANG_.call(null,out);
var state_29497__$1 = (function (){var statearr_29515 = state_29497;
(statearr_29515[(13)] = inst_29490);

return statearr_29515;
})();
var statearr_29516_29540 = state_29497__$1;
(statearr_29516_29540[(2)] = inst_29491);

(statearr_29516_29540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (10))){
var inst_29480 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29517_29541 = state_29497__$1;
(statearr_29517_29541[(2)] = inst_29480);

(statearr_29517_29541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (8))){
var inst_29465 = (state_29497[(10)]);
var inst_29461 = (state_29497[(9)]);
var inst_29457 = (state_29497[(7)]);
var inst_29470 = inst_29457.push(inst_29461);
var tmp29514 = inst_29457;
var inst_29457__$1 = tmp29514;
var inst_29458 = inst_29465;
var state_29497__$1 = (function (){var statearr_29518 = state_29497;
(statearr_29518[(14)] = inst_29470);

(statearr_29518[(7)] = inst_29457__$1);

(statearr_29518[(8)] = inst_29458);

return statearr_29518;
})();
var statearr_29519_29542 = state_29497__$1;
(statearr_29519_29542[(2)] = null);

(statearr_29519_29542[(1)] = (2));


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
});})(c__21665__auto___29528,out))
;
return ((function (switch__21603__auto__,c__21665__auto___29528,out){
return (function() {
var cljs$core$async$state_machine__21604__auto__ = null;
var cljs$core$async$state_machine__21604__auto____0 = (function (){
var statearr_29523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29523[(0)] = cljs$core$async$state_machine__21604__auto__);

(statearr_29523[(1)] = (1));

return statearr_29523;
});
var cljs$core$async$state_machine__21604__auto____1 = (function (state_29497){
while(true){
var ret_value__21605__auto__ = (function (){try{while(true){
var result__21606__auto__ = switch__21603__auto__.call(null,state_29497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21606__auto__;
}
break;
}
}catch (e29524){if((e29524 instanceof Object)){
var ex__21607__auto__ = e29524;
var statearr_29525_29543 = state_29497;
(statearr_29525_29543[(5)] = ex__21607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29544 = state_29497;
state_29497 = G__29544;
continue;
} else {
return ret_value__21605__auto__;
}
break;
}
});
cljs$core$async$state_machine__21604__auto__ = function(state_29497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21604__auto____1.call(this,state_29497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21604__auto____0;
cljs$core$async$state_machine__21604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21604__auto____1;
return cljs$core$async$state_machine__21604__auto__;
})()
;})(switch__21603__auto__,c__21665__auto___29528,out))
})();
var state__21667__auto__ = (function (){var statearr_29526 = f__21666__auto__.call(null);
(statearr_29526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21665__auto___29528);

return statearr_29526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21667__auto__);
});})(c__21665__auto___29528,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map