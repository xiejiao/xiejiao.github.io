(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eacac292"],{"02f4":function(e,t,n){var r=n("4588"),i=n("be13");e.exports=function(e){return function(t,n){var o,a,c=String(i(t)),u=r(n),s=c.length;return u<0||u>=s?e?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?e?c.charAt(u):o:e?c.slice(u,u+2):a-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var r=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"0bfb":function(e,t,n){"use strict";var r=n("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"11e9":function(e,t,n){var r=n("52a7"),i=n("4630"),o=n("6821"),a=n("6a99"),c=n("69a8"),u=n("c69a"),s=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?s:function(e,t){if(e=o(e),t=a(t,!0),u)try{return s(e,t)}catch(n){}if(c(e,t))return i(!r.f.call(e,t),e[t])}},"214f":function(e,t,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),o=n("79e5"),a=n("be13"),c=n("2b4c"),u=n("520a"),s=c("species"),l=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var d=c(e),p=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),h=p?!o((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[s]=function(){return n}),n[d](""),!t})):void 0;if(!p||!h||"replace"===e&&!l||"split"===e&&!f){var g=/./[d],v=n(a,d,""[e],(function(e,t,n,r,i){return t.exec===u?p&&!i?{done:!0,value:g.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),b=v[0],y=v[1];r(String.prototype,e,b),i(RegExp.prototype,d,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}}},"216b":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("28a5"),n("6b54");function r(e){if(""===e)return"";for(var t="",n=0;n<e.length;n++)t+=parseInt(e[n].charCodeAt(0),10).toString(16);return t}},"262f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"name"},[e._v(e._s(e.currentAudioName||e.audioList[0].name))]),e._v(" "),n("audio-player",{ref:"audioPlayer",attrs:{"audio-list":e.audioList.map((function(e){return e.url})),"before-play":e.handleBeforePlay},on:{playing:e.handlePlaying,ended:e.handleAudioEnd}})],1)},i=[],o=(n("6b54"),n("7f7f"),n("5530")),a=n("2f62"),c=(n("216b"),n("ec8d")),u={name:"word",components:{AudioPlayer:c["a"]},computed:Object(o["a"])({},Object(a["b"])(["name"])),data:function(){return{grade:2,stage:1,lesson_id:"1_1",word_list:[],currentAudioName:"",audio:null,audioList:[{name:"音频1",url:"res/audio/English/2_1/Module01_Words.mp3"}],fragementList:[]}},mounted:function(){this.audio=this.$refs.audioPlayer,this.$route.query.grade&&(this.grade=this.$route.query.grade),this.$route.query.stage&&(this.stage=this.$route.query.stage),this.$route.query.lesson&&(this.lesson_id=this.$route.query.lesson),console.log("keyup"),window.addEventListener("keyup",this.handleKeyup)},created:function(){},destroyed:function(){window.removeEventListener("keyup",this.handleKeyup)},methods:{handleNextWord:function(){var e=this.calNowWordId();e<this.word_list.length&&e++},handlePrevWord:function(){var e=this.calNowWordId();e>0&&e--},handleBeforePlay:function(e){this.currentAudioName=this.audioList[this.$refs.audioPlayer.currentPlayIndex].name,e()},handlePlaying:function(){},handleAudioEnd:function(){console.log("this.fragementList:",this.fragementList.toString())},handleKeyup:function(e){var t=e||window.event||arguments.callee.caller.arguments[0];if(t&&this.audio){t.key;var n=t.keyCode;32==n&&(console.log("curr time:",this.audio.currentTime),this.fragementList.push(this.audio.currentTime.toFixed(3)),console.log("this.fragementList:",this.fragementList.toString()),this.audio.isPlaying)}}}},s=u,l=(n("518b"),n("2877")),f=Object(l["a"])(s,r,i,!1,null,null,null);t["default"]=f.exports},"28a5":function(e,t,n){"use strict";var r=n("aae3"),i=n("cb7c"),o=n("ebd6"),a=n("0390"),c=n("9def"),u=n("5f1b"),s=n("520a"),l=n("79e5"),f=Math.min,d=[].push,p="split",h="length",g="lastIndex",v=4294967295,b=!l((function(){RegExp(v,"y")}));n("214f")("split",2,(function(e,t,n,l){var y;return y="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[h]||2!="ab"[p](/(?:ab)*/)[h]||4!="."[p](/(.?)(.?)/)[h]||"."[p](/()()/)[h]>1||""[p](/.?/)[h]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!r(e))return n.call(i,e,t);var o,a,c,u=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,p=void 0===t?v:t>>>0,b=new RegExp(e.source,l+"g");while(o=s.call(b,i)){if(a=b[g],a>f&&(u.push(i.slice(f,o.index)),o[h]>1&&o.index<i[h]&&d.apply(u,o.slice(1)),c=o[0][h],f=a,u[h]>=p))break;b[g]===o.index&&b[g]++}return f===i[h]?!c&&b.test("")||u.push(""):u.push(i.slice(f)),u[h]>p?u.slice(0,p):u}:"0"[p](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,r){var i=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,r):y.call(String(i),n,r)},function(e,t){var r=l(y,e,this,t,y!==n);if(r.done)return r.value;var s=i(e),d=String(this),p=o(s,RegExp),h=s.unicode,g=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(b?"y":"g"),x=new p(b?s:"^(?:"+s.source+")",g),m=void 0===t?v:t>>>0;if(0===m)return[];if(0===d.length)return null===u(x,d)?[d]:[];var E=0,_=0,w=[];while(_<d.length){x.lastIndex=b?_:0;var I,N=u(x,b?d:d.slice(_));if(null===N||(I=f(c(x.lastIndex+(b?0:_)),d.length))===E)_=a(d,_,h);else{if(w.push(d.slice(E,_)),w.length===m)return w;for(var A=1;A<=N.length-1;A++)if(w.push(N[A]),w.length===m)return w;_=E=I}}return w.push(d.slice(E)),w}]}))},3846:function(e,t,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"518b":function(e,t,n){"use strict";n("fcb4")},"520a":function(e,t,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,a=i,c="lastIndex",u=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[c]||0!==t[c]}(),s=void 0!==/()??/.exec("")[1],l=u||s;l&&(a=function(e){var t,n,a,l,f=this;return s&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),u&&(t=f[c]),a=i.call(f,e),u&&a&&(f[c]=f.global?a.index+a[0].length:t),s&&a&&a.length>1&&o.call(a[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a}),e.exports=a},"5dbc":function(e,t,n){var r=n("d3f4"),i=n("8b97").set;e.exports=function(e,t,n){var o,a=t.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(e,o),e}},"5f1b":function(e,t,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"6b54":function(e,t,n){"use strict";n("3846");var r=n("cb7c"),i=n("0bfb"),o=n("9e1e"),a="toString",c=/./[a],u=function(e){n("2aba")(RegExp.prototype,a,e,!0)};n("79e5")((function(){return"/a/b"!=c.call({source:"a",flags:"b"})}))?u((function(){var e=r(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?i.call(e):void 0)})):c.name!=a&&u((function(){return c.call(this)}))},"8b97":function(e,t,n){var r=n("d3f4"),i=n("cb7c"),o=function(e,t){if(i(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(i){t=!0}return function(e,n){return o(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:o}},9093:function(e,t,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},aa77:function(e,t,n){var r=n("5ca1"),i=n("be13"),o=n("79e5"),a=n("fdef"),c="["+a+"]",u="​",s=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(e,t,n){var i={},c=o((function(){return!!a[e]()||u[e]()!=u})),s=i[e]=c?t(d):a[e];n&&(i[n]=s),r(r.P+r.F*c,"String",i)},d=f.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(l,"")),e};e.exports=f},aae3:function(e,t,n){var r=n("d3f4"),i=n("2d95"),o=n("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},b0c5:function(e,t,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},c5f6:function(e,t,n){"use strict";var r=n("7726"),i=n("69a8"),o=n("2d95"),a=n("5dbc"),c=n("6a99"),u=n("79e5"),s=n("9093").f,l=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,p="Number",h=r[p],g=h,v=h.prototype,b=o(n("2aeb")(v))==p,y="trim"in String.prototype,x=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){t=y?t.trim():d(t,3);var n,r,i,o=t.charCodeAt(0);if(43===o||45===o){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+t}for(var a,u=t.slice(2),s=0,l=u.length;s<l;s++)if(a=u.charCodeAt(s),a<48||a>i)return NaN;return parseInt(u,r)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof h&&(b?u((function(){v.valueOf.call(n)})):o(n)!=p)?a(new g(x(t)),n,h):x(t)};for(var m,E=n("9e1e")?s(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;E.length>_;_++)i(g,m=E[_])&&!i(h,m)&&f(h,m,l(g,m));h.prototype=v,v.constructor=h,n("2aba")(r,p,h)}},fcb4:function(e,t,n){},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);