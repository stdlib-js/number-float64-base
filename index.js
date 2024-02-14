// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function n(t){return"number"==typeof t}function e(t){var r,n="";for(r=0;r<t;r++)n+="0";return n}function o(t,r,n){var o=!1,i=r-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(o=!0,t=t.substr(1)),t=n?t+e(i):e(i)+t,o&&(t="-"+t)),t}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var r,e,u;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=t.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===t.specifier||10!==r)&&(u=4294967295+u+1),u<0?(e=(-u).toString(r),t.precision&&(e=o(e,t.precision,t.padRight)),e="-"+e):(e=u.toString(r),u||t.precision?t.precision&&(e=o(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===r&&(t.alternate&&(e="0x"+e),e=t.specifier===a.call(t.specifier)?a.call(e):i.call(e)),8===r&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(t){return"string"==typeof t}var c=Math.abs,l=String.prototype.toLowerCase,y=String.prototype.toUpperCase,p=String.prototype.replace,s=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,b=/^(\d+)e/,d=/\.0$/,m=/\.0*e/,w=/(\..*[^0])0*e/;function h(t){var r,e,o=parseFloat(t.arg);if(!isFinite(o)){if(!n(t.arg))throw new Error("invalid floating-point number. Value: "+e);o=t.arg}switch(t.specifier){case"e":case"E":e=o.toExponential(t.precision);break;case"f":case"F":e=o.toFixed(t.precision);break;case"g":case"G":c(o)<1e-4?((r=t.precision)>0&&(r-=1),e=o.toExponential(r)):e=o.toPrecision(t.precision),t.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,m,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=p.call(e,s,"e+0$1"),e=p.call(e,g,"e-0$1"),t.alternate&&(e=p.call(e,v,"$1."),e=p.call(e,b,"$1.e")),o>=0&&t.sign&&(e=t.sign+e),e=t.specifier===y.call(t.specifier)?y.call(e):l.call(e)}function A(t){var r,n="";for(r=0;r<t;r++)n+=" ";return n}function S(t,r,n){var e=r-t.length;return e<0?t:t=n?t+A(e):A(e)+t}var F=String.fromCharCode,U=isNaN,T=Array.isArray;function E(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function I(t){var r,n,e,i,a,c,l,y,p;if(!T(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(c="",l=1,y=0;y<t.length;y++)if(f(e=t[y]))c+=e;else{if(r=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+y+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,U(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(r&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,U(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,r=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=r?e.precision:-1;break;case"c":if(!U(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=U(a)?String(e.arg):F(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(e.precision=6),e.arg=h(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=S(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function V(t){var r,n,e,o;for(n=[],o=0,e=N.exec(t);e;)(r=t.slice(o,N.lastIndex-e[0].length)).length&&n.push(r),n.push(j(e)),o=N.lastIndex,e=N.exec(t);return(r=t.slice(o)).length&&n.push(r),n}function O(t){return"string"==typeof t}function _(t){var r,n;if(!O(t))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=[V(t)],n=1;n<arguments.length;n++)r.push(arguments[n]);return I.apply(null,r)}var x=Object.prototype,k=x.toString,B=x.__defineGetter__,P=x.__defineSetter__,D=x.__lookupGetter__,L=x.__lookupSetter__,W=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,n){var e,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(_("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===k.call(n))throw new TypeError(_("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(D.call(t,r)||L.call(t,r)?(e=t.__proto__,t.__proto__=x,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&B&&B.call(t,r,n.get),a&&P&&P.call(t,r,n.set),t};function G(t,r,n){W(t,r,{configurable:!1,enumerable:!0,writable:!1,value:n})}var M={};function H(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}G(M,"isSameValue",(function(t,r){return t===r?0!==t||1/t==1/r:t!=t&&r!=r})),G(M,"isSameValueZero",(function(t,r){return t===r||t!=t&&r!=r}));var R=H(),$=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function C(t,r){return null!=t&&Y.call(t,r)}var Z,q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"",X=R&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return $.call(t);n=t[z],r=C(t,z);try{t[z]=void 0}catch(r){return $.call(t)}return e=$.call(t),r?t[z]=n:delete t[z],e}:function(t){return $.call(t)},J="function"==typeof Uint32Array,K="function"==typeof Uint32Array?Uint32Array:null,Q="function"==typeof Uint32Array?Uint32Array:void 0;Z=function(){var t,r,n;if("function"!=typeof K)return!1;try{r=new K(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(J&&n instanceof Uint32Array||"[object Uint32Array]"===X(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Q:function(){throw new Error("not implemented")};var tt,rt=Z,nt="function"==typeof Float64Array,et="function"==typeof Float64Array?Float64Array:null,ot="function"==typeof Float64Array?Float64Array:void 0;tt=function(){var t,r,n;if("function"!=typeof et)return!1;try{r=new et([1,3.14,-3.14,NaN]),n=r,t=(nt&&n instanceof Float64Array||"[object Float64Array]"===X(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?ot:function(){throw new Error("not implemented")};var it,at=tt,ut=H(),ft=Object.prototype.toString,ct="function"==typeof Symbol?Symbol:void 0,lt="function"==typeof ct?ct.toStringTag:"",yt=ut&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return ft.call(t);n=t[lt],r=C(t,lt);try{t[lt]=void 0}catch(r){return ft.call(t)}return e=ft.call(t),r?t[lt]=n:delete t[lt],e}:function(t){return ft.call(t)},pt="function"==typeof Uint8Array,st="function"==typeof Uint8Array?Uint8Array:null,gt="function"==typeof Uint8Array?Uint8Array:void 0;it=function(){var t,r,n;if("function"!=typeof st)return!1;try{r=new st(r=[1,3.14,-3.14,256,257]),n=r,t=(pt&&n instanceof Uint8Array||"[object Uint8Array]"===yt(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?gt:function(){throw new Error("not implemented")};var vt,bt=it,dt=H(),mt=Object.prototype.toString,wt="function"==typeof Symbol?Symbol:void 0,ht="function"==typeof wt?wt.toStringTag:"",At=dt&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return mt.call(t);n=t[ht],r=C(t,ht);try{t[ht]=void 0}catch(r){return mt.call(t)}return e=mt.call(t),r?t[ht]=n:delete t[ht],e}:function(t){return mt.call(t)},St="function"==typeof Uint16Array,Ft="function"==typeof Uint16Array?Uint16Array:null,Ut="function"==typeof Uint16Array?Uint16Array:void 0;vt=function(){var t,r,n;if("function"!=typeof Ft)return!1;try{r=new Ft(r=[1,3.14,-3.14,65536,65537]),n=r,t=(St&&n instanceof Uint16Array||"[object Uint16Array]"===At(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Ut:function(){throw new Error("not implemented")};var Tt,Et={uint16:vt,uint8:bt};(Tt=new Et.uint16(1))[0]=4660;var It=52===new Et.uint8(Tt.buffer)[0],Nt=!0===It?1:0,jt=new at(1),Vt=new rt(jt.buffer);function Ot(t){return jt[0]=t,Vt[Nt]}var _t=1023;function xt(t){var r=Ot(t);return(r=(2146435072&r)>>>20)-_t|0}var kt=Number.POSITIVE_INFINITY,Bt=Number.NEGATIVE_INFINITY;function Pt(t){return t!=t}var Dt=Math.floor;function Lt(t){return Dt(t)===t}function Wt(t){return Lt(t/2)}function Gt(t){return Wt(t>0?t-1:t+1)}var Mt=Number.POSITIVE_INFINITY,Ht=Number.NEGATIVE_INFINITY;function Rt(t){return t===Mt||t===Ht}var $t=Math.sqrt;function Yt(t){return Math.abs(t)}function Ct(t,r,n){W(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var Zt,qt=H(),zt=Object.prototype.toString,Xt="function"==typeof Symbol?Symbol:void 0,Jt="function"==typeof Xt?Xt.toStringTag:"",Kt=qt&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return zt.call(t);n=t[Jt],r=C(t,Jt);try{t[Jt]=void 0}catch(r){return zt.call(t)}return e=zt.call(t),r?t[Jt]=n:delete t[Jt],e}:function(t){return zt.call(t)},Qt="function"==typeof Uint32Array,tr="function"==typeof Uint32Array?Uint32Array:null,rr="function"==typeof Uint32Array?Uint32Array:void 0;Zt=function(){var t,r,n;if("function"!=typeof tr)return!1;try{r=new tr(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(Qt&&n instanceof Uint32Array||"[object Uint32Array]"===Kt(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?rr:function(){throw new Error("not implemented")};var nr,er,or,ir=Zt,ar="function"==typeof Float64Array,ur="function"==typeof Float64Array?Float64Array:null,fr="function"==typeof Float64Array?Float64Array:void 0;nr=function(){var t,r,n;if("function"!=typeof ur)return!1;try{r=new ur([1,3.14,-3.14,NaN]),n=r,t=(ar&&n instanceof Float64Array||"[object Float64Array]"===Kt(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?fr:function(){throw new Error("not implemented")},!0===It?(er=1,or=0):(er=0,or=1);var cr={HIGH:er,LOW:or},lr=new nr(1),yr=new ir(lr.buffer),pr=cr.HIGH,sr=cr.LOW;function gr(t,r,n,e){return lr[0]=t,r[e]=yr[pr],r[e+n]=yr[sr],r}function vr(t){return gr(t,[0,0],1,0)}Ct(vr,"assign",gr);var br,dr=H(),mr=Object.prototype.toString,wr="function"==typeof Symbol?Symbol:void 0,hr="function"==typeof wr?wr.toStringTag:"",Ar=dr&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return mr.call(t);n=t[hr],r=C(t,hr);try{t[hr]=void 0}catch(r){return mr.call(t)}return e=mr.call(t),r?t[hr]=n:delete t[hr],e}:function(t){return mr.call(t)},Sr="function"==typeof Uint32Array,Fr="function"==typeof Uint32Array?Uint32Array:null,Ur="function"==typeof Uint32Array?Uint32Array:void 0;br=function(){var t,r,n;if("function"!=typeof Fr)return!1;try{r=new Fr(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(Sr&&n instanceof Uint32Array||"[object Uint32Array]"===Ar(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Ur:function(){throw new Error("not implemented")};var Tr,Er=br,Ir="function"==typeof Float64Array,Nr="function"==typeof Float64Array?Float64Array:null,jr="function"==typeof Float64Array?Float64Array:void 0;Tr=function(){var t,r,n;if("function"!=typeof Nr)return!1;try{r=new Nr([1,3.14,-3.14,NaN]),n=r,t=(Ir&&n instanceof Float64Array||"[object Float64Array]"===Ar(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?jr:function(){throw new Error("not implemented")};var Vr=!0===It?0:1,Or=new Tr(1),_r=new Er(Or.buffer);function xr(t,r){return Or[0]=t,_r[Vr]=r>>>0,Or[0]}function kr(t){return 0|t}var Br,Pr=2147483647,Dr=H(),Lr=Object.prototype.toString,Wr="function"==typeof Symbol?Symbol:void 0,Gr="function"==typeof Wr?Wr.toStringTag:"",Mr=Dr&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return Lr.call(t);n=t[Gr],r=C(t,Gr);try{t[Gr]=void 0}catch(r){return Lr.call(t)}return e=Lr.call(t),r?t[Gr]=n:delete t[Gr],e}:function(t){return Lr.call(t)},Hr="function"==typeof Uint32Array,Rr="function"==typeof Uint32Array?Uint32Array:null,$r="function"==typeof Uint32Array?Uint32Array:void 0;Br=function(){var t,r,n;if("function"!=typeof Rr)return!1;try{r=new Rr(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(Hr&&n instanceof Uint32Array||"[object Uint32Array]"===Mr(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?$r:function(){throw new Error("not implemented")};var Yr,Cr,Zr,qr=Br,zr="function"==typeof Float64Array,Xr="function"==typeof Float64Array?Float64Array:null,Jr="function"==typeof Float64Array?Float64Array:void 0;Yr=function(){var t,r,n;if("function"!=typeof Xr)return!1;try{r=new Xr([1,3.14,-3.14,NaN]),n=r,t=(zr&&n instanceof Float64Array||"[object Float64Array]"===Mr(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?Jr:function(){throw new Error("not implemented")},!0===It?(Cr=1,Zr=0):(Cr=0,Zr=1);var Kr={HIGH:Cr,LOW:Zr},Qr=new Yr(1),tn=new qr(Qr.buffer),rn=Kr.HIGH,nn=Kr.LOW;function en(t,r){return tn[rn]=t,tn[nn]=r,Qr[0]}var on=[0,0];function an(t,r){var n,e;return vr.assign(t,on,1,0),n=on[0],n&=Pr,e=Ot(r),en(n|=e&=2147483648,on[1])}var un,fn=H(),cn=Object.prototype.toString,ln="function"==typeof Symbol?Symbol:void 0,yn="function"==typeof ln?ln.toStringTag:"",pn=fn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return cn.call(t);n=t[yn],r=C(t,yn);try{t[yn]=void 0}catch(r){return cn.call(t)}return e=cn.call(t),r?t[yn]=n:delete t[yn],e}:function(t){return cn.call(t)},sn="function"==typeof Uint32Array,gn="function"==typeof Uint32Array?Uint32Array:null,vn="function"==typeof Uint32Array?Uint32Array:void 0;un=function(){var t,r,n;if("function"!=typeof gn)return!1;try{r=new gn(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(sn&&n instanceof Uint32Array||"[object Uint32Array]"===pn(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?vn:function(){throw new Error("not implemented")};var bn,dn=un,mn="function"==typeof Float64Array,wn="function"==typeof Float64Array?Float64Array:null,hn="function"==typeof Float64Array?Float64Array:void 0;bn=function(){var t,r,n;if("function"!=typeof wn)return!1;try{r=new wn([1,3.14,-3.14,NaN]),n=r,t=(mn&&n instanceof Float64Array||"[object Float64Array]"===pn(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?hn:function(){throw new Error("not implemented")};var An=!0===It?1:0,Sn=new bn(1),Fn=new dn(Sn.buffer);function Un(t,r){return Sn[0]=t,Fn[An]=r>>>0,Sn[0]}var Tn=1048576,En=[1,1.5],In=[0,.5849624872207642],Nn=[0,1.350039202129749e-8];function jn(t,r,n,e){return function(t){return t!=t}(t)||Rt(t)?(r[e]=t,r[e+n]=0,r):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(r[e]=4503599627370496*t,r[e+n]=-52,r):(r[e]=t,r[e+n]=0,r)}function Vn(t){return jn(t,[0,0],1,0)}Ct(Vn,"assign",jn);var On=[0,0],_n=[0,0],xn=1048575,kn=1048576;function Bn(t,r,n){var e,o,i,a,u,f,c,l,y,p,s,g,v,b;return y=((l=t&Pr|0)>>20)-_t|0,c=0,l>1071644672&&(o=Un(0,((c=t+(kn>>y+1)>>>0)&~(xn>>(y=((c&Pr)>>20)-_t|0)))>>>0),c=(c&xn|kn)>>20-y>>>0,t<0&&(c=-c),r-=o),t=kr(t=Ot(f=1-((f=(i=.6931471824645996*(o=xr(o=n+r,0)))+(a=.6931471805599453*(n-(o-r))+-1.904654299957768e-9*o))*(e=f-(o=f*f)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-i))+f*u)-f))),(t+=c<<20>>>0)>>20<=0?(s=f,f=0===(g=c)||0===s||Pt(s)||Rt(s)?s:(jn(s,On,1,0),g+=On[1],(g+=xt(s=On[0]))<-1074?an(0,s):g>1023?s<0?Bt:kt:(g<=-1023?(g+=52,b=2220446049250313e-31):b=1,vr.assign(s,_n,1,0),v=_n[0],v&=2148532223,b*en(v|=g+_t<<20,_n[1])))):f=Un(f,t),f}var Pn=1083179008,Dn=1e300,Ln=1e-300,Wn=[0,0],Gn=[0,0];function Mn(t,r){var n,e,o,i,a,u,f,c,l,y,p,s,g,v;if(Pt(t)||Pt(r))return NaN;if(vr.assign(r,Wn,1,0),a=Wn[0],0===Wn[1]){if(0===r)return 1;if(1===r)return t;if(-1===r)return 1/t;if(.5===r)return $t(t);if(-.5===r)return 1/$t(t);if(2===r)return t*t;if(3===r)return t*t*t;if(4===r)return(t*=t)*t;if(Rt(r))return function(t,r){return-1===t?(t-t)/(t-t):1===t?1:Yt(t)<1==(r===kt)?0:kt}(t,r)}if(vr.assign(t,Wn,1,0),i=Wn[0],0===Wn[1]){if(0===i)return function(t,r){return r===Bt?kt:r===kt?0:r>0?Gt(r)?t:0:Gt(r)?an(kt,t):kt}(t,r);if(1===t)return 1;if(-1===t&&Gt(r))return-1;if(Rt(t))return t===Bt?Mn(-0,-r):r<0?0:kt}if(t<0&&!1===Lt(r))return(t-t)/(t-t);if(o=Yt(t),n=i&Pr|0,e=a&Pr|0,f=a>>>31|0,u=(u=i>>>31|0)&&Gt(r)?-1:1,e>1105199104){if(e>1139802112)return function(t,r){return(Ot(t)&Pr)<=1072693247?r<0?1/0:0:r>0?1/0:0}(t,r);if(n<1072693247)return 1===f?u*Dn*Dn:u*Ln*Ln;if(n>1072693248)return 0===f?u*Dn*Dn:u*Ln*Ln;p=function(t,r){var n,e,o,i,a,u;return n=(a=1.9259629911266175e-8*(o=r-1)-o*o*(0===(u=o)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=xr(e=(i=1.4426950216293335*o)+a,0))-i),t[0]=e,t[1]=n,t}(Gn,o)}else p=function(t,r,n){var e,o,i,a,u,f,c,l,y,p,s,g,v,b,d,m,w,h,A,S,F;return h=0,n<Tn&&(h-=53,n=Ot(r*=9007199254740992)),h+=(n>>20)-_t|0,n=1072693248|(A=1048575&n|0),A<=235662?S=0:A<767610?S=1:(S=0,h+=1,n-=Tn),a=xr(o=(m=(r=Un(r,n))-(c=En[S]))*(w=1/(r+c)),0),e=524288+(n>>1|536870912),f=Un(0,e+=S<<18),d=(i=o*o)*i*(0===(F=i)?.5999999999999946:.5999999999999946+F*(.4285714285785502+F*(.33333332981837743+F*(.272728123808534+F*(.23066074577556175+.20697501780033842*F))))),f=xr(f=3+(i=a*a)+(d+=(u=w*(m-a*f-a*(r-(f-c))))*(a+o)),0),v=(s=-7.028461650952758e-9*(y=xr(y=(m=a*f)+(w=u*f+(d-(f-3-i))*o),0))+.9617966939259756*(w-(y-m))+Nn[S])-((g=xr(g=(p=.9617967009544373*y)+s+(l=In[S])+(b=h),0))-b-l-p),t[0]=g,t[1]=v,t}(Gn,o,n);if(s=(y=(r-(c=xr(r,0)))*p[0]+r*p[1])+(l=c*p[0]),vr.assign(s,Wn,1,0),g=kr(Wn[0]),v=kr(Wn[1]),g>=Pn){if(0!=(g-Pn|v))return u*Dn*Dn;if(y+8008566259537294e-32>s-l)return u*Dn*Dn}else if((g&Pr)>=1083231232){if(0!=(g-3230714880|v))return u*Ln*Ln;if(y<=s-l)return u*Ln*Ln}return u*(s=Bn(g,l,y))}var Hn,Rn=H(),$n=Object.prototype.toString,Yn="function"==typeof Symbol?Symbol:void 0,Cn="function"==typeof Yn?Yn.toStringTag:"",Zn=Rn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return $n.call(t);n=t[Cn],r=C(t,Cn);try{t[Cn]=void 0}catch(r){return $n.call(t)}return e=$n.call(t),r?t[Cn]=n:delete t[Cn],e}:function(t){return $n.call(t)},qn="function"==typeof Uint8Array,zn="function"==typeof Uint8Array?Uint8Array:null,Xn="function"==typeof Uint8Array?Uint8Array:void 0;Hn=function(){var t,r,n;if("function"!=typeof zn)return!1;try{r=new zn(r=[1,3.14,-3.14,256,257]),n=r,t=(qn&&n instanceof Uint8Array||"[object Uint8Array]"===Zn(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Xn:function(){throw new Error("not implemented")};var Jn,Kn=Hn,Qn="function"==typeof DataView,te="function"==typeof ArrayBuffer,re="function"==typeof Float64Array,ne="function"==typeof Float64Array?Float64Array:null,ee="function"==typeof Float64Array?Float64Array:void 0;Jn=function(){var t,r,n;if("function"!=typeof ne)return!1;try{r=new ne([1,3.14,-3.14,NaN]),n=r,t=(re&&n instanceof Float64Array||"[object Float64Array]"===Zn(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?ee:function(){throw new Error("not implemented")};var oe,ie=Jn,ae="function"==typeof ArrayBuffer?ArrayBuffer:null,ue="function"==typeof ArrayBuffer?ArrayBuffer:void 0;oe=function(){var t,r,n,e;if("function"!=typeof ae)return!1;try{n=new ae(16),e=n,(t=(te&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===Zn(e))&&"function"==typeof ae.isView)&&((r=new ie(n))[0]=-3.14,r[1]=NaN,t=t&&ae.isView(r)&&16===n.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t}()?ue:function(){throw new Error("not implemented")};var fe,ce=oe,le="function"==typeof DataView?DataView:null,ye="function"==typeof DataView?DataView:void 0;fe=function(){var t,r,n,e;if("function"!=typeof le)return!1;try{n=new ce(24),r=new le(n,8),e=r,(t=(Qn&&e instanceof DataView||"[object DataView]"===Zn(e))&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===n&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t}()?ye:function(){throw new Error("not implemented")};var pe,se=fe,ge=4294967296,ve=new Kn(8),be=H(),de=Object.prototype.toString,me="function"==typeof Symbol?Symbol:void 0,we="function"==typeof me?me.toStringTag:"",he=be&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return de.call(t);n=t[we],r=C(t,we);try{t[we]=void 0}catch(r){return de.call(t)}return e=de.call(t),r?t[we]=n:delete t[we],e}:function(t){return de.call(t)},Ae="function"==typeof Uint32Array,Se="function"==typeof Uint32Array?Uint32Array:null,Fe="function"==typeof Uint32Array?Uint32Array:void 0;pe=function(){var t,r,n;if("function"!=typeof Se)return!1;try{r=new Se(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(Ae&&n instanceof Uint32Array||"[object Uint32Array]"===he(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Fe:function(){throw new Error("not implemented")};var Ue,Te=pe,Ee="function"==typeof Float64Array,Ie="function"==typeof Float64Array?Float64Array:null,Ne="function"==typeof Float64Array?Float64Array:void 0;Ue=function(){var t,r,n;if("function"!=typeof Ie)return!1;try{r=new Ie([1,3.14,-3.14,NaN]),n=r,t=(Ee&&n instanceof Float64Array||"[object Float64Array]"===he(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?Ne:function(){throw new Error("not implemented")};var je=!0===It?0:1,Ve=new Ue(1),Oe=new Te(Ve.buffer),_e=Number.POSITIVE_INFINITY,xe=Number.NEGATIVE_INFINITY,ke=Math.floor;function Be(t){return"number"==typeof t}var Pe=H();function De(){return Pe&&"symbol"==typeof Symbol.toStringTag}var Le=Object.prototype.toString,We="function"==typeof Symbol?Symbol:void 0,Ge="function"==typeof We?We.toStringTag:"",Me=De()?function(t){var r,n,e;if(null==t)return Le.call(t);n=t[Ge],r=C(t,Ge);try{t[Ge]=void 0}catch(r){return Le.call(t)}return e=Le.call(t),r?t[Ge]=n:delete t[Ge],e}:function(t){return Le.call(t)},He=Number,Re=He.prototype.toString,$e=De();function Ye(t){return"object"==typeof t&&(t instanceof He||($e?function(t){try{return Re.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Me(t)))}function Ce(t){return Be(t)||Ye(t)}Ct(Ce,"isPrimitive",Be),Ct(Ce,"isObject",Ye);var Ze=Number.POSITIVE_INFINITY,qe=He.NEGATIVE_INFINITY,ze=Math.floor;function Xe(t){return t<Ze&&t>qe&&ze(r=t)===r;var r}function Je(t){return Be(t)&&Xe(t)}function Ke(t){return Ye(t)&&Xe(t.valueOf())}function Qe(t){return Je(t)||Ke(t)}function to(t){return Je(t)&&t>=0}function ro(t){return Ke(t)&&t.valueOf()>=0}function no(t){return to(t)||ro(t)}function eo(t){return"string"==typeof t}Ct(Qe,"isPrimitive",Je),Ct(Qe,"isObject",Ke),Ct(no,"isPrimitive",to),Ct(no,"isObject",ro);var oo=H();function io(){return oo&&"symbol"==typeof Symbol.toStringTag}var ao=Object.prototype.toString,uo="function"==typeof Symbol?Symbol:void 0,fo="function"==typeof uo?uo.toStringTag:"",co=io()?function(t){var r,n,e;if(null==t)return ao.call(t);n=t[fo],r=C(t,fo);try{t[fo]=void 0}catch(r){return ao.call(t)}return e=ao.call(t),r?t[fo]=n:delete t[fo],e}:function(t){return ao.call(t)},lo=String.prototype.valueOf,yo=io();function po(t){return"object"==typeof t&&(t instanceof String||(yo?function(t){try{return lo.call(t),!0}catch(t){return!1}}(t):"[object String]"===co(t)))}function so(t){return eo(t)||po(t)}Ct(so,"isPrimitive",eo),Ct(so,"isObject",po);var go=9007199254740991,vo=void 0!==String.prototype.repeat,bo=String.prototype.repeat,mo=vo?function(t,r){return bo.call(t,r)}:function(t,r){var n,e;if(0===t.length||0===r)return"";for(n="",e=r;1==(1&e)&&(n+=t),0!=(e>>>=1);)t+=t;return n},wo=Math.ceil;function ho(t,r,n){var e=(r-t.length)/n.length;return e<=0?t:(e=wo(e),t+mo(n,e))}function Ao(t,r,n){var e=(r-t.length)/n.length;return e<=0?t:(e=wo(e),mo(n,e)+t)}function So(t,r){if(!eo(t))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",t));if(!to(r))throw new TypeError(_("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));return mo(t,r)}function Fo(t){for(var r,n="";t>0;)n=(r=t/2)===(t=ke(r))?"0"+n:"1"+n;return n}var Uo,To=1075,Eo="function"==typeof Math.fround?Math.fround:null,Io=H(),No=Object.prototype.toString,jo="function"==typeof Symbol?Symbol:void 0,Vo="function"==typeof jo?jo.toStringTag:"",Oo=Io&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return No.call(t);n=t[Vo],r=C(t,Vo);try{t[Vo]=void 0}catch(r){return No.call(t)}return e=No.call(t),r?t[Vo]=n:delete t[Vo],e}:function(t){return No.call(t)},_o="function"==typeof Float32Array,xo=Number.POSITIVE_INFINITY,ko="function"==typeof Float32Array?Float32Array:null,Bo="function"==typeof Float32Array?Float32Array:void 0;Uo=function(){var t,r,n;if("function"!=typeof ko)return!1;try{r=new ko([1,3.14,-3.14,5e40]),n=r,t=(_o&&n instanceof Float32Array||"[object Float32Array]"===Oo(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===xo}catch(r){t=!1}return t}()?Bo:function(){throw new Error("not implemented")};var Po,Do=new Uo(1),Lo="function"==typeof Eo?Eo:function(t){return Do[0]=t,Do[0]},Wo=H(),Go=Object.prototype.toString,Mo="function"==typeof Symbol?Symbol:void 0,Ho="function"==typeof Mo?Mo.toStringTag:"",Ro=Wo&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return Go.call(t);n=t[Ho],r=C(t,Ho);try{t[Ho]=void 0}catch(r){return Go.call(t)}return e=Go.call(t),r?t[Ho]=n:delete t[Ho],e}:function(t){return Go.call(t)},$o="function"==typeof Uint8Array,Yo="function"==typeof Uint8Array?Uint8Array:null,Co="function"==typeof Uint8Array?Uint8Array:void 0;Po=function(){var t,r,n;if("function"!=typeof Yo)return!1;try{r=new Yo(r=[1,3.14,-3.14,256,257]),n=r,t=($o&&n instanceof Uint8Array||"[object Uint8Array]"===Ro(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Co:function(){throw new Error("not implemented")};var Zo,qo=Po,zo="function"==typeof DataView,Xo="function"==typeof ArrayBuffer,Jo="function"==typeof Float64Array,Ko="function"==typeof Float64Array?Float64Array:null,Qo="function"==typeof Float64Array?Float64Array:void 0;Zo=function(){var t,r,n;if("function"!=typeof Ko)return!1;try{r=new Ko([1,3.14,-3.14,NaN]),n=r,t=(Jo&&n instanceof Float64Array||"[object Float64Array]"===Ro(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?Qo:function(){throw new Error("not implemented")};var ti,ri=Zo,ni="function"==typeof ArrayBuffer?ArrayBuffer:null,ei="function"==typeof ArrayBuffer?ArrayBuffer:void 0;ti=function(){var t,r,n,e;if("function"!=typeof ni)return!1;try{n=new ni(16),e=n,(t=(Xo&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===Ro(e))&&"function"==typeof ni.isView)&&((r=new ri(n))[0]=-3.14,r[1]=NaN,t=t&&ni.isView(r)&&16===n.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t}()?ei:function(){throw new Error("not implemented")};var oi,ii=ti,ai="function"==typeof DataView?DataView:null,ui="function"==typeof DataView?DataView:void 0;oi=function(){var t,r,n,e;if("function"!=typeof ai)return!1;try{n=new ii(24),r=new ai(n,8),e=r,(t=(zo&&e instanceof DataView||"[object DataView]"===Ro(e))&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===n&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t}()?ui:function(){throw new Error("not implemented")};var fi=oi,ci=Math.floor;function li(t){var r,n,e,o;return r=new qo(8),0===t||(o=(4294967295&t)>>>0,e=ci(t/4294967296),n=new fi(r.buffer),It?(n.setUint32(0,o,It),n.setUint32(4,e,It)):(n.setUint32(0,e,It),n.setUint32(4,o,It))),r}var yi=new qo(8),pi=new fi(yi.buffer);Ct(li,"assign",(function(t,r,n,e){var o,i,a;if(0===t){for(a=0;a<yi.length;a++)r[e]=0,e+=n;return r}for(i=(4294967295&t)>>>0,o=ci(t/4294967296),It?(pi.setUint32(0,i,It),pi.setUint32(4,o,It)):(pi.setUint32(0,o,It),pi.setUint32(4,i,It)),a=0;a<yi.length;a++)r[e]=yi[a],e+=n;return r}));var si={};return G(si,"assert",M),G(si,"exponent",xt),G(si,"fromBinaryString",(function(t){var r,n,e;if(64!==t.length)throw new Error(_("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,t));if(r="1"===t[0]?-1:1,e=parseInt(t.substring(1,12),2)-_t,n=function(t){var r,n=0;for(r=0;r<t.length;r++)"1"===t[r]&&(n+=Mn(2,-(r+1)));return n}(t.substring(12)),-1023===e){if(0===n)return 1===r?0:-0;e=-1022}else{if(1024===e)return 0===n?1===r?kt:Bt:NaN;n+=1}return r*n*Mn(2,e)})),G(si,"fromInt64Bytes",(function(t,r,n){var e,o,i,a,u;if(1===r)a=t;else{for(a=ve,u=0;u<8;u++)a[u]=t[n],n+=r;n=0}return e=new se(a.buffer,a.byteOffset,a.byteLength),It?(i=e.getInt32(n,It),o=e.getInt32(n+4,It)):(o=e.getInt32(n,It),i=e.getInt32(n+4,It)),i<0&&(i+=ge),o*ge+i})),G(si,"fromWords",en),G(si,"getHighWord",Ot),G(si,"getLowWord",(function(t){return Ve[0]=t,Oe[je]})),G(si,"normalize",Vn),G(si,"setHighWord",Un),G(si,"setLowWord",xr),G(si,"signbit",(function(t){return!!(Ot(t)>>>31)})),G(si,"toBinaryString",(function(t){var r,n,e,o,i,a,u;if(n=t<0||function(t){return 0===t&&1/t===xe}(t)?"1":"0",t===_e||t===xe)return n+(o=So("1",11))+(e=So("0",52));if(function(t){return t!=t}(t))return n+(o=So("1",11))+(e="1"+So("0",51));if(0===t)return n+(o=So("0",11))+(e=So("0",52));if(a=(t=function(t){return Math.abs(t)}(t))-(i=ke(t)),i=Fo(i),a=function(t){var r,n,e,o;if(r="",0===t)return r;for(o=To,e=0;e<To&&((n=2*t)>=1?(t=n-1,r+="1",o===To&&(o=e)):(t=n,r+="0"),!(1===n||e-o>54));e++);return r}(a),i)o=i.length-1;else{for(u=0;u<a.length;u++)if("1"===a[u]){r=u+1;break}o=-r}return e=i+a,o<0?(o<=-1023&&(r=1022),e=e.substring(r)):e=e.substring(1),o=function(t,r,n){var e;if(!eo(t))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",t));if(!to(r))throw new TypeError(_("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(arguments.length>2){if(!eo(e=n))throw new TypeError(_("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else e=" ";if(r>go)throw new RangeError(_("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r));return Ao(t,r,e)}(o=Fo(o+_t),11,"0"),e=function(t,r,n){var e;if(!eo(t))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",t));if(!to(r))throw new TypeError(_("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(arguments.length>2){if(!eo(e=n))throw new TypeError(_("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else e=" ";if(r>go)throw new RangeError(_("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r));return ho(t,r,e)}(e,52,"0").substring(0,52),n+o+e})),G(si,"float64ToFloat32",Lo),G(si,"float64ToInt32",(function(t){return 0|t})),G(si,"float64ToInt64Bytes",li),G(si,"float64ToUint32",(function(t){return t>>>0})),G(si,"toWords",vr),si},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).ns=r();
//# sourceMappingURL=index.js.map
