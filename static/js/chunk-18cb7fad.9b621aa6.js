(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18cb7fad"],{"53ad":function(t,s,i){"use strict";i("6182")},6182:function(t,s,i){},f7cb:function(t,s,i){"use strict";i.r(s);var o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"main-container"},[i("div",{ref:"lessonContainer",staticClass:"unit-container"})])},e=[],n=i("5530"),a=(i("d3b7"),i("25f0"),i("2f62")),r=i("ec8d"),h={name:"word",components:{AudioPlayer:r["a"]},computed:Object(n["a"])({},Object(a["b"])(["name"])),data:function(){return{ENGLISH:{},grade:3,stage:1,lesson_id:"1_1",word_list:[],currentAudioName:"",bookName:""}},mounted:function(){this.initBookInfo()},created:function(){},activated:function(){},watch:{$route:function(){this.initBookInfo()}},methods:{initBookInfo:function(){this.ENGLISH=window.EnglishInfo,this.$route.query.grade&&(this.grade=this.$route.query.grade),this.$route.query.stage&&(this.stage=this.$route.query.stage),this.$route.query.lesson&&(this.lesson_id=this.$route.query.lesson);var t="ENGLISH"+this.grade.toString()+"_"+this.stage.toString();if(this.bookName=t,this.ENGLISH[t]){this.bookObj=this.ENGLISH[this.bookName];var s=this.ENGLISH[this.bookName];if(!this.lesson_id||!this.ENGLISH[t]["B_"+this.lesson_id])for(var i in s){this.lesson_id=i;break}this.getLesson(this.lesson_id)}},handleNextWord:function(){var t=this.calNowWordId();t<this.word_list.length&&t++},handlePrevWord:function(){var t=this.calNowWordId();t>0&&t--},getLesson:function(t){this.lesson_id=t,this.lesson_obj=this.ENGLISH[this.bookName]["B_"+this.lesson_id],this.lesson_obj&&(this.word_list=[],this.word_list=this.ENGLISH[this.bookName]["B_"+this.lesson_id].word)}}},d=h,u=(i("53ad"),i("2877")),c=Object(u["a"])(d,o,e,!1,null,"dc4162fa",null);s["default"]=c.exports}}]);