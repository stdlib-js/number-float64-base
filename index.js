// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,d=/\.0*e/,v=/(\..*[^0])0*e/;function b(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,v,"$1e"),n=l.call(n,d,"e"),n=l.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,g,"e-0$1"),r.alternate&&(n=l.call(n,y,"$1."),n=l.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var A=String.fromCharCode,E=isNaN,F=Array.isArray;function V(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,a,o,f,c,s,l,p,g,y,h;if(!F(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),e=n.flags,l=0;l<e.length;l++)switch(a=e.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,E(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,y=n.padRight,h=void 0,(h=g-p.length)<0?p:p=y?p+m(h):m(h)+p)),f+=n.arg||"",c+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function I(r){var t,e,n,i;for(e=[],i=0,n=U.exec(r);n;)(t=r.slice(i,U.lastIndex-n[0].length)).length&&e.push(t),e.push(T(n)),i=U.lastIndex,n=U.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function _(r){var t,e;if("string"!=typeof r)throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[I(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return S.apply(null,t)}var j=Object.prototype,x=j.toString,O=j.__defineGetter__,N=j.__defineSetter__,k=j.__lookupGetter__,W=j.__lookupSetter__,L=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===x.call(r))throw new TypeError(_("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===x.call(e))throw new TypeError(_("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(k.call(r,t)||W.call(r,t)?(n=r.__proto__,r.__proto__=j,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,t,e.get),o&&N&&N.call(r,t,e.set),r};function P(r,t,e){L(r,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}var B={};P(B,"isSameValue",(function(r,t){return r===t?0!==r||1/r==1/t:r!=r&&t!=t})),P(B,"isSameValueZero",(function(r,t){return r===t||r!=r&&t!=t}));var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function R(){return H&&"symbol"==typeof Symbol.toStringTag}var $,G=Object.prototype.toString,M=Object.prototype.hasOwnProperty,C="function"==typeof Symbol?Symbol:void 0,D="function"==typeof C?C.toStringTag:"",Z=R()?function(r){var t,e,n,i,a;if(null==r)return G.call(r);e=r[D],a=D,t=null!=(i=r)&&M.call(i,a);try{r[D]=void 0}catch(t){return G.call(r)}return n=G.call(r),t?r[D]=e:delete r[D],n}:function(r){return G.call(r)},q="function"==typeof Uint32Array,z="function"==typeof Uint32Array?Uint32Array:null,X="function"==typeof Uint32Array?Uint32Array:void 0;$=function(){var r,t,e;if("function"!=typeof z)return!1;try{t=new z(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(q&&e instanceof Uint32Array||"[object Uint32Array]"===Z(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?X:function(){throw new Error("not implemented")};var Y,J=$,K="function"==typeof Float64Array,Q="function"==typeof Float64Array?Float64Array:null,rr="function"==typeof Float64Array?Float64Array:void 0;Y=function(){var r,t,e;if("function"!=typeof Q)return!1;try{t=new Q([1,3.14,-3.14,NaN]),e=t,r=(K&&e instanceof Float64Array||"[object Float64Array]"===Z(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var tr,er=Y,nr="function"==typeof Uint8Array,ir="function"==typeof Uint8Array?Uint8Array:null,ar="function"==typeof Uint8Array?Uint8Array:void 0;tr=function(){var r,t,e;if("function"!=typeof ir)return!1;try{t=new ir(t=[1,3.14,-3.14,256,257]),e=t,r=(nr&&e instanceof Uint8Array||"[object Uint8Array]"===Z(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or,ur=tr,fr="function"==typeof Uint16Array,cr="function"==typeof Uint16Array?Uint16Array:null,sr="function"==typeof Uint16Array?Uint16Array:void 0;or=function(){var r,t,e;if("function"!=typeof cr)return!1;try{t=new cr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(fr&&e instanceof Uint16Array||"[object Uint16Array]"===Z(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr={uint16:or,uint8:ur};(lr=new pr.uint16(1))[0]=4660;var gr=52===new pr.uint8(lr.buffer)[0],yr=!0===gr?1:0,hr=new er(1),wr=new J(hr.buffer);function dr(r){return hr[0]=r,wr[yr]}var vr=2146435072,br=1023;function mr(r){var t=dr(r);return(t=(t&vr)>>>20)-br|0}var Ar=Number.POSITIVE_INFINITY,Er=Number,Fr=Er.NEGATIVE_INFINITY;function Vr(r){return r!=r}var Sr=Math.floor;function Ur(r){return Sr(r)===r}function Tr(r){return Ur(r/2)}function Ir(r){return Tr(r>0?r-1:r+1)}function _r(r){return r===Ar||r===Fr}var jr,xr,Or=Math.sqrt;function Nr(r){return Math.abs(r)}function kr(r,t,e){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}!0===gr?(jr=1,xr=0):(jr=0,xr=1);var Wr={HIGH:jr,LOW:xr},Lr=new er(1),Pr=new J(Lr.buffer),Br=Wr.HIGH,Hr=Wr.LOW;function Rr(r,t,e,n){return Lr[0]=r,t[n]=Pr[Br],t[n+e]=Pr[Hr],t}function $r(r){return Rr(r,[0,0],1,0)}kr($r,"assign",Rr);var Gr=!0===gr?0:1,Mr=new er(1),Cr=new J(Mr.buffer);function Dr(r,t){return Mr[0]=r,Cr[Gr]=t>>>0,Mr[0]}function Zr(r){return 0|r}var qr,zr,Xr=2147483647,Yr=2147483648;!0===gr?(qr=1,zr=0):(qr=0,zr=1);var Jr={HIGH:qr,LOW:zr},Kr=new er(1),Qr=new J(Kr.buffer),rt=Jr.HIGH,tt=Jr.LOW;function et(r,t){return Qr[rt]=r,Qr[tt]=t,Kr[0]}var nt=[0,0];function it(r,t){var e,n;return $r.assign(r,nt,1,0),e=nt[0],e&=Xr,n=dr(t),et(e|=n&=Yr,nt[1])}var at=1072693247,ot=1e300,ut=1e-300,ft=!0===gr?1:0,ct=new er(1),st=new J(ct.buffer);function lt(r,t){return ct[0]=r,st[ft]=t>>>0,ct[0]}var pt=1048575,gt=1048576,yt=1072693248,ht=536870912,wt=524288,dt=20,vt=9007199254740992,bt=.9617966939259756,mt=.9617967009544373,At=-7.028461650952758e-9,Et=[1,1.5],Ft=[0,.5849624872207642],Vt=[0,1.350039202129749e-8],St=1.4426950408889634,Ut=1.4426950216293335,Tt=1.9259629911266175e-8,It=1023,_t=-1023,jt=-1074,xt=22250738585072014e-324,Ot=4503599627370496;function Nt(r,t,e,n){return Vr(r)||_r(r)?(t[n]=r,t[n+e]=0,t):0!==r&&Nr(r)<xt?(t[n]=r*Ot,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}function kt(r){return Nt(r,[0,0],1,0)}kr(kt,"assign",Nt);var Wt=2220446049250313e-31,Lt=2148532223,Pt=[0,0],Bt=[0,0],Ht=.6931471805599453,Rt=1048575,$t=1048576,Gt=1071644672,Mt=20,Ct=.6931471824645996,Dt=-1.904654299957768e-9;function Zt(r,t,e){var n,i,a,o,u,f,c,s,l,p,g,y,h,w;return l=((s=r&Xr|0)>>Mt)-br|0,c=0,s>Gt&&(i=lt(0,((c=r+($t>>l+1)>>>0)&~(Rt>>(l=((c&Xr)>>Mt)-br|0)))>>>0),c=(c&Rt|$t)>>Mt-l>>>0,r<0&&(c=-c),t-=i),r=Zr(r=dr(f=1-((f=(a=(i=Dr(i=e+t,0))*Ct)+(o=(e-(i-t))*Ht+i*Dt))*(n=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Mt>>>0)>>Mt<=0?(g=f,f=0===(y=c)||0===g||Vr(g)||_r(g)?g:(Nt(g,Pt,1,0),g=Pt[0],y+=Pt[1],(y+=mr(g))<jt?it(0,g):y>It?g<0?Fr:Ar:(y<=_t?(y+=52,w=Wt):w=1,$r.assign(g,Bt,1,0),h=Bt[0],h&=Lt,w*et(h|=y+br<<20,Bt[1])))):f=lt(f,r),f}var qt=1072693247,zt=1105199104,Xt=1139802112,Yt=1083179008,Jt=1072693248,Kt=1083231232,Qt=3230714880,re=31,te=1e300,ee=1e-300,ne=8008566259537294e-32,ie=[0,0],ae=[0,0];function oe(r,t){var e,n,i,a,o,u,f,c,s,l,p,g,y,h;if(Vr(r)||Vr(t))return NaN;if($r.assign(t,ie,1,0),o=ie[0],0===ie[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Or(r);if(-.5===t)return 1/Or(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(_r(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Nr(r)<1==(t===Ar)?0:Ar}(r,t)}if($r.assign(r,ie,1,0),a=ie[0],0===ie[1]){if(0===a)return function(r,t){return t===Fr?Ar:t===Ar?0:t>0?Ir(t)?r:0:Ir(t)?it(Ar,r):Ar}(r,t);if(1===r)return 1;if(-1===r&&Ir(t))return-1;if(_r(r))return r===Fr?oe(-0,-t):t<0?0:Ar}if(r<0&&!1===Ur(t))return(r-r)/(r-r);if(i=Nr(r),e=a&Xr|0,n=o&Xr|0,f=o>>>re|0,u=(u=a>>>re|0)&&Ir(t)?-1:1,n>zt){if(n>Xt)return function(r,t){return(dr(r)&Xr)<=at?t<0?ot*ot:ut*ut:t>0?ot*ot:ut*ut}(r,t);if(e<qt)return 1===f?u*te*te:u*ee*ee;if(e>Jt)return 0===f?u*te*te:u*ee*ee;p=function(r,t){var e,n,i,a,o,u,f;return a=(i=t-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),e=(u=i*Tt-a*St)-((n=Dr(n=(o=Ut*i)+u,0))-o),r[0]=n,r[1]=e,r}(ae,i)}else p=function(r,t,e){var n,i,a,o,u,f,c,s,l,p,g,y,h,w,d,v,b,m,A,E,F;return m=0,e<gt&&(m-=53,e=dr(t*=vt)),m+=(e>>dt)-br|0,e=(A=e&pt|0)|yt|0,A<=235662?E=0:A<767610?E=1:(E=0,m+=1,e-=gt),o=Dr(i=(v=(t=lt(t,e))-(c=Et[E]))*(b=1/(t+c)),0),n=(e>>1|ht)+wt,f=lt(0,n+=E<<18),d=(a=i*i)*a*(0===(F=a)?.5999999999999946:.5999999999999946+F*(.4285714285785502+F*(.33333332981837743+F*(.272728123808534+F*(.23066074577556175+.20697501780033842*F))))),f=Dr(f=3+(a=o*o)+(d+=(u=b*(v-o*f-o*(t-(f-c))))*(o+i)),0),l=Dr(l=(v=o*f)+(b=u*f+(d-(f-3-a))*i),0),p=mt*l,h=(g=At*l+(b-(l-v))*bt+Vt[E])-((y=Dr(y=p+g+(s=Ft[E])+(w=m),0))-w-s-p),r[0]=y,r[1]=h,r}(ae,i,e);if(g=(l=(t-(c=Dr(t,0)))*p[0]+t*p[1])+(s=c*p[0]),$r.assign(g,ie,1,0),y=Zr(ie[0]),h=Zr(ie[1]),y>=Yt){if(0!=(y-Yt|h))return u*te*te;if(l+ne>g-s)return u*te*te}else if((y&Xr)>=Kt){if(0!=(y-Qt|h))return u*ee*ee;if(l<=g-s)return u*ee*ee}return u*(g=Zt(y,s,l))}var ue,fe="function"==typeof DataView,ce="function"==typeof ArrayBuffer,se="function"==typeof ArrayBuffer?ArrayBuffer:null,le="function"==typeof ArrayBuffer?ArrayBuffer:void 0;ue=function(){var r,t,e,n;if("function"!=typeof se)return!1;try{e=new se(16),n=e,(r=(ce&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===Z(n))&&"function"==typeof se.isView)&&((t=new er(e))[0]=-3.14,t[1]=NaN,r=r&&se.isView(t)&&16===e.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r}()?le:function(){throw new Error("not implemented")};var pe,ge=ue,ye="function"==typeof DataView?DataView:null,he="function"==typeof DataView?DataView:void 0;pe=function(){var r,t,e,n;if("function"!=typeof ye)return!1;try{e=new ge(24),t=new ye(e,8),n=t,(r=(fe&&n instanceof DataView||"[object DataView]"===Z(n))&&"function"==typeof t.getFloat64&&"function"==typeof t.setFloat64)&&(t.setFloat64(0,-3.14),t.setFloat64(8,NaN),r=r&&t.buffer===e&&16===t.byteLength&&8===t.byteOffset&&-3.14===t.getFloat64(0)&&t.getFloat64(8)!=t.getFloat64(8))}catch(t){r=!1}return r}()?he:function(){throw new Error("not implemented")};var we=pe,de=4294967296,ve=new ur(8),be=!0===gr?0:1,me=new er(1),Ae=new J(me.buffer);function Ee(r){return"number"==typeof r}var Fe=Er.prototype.toString,Ve=R();function Se(r){return"object"==typeof r&&(r instanceof Er||(Ve?function(r){try{return Fe.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Z(r)))}function Ue(r){return Ee(r)||Se(r)}function Te(r){return r<Ar&&r>Fr&&Ur(r)}function Ie(r){return Ee(r)&&Te(r)}function _e(r){return Se(r)&&Te(r.valueOf())}function je(r){return Ie(r)||_e(r)}function xe(r){return Ie(r)&&r>=0}function Oe(r){return _e(r)&&r.valueOf()>=0}function Ne(r){return xe(r)||Oe(r)}function ke(r){return"string"==typeof r}kr(Ue,"isPrimitive",Ee),kr(Ue,"isObject",Se),kr(je,"isPrimitive",Ie),kr(je,"isObject",_e),kr(Ne,"isPrimitive",xe),kr(Ne,"isObject",Oe);var We=String.prototype.valueOf,Le=R();function Pe(r){return"object"==typeof r&&(r instanceof String||(Le?function(r){try{return We.call(r),!0}catch(r){return!1}}(r):"[object String]"===Z(r)))}function Be(r){return ke(r)||Pe(r)}kr(Be,"isPrimitive",ke),kr(Be,"isObject",Pe);var He=9007199254740991,Re=void 0!==String.prototype.repeat,$e=String.prototype.repeat,Ge=Re?function(r,t){return $e.call(r,t)}:function(r,t){var e,n;if(0===r.length||0===t)return"";for(e="",n=t;1==(1&n)&&(e+=r),0!=(n>>>=1);)r+=r;return e},Me=Math.ceil;function Ce(r,t,e){var n;if(!ke(r))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));if(!xe(t))throw new TypeError(_("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!ke(n=e))throw new TypeError(_("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else n=" ";if(t>He)throw new RangeError(_("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return function(r,t,e){var n=(t-r.length)/e.length;return n<=0?r:(n=Me(n),r+Ge(e,n))}(r,t,n)}var De=Math.ceil;function Ze(r,t,e){var n;if(!ke(r))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));if(!xe(t))throw new TypeError(_("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!ke(n=e))throw new TypeError(_("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(t>He)throw new RangeError(_("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return function(r,t,e){var n=(t-r.length)/e.length;return n<=0?r:(n=De(n),Ge(e,n)+r)}(r,t,n)}function qe(r,t){if(!ke(r))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));if(!xe(t))throw new TypeError(_("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));return Ge(r,t)}function ze(r){for(var t,e="";r>0;)e=(t=r/2)===(r=Sr(t))?"0"+e:"1"+e;return e}var Xe,Ye=1075,Je=54,Ke="function"==typeof Math.fround?Math.fround:null,Qe="function"==typeof Float32Array,rn="function"==typeof Float32Array?Float32Array:null,tn="function"==typeof Float32Array?Float32Array:void 0;Xe=function(){var r,t,e;if("function"!=typeof rn)return!1;try{t=new rn([1,3.14,-3.14,5e40]),e=t,r=(Qe&&e instanceof Float32Array||"[object Float32Array]"===Z(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===Ar}catch(t){r=!1}return r}()?tn:function(){throw new Error("not implemented")};var en=new Xe(1),nn="function"==typeof Ke?Ke:function(r){return en[0]=r,en[0]};function an(r){var t,e,n,i;return t=new ur(8),0===r||(i=(4294967295&r)>>>0,n=Sr(r/4294967296),e=new we(t.buffer),gr?(e.setUint32(0,i,gr),e.setUint32(4,n,gr)):(e.setUint32(0,n,gr),e.setUint32(4,i,gr))),t}var on=new ur(8),un=new we(on.buffer);kr(an,"assign",(function(r,t,e,n){var i,a,o;if(0===r){for(o=0;o<on.length;o++)t[n]=0,n+=e;return t}for(a=(4294967295&r)>>>0,i=Sr(r/4294967296),gr?(un.setUint32(0,a,gr),un.setUint32(4,i,gr)):(un.setUint32(0,i,gr),un.setUint32(4,a,gr)),o=0;o<on.length;o++)t[n]=on[o],n+=e;return t}));var fn={};return P(fn,"assert",B),P(fn,"exponent",mr),P(fn,"fromBinaryString",(function(r){var t,e,n;if(64!==r.length)throw new Error(_("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,r));if(t="1"===r[0]?-1:1,n=parseInt(r.substring(1,12),2)-br,e=function(r){var t,e=0;for(t=0;t<r.length;t++)"1"===r[t]&&(e+=oe(2,-(t+1)));return e}(r.substring(12)),n===-br){if(0===e)return 1===t?0:-0;n=-1022}else{if(n===br+1)return 0===e?1===t?Ar:Fr:NaN;e+=1}return t*e*oe(2,n)})),P(fn,"fromInt64Bytes",(function(r,t,e){var n,i,a,o,u;if(1===t)o=r;else{for(o=ve,u=0;u<8;u++)o[u]=r[e],e+=t;e=0}return n=new we(o.buffer,o.byteOffset,o.byteLength),gr?(a=n.getInt32(e,gr),i=n.getInt32(e+4,gr)):(i=n.getInt32(e,gr),a=n.getInt32(e+4,gr)),a<0&&(a+=de),i*de+a})),P(fn,"fromWords",et),P(fn,"getHighWord",dr),P(fn,"getLowWord",(function(r){return me[0]=r,Ae[be]})),P(fn,"normalize",kt),P(fn,"setHighWord",lt),P(fn,"setLowWord",Dr),P(fn,"signbit",(function(r){return!!(dr(r)>>>31)})),P(fn,"toBinaryString",(function(r){var t,e,n,i,a,o,u;if(e=r<0||function(r){return 0===r&&1/r===Fr}(r)?"1":"0",r===Ar||r===Fr)return e+(i=qe("1",11))+(n=qe("0",52));if(Vr(r))return e+(i=qe("1",11))+(n="1"+qe("0",51));if(0===r)return e+(i=qe("0",11))+(n=qe("0",52));if(o=(r=Nr(r))-(a=Sr(r)),a=ze(a),o=function(r){var t,e,n,i;if(t="",0===r)return t;for(i=Ye,n=0;n<Ye&&((e=2*r)>=1?(r=e-1,t+="1",i===Ye&&(i=n)):(r=e,t+="0"),!(1===e||n-i>Je));n++);return t}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){t=u+1;break}i=-t}return n=a+o,i<0?(i<=-br&&(t=br-1),n=n.substring(t)):n=n.substring(1),e+(i=Ze(i=ze(i+br),11,"0"))+(n=Ce(n,52,"0").substring(0,52))})),P(fn,"float64ToFloat32",nn),P(fn,"float64ToInt32",(function(r){return 0|r})),P(fn,"float64ToInt64Bytes",an),P(fn,"float64ToUint32",(function(r){return r>>>0})),P(fn,"toWords",$r),fn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=t();
//# sourceMappingURL=index.js.map
