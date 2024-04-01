// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,y=/^(\d+)e/,w=/\.0$/,h=/\.0*e/,d=/(\..*[^0])0*e/;function b(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,d,"$1e"),n=l.call(n,h,"e"),n=l.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,g,"e-0$1"),r.alternate&&(n=l.call(n,v,"$1."),n=l.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var A=String.fromCharCode,E=isNaN,F=Array.isArray;function V(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,a,o,f,c,s,l,p,g,v,y;if(!F(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)f+=n;else{if(t=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),e=n.flags,l=0;l<e.length;l++)switch(a=e.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,E(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,v=n.padRight,y=void 0,(y=g-p.length)<0?p:p=v?p+m(y):m(y)+p)),f+=n.arg||"",c+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function T(r){var t,e,n,i;for(e=[],i=0,n=U.exec(r);n;)(t=r.slice(i,U.lastIndex-n[0].length)).length&&e.push(t),e.push(I(n)),i=U.lastIndex,n=U.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function _(r){var t,e;if("string"!=typeof r)throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[T(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return S.apply(null,t)}var j=Object.prototype,O=j.toString,x=j.__defineGetter__,N=j.__defineSetter__,k=j.__lookupGetter__,W=j.__lookupSetter__;var B=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(_("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(_("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(k.call(r,t)||W.call(r,t)?(n=r.__proto__,r.__proto__=j,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&x&&x.call(r,t,e.get),o&&N&&N.call(r,t,e.set),r};function L(r,t,e){B(r,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}var P={};L(P,"isSameValue",(function(r,t){return r===t?0!==r||1/r==1/t:r!=r&&t!=t})),L(P,"isSameValueZero",(function(r,t){return r===t||r!=r&&t!=t}));var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function R(){return H&&"symbol"==typeof Symbol.toStringTag}var $=Object.prototype.toString;var G=Object.prototype.hasOwnProperty;var C="function"==typeof Symbol?Symbol:void 0,D="function"==typeof C?C.toStringTag:"";var M=R()?function(r){var t,e,n,i,a;if(null==r)return $.call(r);e=r[D],a=D,t=null!=(i=r)&&G.call(i,a);try{r[D]=void 0}catch(t){return $.call(r)}return n=$.call(r),t?r[D]=e:delete r[D],n}:function(r){return $.call(r)},Z="function"==typeof Uint32Array;var q="function"==typeof Uint32Array?Uint32Array:null;var z,X="function"==typeof Uint32Array?Uint32Array:void 0;z=function(){var r,t,e;if("function"!=typeof q)return!1;try{t=new q(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Z&&e instanceof Uint32Array||"[object Uint32Array]"===M(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?X:function(){throw new Error("not implemented")};var Y=z,J="function"==typeof Float64Array;var K="function"==typeof Float64Array?Float64Array:null;var Q,rr="function"==typeof Float64Array?Float64Array:void 0;Q=function(){var r,t,e;if("function"!=typeof K)return!1;try{t=new K([1,3.14,-3.14,NaN]),e=t,r=(J&&e instanceof Float64Array||"[object Float64Array]"===M(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var tr=Q,er="function"==typeof Uint8Array;var nr="function"==typeof Uint8Array?Uint8Array:null;var ir,ar="function"==typeof Uint8Array?Uint8Array:void 0;ir=function(){var r,t,e;if("function"!=typeof nr)return!1;try{t=new nr(t=[1,3.14,-3.14,256,257]),e=t,r=(er&&e instanceof Uint8Array||"[object Uint8Array]"===M(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or=ir,ur="function"==typeof Uint16Array;var fr="function"==typeof Uint16Array?Uint16Array:null;var cr,sr="function"==typeof Uint16Array?Uint16Array:void 0;cr=function(){var r,t,e;if("function"!=typeof fr)return!1;try{t=new fr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(ur&&e instanceof Uint16Array||"[object Uint16Array]"===M(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr={uint16:cr,uint8:or};(lr=new pr.uint16(1))[0]=4660;var gr=52===new pr.uint8(lr.buffer)[0],vr=!0===gr?1:0,yr=new tr(1),wr=new Y(yr.buffer);function hr(r){return yr[0]=r,wr[vr]}var dr=2146435072,br=1023;function mr(r){var t=hr(r);return(t=(t&dr)>>>20)-br|0}var Ar=Number.POSITIVE_INFINITY,Er=Number,Fr=Er.NEGATIVE_INFINITY;function Vr(r){return r!=r}var Sr=Math.floor;function Ur(r){return Sr(r)===r}function Ir(r){return Ur(r/2)}function Tr(r){return Ir(r>0?r-1:r+1)}function _r(r){return r===Ar||r===Fr}var jr,Or,xr=Math.sqrt;function Nr(r){return Math.abs(r)}function kr(r,t,e){B(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}!0===gr?(jr=1,Or=0):(jr=0,Or=1);var Wr={HIGH:jr,LOW:Or},Br=new tr(1),Lr=new Y(Br.buffer),Pr=Wr.HIGH,Hr=Wr.LOW;function Rr(r,t,e,n){return Br[0]=r,t[n]=Lr[Pr],t[n+e]=Lr[Hr],t}function $r(r){return Rr(r,[0,0],1,0)}kr($r,"assign",Rr);var Gr=!0===gr?0:1,Cr=new tr(1),Dr=new Y(Cr.buffer);function Mr(r,t){return Cr[0]=r,Dr[Gr]=t>>>0,Cr[0]}function Zr(r){return 0|r}var qr,zr,Xr=2147483647,Yr=2147483648;!0===gr?(qr=1,zr=0):(qr=0,zr=1);var Jr={HIGH:qr,LOW:zr},Kr=new tr(1),Qr=new Y(Kr.buffer),rt=Jr.HIGH,tt=Jr.LOW;function et(r,t){return Qr[rt]=r,Qr[tt]=t,Kr[0]}var nt=[0,0];function it(r,t){var e,n;return $r.assign(r,nt,1,0),e=nt[0],e&=Xr,n=hr(t),et(e|=n&=Yr,nt[1])}var at=1072693247,ot=1e300,ut=1e-300;var ft=!0===gr?1:0,ct=new tr(1),st=new Y(ct.buffer);function lt(r,t){return ct[0]=r,st[ft]=t>>>0,ct[0]}var pt=1048575,gt=1048576,vt=1072693248,yt=536870912,wt=524288,ht=20,dt=9007199254740992,bt=.9617966939259756,mt=.9617967009544373,At=-7.028461650952758e-9,Et=[1,1.5],Ft=[0,.5849624872207642],Vt=[0,1.350039202129749e-8];var St=1.4426950408889634,Ut=1.4426950216293335,It=1.9259629911266175e-8;var Tt=1023,_t=-1023,jt=-1074,Ot=22250738585072014e-324,xt=4503599627370496;function Nt(r,t,e,n){return Vr(r)||_r(r)?(t[n]=r,t[n+e]=0,t):0!==r&&Nr(r)<Ot?(t[n]=r*xt,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}function kt(r){return Nt(r,[0,0],1,0)}kr(kt,"assign",Nt);var Wt=2220446049250313e-31,Bt=2148532223,Lt=[0,0],Pt=[0,0];var Ht=.6931471805599453,Rt=1048575;var $t=1048576,Gt=1071644672,Ct=20,Dt=.6931471824645996,Mt=-1.904654299957768e-9;function Zt(r,t,e){var n,i,a,o,u,f,c,s,l,p,g,v,y,w;return l=((s=r&Xr|0)>>Ct)-br|0,c=0,s>Gt&&(i=lt(0,((c=r+($t>>l+1)>>>0)&~(Rt>>(l=((c&Xr)>>Ct)-br|0)))>>>0),c=(c&Rt|$t)>>Ct-l>>>0,r<0&&(c=-c),t-=i),r=Zr(r=hr(f=1-((f=(a=(i=Mr(i=e+t,0))*Dt)+(o=(e-(i-t))*Ht+i*Mt))*(n=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Ct>>>0)>>Ct<=0?(g=f,f=0===(v=c)||0===g||Vr(g)||_r(g)?g:(Nt(g,Lt,1,0),g=Lt[0],v+=Lt[1],(v+=mr(g))<jt?it(0,g):v>Tt?g<0?Fr:Ar:(v<=_t?(v+=52,w=Wt):w=1,$r.assign(g,Pt,1,0),y=Pt[0],y&=Bt,w*et(y|=v+br<<20,Pt[1])))):f=lt(f,r),f}var qt=1072693247,zt=1105199104,Xt=1139802112,Yt=1083179008,Jt=1072693248,Kt=1083231232,Qt=3230714880,re=31,te=1e300,ee=1e-300,ne=8008566259537294e-32,ie=[0,0],ae=[0,0];function oe(r,t){var e,n,i,a,o,u,f,c,s,l,p,g,v,y;if(Vr(r)||Vr(t))return NaN;if($r.assign(t,ie,1,0),o=ie[0],0===ie[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return xr(r);if(-.5===t)return 1/xr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(_r(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Nr(r)<1==(t===Ar)?0:Ar}(r,t)}if($r.assign(r,ie,1,0),a=ie[0],0===ie[1]){if(0===a)return function(r,t){return t===Fr?Ar:t===Ar?0:t>0?Tr(t)?r:0:Tr(t)?it(Ar,r):Ar}(r,t);if(1===r)return 1;if(-1===r&&Tr(t))return-1;if(_r(r))return r===Fr?oe(-0,-t):t<0?0:Ar}if(r<0&&!1===Ur(t))return(r-r)/(r-r);if(i=Nr(r),e=a&Xr|0,n=o&Xr|0,f=o>>>re|0,u=(u=a>>>re|0)&&Tr(t)?-1:1,n>zt){if(n>Xt)return function(r,t){return(hr(r)&Xr)<=at?t<0?ot*ot:ut*ut:t>0?ot*ot:ut*ut}(r,t);if(e<qt)return 1===f?u*te*te:u*ee*ee;if(e>Jt)return 0===f?u*te*te:u*ee*ee;p=function(r,t){var e,n,i,a,o,u,f;return a=(i=t-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),e=(u=i*It-a*St)-((n=Mr(n=(o=Ut*i)+u,0))-o),r[0]=n,r[1]=e,r}(ae,i)}else p=function(r,t,e){var n,i,a,o,u,f,c,s,l,p,g,v,y,w,h,d,b,m,A,E,F;return m=0,e<gt&&(m-=53,e=hr(t*=dt)),m+=(e>>ht)-br|0,e=(A=e&pt|0)|vt|0,A<=235662?E=0:A<767610?E=1:(E=0,m+=1,e-=gt),o=Mr(i=(d=(t=lt(t,e))-(c=Et[E]))*(b=1/(t+c)),0),n=(e>>1|yt)+wt,f=lt(0,n+=E<<18),h=(a=i*i)*a*(0===(F=a)?.5999999999999946:.5999999999999946+F*(.4285714285785502+F*(.33333332981837743+F*(.272728123808534+F*(.23066074577556175+.20697501780033842*F))))),f=Mr(f=3+(a=o*o)+(h+=(u=b*(d-o*f-o*(t-(f-c))))*(o+i)),0),l=Mr(l=(d=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=mt*l,y=(g=At*l+(b-(l-d))*bt+Vt[E])-((v=Mr(v=p+g+(s=Ft[E])+(w=m),0))-w-s-p),r[0]=v,r[1]=y,r}(ae,i,e);if(g=(l=(t-(c=Mr(t,0)))*p[0]+t*p[1])+(s=c*p[0]),$r.assign(g,ie,1,0),v=Zr(ie[0]),y=Zr(ie[1]),v>=Yt){if(0!=(v-Yt|y))return u*te*te;if(l+ne>g-s)return u*te*te}else if((v&Xr)>=Kt){if(0!=(v-Qt|y))return u*ee*ee;if(l<=g-s)return u*ee*ee}return u*(g=Zt(v,s,l))}function ue(r){var t,e,n;if(64!==r.length)throw new Error(_("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,r));if(t="1"===r[0]?-1:1,n=parseInt(r.substring(1,12),2)-br,e=function(r){var t,e=0;for(t=0;t<r.length;t++)"1"===r[t]&&(e+=oe(2,-(t+1)));return e}(r.substring(12)),n===-br){if(0===e)return 1===t?0:-0;n=-1022}else{if(n===br+1)return 0===e?1===t?Ar:Fr:NaN;e+=1}return t*e*oe(2,n)}var fe="function"==typeof DataView;var ce="function"==typeof ArrayBuffer;var se="function"==typeof ArrayBuffer?ArrayBuffer:null;var le,pe="function"==typeof ArrayBuffer?ArrayBuffer:void 0;le=function(){var r,t,e,n;if("function"!=typeof se)return!1;try{e=new se(16),n=e,(r=(ce&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===M(n))&&"function"==typeof se.isView)&&((t=new tr(e))[0]=-3.14,t[1]=NaN,r=r&&se.isView(t)&&16===e.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r}()?pe:function(){throw new Error("not implemented")};var ge=le,ve="function"==typeof DataView?DataView:null;var ye,we="function"==typeof DataView?DataView:void 0;ye=function(){var r,t,e,n;if("function"!=typeof ve)return!1;try{e=new ge(24),t=new ve(e,8),n=t,(r=(fe&&n instanceof DataView||"[object DataView]"===M(n))&&"function"==typeof t.getFloat64&&"function"==typeof t.setFloat64)&&(t.setFloat64(0,-3.14),t.setFloat64(8,NaN),r=r&&t.buffer===e&&16===t.byteLength&&8===t.byteOffset&&-3.14===t.getFloat64(0)&&t.getFloat64(8)!=t.getFloat64(8))}catch(t){r=!1}return r}()?we:function(){throw new Error("not implemented")};var he=ye,de=4294967296,be=new or(8);function me(r,t,e){var n,i,a,o,u;if(1===t)o=r;else{for(o=be,u=0;u<8;u++)o[u]=r[e],e+=t;e=0}return n=new he(o.buffer,o.byteOffset,o.byteLength),gr?(a=n.getInt32(e,gr),i=n.getInt32(e+4,gr)):(i=n.getInt32(e,gr),a=n.getInt32(e+4,gr)),a<0&&(a+=de),i*de+a}var Ae=!0===gr?0:1,Ee=new tr(1),Fe=new Y(Ee.buffer);function Ve(r){return Ee[0]=r,Fe[Ae]}function Se(r){return!!(hr(r)>>>31)}function Ue(r){return"number"==typeof r}var Ie=Er.prototype.toString;var Te=R();function _e(r){return"object"==typeof r&&(r instanceof Er||(Te?function(r){try{return Ie.call(r),!0}catch(r){return!1}}(r):"[object Number]"===M(r)))}function je(r){return Ue(r)||_e(r)}function Oe(r){return r<Ar&&r>Fr&&Ur(r)}function xe(r){return Ue(r)&&Oe(r)}function Ne(r){return _e(r)&&Oe(r.valueOf())}function ke(r){return xe(r)||Ne(r)}function We(r){return xe(r)&&r>=0}function Be(r){return Ne(r)&&r.valueOf()>=0}function Le(r){return We(r)||Be(r)}function Pe(r){return"string"==typeof r}kr(je,"isPrimitive",Ue),kr(je,"isObject",_e),kr(ke,"isPrimitive",xe),kr(ke,"isObject",Ne),kr(Le,"isPrimitive",We),kr(Le,"isObject",Be);var He=String.prototype.valueOf;var Re=R();function $e(r){return"object"==typeof r&&(r instanceof String||(Re?function(r){try{return He.call(r),!0}catch(r){return!1}}(r):"[object String]"===M(r)))}function Ge(r){return Pe(r)||$e(r)}kr(Ge,"isPrimitive",Pe),kr(Ge,"isObject",$e);var Ce=9007199254740991,De=void 0!==String.prototype.repeat;var Me=String.prototype.repeat;var Ze=De?function(r,t){return Me.call(r,t)}:function(r,t){var e,n;if(0===r.length||0===t)return"";for(e="",n=t;1==(1&n)&&(e+=r),0!=(n>>>=1);)r+=r;return e},qe=Math.ceil;function ze(r,t,e){var n;if(!Pe(r))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));if(!We(t))throw new TypeError(_("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!Pe(n=e))throw new TypeError(_("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else n=" ";if(t>Ce)throw new RangeError(_("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return function(r,t,e){var n=(t-r.length)/e.length;return n<=0?r:(n=qe(n),r+Ze(e,n))}(r,t,n)}function Xe(r,t,e){var n;if(!Pe(r))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));if(!We(t))throw new TypeError(_("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!Pe(n=e))throw new TypeError(_("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(t>Ce)throw new RangeError(_("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return function(r,t,e){var n=(t-r.length)/e.length;return n<=0?r:(n=qe(n),Ze(e,n)+r)}(r,t,n)}function Ye(r,t){if(!Pe(r))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));if(!We(t))throw new TypeError(_("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));return Ze(r,t)}function Je(r){for(var t,e="";r>0;)e=(t=r/2)===(r=Sr(t))?"0"+e:"1"+e;return e}var Ke=1075,Qe=54;function rn(r){var t,e,n,i,a,o,u;if(e=r<0||function(r){return 0===r&&1/r===Fr}(r)?"1":"0",r===Ar||r===Fr)return e+(i=Ye("1",11))+(n=Ye("0",52));if(Vr(r))return e+(i=Ye("1",11))+(n="1"+Ye("0",51));if(0===r)return e+(i=Ye("0",11))+(n=Ye("0",52));if(o=(r=Nr(r))-(a=Sr(r)),a=Je(a),o=function(r){var t,e,n,i;if(t="",0===r)return t;for(i=Ke,n=0;n<Ke&&((e=2*r)>=1?(r=e-1,t+="1",i===Ke&&(i=n)):(r=e,t+="0"),!(1===e||n-i>Qe));n++);return t}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){t=u+1;break}i=-t}return n=a+o,i<0?(i<=-br&&(t=br-1),n=n.substring(t)):n=n.substring(1),e+(i=Xe(i=Je(i+br),11,"0"))+(n=ze(n,52,"0").substring(0,52))}var tn="function"==typeof Math.fround?Math.fround:null,en="function"==typeof Float32Array;var nn="function"==typeof Float32Array?Float32Array:null;var an,on="function"==typeof Float32Array?Float32Array:void 0;an=function(){var r,t,e;if("function"!=typeof nn)return!1;try{t=new nn([1,3.14,-3.14,5e40]),e=t,r=(en&&e instanceof Float32Array||"[object Float32Array]"===M(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===Ar}catch(t){r=!1}return r}()?on:function(){throw new Error("not implemented")};var un=new an(1);var fn="function"==typeof tn?tn:function(r){return un[0]=r,un[0]};function cn(r){return 0|r}function sn(r){var t,e,n,i;return t=new or(8),0===r||(i=(4294967295&r)>>>0,n=Sr(r/4294967296),e=new he(t.buffer),gr?(e.setUint32(0,i,gr),e.setUint32(4,n,gr)):(e.setUint32(0,n,gr),e.setUint32(4,i,gr))),t}var ln=new or(8),pn=new he(ln.buffer);function gn(r){return r>>>0}kr(sn,"assign",(function(r,t,e,n){var i,a,o;if(0===r){for(o=0;o<ln.length;o++)t[n]=0,n+=e;return t}for(a=(4294967295&r)>>>0,i=Sr(r/4294967296),gr?(pn.setUint32(0,a,gr),pn.setUint32(4,i,gr)):(pn.setUint32(0,i,gr),pn.setUint32(4,a,gr)),o=0;o<ln.length;o++)t[n]=ln[o],n+=e;return t}));var vn={};L(vn,"assert",P),L(vn,"exponent",mr),L(vn,"fromBinaryString",ue),L(vn,"fromInt64Bytes",me),L(vn,"fromWords",et),L(vn,"getHighWord",hr),L(vn,"getLowWord",Ve),L(vn,"normalize",kt),L(vn,"setHighWord",lt),L(vn,"setLowWord",Mr),L(vn,"signbit",Se),L(vn,"toBinaryString",rn),L(vn,"float64ToFloat32",fn),L(vn,"float64ToInt32",cn),L(vn,"float64ToInt64Bytes",sn),L(vn,"float64ToUint32",gn),L(vn,"toWords",$r);export{P as assert,vn as default,mr as exponent,fn as float64ToFloat32,cn as float64ToInt32,sn as float64ToInt64Bytes,gn as float64ToUint32,ue as fromBinaryString,me as fromInt64Bytes,et as fromWords,hr as getHighWord,Ve as getLowWord,kt as normalize,lt as setHighWord,Mr as setLowWord,Se as signbit,rn as toBinaryString,$r as toWords};
//# sourceMappingURL=mod.js.map
