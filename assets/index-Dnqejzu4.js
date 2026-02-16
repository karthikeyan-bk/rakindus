(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function OT(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Dd={exports:{}},Sl={};var Tx;function FT(){if(Tx)return Sl;Tx=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:i,type:s,key:u,ref:o!==void 0?o:null,props:c}}return Sl.Fragment=t,Sl.jsx=n,Sl.jsxs=n,Sl}var Ax;function BT(){return Ax||(Ax=1,Dd.exports=FT()),Dd.exports}var B=BT(),Ud={exports:{}},ce={};var wx;function IT(){if(wx)return ce;wx=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(O,et,gt){this.props=O,this.context=et,this.refs=M,this.updater=gt||b}x.prototype.isReactComponent={},x.prototype.setState=function(O,et){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,et,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=x.prototype;function R(O,et,gt){this.props=O,this.context=et,this.refs=M,this.updater=gt||b}var U=R.prototype=new D;U.constructor=R,T(U,x.prototype),U.isPureReactComponent=!0;var L=Array.isArray;function F(){}var I={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function C(O,et,gt){var At=gt.ref;return{$$typeof:i,type:O,key:et,ref:At!==void 0?At:null,props:gt}}function N(O,et){return C(O.type,et,O.props)}function X(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function st(O){var et={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(gt){return et[gt]})}var at=/\/+/g;function ct(O,et){return typeof O=="object"&&O!==null&&O.key!=null?st(""+O.key):et.toString(36)}function ht(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(et){O.status==="pending"&&(O.status="fulfilled",O.value=et)},function(et){O.status==="pending"&&(O.status="rejected",O.reason=et)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function z(O,et,gt,At,Ht){var tt=typeof O;(tt==="undefined"||tt==="boolean")&&(O=null);var ft=!1;if(O===null)ft=!0;else switch(tt){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(O.$$typeof){case i:case t:ft=!0;break;case g:return ft=O._init,z(ft(O._payload),et,gt,At,Ht)}}if(ft)return Ht=Ht(O),ft=At===""?"."+ct(O,0):At,L(Ht)?(gt="",ft!=null&&(gt=ft.replace(at,"$&/")+"/"),z(Ht,et,gt,"",function(kt){return kt})):Ht!=null&&(X(Ht)&&(Ht=N(Ht,gt+(Ht.key==null||O&&O.key===Ht.key?"":(""+Ht.key).replace(at,"$&/")+"/")+ft)),et.push(Ht)),1;ft=0;var Ct=At===""?".":At+":";if(L(O))for(var Xt=0;Xt<O.length;Xt++)At=O[Xt],tt=Ct+ct(At,Xt),ft+=z(At,et,gt,tt,Ht);else if(Xt=y(O),typeof Xt=="function")for(O=Xt.call(O),Xt=0;!(At=O.next()).done;)At=At.value,tt=Ct+ct(At,Xt++),ft+=z(At,et,gt,tt,Ht);else if(tt==="object"){if(typeof O.then=="function")return z(ht(O),et,gt,At,Ht);throw et=String(O),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return ft}function H(O,et,gt){if(O==null)return O;var At=[],Ht=0;return z(O,At,"","",function(tt){return et.call(gt,tt,Ht++)}),At}function Q(O){if(O._status===-1){var et=O._result;et=et(),et.then(function(gt){(O._status===0||O._status===-1)&&(O._status=1,O._result=gt)},function(gt){(O._status===0||O._status===-1)&&(O._status=2,O._result=gt)}),O._status===-1&&(O._status=0,O._result=et)}if(O._status===1)return O._result.default;throw O._result}var yt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},xt={map:H,forEach:function(O,et,gt){H(O,function(){et.apply(this,arguments)},gt)},count:function(O){var et=0;return H(O,function(){et++}),et},toArray:function(O){return H(O,function(et){return et})||[]},only:function(O){if(!X(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ce.Activity=v,ce.Children=xt,ce.Component=x,ce.Fragment=n,ce.Profiler=o,ce.PureComponent=R,ce.StrictMode=s,ce.Suspense=p,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ce.__COMPILER_RUNTIME={__proto__:null,c:function(O){return I.H.useMemoCache(O)}},ce.cache=function(O){return function(){return O.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(O,et,gt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var At=T({},O.props),Ht=O.key;if(et!=null)for(tt in et.key!==void 0&&(Ht=""+et.key),et)!j.call(et,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&et.ref===void 0||(At[tt]=et[tt]);var tt=arguments.length-2;if(tt===1)At.children=gt;else if(1<tt){for(var ft=Array(tt),Ct=0;Ct<tt;Ct++)ft[Ct]=arguments[Ct+2];At.children=ft}return C(O.type,Ht,At)},ce.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ce.createElement=function(O,et,gt){var At,Ht={},tt=null;if(et!=null)for(At in et.key!==void 0&&(tt=""+et.key),et)j.call(et,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ht[At]=et[At]);var ft=arguments.length-2;if(ft===1)Ht.children=gt;else if(1<ft){for(var Ct=Array(ft),Xt=0;Xt<ft;Xt++)Ct[Xt]=arguments[Xt+2];Ht.children=Ct}if(O&&O.defaultProps)for(At in ft=O.defaultProps,ft)Ht[At]===void 0&&(Ht[At]=ft[At]);return C(O,tt,Ht)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(O){return{$$typeof:f,render:O}},ce.isValidElement=X,ce.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:Q}},ce.memo=function(O,et){return{$$typeof:d,type:O,compare:et===void 0?null:et}},ce.startTransition=function(O){var et=I.T,gt={};I.T=gt;try{var At=O(),Ht=I.S;Ht!==null&&Ht(gt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(F,yt)}catch(tt){yt(tt)}finally{et!==null&&gt.types!==null&&(et.types=gt.types),I.T=et}},ce.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ce.use=function(O){return I.H.use(O)},ce.useActionState=function(O,et,gt){return I.H.useActionState(O,et,gt)},ce.useCallback=function(O,et){return I.H.useCallback(O,et)},ce.useContext=function(O){return I.H.useContext(O)},ce.useDebugValue=function(){},ce.useDeferredValue=function(O,et){return I.H.useDeferredValue(O,et)},ce.useEffect=function(O,et){return I.H.useEffect(O,et)},ce.useEffectEvent=function(O){return I.H.useEffectEvent(O)},ce.useId=function(){return I.H.useId()},ce.useImperativeHandle=function(O,et,gt){return I.H.useImperativeHandle(O,et,gt)},ce.useInsertionEffect=function(O,et){return I.H.useInsertionEffect(O,et)},ce.useLayoutEffect=function(O,et){return I.H.useLayoutEffect(O,et)},ce.useMemo=function(O,et){return I.H.useMemo(O,et)},ce.useOptimistic=function(O,et){return I.H.useOptimistic(O,et)},ce.useReducer=function(O,et,gt){return I.H.useReducer(O,et,gt)},ce.useRef=function(O){return I.H.useRef(O)},ce.useState=function(O){return I.H.useState(O)},ce.useSyncExternalStore=function(O,et,gt){return I.H.useSyncExternalStore(O,et,gt)},ce.useTransition=function(){return I.H.useTransition()},ce.version="19.2.4",ce}var Cx;function ng(){return Cx||(Cx=1,Ud.exports=IT()),Ud.exports}var Lt=ng();const zT=OT(Lt);var Nd={exports:{}},Ml={},Ld={exports:{}},Pd={};var Rx;function VT(){return Rx||(Rx=1,(function(i){function t(z,H){var Q=z.length;z.push(H);t:for(;0<Q;){var yt=Q-1>>>1,xt=z[yt];if(0<o(xt,H))z[yt]=H,z[Q]=xt,Q=yt;else break t}}function n(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var H=z[0],Q=z.pop();if(Q!==H){z[0]=Q;t:for(var yt=0,xt=z.length,O=xt>>>1;yt<O;){var et=2*(yt+1)-1,gt=z[et],At=et+1,Ht=z[At];if(0>o(gt,Q))At<xt&&0>o(Ht,gt)?(z[yt]=Ht,z[At]=Q,yt=At):(z[yt]=gt,z[et]=Q,yt=et);else if(At<xt&&0>o(Ht,Q))z[yt]=Ht,z[At]=Q,yt=At;else break t}}return H}function o(z,H){var Q=z.sortIndex-H.sortIndex;return Q!==0?Q:z.id-H.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();i.unstable_now=function(){return u.now()-f}}var p=[],d=[],g=1,v=null,_=3,y=!1,b=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function U(z){for(var H=n(d);H!==null;){if(H.callback===null)s(d);else if(H.startTime<=z)s(d),H.sortIndex=H.expirationTime,t(p,H);else break;H=n(d)}}function L(z){if(T=!1,U(z),!b)if(n(p)!==null)b=!0,F||(F=!0,st());else{var H=n(d);H!==null&&ht(L,H.startTime-z)}}var F=!1,I=-1,j=5,C=-1;function N(){return M?!0:!(i.unstable_now()-C<j)}function X(){if(M=!1,F){var z=i.unstable_now();C=z;var H=!0;try{t:{b=!1,T&&(T=!1,D(I),I=-1),y=!0;var Q=_;try{e:{for(U(z),v=n(p);v!==null&&!(v.expirationTime>z&&N());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,_=v.priorityLevel;var xt=yt(v.expirationTime<=z);if(z=i.unstable_now(),typeof xt=="function"){v.callback=xt,U(z),H=!0;break e}v===n(p)&&s(p),U(z)}else s(p);v=n(p)}if(v!==null)H=!0;else{var O=n(d);O!==null&&ht(L,O.startTime-z),H=!1}}break t}finally{v=null,_=Q,y=!1}H=void 0}}finally{H?st():F=!1}}}var st;if(typeof R=="function")st=function(){R(X)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ct=at.port2;at.port1.onmessage=X,st=function(){ct.postMessage(null)}}else st=function(){x(X,0)};function ht(z,H){I=x(function(){z(i.unstable_now())},H)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(z){z.callback=null},i.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<z?Math.floor(1e3/z):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(z){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var Q=_;_=H;try{return z()}finally{_=Q}},i.unstable_requestPaint=function(){M=!0},i.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=_;_=z;try{return H()}finally{_=Q}},i.unstable_scheduleCallback=function(z,H,Q){var yt=i.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?yt+Q:yt):Q=yt,z){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=Q+xt,z={id:g++,callback:H,priorityLevel:z,startTime:Q,expirationTime:xt,sortIndex:-1},Q>yt?(z.sortIndex=Q,t(d,z),n(p)===null&&z===n(d)&&(T?(D(I),I=-1):T=!0,ht(L,Q-yt))):(z.sortIndex=xt,t(p,z),b||y||(b=!0,F||(F=!0,st()))),z},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(z){var H=_;return function(){var Q=_;_=H;try{return z.apply(this,arguments)}finally{_=Q}}}})(Pd)),Pd}var Dx;function HT(){return Dx||(Dx=1,Ld.exports=VT()),Ld.exports}var Od={exports:{}},Hn={};var Ux;function GT(){if(Ux)return Hn;Ux=1;var i=ng();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:d,implementation:g}}var u=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Hn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,g)},Hn.flushSync=function(p){var d=u.T,g=s.p;try{if(u.T=null,s.p=2,p)return p()}finally{u.T=d,s.p=g,s.d.f()}},Hn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(p,d))},Hn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Hn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:y}):g==="script"&&s.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Hn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=f(d.as,d.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(p)},Hn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin);s.d.L(p,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Hn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=f(d.as,d.crossOrigin);s.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(p)},Hn.requestFormReset=function(p){s.d.r(p)},Hn.unstable_batchedUpdates=function(p,d){return p(d)},Hn.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},Hn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Hn.version="19.2.4",Hn}var Nx;function kT(){if(Nx)return Od.exports;Nx=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Od.exports=GT(),Od.exports}var Lx;function XT(){if(Lx)return Ml;Lx=1;var i=HT(),t=ng(),n=kT();function s(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function u(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function f(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function d(e){var a=e.alternate;if(!a){if(a=c(e),a===null)throw Error(s(188));return a!==e?null:e}for(var r=e,l=a;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){r=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),e;if(m===l)return p(h),a;m=m.sibling}throw Error(s(188))}if(r.return!==l.return)r=h,l=m;else{for(var S=!1,A=h.child;A;){if(A===r){S=!0,r=h,l=m;break}if(A===l){S=!0,l=h,r=m;break}A=A.sibling}if(!S){for(A=m.child;A;){if(A===r){S=!0,r=m,l=h;break}if(A===l){S=!0,l=m,r=h;break}A=A.sibling}if(!S)throw Error(s(189))}}if(r.alternate!==l)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:a}function g(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=g(e),a!==null)return a;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),R=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case L:return"Suspense";case F:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case R:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case U:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return a=e.displayName||null,a!==null?a:ct(e.type)||"Memo";case j:a=e._payload,e=e._init;try{return ct(e(a))}catch{}}return null}var ht=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},yt=[],xt=-1;function O(e){return{current:e}}function et(e){0>xt||(e.current=yt[xt],yt[xt]=null,xt--)}function gt(e,a){xt++,yt[xt]=e.current,e.current=a}var At=O(null),Ht=O(null),tt=O(null),ft=O(null);function Ct(e,a){switch(gt(tt,a),gt(Ht,e),gt(At,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Y_(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Y_(a),e=K_(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(At),gt(At,e)}function Xt(){et(At),et(Ht),et(tt)}function kt(e){e.memoizedState!==null&&gt(ft,e);var a=At.current,r=K_(a,e.type);a!==r&&(gt(Ht,e),gt(At,r))}function ve(e){Ht.current===e&&(et(At),et(Ht)),ft.current===e&&(et(ft),vl._currentValue=Q)}var $e,_e;function me(e){if($e===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);$e=a&&a[1]||"",_e=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+e+_e}var Ae=!1;function re(e,a){if(!e||Ae)return"";Ae=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var it=lt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(lt){it=lt}e.call(vt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),S=m[0],A=m[1];if(S&&A){var V=S.split(`
`),$=A.split(`
`);for(h=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;h<$.length&&!$[h].includes("DetermineComponentFrameRoot");)h++;if(l===V.length||h===$.length)for(l=V.length-1,h=$.length-1;1<=l&&0<=h&&V[l]!==$[h];)h--;for(;1<=l&&0<=h;l--,h--)if(V[l]!==$[h]){if(l!==1||h!==1)do if(l--,h--,0>h||V[l]!==$[h]){var dt=`
`+V[l].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=l&&0<=h);break}}}finally{Ae=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?me(r):""}function be(e,a){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==a&&a!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return me("Activity");default:return""}}function G(e){try{var a="",r=null;do a+=be(e,r),r=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Pe=Object.prototype.hasOwnProperty,Pt=i.unstable_scheduleCallback,le=i.unstable_cancelCallback,Ot=i.unstable_shouldYield,P=i.unstable_requestPaint,E=i.unstable_now,q=i.unstable_getCurrentPriorityLevel,pt=i.unstable_ImmediatePriority,St=i.unstable_UserBlockingPriority,ut=i.unstable_NormalPriority,Jt=i.unstable_LowPriority,Rt=i.unstable_IdlePriority,Yt=i.log,ae=i.unstable_setDisableYieldValue,bt=null,Et=null;function Vt(e){if(typeof Yt=="function"&&ae(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(bt,e)}catch{}}var It=Math.clz32?Math.clz32:W,Dt=Math.log,he=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Dt(e)/he|0)|0}var Nt=256,Tt=262144,zt=4194304;function Mt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,a,r){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?h=Mt(l):(S&=A,S!==0?h=Mt(S):r||(r=A&~e,r!==0&&(h=Mt(r))))):(A=l&~m,A!==0?h=Mt(A):S!==0?h=Mt(S):r||(r=l&~e,r!==0&&(h=Mt(r)))),h===0?0:a!==0&&a!==h&&(a&m)===0&&(m=h&-h,r=a&-a,m>=r||m===32&&(r&4194048)!==0)?a:h}function wt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function se(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function we(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function Vn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Di(e,a,r,l,h,m){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var A=e.entanglements,V=e.expirationTimes,$=e.hiddenUpdates;for(r=S&~r;0<r;){var dt=31-It(r),vt=1<<dt;A[dt]=0,V[dt]=-1;var it=$[dt];if(it!==null)for($[dt]=null,dt=0;dt<it.length;dt++){var lt=it[dt];lt!==null&&(lt.lane&=-536870913)}r&=~vt}l!==0&&lc(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(S&~a))}function lc(e,a,r){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-It(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function Ro(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var l=31-It(r),h=1<<l;h&a|e[l]&a&&(e[l]|=a),r&=~h}}function cr(e,a){var r=a&-a;return r=(r&42)!==0?1:Do(r),(r&(e.suspendedLanes|a))!==0?0:r}function Do(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ur(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Uo(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:_x(e.type))}function Ki(e,a){var r=H.p;try{return H.p=e,a()}finally{H.p=r}}var pi=Math.random().toString(36).slice(2),fn="__reactFiber$"+pi,Cn="__reactProps$"+pi,Ui="__reactContainer$"+pi,fr="__reactEvents$"+pi,hr="__reactListeners$"+pi,cc="__reactHandles$"+pi,No="__reactResources$"+pi,Rs="__reactMarker$"+pi;function Lo(e){delete e[fn],delete e[Cn],delete e[fr],delete e[hr],delete e[cc]}function ka(e){var a=e[fn];if(a)return a;for(var r=e.parentNode;r;){if(a=r[Ui]||r[fn]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=nx(e);e!==null;){if(r=e[fn])return r;e=nx(e)}return a}e=r,r=e.parentNode}return null}function Xa(e){if(e=e[fn]||e[Ui]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Ds(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(s(33))}function ja(e){var a=e[No];return a||(a=e[No]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function w(e){e[Rs]=!0}var Y=new Set,rt={};function nt(e,a){Z(e,a),Z(e+"Capture",a)}function Z(e,a){for(rt[e]=a,e=0;e<a.length;e++)Y.add(a[e])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},Ft={};function jt(e){return Pe.call(Ft,e)?!0:Pe.call(Gt,e)?!1:Ut.test(e)?Ft[e]=!0:(Gt[e]=!0,!1)}function Kt(e,a,r){if(jt(a))if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+r)}}function ee(e,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+r)}}function Zt(e,a,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(a,r,""+l)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function tn(e,a,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return h.call(this)},set:function(S){r=""+S,m.call(this,S)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Ze(e){if(!e._valueTracker){var a=Oe(e)?"checked":"value";e._valueTracker=tn(e,a,""+e[a])}}function ze(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),l="";return e&&(l=Oe(e)?e.checked?"true":"false":e.value),e=l,e!==r?(a.setValue(e),!0):!1}function $t(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fe=/[\n"\\]/g;function oe(e){return e.replace(Fe,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Rn(e,a,r,l,h,m,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),a!=null?S==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ne(a)):e.value!==""+ne(a)&&(e.value=""+ne(a)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),a!=null?Dn(e,S,ne(a)):r!=null?Dn(e,S,ne(r)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ne(A):e.removeAttribute("name")}function ua(e,a,r,l,h,m,S,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),a!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||a!=null)){Ze(e);return}r=r!=null?""+ne(r):"",a=a!=null?""+ne(a):r,A||a===e.value||(e.value=a),e.defaultValue=a}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ze(e)}function Dn(e,a,r){a==="number"&&$t(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function mi(e,a,r,l){if(e=e.options,a){a={};for(var h=0;h<r.length;h++)a["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=a.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&l&&(e[r].defaultSelected=!0)}else{for(r=""+ne(r),a=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}a!==null||e[h].disabled||(a=e[h])}a!==null&&(a.selected=!0)}}function Ge(e,a,r){if(a!=null&&(a=""+ne(a),a!==e.value&&(e.value=a),r==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=r!=null?""+ne(r):""}function Un(e,a,r,l){if(a==null){if(l!=null){if(r!=null)throw Error(s(92));if(ht(l)){if(1<l.length)throw Error(s(93));l=l[0]}r=l}r==null&&(r=""),a=r}r=ne(a),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Ze(e)}function xn(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var Nn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ln(e,a,r){var l=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,r):typeof r!="number"||r===0||Nn.has(a)?a==="float"?e.cssFloat=r:e[a]=(""+r).trim():e[a]=r+"px"}function dr(e,a,r){if(a!=null&&typeof a!="object")throw Error(s(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in a)l=a[h],a.hasOwnProperty(h)&&r[h]!==l&&Ln(e,h,l)}else for(var m in a)a.hasOwnProperty(m)&&Ln(e,m,a[m])}function Ni(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var U1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),N1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function uc(e){return N1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function fa(){}var wf=null;function Cf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pr=null,mr=null;function qg(e){var a=Xa(e);if(a&&(e=a.stateNode)){var r=e[Cn]||null;t:switch(e=a.stateNode,a.type){case"input":if(Rn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+oe(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var l=r[a];if(l!==e&&l.form===e.form){var h=l[Cn]||null;if(!h)throw Error(s(90));Rn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<r.length;a++)l=r[a],l.form===e.form&&ze(l)}break t;case"textarea":Ge(e,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&mi(e,!!r.multiple,a,!1)}}}var Rf=!1;function Yg(e,a,r){if(Rf)return e(a,r);Rf=!0;try{var l=e(a);return l}finally{if(Rf=!1,(pr!==null||mr!==null)&&(Qc(),pr&&(a=pr,e=mr,mr=pr=null,qg(a),e)))for(a=0;a<e.length;a++)qg(e[a])}}function Po(e,a){var r=e.stateNode;if(r===null)return null;var l=r[Cn]||null;if(l===null)return null;r=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,a,typeof r));return r}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Df=!1;if(ha)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Df=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Df=!1}var Wa=null,Uf=null,fc=null;function Kg(){if(fc)return fc;var e,a=Uf,r=a.length,l,h="value"in Wa?Wa.value:Wa.textContent,m=h.length;for(e=0;e<r&&a[e]===h[e];e++);var S=r-e;for(l=1;l<=S&&a[r-l]===h[m-l];l++);return fc=h.slice(e,1<l?1-l:void 0)}function hc(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function dc(){return!0}function Zg(){return!1}function Kn(e){function a(r,l,h,m,S){this._reactName=r,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(r=e[A],this[A]=r?r(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?dc:Zg,this.isPropagationStopped=Zg,this}return v(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=dc)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=dc)},persist:function(){},isPersistent:dc}),a}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=Kn(Us),Fo=v({},Us,{view:0,detail:0}),L1=Kn(Fo),Nf,Lf,Bo,mc=v({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Of,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bo&&(Bo&&e.type==="mousemove"?(Nf=e.screenX-Bo.screenX,Lf=e.screenY-Bo.screenY):Lf=Nf=0,Bo=e),Nf)},movementY:function(e){return"movementY"in e?e.movementY:Lf}}),Qg=Kn(mc),P1=v({},mc,{dataTransfer:0}),O1=Kn(P1),F1=v({},Fo,{relatedTarget:0}),Pf=Kn(F1),B1=v({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),I1=Kn(B1),z1=v({},Us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V1=Kn(z1),H1=v({},Us,{data:0}),Jg=Kn(H1),G1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j1(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=X1[e])?!!a[e]:!1}function Of(){return j1}var W1=v({},Fo,{key:function(e){if(e.key){var a=G1[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=hc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Of,charCode:function(e){return e.type==="keypress"?hc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),q1=Kn(W1),Y1=v({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$g=Kn(Y1),K1=v({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Of}),Z1=Kn(K1),Q1=v({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),J1=Kn(Q1),$1=v({},mc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tE=Kn($1),eE=v({},Us,{newState:0,oldState:0}),nE=Kn(eE),iE=[9,13,27,32],Ff=ha&&"CompositionEvent"in window,Io=null;ha&&"documentMode"in document&&(Io=document.documentMode);var aE=ha&&"TextEvent"in window&&!Io,t0=ha&&(!Ff||Io&&8<Io&&11>=Io),e0=" ",n0=!1;function i0(e,a){switch(e){case"keyup":return iE.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function sE(e,a){switch(e){case"compositionend":return a0(a);case"keypress":return a.which!==32?null:(n0=!0,e0);case"textInput":return e=a.data,e===e0&&n0?null:e;default:return null}}function rE(e,a){if(gr)return e==="compositionend"||!Ff&&i0(e,a)?(e=Kg(),fc=Uf=Wa=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return t0&&a.locale!=="ko"?null:a.data;default:return null}}var oE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function s0(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!oE[e.type]:a==="textarea"}function r0(e,a,r,l){pr?mr?mr.push(l):mr=[l]:pr=l,a=au(a,"onChange"),0<a.length&&(r=new pc("onChange","change",null,r,l),e.push({event:r,listeners:a}))}var zo=null,Vo=null;function lE(e){G_(e,0)}function gc(e){var a=Ds(e);if(ze(a))return e}function o0(e,a){if(e==="change")return a}var l0=!1;if(ha){var Bf;if(ha){var If="oninput"in document;if(!If){var c0=document.createElement("div");c0.setAttribute("oninput","return;"),If=typeof c0.oninput=="function"}Bf=If}else Bf=!1;l0=Bf&&(!document.documentMode||9<document.documentMode)}function u0(){zo&&(zo.detachEvent("onpropertychange",f0),Vo=zo=null)}function f0(e){if(e.propertyName==="value"&&gc(Vo)){var a=[];r0(a,Vo,e,Cf(e)),Yg(lE,a)}}function cE(e,a,r){e==="focusin"?(u0(),zo=a,Vo=r,zo.attachEvent("onpropertychange",f0)):e==="focusout"&&u0()}function uE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gc(Vo)}function fE(e,a){if(e==="click")return gc(a)}function hE(e,a){if(e==="input"||e==="change")return gc(a)}function dE(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ai=typeof Object.is=="function"?Object.is:dE;function Ho(e,a){if(ai(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),l=Object.keys(a);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var h=r[l];if(!Pe.call(a,h)||!ai(e[h],a[h]))return!1}return!0}function h0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function d0(e,a){var r=h0(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=a&&l>=a)return{node:r,offset:a-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=h0(r)}}function p0(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?p0(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function m0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=$t(e.document);a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=$t(e.document)}return a}function zf(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var pE=ha&&"documentMode"in document&&11>=document.documentMode,vr=null,Vf=null,Go=null,Hf=!1;function g0(e,a,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Hf||vr==null||vr!==$t(l)||(l=vr,"selectionStart"in l&&zf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Go&&Ho(Go,l)||(Go=l,l=au(Vf,"onSelect"),0<l.length&&(a=new pc("onSelect","select",null,a,r),e.push({event:a,listeners:l}),a.target=vr)))}function Ns(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var _r={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionrun:Ns("Transition","TransitionRun"),transitionstart:Ns("Transition","TransitionStart"),transitioncancel:Ns("Transition","TransitionCancel"),transitionend:Ns("Transition","TransitionEnd")},Gf={},v0={};ha&&(v0=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function Ls(e){if(Gf[e])return Gf[e];if(!_r[e])return e;var a=_r[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in v0)return Gf[e]=a[r];return e}var _0=Ls("animationend"),x0=Ls("animationiteration"),y0=Ls("animationstart"),mE=Ls("transitionrun"),gE=Ls("transitionstart"),vE=Ls("transitioncancel"),S0=Ls("transitionend"),M0=new Map,kf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kf.push("scrollEnd");function Li(e,a){M0.set(e,a),nt(a,[e])}var vc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gi=[],xr=0,Xf=0;function _c(){for(var e=xr,a=Xf=xr=0;a<e;){var r=gi[a];gi[a++]=null;var l=gi[a];gi[a++]=null;var h=gi[a];gi[a++]=null;var m=gi[a];if(gi[a++]=null,l!==null&&h!==null){var S=l.pending;S===null?h.next=h:(h.next=S.next,S.next=h),l.pending=h}m!==0&&b0(r,h,m)}}function xc(e,a,r,l){gi[xr++]=e,gi[xr++]=a,gi[xr++]=r,gi[xr++]=l,Xf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function jf(e,a,r,l){return xc(e,a,r,l),yc(e)}function Ps(e,a){return xc(e,null,null,a),yc(e)}function b0(e,a,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&a!==null&&(h=31-It(r),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[a]:l.push(a),a.lane=r|536870912),m):null}function yc(e){if(50<ul)throw ul=0,td=null,Error(s(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var yr={};function _E(e,a,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,a,r,l){return new _E(e,a,r,l)}function Wf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,a){var r=e.alternate;return r===null?(r=si(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function E0(e,a){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,a=r.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Sc(e,a,r,l,h,m){var S=0;if(l=e,typeof e=="function")Wf(e)&&(S=1);else if(typeof e=="string")S=bT(e,r,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=si(31,r,a,h),e.elementType=C,e.lanes=m,e;case T:return Os(r.children,h,m,a);case M:S=8,h|=24;break;case x:return e=si(12,r,a,h|2),e.elementType=x,e.lanes=m,e;case L:return e=si(13,r,a,h),e.elementType=L,e.lanes=m,e;case F:return e=si(19,r,a,h),e.elementType=F,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:S=10;break t;case D:S=9;break t;case U:S=11;break t;case I:S=14;break t;case j:S=16,l=null;break t}S=29,r=Error(s(130,e===null?"null":typeof e,"")),l=null}return a=si(S,r,a,h),a.elementType=e,a.type=l,a.lanes=m,a}function Os(e,a,r,l){return e=si(7,e,l,a),e.lanes=r,e}function qf(e,a,r){return e=si(6,e,null,a),e.lanes=r,e}function T0(e){var a=si(18,null,null,0);return a.stateNode=e,a}function Yf(e,a,r){return a=si(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var A0=new WeakMap;function vi(e,a){if(typeof e=="object"&&e!==null){var r=A0.get(e);return r!==void 0?r:(a={value:e,source:a,stack:G(a)},A0.set(e,a),a)}return{value:e,source:a,stack:G(a)}}var Sr=[],Mr=0,Mc=null,ko=0,_i=[],xi=0,qa=null,Zi=1,Qi="";function pa(e,a){Sr[Mr++]=ko,Sr[Mr++]=Mc,Mc=e,ko=a}function w0(e,a,r){_i[xi++]=Zi,_i[xi++]=Qi,_i[xi++]=qa,qa=e;var l=Zi;e=Qi;var h=32-It(l)-1;l&=~(1<<h),r+=1;var m=32-It(a)+h;if(30<m){var S=h-h%5;m=(l&(1<<S)-1).toString(32),l>>=S,h-=S,Zi=1<<32-It(a)+h|r<<h|l,Qi=m+e}else Zi=1<<m|r<<h|l,Qi=e}function Kf(e){e.return!==null&&(pa(e,1),w0(e,1,0))}function Zf(e){for(;e===Mc;)Mc=Sr[--Mr],Sr[Mr]=null,ko=Sr[--Mr],Sr[Mr]=null;for(;e===qa;)qa=_i[--xi],_i[xi]=null,Qi=_i[--xi],_i[xi]=null,Zi=_i[--xi],_i[xi]=null}function C0(e,a){_i[xi++]=Zi,_i[xi++]=Qi,_i[xi++]=qa,Zi=a.id,Qi=a.overflow,qa=e}var Pn=null,Qe=null,Ee=!1,Ya=null,yi=!1,Qf=Error(s(519));function Ka(e){var a=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(vi(a,e)),Qf}function R0(e){var a=e.stateNode,r=e.type,l=e.memoizedProps;switch(a[fn]=e,a[Cn]=l,r){case"dialog":ye("cancel",a),ye("close",a);break;case"iframe":case"object":case"embed":ye("load",a);break;case"video":case"audio":for(r=0;r<hl.length;r++)ye(hl[r],a);break;case"source":ye("error",a);break;case"img":case"image":case"link":ye("error",a),ye("load",a);break;case"details":ye("toggle",a);break;case"input":ye("invalid",a),ua(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ye("invalid",a);break;case"textarea":ye("invalid",a),Un(a,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||l.suppressHydrationWarning===!0||W_(a.textContent,r)?(l.popover!=null&&(ye("beforetoggle",a),ye("toggle",a)),l.onScroll!=null&&ye("scroll",a),l.onScrollEnd!=null&&ye("scrollend",a),l.onClick!=null&&(a.onclick=fa),a=!0):a=!1,a||Ka(e,!0)}function D0(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Pn=Pn.return}}function br(e){if(e!==Pn)return!1;if(!Ee)return D0(e),Ee=!0,!1;var a=e.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||md(e.type,e.memoizedProps)),r=!r),r&&Qe&&Ka(e),D0(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=ex(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=ex(e)}else a===27?(a=Qe,cs(e.type)?(e=yd,yd=null,Qe=e):Qe=a):Qe=Pn?Mi(e.stateNode.nextSibling):null;return!0}function Fs(){Qe=Pn=null,Ee=!1}function Jf(){var e=Ya;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),Ya=null),e}function Xo(e){Ya===null?Ya=[e]:Ya.push(e)}var $f=O(null),Bs=null,ma=null;function Za(e,a,r){gt($f,a._currentValue),a._currentValue=r}function ga(e){e._currentValue=$f.current,et($f)}function th(e,a,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===r)break;e=e.return}}function eh(e,a,r,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var S=h.child;m=m.firstContext;t:for(;m!==null;){var A=m;m=h;for(var V=0;V<a.length;V++)if(A.context===a[V]){m.lanes|=r,A=m.alternate,A!==null&&(A.lanes|=r),th(m.return,r,e),l||(S=null);break t}m=A.next}}else if(h.tag===18){if(S=h.return,S===null)throw Error(s(341));S.lanes|=r,m=S.alternate,m!==null&&(m.lanes|=r),th(S,r,e),S=null}else S=h.child;if(S!==null)S.return=h;else for(S=h;S!==null;){if(S===e){S=null;break}if(h=S.sibling,h!==null){h.return=S.return,S=h;break}S=S.return}h=S}}function Er(e,a,r,l){e=null;for(var h=a,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var S=h.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=h.type;ai(h.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(h===ft.current){if(S=h.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(vl):e=[vl])}h=h.return}e!==null&&eh(a,e,r,l),a.flags|=262144}function bc(e){for(e=e.firstContext;e!==null;){if(!ai(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Is(e){Bs=e,ma=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return U0(Bs,e)}function Ec(e,a){return Bs===null&&Is(e),U0(e,a)}function U0(e,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},ma===null){if(e===null)throw Error(s(308));ma=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ma=ma.next=a;return r}var xE=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(r){return r()})}},yE=i.unstable_scheduleCallback,SE=i.unstable_NormalPriority,hn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nh(){return{controller:new xE,data:new Map,refCount:0}}function jo(e){e.refCount--,e.refCount===0&&yE(SE,function(){e.controller.abort()})}var Wo=null,ih=0,Tr=0,Ar=null;function ME(e,a){if(Wo===null){var r=Wo=[];ih=0,Tr=rd(),Ar={status:"pending",value:void 0,then:function(l){r.push(l)}}}return ih++,a.then(N0,N0),a}function N0(){if(--ih===0&&Wo!==null){Ar!==null&&(Ar.status="fulfilled");var e=Wo;Wo=null,Tr=0,Ar=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function bE(e,a){var r=[],l={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var h=0;h<r.length;h++)(0,r[h])(a)},function(h){for(l.status="rejected",l.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),l}var L0=z.S;z.S=function(e,a){g_=E(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&ME(e,a),L0!==null&&L0(e,a)};var zs=O(null);function ah(){var e=zs.current;return e!==null?e:Ke.pooledCache}function Tc(e,a){a===null?gt(zs,zs.current):gt(zs,a.pool)}function P0(){var e=ah();return e===null?null:{parent:hn._currentValue,pool:e}}var wr=Error(s(460)),sh=Error(s(474)),Ac=Error(s(542)),wc={then:function(){}};function O0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function F0(e,a,r){switch(r=e[r],r===void 0?e.push(a):r!==a&&(a.then(fa,fa),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,I0(e),e;default:if(typeof a.status=="string")a.then(fa,fa);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=l}},function(l){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,I0(e),e}throw Hs=a,wr}}function Vs(e){try{var a=e._init;return a(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Hs=r,wr):r}}var Hs=null;function B0(){if(Hs===null)throw Error(s(459));var e=Hs;return Hs=null,e}function I0(e){if(e===wr||e===Ac)throw Error(s(483))}var Cr=null,qo=0;function Cc(e){var a=qo;return qo+=1,Cr===null&&(Cr=[]),F0(Cr,e,a)}function Yo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Rc(e,a){throw a.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(a),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function z0(e){function a(K,k){if(e){var J=K.deletions;J===null?(K.deletions=[k],K.flags|=16):J.push(k)}}function r(K,k){if(!e)return null;for(;k!==null;)a(K,k),k=k.sibling;return null}function l(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function h(K,k){return K=da(K,k),K.index=0,K.sibling=null,K}function m(K,k,J){return K.index=J,e?(J=K.alternate,J!==null?(J=J.index,J<k?(K.flags|=67108866,k):J):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,k,J,mt){return k===null||k.tag!==6?(k=qf(J,K.mode,mt),k.return=K,k):(k=h(k,J),k.return=K,k)}function V(K,k,J,mt){var te=J.type;return te===T?dt(K,k,J.props.children,mt,J.key):k!==null&&(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===j&&Vs(te)===k.type)?(k=h(k,J.props),Yo(k,J),k.return=K,k):(k=Sc(J.type,J.key,J.props,null,K.mode,mt),Yo(k,J),k.return=K,k)}function $(K,k,J,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=Yf(J,K.mode,mt),k.return=K,k):(k=h(k,J.children||[]),k.return=K,k)}function dt(K,k,J,mt,te){return k===null||k.tag!==7?(k=Os(J,K.mode,mt,te),k.return=K,k):(k=h(k,J),k.return=K,k)}function vt(K,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=qf(""+k,K.mode,J),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return J=Sc(k.type,k.key,k.props,null,K.mode,J),Yo(J,k),J.return=K,J;case b:return k=Yf(k,K.mode,J),k.return=K,k;case j:return k=Vs(k),vt(K,k,J)}if(ht(k)||st(k))return k=Os(k,K.mode,J,null),k.return=K,k;if(typeof k.then=="function")return vt(K,Cc(k),J);if(k.$$typeof===R)return vt(K,Ec(K,k),J);Rc(K,k)}return null}function it(K,k,J,mt){var te=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return te!==null?null:A(K,k,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===te?V(K,k,J,mt):null;case b:return J.key===te?$(K,k,J,mt):null;case j:return J=Vs(J),it(K,k,J,mt)}if(ht(J)||st(J))return te!==null?null:dt(K,k,J,mt,null);if(typeof J.then=="function")return it(K,k,Cc(J),mt);if(J.$$typeof===R)return it(K,k,Ec(K,J),mt);Rc(K,J)}return null}function lt(K,k,J,mt,te){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(J)||null,A(k,K,""+mt,te);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case y:return K=K.get(mt.key===null?J:mt.key)||null,V(k,K,mt,te);case b:return K=K.get(mt.key===null?J:mt.key)||null,$(k,K,mt,te);case j:return mt=Vs(mt),lt(K,k,J,mt,te)}if(ht(mt)||st(mt))return K=K.get(J)||null,dt(k,K,mt,te,null);if(typeof mt.then=="function")return lt(K,k,J,Cc(mt),te);if(mt.$$typeof===R)return lt(K,k,J,Ec(k,mt),te);Rc(k,mt)}return null}function Wt(K,k,J,mt){for(var te=null,De=null,Qt=k,de=k=0,Me=null;Qt!==null&&de<J.length;de++){Qt.index>de?(Me=Qt,Qt=null):Me=Qt.sibling;var Ue=it(K,Qt,J[de],mt);if(Ue===null){Qt===null&&(Qt=Me);break}e&&Qt&&Ue.alternate===null&&a(K,Qt),k=m(Ue,k,de),De===null?te=Ue:De.sibling=Ue,De=Ue,Qt=Me}if(de===J.length)return r(K,Qt),Ee&&pa(K,de),te;if(Qt===null){for(;de<J.length;de++)Qt=vt(K,J[de],mt),Qt!==null&&(k=m(Qt,k,de),De===null?te=Qt:De.sibling=Qt,De=Qt);return Ee&&pa(K,de),te}for(Qt=l(Qt);de<J.length;de++)Me=lt(Qt,K,de,J[de],mt),Me!==null&&(e&&Me.alternate!==null&&Qt.delete(Me.key===null?de:Me.key),k=m(Me,k,de),De===null?te=Me:De.sibling=Me,De=Me);return e&&Qt.forEach(function(ps){return a(K,ps)}),Ee&&pa(K,de),te}function ie(K,k,J,mt){if(J==null)throw Error(s(151));for(var te=null,De=null,Qt=k,de=k=0,Me=null,Ue=J.next();Qt!==null&&!Ue.done;de++,Ue=J.next()){Qt.index>de?(Me=Qt,Qt=null):Me=Qt.sibling;var ps=it(K,Qt,Ue.value,mt);if(ps===null){Qt===null&&(Qt=Me);break}e&&Qt&&ps.alternate===null&&a(K,Qt),k=m(ps,k,de),De===null?te=ps:De.sibling=ps,De=ps,Qt=Me}if(Ue.done)return r(K,Qt),Ee&&pa(K,de),te;if(Qt===null){for(;!Ue.done;de++,Ue=J.next())Ue=vt(K,Ue.value,mt),Ue!==null&&(k=m(Ue,k,de),De===null?te=Ue:De.sibling=Ue,De=Ue);return Ee&&pa(K,de),te}for(Qt=l(Qt);!Ue.done;de++,Ue=J.next())Ue=lt(Qt,K,de,Ue.value,mt),Ue!==null&&(e&&Ue.alternate!==null&&Qt.delete(Ue.key===null?de:Ue.key),k=m(Ue,k,de),De===null?te=Ue:De.sibling=Ue,De=Ue);return e&&Qt.forEach(function(PT){return a(K,PT)}),Ee&&pa(K,de),te}function Ye(K,k,J,mt){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:t:{for(var te=J.key;k!==null;){if(k.key===te){if(te=J.type,te===T){if(k.tag===7){r(K,k.sibling),mt=h(k,J.props.children),mt.return=K,K=mt;break t}}else if(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===j&&Vs(te)===k.type){r(K,k.sibling),mt=h(k,J.props),Yo(mt,J),mt.return=K,K=mt;break t}r(K,k);break}else a(K,k);k=k.sibling}J.type===T?(mt=Os(J.props.children,K.mode,mt,J.key),mt.return=K,K=mt):(mt=Sc(J.type,J.key,J.props,null,K.mode,mt),Yo(mt,J),mt.return=K,K=mt)}return S(K);case b:t:{for(te=J.key;k!==null;){if(k.key===te)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){r(K,k.sibling),mt=h(k,J.children||[]),mt.return=K,K=mt;break t}else{r(K,k);break}else a(K,k);k=k.sibling}mt=Yf(J,K.mode,mt),mt.return=K,K=mt}return S(K);case j:return J=Vs(J),Ye(K,k,J,mt)}if(ht(J))return Wt(K,k,J,mt);if(st(J)){if(te=st(J),typeof te!="function")throw Error(s(150));return J=te.call(J),ie(K,k,J,mt)}if(typeof J.then=="function")return Ye(K,k,Cc(J),mt);if(J.$$typeof===R)return Ye(K,k,Ec(K,J),mt);Rc(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(r(K,k.sibling),mt=h(k,J),mt.return=K,K=mt):(r(K,k),mt=qf(J,K.mode,mt),mt.return=K,K=mt),S(K)):r(K,k)}return function(K,k,J,mt){try{qo=0;var te=Ye(K,k,J,mt);return Cr=null,te}catch(Qt){if(Qt===wr||Qt===Ac)throw Qt;var De=si(29,Qt,null,K.mode);return De.lanes=mt,De.return=K,De}}}var Gs=z0(!0),V0=z0(!1),Qa=!1;function rh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oh(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,a,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Be&2)!==0){var h=l.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),l.pending=a,a=yc(e),b0(e,null,r),a}return xc(e,l,a,r),yc(e)}function Ko(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,Ro(e,r)}}function lh(e,a){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=S:m=m.next=S,r=r.next}while(r!==null);m===null?h=m=a:m=m.next=a}else h=m=a;r={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}var ch=!1;function Zo(){if(ch){var e=Ar;if(e!==null)throw e}}function Qo(e,a,r,l){ch=!1;var h=e.updateQueue;Qa=!1;var m=h.firstBaseUpdate,S=h.lastBaseUpdate,A=h.shared.pending;if(A!==null){h.shared.pending=null;var V=A,$=V.next;V.next=null,S===null?m=$:S.next=$,S=V;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==S&&(A===null?dt.firstBaseUpdate=$:A.next=$,dt.lastBaseUpdate=V))}if(m!==null){var vt=h.baseState;S=0,dt=$=V=null,A=m;do{var it=A.lane&-536870913,lt=it!==A.lane;if(lt?(Se&it)===it:(l&it)===it){it!==0&&it===Tr&&(ch=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Wt=e,ie=A;it=a;var Ye=r;switch(ie.tag){case 1:if(Wt=ie.payload,typeof Wt=="function"){vt=Wt.call(Ye,vt,it);break t}vt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=ie.payload,it=typeof Wt=="function"?Wt.call(Ye,vt,it):Wt,it==null)break t;vt=v({},vt,it);break t;case 2:Qa=!0}}it=A.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=h.callbacks,lt===null?h.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?($=dt=lt,V=vt):dt=dt.next=lt,S|=it;if(A=A.next,A===null){if(A=h.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,h.lastBaseUpdate=lt,h.shared.pending=null}}while(!0);dt===null&&(V=vt),h.baseState=V,h.firstBaseUpdate=$,h.lastBaseUpdate=dt,m===null&&(h.shared.lanes=0),as|=S,e.lanes=S,e.memoizedState=vt}}function H0(e,a){if(typeof e!="function")throw Error(s(191,e));e.call(a)}function G0(e,a){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)H0(r[e],a)}var Rr=O(null),Dc=O(0);function k0(e,a){e=Ta,gt(Dc,e),gt(Rr,a),Ta=e|a.baseLanes}function uh(){gt(Dc,Ta),gt(Rr,Rr.current)}function fh(){Ta=Dc.current,et(Rr),et(Dc)}var ri=O(null),Si=null;function ts(e){var a=e.alternate;gt(ln,ln.current&1),gt(ri,e),Si===null&&(a===null||Rr.current!==null||a.memoizedState!==null)&&(Si=e)}function hh(e){gt(ln,ln.current),gt(ri,e),Si===null&&(Si=e)}function X0(e){e.tag===22?(gt(ln,ln.current),gt(ri,e),Si===null&&(Si=e)):es()}function es(){gt(ln,ln.current),gt(ri,ri.current)}function oi(e){et(ri),Si===e&&(Si=null),et(ln)}var ln=O(0);function Uc(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||_d(r)||xd(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var va=0,fe=null,We=null,dn=null,Nc=!1,Dr=!1,ks=!1,Lc=0,Jo=0,Ur=null,EE=0;function sn(){throw Error(s(321))}function dh(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!ai(e[r],a[r]))return!1;return!0}function ph(e,a,r,l,h,m){return va=m,fe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,z.H=e===null||e.memoizedState===null?wv:Rh,ks=!1,m=r(l,h),ks=!1,Dr&&(m=W0(a,r,l,h)),j0(e),m}function j0(e){z.H=el;var a=We!==null&&We.next!==null;if(va=0,dn=We=fe=null,Nc=!1,Jo=0,Ur=null,a)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&bc(e)&&(pn=!0))}function W0(e,a,r,l){fe=e;var h=0;do{if(Dr&&(Ur=null),Jo=0,Dr=!1,25<=h)throw Error(s(301));if(h+=1,dn=We=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=Cv,m=a(r,l)}while(Dr);return m}function TE(){var e=z.H,a=e.useState()[0];return a=typeof a.then=="function"?$o(a):a,e=e.useState()[0],(We!==null?We.memoizedState:null)!==e&&(fe.flags|=1024),a}function mh(){var e=Lc!==0;return Lc=0,e}function gh(e,a,r){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r}function vh(e){if(Nc){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Nc=!1}va=0,dn=We=fe=null,Dr=!1,Jo=Lc=0,Ur=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?fe.memoizedState=dn=e:dn=dn.next=e,dn}function cn(){if(We===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var a=dn===null?fe.memoizedState:dn.next;if(a!==null)dn=a,We=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},dn===null?fe.memoizedState=dn=e:dn=dn.next=e}return dn}function Pc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(e){var a=Jo;return Jo+=1,Ur===null&&(Ur=[]),e=F0(Ur,e,a),a=fe,(dn===null?a.memoizedState:dn.next)===null&&(a=a.alternate,z.H=a===null||a.memoizedState===null?wv:Rh),e}function Oc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $o(e);if(e.$$typeof===R)return On(e)}throw Error(s(438,String(e)))}function _h(e){var a=null,r=fe.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var l=fe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=Pc(),fe.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(e),l=0;l<e;l++)r[l]=N;return a.index++,r}function _a(e,a){return typeof a=="function"?a(e):a}function Fc(e){var a=cn();return xh(a,We,e)}function xh(e,a,r){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=r;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var S=h.next;h.next=m.next,m.next=S}a.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{a=h.next;var A=S=null,V=null,$=a,dt=!1;do{var vt=$.lane&-536870913;if(vt!==$.lane?(Se&vt)===vt:(va&vt)===vt){var it=$.revertLane;if(it===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),vt===Tr&&(dt=!0);else if((va&it)===it){$=$.next,it===Tr&&(dt=!0);continue}else vt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},V===null?(A=V=vt,S=m):V=V.next=vt,fe.lanes|=it,as|=it;vt=$.action,ks&&r(m,vt),m=$.hasEagerState?$.eagerState:r(m,vt)}else it={lane:vt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},V===null?(A=V=it,S=m):V=V.next=it,fe.lanes|=vt,as|=vt;$=$.next}while($!==null&&$!==a);if(V===null?S=m:V.next=A,!ai(m,e.memoizedState)&&(pn=!0,dt&&(r=Ar,r!==null)))throw r;e.memoizedState=m,e.baseState=S,e.baseQueue=V,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function yh(e){var a=cn(),r=a.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var l=r.dispatch,h=r.pending,m=a.memoizedState;if(h!==null){r.pending=null;var S=h=h.next;do m=e(m,S.action),S=S.next;while(S!==h);ai(m,a.memoizedState)||(pn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),r.lastRenderedState=m}return[m,l]}function q0(e,a,r){var l=fe,h=cn(),m=Ee;if(m){if(r===void 0)throw Error(s(407));r=r()}else r=a();var S=!ai((We||h).memoizedState,r);if(S&&(h.memoizedState=r,pn=!0),h=h.queue,bh(Z0.bind(null,l,h,e),[e]),h.getSnapshot!==a||S||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,Nr(9,{destroy:void 0},K0.bind(null,l,h,r,a),null),Ke===null)throw Error(s(349));m||(va&127)!==0||Y0(l,a,r)}return r}function Y0(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=fe.updateQueue,a===null?(a=Pc(),fe.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function K0(e,a,r,l){a.value=r,a.getSnapshot=l,Q0(a)&&J0(e)}function Z0(e,a,r){return r(function(){Q0(a)&&J0(e)})}function Q0(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!ai(e,r)}catch{return!0}}function J0(e){var a=Ps(e,2);a!==null&&ti(a,e,2)}function Sh(e){var a=jn();if(typeof e=="function"){var r=e;if(e=r(),ks){Vt(!0);try{r()}finally{Vt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},a}function $0(e,a,r,l){return e.baseState=r,xh(e,We,typeof l=="function"?l:_a)}function AE(e,a,r,l,h){if(zc(e))throw Error(s(485));if(e=a.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};z.T!==null?r(!0):m.isTransition=!1,l(m),r=a.pending,r===null?(m.next=a.pending=m,tv(a,m)):(m.next=r.next,a.pending=r.next=m)}}function tv(e,a){var r=a.action,l=a.payload,h=e.state;if(a.isTransition){var m=z.T,S={};z.T=S;try{var A=r(h,l),V=z.S;V!==null&&V(S,A),ev(e,a,A)}catch($){Mh(e,a,$)}finally{m!==null&&S.types!==null&&(m.types=S.types),z.T=m}}else try{m=r(h,l),ev(e,a,m)}catch($){Mh(e,a,$)}}function ev(e,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){nv(e,a,l)},function(l){return Mh(e,a,l)}):nv(e,a,r)}function nv(e,a,r){a.status="fulfilled",a.value=r,iv(a),e.state=r,a=e.pending,a!==null&&(r=a.next,r===a?e.pending=null:(r=r.next,a.next=r,tv(e,r)))}function Mh(e,a,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=r,iv(a),a=a.next;while(a!==l)}e.action=null}function iv(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function av(e,a){return a}function sv(e,a){if(Ee){var r=Ke.formState;if(r!==null){t:{var l=fe;if(Ee){if(Qe){e:{for(var h=Qe,m=yi;h.nodeType!==8;){if(!m){h=null;break e}if(h=Mi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Qe=Mi(h.nextSibling),l=h.data==="F!";break t}}Ka(l)}l=!1}l&&(a=r[0])}}return r=jn(),r.memoizedState=r.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:av,lastRenderedState:a},r.queue=l,r=Ev.bind(null,fe,l),l.dispatch=r,l=Sh(!1),m=Ch.bind(null,fe,!1,l.queue),l=jn(),h={state:a,dispatch:null,action:e,pending:null},l.queue=h,r=AE.bind(null,fe,h,m,r),h.dispatch=r,l.memoizedState=e,[a,r,!1]}function rv(e){var a=cn();return ov(a,We,e)}function ov(e,a,r){if(a=xh(e,a,av)[0],e=Fc(_a)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=$o(a)}catch(S){throw S===wr?Ac:S}else l=a;a=cn();var h=a.queue,m=h.dispatch;return r!==a.memoizedState&&(fe.flags|=2048,Nr(9,{destroy:void 0},wE.bind(null,h,r),null)),[l,m,e]}function wE(e,a){e.action=a}function lv(e){var a=cn(),r=We;if(r!==null)return ov(a,r,e);cn(),a=a.memoizedState,r=cn();var l=r.queue.dispatch;return r.memoizedState=e,[a,l,!1]}function Nr(e,a,r,l){return e={tag:e,create:r,deps:l,inst:a,next:null},a=fe.updateQueue,a===null&&(a=Pc(),fe.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,a.lastEffect=e),e}function cv(){return cn().memoizedState}function Bc(e,a,r,l){var h=jn();fe.flags|=e,h.memoizedState=Nr(1|a,{destroy:void 0},r,l===void 0?null:l)}function Ic(e,a,r,l){var h=cn();l=l===void 0?null:l;var m=h.memoizedState.inst;We!==null&&l!==null&&dh(l,We.memoizedState.deps)?h.memoizedState=Nr(a,m,r,l):(fe.flags|=e,h.memoizedState=Nr(1|a,m,r,l))}function uv(e,a){Bc(8390656,8,e,a)}function bh(e,a){Ic(2048,8,e,a)}function CE(e){fe.flags|=4;var a=fe.updateQueue;if(a===null)a=Pc(),fe.updateQueue=a,a.events=[e];else{var r=a.events;r===null?a.events=[e]:r.push(e)}}function fv(e){var a=cn().memoizedState;return CE({ref:a,nextImpl:e}),function(){if((Be&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}function hv(e,a){return Ic(4,2,e,a)}function dv(e,a){return Ic(4,4,e,a)}function pv(e,a){if(typeof a=="function"){e=e();var r=a(e);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function mv(e,a,r){r=r!=null?r.concat([e]):null,Ic(4,4,pv.bind(null,a,e),r)}function Eh(){}function gv(e,a){var r=cn();a=a===void 0?null:a;var l=r.memoizedState;return a!==null&&dh(a,l[1])?l[0]:(r.memoizedState=[e,a],e)}function vv(e,a){var r=cn();a=a===void 0?null:a;var l=r.memoizedState;if(a!==null&&dh(a,l[1]))return l[0];if(l=e(),ks){Vt(!0);try{e()}finally{Vt(!1)}}return r.memoizedState=[l,a],l}function Th(e,a,r){return r===void 0||(va&1073741824)!==0&&(Se&261930)===0?e.memoizedState=a:(e.memoizedState=r,e=__(),fe.lanes|=e,as|=e,r)}function _v(e,a,r,l){return ai(r,a)?r:Rr.current!==null?(e=Th(e,r,l),ai(e,a)||(pn=!0),e):(va&42)===0||(va&1073741824)!==0&&(Se&261930)===0?(pn=!0,e.memoizedState=r):(e=__(),fe.lanes|=e,as|=e,a)}function xv(e,a,r,l,h){var m=H.p;H.p=m!==0&&8>m?m:8;var S=z.T,A={};z.T=A,Ch(e,!1,a,r);try{var V=h(),$=z.S;if($!==null&&$(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var dt=bE(V,l);tl(e,a,dt,ui(e))}else tl(e,a,l,ui(e))}catch(vt){tl(e,a,{then:function(){},status:"rejected",reason:vt},ui())}finally{H.p=m,S!==null&&A.types!==null&&(S.types=A.types),z.T=S}}function RE(){}function Ah(e,a,r,l){if(e.tag!==5)throw Error(s(476));var h=yv(e).queue;xv(e,h,a,Q,r===null?RE:function(){return Sv(e),r(l)})}function yv(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:Q},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:r},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Sv(e){var a=yv(e);a.next===null&&(a=e.alternate.memoizedState),tl(e,a.next.queue,{},ui())}function wh(){return On(vl)}function Mv(){return cn().memoizedState}function bv(){return cn().memoizedState}function DE(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var r=ui();e=Ja(r);var l=$a(a,e,r);l!==null&&(ti(l,a,r),Ko(l,a,r)),a={cache:nh()},e.payload=a;return}a=a.return}}function UE(e,a,r){var l=ui();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zc(e)?Tv(a,r):(r=jf(e,a,r,l),r!==null&&(ti(r,e,l),Av(r,a,l)))}function Ev(e,a,r){var l=ui();tl(e,a,r,l)}function tl(e,a,r,l){var h={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(zc(e))Tv(a,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var S=a.lastRenderedState,A=m(S,r);if(h.hasEagerState=!0,h.eagerState=A,ai(A,S))return xc(e,a,h,0),Ke===null&&_c(),!1}catch{}if(r=jf(e,a,h,l),r!==null)return ti(r,e,l),Av(r,a,l),!0}return!1}function Ch(e,a,r,l){if(l={lane:2,revertLane:rd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},zc(e)){if(a)throw Error(s(479))}else a=jf(e,r,l,2),a!==null&&ti(a,e,2)}function zc(e){var a=e.alternate;return e===fe||a!==null&&a===fe}function Tv(e,a){Dr=Nc=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function Av(e,a,r){if((r&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,Ro(e,r)}}var el={readContext:On,use:Oc,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};el.useEffectEvent=sn;var wv={readContext:On,use:Oc,useCallback:function(e,a){return jn().memoizedState=[e,a===void 0?null:a],e},useContext:On,useEffect:uv,useImperativeHandle:function(e,a,r){r=r!=null?r.concat([e]):null,Bc(4194308,4,pv.bind(null,a,e),r)},useLayoutEffect:function(e,a){return Bc(4194308,4,e,a)},useInsertionEffect:function(e,a){Bc(4,2,e,a)},useMemo:function(e,a){var r=jn();a=a===void 0?null:a;var l=e();if(ks){Vt(!0);try{e()}finally{Vt(!1)}}return r.memoizedState=[l,a],l},useReducer:function(e,a,r){var l=jn();if(r!==void 0){var h=r(a);if(ks){Vt(!0);try{r(a)}finally{Vt(!1)}}}else h=a;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=UE.bind(null,fe,e),[l.memoizedState,e]},useRef:function(e){var a=jn();return e={current:e},a.memoizedState=e},useState:function(e){e=Sh(e);var a=e.queue,r=Ev.bind(null,fe,a);return a.dispatch=r,[e.memoizedState,r]},useDebugValue:Eh,useDeferredValue:function(e,a){var r=jn();return Th(r,e,a)},useTransition:function(){var e=Sh(!1);return e=xv.bind(null,fe,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,r){var l=fe,h=jn();if(Ee){if(r===void 0)throw Error(s(407));r=r()}else{if(r=a(),Ke===null)throw Error(s(349));(Se&127)!==0||Y0(l,a,r)}h.memoizedState=r;var m={value:r,getSnapshot:a};return h.queue=m,uv(Z0.bind(null,l,m,e),[e]),l.flags|=2048,Nr(9,{destroy:void 0},K0.bind(null,l,m,r,a),null),r},useId:function(){var e=jn(),a=Ke.identifierPrefix;if(Ee){var r=Qi,l=Zi;r=(l&~(1<<32-It(l)-1)).toString(32)+r,a="_"+a+"R_"+r,r=Lc++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=EE++,a="_"+a+"r_"+r.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:wh,useFormState:sv,useActionState:sv,useOptimistic:function(e){var a=jn();a.memoizedState=a.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=Ch.bind(null,fe,!0,r),r.dispatch=a,[e,a]},useMemoCache:_h,useCacheRefresh:function(){return jn().memoizedState=DE.bind(null,fe)},useEffectEvent:function(e){var a=jn(),r={impl:e};return a.memoizedState=r,function(){if((Be&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},Rh={readContext:On,use:Oc,useCallback:gv,useContext:On,useEffect:bh,useImperativeHandle:mv,useInsertionEffect:hv,useLayoutEffect:dv,useMemo:vv,useReducer:Fc,useRef:cv,useState:function(){return Fc(_a)},useDebugValue:Eh,useDeferredValue:function(e,a){var r=cn();return _v(r,We.memoizedState,e,a)},useTransition:function(){var e=Fc(_a)[0],a=cn().memoizedState;return[typeof e=="boolean"?e:$o(e),a]},useSyncExternalStore:q0,useId:Mv,useHostTransitionStatus:wh,useFormState:rv,useActionState:rv,useOptimistic:function(e,a){var r=cn();return $0(r,We,e,a)},useMemoCache:_h,useCacheRefresh:bv};Rh.useEffectEvent=fv;var Cv={readContext:On,use:Oc,useCallback:gv,useContext:On,useEffect:bh,useImperativeHandle:mv,useInsertionEffect:hv,useLayoutEffect:dv,useMemo:vv,useReducer:yh,useRef:cv,useState:function(){return yh(_a)},useDebugValue:Eh,useDeferredValue:function(e,a){var r=cn();return We===null?Th(r,e,a):_v(r,We.memoizedState,e,a)},useTransition:function(){var e=yh(_a)[0],a=cn().memoizedState;return[typeof e=="boolean"?e:$o(e),a]},useSyncExternalStore:q0,useId:Mv,useHostTransitionStatus:wh,useFormState:lv,useActionState:lv,useOptimistic:function(e,a){var r=cn();return We!==null?$0(r,We,e,a):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:_h,useCacheRefresh:bv};Cv.useEffectEvent=fv;function Dh(e,a,r,l){a=e.memoizedState,r=r(l,a),r=r==null?a:v({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Uh={enqueueSetState:function(e,a,r){e=e._reactInternals;var l=ui(),h=Ja(l);h.payload=a,r!=null&&(h.callback=r),a=$a(e,h,l),a!==null&&(ti(a,e,l),Ko(a,e,l))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var l=ui(),h=Ja(l);h.tag=1,h.payload=a,r!=null&&(h.callback=r),a=$a(e,h,l),a!==null&&(ti(a,e,l),Ko(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=ui(),l=Ja(r);l.tag=2,a!=null&&(l.callback=a),a=$a(e,l,r),a!==null&&(ti(a,e,r),Ko(a,e,r))}};function Rv(e,a,r,l,h,m,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,S):a.prototype&&a.prototype.isPureReactComponent?!Ho(r,l)||!Ho(h,m):!0}function Dv(e,a,r,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,l),a.state!==e&&Uh.enqueueReplaceState(a,a.state,null)}function Xs(e,a){var r=a;if("ref"in a){r={};for(var l in a)l!=="ref"&&(r[l]=a[l])}if(e=e.defaultProps){r===a&&(r=v({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function Uv(e){vc(e)}function Nv(e){console.error(e)}function Lv(e){vc(e)}function Vc(e,a){try{var r=e.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Pv(e,a,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Nh(e,a,r){return r=Ja(r),r.tag=3,r.payload={element:null},r.callback=function(){Vc(e,a)},r}function Ov(e){return e=Ja(e),e.tag=3,e}function Fv(e,a,r,l){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){Pv(a,r,l)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Pv(a,r,l),typeof h!="function"&&(ss===null?ss=new Set([this]):ss.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function NE(e,a,r,l,h){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=r.alternate,a!==null&&Er(a,r,h,!0),r=ri.current,r!==null){switch(r.tag){case 31:case 13:return Si===null?Jc():r.alternate===null&&rn===0&&(rn=3),r.flags&=-257,r.flags|=65536,r.lanes=h,l===wc?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([l]):a.add(l),id(e,l,h)),!1;case 22:return r.flags|=65536,l===wc?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([l]):r.add(l)),id(e,l,h)),!1}throw Error(s(435,r.tag))}return id(e,l,h),Jc(),!1}if(Ee)return a=ri.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,l!==Qf&&(e=Error(s(422),{cause:l}),Xo(vi(e,r)))):(l!==Qf&&(a=Error(s(423),{cause:l}),Xo(vi(a,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=vi(l,r),h=Nh(e.stateNode,l,h),lh(e,h),rn!==4&&(rn=2)),!1;var m=Error(s(520),{cause:l});if(m=vi(m,r),cl===null?cl=[m]:cl.push(m),rn!==4&&(rn=2),a===null)return!0;l=vi(l,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=Nh(r.stateNode,l,e),lh(r,e),!1;case 1:if(a=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ss===null||!ss.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=Ov(h),Fv(h,e,r,l),lh(r,h),!1}r=r.return}while(r!==null);return!1}var Lh=Error(s(461)),pn=!1;function Fn(e,a,r,l){a.child=e===null?V0(a,null,r,l):Gs(a,e.child,r,l)}function Bv(e,a,r,l,h){r=r.render;var m=a.ref;if("ref"in l){var S={};for(var A in l)A!=="ref"&&(S[A]=l[A])}else S=l;return Is(a),l=ph(e,a,r,S,m,h),A=mh(),e!==null&&!pn?(gh(e,a,h),xa(e,a,h)):(Ee&&A&&Kf(a),a.flags|=1,Fn(e,a,l,h),a.child)}function Iv(e,a,r,l,h){if(e===null){var m=r.type;return typeof m=="function"&&!Wf(m)&&m.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=m,zv(e,a,m,l,h)):(e=Sc(r.type,null,l,a,a.mode,h),e.ref=a.ref,e.return=a,a.child=e)}if(m=e.child,!Hh(e,h)){var S=m.memoizedProps;if(r=r.compare,r=r!==null?r:Ho,r(S,l)&&e.ref===a.ref)return xa(e,a,h)}return a.flags|=1,e=da(m,l),e.ref=a.ref,e.return=a,a.child=e}function zv(e,a,r,l,h){if(e!==null){var m=e.memoizedProps;if(Ho(m,l)&&e.ref===a.ref)if(pn=!1,a.pendingProps=l=m,Hh(e,h))(e.flags&131072)!==0&&(pn=!0);else return a.lanes=e.lanes,xa(e,a,h)}return Ph(e,a,r,l,h)}function Vv(e,a,r,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=a.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,a.child=null;return Hv(e,a,m,r,l)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Tc(a,m!==null?m.cachePool:null),m!==null?k0(a,m):uh(),X0(a);else return l=a.lanes=536870912,Hv(e,a,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(Tc(a,m.cachePool),k0(a,m),es(),a.memoizedState=null):(e!==null&&Tc(a,null),uh(),es());return Fn(e,a,h,r),a.child}function nl(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Hv(e,a,r,l,h){var m=ah();return m=m===null?null:{parent:hn._currentValue,pool:m},a.memoizedState={baseLanes:r,cachePool:m},e!==null&&Tc(a,null),uh(),X0(a),e!==null&&Er(e,a,l,!0),a.childLanes=h,null}function Hc(e,a){return a=kc({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Gv(e,a,r){return Gs(a,e.child,null,r),e=Hc(a,a.pendingProps),e.flags|=2,oi(a),a.memoizedState=null,e}function LE(e,a,r){var l=a.pendingProps,h=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Ee){if(l.mode==="hidden")return e=Hc(a,l),a.lanes=536870912,nl(null,e);if(hh(a),(e=Qe)?(e=tx(e,yi),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:qa!==null?{id:Zi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},r=T0(e),r.return=a,a.child=r,Pn=a,Qe=null)):e=null,e===null)throw Ka(a);return a.lanes=536870912,null}return Hc(a,l)}var m=e.memoizedState;if(m!==null){var S=m.dehydrated;if(hh(a),h)if(a.flags&256)a.flags&=-257,a=Gv(e,a,r);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(s(558));else if(pn||Er(e,a,r,!1),h=(r&e.childLanes)!==0,pn||h){if(l=Ke,l!==null&&(S=cr(l,r),S!==0&&S!==m.retryLane))throw m.retryLane=S,Ps(e,S),ti(l,e,S),Lh;Jc(),a=Gv(e,a,r)}else e=m.treeContext,Qe=Mi(S.nextSibling),Pn=a,Ee=!0,Ya=null,yi=!1,e!==null&&C0(a,e),a=Hc(a,l),a.flags|=4096;return a}return e=da(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Gc(e,a){var r=a.ref;if(r===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(a.flags|=4194816)}}function Ph(e,a,r,l,h){return Is(a),r=ph(e,a,r,l,void 0,h),l=mh(),e!==null&&!pn?(gh(e,a,h),xa(e,a,h)):(Ee&&l&&Kf(a),a.flags|=1,Fn(e,a,r,h),a.child)}function kv(e,a,r,l,h,m){return Is(a),a.updateQueue=null,r=W0(a,l,r,h),j0(e),l=mh(),e!==null&&!pn?(gh(e,a,m),xa(e,a,m)):(Ee&&l&&Kf(a),a.flags|=1,Fn(e,a,r,m),a.child)}function Xv(e,a,r,l,h){if(Is(a),a.stateNode===null){var m=yr,S=r.contextType;typeof S=="object"&&S!==null&&(m=On(S)),m=new r(l,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Uh,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=l,m.state=a.memoizedState,m.refs={},rh(a),S=r.contextType,m.context=typeof S=="object"&&S!==null?On(S):yr,m.state=a.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(Dh(a,r,S,l),m.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&Uh.enqueueReplaceState(m,m.state,null),Qo(a,l,m,h),Zo(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){m=a.stateNode;var A=a.memoizedProps,V=Xs(r,A);m.props=V;var $=m.context,dt=r.contextType;S=yr,typeof dt=="object"&&dt!==null&&(S=On(dt));var vt=r.getDerivedStateFromProps;dt=typeof vt=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=a.pendingProps!==A,dt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||$!==S)&&Dv(a,m,l,S),Qa=!1;var it=a.memoizedState;m.state=it,Qo(a,l,m,h),Zo(),$=a.memoizedState,A||it!==$||Qa?(typeof vt=="function"&&(Dh(a,r,vt,l),$=a.memoizedState),(V=Qa||Rv(a,r,V,l,it,$,S))?(dt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=$),m.props=l,m.state=$,m.context=S,l=V):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{m=a.stateNode,oh(e,a),S=a.memoizedProps,dt=Xs(r,S),m.props=dt,vt=a.pendingProps,it=m.context,$=r.contextType,V=yr,typeof $=="object"&&$!==null&&(V=On($)),A=r.getDerivedStateFromProps,($=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==vt||it!==V)&&Dv(a,m,l,V),Qa=!1,it=a.memoizedState,m.state=it,Qo(a,l,m,h),Zo();var lt=a.memoizedState;S!==vt||it!==lt||Qa||e!==null&&e.dependencies!==null&&bc(e.dependencies)?(typeof A=="function"&&(Dh(a,r,A,l),lt=a.memoizedState),(dt=Qa||Rv(a,r,dt,l,it,lt,V)||e!==null&&e.dependencies!==null&&bc(e.dependencies))?($||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,lt,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,lt,V)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=lt),m.props=l,m.state=lt,m.context=V,l=dt):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(a.flags|=1024),l=!1)}return m=l,Gc(e,a),l=(a.flags&128)!==0,m||l?(m=a.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,e!==null&&l?(a.child=Gs(a,e.child,null,h),a.child=Gs(a,null,r,h)):Fn(e,a,r,h),a.memoizedState=m.state,e=a.child):e=xa(e,a,h),e}function jv(e,a,r,l){return Fs(),a.flags|=256,Fn(e,a,r,l),a.child}var Oh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fh(e){return{baseLanes:e,cachePool:P0()}}function Bh(e,a,r){return e=e!==null?e.childLanes&~r:0,a&&(e|=ci),e}function Wv(e,a,r){var l=a.pendingProps,h=!1,m=(a.flags&128)!==0,S;if((S=m)||(S=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),S&&(h=!0,a.flags&=-129),S=(a.flags&32)!==0,a.flags&=-33,e===null){if(Ee){if(h?ts(a):es(),(e=Qe)?(e=tx(e,yi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:qa!==null?{id:Zi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},r=T0(e),r.return=a,a.child=r,Pn=a,Qe=null)):e=null,e===null)throw Ka(a);return xd(e)?a.lanes=32:a.lanes=536870912,null}var A=l.children;return l=l.fallback,h?(es(),h=a.mode,A=kc({mode:"hidden",children:A},h),l=Os(l,h,r,null),A.return=a,l.return=a,A.sibling=l,a.child=A,l=a.child,l.memoizedState=Fh(r),l.childLanes=Bh(e,S,r),a.memoizedState=Oh,nl(null,l)):(ts(a),Ih(a,A))}var V=e.memoizedState;if(V!==null&&(A=V.dehydrated,A!==null)){if(m)a.flags&256?(ts(a),a.flags&=-257,a=zh(e,a,r)):a.memoizedState!==null?(es(),a.child=e.child,a.flags|=128,a=null):(es(),A=l.fallback,h=a.mode,l=kc({mode:"visible",children:l.children},h),A=Os(A,h,r,null),A.flags|=2,l.return=a,A.return=a,l.sibling=A,a.child=l,Gs(a,e.child,null,r),l=a.child,l.memoizedState=Fh(r),l.childLanes=Bh(e,S,r),a.memoizedState=Oh,a=nl(null,l));else if(ts(a),xd(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var $=S.dgst;S=$,l=Error(s(419)),l.stack="",l.digest=S,Xo({value:l,source:null,stack:null}),a=zh(e,a,r)}else if(pn||Er(e,a,r,!1),S=(r&e.childLanes)!==0,pn||S){if(S=Ke,S!==null&&(l=cr(S,r),l!==0&&l!==V.retryLane))throw V.retryLane=l,Ps(e,l),ti(S,e,l),Lh;_d(A)||Jc(),a=zh(e,a,r)}else _d(A)?(a.flags|=192,a.child=e.child,a=null):(e=V.treeContext,Qe=Mi(A.nextSibling),Pn=a,Ee=!0,Ya=null,yi=!1,e!==null&&C0(a,e),a=Ih(a,l.children),a.flags|=4096);return a}return h?(es(),A=l.fallback,h=a.mode,V=e.child,$=V.sibling,l=da(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,$!==null?A=da($,A):(A=Os(A,h,r,null),A.flags|=2),A.return=a,l.return=a,l.sibling=A,a.child=l,nl(null,l),l=a.child,A=e.child.memoizedState,A===null?A=Fh(r):(h=A.cachePool,h!==null?(V=hn._currentValue,h=h.parent!==V?{parent:V,pool:V}:h):h=P0(),A={baseLanes:A.baseLanes|r,cachePool:h}),l.memoizedState=A,l.childLanes=Bh(e,S,r),a.memoizedState=Oh,nl(e.child,l)):(ts(a),r=e.child,e=r.sibling,r=da(r,{mode:"visible",children:l.children}),r.return=a,r.sibling=null,e!==null&&(S=a.deletions,S===null?(a.deletions=[e],a.flags|=16):S.push(e)),a.child=r,a.memoizedState=null,r)}function Ih(e,a){return a=kc({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function kc(e,a){return e=si(22,e,null,a),e.lanes=0,e}function zh(e,a,r){return Gs(a,e.child,null,r),e=Ih(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function qv(e,a,r){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),th(e.return,a,r)}function Vh(e,a,r,l,h,m){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:h,treeForkCount:m}:(S.isBackwards=a,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=r,S.tailMode=h,S.treeForkCount=m)}function Yv(e,a,r){var l=a.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var S=ln.current,A=(S&2)!==0;if(A?(S=S&1|2,a.flags|=128):S&=1,gt(ln,S),Fn(e,a,l,r),l=Ee?ko:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qv(e,r,a);else if(e.tag===19)qv(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=a.child,h=null;r!==null;)e=r.alternate,e!==null&&Uc(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=a.child,a.child=null):(h=r.sibling,r.sibling=null),Vh(a,!1,h,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=a.child,a.child=null;h!==null;){if(e=h.alternate,e!==null&&Uc(e)===null){a.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}Vh(a,!0,r,null,m,l);break;case"together":Vh(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function xa(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),as|=a.lanes,(r&a.childLanes)===0)if(e!==null){if(Er(e,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(s(153));if(a.child!==null){for(e=a.child,r=da(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=da(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function Hh(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&bc(e)))}function PE(e,a,r){switch(a.tag){case 3:Ct(a,a.stateNode.containerInfo),Za(a,hn,e.memoizedState.cache),Fs();break;case 27:case 5:kt(a);break;case 4:Ct(a,a.stateNode.containerInfo);break;case 10:Za(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,hh(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(ts(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Wv(e,a,r):(ts(a),e=xa(e,a,r),e!==null?e.sibling:null);ts(a);break;case 19:var h=(e.flags&128)!==0;if(l=(r&a.childLanes)!==0,l||(Er(e,a,r,!1),l=(r&a.childLanes)!==0),h){if(l)return Yv(e,a,r);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),gt(ln,ln.current),l)break;return null;case 22:return a.lanes=0,Vv(e,a,r,a.pendingProps);case 24:Za(a,hn,e.memoizedState.cache)}return xa(e,a,r)}function Kv(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps)pn=!0;else{if(!Hh(e,r)&&(a.flags&128)===0)return pn=!1,PE(e,a,r);pn=(e.flags&131072)!==0}else pn=!1,Ee&&(a.flags&1048576)!==0&&w0(a,ko,a.index);switch(a.lanes=0,a.tag){case 16:t:{var l=a.pendingProps;if(e=Vs(a.elementType),a.type=e,typeof e=="function")Wf(e)?(l=Xs(e,l),a.tag=1,a=Xv(null,a,e,l,r)):(a.tag=0,a=Ph(null,a,e,l,r));else{if(e!=null){var h=e.$$typeof;if(h===U){a.tag=11,a=Bv(null,a,e,l,r);break t}else if(h===I){a.tag=14,a=Iv(null,a,e,l,r);break t}}throw a=ct(e)||e,Error(s(306,a,""))}}return a;case 0:return Ph(e,a,a.type,a.pendingProps,r);case 1:return l=a.type,h=Xs(l,a.pendingProps),Xv(e,a,l,h,r);case 3:t:{if(Ct(a,a.stateNode.containerInfo),e===null)throw Error(s(387));l=a.pendingProps;var m=a.memoizedState;h=m.element,oh(e,a),Qo(a,l,null,r);var S=a.memoizedState;if(l=S.cache,Za(a,hn,l),l!==m.cache&&eh(a,[hn],r,!0),Zo(),l=S.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:S.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=jv(e,a,l,r);break t}else if(l!==h){h=vi(Error(s(424)),a),Xo(h),a=jv(e,a,l,r);break t}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=Mi(e.firstChild),Pn=a,Ee=!0,Ya=null,yi=!0,r=V0(a,null,l,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Fs(),l===h){a=xa(e,a,r);break t}Fn(e,a,l,r)}a=a.child}return a;case 26:return Gc(e,a),e===null?(r=rx(a.type,null,a.pendingProps,null))?a.memoizedState=r:Ee||(r=a.type,e=a.pendingProps,l=su(tt.current).createElement(r),l[fn]=a,l[Cn]=e,Bn(l,r,e),w(l),a.stateNode=l):a.memoizedState=rx(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return kt(a),e===null&&Ee&&(l=a.stateNode=ix(a.type,a.pendingProps,tt.current),Pn=a,yi=!0,h=Qe,cs(a.type)?(yd=h,Qe=Mi(l.firstChild)):Qe=h),Fn(e,a,a.pendingProps.children,r),Gc(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Ee&&((h=l=Qe)&&(l=uT(l,a.type,a.pendingProps,yi),l!==null?(a.stateNode=l,Pn=a,Qe=Mi(l.firstChild),yi=!1,h=!0):h=!1),h||Ka(a)),kt(a),h=a.type,m=a.pendingProps,S=e!==null?e.memoizedProps:null,l=m.children,md(h,m)?l=null:S!==null&&md(h,S)&&(a.flags|=32),a.memoizedState!==null&&(h=ph(e,a,TE,null,null,r),vl._currentValue=h),Gc(e,a),Fn(e,a,l,r),a.child;case 6:return e===null&&Ee&&((e=r=Qe)&&(r=fT(r,a.pendingProps,yi),r!==null?(a.stateNode=r,Pn=a,Qe=null,e=!0):e=!1),e||Ka(a)),null;case 13:return Wv(e,a,r);case 4:return Ct(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=Gs(a,null,l,r):Fn(e,a,l,r),a.child;case 11:return Bv(e,a,a.type,a.pendingProps,r);case 7:return Fn(e,a,a.pendingProps,r),a.child;case 8:return Fn(e,a,a.pendingProps.children,r),a.child;case 12:return Fn(e,a,a.pendingProps.children,r),a.child;case 10:return l=a.pendingProps,Za(a,a.type,l.value),Fn(e,a,l.children,r),a.child;case 9:return h=a.type._context,l=a.pendingProps.children,Is(a),h=On(h),l=l(h),a.flags|=1,Fn(e,a,l,r),a.child;case 14:return Iv(e,a,a.type,a.pendingProps,r);case 15:return zv(e,a,a.type,a.pendingProps,r);case 19:return Yv(e,a,r);case 31:return LE(e,a,r);case 22:return Vv(e,a,r,a.pendingProps);case 24:return Is(a),l=On(hn),e===null?(h=ah(),h===null&&(h=Ke,m=nh(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),a.memoizedState={parent:l,cache:h},rh(a),Za(a,hn,h)):((e.lanes&r)!==0&&(oh(e,a),Qo(a,null,null,r),Zo()),h=e.memoizedState,m=a.memoizedState,h.parent!==l?(h={parent:l,cache:l},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),Za(a,hn,l)):(l=m.cache,Za(a,hn,l),l!==h.cache&&eh(a,[hn],r,!0))),Fn(e,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}function ya(e){e.flags|=4}function Gh(e,a,r,l,h){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(M_())e.flags|=8192;else throw Hs=wc,sh}else e.flags&=-16777217}function Zv(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!fx(a))if(M_())e.flags|=8192;else throw Hs=wc,sh}function Xc(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?He():536870912,e.lanes|=a,Fr|=a)}function il(e,a){if(!Ee)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Je(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(a)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=r,a}function OE(e,a,r){var l=a.pendingProps;switch(Zf(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(a),null;case 1:return Je(a),null;case 3:return r=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),ga(hn),Xt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(a)?ya(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Jf())),Je(a),null;case 26:var h=a.type,m=a.memoizedState;return e===null?(ya(a),m!==null?(Je(a),Zv(a,m)):(Je(a),Gh(a,h,null,l,r))):m?m!==e.memoizedState?(ya(a),Je(a),Zv(a,m)):(Je(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&ya(a),Je(a),Gh(a,h,e,l,r)),null;case 27:if(ve(a),r=tt.current,h=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&ya(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Je(a),null}e=At.current,br(a)?R0(a):(e=ix(h,l,r),a.stateNode=e,ya(a))}return Je(a),null;case 5:if(ve(a),h=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&ya(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Je(a),null}if(m=At.current,br(a))R0(a);else{var S=su(tt.current);switch(m){case 1:m=S.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=S.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=S.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=S.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=S.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?S.createElement(h,{is:l.is}):S.createElement(h)}}m[fn]=a,m[Cn]=l;t:for(S=a.child;S!==null;){if(S.tag===5||S.tag===6)m.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===a)break t;for(;S.sibling===null;){if(S.return===null||S.return===a)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}a.stateNode=m;t:switch(Bn(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&ya(a)}}return Je(a),Gh(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,r),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&ya(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(s(166));if(e=tt.current,br(a)){if(e=a.stateNode,r=a.memoizedProps,l=null,h=Pn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[fn]=a,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||W_(e.nodeValue,r)),e||Ka(a,!0)}else e=su(e).createTextNode(l),e[fn]=a,a.stateNode=e}return Je(a),null;case 31:if(r=a.memoizedState,e===null||e.memoizedState!==null){if(l=br(a),r!==null){if(e===null){if(!l)throw Error(s(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[fn]=a}else Fs(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Je(a),e=!1}else r=Jf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return a.flags&256?(oi(a),a):(oi(a),null);if((a.flags&128)!==0)throw Error(s(558))}return Je(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=br(a),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[fn]=a}else Fs(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Je(a),h=!1}else h=Jf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return a.flags&256?(oi(a),a):(oi(a),null)}return oi(a),(a.flags&128)!==0?(a.lanes=r,a):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=a.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),r!==e&&r&&(a.child.flags|=8192),Xc(a,a.updateQueue),Je(a),null);case 4:return Xt(),e===null&&ud(a.stateNode.containerInfo),Je(a),null;case 10:return ga(a.type),Je(a),null;case 19:if(et(ln),l=a.memoizedState,l===null)return Je(a),null;if(h=(a.flags&128)!==0,m=l.rendering,m===null)if(h)il(l,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(m=Uc(e),m!==null){for(a.flags|=128,il(l,!1),e=m.updateQueue,a.updateQueue=e,Xc(a,e),a.subtreeFlags=0,e=r,r=a.child;r!==null;)E0(r,e),r=r.sibling;return gt(ln,ln.current&1|2),Ee&&pa(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&E()>Kc&&(a.flags|=128,h=!0,il(l,!1),a.lanes=4194304)}else{if(!h)if(e=Uc(m),e!==null){if(a.flags|=128,h=!0,e=e.updateQueue,a.updateQueue=e,Xc(a,e),il(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Ee)return Je(a),null}else 2*E()-l.renderingStartTime>Kc&&r!==536870912&&(a.flags|=128,h=!0,il(l,!1),a.lanes=4194304);l.isBackwards?(m.sibling=a.child,a.child=m):(e=l.last,e!==null?e.sibling=m:a.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=E(),e.sibling=null,r=ln.current,gt(ln,h?r&1|2:r&1),Ee&&pa(a,l.treeForkCount),e):(Je(a),null);case 22:case 23:return oi(a),fh(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(r&536870912)!==0&&(a.flags&128)===0&&(Je(a),a.subtreeFlags&6&&(a.flags|=8192)):Je(a),r=a.updateQueue,r!==null&&Xc(a,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==r&&(a.flags|=2048),e!==null&&et(zs),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),ga(hn),Je(a),null;case 25:return null;case 30:return null}throw Error(s(156,a.tag))}function FE(e,a){switch(Zf(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return ga(hn),Xt(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return ve(a),null;case 31:if(a.memoizedState!==null){if(oi(a),a.alternate===null)throw Error(s(340));Fs()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(oi(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(s(340));Fs()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return et(ln),null;case 4:return Xt(),null;case 10:return ga(a.type),null;case 22:case 23:return oi(a),fh(),e!==null&&et(zs),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return ga(hn),null;case 25:return null;default:return null}}function Qv(e,a){switch(Zf(a),a.tag){case 3:ga(hn),Xt();break;case 26:case 27:case 5:ve(a);break;case 4:Xt();break;case 31:a.memoizedState!==null&&oi(a);break;case 13:oi(a);break;case 19:et(ln);break;case 10:ga(a.type);break;case 22:case 23:oi(a),fh(),e!==null&&et(zs);break;case 24:ga(hn)}}function al(e,a){try{var r=a.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var h=l.next;r=h;do{if((r.tag&e)===e){l=void 0;var m=r.create,S=r.inst;l=m(),S.destroy=l}r=r.next}while(r!==h)}}catch(A){Xe(a,a.return,A)}}function ns(e,a,r){try{var l=a.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var S=l.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,h=a;var V=r,$=A;try{$()}catch(dt){Xe(h,V,dt)}}}l=l.next}while(l!==m)}}catch(dt){Xe(a,a.return,dt)}}function Jv(e){var a=e.updateQueue;if(a!==null){var r=e.stateNode;try{G0(a,r)}catch(l){Xe(e,e.return,l)}}}function $v(e,a,r){r.props=Xs(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Xe(e,a,l)}}function sl(e,a){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(h){Xe(e,a,h)}}function Ji(e,a){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(h){Xe(e,a,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Xe(e,a,h)}else r.current=null}function t_(e){var a=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(h){Xe(e,e.return,h)}}function kh(e,a,r){try{var l=e.stateNode;aT(l,e.type,r,a),l[Cn]=a}catch(h){Xe(e,e.return,h)}}function e_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&cs(e.type)||e.tag===4}function Xh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||e_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&cs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jh(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(e),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=fa));else if(l!==4&&(l===27&&cs(e.type)&&(r=e.stateNode,a=null),e=e.child,e!==null))for(jh(e,a,r),e=e.sibling;e!==null;)jh(e,a,r),e=e.sibling}function jc(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(l!==4&&(l===27&&cs(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(jc(e,a,r),e=e.sibling;e!==null;)jc(e,a,r),e=e.sibling}function n_(e){var a=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);Bn(a,l,r),a[fn]=e,a[Cn]=r}catch(m){Xe(e,e.return,m)}}var Sa=!1,mn=!1,Wh=!1,i_=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function BE(e,a){if(e=e.containerInfo,dd=hu,e=m0(e),zf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var S=0,A=-1,V=-1,$=0,dt=0,vt=e,it=null;e:for(;;){for(var lt;vt!==r||h!==0&&vt.nodeType!==3||(A=S+h),vt!==m||l!==0&&vt.nodeType!==3||(V=S+l),vt.nodeType===3&&(S+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)it=vt,vt=lt;for(;;){if(vt===e)break e;if(it===r&&++$===h&&(A=S),it===m&&++dt===l&&(V=S),(lt=vt.nextSibling)!==null)break;vt=it,it=vt.parentNode}vt=lt}r=A===-1||V===-1?null:{start:A,end:V}}else r=null}r=r||{start:0,end:0}}else r=null;for(pd={focusedElem:e,selectionRange:r},hu=!1,Tn=a;Tn!==null;)if(a=Tn,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Tn=e;else for(;Tn!==null;){switch(a=Tn,m=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=a,h=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var Wt=Xs(r.type,h);e=l.getSnapshotBeforeUpdate(Wt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Xe(r,r.return,ie)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,r=e.nodeType,r===9)vd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=a.sibling,e!==null){e.return=a.return,Tn=e;break}Tn=a.return}}function a_(e,a,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:ba(e,r),l&4&&al(5,r);break;case 1:if(ba(e,r),l&4)if(e=r.stateNode,a===null)try{e.componentDidMount()}catch(S){Xe(r,r.return,S)}else{var h=Xs(r.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(h,a,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Xe(r,r.return,S)}}l&64&&Jv(r),l&512&&sl(r,r.return);break;case 3:if(ba(e,r),l&64&&(e=r.updateQueue,e!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{G0(e,a)}catch(S){Xe(r,r.return,S)}}break;case 27:a===null&&l&4&&n_(r);case 26:case 5:ba(e,r),a===null&&l&4&&t_(r),l&512&&sl(r,r.return);break;case 12:ba(e,r);break;case 31:ba(e,r),l&4&&o_(e,r);break;case 13:ba(e,r),l&4&&l_(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=WE.bind(null,r),hT(e,r))));break;case 22:if(l=r.memoizedState!==null||Sa,!l){a=a!==null&&a.memoizedState!==null||mn,h=Sa;var m=mn;Sa=l,(mn=a)&&!m?Ea(e,r,(r.subtreeFlags&8772)!==0):ba(e,r),Sa=h,mn=m}break;case 30:break;default:ba(e,r)}}function s_(e){var a=e.alternate;a!==null&&(e.alternate=null,s_(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Lo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Zn=!1;function Ma(e,a,r){for(r=r.child;r!==null;)r_(e,a,r),r=r.sibling}function r_(e,a,r){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(bt,r)}catch{}switch(r.tag){case 26:mn||Ji(r,a),Ma(e,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:mn||Ji(r,a);var l=en,h=Zn;cs(r.type)&&(en=r.stateNode,Zn=!1),Ma(e,a,r),pl(r.stateNode),en=l,Zn=h;break;case 5:mn||Ji(r,a);case 6:if(l=en,h=Zn,en=null,Ma(e,a,r),en=l,Zn=h,en!==null)if(Zn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(r.stateNode)}catch(m){Xe(r,a,m)}else try{en.removeChild(r.stateNode)}catch(m){Xe(r,a,m)}break;case 18:en!==null&&(Zn?(e=en,J_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Xr(e)):J_(en,r.stateNode));break;case 4:l=en,h=Zn,en=r.stateNode.containerInfo,Zn=!0,Ma(e,a,r),en=l,Zn=h;break;case 0:case 11:case 14:case 15:ns(2,r,a),mn||ns(4,r,a),Ma(e,a,r);break;case 1:mn||(Ji(r,a),l=r.stateNode,typeof l.componentWillUnmount=="function"&&$v(r,a,l)),Ma(e,a,r);break;case 21:Ma(e,a,r);break;case 22:mn=(l=mn)||r.memoizedState!==null,Ma(e,a,r),mn=l;break;default:Ma(e,a,r)}}function o_(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Xr(e)}catch(r){Xe(a,a.return,r)}}}function l_(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xr(e)}catch(r){Xe(a,a.return,r)}}function IE(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new i_),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new i_),a;default:throw Error(s(435,e.tag))}}function Wc(e,a){var r=IE(e);a.forEach(function(l){if(!r.has(l)){r.add(l);var h=qE.bind(null,e,l);l.then(h,h)}})}function Qn(e,a){var r=a.deletions;if(r!==null)for(var l=0;l<r.length;l++){var h=r[l],m=e,S=a,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(cs(A.type)){en=A.stateNode,Zn=!1;break t}break;case 5:en=A.stateNode,Zn=!1;break t;case 3:case 4:en=A.stateNode.containerInfo,Zn=!0;break t}A=A.return}if(en===null)throw Error(s(160));r_(m,S,h),en=null,Zn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)c_(a,e),a=a.sibling}var Pi=null;function c_(e,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(a,e),Jn(e),l&4&&(ns(3,e,e.return),al(3,e),ns(5,e,e.return));break;case 1:Qn(a,e),Jn(e),l&512&&(mn||r===null||Ji(r,r.return)),l&64&&Sa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var h=Pi;if(Qn(a,e),Jn(e),l&512&&(mn||r===null||Ji(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Rs]||m[fn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),Bn(m,l,r),m[fn]=e,w(m),l=m;break t;case"link":var S=cx("link","href",h).get(l+(r.href||""));if(S){for(var A=0;A<S.length;A++)if(m=S[A],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(A,1);break e}}m=h.createElement(l),Bn(m,l,r),h.head.appendChild(m);break;case"meta":if(S=cx("meta","content",h).get(l+(r.content||""))){for(A=0;A<S.length;A++)if(m=S[A],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(A,1);break e}}m=h.createElement(l),Bn(m,l,r),h.head.appendChild(m);break;default:throw Error(s(468,l))}m[fn]=e,w(m),l=m}e.stateNode=l}else ux(h,e.type,e.stateNode);else e.stateNode=lx(h,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?ux(h,e.type,e.stateNode):lx(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&kh(e,e.memoizedProps,r.memoizedProps)}break;case 27:Qn(a,e),Jn(e),l&512&&(mn||r===null||Ji(r,r.return)),r!==null&&l&4&&kh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Qn(a,e),Jn(e),l&512&&(mn||r===null||Ji(r,r.return)),e.flags&32){h=e.stateNode;try{xn(h,"")}catch(Wt){Xe(e,e.return,Wt)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,kh(e,h,r!==null?r.memoizedProps:h)),l&1024&&(Wh=!0);break;case 6:if(Qn(a,e),Jn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Wt){Xe(e,e.return,Wt)}}break;case 3:if(lu=null,h=Pi,Pi=ru(a.containerInfo),Qn(a,e),Pi=h,Jn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Xr(a.containerInfo)}catch(Wt){Xe(e,e.return,Wt)}Wh&&(Wh=!1,u_(e));break;case 4:l=Pi,Pi=ru(e.stateNode.containerInfo),Qn(a,e),Jn(e),Pi=l;break;case 12:Qn(a,e),Jn(e);break;case 31:Qn(a,e),Jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wc(e,l)));break;case 13:Qn(a,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Yc=E()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wc(e,l)));break;case 22:h=e.memoizedState!==null;var V=r!==null&&r.memoizedState!==null,$=Sa,dt=mn;if(Sa=$||h,mn=dt||V,Qn(a,e),mn=dt,Sa=$,Jn(e),l&8192)t:for(a=e.stateNode,a._visibility=h?a._visibility&-2:a._visibility|1,h&&(r===null||V||Sa||mn||js(e)),r=null,a=e;;){if(a.tag===5||a.tag===26){if(r===null){V=r=a;try{if(m=V.stateNode,h)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=V.stateNode;var vt=V.memoizedProps.style,it=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Wt){Xe(V,V.return,Wt)}}}else if(a.tag===6){if(r===null){V=a;try{V.stateNode.nodeValue=h?"":V.memoizedProps}catch(Wt){Xe(V,V.return,Wt)}}}else if(a.tag===18){if(r===null){V=a;try{var lt=V.stateNode;h?$_(lt,!0):$_(V.stateNode,!1)}catch(Wt){Xe(V,V.return,Wt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Wc(e,r))));break;case 19:Qn(a,e),Jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wc(e,l)));break;case 30:break;case 21:break;default:Qn(a,e),Jn(e)}}function Jn(e){var a=e.flags;if(a&2){try{for(var r,l=e.return;l!==null;){if(e_(l)){r=l;break}l=l.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var h=r.stateNode,m=Xh(e);jc(e,m,h);break;case 5:var S=r.stateNode;r.flags&32&&(xn(S,""),r.flags&=-33);var A=Xh(e);jc(e,A,S);break;case 3:case 4:var V=r.stateNode.containerInfo,$=Xh(e);jh(e,$,V);break;default:throw Error(s(161))}}catch(dt){Xe(e,e.return,dt)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function u_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;u_(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function ba(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)a_(e,a.alternate,a),a=a.sibling}function js(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:ns(4,a,a.return),js(a);break;case 1:Ji(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&$v(a,a.return,r),js(a);break;case 27:pl(a.stateNode);case 26:case 5:Ji(a,a.return),js(a);break;case 22:a.memoizedState===null&&js(a);break;case 30:js(a);break;default:js(a)}e=e.sibling}}function Ea(e,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,h=e,m=a,S=m.flags;switch(m.tag){case 0:case 11:case 15:Ea(h,m,r),al(4,m);break;case 1:if(Ea(h,m,r),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch($){Xe(l,l.return,$)}if(l=m,h=l.updateQueue,h!==null){var A=l.stateNode;try{var V=h.shared.hiddenCallbacks;if(V!==null)for(h.shared.hiddenCallbacks=null,h=0;h<V.length;h++)H0(V[h],A)}catch($){Xe(l,l.return,$)}}r&&S&64&&Jv(m),sl(m,m.return);break;case 27:n_(m);case 26:case 5:Ea(h,m,r),r&&l===null&&S&4&&t_(m),sl(m,m.return);break;case 12:Ea(h,m,r);break;case 31:Ea(h,m,r),r&&S&4&&o_(h,m);break;case 13:Ea(h,m,r),r&&S&4&&l_(h,m);break;case 22:m.memoizedState===null&&Ea(h,m,r),sl(m,m.return);break;case 30:break;default:Ea(h,m,r)}a=a.sibling}}function qh(e,a){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&jo(r))}function Yh(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&jo(e))}function Oi(e,a,r,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)f_(e,a,r,l),a=a.sibling}function f_(e,a,r,l){var h=a.flags;switch(a.tag){case 0:case 11:case 15:Oi(e,a,r,l),h&2048&&al(9,a);break;case 1:Oi(e,a,r,l);break;case 3:Oi(e,a,r,l),h&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&jo(e)));break;case 12:if(h&2048){Oi(e,a,r,l),e=a.stateNode;try{var m=a.memoizedProps,S=m.id,A=m.onPostCommit;typeof A=="function"&&A(S,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Xe(a,a.return,V)}}else Oi(e,a,r,l);break;case 31:Oi(e,a,r,l);break;case 13:Oi(e,a,r,l);break;case 23:break;case 22:m=a.stateNode,S=a.alternate,a.memoizedState!==null?m._visibility&2?Oi(e,a,r,l):rl(e,a):m._visibility&2?Oi(e,a,r,l):(m._visibility|=2,Lr(e,a,r,l,(a.subtreeFlags&10256)!==0||!1)),h&2048&&qh(S,a);break;case 24:Oi(e,a,r,l),h&2048&&Yh(a.alternate,a);break;default:Oi(e,a,r,l)}}function Lr(e,a,r,l,h){for(h=h&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var m=e,S=a,A=r,V=l,$=S.flags;switch(S.tag){case 0:case 11:case 15:Lr(m,S,A,V,h),al(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?Lr(m,S,A,V,h):rl(m,S):(dt._visibility|=2,Lr(m,S,A,V,h)),h&&$&2048&&qh(S.alternate,S);break;case 24:Lr(m,S,A,V,h),h&&$&2048&&Yh(S.alternate,S);break;default:Lr(m,S,A,V,h)}a=a.sibling}}function rl(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=e,l=a,h=l.flags;switch(l.tag){case 22:rl(r,l),h&2048&&qh(l.alternate,l);break;case 24:rl(r,l),h&2048&&Yh(l.alternate,l);break;default:rl(r,l)}a=a.sibling}}var ol=8192;function Pr(e,a,r){if(e.subtreeFlags&ol)for(e=e.child;e!==null;)h_(e,a,r),e=e.sibling}function h_(e,a,r){switch(e.tag){case 26:Pr(e,a,r),e.flags&ol&&e.memoizedState!==null&&ET(r,Pi,e.memoizedState,e.memoizedProps);break;case 5:Pr(e,a,r);break;case 3:case 4:var l=Pi;Pi=ru(e.stateNode.containerInfo),Pr(e,a,r),Pi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ol,ol=16777216,Pr(e,a,r),ol=l):Pr(e,a,r));break;default:Pr(e,a,r)}}function d_(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function ll(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Tn=l,m_(l,e)}d_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)p_(e),e=e.sibling}function p_(e){switch(e.tag){case 0:case 11:case 15:ll(e),e.flags&2048&&ns(9,e,e.return);break;case 3:ll(e);break;case 12:ll(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,qc(e)):ll(e);break;default:ll(e)}}function qc(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Tn=l,m_(l,e)}d_(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:ns(8,a,a.return),qc(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,qc(a));break;default:qc(a)}e=e.sibling}}function m_(e,a){for(;Tn!==null;){var r=Tn;switch(r.tag){case 0:case 11:case 15:ns(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:jo(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Tn=l;else t:for(r=e;Tn!==null;){l=Tn;var h=l.sibling,m=l.return;if(s_(l),l===r){Tn=null;break t}if(h!==null){h.return=m,Tn=h;break t}Tn=m}}}var zE={getCacheForType:function(e){var a=On(hn),r=a.data.get(e);return r===void 0&&(r=e(),a.data.set(e,r)),r},cacheSignal:function(){return On(hn).controller.signal}},VE=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ke=null,xe=null,Se=0,ke=0,li=null,is=!1,Or=!1,Kh=!1,Ta=0,rn=0,as=0,Ws=0,Zh=0,ci=0,Fr=0,cl=null,$n=null,Qh=!1,Yc=0,g_=0,Kc=1/0,Zc=null,ss=null,yn=0,rs=null,Br=null,Aa=0,Jh=0,$h=null,v_=null,ul=0,td=null;function ui(){return(Be&2)!==0&&Se!==0?Se&-Se:z.T!==null?rd():Uo()}function __(){if(ci===0)if((Se&536870912)===0||Ee){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ci=e}else ci=536870912;return e=ri.current,e!==null&&(e.flags|=32),ci}function ti(e,a,r){(e===Ke&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(Ir(e,0),os(e,Se,ci,!1)),Vn(e,r),((Be&2)===0||e!==Ke)&&(e===Ke&&((Be&2)===0&&(Ws|=r),rn===4&&os(e,Se,ci,!1)),$i(e))}function x_(e,a,r){if((Be&6)!==0)throw Error(s(327));var l=!r&&(a&127)===0&&(a&e.expiredLanes)===0||wt(e,a),h=l?kE(e,a):nd(e,a,!0),m=l;do{if(h===0){Or&&!l&&os(e,a,0,!1);break}else{if(r=e.current.alternate,m&&!HE(r)){h=nd(e,a,!1),m=!1;continue}if(h===2){if(m=a,e.errorRecoveryDisabledLanes&m)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){a=S;t:{var A=e;h=cl;var V=A.current.memoizedState.isDehydrated;if(V&&(Ir(A,S).flags|=256),S=nd(A,S,!1),S!==2){if(Kh&&!V){A.errorRecoveryDisabledLanes|=m,Ws|=m,h=4;break t}m=$n,$n=h,m!==null&&($n===null?$n=m:$n.push.apply($n,m))}h=S}if(m=!1,h!==2)continue}}if(h===1){Ir(e,0),os(e,a,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(s(345));case 4:if((a&4194048)!==a)break;case 6:os(l,a,ci,!is);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((a&62914560)===a&&(h=Yc+300-E(),10<h)){if(os(l,a,ci,!is),_t(l,0,!0)!==0)break t;Aa=a,l.timeoutHandle=Z_(y_.bind(null,l,r,$n,Zc,Qh,a,ci,Ws,Fr,is,m,"Throttled",-0,0),h);break t}y_(l,r,$n,Zc,Qh,a,ci,Ws,Fr,is,m,null,-0,0)}}break}while(!0);$i(e)}function y_(e,a,r,l,h,m,S,A,V,$,dt,vt,it,lt){if(e.timeoutHandle=-1,vt=a.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fa},h_(a,m,vt);var Wt=(m&62914560)===m?Yc-E():(m&4194048)===m?g_-E():0;if(Wt=TT(vt,Wt),Wt!==null){Aa=m,e.cancelPendingCommit=Wt(C_.bind(null,e,a,m,r,l,h,S,A,V,dt,vt,null,it,lt)),os(e,m,S,!$);return}}C_(e,a,m,r,l,h,S,A,V)}function HE(e){for(var a=e;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var h=r[l],m=h.getSnapshot;h=h.value;try{if(!ai(m(),h))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function os(e,a,r,l){a&=~Zh,a&=~Ws,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var h=a;0<h;){var m=31-It(h),S=1<<m;l[m]=-1,h&=~S}r!==0&&lc(e,r,a)}function Qc(){return(Be&6)===0?(fl(0),!1):!0}function ed(){if(xe!==null){if(ke===0)var e=xe.return;else e=xe,ma=Bs=null,vh(e),Cr=null,qo=0,e=xe;for(;e!==null;)Qv(e.alternate,e),e=e.return;xe=null}}function Ir(e,a){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,oT(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Aa=0,ed(),Ke=e,xe=r=da(e.current,null),Se=a,ke=0,li=null,is=!1,Or=wt(e,a),Kh=!1,Fr=ci=Zh=Ws=as=rn=0,$n=cl=null,Qh=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var h=31-It(l),m=1<<h;a|=e[h],l&=~m}return Ta=a,_c(),r}function S_(e,a){fe=null,z.H=el,a===wr||a===Ac?(a=B0(),ke=3):a===sh?(a=B0(),ke=4):ke=a===Lh?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,li=a,xe===null&&(rn=1,Vc(e,vi(a,e.current)))}function M_(){var e=ri.current;return e===null?!0:(Se&4194048)===Se?Si===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Si:!1}function b_(){var e=z.H;return z.H=el,e===null?el:e}function E_(){var e=z.A;return z.A=zE,e}function Jc(){rn=4,is||(Se&4194048)!==Se&&ri.current!==null||(Or=!0),(as&134217727)===0&&(Ws&134217727)===0||Ke===null||os(Ke,Se,ci,!1)}function nd(e,a,r){var l=Be;Be|=2;var h=b_(),m=E_();(Ke!==e||Se!==a)&&(Zc=null,Ir(e,a)),a=!1;var S=rn;t:do try{if(ke!==0&&xe!==null){var A=xe,V=li;switch(ke){case 8:ed(),S=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(a=!0);var $=ke;if(ke=0,li=null,zr(e,A,V,$),r&&Or){S=0;break t}break;default:$=ke,ke=0,li=null,zr(e,A,V,$)}}GE(),S=rn;break}catch(dt){S_(e,dt)}while(!0);return a&&e.shellSuspendCounter++,ma=Bs=null,Be=l,z.H=h,z.A=m,xe===null&&(Ke=null,Se=0,_c()),S}function GE(){for(;xe!==null;)T_(xe)}function kE(e,a){var r=Be;Be|=2;var l=b_(),h=E_();Ke!==e||Se!==a?(Zc=null,Kc=E()+500,Ir(e,a)):Or=wt(e,a);t:do try{if(ke!==0&&xe!==null){a=xe;var m=li;e:switch(ke){case 1:ke=0,li=null,zr(e,a,m,1);break;case 2:case 9:if(O0(m)){ke=0,li=null,A_(a);break}a=function(){ke!==2&&ke!==9||Ke!==e||(ke=7),$i(e)},m.then(a,a);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:O0(m)?(ke=0,li=null,A_(a)):(ke=0,li=null,zr(e,a,m,7));break;case 5:var S=null;switch(xe.tag){case 26:S=xe.memoizedState;case 5:case 27:var A=xe;if(S?fx(S):A.stateNode.complete){ke=0,li=null;var V=A.sibling;if(V!==null)xe=V;else{var $=A.return;$!==null?(xe=$,$c($)):xe=null}break e}}ke=0,li=null,zr(e,a,m,5);break;case 6:ke=0,li=null,zr(e,a,m,6);break;case 8:ed(),rn=6;break t;default:throw Error(s(462))}}XE();break}catch(dt){S_(e,dt)}while(!0);return ma=Bs=null,z.H=l,z.A=h,Be=r,xe!==null?0:(Ke=null,Se=0,_c(),rn)}function XE(){for(;xe!==null&&!Ot();)T_(xe)}function T_(e){var a=Kv(e.alternate,e,Ta);e.memoizedProps=e.pendingProps,a===null?$c(e):xe=a}function A_(e){var a=e,r=a.alternate;switch(a.tag){case 15:case 0:a=kv(r,a,a.pendingProps,a.type,void 0,Se);break;case 11:a=kv(r,a,a.pendingProps,a.type.render,a.ref,Se);break;case 5:vh(a);default:Qv(r,a),a=xe=E0(a,Ta),a=Kv(r,a,Ta)}e.memoizedProps=e.pendingProps,a===null?$c(e):xe=a}function zr(e,a,r,l){ma=Bs=null,vh(a),Cr=null,qo=0;var h=a.return;try{if(NE(e,h,a,r,Se)){rn=1,Vc(e,vi(r,e.current)),xe=null;return}}catch(m){if(h!==null)throw xe=h,m;rn=1,Vc(e,vi(r,e.current)),xe=null;return}a.flags&32768?(Ee||l===1?e=!0:Or||(Se&536870912)!==0?e=!1:(is=e=!0,(l===2||l===9||l===3||l===6)&&(l=ri.current,l!==null&&l.tag===13&&(l.flags|=16384))),w_(a,e)):$c(a)}function $c(e){var a=e;do{if((a.flags&32768)!==0){w_(a,is);return}e=a.return;var r=OE(a.alternate,a,Ta);if(r!==null){xe=r;return}if(a=a.sibling,a!==null){xe=a;return}xe=a=e}while(a!==null);rn===0&&(rn=5)}function w_(e,a){do{var r=FE(e.alternate,e);if(r!==null){r.flags&=32767,xe=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(e=e.sibling,e!==null)){xe=e;return}xe=e=r}while(e!==null);rn=6,xe=null}function C_(e,a,r,l,h,m,S,A,V){e.cancelPendingCommit=null;do tu();while(yn!==0);if((Be&6)!==0)throw Error(s(327));if(a!==null){if(a===e.current)throw Error(s(177));if(m=a.lanes|a.childLanes,m|=Xf,Di(e,r,m,S,A,V),e===Ke&&(xe=Ke=null,Se=0),Br=a,rs=e,Aa=r,Jh=m,$h=h,v_=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,YE(ut,function(){return L_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,h=H.p,H.p=2,S=Be,Be|=4;try{BE(e,a,r)}finally{Be=S,H.p=h,z.T=l}}yn=1,R_(),D_(),U_()}}function R_(){if(yn===1){yn=0;var e=rs,a=Br,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var l=H.p;H.p=2;var h=Be;Be|=4;try{c_(a,e);var m=pd,S=m0(e.containerInfo),A=m.focusedElem,V=m.selectionRange;if(S!==A&&A&&A.ownerDocument&&p0(A.ownerDocument.documentElement,A)){if(V!==null&&zf(A)){var $=V.start,dt=V.end;if(dt===void 0&&(dt=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(dt,A.value.length);else{var vt=A.ownerDocument||document,it=vt&&vt.defaultView||window;if(it.getSelection){var lt=it.getSelection(),Wt=A.textContent.length,ie=Math.min(V.start,Wt),Ye=V.end===void 0?ie:Math.min(V.end,Wt);!lt.extend&&ie>Ye&&(S=Ye,Ye=ie,ie=S);var K=d0(A,ie),k=d0(A,Ye);if(K&&k&&(lt.rangeCount!==1||lt.anchorNode!==K.node||lt.anchorOffset!==K.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var J=vt.createRange();J.setStart(K.node,K.offset),lt.removeAllRanges(),ie>Ye?(lt.addRange(J),lt.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),lt.addRange(J))}}}}for(vt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&vt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var mt=vt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}hu=!!dd,pd=dd=null}finally{Be=h,H.p=l,z.T=r}}e.current=a,yn=2}}function D_(){if(yn===2){yn=0;var e=rs,a=Br,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var l=H.p;H.p=2;var h=Be;Be|=4;try{a_(e,a.alternate,a)}finally{Be=h,H.p=l,z.T=r}}yn=3}}function U_(){if(yn===4||yn===3){yn=0,P();var e=rs,a=Br,r=Aa,l=v_;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?yn=5:(yn=0,Br=rs=null,N_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(ss=null),ur(r),a=a.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(bt,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=z.T,h=H.p,H.p=2,z.T=null;try{for(var m=e.onRecoverableError,S=0;S<l.length;S++){var A=l[S];m(A.value,{componentStack:A.stack})}}finally{z.T=a,H.p=h}}(Aa&3)!==0&&tu(),$i(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===td?ul++:(ul=0,td=e):ul=0,fl(0)}}function N_(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,jo(a)))}function tu(){return R_(),D_(),U_(),L_()}function L_(){if(yn!==5)return!1;var e=rs,a=Jh;Jh=0;var r=ur(Aa),l=z.T,h=H.p;try{H.p=32>r?32:r,z.T=null,r=$h,$h=null;var m=rs,S=Aa;if(yn=0,Br=rs=null,Aa=0,(Be&6)!==0)throw Error(s(331));var A=Be;if(Be|=4,p_(m.current),f_(m,m.current,S,r),Be=A,fl(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(bt,m)}catch{}return!0}finally{H.p=h,z.T=l,N_(e,a)}}function P_(e,a,r){a=vi(r,a),a=Nh(e.stateNode,a,2),e=$a(e,a,2),e!==null&&(Vn(e,2),$i(e))}function Xe(e,a,r){if(e.tag===3)P_(e,e,r);else for(;a!==null;){if(a.tag===3){P_(a,e,r);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ss===null||!ss.has(l))){e=vi(r,e),r=Ov(2),l=$a(a,r,2),l!==null&&(Fv(r,l,a,e),Vn(l,2),$i(l));break}}a=a.return}}function id(e,a,r){var l=e.pingCache;if(l===null){l=e.pingCache=new VE;var h=new Set;l.set(a,h)}else h=l.get(a),h===void 0&&(h=new Set,l.set(a,h));h.has(r)||(Kh=!0,h.add(r),e=jE.bind(null,e,a,r),a.then(e,e))}function jE(e,a,r){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ke===e&&(Se&r)===r&&(rn===4||rn===3&&(Se&62914560)===Se&&300>E()-Yc?(Be&2)===0&&Ir(e,0):Zh|=r,Fr===Se&&(Fr=0)),$i(e)}function O_(e,a){a===0&&(a=He()),e=Ps(e,a),e!==null&&(Vn(e,a),$i(e))}function WE(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),O_(e,r)}function qE(e,a){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(a),O_(e,r)}function YE(e,a){return Pt(e,a)}var eu=null,Vr=null,ad=!1,nu=!1,sd=!1,ls=0;function $i(e){e!==Vr&&e.next===null&&(Vr===null?eu=Vr=e:Vr=Vr.next=e),nu=!0,ad||(ad=!0,ZE())}function fl(e,a){if(!sd&&nu){sd=!0;do for(var r=!1,l=eu;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var S=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-It(42|e)+1)-1,m&=h&~(S&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,z_(l,m))}else m=Se,m=_t(l,l===Ke?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||wt(l,m)||(r=!0,z_(l,m));l=l.next}while(r);sd=!1}}function KE(){F_()}function F_(){nu=ad=!1;var e=0;ls!==0&&rT()&&(e=ls);for(var a=E(),r=null,l=eu;l!==null;){var h=l.next,m=B_(l,a);m===0?(l.next=null,r===null?eu=h:r.next=h,h===null&&(Vr=r)):(r=l,(e!==0||(m&3)!==0)&&(nu=!0)),l=h}yn!==0&&yn!==5||fl(e),ls!==0&&(ls=0)}function B_(e,a){for(var r=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var S=31-It(m),A=1<<S,V=h[S];V===-1?((A&r)===0||(A&l)!==0)&&(h[S]=se(A,a)):V<=a&&(e.expiredLanes|=A),m&=~A}if(a=Ke,r=Se,r=_t(e,e===a?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===a&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&le(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||wt(e,r)){if(a=r&-r,a===e.callbackPriority)return a;switch(l!==null&&le(l),ur(r)){case 2:case 8:r=St;break;case 32:r=ut;break;case 268435456:r=Rt;break;default:r=ut}return l=I_.bind(null,e),r=Pt(r,l),e.callbackPriority=a,e.callbackNode=r,a}return l!==null&&l!==null&&le(l),e.callbackPriority=2,e.callbackNode=null,2}function I_(e,a){if(yn!==0&&yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(tu()&&e.callbackNode!==r)return null;var l=Se;return l=_t(e,e===Ke?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(x_(e,l,a),B_(e,E()),e.callbackNode!=null&&e.callbackNode===r?I_.bind(null,e):null)}function z_(e,a){if(tu())return null;x_(e,a,!0)}function ZE(){lT(function(){(Be&6)!==0?Pt(pt,KE):F_()})}function rd(){if(ls===0){var e=Tr;e===0&&(e=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),ls=e}return ls}function V_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:uc(""+e)}function H_(e,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,e.id&&r.setAttribute("form",e.id),a.parentNode.insertBefore(r,a),e=new FormData(e),r.parentNode.removeChild(r),e}function QE(e,a,r,l,h){if(a==="submit"&&r&&r.stateNode===h){var m=V_((h[Cn]||null).action),S=l.submitter;S&&(a=(a=S[Cn]||null)?V_(a.formAction):S.getAttribute("formAction"),a!==null&&(m=a,S=null));var A=new pc("action","action",null,l,h);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ls!==0){var V=S?H_(h,S):new FormData(h);Ah(r,{pending:!0,data:V,method:h.method,action:m},null,V)}}else typeof m=="function"&&(A.preventDefault(),V=S?H_(h,S):new FormData(h),Ah(r,{pending:!0,data:V,method:h.method,action:m},m,V))},currentTarget:h}]})}}for(var od=0;od<kf.length;od++){var ld=kf[od],JE=ld.toLowerCase(),$E=ld[0].toUpperCase()+ld.slice(1);Li(JE,"on"+$E)}Li(_0,"onAnimationEnd"),Li(x0,"onAnimationIteration"),Li(y0,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(mE,"onTransitionRun"),Li(gE,"onTransitionStart"),Li(vE,"onTransitionCancel"),Li(S0,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function G_(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],h=l.event;l=l.listeners;t:{var m=void 0;if(a)for(var S=l.length-1;0<=S;S--){var A=l[S],V=A.instance,$=A.currentTarget;if(A=A.listener,V!==m&&h.isPropagationStopped())break t;m=A,h.currentTarget=$;try{m(h)}catch(dt){vc(dt)}h.currentTarget=null,m=V}else for(S=0;S<l.length;S++){if(A=l[S],V=A.instance,$=A.currentTarget,A=A.listener,V!==m&&h.isPropagationStopped())break t;m=A,h.currentTarget=$;try{m(h)}catch(dt){vc(dt)}h.currentTarget=null,m=V}}}}function ye(e,a){var r=a[fr];r===void 0&&(r=a[fr]=new Set);var l=e+"__bubble";r.has(l)||(k_(a,e,2,!1),r.add(l))}function cd(e,a,r){var l=0;a&&(l|=4),k_(r,e,l,a)}var iu="_reactListening"+Math.random().toString(36).slice(2);function ud(e){if(!e[iu]){e[iu]=!0,Y.forEach(function(r){r!=="selectionchange"&&(tT.has(r)||cd(r,!1,e),cd(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[iu]||(a[iu]=!0,cd("selectionchange",!1,a))}}function k_(e,a,r,l){switch(_x(a)){case 2:var h=CT;break;case 8:h=RT;break;default:h=Td}r=h.bind(null,a,r,e),h=void 0,!Df||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(a,r,{capture:!0,passive:h}):e.addEventListener(a,r,!0):h!==void 0?e.addEventListener(a,r,{passive:h}):e.addEventListener(a,r,!1)}function fd(e,a,r,l,h){var m=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var A=l.stateNode.containerInfo;if(A===h)break;if(S===4)for(S=l.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===h)return;S=S.return}for(;A!==null;){if(S=ka(A),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){l=m=S;continue t}A=A.parentNode}}l=l.return}Yg(function(){var $=m,dt=Cf(r),vt=[];t:{var it=M0.get(e);if(it!==void 0){var lt=pc,Wt=e;switch(e){case"keypress":if(hc(r)===0)break t;case"keydown":case"keyup":lt=q1;break;case"focusin":Wt="focus",lt=Pf;break;case"focusout":Wt="blur",lt=Pf;break;case"beforeblur":case"afterblur":lt=Pf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Qg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=O1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Z1;break;case _0:case x0:case y0:lt=I1;break;case S0:lt=J1;break;case"scroll":case"scrollend":lt=L1;break;case"wheel":lt=tE;break;case"copy":case"cut":case"paste":lt=V1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=$g;break;case"toggle":case"beforetoggle":lt=nE}var ie=(a&4)!==0,Ye=!ie&&(e==="scroll"||e==="scrollend"),K=ie?it!==null?it+"Capture":null:it;ie=[];for(var k=$,J;k!==null;){var mt=k;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||K===null||(mt=Po(k,K),mt!=null&&ie.push(dl(k,mt,J))),Ye)break;k=k.return}0<ie.length&&(it=new lt(it,Wt,null,r,dt),vt.push({event:it,listeners:ie}))}}if((a&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&r!==wf&&(Wt=r.relatedTarget||r.fromElement)&&(ka(Wt)||Wt[Ui]))break t;if((lt||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(Wt=r.relatedTarget||r.toElement,lt=$,Wt=Wt?ka(Wt):null,Wt!==null&&(Ye=c(Wt),ie=Wt.tag,Wt!==Ye||ie!==5&&ie!==27&&ie!==6)&&(Wt=null)):(lt=null,Wt=$),lt!==Wt)){if(ie=Qg,mt="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ie=$g,mt="onPointerLeave",K="onPointerEnter",k="pointer"),Ye=lt==null?it:Ds(lt),J=Wt==null?it:Ds(Wt),it=new ie(mt,k+"leave",lt,r,dt),it.target=Ye,it.relatedTarget=J,mt=null,ka(dt)===$&&(ie=new ie(K,k+"enter",Wt,r,dt),ie.target=J,ie.relatedTarget=Ye,mt=ie),Ye=mt,lt&&Wt)e:{for(ie=eT,K=lt,k=Wt,J=0,mt=K;mt;mt=ie(mt))J++;mt=0;for(var te=k;te;te=ie(te))mt++;for(;0<J-mt;)K=ie(K),J--;for(;0<mt-J;)k=ie(k),mt--;for(;J--;){if(K===k||k!==null&&K===k.alternate){ie=K;break e}K=ie(K),k=ie(k)}ie=null}else ie=null;lt!==null&&X_(vt,it,lt,ie,!1),Wt!==null&&Ye!==null&&X_(vt,Ye,Wt,ie,!0)}}t:{if(it=$?Ds($):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var De=o0;else if(s0(it))if(l0)De=hE;else{De=uE;var Qt=cE}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?$&&Ni($.elementType)&&(De=o0):De=fE;if(De&&(De=De(e,$))){r0(vt,De,r,dt);break t}Qt&&Qt(e,it,$),e==="focusout"&&$&&it.type==="number"&&$.memoizedProps.value!=null&&Dn(it,"number",it.value)}switch(Qt=$?Ds($):window,e){case"focusin":(s0(Qt)||Qt.contentEditable==="true")&&(vr=Qt,Vf=$,Go=null);break;case"focusout":Go=Vf=vr=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,g0(vt,r,dt);break;case"selectionchange":if(pE)break;case"keydown":case"keyup":g0(vt,r,dt)}var de;if(Ff)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else gr?i0(e,r)&&(Me="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Me="onCompositionStart");Me&&(t0&&r.locale!=="ko"&&(gr||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&gr&&(de=Kg()):(Wa=dt,Uf="value"in Wa?Wa.value:Wa.textContent,gr=!0)),Qt=au($,Me),0<Qt.length&&(Me=new Jg(Me,e,null,r,dt),vt.push({event:Me,listeners:Qt}),de?Me.data=de:(de=a0(r),de!==null&&(Me.data=de)))),(de=aE?sE(e,r):rE(e,r))&&(Me=au($,"onBeforeInput"),0<Me.length&&(Qt=new Jg("onBeforeInput","beforeinput",null,r,dt),vt.push({event:Qt,listeners:Me}),Qt.data=de)),QE(vt,e,$,r,dt)}G_(vt,a)})}function dl(e,a,r){return{instance:e,listener:a,currentTarget:r}}function au(e,a){for(var r=a+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=Po(e,r),h!=null&&l.unshift(dl(e,h,m)),h=Po(e,a),h!=null&&l.push(dl(e,h,m))),e.tag===3)return l;e=e.return}return[]}function eT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function X_(e,a,r,l,h){for(var m=a._reactName,S=[];r!==null&&r!==l;){var A=r,V=A.alternate,$=A.stateNode;if(A=A.tag,V!==null&&V===l)break;A!==5&&A!==26&&A!==27||$===null||(V=$,h?($=Po(r,m),$!=null&&S.unshift(dl(r,$,V))):h||($=Po(r,m),$!=null&&S.push(dl(r,$,V)))),r=r.return}S.length!==0&&e.push({event:a,listeners:S})}var nT=/\r\n?/g,iT=/\u0000|\uFFFD/g;function j_(e){return(typeof e=="string"?e:""+e).replace(nT,`
`).replace(iT,"")}function W_(e,a){return a=j_(a),j_(e)===a}function qe(e,a,r,l,h,m){switch(r){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||xn(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&xn(e,""+l);break;case"className":ee(e,"class",l);break;case"tabIndex":ee(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ee(e,r,l);break;case"style":dr(e,l,m);break;case"data":if(a!=="object"){ee(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=uc(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(a!=="input"&&qe(e,a,"name",h.name,h,null),qe(e,a,"formEncType",h.formEncType,h,null),qe(e,a,"formMethod",h.formMethod,h,null),qe(e,a,"formTarget",h.formTarget,h,null)):(qe(e,a,"encType",h.encType,h,null),qe(e,a,"method",h.method,h,null),qe(e,a,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=uc(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=fa);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=uc(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Kt(e,"popover",l);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=U1.get(r)||r,Kt(e,r,l))}}function hd(e,a,r,l,h,m){switch(r){case"style":dr(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof l=="string"?xn(e,l):(typeof l=="number"||typeof l=="bigint")&&xn(e,""+l);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"onClick":l!=null&&(e.onclick=fa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),a=r.slice(2,h?r.length-7:void 0),m=e[Cn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(a,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(a,l,h);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Kt(e,r,l)}}}function Bn(e,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var l=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var S=r[m];if(S!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:qe(e,a,m,S,r,null)}}h&&qe(e,a,"srcSet",r.srcSet,r,null),l&&qe(e,a,"src",r.src,r,null);return;case"input":ye("invalid",e);var A=m=S=h=null,V=null,$=null;for(l in r)if(r.hasOwnProperty(l)){var dt=r[l];if(dt!=null)switch(l){case"name":h=dt;break;case"type":S=dt;break;case"checked":V=dt;break;case"defaultChecked":$=dt;break;case"value":m=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,a));break;default:qe(e,a,l,dt,r,null)}}ua(e,m,A,V,$,S,h,!1);return;case"select":ye("invalid",e),l=S=m=null;for(h in r)if(r.hasOwnProperty(h)&&(A=r[h],A!=null))switch(h){case"value":m=A;break;case"defaultValue":S=A;break;case"multiple":l=A;default:qe(e,a,h,A,r,null)}a=m,r=S,e.multiple=!!l,a!=null?mi(e,!!l,a,!1):r!=null&&mi(e,!!l,r,!0);return;case"textarea":ye("invalid",e),m=h=l=null;for(S in r)if(r.hasOwnProperty(S)&&(A=r[S],A!=null))switch(S){case"value":l=A;break;case"defaultValue":h=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:qe(e,a,S,A,r,null)}Un(e,l,h,m);return;case"option":for(V in r)r.hasOwnProperty(V)&&(l=r[V],l!=null)&&(V==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":qe(e,a,V,l,r,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(l=0;l<hl.length;l++)ye(hl[l],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in r)if(r.hasOwnProperty($)&&(l=r[$],l!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:qe(e,a,$,l,r,null)}return;default:if(Ni(a)){for(dt in r)r.hasOwnProperty(dt)&&(l=r[dt],l!==void 0&&hd(e,a,dt,l,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(l=r[A],l!=null&&qe(e,a,A,l,r,null))}function aT(e,a,r,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,S=null,A=null,V=null,$=null,dt=null;for(lt in r){var vt=r[lt];if(r.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":V=vt;default:l.hasOwnProperty(lt)||qe(e,a,lt,null,l,vt)}}for(var it in l){var lt=l[it];if(vt=r[it],l.hasOwnProperty(it)&&(lt!=null||vt!=null))switch(it){case"type":m=lt;break;case"name":h=lt;break;case"checked":$=lt;break;case"defaultChecked":dt=lt;break;case"value":S=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,a));break;default:lt!==vt&&qe(e,a,it,lt,l,vt)}}Rn(e,S,A,V,$,dt,m,h);return;case"select":lt=S=A=it=null;for(m in r)if(V=r[m],r.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":lt=V;default:l.hasOwnProperty(m)||qe(e,a,m,null,l,V)}for(h in l)if(m=l[h],V=r[h],l.hasOwnProperty(h)&&(m!=null||V!=null))switch(h){case"value":it=m;break;case"defaultValue":A=m;break;case"multiple":S=m;default:m!==V&&qe(e,a,h,m,l,V)}a=A,r=S,l=lt,it!=null?mi(e,!!r,it,!1):!!l!=!!r&&(a!=null?mi(e,!!r,a,!0):mi(e,!!r,r?[]:"",!1));return;case"textarea":lt=it=null;for(A in r)if(h=r[A],r.hasOwnProperty(A)&&h!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:qe(e,a,A,null,l,h)}for(S in l)if(h=l[S],m=r[S],l.hasOwnProperty(S)&&(h!=null||m!=null))switch(S){case"value":it=h;break;case"defaultValue":lt=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==m&&qe(e,a,S,h,l,m)}Ge(e,it,lt);return;case"option":for(var Wt in r)it=r[Wt],r.hasOwnProperty(Wt)&&it!=null&&!l.hasOwnProperty(Wt)&&(Wt==="selected"?e.selected=!1:qe(e,a,Wt,null,l,it));for(V in l)it=l[V],lt=r[V],l.hasOwnProperty(V)&&it!==lt&&(it!=null||lt!=null)&&(V==="selected"?e.selected=it&&typeof it!="function"&&typeof it!="symbol":qe(e,a,V,it,l,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in r)it=r[ie],r.hasOwnProperty(ie)&&it!=null&&!l.hasOwnProperty(ie)&&qe(e,a,ie,null,l,it);for($ in l)if(it=l[$],lt=r[$],l.hasOwnProperty($)&&it!==lt&&(it!=null||lt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,a));break;default:qe(e,a,$,it,l,lt)}return;default:if(Ni(a)){for(var Ye in r)it=r[Ye],r.hasOwnProperty(Ye)&&it!==void 0&&!l.hasOwnProperty(Ye)&&hd(e,a,Ye,void 0,l,it);for(dt in l)it=l[dt],lt=r[dt],!l.hasOwnProperty(dt)||it===lt||it===void 0&&lt===void 0||hd(e,a,dt,it,l,lt);return}}for(var K in r)it=r[K],r.hasOwnProperty(K)&&it!=null&&!l.hasOwnProperty(K)&&qe(e,a,K,null,l,it);for(vt in l)it=l[vt],lt=r[vt],!l.hasOwnProperty(vt)||it===lt||it==null&&lt==null||qe(e,a,vt,it,l,lt)}function q_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var h=r[l],m=h.transferSize,S=h.initiatorType,A=h.duration;if(m&&A&&q_(S)){for(S=0,A=h.responseEnd,l+=1;l<r.length;l++){var V=r[l],$=V.startTime;if($>A)break;var dt=V.transferSize,vt=V.initiatorType;dt&&q_(vt)&&(V=V.responseEnd,S+=dt*(V<A?1:(A-$)/(V-$)))}if(--l,a+=8*(m+S)/(h.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var dd=null,pd=null;function su(e){return e.nodeType===9?e:e.ownerDocument}function Y_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function K_(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function md(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var gd=null;function rT(){var e=window.event;return e&&e.type==="popstate"?e===gd?!1:(gd=e,!0):(gd=null,!1)}var Z_=typeof setTimeout=="function"?setTimeout:void 0,oT=typeof clearTimeout=="function"?clearTimeout:void 0,Q_=typeof Promise=="function"?Promise:void 0,lT=typeof queueMicrotask=="function"?queueMicrotask:typeof Q_<"u"?function(e){return Q_.resolve(null).then(e).catch(cT)}:Z_;function cT(e){setTimeout(function(){throw e})}function cs(e){return e==="head"}function J_(e,a){var r=a,l=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(h),Xr(a);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")pl(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,pl(r);for(var m=r.firstChild;m;){var S=m.nextSibling,A=m.nodeName;m[Rs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=S}}else r==="body"&&pl(e.ownerDocument.body);r=h}while(r);Xr(a)}function $_(e,a){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function vd(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":vd(r),Lo(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function uT(e,a,r,l){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Rs])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function fT(e,a,r){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Mi(e.nextSibling),e===null))return null;return e}function tx(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mi(e.nextSibling),e===null))return null;return e}function _d(e){return e.data==="$?"||e.data==="$~"}function xd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function hT(e,a){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||r.readyState!=="loading")a();else{var l=function(){a(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Mi(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var yd=null;function ex(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(a===0)return Mi(e.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}e=e.nextSibling}return null}function nx(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return e;a--}else r!=="/$"&&r!=="/&"||a++}e=e.previousSibling}return null}function ix(e,a,r){switch(a=su(r),e){case"html":if(e=a.documentElement,!e)throw Error(s(452));return e;case"head":if(e=a.head,!e)throw Error(s(453));return e;case"body":if(e=a.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pl(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Lo(e)}var bi=new Map,ax=new Set;function ru(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var wa=H.d;H.d={f:dT,r:pT,D:mT,C:gT,L:vT,m:_T,X:yT,S:xT,M:ST};function dT(){var e=wa.f(),a=Qc();return e||a}function pT(e){var a=Xa(e);a!==null&&a.tag===5&&a.type==="form"?Sv(a):wa.r(e)}var Hr=typeof document>"u"?null:document;function sx(e,a,r){var l=Hr;if(l&&typeof a=="string"&&a){var h=oe(a);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),ax.has(h)||(ax.add(h),e={rel:e,crossOrigin:r,href:a},l.querySelector(h)===null&&(a=l.createElement("link"),Bn(a,"link",e),w(a),l.head.appendChild(a)))}}function mT(e){wa.D(e),sx("dns-prefetch",e,null)}function gT(e,a){wa.C(e,a),sx("preconnect",e,a)}function vT(e,a,r){wa.L(e,a,r);var l=Hr;if(l&&e&&a){var h='link[rel="preload"][as="'+oe(a)+'"]';a==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+oe(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+oe(r.imageSizes)+'"]')):h+='[href="'+oe(e)+'"]';var m=h;switch(a){case"style":m=Gr(e);break;case"script":m=kr(e)}bi.has(m)||(e=v({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:e,as:a},r),bi.set(m,e),l.querySelector(h)!==null||a==="style"&&l.querySelector(ml(m))||a==="script"&&l.querySelector(gl(m))||(a=l.createElement("link"),Bn(a,"link",e),w(a),l.head.appendChild(a)))}}function _T(e,a){wa.m(e,a);var r=Hr;if(r&&e){var l=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+oe(l)+'"][href="'+oe(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=kr(e)}if(!bi.has(m)&&(e=v({rel:"modulepreload",href:e},a),bi.set(m,e),r.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(gl(m)))return}l=r.createElement("link"),Bn(l,"link",e),w(l),r.head.appendChild(l)}}}function xT(e,a,r){wa.S(e,a,r);var l=Hr;if(l&&e){var h=ja(l).hoistableStyles,m=Gr(e);a=a||"default";var S=h.get(m);if(!S){var A={loading:0,preload:null};if(S=l.querySelector(ml(m)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":a},r),(r=bi.get(m))&&Sd(e,r);var V=S=l.createElement("link");w(V),Bn(V,"link",e),V._p=new Promise(function($,dt){V.onload=$,V.onerror=dt}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ou(S,a,l)}S={type:"stylesheet",instance:S,count:1,state:A},h.set(m,S)}}}function yT(e,a){wa.X(e,a);var r=Hr;if(r&&e){var l=ja(r).hoistableScripts,h=kr(e),m=l.get(h);m||(m=r.querySelector(gl(h)),m||(e=v({src:e,async:!0},a),(a=bi.get(h))&&Md(e,a),m=r.createElement("script"),w(m),Bn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function ST(e,a){wa.M(e,a);var r=Hr;if(r&&e){var l=ja(r).hoistableScripts,h=kr(e),m=l.get(h);m||(m=r.querySelector(gl(h)),m||(e=v({src:e,async:!0,type:"module"},a),(a=bi.get(h))&&Md(e,a),m=r.createElement("script"),w(m),Bn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function rx(e,a,r,l){var h=(h=tt.current)?ru(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=Gr(r.href),r=ja(h).hoistableStyles,l=r.get(a),l||(l={type:"style",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Gr(r.href);var m=ja(h).hoistableStyles,S=m.get(e);if(S||(h=h.ownerDocument||h,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,S),(m=h.querySelector(ml(e)))&&!m._p&&(S.instance=m,S.state.loading=5),bi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},bi.set(e,r),m||MT(h,e,r,S.state))),a&&l===null)throw Error(s(528,""));return S}if(a&&l!==null)throw Error(s(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=kr(r),r=ja(h).hoistableScripts,l=r.get(a),l||(l={type:"script",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Gr(e){return'href="'+oe(e)+'"'}function ml(e){return'link[rel="stylesheet"]['+e+"]"}function ox(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function MT(e,a,r,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Bn(a,"link",r),w(a),e.head.appendChild(a))}function kr(e){return'[src="'+oe(e)+'"]'}function gl(e){return"script[async]"+e}function lx(e,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+oe(r.href)+'"]');if(l)return a.instance=l,w(l),l;var h=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),w(l),Bn(l,"style",h),ou(l,r.precedence,e),a.instance=l;case"stylesheet":h=Gr(r.href);var m=e.querySelector(ml(h));if(m)return a.state.loading|=4,a.instance=m,w(m),m;l=ox(r),(h=bi.get(h))&&Sd(l,h),m=(e.ownerDocument||e).createElement("link"),w(m);var S=m;return S._p=new Promise(function(A,V){S.onload=A,S.onerror=V}),Bn(m,"link",l),a.state.loading|=4,ou(m,r.precedence,e),a.instance=m;case"script":return m=kr(r.src),(h=e.querySelector(gl(m)))?(a.instance=h,w(h),h):(l=r,(h=bi.get(m))&&(l=v({},r),Md(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),w(h),Bn(h,"link",l),e.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,ou(l,r.precedence,e));return a.instance}function ou(e,a,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,S=0;S<l.length;S++){var A=l[S];if(A.dataset.precedence===a)m=A;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(e,a.firstChild))}function Sd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Md(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var lu=null;function cx(e,a,r){if(lu===null){var l=new Map,h=lu=new Map;h.set(r,l)}else h=lu,l=h.get(r),l||(l=new Map,h.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[Rs]||m[fn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(a)||"";S=e+S;var A=l.get(S);A?A.push(m):l.set(S,[m])}}return l}function ux(e,a,r){e=e.ownerDocument||e,e.head.insertBefore(r,a==="title"?e.querySelector("head > title"):null)}function bT(e,a,r){if(r===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function fx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ET(e,a,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Gr(l.href),m=a.querySelector(ml(h));if(m){a=m._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=cu.bind(e),a.then(e,e)),r.state.loading|=4,r.instance=m,w(m);return}m=a.ownerDocument||a,l=ox(l),(h=bi.get(h))&&Sd(l,h),m=m.createElement("link"),w(m);var S=m;S._p=new Promise(function(A,V){S.onload=A,S.onerror=V}),Bn(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=cu.bind(e),a.addEventListener("load",r),a.addEventListener("error",r))}}var bd=0;function TT(e,a){return e.stylesheets&&e.count===0&&fu(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+a);0<e.imgBytes&&bd===0&&(bd=62500*sT());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>bd?50:800)+a);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uu=null;function fu(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uu=new Map,a.forEach(AT,e),uu=null,cu.call(e))}function AT(e,a){if(!(a.state.loading&4)){var r=uu.get(e);if(r)var l=r.get(null);else{r=new Map,uu.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var S=h[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),l=S)}l&&r.set(null,l)}h=a.instance,S=h.getAttribute("data-precedence"),m=r.get(S)||l,m===l&&r.set(null,h),r.set(S,h),this.count++,l=cu.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),a.state.loading|=4}}var vl={$$typeof:R,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function wT(e,a,r,l,h,m,S,A,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function hx(e,a,r,l,h,m,S,A,V,$,dt,vt){return e=new wT(e,a,r,S,V,$,dt,vt,A),a=1,m===!0&&(a|=24),m=si(3,null,null,a),e.current=m,m.stateNode=e,a=nh(),a.refCount++,e.pooledCache=a,a.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:a},rh(m),e}function dx(e){return e?(e=yr,e):yr}function px(e,a,r,l,h,m){h=dx(h),l.context===null?l.context=h:l.pendingContext=h,l=Ja(a),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=$a(e,l,a),r!==null&&(ti(r,e,a),Ko(r,e,a))}function mx(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function Ed(e,a){mx(e,a),(e=e.alternate)&&mx(e,a)}function gx(e){if(e.tag===13||e.tag===31){var a=Ps(e,67108864);a!==null&&ti(a,e,67108864),Ed(e,67108864)}}function vx(e){if(e.tag===13||e.tag===31){var a=ui();a=Do(a);var r=Ps(e,a);r!==null&&ti(r,e,a),Ed(e,a)}}var hu=!0;function CT(e,a,r,l){var h=z.T;z.T=null;var m=H.p;try{H.p=2,Td(e,a,r,l)}finally{H.p=m,z.T=h}}function RT(e,a,r,l){var h=z.T;z.T=null;var m=H.p;try{H.p=8,Td(e,a,r,l)}finally{H.p=m,z.T=h}}function Td(e,a,r,l){if(hu){var h=Ad(l);if(h===null)fd(e,a,l,du,r),xx(e,l);else if(UT(h,e,a,r,l))l.stopPropagation();else if(xx(e,l),a&4&&-1<DT.indexOf(e)){for(;h!==null;){var m=Xa(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=Mt(m.pendingLanes);if(S!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var V=1<<31-It(S);A.entanglements[1]|=V,S&=~V}$i(m),(Be&6)===0&&(Kc=E()+500,fl(0))}}break;case 31:case 13:A=Ps(m,2),A!==null&&ti(A,m,2),Qc(),Ed(m,2)}if(m=Ad(l),m===null&&fd(e,a,l,du,r),m===h)break;h=m}h!==null&&l.stopPropagation()}else fd(e,a,l,null,r)}}function Ad(e){return e=Cf(e),wd(e)}var du=null;function wd(e){if(du=null,e=ka(e),e!==null){var a=c(e);if(a===null)e=null;else{var r=a.tag;if(r===13){if(e=u(a),e!==null)return e;e=null}else if(r===31){if(e=f(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return du=e,null}function _x(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pt:return 2;case St:return 8;case ut:case Jt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Cd=!1,us=null,fs=null,hs=null,_l=new Map,xl=new Map,ds=[],DT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xx(e,a){switch(e){case"focusin":case"focusout":us=null;break;case"dragenter":case"dragleave":fs=null;break;case"mouseover":case"mouseout":hs=null;break;case"pointerover":case"pointerout":_l.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(a.pointerId)}}function yl(e,a,r,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:a,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},a!==null&&(a=Xa(a),a!==null&&gx(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),e)}function UT(e,a,r,l,h){switch(a){case"focusin":return us=yl(us,e,a,r,l,h),!0;case"dragenter":return fs=yl(fs,e,a,r,l,h),!0;case"mouseover":return hs=yl(hs,e,a,r,l,h),!0;case"pointerover":var m=h.pointerId;return _l.set(m,yl(_l.get(m)||null,e,a,r,l,h)),!0;case"gotpointercapture":return m=h.pointerId,xl.set(m,yl(xl.get(m)||null,e,a,r,l,h)),!0}return!1}function yx(e){var a=ka(e.target);if(a!==null){var r=c(a);if(r!==null){if(a=r.tag,a===13){if(a=u(r),a!==null){e.blockedOn=a,Ki(e.priority,function(){vx(r)});return}}else if(a===31){if(a=f(r),a!==null){e.blockedOn=a,Ki(e.priority,function(){vx(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pu(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=Ad(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);wf=l,r.target.dispatchEvent(l),wf=null}else return a=Xa(r),a!==null&&gx(a),e.blockedOn=r,!1;a.shift()}return!0}function Sx(e,a,r){pu(e)&&r.delete(a)}function NT(){Cd=!1,us!==null&&pu(us)&&(us=null),fs!==null&&pu(fs)&&(fs=null),hs!==null&&pu(hs)&&(hs=null),_l.forEach(Sx),xl.forEach(Sx)}function mu(e,a){e.blockedOn===a&&(e.blockedOn=null,Cd||(Cd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,NT)))}var gu=null;function Mx(e){gu!==e&&(gu=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){gu===e&&(gu=null);for(var a=0;a<e.length;a+=3){var r=e[a],l=e[a+1],h=e[a+2];if(typeof l!="function"){if(wd(l||r)===null)continue;break}var m=Xa(r);m!==null&&(e.splice(a,3),a-=3,Ah(m,{pending:!0,data:h,method:r.method,action:l},l,h))}}))}function Xr(e){function a(V){return mu(V,e)}us!==null&&mu(us,e),fs!==null&&mu(fs,e),hs!==null&&mu(hs,e),_l.forEach(a),xl.forEach(a);for(var r=0;r<ds.length;r++){var l=ds[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ds.length&&(r=ds[0],r.blockedOn===null);)yx(r),r.blockedOn===null&&ds.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var h=r[l],m=r[l+1],S=h[Cn]||null;if(typeof m=="function")S||Mx(r);else if(S){var A=null;if(m&&m.hasAttribute("formAction")){if(h=m,S=m[Cn]||null)A=S.formAction;else if(wd(h)!==null)continue}else A=S.action;typeof A=="function"?r[l+1]=A:(r.splice(l,3),l-=3),Mx(r)}}}function bx(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(S){return h=S})},focusReset:"manual",scroll:"manual"})}function a(){h!==null&&(h(),h=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),h!==null&&(h(),h=null)}}}function Rd(e){this._internalRoot=e}vu.prototype.render=Rd.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(s(409));var r=a.current,l=ui();px(r,l,e,a,null,null)},vu.prototype.unmount=Rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;px(e.current,2,null,e,null,null),Qc(),a[Ui]=null}};function vu(e){this._internalRoot=e}vu.prototype.unstable_scheduleHydration=function(e){if(e){var a=Uo();e={blockedOn:null,target:e,priority:a};for(var r=0;r<ds.length&&a!==0&&a<ds[r].priority;r++);ds.splice(r,0,e),r===0&&yx(e)}};var Ex=t.version;if(Ex!=="19.2.4")throw Error(s(527,Ex,"19.2.4"));H.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(a),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var LT={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{bt=_u.inject(LT),Et=_u}catch{}}return Ml.createRoot=function(e,a){if(!o(e))throw Error(s(299));var r=!1,l="",h=Uv,m=Nv,S=Lv;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError)),a=hx(e,1,!1,null,null,r,l,null,h,m,S,bx),e[Ui]=a.current,ud(e),new Rd(a)},Ml.hydrateRoot=function(e,a,r){if(!o(e))throw Error(s(299));var l=!1,h="",m=Uv,S=Nv,A=Lv,V=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.formState!==void 0&&(V=r.formState)),a=hx(e,1,!0,a,r??null,l,h,V,m,S,A,bx),a.context=dx(null),r=a.current,l=ui(),l=Do(l),h=Ja(l),h.callback=null,$a(r,h,l),r=l,a.current.lanes=r,Vn(a,r),$i(a),e[Ui]=a.current,ud(e),new vu(a)},Ml.version="19.2.4",Ml}var Px;function jT(){if(Px)return Nd.exports;Px=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Nd.exports=XT(),Nd.exports}var WT=jT();const sM=(...i)=>i.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();const qT=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const YT=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase());const Ox=i=>{const t=YT(i);return t.charAt(0).toUpperCase()+t.slice(1)};var KT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const ZT=i=>{for(const t in i)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};const QT=Lt.forwardRef(({color:i="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:c,iconNode:u,...f},p)=>Lt.createElement("svg",{ref:p,...KT,width:t,height:t,stroke:i,strokeWidth:s?Number(n)*24/Number(t):n,className:sM("lucide",o),...!c&&!ZT(f)&&{"aria-hidden":"true"},...f},[...u.map(([d,g])=>Lt.createElement(d,g)),...Array.isArray(c)?c:[c]]));const ca=(i,t)=>{const n=Lt.forwardRef(({className:s,...o},c)=>Lt.createElement(QT,{ref:c,iconNode:t,className:sM(`lucide-${qT(Ox(i))}`,`lucide-${i}`,s),...o}));return n.displayName=Ox(i),n};const JT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],xf=ca("arrow-right",JT);const $T=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],tA=ca("arrow-up-right",$T);const eA=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],nA=ca("chevron-left",eA);const iA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Fx=ca("chevron-right",iA);const aA=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],sA=ca("code",aA);const rA=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],oA=ca("dollar-sign",rA);const lA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],cA=ca("layers",lA);const uA=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],fA=ca("menu",uA);const hA=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],dA=ca("settings",hA);const pA=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],mA=ca("trending-up",pA),gA=""+new URL("Rakindus R Logo-B4jKUiUj.png",import.meta.url).href,rM=Lt.createContext({});function go(i){const t=Lt.useRef(null);return t.current===null&&(t.current=i()),t.current}const oM=typeof window<"u",ig=oM?Lt.useLayoutEffect:Lt.useEffect,ag=Lt.createContext(null);function sg(i,t){i.indexOf(t)===-1&&i.push(t)}function of(i,t){const n=i.indexOf(t);n>-1&&i.splice(n,1)}const Wi=(i,t,n)=>n>t?t:n<i?i:n;let kl=()=>{};const Ia={},lM=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);function cM(i){return typeof i=="object"&&i!==null}const uM=i=>/^0[^.\s]+$/u.test(i);function rg(i){let t;return()=>(t===void 0&&(t=i()),t)}const ni=i=>i,vA=(i,t)=>n=>t(i(n)),tc=(...i)=>i.reduce(vA),vo=(i,t,n)=>{const s=t-i;return s===0?1:(n-i)/s};class og{constructor(){this.subscriptions=[]}add(t){return sg(this.subscriptions,t),()=>of(this.subscriptions,t)}notify(t,n,s){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,s);else for(let c=0;c<o;c++){const u=this.subscriptions[c];u&&u(t,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Xi=i=>i*1e3,Ci=i=>i/1e3;function lg(i,t){return t?i*(1e3/t):0}const fM=(i,t,n)=>(((1-3*n+3*t)*i+(3*n-6*t))*i+3*t)*i,_A=1e-7,xA=12;function yA(i,t,n,s,o){let c,u,f=0;do u=t+(n-t)/2,c=fM(u,s,o)-i,c>0?n=u:t=u;while(Math.abs(c)>_A&&++f<xA);return u}function ec(i,t,n,s){if(i===t&&n===s)return ni;const o=c=>yA(c,0,1,i,n);return c=>c===0||c===1?c:fM(o(c),t,s)}const hM=i=>t=>t<=.5?i(2*t)/2:(2-i(2*(1-t)))/2,dM=i=>t=>1-i(1-t),pM=ec(.33,1.53,.69,.99),cg=dM(pM),mM=hM(cg),gM=i=>(i*=2)<1?.5*cg(i):.5*(2-Math.pow(2,-10*(i-1))),ug=i=>1-Math.sin(Math.acos(i)),vM=dM(ug),_M=hM(ug),SA=ec(.42,0,1,1),MA=ec(0,0,.58,1),xM=ec(.42,0,.58,1),bA=i=>Array.isArray(i)&&typeof i[0]!="number",yM=i=>Array.isArray(i)&&typeof i[0]=="number",EA={linear:ni,easeIn:SA,easeInOut:xM,easeOut:MA,circIn:ug,circInOut:_M,circOut:vM,backIn:cg,backInOut:mM,backOut:pM,anticipate:gM},TA=i=>typeof i=="string",Bx=i=>{if(yM(i)){kl(i.length===4);const[t,n,s,o]=i;return ec(t,n,s,o)}else if(TA(i))return EA[i];return i},xu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function AA(i,t){let n=new Set,s=new Set,o=!1,c=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function p(g){u.has(g)&&(d.schedule(g),i()),g(f)}const d={schedule:(g,v=!1,_=!1)=>{const b=_&&o?n:s;return v&&u.add(g),b.has(g)||b.add(g),g},cancel:g=>{s.delete(g),u.delete(g)},process:g=>{if(f=g,o){c=!0;return}o=!0,[n,s]=[s,n],n.forEach(p),n.clear(),o=!1,c&&(c=!1,d.process(g))}};return d}const wA=40;function SM(i,t){let n=!1,s=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>n=!0,u=xu.reduce((R,U)=>(R[U]=AA(c),R),{}),{setup:f,read:p,resolveKeyframes:d,preUpdate:g,update:v,preRender:_,render:y,postRender:b}=u,T=()=>{const R=Ia.useManualTiming?o.timestamp:performance.now();n=!1,Ia.useManualTiming||(o.delta=s?1e3/60:Math.max(Math.min(R-o.timestamp,wA),1)),o.timestamp=R,o.isProcessing=!0,f.process(o),p.process(o),d.process(o),g.process(o),v.process(o),_.process(o),y.process(o),b.process(o),o.isProcessing=!1,n&&t&&(s=!1,i(T))},M=()=>{n=!0,s=!0,o.isProcessing||i(T)};return{schedule:xu.reduce((R,U)=>{const L=u[U];return R[U]=(F,I=!1,j=!1)=>(n||M(),L.schedule(F,I,j)),R},{}),cancel:R=>{for(let U=0;U<xu.length;U++)u[xu[U]].cancel(R)},state:o,steps:u}}const{schedule:Le,cancel:Ri,state:wn,steps:Fd}=SM(typeof requestAnimationFrame<"u"?requestAnimationFrame:ni,!0);let qu;function CA(){qu=void 0}const qn={now:()=>(qu===void 0&&qn.set(wn.isProcessing||Ia.useManualTiming?wn.timestamp:performance.now()),qu),set:i=>{qu=i,queueMicrotask(CA)}},MM=i=>t=>typeof t=="string"&&t.startsWith(i),bM=MM("--"),RA=MM("var(--"),fg=i=>RA(i)?DA.test(i.split("/*")[0].trim()):!1,DA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ix(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}const Eo={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Xl={...Eo,transform:i=>Wi(0,1,i)},yu={...Eo,default:1},Pl=i=>Math.round(i*1e5)/1e5,hg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function UA(i){return i==null}const NA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,dg=(i,t)=>n=>!!(typeof n=="string"&&NA.test(n)&&n.startsWith(i)||t&&!UA(n)&&Object.prototype.hasOwnProperty.call(n,t)),EM=(i,t,n)=>s=>{if(typeof s!="string")return s;const[o,c,u,f]=s.match(hg);return{[i]:parseFloat(o),[t]:parseFloat(c),[n]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},LA=i=>Wi(0,255,i),Bd={...Eo,transform:i=>Math.round(LA(i))},ar={test:dg("rgb","red"),parse:EM("red","green","blue"),transform:({red:i,green:t,blue:n,alpha:s=1})=>"rgba("+Bd.transform(i)+", "+Bd.transform(t)+", "+Bd.transform(n)+", "+Pl(Xl.transform(s))+")"};function PA(i){let t="",n="",s="",o="";return i.length>5?(t=i.substring(1,3),n=i.substring(3,5),s=i.substring(5,7),o=i.substring(7,9)):(t=i.substring(1,2),n=i.substring(2,3),s=i.substring(3,4),o=i.substring(4,5),t+=t,n+=n,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const Ip={test:dg("#"),parse:PA,transform:ar.transform},nc=i=>({test:t=>typeof t=="string"&&t.endsWith(i)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${i}`}),Ss=nc("deg"),sa=nc("%"),qt=nc("px"),OA=nc("vh"),FA=nc("vw"),zx={...sa,parse:i=>sa.parse(i)/100,transform:i=>sa.transform(i*100)},oo={test:dg("hsl","hue"),parse:EM("hue","saturation","lightness"),transform:({hue:i,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(i)+", "+sa.transform(Pl(t))+", "+sa.transform(Pl(n))+", "+Pl(Xl.transform(s))+")"},vn={test:i=>ar.test(i)||Ip.test(i)||oo.test(i),parse:i=>ar.test(i)?ar.parse(i):oo.test(i)?oo.parse(i):Ip.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?ar.transform(i):oo.transform(i),getAnimatableNone:i=>{const t=vn.parse(i);return t.alpha=0,vn.transform(t)}},BA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function IA(i){return isNaN(i)&&typeof i=="string"&&(i.match(hg)?.length||0)+(i.match(BA)?.length||0)>0}const TM="number",AM="color",zA="var",VA="var(",Vx="${}",HA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function jl(i){const t=i.toString(),n=[],s={color:[],number:[],var:[]},o=[];let c=0;const f=t.replace(HA,p=>(vn.test(p)?(s.color.push(c),o.push(AM),n.push(vn.parse(p))):p.startsWith(VA)?(s.var.push(c),o.push(zA),n.push(p)):(s.number.push(c),o.push(TM),n.push(parseFloat(p))),++c,Vx)).split(Vx);return{values:n,split:f,indexes:s,types:o}}function wM(i){return jl(i).values}function CM(i){const{split:t,types:n}=jl(i),s=t.length;return o=>{let c="";for(let u=0;u<s;u++)if(c+=t[u],o[u]!==void 0){const f=n[u];f===TM?c+=Pl(o[u]):f===AM?c+=vn.transform(o[u]):c+=o[u]}return c}}const GA=i=>typeof i=="number"?0:vn.test(i)?vn.getAnimatableNone(i):i;function kA(i){const t=wM(i);return CM(i)(t.map(GA))}const As={test:IA,parse:wM,createTransformer:CM,getAnimatableNone:kA};function Id(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*(2/3-n)*6:i}function XA({hue:i,saturation:t,lightness:n,alpha:s}){i/=360,t/=100,n/=100;let o=0,c=0,u=0;if(!t)o=c=u=n;else{const f=n<.5?n*(1+t):n+t-n*t,p=2*n-f;o=Id(p,f,i+1/3),c=Id(p,f,i),u=Id(p,f,i-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:s}}function lf(i,t){return n=>n>0?t:i}const an=(i,t,n)=>i+(t-i)*n,zd=(i,t,n)=>{const s=i*i,o=n*(t*t-s)+s;return o<0?0:Math.sqrt(o)},jA=[Ip,ar,oo],WA=i=>jA.find(t=>t.test(i));function Hx(i){const t=WA(i);if(!t)return!1;let n=t.parse(i);return t===oo&&(n=XA(n)),n}const Gx=(i,t)=>{const n=Hx(i),s=Hx(t);if(!n||!s)return lf(i,t);const o={...n};return c=>(o.red=zd(n.red,s.red,c),o.green=zd(n.green,s.green,c),o.blue=zd(n.blue,s.blue,c),o.alpha=an(n.alpha,s.alpha,c),ar.transform(o))},zp=new Set(["none","hidden"]);function qA(i,t){return zp.has(i)?n=>n<=0?i:t:n=>n>=1?t:i}function YA(i,t){return n=>an(i,t,n)}function pg(i){return typeof i=="number"?YA:typeof i=="string"?fg(i)?lf:vn.test(i)?Gx:QA:Array.isArray(i)?RM:typeof i=="object"?vn.test(i)?Gx:KA:lf}function RM(i,t){const n=[...i],s=n.length,o=i.map((c,u)=>pg(c)(c,t[u]));return c=>{for(let u=0;u<s;u++)n[u]=o[u](c);return n}}function KA(i,t){const n={...i,...t},s={};for(const o in n)i[o]!==void 0&&t[o]!==void 0&&(s[o]=pg(i[o])(i[o],t[o]));return o=>{for(const c in s)n[c]=s[c](o);return n}}function ZA(i,t){const n=[],s={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const c=t.types[o],u=i.indexes[c][s[c]],f=i.values[u]??0;n[o]=f,s[c]++}return n}const QA=(i,t)=>{const n=As.createTransformer(t),s=jl(i),o=jl(t);return s.indexes.var.length===o.indexes.var.length&&s.indexes.color.length===o.indexes.color.length&&s.indexes.number.length>=o.indexes.number.length?zp.has(i)&&!o.values.length||zp.has(t)&&!s.values.length?qA(i,t):tc(RM(ZA(s,o),o.values),n):lf(i,t)};function DM(i,t,n){return typeof i=="number"&&typeof t=="number"&&typeof n=="number"?an(i,t,n):pg(i)(i,t)}const JA=i=>{const t=({timestamp:n})=>i(n);return{start:(n=!0)=>Le.update(t,n),stop:()=>Ri(t),now:()=>wn.isProcessing?wn.timestamp:qn.now()}},UM=(i,t,n=10)=>{let s="";const o=Math.max(Math.round(t/n),2);for(let c=0;c<o;c++)s+=Math.round(i(c/(o-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},cf=2e4;function mg(i){let t=0;const n=50;let s=i.next(t);for(;!s.done&&t<cf;)t+=n,s=i.next(t);return t>=cf?1/0:t}function $A(i,t=100,n){const s=n({...i,keyframes:[0,t]}),o=Math.min(mg(s),cf);return{type:"keyframes",ease:c=>s.next(o*c).value/t,duration:Ci(o)}}const tw=5;function NM(i,t,n){const s=Math.max(t-tw,0);return lg(n-i(s),t-s)}const on={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Vd=.001;function ew({duration:i=on.duration,bounce:t=on.bounce,velocity:n=on.velocity,mass:s=on.mass}){let o,c,u=1-t;u=Wi(on.minDamping,on.maxDamping,u),i=Wi(on.minDuration,on.maxDuration,Ci(i)),u<1?(o=d=>{const g=d*u,v=g*i,_=g-n,y=Vp(d,u),b=Math.exp(-v);return Vd-_/y*b},c=d=>{const v=d*u*i,_=v*n+n,y=Math.pow(u,2)*Math.pow(d,2)*i,b=Math.exp(-v),T=Vp(Math.pow(d,2),u);return(-o(d)+Vd>0?-1:1)*((_-y)*b)/T}):(o=d=>{const g=Math.exp(-d*i),v=(d-n)*i+1;return-Vd+g*v},c=d=>{const g=Math.exp(-d*i),v=(n-d)*(i*i);return g*v});const f=5/i,p=iw(o,c,f);if(i=Xi(i),isNaN(p))return{stiffness:on.stiffness,damping:on.damping,duration:i};{const d=Math.pow(p,2)*s;return{stiffness:d,damping:u*2*Math.sqrt(s*d),duration:i}}}const nw=12;function iw(i,t,n){let s=n;for(let o=1;o<nw;o++)s=s-i(s)/t(s);return s}function Vp(i,t){return i*Math.sqrt(1-t*t)}const aw=["duration","bounce"],sw=["stiffness","damping","mass"];function kx(i,t){return t.some(n=>i[n]!==void 0)}function rw(i){let t={velocity:on.velocity,stiffness:on.stiffness,damping:on.damping,mass:on.mass,isResolvedFromDuration:!1,...i};if(!kx(i,sw)&&kx(i,aw))if(i.visualDuration){const n=i.visualDuration,s=2*Math.PI/(n*1.2),o=s*s,c=2*Wi(.05,1,1-(i.bounce||0))*Math.sqrt(o);t={...t,mass:on.mass,stiffness:o,damping:c}}else{const n=ew(i);t={...t,...n,mass:on.mass},t.isResolvedFromDuration=!0}return t}function uf(i=on.visualDuration,t=on.bounce){const n=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:t}:i;let{restSpeed:s,restDelta:o}=n;const c=n.keyframes[0],u=n.keyframes[n.keyframes.length-1],f={done:!1,value:c},{stiffness:p,damping:d,mass:g,duration:v,velocity:_,isResolvedFromDuration:y}=rw({...n,velocity:-Ci(n.velocity||0)}),b=_||0,T=d/(2*Math.sqrt(p*g)),M=u-c,x=Ci(Math.sqrt(p/g)),D=Math.abs(M)<5;s||(s=D?on.restSpeed.granular:on.restSpeed.default),o||(o=D?on.restDelta.granular:on.restDelta.default);let R;if(T<1){const L=Vp(x,T);R=F=>{const I=Math.exp(-T*x*F);return u-I*((b+T*x*M)/L*Math.sin(L*F)+M*Math.cos(L*F))}}else if(T===1)R=L=>u-Math.exp(-x*L)*(M+(b+x*M)*L);else{const L=x*Math.sqrt(T*T-1);R=F=>{const I=Math.exp(-T*x*F),j=Math.min(L*F,300);return u-I*((b+T*x*M)*Math.sinh(j)+L*M*Math.cosh(j))/L}}const U={calculatedDuration:y&&v||null,next:L=>{const F=R(L);if(y)f.done=L>=v;else{let I=L===0?b:0;T<1&&(I=L===0?Xi(b):NM(R,L,F));const j=Math.abs(I)<=s,C=Math.abs(u-F)<=o;f.done=j&&C}return f.value=f.done?u:F,f},toString:()=>{const L=Math.min(mg(U),cf),F=UM(I=>U.next(L*I).value,L,30);return L+"ms "+F},toTransition:()=>{}};return U}uf.applyToOptions=i=>{const t=$A(i,100,uf);return i.ease=t.ease,i.duration=Xi(t.duration),i.type="keyframes",i};function Hp({keyframes:i,velocity:t=0,power:n=.8,timeConstant:s=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:u,min:f,max:p,restDelta:d=.5,restSpeed:g}){const v=i[0],_={done:!1,value:v},y=j=>f!==void 0&&j<f||p!==void 0&&j>p,b=j=>f===void 0?p:p===void 0||Math.abs(f-j)<Math.abs(p-j)?f:p;let T=n*t;const M=v+T,x=u===void 0?M:u(M);x!==M&&(T=x-v);const D=j=>-T*Math.exp(-j/s),R=j=>x+D(j),U=j=>{const C=D(j),N=R(j);_.done=Math.abs(C)<=d,_.value=_.done?x:N};let L,F;const I=j=>{y(_.value)&&(L=j,F=uf({keyframes:[_.value,b(_.value)],velocity:NM(R,j,_.value),damping:o,stiffness:c,restDelta:d,restSpeed:g}))};return I(0),{calculatedDuration:null,next:j=>{let C=!1;return!F&&L===void 0&&(C=!0,U(j),I(j)),L!==void 0&&j>=L?F.next(j-L):(!C&&U(j),_)}}}function ow(i,t,n){const s=[],o=n||Ia.mix||DM,c=i.length-1;for(let u=0;u<c;u++){let f=o(i[u],i[u+1]);if(t){const p=Array.isArray(t)?t[u]||ni:t;f=tc(p,f)}s.push(f)}return s}function gg(i,t,{clamp:n=!0,ease:s,mixer:o}={}){const c=i.length;if(kl(c===t.length),c===1)return()=>t[0];if(c===2&&t[0]===t[1])return()=>t[1];const u=i[0]===i[1];i[0]>i[c-1]&&(i=[...i].reverse(),t=[...t].reverse());const f=ow(t,s,o),p=f.length,d=g=>{if(u&&g<i[0])return t[0];let v=0;if(p>1)for(;v<i.length-2&&!(g<i[v+1]);v++);const _=vo(i[v],i[v+1],g);return f[v](_)};return n?g=>d(Wi(i[0],i[c-1],g)):d}function lw(i,t){const n=i[i.length-1];for(let s=1;s<=t;s++){const o=vo(0,t,s);i.push(an(n,1,o))}}function LM(i){const t=[0];return lw(t,i.length-1),t}function cw(i,t){return i.map(n=>n*t)}function uw(i,t){return i.map(()=>t||xM).splice(0,i.length-1)}function Ol({duration:i=300,keyframes:t,times:n,ease:s="easeInOut"}){const o=bA(s)?s.map(Bx):Bx(s),c={done:!1,value:t[0]},u=cw(n&&n.length===t.length?n:LM(t),i),f=gg(u,t,{ease:Array.isArray(o)?o:uw(t,o)});return{calculatedDuration:i,next:p=>(c.value=f(p),c.done=p>=i,c)}}const fw=i=>i!==null;function vg(i,{repeat:t,repeatType:n="loop"},s,o=1){const c=i.filter(fw),f=o<0||t&&n!=="loop"&&t%2===1?0:c.length-1;return!f||s===void 0?c[f]:s}const hw={decay:Hp,inertia:Hp,tween:Ol,keyframes:Ol,spring:uf};function PM(i){typeof i.type=="string"&&(i.type=hw[i.type])}class _g{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const dw=i=>i/100;class xg extends _g{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:n}=this.options;n&&n.updatedAt!==qn.now()&&this.tick(qn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;PM(t);const{type:n=Ol,repeat:s=0,repeatDelay:o=0,repeatType:c,velocity:u=0}=t;let{keyframes:f}=t;const p=n||Ol;p!==Ol&&typeof f[0]!="number"&&(this.mixKeyframes=tc(dw,DM(f[0],f[1])),f=[0,100]);const d=p({...t,keyframes:f});c==="mirror"&&(this.mirroredGenerator=p({...t,keyframes:[...f].reverse(),velocity:-u})),d.calculatedDuration===null&&(d.calculatedDuration=mg(d));const{calculatedDuration:g}=d;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(s+1)-o,this.generator=d}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:s,totalDuration:o,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:d=0,keyframes:g,repeat:v,repeatType:_,repeatDelay:y,type:b,onUpdate:T,finalKeyframe:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const x=this.currentTime-d*(this.playbackSpeed>=0?1:-1),D=this.playbackSpeed>=0?x<0:x>o;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let R=this.currentTime,U=s;if(v){const j=Math.min(this.currentTime,o)/f;let C=Math.floor(j),N=j%1;!N&&j>=1&&(N=1),N===1&&C--,C=Math.min(C,v+1),C%2&&(_==="reverse"?(N=1-N,y&&(N-=y/f)):_==="mirror"&&(U=u)),R=Wi(0,1,N)*f}const L=D?{done:!1,value:g[0]}:U.next(R);c&&(L.value=c(L.value));let{done:F}=L;!D&&p!==null&&(F=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return I&&b!==Hp&&(L.value=vg(g,this.options,M,this.speed)),T&&T(L.value),I&&this.finish(),L}then(t,n){return this.finished.then(t,n)}get duration(){return Ci(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ci(t)}get time(){return Ci(this.currentTime)}set time(t){t=Xi(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(qn.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Ci(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=JA,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(qn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function pw(i){for(let t=1;t<i.length;t++)i[t]??(i[t]=i[t-1])}const sr=i=>i*180/Math.PI,Gp=i=>{const t=sr(Math.atan2(i[1],i[0]));return kp(t)},mw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:Gp,rotateZ:Gp,skewX:i=>sr(Math.atan(i[1])),skewY:i=>sr(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},kp=i=>(i=i%360,i<0&&(i+=360),i),Xx=Gp,jx=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),Wx=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),gw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:jx,scaleY:Wx,scale:i=>(jx(i)+Wx(i))/2,rotateX:i=>kp(sr(Math.atan2(i[6],i[5]))),rotateY:i=>kp(sr(Math.atan2(-i[2],i[0]))),rotateZ:Xx,rotate:Xx,skewX:i=>sr(Math.atan(i[4])),skewY:i=>sr(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function Xp(i){return i.includes("scale")?1:0}function jp(i,t){if(!i||i==="none")return Xp(t);const n=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,o;if(n)s=gw,o=n;else{const f=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=mw,o=f}if(!o)return Xp(t);const c=s[t],u=o[1].split(",").map(_w);return typeof c=="function"?c(u):u[c]}const vw=(i,t)=>{const{transform:n="none"}=getComputedStyle(i);return jp(n,t)};function _w(i){return parseFloat(i.trim())}const To=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ao=new Set(To),qx=i=>i===Eo||i===qt,xw=new Set(["x","y","z"]),yw=To.filter(i=>!xw.has(i));function Sw(i){const t=[];return yw.forEach(n=>{const s=i.getValue(n);s!==void 0&&(t.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),t}const bs={width:({x:i},{paddingLeft:t="0",paddingRight:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),height:({y:i},{paddingTop:t="0",paddingBottom:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),top:(i,{top:t})=>parseFloat(t),left:(i,{left:t})=>parseFloat(t),bottom:({y:i},{top:t})=>parseFloat(t)+(i.max-i.min),right:({x:i},{left:t})=>parseFloat(t)+(i.max-i.min),x:(i,{transform:t})=>jp(t,"x"),y:(i,{transform:t})=>jp(t,"y")};bs.translateX=bs.x;bs.translateY=bs.y;const or=new Set;let Wp=!1,qp=!1,Yp=!1;function OM(){if(qp){const i=Array.from(or).filter(s=>s.needsMeasurement),t=new Set(i.map(s=>s.element)),n=new Map;t.forEach(s=>{const o=Sw(s);o.length&&(n.set(s,o),s.render())}),i.forEach(s=>s.measureInitialState()),t.forEach(s=>{s.render();const o=n.get(s);o&&o.forEach(([c,u])=>{s.getValue(c)?.set(u)})}),i.forEach(s=>s.measureEndState()),i.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}qp=!1,Wp=!1,or.forEach(i=>i.complete(Yp)),or.clear()}function FM(){or.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(qp=!0)})}function Mw(){Yp=!0,FM(),OM(),Yp=!1}class yg{constructor(t,n,s,o,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=s,this.motionValue=o,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(or.add(this),Wp||(Wp=!0,Le.read(FM),Le.resolveKeyframes(OM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:s,motionValue:o}=this;if(t[0]===null){const c=o?.get(),u=t[t.length-1];if(c!==void 0)t[0]=c;else if(s&&n){const f=s.readValue(n,u);f!=null&&(t[0]=f)}t[0]===void 0&&(t[0]=u),o&&c===void 0&&o.set(t[0])}pw(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),or.delete(this)}cancel(){this.state==="scheduled"&&(or.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const bw=i=>i.startsWith("--");function Ew(i,t,n){bw(t)?i.style.setProperty(t,n):i.style[t]=n}const BM=rg(()=>window.ScrollTimeline!==void 0),Tw={};function Aw(i,t){const n=rg(i);return()=>Tw[t]??n()}const IM=Aw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ul=([i,t,n,s])=>`cubic-bezier(${i}, ${t}, ${n}, ${s})`,Yx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ul([0,.65,.55,1]),circOut:Ul([.55,0,1,.45]),backIn:Ul([.31,.01,.66,-.59]),backOut:Ul([.33,1.53,.69,.99])};function zM(i,t){if(i)return typeof i=="function"?IM()?UM(i,t):"ease-out":yM(i)?Ul(i):Array.isArray(i)?i.map(n=>zM(n,t)||Yx.easeOut):Yx[i]}function ww(i,t,n,{delay:s=0,duration:o=300,repeat:c=0,repeatType:u="loop",ease:f="easeOut",times:p}={},d=void 0){const g={[t]:n};p&&(g.offset=p);const v=zM(f,o);Array.isArray(v)&&(g.easing=v);const _={delay:s,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return d&&(_.pseudoElement=d),i.animate(g,_)}function VM(i){return typeof i=="function"&&"applyToOptions"in i}function Cw({type:i,...t}){return VM(i)&&IM()?i.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class HM extends _g{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:s,keyframes:o,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:f,onComplete:p}=t;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=t,kl(typeof t.type!="string");const d=Cw(t);this.animation=ww(n,s,o,d,c),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const g=vg(o,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(g):Ew(n,s,g),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const t=this.options?.element;!this.isPseudoElement&&t?.isConnected&&this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return Ci(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ci(t)}get time(){return Ci(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Xi(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&BM()?(this.animation.timeline=t,ni):n(this)}}const GM={anticipate:gM,backInOut:mM,circInOut:_M};function Rw(i){return i in GM}function Dw(i){typeof i.ease=="string"&&Rw(i.ease)&&(i.ease=GM[i.ease])}const Hd=10;class Uw extends HM{constructor(t){Dw(t),PM(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:s,onComplete:o,element:c,...u}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const f=new xg({...u,autoplay:!1}),p=Math.max(Hd,qn.now()-this.startTime),d=Wi(0,Hd,p-Hd);n.setWithVelocity(f.sample(Math.max(0,p-d)).value,f.sample(p).value,d),f.stop()}}const Kx=(i,t)=>t==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(As.test(i)||i==="0")&&!i.startsWith("url("));function Nw(i){const t=i[0];if(i.length===1)return!0;for(let n=0;n<i.length;n++)if(i[n]!==t)return!0}function Lw(i,t,n,s){const o=i[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const c=i[i.length-1],u=Kx(o,t),f=Kx(c,t);return!u||!f?!1:Nw(i)||(n==="spring"||VM(n))&&s}function Kp(i){i.duration=0,i.type="keyframes"}const Pw=new Set(["opacity","clipPath","filter","transform"]),Ow=rg(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Fw(i){const{motionValue:t,name:n,repeatDelay:s,repeatType:o,damping:c,type:u}=i;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:d}=t.owner.getProps();return Ow()&&n&&Pw.has(n)&&(n!=="transform"||!d)&&!p&&!s&&o!=="mirror"&&c!==0&&u!=="inertia"}const Bw=40;class Iw extends _g{constructor({autoplay:t=!0,delay:n=0,type:s="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:u="loop",keyframes:f,name:p,motionValue:d,element:g,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=qn.now();const _={autoplay:t,delay:n,type:s,repeat:o,repeatDelay:c,repeatType:u,name:p,motionValue:d,element:g,...v},y=g?.KeyframeResolver||yg;this.keyframeResolver=new y(f,(b,T,M)=>this.onKeyframesResolved(b,T,_,!M),p,d,g),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,n,s,o){this.keyframeResolver=void 0;const{name:c,type:u,velocity:f,delay:p,isHandoff:d,onUpdate:g}=s;this.resolvedAt=qn.now(),Lw(t,c,u,f)||((Ia.instantAnimations||!p)&&g?.(vg(t,s,n)),t[0]=t[t.length-1],Kp(s),s.repeat=0);const _={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>Bw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...s,keyframes:t},y=!d&&Fw(_),b=_.motionValue?.owner?.current,T=y?new Uw({..._,element:b}):new xg(_);T.finished.then(()=>{this.notifyFinished()}).catch(ni),this.pendingTimeline&&(this.stopTimeline=T.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=T}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Mw()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function kM(i,t,n,s=0,o=1){const c=Array.from(i).sort((d,g)=>d.sortNodePosition(g)).indexOf(t),u=i.size,f=(u-1)*s;return typeof n=="function"?n(c,u):o===1?c*s:f-c*s}const zw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Vw(i){const t=zw.exec(i);if(!t)return[,];const[,n,s,o]=t;return[`--${n??s}`,o]}function XM(i,t,n=1){const[s,o]=Vw(i);if(!s)return;const c=window.getComputedStyle(t).getPropertyValue(s);if(c){const u=c.trim();return lM(u)?parseFloat(u):u}return fg(o)?XM(o,t,n+1):o}const Hw={type:"spring",stiffness:500,damping:25,restSpeed:10},Gw=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),kw={type:"keyframes",duration:.8},Xw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},jw=(i,{keyframes:t})=>t.length>2?kw:Ao.has(i)?i.startsWith("scale")?Gw(t[1]):Hw:Xw,Ww=i=>i!==null;function qw(i,{repeat:t,repeatType:n="loop"},s){const o=i.filter(Ww),c=t&&n!=="loop"&&t%2===1?0:o.length-1;return o[c]}function jM(i,t){if(i?.inherit&&t){const{inherit:n,...s}=i;return{...t,...s}}return i}function Sg(i,t){const n=i?.[t]??i?.default??i;return n!==i?jM(n,i):n}function Yw({when:i,delay:t,delayChildren:n,staggerChildren:s,staggerDirection:o,repeat:c,repeatType:u,repeatDelay:f,from:p,elapsed:d,...g}){return!!Object.keys(g).length}const Mg=(i,t,n,s={},o,c)=>u=>{const f=Sg(s,i)||{},p=f.delay||s.delay||0;let{elapsed:d=0}=s;d=d-Xi(p);const g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...f,delay:-d,onUpdate:_=>{t.set(_),f.onUpdate&&f.onUpdate(_)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:i,motionValue:t,element:c?void 0:o};Yw(f)||Object.assign(g,jw(i,g)),g.duration&&(g.duration=Xi(g.duration)),g.repeatDelay&&(g.repeatDelay=Xi(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Kp(g),g.delay===0&&(v=!0)),(Ia.instantAnimations||Ia.skipAnimations||o?.shouldSkipAnimations)&&(v=!0,Kp(g),g.delay=0),g.allowFlatten=!f.type&&!f.ease,v&&!c&&t.get()!==void 0){const _=qw(g.keyframes,f);if(_!==void 0){Le.update(()=>{g.onUpdate(_),g.onComplete()});return}}return f.isSync?new xg(g):new Iw(g)};function Zx(i){const t=[{},{}];return i?.values.forEach((n,s)=>{t[0][s]=n.get(),t[1][s]=n.getVelocity()}),t}function bg(i,t,n,s){if(typeof t=="function"){const[o,c]=Zx(s);t=t(n!==void 0?n:i.custom,o,c)}if(typeof t=="string"&&(t=i.variants&&i.variants[t]),typeof t=="function"){const[o,c]=Zx(s);t=t(n!==void 0?n:i.custom,o,c)}return t}function ho(i,t,n){const s=i.getProps();return bg(s,t,n!==void 0?n:s.custom,i)}const WM=new Set(["width","height","top","left","right","bottom",...To]),Qx=30,Kw=i=>!isNaN(parseFloat(i)),Fl={current:void 0};class Zw{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const o=qn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=qn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Kw(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new og);const s=this.events[t].add(n);return t==="change"?()=>{s(),Le.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return Fl.current&&Fl.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=qn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Qx)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Qx);return lg(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Gi(i,t){return new Zw(i,t)}const Zp=i=>Array.isArray(i);function Qw(i,t,n){i.hasValue(t)?i.getValue(t).set(n):i.addValue(t,Gi(n))}function Jw(i){return Zp(i)?i[i.length-1]||0:i}function $w(i,t){const n=ho(i,t);let{transitionEnd:s={},transition:o={},...c}=n||{};c={...c,...s};for(const u in c){const f=Jw(c[u]);Qw(i,u,f)}}const Xn=i=>!!(i&&i.getVelocity);function tC(i){return!!(Xn(i)&&i.add)}function Qp(i,t){const n=i.getValue("willChange");if(tC(n))return n.add(t);if(!n&&Ia.WillChange){const s=new Ia.WillChange("auto");i.addValue("willChange",s),s.add(t)}}function Eg(i){return i.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const eC="framerAppearId",qM="data-"+Eg(eC);function YM(i){return i.props[qM]}function nC({protectedKeys:i,needsAnimating:t},n){const s=i.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,s}function KM(i,t,{delay:n=0,transitionOverride:s,type:o}={}){let{transition:c,transitionEnd:u,...f}=t;const p=i.getDefaultTransition();c=c?jM(c,p):p;const d=c?.reduceMotion;s&&(c=s);const g=[],v=o&&i.animationState&&i.animationState.getState()[o];for(const _ in f){const y=i.getValue(_,i.latestValues[_]??null),b=f[_];if(b===void 0||v&&nC(v,_))continue;const T={delay:n,...Sg(c||{},_)},M=y.get();if(M!==void 0&&!y.isAnimating&&!Array.isArray(b)&&b===M&&!T.velocity)continue;let x=!1;if(window.MotionHandoffAnimation){const U=YM(i);if(U){const L=window.MotionHandoffAnimation(U,_,Le);L!==null&&(T.startTime=L,x=!0)}}Qp(i,_);const D=d??i.shouldReduceMotion;y.start(Mg(_,y,b,D&&WM.has(_)?{type:!1}:T,i,x));const R=y.animation;R&&g.push(R)}if(u){const _=()=>Le.update(()=>{u&&$w(i,u)});g.length?Promise.all(g).then(_):_()}return g}function Jp(i,t,n={}){const s=ho(i,t,n.type==="exit"?i.presenceContext?.custom:void 0);let{transition:o=i.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(o=n.transitionOverride);const c=s?()=>Promise.all(KM(i,s,n)):()=>Promise.resolve(),u=i.variantChildren&&i.variantChildren.size?(p=0)=>{const{delayChildren:d=0,staggerChildren:g,staggerDirection:v}=o;return iC(i,t,p,d,g,v,n)}:()=>Promise.resolve(),{when:f}=o;if(f){const[p,d]=f==="beforeChildren"?[c,u]:[u,c];return p().then(()=>d())}else return Promise.all([c(),u(n.delay)])}function iC(i,t,n=0,s=0,o=0,c=1,u){const f=[];for(const p of i.variantChildren)p.notify("AnimationStart",t),f.push(Jp(p,t,{...u,delay:n+(typeof s=="function"?0:s)+kM(i.variantChildren,p,s,o,c)}).then(()=>p.notify("AnimationComplete",t)));return Promise.all(f)}function aC(i,t,n={}){i.notify("AnimationStart",t);let s;if(Array.isArray(t)){const o=t.map(c=>Jp(i,c,n));s=Promise.all(o)}else if(typeof t=="string")s=Jp(i,t,n);else{const o=typeof t=="function"?ho(i,t,n.custom):t;s=Promise.all(KM(i,o,n))}return s.then(()=>{i.notify("AnimationComplete",t)})}const sC={test:i=>i==="auto",parse:i=>i},ZM=i=>t=>t.test(i),QM=[Eo,qt,sa,Ss,FA,OA,sC],Jx=i=>QM.find(ZM(i));function rC(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||uM(i):!0}const oC=new Set(["brightness","contrast","saturate","opacity"]);function lC(i){const[t,n]=i.slice(0,-1).split("(");if(t==="drop-shadow")return i;const[s]=n.match(hg)||[];if(!s)return i;const o=n.replace(s,"");let c=oC.has(t)?1:0;return s!==n&&(c*=100),t+"("+c+o+")"}const cC=/\b([a-z-]*)\(.*?\)/gu,$p={...As,getAnimatableNone:i=>{const t=i.match(cC);return t?t.map(lC).join(" "):i}},$x={...Eo,transform:Math.round},uC={rotate:Ss,rotateX:Ss,rotateY:Ss,rotateZ:Ss,scale:yu,scaleX:yu,scaleY:yu,scaleZ:yu,skew:Ss,skewX:Ss,skewY:Ss,distance:qt,translateX:qt,translateY:qt,translateZ:qt,x:qt,y:qt,z:qt,perspective:qt,transformPerspective:qt,opacity:Xl,originX:zx,originY:zx,originZ:qt},Tg={borderWidth:qt,borderTopWidth:qt,borderRightWidth:qt,borderBottomWidth:qt,borderLeftWidth:qt,borderRadius:qt,borderTopLeftRadius:qt,borderTopRightRadius:qt,borderBottomRightRadius:qt,borderBottomLeftRadius:qt,width:qt,maxWidth:qt,height:qt,maxHeight:qt,top:qt,right:qt,bottom:qt,left:qt,inset:qt,insetBlock:qt,insetBlockStart:qt,insetBlockEnd:qt,insetInline:qt,insetInlineStart:qt,insetInlineEnd:qt,padding:qt,paddingTop:qt,paddingRight:qt,paddingBottom:qt,paddingLeft:qt,paddingBlock:qt,paddingBlockStart:qt,paddingBlockEnd:qt,paddingInline:qt,paddingInlineStart:qt,paddingInlineEnd:qt,margin:qt,marginTop:qt,marginRight:qt,marginBottom:qt,marginLeft:qt,marginBlock:qt,marginBlockStart:qt,marginBlockEnd:qt,marginInline:qt,marginInlineStart:qt,marginInlineEnd:qt,fontSize:qt,backgroundPositionX:qt,backgroundPositionY:qt,...uC,zIndex:$x,fillOpacity:Xl,strokeOpacity:Xl,numOctaves:$x},fC={...Tg,color:vn,backgroundColor:vn,outlineColor:vn,fill:vn,stroke:vn,borderColor:vn,borderTopColor:vn,borderRightColor:vn,borderBottomColor:vn,borderLeftColor:vn,filter:$p,WebkitFilter:$p},JM=i=>fC[i];function $M(i,t){let n=JM(i);return n!==$p&&(n=As),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const hC=new Set(["auto","none","0"]);function dC(i,t,n){let s=0,o;for(;s<i.length&&!o;){const c=i[s];typeof c=="string"&&!hC.has(c)&&jl(c).values.length&&(o=i[s]),s++}if(o&&n)for(const c of t)i[c]=$M(n,o)}class pC extends yg{constructor(t,n,s,o,c){super(t,n,s,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let g=0;g<t.length;g++){let v=t[g];if(typeof v=="string"&&(v=v.trim(),fg(v))){const _=XM(v,n.current);_!==void 0&&(t[g]=_),g===t.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!WM.has(s)||t.length!==2)return;const[o,c]=t,u=Jx(o),f=Jx(c),p=Ix(o),d=Ix(c);if(p!==d&&bs[s]){this.needsMeasurement=!0;return}if(u!==f)if(qx(u)&&qx(f))for(let g=0;g<t.length;g++){const v=t[g];typeof v=="string"&&(t[g]=parseFloat(v))}else bs[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,s=[];for(let o=0;o<t.length;o++)(t[o]===null||rC(t[o]))&&s.push(o);s.length&&dC(t,s,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=bs[s](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(s,o).jump(o,!1)}measureEndState(){const{element:t,name:n,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const c=s.length-1,u=s[c];s[c]=bs[n](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([f,p])=>{t.getValue(f).set(p)}),this.resolveNoneKeyframes()}}const mC=new Set(["opacity","clipPath","filter","transform"]);function tb(i,t,n){if(i==null)return[];if(i instanceof EventTarget)return[i];if(typeof i=="string"){const o=document.querySelectorAll(i);return o?Array.from(o):[]}return Array.from(i).filter(s=>s!=null)}const eb=(i,t)=>t&&typeof i=="number"?t.transform(i):i;function nb(i){return cM(i)&&"offsetHeight"in i}const{schedule:Ag}=SM(queueMicrotask,!1),Vi={x:!1,y:!1};function ib(){return Vi.x||Vi.y}function gC(i){return i==="x"||i==="y"?Vi[i]?null:(Vi[i]=!0,()=>{Vi[i]=!1}):Vi.x||Vi.y?null:(Vi.x=Vi.y=!0,()=>{Vi.x=Vi.y=!1})}function ab(i,t){const n=tb(i),s=new AbortController,o={passive:!0,...t,signal:s.signal};return[n,o,()=>s.abort()]}function vC(i){return!(i.pointerType==="touch"||ib())}function _C(i,t,n={}){const[s,o,c]=ab(i,n);return s.forEach(u=>{let f=!1,p=!1,d;const g=()=>{u.removeEventListener("pointerleave",b)},v=M=>{d&&(d(M),d=void 0),g()},_=M=>{f=!1,window.removeEventListener("pointerup",_),window.removeEventListener("pointercancel",_),p&&(p=!1,v(M))},y=()=>{f=!0,window.addEventListener("pointerup",_,o),window.addEventListener("pointercancel",_,o)},b=M=>{if(M.pointerType!=="touch"){if(f){p=!0;return}v(M)}},T=M=>{if(!vC(M))return;p=!1;const x=t(u,M);typeof x=="function"&&(d=x,u.addEventListener("pointerleave",b,o))};u.addEventListener("pointerenter",T,o),u.addEventListener("pointerdown",y,o)}),c}const sb=(i,t)=>t?i===t?!0:sb(i,t.parentElement):!1,wg=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,xC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function yC(i){return xC.has(i.tagName)||i.isContentEditable===!0}const SC=new Set(["INPUT","SELECT","TEXTAREA"]);function MC(i){return SC.has(i.tagName)||i.isContentEditable===!0}const Yu=new WeakSet;function ty(i){return t=>{t.key==="Enter"&&i(t)}}function Gd(i,t){i.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const bC=(i,t)=>{const n=i.currentTarget;if(!n)return;const s=ty(()=>{if(Yu.has(n))return;Gd(n,"down");const o=ty(()=>{Gd(n,"up")}),c=()=>Gd(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",c,t)});n.addEventListener("keydown",s,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),t)};function ey(i){return wg(i)&&!ib()}const ny=new WeakSet;function EC(i,t,n={}){const[s,o,c]=ab(i,n),u=f=>{const p=f.currentTarget;if(!ey(f)||ny.has(f))return;Yu.add(p),n.stopPropagation&&ny.add(f);const d=t(p,f),g=(y,b)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",_),Yu.has(p)&&Yu.delete(p),ey(y)&&typeof d=="function"&&d(y,{success:b})},v=y=>{g(y,p===window||p===document||n.useGlobalTarget||sb(p,y.target))},_=y=>{g(y,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",_,o)};return s.forEach(f=>{(n.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),nb(f)&&(f.addEventListener("focus",d=>bC(d,o)),!yC(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),c}function Cg(i){return cM(i)&&"ownerSVGElement"in i}const Ku=new WeakMap;let Zu;const rb=(i,t,n)=>(s,o)=>o&&o[0]?o[0][i+"Size"]:Cg(s)&&"getBBox"in s?s.getBBox()[t]:s[n],TC=rb("inline","width","offsetWidth"),AC=rb("block","height","offsetHeight");function wC({target:i,borderBoxSize:t}){Ku.get(i)?.forEach(n=>{n(i,{get width(){return TC(i,t)},get height(){return AC(i,t)}})})}function CC(i){i.forEach(wC)}function RC(){typeof ResizeObserver>"u"||(Zu=new ResizeObserver(CC))}function DC(i,t){Zu||RC();const n=tb(i);return n.forEach(s=>{let o=Ku.get(s);o||(o=new Set,Ku.set(s,o)),o.add(t),Zu?.observe(s)}),()=>{n.forEach(s=>{const o=Ku.get(s);o?.delete(t),o?.size||Zu?.unobserve(s)})}}const Qu=new Set;let lo;function UC(){lo=()=>{const i={get width(){return window.innerWidth},get height(){return window.innerHeight}};Qu.forEach(t=>t(i))},window.addEventListener("resize",lo)}function NC(i){return Qu.add(i),lo||UC(),()=>{Qu.delete(i),!Qu.size&&typeof lo=="function"&&(window.removeEventListener("resize",lo),lo=void 0)}}function tm(i,t){return typeof i=="function"?NC(i):DC(i,t)}function ob(i,t){let n;const s=()=>{const{currentTime:o}=t,u=(o===null?0:o.value)/100;n!==u&&i(u),n=u};return Le.preUpdate(s,!0),()=>Ri(s)}function LC(i){return Cg(i)&&i.tagName==="svg"}function PC(...i){const t=!Array.isArray(i[0]),n=t?0:-1,s=i[0+n],o=i[1+n],c=i[2+n],u=i[3+n],f=gg(o,c,u);return t?f(s):f}const OC=[...QM,vn,As],FC=i=>OC.find(ZM(i)),iy=()=>({translate:0,scale:1,origin:0,originPoint:0}),co=()=>({x:iy(),y:iy()}),ay=()=>({min:0,max:0}),Sn=()=>({x:ay(),y:ay()}),BC=new WeakMap;function yf(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function Wl(i){return typeof i=="string"||Array.isArray(i)}const Rg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Dg=["initial",...Rg];function Sf(i){return yf(i.animate)||Dg.some(t=>Wl(i[t]))}function lb(i){return!!(Sf(i)||i.variants)}function IC(i,t,n){for(const s in t){const o=t[s],c=n[s];if(Xn(o))i.addValue(s,o);else if(Xn(c))i.addValue(s,Gi(o,{owner:i}));else if(c!==o)if(i.hasValue(s)){const u=i.getValue(s);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=i.getStaticValue(s);i.addValue(s,Gi(u!==void 0?u:o,{owner:i}))}}for(const s in n)t[s]===void 0&&i.removeValue(s);return t}const em={current:null},cb={current:!1},zC=typeof window<"u";function VC(){if(cb.current=!0,!!zC)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),t=()=>em.current=i.matches;i.addEventListener("change",t),t()}else em.current=!1}const sy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ff={};function ub(i){ff=i}function HC(){return ff}class GC{scrapeMotionValuesFromProps(t,n,s){return{}}constructor({parent:t,props:n,presenceContext:s,reducedMotionConfig:o,skipAnimations:c,blockInitialAnimation:u,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=yg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=qn.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Le.render(this.render,!1,!0))};const{latestValues:d,renderState:g}=f;this.latestValues=d,this.baseTarget={...d},this.initialValues=n.initial?{...d}:{},this.renderState=g,this.parent=t,this.props=n,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=c,this.options=p,this.blockInitialAnimation=!!u,this.isControllingVariants=Sf(n),this.isVariantNode=lb(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:v,..._}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in _){const b=_[y];d[y]!==void 0&&Xn(b)&&b.set(d[y])}}mount(t){if(this.hasBeenMounted)for(const n in this.initialValues)this.values.get(n)?.jump(this.initialValues[n]),this.latestValues[n]=this.initialValues[n];this.current=t,BC.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,s)=>this.bindToMotionValue(s,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(cb.current||VC(),this.shouldReduceMotion=em.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Ri(this.notifyUpdate),Ri(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&mC.has(t)&&this.current instanceof HTMLElement){const{factory:u,keyframes:f,times:p,ease:d,duration:g}=n.accelerate,v=new HM({element:this.current,name:t,keyframes:f,times:p,ease:d,duration:Xi(g)}),_=u(v);this.valueSubscriptions.set(t,()=>{_(),v.cancel()});return}const s=Ao.has(t);s&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Le.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;typeof window<"u"&&window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),c&&c(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ff){const n=ff[t];if(!n)continue;const{isEnabled:s,Feature:o}=n;if(!this.features[t]&&o&&s(this.props)&&(this.features[t]=new o(this)),this.features[t]){const c=this.features[t];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Sn()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<sy.length;s++){const o=sy[s];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,u=t[c];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=IC(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const s=this.values.get(t);n!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&n!==void 0&&(s=Gi(n===null?void 0:n,{owner:this}),this.addValue(t,s)),s}readValue(t,n){let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(lM(s)||uM(s))?s=parseFloat(s):!FC(s)&&As.test(n)&&(s=$M(t,n)),this.setBaseTarget(t,Xn(s)?s.get():s)),Xn(s)?s.get():s}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const c=bg(this.props,n,this.presenceContext?.custom);c&&(s=c[t])}if(n&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Xn(o)?o:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new og),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Ag.render(this.render)}}class fb extends GC{constructor(){super(...arguments),this.KeyframeResolver=pC}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const s=t.style;return s?s[n]:void 0}removeValueFromRenderState(t,{vars:n,style:s}){delete n[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Xn(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Cs{constructor(t){this.isMounted=!1,this.node=t}update(){}}function hb({top:i,left:t,right:n,bottom:s}){return{x:{min:t,max:n},y:{min:i,max:s}}}function kC({x:i,y:t}){return{top:t.min,right:i.max,bottom:t.max,left:i.min}}function XC(i,t){if(!t)return i;const n=t({x:i.left,y:i.top}),s=t({x:i.right,y:i.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function kd(i){return i===void 0||i===1}function nm({scale:i,scaleX:t,scaleY:n}){return!kd(i)||!kd(t)||!kd(n)}function tr(i){return nm(i)||db(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function db(i){return ry(i.x)||ry(i.y)}function ry(i){return i&&i!=="0%"}function hf(i,t,n){const s=i-n,o=t*s;return n+o}function oy(i,t,n,s,o){return o!==void 0&&(i=hf(i,o,s)),hf(i,n,s)+t}function im(i,t=0,n=1,s,o){i.min=oy(i.min,t,n,s,o),i.max=oy(i.max,t,n,s,o)}function pb(i,{x:t,y:n}){im(i.x,t.translate,t.scale,t.originPoint),im(i.y,n.translate,n.scale,n.originPoint)}const ly=.999999999999,cy=1.0000000000001;function jC(i,t,n,s=!1){const o=n.length;if(!o)return;t.x=t.y=1;let c,u;for(let f=0;f<o;f++){c=n[f],u=c.projectionDelta;const{visualElement:p}=c.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&fo(i,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,pb(i,u)),s&&tr(c.latestValues)&&fo(i,c.latestValues))}t.x<cy&&t.x>ly&&(t.x=1),t.y<cy&&t.y>ly&&(t.y=1)}function uo(i,t){i.min=i.min+t,i.max=i.max+t}function uy(i,t,n,s,o=.5){const c=an(i.min,i.max,o);im(i,t,n,c,s)}function fo(i,t){uy(i.x,t.x,t.scaleX,t.scale,t.originX),uy(i.y,t.y,t.scaleY,t.scale,t.originY)}function mb(i,t){return hb(XC(i.getBoundingClientRect(),t))}function WC(i,t,n){const s=mb(i,n),{scroll:o}=t;return o&&(uo(s.x,o.offset.x),uo(s.y,o.offset.y)),s}const qC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},YC=To.length;function KC(i,t,n){let s="",o=!0;for(let c=0;c<YC;c++){const u=To[c],f=i[u];if(f===void 0)continue;let p=!0;if(typeof f=="number")p=f===(u.startsWith("scale")?1:0);else{const d=parseFloat(f);p=u.startsWith("scale")?d===1:d===0}if(!p||n){const d=eb(f,Tg[u]);if(!p){o=!1;const g=qC[u]||u;s+=`${g}(${d}) `}n&&(t[u]=d)}}return s=s.trim(),n?s=n(t,o?"":s):o&&(s="none"),s}function Ug(i,t,n){const{style:s,vars:o,transformOrigin:c}=i;let u=!1,f=!1;for(const p in t){const d=t[p];if(Ao.has(p)){u=!0;continue}else if(bM(p)){o[p]=d;continue}else{const g=eb(d,Tg[p]);p.startsWith("origin")?(f=!0,c[p]=g):s[p]=g}}if(t.transform||(u||n?s.transform=KC(t,i.transform,n):s.transform&&(s.transform="none")),f){const{originX:p="50%",originY:d="50%",originZ:g=0}=c;s.transformOrigin=`${p} ${d} ${g}`}}function gb(i,{style:t,vars:n},s,o){const c=i.style;let u;for(u in t)c[u]=t[u];o?.applyProjectionStyles(c,s);for(u in n)c.setProperty(u,n[u])}function fy(i,t){return t.max===t.min?0:i/(t.max-t.min)*100}const bl={correct:(i,t)=>{if(!t.target)return i;if(typeof i=="string")if(qt.test(i))i=parseFloat(i);else return i;const n=fy(i,t.target.x),s=fy(i,t.target.y);return`${n}% ${s}%`}},ZC={correct:(i,{treeScale:t,projectionDelta:n})=>{const s=i,o=As.parse(i);if(o.length>5)return s;const c=As.createTransformer(i),u=typeof o[0]!="number"?1:0,f=n.x.scale*t.x,p=n.y.scale*t.y;o[0+u]/=f,o[1+u]/=p;const d=an(f,p,.5);return typeof o[2+u]=="number"&&(o[2+u]/=d),typeof o[3+u]=="number"&&(o[3+u]/=d),c(o)}},am={borderRadius:{...bl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:bl,borderTopRightRadius:bl,borderBottomLeftRadius:bl,borderBottomRightRadius:bl,boxShadow:ZC};function vb(i,{layout:t,layoutId:n}){return Ao.has(i)||i.startsWith("origin")||(t||n!==void 0)&&(!!am[i]||i==="opacity")}function Ng(i,t,n){const s=i.style,o=t?.style,c={};if(!s)return c;for(const u in s)(Xn(s[u])||o&&Xn(o[u])||vb(u,i)||n?.getValue(u)?.liveStyle!==void 0)&&(c[u]=s[u]);return c}function QC(i){return window.getComputedStyle(i)}class JC extends fb{constructor(){super(...arguments),this.type="html",this.renderInstance=gb}readValueFromInstance(t,n){if(Ao.has(n))return this.projection?.isProjecting?Xp(n):vw(t,n);{const s=QC(t),o=(bM(n)?s.getPropertyValue(n):s[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return mb(t,n)}build(t,n,s){Ug(t,n,s.transformTemplate)}scrapeMotionValuesFromProps(t,n,s){return Ng(t,n,s)}}const $C={offset:"stroke-dashoffset",array:"stroke-dasharray"},tR={offset:"strokeDashoffset",array:"strokeDasharray"};function eR(i,t,n=1,s=0,o=!0){i.pathLength=1;const c=o?$C:tR;i[c.offset]=`${-s}`,i[c.array]=`${t} ${n}`}const nR=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function _b(i,{attrX:t,attrY:n,attrScale:s,pathLength:o,pathSpacing:c=1,pathOffset:u=0,...f},p,d,g){if(Ug(i,f,d),p){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:v,style:_}=i;v.transform&&(_.transform=v.transform,delete v.transform),(_.transform||v.transformOrigin)&&(_.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),_.transform&&(_.transformBox=g?.transformBox??"fill-box",delete v.transformBox);for(const y of nR)v[y]!==void 0&&(_[y]=v[y],delete v[y]);t!==void 0&&(v.x=t),n!==void 0&&(v.y=n),s!==void 0&&(v.scale=s),o!==void 0&&eR(v,o,c,u,!1)}const xb=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),yb=i=>typeof i=="string"&&i.toLowerCase()==="svg";function iR(i,t,n,s){gb(i,t,void 0,s);for(const o in t.attrs)i.setAttribute(xb.has(o)?o:Eg(o),t.attrs[o])}function Sb(i,t,n){const s=Ng(i,t,n);for(const o in i)if(Xn(i[o])||Xn(t[o])){const c=To.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;s[c]=i[o]}return s}class aR extends fb{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Sn}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Ao.has(n)){const s=JM(n);return s&&s.default||0}return n=xb.has(n)?n:Eg(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,s){return Sb(t,n,s)}build(t,n,s){_b(t,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(t,n,s,o){iR(t,n,s,o)}mount(t){this.isSVGTag=yb(t.tagName),super.mount(t)}}const sR=Dg.length;function Mb(i){if(!i)return;if(!i.isControllingVariants){const n=i.parent?Mb(i.parent)||{}:{};return i.props.initial!==void 0&&(n.initial=i.props.initial),n}const t={};for(let n=0;n<sR;n++){const s=Dg[n],o=i.props[s];(Wl(o)||o===!1)&&(t[s]=o)}return t}function bb(i,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==i.length)return!1;for(let s=0;s<n;s++)if(t[s]!==i[s])return!1;return!0}const rR=[...Rg].reverse(),oR=Rg.length;function lR(i){return t=>Promise.all(t.map(({animation:n,options:s})=>aC(i,n,s)))}function cR(i){let t=lR(i),n=hy(),s=!0;const o=p=>(d,g)=>{const v=ho(i,g,p==="exit"?i.presenceContext?.custom:void 0);if(v){const{transition:_,transitionEnd:y,...b}=v;d={...d,...b,...y}}return d};function c(p){t=p(i)}function u(p){const{props:d}=i,g=Mb(i.parent)||{},v=[],_=new Set;let y={},b=1/0;for(let M=0;M<oR;M++){const x=rR[M],D=n[x],R=d[x]!==void 0?d[x]:g[x],U=Wl(R),L=x===p?D.isActive:null;L===!1&&(b=M);let F=R===g[x]&&R!==d[x]&&U;if(F&&s&&i.manuallyAnimateOnMount&&(F=!1),D.protectedKeys={...y},!D.isActive&&L===null||!R&&!D.prevProp||yf(R)||typeof R=="boolean")continue;if(x==="exit"&&D.isActive&&L!==!0){D.prevResolvedValues&&(y={...y,...D.prevResolvedValues});continue}const I=uR(D.prevProp,R);let j=I||x===p&&D.isActive&&!F&&U||M>b&&U,C=!1;const N=Array.isArray(R)?R:[R];let X=N.reduce(o(x),{});L===!1&&(X={});const{prevResolvedValues:st={}}=D,at={...st,...X},ct=H=>{j=!0,_.has(H)&&(C=!0,_.delete(H)),D.needsAnimating[H]=!0;const Q=i.getValue(H);Q&&(Q.liveStyle=!1)};for(const H in at){const Q=X[H],yt=st[H];if(y.hasOwnProperty(H))continue;let xt=!1;Zp(Q)&&Zp(yt)?xt=!bb(Q,yt):xt=Q!==yt,xt?Q!=null?ct(H):_.add(H):Q!==void 0&&_.has(H)?ct(H):D.protectedKeys[H]=!0}D.prevProp=R,D.prevResolvedValues=X,D.isActive&&(y={...y,...X}),s&&i.blockInitialAnimation&&(j=!1);const ht=F&&I;j&&(!ht||C)&&v.push(...N.map(H=>{const Q={type:x};if(typeof H=="string"&&s&&!ht&&i.manuallyAnimateOnMount&&i.parent){const{parent:yt}=i,xt=ho(yt,H);if(yt.enteringChildren&&xt){const{delayChildren:O}=xt.transition||{};Q.delay=kM(yt.enteringChildren,i,O)}}return{animation:H,options:Q}}))}if(_.size){const M={};if(typeof d.initial!="boolean"){const x=ho(i,Array.isArray(d.initial)?d.initial[0]:d.initial);x&&x.transition&&(M.transition=x.transition)}_.forEach(x=>{const D=i.getBaseTarget(x),R=i.getValue(x);R&&(R.liveStyle=!0),M[x]=D??null}),v.push({animation:M})}let T=!!v.length;return s&&(d.initial===!1||d.initial===d.animate)&&!i.manuallyAnimateOnMount&&(T=!1),s=!1,T?t(v):Promise.resolve()}function f(p,d){if(n[p].isActive===d)return Promise.resolve();i.variantChildren?.forEach(v=>v.animationState?.setActive(p,d)),n[p].isActive=d;const g=u(p);for(const v in n)n[v].protectedKeys={};return g}return{animateChanges:u,setActive:f,setAnimateFunction:c,getState:()=>n,reset:()=>{n=hy()}}}function uR(i,t){return typeof t=="string"?t!==i:Array.isArray(t)?!bb(t,i):!1}function qs(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function hy(){return{animate:qs(!0),whileInView:qs(),whileHover:qs(),whileTap:qs(),whileDrag:qs(),whileFocus:qs(),exit:qs()}}function dy(i,t){i.min=t.min,i.max=t.max}function Fi(i,t){dy(i.x,t.x),dy(i.y,t.y)}function py(i,t){i.translate=t.translate,i.scale=t.scale,i.originPoint=t.originPoint,i.origin=t.origin}const Eb=1e-4,fR=1-Eb,hR=1+Eb,Tb=.01,dR=0-Tb,pR=0+Tb;function Yn(i){return i.max-i.min}function mR(i,t,n){return Math.abs(i-t)<=n}function my(i,t,n,s=.5){i.origin=s,i.originPoint=an(t.min,t.max,i.origin),i.scale=Yn(n)/Yn(t),i.translate=an(n.min,n.max,i.origin)-i.originPoint,(i.scale>=fR&&i.scale<=hR||isNaN(i.scale))&&(i.scale=1),(i.translate>=dR&&i.translate<=pR||isNaN(i.translate))&&(i.translate=0)}function Bl(i,t,n,s){my(i.x,t.x,n.x,s?s.originX:void 0),my(i.y,t.y,n.y,s?s.originY:void 0)}function gy(i,t,n){i.min=n.min+t.min,i.max=i.min+Yn(t)}function gR(i,t,n){gy(i.x,t.x,n.x),gy(i.y,t.y,n.y)}function vy(i,t,n){i.min=t.min-n.min,i.max=i.min+Yn(t)}function df(i,t,n){vy(i.x,t.x,n.x),vy(i.y,t.y,n.y)}function _y(i,t,n,s,o){return i-=t,i=hf(i,1/n,s),o!==void 0&&(i=hf(i,1/o,s)),i}function vR(i,t=0,n=1,s=.5,o,c=i,u=i){if(sa.test(t)&&(t=parseFloat(t),t=an(u.min,u.max,t/100)-u.min),typeof t!="number")return;let f=an(c.min,c.max,s);i===c&&(f-=t),i.min=_y(i.min,t,n,f,o),i.max=_y(i.max,t,n,f,o)}function xy(i,t,[n,s,o],c,u){vR(i,t[n],t[s],t[o],t.scale,c,u)}const _R=["x","scaleX","originX"],xR=["y","scaleY","originY"];function yy(i,t,n,s){xy(i.x,t,_R,n?n.x:void 0,s?s.x:void 0),xy(i.y,t,xR,n?n.y:void 0,s?s.y:void 0)}function Sy(i){return i.translate===0&&i.scale===1}function Ab(i){return Sy(i.x)&&Sy(i.y)}function My(i,t){return i.min===t.min&&i.max===t.max}function yR(i,t){return My(i.x,t.x)&&My(i.y,t.y)}function by(i,t){return Math.round(i.min)===Math.round(t.min)&&Math.round(i.max)===Math.round(t.max)}function wb(i,t){return by(i.x,t.x)&&by(i.y,t.y)}function Ey(i){return Yn(i.x)/Yn(i.y)}function Ty(i,t){return i.translate===t.translate&&i.scale===t.scale&&i.originPoint===t.originPoint}function ea(i){return[i("x"),i("y")]}function SR(i,t,n){let s="";const o=i.x.translate/t.x,c=i.y.translate/t.y,u=n?.z||0;if((o||c||u)&&(s=`translate3d(${o}px, ${c}px, ${u}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:g,rotateX:v,rotateY:_,skewX:y,skewY:b}=n;d&&(s=`perspective(${d}px) ${s}`),g&&(s+=`rotate(${g}deg) `),v&&(s+=`rotateX(${v}deg) `),_&&(s+=`rotateY(${_}deg) `),y&&(s+=`skewX(${y}deg) `),b&&(s+=`skewY(${b}deg) `)}const f=i.x.scale*t.x,p=i.y.scale*t.y;return(f!==1||p!==1)&&(s+=`scale(${f}, ${p})`),s||"none"}const Cb=["TopLeft","TopRight","BottomLeft","BottomRight"],MR=Cb.length,Ay=i=>typeof i=="string"?parseFloat(i):i,wy=i=>typeof i=="number"||qt.test(i);function bR(i,t,n,s,o,c){o?(i.opacity=an(0,n.opacity??1,ER(s)),i.opacityExit=an(t.opacity??1,0,TR(s))):c&&(i.opacity=an(t.opacity??1,n.opacity??1,s));for(let u=0;u<MR;u++){const f=`border${Cb[u]}Radius`;let p=Cy(t,f),d=Cy(n,f);if(p===void 0&&d===void 0)continue;p||(p=0),d||(d=0),p===0||d===0||wy(p)===wy(d)?(i[f]=Math.max(an(Ay(p),Ay(d),s),0),(sa.test(d)||sa.test(p))&&(i[f]+="%")):i[f]=d}(t.rotate||n.rotate)&&(i.rotate=an(t.rotate||0,n.rotate||0,s))}function Cy(i,t){return i[t]!==void 0?i[t]:i.borderRadius}const ER=Rb(0,.5,vM),TR=Rb(.5,.95,ni);function Rb(i,t,n){return s=>s<i?0:s>t?1:n(vo(i,t,s))}function AR(i,t,n){const s=Xn(i)?i:Gi(i);return s.start(Mg("",s,t,n)),s.animation}function ql(i,t,n,s={passive:!0}){return i.addEventListener(t,n,s),()=>i.removeEventListener(t,n)}const wR=(i,t)=>i.depth-t.depth;class CR{constructor(){this.children=[],this.isDirty=!1}add(t){sg(this.children,t),this.isDirty=!0}remove(t){of(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(wR),this.isDirty=!1,this.children.forEach(t)}}function RR(i,t){const n=qn.now(),s=({timestamp:o})=>{const c=o-n;c>=t&&(Ri(s),i(c-t))};return Le.setup(s,!0),()=>Ri(s)}function Ju(i){return Xn(i)?i.get():i}class DR{constructor(){this.members=[]}add(t){sg(this.members,t);for(let n=this.members.length-1;n>=0;n--){const s=this.members[n];if(s===t||s===this.lead||s===this.prevLead)continue;const o=s.instance;o&&o.isConnected===!1&&s.isPresent!==!1&&!s.snapshot&&of(this.members,s)}t.scheduleRender()}remove(t){if(of(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let s;for(let o=n;o>=0;o--){const c=this.members[o],u=c.instance;if(c.isPresent!==!1&&(!u||u.isConnected!==!1)){s=c;break}}return s?(this.promote(s),!0):!1}promote(t,n){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender();const o=s.options.layoutDependency,c=t.options.layoutDependency;if(!(o!==void 0&&c!==void 0&&o===c)){const p=s.instance;p&&p.isConnected===!1&&!s.snapshot||(t.resumeFrom=s,n&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0))}const{crossfade:f}=t.options;f===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:s}=t;n.onExitComplete&&n.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const $u={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Xd=["","X","Y","Z"],UR=1e3;let NR=0;function jd(i,t,n,s){const{latestValues:o}=t;o[i]&&(n[i]=o[i],t.setStaticValue(i,0),s&&(s[i]=0))}function Db(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:t}=i.options;if(!t)return;const n=YM(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:c}=i.options;window.MotionCancelOptimisedAnimation(n,"transform",Le,!(o||c))}const{parent:s}=i;s&&!s.hasCheckedOptimisedAppear&&Db(s)}function Ub({attachResizeListener:i,defaultParent:t,measureScroll:n,checkIsScrollRoot:s,resetTransform:o}){return class{constructor(u={},f=t?.()){this.id=NR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(OR),this.nodes.forEach(zR),this.nodes.forEach(VR),this.nodes.forEach(FR)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new CR)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new og),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const p=this.eventHandlers.get(u);p&&p.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=Cg(u)&&!LC(u),this.instance=u;const{layoutId:f,layout:p,visualElement:d}=this.options;if(d&&!d.current&&d.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||f)&&(this.isLayoutDirty=!0),i){let g,v=0;const _=()=>this.root.updateBlockedByResize=!1;Le.read(()=>{v=window.innerWidth}),i(u,()=>{const y=window.innerWidth;y!==v&&(v=y,this.root.updateBlockedByResize=!0,g&&g(),g=RR(_,250),$u.hasAnimatedSinceResize&&($u.hasAnimatedSinceResize=!1,this.nodes.forEach(Uy)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&d&&(f||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeLayoutChanged:_,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||d.getDefaultTransition()||jR,{onLayoutAnimationStart:T,onLayoutAnimationComplete:M}=d.getProps(),x=!this.targetLayout||!wb(this.targetLayout,y),D=!v&&_;if(this.options.layoutRoot||this.resumeFrom||D||v&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const R={...Sg(b,"layout"),onPlay:T,onComplete:M};(d.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R),this.setAnimationOrigin(g,D)}else v||Uy(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ri(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(HR),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Db(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:p}=this.options;if(f===void 0&&!p)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ry);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Dy);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(IR),this.nodes.forEach(LR),this.nodes.forEach(PR)):this.nodes.forEach(Dy),this.clearAllSnapshots();const f=qn.now();wn.delta=Wi(0,1e3/60,f-wn.timestamp),wn.timestamp=f,wn.isProcessing=!0,Fd.update.process(wn),Fd.preRender.process(wn),Fd.render.process(wn),wn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ag.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(BR),this.sharedNodes.forEach(GR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Le.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Le.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Yn(this.snapshot.measuredBox.x)&&!Yn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Sn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:p,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!Ab(this.projectionDelta),p=this.getTransformTemplate(),d=p?p(this.latestValues,""):void 0,g=d!==this.prevTransformTemplateValue;u&&this.instance&&(f||tr(this.latestValues)||g)&&(o(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let p=this.removeElementScroll(f);return u&&(p=this.removeTransform(p)),WR(p),{animationId:this.root.animationId,measuredBox:f,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return Sn();const f=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(qR))){const{scroll:d}=this.root;d&&(uo(f.x,d.offset.x),uo(f.y,d.offset.y))}return f}removeElementScroll(u){const f=Sn();if(Fi(f,u),this.scroll?.wasRoot)return f;for(let p=0;p<this.path.length;p++){const d=this.path[p],{scroll:g,options:v}=d;d!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&Fi(f,u),uo(f.x,g.offset.x),uo(f.y,g.offset.y))}return f}applyTransform(u,f=!1){const p=Sn();Fi(p,u);for(let d=0;d<this.path.length;d++){const g=this.path[d];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&fo(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),tr(g.latestValues)&&fo(p,g.latestValues)}return tr(this.latestValues)&&fo(p,this.latestValues),p}removeTransform(u){const f=Sn();Fi(f,u);for(let p=0;p<this.path.length;p++){const d=this.path[p];if(!d.instance||!tr(d.latestValues))continue;nm(d.latestValues)&&d.updateSnapshot();const g=Sn(),v=d.measurePageBox();Fi(g,v),yy(f,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,g)}return tr(this.latestValues)&&yy(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==wn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==f;if(!(u||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!this.layout||!(g||v))return;this.resolvedRelativeTargetAt=wn.timestamp;const _=this.getClosestProjectingParent();_&&this.linkedParentVersion!==_.layoutVersion&&!_.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(_&&_.layout?this.createRelativeTarget(_,this.layout.layoutBox,_.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Sn(),this.targetWithTransforms=Sn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),gR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Fi(this.target,this.layout.layoutBox),pb(this.target,this.targetDelta)):Fi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,_&&!!_.resumingFrom==!!this.resumingFrom&&!_.options.layoutScroll&&_.target&&this.animationProgress!==1?this.createRelativeTarget(_,this.target,_.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||nm(this.parent.latestValues)||db(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,f,p){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Sn(),this.relativeTargetOrigin=Sn(),df(this.relativeTargetOrigin,f,p),Fi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const u=this.getLead(),f=!!this.resumingFrom||this!==u;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===wn.timestamp&&(p=!1),p)return;const{layout:d,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||g))return;Fi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,_=this.treeScale.y;jC(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Sn());const{target:y}=u;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(py(this.prevProjectionDelta.x,this.projectionDelta.x),py(this.prevProjectionDelta.y,this.projectionDelta.y)),Bl(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==_||!Ty(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ty(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=co(),this.projectionDelta=co(),this.projectionDeltaWithTransform=co()}setAnimationOrigin(u,f=!1){const p=this.snapshot,d=p?p.latestValues:{},g={...this.latestValues},v=co();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const _=Sn(),y=p?p.source:void 0,b=this.layout?this.layout.source:void 0,T=y!==b,M=this.getStack(),x=!M||M.members.length<=1,D=!!(T&&!x&&this.options.crossfade===!0&&!this.path.some(XR));this.animationProgress=0;let R;this.mixTargetDelta=U=>{const L=U/1e3;Ny(v.x,u.x,L),Ny(v.y,u.y,L),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(df(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox),kR(this.relativeTarget,this.relativeTargetOrigin,_,L),R&&yR(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=Sn()),Fi(R,this.relativeTarget)),T&&(this.animationValues=g,bR(g,d,this.latestValues,L,D,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Ri(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Le.update(()=>{$u.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Gi(0)),this.currentAnimation=AR(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(UR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:p,layout:d,latestValues:g}=u;if(!(!f||!p||!d)){if(this!==u&&this.layout&&d&&Nb(this.options.animationType,this.layout.layoutBox,d.layoutBox)){p=this.target||Sn();const v=Yn(this.layout.layoutBox.x);p.x.min=u.target.x.min,p.x.max=p.x.min+v;const _=Yn(this.layout.layoutBox.y);p.y.min=u.target.y.min,p.y.max=p.y.min+_}Fi(f,p),fo(f,g),Bl(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new DR),this.sharedNodes.get(u).add(f);const d=f.options.initialPromotionConfig;f.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:p}={}){const d=this.getStack();d&&d.promote(this,p),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:p}=u;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(f=!0),!f)return;const d={};p.z&&jd("z",u,d,this.animationValues);for(let g=0;g<Xd.length;g++)jd(`rotate${Xd[g]}`,u,d,this.animationValues),jd(`skew${Xd[g]}`,u,d,this.animationValues);u.render();for(const g in d)u.setStaticValue(g,d[g]),this.animationValues&&(this.animationValues[g]=d[g]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Ju(f?.pointerEvents)||"",u.transform=p?p(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Ju(f?.pointerEvents)||""),this.hasProjected&&!tr(this.latestValues)&&(u.transform=p?p({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=d.animationValues||d.latestValues;this.applyTransformsToTarget();let v=SR(this.projectionDeltaWithTransform,this.treeScale,g);p&&(v=p(g,v)),u.transform=v;const{x:_,y}=this.projectionDelta;u.transformOrigin=`${_.origin*100}% ${y.origin*100}% 0`,d.animationValues?u.opacity=d===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=d===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const b in am){if(g[b]===void 0)continue;const{correct:T,applyTo:M,isCSSVariable:x}=am[b],D=v==="none"?g[b]:T(g[b],d);if(M){const R=M.length;for(let U=0;U<R;U++)u[M[U]]=D}else x?this.options.visualElement.renderState.vars[b]=D:u[b]=D}this.options.layoutId&&(u.pointerEvents=d===this?Ju(f?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(Ry),this.root.sharedNodes.clear()}}}function LR(i){i.updateLayout()}function PR(i){const t=i.resumeFrom?.snapshot||i.snapshot;if(i.isLead()&&i.layout&&t&&i.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:s}=i.layout,{animationType:o}=i.options,c=t.source!==i.layout.source;o==="size"?ea(g=>{const v=c?t.measuredBox[g]:t.layoutBox[g],_=Yn(v);v.min=n[g].min,v.max=v.min+_}):Nb(o,t.layoutBox,n)&&ea(g=>{const v=c?t.measuredBox[g]:t.layoutBox[g],_=Yn(n[g]);v.max=v.min+_,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[g].max=i.relativeTarget[g].min+_)});const u=co();Bl(u,n,t.layoutBox);const f=co();c?Bl(f,i.applyTransform(s,!0),t.measuredBox):Bl(f,n,t.layoutBox);const p=!Ab(u);let d=!1;if(!i.resumeFrom){const g=i.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:_}=g;if(v&&_){const y=Sn();df(y,t.layoutBox,v.layoutBox);const b=Sn();df(b,n,_.layoutBox),wb(y,b)||(d=!0),g.options.layoutRoot&&(i.relativeTarget=b,i.relativeTargetOrigin=y,i.relativeParent=g)}}}i.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:f,layoutDelta:u,hasLayoutChanged:p,hasRelativeLayoutChanged:d})}else if(i.isLead()){const{onExitComplete:n}=i.options;n&&n()}i.options.transition=void 0}function OR(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function FR(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function BR(i){i.clearSnapshot()}function Ry(i){i.clearMeasurements()}function Dy(i){i.isLayoutDirty=!1}function IR(i){const{visualElement:t}=i.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),i.resetTransform()}function Uy(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function zR(i){i.resolveTargetDelta()}function VR(i){i.calcProjection()}function HR(i){i.resetSkewAndRotation()}function GR(i){i.removeLeadSnapshot()}function Ny(i,t,n){i.translate=an(t.translate,0,n),i.scale=an(t.scale,1,n),i.origin=t.origin,i.originPoint=t.originPoint}function Ly(i,t,n,s){i.min=an(t.min,n.min,s),i.max=an(t.max,n.max,s)}function kR(i,t,n,s){Ly(i.x,t.x,n.x,s),Ly(i.y,t.y,n.y,s)}function XR(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const jR={duration:.45,ease:[.4,0,.1,1]},Py=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),Oy=Py("applewebkit/")&&!Py("chrome/")?Math.round:ni;function Fy(i){i.min=Oy(i.min),i.max=Oy(i.max)}function WR(i){Fy(i.x),Fy(i.y)}function Nb(i,t,n){return i==="position"||i==="preserve-aspect"&&!mR(Ey(t),Ey(n),.2)}function qR(i){return i!==i.root&&i.scroll?.wasRoot}const YR=Ub({attachResizeListener:(i,t)=>ql(i,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Wd={current:void 0},Lb=Ub({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!Wd.current){const i=new YR({});i.mount(window),i.setOptions({layoutScroll:!0}),Wd.current=i}return Wd.current},resetTransform:(i,t)=>{i.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),Lg=Lt.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function KR(i=!0){const t=Lt.useContext(ag);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:o}=t,c=Lt.useId();Lt.useEffect(()=>{if(i)return o(c)},[i]);const u=Lt.useCallback(()=>i&&s&&s(c),[c,s,i]);return!n&&s?[!1,u]:[!0]}const Pb=Lt.createContext({strict:!1}),By={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Iy=!1;function ZR(){if(Iy)return;const i={};for(const t in By)i[t]={isEnabled:n=>By[t].some(s=>!!n[s])};ub(i),Iy=!0}function Ob(){return ZR(),HC()}function QR(i){const t=Ob();for(const n in i)t[n]={...t[n],...i[n]};ub(t)}const JR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function pf(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||JR.has(i)}let Fb=i=>!pf(i);function $R(i){typeof i=="function"&&(Fb=t=>t.startsWith("on")?!pf(t):i(t))}try{$R(require("@emotion/is-prop-valid").default)}catch{}function t2(i,t,n){const s={};for(const o in i)o==="values"&&typeof i.values=="object"||(Fb(o)||n===!0&&pf(o)||!t&&!pf(o)||i.draggable&&o.startsWith("onDrag"))&&(s[o]=i[o]);return s}const Mf=Lt.createContext({});function e2(i,t){if(Sf(i)){const{initial:n,animate:s}=i;return{initial:n===!1||Wl(n)?n:void 0,animate:Wl(s)?s:void 0}}return i.inherit!==!1?t:{}}function n2(i){const{initial:t,animate:n}=e2(i,Lt.useContext(Mf));return Lt.useMemo(()=>({initial:t,animate:n}),[zy(t),zy(n)])}function zy(i){return Array.isArray(i)?i.join(" "):i}const Pg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Bb(i,t,n){for(const s in t)!Xn(t[s])&&!vb(s,n)&&(i[s]=t[s])}function i2({transformTemplate:i},t){return Lt.useMemo(()=>{const n=Pg();return Ug(n,t,i),Object.assign({},n.vars,n.style)},[t])}function a2(i,t){const n=i.style||{},s={};return Bb(s,n,i),Object.assign(s,i2(i,t)),s}function s2(i,t){const n={},s=a2(i,t);return i.drag&&i.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(n.tabIndex=0),n.style=s,n}const Ib=()=>({...Pg(),attrs:{}});function r2(i,t,n,s){const o=Lt.useMemo(()=>{const c=Ib();return _b(c,t,yb(s),i.transformTemplate,i.style),{...c.attrs,style:{...c.style}}},[t]);if(i.style){const c={};Bb(c,i.style,i),o.style={...c,...o.style}}return o}const o2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Og(i){return typeof i!="string"||i.includes("-")?!1:!!(o2.indexOf(i)>-1||/[A-Z]/u.test(i))}function l2(i,t,n,{latestValues:s},o,c=!1,u){const p=(u??Og(i)?r2:s2)(t,s,o,i),d=t2(t,typeof i=="string",c),g=i!==Lt.Fragment?{...d,...p,ref:n}:{},{children:v}=t,_=Lt.useMemo(()=>Xn(v)?v.get():v,[v]);return Lt.createElement(i,{...g,children:_})}function c2({scrapeMotionValuesFromProps:i,createRenderState:t},n,s,o){return{latestValues:u2(n,s,o,i),renderState:t()}}function u2(i,t,n,s){const o={},c=s(i,{});for(const _ in c)o[_]=Ju(c[_]);let{initial:u,animate:f}=i;const p=Sf(i),d=lb(i);t&&d&&!p&&i.inherit!==!1&&(u===void 0&&(u=t.initial),f===void 0&&(f=t.animate));let g=n?n.initial===!1:!1;g=g||u===!1;const v=g?f:u;if(v&&typeof v!="boolean"&&!yf(v)){const _=Array.isArray(v)?v:[v];for(let y=0;y<_.length;y++){const b=bg(i,_[y]);if(b){const{transitionEnd:T,transition:M,...x}=b;for(const D in x){let R=x[D];if(Array.isArray(R)){const U=g?R.length-1:0;R=R[U]}R!==null&&(o[D]=R)}for(const D in T)o[D]=T[D]}}}return o}const zb=i=>(t,n)=>{const s=Lt.useContext(Mf),o=Lt.useContext(ag),c=()=>c2(i,t,s,o);return n?c():go(c)},f2=zb({scrapeMotionValuesFromProps:Ng,createRenderState:Pg}),h2=zb({scrapeMotionValuesFromProps:Sb,createRenderState:Ib}),d2=Symbol.for("motionComponentSymbol");function p2(i,t,n){const s=Lt.useRef(n);Lt.useInsertionEffect(()=>{s.current=n});const o=Lt.useRef(null);return Lt.useCallback(c=>{c&&i.onMount?.(c),t&&(c?t.mount(c):t.unmount());const u=s.current;if(typeof u=="function")if(c){const f=u(c);typeof f=="function"&&(o.current=f)}else o.current?(o.current(),o.current=null):u(c);else u&&(u.current=c)},[t])}const Vb=Lt.createContext({});function ro(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function m2(i,t,n,s,o,c){const{visualElement:u}=Lt.useContext(Mf),f=Lt.useContext(Pb),p=Lt.useContext(ag),d=Lt.useContext(Lg),g=d.reducedMotion,v=d.skipAnimations,_=Lt.useRef(null),y=Lt.useRef(!1);s=s||f.renderer,!_.current&&s&&(_.current=s(i,{visualState:t,parent:u,props:n,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:v,isSVG:c}),y.current&&_.current&&(_.current.manuallyAnimateOnMount=!0));const b=_.current,T=Lt.useContext(Vb);b&&!b.projection&&o&&(b.type==="html"||b.type==="svg")&&g2(_.current,n,o,T);const M=Lt.useRef(!1);Lt.useInsertionEffect(()=>{b&&M.current&&b.update(n,p)});const x=n[qM],D=Lt.useRef(!!x&&!window.MotionHandoffIsComplete?.(x)&&window.MotionHasOptimisedAnimation?.(x));return ig(()=>{y.current=!0,b&&(M.current=!0,window.MotionIsMounted=!0,b.updateFeatures(),b.scheduleRenderMicrotask(),D.current&&b.animationState&&b.animationState.animateChanges())}),Lt.useEffect(()=>{b&&(!D.current&&b.animationState&&b.animationState.animateChanges(),D.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(x)}),D.current=!1),b.enteringChildren=void 0)}),b}function g2(i,t,n,s){const{layoutId:o,layout:c,drag:u,dragConstraints:f,layoutScroll:p,layoutRoot:d,layoutCrossfade:g}=t;i.projection=new n(i.latestValues,t["data-framer-portal-id"]?void 0:Hb(i.parent)),i.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!u||f&&ro(f),visualElement:i,animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,crossfade:g,layoutScroll:p,layoutRoot:d})}function Hb(i){if(i)return i.options.allowProjection!==!1?i.projection:Hb(i.parent)}function qd(i,{forwardMotionProps:t=!1,type:n}={},s,o){s&&QR(s);const c=n?n==="svg":Og(i),u=c?h2:f2;function f(d,g){let v;const _={...Lt.useContext(Lg),...d,layoutId:v2(d)},{isStatic:y}=_,b=n2(d),T=u(d,y);if(!y&&oM){_2();const M=x2(_);v=M.MeasureLayout,b.visualElement=m2(i,T,_,o,M.ProjectionNode,c)}return B.jsxs(Mf.Provider,{value:b,children:[v&&b.visualElement?B.jsx(v,{visualElement:b.visualElement,..._}):null,l2(i,d,p2(T,b.visualElement,g),T,y,t,c)]})}f.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const p=Lt.forwardRef(f);return p[d2]=i,p}function v2({layoutId:i}){const t=Lt.useContext(rM).id;return t&&i!==void 0?t+"-"+i:i}function _2(i,t){Lt.useContext(Pb).strict}function x2(i){const t=Ob(),{drag:n,layout:s}=t;if(!n&&!s)return{};const o={...n,...s};return{MeasureLayout:n?.isEnabled(i)||s?.isEnabled(i)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function y2(i,t){if(typeof Proxy>"u")return qd;const n=new Map,s=(c,u)=>qd(c,u,i,t),o=(c,u)=>s(c,u);return new Proxy(o,{get:(c,u)=>u==="create"?s:(n.has(u)||n.set(u,qd(u,void 0,i,t)),n.get(u))})}const S2=(i,t)=>t.isSVG??Og(i)?new aR(t):new JC(t,{allowProjection:i!==Lt.Fragment});class M2 extends Cs{constructor(t){super(t),t.animationState||(t.animationState=cR(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();yf(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let b2=0;class E2 extends Cs{constructor(){super(...arguments),this.id=b2++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const T2={animation:{Feature:M2},exit:{Feature:E2}};function ic(i){return{point:{x:i.pageX,y:i.pageY}}}const A2=i=>t=>wg(t)&&i(t,ic(t));function Il(i,t,n,s){return ql(i,t,A2(n),s)}const Gb=({current:i})=>i?i.ownerDocument.defaultView:null,Vy=(i,t)=>Math.abs(i-t);function w2(i,t){const n=Vy(i.x,t.x),s=Vy(i.y,t.y);return Math.sqrt(n**2+s**2)}const Hy=new Set(["auto","scroll"]);class kb{constructor(t,n,{transformPagePoint:s,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:u=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=y=>{this.handleScroll(y.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Kd(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,T=w2(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!b&&!T)return;const{point:M}=y,{timestamp:x}=wn;this.history.push({...M,timestamp:x});const{onStart:D,onMove:R}=this.handlers;b||(D&&D(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,y)},this.handlePointerMove=(y,b)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=Yd(b,this.transformPagePoint),Le.update(this.updatePoint,!0)},this.handlePointerUp=(y,b)=>{this.end();const{onEnd:T,onSessionEnd:M,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const D=Kd(y.type==="pointercancel"?this.lastMoveEventInfo:Yd(b,this.transformPagePoint),this.history);this.startEvent&&T&&T(y,D),M&&M(y,D)},!wg(t))return;this.dragSnapToOrigin=c,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=u,this.contextWindow=o||window;const p=ic(t),d=Yd(p,this.transformPagePoint),{point:g}=d,{timestamp:v}=wn;this.history=[{...g,timestamp:v}];const{onSessionStart:_}=n;_&&_(t,Kd(d,this.history)),this.removeListeners=tc(Il(this.contextWindow,"pointermove",this.handlePointerMove),Il(this.contextWindow,"pointerup",this.handlePointerUp),Il(this.contextWindow,"pointercancel",this.handlePointerUp)),f&&this.startScrollTracking(f)}startScrollTracking(t){let n=t.parentElement;for(;n;){const s=getComputedStyle(n);(Hy.has(s.overflowX)||Hy.has(s.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const s=t===window,o=s?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},c={x:o.x-n.x,y:o.y-n.y};c.x===0&&c.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=c.x,this.lastMoveEventInfo.point.y+=c.y):this.history.length>0&&(this.history[0].x-=c.x,this.history[0].y-=c.y),this.scrollPositions.set(t,o),Le.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ri(this.updatePoint)}}function Yd(i,t){return t?{point:t(i.point)}:i}function Gy(i,t){return{x:i.x-t.x,y:i.y-t.y}}function Kd({point:i},t){return{point:i,delta:Gy(i,Xb(t)),offset:Gy(i,C2(t)),velocity:R2(t,.1)}}function C2(i){return i[0]}function Xb(i){return i[i.length-1]}function R2(i,t){if(i.length<2)return{x:0,y:0};let n=i.length-1,s=null;const o=Xb(i);for(;n>=0&&(s=i[n],!(o.timestamp-s.timestamp>Xi(t)));)n--;if(!s)return{x:0,y:0};s===i[0]&&i.length>2&&o.timestamp-s.timestamp>Xi(t)*2&&(s=i[1]);const c=Ci(o.timestamp-s.timestamp);if(c===0)return{x:0,y:0};const u={x:(o.x-s.x)/c,y:(o.y-s.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function D2(i,{min:t,max:n},s){return t!==void 0&&i<t?i=s?an(t,i,s.min):Math.max(i,t):n!==void 0&&i>n&&(i=s?an(n,i,s.max):Math.min(i,n)),i}function ky(i,t,n){return{min:t!==void 0?i.min+t:void 0,max:n!==void 0?i.max+n-(i.max-i.min):void 0}}function U2(i,{top:t,left:n,bottom:s,right:o}){return{x:ky(i.x,n,o),y:ky(i.y,t,s)}}function Xy(i,t){let n=t.min-i.min,s=t.max-i.max;return t.max-t.min<i.max-i.min&&([n,s]=[s,n]),{min:n,max:s}}function N2(i,t){return{x:Xy(i.x,t.x),y:Xy(i.y,t.y)}}function L2(i,t){let n=.5;const s=Yn(i),o=Yn(t);return o>s?n=vo(t.min,t.max-s,i.min):s>o&&(n=vo(i.min,i.max-o,t.min)),Wi(0,1,n)}function P2(i,t){const n={};return t.min!==void 0&&(n.min=t.min-i.min),t.max!==void 0&&(n.max=t.max-i.min),n}const sm=.35;function O2(i=sm){return i===!1?i=0:i===!0&&(i=sm),{x:jy(i,"left","right"),y:jy(i,"top","bottom")}}function jy(i,t,n){return{min:Wy(i,t),max:Wy(i,n)}}function Wy(i,t){return typeof i=="number"?i:i[t]||0}const F2=new WeakMap;class B2{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Sn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=v=>{n&&this.snapToCursor(ic(v).point),this.stopAnimation()},u=(v,_)=>{const{drag:y,dragPropagation:b,onDragStart:T}=this.getProps();if(y&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=gC(y),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=_,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ea(x=>{let D=this.getAxisMotionValue(x).get()||0;if(sa.test(D)){const{projection:R}=this.visualElement;if(R&&R.layout){const U=R.layout.layoutBox[x];U&&(D=Yn(U)*(parseFloat(D)/100))}}this.originPoint[x]=D}),T&&Le.update(()=>T(v,_),!1,!0),Qp(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},f=(v,_)=>{this.latestPointerEvent=v,this.latestPanInfo=_;const{dragPropagation:y,dragDirectionLock:b,onDirectionLock:T,onDrag:M}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:x}=_;if(b&&this.currentDirection===null){this.currentDirection=z2(x),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",_.point,x),this.updateAxis("y",_.point,x),this.visualElement.render(),M&&Le.update(()=>M(v,_),!1,!0)},p=(v,_)=>{this.latestPointerEvent=v,this.latestPanInfo=_,this.stop(v,_),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new kb(t,{onSessionStart:c,onStart:u,onMove:f,onSessionEnd:p,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:s,contextWindow:Gb(this.visualElement),element:this.visualElement.current})}stop(t,n){const s=t||this.latestPointerEvent,o=n||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!s)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Le.postRender(()=>f(s,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,s){const{drag:o}=this.getProps();if(!s||!Su(t,o,this.currentDirection))return;const c=this.getAxisMotionValue(t);let u=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(u=D2(u,this.constraints[t],this.elastic[t])),c.set(u)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;t&&ro(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=U2(s.layoutBox,t):this.constraints=!1,this.elastic=O2(n),o!==this.constraints&&!ro(t)&&s&&this.constraints&&!this.hasMutatedConstraints&&ea(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=P2(s.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ro(t))return!1;const s=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const c=WC(s,o.root,this.visualElement.getTransformPagePoint());let u=N2(o.layout.layoutBox,c);if(n){const f=n(kC(u));this.hasMutatedConstraints=!!f,f&&(u=hb(f))}return u}startAnimation(t){const{drag:n,dragMomentum:s,dragElastic:o,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),p=this.constraints||{},d=ea(g=>{if(!Su(g,n,this.currentDirection))return;let v=p&&p[g]||{};u&&(v={min:0,max:0});const _=o?200:1e6,y=o?40:1e7,b={type:"inertia",velocity:s?t[g]:0,bounceStiffness:_,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...c,...v};return this.startAxisValueAnimation(g,b)});return Promise.all(d).then(f)}startAxisValueAnimation(t,n){const s=this.getAxisMotionValue(t);return Qp(this.visualElement,t),s.start(Mg(t,s,0,n,this.visualElement,!1))}stopAnimation(){ea(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),o=s[n];return o||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){ea(n=>{const{drag:s}=this.getProps();if(!Su(n,s,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(n);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[n],p=c.get()||0;c.set(t[n]-an(u,f,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!ro(n)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ea(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const p=f.get();o[u]=L2({min:p,max:p},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),ea(u=>{if(!Su(u,t,null))return;const f=this.getAxisMotionValue(u),{min:p,max:d}=this.constraints[u];f.set(an(p,d,o[u]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;F2.set(this.visualElement,this);const t=this.visualElement.current,n=Il(t,"pointerdown",d=>{const{drag:g,dragListener:v=!0}=this.getProps(),_=d.target,y=_!==t&&MC(_);g&&v&&!y&&this.start(d)});let s;const o=()=>{const{dragConstraints:d}=this.getProps();ro(d)&&d.current&&(this.constraints=this.resolveRefConstraints(),s||(s=I2(t,d.current,()=>this.scalePositionWithinConstraints())))},{projection:c}=this.visualElement,u=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Le.read(o);const f=ql(window,"resize",()=>this.scalePositionWithinConstraints()),p=c.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:g})=>{this.isDragging&&g&&(ea(v=>{const _=this.getAxisMotionValue(v);_&&(this.originPoint[v]+=d[v].translate,_.set(_.get()+d[v].translate))}),this.visualElement.render())}));return()=>{f(),n(),u(),p&&p(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:u=sm,dragMomentum:f=!0}=t;return{...t,drag:n,dragDirectionLock:s,dragPropagation:o,dragConstraints:c,dragElastic:u,dragMomentum:f}}}function qy(i){let t=!0;return()=>{if(t){t=!1;return}i()}}function I2(i,t,n){const s=tm(i,qy(n)),o=tm(t,qy(n));return()=>{s(),o()}}function Su(i,t,n){return(t===!0||t===i)&&(n===null||n===i)}function z2(i,t=10){let n=null;return Math.abs(i.y)>t?n="y":Math.abs(i.x)>t&&(n="x"),n}class V2 extends Cs{constructor(t){super(t),this.removeGroupControls=ni,this.removeListeners=ni,this.controls=new B2(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ni}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Zd=i=>(t,n)=>{i&&Le.update(()=>i(t,n),!1,!0)};class H2 extends Cs{constructor(){super(...arguments),this.removePointerDownListener=ni}onPointerDown(t){this.session=new kb(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Gb(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:Zd(t),onStart:Zd(n),onMove:Zd(s),onEnd:(c,u)=>{delete this.session,o&&Le.postRender(()=>o(c,u))}}}mount(){this.removePointerDownListener=Il(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Qd=!1;class G2 extends Lt.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s,layoutId:o}=this.props,{projection:c}=t;c&&(n.group&&n.group.add(c),s&&s.register&&o&&s.register(c),Qd&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),$u.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:s,drag:o,isPresent:c}=this.props,{projection:u}=s;return u&&(u.isPresent=c,t.layoutDependency!==n&&u.setOptions({...u.options,layoutDependency:n}),Qd=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==c?u.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?u.promote():u.relegate()||Le.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Ag.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:o}=t;Qd=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function jb(i){const[t,n]=KR(),s=Lt.useContext(rM);return B.jsx(G2,{...i,layoutGroup:s,switchLayoutGroup:Lt.useContext(Vb),isPresent:t,safeToRemove:n})}const k2={pan:{Feature:H2},drag:{Feature:V2,ProjectionNode:Lb,MeasureLayout:jb}};function Yy(i,t,n){const{props:s}=i;i.animationState&&s.whileHover&&i.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,c=s[o];c&&Le.postRender(()=>c(t,ic(t)))}class X2 extends Cs{mount(){const{current:t}=this.node;t&&(this.unmount=_C(t,(n,s)=>(Yy(this.node,s,"Start"),o=>Yy(this.node,o,"End"))))}unmount(){}}class j2 extends Cs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=tc(ql(this.node.current,"focus",()=>this.onFocus()),ql(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ky(i,t,n){const{props:s}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&s.whileTap&&i.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),c=s[o];c&&Le.postRender(()=>c(t,ic(t)))}class W2 extends Cs{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:s}=this.node.props;this.unmount=EC(t,(o,c)=>(Ky(this.node,c,"Start"),(u,{success:f})=>Ky(this.node,u,f?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:s?.tap===!1})}unmount(){}}const rm=new WeakMap,Jd=new WeakMap,q2=i=>{const t=rm.get(i.target);t&&t(i)},Y2=i=>{i.forEach(q2)};function K2({root:i,...t}){const n=i||document;Jd.has(n)||Jd.set(n,{});const s=Jd.get(n),o=JSON.stringify(t);return s[o]||(s[o]=new IntersectionObserver(Y2,{root:i,...t})),s[o]}function Z2(i,t,n){const s=K2(t);return rm.set(i,n),s.observe(i),()=>{rm.delete(i),s.unobserve(i)}}const Q2={some:0,all:1};class J2 extends Cs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:o="some",once:c}=t,u={root:n?n.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:Q2[o]},f=p=>{const{isIntersecting:d}=p;if(this.isInView===d||(this.isInView=d,c&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),_=d?g:v;_&&_(p)};return Z2(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some($2(t,n))&&this.startObserver()}unmount(){}}function $2({viewport:i={}},{viewport:t={}}={}){return n=>i[n]!==t[n]}const t3={inView:{Feature:J2},tap:{Feature:W2},focus:{Feature:j2},hover:{Feature:X2}},e3={layout:{ProjectionNode:Lb,MeasureLayout:jb}},n3={...T2,...t3,...k2,...e3},nn=y2(n3,S2);function Wb(i,t,n){Lt.useInsertionEffect(()=>i.on(t,n),[i,t,n])}const i3=50,Zy=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),a3=()=>({time:0,x:Zy(),y:Zy()}),s3={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Qy(i,t,n,s){const o=n[t],{length:c,position:u}=s3[t],f=o.current,p=n.time;o.current=i[`scroll${u}`],o.scrollLength=i[`scroll${c}`]-i[`client${c}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=vo(0,o.scrollLength,o.current);const d=s-p;o.velocity=d>i3?0:lg(o.current-f,d)}function r3(i,t,n){Qy(i,"x",t,n),Qy(i,"y",t,n),t.time=n}function o3(i,t){const n={x:0,y:0};let s=i;for(;s&&s!==t;)if(nb(s))n.x+=s.offsetLeft,n.y+=s.offsetTop,s=s.offsetParent;else if(s.tagName==="svg"){const o=s.getBoundingClientRect();s=s.parentElement;const c=s.getBoundingClientRect();n.x+=o.left-c.left,n.y+=o.top-c.top}else if(s instanceof SVGGraphicsElement){const{x:o,y:c}=s.getBBox();n.x+=o,n.y+=c;let u=null,f=s.parentNode;for(;!u;)f.tagName==="svg"&&(u=f),f=s.parentNode;s=u}else break;return n}const om={start:0,center:.5,end:1};function Jy(i,t,n=0){let s=0;if(i in om&&(i=om[i]),typeof i=="string"){const o=parseFloat(i);i.endsWith("px")?s=o:i.endsWith("%")?i=o/100:i.endsWith("vw")?s=o/100*document.documentElement.clientWidth:i.endsWith("vh")?s=o/100*document.documentElement.clientHeight:i=o}return typeof i=="number"&&(s=t*i),n+s}const l3=[0,0];function c3(i,t,n,s){let o=Array.isArray(i)?i:l3,c=0,u=0;return typeof i=="number"?o=[i,i]:typeof i=="string"&&(i=i.trim(),i.includes(" ")?o=i.split(" "):o=[i,om[i]?i:"0"]),c=Jy(o[0],n,s),u=Jy(o[1],t),c-u}const u3={All:[[0,0],[1,1]]},f3={x:0,y:0};function h3(i){return"getBBox"in i&&i.tagName!=="svg"?i.getBBox():{width:i.clientWidth,height:i.clientHeight}}function d3(i,t,n){const{offset:s=u3.All}=n,{target:o=i,axis:c="y"}=n,u=c==="y"?"height":"width",f=o!==i?o3(o,i):f3,p=o===i?{width:i.scrollWidth,height:i.scrollHeight}:h3(o),d={width:i.clientWidth,height:i.clientHeight};t[c].offset.length=0;let g=!t[c].interpolate;const v=s.length;for(let _=0;_<v;_++){const y=c3(s[_],d[u],p[u],f[c]);!g&&y!==t[c].interpolatorOffsets[_]&&(g=!0),t[c].offset[_]=y}g&&(t[c].interpolate=gg(t[c].offset,LM(s),{clamp:!1}),t[c].interpolatorOffsets=[...t[c].offset]),t[c].progress=Wi(0,1,t[c].interpolate(t[c].current))}function p3(i,t=i,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==i){let s=t;for(;s&&s!==i;)n.x.targetOffset+=s.offsetLeft,n.y.targetOffset+=s.offsetTop,s=s.offsetParent}n.x.targetLength=t===i?t.scrollWidth:t.clientWidth,n.y.targetLength=t===i?t.scrollHeight:t.clientHeight,n.x.containerLength=i.clientWidth,n.y.containerLength=i.clientHeight}function m3(i,t,n,s={}){return{measure:o=>{p3(i,s.target,n),r3(i,n,o),(s.offset||s.target)&&d3(i,n,s)},notify:()=>t(n)}}const jr=new WeakMap,$y=new WeakMap,$d=new WeakMap,tS=new WeakMap,Mu=new WeakMap,eS=i=>i===document.scrollingElement?window:i;function qb(i,{container:t=document.scrollingElement,trackContentSize:n=!1,...s}={}){if(!t)return ni;let o=$d.get(t);o||(o=new Set,$d.set(t,o));const c=a3(),u=m3(t,i,c,s);if(o.add(u),!jr.has(t)){const p=()=>{for(const _ of o)_.measure(wn.timestamp);Le.preUpdate(d)},d=()=>{for(const _ of o)_.notify()},g=()=>Le.read(p);jr.set(t,g);const v=eS(t);window.addEventListener("resize",g,{passive:!0}),t!==document.documentElement&&$y.set(t,tm(t,g)),v.addEventListener("scroll",g,{passive:!0}),g()}if(n&&!Mu.has(t)){const p=jr.get(t),d={width:t.scrollWidth,height:t.scrollHeight};tS.set(t,d);const g=()=>{const _=t.scrollWidth,y=t.scrollHeight;(d.width!==_||d.height!==y)&&(p(),d.width=_,d.height=y)},v=Le.read(g,!0);Mu.set(t,v)}const f=jr.get(t);return Le.read(f,!1,!0),()=>{Ri(f);const p=$d.get(t);if(!p||(p.delete(u),p.size))return;const d=jr.get(t);jr.delete(t),d&&(eS(t).removeEventListener("scroll",d),$y.get(t)?.(),window.removeEventListener("resize",d));const g=Mu.get(t);g&&(Ri(g),Mu.delete(t)),tS.delete(t)}}const nS=new Map;function g3(i){const t={value:0},n=qb(s=>{t.value=s[i.axis].progress*100},i);return{currentTime:t,cancel:n}}function Yb({source:i,container:t,...n}){const{axis:s}=n;i&&(t=i);const o=nS.get(t)??new Map;nS.set(t,o);const c=n.target??"self",u=o.get(c)??{},f=s+(n.offset??[]).join(",");return u[f]||(u[f]=!n.target&&BM()?new ScrollTimeline({source:t,axis:s}):g3({container:t,...n})),u[f]}function v3(i,t){const n=Yb(t);return i.attachTimeline({timeline:t.target?void 0:n,observe:s=>(s.pause(),ob(o=>{s.time=s.iterationDuration*o},n))})}function _3(i){return i.length===2}function x3(i,t){return _3(i)?qb(n=>{i(n[t.axis].progress,n)},t):ob(i,Yb(t))}function tp(i,{axis:t="y",container:n=document.scrollingElement,...s}={}){if(!n)return ni;const o={axis:t,container:n,...s};return typeof i=="function"?x3(i,o):v3(i,o)}const y3=()=>({scrollX:Gi(0),scrollY:Gi(0),scrollXProgress:Gi(0),scrollYProgress:Gi(0)}),bu=i=>i?!i.current:!1;function mf({container:i,target:t,...n}={}){const s=go(y3);s.scrollXProgress.accelerate={factory:f=>tp(f,{...n,axis:"x",container:i?.current||void 0,target:t?.current||void 0}),times:[0,1],keyframes:[0,1],ease:f=>f,duration:1},s.scrollYProgress.accelerate={factory:f=>tp(f,{...n,axis:"y",container:i?.current||void 0,target:t?.current||void 0}),times:[0,1],keyframes:[0,1],ease:f=>f,duration:1};const o=Lt.useRef(null),c=Lt.useRef(!1),u=Lt.useCallback(()=>(o.current=tp((f,{x:p,y:d})=>{s.scrollX.set(p.current),s.scrollXProgress.set(p.progress),s.scrollY.set(d.current),s.scrollYProgress.set(d.progress)},{...n,container:i?.current||void 0,target:t?.current||void 0}),()=>{o.current?.()}),[i,t,JSON.stringify(n.offset)]);return ig(()=>{if(c.current=!1,bu(i)||bu(t)){c.current=!0;return}else return u()},[u]),Lt.useEffect(()=>{if(c.current)return kl(!bu(i)),kl(!bu(t)),u()},[u]),s}function S3(i){const t=go(()=>Gi(i)),{isStatic:n}=Lt.useContext(Lg);if(n){const[,s]=Lt.useState(i);Lt.useEffect(()=>t.on("change",s),[])}return t}function Kb(i,t){const n=S3(t()),s=()=>n.set(t());return s(),ig(()=>{const o=()=>Le.preRender(s,!1,!0),c=i.map(u=>u.on("change",o));return()=>{c.forEach(u=>u()),Ri(s)}}),n}function M3(i){Fl.current=[],i();const t=Kb(Fl.current,i);return Fl.current=void 0,t}function Ce(i,t,n,s){if(typeof i=="function")return M3(i);if(n!==void 0&&!Array.isArray(n)&&typeof t!="function")return b3(i,t,n,s);const u=typeof t=="function"?t:PC(t,n,s),f=Array.isArray(i)?iS(i,u):iS([i],([d])=>u(d)),p=Array.isArray(i)?void 0:i.accelerate;return p&&!p.isTransformed&&typeof t!="function"&&Array.isArray(n)&&s?.clamp!==!1&&(f.accelerate={...p,times:t,keyframes:n,isTransformed:!0}),f}function iS(i,t){const n=go(()=>[]);return Kb(i,()=>{n.length=0;const s=i.length;for(let o=0;o<s;o++)n[o]=i[o].get();return t(n)})}function b3(i,t,n,s){const o=go(()=>Object.keys(n)),c=go(()=>({}));for(const u of o)c[u]=Ce(i,t,n[u],s);return c}const E3=()=>{const{scrollY:i}=mf(),[t,n]=Lt.useState(!1),[s,o]=Lt.useState(!1),c=[0,600],u=Ce(i,c,[1,0]),f=Ce(i,c,["auto",0]),p=Ce(i,c,["12px","0px"]),d=Ce(i,c,[1,0]),g=Ce(i,c,[1,.9]),v=Ce(i,[400,600],[0,1]),_=Ce(i,[400,600],[.8,1]),y=()=>n(!t);return B.jsxs("nav",{className:"fixed top-12 left-0 right-0 z-[100] flex justify-between items-center px-4 md:px-20 overflow-visible",children:[B.jsxs("div",{className:"bg-white shadow-lg rounded-full px-5 py-3 flex items-center",children:[B.jsx("img",{src:gA,alt:"Rakindus Logo",className:"h-8 w-auto md:h-10"}),B.jsx(nn.span,{style:{opacity:u,width:f,paddingLeft:p},className:"text-[#07308C] text-lg md:text-xl font-bold tracking-tight font-sans uppercase overflow-hidden whitespace-nowrap",children:"Rakindus"})]}),B.jsxs("div",{className:"hidden md:flex bg-white shadow-lg rounded-full px-2 py-2 items-center transition-all duration-300 space-x-1 md:space-x-2",children:[B.jsx(nn.div,{style:{opacity:t?1:d,scale:t?1:g,width:t?"auto":f,display:"flex",alignItems:"center",overflow:"hidden"},transition:{duration:10,ease:"easeInOut"},className:"flex items-center space-x-1 md:space-x-2",children:["Industries","Capabilities","Insights","About us"].map(b=>B.jsx("a",{href:"#",className:"px-4 py-2 text-[#2C2C2C] text-sm font-semibold uppercase tracking-wide font-sans hover:bg-white/20 rounded-full transition-colors whitespace-nowrap",children:b},b))}),B.jsx(nn.button,{style:{opacity:t?1:v,scale:t?1:_,display:"block"},onClick:y,className:"bg-white/20 hover:bg-white/40 text-[#07308C] p-3 rounded-full transition-colors mr-2 w-[44px] h-[44px] flex items-center justify-center",children:t?B.jsx(Fx,{size:20}):B.jsx(nA,{size:20})}),B.jsx("button",{className:"bg-[#07308C] text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-blue-800 transition-colors whitespace-nowrap",children:"Work with us"})]}),B.jsx("div",{className:"md:hidden absolute right-4 top-3 z-[110]",children:B.jsx("button",{onClick:()=>o(!s),className:"text-gray-900 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors",children:s?B.jsx(Fx,{size:24}):B.jsx(fA,{size:24})})}),s&&B.jsx(nn.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"fixed inset-0 z-[90] bg-white flex flex-col pt-24 px-8",children:B.jsxs("div",{className:"flex flex-col space-y-6",children:[["Industries","Capabilities","Insights","About us"].map(b=>B.jsx("a",{href:"#",className:"text-2xl font-semibold text-gray-900 uppercase tracking-tight",onClick:()=>o(!1),children:b},b)),B.jsx("div",{className:"h-px bg-gray-100 w-full my-6"}),B.jsx("button",{className:"bg-[#07308C] text-white px-6 py-4 rounded-xl text-lg font-semibold uppercase tracking-wide hover:bg-blue-800 transition-colors w-full",children:"Work with us"})]})})]})},Eu=(i,t=60,n=0)=>{const[s,o]=Lt.useState(""),[c,u]=Lt.useState(!1);return Lt.useEffect(()=>{const f=setTimeout(()=>{let p=0;const d=setInterval(()=>{p++,o(i.slice(0,p)),p>=i.length&&(clearInterval(d),u(!0))},t);return()=>clearInterval(d)},n);return()=>clearTimeout(f)},[i,t,n]),{displayedText:s,isComplete:c}},Tu=({visible:i})=>i?B.jsx("span",{className:"inline-block w-[3px] h-[0.9em] bg-white ml-1 animate-pulse align-middle"}):null,T3=()=>{const i="Execution built in",t="Rakindus embeds dependable operating capacity into growing companies so strategy moves faster without adding organizational complexity",n="More output - Less overhead",s="Supporting growth-stage teams across the Globe",o=Eu(i,50,400),c=Eu(t,30,400+i.length*50+300),u=Eu(n,45,400+i.length*50+300+t.length*30+300),f=Eu(s,30,400+i.length*50+300+t.length*30+300+n.length*45+300),p=o.displayedText.split(" "),d=p.slice(0,1).join(" "),g=p.slice(1).join(" ");return B.jsx("section",{className:"relative h-screen min-h-[700px] md:min-h-[900px] w-full overflow-hidden font-sans",children:B.jsxs("div",{className:"absolute inset-0 z-20 w-full px-6 md:px-20 pt-32 md:pt-48 pb-8 md:pb-12 flex flex-col justify-between",children:[B.jsxs("div",{className:"max-w-4xl",children:[B.jsxs("h1",{className:"text-white text-[42px] md:text-[96px] font-semibold uppercase leading-[1.1] mb-8 md:mb-12",children:[d,g&&B.jsxs(B.Fragment,{children:[B.jsx("br",{}),g]}),B.jsx(Tu,{visible:!o.isComplete})]}),B.jsxs("p",{className:"text-white text-xl md:text-[24px] font-normal leading-relaxed max-w-2xl min-h-[3em]",children:[c.displayedText,B.jsx(Tu,{visible:o.isComplete&&!c.isComplete})]})]}),B.jsxs("div",{className:"flex flex-col items-start md:items-end text-left md:text-right space-y-6 md:space-y-8 mt-8 md:mt-0 self-start md:self-end",children:[B.jsxs("div",{style:{visibility:c.isComplete?"visible":"hidden"},children:[B.jsxs("h2",{className:"text-white text-[22px] md:text-[36px] font-semibold uppercase tracking-tight mb-2",children:[u.displayedText,B.jsx(Tu,{visible:c.isComplete&&!u.isComplete})]}),B.jsxs("p",{className:"text-white text-lg md:text-[24px] font-normal",children:[f.displayedText,B.jsx(Tu,{visible:u.isComplete&&!f.isComplete})]})]}),B.jsxs("div",{style:{visibility:f.isComplete?"visible":"hidden"},className:"flex items-center gap-3 bg-white pl-6 pr-2 py-2 rounded-xl",children:[B.jsx("span",{className:"text-black text-sm font-medium uppercase tracking-wide",children:"Start the conversation"}),B.jsx("button",{className:"bg-[#07308C] w-[52px] h-[52px] rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors",children:B.jsx(xf,{size:24})})]})]})]})})},zl=["Companies rarely slow down because of strategy.","They slow down because teams can't keep up.","Hiring takes months.","Priorities stack up.","Leaders get pulled into operations instead of decisions.","The constraint isn't ambition — it's capacity."],A3=[{text:"Not advisors.",color:"text-white/40"},{text:"Not agencies.",color:"text-white/40"},{text:"Not vendors.",color:"text-white/40"},{text:"An embedded extension of your team.",color:"text-white font-medium text-5xl md:text-7xl font-sans tracking-tight leading-[1.1]"}],w3=[{icon:dA,title:"Execution and Operation Management",description:"Embedded ownership of day-to-day execution"},{icon:mA,title:"Revenue & Growth Enablement",description:"Increased sales capacity and go-to-market efficiency"},{icon:sA,title:"Technology & Product Delivery",description:"Extend engineering and delivery throughput"},{icon:oA,title:"Cost & Performance Transformation",description:"Structural cost reduction and operational efficiency"},{icon:cA,title:"Operating Model & Capability Design",description:"Scalable team structure, process and workflows"}],C3=[{title:"SPEED",desc:"Launch new functions in weeks, not quarters"},{title:"SCALE",desc:"Increase throughput without increasing headcount"},{title:"STABILITY",desc:"Stabilize delivery during rapid growth"},{title:"EFFICIENCY",desc:"Improve cost efficiency while maintaining quality"},{title:"FOCUS",desc:"Keep leadership focused on strategy, not staffing"}],R3=["Embedded ownership of day-to-day execution","Increased sales capacity and go-to-market efficiency","Extend engineering and delivery throughput","Structural cost reduction and operational efficiency","Scalable team structure, process and workflows","Embedded ownership of day-to-day execution"],D3=({scrollYProgress:i})=>{const[t,n]=Lt.useState(0);Wb(i,"change",o=>{const c=Math.min(Math.floor(o/.25*zl.length),zl.length-1);n(c)});const s=Ce(i,[0,.25],[0,1]);return B.jsxs(B.Fragment,{children:[B.jsx("div",{className:"relative w-full h-[1px] bg-white/10 mb-20 md:mb-32 mt-32 md:mt-40",children:B.jsx(nn.div,{style:{scaleX:s},className:"absolute top-0 left-0 h-full w-full bg-white origin-left z-20"})}),B.jsxs("div",{className:"flex flex-col md:flex-row justify-between md:items-end w-full mb-8 md:mb-24 gap-4 md:gap-0",children:[B.jsx("h3",{className:"text-3xl md:text-8xl font-semibold text-white uppercase tracking-tighter leading-none",children:"The Constraint"}),B.jsxs("div",{className:"self-start md:self-auto relative flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-md overflow-hidden mb-1",children:[B.jsxs("span",{className:"relative z-10 text-sm font-semibold text-white",children:["0",t+1]}),B.jsx("span",{className:"relative z-10 text-xs text-white/40",children:"/"}),B.jsxs("span",{className:"relative z-10 text-xs text-white/40",children:["0",zl.length]})]})]})]})},U3=({scrollYProgress:i})=>B.jsx("div",{className:"relative h-[400px] w-full",children:zl.map((t,n)=>B.jsx(N3,{text:t,index:n,scrollYProgress:i,total:zl.length},n))}),N3=({text:i,index:t,scrollYProgress:n,total:s})=>{const o=t/s*.25,c=(t+1)/s*.25,u=Ce(n,[o,o+.003,c-.003,c],[0,1,1,0]);return B.jsx(nn.p,{style:{opacity:u},className:"absolute top-1/2 -translate-y-1/2 left-0 w-full text-2xl md:text-3xl lg:text-4xl text-white/80 font-light leading-relaxed",children:i})},L3=""+new URL("4779866-hd_1920_1080_30fps-E57PGk5L.mp4",import.meta.url).href,P3=(i=768)=>{const[t,n]=Lt.useState(!1);return Lt.useEffect(()=>{const s=()=>{n(window.innerWidth<i)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[i]),t},O3=Lt.memo(()=>B.jsxs("div",{className:"absolute inset-0 w-full h-full",children:[B.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"absolute inset-0 w-full h-full object-cover",children:B.jsx("source",{src:L3,type:"video/mp4"})}),B.jsx("div",{className:"absolute inset-0 bg-blue-950/60 pointer-events-none"})]})),F3=({start:i,roleLines:t})=>{const[n,s]=Lt.useState(0),o=t.map(u=>u.text).join(`
`);Lt.useEffect(()=>{if(!i)return;let u=0;const f=setInterval(()=>{u++,s(u),u>=o.length&&clearInterval(f)},50);return()=>clearInterval(f)},[i,o.length]);let c=0;return B.jsx(B.Fragment,{children:t.map((u,f)=>{const p=c;c+=u.text.length+1;const d=Math.max(0,Math.min(u.text.length,n-p)),g=u.text.slice(0,d),v=n>=p&&n<p+u.text.length,y=n>=p+u.text.length&&f<3?"line-through decoration-gray-400/50 decoration-2":"";return B.jsxs("div",{className:`${u.color} ${y} relative min-h-[1.2em]`,children:[g,v&&B.jsx("span",{className:"inline-block w-[2px] h-[1em] bg-current ml-[1px] animate-pulse align-middle"})]},f)})})},B3=({scrollYProgress:i})=>{const n=P3()?"5%":"35%",s=Ce(i,[.45,.48,.51,.77,.8],["100%","75%","2%","2%","0%"]),o=Ce(i,[.45,.48,.51,.77,.8],[n,n,"2%","2%","0%"]),c=Ce(i,[.45,.48,.51,.77,.8],[n,n,"2%","2%","0%"]),u=Ce(i,[.45,.48,.51,.77,.8],["-10%","5%","2%","2%","0%"]),f=Ce(i,[.45,.51,.77,.8,.96,1],["12px","20px","20px","0px","0px","80px"]),p=Ce(i,[.45,.51,.77,.8],["12px","20px","20px","0px"]),d=Ce(i,[0,1],[1,1]),[g,v]=Lt.useState(!1);Wb(i,"change",R=>{R>=.51&&!g&&v(!0)});const _=Ce(i,[.56,.58],[1,0]),y=Ce(i,R=>R>.59?"hidden":"visible"),b=Ce(i,[.59,.595,.63,.635],[0,1,1,0]),T=Ce(i,[.635,.64,.67,.675],[0,1,1,0]),M=Ce(i,[.675,.68,.71,.715],[0,1,1,0]),x=Ce(i,[.71,.73,.82,.85],[0,1,1,0]),D=Ce(i,R=>R>.71&&R<.85?"visible":"hidden");return B.jsxs(nn.div,{style:{top:s,left:o,right:c,bottom:u,opacity:d,borderTopLeftRadius:p,borderTopRightRadius:p,borderBottomLeftRadius:f,borderBottomRightRadius:f},className:"absolute z-[70] overflow-hidden will-change-[top,left,right,bottom,border-radius]",children:[B.jsx(O3,{}),B.jsx(nn.div,{style:{opacity:g?_:0,visibility:y},className:"w-full h-full flex flex-col justify-start pt-24 md:pt-32 relative z-10",children:B.jsxs("div",{className:"max-w-none mx-auto px-8 md:px-20 w-full",children:[B.jsx("div",{className:"flex justify-between items-end w-full",children:B.jsx("h3",{className:"text-4xl md:text-9xl font-semibold text-white uppercase tracking-tighter leading-none",children:"Our Role"})}),B.jsxs("div",{className:"grid md:grid-cols-12 gap-12 md:gap-24 items-start pt-8 md:pt-16",children:[B.jsxs("div",{className:"col-span-12 md:col-span-7",children:[B.jsxs("h2",{className:"text-2xl md:text-7xl font-sans font-medium leading-[1.1] text-white/90 tracking-tight max-w-4xl",children:["Rakindus removes that ",B.jsx("span",{className:"text-white",children:"constraint."})]}),B.jsx("p",{className:"text-xl text-gray-200 leading-relaxed mt-8 mb-6 max-w-2xl",children:"We design and run dedicated execution capability on your behalf — fully integrated, fully managed, and accountable to outcomes."})]}),B.jsx("div",{className:"col-span-12 md:col-span-5 flex flex-col justify-start pt-8 md:pt-16",children:B.jsx("div",{className:"space-y-0.5 text-xl md:text-5xl lg:text-6xl font-light",children:B.jsx(F3,{start:g,roleLines:A3})})})]})]})}),B.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[B.jsx(nn.h1,{style:{opacity:b},className:"absolute text-[10vw] md:text-[12vw] font-bold text-white uppercase tracking-tighter leading-none text-center",children:"Quiet."}),B.jsx(nn.h1,{style:{opacity:T},className:"absolute text-[10vw] md:text-[12vw] font-bold text-white uppercase tracking-tighter leading-none text-center",children:"Reliable."}),B.jsx(nn.h1,{style:{opacity:M},className:"absolute text-[10vw] md:text-[12vw] font-bold text-white uppercase tracking-tighter leading-none text-center",children:"End-to-end."})]}),B.jsx(nn.div,{style:{opacity:x,visibility:D},className:"absolute inset-0 w-full h-full z-[80] pointer-events-none bg-black md:bg-transparent",children:B.jsx("div",{className:"h-full w-full max-w-none mx-auto px-6 md:px-16 lg:px-24 flex items-start pt-32 md:pt-48",children:B.jsxs("div",{className:"w-full grid md:grid-cols-2 gap-12 lg:gap-24 items-center md:items-stretch h-[80vh] md:h-auto pointer-events-auto",children:[B.jsx("div",{className:"flex flex-col justify-between h-full md:min-h-[600px] border-r border-white/10 pr-8 md:pr-12",children:B.jsxs("div",{className:"space-y-8",children:[B.jsx("h2",{className:"text-2xl md:text-5xl lg:text-6xl font-bold uppercase leading-[0.9] tracking-tight text-white",children:"What This Changes"}),B.jsx("h2",{className:"text-xl md:text-3xl lg:text-4xl font-semibold uppercase leading-[0.9] tracking-tight text-white mt-32 md:mt-80",children:"Structural leverage for operators."}),B.jsx("p",{className:"text-lg text-white/60 max-w-md font-light leading-relaxed mt-4",children:"Execution stops being the limiting factor."})]})}),B.jsx("div",{className:"flex flex-col justify-center gap-6",children:C3.map((R,U)=>B.jsxs(nn.div,{className:"group relative border-b border-white/10 py-6 hover:border-white/40 transition-colors cursor-default",children:[B.jsx("div",{className:"flex items-center justify-between",children:B.jsx("div",{className:"flex items-center gap-6",children:B.jsx("h3",{className:"text-2xl md:text-3xl font-bold uppercase text-white tracking-tight group-hover:tracking-normal transition-all duration-300",children:R.title})})}),B.jsx("div",{className:"mt-4 pl-0 md:pl-0",children:B.jsx("p",{className:"text-sm md:text-base text-white/60 font-light leading-relaxed",children:R.desc})})]},U))})]})})})]})},I3=({scrollYProgress:i})=>{const t=Ce(i,[.27,.275,.325,.33],[0,1,1,0]),n=Ce(i,[.33,.335,.385,.39],[0,1,1,0]),s=Ce(i,[.39,.395,.445,.45],[0,1,1,0]);return B.jsxs("div",{className:"absolute inset-0 flex items-center justify-center z-50 pointer-events-none",children:[B.jsx(nn.h1,{style:{opacity:t},className:"absolute text-[12vw] md:text-[20vw] font-bold text-white uppercase tracking-tighter leading-none text-center drop-shadow-2xl",children:"Capacity"}),B.jsx(nn.h1,{style:{opacity:n},className:"absolute text-[10vw] md:text-[15vw] font-bold text-white uppercase tracking-tighter leading-none text-center drop-shadow-2xl px-4",children:"Not Ambition"}),B.jsx(nn.h1,{style:{opacity:s},className:"absolute text-[7vw] md:text-[12vw] font-bold text-white uppercase tracking-tighter leading-none text-center drop-shadow-2xl px-4",children:"Becomes The Constraint."})]})},z3=({scrollYProgress:i})=>{const t=Ce(i,[.8,.82],[0,1]);return B.jsx(nn.div,{style:{opacity:t},className:"absolute inset-0 w-full h-full flex flex-col justify-start pt-14 md:pt-28 z-[999] overflow-y-auto scrollbar-hide",children:B.jsxs("div",{className:"relative z-20 max-w-none mx-auto px-6 md:px-16 lg:px-24 w-full min-h-full flex flex-col pb-24",children:[B.jsxs(nn.div,{style:{opacity:t},className:"flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-8 mb-4 md:mb-16 shrink-0",children:[B.jsxs("h2",{className:"text-3xl md:text-[10rem] font-bold text-white leading-[0.9] tracking-tighter",children:["Capabilities",B.jsx("br",{}),"Snapshot"]}),B.jsx(nn.div,{style:{opacity:t},className:"md:text-right md:max-w-sm lg:max-w-md shrink-0",children:B.jsx("p",{className:"text-xs md:text-2xl text-white/50 uppercase tracking-widest font-medium mb-0 md:mb-4",children:"How we support operators"})})]}),B.jsxs("div",{className:"w-full flex-1 flex flex-col justify-start md:justify-center",children:[w3.map((n,s)=>B.jsxs(nn.div,{style:{opacity:t},className:"group grid grid-cols-12 items-start border-t border-white/15 py-2 md:py-10 transition-colors duration-300 hover:bg-white/5 cursor-default gap-2 md:gap-4",children:[B.jsx("div",{className:"col-span-12 md:col-span-1 mb-0 md:mb-0",children:B.jsx("span",{className:"text-xs md:text-lg text-white/40 font-light",children:String(s+1).padStart(2,"0")})}),B.jsx("div",{className:"col-span-12 md:col-span-5 mb-0 md:mb-0",children:B.jsx("span",{className:"text-sm md:text-xl font-bold text-white tracking-tight block",children:n.title})}),B.jsx("div",{className:"col-span-12 md:col-span-6",children:B.jsx("span",{className:"text-xs md:text-base text-white/50 leading-relaxed block",children:n.description})})]},s)),B.jsx("div",{className:"border-t border-white/15"})]}),B.jsx(nn.div,{style:{opacity:t},className:"mt-4 md:mt-16 shrink-0 pb-8 md:pb-0",children:B.jsxs("a",{href:"#",className:"inline-flex items-center gap-2 text-white text-base md:text-xl font-medium hover:text-white/80 transition-colors duration-300 group",children:["Explore capabilities",B.jsx("span",{className:"inline-block transition-transform duration-300 group-hover:translate-x-1",children:"→"})]})}),B.jsx(nn.div,{style:{opacity:t},className:"relative w-full overflow-hidden border-t border-b border-white/20 py-3 mt-6 md:mt-8 hidden md:block",children:B.jsx("div",{className:"flex animate-marquee whitespace-nowrap gap-16",children:R3.map((n,s)=>B.jsx("span",{className:"text-sm md:text-base text-white/60 tracking-wider uppercase font-medium",children:n},s))})})]})})},V3=()=>{const i=Lt.useRef(null),{scrollYProgress:t}=mf({target:i,offset:["start start","end end"]}),n=Ce(t,[0,.25,.27],[1,1,0]),s=Ce(t,o=>o>.29?"hidden":"visible");return B.jsx("section",{ref:i,className:"relative h-[3500vh]",style:{position:"relative"},children:B.jsxs("div",{className:"sticky top-0 h-screen flex flex-col justify-center overflow-hidden",children:[B.jsx(nn.div,{style:{opacity:n,visibility:s},className:"relative w-full h-full flex flex-col justify-center",children:B.jsxs("div",{className:"relative max-w-none mx-auto px-8 md:px-20 w-full flex flex-col justify-center h-full",children:[B.jsx(D3,{scrollYProgress:t}),B.jsxs("div",{className:"grid md:grid-cols-12 gap-12 md:gap-24 items-center",children:[B.jsx("div",{className:"col-span-12 md:col-span-7",children:B.jsxs("h2",{className:"text-3xl md:text-7xl font-sans font-medium leading-[1.1] text-white/90 tracking-tight max-w-4xl",children:["Execution becomes the ",B.jsx("span",{className:"text-white",children:"bottleneck"})," in complex systems."]})}),B.jsx("div",{className:"col-span-12 md:col-span-5 relative flex flex-col justify-center z-10",children:B.jsx(U3,{scrollYProgress:t})})]})]})}),B.jsx(I3,{scrollYProgress:t}),B.jsx(B3,{scrollYProgress:t}),B.jsx(z3,{scrollYProgress:t})]})})};const Fg="182",H3=0,aS=1,G3=2,tf=1,k3=2,Nl=3,ws=0,ii=1,La=2,Oa=0,po=1,lm=2,sS=3,rS=4,X3=5,nr=100,j3=101,W3=102,q3=103,Y3=104,K3=200,Z3=201,Q3=202,J3=203,cm=204,um=205,$3=206,tD=207,eD=208,nD=209,iD=210,aD=211,sD=212,rD=213,oD=214,fm=0,hm=1,dm=2,_o=3,pm=4,mm=5,gm=6,vm=7,Zb=0,lD=1,cD=2,ra=0,Qb=1,Jb=2,$b=3,t1=4,e1=5,n1=6,i1=7,a1=300,lr=301,xo=302,_m=303,xm=304,bf=306,Yl=1e3,Pa=1001,ym=1002,In=1003,uD=1004,Au=1005,zn=1006,ep=1007,Es=1008,wi=1009,s1=1010,r1=1011,Kl=1012,Bg=1013,la=1014,ia=1015,za=1016,Ig=1017,zg=1018,Zl=1020,o1=35902,l1=35899,c1=1021,u1=1022,ki=1023,Va=1026,rr=1027,f1=1028,Vg=1029,yo=1030,Hg=1031,Gg=1033,ef=33776,nf=33777,af=33778,sf=33779,Sm=35840,Mm=35841,bm=35842,Em=35843,Tm=36196,Am=37492,wm=37496,Cm=37488,Rm=37489,Dm=37490,Um=37491,Nm=37808,Lm=37809,Pm=37810,Om=37811,Fm=37812,Bm=37813,Im=37814,zm=37815,Vm=37816,Hm=37817,Gm=37818,km=37819,Xm=37820,jm=37821,Wm=36492,qm=36494,Ym=36495,Km=36283,Zm=36284,Qm=36285,Jm=36286,fD=3200,hD=0,dD=1,Ms="",Ti="srgb",So="srgb-linear",gf="linear",je="srgb",Wr=7680,oS=519,pD=512,mD=513,gD=514,kg=515,vD=516,_D=517,Xg=518,xD=519,lS=35044,cS="300 es",aa=2e3,vf=2001;function h1(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _f(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yD(){const i=_f("canvas");return i.style.display="block",i}const uS={};function fS(...i){const t="THREE."+i.shift();console.log(t,...i)}function ue(...i){const t="THREE."+i.shift();console.warn(t,...i)}function Ne(...i){const t="THREE."+i.shift();console.error(t,...i)}function Ql(...i){const t=i.join(" ");t in uS||(uS[t]=!0,ue(...i))}function SD(i,t,n){return new Promise(function(s,o){function c(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}class wo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const o=s[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],np=Math.PI/180,$m=180/Math.PI;function ac(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[n&63|128]+Gn[n>>8&255]+"-"+Gn[n>>16&255]+Gn[n>>24&255]+Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]).toLowerCase()}function Te(i,t,n){return Math.max(t,Math.min(n,i))}function MD(i,t){return(i%t+t)%t}function ip(i,t,n){return(1-n)*i+n*t}function El(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(t=0,n=0){Ie.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,o=t.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Te(this.x,t.x,n.x),this.y=Te(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Te(this.x,t,n),this.y=Te(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Te(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*s-u*o+t.x,this.y=c*o+u*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sc{constructor(t=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=o}static slerpFlat(t,n,s,o,c,u,f){let p=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3],_=c[u+0],y=c[u+1],b=c[u+2],T=c[u+3];if(f<=0){t[n+0]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v;return}if(f>=1){t[n+0]=_,t[n+1]=y,t[n+2]=b,t[n+3]=T;return}if(v!==T||p!==_||d!==y||g!==b){let M=p*_+d*y+g*b+v*T;M<0&&(_=-_,y=-y,b=-b,T=-T,M=-M);let x=1-f;if(M<.9995){const D=Math.acos(M),R=Math.sin(D);x=Math.sin(x*D)/R,f=Math.sin(f*D)/R,p=p*x+_*f,d=d*x+y*f,g=g*x+b*f,v=v*x+T*f}else{p=p*x+_*f,d=d*x+y*f,g=g*x+b*f,v=v*x+T*f;const D=1/Math.sqrt(p*p+d*d+g*g+v*v);p*=D,d*=D,g*=D,v*=D}}t[n]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,s,o,c,u){const f=s[o],p=s[o+1],d=s[o+2],g=s[o+3],v=c[u],_=c[u+1],y=c[u+2],b=c[u+3];return t[n]=f*b+g*v+p*y-d*_,t[n+1]=p*b+g*_+d*v-f*y,t[n+2]=d*b+g*y+f*_-p*v,t[n+3]=g*b-f*v-p*_-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,o){return this._x=t,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,o=t._y,c=t._z,u=t._order,f=Math.cos,p=Math.sin,d=f(s/2),g=f(o/2),v=f(c/2),_=p(s/2),y=p(o/2),b=p(c/2);switch(u){case"XYZ":this._x=_*g*v+d*y*b,this._y=d*y*v-_*g*b,this._z=d*g*b+_*y*v,this._w=d*g*v-_*y*b;break;case"YXZ":this._x=_*g*v+d*y*b,this._y=d*y*v-_*g*b,this._z=d*g*b-_*y*v,this._w=d*g*v+_*y*b;break;case"ZXY":this._x=_*g*v-d*y*b,this._y=d*y*v+_*g*b,this._z=d*g*b+_*y*v,this._w=d*g*v-_*y*b;break;case"ZYX":this._x=_*g*v-d*y*b,this._y=d*y*v+_*g*b,this._z=d*g*b-_*y*v,this._w=d*g*v+_*y*b;break;case"YZX":this._x=_*g*v+d*y*b,this._y=d*y*v+_*g*b,this._z=d*g*b-_*y*v,this._w=d*g*v-_*y*b;break;case"XZY":this._x=_*g*v-d*y*b,this._y=d*y*v-_*g*b,this._z=d*g*b+_*y*v,this._w=d*g*v+_*y*b;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],o=n[4],c=n[8],u=n[1],f=n[5],p=n[9],d=n[2],g=n[6],v=n[10],_=s+f+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-d)*y,this._z=(u-o)*y}else if(s>f&&s>v){const y=2*Math.sqrt(1+s-f-v);this._w=(g-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+d)/y}else if(f>v){const y=2*Math.sqrt(1+f-s-v);this._w=(c-d)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-s-f);this._w=(u-o)/y,this._x=(c+d)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,o=t._y,c=t._z,u=t._w,f=n._x,p=n._y,d=n._z,g=n._w;return this._x=s*g+u*f+o*d-c*p,this._y=o*g+u*p+c*f-s*d,this._z=c*g+u*d+s*p-o*f,this._w=u*g-s*f-o*p-c*d,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let s=t._x,o=t._y,c=t._z,u=t._w,f=this.dot(t);f<0&&(s=-s,o=-o,c=-c,u=-u,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),g=Math.sin(d);p=Math.sin(p*d)/g,n=Math.sin(n*d)/g,this._x=this._x*p+s*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+s*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(t=0,n=0,s=0){ot.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(hS.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(hS.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*o,this.y=c[1]*n+c[4]*s+c[7]*o,this.z=c[2]*n+c[5]*s+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,s=this.y,o=this.z,c=t.x,u=t.y,f=t.z,p=t.w,d=2*(u*o-f*s),g=2*(f*n-c*o),v=2*(c*s-u*n);return this.x=n+p*d+u*v-f*g,this.y=s+p*g+f*d-c*v,this.z=o+p*v+c*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*o,this.y=c[1]*n+c[5]*s+c[9]*o,this.z=c[2]*n+c[6]*s+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Te(this.x,t.x,n.x),this.y=Te(this.y,t.y,n.y),this.z=Te(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Te(this.x,t,n),this.y=Te(this.y,t,n),this.z=Te(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,o=t.y,c=t.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*u-s*p,this.z=s*f-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ap.copy(this).projectOnVector(t),this.sub(ap)}reflect(t){return this.sub(ap.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Te(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return n*n+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const o=Math.sin(n)*t;return this.x=o*Math.sin(s),this.y=Math.cos(n)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ap=new ot,hS=new sc;class pe{constructor(t,n,s,o,c,u,f,p,d){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,f,p,d)}set(t,n,s,o,c,u,f,p,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=f,g[3]=n,g[4]=c,g[5]=p,g[6]=s,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],f=s[3],p=s[6],d=s[1],g=s[4],v=s[7],_=s[2],y=s[5],b=s[8],T=o[0],M=o[3],x=o[6],D=o[1],R=o[4],U=o[7],L=o[2],F=o[5],I=o[8];return c[0]=u*T+f*D+p*L,c[3]=u*M+f*R+p*F,c[6]=u*x+f*U+p*I,c[1]=d*T+g*D+v*L,c[4]=d*M+g*R+v*F,c[7]=d*x+g*U+v*I,c[2]=_*T+y*D+b*L,c[5]=_*M+y*R+b*F,c[8]=_*x+y*U+b*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8];return n*u*g-n*f*d-s*c*g+s*f*p+o*c*d-o*u*p}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8],v=g*u-f*d,_=f*p-g*c,y=d*c-u*p,b=n*v+s*_+o*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=v*T,t[1]=(o*d-g*s)*T,t[2]=(f*s-o*u)*T,t[3]=_*T,t[4]=(g*n-o*p)*T,t[5]=(o*c-f*n)*T,t[6]=y*T,t[7]=(s*p-d*n)*T,t[8]=(u*n-s*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,o,c,u,f){const p=Math.cos(c),d=Math.sin(c);return this.set(s*p,s*d,-s*(p*u+d*f)+u+t,-o*d,o*p,-o*(-d*u+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(sp.makeScale(t,n)),this}rotate(t){return this.premultiply(sp.makeRotation(-t)),this}translate(t,n){return this.premultiply(sp.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sp=new pe,dS=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pS=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bD(){const i={enabled:!0,workingColorSpace:So,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===je&&(o.r=Fa(o.r),o.g=Fa(o.g),o.b=Fa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===je&&(o.r=mo(o.r),o.g=mo(o.g),o.b=mo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ms?gf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Ql("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Ql("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[So]:{primaries:t,whitePoint:s,transfer:gf,toXYZ:dS,fromXYZ:pS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:t,whitePoint:s,transfer:je,toXYZ:dS,fromXYZ:pS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),i}const Re=bD();function Fa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qr;class ED{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{qr===void 0&&(qr=_f("canvas")),qr.width=t.width,qr.height=t.height;const o=qr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),s=qr}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=_f("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Fa(c[u]/255)*255;return s.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Fa(n[s]/255)*255):n[s]=Fa(n[s]);return{data:n,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let TD=0;class jg{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TD++}),this.uuid=ac(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(rp(o[u].image)):c.push(rp(o[u]))}else c=rp(o);s.url=c}return n||(t.images[this.uuid]=s),s}}function rp(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ED.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let AD=0;const op=new ot;class Mn extends wo{constructor(t=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,s=Pa,o=Pa,c=zn,u=Es,f=ki,p=wi,d=Mn.DEFAULT_ANISOTROPY,g=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AD++}),this.uuid=ac(),this.name="",this.source=new jg(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(op).x}get height(){return this.source.getSize(op).y}get depth(){return this.source.getSize(op).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ue(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==a1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yl:t.x=t.x-Math.floor(t.x);break;case Pa:t.x=t.x<0?0:1;break;case ym:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yl:t.y=t.y-Math.floor(t.y);break;case Pa:t.y=t.y<0?0:1;break;case ym:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=a1;Mn.DEFAULT_ANISOTROPY=1;class un{constructor(t=0,n=0,s=0,o=1){un.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,o){return this.x=t,this.y=n,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*s+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,o,c;const p=t.elements,d=p[0],g=p[4],v=p[8],_=p[1],y=p[5],b=p[9],T=p[2],M=p[6],x=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(b+M)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(d+1)/2,U=(y+1)/2,L=(x+1)/2,F=(g+_)/4,I=(v+T)/4,j=(b+M)/4;return R>U&&R>L?R<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(R),o=F/s,c=I/s):U>L?U<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(U),s=F/o,c=j/o):L<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(L),s=I/c,o=j/c),this.set(s,o,c,n),this}let D=Math.sqrt((M-b)*(M-b)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(D)<.001&&(D=1),this.x=(M-b)/D,this.y=(v-T)/D,this.z=(_-g)/D,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Te(this.x,t.x,n.x),this.y=Te(this.y,t.y,n.y),this.z=Te(this.z,t.z,n.z),this.w=Te(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Te(this.x,t,n),this.y=Te(this.y,t,n),this.z=Te(this.z,t,n),this.w=Te(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wD extends wo{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new un(0,0,t,n),this.scissorTest=!1,this.viewport=new un(0,0,t,n);const o={width:t,height:n,depth:s.depth},c=new Mn(o);this.textures=[];const u=s.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new jg(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends wD{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class d1 extends Mn{constructor(t=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=In,this.minFilter=In,this.wrapR=Pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class CD extends Mn{constructor(t=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=In,this.minFilter=In,this.wrapR=Pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rc{constructor(t=new ot(1/0,1/0,1/0),n=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Bi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Bi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Bi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Bi):Bi.fromBufferAttribute(c,u),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wu.copy(s.boundingBox)),wu.applyMatrix4(t.matrixWorld),this.union(wu)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tl),Cu.subVectors(this.max,Tl),Yr.subVectors(t.a,Tl),Kr.subVectors(t.b,Tl),Zr.subVectors(t.c,Tl),ms.subVectors(Kr,Yr),gs.subVectors(Zr,Kr),Ys.subVectors(Yr,Zr);let n=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Ys.z,Ys.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Ys.z,0,-Ys.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Ys.y,Ys.x,0];return!lp(n,Yr,Kr,Zr,Cu)||(n=[1,0,0,0,1,0,0,0,1],!lp(n,Yr,Kr,Zr,Cu))?!1:(Ru.crossVectors(ms,gs),n=[Ru.x,Ru.y,Ru.z],lp(n,Yr,Kr,Zr,Cu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ca=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],Bi=new ot,wu=new rc,Yr=new ot,Kr=new ot,Zr=new ot,ms=new ot,gs=new ot,Ys=new ot,Tl=new ot,Cu=new ot,Ru=new ot,Ks=new ot;function lp(i,t,n,s,o){for(let c=0,u=i.length-3;c<=u;c+=3){Ks.fromArray(i,c);const f=o.x*Math.abs(Ks.x)+o.y*Math.abs(Ks.y)+o.z*Math.abs(Ks.z),p=t.dot(Ks),d=n.dot(Ks),g=s.dot(Ks);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>f)return!1}return!0}const RD=new rc,Al=new ot,cp=new ot;class Wg{constructor(t=new ot,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):RD.setFromPoints(t).getCenter(s);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Al.subVectors(t,this.center);const n=Al.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(Al,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Al.copy(t.center).add(cp)),this.expandByPoint(Al.copy(t.center).sub(cp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ra=new ot,up=new ot,Du=new ot,vs=new ot,fp=new ot,Uu=new ot,hp=new ot;class DD{constructor(t=new ot,n=new ot(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ra)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ra.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ra.copy(this.origin).addScaledVector(this.direction,n),Ra.distanceToSquared(t))}distanceSqToSegment(t,n,s,o){up.copy(t).add(n).multiplyScalar(.5),Du.copy(n).sub(t).normalize(),vs.copy(this.origin).sub(up);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Du),f=vs.dot(this.direction),p=-vs.dot(Du),d=vs.lengthSq(),g=Math.abs(1-u*u);let v,_,y,b;if(g>0)if(v=u*p-f,_=u*f-p,b=c*g,v>=0)if(_>=-b)if(_<=b){const T=1/g;v*=T,_*=T,y=v*(v+u*_+2*f)+_*(u*v+_+2*p)+d}else _=c,v=Math.max(0,-(u*_+f)),y=-v*v+_*(_+2*p)+d;else _=-c,v=Math.max(0,-(u*_+f)),y=-v*v+_*(_+2*p)+d;else _<=-b?(v=Math.max(0,-(-u*c+f)),_=v>0?-c:Math.min(Math.max(-c,-p),c),y=-v*v+_*(_+2*p)+d):_<=b?(v=0,_=Math.min(Math.max(-c,-p),c),y=_*(_+2*p)+d):(v=Math.max(0,-(u*c+f)),_=v>0?c:Math.min(Math.max(-c,-p),c),y=-v*v+_*(_+2*p)+d);else _=u>0?-c:c,v=Math.max(0,-(u*_+f)),y=-v*v+_*(_+2*p)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(up).addScaledVector(Du,_),y}intersectSphere(t,n){Ra.subVectors(t.center,this.origin);const s=Ra.dot(this.direction),o=Ra.dot(Ra)-s*s,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=s-u,p=s+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,o,c,u,f,p;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(s=(t.min.x-_.x)*d,o=(t.max.x-_.x)*d):(s=(t.max.x-_.x)*d,o=(t.min.x-_.x)*d),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),s>u||c>o||((c>s||isNaN(s))&&(s=c),(u<o||isNaN(o))&&(o=u),v>=0?(f=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(f=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),s>p||f>o)||((f>s||s!==s)&&(s=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(t){return this.intersectBox(t,Ra)!==null}intersectTriangle(t,n,s,o,c){fp.subVectors(n,t),Uu.subVectors(s,t),hp.crossVectors(fp,Uu);let u=this.direction.dot(hp),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;vs.subVectors(this.origin,t);const p=f*this.direction.dot(Uu.crossVectors(vs,Uu));if(p<0)return null;const d=f*this.direction.dot(fp.cross(vs));if(d<0||p+d>u)return null;const g=-f*vs.dot(hp);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _n{constructor(t,n,s,o,c,u,f,p,d,g,v,_,y,b,T,M){_n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,f,p,d,g,v,_,y,b,T,M)}set(t,n,s,o,c,u,f,p,d,g,v,_,y,b,T,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=s,x[12]=o,x[1]=c,x[5]=u,x[9]=f,x[13]=p,x[2]=d,x[6]=g,x[10]=v,x[14]=_,x[3]=y,x[7]=b,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _n().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,o=1/Qr.setFromMatrixColumn(t,0).length(),c=1/Qr.setFromMatrixColumn(t,1).length(),u=1/Qr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,o=t.y,c=t.z,u=Math.cos(s),f=Math.sin(s),p=Math.cos(o),d=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,y=u*v,b=f*g,T=f*v;n[0]=p*g,n[4]=-p*v,n[8]=d,n[1]=y+b*d,n[5]=_-T*d,n[9]=-f*p,n[2]=T-_*d,n[6]=b+y*d,n[10]=u*p}else if(t.order==="YXZ"){const _=p*g,y=p*v,b=d*g,T=d*v;n[0]=_+T*f,n[4]=b*f-y,n[8]=u*d,n[1]=u*v,n[5]=u*g,n[9]=-f,n[2]=y*f-b,n[6]=T+_*f,n[10]=u*p}else if(t.order==="ZXY"){const _=p*g,y=p*v,b=d*g,T=d*v;n[0]=_-T*f,n[4]=-u*v,n[8]=b+y*f,n[1]=y+b*f,n[5]=u*g,n[9]=T-_*f,n[2]=-u*d,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const _=u*g,y=u*v,b=f*g,T=f*v;n[0]=p*g,n[4]=b*d-y,n[8]=_*d+T,n[1]=p*v,n[5]=T*d+_,n[9]=y*d-b,n[2]=-d,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const _=u*p,y=u*d,b=f*p,T=f*d;n[0]=p*g,n[4]=T-_*v,n[8]=b*v+y,n[1]=v,n[5]=u*g,n[9]=-f*g,n[2]=-d*g,n[6]=y*v+b,n[10]=_-T*v}else if(t.order==="XZY"){const _=u*p,y=u*d,b=f*p,T=f*d;n[0]=p*g,n[4]=-v,n[8]=d*g,n[1]=_*v+T,n[5]=u*g,n[9]=y*v-b,n[2]=b*v-y,n[6]=f*g,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(UD,t,ND)}lookAt(t,n,s){const o=this.elements;return fi.subVectors(t,n),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),_s.crossVectors(s,fi),_s.lengthSq()===0&&(Math.abs(s.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),_s.crossVectors(s,fi)),_s.normalize(),Nu.crossVectors(fi,_s),o[0]=_s.x,o[4]=Nu.x,o[8]=fi.x,o[1]=_s.y,o[5]=Nu.y,o[9]=fi.y,o[2]=_s.z,o[6]=Nu.z,o[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],f=s[4],p=s[8],d=s[12],g=s[1],v=s[5],_=s[9],y=s[13],b=s[2],T=s[6],M=s[10],x=s[14],D=s[3],R=s[7],U=s[11],L=s[15],F=o[0],I=o[4],j=o[8],C=o[12],N=o[1],X=o[5],st=o[9],at=o[13],ct=o[2],ht=o[6],z=o[10],H=o[14],Q=o[3],yt=o[7],xt=o[11],O=o[15];return c[0]=u*F+f*N+p*ct+d*Q,c[4]=u*I+f*X+p*ht+d*yt,c[8]=u*j+f*st+p*z+d*xt,c[12]=u*C+f*at+p*H+d*O,c[1]=g*F+v*N+_*ct+y*Q,c[5]=g*I+v*X+_*ht+y*yt,c[9]=g*j+v*st+_*z+y*xt,c[13]=g*C+v*at+_*H+y*O,c[2]=b*F+T*N+M*ct+x*Q,c[6]=b*I+T*X+M*ht+x*yt,c[10]=b*j+T*st+M*z+x*xt,c[14]=b*C+T*at+M*H+x*O,c[3]=D*F+R*N+U*ct+L*Q,c[7]=D*I+R*X+U*ht+L*yt,c[11]=D*j+R*st+U*z+L*xt,c[15]=D*C+R*at+U*H+L*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],o=t[8],c=t[12],u=t[1],f=t[5],p=t[9],d=t[13],g=t[2],v=t[6],_=t[10],y=t[14],b=t[3],T=t[7],M=t[11],x=t[15],D=p*y-d*_,R=f*y-d*v,U=f*_-p*v,L=u*y-d*g,F=u*_-p*g,I=u*v-f*g;return n*(T*D-M*R+x*U)-s*(b*D-M*L+x*F)+o*(b*R-T*L+x*I)-c*(b*U-T*F+M*I)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8],v=t[9],_=t[10],y=t[11],b=t[12],T=t[13],M=t[14],x=t[15],D=v*M*d-T*_*d+T*p*y-f*M*y-v*p*x+f*_*x,R=b*_*d-g*M*d-b*p*y+u*M*y+g*p*x-u*_*x,U=g*T*d-b*v*d+b*f*y-u*T*y-g*f*x+u*v*x,L=b*v*p-g*T*p-b*f*_+u*T*_+g*f*M-u*v*M,F=n*D+s*R+o*U+c*L;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return t[0]=D*I,t[1]=(T*_*c-v*M*c-T*o*y+s*M*y+v*o*x-s*_*x)*I,t[2]=(f*M*c-T*p*c+T*o*d-s*M*d-f*o*x+s*p*x)*I,t[3]=(v*p*c-f*_*c-v*o*d+s*_*d+f*o*y-s*p*y)*I,t[4]=R*I,t[5]=(g*M*c-b*_*c+b*o*y-n*M*y-g*o*x+n*_*x)*I,t[6]=(b*p*c-u*M*c-b*o*d+n*M*d+u*o*x-n*p*x)*I,t[7]=(u*_*c-g*p*c+g*o*d-n*_*d-u*o*y+n*p*y)*I,t[8]=U*I,t[9]=(b*v*c-g*T*c-b*s*y+n*T*y+g*s*x-n*v*x)*I,t[10]=(u*T*c-b*f*c+b*s*d-n*T*d-u*s*x+n*f*x)*I,t[11]=(g*f*c-u*v*c-g*s*d+n*v*d+u*s*y-n*f*y)*I,t[12]=L*I,t[13]=(g*T*o-b*v*o+b*s*_-n*T*_-g*s*M+n*v*M)*I,t[14]=(b*f*o-u*T*o-b*s*p+n*T*p+u*s*M-n*f*M)*I,t[15]=(u*v*o-g*f*o+g*s*p-n*v*p-u*s*_+n*f*_)*I,this}scale(t){const n=this.elements,s=t.x,o=t.y,c=t.z;return n[0]*=s,n[4]*=o,n[8]*=c,n[1]*=s,n[5]*=o,n[9]*=c,n[2]*=s,n[6]*=o,n[10]*=c,n[3]*=s,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),o=Math.sin(n),c=1-s,u=t.x,f=t.y,p=t.z,d=c*u,g=c*f;return this.set(d*u+s,d*f-o*p,d*p+o*f,0,d*f+o*p,g*f+s,g*p-o*u,0,d*p-o*f,g*p+o*u,c*p*p+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,o,c,u){return this.set(1,s,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,s){const o=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,d=c+c,g=u+u,v=f+f,_=c*d,y=c*g,b=c*v,T=u*g,M=u*v,x=f*v,D=p*d,R=p*g,U=p*v,L=s.x,F=s.y,I=s.z;return o[0]=(1-(T+x))*L,o[1]=(y+U)*L,o[2]=(b-R)*L,o[3]=0,o[4]=(y-U)*F,o[5]=(1-(_+x))*F,o[6]=(M+D)*F,o[7]=0,o[8]=(b+R)*I,o[9]=(M-D)*I,o[10]=(1-(_+T))*I,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,s){const o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return s.set(1,1,1),n.identity(),this;let c=Qr.set(o[0],o[1],o[2]).length();const u=Qr.set(o[4],o[5],o[6]).length(),f=Qr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),Ii.copy(this);const d=1/c,g=1/u,v=1/f;return Ii.elements[0]*=d,Ii.elements[1]*=d,Ii.elements[2]*=d,Ii.elements[4]*=g,Ii.elements[5]*=g,Ii.elements[6]*=g,Ii.elements[8]*=v,Ii.elements[9]*=v,Ii.elements[10]*=v,n.setFromRotationMatrix(Ii),s.x=c,s.y=u,s.z=f,this}makePerspective(t,n,s,o,c,u,f=aa,p=!1){const d=this.elements,g=2*c/(n-t),v=2*c/(s-o),_=(n+t)/(n-t),y=(s+o)/(s-o);let b,T;if(p)b=c/(u-c),T=u*c/(u-c);else if(f===aa)b=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(f===vf)b=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,s,o,c,u,f=aa,p=!1){const d=this.elements,g=2/(n-t),v=2/(s-o),_=-(n+t)/(n-t),y=-(s+o)/(s-o);let b,T;if(p)b=1/(u-c),T=u/(u-c);else if(f===aa)b=-2/(u-c),T=-(u+c)/(u-c);else if(f===vf)b=-1/(u-c),T=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=b,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const Qr=new ot,Ii=new _n,UD=new ot(0,0,0),ND=new ot(1,1,1),_s=new ot,Nu=new ot,fi=new ot,mS=new _n,gS=new sc;class Ha{constructor(t=0,n=0,s=0,o=Ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,o=this._order){return this._x=t,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const o=t.elements,c=o[0],u=o[4],f=o[8],p=o[1],d=o[5],g=o[9],v=o[2],_=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Te(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Te(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return mS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mS,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return gS.setFromEuler(this),this.setFromQuaternion(gS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ha.DEFAULT_ORDER="XYZ";class p1{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let LD=0;const vS=new ot,Jr=new sc,Da=new _n,Lu=new ot,wl=new ot,PD=new ot,OD=new sc,_S=new ot(1,0,0),xS=new ot(0,1,0),yS=new ot(0,0,1),SS={type:"added"},FD={type:"removed"},$r={type:"childadded",child:null},dp={type:"childremoved",child:null};class di extends wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LD++}),this.uuid=ac(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=di.DEFAULT_UP.clone();const t=new ot,n=new Ha,s=new sc,o=new ot(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new _n},normalMatrix:{value:new pe}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=di.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(_S,t)}rotateY(t){return this.rotateOnAxis(xS,t)}rotateZ(t){return this.rotateOnAxis(yS,t)}translateOnAxis(t,n){return vS.copy(t).applyQuaternion(this.quaternion),this.position.add(vS.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(_S,t)}translateY(t){return this.translateOnAxis(xS,t)}translateZ(t){return this.translateOnAxis(yS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Da.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?Lu.copy(t):Lu.set(t,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),wl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Da.lookAt(wl,Lu,this.up):Da.lookAt(Lu,wl,this.up),this.quaternion.setFromRotationMatrix(Da),o&&(Da.extractRotation(o.matrixWorld),Jr.setFromRotationMatrix(Da),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(SS),$r.child=t,this.dispatchEvent($r),$r.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(FD),dp.child=t,this.dispatchEvent(dp),dp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Da.multiply(t.parent.matrixWorld)),t.applyMatrix4(Da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(SS),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,t,PD),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,OD,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const v=p[d];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(c(t.materials,this.material[p]));o.material=f}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),d=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),y=u(t.animations),b=u(t.nodes);f.length>0&&(s.geometries=f),p.length>0&&(s.materials=p),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=o,s;function u(f){const p=[];for(const d in f){const g=f[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}di.DEFAULT_UP=new ot(0,1,0);di.DEFAULT_MATRIX_AUTO_UPDATE=!0;di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zi=new ot,Ua=new ot,pp=new ot,Na=new ot,to=new ot,eo=new ot,MS=new ot,mp=new ot,gp=new ot,vp=new ot,_p=new un,xp=new un,yp=new un;class Hi{constructor(t=new ot,n=new ot,s=new ot){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,o){o.subVectors(s,n),zi.subVectors(t,n),o.cross(zi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,s,o,c){zi.subVectors(o,n),Ua.subVectors(s,n),pp.subVectors(t,n);const u=zi.dot(zi),f=zi.dot(Ua),p=zi.dot(pp),d=Ua.dot(Ua),g=Ua.dot(pp),v=u*d-f*f;if(v===0)return c.set(0,0,0),null;const _=1/v,y=(d*p-f*g)*_,b=(u*g-f*p)*_;return c.set(1-y-b,b,y)}static containsPoint(t,n,s,o){return this.getBarycoord(t,n,s,o,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(t,n,s,o,c,u,f,p){return this.getBarycoord(t,n,s,o,Na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Na.x),p.addScaledVector(u,Na.y),p.addScaledVector(f,Na.z),p)}static getInterpolatedAttribute(t,n,s,o,c,u){return _p.setScalar(0),xp.setScalar(0),yp.setScalar(0),_p.fromBufferAttribute(t,n),xp.fromBufferAttribute(t,s),yp.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(_p,c.x),u.addScaledVector(xp,c.y),u.addScaledVector(yp,c.z),u}static isFrontFacing(t,n,s,o){return zi.subVectors(s,n),Ua.subVectors(t,n),zi.cross(Ua).dot(o)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,o){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,s,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),zi.cross(Ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Hi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,o,c){return Hi.getInterpolation(t,this.a,this.b,this.c,n,s,o,c)}containsPoint(t){return Hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,o=this.b,c=this.c;let u,f;to.subVectors(o,s),eo.subVectors(c,s),mp.subVectors(t,s);const p=to.dot(mp),d=eo.dot(mp);if(p<=0&&d<=0)return n.copy(s);gp.subVectors(t,o);const g=to.dot(gp),v=eo.dot(gp);if(g>=0&&v<=g)return n.copy(o);const _=p*v-g*d;if(_<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(s).addScaledVector(to,u);vp.subVectors(t,c);const y=to.dot(vp),b=eo.dot(vp);if(b>=0&&y<=b)return n.copy(c);const T=y*d-p*b;if(T<=0&&d>=0&&b<=0)return f=d/(d-b),n.copy(s).addScaledVector(eo,f);const M=g*b-y*v;if(M<=0&&v-g>=0&&y-b>=0)return MS.subVectors(c,o),f=(v-g)/(v-g+(y-b)),n.copy(o).addScaledVector(MS,f);const x=1/(M+T+_);return u=T*x,f=_*x,n.copy(s).addScaledVector(to,u).addScaledVector(eo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const m1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},Pu={h:0,s:0,l:0};function Sp(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}class Ve{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,n),this}setRGB(t,n,s,o=Re.workingColorSpace){return this.r=t,this.g=n,this.b=s,Re.colorSpaceToWorking(this,o),this}setHSL(t,n,s,o=Re.workingColorSpace){if(t=MD(t,1),n=Te(n,0,1),s=Te(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=Sp(u,c,t+1/3),this.g=Sp(u,c,t),this.b=Sp(u,c,t-1/3)}return Re.colorSpaceToWorking(this,o),this}setStyle(t,n=Ti){function s(c){c!==void 0&&parseFloat(c)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ue("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ti){const s=m1[t.toLowerCase()];return s!==void 0?this.setHex(s,n):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fa(t.r),this.g=Fa(t.g),this.b=Fa(t.b),this}copyLinearToSRGB(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ti){return Re.workingToColorSpace(kn.copy(this),t),Math.round(Te(kn.r*255,0,255))*65536+Math.round(Te(kn.g*255,0,255))*256+Math.round(Te(kn.b*255,0,255))}getHexString(t=Ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Re.workingColorSpace){Re.workingToColorSpace(kn.copy(this),n);const s=kn.r,o=kn.g,c=kn.b,u=Math.max(s,o,c),f=Math.min(s,o,c);let p,d;const g=(f+u)/2;if(f===u)p=0,d=0;else{const v=u-f;switch(d=g<=.5?v/(u+f):v/(2-u-f),u){case s:p=(o-c)/v+(o<c?6:0);break;case o:p=(c-s)/v+2;break;case c:p=(s-o)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,n=Re.workingColorSpace){return Re.workingToColorSpace(kn.copy(this),n),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Ti){Re.workingToColorSpace(kn.copy(this),t);const n=kn.r,s=kn.g,o=kn.b;return t!==Ti?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,n,s){return this.getHSL(xs),this.setHSL(xs.h+t,xs.s+n,xs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(xs),t.getHSL(Pu);const s=ip(xs.h,Pu.h,n),o=ip(xs.s,Pu.s,n),c=ip(xs.l,Pu.l,n);return this.setHSL(s,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*o,this.g=c[1]*n+c[4]*s+c[7]*o,this.b=c[2]*n+c[5]*s+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Ve;Ve.NAMES=m1;let BD=0;class Ef extends wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BD++}),this.uuid=ac(),this.name="",this.type="Material",this.blending=po,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cm,this.blendDst=um,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){ue(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(s.blending=this.blending),this.side!==ws&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==cm&&(s.blendSrc=this.blendSrc),this.blendDst!==um&&(s.blendDst=this.blendDst),this.blendEquation!==nr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oS&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vl extends Ef{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ha,this.combine=Zb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gn=new ot,Ou=new Ie;let ID=0;class oa{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ID++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=lS,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Ou.fromBufferAttribute(this,n),Ou.applyMatrix3(t),this.setXY(n,Ou.x,Ou.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix3(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=El(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=ei(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=El(n,this.array)),n}setX(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=El(n,this.array)),n}setY(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=El(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=El(n,this.array)),n}setW(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=ei(n,this.array),s=ei(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,o){return t*=this.itemSize,this.normalized&&(n=ei(n,this.array),s=ei(s,this.array),o=ei(o,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,n,s,o,c){return t*=this.itemSize,this.normalized&&(n=ei(n,this.array),s=ei(s,this.array),o=ei(o,this.array),c=ei(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lS&&(t.usage=this.usage),t}}class g1 extends oa{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class v1 extends oa{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class Ba extends oa{constructor(t,n,s){super(new Float32Array(t),n,s)}}let zD=0;const Ei=new _n,Mp=new di,no=new ot,hi=new rc,Cl=new rc,An=new ot;class Ga extends wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zD++}),this.uuid=ac(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(h1(t)?v1:g1)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,n,s){return Ei.makeTranslation(t,n,s),this.applyMatrix4(Ei),this}scale(t,n,s){return Ei.makeScale(t,n,s),this.applyMatrix4(Ei),this}lookAt(t){return Mp.lookAt(t),Mp.updateMatrix(),this.applyMatrix4(Mp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ba(s,3))}else{const s=Math.min(t.length,n.count);for(let o=0;o<s;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const c=n[s];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wg);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(t){const s=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];Cl.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(hi.min,Cl.min),hi.expandByPoint(An),An.addVectors(hi.max,Cl.max),hi.expandByPoint(An)):(hi.expandByPoint(Cl.min),hi.expandByPoint(Cl.max))}hi.getCenter(s);let o=0;for(let c=0,u=t.count;c<u;c++)An.fromBufferAttribute(t,c),o=Math.max(o,s.distanceToSquared(An));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let d=0,g=f.count;d<g;d++)An.fromBufferAttribute(f,d),p&&(no.fromBufferAttribute(t,d),An.add(no)),o=Math.max(o,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oa(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let j=0;j<s.count;j++)f[j]=new ot,p[j]=new ot;const d=new ot,g=new ot,v=new ot,_=new Ie,y=new Ie,b=new Ie,T=new ot,M=new ot;function x(j,C,N){d.fromBufferAttribute(s,j),g.fromBufferAttribute(s,C),v.fromBufferAttribute(s,N),_.fromBufferAttribute(c,j),y.fromBufferAttribute(c,C),b.fromBufferAttribute(c,N),g.sub(d),v.sub(d),y.sub(_),b.sub(_);const X=1/(y.x*b.y-b.x*y.y);isFinite(X)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(X),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(X),f[j].add(T),f[C].add(T),f[N].add(T),p[j].add(M),p[C].add(M),p[N].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let j=0,C=D.length;j<C;++j){const N=D[j],X=N.start,st=N.count;for(let at=X,ct=X+st;at<ct;at+=3)x(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const R=new ot,U=new ot,L=new ot,F=new ot;function I(j){L.fromBufferAttribute(o,j),F.copy(L);const C=f[j];R.copy(C),R.sub(L.multiplyScalar(L.dot(C))).normalize(),U.crossVectors(F,C);const X=U.dot(p[j])<0?-1:1;u.setXYZW(j,R.x,R.y,R.z,X)}for(let j=0,C=D.length;j<C;++j){const N=D[j],X=N.start,st=N.count;for(let at=X,ct=X+st;at<ct;at+=3)I(t.getX(at+0)),I(t.getX(at+1)),I(t.getX(at+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new oa(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const o=new ot,c=new ot,u=new ot,f=new ot,p=new ot,d=new ot,g=new ot,v=new ot;if(t)for(let _=0,y=t.count;_<y;_+=3){const b=t.getX(_+0),T=t.getX(_+1),M=t.getX(_+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,T),d.fromBufferAttribute(s,M),f.add(g),p.add(g),d.add(g),s.setXYZ(b,f.x,f.y,f.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,y=n.count;_<y;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)An.fromBufferAttribute(t,n),An.normalize(),t.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function t(f,p){const d=f.array,g=f.itemSize,v=f.normalized,_=new d.constructor(p.length*g);let y=0,b=0;for(let T=0,M=p.length;T<M;T++){f.isInterleavedBufferAttribute?y=p[T]*f.data.stride+f.offset:y=p[T]*g;for(let x=0;x<g;x++)_[b++]=d[y++]}return new oa(_,g,v)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ga,s=this.index.array,o=this.attributes;for(const f in o){const p=o[f],d=t(p,s);n.setAttribute(f,d)}const c=this.morphAttributes;for(const f in c){const p=[],d=c[f];for(let g=0,v=d.length;g<v;g++){const _=d[g],y=t(_,s);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const d=u[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const d=s[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let v=0,_=d.length;v<_;v++){const y=d[v];g.push(y.toJSON(t.data))}g.length>0&&(o[p]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],v=c[d];for(let _=0,y=v.length;_<y;_++)g.push(v[_].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const v=u[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bS=new _n,Zs=new DD,Fu=new Wg,ES=new ot,Bu=new ot,Iu=new ot,zu=new ot,bp=new ot,Vu=new ot,TS=new ot,Hu=new ot;class qi extends di{constructor(t=new Ga,n=new Vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,n){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(c&&f){Vu.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=f[p],v=c[p];g!==0&&(bp.fromBufferAttribute(v,t),u?Vu.addScaledVector(bp,g):Vu.addScaledVector(bp.sub(n),g))}n.add(Vu)}return n}raycast(t,n){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Fu.copy(s.boundingSphere),Fu.applyMatrix4(c),Zs.copy(t.ray).recast(t.near),!(Fu.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(Fu,ES)===null||Zs.origin.distanceToSquared(ES)>(t.far-t.near)**2))&&(bS.copy(c).invert(),Zs.copy(t.ray).applyMatrix4(bS),!(s.boundingBox!==null&&Zs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,Zs)))}_computeIntersections(t,n,s){let o;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,y=c.drawRange;if(f!==null)if(Array.isArray(u))for(let b=0,T=_.length;b<T;b++){const M=_[b],x=u[M.materialIndex],D=Math.max(M.start,y.start),R=Math.min(f.count,Math.min(M.start+M.count,y.start+y.count));for(let U=D,L=R;U<L;U+=3){const F=f.getX(U),I=f.getX(U+1),j=f.getX(U+2);o=Gu(this,x,t,s,d,g,v,F,I,j),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const D=f.getX(M),R=f.getX(M+1),U=f.getX(M+2);o=Gu(this,u,t,s,d,g,v,D,R,U),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,T=_.length;b<T;b++){const M=_[b],x=u[M.materialIndex],D=Math.max(M.start,y.start),R=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let U=D,L=R;U<L;U+=3){const F=U,I=U+1,j=U+2;o=Gu(this,x,t,s,d,g,v,F,I,j),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const D=M,R=M+1,U=M+2;o=Gu(this,u,t,s,d,g,v,D,R,U),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function VD(i,t,n,s,o,c,u,f){let p;if(t.side===ii?p=s.intersectTriangle(u,c,o,!0,f):p=s.intersectTriangle(o,c,u,t.side===ws,f),p===null)return null;Hu.copy(f),Hu.applyMatrix4(i.matrixWorld);const d=n.ray.origin.distanceTo(Hu);return d<n.near||d>n.far?null:{distance:d,point:Hu.clone(),object:i}}function Gu(i,t,n,s,o,c,u,f,p,d){i.getVertexPosition(f,Bu),i.getVertexPosition(p,Iu),i.getVertexPosition(d,zu);const g=VD(i,t,n,s,Bu,Iu,zu,TS);if(g){const v=new ot;Hi.getBarycoord(TS,Bu,Iu,zu,v),o&&(g.uv=Hi.getInterpolatedAttribute(o,f,p,d,v,new Ie)),c&&(g.uv1=Hi.getInterpolatedAttribute(c,f,p,d,v,new Ie)),u&&(g.normal=Hi.getInterpolatedAttribute(u,f,p,d,v,new ot),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:p,c:d,normal:new ot,materialIndex:0};Hi.getNormal(Bu,Iu,zu,_.normal),g.face=_,g.barycoord=v}return g}class oc extends Ga{constructor(t=1,n=1,s=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],v=[];let _=0,y=0;b("z","y","x",-1,-1,s,n,t,u,c,0),b("z","y","x",1,-1,s,n,-t,u,c,1),b("x","z","y",1,1,t,s,n,o,u,2),b("x","z","y",1,-1,t,s,-n,o,u,3),b("x","y","z",1,-1,t,n,s,o,c,4),b("x","y","z",-1,-1,t,n,-s,o,c,5),this.setIndex(p),this.setAttribute("position",new Ba(d,3)),this.setAttribute("normal",new Ba(g,3)),this.setAttribute("uv",new Ba(v,2));function b(T,M,x,D,R,U,L,F,I,j,C){const N=U/I,X=L/j,st=U/2,at=L/2,ct=F/2,ht=I+1,z=j+1;let H=0,Q=0;const yt=new ot;for(let xt=0;xt<z;xt++){const O=xt*X-at;for(let et=0;et<ht;et++){const gt=et*N-st;yt[T]=gt*D,yt[M]=O*R,yt[x]=ct,d.push(yt.x,yt.y,yt.z),yt[T]=0,yt[M]=0,yt[x]=F>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(et/I),v.push(1-xt/j),H+=1}}for(let xt=0;xt<j;xt++)for(let O=0;O<I;O++){const et=_+O+ht*xt,gt=_+O+ht*(xt+1),At=_+(O+1)+ht*(xt+1),Ht=_+(O+1)+ht*xt;p.push(et,gt,Ht),p.push(gt,At,Ht),Q+=6}f.addGroup(y,Q,C),y+=Q,_+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mo(i){const t={};for(const n in i){t[n]={};for(const s in i[n]){const o=i[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=o.clone():Array.isArray(o)?t[n][s]=o.slice():t[n][s]=o}}return t}function Wn(i){const t={};for(let n=0;n<i.length;n++){const s=Mo(i[n]);for(const o in s)t[o]=s[o]}return t}function HD(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function _1(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const GD={clone:Mo,merge:Wn};var kD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Ef{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kD,this.fragmentShader=XD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mo(t.uniforms),this.uniformsGroups=HD(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class x1 extends di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ys=new ot,AS=new Ie,wS=new Ie;class Ai extends x1{constructor(t=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=$m*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(np*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $m*2*Math.atan(Math.tan(np*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-t/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ys.x,ys.y).multiplyScalar(-t/ys.z)}getViewSize(t,n){return this.getViewBounds(t,AS,wS),n.subVectors(wS,AS)}setViewOffset(t,n,s,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(np*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*s/d,o*=u.width/p,s*=u.height/d}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const io=-90,ao=1;class jD extends di{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ai(io,ao,t,n);o.layers=this.layers,this.add(o);const c=new Ai(io,ao,t,n);c.layers=this.layers,this.add(c);const u=new Ai(io,ao,t,n);u.layers=this.layers,this.add(u);const f=new Ai(io,ao,t,n);f.layers=this.layers,this.add(f);const p=new Ai(io,ao,t,n);p.layers=this.layers,this.add(p);const d=new Ai(io,ao,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,o,c,u,f,p]=n;for(const d of n)this.remove(d);if(t===aa)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===vf)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,o),t.render(n,c),t.setRenderTarget(s,1,o),t.render(n,u),t.setRenderTarget(s,2,o),t.render(n,f),t.setRenderTarget(s,3,o),t.render(n,p),t.setRenderTarget(s,4,o),t.render(n,d),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,o),t.render(n,g),t.setRenderTarget(v,_,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class y1 extends Mn{constructor(t=[],n=lr,s,o,c,u,f,p,d,g){super(t,n,s,o,c,u,f,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class S1 extends ji{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];this.texture=new y1(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new oc(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:Mo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ii,blending:Oa});c.uniforms.tEquirect.value=n;const u=new qi(o,c),f=n.minFilter;return n.minFilter===Es&&(n.minFilter=zn),new jD(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,s=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,s,o);t.setRenderTarget(c)}}class ku extends di{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WD={type:"move"};class Ep{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ku,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ku,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ku,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let o=null,c=null,u=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,s),x=this._getHandJoint(d,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),y=.02,b=.005;d.inputState.pinching&&_>y+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=y-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(t.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(WD)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new ku;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class CS extends di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ha,this.environmentIntensity=1,this.environmentRotation=new Ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class qD extends Mn{constructor(t=null,n=1,s=1,o,c,u,f,p,d=In,g=In,v,_){super(null,u,f,p,d,g,o,c,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tp=new ot,YD=new ot,KD=new pe;class er{constructor(t=new ot(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,o){return this.normal.set(t,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const o=Tp.subVectors(s,n).cross(YD.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(Tp),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||KD.getNormalMatrix(t),o=this.coplanarPoint(Tp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new Wg,ZD=new Ie(.5,.5),Xu=new ot;class M1{constructor(t=new er,n=new er,s=new er,o=new er,c=new er,u=new er){this.planes=[t,n,s,o,c,u]}set(t,n,s,o,c,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(s),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=aa,s=!1){const o=this.planes,c=t.elements,u=c[0],f=c[1],p=c[2],d=c[3],g=c[4],v=c[5],_=c[6],y=c[7],b=c[8],T=c[9],M=c[10],x=c[11],D=c[12],R=c[13],U=c[14],L=c[15];if(o[0].setComponents(d-u,y-g,x-b,L-D).normalize(),o[1].setComponents(d+u,y+g,x+b,L+D).normalize(),o[2].setComponents(d+f,y+v,x+T,L+R).normalize(),o[3].setComponents(d-f,y-v,x-T,L-R).normalize(),s)o[4].setComponents(p,_,M,U).normalize(),o[5].setComponents(d-p,y-_,x-M,L-U).normalize();else if(o[4].setComponents(d-p,y-_,x-M,L-U).normalize(),n===aa)o[5].setComponents(d+p,y+_,x+M,L+U).normalize();else if(n===vf)o[5].setComponents(p,_,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(t){Qs.center.set(0,0,0);const n=ZD.distanceTo(t.center);return Qs.radius=.7071067811865476+n,Qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(t){const n=this.planes,s=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(Xu.x=o.normal.x>0?t.max.x:t.min.x,Xu.y=o.normal.y>0?t.max.y:t.min.y,Xu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Xu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class RS extends Mn{constructor(t,n,s,o,c,u,f,p,d){super(t,n,s,o,c,u,f,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jl extends Mn{constructor(t,n,s=la,o,c,u,f=In,p=In,d,g=Va,v=1){if(g!==Va&&g!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,o,c,u,f,p,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jg(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class QD extends Jl{constructor(t,n=la,s=lr,o,c,u=In,f=In,p,d=Va){const g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,n,s,o,c,u,f,p,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class b1 extends Mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class bo extends Ga{constructor(t=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:o};const c=t/2,u=n/2,f=Math.floor(s),p=Math.floor(o),d=f+1,g=p+1,v=t/f,_=n/p,y=[],b=[],T=[],M=[];for(let x=0;x<g;x++){const D=x*_-u;for(let R=0;R<d;R++){const U=R*v-c;b.push(U,-D,0),T.push(0,0,1),M.push(R/f),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let D=0;D<f;D++){const R=D+d*x,U=D+d*(x+1),L=D+1+d*(x+1),F=D+1+d*x;y.push(R,U,F),y.push(U,L,F)}this.setIndex(y),this.setAttribute("position",new Ba(b,3)),this.setAttribute("normal",new Ba(T,3)),this.setAttribute("uv",new Ba(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bo(t.width,t.height,t.widthSegments,t.heightSegments)}}class JD extends Yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $D extends Ef{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tU extends Ef{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class $l extends x1{constructor(t=-1,n=1,s=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-t,u=s+t,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class eU extends Ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class nU{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function DS(i,t,n,s){const o=iU(s);switch(n){case c1:return i*t;case f1:return i*t/o.components*o.byteLength;case Vg:return i*t/o.components*o.byteLength;case yo:return i*t*2/o.components*o.byteLength;case Hg:return i*t*2/o.components*o.byteLength;case u1:return i*t*3/o.components*o.byteLength;case ki:return i*t*4/o.components*o.byteLength;case Gg:return i*t*4/o.components*o.byteLength;case ef:case nf:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case af:case sf:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mm:case Em:return Math.max(i,16)*Math.max(t,8)/4;case Sm:case bm:return Math.max(i,8)*Math.max(t,8)/2;case Tm:case Am:case Cm:case Rm:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wm:case Dm:case Um:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nm:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lm:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pm:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Om:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fm:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bm:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Im:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zm:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vm:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hm:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gm:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case km:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xm:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jm:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wm:case qm:case Ym:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Km:case Zm:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qm:case Jm:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function iU(i){switch(i){case wi:case s1:return{byteLength:1,components:1};case Kl:case r1:case za:return{byteLength:2,components:1};case Ig:case zg:return{byteLength:2,components:4};case la:case Bg:case ia:return{byteLength:4,components:1};case o1:case l1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fg}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fg);function E1(){let i=null,t=!1,n=null,s=null;function o(c,u){n(c,u),s=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(s=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){i=c}}}function aU(i){const t=new WeakMap;function n(f,p){const d=f.array,g=f.usage,v=d.byteLength,_=i.createBuffer();i.bindBuffer(p,_),i.bufferData(p,d,g),f.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=i.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,p,d){const g=p.array,v=p.updateRanges;if(i.bindBuffer(d,f),v.length===0)i.bufferSubData(d,0,g);else{v.sort((y,b)=>y.start-b.start);let _=0;for(let y=1;y<v.length;y++){const b=v[_],T=v[y];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++_,v[_]=T)}v.length=_+1;for(let y=0,b=v.length;y<b;y++){const T=v[y];i.bufferSubData(d,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(i.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,f,p),d.version=f.version}}return{get:o,remove:c,update:u}}var sU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rU=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fU=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dU=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vU=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_U=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xU=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yU=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,SU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EU=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wU=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,CU=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RU=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,DU=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OU="gl_FragColor = linearToOutputTexel( gl_FragColor );",FU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,IU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zU=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,VU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,GU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WU=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KU=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZU=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,QU=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,JU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$U=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eN=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nN=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iN=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aN=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sN=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rN=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pN=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_N=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yN=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,SN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bN=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wN=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LN=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,PN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ON=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VN=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,HN=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kN=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jN=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qN=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$N=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,pL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_L=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ML=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,FL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:sU,alphahash_pars_fragment:rU,alphamap_fragment:oU,alphamap_pars_fragment:lU,alphatest_fragment:cU,alphatest_pars_fragment:uU,aomap_fragment:fU,aomap_pars_fragment:hU,batching_pars_vertex:dU,batching_vertex:pU,begin_vertex:mU,beginnormal_vertex:gU,bsdfs:vU,iridescence_fragment:_U,bumpmap_pars_fragment:xU,clipping_planes_fragment:yU,clipping_planes_pars_fragment:SU,clipping_planes_pars_vertex:MU,clipping_planes_vertex:bU,color_fragment:EU,color_pars_fragment:TU,color_pars_vertex:AU,color_vertex:wU,common:CU,cube_uv_reflection_fragment:RU,defaultnormal_vertex:DU,displacementmap_pars_vertex:UU,displacementmap_vertex:NU,emissivemap_fragment:LU,emissivemap_pars_fragment:PU,colorspace_fragment:OU,colorspace_pars_fragment:FU,envmap_fragment:BU,envmap_common_pars_fragment:IU,envmap_pars_fragment:zU,envmap_pars_vertex:VU,envmap_physical_pars_fragment:QU,envmap_vertex:HU,fog_vertex:GU,fog_pars_vertex:kU,fog_fragment:XU,fog_pars_fragment:jU,gradientmap_pars_fragment:WU,lightmap_pars_fragment:qU,lights_lambert_fragment:YU,lights_lambert_pars_fragment:KU,lights_pars_begin:ZU,lights_toon_fragment:JU,lights_toon_pars_fragment:$U,lights_phong_fragment:tN,lights_phong_pars_fragment:eN,lights_physical_fragment:nN,lights_physical_pars_fragment:iN,lights_fragment_begin:aN,lights_fragment_maps:sN,lights_fragment_end:rN,logdepthbuf_fragment:oN,logdepthbuf_pars_fragment:lN,logdepthbuf_pars_vertex:cN,logdepthbuf_vertex:uN,map_fragment:fN,map_pars_fragment:hN,map_particle_fragment:dN,map_particle_pars_fragment:pN,metalnessmap_fragment:mN,metalnessmap_pars_fragment:gN,morphinstance_vertex:vN,morphcolor_vertex:_N,morphnormal_vertex:xN,morphtarget_pars_vertex:yN,morphtarget_vertex:SN,normal_fragment_begin:MN,normal_fragment_maps:bN,normal_pars_fragment:EN,normal_pars_vertex:TN,normal_vertex:AN,normalmap_pars_fragment:wN,clearcoat_normal_fragment_begin:CN,clearcoat_normal_fragment_maps:RN,clearcoat_pars_fragment:DN,iridescence_pars_fragment:UN,opaque_fragment:NN,packing:LN,premultiplied_alpha_fragment:PN,project_vertex:ON,dithering_fragment:FN,dithering_pars_fragment:BN,roughnessmap_fragment:IN,roughnessmap_pars_fragment:zN,shadowmap_pars_fragment:VN,shadowmap_pars_vertex:HN,shadowmap_vertex:GN,shadowmask_pars_fragment:kN,skinbase_vertex:XN,skinning_pars_vertex:jN,skinning_vertex:WN,skinnormal_vertex:qN,specularmap_fragment:YN,specularmap_pars_fragment:KN,tonemapping_fragment:ZN,tonemapping_pars_fragment:QN,transmission_fragment:JN,transmission_pars_fragment:$N,uv_pars_fragment:tL,uv_pars_vertex:eL,uv_vertex:nL,worldpos_vertex:iL,background_vert:aL,background_frag:sL,backgroundCube_vert:rL,backgroundCube_frag:oL,cube_vert:lL,cube_frag:cL,depth_vert:uL,depth_frag:fL,distance_vert:hL,distance_frag:dL,equirect_vert:pL,equirect_frag:mL,linedashed_vert:gL,linedashed_frag:vL,meshbasic_vert:_L,meshbasic_frag:xL,meshlambert_vert:yL,meshlambert_frag:SL,meshmatcap_vert:ML,meshmatcap_frag:bL,meshnormal_vert:EL,meshnormal_frag:TL,meshphong_vert:AL,meshphong_frag:wL,meshphysical_vert:CL,meshphysical_frag:RL,meshtoon_vert:DL,meshtoon_frag:UL,points_vert:NL,points_frag:LL,shadow_vert:PL,shadow_frag:OL,sprite_vert:FL,sprite_frag:BL},Bt={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},na={basic:{uniforms:Wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Wn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Wn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Wn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Wn([Bt.points,Bt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Wn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Wn([Bt.common,Bt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Wn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Wn([Bt.sprite,Bt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:Wn([Bt.common,Bt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:Wn([Bt.lights,Bt.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};na.physical={uniforms:Wn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const ju={r:0,b:0,g:0},Js=new Ha,IL=new _n;function zL(i,t,n,s,o,c,u){const f=new Ve(0);let p=c===!0?0:1,d,g,v=null,_=0,y=null;function b(R){let U=R.isScene===!0?R.background:null;return U&&U.isTexture&&(U=(R.backgroundBlurriness>0?n:t).get(U)),U}function T(R){let U=!1;const L=b(R);L===null?x(f,p):L&&L.isColor&&(x(L,1),U=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(i.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(R,U){const L=b(U);L&&(L.isCubeTexture||L.mapping===bf)?(g===void 0&&(g=new qi(new oc(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Mo(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,I,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Js.copy(U.backgroundRotation),Js.x*=-1,Js.y*=-1,Js.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(IL.makeRotationFromEuler(Js)),g.material.toneMapped=Re.getTransfer(L.colorSpace)!==je,(v!==L||_!==L.version||y!==i.toneMapping)&&(g.material.needsUpdate=!0,v=L,_=L.version,y=i.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(d===void 0&&(d=new qi(new bo(2,2),new Yi({name:"BackgroundMaterial",uniforms:Mo(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=L,d.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,d.material.toneMapped=Re.getTransfer(L.colorSpace)!==je,L.matrixAutoUpdate===!0&&L.updateMatrix(),d.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||_!==L.version||y!==i.toneMapping)&&(d.material.needsUpdate=!0,v=L,_=L.version,y=i.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function x(R,U){R.getRGB(ju,_1(i)),s.buffers.color.setClear(ju.r,ju.g,ju.b,U,u)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,U=1){f.set(R),p=U,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,x(f,p)},render:T,addToRenderList:M,dispose:D}}function VL(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=_(null);let c=o,u=!1;function f(N,X,st,at,ct){let ht=!1;const z=v(at,st,X);c!==z&&(c=z,d(c.object)),ht=y(N,at,st,ct),ht&&b(N,at,st,ct),ct!==null&&t.update(ct,i.ELEMENT_ARRAY_BUFFER),(ht||u)&&(u=!1,U(N,X,st,at),ct!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function p(){return i.createVertexArray()}function d(N){return i.bindVertexArray(N)}function g(N){return i.deleteVertexArray(N)}function v(N,X,st){const at=st.wireframe===!0;let ct=s[N.id];ct===void 0&&(ct={},s[N.id]=ct);let ht=ct[X.id];ht===void 0&&(ht={},ct[X.id]=ht);let z=ht[at];return z===void 0&&(z=_(p()),ht[at]=z),z}function _(N){const X=[],st=[],at=[];for(let ct=0;ct<n;ct++)X[ct]=0,st[ct]=0,at[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:st,attributeDivisors:at,object:N,attributes:{},index:null}}function y(N,X,st,at){const ct=c.attributes,ht=X.attributes;let z=0;const H=st.getAttributes();for(const Q in H)if(H[Q].location>=0){const xt=ct[Q];let O=ht[Q];if(O===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(O=N.instanceColor)),xt===void 0||xt.attribute!==O||O&&xt.data!==O.data)return!0;z++}return c.attributesNum!==z||c.index!==at}function b(N,X,st,at){const ct={},ht=X.attributes;let z=0;const H=st.getAttributes();for(const Q in H)if(H[Q].location>=0){let xt=ht[Q];xt===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(xt=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(xt=N.instanceColor));const O={};O.attribute=xt,xt&&xt.data&&(O.data=xt.data),ct[Q]=O,z++}c.attributes=ct,c.attributesNum=z,c.index=at}function T(){const N=c.newAttributes;for(let X=0,st=N.length;X<st;X++)N[X]=0}function M(N){x(N,0)}function x(N,X){const st=c.newAttributes,at=c.enabledAttributes,ct=c.attributeDivisors;st[N]=1,at[N]===0&&(i.enableVertexAttribArray(N),at[N]=1),ct[N]!==X&&(i.vertexAttribDivisor(N,X),ct[N]=X)}function D(){const N=c.newAttributes,X=c.enabledAttributes;for(let st=0,at=X.length;st<at;st++)X[st]!==N[st]&&(i.disableVertexAttribArray(st),X[st]=0)}function R(N,X,st,at,ct,ht,z){z===!0?i.vertexAttribIPointer(N,X,st,ct,ht):i.vertexAttribPointer(N,X,st,at,ct,ht)}function U(N,X,st,at){T();const ct=at.attributes,ht=st.getAttributes(),z=X.defaultAttributeValues;for(const H in ht){const Q=ht[H];if(Q.location>=0){let yt=ct[H];if(yt===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(yt=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(yt=N.instanceColor)),yt!==void 0){const xt=yt.normalized,O=yt.itemSize,et=t.get(yt);if(et===void 0)continue;const gt=et.buffer,At=et.type,Ht=et.bytesPerElement,tt=At===i.INT||At===i.UNSIGNED_INT||yt.gpuType===Bg;if(yt.isInterleavedBufferAttribute){const ft=yt.data,Ct=ft.stride,Xt=yt.offset;if(ft.isInstancedInterleavedBuffer){for(let kt=0;kt<Q.locationSize;kt++)x(Q.location+kt,ft.meshPerAttribute);N.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let kt=0;kt<Q.locationSize;kt++)M(Q.location+kt);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let kt=0;kt<Q.locationSize;kt++)R(Q.location+kt,O/Q.locationSize,At,xt,Ct*Ht,(Xt+O/Q.locationSize*kt)*Ht,tt)}else{if(yt.isInstancedBufferAttribute){for(let ft=0;ft<Q.locationSize;ft++)x(Q.location+ft,yt.meshPerAttribute);N.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ft=0;ft<Q.locationSize;ft++)M(Q.location+ft);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let ft=0;ft<Q.locationSize;ft++)R(Q.location+ft,O/Q.locationSize,At,xt,O*Ht,O/Q.locationSize*ft*Ht,tt)}}else if(z!==void 0){const xt=z[H];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(Q.location,xt);break;case 3:i.vertexAttrib3fv(Q.location,xt);break;case 4:i.vertexAttrib4fv(Q.location,xt);break;default:i.vertexAttrib1fv(Q.location,xt)}}}}D()}function L(){j();for(const N in s){const X=s[N];for(const st in X){const at=X[st];for(const ct in at)g(at[ct].object),delete at[ct];delete X[st]}delete s[N]}}function F(N){if(s[N.id]===void 0)return;const X=s[N.id];for(const st in X){const at=X[st];for(const ct in at)g(at[ct].object),delete at[ct];delete X[st]}delete s[N.id]}function I(N){for(const X in s){const st=s[X];if(st[N.id]===void 0)continue;const at=st[N.id];for(const ct in at)g(at[ct].object),delete at[ct];delete st[N.id]}}function j(){C(),u=!0,c!==o&&(c=o,d(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:j,resetDefaultState:C,dispose:L,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:M,disableUnusedAttributes:D}}function HL(i,t,n){let s;function o(d){s=d}function c(d,g){i.drawArrays(s,d,g),n.update(g,s,1)}function u(d,g,v){v!==0&&(i.drawArraysInstanced(s,d,g,v),n.update(g,s,v))}function f(d,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,g,0,v);let y=0;for(let b=0;b<v;b++)y+=g[b];n.update(y,s,1)}function p(d,g,v,_){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<d.length;b++)u(d[b],g[b],_[b]);else{y.multiDrawArraysInstancedWEBGL(s,d,0,g,0,_,0,v);let b=0;for(let T=0;T<v;T++)b+=g[T]*_[T];n.update(b,s,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function GL(i,t,n,s){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(I){return!(I!==ki&&s.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const j=I===za&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==wi&&s.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ia&&!j)}function p(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(ue("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),U=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),F=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:D,maxVaryings:R,maxFragmentUniforms:U,maxSamples:L,samples:F}}function kL(i){const t=this;let n=null,s=0,o=!1,c=!1;const u=new er,f=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||s!==0||o;return o=_,s=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,y){const b=v.clippingPlanes,T=v.clipIntersection,M=v.clipShadows,x=i.get(v);if(!o||b===null||b.length===0||c&&!M)c?g(null):d();else{const D=c?0:s,R=D*4;let U=x.clippingState||null;p.value=U,U=g(b,_,R,y);for(let L=0;L!==R;++L)U[L]=n[L];x.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,_,y,b){const T=v!==null?v.length:0;let M=null;if(T!==0){if(M=p.value,b!==!0||M===null){const x=y+T*4,D=_.matrixWorldInverse;f.getNormalMatrix(D),(M===null||M.length<x)&&(M=new Float32Array(x));for(let R=0,U=y;R!==T;++R,U+=4)u.copy(v[R]).applyMatrix4(D,f),u.normal.toArray(M,U),M[U+3]=u.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function XL(i){let t=new WeakMap;function n(u,f){return f===_m?u.mapping=lr:f===xm&&(u.mapping=xo),u}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===_m||f===xm)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new S1(p.height);return d.fromEquirectangularTexture(i,u),t.set(u,d),u.addEventListener("dispose",o),n(d.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Ts=4,US=[.125,.215,.35,.446,.526,.582],ir=20,jL=256,Rl=new $l,NS=new Ve;let Ap=null,wp=0,Cp=0,Rp=!1;const WL=new ot;class LS{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,o=100,c={}){const{size:u=256,position:f=WL}=c;Ap=this._renderer.getRenderTarget(),wp=this._renderer.getActiveCubeFace(),Cp=this._renderer.getActiveMipmapLevel(),Rp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=FS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=OS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ap,wp,Cp),this._renderer.xr.enabled=Rp,t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===lr||t.mapping===xo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ap=this._renderer.getRenderTarget(),wp=this._renderer.getActiveCubeFace(),Cp=this._renderer.getActiveMipmapLevel(),Rp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:za,format:ki,colorSpace:So,depthBuffer:!1},o=PS(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=PS(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qL(c)),this._blurMaterial=KL(c,t,n),this._ggxMaterial=YL(c,t,n)}return o}_compileMaterial(t){const n=new qi(new Ga,t);this._renderer.compile(n,Rl)}_sceneToCubeUV(t,n,s,o,c){const p=new Ai(90,1,n,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(NS),v.toneMapping=ra,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qi(new oc,new Vl({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let x=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,x=!0):(M.color.copy(NS),x=!0);for(let R=0;R<6;R++){const U=R%3;U===0?(p.up.set(0,d[R],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[R],c.y,c.z)):U===1?(p.up.set(0,0,d[R]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[R],c.z)):(p.up.set(0,d[R],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[R]));const L=this._cubeSize;so(o,U*L,R>2?L:0,L,L),v.setRenderTarget(o),x&&v.render(T,p),v.render(t,p)}v.toneMapping=y,v.autoClear=_,t.background=D}_textureToCubeUV(t,n){const s=this._renderer,o=t.mapping===lr||t.mapping===xo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=FS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=OS());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=t;const p=this._cubeSize;so(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(u,Rl)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const p=u.uniforms,d=s/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=0+d*1.25,y=v*_,{_lodMax:b}=this,T=this._sizeLods[s],M=3*T*(s>b-Ts?s-b+Ts:0),x=4*(this._cubeSize-T);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=b-n,so(c,M,x,3*T,2*T),o.setRenderTarget(c),o.render(f,Rl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=b-s,so(t,M,x,3*T,2*T),o.setRenderTarget(t),o.render(f,Rl)}_blur(t,n,s,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,s,o,"latitudinal",c),this._halfBlur(u,t,s,s,o,"longitudinal",c)}_halfBlur(t,n,s,o,c,u,f){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=d;const _=d.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ir-1),T=c/b,M=isFinite(c)?1+Math.floor(g*T):ir;M>ir&&ue(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ir}`);const x=[];let D=0;for(let I=0;I<ir;++I){const j=I/T,C=Math.exp(-j*j/2);x.push(C),I===0?D+=C:I<M&&(D+=2*C)}for(let I=0;I<x.length;I++)x[I]=x[I]/D;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:R}=this;_.dTheta.value=b,_.mipInt.value=R-s;const U=this._sizeLods[o],L=3*U*(o>R-Ts?o-R+Ts:0),F=4*(this._cubeSize-U);so(n,L,F,3*U,2*U),p.setRenderTarget(n),p.render(v,Rl)}}function qL(i){const t=[],n=[],s=[];let o=i;const c=i-Ts+1+US.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);t.push(f);let p=1/f;u>i-Ts?p=US[u-i+Ts-1]:u===0&&(p=0),n.push(p);const d=1/(f-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,b=6,T=3,M=2,x=1,D=new Float32Array(T*b*y),R=new Float32Array(M*b*y),U=new Float32Array(x*b*y);for(let F=0;F<y;F++){const I=F%3*2/3-1,j=F>2?0:-1,C=[I,j,0,I+2/3,j,0,I+2/3,j+1,0,I,j,0,I+2/3,j+1,0,I,j+1,0];D.set(C,T*b*F),R.set(_,M*b*F);const N=[F,F,F,F,F,F];U.set(N,x*b*F)}const L=new Ga;L.setAttribute("position",new oa(D,T)),L.setAttribute("uv",new oa(R,M)),L.setAttribute("faceIndex",new oa(U,x)),s.push(new qi(L,null)),o>Ts&&o--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function PS(i,t,n){const s=new ji(i,t,n);return s.texture.mapping=bf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function so(i,t,n,s,o){i.viewport.set(t,n,s,o),i.scissor.set(t,n,s,o)}function YL(i,t,n){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jL,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function KL(i,t,n){const s=new Float32Array(ir),o=new ot(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function OS(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function FS(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Tf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZL(i){let t=new WeakMap,n=null;function s(f){if(f&&f.isTexture){const p=f.mapping,d=p===_m||p===xm,g=p===lr||p===xo;if(d||g){let v=t.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new LS(i)),v=d?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{const y=f.image;return d&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new LS(i)),v=d?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",c),v.texture):null}}}return f}function o(f){let p=0;const d=6;for(let g=0;g<d;g++)f[g]!==void 0&&p++;return p===d}function c(f){const p=f.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function QL(i){const t={};function n(s){if(t[s]!==void 0)return t[s];const o=i.getExtension(s);return t[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&Ql("WebGLRenderer: "+s+" extension not supported."),o}}}function JL(i,t,n,s){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",u),delete o[_.id];const y=c.get(_);y&&(t.remove(y),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function p(v){const _=v.attributes;for(const y in _)t.update(_[y],i.ARRAY_BUFFER)}function d(v){const _=[],y=v.index,b=v.attributes.position;let T=0;if(y!==null){const D=y.array;T=y.version;for(let R=0,U=D.length;R<U;R+=3){const L=D[R+0],F=D[R+1],I=D[R+2];_.push(L,F,F,I,I,L)}}else if(b!==void 0){const D=b.array;T=b.version;for(let R=0,U=D.length/3-1;R<U;R+=3){const L=R+0,F=R+1,I=R+2;_.push(L,F,F,I,I,L)}}else return;const M=new(h1(_)?v1:g1)(_,1);M.version=T;const x=c.get(v);x&&t.remove(x),c.set(v,M)}function g(v){const _=c.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&d(v)}else d(v);return c.get(v)}return{get:f,update:p,getWireframeAttribute:g}}function $L(i,t,n){let s;function o(_){s=_}let c,u;function f(_){c=_.type,u=_.bytesPerElement}function p(_,y){i.drawElements(s,y,c,_*u),n.update(y,s,1)}function d(_,y,b){b!==0&&(i.drawElementsInstanced(s,y,c,_*u,b),n.update(y,s,b))}function g(_,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,_,0,b);let M=0;for(let x=0;x<b;x++)M+=y[x];n.update(M,s,1)}function v(_,y,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)d(_[x]/u,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,_,0,T,0,b);let x=0;for(let D=0;D<b;D++)x+=y[D]*T[D];n.update(x,s,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function tP(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,f){switch(n.calls++,u){case i.TRIANGLES:n.triangles+=f*(c/3);break;case i.LINES:n.lines+=f*(c/2);break;case i.LINE_STRIP:n.lines+=f*(c-1);break;case i.LINE_LOOP:n.lines+=f*c;break;case i.POINTS:n.points+=f*c;break;default:Ne("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:s}}function eP(i,t,n){const s=new WeakMap,o=new un;function c(u,f,p){const d=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=s.get(f);if(_===void 0||_.count!==v){let C=function(){I.dispose(),s.delete(f),f.removeEventListener("dispose",C)};_!==void 0&&_.texture.dispose();const y=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,T=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],x=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let R=0;y===!0&&(R=1),b===!0&&(R=2),T===!0&&(R=3);let U=f.attributes.position.count*R,L=1;U>t.maxTextureSize&&(L=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const F=new Float32Array(U*L*4*v),I=new d1(F,U,L,v);I.type=ia,I.needsUpdate=!0;const j=R*4;for(let N=0;N<v;N++){const X=M[N],st=x[N],at=D[N],ct=U*L*4*N;for(let ht=0;ht<X.count;ht++){const z=ht*j;y===!0&&(o.fromBufferAttribute(X,ht),F[ct+z+0]=o.x,F[ct+z+1]=o.y,F[ct+z+2]=o.z,F[ct+z+3]=0),b===!0&&(o.fromBufferAttribute(st,ht),F[ct+z+4]=o.x,F[ct+z+5]=o.y,F[ct+z+6]=o.z,F[ct+z+7]=0),T===!0&&(o.fromBufferAttribute(at,ht),F[ct+z+8]=o.x,F[ct+z+9]=o.y,F[ct+z+10]=o.z,F[ct+z+11]=at.itemSize===4?o.w:1)}}_={count:v,texture:I,size:new Ie(U,L)},s.set(f,_),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",u.morphTexture,n);else{let y=0;for(let T=0;T<d.length;T++)y+=d[T];const b=f.morphTargetsRelative?1:1-y;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",d)}p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:c}}function nP(i,t,n,s){let o=new WeakMap;function c(p){const d=s.render.frame,g=p.geometry,v=t.get(p,g);if(o.get(v)!==d&&(t.update(v),o.set(v,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==d&&(n.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,i.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==d&&(_.update(),o.set(_,d))}return v}function u(){o=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:u}}const iP={[Qb]:"LINEAR_TONE_MAPPING",[Jb]:"REINHARD_TONE_MAPPING",[$b]:"CINEON_TONE_MAPPING",[t1]:"ACES_FILMIC_TONE_MAPPING",[n1]:"AGX_TONE_MAPPING",[i1]:"NEUTRAL_TONE_MAPPING",[e1]:"CUSTOM_TONE_MAPPING"};function aP(i,t,n,s,o){const c=new ji(t,n,{type:i,depthBuffer:s,stencilBuffer:o}),u=new ji(t,n,{type:za,depthBuffer:!1,stencilBuffer:!1}),f=new Ga;f.setAttribute("position",new Ba([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ba([0,2,0,0,2,0],2));const p=new JD({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new qi(f,p),g=new $l(-1,1,1,-1,0,1);let v=null,_=null,y=!1,b,T=null,M=[],x=!1;this.setSize=function(D,R){c.setSize(D,R),u.setSize(D,R);for(let U=0;U<M.length;U++){const L=M[U];L.setSize&&L.setSize(D,R)}},this.setEffects=function(D){M=D,x=M.length>0&&M[0].isRenderPass===!0;const R=c.width,U=c.height;for(let L=0;L<M.length;L++){const F=M[L];F.setSize&&F.setSize(R,U)}},this.begin=function(D,R){if(y||D.toneMapping===ra&&M.length===0)return!1;if(T=R,R!==null){const U=R.width,L=R.height;(c.width!==U||c.height!==L)&&this.setSize(U,L)}return x===!1&&D.setRenderTarget(c),b=D.toneMapping,D.toneMapping=ra,!0},this.hasRenderPass=function(){return x},this.end=function(D,R){D.toneMapping=b,y=!0;let U=c,L=u;for(let F=0;F<M.length;F++){const I=M[F];if(I.enabled!==!1&&(I.render(D,L,U,R),I.needsSwap!==!1)){const j=U;U=L,L=j}}if(v!==D.outputColorSpace||_!==D.toneMapping){v=D.outputColorSpace,_=D.toneMapping,p.defines={},Re.getTransfer(v)===je&&(p.defines.SRGB_TRANSFER="");const F=iP[_];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(T),D.render(d,g),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),f.dispose(),p.dispose()}}const T1=new Mn,tg=new Jl(1,1),A1=new d1,w1=new CD,C1=new y1,BS=[],IS=[],zS=new Float32Array(16),VS=new Float32Array(9),HS=new Float32Array(4);function Co(i,t,n){const s=i[0];if(s<=0||s>0)return i;const o=t*n;let c=BS[o];if(c===void 0&&(c=new Float32Array(o),BS[o]=c),t!==0){s.toArray(c,0);for(let u=1,f=0;u!==t;++u)f+=n,i[u].toArray(c,f)}return c}function bn(i,t){if(i.length!==t.length)return!1;for(let n=0,s=i.length;n<s;n++)if(i[n]!==t[n])return!1;return!0}function En(i,t){for(let n=0,s=t.length;n<s;n++)i[n]=t[n]}function Af(i,t){let n=IS[t];n===void 0&&(n=new Int32Array(t),IS[t]=n);for(let s=0;s!==t;++s)n[s]=i.allocateTextureUnit();return n}function sP(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function rP(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bn(n,t))return;i.uniform2fv(this.addr,t),En(n,t)}}function oP(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(bn(n,t))return;i.uniform3fv(this.addr,t),En(n,t)}}function lP(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bn(n,t))return;i.uniform4fv(this.addr,t),En(n,t)}}function cP(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(bn(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),En(n,t)}else{if(bn(n,s))return;HS.set(s),i.uniformMatrix2fv(this.addr,!1,HS),En(n,s)}}function uP(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(bn(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),En(n,t)}else{if(bn(n,s))return;VS.set(s),i.uniformMatrix3fv(this.addr,!1,VS),En(n,s)}}function fP(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(bn(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),En(n,t)}else{if(bn(n,s))return;zS.set(s),i.uniformMatrix4fv(this.addr,!1,zS),En(n,s)}}function hP(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function dP(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bn(n,t))return;i.uniform2iv(this.addr,t),En(n,t)}}function pP(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bn(n,t))return;i.uniform3iv(this.addr,t),En(n,t)}}function mP(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bn(n,t))return;i.uniform4iv(this.addr,t),En(n,t)}}function gP(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function vP(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bn(n,t))return;i.uniform2uiv(this.addr,t),En(n,t)}}function _P(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bn(n,t))return;i.uniform3uiv(this.addr,t),En(n,t)}}function xP(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bn(n,t))return;i.uniform4uiv(this.addr,t),En(n,t)}}function yP(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(tg.compareFunction=n.isReversedDepthBuffer()?Xg:kg,c=tg):c=T1,n.setTexture2D(t||c,o)}function SP(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(t||w1,o)}function MP(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(t||C1,o)}function bP(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(t||A1,o)}function EP(i){switch(i){case 5126:return sP;case 35664:return rP;case 35665:return oP;case 35666:return lP;case 35674:return cP;case 35675:return uP;case 35676:return fP;case 5124:case 35670:return hP;case 35667:case 35671:return dP;case 35668:case 35672:return pP;case 35669:case 35673:return mP;case 5125:return gP;case 36294:return vP;case 36295:return _P;case 36296:return xP;case 35678:case 36198:case 36298:case 36306:case 35682:return yP;case 35679:case 36299:case 36307:return SP;case 35680:case 36300:case 36308:case 36293:return MP;case 36289:case 36303:case 36311:case 36292:return bP}}function TP(i,t){i.uniform1fv(this.addr,t)}function AP(i,t){const n=Co(t,this.size,2);i.uniform2fv(this.addr,n)}function wP(i,t){const n=Co(t,this.size,3);i.uniform3fv(this.addr,n)}function CP(i,t){const n=Co(t,this.size,4);i.uniform4fv(this.addr,n)}function RP(i,t){const n=Co(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function DP(i,t){const n=Co(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function UP(i,t){const n=Co(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function NP(i,t){i.uniform1iv(this.addr,t)}function LP(i,t){i.uniform2iv(this.addr,t)}function PP(i,t){i.uniform3iv(this.addr,t)}function OP(i,t){i.uniform4iv(this.addr,t)}function FP(i,t){i.uniform1uiv(this.addr,t)}function BP(i,t){i.uniform2uiv(this.addr,t)}function IP(i,t){i.uniform3uiv(this.addr,t)}function zP(i,t){i.uniform4uiv(this.addr,t)}function VP(i,t,n){const s=this.cache,o=t.length,c=Af(n,o);bn(s,c)||(i.uniform1iv(this.addr,c),En(s,c));let u;this.type===i.SAMPLER_2D_SHADOW?u=tg:u=T1;for(let f=0;f!==o;++f)n.setTexture2D(t[f]||u,c[f])}function HP(i,t,n){const s=this.cache,o=t.length,c=Af(n,o);bn(s,c)||(i.uniform1iv(this.addr,c),En(s,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||w1,c[u])}function GP(i,t,n){const s=this.cache,o=t.length,c=Af(n,o);bn(s,c)||(i.uniform1iv(this.addr,c),En(s,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||C1,c[u])}function kP(i,t,n){const s=this.cache,o=t.length,c=Af(n,o);bn(s,c)||(i.uniform1iv(this.addr,c),En(s,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||A1,c[u])}function XP(i){switch(i){case 5126:return TP;case 35664:return AP;case 35665:return wP;case 35666:return CP;case 35674:return RP;case 35675:return DP;case 35676:return UP;case 5124:case 35670:return NP;case 35667:case 35671:return LP;case 35668:case 35672:return PP;case 35669:case 35673:return OP;case 5125:return FP;case 36294:return BP;case 36295:return IP;case 36296:return zP;case 35678:case 36198:case 36298:case 36306:case 35682:return VP;case 35679:case 36299:case 36307:return HP;case 35680:case 36300:case 36308:case 36293:return GP;case 36289:case 36303:case 36311:case 36292:return kP}}class jP{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=EP(n.type)}}class WP{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XP(n.type)}}class qP{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(t,n[f.id],s)}}}const Dp=/(\w+)(\])?(\[|\.)?/g;function GS(i,t){i.seq.push(t),i.map[t.id]=t}function YP(i,t,n){const s=i.name,o=s.length;for(Dp.lastIndex=0;;){const c=Dp.exec(s),u=Dp.lastIndex;let f=c[1];const p=c[2]==="]",d=c[3];if(p&&(f=f|0),d===void 0||d==="["&&u+2===o){GS(n,d===void 0?new jP(f,i,t):new WP(f,i,t));break}else{let v=n.map[f];v===void 0&&(v=new qP(f),GS(n,v)),n=v}}}class rf{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=t.getActiveUniform(n,u),p=t.getUniformLocation(n,f.name);YP(f,p,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,s,o){const c=this.map[n];c!==void 0&&c.setValue(t,s,o)}setOptional(t,n,s){const o=n[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,n,s,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=s[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,o)}}static seqWithValue(t,n){const s=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&s.push(u)}return s}}function kS(i,t,n){const s=i.createShader(t);return i.shaderSource(s,n),i.compileShader(s),s}const KP=37297;let ZP=0;function QP(i,t){const n=i.split(`
`),s=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const f=u+1;s.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return s.join(`
`)}const XS=new pe;function JP(i){Re._getMatrix(XS,Re.workingColorSpace,i);const t=`mat3( ${XS.elements.map(n=>n.toFixed(4))} )`;switch(Re.getTransfer(i)){case gf:return[t,"LinearTransferOETF"];case je:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jS(i,t,n){const s=i.getShaderParameter(t,i.COMPILE_STATUS),c=(i.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+QP(i.getShaderSource(t),f)}else return c}function $P(i,t){const n=JP(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const tO={[Qb]:"Linear",[Jb]:"Reinhard",[$b]:"Cineon",[t1]:"ACESFilmic",[n1]:"AgX",[i1]:"Neutral",[e1]:"Custom"};function eO(i,t){const n=tO[t];return n===void 0?(ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wu=new ot;function nO(){Re.getLuminanceCoefficients(Wu);const i=Wu.x.toFixed(4),t=Wu.y.toFixed(4),n=Wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iO(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ll).join(`
`)}function aO(i){const t=[];for(const n in i){const s=i[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function sO(i,t){const n={},s=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=i.getActiveAttrib(t,o),u=c.name;let f=1;c.type===i.FLOAT_MAT2&&(f=2),c.type===i.FLOAT_MAT3&&(f=3),c.type===i.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:i.getAttribLocation(t,u),locationSize:f}}return n}function Ll(i){return i!==""}function WS(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qS(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rO=/^[ \t]*#include +<([\w\d./]+)>/gm;function eg(i){return i.replace(rO,lO)}const oO=new Map;function lO(i,t){let n=ge[t];if(n===void 0){const s=oO.get(t);if(s!==void 0)n=ge[s],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return eg(n)}const cO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function YS(i){return i.replace(cO,uO)}function uO(i,t,n,s){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function KS(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const fO={[tf]:"SHADOWMAP_TYPE_PCF",[Nl]:"SHADOWMAP_TYPE_VSM"};function hO(i){return fO[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dO={[lr]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE",[bf]:"ENVMAP_TYPE_CUBE_UV"};function pO(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":dO[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const mO={[xo]:"ENVMAP_MODE_REFRACTION"};function gO(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":mO[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vO={[Zb]:"ENVMAP_BLENDING_MULTIPLY",[lD]:"ENVMAP_BLENDING_MIX",[cD]:"ENVMAP_BLENDING_ADD"};function _O(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":vO[i.combine]||"ENVMAP_BLENDING_NONE"}function xO(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function yO(i,t,n,s){const o=i.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=hO(n),d=pO(n),g=gO(n),v=_O(n),_=xO(n),y=iO(n),b=aO(c),T=o.createProgram();let M,x,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ll).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ll).join(`
`),x.length>0&&(x+=`
`)):(M=[KS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ll).join(`
`),x=[KS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ra?"#define TONE_MAPPING":"",n.toneMapping!==ra?ge.tonemapping_pars_fragment:"",n.toneMapping!==ra?eO("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,$P("linearToOutputTexel",n.outputColorSpace),nO(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ll).join(`
`)),u=eg(u),u=WS(u,n),u=qS(u,n),f=eg(f),f=WS(f,n),f=qS(f,n),u=YS(u),f=YS(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===cS?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=D+M+u,U=D+x+f,L=kS(o,o.VERTEX_SHADER,R),F=kS(o,o.FRAGMENT_SHADER,U);o.attachShader(T,L),o.attachShader(T,F),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function I(X){if(i.debug.checkShaderErrors){const st=o.getProgramInfoLog(T)||"",at=o.getShaderInfoLog(L)||"",ct=o.getShaderInfoLog(F)||"",ht=st.trim(),z=at.trim(),H=ct.trim();let Q=!0,yt=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,T,L,F);else{const xt=jS(o,L,"vertex"),O=jS(o,F,"fragment");Ne("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ht+`
`+xt+`
`+O)}else ht!==""?ue("WebGLProgram: Program Info Log:",ht):(z===""||H==="")&&(yt=!1);yt&&(X.diagnostics={runnable:Q,programLog:ht,vertexShader:{log:z,prefix:M},fragmentShader:{log:H,prefix:x}})}o.deleteShader(L),o.deleteShader(F),j=new rf(o,T),C=sO(o,T)}let j;this.getUniforms=function(){return j===void 0&&I(this),j};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=o.getProgramParameter(T,KP)),N},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZP++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=L,this.fragmentShader=F,this}let SO=0;class MO{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new bO(t),n.set(t,s)),s}}class bO{constructor(t){this.id=SO++,this.code=t,this.usedTimes=0}}function EO(i,t,n,s,o,c,u){const f=new p1,p=new MO,d=new Set,g=[],v=new Map,_=o.logarithmicDepthBuffer;let y=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return d.add(C),C===0?"uv":`uv${C}`}function M(C,N,X,st,at){const ct=st.fog,ht=at.geometry,z=C.isMeshStandardMaterial?st.environment:null,H=(C.isMeshStandardMaterial?n:t).get(C.envMap||z),Q=H&&H.mapping===bf?H.image.height:null,yt=b[C.type];C.precision!==null&&(y=o.getMaxPrecision(C.precision),y!==C.precision&&ue("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const xt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,O=xt!==void 0?xt.length:0;let et=0;ht.morphAttributes.position!==void 0&&(et=1),ht.morphAttributes.normal!==void 0&&(et=2),ht.morphAttributes.color!==void 0&&(et=3);let gt,At,Ht,tt;if(yt){const we=na[yt];gt=we.vertexShader,At=we.fragmentShader}else gt=C.vertexShader,At=C.fragmentShader,p.update(C),Ht=p.getVertexShaderID(C),tt=p.getFragmentShaderID(C);const ft=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Xt=at.isInstancedMesh===!0,kt=at.isBatchedMesh===!0,ve=!!C.map,$e=!!C.matcap,_e=!!H,me=!!C.aoMap,Ae=!!C.lightMap,re=!!C.bumpMap,be=!!C.normalMap,G=!!C.displacementMap,Pe=!!C.emissiveMap,Pt=!!C.metalnessMap,le=!!C.roughnessMap,Ot=C.anisotropy>0,P=C.clearcoat>0,E=C.dispersion>0,q=C.iridescence>0,pt=C.sheen>0,St=C.transmission>0,ut=Ot&&!!C.anisotropyMap,Jt=P&&!!C.clearcoatMap,Rt=P&&!!C.clearcoatNormalMap,Yt=P&&!!C.clearcoatRoughnessMap,ae=q&&!!C.iridescenceMap,bt=q&&!!C.iridescenceThicknessMap,Et=pt&&!!C.sheenColorMap,Vt=pt&&!!C.sheenRoughnessMap,It=!!C.specularMap,Dt=!!C.specularColorMap,he=!!C.specularIntensityMap,W=St&&!!C.transmissionMap,Nt=St&&!!C.thicknessMap,Tt=!!C.gradientMap,zt=!!C.alphaMap,Mt=C.alphaTest>0,_t=!!C.alphaHash,wt=!!C.extensions;let se=ra;C.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(se=i.toneMapping);const He={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:gt,fragmentShader:At,defines:C.defines,customVertexShaderID:Ht,customFragmentShaderID:tt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:kt,batchingColor:kt&&at._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&at.instanceColor!==null,instancingMorph:Xt&&at.morphTexture!==null,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:So,alphaToCoverage:!!C.alphaToCoverage,map:ve,matcap:$e,envMap:_e,envMapMode:_e&&H.mapping,envMapCubeUVHeight:Q,aoMap:me,lightMap:Ae,bumpMap:re,normalMap:be,displacementMap:G,emissiveMap:Pe,normalMapObjectSpace:be&&C.normalMapType===dD,normalMapTangentSpace:be&&C.normalMapType===hD,metalnessMap:Pt,roughnessMap:le,anisotropy:Ot,anisotropyMap:ut,clearcoat:P,clearcoatMap:Jt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Yt,dispersion:E,iridescence:q,iridescenceMap:ae,iridescenceThicknessMap:bt,sheen:pt,sheenColorMap:Et,sheenRoughnessMap:Vt,specularMap:It,specularColorMap:Dt,specularIntensityMap:he,transmission:St,transmissionMap:W,thicknessMap:Nt,gradientMap:Tt,opaque:C.transparent===!1&&C.blending===po&&C.alphaToCoverage===!1,alphaMap:zt,alphaTest:Mt,alphaHash:_t,combine:C.combine,mapUv:ve&&T(C.map.channel),aoMapUv:me&&T(C.aoMap.channel),lightMapUv:Ae&&T(C.lightMap.channel),bumpMapUv:re&&T(C.bumpMap.channel),normalMapUv:be&&T(C.normalMap.channel),displacementMapUv:G&&T(C.displacementMap.channel),emissiveMapUv:Pe&&T(C.emissiveMap.channel),metalnessMapUv:Pt&&T(C.metalnessMap.channel),roughnessMapUv:le&&T(C.roughnessMap.channel),anisotropyMapUv:ut&&T(C.anisotropyMap.channel),clearcoatMapUv:Jt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&T(C.sheenRoughnessMap.channel),specularMapUv:It&&T(C.specularMap.channel),specularColorMapUv:Dt&&T(C.specularColorMap.channel),specularIntensityMapUv:he&&T(C.specularIntensityMap.channel),transmissionMapUv:W&&T(C.transmissionMap.channel),thicknessMapUv:Nt&&T(C.thicknessMap.channel),alphaMapUv:zt&&T(C.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(be||Ot),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ht.attributes.uv&&(ve||zt),fog:!!ct,useFog:C.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ct,skinning:at.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:et,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:ve&&C.map.isVideoTexture===!0&&Re.getTransfer(C.map.colorSpace)===je,decodeVideoTextureEmissive:Pe&&C.emissiveMap.isVideoTexture===!0&&Re.getTransfer(C.emissiveMap.colorSpace)===je,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===La,flipSided:C.side===ii,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:wt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&C.extensions.multiDraw===!0||kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return He.vertexUv1s=d.has(1),He.vertexUv2s=d.has(2),He.vertexUv3s=d.has(3),d.clear(),He}function x(C){const N=[];if(C.shaderID?N.push(C.shaderID):(N.push(C.customVertexShaderID),N.push(C.customFragmentShaderID)),C.defines!==void 0)for(const X in C.defines)N.push(X),N.push(C.defines[X]);return C.isRawShaderMaterial===!1&&(D(N,C),R(N,C),N.push(i.outputColorSpace)),N.push(C.customProgramCacheKey),N.join()}function D(C,N){C.push(N.precision),C.push(N.outputColorSpace),C.push(N.envMapMode),C.push(N.envMapCubeUVHeight),C.push(N.mapUv),C.push(N.alphaMapUv),C.push(N.lightMapUv),C.push(N.aoMapUv),C.push(N.bumpMapUv),C.push(N.normalMapUv),C.push(N.displacementMapUv),C.push(N.emissiveMapUv),C.push(N.metalnessMapUv),C.push(N.roughnessMapUv),C.push(N.anisotropyMapUv),C.push(N.clearcoatMapUv),C.push(N.clearcoatNormalMapUv),C.push(N.clearcoatRoughnessMapUv),C.push(N.iridescenceMapUv),C.push(N.iridescenceThicknessMapUv),C.push(N.sheenColorMapUv),C.push(N.sheenRoughnessMapUv),C.push(N.specularMapUv),C.push(N.specularColorMapUv),C.push(N.specularIntensityMapUv),C.push(N.transmissionMapUv),C.push(N.thicknessMapUv),C.push(N.combine),C.push(N.fogExp2),C.push(N.sizeAttenuation),C.push(N.morphTargetsCount),C.push(N.morphAttributeCount),C.push(N.numDirLights),C.push(N.numPointLights),C.push(N.numSpotLights),C.push(N.numSpotLightMaps),C.push(N.numHemiLights),C.push(N.numRectAreaLights),C.push(N.numDirLightShadows),C.push(N.numPointLightShadows),C.push(N.numSpotLightShadows),C.push(N.numSpotLightShadowsWithMaps),C.push(N.numLightProbes),C.push(N.shadowMapType),C.push(N.toneMapping),C.push(N.numClippingPlanes),C.push(N.numClipIntersection),C.push(N.depthPacking)}function R(C,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),C.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),C.push(f.mask)}function U(C){const N=b[C.type];let X;if(N){const st=na[N];X=GD.clone(st.uniforms)}else X=C.uniforms;return X}function L(C,N){let X=v.get(N);return X!==void 0?++X.usedTimes:(X=new yO(i,N,C,c),g.push(X),v.set(N,X)),X}function F(C){if(--C.usedTimes===0){const N=g.indexOf(C);g[N]=g[g.length-1],g.pop(),v.delete(C.cacheKey),C.destroy()}}function I(C){p.remove(C)}function j(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:U,acquireProgram:L,releaseProgram:F,releaseShaderCache:I,programs:g,dispose:j}}function TO(){let i=new WeakMap;function t(u){return i.has(u)}function n(u){let f=i.get(u);return f===void 0&&(f={},i.set(u,f)),f}function s(u){i.delete(u)}function o(u,f,p){i.get(u)[f]=p}function c(){i=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:c}}function AO(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ZS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function QS(){const i=[];let t=0;const n=[],s=[],o=[];function c(){t=0,n.length=0,s.length=0,o.length=0}function u(v,_,y,b,T,M){let x=i[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:y,groupOrder:b,renderOrder:v.renderOrder,z:T,group:M},i[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=y,x.groupOrder=b,x.renderOrder=v.renderOrder,x.z=T,x.group=M),t++,x}function f(v,_,y,b,T,M){const x=u(v,_,y,b,T,M);y.transmission>0?s.push(x):y.transparent===!0?o.push(x):n.push(x)}function p(v,_,y,b,T,M){const x=u(v,_,y,b,T,M);y.transmission>0?s.unshift(x):y.transparent===!0?o.unshift(x):n.unshift(x)}function d(v,_){n.length>1&&n.sort(v||AO),s.length>1&&s.sort(_||ZS),o.length>1&&o.sort(_||ZS)}function g(){for(let v=t,_=i.length;v<_;v++){const y=i[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:s,transparent:o,init:c,push:f,unshift:p,finish:g,sort:d}}function wO(){let i=new WeakMap;function t(s,o){const c=i.get(s);let u;return c===void 0?(u=new QS,i.set(s,[u])):o>=c.length?(u=new QS,c.push(u)):u=c[o],u}function n(){i=new WeakMap}return{get:t,dispose:n}}function CO(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ot,color:new Ve};break;case"SpotLight":n={position:new ot,direction:new ot,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ot,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ot,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return i[t.id]=n,n}}}function RO(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let DO=0;function UO(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function NO(i){const t=new CO,n=RO(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new ot);const o=new ot,c=new _n,u=new _n;function f(d){let g=0,v=0,_=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,b=0,T=0,M=0,x=0,D=0,R=0,U=0,L=0,F=0,I=0;d.sort(UO);for(let C=0,N=d.length;C<N;C++){const X=d[C],st=X.color,at=X.intensity,ct=X.distance;let ht=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===yo?ht=X.shadow.map.texture:ht=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)g+=st.r*at,v+=st.g*at,_+=st.b*at;else if(X.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(X.sh.coefficients[z],at);I++}else if(X.isDirectionalLight){const z=t.get(X);if(z.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const H=X.shadow,Q=n.get(X);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,s.directionalShadow[y]=Q,s.directionalShadowMap[y]=ht,s.directionalShadowMatrix[y]=X.shadow.matrix,D++}s.directional[y]=z,y++}else if(X.isSpotLight){const z=t.get(X);z.position.setFromMatrixPosition(X.matrixWorld),z.color.copy(st).multiplyScalar(at),z.distance=ct,z.coneCos=Math.cos(X.angle),z.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),z.decay=X.decay,s.spot[T]=z;const H=X.shadow;if(X.map&&(s.spotLightMap[L]=X.map,L++,H.updateMatrices(X),X.castShadow&&F++),s.spotLightMatrix[T]=H.matrix,X.castShadow){const Q=n.get(X);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,s.spotShadow[T]=Q,s.spotShadowMap[T]=ht,U++}T++}else if(X.isRectAreaLight){const z=t.get(X);z.color.copy(st).multiplyScalar(at),z.halfWidth.set(X.width*.5,0,0),z.halfHeight.set(0,X.height*.5,0),s.rectArea[M]=z,M++}else if(X.isPointLight){const z=t.get(X);if(z.color.copy(X.color).multiplyScalar(X.intensity),z.distance=X.distance,z.decay=X.decay,X.castShadow){const H=X.shadow,Q=n.get(X);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,s.pointShadow[b]=Q,s.pointShadowMap[b]=ht,s.pointShadowMatrix[b]=X.shadow.matrix,R++}s.point[b]=z,b++}else if(X.isHemisphereLight){const z=t.get(X);z.skyColor.copy(X.color).multiplyScalar(at),z.groundColor.copy(X.groundColor).multiplyScalar(at),s.hemi[x]=z,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=_;const j=s.hash;(j.directionalLength!==y||j.pointLength!==b||j.spotLength!==T||j.rectAreaLength!==M||j.hemiLength!==x||j.numDirectionalShadows!==D||j.numPointShadows!==R||j.numSpotShadows!==U||j.numSpotMaps!==L||j.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=M,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=U+L-F,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=I,j.directionalLength=y,j.pointLength=b,j.spotLength=T,j.rectAreaLength=M,j.hemiLength=x,j.numDirectionalShadows=D,j.numPointShadows=R,j.numSpotShadows=U,j.numSpotMaps=L,j.numLightProbes=I,s.version=DO++)}function p(d,g){let v=0,_=0,y=0,b=0,T=0;const M=g.matrixWorldInverse;for(let x=0,D=d.length;x<D;x++){const R=d[x];if(R.isDirectionalLight){const U=s.directional[v];U.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(M),v++}else if(R.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(M),y++}else if(R.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(M),u.identity(),c.copy(R.matrixWorld),c.premultiply(M),u.extractRotation(c),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),b++}else if(R.isPointLight){const U=s.point[_];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(M),_++}else if(R.isHemisphereLight){const U=s.hemi[T];U.direction.setFromMatrixPosition(R.matrixWorld),U.direction.transformDirection(M),T++}}}return{setup:f,setupView:p,state:s}}function JS(i){const t=new NO(i),n=[],s=[];function o(g){d.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function u(g){s.push(g)}function f(){t.setup(n)}function p(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function LO(i){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let f;return u===void 0?(f=new JS(i),t.set(o,[f])):c>=u.length?(f=new JS(i),u.push(f)):f=u[c],f}function s(){t=new WeakMap}return{get:n,dispose:s}}const PO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OO=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,FO=[new ot(1,0,0),new ot(-1,0,0),new ot(0,1,0),new ot(0,-1,0),new ot(0,0,1),new ot(0,0,-1)],BO=[new ot(0,-1,0),new ot(0,-1,0),new ot(0,0,1),new ot(0,0,-1),new ot(0,-1,0),new ot(0,-1,0)],$S=new _n,Dl=new ot,Up=new ot;function IO(i,t,n){let s=new M1;const o=new Ie,c=new Ie,u=new un,f=new $D,p=new tU,d={},g=n.maxTextureSize,v={[ws]:ii,[ii]:ws,[La]:La},_=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:PO,fragmentShader:OO}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ga;b.setAttribute("position",new oa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new qi(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tf;let x=this.type;this.render=function(F,I,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;F.type===k3&&(ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=tf);const C=i.getRenderTarget(),N=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),st=i.state;st.setBlending(Oa),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const at=x!==this.type;at&&I.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(ht=>ht.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,ht=F.length;ct<ht;ct++){const z=F[ct],H=z.shadow;if(H===void 0){ue("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const Q=H.getFrameExtents();if(o.multiply(Q),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/Q.x),o.x=c.x*Q.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/Q.y),o.y=c.y*Q.y,H.mapSize.y=c.y)),H.map===null||at===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Nl){if(z.isPointLight){ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ji(o.x,o.y,{format:yo,type:za,minFilter:zn,magFilter:zn,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Jl(o.x,o.y,ia),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Va,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=In,H.map.depthTexture.magFilter=In}else{z.isPointLight?(H.map=new S1(o.x),H.map.depthTexture=new QD(o.x,la)):(H.map=new ji(o.x,o.y),H.map.depthTexture=new Jl(o.x,o.y,la)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Va;const xt=i.state.buffers.depth.getReversed();this.type===tf?(H.map.depthTexture.compareFunction=xt?Xg:kg,H.map.depthTexture.minFilter=zn,H.map.depthTexture.magFilter=zn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=In,H.map.depthTexture.magFilter=In)}H.camera.updateProjectionMatrix()}const yt=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<yt;xt++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,xt),i.clear();else{xt===0&&(i.setRenderTarget(H.map),i.clear());const O=H.getViewport(xt);u.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),st.viewport(u)}if(z.isPointLight){const O=H.camera,et=H.matrix,gt=z.distance||O.far;gt!==O.far&&(O.far=gt,O.updateProjectionMatrix()),Dl.setFromMatrixPosition(z.matrixWorld),O.position.copy(Dl),Up.copy(O.position),Up.add(FO[xt]),O.up.copy(BO[xt]),O.lookAt(Up),O.updateMatrixWorld(),et.makeTranslation(-Dl.x,-Dl.y,-Dl.z),$S.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H._frustum.setFromProjectionMatrix($S,O.coordinateSystem,O.reversedDepth)}else H.updateMatrices(z);s=H.getFrustum(),U(I,j,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Nl&&D(H,j),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,i.setRenderTarget(C,N,X)};function D(F,I){const j=t.update(T);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ji(o.x,o.y,{format:yo,type:za})),_.uniforms.shadow_pass.value=F.map.depthTexture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(I,null,j,_,T,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(I,null,j,y,T,null)}function R(F,I,j,C){let N=null;const X=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(X!==void 0)N=X;else if(N=j.isPointLight===!0?p:f,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const st=N.uuid,at=I.uuid;let ct=d[st];ct===void 0&&(ct={},d[st]=ct);let ht=ct[at];ht===void 0&&(ht=N.clone(),ct[at]=ht,I.addEventListener("dispose",L)),N=ht}if(N.visible=I.visible,N.wireframe=I.wireframe,C===Nl?N.side=I.shadowSide!==null?I.shadowSide:I.side:N.side=I.shadowSide!==null?I.shadowSide:v[I.side],N.alphaMap=I.alphaMap,N.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,N.map=I.map,N.clipShadows=I.clipShadows,N.clippingPlanes=I.clippingPlanes,N.clipIntersection=I.clipIntersection,N.displacementMap=I.displacementMap,N.displacementScale=I.displacementScale,N.displacementBias=I.displacementBias,N.wireframeLinewidth=I.wireframeLinewidth,N.linewidth=I.linewidth,j.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const st=i.properties.get(N);st.light=j}return N}function U(F,I,j,C,N){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&N===Nl)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const at=t.update(F),ct=F.material;if(Array.isArray(ct)){const ht=at.groups;for(let z=0,H=ht.length;z<H;z++){const Q=ht[z],yt=ct[Q.materialIndex];if(yt&&yt.visible){const xt=R(F,yt,C,N);F.onBeforeShadow(i,F,I,j,at,xt,Q),i.renderBufferDirect(j,null,at,xt,F,Q),F.onAfterShadow(i,F,I,j,at,xt,Q)}}}else if(ct.visible){const ht=R(F,ct,C,N);F.onBeforeShadow(i,F,I,j,at,ht,null),i.renderBufferDirect(j,null,at,ht,F,null),F.onAfterShadow(i,F,I,j,at,ht,null)}}const st=F.children;for(let at=0,ct=st.length;at<ct;at++)U(st[at],I,j,C,N)}function L(F){F.target.removeEventListener("dispose",L);for(const j in d){const C=d[j],N=F.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}const zO={[fm]:hm,[dm]:gm,[pm]:vm,[_o]:mm,[hm]:fm,[gm]:dm,[vm]:pm,[mm]:_o};function VO(i,t){function n(){let W=!1;const Nt=new un;let Tt=null;const zt=new un(0,0,0,0);return{setMask:function(Mt){Tt!==Mt&&!W&&(i.colorMask(Mt,Mt,Mt,Mt),Tt=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,_t,wt,se,He){He===!0&&(Mt*=se,_t*=se,wt*=se),Nt.set(Mt,_t,wt,se),zt.equals(Nt)===!1&&(i.clearColor(Mt,_t,wt,se),zt.copy(Nt))},reset:function(){W=!1,Tt=null,zt.set(-1,0,0,0)}}}function s(){let W=!1,Nt=!1,Tt=null,zt=null,Mt=null;return{setReversed:function(_t){if(Nt!==_t){const wt=t.get("EXT_clip_control");_t?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),Nt=_t;const se=Mt;Mt=null,this.setClear(se)}},getReversed:function(){return Nt},setTest:function(_t){_t?ft(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(_t){Tt!==_t&&!W&&(i.depthMask(_t),Tt=_t)},setFunc:function(_t){if(Nt&&(_t=zO[_t]),zt!==_t){switch(_t){case fm:i.depthFunc(i.NEVER);break;case hm:i.depthFunc(i.ALWAYS);break;case dm:i.depthFunc(i.LESS);break;case _o:i.depthFunc(i.LEQUAL);break;case pm:i.depthFunc(i.EQUAL);break;case mm:i.depthFunc(i.GEQUAL);break;case gm:i.depthFunc(i.GREATER);break;case vm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}zt=_t}},setLocked:function(_t){W=_t},setClear:function(_t){Mt!==_t&&(Nt&&(_t=1-_t),i.clearDepth(_t),Mt=_t)},reset:function(){W=!1,Tt=null,zt=null,Mt=null,Nt=!1}}}function o(){let W=!1,Nt=null,Tt=null,zt=null,Mt=null,_t=null,wt=null,se=null,He=null;return{setTest:function(we){W||(we?ft(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(we){Nt!==we&&!W&&(i.stencilMask(we),Nt=we)},setFunc:function(we,Vn,Di){(Tt!==we||zt!==Vn||Mt!==Di)&&(i.stencilFunc(we,Vn,Di),Tt=we,zt=Vn,Mt=Di)},setOp:function(we,Vn,Di){(_t!==we||wt!==Vn||se!==Di)&&(i.stencilOp(we,Vn,Di),_t=we,wt=Vn,se=Di)},setLocked:function(we){W=we},setClear:function(we){He!==we&&(i.clearStencil(we),He=we)},reset:function(){W=!1,Nt=null,Tt=null,zt=null,Mt=null,_t=null,wt=null,se=null,He=null}}}const c=new n,u=new s,f=new o,p=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,y=[],b=null,T=!1,M=null,x=null,D=null,R=null,U=null,L=null,F=null,I=new Ve(0,0,0),j=0,C=!1,N=null,X=null,st=null,at=null,ct=null;const ht=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=H>=2);let yt=null,xt={};const O=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),gt=new un().fromArray(O),At=new un().fromArray(et);function Ht(W,Nt,Tt,zt){const Mt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(W,_t),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<Tt;wt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Nt,0,i.RGBA,1,1,zt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(Nt+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return _t}const tt={};tt[i.TEXTURE_2D]=Ht(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=Ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=Ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=Ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ft(i.DEPTH_TEST),u.setFunc(_o),re(!1),be(aS),ft(i.CULL_FACE),me(Oa);function ft(W){g[W]!==!0&&(i.enable(W),g[W]=!0)}function Ct(W){g[W]!==!1&&(i.disable(W),g[W]=!1)}function Xt(W,Nt){return v[W]!==Nt?(i.bindFramebuffer(W,Nt),v[W]=Nt,W===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Nt),W===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Nt),!0):!1}function kt(W,Nt){let Tt=y,zt=!1;if(W){Tt=_.get(Nt),Tt===void 0&&(Tt=[],_.set(Nt,Tt));const Mt=W.textures;if(Tt.length!==Mt.length||Tt[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,wt=Mt.length;_t<wt;_t++)Tt[_t]=i.COLOR_ATTACHMENT0+_t;Tt.length=Mt.length,zt=!0}}else Tt[0]!==i.BACK&&(Tt[0]=i.BACK,zt=!0);zt&&i.drawBuffers(Tt)}function ve(W){return b!==W?(i.useProgram(W),b=W,!0):!1}const $e={[nr]:i.FUNC_ADD,[j3]:i.FUNC_SUBTRACT,[W3]:i.FUNC_REVERSE_SUBTRACT};$e[q3]=i.MIN,$e[Y3]=i.MAX;const _e={[K3]:i.ZERO,[Z3]:i.ONE,[Q3]:i.SRC_COLOR,[cm]:i.SRC_ALPHA,[iD]:i.SRC_ALPHA_SATURATE,[eD]:i.DST_COLOR,[$3]:i.DST_ALPHA,[J3]:i.ONE_MINUS_SRC_COLOR,[um]:i.ONE_MINUS_SRC_ALPHA,[nD]:i.ONE_MINUS_DST_COLOR,[tD]:i.ONE_MINUS_DST_ALPHA,[aD]:i.CONSTANT_COLOR,[sD]:i.ONE_MINUS_CONSTANT_COLOR,[rD]:i.CONSTANT_ALPHA,[oD]:i.ONE_MINUS_CONSTANT_ALPHA};function me(W,Nt,Tt,zt,Mt,_t,wt,se,He,we){if(W===Oa){T===!0&&(Ct(i.BLEND),T=!1);return}if(T===!1&&(ft(i.BLEND),T=!0),W!==X3){if(W!==M||we!==C){if((x!==nr||U!==nr)&&(i.blendEquation(i.FUNC_ADD),x=nr,U=nr),we)switch(W){case po:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lm:i.blendFunc(i.ONE,i.ONE);break;case sS:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rS:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ne("WebGLState: Invalid blending: ",W);break}else switch(W){case po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lm:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sS:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rS:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",W);break}D=null,R=null,L=null,F=null,I.set(0,0,0),j=0,M=W,C=we}return}Mt=Mt||Nt,_t=_t||Tt,wt=wt||zt,(Nt!==x||Mt!==U)&&(i.blendEquationSeparate($e[Nt],$e[Mt]),x=Nt,U=Mt),(Tt!==D||zt!==R||_t!==L||wt!==F)&&(i.blendFuncSeparate(_e[Tt],_e[zt],_e[_t],_e[wt]),D=Tt,R=zt,L=_t,F=wt),(se.equals(I)===!1||He!==j)&&(i.blendColor(se.r,se.g,se.b,He),I.copy(se),j=He),M=W,C=!1}function Ae(W,Nt){W.side===La?Ct(i.CULL_FACE):ft(i.CULL_FACE);let Tt=W.side===ii;Nt&&(Tt=!Tt),re(Tt),W.blending===po&&W.transparent===!1?me(Oa):me(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const zt=W.stencilWrite;f.setTest(zt),zt&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Pe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(W){N!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),N=W)}function be(W){W!==H3?(ft(i.CULL_FACE),W!==X&&(W===aS?i.cullFace(i.BACK):W===G3?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),X=W}function G(W){W!==st&&(z&&i.lineWidth(W),st=W)}function Pe(W,Nt,Tt){W?(ft(i.POLYGON_OFFSET_FILL),(at!==Nt||ct!==Tt)&&(i.polygonOffset(Nt,Tt),at=Nt,ct=Tt)):Ct(i.POLYGON_OFFSET_FILL)}function Pt(W){W?ft(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function le(W){W===void 0&&(W=i.TEXTURE0+ht-1),yt!==W&&(i.activeTexture(W),yt=W)}function Ot(W,Nt,Tt){Tt===void 0&&(yt===null?Tt=i.TEXTURE0+ht-1:Tt=yt);let zt=xt[Tt];zt===void 0&&(zt={type:void 0,texture:void 0},xt[Tt]=zt),(zt.type!==W||zt.texture!==Nt)&&(yt!==Tt&&(i.activeTexture(Tt),yt=Tt),i.bindTexture(W,Nt||tt[W]),zt.type=W,zt.texture=Nt)}function P(){const W=xt[yt];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(W){Ne("WebGLState:",W)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(W){Ne("WebGLState:",W)}}function pt(){try{i.texSubImage2D(...arguments)}catch(W){Ne("WebGLState:",W)}}function St(){try{i.texSubImage3D(...arguments)}catch(W){Ne("WebGLState:",W)}}function ut(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Ne("WebGLState:",W)}}function Jt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Ne("WebGLState:",W)}}function Rt(){try{i.texStorage2D(...arguments)}catch(W){Ne("WebGLState:",W)}}function Yt(){try{i.texStorage3D(...arguments)}catch(W){Ne("WebGLState:",W)}}function ae(){try{i.texImage2D(...arguments)}catch(W){Ne("WebGLState:",W)}}function bt(){try{i.texImage3D(...arguments)}catch(W){Ne("WebGLState:",W)}}function Et(W){gt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Vt(W){At.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function It(W,Nt){let Tt=d.get(Nt);Tt===void 0&&(Tt=new WeakMap,d.set(Nt,Tt));let zt=Tt.get(W);zt===void 0&&(zt=i.getUniformBlockIndex(Nt,W.name),Tt.set(W,zt))}function Dt(W,Nt){const zt=d.get(Nt).get(W);p.get(Nt)!==zt&&(i.uniformBlockBinding(Nt,zt,W.__bindingPointIndex),p.set(Nt,zt))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},yt=null,xt={},v={},_=new WeakMap,y=[],b=null,T=!1,M=null,x=null,D=null,R=null,U=null,L=null,F=null,I=new Ve(0,0,0),j=0,C=!1,N=null,X=null,st=null,at=null,ct=null,gt.set(0,0,i.canvas.width,i.canvas.height),At.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:ft,disable:Ct,bindFramebuffer:Xt,drawBuffers:kt,useProgram:ve,setBlending:me,setMaterial:Ae,setFlipSided:re,setCullFace:be,setLineWidth:G,setPolygonOffset:Pe,setScissorTest:Pt,activeTexture:le,bindTexture:Ot,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:ae,texImage3D:bt,updateUBOMapping:It,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:Yt,texSubImage2D:pt,texSubImage3D:St,compressedTexSubImage2D:ut,compressedTexSubImage3D:Jt,scissor:Et,viewport:Vt,reset:he}}function HO(i,t,n,s,o,c,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ie,g=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,E){return y?new OffscreenCanvas(P,E):_f("canvas")}function T(P,E,q){let pt=1;const St=Ot(P);if((St.width>q||St.height>q)&&(pt=q/Math.max(St.width,St.height)),pt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ut=Math.floor(pt*St.width),Jt=Math.floor(pt*St.height);v===void 0&&(v=b(ut,Jt));const Rt=E?b(ut,Jt):v;return Rt.width=ut,Rt.height=Jt,Rt.getContext("2d").drawImage(P,0,0,ut,Jt),ue("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ut+"x"+Jt+")."),Rt}else return"data"in P&&ue("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),P;return P}function M(P){return P.generateMipmaps}function x(P){i.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(P,E,q,pt,St=!1){if(P!==null){if(i[P]!==void 0)return i[P];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ut=E;if(E===i.RED&&(q===i.FLOAT&&(ut=i.R32F),q===i.HALF_FLOAT&&(ut=i.R16F),q===i.UNSIGNED_BYTE&&(ut=i.R8)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ut=i.R8UI),q===i.UNSIGNED_SHORT&&(ut=i.R16UI),q===i.UNSIGNED_INT&&(ut=i.R32UI),q===i.BYTE&&(ut=i.R8I),q===i.SHORT&&(ut=i.R16I),q===i.INT&&(ut=i.R32I)),E===i.RG&&(q===i.FLOAT&&(ut=i.RG32F),q===i.HALF_FLOAT&&(ut=i.RG16F),q===i.UNSIGNED_BYTE&&(ut=i.RG8)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ut=i.RG8UI),q===i.UNSIGNED_SHORT&&(ut=i.RG16UI),q===i.UNSIGNED_INT&&(ut=i.RG32UI),q===i.BYTE&&(ut=i.RG8I),q===i.SHORT&&(ut=i.RG16I),q===i.INT&&(ut=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),q===i.UNSIGNED_INT&&(ut=i.RGB32UI),q===i.BYTE&&(ut=i.RGB8I),q===i.SHORT&&(ut=i.RGB16I),q===i.INT&&(ut=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),q===i.UNSIGNED_INT&&(ut=i.RGBA32UI),q===i.BYTE&&(ut=i.RGBA8I),q===i.SHORT&&(ut=i.RGBA16I),q===i.INT&&(ut=i.RGBA32I)),E===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ut=i.R11F_G11F_B10F)),E===i.RGBA){const Jt=St?gf:Re.getTransfer(pt);q===i.FLOAT&&(ut=i.RGBA32F),q===i.HALF_FLOAT&&(ut=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ut=Jt===je?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function U(P,E){let q;return P?E===null||E===la||E===Zl?q=i.DEPTH24_STENCIL8:E===ia?q=i.DEPTH32F_STENCIL8:E===Kl&&(q=i.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===la||E===Zl?q=i.DEPTH_COMPONENT24:E===ia?q=i.DEPTH_COMPONENT32F:E===Kl&&(q=i.DEPTH_COMPONENT16),q}function L(P,E){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==In&&P.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function F(P){const E=P.target;E.removeEventListener("dispose",F),j(E),E.isVideoTexture&&g.delete(E)}function I(P){const E=P.target;E.removeEventListener("dispose",I),N(E)}function j(P){const E=s.get(P);if(E.__webglInit===void 0)return;const q=P.source,pt=_.get(q);if(pt){const St=pt[E.__cacheKey];St.usedTimes--,St.usedTimes===0&&C(P),Object.keys(pt).length===0&&_.delete(q)}s.remove(P)}function C(P){const E=s.get(P);i.deleteTexture(E.__webglTexture);const q=P.source,pt=_.get(q);delete pt[E.__cacheKey],u.memory.textures--}function N(P){const E=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let St=0;St<E.__webglFramebuffer[pt].length;St++)i.deleteFramebuffer(E.__webglFramebuffer[pt][St]);else i.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)i.deleteFramebuffer(E.__webglFramebuffer[pt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=P.textures;for(let pt=0,St=q.length;pt<St;pt++){const ut=s.get(q[pt]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),u.memory.textures--),s.remove(q[pt])}s.remove(P)}let X=0;function st(){X=0}function at(){const P=X;return P>=o.maxTextures&&ue("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),X+=1,P}function ct(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ht(P,E){const q=s.get(P);if(P.isVideoTexture&&Pt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){const pt=P.image;if(pt===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(q,P,E);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function z(P,E){const q=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){tt(q,P,E);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function H(P,E){const q=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){tt(q,P,E);return}n.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function Q(P,E){const q=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&q.__version!==P.version){ft(q,P,E);return}n.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}const yt={[Yl]:i.REPEAT,[Pa]:i.CLAMP_TO_EDGE,[ym]:i.MIRRORED_REPEAT},xt={[In]:i.NEAREST,[uD]:i.NEAREST_MIPMAP_NEAREST,[Au]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[ep]:i.LINEAR_MIPMAP_NEAREST,[Es]:i.LINEAR_MIPMAP_LINEAR},O={[pD]:i.NEVER,[xD]:i.ALWAYS,[mD]:i.LESS,[kg]:i.LEQUAL,[gD]:i.EQUAL,[Xg]:i.GEQUAL,[vD]:i.GREATER,[_D]:i.NOTEQUAL};function et(P,E){if(E.type===ia&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===ep||E.magFilter===Au||E.magFilter===Es||E.minFilter===zn||E.minFilter===ep||E.minFilter===Au||E.minFilter===Es)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,yt[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,yt[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,yt[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,xt[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===In||E.minFilter!==Au&&E.minFilter!==Es||E.type===ia&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function gt(P,E){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",F));const pt=E.source;let St=_.get(pt);St===void 0&&(St={},_.set(pt,St));const ut=ct(E);if(ut!==P.__cacheKey){St[ut]===void 0&&(St[ut]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,q=!0),St[ut].usedTimes++;const Jt=St[P.__cacheKey];Jt!==void 0&&(St[P.__cacheKey].usedTimes--,Jt.usedTimes===0&&C(E)),P.__cacheKey=ut,P.__webglTexture=St[ut].texture}return q}function At(P,E,q){return Math.floor(Math.floor(P/q)/E)}function Ht(P,E,q,pt){const ut=P.updateRanges;if(ut.length===0)n.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,q,pt,E.data);else{ut.sort((bt,Et)=>bt.start-Et.start);let Jt=0;for(let bt=1;bt<ut.length;bt++){const Et=ut[Jt],Vt=ut[bt],It=Et.start+Et.count,Dt=At(Vt.start,E.width,4),he=At(Et.start,E.width,4);Vt.start<=It+1&&Dt===he&&At(Vt.start+Vt.count-1,E.width,4)===Dt?Et.count=Math.max(Et.count,Vt.start+Vt.count-Et.start):(++Jt,ut[Jt]=Vt)}ut.length=Jt+1;const Rt=i.getParameter(i.UNPACK_ROW_LENGTH),Yt=i.getParameter(i.UNPACK_SKIP_PIXELS),ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let bt=0,Et=ut.length;bt<Et;bt++){const Vt=ut[bt],It=Math.floor(Vt.start/4),Dt=Math.ceil(Vt.count/4),he=It%E.width,W=Math.floor(It/E.width),Nt=Dt,Tt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,he),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),n.texSubImage2D(i.TEXTURE_2D,0,he,W,Nt,Tt,q,pt,E.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Rt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function tt(P,E,q){let pt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=i.TEXTURE_3D);const St=gt(P,E),ut=E.source;n.bindTexture(pt,P.__webglTexture,i.TEXTURE0+q);const Jt=s.get(ut);if(ut.version!==Jt.__version||St===!0){n.activeTexture(i.TEXTURE0+q);const Rt=Re.getPrimaries(Re.workingColorSpace),Yt=E.colorSpace===Ms?null:Re.getPrimaries(E.colorSpace),ae=E.colorSpace===Ms||Rt===Yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let bt=T(E.image,!1,o.maxTextureSize);bt=le(E,bt);const Et=c.convert(E.format,E.colorSpace),Vt=c.convert(E.type);let It=R(E.internalFormat,Et,Vt,E.colorSpace,E.isVideoTexture);et(pt,E);let Dt;const he=E.mipmaps,W=E.isVideoTexture!==!0,Nt=Jt.__version===void 0||St===!0,Tt=ut.dataReady,zt=L(E,bt);if(E.isDepthTexture)It=U(E.format===rr,E.type),Nt&&(W?n.texStorage2D(i.TEXTURE_2D,1,It,bt.width,bt.height):n.texImage2D(i.TEXTURE_2D,0,It,bt.width,bt.height,0,Et,Vt,null));else if(E.isDataTexture)if(he.length>0){W&&Nt&&n.texStorage2D(i.TEXTURE_2D,zt,It,he[0].width,he[0].height);for(let Mt=0,_t=he.length;Mt<_t;Mt++)Dt=he[Mt],W?Tt&&n.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Et,Vt,Dt.data):n.texImage2D(i.TEXTURE_2D,Mt,It,Dt.width,Dt.height,0,Et,Vt,Dt.data);E.generateMipmaps=!1}else W?(Nt&&n.texStorage2D(i.TEXTURE_2D,zt,It,bt.width,bt.height),Tt&&Ht(E,bt,Et,Vt)):n.texImage2D(i.TEXTURE_2D,0,It,bt.width,bt.height,0,Et,Vt,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Nt&&n.texStorage3D(i.TEXTURE_2D_ARRAY,zt,It,he[0].width,he[0].height,bt.depth);for(let Mt=0,_t=he.length;Mt<_t;Mt++)if(Dt=he[Mt],E.format!==ki)if(Et!==null)if(W){if(Tt)if(E.layerUpdates.size>0){const wt=DS(Dt.width,Dt.height,E.format,E.type);for(const se of E.layerUpdates){const He=Dt.data.subarray(se*wt/Dt.data.BYTES_PER_ELEMENT,(se+1)*wt/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,se,Dt.width,Dt.height,1,Et,He)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,bt.depth,Et,Dt.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Mt,It,Dt.width,Dt.height,bt.depth,0,Dt.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,bt.depth,Et,Vt,Dt.data):n.texImage3D(i.TEXTURE_2D_ARRAY,Mt,It,Dt.width,Dt.height,bt.depth,0,Et,Vt,Dt.data)}else{W&&Nt&&n.texStorage2D(i.TEXTURE_2D,zt,It,he[0].width,he[0].height);for(let Mt=0,_t=he.length;Mt<_t;Mt++)Dt=he[Mt],E.format!==ki?Et!==null?W?Tt&&n.compressedTexSubImage2D(i.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Et,Dt.data):n.compressedTexImage2D(i.TEXTURE_2D,Mt,It,Dt.width,Dt.height,0,Dt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&n.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Et,Vt,Dt.data):n.texImage2D(i.TEXTURE_2D,Mt,It,Dt.width,Dt.height,0,Et,Vt,Dt.data)}else if(E.isDataArrayTexture)if(W){if(Nt&&n.texStorage3D(i.TEXTURE_2D_ARRAY,zt,It,bt.width,bt.height,bt.depth),Tt)if(E.layerUpdates.size>0){const Mt=DS(bt.width,bt.height,E.format,E.type);for(const _t of E.layerUpdates){const wt=bt.data.subarray(_t*Mt/bt.data.BYTES_PER_ELEMENT,(_t+1)*Mt/bt.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,Et,Vt,wt)}E.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Et,Vt,bt.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,It,bt.width,bt.height,bt.depth,0,Et,Vt,bt.data);else if(E.isData3DTexture)W?(Nt&&n.texStorage3D(i.TEXTURE_3D,zt,It,bt.width,bt.height,bt.depth),Tt&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Et,Vt,bt.data)):n.texImage3D(i.TEXTURE_3D,0,It,bt.width,bt.height,bt.depth,0,Et,Vt,bt.data);else if(E.isFramebufferTexture){if(Nt)if(W)n.texStorage2D(i.TEXTURE_2D,zt,It,bt.width,bt.height);else{let Mt=bt.width,_t=bt.height;for(let wt=0;wt<zt;wt++)n.texImage2D(i.TEXTURE_2D,wt,It,Mt,_t,0,Et,Vt,null),Mt>>=1,_t>>=1}}else if(he.length>0){if(W&&Nt){const Mt=Ot(he[0]);n.texStorage2D(i.TEXTURE_2D,zt,It,Mt.width,Mt.height)}for(let Mt=0,_t=he.length;Mt<_t;Mt++)Dt=he[Mt],W?Tt&&n.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Et,Vt,Dt):n.texImage2D(i.TEXTURE_2D,Mt,It,Et,Vt,Dt);E.generateMipmaps=!1}else if(W){if(Nt){const Mt=Ot(bt);n.texStorage2D(i.TEXTURE_2D,zt,It,Mt.width,Mt.height)}Tt&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Vt,bt)}else n.texImage2D(i.TEXTURE_2D,0,It,Et,Vt,bt);M(E)&&x(pt),Jt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ft(P,E,q){if(E.image.length!==6)return;const pt=gt(P,E),St=E.source;n.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);const ut=s.get(St);if(St.version!==ut.__version||pt===!0){n.activeTexture(i.TEXTURE0+q);const Jt=Re.getPrimaries(Re.workingColorSpace),Rt=E.colorSpace===Ms?null:Re.getPrimaries(E.colorSpace),Yt=E.colorSpace===Ms||Jt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const ae=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!ae&&!bt?Et[_t]=T(E.image[_t],!0,o.maxCubemapSize):Et[_t]=bt?E.image[_t].image:E.image[_t],Et[_t]=le(E,Et[_t]);const Vt=Et[0],It=c.convert(E.format,E.colorSpace),Dt=c.convert(E.type),he=R(E.internalFormat,It,Dt,E.colorSpace),W=E.isVideoTexture!==!0,Nt=ut.__version===void 0||pt===!0,Tt=St.dataReady;let zt=L(E,Vt);et(i.TEXTURE_CUBE_MAP,E);let Mt;if(ae){W&&Nt&&n.texStorage2D(i.TEXTURE_CUBE_MAP,zt,he,Vt.width,Vt.height);for(let _t=0;_t<6;_t++){Mt=Et[_t].mipmaps;for(let wt=0;wt<Mt.length;wt++){const se=Mt[wt];E.format!==ki?It!==null?W?Tt&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,se.width,se.height,It,se.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,he,se.width,se.height,0,se.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,se.width,se.height,It,Dt,se.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,he,se.width,se.height,0,It,Dt,se.data)}}}else{if(Mt=E.mipmaps,W&&Nt){Mt.length>0&&zt++;const _t=Ot(Et[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,zt,he,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){W?Tt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,It,Dt,Et[_t].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,he,Et[_t].width,Et[_t].height,0,It,Dt,Et[_t].data);for(let wt=0;wt<Mt.length;wt++){const He=Mt[wt].image[_t].image;W?Tt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,He.width,He.height,It,Dt,He.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,he,He.width,He.height,0,It,Dt,He.data)}}else{W?Tt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,It,Dt,Et[_t]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,he,It,Dt,Et[_t]);for(let wt=0;wt<Mt.length;wt++){const se=Mt[wt];W?Tt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,It,Dt,se.image[_t]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,he,It,Dt,se.image[_t])}}}M(E)&&x(i.TEXTURE_CUBE_MAP),ut.__version=St.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ct(P,E,q,pt,St,ut){const Jt=c.convert(q.format,q.colorSpace),Rt=c.convert(q.type),Yt=R(q.internalFormat,Jt,Rt,q.colorSpace),ae=s.get(E),bt=s.get(q);if(bt.__renderTarget=E,!ae.__hasExternalTextures){const Et=Math.max(1,E.width>>ut),Vt=Math.max(1,E.height>>ut);St===i.TEXTURE_3D||St===i.TEXTURE_2D_ARRAY?n.texImage3D(St,ut,Yt,Et,Vt,E.depth,0,Jt,Rt,null):n.texImage2D(St,ut,Yt,Et,Vt,0,Jt,Rt,null)}n.bindFramebuffer(i.FRAMEBUFFER,P),Pe(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,St,bt.__webglTexture,0,G(E)):(St===i.TEXTURE_2D||St>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pt,St,bt.__webglTexture,ut),n.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(P,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const pt=E.depthTexture,St=pt&&pt.isDepthTexture?pt.type:null,ut=U(E.stencilBuffer,St),Jt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pe(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G(E),ut,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,G(E),ut,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ut,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Jt,i.RENDERBUFFER,P)}else{const pt=E.textures;for(let St=0;St<pt.length;St++){const ut=pt[St],Jt=c.convert(ut.format,ut.colorSpace),Rt=c.convert(ut.type),Yt=R(ut.internalFormat,Jt,Rt,ut.colorSpace);Pe(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G(E),Yt,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,G(E),Yt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Yt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(P,E,q){const pt=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(E.depthTexture);if(St.__renderTarget=E,(!St.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pt){if(St.__webglInit===void 0&&(St.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),St.__webglTexture===void 0){St.__webglTexture=i.createTexture(),n.bindTexture(i.TEXTURE_CUBE_MAP,St.__webglTexture),et(i.TEXTURE_CUBE_MAP,E.depthTexture);const ae=c.convert(E.depthTexture.format),bt=c.convert(E.depthTexture.type);let Et;E.depthTexture.format===Va?Et=i.DEPTH_COMPONENT24:E.depthTexture.format===rr&&(Et=i.DEPTH24_STENCIL8);for(let Vt=0;Vt<6;Vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,Et,E.width,E.height,0,ae,bt,null)}}else ht(E.depthTexture,0);const ut=St.__webglTexture,Jt=G(E),Rt=pt?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,Yt=E.depthTexture.format===rr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Va)Pe(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Yt,Rt,ut,0,Jt):i.framebufferTexture2D(i.FRAMEBUFFER,Yt,Rt,ut,0);else if(E.depthTexture.format===rr)Pe(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Yt,Rt,ut,0,Jt):i.framebufferTexture2D(i.FRAMEBUFFER,Yt,Rt,ut,0);else throw new Error("Unknown depthTexture format")}function ve(P){const E=s.get(P),q=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const pt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const St=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",St)};pt.addEventListener("dispose",St),E.__depthDisposeCallback=St}E.__boundDepthTexture=pt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let pt=0;pt<6;pt++)kt(E.__webglFramebuffer[pt],P,pt);else{const pt=P.texture.mipmaps;pt&&pt.length>0?kt(E.__webglFramebuffer[0],P,0):kt(E.__webglFramebuffer,P,0)}else if(q){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=i.createRenderbuffer(),Xt(E.__webglDepthbuffer[pt],P,!1);else{const St=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[pt];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,ut)}}else{const pt=P.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Xt(E.__webglDepthbuffer,P,!1);else{const St=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,ut)}}n.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(P,E,q){const pt=s.get(P);E!==void 0&&Ct(pt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&ve(P)}function _e(P){const E=P.texture,q=s.get(P),pt=s.get(E);P.addEventListener("dispose",I);const St=P.textures,ut=P.isWebGLCubeRenderTarget===!0,Jt=St.length>1;if(Jt||(pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture()),pt.__version=E.version,u.memory.textures++),ut){q.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Rt]=[];for(let Yt=0;Yt<E.mipmaps.length;Yt++)q.__webglFramebuffer[Rt][Yt]=i.createFramebuffer()}else q.__webglFramebuffer[Rt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)q.__webglFramebuffer[Rt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Jt)for(let Rt=0,Yt=St.length;Rt<Yt;Rt++){const ae=s.get(St[Rt]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),u.memory.textures++)}if(P.samples>0&&Pe(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Rt=0;Rt<St.length;Rt++){const Yt=St[Rt];q.__webglColorRenderbuffer[Rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Rt]);const ae=c.convert(Yt.format,Yt.colorSpace),bt=c.convert(Yt.type),Et=R(Yt.internalFormat,ae,bt,Yt.colorSpace,P.isXRRenderTarget===!0),Vt=G(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Et,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,q.__webglColorRenderbuffer[Rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(q.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){n.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),et(i.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Ct(q.__webglFramebuffer[Rt][Yt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Yt);else Ct(q.__webglFramebuffer[Rt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(E)&&x(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Jt){for(let Rt=0,Yt=St.length;Rt<Yt;Rt++){const ae=St[Rt],bt=s.get(ae);let Et=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Et=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Et,bt.__webglTexture),et(Et,ae),Ct(q.__webglFramebuffer,P,ae,i.COLOR_ATTACHMENT0+Rt,Et,0),M(ae)&&x(Et)}n.unbindTexture()}else{let Rt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Rt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Rt,pt.__webglTexture),et(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Ct(q.__webglFramebuffer[Yt],P,E,i.COLOR_ATTACHMENT0,Rt,Yt);else Ct(q.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,Rt,0);M(E)&&x(Rt),n.unbindTexture()}P.depthBuffer&&ve(P)}function me(P){const E=P.textures;for(let q=0,pt=E.length;q<pt;q++){const St=E[q];if(M(St)){const ut=D(P),Jt=s.get(St).__webglTexture;n.bindTexture(ut,Jt),x(ut),n.unbindTexture()}}}const Ae=[],re=[];function be(P){if(P.samples>0){if(Pe(P)===!1){const E=P.textures,q=P.width,pt=P.height;let St=i.COLOR_BUFFER_BIT;const ut=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Jt=s.get(P),Rt=E.length>1;if(Rt)for(let ae=0;ae<E.length;ae++)n.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer);const Yt=P.texture.mipmaps;Yt&&Yt.length>0?n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer[0]):n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let ae=0;ae<E.length;ae++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(St|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(St|=i.STENCIL_BUFFER_BIT)),Rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Jt.__webglColorRenderbuffer[ae]);const bt=s.get(E[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,bt,0)}i.blitFramebuffer(0,0,q,pt,0,0,q,pt,St,i.NEAREST),p===!0&&(Ae.length=0,re.length=0,Ae.push(i.COLOR_ATTACHMENT0+ae),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ae.push(ut),re.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Rt)for(let ae=0;ae<E.length;ae++){n.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,Jt.__webglColorRenderbuffer[ae]);const bt=s.get(E[ae]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,bt,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function G(P){return Math.min(o.maxSamples,P.samples)}function Pe(P){const E=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pt(P){const E=u.render.frame;g.get(P)!==E&&(g.set(P,E),P.update())}function le(P,E){const q=P.colorSpace,pt=P.format,St=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==So&&q!==Ms&&(Re.getTransfer(q)===je?(pt!==ki||St!==wi)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",q)),E}function Ot(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=at,this.resetTextureUnits=st,this.setTexture2D=ht,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=$e,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function GO(i,t){function n(s,o=Ms){let c;const u=Re.getTransfer(o);if(s===wi)return i.UNSIGNED_BYTE;if(s===Ig)return i.UNSIGNED_SHORT_4_4_4_4;if(s===zg)return i.UNSIGNED_SHORT_5_5_5_1;if(s===o1)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===l1)return i.UNSIGNED_INT_10F_11F_11F_REV;if(s===s1)return i.BYTE;if(s===r1)return i.SHORT;if(s===Kl)return i.UNSIGNED_SHORT;if(s===Bg)return i.INT;if(s===la)return i.UNSIGNED_INT;if(s===ia)return i.FLOAT;if(s===za)return i.HALF_FLOAT;if(s===c1)return i.ALPHA;if(s===u1)return i.RGB;if(s===ki)return i.RGBA;if(s===Va)return i.DEPTH_COMPONENT;if(s===rr)return i.DEPTH_STENCIL;if(s===f1)return i.RED;if(s===Vg)return i.RED_INTEGER;if(s===yo)return i.RG;if(s===Hg)return i.RG_INTEGER;if(s===Gg)return i.RGBA_INTEGER;if(s===ef||s===nf||s===af||s===sf)if(u===je)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===ef)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===af)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===sf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===ef)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===af)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===sf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sm||s===Mm||s===bm||s===Em)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Sm)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mm)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bm)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Em)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Tm||s===Am||s===wm||s===Cm||s===Rm||s===Dm||s===Um)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Tm||s===Am)return u===je?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===wm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Cm)return c.COMPRESSED_R11_EAC;if(s===Rm)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Dm)return c.COMPRESSED_RG11_EAC;if(s===Um)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Nm||s===Lm||s===Pm||s===Om||s===Fm||s===Bm||s===Im||s===zm||s===Vm||s===Hm||s===Gm||s===km||s===Xm||s===jm)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Nm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Lm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Pm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Om)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Im)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===km)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===jm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wm||s===qm||s===Ym)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Wm)return u===je?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ym)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Km||s===Zm||s===Qm||s===Jm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Km)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Zm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zl?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:n}}const kO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XO=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jO{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new b1(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new Yi({vertexShader:kO,fragmentShader:XO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qi(new bo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WO extends wo{constructor(t,n){super();const s=this;let o=null,c=1,u=null,f="local-floor",p=1,d=null,g=null,v=null,_=null,y=null,b=null;const T=typeof XRWebGLBinding<"u",M=new jO,x={},D=n.getContextAttributes();let R=null,U=null;const L=[],F=[],I=new Ie;let j=null;const C=new Ai;C.viewport=new un;const N=new Ai;N.viewport=new un;const X=[C,N],st=new eU;let at=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ft=L[tt];return ft===void 0&&(ft=new Ep,L[tt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(tt){let ft=L[tt];return ft===void 0&&(ft=new Ep,L[tt]=ft),ft.getGripSpace()},this.getHand=function(tt){let ft=L[tt];return ft===void 0&&(ft=new Ep,L[tt]=ft),ft.getHandSpace()};function ht(tt){const ft=F.indexOf(tt.inputSource);if(ft===-1)return;const Ct=L[ft];Ct!==void 0&&(Ct.update(tt.inputSource,tt.frame,d||u),Ct.dispatchEvent({type:tt.type,data:tt.inputSource}))}function z(){o.removeEventListener("select",ht),o.removeEventListener("selectstart",ht),o.removeEventListener("selectend",ht),o.removeEventListener("squeeze",ht),o.removeEventListener("squeezestart",ht),o.removeEventListener("squeezeend",ht),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",H);for(let tt=0;tt<L.length;tt++){const ft=F[tt];ft!==null&&(F[tt]=null,L[tt].disconnect(ft))}at=null,ct=null,M.reset();for(const tt in x)delete x[tt];t.setRenderTarget(R),y=null,_=null,v=null,o=null,U=null,Ht.stop(),s.isPresenting=!1,t.setPixelRatio(j),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){f=tt,s.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(tt){d=tt},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(tt){if(o=tt,o!==null){if(R=t.getRenderTarget(),o.addEventListener("select",ht),o.addEventListener("selectstart",ht),o.addEventListener("selectend",ht),o.addEventListener("squeeze",ht),o.addEventListener("squeezestart",ht),o.addEventListener("squeezeend",ht),o.addEventListener("end",z),o.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await n.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Xt=null,kt=null;D.depth&&(kt=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ct=D.stencil?rr:Va,Xt=D.stencil?Zl:la);const ve={colorFormat:n.RGBA8,depthFormat:kt,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(ve),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),U=new ji(_.textureWidth,_.textureHeight,{format:ki,type:wi,depthTexture:new Jl(_.textureWidth,_.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ct={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Ct),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new ji(y.framebufferWidth,y.framebufferHeight,{format:ki,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(f),Ht.setContext(o),Ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(tt){for(let ft=0;ft<tt.removed.length;ft++){const Ct=tt.removed[ft],Xt=F.indexOf(Ct);Xt>=0&&(F[Xt]=null,L[Xt].disconnect(Ct))}for(let ft=0;ft<tt.added.length;ft++){const Ct=tt.added[ft];let Xt=F.indexOf(Ct);if(Xt===-1){for(let ve=0;ve<L.length;ve++)if(ve>=F.length){F.push(Ct),Xt=ve;break}else if(F[ve]===null){F[ve]=Ct,Xt=ve;break}if(Xt===-1)break}const kt=L[Xt];kt&&kt.connect(Ct)}}const Q=new ot,yt=new ot;function xt(tt,ft,Ct){Q.setFromMatrixPosition(ft.matrixWorld),yt.setFromMatrixPosition(Ct.matrixWorld);const Xt=Q.distanceTo(yt),kt=ft.projectionMatrix.elements,ve=Ct.projectionMatrix.elements,$e=kt[14]/(kt[10]-1),_e=kt[14]/(kt[10]+1),me=(kt[9]+1)/kt[5],Ae=(kt[9]-1)/kt[5],re=(kt[8]-1)/kt[0],be=(ve[8]+1)/ve[0],G=$e*re,Pe=$e*be,Pt=Xt/(-re+be),le=Pt*-re;if(ft.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(le),tt.translateZ(Pt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),kt[10]===-1)tt.projectionMatrix.copy(ft.projectionMatrix),tt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Ot=$e+Pt,P=_e+Pt,E=G-le,q=Pe+(Xt-le),pt=me*_e/P*Ot,St=Ae*_e/P*Ot;tt.projectionMatrix.makePerspective(E,q,pt,St,Ot,P),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function O(tt,ft){ft===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ft.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(o===null)return;let ft=tt.near,Ct=tt.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(Ct=M.depthFar)),st.near=N.near=C.near=ft,st.far=N.far=C.far=Ct,(at!==st.near||ct!==st.far)&&(o.updateRenderState({depthNear:st.near,depthFar:st.far}),at=st.near,ct=st.far),st.layers.mask=tt.layers.mask|6,C.layers.mask=st.layers.mask&3,N.layers.mask=st.layers.mask&5;const Xt=tt.parent,kt=st.cameras;O(st,Xt);for(let ve=0;ve<kt.length;ve++)O(kt[ve],Xt);kt.length===2?xt(st,C,N):st.projectionMatrix.copy(C.projectionMatrix),et(tt,st,Xt)};function et(tt,ft,Ct){Ct===null?tt.matrix.copy(ft.matrixWorld):(tt.matrix.copy(Ct.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ft.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ft.projectionMatrix),tt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=$m*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function(tt){p=tt,_!==null&&(_.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(st)},this.getCameraTexture=function(tt){return x[tt]};let gt=null;function At(tt,ft){if(g=ft.getViewerPose(d||u),b=ft,g!==null){const Ct=g.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Xt=!1;Ct.length!==st.cameras.length&&(st.cameras.length=0,Xt=!0);for(let _e=0;_e<Ct.length;_e++){const me=Ct[_e];let Ae=null;if(y!==null)Ae=y.getViewport(me);else{const be=v.getViewSubImage(_,me);Ae=be.viewport,_e===0&&(t.setRenderTargetTextures(U,be.colorTexture,be.depthStencilTexture),t.setRenderTarget(U))}let re=X[_e];re===void 0&&(re=new Ai,re.layers.enable(_e),re.viewport=new un,X[_e]=re),re.matrix.fromArray(me.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(me.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),_e===0&&(st.matrix.copy(re.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),Xt===!0&&st.cameras.push(re)}const kt=o.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=s.getBinding();const _e=v.getDepthInformation(Ct[0]);_e&&_e.isValid&&_e.texture&&M.init(_e,o.renderState)}if(kt&&kt.includes("camera-access")&&T){t.state.unbindTexture(),v=s.getBinding();for(let _e=0;_e<Ct.length;_e++){const me=Ct[_e].camera;if(me){let Ae=x[me];Ae||(Ae=new b1,x[me]=Ae);const re=v.getCameraImage(me);Ae.sourceTexture=re}}}}for(let Ct=0;Ct<L.length;Ct++){const Xt=F[Ct],kt=L[Ct];Xt!==null&&kt!==void 0&&kt.update(Xt,ft,d||u)}gt&&gt(tt,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),b=null}const Ht=new E1;Ht.setAnimationLoop(At),this.setAnimationLoop=function(tt){gt=tt},this.dispose=function(){}}}const $s=new Ha,qO=new _n;function YO(i,t){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,_1(i)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function o(M,x,D,R,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),v(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),_(M,x),x.isMeshPhysicalMaterial&&y(M,x,U)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),T(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(u(M,x),x.isLineDashedMaterial&&f(M,x)):x.isPointsMaterial?p(M,x,D,R):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===ii&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===ii&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const D=t.get(x),R=D.envMap,U=D.envMapRotation;R&&(M.envMap.value=R,$s.copy(U),$s.x*=-1,$s.y*=-1,$s.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),M.envMapRotation.value.setFromMatrix4(qO.makeRotationFromEuler($s)),M.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function u(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function f(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,D,R){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*D,M.scale.value=R*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,D){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ii&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const D=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function KO(i,t,n,s){let o={},c={},u=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,R){const U=R.program;s.uniformBlockBinding(D,U)}function d(D,R){let U=o[D.id];U===void 0&&(b(D),U=g(D),o[D.id]=U,D.addEventListener("dispose",M));const L=R.program;s.updateUBOMapping(D,L);const F=t.render.frame;c[D.id]!==F&&(_(D),c[D.id]=F)}function g(D){const R=v();D.__bindingPointIndex=R;const U=i.createBuffer(),L=D.__size,F=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,U),i.bufferData(i.UNIFORM_BUFFER,L,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,U),U}function v(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const R=o[D.id],U=D.uniforms,L=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let F=0,I=U.length;F<I;F++){const j=Array.isArray(U[F])?U[F]:[U[F]];for(let C=0,N=j.length;C<N;C++){const X=j[C];if(y(X,F,C,L)===!0){const st=X.__offset,at=Array.isArray(X.value)?X.value:[X.value];let ct=0;for(let ht=0;ht<at.length;ht++){const z=at[ht],H=T(z);typeof z=="number"||typeof z=="boolean"?(X.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,st+ct,X.__data)):z.isMatrix3?(X.__data[0]=z.elements[0],X.__data[1]=z.elements[1],X.__data[2]=z.elements[2],X.__data[3]=0,X.__data[4]=z.elements[3],X.__data[5]=z.elements[4],X.__data[6]=z.elements[5],X.__data[7]=0,X.__data[8]=z.elements[6],X.__data[9]=z.elements[7],X.__data[10]=z.elements[8],X.__data[11]=0):(z.toArray(X.__data,ct),ct+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,st,X.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(D,R,U,L){const F=D.value,I=R+"_"+U;if(L[I]===void 0)return typeof F=="number"||typeof F=="boolean"?L[I]=F:L[I]=F.clone(),!0;{const j=L[I];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return L[I]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function b(D){const R=D.uniforms;let U=0;const L=16;for(let I=0,j=R.length;I<j;I++){const C=Array.isArray(R[I])?R[I]:[R[I]];for(let N=0,X=C.length;N<X;N++){const st=C[N],at=Array.isArray(st.value)?st.value:[st.value];for(let ct=0,ht=at.length;ct<ht;ct++){const z=at[ct],H=T(z),Q=U%L,yt=Q%H.boundary,xt=Q+yt;U+=yt,xt!==0&&L-xt<H.storage&&(U+=L-xt),st.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=U,U+=H.storage}}}const F=U%L;return F>0&&(U+=L-F),D.__size=U,D.__cache={},this}function T(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ue("WebGLRenderer: Unsupported uniform value type.",D),R}function M(D){const R=D.target;R.removeEventListener("dispose",M);const U=u.indexOf(R.__bindingPointIndex);u.splice(U,1),i.deleteBuffer(o[R.id]),delete o[R.id],delete c[R.id]}function x(){for(const D in o)i.deleteBuffer(o[D]);u=[],o={},c={}}return{bind:p,update:d,dispose:x}}const ZO=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ta=null;function QO(){return ta===null&&(ta=new qD(ZO,16,16,yo,za),ta.name="DFG_LUT",ta.minFilter=zn,ta.magFilter=zn,ta.wrapS=Pa,ta.wrapT=Pa,ta.generateMipmaps=!1,ta.needsUpdate=!0),ta}class JO{constructor(t={}){const{canvas:n=yD(),context:s=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:y=wi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=u;const T=y,M=new Set([Gg,Hg,Vg]),x=new Set([wi,la,Kl,Zl,Ig,zg]),D=new Uint32Array(4),R=new Int32Array(4);let U=null,L=null;const F=[],I=[];let j=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1;this._outputColorSpace=Ti;let X=0,st=0,at=null,ct=-1,ht=null;const z=new un,H=new un;let Q=null;const yt=new Ve(0);let xt=0,O=n.width,et=n.height,gt=1,At=null,Ht=null;const tt=new un(0,0,O,et),ft=new un(0,0,O,et);let Ct=!1;const Xt=new M1;let kt=!1,ve=!1;const $e=new _n,_e=new ot,me=new un,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function be(){return at===null?gt:1}let G=s;function Pe(w,Y){return n.getContext(w,Y)}try{const w={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fg}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",He,!1),n.addEventListener("webglcontextcreationerror",we,!1),G===null){const Y="webgl2";if(G=Pe(Y,w),G===null)throw Pe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ne("WebGLRenderer: "+w.message),w}let Pt,le,Ot,P,E,q,pt,St,ut,Jt,Rt,Yt,ae,bt,Et,Vt,It,Dt,he,W,Nt,Tt,zt,Mt;function _t(){Pt=new QL(G),Pt.init(),Tt=new GO(G,Pt),le=new GL(G,Pt,t,Tt),Ot=new VO(G,Pt),le.reversedDepthBuffer&&_&&Ot.buffers.depth.setReversed(!0),P=new tP(G),E=new TO,q=new HO(G,Pt,Ot,E,le,Tt,P),pt=new XL(C),St=new ZL(C),ut=new aU(G),zt=new VL(G,ut),Jt=new JL(G,ut,P,zt),Rt=new nP(G,Jt,ut,P),he=new eP(G,le,q),Vt=new kL(E),Yt=new EO(C,pt,St,Pt,le,zt,Vt),ae=new YO(C,E),bt=new wO,Et=new LO(Pt),Dt=new zL(C,pt,St,Ot,Rt,b,p),It=new IO(C,Rt,le),Mt=new KO(G,P,le,Ot),W=new HL(G,Pt,P),Nt=new $L(G,Pt,P),P.programs=Yt.programs,C.capabilities=le,C.extensions=Pt,C.properties=E,C.renderLists=bt,C.shadowMap=It,C.state=Ot,C.info=P}_t(),T!==wi&&(j=new aP(T,n.width,n.height,o,c));const wt=new WO(C,G);this.xr=wt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=Pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(w){w!==void 0&&(gt=w,this.setSize(O,et,!1))},this.getSize=function(w){return w.set(O,et)},this.setSize=function(w,Y,rt=!0){if(wt.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,et=Y,n.width=Math.floor(w*gt),n.height=Math.floor(Y*gt),rt===!0&&(n.style.width=w+"px",n.style.height=Y+"px"),j!==null&&j.setSize(n.width,n.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(O*gt,et*gt).floor()},this.setDrawingBufferSize=function(w,Y,rt){O=w,et=Y,gt=rt,n.width=Math.floor(w*rt),n.height=Math.floor(Y*rt),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(T===wi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(tt)},this.setViewport=function(w,Y,rt,nt){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,Y,rt,nt),Ot.viewport(z.copy(tt).multiplyScalar(gt).round())},this.getScissor=function(w){return w.copy(ft)},this.setScissor=function(w,Y,rt,nt){w.isVector4?ft.set(w.x,w.y,w.z,w.w):ft.set(w,Y,rt,nt),Ot.scissor(H.copy(ft).multiplyScalar(gt).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(w){Ot.setScissorTest(Ct=w)},this.setOpaqueSort=function(w){At=w},this.setTransparentSort=function(w){Ht=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,rt=!0){let nt=0;if(w){let Z=!1;if(at!==null){const Ut=at.texture.format;Z=M.has(Ut)}if(Z){const Ut=at.texture.type,Gt=x.has(Ut),Ft=Dt.getClearColor(),jt=Dt.getClearAlpha(),Kt=Ft.r,ee=Ft.g,Zt=Ft.b;Gt?(D[0]=Kt,D[1]=ee,D[2]=Zt,D[3]=jt,G.clearBufferuiv(G.COLOR,0,D)):(R[0]=Kt,R[1]=ee,R[2]=Zt,R[3]=jt,G.clearBufferiv(G.COLOR,0,R))}else nt|=G.COLOR_BUFFER_BIT}Y&&(nt|=G.DEPTH_BUFFER_BIT),rt&&(nt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",He,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Dt.dispose(),bt.dispose(),Et.dispose(),E.dispose(),pt.dispose(),St.dispose(),Rt.dispose(),zt.dispose(),Mt.dispose(),Yt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",ur),wt.removeEventListener("sessionend",Uo),Ki.stop()};function se(w){w.preventDefault(),fS("WebGLRenderer: Context Lost."),N=!0}function He(){fS("WebGLRenderer: Context Restored."),N=!1;const w=P.autoReset,Y=It.enabled,rt=It.autoUpdate,nt=It.needsUpdate,Z=It.type;_t(),P.autoReset=w,It.enabled=Y,It.autoUpdate=rt,It.needsUpdate=nt,It.type=Z}function we(w){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Vn(w){const Y=w.target;Y.removeEventListener("dispose",Vn),Di(Y)}function Di(w){lc(w),E.remove(w)}function lc(w){const Y=E.get(w).programs;Y!==void 0&&(Y.forEach(function(rt){Yt.releaseProgram(rt)}),w.isShaderMaterial&&Yt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,rt,nt,Z,Ut){Y===null&&(Y=Ae);const Gt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ft=Rs(w,Y,rt,nt,Z);Ot.setMaterial(nt,Gt);let jt=rt.index,Kt=1;if(nt.wireframe===!0){if(jt=Jt.getWireframeAttribute(rt),jt===void 0)return;Kt=2}const ee=rt.drawRange,Zt=rt.attributes.position;let ne=ee.start*Kt,Oe=(ee.start+ee.count)*Kt;Ut!==null&&(ne=Math.max(ne,Ut.start*Kt),Oe=Math.min(Oe,(Ut.start+Ut.count)*Kt)),jt!==null?(ne=Math.max(ne,0),Oe=Math.min(Oe,jt.count)):Zt!=null&&(ne=Math.max(ne,0),Oe=Math.min(Oe,Zt.count));const tn=Oe-ne;if(tn<0||tn===1/0)return;zt.setup(Z,nt,Ft,rt,jt);let Ze,ze=W;if(jt!==null&&(Ze=ut.get(jt),ze=Nt,ze.setIndex(Ze)),Z.isMesh)nt.wireframe===!0?(Ot.setLineWidth(nt.wireframeLinewidth*be()),ze.setMode(G.LINES)):ze.setMode(G.TRIANGLES);else if(Z.isLine){let $t=nt.linewidth;$t===void 0&&($t=1),Ot.setLineWidth($t*be()),Z.isLineSegments?ze.setMode(G.LINES):Z.isLineLoop?ze.setMode(G.LINE_LOOP):ze.setMode(G.LINE_STRIP)}else Z.isPoints?ze.setMode(G.POINTS):Z.isSprite&&ze.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ql("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))ze.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const $t=Z._multiDrawStarts,Fe=Z._multiDrawCounts,oe=Z._multiDrawCount,Rn=jt?ut.get(jt).bytesPerElement:1,ua=E.get(nt).currentProgram.getUniforms();for(let Dn=0;Dn<oe;Dn++)ua.setValue(G,"_gl_DrawID",Dn),ze.render($t[Dn]/Rn,Fe[Dn])}else if(Z.isInstancedMesh)ze.renderInstances(ne,tn,Z.count);else if(rt.isInstancedBufferGeometry){const $t=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Fe=Math.min(rt.instanceCount,$t);ze.renderInstances(ne,tn,Fe)}else ze.render(ne,tn)};function Ro(w,Y,rt){w.transparent===!0&&w.side===La&&w.forceSinglePass===!1?(w.side=ii,w.needsUpdate=!0,hr(w,Y,rt),w.side=ws,w.needsUpdate=!0,hr(w,Y,rt),w.side=La):hr(w,Y,rt)}this.compile=function(w,Y,rt=null){rt===null&&(rt=w),L=Et.get(rt),L.init(Y),I.push(L),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(L.pushLight(Z),Z.castShadow&&L.pushShadow(Z))}),w!==rt&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(L.pushLight(Z),Z.castShadow&&L.pushShadow(Z))}),L.setupLights();const nt=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ut=Z.material;if(Ut)if(Array.isArray(Ut))for(let Gt=0;Gt<Ut.length;Gt++){const Ft=Ut[Gt];Ro(Ft,rt,Z),nt.add(Ft)}else Ro(Ut,rt,Z),nt.add(Ut)}),L=I.pop(),nt},this.compileAsync=function(w,Y,rt=null){const nt=this.compile(w,Y,rt);return new Promise(Z=>{function Ut(){if(nt.forEach(function(Gt){E.get(Gt).currentProgram.isReady()&&nt.delete(Gt)}),nt.size===0){Z(w);return}setTimeout(Ut,10)}Pt.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let cr=null;function Do(w){cr&&cr(w)}function ur(){Ki.stop()}function Uo(){Ki.start()}const Ki=new E1;Ki.setAnimationLoop(Do),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(w){cr=w,wt.setAnimationLoop(w),w===null?Ki.stop():Ki.start()},wt.addEventListener("sessionstart",ur),wt.addEventListener("sessionend",Uo),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const rt=wt.enabled===!0&&wt.isPresenting===!0,nt=j!==null&&(at===null||rt)&&j.begin(C,at);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(Y),Y=wt.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,Y,at),L=Et.get(w,I.length),L.init(Y),I.push(L),$e.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Xt.setFromProjectionMatrix($e,aa,Y.reversedDepth),ve=this.localClippingEnabled,kt=Vt.init(this.clippingPlanes,ve),U=bt.get(w,F.length),U.init(),F.push(U),wt.enabled===!0&&wt.isPresenting===!0){const Gt=C.xr.getDepthSensingMesh();Gt!==null&&pi(Gt,Y,-1/0,C.sortObjects)}pi(w,Y,0,C.sortObjects),U.finish(),C.sortObjects===!0&&U.sort(At,Ht),re=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,re&&Dt.addToRenderList(U,w),this.info.render.frame++,kt===!0&&Vt.beginShadows();const Z=L.state.shadowsArray;if(It.render(Z,w,Y),kt===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt&&j.hasRenderPass())===!1){const Gt=U.opaque,Ft=U.transmissive;if(L.setupLights(),Y.isArrayCamera){const jt=Y.cameras;if(Ft.length>0)for(let Kt=0,ee=jt.length;Kt<ee;Kt++){const Zt=jt[Kt];Cn(Gt,Ft,w,Zt)}re&&Dt.render(w);for(let Kt=0,ee=jt.length;Kt<ee;Kt++){const Zt=jt[Kt];fn(U,w,Zt,Zt.viewport)}}else Ft.length>0&&Cn(Gt,Ft,w,Y),re&&Dt.render(w),fn(U,w,Y)}at!==null&&st===0&&(q.updateMultisampleRenderTarget(at),q.updateRenderTargetMipmap(at)),nt&&j.end(C),w.isScene===!0&&w.onAfterRender(C,w,Y),zt.resetDefaultState(),ct=-1,ht=null,I.pop(),I.length>0?(L=I[I.length-1],kt===!0&&Vt.setGlobalState(C.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?U=F[F.length-1]:U=null};function pi(w,Y,rt,nt){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)rt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Xt.intersectsSprite(w)){nt&&me.setFromMatrixPosition(w.matrixWorld).applyMatrix4($e);const Gt=Rt.update(w),Ft=w.material;Ft.visible&&U.push(w,Gt,Ft,rt,me.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Xt.intersectsObject(w))){const Gt=Rt.update(w),Ft=w.material;if(nt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),me.copy(w.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),me.copy(Gt.boundingSphere.center)),me.applyMatrix4(w.matrixWorld).applyMatrix4($e)),Array.isArray(Ft)){const jt=Gt.groups;for(let Kt=0,ee=jt.length;Kt<ee;Kt++){const Zt=jt[Kt],ne=Ft[Zt.materialIndex];ne&&ne.visible&&U.push(w,Gt,ne,rt,me.z,Zt)}}else Ft.visible&&U.push(w,Gt,Ft,rt,me.z,null)}}const Ut=w.children;for(let Gt=0,Ft=Ut.length;Gt<Ft;Gt++)pi(Ut[Gt],Y,rt,nt)}function fn(w,Y,rt,nt){const{opaque:Z,transmissive:Ut,transparent:Gt}=w;L.setupLightsView(rt),kt===!0&&Vt.setGlobalState(C.clippingPlanes,rt),nt&&Ot.viewport(z.copy(nt)),Z.length>0&&Ui(Z,Y,rt),Ut.length>0&&Ui(Ut,Y,rt),Gt.length>0&&Ui(Gt,Y,rt),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function Cn(w,Y,rt,nt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[nt.id]===void 0){const ne=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[nt.id]=new ji(1,1,{generateMipmaps:!0,type:ne?za:wi,minFilter:Es,samples:le.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace})}const Ut=L.state.transmissionRenderTarget[nt.id],Gt=nt.viewport||z;Ut.setSize(Gt.z*C.transmissionResolutionScale,Gt.w*C.transmissionResolutionScale);const Ft=C.getRenderTarget(),jt=C.getActiveCubeFace(),Kt=C.getActiveMipmapLevel();C.setRenderTarget(Ut),C.getClearColor(yt),xt=C.getClearAlpha(),xt<1&&C.setClearColor(16777215,.5),C.clear(),re&&Dt.render(rt);const ee=C.toneMapping;C.toneMapping=ra;const Zt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),L.setupLightsView(nt),kt===!0&&Vt.setGlobalState(C.clippingPlanes,nt),Ui(w,rt,nt),q.updateMultisampleRenderTarget(Ut),q.updateRenderTargetMipmap(Ut),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Oe=0,tn=Y.length;Oe<tn;Oe++){const Ze=Y[Oe],{object:ze,geometry:$t,material:Fe,group:oe}=Ze;if(Fe.side===La&&ze.layers.test(nt.layers)){const Rn=Fe.side;Fe.side=ii,Fe.needsUpdate=!0,fr(ze,rt,nt,$t,Fe,oe),Fe.side=Rn,Fe.needsUpdate=!0,ne=!0}}ne===!0&&(q.updateMultisampleRenderTarget(Ut),q.updateRenderTargetMipmap(Ut))}C.setRenderTarget(Ft,jt,Kt),C.setClearColor(yt,xt),Zt!==void 0&&(nt.viewport=Zt),C.toneMapping=ee}function Ui(w,Y,rt){const nt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Ut=w.length;Z<Ut;Z++){const Gt=w[Z],{object:Ft,geometry:jt,group:Kt}=Gt;let ee=Gt.material;ee.allowOverride===!0&&nt!==null&&(ee=nt),Ft.layers.test(rt.layers)&&fr(Ft,Y,rt,jt,ee,Kt)}}function fr(w,Y,rt,nt,Z,Ut){w.onBeforeRender(C,Y,rt,nt,Z,Ut),w.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(C,Y,rt,nt,w,Ut),Z.transparent===!0&&Z.side===La&&Z.forceSinglePass===!1?(Z.side=ii,Z.needsUpdate=!0,C.renderBufferDirect(rt,Y,nt,Z,w,Ut),Z.side=ws,Z.needsUpdate=!0,C.renderBufferDirect(rt,Y,nt,Z,w,Ut),Z.side=La):C.renderBufferDirect(rt,Y,nt,Z,w,Ut),w.onAfterRender(C,Y,rt,nt,Z,Ut)}function hr(w,Y,rt){Y.isScene!==!0&&(Y=Ae);const nt=E.get(w),Z=L.state.lights,Ut=L.state.shadowsArray,Gt=Z.state.version,Ft=Yt.getParameters(w,Z.state,Ut,Y,rt),jt=Yt.getProgramCacheKey(Ft);let Kt=nt.programs;nt.environment=w.isMeshStandardMaterial?Y.environment:null,nt.fog=Y.fog,nt.envMap=(w.isMeshStandardMaterial?St:pt).get(w.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,Kt===void 0&&(w.addEventListener("dispose",Vn),Kt=new Map,nt.programs=Kt);let ee=Kt.get(jt);if(ee!==void 0){if(nt.currentProgram===ee&&nt.lightsStateVersion===Gt)return No(w,Ft),ee}else Ft.uniforms=Yt.getUniforms(w),w.onBeforeCompile(Ft,C),ee=Yt.acquireProgram(Ft,jt),Kt.set(jt,ee),nt.uniforms=Ft.uniforms;const Zt=nt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Zt.clippingPlanes=Vt.uniform),No(w,Ft),nt.needsLights=ka(w),nt.lightsStateVersion=Gt,nt.needsLights&&(Zt.ambientLightColor.value=Z.state.ambient,Zt.lightProbe.value=Z.state.probe,Zt.directionalLights.value=Z.state.directional,Zt.directionalLightShadows.value=Z.state.directionalShadow,Zt.spotLights.value=Z.state.spot,Zt.spotLightShadows.value=Z.state.spotShadow,Zt.rectAreaLights.value=Z.state.rectArea,Zt.ltc_1.value=Z.state.rectAreaLTC1,Zt.ltc_2.value=Z.state.rectAreaLTC2,Zt.pointLights.value=Z.state.point,Zt.pointLightShadows.value=Z.state.pointShadow,Zt.hemisphereLights.value=Z.state.hemi,Zt.directionalShadowMap.value=Z.state.directionalShadowMap,Zt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Zt.spotShadowMap.value=Z.state.spotShadowMap,Zt.spotLightMatrix.value=Z.state.spotLightMatrix,Zt.spotLightMap.value=Z.state.spotLightMap,Zt.pointShadowMap.value=Z.state.pointShadowMap,Zt.pointShadowMatrix.value=Z.state.pointShadowMatrix),nt.currentProgram=ee,nt.uniformsList=null,ee}function cc(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=rf.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function No(w,Y){const rt=E.get(w);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function Rs(w,Y,rt,nt,Z){Y.isScene!==!0&&(Y=Ae),q.resetTextureUnits();const Ut=Y.fog,Gt=nt.isMeshStandardMaterial?Y.environment:null,Ft=at===null?C.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:So,jt=(nt.isMeshStandardMaterial?St:pt).get(nt.envMap||Gt),Kt=nt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Zt=!!rt.morphAttributes.position,ne=!!rt.morphAttributes.normal,Oe=!!rt.morphAttributes.color;let tn=ra;nt.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(tn=C.toneMapping);const Ze=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ze=Ze!==void 0?Ze.length:0,$t=E.get(nt),Fe=L.state.lights;if(kt===!0&&(ve===!0||w!==ht)){const Nn=w===ht&&nt.id===ct;Vt.setState(nt,w,Nn)}let oe=!1;nt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Fe.state.version||$t.outputColorSpace!==Ft||Z.isBatchedMesh&&$t.batching===!1||!Z.isBatchedMesh&&$t.batching===!0||Z.isBatchedMesh&&$t.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&$t.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&$t.instancing===!1||!Z.isInstancedMesh&&$t.instancing===!0||Z.isSkinnedMesh&&$t.skinning===!1||!Z.isSkinnedMesh&&$t.skinning===!0||Z.isInstancedMesh&&$t.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&$t.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&$t.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&$t.instancingMorph===!1&&Z.morphTexture!==null||$t.envMap!==jt||nt.fog===!0&&$t.fog!==Ut||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Vt.numPlanes||$t.numIntersection!==Vt.numIntersection)||$t.vertexAlphas!==Kt||$t.vertexTangents!==ee||$t.morphTargets!==Zt||$t.morphNormals!==ne||$t.morphColors!==Oe||$t.toneMapping!==tn||$t.morphTargetsCount!==ze)&&(oe=!0):(oe=!0,$t.__version=nt.version);let Rn=$t.currentProgram;oe===!0&&(Rn=hr(nt,Y,Z));let ua=!1,Dn=!1,mi=!1;const Ge=Rn.getUniforms(),Un=$t.uniforms;if(Ot.useProgram(Rn.program)&&(ua=!0,Dn=!0,mi=!0),nt.id!==ct&&(ct=nt.id,Dn=!0),ua||ht!==w){Ot.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ge.setValue(G,"projectionMatrix",w.projectionMatrix),Ge.setValue(G,"viewMatrix",w.matrixWorldInverse);const Ln=Ge.map.cameraPosition;Ln!==void 0&&Ln.setValue(G,_e.setFromMatrixPosition(w.matrixWorld)),le.logarithmicDepthBuffer&&Ge.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ge.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),ht!==w&&(ht=w,Dn=!0,mi=!0)}if($t.needsLights&&(Fe.state.directionalShadowMap.length>0&&Ge.setValue(G,"directionalShadowMap",Fe.state.directionalShadowMap,q),Fe.state.spotShadowMap.length>0&&Ge.setValue(G,"spotShadowMap",Fe.state.spotShadowMap,q),Fe.state.pointShadowMap.length>0&&Ge.setValue(G,"pointShadowMap",Fe.state.pointShadowMap,q)),Z.isSkinnedMesh){Ge.setOptional(G,Z,"bindMatrix"),Ge.setOptional(G,Z,"bindMatrixInverse");const Nn=Z.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Ge.setValue(G,"boneTexture",Nn.boneTexture,q))}Z.isBatchedMesh&&(Ge.setOptional(G,Z,"batchingTexture"),Ge.setValue(G,"batchingTexture",Z._matricesTexture,q),Ge.setOptional(G,Z,"batchingIdTexture"),Ge.setValue(G,"batchingIdTexture",Z._indirectTexture,q),Ge.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ge.setValue(G,"batchingColorTexture",Z._colorsTexture,q));const xn=rt.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&he.update(Z,rt,Rn),(Dn||$t.receiveShadow!==Z.receiveShadow)&&($t.receiveShadow=Z.receiveShadow,Ge.setValue(G,"receiveShadow",Z.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Un.envMap.value=jt,Un.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&Y.environment!==null&&(Un.envMapIntensity.value=Y.environmentIntensity),Un.dfgLUT!==void 0&&(Un.dfgLUT.value=QO()),Dn&&(Ge.setValue(G,"toneMappingExposure",C.toneMappingExposure),$t.needsLights&&Lo(Un,mi),Ut&&nt.fog===!0&&ae.refreshFogUniforms(Un,Ut),ae.refreshMaterialUniforms(Un,nt,gt,et,L.state.transmissionRenderTarget[w.id]),rf.upload(G,cc($t),Un,q)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(rf.upload(G,cc($t),Un,q),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ge.setValue(G,"center",Z.center),Ge.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Ge.setValue(G,"normalMatrix",Z.normalMatrix),Ge.setValue(G,"modelMatrix",Z.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Nn=nt.uniformsGroups;for(let Ln=0,dr=Nn.length;Ln<dr;Ln++){const Ni=Nn[Ln];Mt.update(Ni,Rn),Mt.bind(Ni,Rn)}}return Rn}function Lo(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function ka(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(w,Y,rt){const nt=E.get(w);nt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=Y,E.get(w.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:rt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const rt=E.get(w);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const Xa=G.createFramebuffer();this.setRenderTarget=function(w,Y=0,rt=0){at=w,X=Y,st=rt;let nt=null,Z=!1,Ut=!1;if(w){const Ft=E.get(w);if(Ft.__useDefaultFramebuffer!==void 0){Ot.bindFramebuffer(G.FRAMEBUFFER,Ft.__webglFramebuffer),z.copy(w.viewport),H.copy(w.scissor),Q=w.scissorTest,Ot.viewport(z),Ot.scissor(H),Ot.setScissorTest(Q),ct=-1;return}else if(Ft.__webglFramebuffer===void 0)q.setupRenderTarget(w);else if(Ft.__hasExternalTextures)q.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ee=w.depthTexture;if(Ft.__boundDepthTexture!==ee){if(ee!==null&&E.has(ee)&&(w.width!==ee.image.width||w.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(w)}}const jt=w.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Ut=!0);const Kt=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[Y])?nt=Kt[Y][rt]:nt=Kt[Y],Z=!0):w.samples>0&&q.useMultisampledRTT(w)===!1?nt=E.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?nt=Kt[rt]:nt=Kt,z.copy(w.viewport),H.copy(w.scissor),Q=w.scissorTest}else z.copy(tt).multiplyScalar(gt).floor(),H.copy(ft).multiplyScalar(gt).floor(),Q=Ct;if(rt!==0&&(nt=Xa),Ot.bindFramebuffer(G.FRAMEBUFFER,nt)&&Ot.drawBuffers(w,nt),Ot.viewport(z),Ot.scissor(H),Ot.setScissorTest(Q),Z){const Ft=E.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ft.__webglTexture,rt)}else if(Ut){const Ft=Y;for(let jt=0;jt<w.textures.length;jt++){const Kt=E.get(w.textures[jt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+jt,Kt.__webglTexture,rt,Ft)}}else if(w!==null&&rt!==0){const Ft=E.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ft.__webglTexture,rt)}ct=-1},this.readRenderTargetPixels=function(w,Y,rt,nt,Z,Ut,Gt,Ft=0){if(!(w&&w.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Gt!==void 0&&(jt=jt[Gt]),jt){Ot.bindFramebuffer(G.FRAMEBUFFER,jt);try{const Kt=w.textures[Ft],ee=Kt.format,Zt=Kt.type;if(!le.textureFormatReadable(ee)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Zt)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-nt&&rt>=0&&rt<=w.height-Z&&(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ft),G.readPixels(Y,rt,nt,Z,Tt.convert(ee),Tt.convert(Zt),Ut))}finally{const Kt=at!==null?E.get(at).__webglFramebuffer:null;Ot.bindFramebuffer(G.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(w,Y,rt,nt,Z,Ut,Gt,Ft=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Gt!==void 0&&(jt=jt[Gt]),jt)if(Y>=0&&Y<=w.width-nt&&rt>=0&&rt<=w.height-Z){Ot.bindFramebuffer(G.FRAMEBUFFER,jt);const Kt=w.textures[Ft],ee=Kt.format,Zt=Kt.type;if(!le.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ne),G.bufferData(G.PIXEL_PACK_BUFFER,Ut.byteLength,G.STREAM_READ),w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ft),G.readPixels(Y,rt,nt,Z,Tt.convert(ee),Tt.convert(Zt),0);const Oe=at!==null?E.get(at).__webglFramebuffer:null;Ot.bindFramebuffer(G.FRAMEBUFFER,Oe);const tn=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await SD(G,tn,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ne),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ut),G.deleteBuffer(ne),G.deleteSync(tn),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,rt=0){const nt=Math.pow(2,-rt),Z=Math.floor(w.image.width*nt),Ut=Math.floor(w.image.height*nt),Gt=Y!==null?Y.x:0,Ft=Y!==null?Y.y:0;q.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Gt,Ft,Z,Ut),Ot.unbindTexture()};const Ds=G.createFramebuffer(),ja=G.createFramebuffer();this.copyTextureToTexture=function(w,Y,rt=null,nt=null,Z=0,Ut=null){Ut===null&&(Z!==0?(Ql("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=Z,Z=0):Ut=0);let Gt,Ft,jt,Kt,ee,Zt,ne,Oe,tn;const Ze=w.isCompressedTexture?w.mipmaps[Ut]:w.image;if(rt!==null)Gt=rt.max.x-rt.min.x,Ft=rt.max.y-rt.min.y,jt=rt.isBox3?rt.max.z-rt.min.z:1,Kt=rt.min.x,ee=rt.min.y,Zt=rt.isBox3?rt.min.z:0;else{const xn=Math.pow(2,-Z);Gt=Math.floor(Ze.width*xn),Ft=Math.floor(Ze.height*xn),w.isDataArrayTexture?jt=Ze.depth:w.isData3DTexture?jt=Math.floor(Ze.depth*xn):jt=1,Kt=0,ee=0,Zt=0}nt!==null?(ne=nt.x,Oe=nt.y,tn=nt.z):(ne=0,Oe=0,tn=0);const ze=Tt.convert(Y.format),$t=Tt.convert(Y.type);let Fe;Y.isData3DTexture?(q.setTexture3D(Y,0),Fe=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),Fe=G.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),Fe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const oe=G.getParameter(G.UNPACK_ROW_LENGTH),Rn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ua=G.getParameter(G.UNPACK_SKIP_PIXELS),Dn=G.getParameter(G.UNPACK_SKIP_ROWS),mi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ze.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ze.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Kt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ee),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Zt);const Ge=w.isDataArrayTexture||w.isData3DTexture,Un=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const xn=E.get(w),Nn=E.get(Y),Ln=E.get(xn.__renderTarget),dr=E.get(Nn.__renderTarget);Ot.bindFramebuffer(G.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Ot.bindFramebuffer(G.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let Ni=0;Ni<jt;Ni++)Ge&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(w).__webglTexture,Z,Zt+Ni),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Ut,tn+Ni)),G.blitFramebuffer(Kt,ee,Gt,Ft,ne,Oe,Gt,Ft,G.DEPTH_BUFFER_BIT,G.NEAREST);Ot.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||E.has(w)){const xn=E.get(w),Nn=E.get(Y);Ot.bindFramebuffer(G.READ_FRAMEBUFFER,Ds),Ot.bindFramebuffer(G.DRAW_FRAMEBUFFER,ja);for(let Ln=0;Ln<jt;Ln++)Ge?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,xn.__webglTexture,Z,Zt+Ln):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,xn.__webglTexture,Z),Un?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Nn.__webglTexture,Ut,tn+Ln):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Nn.__webglTexture,Ut),Z!==0?G.blitFramebuffer(Kt,ee,Gt,Ft,ne,Oe,Gt,Ft,G.COLOR_BUFFER_BIT,G.NEAREST):Un?G.copyTexSubImage3D(Fe,Ut,ne,Oe,tn+Ln,Kt,ee,Gt,Ft):G.copyTexSubImage2D(Fe,Ut,ne,Oe,Kt,ee,Gt,Ft);Ot.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Un?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Fe,Ut,ne,Oe,tn,Gt,Ft,jt,ze,$t,Ze.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Fe,Ut,ne,Oe,tn,Gt,Ft,jt,ze,Ze.data):G.texSubImage3D(Fe,Ut,ne,Oe,tn,Gt,Ft,jt,ze,$t,Ze):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ut,ne,Oe,Gt,Ft,ze,$t,Ze.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ut,ne,Oe,Ze.width,Ze.height,ze,Ze.data):G.texSubImage2D(G.TEXTURE_2D,Ut,ne,Oe,Gt,Ft,ze,$t,Ze);G.pixelStorei(G.UNPACK_ROW_LENGTH,oe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Rn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ua),G.pixelStorei(G.UNPACK_SKIP_ROWS,Dn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,mi),Ut===0&&Y.generateMipmaps&&G.generateMipmap(Fe),Ot.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?q.setTextureCube(w,0):w.isData3DTexture?q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?q.setTexture2DArray(w,0):q.setTexture2D(w,0),Ot.unbindTexture()},this.resetState=function(){X=0,st=0,at=null,Ot.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),n.unpackColorSpace=Re._getUnpackColorSpace()}}const Hl=50,Gl=80,$O=!0,Np=6,tF=new nU,R1=rF();class eF{_ref;_speed=-1;_horizontalPressure=-1;_verticalPressure=-1;_waveFrequencyX=-1;_waveFrequencyY=-1;_waveAmplitude=-1;_shadows=-1;_highlights=-1;_saturation=-1;_brightness=-1;_grainScale=-1;_grainIntensity=-1;_grainSparsity=-1;_grainSpeed=-1;_colorBlending=-1;_colors=[];_wireframe=!1;_backgroundColor="#FFFFFF";_backgroundAlpha=1;_flowDistortionA=0;_flowDistortionB=0;_flowScale=1;_flowEase=0;_flowEnabled=!0;_mouseDistortionStrength=0;_mouseDistortionRadius=.25;_mouseDecayRate=.96;_mouseDarken=0;_mouse=new Ie(-1e3,-1e3);_mouseFBO=null;_sceneMouse=null;_cameraMouse=null;_mouseObjects=[];_currentBrush=0;_mouseBrushBaseScale=1;_enableProceduralTexture=!1;_textureVoidLikelihood=.45;_textureVoidWidthMin=200;_textureVoidWidthMax=486;_textureBandDensity=2.15;_textureColorBlending=.01;_textureSeed=333;_textureEase=.5;_proceduralTexture=null;_proceduralBackgroundColor="#000000";_textureShapeTriangles=20;_textureShapeCircles=15;_textureShapeBars=15;_textureShapeSquiggles=10;requestRef=-1;sizeObserver;sceneState;_cachedUniforms=null;_linkElement=null;_yOffset=0;_yOffsetWaveMultiplier=.004;_yOffsetColorMultiplier=.004;_yOffsetFlowMultiplier=.004;_tempClearColor=new Ve;_resizeTimeoutId=null;_textureNeedsUpdate=!1;_lastColorUpdate=0;_linkCheckCounter=0;_mouseUpdateScheduled=!1;_pendingMousePosition=null;_colorsChanged=!0;constructor(t){const{ref:n,speed:s=4,horizontalPressure:o=3,verticalPressure:c=3,waveFrequencyX:u=5,waveFrequencyY:f=5,waveAmplitude:p=3,colors:d,highlights:g=4,shadows:v=4,colorSaturation:_=0,colorBrightness:y=1,colorBlending:b=5,grainScale:T=2,grainIntensity:M=.55,grainSparsity:x=0,grainSpeed:D=.1,wireframe:R=!1,backgroundColor:U="#FFFFFF",backgroundAlpha:L=1,resolution:F=1,seed:I,yOffset:j=0,yOffsetWaveMultiplier:C=4,yOffsetColorMultiplier:N=4,yOffsetFlowMultiplier:X=4,flowDistortionA:st=0,flowDistortionB:at=0,flowScale:ct=1,flowEase:ht=0,flowEnabled:z=!0,mouseDistortionStrength:H=0,mouseDistortionRadius:Q=.25,mouseDecayRate:yt=.96,mouseDarken:xt=0,enableProceduralTexture:O=!1,textureVoidLikelihood:et=.45,textureVoidWidthMin:gt=200,textureVoidWidthMax:At=486,textureBandDensity:Ht=2.15,textureColorBlending:tt=.01,textureSeed:ft=333,textureEase:Ct=.5,proceduralBackgroundColor:Xt="#000000",textureShapeTriangles:kt=20,textureShapeCircles:ve=15,textureShapeBars:$e=15,textureShapeSquiggles:_e=10}=t;this._ref=n,this.destroy=this.destroy.bind(this),this._initScene=this._initScene.bind(this),this._buildMaterial=this._buildMaterial.bind(this),this.speed=s,this.horizontalPressure=o,this.verticalPressure=c,this.waveFrequencyX=u,this.waveFrequencyY=f,this.waveAmplitude=p,this.colorBlending=b,this.grainScale=T,this.grainIntensity=M,this.grainSparsity=x,this.grainSpeed=D,this.colors=d,this.shadows=v,this.highlights=g,this.colorSaturation=_,this.colorBrightness=y,this.wireframe=R,this.backgroundColor=U,this.backgroundAlpha=L,this.yOffset=j,this.yOffsetWaveMultiplier=C,this.yOffsetColorMultiplier=N,this.yOffsetFlowMultiplier=X,this.flowDistortionA=st,this.flowDistortionB=at,this.flowScale=ct,this.flowEase=ht,this.flowEnabled=z,this.mouseDistortionStrength=H,this.mouseDistortionRadius=Q,this.mouseDecayRate=yt,this.mouseDarken=xt,this.enableProceduralTexture=O,this.textureVoidLikelihood=et,this.textureVoidWidthMin=gt,this.textureVoidWidthMax=At,this.textureBandDensity=Ht,this.textureColorBlending=tt,this.textureSeed=ft,this.textureEase=Ct,this._proceduralBackgroundColor=Xt,this._textureShapeTriangles=kt,this._textureShapeCircles=ve,this._textureShapeBars=$e,this._textureShapeSquiggles=_e,this._setupMouseInteraction(),this.sceneState=this._initScene(F);let me=I!==void 0?I:sF();const Ae=()=>{const{renderer:be,camera:G,scene:Pe}=this.sceneState;if(this._linkCheckCounter++,this._linkCheckCounter>=300&&(this._linkCheckCounter=0,(!this._linkElement||!document.contains(this._linkElement))&&(this._linkElement=aF(n))),this._cachedUniforms){const Pt=this._cachedUniforms;me+=tF.getDelta()*this._speed,Pt.u_time.value=me,Pt.u_resolution.value.set(this._ref.width,this._ref.height),Pt.u_color_pressure.value.set(this._horizontalPressure,this._verticalPressure),Pt.u_wave_frequency_x.value=this._waveFrequencyX,Pt.u_wave_frequency_y.value=this._waveFrequencyY,Pt.u_wave_amplitude.value=this._waveAmplitude,Pt.u_color_blending.value=this._colorBlending,Pt.u_shadows.value=this._shadows,Pt.u_highlights.value=this._highlights,Pt.u_saturation.value=this._saturation,Pt.u_brightness.value=this._brightness,Pt.u_grain_intensity.value=this._grainIntensity,Pt.u_grain_sparsity.value=this._grainSparsity,Pt.u_grain_speed.value=this._grainSpeed,Pt.u_grain_scale.value=this._grainScale,Pt.u_y_offset.value=this._yOffset,Pt.u_y_offset_wave_multiplier.value=this._yOffsetWaveMultiplier,Pt.u_y_offset_color_multiplier.value=this._yOffsetColorMultiplier,Pt.u_y_offset_flow_multiplier.value=this._yOffsetFlowMultiplier,Pt.u_flow_distortion_a.value=this._flowDistortionA,Pt.u_flow_distortion_b.value=this._flowDistortionB,Pt.u_flow_scale.value=this._flowScale,Pt.u_flow_ease.value=this._flowEase,Pt.u_flow_enabled.value=this._flowEnabled?1:0,Pt.u_mouse_distortion_strength.value=this._mouseDistortionStrength,Pt.u_mouse_distortion_radius.value=this._mouseDistortionRadius,Pt.u_mouse_darken.value=this._mouseDarken,Pt.u_enable_procedural_texture.value=this._enableProceduralTexture?1:0,this._textureNeedsUpdate&&this._enableProceduralTexture&&(this._proceduralTexture&&this._proceduralTexture.dispose(),this._proceduralTexture=this._createProceduralTexture(),this._textureNeedsUpdate=!1),Pt.u_procedural_texture.value=this._proceduralTexture,Pt.u_texture_ease.value=this._textureEase,this.sceneState.meshes[0].material.wireframe=this._wireframe;const le=Date.now();if(this._colorsChanged||le-this._lastColorUpdate>100){this._lastColorUpdate=le,this._colorsChanged=!1;const Ot=Pt.u_colors.value;for(let P=0;P<Np;P++)if(P<this._colors.length){const E=this._colors[P];Ot[P].is_active=E.enabled?1:0,Ot[P].color.setStyle(E.color,""),Ot[P].influence=E.influence||0}else Ot[P].is_active=0;Pt.u_colors_count.value=Np}}if(this._mouseFBO&&this._sceneMouse&&this._cameraMouse&&this._mouseDistortionStrength>0){let Pt=!1;for(let le=0;le<this._mouseObjects.length;le++){const Ot=this._mouseObjects[le];Ot.mesh.visible&&(Pt=!0,Ot.mesh.rotation.z+=.01,Ot.mesh.material instanceof Vl&&(Ot.mesh.material.opacity*=this._mouseDecayRate,Ot.mesh.material.opacity<.01&&(Ot.mesh.visible=!1)))}if(Pt){be.getClearColor(this._tempClearColor);const le=be.getClearAlpha();be.setClearColor(0,0),be.setRenderTarget(this._mouseFBO),be.clear(),be.render(this._sceneMouse,this._cameraMouse),be.setRenderTarget(null),be.setClearColor(this._tempClearColor,le),this._cachedUniforms&&(this._cachedUniforms.u_mouse_texture.value=this._mouseFBO.texture)}}be.setClearColor(this._backgroundColor,this._backgroundAlpha),be.render(Pe,G),this.requestRef=requestAnimationFrame(Ae)},re=()=>{const{renderer:be}=this.sceneState,G=be.domElement,Pe=G.clientWidth,Pt=G.clientHeight;if(this.sceneState.renderer.setSize(Pe,Pt,!1),tM(this.sceneState.camera,Pe,Pt),this._mouseFBO&&this._cameraMouse){const le=Pt/2,Ot=Pe/Pt;this._mouseFBO.setSize(Pe/2,Pt/2),this._cameraMouse.left=-le*Ot,this._cameraMouse.right=le*Ot,this._cameraMouse.top=le,this._cameraMouse.bottom=-le,this._cameraMouse.updateProjectionMatrix()}};this.sizeObserver=new ResizeObserver(()=>{this._resizeTimeoutId!==null&&clearTimeout(this._resizeTimeoutId),this._resizeTimeoutId=window.setTimeout(()=>{re(),this._resizeTimeoutId=null},100)}),this.sizeObserver.observe(n),Ae()}destroy(){this&&(cancelAnimationFrame(this.requestRef),this.sizeObserver.disconnect(),this._resizeTimeoutId!==null&&(clearTimeout(this._resizeTimeoutId),this._resizeTimeoutId=null),this.sceneState&&(this.sceneState.renderer.dispose(),this.sceneState.meshes.forEach(t=>{t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose()})),this._mouseFBO&&this._mouseFBO.dispose(),this._proceduralTexture&&this._proceduralTexture.dispose())}downloadAsPNG(t="neat.png"){console.log("Downloading as PNG",this._ref);const n=this._ref.toDataURL("image/png");console.log("data",n),oF(n,t)}set speed(t){this._speed=t/20}set horizontalPressure(t){this._horizontalPressure=t/4}set verticalPressure(t){this._verticalPressure=t/4}set waveFrequencyX(t){this._waveFrequencyX=t*.04}set waveFrequencyY(t){this._waveFrequencyY=t*.04}set waveAmplitude(t){this._waveAmplitude=t*.75}set colors(t){this._colors=t,this._colorsChanged=!0}set highlights(t){this._highlights=t/100}set shadows(t){this._shadows=t/100}set colorSaturation(t){this._saturation=t/10}set colorBrightness(t){this._brightness=t}set colorBlending(t){this._colorBlending=t/10}set grainScale(t){this._grainScale=t==0?1:t}set grainIntensity(t){this._grainIntensity=t}set grainSparsity(t){this._grainSparsity=t}set grainSpeed(t){this._grainSpeed=t}set wireframe(t){this._wireframe=t}set resolution(t){this.sceneState=this._initScene(t)}set backgroundColor(t){this._backgroundColor=t}set backgroundAlpha(t){this._backgroundAlpha=t}set yOffset(t){this._yOffset=t}get yOffsetWaveMultiplier(){return this._yOffsetWaveMultiplier*1e3}set yOffsetWaveMultiplier(t){this._yOffsetWaveMultiplier=t/1e3}get yOffsetColorMultiplier(){return this._yOffsetColorMultiplier*1e3}set yOffsetColorMultiplier(t){this._yOffsetColorMultiplier=t/1e3}get yOffsetFlowMultiplier(){return this._yOffsetFlowMultiplier*1e3}set yOffsetFlowMultiplier(t){this._yOffsetFlowMultiplier=t/1e3}set flowDistortionA(t){this._flowDistortionA=t}set flowDistortionB(t){this._flowDistortionB=t}set flowScale(t){this._flowScale=t}set flowEase(t){this._flowEase=t}set flowEnabled(t){this._flowEnabled=t}get flowEnabled(){return this._flowEnabled}set mouseDistortionStrength(t){this._mouseDistortionStrength=Math.max(0,t)}set mouseDistortionRadius(t){this._mouseDistortionRadius=Math.max(.01,Math.min(t,1)),this._updateBrushScale()}_updateBrushScale(){!this._mouseObjects||this._mouseObjects.length===0||(this._mouseBrushBaseScale=this._mouseDistortionRadius)}set mouseDecayRate(t){this._mouseDecayRate=Math.max(.9,Math.min(t,.99))}set mouseDarken(t){this._mouseDarken=t}set enableProceduralTexture(t){this._enableProceduralTexture=t,t&&!this._proceduralTexture&&(this._textureNeedsUpdate=!0)}set textureVoidLikelihood(t){this._textureVoidLikelihood=t,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureVoidWidthMin(t){this._textureVoidWidthMin=t,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureVoidWidthMax(t){this._textureVoidWidthMax=t,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureBandDensity(t){this._textureBandDensity=t,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureColorBlending(t){this._textureColorBlending=t,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureSeed(t){this._textureSeed=t,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}get textureEase(){return this._textureEase}set textureEase(t){this._textureEase=t}set proceduralBackgroundColor(t){this._proceduralBackgroundColor=t,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureShapeTriangles(t){this._textureShapeTriangles=t,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureShapeCircles(t){this._textureShapeCircles=t,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureShapeBars(t){this._textureShapeBars=t,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureShapeSquiggles(t){this._textureShapeSquiggles=t,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}_initScene(t){const n=this._ref.width,s=this._ref.height;this.sceneState&&this.sceneState.renderer&&(this.sceneState.renderer.dispose(),this.sceneState.meshes.forEach(v=>{v.geometry.dispose(),Array.isArray(v.material)?v.material.forEach(_=>_.dispose()):v.material.dispose()}));const o=new JO({alpha:!0,preserveDrawingBuffer:!0,canvas:this._ref});o.setClearColor(16711680,.5),o.setSize(n,s,!1);const c=[],u=new CS,f=this._buildMaterial(n,s),p=new bo(Hl,Gl,240*t,240*t),d=new qi(p,f);d.rotation.x=-Math.PI/3.5,d.position.z=-1,c.push(d),u.add(d);const g=new $l(0,0,0,0,0,0);return g.position.z=5,tM(g,n,s),{renderer:o,camera:g,scene:u,meshes:c,resolution:t}}_buildMaterial(t,n){const s=Array.from({length:Np}).map((u,f)=>({is_active:f<this._colors.length&&this._colors[f].enabled?1:0,color:new Ve(f<this._colors.length?this._colors[f].color:0),influence:f<this._colors.length&&this._colors[f].influence||0})),o={u_time:{value:0},u_color_pressure:{value:new Ie(this._horizontalPressure,this._verticalPressure)},u_wave_frequency_x:{value:this._waveFrequencyX},u_wave_frequency_y:{value:this._waveFrequencyY},u_wave_amplitude:{value:this._waveAmplitude},u_resolution:{value:new Ie(t,n)},u_colors:{value:s},u_colors_count:{value:this._colors.length},u_plane_width:{value:Hl},u_plane_height:{value:Gl},u_shadows:{value:this._shadows},u_highlights:{value:this._highlights},u_grain_intensity:{value:this._grainIntensity},u_grain_sparsity:{value:this._grainSparsity},u_grain_scale:{value:this._grainScale},u_grain_speed:{value:this._grainSpeed},u_flow_distortion_a:{value:this._flowDistortionA},u_flow_distortion_b:{value:this._flowDistortionB},u_flow_scale:{value:this._flowScale},u_flow_ease:{value:this._flowEase},u_flow_enabled:{value:this._flowEnabled?1:0},u_y_offset:{value:this._yOffset},u_y_offset_wave_multiplier:{value:this._yOffsetWaveMultiplier},u_y_offset_color_multiplier:{value:this._yOffsetColorMultiplier},u_y_offset_flow_multiplier:{value:this._yOffsetFlowMultiplier},u_mouse_distortion_strength:{value:this._mouseDistortionStrength},u_mouse_distortion_radius:{value:this._mouseDistortionRadius},u_mouse_darken:{value:this._mouseDarken},u_mouse_texture:{value:this._mouseFBO?this._mouseFBO.texture:null},u_procedural_texture:{value:this._proceduralTexture},u_enable_procedural_texture:{value:this._enableProceduralTexture?1:0},u_texture_ease:{value:this._textureEase},u_saturation:{value:this._saturation},u_brightness:{value:this._brightness},u_color_blending:{value:this._colorBlending}},c=new Yi({uniforms:o,vertexShader:eM()+nM()+iM()+nF(),fragmentShader:eM()+iM()+nM()+iF()});return this._cachedUniforms=o,c.wireframe=$O,c}_setupMouseInteraction(){if(!this._ref)return;const t=this._ref.width,n=this._ref.height;this._mouseFBO=new ji(t/2,n/2),this._sceneMouse=new CS;const s=n/2,o=t/n;this._cameraMouse=new $l(-s*o,s*o,s,-s,0,1e4),this._cameraMouse.position.set(0,0,100);const c=document.createElement("canvas");c.width=128,c.height=128;const u=c.getContext("2d");if(u){const v=u.createRadialGradient(64,64,0,64,64,64);v.addColorStop(0,"rgba(255,255,255,0.8)"),v.addColorStop(.5,"rgba(255,255,255,0.4)"),v.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=v,u.fillRect(0,0,128,128)}const f=new RS(c),p=new Vl({map:f,transparent:!0,opacity:1,depthTest:!1,blending:lm}),d=new bo(200,200),g=50;for(let v=0;v<g;v++){const _=new qi(d,p.clone());_.visible=!1,this._sceneMouse.add(_),this._mouseObjects.push({mesh:_,active:!1})}this._updateBrushScale(),this._ref.addEventListener("mousemove",this._onMouseMove.bind(this))}_onMouseMove(t){if(!this._ref||!this._sceneMouse)return;const n=this._ref.getBoundingClientRect(),s=this._ref.width,o=this._ref.height;this._pendingMousePosition={x:t.clientX-n.left-s/2,y:-(t.clientY-n.top-o/2)},this._mouseUpdateScheduled||(this._mouseUpdateScheduled=!0,requestAnimationFrame(()=>{if(this._mouseUpdateScheduled=!1,!this._pendingMousePosition)return;this._mouse.x=this._pendingMousePosition.x,this._mouse.y=this._pendingMousePosition.y;const c=this._mouseObjects[this._currentBrush];c.mesh.scale.set(this._mouseBrushBaseScale,this._mouseBrushBaseScale,1),c.active=!0,c.mesh.visible=!0,c.mesh.position.set(this._mouse.x,this._mouse.y,0),c.mesh.rotation.z=Math.random()*Math.PI*2,c.mesh.material instanceof Vl&&(c.mesh.material.opacity=1),this._currentBrush=(this._currentBrush+1)%this._mouseObjects.length,this._pendingMousePosition=null}))}_createProceduralTexture(){const t=document.createElement("canvas");t.width=1024,t.height=1024;const n=t.getContext("2d",{willReadFrequently:!0});if(!n)return new Mn;let s=this._textureSeed;const o=this._textureSeed;function c(){const D=Math.sin(s++)*1e4;return D-Math.floor(D)}const u=D=>{s=o+D},f=this._colors.filter(D=>D.enabled).map(D=>D.color);if(f.length===0)return new Mn;function p(D){const R=parseInt(D.replace("#",""),16);return{r:R>>16&255,g:R>>8&255,b:R&255}}function d(D,R,U){return"#"+((1<<24)+(Math.round(D)<<16)+(Math.round(R)<<8)+Math.round(U)).toString(16).slice(1)}const g=()=>{const D=f[Math.floor(c()*f.length)],R=f[Math.floor(c()*f.length)],U=c()*this._textureColorBlending,L=p(D),F=p(R),I=L.r+(F.r-L.r)*U,j=L.g+(F.g-L.g)*U,C=L.b+(F.b-L.b)*U;return d(I,j,C)},v=this._proceduralBackgroundColor||"#000000";n.fillStyle=v,n.fillRect(0,0,1024,1024);const _=n.createLinearGradient(0,0,0,1024);_.addColorStop(0,g()),_.addColorStop(1,g()),n.fillStyle=_,n.fillRect(0,0,1024,1024);for(let D=0;D<this._textureShapeTriangles;D++){n.fillStyle=g(),n.beginPath();const R=c()*1024,U=c()*1024,L=100+c()*300;n.moveTo(R,U),n.lineTo(R+(c()-.5)*L,U+(c()-.5)*L),n.lineTo(R+(c()-.5)*L,U+(c()-.5)*L),n.fill()}for(let D=0;D<this._textureShapeCircles;D++){n.strokeStyle=g(),n.lineWidth=10+c()*50,n.beginPath();const R=c()*1024,U=c()*1024,L=50+c()*150;n.arc(R,U,L,0,Math.PI*2),n.stroke()}for(let D=0;D<this._textureShapeBars;D++)n.fillStyle=g(),n.save(),n.translate(c()*1024,c()*1024),n.rotate(c()*Math.PI),n.fillRect(-150,-25,300,50),n.restore();n.lineWidth=15,n.lineCap="round";for(let D=0;D<this._textureShapeSquiggles;D++){n.strokeStyle=g(),n.beginPath();let R=c()*1024,U=c()*1024;n.moveTo(R,U);for(let L=0;L<4;L++)n.bezierCurveTo(R+(c()-.5)*300,U+(c()-.5)*300,R+(c()-.5)*300,U+(c()-.5)*300,R+(c()-.5)*300,U+(c()-.5)*300),R+=(c()-.5)*300,U+=(c()-.5)*300;n.stroke()}u(5e4);const y=document.createElement("canvas");y.width=1024,y.height=1024;const b=y.getContext("2d",{willReadFrequently:!0});if(!b)return new Mn;b.fillStyle=v,b.fillRect(0,0,1024,1024);let T=0;const M=[];for(;T<1024;)if(c()<this._textureVoidLikelihood){const D=this._textureVoidWidthMin+c()*(this._textureVoidWidthMax-this._textureVoidWidthMin);M.push({type:"void",x:T,width:D}),T+=D}else{const D=50+c()*200;M.push({type:"matter",x:T,width:D}),T+=D}for(const D of M)if(D.type==="matter"){const R=D.x,U=Math.min(D.x+D.width,1024);let L=R;for(;L<U;){const F=(2+c()*20)/this._textureBandDensity,I=Math.floor(c()*1024);b.drawImage(t,I,0,F,1024,L,0,F,1024),L+=F}}const x=new RS(y);return x.minFilter=Es,x.magFilter=zn,x.wrapS=Yl,x.wrapT=Yl,x.anisotropy=16,x.needsUpdate=!0,x}}function tM(i,t,n){const s=t*n/1e6*Hl*Gl/1.5,o=t/n,c=Math.sqrt(s*o),u=s/c;let f=-Hl/2,p=Math.min((f+c)/1.5,Hl/2),d=Gl/4,g=Math.max((d-u)/2,-Gl/4);if(o<1){const y=o;f=f*y,p=p*y;const b=1.05;f=f*b,p=p*b,d=d*b,g=g*b}const v=-100,_=1e3;i instanceof $l?(i.left=f,i.right=p,i.top=d,i.bottom=g,i.near=v,i.far=_,i.updateProjectionMatrix()):i instanceof Ai&&(i.aspect=t/n,i.updateProjectionMatrix())}let Lp=null,Pp=null;function nF(){return Lp||(Lp=`
void main() {
    vUv = uv;

    // SCROLLING LOGIC
    // Separate multipliers for wave, color, and flow offsets
    float waveOffset = -u_y_offset * u_y_offset_wave_multiplier;
    float colorOffset = -u_y_offset * u_y_offset_color_multiplier;
    float flowOffset = -u_y_offset * u_y_offset_flow_multiplier;

    // 1. DISPLACEMENT (WAVES)
    // We add waveOffset to Y to scroll the wave pattern
    v_displacement_amount = cnoise( vec3(
        u_wave_frequency_x * position.x + u_time,
        u_wave_frequency_y * (position.y + waveOffset) + u_time,
        u_time
    ));

    // 2. FLOW FIELD
    // Apply flow offset to scroll the flow field mask
    vec2 baseUv = vUv;
    baseUv.y += flowOffset / u_plane_height; // Scale to match wave speed
    vec2 flowUv = baseUv;

    if (u_flow_enabled > 0.5) {
        if (u_flow_ease > 0.0 || u_flow_distortion_a > 0.0) {
            vec2 ppp = -1.0 + 2.0 * baseUv;
            ppp += 0.1 * cos((1.5 * u_flow_scale) * ppp.yx + 1.1 * u_time + vec2(0.1, 1.1));
            ppp += 0.1 * cos((2.3 * u_flow_scale) * ppp.yx + 1.3 * u_time + vec2(3.2, 3.4));
            ppp += 0.1 * cos((2.2 * u_flow_scale) * ppp.yx + 1.7 * u_time + vec2(1.8, 5.2));
            ppp += u_flow_distortion_a * cos((u_flow_distortion_b * u_flow_scale) * ppp.yx + 1.4 * u_time + vec2(6.3, 3.9));

            float r = length(ppp);
            flowUv = mix(baseUv, vec2(baseUv.x * (1.0 - u_flow_ease) + r * u_flow_ease, baseUv.y), u_flow_ease);
        }
    }

    // Pass the standard flow UV to fragment shader (for mouse/texture)
    vFlowUv = flowUv;

    // 3. COLOR MIXING
    // We take the computed flow UVs and apply the color offset
    // Scale by plane height to match wave offset speed (world space vs UV space)
    vec3 color = u_colors[0].color;
    vec2 adjustedUv = flowUv;
    adjustedUv.y += colorOffset / u_plane_height; // Scroll the color mixing pattern

    vec2 noise_cord = adjustedUv * u_color_pressure;
    const float minNoise = .0;
    const float maxNoise = .9;

    for (int i = 1; i < u_colors_count; i++) {
        if(u_colors[i].is_active > 0.5){
            float noiseFlow = (1. + float(i)) / 30.;
            float noiseSpeed = (1. + float(i)) * 0.11;
            float noiseSeed = 13. + float(i) * 7.;

            float noise = snoise(
                vec3(
                    noise_cord.x * u_color_pressure.x + u_time * noiseFlow * 2.,
                    noise_cord.y * u_color_pressure.y,
                    u_time * noiseSpeed
                ) + noiseSeed
            ) - (.1 * float(i)) + (.5 * u_color_blending);

            noise = clamp(minNoise, maxNoise + float(i) * 0.02, noise);
            color = mix(color, u_colors[i].color, smoothstep(0.0, u_color_blending, noise));
        }
    }

    v_color = color;

    // 4. VERTEX POSITION
    vec3 newPosition = position + normal * v_displacement_amount * u_wave_amplitude;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    v_new_position = gl_Position;
}
`,Lp)}function iF(){return Pp||(Pp=`
float random(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
}

float fbm(vec3 x) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 4; i++) {
        value += amplitude * snoise(x * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

void main() {
    // MOUSE DISTORTION
    vec2 finalUv = vFlowUv;
    
    if (u_mouse_distortion_strength > 0.0) {
        vec4 mouseColor = texture2D(u_mouse_texture, vUv);
        float mouseValue = mouseColor.r;
        
        if (mouseValue > 0.001) {
            float distortionAmount = mouseValue * u_mouse_distortion_strength;
            vec2 mouseDisp = vec2(distortionAmount, distortionAmount);
            finalUv -= mouseDisp;
        }
    }
    
    vec3 baseColor;

    if (u_enable_procedural_texture > 0.5) {
        // Calculate flow field distance for ease effect
        vec2 ppp = -1.0 + 2.0 * finalUv;
        ppp += 0.1 * cos((1.5 * u_flow_scale) * ppp.yx + 1.1 * u_time + vec2(0.1, 1.1));
        ppp += 0.1 * cos((2.3 * u_flow_scale) * ppp.yx + 1.3 * u_time + vec2(3.2, 3.4));
        ppp += 0.1 * cos((2.2 * u_flow_scale) * ppp.yx + 1.7 * u_time + vec2(1.8, 5.2));
        ppp += u_flow_distortion_a * cos((u_flow_distortion_b * u_flow_scale) * ppp.yx + 1.4 * u_time + vec2(6.3, 3.9));
        float r = length(ppp); // Flow distance
        
        // Ease blending: 0 = topographic (flow), 1 = image (UV)
        float vx = (finalUv.x * u_texture_ease) + (r * (1.0 - u_texture_ease));
        float vy = (finalUv.y * u_texture_ease) + (0.0 * (1.0 - u_texture_ease));
        vec2 texUv = vec2(vx, vy);

        // PARALLAX SCROLLING
        // We manually apply a smaller offset here to make the texture lag behind
        float parallaxFactor = 0.25; // 25% speed of the color mixing
        texUv.y -= (u_y_offset * u_y_offset_color_multiplier / u_plane_height) * parallaxFactor;

        texUv *= 1.5; // Tiling scale

        vec4 texSample = texture2D(u_procedural_texture, texUv);
        baseColor = texSample.rgb;
    } else {
        baseColor = v_color;
    }

    vec3 color = baseColor;

    // Post-processing
    color += pow(v_displacement_amount, 1.0) * u_highlights;
    color -= pow(1.0 - v_displacement_amount, 2.0) * u_shadows;
    color = saturation(color, 1.0 + u_saturation);
    color = color * u_brightness;

    // Grain
    vec2 noiseCoords = gl_FragCoord.xy / u_grain_scale;
    float grain = (u_grain_speed != 0.0) ? fbm(vec3(noiseCoords, u_time * u_grain_speed)) : fbm(vec3(noiseCoords, 0.0));

    grain = grain * 0.5 + 0.5;
    grain -= 0.5;
    grain = (grain > u_grain_sparsity) ? grain : 0.0;
    grain *= u_grain_intensity;

    color += vec3(grain);

    gl_FragColor = vec4(color, 1.0);
}
    `,Pp)}let Op=null;const eM=()=>Op||(Op=`
precision highp float;

struct Color {
    float is_active;
    vec3 color;
    float value;
};

uniform float u_grain_intensity; 
uniform float u_grain_sparsity; 
uniform float u_grain_scale; 
uniform float u_grain_speed; 
uniform float u_time;

uniform float u_wave_amplitude;
uniform float u_wave_frequency_x;
uniform float u_wave_frequency_y;

uniform vec2 u_color_pressure;

uniform float u_plane_width;
uniform float u_plane_height;

uniform float u_shadows;
uniform float u_highlights;
uniform float u_saturation;
uniform float u_brightness;

uniform float u_color_blending;

uniform int u_colors_count;
uniform Color u_colors[6];
uniform vec2 u_resolution;

uniform float u_y_offset;
uniform float u_y_offset_wave_multiplier;
uniform float u_y_offset_color_multiplier;
uniform float u_y_offset_flow_multiplier;

// Flow field uniforms
uniform float u_flow_distortion_a;
uniform float u_flow_distortion_b;
uniform float u_flow_scale;
uniform float u_flow_ease;
uniform float u_flow_enabled;

// Mouse interaction uniforms
uniform float u_mouse_distortion_strength;
uniform float u_mouse_distortion_radius;
uniform float u_mouse_darken;
uniform sampler2D u_mouse_texture;

// Procedural texture uniforms
uniform sampler2D u_procedural_texture;
uniform float u_enable_procedural_texture;
uniform float u_texture_ease;

varying vec2 vUv;
varying vec2 vFlowUv;
varying vec4 v_new_position;
varying vec3 v_color;
varying float v_displacement_amount;

    `,Op);let Fp=null;const nM=()=>Fp||(Fp=`

// 1. REPLACEMENT PERMUTE: 
// Uses a hash function (fract/sin) instead of a modular lookup table.
vec4 permute(vec4 x) {
    return floor(fract(sin(x) * 43758.5453123) * 289.0);
}

// Taylor Inverse Sqrt
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

// Fade function
vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// 3D Simplex Noise
float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  // Permutations
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  // Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

// Classic Perlin noise
float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}
`,Fp);let Bp=null;const iM=()=>Bp||(Bp=`

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}

float saturation(vec3 rgb)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(rgb.bg, K.wz), vec4(rgb.gb, K.xy), step(rgb.b, rgb.g));
    vec4 q = mix(vec4(p.xyw, rgb.r), vec4(rgb.r, p.yzx), step(p.x, rgb.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return abs(6.0 * d + e);
}

// get saturation of a color in values between 0 and 1
float getSaturation(vec3 color) {
    float max = max(color.r, max(color.g, color.b));
    float min = min(color.r, min(color.g, color.b));
    return (max - min) / max;
}
    
vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
`,Bp),aM=i=>{i.id=R1,i.href="https://neat.firecms.co",i.target="_blank",i.style.position="absolute",i.style.display="block",i.style.bottom="0",i.style.right="0",i.style.padding="10px",i.style.color="#dcdcdc",i.style.opacity="0.8",i.style.fontFamily="sans-serif",i.style.fontSize="16px",i.style.fontWeight="bold",i.style.textDecoration="none",i.style.zIndex="10000",i.innerHTML="NEAT"},aF=i=>{const t=i.parentElement?.getElementsByTagName("a");if(t){for(let s=0;s<t.length;s++)if(t[s].id===R1)return aM(t[s]),t[s]}const n=document.createElement("a");return aM(n),i.parentElement?.appendChild(n),n};function sF(){const i=new Date,t=i.getMinutes(),n=i.getSeconds();return t*60+n}function rF(i=6){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let s=0;s<i;s++){const o=Math.floor(Math.random()*t.length);n+=t.charAt(o)}return n}function oF(i,t){const n=document.createElement("a");n.download=t,n.href=i,document.body.appendChild(n),n.click(),document.body.removeChild(n)}const D1=zT.memo(()=>{const i=Lt.useRef(null),t=Lt.useRef(null);return Lt.useEffect(()=>{if(i.current)return t.current=new eF({ref:i.current,colors:[{color:"#020024",enabled:!0},{color:"#090979",enabled:!0},{color:"#000000",enabled:!0},{color:"#00d4ff",enabled:!0},{color:"#141414",enabled:!0}],speed:2,horizontalPressure:4,verticalPressure:5,waveFrequencyX:2,waveFrequencyY:3,waveAmplitude:6,shadows:5,highlights:4,colorBrightness:1,colorSaturation:3,wireframe:!1,colorBlending:6,backgroundColor:"#000000",backgroundAlpha:1,resolution:1}),()=>{t.current&&t.current.destroy()}},[]),B.jsx("canvas",{ref:i,className:"absolute inset-0 w-full h-full object-cover",style:{zIndex:0}})}),lF=({children:i})=>{const t=Lt.useRef(null),{scrollY:n}=mf(),{scrollYProgress:s}=mf({target:t,offset:["start start","end end"]}),o=Ce(n,[0,200],["16px","0px"]),c=Ce(n,[0,200],["30px","0px"]),u=Ce(s,[.96,1],["0px","80px"]);return B.jsxs("div",{ref:t,className:"relative w-full bg-white",children:[B.jsx("div",{className:"sticky top-0 h-screen w-full overflow-hidden",children:B.jsxs(nn.div,{style:{top:o,left:o,right:o,bottom:o,borderTopLeftRadius:c,borderTopRightRadius:c,borderBottomLeftRadius:u,borderBottomRightRadius:u},className:"absolute overflow-hidden bg-black",children:[B.jsx(D1,{}),B.jsx("div",{className:"absolute inset-0 bg-black/20 z-10"})]})}),B.jsx("div",{className:"relative z-10 -mt-[100vh]",children:i})]})},cF=()=>B.jsxs("footer",{className:"relative w-full min-h-screen overflow-hidden bg-black text-white rounded-t-[40px] md:rounded-t-[80px]",children:[B.jsxs("div",{className:"absolute inset-0 z-0",children:[B.jsx(D1,{}),B.jsx("div",{className:"absolute inset-0 bg-black/10 z-10"})]}),B.jsxs("div",{className:"relative z-20 w-full h-full min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 py-12 md:py-20",children:[B.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20",children:[B.jsxs("div",{className:"col-span-1 md:col-span-7 lg:col-span-6 space-y-12",children:[B.jsxs("h2",{className:"text-xl md:text-2xl lg:text-3xl font-medium leading-[1.1] tracking-tight",children:["Execution fit for a ",B.jsx("br",{className:"hidden md:block"}),"powerful future."]}),B.jsx("p",{className:"text-sm md:text-base text-white/60 leading-relaxed max-w-lg",children:"Rakindus combines consulting-grade problem solving with full operational ownership — fully integrated, fully managed, and accountable to outcomes."}),B.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[B.jsx("button",{className:"bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wide transition-all group flex items-center gap-2",children:"Schedule a short intro"}),B.jsx("button",{className:"bg-[#bda6f1] hover:bg-[#a88eeb] text-black w-14 h-14 rounded-full flex items-center justify-center transition-colors",children:B.jsx(xf,{size:24})})]})]}),B.jsxs("div",{className:"col-span-1 md:col-start-9 md:col-span-4 grid grid-cols-2 gap-8 md:gap-12",children:[B.jsxs("div",{className:"space-y-6",children:[B.jsx("h4",{className:"text-xs font-semibold tracking-widest text-white/50 uppercase",children:"Navigate"}),B.jsx("ul",{className:"space-y-4",children:["The Constraint","Capabilities","Impact","About","Perspectives"].map(i=>B.jsx("li",{children:B.jsx("a",{href:"#",className:"text-lg md:text-xl text-white hover:text-white/70 transition-colors block",children:i})},i))})]}),B.jsxs("div",{className:"space-y-6",children:[B.jsx("h4",{className:"text-xs font-semibold tracking-widest text-white/50 uppercase",children:"Connect"}),B.jsx("ul",{className:"space-y-4",children:["LinkedIn","Instagram"].map(i=>B.jsx("li",{children:B.jsxs("a",{href:"#",className:"text-lg md:text-xl text-white hover:text-white/70 transition-colors flex items-center gap-1 group",children:[i,B.jsx(tA,{size:16,className:"opacity-0 group-hover:opacity-100 transition-opacity"})]})},i))})]})]})]}),B.jsxs("div",{className:"flex flex-col mt-20 md:mt-auto",children:[B.jsx("h1",{className:"text-[18vw] font-bold leading-[0.8] tracking-tighter text-white select-none pointer-events-none -ml-[0.05em]",children:"Rakindus"}),B.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end mt-4 text-xs md:text-sm text-white/40 font-mono tracking-wide uppercase space-y-4 md:space-y-0",children:[B.jsxs("p",{children:["© ",new Date().getFullYear()," Rakindus. All rights reserved."]}),B.jsxs("div",{className:"flex gap-8",children:[B.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Privacy"}),B.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Terms"})]})]})]})]})]}),uF=()=>{const i=[{value:"10%–60%",label:"Lower operating costs"},{value:"2–3×",label:"Faster team ramp-up"},{value:"Immediate",label:"Capacity expansion"},{value:"Fewer",label:"Operational distractions for leadership"}];return B.jsx("section",{className:"py-20 md:py-28 bg-white text-gray-900",children:B.jsxs("div",{className:"w-full px-6 md:px-16 lg:px-24",children:[B.jsx("h2",{className:"text-[4rem] md:text-[10rem] lg:text-[13rem] font-black leading-[0.85] tracking-tighter uppercase mb-12 md:mb-20",children:"IMPACT"}),B.jsxs("div",{className:"flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 items-start",children:[B.jsxs("div",{className:"p-8 md:p-10 max-w-md shrink-0 rounded-2xl",children:[B.jsx("h3",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-2",children:"Measurable outcomes."}),B.jsx("p",{className:"text-sm md:text-base text-gray-700 leading-relaxed mb-6",children:"Across partners, Rakindus consistently delivers:"}),B.jsxs("div",{className:"space-y-0 mb-8",children:[B.jsx("div",{className:"border-b border-gray-400/40 py-3",children:B.jsx("span",{className:"text-sm md:text-base text-gray-800",children:"10%–60% lower operating costs"})}),B.jsx("div",{className:"border-b border-gray-400/40 py-3",children:B.jsx("span",{className:"text-sm md:text-base text-gray-800",children:"2–3× faster team ramp-up"})}),B.jsx("div",{className:"border-b border-gray-400/40 py-3",children:B.jsx("span",{className:"text-sm md:text-base text-gray-800",children:"Immediate capacity expansion"})}),B.jsx("div",{className:"border-b border-gray-400/40 py-3",children:B.jsx("span",{className:"text-sm md:text-base text-gray-800",children:"Fewer operational distractions for leadership"})}),B.jsx("div",{className:"py-3",children:B.jsx("span",{className:"text-sm md:text-base text-gray-800",children:"Long-term, dependable execution"})})]}),B.jsx("p",{className:"text-base md:text-lg text-gray-400 font-bold",children:"Not incremental support."}),B.jsx("p",{className:"text-base md:text-lg text-gray-900 font-bold",children:"Structural advantages."})]}),B.jsx("div",{className:"grid grid-cols-2 gap-x-16 gap-y-14 flex-1",children:i.map((t,n)=>B.jsxs("div",{children:[B.jsx("span",{className:"text-3xl md:text-6xl lg:text-7xl font-bold text-gray-900 block mb-3",children:t.value}),B.jsx("div",{className:"border-t-2 border-gray-900 pt-3",children:B.jsx("span",{className:"text-sm md:text-base text-gray-700 font-medium",children:t.label})})]},n))})]})]})})},fF=()=>B.jsx("section",{className:"py-24 md:py-32 bg-white text-gray-900 border-t border-gray-100",children:B.jsxs("div",{className:"w-full mx-auto px-6 md:px-12 lg:px-20",children:[B.jsx("h1",{className:"text-[4rem] md:text-[18vw] font-bold leading-[0.8] tracking-tighter text-gray-900 mb-12 md:mb-24",children:"About"}),B.jsxs("div",{className:"grid md:grid-cols-12 gap-12 md:gap-24",children:[B.jsx("div",{className:"col-span-12 md:col-span-4",children:B.jsxs("div",{className:"sticky top-32",children:[B.jsx("h3",{className:"text-xl md:text-2xl font-medium leading-tight text-gray-900 max-w-[200px]",children:"A different kind of operating partner."}),B.jsx("p",{className:"mt-4 text-sm text-gray-400 font-mono uppercase tracking-widest",children:"Rakindus"})]})}),B.jsxs("div",{className:"col-span-12 md:col-span-8 flex flex-col justify-between min-h-[400px]",children:[B.jsxs("div",{children:[B.jsx("p",{className:"text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-gray-900 mb-12",children:"Rakindus combines consulting-grade problem solving with full operational ownership."}),B.jsx("p",{className:"text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl",children:"We don’t stop at recommendations — we run the work end-to-end and stay accountable for results."})]}),B.jsx("div",{className:"pt-16 md:pt-24",children:B.jsx("div",{className:"flex flex-wrap gap-3 md:gap-4",children:["Strategy sets direction.","Execution creates outcomes.","We make sure both move together."].map((i,t)=>B.jsx("span",{className:"inline-block px-6 py-3 bg-gray-100 rounded-full text-sm md:text-base font-medium text-gray-900 border border-gray-200",children:i},t))})})]})]})]})}),hF=()=>B.jsx("section",{className:"py-24 md:py-32 bg-white text-gray-900 border-t border-gray-100",children:B.jsxs("div",{className:"w-full mx-auto px-6 md:px-12 lg:px-20",children:[B.jsx("h1",{className:"text-[3.5rem] md:text-[15vw] font-bold leading-[0.8] tracking-tighter text-gray-900 mb-12 md:mb-24",children:"Perspectives"}),B.jsxs("div",{className:"grid md:grid-cols-12 gap-12 md:gap-24",children:[B.jsx("div",{className:"col-span-12 md:col-span-4",children:B.jsx("p",{className:"text-sm text-gray-400 font-mono uppercase tracking-widest",children:"Rakindus Insights"})}),B.jsxs("div",{className:"col-span-12 md:col-span-8 flex flex-col justify-between min-h-[300px]",children:[B.jsxs("h2",{className:"text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-gray-900 mb-12",children:["Insights on operating strategy,",B.jsx("br",{}),"execution design, and scaling teams."]}),B.jsx("div",{children:B.jsxs("a",{href:"#",className:"group inline-flex items-center gap-2 text-gray-900 font-semibold uppercase tracking-widest text-sm hover:text-gray-600 transition-colors border border-gray-900 rounded-full px-6 py-3",children:["View insights",B.jsx(xf,{size:16,className:"group-hover:translate-x-1 transition-transform"})]})})]})]})]})}),dF=()=>B.jsx("section",{className:"py-24 md:py-32 bg-white text-gray-900 border-t border-gray-100",children:B.jsx("div",{className:"w-full px-6 md:px-12 lg:px-20",children:B.jsxs("div",{className:"flex flex-col gap-2 md:gap-4",children:[B.jsxs("div",{className:"flex flex-wrap items-baseline gap-x-3 md:gap-x-8",children:[B.jsx("span",{className:"text-[1.8rem] md:text-[12vw] font-black uppercase leading-[0.8] tracking-tighter",children:"EXECUTION"}),B.jsx("span",{className:"text-[1.8rem] md:text-[12vw] font-black uppercase leading-[0.8] tracking-tighter",children:"FIT"}),B.jsx("span",{className:"text-[1.8rem] md:text-[12vw] font-black uppercase leading-[0.8] tracking-tighter",children:"FOR"}),B.jsx("span",{className:"text-[1.8rem] md:text-[12vw] font-black uppercase leading-[0.8] tracking-tighter",children:"A"})]}),B.jsxs("div",{className:"flex flex-wrap items-baseline gap-x-3 md:gap-x-8",children:[B.jsx("span",{className:"text-[1.8rem] md:text-[12vw] font-black uppercase leading-[0.8] tracking-tighter text-[#07308C]",children:"POWERFUL"}),B.jsx("span",{className:"text-[1.8rem] md:text-[12vw] font-black uppercase leading-[0.8] tracking-tighter",children:"FUTURE"}),B.jsxs("a",{href:"#",className:"ml-auto self-center text-sm md:text-base font-medium uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all group border border-gray-900 rounded-full px-6 py-3 hover:bg-gray-900 hover:text-white duration-300",children:["Schedule a short intro",B.jsx(xf,{size:16,className:"transition-transform duration-300 group-hover:translate-x-1"})]})]})]})})});function pF(){return B.jsxs("div",{className:"min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900 font-sans overflow-x-clip max-w-[100vw]",children:[B.jsx(E3,{}),B.jsxs("main",{children:[B.jsxs(lF,{children:[B.jsx(T3,{}),B.jsx(V3,{})]}),B.jsx(uF,{}),B.jsx(fF,{}),B.jsx(hF,{}),B.jsx(dF,{})]}),B.jsx(cF,{})]})}WT.createRoot(document.getElementById("root")).render(B.jsx(Lt.StrictMode,{children:B.jsx(pF,{})}));
