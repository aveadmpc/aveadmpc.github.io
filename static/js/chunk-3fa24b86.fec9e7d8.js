(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fa24b86"],{"5cfa":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a=function(e){return Object(o["pushScopeId"])("data-v-78553ef6"),e=e(),Object(o["popScopeId"])(),e},i={class:"gray",style:{width:"100%"}},c={class:"card-header"},r=a((function(){return Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("span",null,"SwapFinder 白名单管理")],-1)})),l=Object(o["createTextVNode"])("添加"),d={style:{display:"inline-flex","align-items":"center"}},u=["src"],s=Object(o["createTextVNode"])("删除"),b=Object(o["createTextVNode"])("取消"),f=Object(o["createTextVNode"])("确认");function h(e,t,n,a,h,p){var m=Object(o["resolveComponent"])("el-button"),g=Object(o["resolveComponent"])("el-tab-pane"),O=Object(o["resolveComponent"])("el-tabs"),j=Object(o["resolveComponent"])("el-table-column"),C=Object(o["resolveComponent"])("el-table"),w=Object(o["resolveComponent"])("el-pagination"),V=Object(o["resolveComponent"])("el-card"),k=Object(o["resolveComponent"])("el-col"),v=Object(o["resolveComponent"])("el-row"),N=Object(o["resolveComponent"])("el-input"),y=Object(o["resolveComponent"])("el-form-item"),x=Object(o["resolveComponent"])("el-form"),S=Object(o["resolveComponent"])("el-dialog"),T=Object(o["resolveDirective"])("loading");return Object(o["openBlock"])(),Object(o["createElementBlock"])("main",i,[Object(o["createVNode"])(v,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(k,{span:24,style:{"margin-bottom":"10px"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(V,{class:"box-card",shadow:"never"},{header:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,[r,Object(o["createVNode"])(m,{class:"button",type:"primary",link:"",onClick:Object(o["withModifiers"])(p.handelAdd,["stop"])},{default:Object(o["withCtx"])((function(){return[l]})),_:1},8,["onClick"])])]})),default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{modelValue:h.activeChain,"onUpdate:modelValue":t[0]||(t[0]=function(e){return h.activeChain=e}),onTabChange:p.handleTabChange},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(g,{label:"全部",name:""}),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(h.chainList,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(g,{key:t,label:e,name:e},null,8,["label","name"])})),128))]})),_:1},8,["modelValue","onTabChange"]),Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(C,{data:h.tableData,stripe:"",style:{width:"100%"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(j,{prop:"symbol",label:"symbol",width:"150"},{default:Object(o["withCtx"])((function(t){var n=t.row;return[Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("img",{src:e.$f.formatIcon(n.token,n.chain),width:"30",alt:"",style:{"margin-right":"10px","border-radius":"50%",border:"1px solid #ddd"}},null,8,u),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(n.symbol),1)])]})),_:1}),Object(o["createVNode"])(j,{prop:"token",label:"Token Address"}),Object(o["createVNode"])(j,{prop:"chain",label:"链"}),Object(o["createVNode"])(j,{label:"操作",width:"250",align:"center",fixed:"right"},{default:Object(o["withCtx"])((function(e){var t=e.row;return[Object(o["createVNode"])(m,{type:"danger",loading:h.updateLoading,onClick:Object(o["withModifiers"])((function(e){return p.deleteSwapToken(t)}),["stop"])},{default:Object(o["withCtx"])((function(){return[s]})),_:2},1032,["loading","onClick"])]})),_:1})]})),_:1},8,["data"])),[[T,h.dataLoading]]),Object(o["createVNode"])(w,{style:{display:"flex",width:"100%","justify-content":"center",margin:"30px 0 0 0"},currentPage:h.pageNO,"onUpdate:currentPage":t[1]||(t[1]=function(e){return h.pageNO=e}),"page-size":h.pageSize,"page-sizes":[10,20,30,50,100],background:"",layout:"total, sizes, prev, pager, next, jumper",total:h.total,onSizeChange:p.handleSizeChange,onCurrentChange:p.handleCurrentChange},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"])]})),_:1})]})),_:1})]})),_:1}),Object(o["createVNode"])(S,{modelValue:h.dialogVisible,"onUpdate:modelValue":t[5]||(t[5]=function(e){return h.dialogVisible=e}),title:"添加",width:"30%"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(x,{model:h.form,rules:h.rules,ref:"form",onSubmit:Object(o["withModifiers"])(p.addSwapToken,["prevent"])},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(y,{label:"token 地址",prop:"token"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(N,{modelValue:h.form.token,"onUpdate:modelValue":t[2]||(t[2]=function(e){return h.form.token=e}),clearable:""},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(y,{label:"链",prop:"chain"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(N,{modelValue:h.form.chain,"onUpdate:modelValue":t[3]||(t[3]=function(e){return h.form.chain=e}),clearable:""},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(y,{label:"symbol",prop:"symbol"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(h.form.symbol),1)]})),_:1}),Object(o["createVNode"])(y,{label:""},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(m,{onClick:t[4]||(t[4]=function(e){return h.dialogVisible=!1})},{default:Object(o["withCtx"])((function(){return[b]})),_:1}),Object(o["createVNode"])(m,{type:"primary","native-type":"submit",loading:h.addLoading},{default:Object(o["withCtx"])((function(){return[f]})),_:1},8,["loading"])]})),_:1})]})),_:1},8,["model","rules","onSubmit"])]})),_:1},8,["modelValue"])])}n("d3b7");var p=n("365c"),m={name:"SwapTokens",data:function(){return{form:{token:"",chain:"",symbol:""},rules:{token:[{required:!0,message:"必填项",trigger:"blur"}],chain:[{required:!0,message:"必填项",trigger:"blur"}]},tableData:[],dataLoading:!1,addLoading:!1,updateLoading:!1,dialogVisible:!1,pageNO:1,pageSize:20,total:100,activeChain:"",chainList:["eth","bsc","oec","heco"]}},computed:{},watch:{"form.token":function(){this.form.token&&this.form.chain&&this.getTokenInfo(this.form.token+"-"+this.form.chain)},"form.chain":function(){this.form.token&&this.form.chain&&this.getTokenInfo(this.form.token+"-"+this.form.chain)}},created:function(){this.getSwapTokenList()},methods:{handleTabChange:function(e){this.pageNO=1,this.pageSize=10,this.getSwapTokenList()},getTokenInfo:function(e){var t=this;this.addLoading=!0,Object(p["Vb"])(e).then((function(e){var n;t.form.symbol=(null===e||void 0===e||null===(n=e.name_space)||void 0===n?void 0:n.symbol)||""})).catch((function(){t.form.symbol=""})).finally((function(){t.addLoading=!1}))},getSwapTokenList:function(){var e=this;this.dataLoading=!0,Object(p["Tb"])(this.pageNO,this.pageSize,this.activeChain).then((function(t){e.chainList=t.all_chain,e.tableData=t.tokens,e.total=t.tokens_count})).catch((function(){e.tableData=[]})).finally((function(){e.dataLoading=!1}))},handleCurrentChange:function(e){this.pageNO=e,this.getSwapTokenList()},handleSizeChange:function(e){this.pageSize=e,this.getSwapTokenList()},handelAdd:function(){this.form.chain=this.activeChain,this.dialogVisible=!0},addSwapToken:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.addLoading=!0,Object(p["w"])(e.form).then((function(t){e.$message.success("添加成功"),e.dialogVisible=!1,e.getSwapTokenList()})).catch((function(){e.$message.error("添加失败")})).finally((function(){e.addLoading=!1})))}))},deleteSwapToken:function(e){var t=this;this.$confirm("确认执行此操作","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.updateLoading=!0,Object(p["V"])({token:e.token,chain:e.chain}).then((function(e){t.$message.success("操作成功"),t.getSwapTokenList()})).catch((function(){t.$message.error("操作失败")})).finally((function(){t.updateLoading=!1}))}))}}},g=(n("d3b73"),n("6b0d")),O=n.n(g);const j=O()(m,[["render",h],["__scopeId","data-v-78553ef6"]]);t["default"]=j},d3b73:function(e,t,n){"use strict";n("fc6b")},fc6b:function(e,t,n){}}]);