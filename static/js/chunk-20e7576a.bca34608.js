(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20e7576a"],{"3dcd":function(e,t,o){},e3f4:function(e,t,o){"use strict";o("3dcd")},fb80:function(e,t,o){"use strict";o.r(t);var a=o("7a23"),n=function(e){return Object(a["pushScopeId"])("data-v-4a3d3d59"),e=e(),Object(a["popScopeId"])(),e},r={class:"gray",style:{width:"100%"}},c={class:"card-header"},i=n((function(){return Object(a["createElementVNode"])("span",null,"热搜榜广告管理",-1)})),l={style:{display:"inline-block","margin-left":"20px","font-size":"14px",color:"#888"}},d=Object(a["createTextVNode"])("添加"),u=n((function(){return Object(a["createElementVNode"])("div",null,null,-1)})),s=Object(a["createTextVNode"])("生效"),b=Object(a["createTextVNode"])("失效"),f=Object(a["createTextVNode"])("显示"),m=Object(a["createTextVNode"])("不显示"),p=Object(a["createTextVNode"])("忽略"),j=Object(a["createTextVNode"])("不忽略"),O=Object(a["createTextVNode"])("编辑"),h=Object(a["createTextVNode"])("删除"),V=Object(a["createTextVNode"])(" $ "),g=n((function(){return Object(a["createElementVNode"])("span",null,"* 数字越小显示越靠前",-1)})),w={class:"dialog-footer"},_=Object(a["createTextVNode"])("取 消"),x=Object(a["createTextVNode"])("确 定"),v=Object(a["createTextVNode"])("确 定");function k(e,t,o,n,k,C){var N=Object(a["resolveComponent"])("el-button"),y=Object(a["resolveComponent"])("el-table-column"),T=Object(a["resolveComponent"])("el-tag"),B=Object(a["resolveComponent"])("el-rate"),D=Object(a["resolveComponent"])("el-switch"),$=Object(a["resolveComponent"])("el-table"),L=Object(a["resolveComponent"])("el-card"),U=Object(a["resolveComponent"])("el-col"),A=Object(a["resolveComponent"])("el-row"),I=Object(a["resolveComponent"])("el-input"),E=Object(a["resolveComponent"])("el-form-item"),M=Object(a["resolveComponent"])("el-date-picker"),S=Object(a["resolveComponent"])("el-input-number"),q=Object(a["resolveComponent"])("el-form"),R=Object(a["resolveComponent"])("el-dialog");return Object(a["openBlock"])(),Object(a["createElementBlock"])("main",r,[Object(a["createVNode"])(A,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(U,{span:24,style:{"margin-bottom":"10px"}},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(L,{class:"box-card",shadow:"never"},{header:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",null,[i,Object(a["createElementVNode"])("span",l,"广告总收入：$ "+Object(a["toDisplayString"])(C.totalFee),1)]),Object(a["createVNode"])(N,{class:"button",type:"primary",link:"",onClick:Object(a["withModifiers"])(C.handelAdd,["stop"])},{default:Object(a["withCtx"])((function(){return[d]})),_:1},8,["onClick"])])]})),default:Object(a["withCtx"])((function(){return[u,Object(a["createVNode"])($,{data:k.tableData,stripe:"",style:{width:"100%"}},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(y,{prop:"front_show_index",label:"位置",width:"80"}),Object(a["createVNode"])(y,{prop:"address",label:"token","min-width":"170"}),Object(a["createVNode"])(y,{prop:"chain",label:"chain"}),Object(a["createVNode"])(y,{prop:"symbol",label:"symbol"}),Object(a["createVNode"])(y,{prop:"create_time",label:"创建时间","min-width":"160"},{default:Object(a["withCtx"])((function(t){var o=t.row;return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$f.formatDate(o.create_time)),1)]})),_:1}),Object(a["createVNode"])(y,{label:"生效时间范围","min-width":"170"},{default:Object(a["withCtx"])((function(t){var o=t.row;return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$f.formatDate(o.start_time))+" ~ "+Object(a["toDisplayString"])(e.$f.formatDate(o.end_time)),1)]})),_:1}),Object(a["createVNode"])(y,{prop:"fee",label:"广告费用($)",width:"200"}),Object(a["createVNode"])(y,{prop:"tx_hash",label:"交易哈希",width:"200"}),Object(a["createVNode"])(y,{prop:"",label:"是否生效"},{default:Object(a["withCtx"])((function(e){var t=e.row;return[1e3*t.start_time<=Date.now()&&1e3*t.end_time>=Date.now()?(Object(a["openBlock"])(),Object(a["createBlock"])(T,{key:0,type:"success",effect:"dark"},{default:Object(a["withCtx"])((function(){return[s]})),_:1})):(Object(a["openBlock"])(),Object(a["createBlock"])(T,{key:1,type:"danger",effect:"dark"},{default:Object(a["withCtx"])((function(){return[b]})),_:1}))]})),_:1}),Object(a["createVNode"])(y,{prop:"",label:"是否显示广告标识"},{default:Object(a["withCtx"])((function(e){var t=e.row;return[1===t.is_showasadv?(Object(a["openBlock"])(),Object(a["createBlock"])(T,{key:0,effect:"dark"},{default:Object(a["withCtx"])((function(){return[f]})),_:1})):(Object(a["openBlock"])(),Object(a["createBlock"])(T,{key:1,effect:"light"},{default:Object(a["withCtx"])((function(){return[m]})),_:1}))]})),_:1}),Object(a["createVNode"])(y,{prop:"",label:"是否忽略跌幅配置"},{default:Object(a["withCtx"])((function(e){var t=e.row;return[1===t.is_ignorepricechange?(Object(a["openBlock"])(),Object(a["createBlock"])(T,{key:0,effect:"dark",type:"danger"},{default:Object(a["withCtx"])((function(){return[p]})),_:1})):(Object(a["openBlock"])(),Object(a["createBlock"])(T,{key:1,effect:"light"},{default:Object(a["withCtx"])((function(){return[j]})),_:1}))]})),_:1}),Object(a["createVNode"])(y,{label:"是否热门",align:"center",width:"150"},{default:Object(a["withCtx"])((function(e){var t=e.row;return[t.hot_rank?(Object(a["openBlock"])(),Object(a["createBlock"])(B,{key:0,modelValue:t.hot_rank,"onUpdate:modelValue":function(e){return t.hot_rank=e},size:"large",clearable:"",max:3,disabled:""},null,8,["modelValue","onUpdate:modelValue"])):Object(a["createCommentVNode"])("",!0)]})),_:1}),Object(a["createVNode"])(y,{prop:"remark",label:"备注"}),Object(a["createVNode"])(y,{label:"状态",width:"200",align:"center"},{default:Object(a["withCtx"])((function(e){var t=e.row;return[Object(a["createVNode"])(D,{modelValue:t.is_delete,"onUpdate:modelValue":function(e){return t.is_delete=e},"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"展示","inactive-text":"不展示","active-value":0,"inactive-value":1,loading:k.loading[t.id],onClick:Object(a["withModifiers"])((function(e){return C.handelState(t)}),["stop"])},null,8,["modelValue","onUpdate:modelValue","loading","onClick"])]})),_:1}),Object(a["createVNode"])(y,{label:"操作",width:100==C.role?150:70,align:"center",fixed:"right"},{default:Object(a["withCtx"])((function(e){var t=e.row;return[Object(a["createVNode"])(N,{type:"primary",link:"",onClick:Object(a["withModifiers"])((function(e){return C.handelEdit(t)}),["stop"])},{default:Object(a["withCtx"])((function(){return[O]})),_:2},1032,["onClick"]),100==C.role?(Object(a["openBlock"])(),Object(a["createBlock"])(N,{key:0,type:"primary",link:"",onClick:Object(a["withModifiers"])((function(e){return C.handelRemove(t)}),["stop"])},{default:Object(a["withCtx"])((function(){return[h]})),_:2},1032,["onClick"])):Object(a["createCommentVNode"])("",!0)]})),_:1},8,["width"])]})),_:1},8,["data"])]})),_:1})]})),_:1})]})),_:1}),Object(a["createVNode"])(R,{title:C.dialogTitle,modelValue:k.dialogVisible,"onUpdate:modelValue":t[11]||(t[11]=function(e){return k.dialogVisible=e}),width:"600px",top:"5vh",onClosed:C.handelClose},{footer:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",w,[Object(a["createVNode"])(N,{onClick:t[10]||(t[10]=function(e){return k.dialogVisible=!1})},{default:Object(a["withCtx"])((function(){return[_]})),_:1}),1===k.dialogTitleType?(Object(a["openBlock"])(),Object(a["createBlock"])(N,{key:0,type:"primary",loading:k.addLoading,onClick:C.addAd},{default:Object(a["withCtx"])((function(){return[x]})),_:1},8,["loading","onClick"])):2===k.dialogTitleType?(Object(a["openBlock"])(),Object(a["createBlock"])(N,{key:1,type:"primary",loading:k.updateLoading,onClick:C.updateAd},{default:Object(a["withCtx"])((function(){return[v]})),_:1},8,["loading","onClick"])):Object(a["createCommentVNode"])("",!0)])]})),default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(q,{"label-position":"left","label-width":"auto",ref:"form",model:k.form,rules:C.rules},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(E,{label:"token地址",prop:"address"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(I,{modelValue:k.form.address,"onUpdate:modelValue":t[0]||(t[0]=function(e){return k.form.address=e}),modelModifiers:{trim:!0},placeholder:"请输入token地址",clearable:"",disabled:2===k.dialogTitleType},null,8,["modelValue","disabled"])]})),_:1}),Object(a["createVNode"])(E,{label:"chain",prop:"chain"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(I,{modelValue:k.form.chain,"onUpdate:modelValue":t[1]||(t[1]=function(e){return k.form.chain=e}),modelModifiers:{trim:!0},placeholder:"请输入链, 如：bsc",clearable:"",disabled:2===k.dialogTitleType},null,8,["modelValue","disabled"])]})),_:1}),Object(a["createVNode"])(E,{label:"时间范围",prop:"time"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(M,{modelValue:k.form.time,"onUpdate:modelValue":t[2]||(t[2]=function(e){return k.form.time=e}),type:"datetimerange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",format:"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]})),_:1}),Object(a["createVNode"])(E,{label:"广告费用",prop:"fee"},{default:Object(a["withCtx"])((function(){return[V,Object(a["createVNode"])(S,{modelValue:k.form.fee,"onUpdate:modelValue":t[3]||(t[3]=function(e){return k.form.fee=e}),min:0,controls:!1},null,8,["modelValue"])]})),_:1}),Object(a["createVNode"])(E,{label:"交易哈希",prop:"tx_hash"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(I,{modelValue:k.form.tx_hash,"onUpdate:modelValue":t[4]||(t[4]=function(e){return k.form.tx_hash=e}),clearable:""},null,8,["modelValue"])]})),_:1}),Object(a["createVNode"])(E,{label:"热搜币顺序",prop:"front_show_index"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(S,{modelValue:k.form.front_show_index,"onUpdate:modelValue":t[5]||(t[5]=function(e){return k.form.front_show_index=e}),controls:!1,step:1,"step-strictly":"",min:1},null,8,["modelValue"]),g]})),_:1}),Object(a["createVNode"])(E,{label:"是否显示广告标识",prop:"is_showasadv"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(D,{modelValue:k.form.is_showasadv,"onUpdate:modelValue":t[6]||(t[6]=function(e){return k.form.is_showasadv=e}),"active-text":"显示","inactive-text":"不显示","active-value":1,"inactive-value":0},null,8,["modelValue"])]})),_:1}),Object(a["createVNode"])(E,{label:"是否忽略跌幅配置",prop:"is_showasadv"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(D,{modelValue:k.form.is_ignorepricechange,"onUpdate:modelValue":t[7]||(t[7]=function(e){return k.form.is_ignorepricechange=e}),"active-text":"忽略","inactive-text":"不忽略","active-value":1,"inactive-value":0},null,8,["modelValue"])]})),_:1}),Object(a["createVNode"])(E,{label:"是否热门"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(B,{modelValue:k.form.hot_rank,"onUpdate:modelValue":t[8]||(t[8]=function(e){return k.form.hot_rank=e}),size:"large",clearable:"",max:3},null,8,["modelValue"])]})),_:1}),Object(a["createVNode"])(E,{label:"备注",prop:"remark"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(I,{modelValue:k.form.remark,"onUpdate:modelValue":t[9]||(t[9]=function(e){return k.form.remark=e}),modelModifiers:{trim:!0},placeholder:"请输入备注",clearable:""},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["title","modelValue","onClosed"])])}var C=o("1da1"),N=o("5530"),y=(o("96cf"),o("d9e2"),o("d3b7"),o("99af"),o("365c")),T={name:"HotAd",data:function(){var e=function(e,t){return function(e,t,o){""===t||void 0===t?o(new Error("请输入热搜币序号")):o()}};return{form:{address:"",time:[],chain:"",fee:void 0,tx_hash:"",token_index:void 0,front_show_index:void 0,remark:"",is_showasadv:0,hot_rank:0,is_ignorepricechange:0},tableData:[],dataLoading:!0,loading:{},dialogVisible:!1,curItem:{},dialogTitleType:1,addLoading:!1,updateLoading:!1,validateIndex:e}},computed:{dialogTitle:function(){var e={1:"添加",2:"编辑"};return e[this.dialogTitleType]},totalFee:function(){return this.tableData.reduce((function(e,t){return t.fee+e}),0)},rules:function(){return{address:[{required:!0,message:"请输入token地址",trigger:"blur"}],chain:[{required:!0,message:"请输入链",trigger:"blur"}],time:[{required:!0,message:"请输入时间",trigger:"blur"}],fee:[{required:!0,message:"请输入费用",trigger:"blur"}],token_index:[{required:!0,message:"请输入index",trigger:"blur"}],front_show_index:[{validator:this.validateIndex(this.tableData,this.curItem),trigger:"blur"}]}},role:function(){return this.$store.state.userInfo.role}},created:function(){this.getAdList()},methods:{getAdList:function(){var e=this;this.dataLoading=!0,Object(y["ab"])().then((function(t){e.tableData=t||[]})).catch((function(){e.tableData=[]})).finally((function(){e.dataLoading=!1}))},addAd:function(){var e=this;this.$refs.form.validate((function(t){if(t){var o=Object(N["a"])(Object(N["a"])({},e.form),{},{start_time:parseInt(Date.parse(e.form.time[0])/1e3),end_time:parseInt(Date.parse(e.form.time[1])/1e3)});delete o.time,e.addLoading=!0,Object(y["a"])(o).then((function(t){e.$message.success("添加成功"),e.dialogVisible=!1,e.getAdList()})).catch((function(){e.$message.error("添加失败")})).finally((function(){e.addLoading=!1}))}}))},updateAd:function(){var e=this;this.$refs.form.validate((function(t){if(t){var o=Object(N["a"])(Object(N["a"])({},e.form),{},{start_time:parseInt(Date.parse(e.form.time[0])/1e3),end_time:parseInt(Date.parse(e.form.time[1])/1e3)});delete o.time,e.updateLoading=!0,Object(y["wc"])(o).then((function(t){e.$message.success("更新成功"),e.dialogVisible=!1,e.getAdList()})).catch((function(){e.$message.error("更新失败")})).finally((function(){e.updateLoading=!1}))}}))},handelState:function(e){var t=this,o=Object(N["a"])(Object(N["a"])({},e),{},{is_delete:e.is_delete});this.loading[e.id]=!0,Object(y["wc"])(o).then(function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(o){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$message.success("切换成功");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){t.$message.error("切换失败")})).finally((function(){t.loading[e.id]=!1,t.getAdList()}))},handelClose:function(){this.$refs.form.resetFields()},handelAdd:function(){this.form={address:"",time:[],chain:"",fee:void 0,token_index:void 0},this.dialogTitleType=1,this.dialogVisible=!0},handelEdit:function(e){this.dialogTitleType=2,this.curItem=e,this.form=Object(N["a"])(Object(N["a"])({},e),{},{time:[new Date(1e3*e.start_time),new Date(1e3*e.end_time)]}),this.dialogVisible=!0},handelRemove:function(e){var t=this;this.$messageBox.confirm("确定要删除".concat(e.symbol,"广告吗?").concat(e.address,"-").concat(e.chain),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(y["ec"])(e.id).then((function(e){t.$message({type:"success",message:"删除成功！"}),t.getAdList()})).catch((function(e){console.log(e),t.$message({type:"error",message:"删除失败！"})}))})).catch((function(){t.$message({type:"info",message:"已取消"})}))}}},B=(o("e3f4"),o("6b0d")),D=o.n(B);const $=D()(T,[["render",k],["__scopeId","data-v-4a3d3d59"]]);t["default"]=$}}]);