webpackJsonp([14],{"6gWo":function(e,t,a){t=e.exports=a("BkJT")(!0),t.push([e.i,".channel[data-v-f8ee9eec]{text-align:left}.channel .add[data-v-f8ee9eec]{padding-left:15px;padding-right:15px}","",{version:3,sources:["C:/Users/kivlin/Desktop/final_exam/evaluation_web/src/pages/deal/channel.vue"],names:[],mappings:"AACA,0BACE,eAAiB,CAClB,AACD,+BACI,kBAAmB,AACnB,kBAAoB,CACvB",file:"channel.vue",sourcesContent:["\n.channel[data-v-f8ee9eec] {\n  text-align: left;\n}\n.channel .add[data-v-f8ee9eec] {\n    padding-left: 15px;\n    padding-right: 15px;\n}\n"],sourceRoot:""}])},BLfE:function(e,t,a){t=e.exports=a("BkJT")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"channel-edit.vue",sourceRoot:""}])},Fptg:function(e,t,a){"use strict";var i=a("aA9S"),n=a.n(i);a("I732");t.a={name:"",props:{visible:Boolean,edit:Object},watch:{edit:function(e){console.log("newVal",e),this.form=n()({},e)}},data:function(){return{formLabelWidth:"120px",form:{}}},methods:{submit:function(){this.checkList()&&(console.log("submit",this.edit,this.form),this.$emit("updateOrAdd",this.form))},checkList:function(){return 0==this.form.bankname.trim().length?(this.$message.error("交易渠道不能为空"),!1):!isNaN(Number(this.form.singletradinglimit))&&!isNaN(Number(this.form.onedaytradinglimit))||(this.$message.error("交易限额格式错误"),!1)},handleClose:function(){console.log("handleClose",this.edit,this.form),this.form=n()({},this.edit),this.$emit("close")},getTime:function(e,t){this.form[t]=e}}}},GBql:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"marquee-edit",attrs:{visible:e.visible,"before-close":e.handleClose,title:"提示性文字编辑"},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"交易渠道名称：","label-width":e.formLabelWidth}},[a("el-input",{attrs:{size:"small",placeholder:"","auto-complete":"off"},model:{value:e.form.bankname,callback:function(t){e.$set(e.form,"bankname",t)},expression:"form.bankname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"单比交易限额：","label-width":e.formLabelWidth}},[a("el-input",{attrs:{size:"small",placeholder:"","auto-complete":"off"},model:{value:e.form.singletradinglimit,callback:function(t){e.$set(e.form,"singletradinglimit",t)},expression:"form.singletradinglimit"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"单日交易限制：","label-width":e.formLabelWidth}},[a("el-input",{attrs:{size:"small",placeholder:"","auto-complete":"off"},model:{value:e.form.onedaytradinglimit,callback:function(t){e.$set(e.form,"onedaytradinglimit",t)},expression:"form.onedaytradinglimit"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:e.handleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.submit}},[e._v("确 认")])],1)],1)},n=[],l={render:i,staticRenderFns:n};t.a=l},Xra4:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"channel"},[a("el-button",{staticClass:"add",attrs:{type:"primary",size:"mini"},on:{click:e.channelAdd}},[e._v("新增银行卡")]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table",attrs:{border:"",data:e.channel,"element-loading-text":"拼命加载中"}},[a("el-table-column",{attrs:{label:"序号",prop:"traid",width:"140",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"银行名称",prop:"bankname",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"单笔交易限额",prop:"singletradinglimit",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"单日交易限额",prop:"onedaytradinglimit",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.channelEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){e.channelDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"block",staticStyle:{"text-align":"right"}},[a("el-pagination",{attrs:{"current-page":e.pageInfo.pageNum,"page-sizes":e.pageInfo.pageSizes,"page-size":e.pageInfo.pageSize,total:e.pageInfo.totalPage,layout:"total, sizes,jumper ,prev, pager, next "},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("channel-edit",{attrs:{edit:e.editData,visible:e.editVisible},on:{updateOrAdd:e.updateOrAdd,close:e.closeEdit}})],1)},n=[],l={render:i,staticRenderFns:n};t.a=l},ZzRH:function(e,t,a){"use strict";function i(e){a("kkOi")}var n=a("Fptg"),l=a("GBql"),o=a("8AGX"),s=i,r=o(n.a,l.a,!1,s,"data-v-6ad415f9",null);t.a=r.exports},"kO3/":function(e,t,a){var i=a("6gWo");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("8bSs")("7d3267ba",i,!0)},kkOi:function(e,t,a){var i=a("BLfE");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("8bSs")("5f779a9a",i,!0)},mY2j:function(e,t,a){"use strict";var i=a("ZzRH"),n=a("I732"),l=a("CjZ7");t.a={name:"",components:{ChannelEdit:i.a},data:function(){return{editVisible:!1,editData:{},loading:!1,channel:[],pageInfo:{pageNum:1,pageSize:10,totalPage:10,pageSizes:[10,20,50,100]}}},created:function(){this.updateList()},methods:{channelAdd:function(){this.editData={bankname:"",singletradinglimit:"",onedaytradinglimit:""},this.editVisible=!0},channelEdit:function(e,t){console.log("edit"),this.editData=t,this.editVisible=!0},channelDel:function(e,t){var i=this;console.log("del");var o={traid:t.traid};a.i(n.b)({},function(){i.$http.delete(l.a.deleteChannel+"?"+a.i(n.c)(o)).then(function(e){a.i(n.a)(e,"删除成功","删除失败")&&i.updateList()}).catch(function(e){i.$message.success("删除失败")})})},handleSizeChange:function(e){this.pageInfo.pageSize=e,this.updateList()},handleCurrentChange:function(e){this.pageInfo.pageNum=e,this.updateList()},updateList:function(){var e=this;console.log("updateList");this.pageInfo.pageNum,this.pageInfo.pageSize;this.loading=!0,this.$http.get(l.a.getChannelList).then(function(t){a.i(n.a)(t,"","数据获取失败")&&(e.channel=t.results||[],e.pageInfo.totalPage=t.total),e.loading=!1}).catch(function(t){e.loading=!1,e.$message.error("获取数据失败")})},updateOrAdd:function(e){var t=this;console.log(e);var i={bankname:e.bankname,singletradinglimit:e.singletradinglimit,onedaytradinglimit:e.onedaytradinglimit};e.traid?(i.traid=e.traid,this.$http.put(l.a.updateChannel,i).then(function(e){a.i(n.a)(e,"修改成功","修改失败")&&(t.updateList(),t.closeEdit())}).catch(function(e){console.log(e),t.$message.error("修改失败")})):this.$http.post(l.a.addChannel,i).then(function(e){a.i(n.a)(e,"添加成功","添加失败")&&(t.updateList(),t.closeEdit())}).catch(function(e){console.log(e),t.$message.error("添加失败")})},closeEdit:function(){this.editVisible=!1}}}},zJvu:function(e,t,a){"use strict";function i(e){a("kO3/")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("mY2j"),l=a("Xra4"),o=a("8AGX"),s=i,r=o(n.a,l.a,!1,s,"data-v-f8ee9eec",null);t.default=r.exports}});
//# sourceMappingURL=14.e554b140774e453aa79b.js.map