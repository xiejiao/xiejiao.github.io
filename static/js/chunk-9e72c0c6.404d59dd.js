(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e72c0c6"],{"02f4":function(t,e,i){var n=i("4588"),r=i("be13");t.exports=function(t){return function(e,i){var s,o,a=String(r(e)),u=n(i),c=a.length;return u<0||u>=c?t?"":void 0:(s=a.charCodeAt(u),s<55296||s>56319||u+1===c||(o=a.charCodeAt(u+1))<56320||o>57343?t?a.charAt(u):s:t?a.slice(u,u+2):o-56320+(s-55296<<10)+65536)}}},"0390":function(t,e,i){"use strict";var n=i("02f4")(!0);t.exports=function(t,e,i){return e+(i?n(t,e).length:1)}},"0bfb":function(t,e,i){"use strict";var n=i("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,i){var n=i("52a7"),r=i("4630"),s=i("6821"),o=i("6a99"),a=i("69a8"),u=i("c69a"),c=Object.getOwnPropertyDescriptor;e.f=i("9e1e")?c:function(t,e){if(t=s(t),e=o(e,!0),u)try{return c(t,e)}catch(i){}if(a(t,e))return r(!n.f.call(t,e),t[e])}},"214f":function(t,e,i){"use strict";i("b0c5");var n=i("2aba"),r=i("32e9"),s=i("79e5"),o=i("be13"),a=i("2b4c"),u=i("520a"),c=a("species"),l=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2===i.length&&"a"===i[0]&&"b"===i[1]}();t.exports=function(t,e,i){var f=a(t),d=!s((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),g=d?!s((function(){var e=!1,i=/a/;return i.exec=function(){return e=!0,null},"split"===t&&(i.constructor={},i.constructor[c]=function(){return i}),i[f](""),!e})):void 0;if(!d||!g||"replace"===t&&!l||"split"===t&&!h){var p=/./[f],v=i(o,f,""[t],(function(t,e,i,n,r){return e.exec===u?d&&!r?{done:!0,value:p.call(e,i,n)}:{done:!0,value:t.call(i,e,n)}:{done:!1}})),m=v[0],b=v[1];n(String.prototype,t,m),r(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28a5":function(t,e,i){"use strict";var n=i("aae3"),r=i("cb7c"),s=i("ebd6"),o=i("0390"),a=i("9def"),u=i("5f1b"),c=i("520a"),l=i("79e5"),h=Math.min,f=[].push,d="split",g="length",p="lastIndex",v=4294967295,m=!l((function(){RegExp(v,"y")}));i("214f")("split",2,(function(t,e,i,l){var b;return b="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[g]||2!="ab"[d](/(?:ab)*/)[g]||4!="."[d](/(.?)(.?)/)[g]||"."[d](/()()/)[g]>1||""[d](/.?/)[g]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!n(t))return i.call(r,t,e);var s,o,a,u=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=void 0===e?v:e>>>0,m=new RegExp(t.source,l+"g");while(s=c.call(m,r)){if(o=m[p],o>h&&(u.push(r.slice(h,s.index)),s[g]>1&&s.index<r[g]&&f.apply(u,s.slice(1)),a=s[0][g],h=o,u[g]>=d))break;m[p]===s.index&&m[p]++}return h===r[g]?!a&&m.test("")||u.push(""):u.push(r.slice(h)),u[g]>d?u.slice(0,d):u}:"0"[d](void 0,0)[g]?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,n){var r=t(this),s=void 0==i?void 0:i[e];return void 0!==s?s.call(i,r,n):b.call(String(r),i,n)},function(t,e){var n=l(b,t,this,e,b!==i);if(n.done)return n.value;var c=r(t),f=String(this),d=s(c,RegExp),g=c.unicode,p=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(m?"y":"g"),_=new d(m?c:"^(?:"+c.source+")",p),y=void 0===e?v:e>>>0;if(0===y)return[];if(0===f.length)return null===u(_,f)?[f]:[];var x=0,w=0,E=[];while(w<f.length){_.lastIndex=m?w:0;var N,L=u(_,m?f:f.slice(w));if(null===L||(N=h(a(_.lastIndex+(m?0:w)),f.length))===x)w=o(f,w,g);else{if(E.push(f.slice(x,w)),E.length===y)return E;for(var k=1;k<=L.length-1;k++)if(E.push(L[k]),E.length===y)return E;w=x=N}}return E.push(f.slice(x)),E}]}))},3378:function(t,e,i){},3846:function(t,e,i){i("9e1e")&&"g"!=/./g.flags&&i("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:i("0bfb")})},"3c63":function(t,e,i){"use strict";i("3378")},"520a":function(t,e,i){"use strict";var n=i("0bfb"),r=RegExp.prototype.exec,s=String.prototype.replace,o=r,a="lastIndex",u=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[a]||0!==e[a]}(),c=void 0!==/()??/.exec("")[1],l=u||c;l&&(o=function(t){var e,i,o,l,h=this;return c&&(i=new RegExp("^"+h.source+"$(?!\\s)",n.call(h))),u&&(e=h[a]),o=r.call(h,t),u&&o&&(h[a]=h.global?o.index+o[0].length:e),c&&o&&o.length>1&&s.call(o[0],i,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o}),t.exports=o},"5dbc":function(t,e,i){var n=i("d3f4"),r=i("8b97").set;t.exports=function(t,e,i){var s,o=e.constructor;return o!==i&&"function"==typeof o&&(s=o.prototype)!==i.prototype&&n(s)&&r&&r(t,s),t}},"5f1b":function(t,e,i){"use strict";var n=i("23c6"),r=RegExp.prototype.exec;t.exports=function(t,e){var i=t.exec;if("function"===typeof i){var s=i.call(t,e);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"6b54":function(t,e,i){"use strict";i("3846");var n=i("cb7c"),r=i("0bfb"),s=i("9e1e"),o="toString",a=/./[o],u=function(t){i("2aba")(RegExp.prototype,o,t,!0)};i("79e5")((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?u((function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?r.call(t):void 0)})):a.name!=o&&u((function(){return a.call(this)}))},"8b97":function(t,e,i){var n=i("d3f4"),r=i("cb7c"),s=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,i){return s(t,i),e?t.__proto__=i:n(t,i),t}}({},!1):void 0),check:s}},9093:function(t,e,i){var n=i("ce10"),r=i("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},aa77:function(t,e,i){var n=i("5ca1"),r=i("be13"),s=i("79e5"),o=i("fdef"),a="["+o+"]",u="​",c=RegExp("^"+a+a+"*"),l=RegExp(a+a+"*$"),h=function(t,e,i){var r={},a=s((function(){return!!o[t]()||u[t]()!=u})),c=r[t]=a?e(f):o[t];i&&(r[i]=c),n(n.P+n.F*a,"String",r)},f=h.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=h},aae3:function(t,e,i){var n=i("d3f4"),r=i("2d95"),s=i("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},b0c5:function(t,e,i){"use strict";var n=i("520a");i("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},b9f6:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"lesson-head"},[i("svg",{staticClass:"hamburger",attrs:{"aria-hidden":"true"},on:{click:function(e){t.show1=!0}}},[i("use",{attrs:{"xlink:href":"#icon-hamburger"}})]),t._v(" "),i("h1",{staticClass:"lesson-title"},[t._v(t._s(t.lesson_obj.title))])]),t._v(" "),i("router-view",{on:{readThisWord:t.readThisWord}}),t._v(" "),i("div",{staticClass:"footer"},[i("div",{staticClass:"footer-container"},[i("div",{staticClass:"footer-ctrl"},[i("nut-switch",{staticClass:"footer-ctrl-follow",attrs:{active:t.isFollow,label:"跟读：开|跟读：关"},on:{change:function(e){return t.onChangeFollow(e)}}}),t._v(" "),i("div",{staticClass:"footer-ctrl-follow"},[t.isFollow?i("nut-stepper",{attrs:{value:t.waitingRate,step:.5,decimalPlaces:1,min:1},on:{"update:value":function(e){t.waitingRate=e},change:t.changeWaitingRate}}):t._e()],1)],1),t._v(" "),i("audio-player",{ref:"audioPlayer",staticClass:"audio-player",attrs:{"audio-list":t.audioList.map((function(t){return t.url})),"before-play":t.handleBeforePlay,isLoop:!1,progressInterval:100},on:{playing:t.handlePlaying,userctrl:t.onUserCtrl}})],1)]),t._v(" "),i("nut-popup",{style:{width:t.width,height:t.height},attrs:{position:"left"},model:{value:t.show1,callback:function(e){t.show1=e},expression:"show1"}},[i("nut-sidenavbar",{attrs:{show:t.show1}},[i("nut-subsidenavbar",{attrs:{title:t.gradeTitle,ikey:"99"}},t._l(t.lesson_list,(function(e,n){return i("nut-subsidenavbar",{staticStyle:{"padding-left":"20px"},attrs:{title:e.title,ikey:e.text_id}},t._l(e.children,(function(e,n){return i("nut-sidenavbaritem",{attrs:{ikey:e.text_id,title:e.title},on:{click:function(i){return t.handleClickLesson(e.text_id)}}})})),1)})),1)],1)],1)],1)},r=[],s=(i("28a5"),i("6b54"),i("5530")),o=i("2f62"),a=i("a78e"),u=i.n(a);function c(t,e){return u.a.set(t,e)}function l(t){return u.a.get(t)}var h=i("ec8d"),f={name:"hanzi",components:{AudioPlayer:h["a"]},computed:Object(s["a"])({gradeTitle:function(){var t="English "+this.grade+" - "+this.stage;return t}},Object(o["b"])(["name","new_fragment_id"])),data:function(){return{input:"",show1:!1,width:"360px",height:"100%",bookName:"",bookObj:null,grade:3,stage:2,lesson_id:"1_1",lesson_obj:{},lesson_list:[],audio:null,audioList:[{name:"音频1",url:"res/audio/English/2_1/Module01_Words.mp3"}],isFollow:!0,fragmentList:[],currFragment:0,nextFragment:0,waitingRate:2,idTimeout:-1,currentTime:0,isJumpNew:!1}},mounted:function(){var t=this;this.audio=this.$refs.audioPlayer,this.initBookInfo(),window.addEventListener("keyup",this.handleKeyup),this.$nextTick((function(){t.audio.play(),t.audio.pause()}))},destroyed:function(){window.removeEventListener("keyup",this.handleKeyup)},created:function(){var t=l("WAITING-RATE");t&&(this.waitingRate=t)},watch:{$route:function(){this.initBookInfo()},new_fragment_id:function(t){var e=this;t>=e.fragmentList.length&&(t=e.fragmentList.length),clearTimeout(e.idTimeout),e.audio.pause(),e.setCurrFragment(t),e.audio.setCurrentTime(parseFloat(e.fragmentList[t])),e.isJumpNew=!0,e.audio.play()}},methods:{initBookInfo:function(){this.$route.query.grade&&(this.grade=this.$route.query.grade),this.$route.query.stage&&(this.stage=this.$route.query.stage),this.$route.query.lesson&&(this.lesson_id=this.$route.query.lesson);var t="ENGLISH"+this.grade.toString()+"_"+this.stage.toString();if(this.bookName=t,this.ENGLISH[t]){this.bookObj=this.ENGLISH[this.bookName];var e=this.ENGLISH[this.bookName];if(this.makeLeftNav(this.ENGLISH[t]),!this.lesson_id||!this.ENGLISH[t]["B_"+this.lesson_id])for(var i in e){this.lesson_id=i;break}this.getLesson(this.lesson_id)}},makeLeftNav:function(t){this.lesson_list=[];for(var e=1;e<=10;e++){var i={text_id:"module"+e,title:"Module "+e,children:[]};this.makeModule(e,i),this.lesson_list.push(i)}},makeModule:function(t,e){e.children=[],e.children.push(this.makeLesson(t,"Unit",1)),e.children.push(this.makeLesson(t,"Unit",2)),e.children.push(this.makeLesson(t,"Words",0))},makeLesson:function(t,e,i){var n="";if("Unit"===e){var r=this.ENGLISH[this.bookName]["B_"+t+"_"+i];n+=" "+i+" "+r.title}var s={text_id:t+"_"+i,lesson_type:e,title:e+n};return s},handleClickLesson:function(t){this.getLesson(t),window.scrollTo(0,0),this.show1=!1},getLesson:function(t){this.lesson_id=t,this.lesson_obj=this.ENGLISH[this.bookName]["B_"+this.lesson_id],0===this.lesson_obj.type?this.$router.push("/english/word?grade="+this.grade+"&stage="+this.stage+"&lesson="+this.lesson_id):this.$router.push("/english/unit?grade="+this.grade+"&stage="+this.stage+"&lesson="+this.lesson_id),this.initAudio(),this.audioList=[{name:this.lesson_obj.title,url:"res/audio/English/"+this.grade+"_"+this.stage+"/"+this.lesson_obj.mp3}],this.fragmentList=[],this.lesson_obj.fragment&&this.lesson_obj.fragment.length>0&&(this.fragmentList=this.lesson_obj.fragment.split(",")),this.setCurrFragment(0)},handleBeforePlay:function(t){t()},handlePlaying:function(){var t=this;if(t.isJumpNew)t.isJumpNew=!1;else if(this.currentTime=this.audio.currentTime,this.audio.isPlaying){var e=this.fragmentList.length;if(!(e<1))for(var i=""===this.audio.currentTime?0:this.audio.currentTime,n=0;n<this.fragmentList.length;n++)if(this.fragmentList[n]<i&&(n==e-1||i<=this.fragmentList[n+1])&&this.nextFragment!==n)if(this.nextFragment=n,this.isFollow){this.audio.pause();var r=(this.fragmentList[n]-this.fragmentList[n-1])*this.waitingRate;clearTimeout(this.idTimeout),this.idTimeout=setTimeout(this.waitingNext,1e3*r)}else this.setCurrFragment(this.nextFragment)}},waitingNext:function(){this.setCurrFragment(this.nextFragment),this.audio.isPlaying||this.audio.play()},onUserCtrl:function(){clearTimeout(this.idTimeout),this.setCurrFragment(this.nextFragment)},onChangeFollow:function(t){this.isFollow=t},initAudio:function(){this.audio.pause()},handleKeyup:function(t){var e=this;if("TEXTAREA"!=t.target.nodeName&&"INPUT"!=t.target.nodeName&&this.fragmentList&&!(this.fragmentList.length<1)){var i=t||window.event||arguments.callee.caller.arguments[0];if(i&&this.audio){i.key;var n=i.keyCode,r=this.currFragment,s=!1;37==n?(r=r>0?--r:0,s=!0):39==n&&(r=r<this.fragmentList.length-1?++r:this.fragmentList.length-1,s=!0),1==s&&(clearTimeout(this.idTimeout),this.audio.pause(),this.$nextTick((function(){e.audio.setCurrentTime(e.fragmentList[r]),e.audio.play(),e.nextFragment=r,e.setCurrFragment(r)})))}}},setCurrFragment:function(t){t<0&&(t=0),this.currFragment=t,this.nextFragment=t,this.$store.dispatch("lesson/setCurrId",this.currFragment)},readThisWord:function(t){console.log("index readThisWord",t)},changeWaitingRate:function(){c("WAITING-RATE",this.waitingRate)}}},d=f,g=(i("3c63"),i("2877")),p=Object(g["a"])(d,n,r,!1,null,"5de741ff",null);e["default"]=p.exports},c5f6:function(t,e,i){"use strict";var n=i("7726"),r=i("69a8"),s=i("2d95"),o=i("5dbc"),a=i("6a99"),u=i("79e5"),c=i("9093").f,l=i("11e9").f,h=i("86cc").f,f=i("aa77").trim,d="Number",g=n[d],p=g,v=g.prototype,m=s(i("2aeb")(v))==d,b="trim"in String.prototype,_=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():f(e,3);var i,n,r,s=e.charCodeAt(0);if(43===s||45===s){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var o,u=e.slice(2),c=0,l=u.length;c<l;c++)if(o=u.charCodeAt(c),o<48||o>r)return NaN;return parseInt(u,n)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof g&&(m?u((function(){v.valueOf.call(i)})):s(i)!=d)?o(new p(_(e)),i,g):_(e)};for(var y,x=i("9e1e")?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)r(p,y=x[w])&&!r(g,y)&&h(g,y,l(p,y));g.prototype=v,v.constructor=g,i("2aba")(n,d,g)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);