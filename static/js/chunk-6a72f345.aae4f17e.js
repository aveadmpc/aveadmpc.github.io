(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a72f345"],{3399:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a=function(e){return Object(o["pushScopeId"])("data-v-ce62a248"),e=e(),Object(o["popScopeId"])(),e},i={class:"gray",style:{width:"100%"}},c={class:"card-header"},l=a((function(){return Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("span",null,"主流币管理")],-1)})),r=Object(o["createTextVNode"])("添加"),d={style:{display:"inline-flex","align-items":"center"}},u=["src"],s=Object(o["createTextVNode"])("删除"),b=Object(o["createTextVNode"])("取消"),h=Object(o["createTextVNode"])("确认");function f(e,t,n,a,f,m){var O=Object(o["resolveComponent"])("el-button"),p=Object(o["resolveComponent"])("el-tab-pane"),j=Object(o["resolveComponent"])("el-tabs"),g=Object(o["resolveComponent"])("el-table-column"),C=Object(o["resolveComponent"])("el-table"),k=Object(o["resolveComponent"])("el-pagination"),V=Object(o["resolveComponent"])("el-card"),v=Object(o["resolveComponent"])("el-col"),w=Object(o["resolveComponent"])("el-row"),N=Object(o["resolveComponent"])("el-input"),y=Object(o["resolveComponent"])("el-form-item"),x=Object(o["resolveComponent"])("el-option"),T=Object(o["resolveComponent"])("el-select"),L=Object(o["resolveComponent"])("el-form"),_=Object(o["resolveComponent"])("el-dialog"),M=Object(o["resolveDirective"])("loading");return Object(o["openBlock"])(),Object(o["createElementBlock"])("main",i,[Object(o["createVNode"])(w,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(v,{span:24,style:{"margin-bottom":"10px"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(V,{class:"box-card",shadow:"never"},{header:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,[l,Object(o["createVNode"])(O,{class:"button",type:"primary",link:"",onClick:Object(o["withModifiers"])(m.handelAdd,["stop"])},{default:Object(o["withCtx"])((function(){return[r]})),_:1},8,["onClick"])])]})),default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(j,{modelValue:f.activeChain,"onUpdate:modelValue":t[0]||(t[0]=function(e){return f.activeChain=e}),onTabChange:m.handleTabChange},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(p,{label:"全部",name:""}),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(f.chainList,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:t,label:e.net_name,name:e.net_name},null,8,["label","name"])})),128))]})),_:1},8,["modelValue","onTabChange"]),Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(C,{data:f.tableData,stripe:"",style:{width:"100%"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(g,{prop:"symbol",label:"symbol",width:"150"},{default:Object(o["withCtx"])((function(t){var n=t.row;return[Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("img",{src:e.$f.formatIcon(n.token,n.chain),width:"30",alt:"",style:{"margin-right":"10px","border-radius":"50%",border:"1px solid #ddd"}},null,8,u),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(n.symbol),1)])]})),_:1}),Object(o["createVNode"])(g,{prop:"token",label:"Token Address"}),Object(o["createVNode"])(g,{prop:"chain",label:"链"}),Object(o["createVNode"])(g,{label:"操作",width:"250",align:"center",fixed:"right"},{default:Object(o["withCtx"])((function(e){var t=e.row;return[Object(o["createVNode"])(O,{type:"danger",loading:f.updateLoading,onClick:Object(o["withModifiers"])((function(e){return m.deleteMainToken(t)}),["stop"])},{default:Object(o["withCtx"])((function(){return[s]})),_:2},1032,["loading","onClick"])]})),_:1})]})),_:1},8,["data"])),[[M,f.dataLoading]]),Object(o["createVNode"])(k,{style:{display:"flex",width:"100%","justify-content":"center",margin:"30px 0 0 0"},currentPage:f.pageNO,"onUpdate:currentPage":t[1]||(t[1]=function(e){return f.pageNO=e}),"page-size":f.pageSize,"page-sizes":[10,20,30,50,100],background:"",layout:"total, sizes, prev, pager, next, jumper",total:f.total,onSizeChange:m.handleSizeChange,onCurrentChange:m.handleCurrentChange},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"])]})),_:1})]})),_:1})]})),_:1}),Object(o["createVNode"])(_,{modelValue:f.dialogVisible,"onUpdate:modelValue":t[5]||(t[5]=function(e){return f.dialogVisible=e}),title:"添加",width:"30%"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(L,{model:f.form,rules:f.rules,ref:"form",onSubmit:Object(o["withModifiers"])(m.addMainToken,["prevent"])},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(y,{label:"token 地址",prop:"token"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(N,{modelValue:f.form.token,"onUpdate:modelValue":t[2]||(t[2]=function(e){return f.form.token=e}),clearable:""},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(y,{label:"链",prop:"chain"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(T,{modelValue:f.form.chain,"onUpdate:modelValue":t[3]||(t[3]=function(e){return f.form.chain=e}),filterable:"",placeholder:"Select"},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(f.chainList,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(x,{key:e.net_name,label:e.net_name,value:e.net_name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(o["createVNode"])(y,{label:"symbol",prop:"symbol"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(f.form.symbol),1)]})),_:1}),Object(o["createVNode"])(y,{label:""},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{onClick:t[4]||(t[4]=function(e){return f.dialogVisible=!1})},{default:Object(o["withCtx"])((function(){return[b]})),_:1}),Object(o["createVNode"])(O,{type:"primary","native-type":"submit",loading:f.addLoading},{default:Object(o["withCtx"])((function(){return[h]})),_:1},8,["loading"])]})),_:1})]})),_:1},8,["model","rules","onSubmit"])]})),_:1},8,["modelValue"])])}n("d3b7");var m=n("365c"),O={name:"MainToken",data:function(){return{form:{token:"",chain:"",symbol:""},rules:{token:[{required:!0,message:"必填项",trigger:"blur"}],chain:[{required:!0,message:"必填项",trigger:"blur"}]},tableData:[],dataLoading:!1,addLoading:!1,updateLoading:!1,dialogVisible:!1,pageNO:1,pageSize:20,total:100,activeChain:"",chainList:[]}},computed:{},watch:{"form.token":function(){this.form.token&&this.form.chain&&this.getTokenInfo(this.form.token+"-"+this.form.chain)},"form.chain":function(){this.form.token&&this.form.chain&&this.getTokenInfo(this.form.token+"-"+this.form.chain)}},created:function(){this.getMainTokenList(),this.getMainTokensChains()},methods:{handleTabChange:function(e){this.pageNO=1,this.pageSize=10,this.getMainTokenList()},getTokenInfo:function(e){var t=this;this.addLoading=!0,Object(m["Vb"])(e).then((function(e){var n;t.form.symbol=(null===e||void 0===e||null===(n=e.name_space)||void 0===n?void 0:n.symbol)||""})).catch((function(){t.form.symbol=""})).finally((function(){t.addLoading=!1}))},getMainTokensChains:function(){var e=this;Object(m["xb"])().then((function(t){e.chainList=t}))},getMainTokenList:function(){var e=this;this.dataLoading=!0,Object(m["wb"])(this.pageNO,this.pageSize,this.activeChain).then((function(t){e.tableData=t.tokens,e.total=t.tokens_count})).catch((function(){e.tableData=[]})).finally((function(){e.dataLoading=!1}))},handleCurrentChange:function(e){this.pageNO=e,this.getMainTokenList()},handleSizeChange:function(e){this.pageSize=e,this.getMainTokenList()},handelAdd:function(){this.form.chain=this.activeChain,this.dialogVisible=!0},addMainToken:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.addLoading=!0,Object(m["l"])(e.form).then((function(t){e.$message.success("添加成功"),e.dialogVisible=!1,e.getMainTokenList()})).catch((function(){e.$message.error("添加失败")})).finally((function(){e.addLoading=!1})))}))},deleteMainToken:function(e){var t=this;this.$confirm("确认执行此操作","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.updateLoading=!0,Object(m["P"])({token:e.token,chain:e.chain}).then((function(e){t.$message.success("操作成功"),t.getMainTokenList()})).catch((function(){t.$message.error("操作失败")})).finally((function(){t.updateLoading=!1}))}))}}},p=(n("a4e8"),n("6b0d")),j=n.n(p);const g=j()(O,[["render",f],["__scopeId","data-v-ce62a248"]]);t["default"]=g},a4e8:function(e,t,n){"use strict";n("cc46")},cc46:function(e,t,n){}}]);