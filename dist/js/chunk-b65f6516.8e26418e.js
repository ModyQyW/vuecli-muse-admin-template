(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b65f6516"],{"0798":function(t,e,n){},"1bd0":function(t,e,n){"use strict";var o=n("f8b7"),i=n.n(o);i.a},"665e":function(t,e,n){"use strict";var o=n("0798"),i=n.n(o);i.a},e5a2:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mu-flex",{staticClass:"container",attrs:{direction:"column"}},[n("mu-alert",{attrs:{color:"info"}},[t._v("\n    Based on CodeMirror. A simple demo below. Check the document for more information. "),n("a",{attrs:{href:"https://codemirror.net/"}},[t._v("link to CodeMirror")])]),t._v(" "),n("json-editor",{attrs:{val:t.val},on:{change:t.onChange}})],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"json-editor"},[n("textarea",{ref:"jsonEditor"})])},a=[],s=n("56b3"),c=n.n(s),l=(n("a7be"),n("f9d4"),{props:{val:{type:Object,default:function(){return{}}}},data:function(){return{editor:null}},mounted:function(){var t=this;this.editor=c.a.fromTextArea(this.$refs.jsonEditor,{mode:"application/json",tabSize:2,lineNumbers:!0,lint:!0}),this.editor.setValue(JSON.stringify(this.val)),this.editor.on("change",function(e){t.$emit("change",e.getValue())})},watch:{val:function(t){var e=this.editor.getValue();t!==e&&this.editor.setValue(JSON.stringify(this.val,null,2))}}}),u=l,f=(n("665e"),n("2877")),d=Object(f["a"])(u,r,a,!1,null,"6af97ce8",null),h=d.exports,v={components:{JsonEditor:h},data:function(){return{val:{}}},methods:{onChange:function(t){this.val=t}}},m=v,b=(n("1bd0"),Object(f["a"])(m,o,i,!1,null,"6ed5a054",null));e["default"]=b.exports},f8b7:function(t,e,n){}}]);