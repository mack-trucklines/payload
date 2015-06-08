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
if(typeof cljs.core.async.t28453 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28453 = (function (f,fn_handler,meta28454){
this.f = f;
this.fn_handler = fn_handler;
this.meta28454 = meta28454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28453.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28453.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28453.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28455){
var self__ = this;
var _28455__$1 = this;
return self__.meta28454;
});

cljs.core.async.t28453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28455,meta28454__$1){
var self__ = this;
var _28455__$1 = this;
return (new cljs.core.async.t28453(self__.f,self__.fn_handler,meta28454__$1));
});

cljs.core.async.t28453.cljs$lang$type = true;

cljs.core.async.t28453.cljs$lang$ctorStr = "cljs.core.async/t28453";

cljs.core.async.t28453.cljs$lang$ctorPrWriter = (function (this__18692__auto__,writer__18693__auto__,opt__18694__auto__){
return cljs.core._write.call(null,writer__18693__auto__,"cljs.core.async/t28453");
});

cljs.core.async.__GT_t28453 = (function cljs$core$async$fn_handler_$___GT_t28453(f__$1,fn_handler__$1,meta28454){
return (new cljs.core.async.t28453(f__$1,fn_handler__$1,meta28454));
});

}

return (new cljs.core.async.t28453(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28457 = buff;
if(G__28457){
var bit__18787__auto__ = null;
if(cljs.core.truth_((function (){var or__18113__auto__ = bit__18787__auto__;
if(cljs.core.truth_(or__18113__auto__)){
return or__18113__auto__;
} else {
return G__28457.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28457.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28457);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28457);
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
var G__28459 = arguments.length;
switch (G__28459) {
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
var G__28462 = arguments.length;
switch (G__28462) {
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
var val_28464 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28464);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28464,ret){
return (function (){
return fn1.call(null,val_28464);
});})(val_28464,ret))
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
var G__28466 = arguments.length;
switch (G__28466) {
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
var n__18998__auto___28468 = n;
var x_28469 = (0);
while(true){
if((x_28469 < n__18998__auto___28468)){
(a[x_28469] = (0));

var G__28470 = (x_28469 + (1));
x_28469 = G__28470;
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

var G__28471 = (i + (1));
i = G__28471;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28475 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28475 = (function (flag,alt_flag,meta28476){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28476 = meta28476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28475.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28475.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28475.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28477){
var self__ = this;
var _28477__$1 = this;
return self__.meta28476;
});})(flag))
;

cljs.core.async.t28475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28477,meta28476__$1){
var self__ = this;
var _28477__$1 = this;
return (new cljs.core.async.t28475(self__.flag,self__.alt_flag,meta28476__$1));
});})(flag))
;

cljs.core.async.t28475.cljs$lang$type = true;

cljs.core.async.t28475.cljs$lang$ctorStr = "cljs.core.async/t28475";

cljs.core.async.t28475.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18692__auto__,writer__18693__auto__,opt__18694__auto__){
return cljs.core._write.call(null,writer__18693__auto__,"cljs.core.async/t28475");
});})(flag))
;

cljs.core.async.__GT_t28475 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28475(flag__$1,alt_flag__$1,meta28476){
return (new cljs.core.async.t28475(flag__$1,alt_flag__$1,meta28476));
});})(flag))
;

}

return (new cljs.core.async.t28475(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28481 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28481 = (function (cb,flag,alt_handler,meta28482){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28482 = meta28482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28481.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28483){
var self__ = this;
var _28483__$1 = this;
return self__.meta28482;
});

cljs.core.async.t28481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28483,meta28482__$1){
var self__ = this;
var _28483__$1 = this;
return (new cljs.core.async.t28481(self__.cb,self__.flag,self__.alt_handler,meta28482__$1));
});

cljs.core.async.t28481.cljs$lang$type = true;

cljs.core.async.t28481.cljs$lang$ctorStr = "cljs.core.async/t28481";

cljs.core.async.t28481.cljs$lang$ctorPrWriter = (function (this__18692__auto__,writer__18693__auto__,opt__18694__auto__){
return cljs.core._write.call(null,writer__18693__auto__,"cljs.core.async/t28481");
});

cljs.core.async.__GT_t28481 = (function cljs$core$async$alt_handler_$___GT_t28481(cb__$1,flag__$1,alt_handler__$1,meta28482){
return (new cljs.core.async.t28481(cb__$1,flag__$1,alt_handler__$1,meta28482));
});

}

return (new cljs.core.async.t28481(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28484_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28484_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28485_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28485_SHARP_,port], null));
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
var G__28486 = (i + (1));
i = G__28486;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28489){
var map__28490 = p__28489;
var map__28490__$1 = ((cljs.core.seq_QMARK_.call(null,map__28490))?cljs.core.apply.call(null,cljs.core.hash_map,map__28490):map__28490);
var opts = map__28490__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28487){
var G__28488 = cljs.core.first.call(null,seq28487);
var seq28487__$1 = cljs.core.next.call(null,seq28487);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28488,seq28487__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__28492 = arguments.length;
switch (G__28492) {
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
var c__21304__auto___28541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___28541){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto___28541){
return (function (state_28516){
var state_val_28517 = (state_28516[(1)]);
if((state_val_28517 === (7))){
var inst_28512 = (state_28516[(2)]);
var state_28516__$1 = state_28516;
var statearr_28518_28542 = state_28516__$1;
(statearr_28518_28542[(2)] = inst_28512);

(statearr_28518_28542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (1))){
var state_28516__$1 = state_28516;
var statearr_28519_28543 = state_28516__$1;
(statearr_28519_28543[(2)] = null);

(statearr_28519_28543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (4))){
var inst_28495 = (state_28516[(7)]);
var inst_28495__$1 = (state_28516[(2)]);
var inst_28496 = (inst_28495__$1 == null);
var state_28516__$1 = (function (){var statearr_28520 = state_28516;
(statearr_28520[(7)] = inst_28495__$1);

return statearr_28520;
})();
if(cljs.core.truth_(inst_28496)){
var statearr_28521_28544 = state_28516__$1;
(statearr_28521_28544[(1)] = (5));

} else {
var statearr_28522_28545 = state_28516__$1;
(statearr_28522_28545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (13))){
var state_28516__$1 = state_28516;
var statearr_28523_28546 = state_28516__$1;
(statearr_28523_28546[(2)] = null);

(statearr_28523_28546[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (6))){
var inst_28495 = (state_28516[(7)]);
var state_28516__$1 = state_28516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28516__$1,(11),to,inst_28495);
} else {
if((state_val_28517 === (3))){
var inst_28514 = (state_28516[(2)]);
var state_28516__$1 = state_28516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28516__$1,inst_28514);
} else {
if((state_val_28517 === (12))){
var state_28516__$1 = state_28516;
var statearr_28524_28547 = state_28516__$1;
(statearr_28524_28547[(2)] = null);

(statearr_28524_28547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (2))){
var state_28516__$1 = state_28516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28516__$1,(4),from);
} else {
if((state_val_28517 === (11))){
var inst_28505 = (state_28516[(2)]);
var state_28516__$1 = state_28516;
if(cljs.core.truth_(inst_28505)){
var statearr_28525_28548 = state_28516__$1;
(statearr_28525_28548[(1)] = (12));

} else {
var statearr_28526_28549 = state_28516__$1;
(statearr_28526_28549[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (9))){
var state_28516__$1 = state_28516;
var statearr_28527_28550 = state_28516__$1;
(statearr_28527_28550[(2)] = null);

(statearr_28527_28550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (5))){
var state_28516__$1 = state_28516;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28528_28551 = state_28516__$1;
(statearr_28528_28551[(1)] = (8));

} else {
var statearr_28529_28552 = state_28516__$1;
(statearr_28529_28552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (14))){
var inst_28510 = (state_28516[(2)]);
var state_28516__$1 = state_28516;
var statearr_28530_28553 = state_28516__$1;
(statearr_28530_28553[(2)] = inst_28510);

(statearr_28530_28553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (10))){
var inst_28502 = (state_28516[(2)]);
var state_28516__$1 = state_28516;
var statearr_28531_28554 = state_28516__$1;
(statearr_28531_28554[(2)] = inst_28502);

(statearr_28531_28554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (8))){
var inst_28499 = cljs.core.async.close_BANG_.call(null,to);
var state_28516__$1 = state_28516;
var statearr_28532_28555 = state_28516__$1;
(statearr_28532_28555[(2)] = inst_28499);

(statearr_28532_28555[(1)] = (10));


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
});})(c__21304__auto___28541))
;
return ((function (switch__21283__auto__,c__21304__auto___28541){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_28536 = [null,null,null,null,null,null,null,null];
(statearr_28536[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_28536[(1)] = (1));

return statearr_28536;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_28516){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28537){if((e28537 instanceof Object)){
var ex__21287__auto__ = e28537;
var statearr_28538_28556 = state_28516;
(statearr_28538_28556[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28557 = state_28516;
state_28516 = G__28557;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_28516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_28516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto___28541))
})();
var state__21306__auto__ = (function (){var statearr_28539 = f__21305__auto__.call(null);
(statearr_28539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___28541);

return statearr_28539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___28541))
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
return (function (p__28741){
var vec__28742 = p__28741;
var v = cljs.core.nth.call(null,vec__28742,(0),null);
var p = cljs.core.nth.call(null,vec__28742,(1),null);
var job = vec__28742;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21304__auto___28924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___28924,res,vec__28742,v,p,job,jobs,results){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto___28924,res,vec__28742,v,p,job,jobs,results){
return (function (state_28747){
var state_val_28748 = (state_28747[(1)]);
if((state_val_28748 === (2))){
var inst_28744 = (state_28747[(2)]);
var inst_28745 = cljs.core.async.close_BANG_.call(null,res);
var state_28747__$1 = (function (){var statearr_28749 = state_28747;
(statearr_28749[(7)] = inst_28744);

return statearr_28749;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28747__$1,inst_28745);
} else {
if((state_val_28748 === (1))){
var state_28747__$1 = state_28747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28747__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21304__auto___28924,res,vec__28742,v,p,job,jobs,results))
;
return ((function (switch__21283__auto__,c__21304__auto___28924,res,vec__28742,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_28753 = [null,null,null,null,null,null,null,null];
(statearr_28753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_28753[(1)] = (1));

return statearr_28753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_28747){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28754){if((e28754 instanceof Object)){
var ex__21287__auto__ = e28754;
var statearr_28755_28925 = state_28747;
(statearr_28755_28925[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28926 = state_28747;
state_28747 = G__28926;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_28747){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_28747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto___28924,res,vec__28742,v,p,job,jobs,results))
})();
var state__21306__auto__ = (function (){var statearr_28756 = f__21305__auto__.call(null);
(statearr_28756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___28924);

return statearr_28756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___28924,res,vec__28742,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28757){
var vec__28758 = p__28757;
var v = cljs.core.nth.call(null,vec__28758,(0),null);
var p = cljs.core.nth.call(null,vec__28758,(1),null);
var job = vec__28758;
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
var n__18998__auto___28927 = n;
var __28928 = (0);
while(true){
if((__28928 < n__18998__auto___28927)){
var G__28759_28929 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28759_28929) {
case "async":
var c__21304__auto___28931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28928,c__21304__auto___28931,G__28759_28929,n__18998__auto___28927,jobs,results,process,async){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (__28928,c__21304__auto___28931,G__28759_28929,n__18998__auto___28927,jobs,results,process,async){
return (function (state_28772){
var state_val_28773 = (state_28772[(1)]);
if((state_val_28773 === (7))){
var inst_28768 = (state_28772[(2)]);
var state_28772__$1 = state_28772;
var statearr_28774_28932 = state_28772__$1;
(statearr_28774_28932[(2)] = inst_28768);

(statearr_28774_28932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28773 === (6))){
var state_28772__$1 = state_28772;
var statearr_28775_28933 = state_28772__$1;
(statearr_28775_28933[(2)] = null);

(statearr_28775_28933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28773 === (5))){
var state_28772__$1 = state_28772;
var statearr_28776_28934 = state_28772__$1;
(statearr_28776_28934[(2)] = null);

(statearr_28776_28934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28773 === (4))){
var inst_28762 = (state_28772[(2)]);
var inst_28763 = async.call(null,inst_28762);
var state_28772__$1 = state_28772;
if(cljs.core.truth_(inst_28763)){
var statearr_28777_28935 = state_28772__$1;
(statearr_28777_28935[(1)] = (5));

} else {
var statearr_28778_28936 = state_28772__$1;
(statearr_28778_28936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28773 === (3))){
var inst_28770 = (state_28772[(2)]);
var state_28772__$1 = state_28772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28772__$1,inst_28770);
} else {
if((state_val_28773 === (2))){
var state_28772__$1 = state_28772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28772__$1,(4),jobs);
} else {
if((state_val_28773 === (1))){
var state_28772__$1 = state_28772;
var statearr_28779_28937 = state_28772__$1;
(statearr_28779_28937[(2)] = null);

(statearr_28779_28937[(1)] = (2));


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
});})(__28928,c__21304__auto___28931,G__28759_28929,n__18998__auto___28927,jobs,results,process,async))
;
return ((function (__28928,switch__21283__auto__,c__21304__auto___28931,G__28759_28929,n__18998__auto___28927,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_28783 = [null,null,null,null,null,null,null];
(statearr_28783[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_28783[(1)] = (1));

return statearr_28783;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_28772){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28784){if((e28784 instanceof Object)){
var ex__21287__auto__ = e28784;
var statearr_28785_28938 = state_28772;
(statearr_28785_28938[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28939 = state_28772;
state_28772 = G__28939;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_28772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_28772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(__28928,switch__21283__auto__,c__21304__auto___28931,G__28759_28929,n__18998__auto___28927,jobs,results,process,async))
})();
var state__21306__auto__ = (function (){var statearr_28786 = f__21305__auto__.call(null);
(statearr_28786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___28931);

return statearr_28786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(__28928,c__21304__auto___28931,G__28759_28929,n__18998__auto___28927,jobs,results,process,async))
);


break;
case "compute":
var c__21304__auto___28940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28928,c__21304__auto___28940,G__28759_28929,n__18998__auto___28927,jobs,results,process,async){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (__28928,c__21304__auto___28940,G__28759_28929,n__18998__auto___28927,jobs,results,process,async){
return (function (state_28799){
var state_val_28800 = (state_28799[(1)]);
if((state_val_28800 === (7))){
var inst_28795 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
var statearr_28801_28941 = state_28799__$1;
(statearr_28801_28941[(2)] = inst_28795);

(statearr_28801_28941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (6))){
var state_28799__$1 = state_28799;
var statearr_28802_28942 = state_28799__$1;
(statearr_28802_28942[(2)] = null);

(statearr_28802_28942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (5))){
var state_28799__$1 = state_28799;
var statearr_28803_28943 = state_28799__$1;
(statearr_28803_28943[(2)] = null);

(statearr_28803_28943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (4))){
var inst_28789 = (state_28799[(2)]);
var inst_28790 = process.call(null,inst_28789);
var state_28799__$1 = state_28799;
if(cljs.core.truth_(inst_28790)){
var statearr_28804_28944 = state_28799__$1;
(statearr_28804_28944[(1)] = (5));

} else {
var statearr_28805_28945 = state_28799__$1;
(statearr_28805_28945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (3))){
var inst_28797 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28799__$1,inst_28797);
} else {
if((state_val_28800 === (2))){
var state_28799__$1 = state_28799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28799__$1,(4),jobs);
} else {
if((state_val_28800 === (1))){
var state_28799__$1 = state_28799;
var statearr_28806_28946 = state_28799__$1;
(statearr_28806_28946[(2)] = null);

(statearr_28806_28946[(1)] = (2));


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
});})(__28928,c__21304__auto___28940,G__28759_28929,n__18998__auto___28927,jobs,results,process,async))
;
return ((function (__28928,switch__21283__auto__,c__21304__auto___28940,G__28759_28929,n__18998__auto___28927,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_28810 = [null,null,null,null,null,null,null];
(statearr_28810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_28810[(1)] = (1));

return statearr_28810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_28799){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28811){if((e28811 instanceof Object)){
var ex__21287__auto__ = e28811;
var statearr_28812_28947 = state_28799;
(statearr_28812_28947[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28948 = state_28799;
state_28799 = G__28948;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_28799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_28799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(__28928,switch__21283__auto__,c__21304__auto___28940,G__28759_28929,n__18998__auto___28927,jobs,results,process,async))
})();
var state__21306__auto__ = (function (){var statearr_28813 = f__21305__auto__.call(null);
(statearr_28813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___28940);

return statearr_28813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(__28928,c__21304__auto___28940,G__28759_28929,n__18998__auto___28927,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28949 = (__28928 + (1));
__28928 = G__28949;
continue;
} else {
}
break;
}

var c__21304__auto___28950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___28950,jobs,results,process,async){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto___28950,jobs,results,process,async){
return (function (state_28835){
var state_val_28836 = (state_28835[(1)]);
if((state_val_28836 === (9))){
var inst_28828 = (state_28835[(2)]);
var state_28835__$1 = (function (){var statearr_28837 = state_28835;
(statearr_28837[(7)] = inst_28828);

return statearr_28837;
})();
var statearr_28838_28951 = state_28835__$1;
(statearr_28838_28951[(2)] = null);

(statearr_28838_28951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (8))){
var inst_28821 = (state_28835[(8)]);
var inst_28826 = (state_28835[(2)]);
var state_28835__$1 = (function (){var statearr_28839 = state_28835;
(statearr_28839[(9)] = inst_28826);

return statearr_28839;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28835__$1,(9),results,inst_28821);
} else {
if((state_val_28836 === (7))){
var inst_28831 = (state_28835[(2)]);
var state_28835__$1 = state_28835;
var statearr_28840_28952 = state_28835__$1;
(statearr_28840_28952[(2)] = inst_28831);

(statearr_28840_28952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (6))){
var inst_28816 = (state_28835[(10)]);
var inst_28821 = (state_28835[(8)]);
var inst_28821__$1 = cljs.core.async.chan.call(null,(1));
var inst_28822 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28823 = [inst_28816,inst_28821__$1];
var inst_28824 = (new cljs.core.PersistentVector(null,2,(5),inst_28822,inst_28823,null));
var state_28835__$1 = (function (){var statearr_28841 = state_28835;
(statearr_28841[(8)] = inst_28821__$1);

return statearr_28841;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28835__$1,(8),jobs,inst_28824);
} else {
if((state_val_28836 === (5))){
var inst_28819 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28835__$1 = state_28835;
var statearr_28842_28953 = state_28835__$1;
(statearr_28842_28953[(2)] = inst_28819);

(statearr_28842_28953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (4))){
var inst_28816 = (state_28835[(10)]);
var inst_28816__$1 = (state_28835[(2)]);
var inst_28817 = (inst_28816__$1 == null);
var state_28835__$1 = (function (){var statearr_28843 = state_28835;
(statearr_28843[(10)] = inst_28816__$1);

return statearr_28843;
})();
if(cljs.core.truth_(inst_28817)){
var statearr_28844_28954 = state_28835__$1;
(statearr_28844_28954[(1)] = (5));

} else {
var statearr_28845_28955 = state_28835__$1;
(statearr_28845_28955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (3))){
var inst_28833 = (state_28835[(2)]);
var state_28835__$1 = state_28835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28835__$1,inst_28833);
} else {
if((state_val_28836 === (2))){
var state_28835__$1 = state_28835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28835__$1,(4),from);
} else {
if((state_val_28836 === (1))){
var state_28835__$1 = state_28835;
var statearr_28846_28956 = state_28835__$1;
(statearr_28846_28956[(2)] = null);

(statearr_28846_28956[(1)] = (2));


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
});})(c__21304__auto___28950,jobs,results,process,async))
;
return ((function (switch__21283__auto__,c__21304__auto___28950,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_28850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28850[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_28850[(1)] = (1));

return statearr_28850;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_28835){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28851){if((e28851 instanceof Object)){
var ex__21287__auto__ = e28851;
var statearr_28852_28957 = state_28835;
(statearr_28852_28957[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28958 = state_28835;
state_28835 = G__28958;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_28835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_28835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto___28950,jobs,results,process,async))
})();
var state__21306__auto__ = (function (){var statearr_28853 = f__21305__auto__.call(null);
(statearr_28853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___28950);

return statearr_28853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___28950,jobs,results,process,async))
);


var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__,jobs,results,process,async){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto__,jobs,results,process,async){
return (function (state_28891){
var state_val_28892 = (state_28891[(1)]);
if((state_val_28892 === (7))){
var inst_28887 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28893_28959 = state_28891__$1;
(statearr_28893_28959[(2)] = inst_28887);

(statearr_28893_28959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (20))){
var state_28891__$1 = state_28891;
var statearr_28894_28960 = state_28891__$1;
(statearr_28894_28960[(2)] = null);

(statearr_28894_28960[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (1))){
var state_28891__$1 = state_28891;
var statearr_28895_28961 = state_28891__$1;
(statearr_28895_28961[(2)] = null);

(statearr_28895_28961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (4))){
var inst_28856 = (state_28891[(7)]);
var inst_28856__$1 = (state_28891[(2)]);
var inst_28857 = (inst_28856__$1 == null);
var state_28891__$1 = (function (){var statearr_28896 = state_28891;
(statearr_28896[(7)] = inst_28856__$1);

return statearr_28896;
})();
if(cljs.core.truth_(inst_28857)){
var statearr_28897_28962 = state_28891__$1;
(statearr_28897_28962[(1)] = (5));

} else {
var statearr_28898_28963 = state_28891__$1;
(statearr_28898_28963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (15))){
var inst_28869 = (state_28891[(8)]);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28891__$1,(18),to,inst_28869);
} else {
if((state_val_28892 === (21))){
var inst_28882 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28899_28964 = state_28891__$1;
(statearr_28899_28964[(2)] = inst_28882);

(statearr_28899_28964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (13))){
var inst_28884 = (state_28891[(2)]);
var state_28891__$1 = (function (){var statearr_28900 = state_28891;
(statearr_28900[(9)] = inst_28884);

return statearr_28900;
})();
var statearr_28901_28965 = state_28891__$1;
(statearr_28901_28965[(2)] = null);

(statearr_28901_28965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (6))){
var inst_28856 = (state_28891[(7)]);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(11),inst_28856);
} else {
if((state_val_28892 === (17))){
var inst_28877 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
if(cljs.core.truth_(inst_28877)){
var statearr_28902_28966 = state_28891__$1;
(statearr_28902_28966[(1)] = (19));

} else {
var statearr_28903_28967 = state_28891__$1;
(statearr_28903_28967[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (3))){
var inst_28889 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28891__$1,inst_28889);
} else {
if((state_val_28892 === (12))){
var inst_28866 = (state_28891[(10)]);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(14),inst_28866);
} else {
if((state_val_28892 === (2))){
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(4),results);
} else {
if((state_val_28892 === (19))){
var state_28891__$1 = state_28891;
var statearr_28904_28968 = state_28891__$1;
(statearr_28904_28968[(2)] = null);

(statearr_28904_28968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (11))){
var inst_28866 = (state_28891[(2)]);
var state_28891__$1 = (function (){var statearr_28905 = state_28891;
(statearr_28905[(10)] = inst_28866);

return statearr_28905;
})();
var statearr_28906_28969 = state_28891__$1;
(statearr_28906_28969[(2)] = null);

(statearr_28906_28969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (9))){
var state_28891__$1 = state_28891;
var statearr_28907_28970 = state_28891__$1;
(statearr_28907_28970[(2)] = null);

(statearr_28907_28970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (5))){
var state_28891__$1 = state_28891;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28908_28971 = state_28891__$1;
(statearr_28908_28971[(1)] = (8));

} else {
var statearr_28909_28972 = state_28891__$1;
(statearr_28909_28972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (14))){
var inst_28869 = (state_28891[(8)]);
var inst_28871 = (state_28891[(11)]);
var inst_28869__$1 = (state_28891[(2)]);
var inst_28870 = (inst_28869__$1 == null);
var inst_28871__$1 = cljs.core.not.call(null,inst_28870);
var state_28891__$1 = (function (){var statearr_28910 = state_28891;
(statearr_28910[(8)] = inst_28869__$1);

(statearr_28910[(11)] = inst_28871__$1);

return statearr_28910;
})();
if(inst_28871__$1){
var statearr_28911_28973 = state_28891__$1;
(statearr_28911_28973[(1)] = (15));

} else {
var statearr_28912_28974 = state_28891__$1;
(statearr_28912_28974[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (16))){
var inst_28871 = (state_28891[(11)]);
var state_28891__$1 = state_28891;
var statearr_28913_28975 = state_28891__$1;
(statearr_28913_28975[(2)] = inst_28871);

(statearr_28913_28975[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (10))){
var inst_28863 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28914_28976 = state_28891__$1;
(statearr_28914_28976[(2)] = inst_28863);

(statearr_28914_28976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (18))){
var inst_28874 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28915_28977 = state_28891__$1;
(statearr_28915_28977[(2)] = inst_28874);

(statearr_28915_28977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (8))){
var inst_28860 = cljs.core.async.close_BANG_.call(null,to);
var state_28891__$1 = state_28891;
var statearr_28916_28978 = state_28891__$1;
(statearr_28916_28978[(2)] = inst_28860);

(statearr_28916_28978[(1)] = (10));


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
});})(c__21304__auto__,jobs,results,process,async))
;
return ((function (switch__21283__auto__,c__21304__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_28920 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28920[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_28920[(1)] = (1));

return statearr_28920;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_28891){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28921){if((e28921 instanceof Object)){
var ex__21287__auto__ = e28921;
var statearr_28922_28979 = state_28891;
(statearr_28922_28979[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28980 = state_28891;
state_28891 = G__28980;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_28891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_28891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto__,jobs,results,process,async))
})();
var state__21306__auto__ = (function (){var statearr_28923 = f__21305__auto__.call(null);
(statearr_28923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_28923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__,jobs,results,process,async))
);

return c__21304__auto__;
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
var G__28982 = arguments.length;
switch (G__28982) {
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
var G__28985 = arguments.length;
switch (G__28985) {
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
var G__28988 = arguments.length;
switch (G__28988) {
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
var c__21304__auto___29040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___29040,tc,fc){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto___29040,tc,fc){
return (function (state_29014){
var state_val_29015 = (state_29014[(1)]);
if((state_val_29015 === (7))){
var inst_29010 = (state_29014[(2)]);
var state_29014__$1 = state_29014;
var statearr_29016_29041 = state_29014__$1;
(statearr_29016_29041[(2)] = inst_29010);

(statearr_29016_29041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (1))){
var state_29014__$1 = state_29014;
var statearr_29017_29042 = state_29014__$1;
(statearr_29017_29042[(2)] = null);

(statearr_29017_29042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (4))){
var inst_28991 = (state_29014[(7)]);
var inst_28991__$1 = (state_29014[(2)]);
var inst_28992 = (inst_28991__$1 == null);
var state_29014__$1 = (function (){var statearr_29018 = state_29014;
(statearr_29018[(7)] = inst_28991__$1);

return statearr_29018;
})();
if(cljs.core.truth_(inst_28992)){
var statearr_29019_29043 = state_29014__$1;
(statearr_29019_29043[(1)] = (5));

} else {
var statearr_29020_29044 = state_29014__$1;
(statearr_29020_29044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (13))){
var state_29014__$1 = state_29014;
var statearr_29021_29045 = state_29014__$1;
(statearr_29021_29045[(2)] = null);

(statearr_29021_29045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (6))){
var inst_28991 = (state_29014[(7)]);
var inst_28997 = p.call(null,inst_28991);
var state_29014__$1 = state_29014;
if(cljs.core.truth_(inst_28997)){
var statearr_29022_29046 = state_29014__$1;
(statearr_29022_29046[(1)] = (9));

} else {
var statearr_29023_29047 = state_29014__$1;
(statearr_29023_29047[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (3))){
var inst_29012 = (state_29014[(2)]);
var state_29014__$1 = state_29014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29014__$1,inst_29012);
} else {
if((state_val_29015 === (12))){
var state_29014__$1 = state_29014;
var statearr_29024_29048 = state_29014__$1;
(statearr_29024_29048[(2)] = null);

(statearr_29024_29048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (2))){
var state_29014__$1 = state_29014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29014__$1,(4),ch);
} else {
if((state_val_29015 === (11))){
var inst_28991 = (state_29014[(7)]);
var inst_29001 = (state_29014[(2)]);
var state_29014__$1 = state_29014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29014__$1,(8),inst_29001,inst_28991);
} else {
if((state_val_29015 === (9))){
var state_29014__$1 = state_29014;
var statearr_29025_29049 = state_29014__$1;
(statearr_29025_29049[(2)] = tc);

(statearr_29025_29049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (5))){
var inst_28994 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28995 = cljs.core.async.close_BANG_.call(null,fc);
var state_29014__$1 = (function (){var statearr_29026 = state_29014;
(statearr_29026[(8)] = inst_28994);

return statearr_29026;
})();
var statearr_29027_29050 = state_29014__$1;
(statearr_29027_29050[(2)] = inst_28995);

(statearr_29027_29050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (14))){
var inst_29008 = (state_29014[(2)]);
var state_29014__$1 = state_29014;
var statearr_29028_29051 = state_29014__$1;
(statearr_29028_29051[(2)] = inst_29008);

(statearr_29028_29051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (10))){
var state_29014__$1 = state_29014;
var statearr_29029_29052 = state_29014__$1;
(statearr_29029_29052[(2)] = fc);

(statearr_29029_29052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (8))){
var inst_29003 = (state_29014[(2)]);
var state_29014__$1 = state_29014;
if(cljs.core.truth_(inst_29003)){
var statearr_29030_29053 = state_29014__$1;
(statearr_29030_29053[(1)] = (12));

} else {
var statearr_29031_29054 = state_29014__$1;
(statearr_29031_29054[(1)] = (13));

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
});})(c__21304__auto___29040,tc,fc))
;
return ((function (switch__21283__auto__,c__21304__auto___29040,tc,fc){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_29035 = [null,null,null,null,null,null,null,null,null];
(statearr_29035[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_29035[(1)] = (1));

return statearr_29035;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_29014){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29036){if((e29036 instanceof Object)){
var ex__21287__auto__ = e29036;
var statearr_29037_29055 = state_29014;
(statearr_29037_29055[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29056 = state_29014;
state_29014 = G__29056;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_29014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_29014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto___29040,tc,fc))
})();
var state__21306__auto__ = (function (){var statearr_29038 = f__21305__auto__.call(null);
(statearr_29038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___29040);

return statearr_29038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___29040,tc,fc))
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
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto__){
return (function (state_29103){
var state_val_29104 = (state_29103[(1)]);
if((state_val_29104 === (7))){
var inst_29099 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
var statearr_29105_29121 = state_29103__$1;
(statearr_29105_29121[(2)] = inst_29099);

(statearr_29105_29121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (6))){
var inst_29089 = (state_29103[(7)]);
var inst_29092 = (state_29103[(8)]);
var inst_29096 = f.call(null,inst_29089,inst_29092);
var inst_29089__$1 = inst_29096;
var state_29103__$1 = (function (){var statearr_29106 = state_29103;
(statearr_29106[(7)] = inst_29089__$1);

return statearr_29106;
})();
var statearr_29107_29122 = state_29103__$1;
(statearr_29107_29122[(2)] = null);

(statearr_29107_29122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (5))){
var inst_29089 = (state_29103[(7)]);
var state_29103__$1 = state_29103;
var statearr_29108_29123 = state_29103__$1;
(statearr_29108_29123[(2)] = inst_29089);

(statearr_29108_29123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (4))){
var inst_29092 = (state_29103[(8)]);
var inst_29092__$1 = (state_29103[(2)]);
var inst_29093 = (inst_29092__$1 == null);
var state_29103__$1 = (function (){var statearr_29109 = state_29103;
(statearr_29109[(8)] = inst_29092__$1);

return statearr_29109;
})();
if(cljs.core.truth_(inst_29093)){
var statearr_29110_29124 = state_29103__$1;
(statearr_29110_29124[(1)] = (5));

} else {
var statearr_29111_29125 = state_29103__$1;
(statearr_29111_29125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (3))){
var inst_29101 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29103__$1,inst_29101);
} else {
if((state_val_29104 === (2))){
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29103__$1,(4),ch);
} else {
if((state_val_29104 === (1))){
var inst_29089 = init;
var state_29103__$1 = (function (){var statearr_29112 = state_29103;
(statearr_29112[(7)] = inst_29089);

return statearr_29112;
})();
var statearr_29113_29126 = state_29103__$1;
(statearr_29113_29126[(2)] = null);

(statearr_29113_29126[(1)] = (2));


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
});})(c__21304__auto__))
;
return ((function (switch__21283__auto__,c__21304__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21284__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21284__auto____0 = (function (){
var statearr_29117 = [null,null,null,null,null,null,null,null,null];
(statearr_29117[(0)] = cljs$core$async$reduce_$_state_machine__21284__auto__);

(statearr_29117[(1)] = (1));

return statearr_29117;
});
var cljs$core$async$reduce_$_state_machine__21284__auto____1 = (function (state_29103){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29118){if((e29118 instanceof Object)){
var ex__21287__auto__ = e29118;
var statearr_29119_29127 = state_29103;
(statearr_29119_29127[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29128 = state_29103;
state_29103 = G__29128;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21284__auto__ = function(state_29103){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21284__auto____1.call(this,state_29103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21284__auto____0;
cljs$core$async$reduce_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21284__auto____1;
return cljs$core$async$reduce_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto__))
})();
var state__21306__auto__ = (function (){var statearr_29120 = f__21305__auto__.call(null);
(statearr_29120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_29120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__))
);

return c__21304__auto__;
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
var G__29130 = arguments.length;
switch (G__29130) {
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
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto__){
return (function (state_29155){
var state_val_29156 = (state_29155[(1)]);
if((state_val_29156 === (7))){
var inst_29137 = (state_29155[(2)]);
var state_29155__$1 = state_29155;
var statearr_29157_29181 = state_29155__$1;
(statearr_29157_29181[(2)] = inst_29137);

(statearr_29157_29181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (1))){
var inst_29131 = cljs.core.seq.call(null,coll);
var inst_29132 = inst_29131;
var state_29155__$1 = (function (){var statearr_29158 = state_29155;
(statearr_29158[(7)] = inst_29132);

return statearr_29158;
})();
var statearr_29159_29182 = state_29155__$1;
(statearr_29159_29182[(2)] = null);

(statearr_29159_29182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (4))){
var inst_29132 = (state_29155[(7)]);
var inst_29135 = cljs.core.first.call(null,inst_29132);
var state_29155__$1 = state_29155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29155__$1,(7),ch,inst_29135);
} else {
if((state_val_29156 === (13))){
var inst_29149 = (state_29155[(2)]);
var state_29155__$1 = state_29155;
var statearr_29160_29183 = state_29155__$1;
(statearr_29160_29183[(2)] = inst_29149);

(statearr_29160_29183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (6))){
var inst_29140 = (state_29155[(2)]);
var state_29155__$1 = state_29155;
if(cljs.core.truth_(inst_29140)){
var statearr_29161_29184 = state_29155__$1;
(statearr_29161_29184[(1)] = (8));

} else {
var statearr_29162_29185 = state_29155__$1;
(statearr_29162_29185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (3))){
var inst_29153 = (state_29155[(2)]);
var state_29155__$1 = state_29155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29155__$1,inst_29153);
} else {
if((state_val_29156 === (12))){
var state_29155__$1 = state_29155;
var statearr_29163_29186 = state_29155__$1;
(statearr_29163_29186[(2)] = null);

(statearr_29163_29186[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (2))){
var inst_29132 = (state_29155[(7)]);
var state_29155__$1 = state_29155;
if(cljs.core.truth_(inst_29132)){
var statearr_29164_29187 = state_29155__$1;
(statearr_29164_29187[(1)] = (4));

} else {
var statearr_29165_29188 = state_29155__$1;
(statearr_29165_29188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (11))){
var inst_29146 = cljs.core.async.close_BANG_.call(null,ch);
var state_29155__$1 = state_29155;
var statearr_29166_29189 = state_29155__$1;
(statearr_29166_29189[(2)] = inst_29146);

(statearr_29166_29189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (9))){
var state_29155__$1 = state_29155;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29167_29190 = state_29155__$1;
(statearr_29167_29190[(1)] = (11));

} else {
var statearr_29168_29191 = state_29155__$1;
(statearr_29168_29191[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (5))){
var inst_29132 = (state_29155[(7)]);
var state_29155__$1 = state_29155;
var statearr_29169_29192 = state_29155__$1;
(statearr_29169_29192[(2)] = inst_29132);

(statearr_29169_29192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (10))){
var inst_29151 = (state_29155[(2)]);
var state_29155__$1 = state_29155;
var statearr_29170_29193 = state_29155__$1;
(statearr_29170_29193[(2)] = inst_29151);

(statearr_29170_29193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (8))){
var inst_29132 = (state_29155[(7)]);
var inst_29142 = cljs.core.next.call(null,inst_29132);
var inst_29132__$1 = inst_29142;
var state_29155__$1 = (function (){var statearr_29171 = state_29155;
(statearr_29171[(7)] = inst_29132__$1);

return statearr_29171;
})();
var statearr_29172_29194 = state_29155__$1;
(statearr_29172_29194[(2)] = null);

(statearr_29172_29194[(1)] = (2));


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
});})(c__21304__auto__))
;
return ((function (switch__21283__auto__,c__21304__auto__){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_29176 = [null,null,null,null,null,null,null,null];
(statearr_29176[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_29176[(1)] = (1));

return statearr_29176;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_29155){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29177){if((e29177 instanceof Object)){
var ex__21287__auto__ = e29177;
var statearr_29178_29195 = state_29155;
(statearr_29178_29195[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29196 = state_29155;
state_29155 = G__29196;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_29155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_29155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21304__auto__))
})();
var state__21306__auto__ = (function (){var statearr_29179 = f__21305__auto__.call(null);
(statearr_29179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_29179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__))
);

return c__21304__auto__;
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

cljs.core.async.Mux = (function (){var obj29198 = {};
return obj29198;
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


cljs.core.async.Mult = (function (){var obj29200 = {};
return obj29200;
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
if(typeof cljs.core.async.t29422 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29422 = (function (cs,ch,mult,meta29423){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29423 = meta29423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29422.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29422.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29422.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29422.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29422.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29422.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29424){
var self__ = this;
var _29424__$1 = this;
return self__.meta29423;
});})(cs))
;

cljs.core.async.t29422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29424,meta29423__$1){
var self__ = this;
var _29424__$1 = this;
return (new cljs.core.async.t29422(self__.cs,self__.ch,self__.mult,meta29423__$1));
});})(cs))
;

cljs.core.async.t29422.cljs$lang$type = true;

cljs.core.async.t29422.cljs$lang$ctorStr = "cljs.core.async/t29422";

cljs.core.async.t29422.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18692__auto__,writer__18693__auto__,opt__18694__auto__){
return cljs.core._write.call(null,writer__18693__auto__,"cljs.core.async/t29422");
});})(cs))
;

cljs.core.async.__GT_t29422 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29422(cs__$1,ch__$1,mult__$1,meta29423){
return (new cljs.core.async.t29422(cs__$1,ch__$1,mult__$1,meta29423));
});})(cs))
;

}

return (new cljs.core.async.t29422(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21304__auto___29643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___29643,cs,m,dchan,dctr,done){
return (function (){
var f__21305__auto__ = (function (){var switch__21283__auto__ = ((function (c__21304__auto___29643,cs,m,dchan,dctr,done){
return (function (state_29555){
var state_val_29556 = (state_29555[(1)]);
if((state_val_29556 === (7))){
var inst_29551 = (state_29555[(2)]);
var state_29555__$1 = state_29555;
var statearr_29557_29644 = state_29555__$1;
(statearr_29557_29644[(2)] = inst_29551);

(statearr_29557_29644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (20))){
var inst_29456 = (state_29555[(7)]);
var inst_29466 = cljs.core.first.call(null,inst_29456);
var inst_29467 = cljs.core.nth.call(null,inst_29466,(0),null);
var inst_29468 = cljs.core.nth.call(null,inst_29466,(1),null);
var state_29555__$1 = (function (){var statearr_29558 = state_29555;
(statearr_29558[(8)] = inst_29467);

return statearr_29558;
})();
if(cljs.core.truth_(inst_29468)){
var statearr_29559_29645 = state_29555__$1;
(statearr_29559_29645[(1)] = (22));

} else {
var statearr_29560_29646 = state_29555__$1;
(statearr_29560_29646[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (27))){
var inst_29427 = (state_29555[(9)]);
var inst_29503 = (state_29555[(10)]);
var inst_29498 = (state_29555[(11)]);
var inst_29496 = (state_29555[(12)]);
var inst_29503__$1 = cljs.core._nth.call(null,inst_29496,inst_29498);
var inst_29504 = cljs.core.async.put_BANG_.call(null,inst_29503__$1,inst_29427,done);
var state_29555__$1 = (function (){var statearr_29561 = state_29555;
(statearr_29561[(10)] = inst_29503__$1);

return statearr_29561;
})();
if(cljs.core.truth_(inst_29504)){
var statearr_29562_29647 = state_29555__$1;
(statearr_29562_29647[(1)] = (30));

} else {
var statearr_29563_29648 = state_29555__$1;
(statearr_29563_29648[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (1))){
var state_29555__$1 = state_29555;
var statearr_29564_29649 = state_29555__$1;
(statearr_29564_29649[(2)] = null);

(statearr_29564_29649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (24))){
var inst_29456 = (state_29555[(7)]);
var inst_29473 = (state_29555[(2)]);
var inst_29474 = cljs.core.next.call(null,inst_29456);
var inst_29436 = inst_29474;
var inst_29437 = null;
var inst_29438 = (0);
var inst_29439 = (0);
var state_29555__$1 = (function (){var statearr_29565 = state_29555;
(statearr_29565[(13)] = inst_29436);

(statearr_29565[(14)] = inst_29438);

(statearr_29565[(15)] = inst_29439);

(statearr_29565[(16)] = inst_29473);

(statearr_29565[(17)] = inst_29437);

return statearr_29565;
})();
var statearr_29566_29650 = state_29555__$1;
(statearr_29566_29650[(2)] = null);

(statearr_29566_29650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (39))){
var state_29555__$1 = state_29555;
var statearr_29570_29651 = state_29555__$1;
(statearr_29570_29651[(2)] = null);

(statearr_29570_29651[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (4))){
var inst_29427 = (state_29555[(9)]);
var inst_29427__$1 = (state_29555[(2)]);
var inst_29428 = (inst_29427__$1 == null);
var state_29555__$1 = (function (){var statearr_29571 = state_29555;
(statearr_29571[(9)] = inst_29427__$1);

return statearr_29571;
})();
if(cljs.core.truth_(inst_29428)){
var statearr_29572_29652 = state_29555__$1;
(statearr_29572_29652[(1)] = (5));

} else {
var statearr_29573_29653 = state_29555__$1;
(statearr_29573_29653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (15))){
var inst_29436 = (state_29555[(13)]);
var inst_29438 = (state_29555[(14)]);
var inst_29439 = (state_29555[(15)]);
var inst_29437 = (state_29555[(17)]);
var inst_29452 = (state_29555[(2)]);
var inst_29453 = (inst_29439 + (1));
var tmp29567 = inst_29436;
var tmp29568 = inst_29438;
var tmp29569 = inst_29437;
var inst_29436__$1 = tmp29567;
var inst_29437__$1 = tmp29569;
var inst_29438__$1 = tmp29568;
var inst_29439__$1 = inst_29453;
var state_29555__$1 = (function (){var statearr_29574 = state_29555;
(statearr_29574[(13)] = inst_29436__$1);

(statearr_29574[(14)] = inst_29438__$1);

(statearr_29574[(15)] = inst_29439__$1);

(statearr_29574[(18)] = inst_29452);

(statearr_29574[(17)] = inst_29437__$1);

return statearr_29574;
})();
var statearr_29575_29654 = state_29555__$1;
(statearr_29575_29654[(2)] = null);

(statearr_29575_29654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (21))){
var inst_29477 = (state_29555[(2)]);
var state_29555__$1 = state_29555;
var statearr_29579_29655 = state_29555__$1;
(statearr_29579_29655[(2)] = inst_29477);

(statearr_29579_29655[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (31))){
var inst_29503 = (state_29555[(10)]);
var inst_29507 = done.call(null,null);
var inst_29508 = cljs.core.async.untap_STAR_.call(null,m,inst_29503);
var state_29555__$1 = (function (){var statearr_29580 = state_29555;
(statearr_29580[(19)] = inst_29507);

return statearr_29580;
})();
var statearr_29581_29656 = state_29555__$1;
(statearr_29581_29656[(2)] = inst_29508);

(statearr_29581_29656[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (32))){
var inst_29497 = (state_29555[(20)]);
var inst_29495 = (state_29555[(21)]);
var inst_29498 = (state_29555[(11)]);
var inst_29496 = (state_29555[(12)]);
var inst_29510 = (state_29555[(2)]);
var inst_29511 = (inst_29498 + (1));
var tmp29576 = inst_29497;
var tmp29577 = inst_29495;
var tmp29578 = inst_29496;
var inst_29495__$1 = tmp29577;
var inst_29496__$1 = tmp29578;
var inst_29497__$1 = tmp29576;
var inst_29498__$1 = inst_29511;
var state_29555__$1 = (function (){var statearr_29582 = state_29555;
(statearr_29582[(20)] = inst_29497__$1);

(statearr_29582[(21)] = inst_29495__$1);

(statearr_29582[(11)] = inst_29498__$1);

(statearr_29582[(12)] = inst_29496__$1);

(statearr_29582[(22)] = inst_29510);

return statearr_29582;
})();
var statearr_29583_29657 = state_29555__$1;
(statearr_29583_29657[(2)] = null);

(statearr_29583_29657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (40))){
var inst_29523 = (state_29555[(23)]);
var inst_29527 = done.call(null,null);
var inst_29528 = cljs.core.async.untap_STAR_.call(null,m,inst_29523);
var state_29555__$1 = (function (){var statearr_29584 = state_29555;
(statearr_29584[(24)] = inst_29527);

return statearr_29584;
})();
var statearr_29585_29658 = state_29555__$1;
(statearr_29585_29658[(2)] = inst_29528);

(statearr_29585_29658[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (33))){
var inst_29514 = (state_29555[(25)]);
var inst_29516 = cljs.core.chunked_seq_QMARK_.call(null,inst_29514);
var state_29555__$1 = state_29555;
if(inst_29516){
var statearr_29586_29659 = state_29555__$1;
(statearr_29586_29659[(1)] = (36));

} else {
var statearr_29587_29660 = state_29555__$1;
(statearr_29587_29660[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (13))){
var inst_29446 = (state_29555[(26)]);
var inst_29449 = cljs.core.async.close_BANG_.call(null,inst_29446);
var state_29555__$1 = state_29555;
var statearr_29588_29661 = state_29555__$1;
(statearr_29588_29661[(2)] = inst_29449);

(statearr_29588_29661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (22))){
var inst_29467 = (state_29555[(8)]);
var inst_29470 = cljs.core.async.close_BANG_.call(null,inst_29467);
var state_29555__$1 = state_29555;
var statearr_29589_29662 = state_29555__$1;
(statearr_29589_29662[(2)] = inst_29470);

(statearr_29589_29662[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (36))){
var inst_29514 = (state_29555[(25)]);
var inst_29518 = cljs.core.chunk_first.call(null,inst_29514);
var inst_29519 = cljs.core.chunk_rest.call(null,inst_29514);
var inst_29520 = cljs.core.count.call(null,inst_29518);
var inst_29495 = inst_29519;
var inst_29496 = inst_29518;
var inst_29497 = inst_29520;
var inst_29498 = (0);
var state_29555__$1 = (function (){var statearr_29590 = state_29555;
(statearr_29590[(20)] = inst_29497);

(statearr_29590[(21)] = inst_29495);

(statearr_29590[(11)] = inst_29498);

(statearr_29590[(12)] = inst_29496);

return statearr_29590;
})();
var statearr_29591_29663 = state_29555__$1;
(statearr_29591_29663[(2)] = null);

(statearr_29591_29663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (41))){
var inst_29514 = (state_29555[(25)]);
var inst_29530 = (state_29555[(2)]);
var inst_29531 = cljs.core.next.call(null,inst_29514);
var inst_29495 = inst_29531;
var inst_29496 = null;
var inst_29497 = (0);
var inst_29498 = (0);
var state_29555__$1 = (function (){var statearr_29592 = state_29555;
(statearr_29592[(27)] = inst_29530);

(statearr_29592[(20)] = inst_29497);

(statearr_29592[(21)] = inst_29495);

(statearr_29592[(11)] = inst_29498);

(statearr_29592[(12)] = inst_29496);

return statearr_29592;
})();
var statearr_29593_29664 = state_29555__$1;
(statearr_29593_29664[(2)] = null);

(statearr_29593_29664[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (43))){
var state_29555__$1 = state_29555;
var statearr_29594_29665 = state_29555__$1;
(statearr_29594_29665[(2)] = null);

(statearr_29594_29665[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (29))){
var inst_29539 = (state_29555[(2)]);
var state_29555__$1 = state_29555;
var statearr_29595_29666 = state_29555__$1;
(statearr_29595_29666[(2)] = inst_29539);

(statearr_29595_29666[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (44))){
var inst_29548 = (state_29555[(2)]);
var state_29555__$1 = (function (){var statearr_29596 = state_29555;
(statearr_29596[(28)] = inst_29548);

return statearr_29596;
})();
var statearr_29597_29667 = state_29555__$1;
(statearr_29597_29667[(2)] = null);

(statearr_29597_29667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (6))){
var inst_29487 = (state_29555[(29)]);
var inst_29486 = cljs.core.deref.call(null,cs);
var inst_29487__$1 = cljs.core.keys.call(null,inst_29486);
var inst_29488 = cljs.core.count.call(null,inst_29487__$1);
var inst_29489 = cljs.core.reset_BANG_.call(null,dctr,inst_29488);
var inst_29494 = cljs.core.seq.call(null,inst_29487__$1);
var inst_29495 = inst_29494;
var inst_29496 = null;
var inst_29497 = (0);
var inst_29498 = (0);
var state_29555__$1 = (function (){var statearr_29598 = state_29555;
(statearr_29598[(29)] = inst_29487__$1);

(statearr_29598[(30)] = inst_29489);

(statearr_29598[(20)] = inst_29497);

(statearr_29598[(21)] = inst_29495);

(statearr_29598[(11)] = inst_29498);

(statearr_29598[(12)] = inst_29496);

return statearr_29598;
})();
var statearr_29599_29668 = state_29555__$1;
(statearr_29599_29668[(2)] = null);

(statearr_29599_29668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (28))){
var inst_29495 = (state_29555[(21)]);
var inst_29514 = (state_29555[(25)]);
var inst_29514__$1 = cljs.core.seq.call(null,inst_29495);
var state_29555__$1 = (function (){var statearr_29600 = state_29555;
(statearr_29600[(25)] = inst_29514__$1);

return statearr_29600;
})();
if(inst_29514__$1){
var statearr_29601_29669 = state_29555__$1;
(statearr_29601_29669[(1)] = (33));

} else {
var statearr_29602_29670 = state_29555__$1;
(statearr_29602_29670[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (25))){
var inst_29497 = (state_29555[(20)]);
var inst_29498 = (state_29555[(11)]);
var inst_29500 = (inst_29498 < inst_29497);
var inst_29501 = inst_29500;
var state_29555__$1 = state_29555;
if(cljs.core.truth_(inst_29501)){
var statearr_29603_29671 = state_29555__$1;
(statearr_29603_29671[(1)] = (27));

} else {
var statearr_29604_29672 = state_29555__$1;
(statearr_29604_29672[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (34))){
var state_29555__$1 = state_29555;
var statearr_29605_29673 = state_29555__$1;
(statearr_29605_29673[(2)] = null);

(statearr_29605_29673[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (17))){
var state_29555__$1 = state_29555;
var statearr_29606_29674 = state_29555__$1;
(statearr_29606_29674[(2)] = null);

(statearr_29606_29674[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (3))){
var inst_29553 = (state_29555[(2)]);
var state_29555__$1 = state_29555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29555__$1,inst_29553);
} else {
if((state_val_29556 === (12))){
var inst_29482 = (state_29555[(2)]);
var state_29555__$1 = state_29555;
var statearr_29607_29675 = state_29555__$1;
(statearr_29607_29675[(2)] = inst_29482);

(statearr_29607_29675[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (2))){
var state_29555__$1 = state_29555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29555__$1,(4),ch);
} else {
if((state_val_29556 === (23))){
var state_29555__$1 = state_29555;
var statearr_29608_29676 = state_29555__$1;
(statearr_29608_29676[(2)] = null);

(statearr_29608_29676[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (35))){
var inst_29537 = (state_29555[(2)]);
var state_29555__$1 = state_29555;
var statearr_29609_29677 = state_29555__$1;
