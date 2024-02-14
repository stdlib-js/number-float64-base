// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(a):e(a)+r,o&&(r="-"+r)),r}var a=String.prototype.toLowerCase,i=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===i.call(r.specifier)?i.call(e):a.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,y=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,s=/e-(\d)$/,g=/^(\d+)$/,b=/^(\d+)e/,m=/\.0$/,w=/\.0*e/,d=/(\..*[^0])0*e/;function h(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,d,"$1e"),e=p.call(e,w,"e"),e=p.call(e,m,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,v,"e+0$1"),e=p.call(e,s,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,b,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===y.call(r.specifier)?y.call(e):l.call(e)}function A(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function S(r,t,n){var e=t-r.length;return e<0?r:r=n?r+A(e):A(e)+r}var F=String.fromCharCode,U=isNaN,T=Array.isArray;function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function I(r){var t,n,e,a,i,c,l,y,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,y=0;y<r.length;y++)if(f(e=r[y]))c+=e;else{if(t=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+y+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,U(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,U(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!U(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=U(i)?String(e.arg):F(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=h(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=S(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function V(r){var t,n,e,o;for(n=[],o=0,e=N.exec(r);e;)(t=r.slice(o,N.lastIndex-e[0].length)).length&&n.push(t),n.push(j(e)),o=N.lastIndex,e=N.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function O(r){return"string"==typeof r}function _(r){var t,n;if(!O(r))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[V(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return I.apply(null,t)}var x=Object.prototype,k=x.toString,B=x.__defineGetter__,P=x.__defineSetter__,D=x.__lookupGetter__,L=x.__lookupSetter__;var W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,a,i;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(_("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===k.call(n))throw new TypeError(_("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(D.call(r,t)||L.call(r,t)?(e=r.__proto__,r.__proto__=x,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,i="set"in n,o&&(a||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&B&&B.call(r,t,n.get),i&&P&&P.call(r,t,n.set),r};function G(r,t,n){W(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}var M={};function H(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}G(M,"isSameValue",(function(r,t){return r===t?0!==r||1/r==1/t:r!=r&&t!=t})),G(M,"isSameValueZero",(function(r,t){return r===t||r!=r&&t!=t}));var R=H();var $=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function C(r,t){return null!=r&&Y.call(r,t)}var Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"";var z=R&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return $.call(r);n=r[q],t=C(r,q);try{r[q]=void 0}catch(t){return $.call(r)}return e=$.call(r),t?r[q]=n:delete r[q],e}:function(r){return $.call(r)},X="function"==typeof Uint32Array;var J="function"==typeof Uint32Array?Uint32Array:null;var K,Q="function"==typeof Uint32Array?Uint32Array:void 0;K=function(){var r,t,n;if("function"!=typeof J)return!1;try{t=new J(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(X&&n instanceof Uint32Array||"[object Uint32Array]"===z(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr=K,tr="function"==typeof Float64Array;var nr="function"==typeof Float64Array?Float64Array:null;var er,or="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,t,n;if("function"!=typeof nr)return!1;try{t=new nr([1,3.14,-3.14,NaN]),n=t,r=(tr&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ar=er,ir=H();var ur=Object.prototype.toString;var fr="function"==typeof Symbol?Symbol:void 0,cr="function"==typeof fr?fr.toStringTag:"";var lr=ir&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return ur.call(r);n=r[cr],t=C(r,cr);try{r[cr]=void 0}catch(t){return ur.call(r)}return e=ur.call(r),t?r[cr]=n:delete r[cr],e}:function(r){return ur.call(r)},yr="function"==typeof Uint8Array;var pr="function"==typeof Uint8Array?Uint8Array:null;var vr,sr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,t,n;if("function"!=typeof pr)return!1;try{t=new pr(t=[1,3.14,-3.14,256,257]),n=t,r=(yr&&n instanceof Uint8Array||"[object Uint8Array]"===lr(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var gr=vr,br=H();var mr=Object.prototype.toString;var wr="function"==typeof Symbol?Symbol:void 0,dr="function"==typeof wr?wr.toStringTag:"";var hr=br&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return mr.call(r);n=r[dr],t=C(r,dr);try{r[dr]=void 0}catch(t){return mr.call(r)}return e=mr.call(r),t?r[dr]=n:delete r[dr],e}:function(r){return mr.call(r)},Ar="function"==typeof Uint16Array;var Sr="function"==typeof Uint16Array?Uint16Array:null;var Fr,Ur="function"==typeof Uint16Array?Uint16Array:void 0;Fr=function(){var r,t,n;if("function"!=typeof Sr)return!1;try{t=new Sr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Ar&&n instanceof Uint16Array||"[object Uint16Array]"===hr(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var Tr,Er={uint16:Fr,uint8:gr};(Tr=new Er.uint16(1))[0]=4660;var Ir=52===new Er.uint8(Tr.buffer)[0],Nr=!0===Ir?1:0,jr=new ar(1),Vr=new rr(jr.buffer);function Or(r){return jr[0]=r,Vr[Nr]}function _r(r){var t=Or(r);return(t=(2146435072&t)>>>20)-1023|0}var xr=Number.POSITIVE_INFINITY,kr=Number.NEGATIVE_INFINITY;function Br(r){return r!=r}var Pr=Math.floor;function Dr(r){return Pr(r)===r}function Lr(r){return Dr(r/2)}function Wr(r){return Lr(r>0?r-1:r+1)}var Gr=Number.POSITIVE_INFINITY,Mr=Number.NEGATIVE_INFINITY;function Hr(r){return r===Gr||r===Mr}var Rr=Math.sqrt;function $r(r){return Math.abs(r)}function Yr(r,t,n){W(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var Cr=H();var Zr=Object.prototype.toString;var qr="function"==typeof Symbol?Symbol:void 0,zr="function"==typeof qr?qr.toStringTag:"";var Xr=Cr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Zr.call(r);n=r[zr],t=C(r,zr);try{r[zr]=void 0}catch(t){return Zr.call(r)}return e=Zr.call(r),t?r[zr]=n:delete r[zr],e}:function(r){return Zr.call(r)},Jr="function"==typeof Uint32Array;var Kr="function"==typeof Uint32Array?Uint32Array:null;var Qr,rt="function"==typeof Uint32Array?Uint32Array:void 0;Qr=function(){var r,t,n;if("function"!=typeof Kr)return!1;try{t=new Kr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Jr&&n instanceof Uint32Array||"[object Uint32Array]"===Xr(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?rt:function(){throw new Error("not implemented")};var tt=Qr,nt="function"==typeof Float64Array;var et="function"==typeof Float64Array?Float64Array:null;var ot,at,it,ut="function"==typeof Float64Array?Float64Array:void 0;ot=function(){var r,t,n;if("function"!=typeof et)return!1;try{t=new et([1,3.14,-3.14,NaN]),n=t,r=(nt&&n instanceof Float64Array||"[object Float64Array]"===Xr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ut:function(){throw new Error("not implemented")},!0===Ir?(at=1,it=0):(at=0,it=1);var ft={HIGH:at,LOW:it},ct=new ot(1),lt=new tt(ct.buffer),yt=ft.HIGH,pt=ft.LOW;function vt(r,t,n,e){return ct[0]=r,t[e]=lt[yt],t[e+n]=lt[pt],t}function st(r){return vt(r,[0,0],1,0)}Yr(st,"assign",vt);var gt=H();var bt=Object.prototype.toString;var mt="function"==typeof Symbol?Symbol:void 0,wt="function"==typeof mt?mt.toStringTag:"";var dt=gt&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return bt.call(r);n=r[wt],t=C(r,wt);try{r[wt]=void 0}catch(t){return bt.call(r)}return e=bt.call(r),t?r[wt]=n:delete r[wt],e}:function(r){return bt.call(r)},ht="function"==typeof Uint32Array;var At="function"==typeof Uint32Array?Uint32Array:null;var St,Ft="function"==typeof Uint32Array?Uint32Array:void 0;St=function(){var r,t,n;if("function"!=typeof At)return!1;try{t=new At(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ht&&n instanceof Uint32Array||"[object Uint32Array]"===dt(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ft:function(){throw new Error("not implemented")};var Ut=St,Tt="function"==typeof Float64Array;var Et="function"==typeof Float64Array?Float64Array:null;var It,Nt="function"==typeof Float64Array?Float64Array:void 0;It=function(){var r,t,n;if("function"!=typeof Et)return!1;try{t=new Et([1,3.14,-3.14,NaN]),n=t,r=(Tt&&n instanceof Float64Array||"[object Float64Array]"===dt(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Nt:function(){throw new Error("not implemented")};var jt=!0===Ir?0:1,Vt=new It(1),Ot=new Ut(Vt.buffer);function _t(r,t){return Vt[0]=r,Ot[jt]=t>>>0,Vt[0]}function xt(r){return 0|r}var kt=H();var Bt=Object.prototype.toString;var Pt="function"==typeof Symbol?Symbol:void 0,Dt="function"==typeof Pt?Pt.toStringTag:"";var Lt=kt&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Bt.call(r);n=r[Dt],t=C(r,Dt);try{r[Dt]=void 0}catch(t){return Bt.call(r)}return e=Bt.call(r),t?r[Dt]=n:delete r[Dt],e}:function(r){return Bt.call(r)},Wt="function"==typeof Uint32Array;var Gt="function"==typeof Uint32Array?Uint32Array:null;var Mt,Ht="function"==typeof Uint32Array?Uint32Array:void 0;Mt=function(){var r,t,n;if("function"!=typeof Gt)return!1;try{t=new Gt(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Wt&&n instanceof Uint32Array||"[object Uint32Array]"===Lt(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ht:function(){throw new Error("not implemented")};var Rt=Mt,$t="function"==typeof Float64Array;var Yt="function"==typeof Float64Array?Float64Array:null;var Ct,Zt,qt,zt="function"==typeof Float64Array?Float64Array:void 0;Ct=function(){var r,t,n;if("function"!=typeof Yt)return!1;try{t=new Yt([1,3.14,-3.14,NaN]),n=t,r=($t&&n instanceof Float64Array||"[object Float64Array]"===Lt(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?zt:function(){throw new Error("not implemented")},!0===Ir?(Zt=1,qt=0):(Zt=0,qt=1);var Xt={HIGH:Zt,LOW:qt},Jt=new Ct(1),Kt=new Rt(Jt.buffer),Qt=Xt.HIGH,rn=Xt.LOW;function tn(r,t){return Kt[Qt]=r,Kt[rn]=t,Jt[0]}var nn=[0,0];function en(r,t){var n,e;return st.assign(r,nn,1,0),n=nn[0],n&=2147483647,e=Or(t),tn(n|=e&=2147483648,nn[1])}var on=H();var an=Object.prototype.toString;var un="function"==typeof Symbol?Symbol:void 0,fn="function"==typeof un?un.toStringTag:"";var cn=on&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return an.call(r);n=r[fn],t=C(r,fn);try{r[fn]=void 0}catch(t){return an.call(r)}return e=an.call(r),t?r[fn]=n:delete r[fn],e}:function(r){return an.call(r)},ln="function"==typeof Uint32Array;var yn="function"==typeof Uint32Array?Uint32Array:null;var pn,vn="function"==typeof Uint32Array?Uint32Array:void 0;pn=function(){var r,t,n;if("function"!=typeof yn)return!1;try{t=new yn(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ln&&n instanceof Uint32Array||"[object Uint32Array]"===cn(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vn:function(){throw new Error("not implemented")};var sn=pn,gn="function"==typeof Float64Array;var bn="function"==typeof Float64Array?Float64Array:null;var mn,wn="function"==typeof Float64Array?Float64Array:void 0;mn=function(){var r,t,n;if("function"!=typeof bn)return!1;try{t=new bn([1,3.14,-3.14,NaN]),n=t,r=(gn&&n instanceof Float64Array||"[object Float64Array]"===cn(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?wn:function(){throw new Error("not implemented")};var dn=!0===Ir?1:0,hn=new mn(1),An=new sn(hn.buffer);function Sn(r,t){return hn[0]=r,An[dn]=t>>>0,hn[0]}var Fn=[1,1.5],Un=[0,.5849624872207642],Tn=[0,1.350039202129749e-8];function En(r,t,n,e){return function(r){return r!=r}(r)||Hr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}function In(r){return En(r,[0,0],1,0)}Yr(In,"assign",En);var Nn=[0,0],jn=[0,0];function Vn(r,t,n){var e,o,a,i,u,f,c,l,y,p,v,s,g,b,m;return p=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-p>>>0,r<0&&(l=-l),t-=a=Sn(0,e)),r=xt(r=Or(c=1-((c=(i=.6931471824645996*(a=_t(a=n+t,0)))+(u=.6931471805599453*(n-(a-t))+-1.904654299957768e-9*a))*(o=c-(a=c*c)*(0===(v=a)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((f=u-(c-i))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?(s=c,c=0===(g=l)||0===s||Br(s)||Hr(s)?s:(En(s,Nn,1,0),g+=Nn[1],(g+=_r(s=Nn[0]))<-1074?en(0,s):g>1023?s<0?kr:xr:(g<=-1023?(g+=52,m=2220446049250313e-31):m=1,st.assign(s,jn,1,0),b=jn[0],b&=2148532223,m*tn(b|=g+1023<<20,jn[1])))):c=Sn(c,r),c}var On=1e300,_n=1e-300,xn=[0,0],kn=[0,0];function Bn(r,t){var n,e,o,a,i,u,f,c,l,y,p,v,s,g;if(Br(r)||Br(t))return NaN;if(st.assign(t,xn,1,0),i=xn[0],0===xn[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Rr(r);if(-.5===t)return 1/Rr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Hr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:$r(r)<1==(t===xr)?0:xr}(r,t)}if(st.assign(r,xn,1,0),a=xn[0],0===xn[1]){if(0===a)return function(r,t){return t===kr?xr:t===xr?0:t>0?Wr(t)?r:0:Wr(t)?en(xr,r):xr}(r,t);if(1===r)return 1;if(-1===r&&Wr(t))return-1;if(Hr(r))return r===kr?Bn(-0,-t):t<0?0:xr}if(r<0&&!1===Dr(t))return(r-r)/(r-r);if(o=$r(r),n=2147483647&a|0,e=2147483647&i|0,f=i>>>31|0,u=(u=a>>>31|0)&&Wr(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&Or(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?u*On*On:u*_n*_n;if(n>1072693248)return 0===f?u*On*On:u*_n*_n;p=function(r,t){var n,e,o,a,i,u;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(u=o)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=_t(e=(a=1.4426950216293335*o)+i,0))-a),r[0]=e,r[1]=n,r}(kn,o)}else p=function(r,t,n){var e,o,a,i,u,f,c,l,y,p,v,s,g,b,m,w,d,h,A,S,F;return h=0,n<1048576&&(h-=53,n=Or(t*=9007199254740992)),h+=(n>>20)-1023|0,n=1072693248|(A=1048575&n|0),A<=235662?S=0:A<767610?S=1:(S=0,h+=1,n-=1048576),i=_t(o=(w=(t=Sn(t,n))-(c=Fn[S]))*(d=1/(t+c)),0),e=524288+(n>>1|536870912),f=Sn(0,e+=S<<18),m=(a=o*o)*a*(0===(F=a)?.5999999999999946:.5999999999999946+F*(.4285714285785502+F*(.33333332981837743+F*(.272728123808534+F*(.23066074577556175+.20697501780033842*F))))),f=_t(f=3+(a=i*i)+(m+=(u=d*(w-i*f-i*(t-(f-c))))*(i+o)),0),g=(v=-7.028461650952758e-9*(y=_t(y=(w=i*f)+(d=u*f+(m-(f-3-a))*o),0))+.9617966939259756*(d-(y-w))+Tn[S])-((s=_t(s=(p=.9617967009544373*y)+v+(l=Un[S])+(b=h),0))-b-l-p),r[0]=s,r[1]=g,r}(kn,o,n);if(v=(y=(t-(c=_t(t,0)))*p[0]+t*p[1])+(l=c*p[0]),st.assign(v,xn,1,0),s=xt(xn[0]),g=xt(xn[1]),s>=1083179008){if(0!=(s-1083179008|g))return u*On*On;if(y+8008566259537294e-32>v-l)return u*On*On}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|g))return u*_n*_n;if(y<=v-l)return u*_n*_n}return u*(v=Vn(s,l,y))}function Pn(r){var t,n,e;if(64!==r.length)throw new Error(_("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,r));if(t="1"===r[0]?-1:1,e=parseInt(r.substring(1,12),2)-1023,n=function(r){var t,n=0;for(t=0;t<r.length;t++)"1"===r[t]&&(n+=Bn(2,-(t+1)));return n}(r.substring(12)),-1023===e){if(0===n)return 1===t?0:-0;e=-1022}else{if(1024===e)return 0===n?1===t?xr:kr:NaN;n+=1}return t*n*Bn(2,e)}var Dn=H();var Ln=Object.prototype.toString;var Wn="function"==typeof Symbol?Symbol:void 0,Gn="function"==typeof Wn?Wn.toStringTag:"";var Mn=Dn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Ln.call(r);n=r[Gn],t=C(r,Gn);try{r[Gn]=void 0}catch(t){return Ln.call(r)}return e=Ln.call(r),t?r[Gn]=n:delete r[Gn],e}:function(r){return Ln.call(r)},Hn="function"==typeof Uint8Array;var Rn="function"==typeof Uint8Array?Uint8Array:null;var $n,Yn="function"==typeof Uint8Array?Uint8Array:void 0;$n=function(){var r,t,n;if("function"!=typeof Rn)return!1;try{t=new Rn(t=[1,3.14,-3.14,256,257]),n=t,r=(Hn&&n instanceof Uint8Array||"[object Uint8Array]"===Mn(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Yn:function(){throw new Error("not implemented")};var Cn=$n,Zn="function"==typeof DataView;var qn="function"==typeof ArrayBuffer;var zn="function"==typeof Float64Array;var Xn="function"==typeof Float64Array?Float64Array:null;var Jn,Kn="function"==typeof Float64Array?Float64Array:void 0;Jn=function(){var r,t,n;if("function"!=typeof Xn)return!1;try{t=new Xn([1,3.14,-3.14,NaN]),n=t,r=(zn&&n instanceof Float64Array||"[object Float64Array]"===Mn(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Kn:function(){throw new Error("not implemented")};var Qn=Jn,re="function"==typeof ArrayBuffer?ArrayBuffer:null;var te,ne="function"==typeof ArrayBuffer?ArrayBuffer:void 0;te=function(){var r,t,n,e;if("function"!=typeof re)return!1;try{n=new re(16),e=n,(r=(qn&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===Mn(e))&&"function"==typeof re.isView)&&((t=new Qn(n))[0]=-3.14,t[1]=NaN,r=r&&re.isView(t)&&16===n.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r}()?ne:function(){throw new Error("not implemented")};var ee=te,oe="function"==typeof DataView?DataView:null;var ae,ie="function"==typeof DataView?DataView:void 0;ae=function(){var r,t,n,e;if("function"!=typeof oe)return!1;try{n=new ee(24),t=new oe(n,8),e=t,(r=(Zn&&e instanceof DataView||"[object DataView]"===Mn(e))&&"function"==typeof t.getFloat64&&"function"==typeof t.setFloat64)&&(t.setFloat64(0,-3.14),t.setFloat64(8,NaN),r=r&&t.buffer===n&&16===t.byteLength&&8===t.byteOffset&&-3.14===t.getFloat64(0)&&t.getFloat64(8)!=t.getFloat64(8))}catch(t){r=!1}return r}()?ie:function(){throw new Error("not implemented")};var ue=ae,fe=new Cn(8);function ce(r,t,n){var e,o,a,i,u;if(1===t)i=r;else{for(i=fe,u=0;u<8;u++)i[u]=r[n],n+=t;n=0}return e=new ue(i.buffer,i.byteOffset,i.byteLength),Ir?(a=e.getInt32(n,Ir),o=e.getInt32(n+4,Ir)):(o=e.getInt32(n,Ir),a=e.getInt32(n+4,Ir)),a<0&&(a+=4294967296),4294967296*o+a}var le=H();var ye=Object.prototype.toString;var pe="function"==typeof Symbol?Symbol:void 0,ve="function"==typeof pe?pe.toStringTag:"";var se=le&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return ye.call(r);n=r[ve],t=C(r,ve);try{r[ve]=void 0}catch(t){return ye.call(r)}return e=ye.call(r),t?r[ve]=n:delete r[ve],e}:function(r){return ye.call(r)},ge="function"==typeof Uint32Array;var be="function"==typeof Uint32Array?Uint32Array:null;var me,we="function"==typeof Uint32Array?Uint32Array:void 0;me=function(){var r,t,n;if("function"!=typeof be)return!1;try{t=new be(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ge&&n instanceof Uint32Array||"[object Uint32Array]"===se(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?we:function(){throw new Error("not implemented")};var de=me,he="function"==typeof Float64Array;var Ae="function"==typeof Float64Array?Float64Array:null;var Se,Fe="function"==typeof Float64Array?Float64Array:void 0;Se=function(){var r,t,n;if("function"!=typeof Ae)return!1;try{t=new Ae([1,3.14,-3.14,NaN]),n=t,r=(he&&n instanceof Float64Array||"[object Float64Array]"===se(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Fe:function(){throw new Error("not implemented")};var Ue=!0===Ir?0:1,Te=new Se(1),Ee=new de(Te.buffer);function Ie(r){return Te[0]=r,Ee[Ue]}function Ne(r){return!!(Or(r)>>>31)}var je=Number.POSITIVE_INFINITY,Ve=Number.NEGATIVE_INFINITY;var Oe=Math.floor;function _e(r){return"number"==typeof r}var xe=H();function ke(){return xe&&"symbol"==typeof Symbol.toStringTag}var Be=Object.prototype.toString;var Pe="function"==typeof Symbol?Symbol:void 0,De="function"==typeof Pe?Pe.toStringTag:"";var Le=ke()?function(r){var t,n,e;if(null==r)return Be.call(r);n=r[De],t=C(r,De);try{r[De]=void 0}catch(t){return Be.call(r)}return e=Be.call(r),t?r[De]=n:delete r[De],e}:function(r){return Be.call(r)},We=Number,Ge=We.prototype.toString;var Me=ke();function He(r){return"object"==typeof r&&(r instanceof We||(Me?function(r){try{return Ge.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Le(r)))}function Re(r){return _e(r)||He(r)}Yr(Re,"isPrimitive",_e),Yr(Re,"isObject",He);var $e=Number.POSITIVE_INFINITY,Ye=We.NEGATIVE_INFINITY,Ce=Math.floor;function Ze(r){return r<$e&&r>Ye&&Ce(t=r)===t;var t}function qe(r){return _e(r)&&Ze(r)}function ze(r){return He(r)&&Ze(r.valueOf())}function Xe(r){return qe(r)||ze(r)}function Je(r){return qe(r)&&r>=0}function Ke(r){return ze(r)&&r.valueOf()>=0}function Qe(r){return Je(r)||Ke(r)}function ro(r){return"string"==typeof r}Yr(Xe,"isPrimitive",qe),Yr(Xe,"isObject",ze),Yr(Qe,"isPrimitive",Je),Yr(Qe,"isObject",Ke);var to=H();function no(){return to&&"symbol"==typeof Symbol.toStringTag}var eo=Object.prototype.toString;var oo="function"==typeof Symbol?Symbol:void 0,ao="function"==typeof oo?oo.toStringTag:"";var io=no()?function(r){var t,n,e;if(null==r)return eo.call(r);n=r[ao],t=C(r,ao);try{r[ao]=void 0}catch(t){return eo.call(r)}return e=eo.call(r),t?r[ao]=n:delete r[ao],e}:function(r){return eo.call(r)},uo=String.prototype.valueOf;var fo=no();function co(r){return"object"==typeof r&&(r instanceof String||(fo?function(r){try{return uo.call(r),!0}catch(r){return!1}}(r):"[object String]"===io(r)))}function lo(r){return ro(r)||co(r)}Yr(lo,"isPrimitive",ro),Yr(lo,"isObject",co);var yo=void 0!==String.prototype.repeat;var po=String.prototype.repeat;var vo=yo?function(r,t){return po.call(r,t)}:function(r,t){var n,e;if(0===r.length||0===t)return"";for(n="",e=t;1==(1&e)&&(n+=r),0!=(e>>>=1);)r+=r;return n},so=Math.ceil;function go(r,t,n){var e=(t-r.length)/n.length;return e<=0?r:(e=so(e),r+vo(n,e))}function bo(r,t,n){var e=(t-r.length)/n.length;return e<=0?r:(e=so(e),vo(n,e)+r)}function mo(r,t){if(!ro(r))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Je(t))throw new TypeError(_("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));return vo(r,t)}function wo(r){for(var t,n="";r>0;)n=(t=r/2)===(r=Oe(t))?"0"+n:"1"+n;return n}function ho(r){var t,n,e,o,a,i,u;if(n=r<0||function(r){return 0===r&&1/r===Ve}(r)?"1":"0",r===je||r===Ve)return n+(o=mo("1",11))+(e=mo("0",52));if(function(r){return r!=r}(r))return n+(o=mo("1",11))+(e="1"+mo("0",51));if(0===r)return n+(o=mo("0",11))+(e=mo("0",52));if(i=(r=function(r){return Math.abs(r)}(r))-(a=Oe(r)),a=wo(a),i=function(r){var t,n,e,o;if(t="",0===r)return t;for(o=1075,e=0;e<1075&&((n=2*r)>=1?(r=n-1,t+="1",1075===o&&(o=e)):(r=n,t+="0"),!(1===n||e-o>54));e++);return t}(i),a)o=a.length-1;else{for(u=0;u<i.length;u++)if("1"===i[u]){t=u+1;break}o=-t}return e=a+i,o<0?(o<=-1023&&(t=1022),e=e.substring(t)):e=e.substring(1),o=function(r,t,n){var e;if(!ro(r))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Je(t))throw new TypeError(_("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!ro(e=n))throw new TypeError(_("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else e=" ";if(t>9007199254740991)throw new RangeError(_("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return bo(r,t,e)}(o=wo(o+1023),11,"0"),e=function(r,t,n){var e;if(!ro(r))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Je(t))throw new TypeError(_("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!ro(e=n))throw new TypeError(_("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else e=" ";if(t>9007199254740991)throw new RangeError(_("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return go(r,t,e)}(e,52,"0").substring(0,52),n+o+e}var Ao="function"==typeof Math.fround?Math.fround:null,So=H();var Fo=Object.prototype.toString;var Uo="function"==typeof Symbol?Symbol:void 0,To="function"==typeof Uo?Uo.toStringTag:"";var Eo=So&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Fo.call(r);n=r[To],t=C(r,To);try{r[To]=void 0}catch(t){return Fo.call(r)}return e=Fo.call(r),t?r[To]=n:delete r[To],e}:function(r){return Fo.call(r)},Io="function"==typeof Float32Array;var No=Number.POSITIVE_INFINITY,jo="function"==typeof Float32Array?Float32Array:null;var Vo,Oo="function"==typeof Float32Array?Float32Array:void 0;Vo=function(){var r,t,n;if("function"!=typeof jo)return!1;try{t=new jo([1,3.14,-3.14,5e40]),n=t,r=(Io&&n instanceof Float32Array||"[object Float32Array]"===Eo(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===No}catch(t){r=!1}return r}()?Oo:function(){throw new Error("not implemented")};var _o=new Vo(1);var xo="function"==typeof Ao?Ao:function(r){return _o[0]=r,_o[0]};function ko(r){return 0|r}var Bo=H();var Po=Object.prototype.toString;var Do="function"==typeof Symbol?Symbol:void 0,Lo="function"==typeof Do?Do.toStringTag:"";var Wo=Bo&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Po.call(r);n=r[Lo],t=C(r,Lo);try{r[Lo]=void 0}catch(t){return Po.call(r)}return e=Po.call(r),t?r[Lo]=n:delete r[Lo],e}:function(r){return Po.call(r)},Go="function"==typeof Uint8Array;var Mo="function"==typeof Uint8Array?Uint8Array:null;var Ho,Ro="function"==typeof Uint8Array?Uint8Array:void 0;Ho=function(){var r,t,n;if("function"!=typeof Mo)return!1;try{t=new Mo(t=[1,3.14,-3.14,256,257]),n=t,r=(Go&&n instanceof Uint8Array||"[object Uint8Array]"===Wo(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ro:function(){throw new Error("not implemented")};var $o=Ho,Yo="function"==typeof DataView;var Co="function"==typeof ArrayBuffer;var Zo="function"==typeof Float64Array;var qo="function"==typeof Float64Array?Float64Array:null;var zo,Xo="function"==typeof Float64Array?Float64Array:void 0;zo=function(){var r,t,n;if("function"!=typeof qo)return!1;try{t=new qo([1,3.14,-3.14,NaN]),n=t,r=(Zo&&n instanceof Float64Array||"[object Float64Array]"===Wo(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Xo:function(){throw new Error("not implemented")};var Jo=zo,Ko="function"==typeof ArrayBuffer?ArrayBuffer:null;var Qo,ra="function"==typeof ArrayBuffer?ArrayBuffer:void 0;Qo=function(){var r,t,n,e;if("function"!=typeof Ko)return!1;try{n=new Ko(16),e=n,(r=(Co&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===Wo(e))&&"function"==typeof Ko.isView)&&((t=new Jo(n))[0]=-3.14,t[1]=NaN,r=r&&Ko.isView(t)&&16===n.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r}()?ra:function(){throw new Error("not implemented")};var ta=Qo,na="function"==typeof DataView?DataView:null;var ea,oa="function"==typeof DataView?DataView:void 0;ea=function(){var r,t,n,e;if("function"!=typeof na)return!1;try{n=new ta(24),t=new na(n,8),e=t,(r=(Yo&&e instanceof DataView||"[object DataView]"===Wo(e))&&"function"==typeof t.getFloat64&&"function"==typeof t.setFloat64)&&(t.setFloat64(0,-3.14),t.setFloat64(8,NaN),r=r&&t.buffer===n&&16===t.byteLength&&8===t.byteOffset&&-3.14===t.getFloat64(0)&&t.getFloat64(8)!=t.getFloat64(8))}catch(t){r=!1}return r}()?oa:function(){throw new Error("not implemented")};var aa=ea,ia=Math.floor;function ua(r){var t,n,e,o;return t=new $o(8),0===r||(o=(4294967295&r)>>>0,e=ia(r/4294967296),n=new aa(t.buffer),Ir?(n.setUint32(0,o,Ir),n.setUint32(4,e,Ir)):(n.setUint32(0,e,Ir),n.setUint32(4,o,Ir))),t}var fa=new $o(8),ca=new aa(fa.buffer);function la(r){return r>>>0}Yr(ua,"assign",(function(r,t,n,e){var o,a,i;if(0===r){for(i=0;i<fa.length;i++)t[e]=0,e+=n;return t}for(a=(4294967295&r)>>>0,o=ia(r/4294967296),Ir?(ca.setUint32(0,a,Ir),ca.setUint32(4,o,Ir)):(ca.setUint32(0,o,Ir),ca.setUint32(4,a,Ir)),i=0;i<fa.length;i++)t[e]=fa[i],e+=n;return t}));var ya={};G(ya,"assert",M),G(ya,"exponent",_r),G(ya,"fromBinaryString",Pn),G(ya,"fromInt64Bytes",ce),G(ya,"fromWords",tn),G(ya,"getHighWord",Or),G(ya,"getLowWord",Ie),G(ya,"normalize",In),G(ya,"setHighWord",Sn),G(ya,"setLowWord",_t),G(ya,"signbit",Ne),G(ya,"toBinaryString",ho),G(ya,"float64ToFloat32",xo),G(ya,"float64ToInt32",ko),G(ya,"float64ToInt64Bytes",ua),G(ya,"float64ToUint32",la),G(ya,"toWords",st);export{M as assert,ya as default,_r as exponent,xo as float64ToFloat32,ko as float64ToInt32,ua as float64ToInt64Bytes,la as float64ToUint32,Pn as fromBinaryString,ce as fromInt64Bytes,tn as fromWords,Or as getHighWord,Ie as getLowWord,In as normalize,Sn as setHighWord,_t as setLowWord,Ne as signbit,ho as toBinaryString,st as toWords};
//# sourceMappingURL=mod.js.map
