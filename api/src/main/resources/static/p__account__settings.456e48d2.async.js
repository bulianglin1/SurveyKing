(self.webpackChunksurvey_king=self.webpackChunksurvey_king||[]).push([[6527],{46502:function(E){E.exports={baseView:"baseView___3sRG3",left:"left___GavW0",right:"right___3-EXe",avatar_title:"avatar_title___13ztg",avatar:"avatar___1GisI",button_view:"button_view___o9apF",area_code:"area_code___3Tg4d",phone_number:"phone_number___1bV0u"}},41215:function(E){E.exports={main:"main___2yGev",leftMenu:"leftMenu___179-W",right:"right___2jdGg",title:"title___3cGwa"}},41794:function(E,N,r){"use strict";r.r(N),r.d(N,{default:function(){return re}});var se=r(30887),U=r(28682),p=r(11849),A=r(94657),C=r(67294),$=r(87859),te=r(34792),B=r(48086),ne=r(43185),R=r(32620),ie=r(57663),M=r(71577),h=r(39428),w=r(3182),D=r(84391),c=r(82837),z=r(7789),x=r(3980),P=r(27400),V=r(9761),K=r(46502),g=r.n(K),T=r(5481),G=r.n(T),e=r(85893),L=(0,V.Pi)(function(){var y=(0,P.a)(),s=y.user,v=function(){var f=(0,w.Z)((0,h.Z)().mark(function t(o){var l,d,i,u;return(0,h.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:l=o.onSuccess,d=o.onError,i=o.file,u=o.onProgress,x.hi.upload("/api/public/upload",{file:i},function(a){u&&u({percent:a.loaded/a.total*100})}).then(function(a){if(a.success&&l&&(l(a.data),x.hi.updateUserInfo({avatar:a.data.id}).then(function(F){F.success&&(s.avatar=a.data.id)})),!a.success&&d){var j=new Error("Some error");d({event:j})}});case 2:case"end":return n.stop()}},t)}));return function(o){return f.apply(this,arguments)}}();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:g().avatar_title,children:"\u5934\u50CF"}),(0,e.jsx)("div",{className:g().avatar,children:s!=null&&s.avatar?(0,e.jsx)("img",{style:{borderRadius:"50%"},src:"/api/public/preview/".concat(s==null?void 0:s.avatar),alt:"avatar"}):(0,e.jsx)("img",{style:{borderRadius:"50%"},src:G(),alt:"avatar"})}),(0,e.jsx)(z.Z,{rotate:!0,shape:"round",cropperProps:{},children:(0,e.jsx)(R.Z,{showUploadList:!1,customRequest:v,children:(0,e.jsx)("div",{className:g().button_view,children:(0,e.jsxs)(M.Z,{children:[(0,e.jsx)(D.Z,{}),"\u66F4\u6362\u5934\u50CF"]})})})})]})}),O=function(){var s=(0,P.a)(),v=s.user,f=s.loading,t=(0,C.useMemo)(function(){return v},[]),o=function(){var l=(0,w.Z)((0,h.Z)().mark(function d(i){return(0,h.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:x.hi.updateUserInfo(i).then(function(n){n.success&&(s.user=(0,p.Z)((0,p.Z)({},v),i),B.default.success("\u66F4\u65B0\u57FA\u672C\u4FE1\u606F\u6210\u529F"))});case 1:case"end":return m.stop()}},d)}));return function(i){return l.apply(this,arguments)}}();return(0,e.jsx)("div",{className:g().baseView,children:f?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:g().left,children:(0,e.jsxs)(c.ZP,{layout:"vertical",onFinish:o,submitter:{resetButtonProps:{style:{display:"none"}},submitButtonProps:{children:"\u66F4\u65B0\u57FA\u672C\u4FE1\u606F"}},initialValues:t,hideRequiredMark:!0,children:[(0,e.jsx)(c.V,{width:"md",name:"name",label:"\u59D3\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u6635\u79F0!"}]}),(0,e.jsx)(c.V,{name:"phone",label:"\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u8054\u7CFB\u7535\u8BDD!"}]}),(0,e.jsx)(c.V,{width:"md",name:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u90AE\u7BB1!"}]}),(0,e.jsx)(c.$J,{name:"profile",label:"\u4E2A\u4EBA\u7B80\u4ECB",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB!"}],placeholder:"\u4E2A\u4EBA\u7B80\u4ECB"})]})}),(0,e.jsx)("div",{className:g().right,children:(0,e.jsx)(L,{})})]})})},W=(0,V.Pi)(O),ue=r(54421),b=r(38272),le=r(77576),J=r(12028),X=function(){var s=function(){var t=(0,e.jsx)(J.Z,{checkedChildren:"\u5F00",unCheckedChildren:"\u5173",defaultChecked:!0});return[{title:"\u8D26\u6237\u5BC6\u7801",description:"\u5176\u4ED6\u7528\u6237\u7684\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[t]},{title:"\u7CFB\u7EDF\u6D88\u606F",description:"\u7CFB\u7EDF\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[t]},{title:"\u5F85\u529E\u4EFB\u52A1",description:"\u5F85\u529E\u4EFB\u52A1\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[t]}]},v=s();return(0,e.jsx)(C.Fragment,{children:(0,e.jsx)(b.ZP,{itemLayout:"horizontal",dataSource:v,renderItem:function(t){return(0,e.jsx)(b.ZP.Item,{actions:t.actions,children:(0,e.jsx)(b.ZP.Item.Meta,{title:t.title,description:t.description})})}})})},Y=X,H=function(){var s=(0,C.useState)(!1),v=(0,A.Z)(s,2),f=v[0],t=v[1],o=(0,P.a)(),l=o.user,d=(0,x.m2)(),i=(0,C.useRef)(),u=function(){return[{title:"\u8D26\u6237\u5BC6\u7801",actions:[(0,e.jsx)("a",{onClick:function(){return t(!0)},children:"\u4FEE\u6539"},"Modify")]}]},m=u();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(b.ZP,{itemLayout:"horizontal",dataSource:m,renderItem:function(a){return(0,e.jsx)(b.ZP.Item,{actions:a.actions,children:(0,e.jsx)(b.ZP.Item.Meta,{title:a.title})})}}),(0,e.jsxs)(c.Yr,{title:"\u4FEE\u6539\u5BC6\u7801",visible:f,formRef:i,width:400,modalProps:{onCancel:function(){t(!1)},okText:"\u786E\u8BA4\u4FEE\u6539",maskClosable:!1},onFinish:function(){var n=(0,w.Z)((0,h.Z)().mark(function a(j){return(0,h.Z)().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:d.saveOrUpdateUser((0,p.Z)({id:l==null?void 0:l.userId},j)).then(function(S){S.success?(t(!1),B.default.success("\u5BC6\u7801\u4FEE\u6539\u6210\u529F")):B.default.error(S.message)});case 1:case"end":return Z.stop()}},a)}));return function(a){return n.apply(this,arguments)}}(),children:[(0,e.jsx)(c.V.Password,{label:"\u65E7\u5BC6\u7801",name:"oldPassword",fieldProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u5F53\u524D\u767B\u5F55\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]}),(0,e.jsx)(c.V.Password,{name:"password",label:"\u65B0\u5BC6\u7801",fieldProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]}),(0,e.jsx)(c.V.Password,{name:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",fieldProps:{size:"large"},placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",rules:[{validator:function(a,j){var F,Z,S=(F=i.current)===null||F===void 0?void 0:F.getFieldValue("password");return j?S!==j&&(Z="\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4"):Z="\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",Z?Promise.reject(new Error(Z)):Promise.resolve()}}]})]})]})},Q=(0,V.Pi)(H),k=(0,V.Pi)(function(){var y=(0,P.a)(),s=y.system,v=function(){var f=(0,w.Z)((0,h.Z)().mark(function t(o){var l,d,i,u;return(0,h.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:l=o.onSuccess,d=o.onError,i=o.file,u=o.onProgress,x.hi.upload("/api/public/upload",{file:i},function(a){u&&u({percent:a.loaded/a.total*100})}).then(function(a){if(a.success&&l&&(l(a.data),x.hi.updateSysInfo({id:s==null?void 0:s.id,avatar:a.data.id}).then(function(F){F.success&&(s.avatar=a.data.id)})),!a.success&&d){var j=new Error("Some error");d({event:j})}});case 2:case"end":return n.stop()}},t)}));return function(o){return f.apply(this,arguments)}}();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:g().avatar_title,children:"\u7CFB\u7EDF\u56FE\u6807"}),(0,e.jsx)("div",{className:g().avatar,children:s.avatar?(0,e.jsx)("img",{src:"/api/public/preview/".concat(s==null?void 0:s.avatar),alt:"avatar"}):(0,e.jsx)("img",{src:G()})}),(0,e.jsx)(R.Z,{showUploadList:!1,customRequest:v,children:(0,e.jsx)("div",{className:g().button_view,children:(0,e.jsxs)(M.Z,{children:[(0,e.jsx)(D.Z,{}),"\u66F4\u6362\u56FE\u6807"]})})})]})}),q=function(){var s=(0,P.a)(),v=s.system,f=s.loading,t=(0,x.m2)(),o=t.roles;(0,C.useEffect)(function(){t.loadRoles({current:1,pageSize:1024})},[t]);var l=function(){var d=(0,w.Z)((0,h.Z)().mark(function i(u){return(0,h.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",x.hi.updateSysInfo((0,p.Z)((0,p.Z)({},v),u)).then(function(a){a.success&&(s.system=(0,p.Z)((0,p.Z)((0,p.Z)({},v),u),{},{avatar:v.avatar}),B.default.success("\u66F4\u65B0\u57FA\u672C\u4FE1\u606F\u6210\u529F"))}));case 1:case"end":return n.stop()}},i)}));return function(u){return d.apply(this,arguments)}}();return(0,e.jsx)("div",{className:g().baseView,children:f?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:g().left,children:(0,e.jsxs)(c.ZP,{initialValues:v,onFinish:function(){var d=(0,w.Z)((0,h.Z)().mark(function i(u){var m;return(0,h.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l(u);case 2:m=a.sent;case 3:case"end":return a.stop()}},i)}));return function(i){return d.apply(this,arguments)}}(),children:[(0,e.jsx)(c.V,{width:"md",name:"name",label:(0,e.jsxs)("span",{children:["\u7CFB\u7EDF\u540D\u79F0(",(0,e.jsx)("a",{href:"https://surveyking.cn/docs/changelog",target:"_blank",children:"\u7248\u672C\u53F7v1.5.1"}),")"]}),required:!0,rules:[{required:!0,message:"\u7CFB\u7EDF\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}]}),(0,e.jsx)(c.V,{name:"description",label:"\u63CF\u8FF0\u4FE1\u606F"}),(0,e.jsx)(c.V,{name:["setting","copyright"],label:"\u7248\u6743\u4FE1\u606F"}),(0,e.jsx)(c.V,{name:["setting","recordNum"],label:"\u5907\u6848\u53F7"}),(0,e.jsx)(c.lG,{name:["registerInfo","registerEnabled"],label:"\u5F00\u542F\u6CE8\u518C"}),(0,e.jsx)(c.ie,{name:[["registerInfo","registerEnabled"]],children:function(i){var u=i.registerInfo;return u!=null&&u.registerEnabled?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c._I,{mode:"multiple",options:o.map(function(m){return{label:m.name,value:m.id}}),width:"md",name:["registerInfo","roles"],label:"\u6CE8\u518C\u7528\u6237\u53EF\u9009\u62E9\u89D2\u8272\u5217\u8868"}),(0,e.jsx)(c.lG,{name:["registerInfo","strongPasswordEnabled"],label:"\u5F00\u542F\u5F3A\u5BC6\u7801\u9A8C\u8BC1"})]}):(0,e.jsx)(e.Fragment,{})}}),(0,e.jsx)(c.lG,{name:["setting","captchaEnabled"],label:"\u5F00\u542F\u9A8C\u8BC1\u7801"})]})}),(0,e.jsx)("div",{className:g().right,children:(0,e.jsx)(k,{})})]})})},_=(0,V.Pi)(q),ee=r(41215),I=r.n(ee),ae=function(){var s=(0,P.a)(),v=s.isAdmin,f={base:"\u57FA\u672C\u8BBE\u7F6E",security:"\u5B89\u5168\u8BBE\u7F6E",appInfo:"\u7CFB\u7EDF\u8BBE\u7F6E"},t=(0,C.useState)({mode:"inline",selectKey:"base"}),o=(0,A.Z)(t,2),l=o[0],d=o[1],i=(0,C.useRef)(),u=function(){return Object.keys(f).filter(function(a){return!(a==="appInfo"&&!v)}).map(function(a){return{label:f[a],key:a}})},m=function(){var a=l.selectKey;switch(a){case"base":return(0,e.jsx)(W,{});case"security":return(0,e.jsx)(Q,{});case"notification":return(0,e.jsx)(Y,{});case"appInfo":return(0,e.jsx)(_,{});default:return null}};return(0,e.jsx)($.fT,{children:(0,e.jsxs)("div",{className:I().main,ref:function(a){a&&(i.current=a)},children:[(0,e.jsx)("div",{className:I().leftMenu,children:(0,e.jsx)(U.Z,{mode:l.mode,selectedKeys:[l.selectKey],onClick:function(a){var j=a.key;d((0,p.Z)((0,p.Z)({},l),{},{selectKey:j}))},items:u()})}),(0,e.jsxs)("div",{className:I().right,children:[(0,e.jsx)("div",{className:I().title,children:f[l.selectKey]}),m()]})]})})},re=(0,V.Pi)(ae)},5481:function(E,N,r){E.exports=r.p+"static/logo.eaa834e3.svg"}}]);
