(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52b67365"],{"0272":function(e,t,n){},"2bcb":function(e,t,n){"use strict";n("0272")},"4e78":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),i=function(e){return Object(r["pushScopeId"])("data-v-3c9a4540"),e=e(),Object(r["popScopeId"])(),e},o={class:"gray",style:{width:"100%"}},c={class:"card-header"},a=i((function(){return Object(r["createElementVNode"])("span",null,"轮播图管理",-1)})),l={style:{display:"inline-block","margin-left":"20px","font-size":"14px",color:"#888"}},d=Object(r["createTextVNode"])("添加"),u=i((function(){return Object(r["createElementVNode"])("div",{class:"image-slot",style:{width:"100px","min-height":"100px"}}," 加载中... ",-1)})),b=i((function(){return Object(r["createElementVNode"])("div",{class:"image-slot",style:{width:"100px","min-height":"100px"}}," 加载中... ",-1)})),f=Object(r["createTextVNode"])("是"),s=Object(r["createTextVNode"])("否"),p=Object(r["createTextVNode"])("生效"),m=Object(r["createTextVNode"])("失效"),j=Object(r["createTextVNode"])("编辑"),O=Object(r["createTextVNode"])("上移"),_=Object(r["createTextVNode"])("下移"),h=i((function(){return Object(r["createElementVNode"])("div",{class:"add-text"},"点击上传",-1)})),g=i((function(){return Object(r["createElementVNode"])("div",{class:"add-text"},"点击上传",-1)})),k=Object(r["createTextVNode"])(" $ "),w={class:"dialog-footer"},V=Object(r["createTextVNode"])("取 消"),v=Object(r["createTextVNode"])("确 定"),C=Object(r["createTextVNode"])("确 定");function x(e,t,n,i,x,N){var y=Object(r["resolveComponent"])("el-button"),B=Object(r["resolveComponent"])("el-table-column"),T=Object(r["resolveComponent"])("el-image"),E=Object(r["resolveComponent"])("el-link"),U=Object(r["resolveComponent"])("el-tag"),D=Object(r["resolveComponent"])("el-switch"),L=Object(r["resolveComponent"])("el-table"),F=Object(r["resolveComponent"])("el-card"),$=Object(r["resolveComponent"])("el-col"),M=Object(r["resolveComponent"])("el-row"),S=Object(r["resolveComponent"])("UploadFilled"),I=Object(r["resolveComponent"])("el-icon"),z=Object(r["resolveComponent"])("CircleCloseFilled"),R=Object(r["resolveComponent"])("el-form-item"),q=Object(r["resolveComponent"])("el-input"),P=Object(r["resolveComponent"])("el-date-picker"),Y=Object(r["resolveComponent"])("el-input-number"),H=Object(r["resolveComponent"])("el-form"),A=Object(r["resolveComponent"])("el-dialog"),J=Object(r["resolveDirective"])("loading");return Object(r["openBlock"])(),Object(r["createElementBlock"])("main",o,[Object(r["createVNode"])(M,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])($,{span:24,style:{"margin-bottom":"10px"}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(F,{class:"box-card",shadow:"never"},{header:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",c,[Object(r["createElementVNode"])("div",null,[a,Object(r["createElementVNode"])("span",l,"广告总收入：$ "+Object(r["toDisplayString"])(N.totalFee),1)]),Object(r["createVNode"])(y,{class:"button",type:"primary",link:"",onClick:Object(r["withModifiers"])(N.handelAdd,["stop"])},{default:Object(r["withCtx"])((function(){return[d]})),_:1},8,["onClick"])])]})),default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createBlock"])(L,{ref:"baTable",class:"table-fixed",data:x.bannerList,stripe:"",style:{width:"100%"}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(B,{prop:"banner_index",label:"index",width:"80"}),Object(r["createVNode"])(B,{prop:"picture_link",label:"图片(中文)",width:"200"},{default:Object(r["withCtx"])((function(e){var t=e.row;return[Object(r["createVNode"])(T,{style:{width:"100px"},fit:"contain","preview-src-list":[t.picture_link],src:t.picture_link,lazy:"","preview-teleported":""},{placeholder:Object(r["withCtx"])((function(){return[u]})),_:2},1032,["preview-src-list","src"])]})),_:1}),Object(r["createVNode"])(B,{prop:"render_link",label:"跳转链接(中文)","min-width":"200"},{default:Object(r["withCtx"])((function(e){var t=e.row;return[t.render_link?(Object(r["openBlock"])(),Object(r["createBlock"])(E,{key:0,type:"primary",href:t.render_link,target:"_blank",underline:!1},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(t.render_link),1)]})),_:2},1032,["href"])):Object(r["createCommentVNode"])("",!0)]})),_:1}),Object(r["createVNode"])(B,{prop:"picture_link_en",label:"图片(英文)",width:"150"},{default:Object(r["withCtx"])((function(e){var t=e.row;return[Object(r["createVNode"])(T,{style:{width:"100px"},fit:"contain","preview-src-list":[t.picture_link_en],src:t.picture_link_en,lazy:"","preview-teleported":""},{placeholder:Object(r["withCtx"])((function(){return[b]})),_:2},1032,["preview-src-list","src"])]})),_:1}),Object(r["createVNode"])(B,{prop:"render_link_en",label:"跳转链接(英文)","min-width":"200"},{default:Object(r["withCtx"])((function(e){var t=e.row;return[t.render_link_en?(Object(r["openBlock"])(),Object(r["createBlock"])(E,{key:0,type:"primary",href:t.render_link_en,target:"_blank",underline:!1},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(t.render_link_en),1)]})),_:2},1032,["href"])):Object(r["createCommentVNode"])("",!0)]})),_:1}),Object(r["createVNode"])(B,{prop:"create_time",label:"创建时间","min-width":"170"},{default:Object(r["withCtx"])((function(t){var n=t.row;return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$f.formatDate(n.create_time)),1)]})),_:1}),Object(r["createVNode"])(B,{prop:"update_time",label:"更新时间","min-width":"170"},{default:Object(r["withCtx"])((function(t){var n=t.row;return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$f.formatDate(n.update_time)),1)]})),_:1}),Object(r["createVNode"])(B,{label:"生效时间范围","min-width":"170"},{default:Object(r["withCtx"])((function(t){var n=t.row;return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$f.formatDate(n.start_time))+" ~ "+Object(r["toDisplayString"])(e.$f.formatDate(n.end_time)),1)]})),_:1}),Object(r["createVNode"])(B,{label:"广告",width:"150",align:"center"},{default:Object(r["withCtx"])((function(e){var t=e.row;return[1===t.is_adv?(Object(r["openBlock"])(),Object(r["createBlock"])(U,{key:0,type:"danger",effect:"plain"},{default:Object(r["withCtx"])((function(){return[f]})),_:1})):0===t.is_adv?(Object(r["openBlock"])(),Object(r["createBlock"])(U,{key:1,type:"info",effect:"plain"},{default:Object(r["withCtx"])((function(){return[s]})),_:1})):Object(r["createCommentVNode"])("",!0)]})),_:1}),Object(r["createVNode"])(B,{prop:"fee",label:"广告费用($)",width:"150"},{default:Object(r["withCtx"])((function(e){var t=e.row;return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(1===t.is_adv?t.fee:0),1)]})),_:1}),Object(r["createVNode"])(B,{prop:"",label:"是否生效"},{default:Object(r["withCtx"])((function(e){var t=e.row;return[0===t.is_delete&&(0===t.is_adv||1e3*t.start_time<=Date.now()&&1e3*t.end_time>=Date.now())?(Object(r["openBlock"])(),Object(r["createBlock"])(U,{key:0,type:"success",effect:"dark"},{default:Object(r["withCtx"])((function(){return[p]})),_:1})):(Object(r["openBlock"])(),Object(r["createBlock"])(U,{key:1,type:"danger",effect:"dark"},{default:Object(r["withCtx"])((function(){return[m]})),_:1}))]})),_:1}),Object(r["createVNode"])(B,{prop:"remark",label:"备注"}),Object(r["createVNode"])(B,{label:"状态",width:"200",align:"center"},{default:Object(r["withCtx"])((function(e){var t=e.row;return[Object(r["createVNode"])(D,{modelValue:t.is_delete,"onUpdate:modelValue":function(e){return t.is_delete=e},"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"展示","inactive-text":"不展示","active-value":0,"inactive-value":1,loading:x.loading[t.id],onClick:Object(r["withModifiers"])((function(e){return N.handelState(t)}),["stop"])},null,8,["modelValue","onUpdate:modelValue","loading","onClick"])]})),_:1}),Object(r["createVNode"])(B,{label:"操作",width:"160",align:"center",fixed:"right"},{default:Object(r["withCtx"])((function(e){var t=e.row,n=e.$index;return[Object(r["createVNode"])(y,{type:"primary",link:"",onClick:Object(r["withModifiers"])((function(e){return N.handelEdit(t)}),["stop"])},{default:Object(r["withCtx"])((function(){return[j]})),_:2},1032,["onClick"]),Object(r["createVNode"])(y,{type:"primary",link:"",onClick:Object(r["withModifiers"])((function(e){return N.changeIndex("top",t,n)}),["stop"]),disabled:0===n},{default:Object(r["withCtx"])((function(){return[O]})),_:2},1032,["onClick","disabled"]),Object(r["createVNode"])(y,{type:"primary",link:"",onClick:Object(r["withModifiers"])((function(e){return N.changeIndex("bottom",t,n)}),["stop"]),disabled:n===x.bannerList.length-1},{default:Object(r["withCtx"])((function(){return[_]})),_:2},1032,["onClick","disabled"])]})),_:1})]})),_:1},8,["data"])),[[J,x.dataLoading]])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(A,{title:N.dialogTitle,modelValue:x.dialogVisible,"onUpdate:modelValue":t[9]||(t[9]=function(e){return x.dialogVisible=e}),width:"600px",top:"5vh","close-on-click-modal":!1,onClosed:N.handelClose},{footer:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("span",w,[Object(r["createVNode"])(y,{onClick:t[8]||(t[8]=function(e){return x.dialogVisible=!1})},{default:Object(r["withCtx"])((function(){return[V]})),_:1}),1===x.dialogTitleType?(Object(r["openBlock"])(),Object(r["createBlock"])(y,{key:0,type:"primary",loading:x.addLoading,onClick:N.addNFTMarketBanner},{default:Object(r["withCtx"])((function(){return[v]})),_:1},8,["loading","onClick"])):2===x.dialogTitleType?(Object(r["openBlock"])(),Object(r["createBlock"])(y,{key:1,type:"primary",loading:x.updateLoading,onClick:N.updateNFTMarketBanner},{default:Object(r["withCtx"])((function(){return[C]})),_:1},8,["loading","onClick"])):Object(r["createCommentVNode"])("",!0)])]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(H,{"label-position":"left","label-width":"auto",ref:"form",model:x.form,rules:N.rules},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"上传图片(中文)：",prop:"profile_picture"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("label",{for:"uploaderFile",class:"img-preview",style:Object(r["normalizeStyle"])({backgroundImage:x.fileUrl?"url("+x.fileUrl+")":""})},[x.fileUrl?(Object(r["openBlock"])(),Object(r["createBlock"])(I,{key:1,onClick:Object(r["withModifiers"])(N.removeFile,["stop","prevent"]),class:"el-icon-error"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(z)]})),_:1},8,["onClick"])):(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:0},[Object(r["createVNode"])(I,{class:"el-icon-upload"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(S)]})),_:1}),h],64))],4),Object(r["createElementVNode"])("input",{type:"file",ref:"fileBanner",id:"uploaderFile",accept:"image/png, image/jpg",onChange:t[0]||(t[0]=function(){return N.beforeUpload&&N.beforeUpload.apply(N,arguments)})},null,544)]})),_:1}),Object(r["createVNode"])(R,{label:"链接设置(中文)",prop:"render_link"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(q,{modelValue:x.form.render_link,"onUpdate:modelValue":t[1]||(t[1]=function(e){return x.form.render_link=e}),modelModifiers:{trim:!0},placeholder:"请输入想要跳转的网站链接，如不填写则点击图片后不会跳转。",clearable:""},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(R,{label:"上传图片(英文)：",prop:"profile_picture_en"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("label",{for:"uploaderFileEn",class:"img-preview",style:Object(r["normalizeStyle"])({backgroundImage:x.fileUrlEn?"url("+x.fileUrlEn+")":""})},[x.fileUrlEn?(Object(r["openBlock"])(),Object(r["createBlock"])(I,{key:1,onClick:Object(r["withModifiers"])(N.removeFileEn,["stop","prevent"]),class:"el-icon-error"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(z)]})),_:1},8,["onClick"])):(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:0},[Object(r["createVNode"])(I,{class:"el-icon-upload"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(S)]})),_:1}),g],64))],4),Object(r["createElementVNode"])("input",{type:"file",ref:"fileBannerEn",id:"uploaderFileEn",accept:"image/png, image/jpg",onChange:t[2]||(t[2]=function(){return N.beforeUploadEn&&N.beforeUploadEn.apply(N,arguments)})},null,544)]})),_:1}),Object(r["createVNode"])(R,{label:"链接设置(英文)",prop:"render_link_en"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(q,{modelValue:x.form.render_link_en,"onUpdate:modelValue":t[3]||(t[3]=function(e){return x.form.render_link_en=e}),modelModifiers:{trim:!0},placeholder:"请输入想要跳转的网站链接，如不填写则点击图片后不会跳转。",clearable:""},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(R,{label:"是否为广告",prop:"is_adv"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(D,{modelValue:x.form.is_adv,"onUpdate:modelValue":t[4]||(t[4]=function(e){return x.form.is_adv=e}),"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])]})),_:1}),1===x.form.is_adv?(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:0},[Object(r["createVNode"])(R,{label:"时间范围",prop:"time"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{modelValue:x.form.time,"onUpdate:modelValue":t[5]||(t[5]=function(e){return x.form.time=e}),type:"datetimerange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",format:"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(R,{label:"广告费用",prop:"fee"},{default:Object(r["withCtx"])((function(){return[k,Object(r["createVNode"])(Y,{modelValue:x.form.fee,"onUpdate:modelValue":t[6]||(t[6]=function(e){return x.form.fee=e}),min:0,controls:!1},null,8,["modelValue"])]})),_:1})],64)):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(R,{label:"备注",prop:"remark"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(q,{modelValue:x.form.remark,"onUpdate:modelValue":t[7]||(t[7]=function(e){return x.form.remark=e}),modelModifiers:{trim:!0},placeholder:"请输入备注",clearable:""},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["title","modelValue","onClosed"])])}var N=n("5530"),y=n("1da1"),B=(n("96cf"),n("d3b7"),n("a9e3"),n("159b"),n("b64b"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("365c")),T={data:function(){return{form:{profile_picture:"",profile_picture_en:"",background:"",time:[],render_link:"",render_link_en:"",is_mobile:1,remark:"",language:"cn",is_adv:1,fee:""},dialogVisible:!1,uploadFile:null,fileUrl:"",uploadFileEn:null,fileUrlEn:"",loading:{},dialogTitleType:1,addLoading:!1,updateLoading:!1,bannerList:[],dataLoading:!0,titleList:{add:"添加轮播图",edit:"编辑轮播图"},title:"添加轮播图",index:""}},mounted:function(){this.getBanner()},computed:{dialogTitle:function(){var e={1:"添加",2:"编辑"};return e[this.dialogTitleType]},rules:function(){var e={time:[{required:!0,message:"请输入时间",trigger:"blur"}],fee:[{required:!0,message:"请输入费用",trigger:"blur"}]};return 1===this.dialogTitleType&&(e.profile_picture=[{required:!0,message:"请上传图片",trigger:"blur"}],e.profile_picture_en=[{required:!0,message:"请上传图片",trigger:"blur"}]),e},totalFee:function(){return this.bannerList.reduce((function(e,t){return(1===t.is_adv&&Number(null===t||void 0===t?void 0:t.fee)||0)+e}),0)}},methods:{getFormData:function(e){var t=new FormData;return Object.keys(e).forEach((function(n){return t.append(n,e[n])})),t},getData:function(e){return{profile_picture:e.profile_picture,profile_picture_en:e.profile_picture_en,background:e.background,render_link:e.render_link,render_link_en:e.render_link_en,is_mobile:e.is_mobile,remark:e.remark,language:"cn",is_adv:e.is_adv,fee:1===e.is_adv?e.fee:0,start_time:1===e.is_adv?parseInt(Date.parse(e.time[0])/1e3):0,end_time:1===e.is_adv?parseInt(Date.parse(e.time[1])/1e3):0,id:e.id}},handelAdd:function(){this.dialogTitleType=1,this.dialogVisible=!0},handelClose:function(){this.fileUrl="",this.fileUrlEn="",this.form={profile_picture:"",profile_picture_en:"",background:"",time:[],render_link:"",render_link_en:"",is_mobile:1,remark:"",language:"cn",is_adv:1,fee:""},this.$refs.form.resetFields()},removeFile:function(){this.form.profile_picture=null,this.fileUrl="",this.$refs.fileBanner.value=""},removeFileEn:function(){this.form.profile_picture_en=null,this.fileUrlEn="",this.$refs.fileBannerEn.value=""},getBanner:function(){var e=this;this.dataLoading=!0,Object(B["Bb"])().then((function(t){e.bannerList=t||[],e.$nextTick((function(){e.$refs.baTable.doLayout()}))})).catch((function(){e.bannerList=[]})).finally((function(){e.dataLoading=!1}))},beforeUpload:function(e){var t=e.target.files[0];if(t.size/1024/1024>1)return this.$message.error("图片大小超出限制"),!1;this.form.profile_picture=t,this.fileUrl=window.URL.createObjectURL(t)},beforeUploadEn:function(e){var t=e.target.files[0];if(t.size/1024/1024>1)return this.$message.error("图片大小超出限制"),!1;this.form.profile_picture_en=t,this.fileUrlEn=window.URL.createObjectURL(t)},addNFTMarketBanner:function(){var e=this;this.$refs.form.validate((function(t){if(t){var n=e.getData(e.form);n=e.getFormData(n),e.addLoading=!0,Object(B["n"])(n).then((function(t){e.$message.success("添加成功"),e.dialogVisible=!1,e.getBanner()})).catch((function(){e.$message.error("添加失败")})).finally((function(){e.addLoading=!1}))}}))},updateNFTMarketBanner:function(){var e=this;this.$refs.form.validate((function(t){if(t){var n=e.getData(e.form);e.form.profile_picture?n.is_updatePic=1:n.is_updatePic=0,e.form.profile_picture_en?n.is_updatePic_en=1:n.is_updatePic_en=0,n=e.getFormData(n),e.updateLoading=!0,Object(B["Qc"])(n).then((function(t){e.$message.success("更新成功"),e.dialogVisible=!1,e.getBanner()})).catch((function(){e.$message.error("更新失败")})).finally((function(){e.updateLoading=!1}))}}))},changeIndex:function(e,t,n){var r=this,i={banner1_id:t.id};"top"===e?i.banner2_id=this.bannerList[n-1].id:"bottom"===e&&(i.banner2_id=this.bannerList[n+1].id),this.dataLoading=!0,Object(B["E"])(i).then((function(e){r.$message.success("调整顺序成功")})).catch((function(){r.$message.error("调整顺序失败")})).finally((function(){r.getBanner()}))},handelState:function(e){var t=this,n={id:e.id,is_delete:e.is_delete};this.loading[e.id]=!0,Object(B["H"])(n).then(function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$message.success("切换成功");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){t.$message.error("切换失败")})).finally((function(){t.loading[e.id]=!1,t.getBanner()}))},handelEdit:function(e){this.dialogTitleType=2,this.fileUrl=e.picture_link,this.fileUrlEn=e.picture_link_en,this.form=Object(N["a"])(Object(N["a"])({},e),{},{time:[new Date(1e3*e.start_time),new Date(1e3*e.end_time)]}),this.dialogVisible=!0}}},E=(n("2bcb"),n("6b0d")),U=n.n(E);const D=U()(T,[["render",x],["__scopeId","data-v-3c9a4540"]]);t["default"]=D}}]);