(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d3c7"],{f744:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("mu-flex",{staticClass:"row-item"},[s("mu-text-field",{attrs:{placeholder:"input here"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),s("mu-flex",{staticClass:"row-item"},[s("mu-text-field",{attrs:{placeholder:"paste here"},model:{value:e.test,callback:function(t){e.test=t},expression:"test"}})],1),s("mu-flex",{staticClass:"row-item"},[s("mu-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.input,expression:"input",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{color:"primary"}},[e._v("\n      Copy\n    ")])],1),s("mu-flex",{staticClass:"row-item",attrs:{direction:"column"}},[s("p",[e._v("Use unpkg's material-design-icons css may lose some icons...")]),s("p",[e._v("使用 unpkg 的 material-design-icons css 可能会丢失某些图标……")])])],1)},o=[],r={data:function(){return{input:"",test:""}},methods:{onCopy:function(e){this.$alert("Copied succeeded: ".concat(e.text))},onError:function(){this.$alert("Failed to copy texts")}}},n=r,i=s("2877"),c=Object(i["a"])(n,a,o,!1,null,"4220c814",null);t["default"]=c.exports}}]);