webpackJsonp([6],{"4SMA":function(t,e,o){"use strict";var n=o("aA9S"),i=o.n(n),s=o("I732");e.a={name:"",props:{visible:Boolean,edit:Object},watch:{edit:function(t){console.log("newVal",t),this.form=i()({},t),console.log(this.form)}},data:function(){return{formLabelWidth:"120px",form:{},options:[{label:"安卓",val:"1"},{label:"IOS",val:"2"}]}},methods:{submit:function(){var t=this;this.checkList()&&(console.log("submit",this.edit,this.form),o.i(s.b)({title:"确定发布该版本信息？",confirm_btn:"发布"},function(){t.$emit("add",t.form)}))},checkList:function(){return 0==this.form.versionno.trim().length?(this.$message.error("版本号不能为空"),!1):-1==this.form.versionno.search(/^[0-9a-zA-Z\.]*$/g)?(this.$message.error("提示标题格式错误"),!1):0==this.form.prompttitle.trim().length?(this.$message.error("提示标题不能为空"),!1):0==this.form.promptcontent.trim().length?(this.$message.error("提示内容不能为空"),!1):0!=this.form.link.trim().length||(this.$message.error("下载链接不能为空"),!1)},handleClose:function(){console.log("handleClose",this.edit,this.form),this.form=i()({},this.edit),this.$emit("close")},getTime:function(t,e){this.form[e]=t}}}},DTzv:function(t,e,o){"use strict";var n=o("b55d"),i=o("I732"),s=o("CjZ7");e.a={name:"",components:{VersionEdit:n.a},data:function(){return{editVisible:!1,editData:{},loading:!1,version:[]}},created:function(){this.updateList()},methods:{versionAdd:function(){console.log("versionAdd"),this.editData={versionno:"",updatetime:"",updateperson:"",prompttitle:"",promptcontent:"",link:"",channel:"1",isconstraint:"2",status:"2"},this.editVisible=!0},versionEdit:function(t,e){console.log("edit"),this.editData=e,this.editVisible=!0},updateList:function(){var t=this;this.loading=!0,this.$http.get(s.a.getVersionList).then(function(e){o.i(i.a)(e,"","数据获取失败")&&(t.version=e.list||[]),t.loading=!1}).catch(function(e){t.loading=!1,t.$message.error("获取数据失败")})},versionDel:function(t,e){var n=this;console.log("del");var a={versionid:e.versionid};o.i(i.b)({},function(){n.$http.delete(s.a.deleteVersion+"?"+o.i(i.c)(a)).then(function(t){o.i(i.a)(t,"删除成功","删除失败")&&n.updateList()}).catch(function(t){n.$message.success("删除失败")})})},addVersion:function(t){var e=this;console.log(t,"333");var n=localStorage.getItem("user"),a=o.i(i.d)(new Date,"YYYY-MM-dd HH:mm:ss"),l={versionno:t.versionno,updatetime:a,updateperson:n,prompttitle:t.prompttitle,promptcontent:t.promptcontent,link:t.link,channel:t.channel,isconstraint:t.isconstraint,status:t.status};this.$http.post(s.a.addVersion,l).then(function(t){o.i(i.a)(t,"添加成功","添加失败")&&(e.updateList(),e.closeEdit())}).catch(function(t){console.log(t),e.$message.error("添加失败")})},closeEdit:function(){this.editVisible=!1}}}},HKpx:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"version"},[o("el-button",{staticClass:"add",attrs:{type:"primary",size:"mini"},on:{click:t.versionAdd}},[t._v("发布新版本")]),t._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"table",attrs:{border:"",data:t.version,"element-loading-text":"拼命加载中"}},[o("el-table-column",{attrs:{label:"版本号",prop:"versionno",width:"70",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{label:"更新时间",prop:"updatetime",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{label:"更新人员",prop:"updateperson",width:"120",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{label:"提示标题",prop:"prompttitle",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{label:"更新提示内容",prop:"promptcontent",align:"center",width:"180"}}),t._v(" "),o("el-table-column",{attrs:{label:"下载链接",prop:"link",align:"center",width:"180"}}),t._v(" "),o("el-table-column",{attrs:{label:"渠道",prop:"channel",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s("1"==e.row.channel?"安卓":"")+"\n        "+t._s("2"==e.row.channel?"IOS":"")+"\n      ")]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"是否强制",prop:"isconstraint",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s("1"==e.row.isconstraint?"强制更新":"")+"\n        "+t._s("2"==e.row.isconstraint?"可选更新":"")+"\n        "+t._s("3"==e.row.isconstraint?"不推送更新":"")+"\n      ")]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"状态",prop:"status",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s("1"==e.row.status?"未发布":"")+"\n        "+t._s("2"==e.row.status?"已发布":"")+"\n      ")]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"操作",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(o){t.versionDel(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),o("version-edit",{attrs:{edit:t.editData,visible:t.editVisible},on:{add:t.addVersion,close:t.closeEdit}})],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},Kqn9:function(t,e,o){var n=o("v7C6");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("8bSs")("760e6c00",n,!0)},ZWaL:function(t,e,o){var n=o("klB0");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("8bSs")("1205e330",n,!0)},b55d:function(t,e,o){"use strict";function n(t){o("ZWaL")}var i=o("4SMA"),s=o("t0WW"),a=o("8AGX"),l=n,r=a(i.a,s.a,!1,l,"data-v-161d6634",null);e.a=r.exports},keIm:function(t,e,o){"use strict";function n(t){o("Kqn9")}Object.defineProperty(e,"__esModule",{value:!0});var i=o("DTzv"),s=o("HKpx"),a=o("8AGX"),l=n,r=a(i.a,s.a,!1,l,"data-v-14f2ae48",null);e.default=r.exports},klB0:function(t,e,o){e=t.exports=o("BkJT")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"version-edit.vue",sourceRoot:""}])},t0WW:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{staticClass:"version-edit",attrs:{visible:t.visible,"before-close":t.handleClose,title:"版本管理编辑"},on:{"update:visible":function(e){t.visible=e}}},[o("el-form",{ref:"form",attrs:{model:t.form}},[o("el-form-item",{attrs:{label:"版本号：","label-width":t.formLabelWidth}},[o("el-input",{attrs:{size:"small",placeholder:"请输入版本号","auto-complete":"off"},model:{value:t.form.versionno,callback:function(e){t.$set(t.form,"versionno",e)},expression:"form.versionno"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"渠道：","label-width":t.formLabelWidth}},[o("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:t.form.channel,callback:function(e){t.$set(t.form,"channel",e)},expression:"form.channel"}},t._l(t.options,function(t){return o("el-option",{key:t.val,attrs:{label:t.label,value:t.val}})}))],1),t._v(" "),o("el-form-item",{attrs:{label:"提示标题：","label-width":t.formLabelWidth}},[o("el-input",{attrs:{size:"small",placeholder:"请输入标题","auto-complete":"off"},model:{value:t.form.prompttitle,callback:function(e){t.$set(t.form,"prompttitle",e)},expression:"form.prompttitle"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"提示内容：","label-width":t.formLabelWidth}},[o("el-input",{attrs:{autosize:{minRows:2,maxRows:8},type:"textarea",size:"small",placeholder:"请输入提示内容","auto-complete":"off"},model:{value:t.form.promptcontent,callback:function(e){t.$set(t.form,"promptcontent",e)},expression:"form.promptcontent"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"下载链接：","label-width":t.formLabelWidth,prop:"start_time"}},[o("el-input",{attrs:{size:"small",placeholder:"请输入下载链接","auto-complete":"off"},model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"是否强制：","label-width":t.formLabelWidth}},[o("el-radio",{attrs:{label:"1"},model:{value:t.form.isconstraint,callback:function(e){t.$set(t.form,"isconstraint",e)},expression:"form.isconstraint"}},[t._v("强制更新")]),t._v(" "),o("el-radio",{attrs:{label:"2"},model:{value:t.form.isconstraint,callback:function(e){t.$set(t.form,"isconstraint",e)},expression:"form.isconstraint"}},[t._v("可选更新")]),t._v(" "),o("el-radio",{attrs:{label:"3"},model:{value:t.form.isconstraint,callback:function(e){t.$set(t.form,"isconstraint",e)},expression:"form.isconstraint"}},[t._v("不推送更新")])],1),t._v(" "),o("el-form-item",{attrs:{label:"状态：","label-width":t.formLabelWidth}},[o("el-radio",{attrs:{label:"1"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[t._v("未发布")]),t._v(" "),o("el-radio",{attrs:{label:"2"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[t._v("已发布")])],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"small"},on:{click:t.handleClose}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},v7C6:function(t,e,o){e=t.exports=o("BkJT")(!0),e.push([t.i,".version[data-v-14f2ae48]{text-align:left}.version .add[data-v-14f2ae48]{padding-left:15px;padding-right:15px}","",{version:3,sources:["C:/Users/kivlin/Desktop/final_exam/evaluation_web/src/pages/sys/version.vue"],names:[],mappings:"AACA,0BACE,eAAiB,CAClB,AACD,+BACI,kBAAmB,AACnB,kBAAoB,CACvB",file:"version.vue",sourcesContent:["\n.version[data-v-14f2ae48] {\n  text-align: left;\n}\n.version .add[data-v-14f2ae48] {\n    padding-left: 15px;\n    padding-right: 15px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=6.5f094e547d23c86cd70b.js.map