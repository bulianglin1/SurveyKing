(self.webpackChunksurvey_king=self.webpackChunksurvey_king||[]).push([[9531],{34687:function(M){M.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",top:"top___1C1Zi",header:"header___5xZ3f",logo:"logo___2hXsy",title:"title___1-xuF",desc:"desc___-njyT",main:"main___x4OjT",icon:"icon___rzGKO",other:"other___lLyaU",register:"register___11Twg",prefixIcon:"prefixIcon___23Xrx"}},29791:function(M,T,e){"use strict";var ve=e(27400),$=e(87859),p=e(85893);T.Z=function(){var B,u,he=(0,ve.a)(),P=he.system,ne=(B=P.setting)===null||B===void 0?void 0:B.copyright,V=[];if((u=P.setting)!==null&&u!==void 0&&u.recordNum){var O;V.push({key:"recordNumber",title:(O=P.setting)===null||O===void 0?void 0:O.recordNum,href:"https://beian.miit.gov.cn/",blankTarget:!0})}return(0,p.jsx)($.qc,{copyright:ne||!1,links:V})}},88699:function(M,T,e){"use strict";e.r(T),e.d(T,{default:function(){return at}});var ve=e(34792),$=e(48086),p=e(39428),B=e(3182),u=e(94657),he=e(17462),P=e(76772),ne=e(29791),V=e(89366),O=e(2603),ie=e(82837),r=e(67294),L=e(42285),ze=e(73727),Pe=e(27400),Oe=e(80582),pt=e(71194),Ae=e(50146),Fe=e(59879),De=e(8812),He=e(81354),A=e.n(He),ge=function(n){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"XwKsGlMcdPMEhR1B",m=A().enc.Utf8.parse(j),l=A().enc.Utf8.parse(n),W=A().AES.encrypt(l,m,{mode:A().mode.ECB,padding:A().pad.Pkcs7});return W.toString()},pe=e(3980),Ue=e(9669),Xe=e.n(Ue),me=Xe().create({timeout:4e4,headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json; charset=UTF-8"}});me.interceptors.request.use(function(h){return h},function(h){Promise.reject(h)}),me.interceptors.response.use(function(h){var n=h.data;return n});var $e=function(n){return pe.hi.post("/captcha/get",n)};function Ve(h){return oe.apply(this,arguments)}function oe(){return oe=(0,B.Z)((0,p.Z)().mark(function h(n){return(0,p.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",pe.hi.post("/captcha/check",n));case 1:case"end":return m.stop()}},h)})),oe.apply(this,arguments)}var Ge=e(79743),Ke=e.n(Ge),t=e(85893),F={mode:"fixed",vSpace:5,imgSize:{width:"310px",height:"200px"},barSize:{width:"310px",height:"40px"},setSize:{imgHeight:"200px",imgWidth:"310px",barHeight:"40px",barWidth:"310px"},blockSize:{width:"40px",height:"40px"}},Ye=function(n){var j=F.vSpace,m=F.blockSize,l=F.setSize,W=F.imgSize,I=F.barSize,ce=n.isShow,D=n.captchaType,G=D===void 0?"blockPuzzle":D,K=n.transitionLeft,Y=K===void 0?"":K,d=n.transitionWidth,z=d===void 0?"":d,le=n.verifyCaptcha,J=(0,r.useState)(""),Q=(0,u.Z)(J,2),H=Q[0],q=Q[1],_=(0,r.useState)(""),ee=(0,u.Z)(_,2),te=ee[0],C=ee[1],f=(0,r.useState)("#1890ff"),g=(0,u.Z)(f,2),i=g[0],w=g[1],v=(0,r.useState)(!1),b=(0,u.Z)(v,2),E=b[0],y=b[1],ye=(0,r.useState)(!1),s=(0,u.Z)(ye,2),rt=s[0],de=s[1],st=(0,r.useState)(""),xe=(0,u.Z)(st,2),Se=xe[0],U=xe[1],nt=(0,r.useState)("\u5411\u53F3\u6ED1\u52A8\u5B8C\u6210\u9A8C\u8BC1"),je=(0,u.Z)(nt,2),it=je[0],Ce=je[1],X=(0,r.useRef)(!1),we=(0,r.useRef)(0),R=(0,r.useRef)(0),ot=(0,r.useState)(0),Ze=(0,u.Z)(ot,2),ut=Ze[0],Be=Ze[1],ct=(0,r.useState)(0),Le=(0,u.Z)(ct,2),lt=Le[0],be=Le[1],fe=(0,r.useRef)(0),Me=(0,r.useRef)(0),Ie=(0,r.useRef)(""),Ee=(0,r.useRef)("");(0,r.useEffect)(function(){return dt(),Re(),ft(),vt},[]);var dt=function(){for(var a=[],o="0123456789abcdef",x=0;x<36;x++)a[x]=o.substring(Math.floor(Math.random()*16),1);a[14]="4",a[19]=o.substring(Number(a[19])&3|8,1),a[8]=a[13]=a[18]=a[23]="-";var c="slider-".concat(a.join(""));localStorage.getItem("slider")||localStorage.setItem("slider",c)},ft=function(){window.addEventListener("touchmove",ae),window.addEventListener("mousemove",ae),window.addEventListener("touchend",re),window.addEventListener("mouseup",re)},vt=function(){window.removeEventListener("touchmove",ae),window.removeEventListener("mousemove",ae),window.removeEventListener("touchend",re),window.removeEventListener("mouseup",re)},Re=function(){$e({ts:Date.now(),captchaType:G,clientUid:localStorage.getItem("slider")}).then(function(a){if(a.success){var o=a.data||{},x=o.repCode,c=o.repData,N=o.repMsg,k=N===void 0?"":N;x==="0000"&&(Ie.current=c.token,Ee.current=c.secretKey,q(c.originalImageBase64),C(c.jigsawImageBase64)),x=="6201"&&(q(""),C(""),de(!1),U(k),setTimeout(function(){U("")},1e3))}})},Ne=function(a){a=a||window.event;var o=a.touches?a.touches[0].pageX:a.clientX;we.current=Math.floor(o-fe.current),E==!1&&(Ce(""),X.current=!0,w("#1890ff"),a.stopPropagation())},ae=function(a){if(a=a||window.event,X.current&&E==!1){var o=a.touches?a.touches[0].pageX:a.clientX,x=fe.current,c=o-x,N=parseInt(m.width),k=parseInt("".concat(N/2)),se=Me.current-k-2;c>=se&&(c=se),c<=24&&(c=k),R.current=c-we.current,Be(R.current),be(R.current)}},ke=function(){Re(),R.current=0,Be(R.current),be(R.current),Ce("\u5411\u53F3\u6ED1\u52A8\u5B8C\u6210\u9A8C\u8BC1"),w("#1890ff"),y(!1),X.current=!1},re=function(){if(X.current&&E==!1){var a=Ie.current,o=Ee.current,x=parseInt("".concat(R.current))*310/parseInt(l.imgWidth),c=JSON.stringify({x,y:5});Ve({captchaType:G,ts:Date.now(),token:a,pointJson:o?ge(c,o):c}).then(function(N){if(N.success){var k=N.data||{},se=k.repCode,gt=k.repMsg;if(se==="0000"){y(!0),de(!0),U("\u9A8C\u8BC1\u6210\u529F");var We="".concat(a,"---").concat(c);Te(o?ge(We,o):We)}else y(!0),de(!1),w("#d9534f"),U(gt||"\u9A8C\u8BC1\u5931\u8D25");setTimeout(function(){ke(),U("")},1e3)}}),X.current=!1}},ht=function(a){var o=a&&a.getBoundingClientRect().left,x=a&&a.offsetWidth;fe.current=o,Me.current=x},Te=function(a){le(!1,a)};return(0,t.jsx)(Ae.Z,{title:"\u8BF7\u5B8C\u6210\u5B89\u5168\u9A8C\u8BC1",visible:ce,footer:!1,destroyOnClose:!0,keyboard:!1,maskClosable:!1,width:parseInt(W.width)+48,onCancel:function(){return Te()},bodyStyle:{padding:"12px 24px"},children:(0,t.jsx)("div",{className:"verifybox",children:(0,t.jsxs)("div",{style:{position:"relative"},className:"stop-user-select",children:[(0,t.jsx)("div",{className:"verify-img-out",style:{height:parseInt(l.imgHeight)+j},children:(0,t.jsxs)("div",{className:"verify-img-panel",style:{width:l.imgWidth,height:l.imgHeight},children:[(0,t.jsx)("div",{onClick:ke,style:{height:32,width:32,lineHeight:"32px",borderRadius:32,backgroundColor:"rgb(0, 0, 0, 0.2)",textAlign:"center",position:"absolute",top:4,right:4},children:(0,t.jsx)(Fe.Z,{style:{color:"#fff",fontSize:"16px",fontWeight:800}})}),(0,t.jsx)("img",{alt:"",src:H?"data:image/png;base64,".concat(H):Ke(),style:{width:"100%",height:"100%",display:"block"}}),!!Se&&(0,t.jsx)("div",{className:"tips",children:(0,t.jsx)("span",{className:"verify-tips ".concat(rt?"suc-bg":"err-bg"),children:Se})})]})}),(0,t.jsxs)("div",{className:"verify-bar-area",style:{width:l.imgWidth,height:I.height,lineHeight:I.height},ref:function(a){return ht(a)},children:[(0,t.jsx)("span",{className:"verify-msg",children:it}),(0,t.jsx)("div",{className:"verify-left-bar",style:{width:"".concat(ut,"px")||0,height:I.height,transition:z},children:(0,t.jsxs)("div",{onMouseDown:Ne,onTouchStart:Ne,className:"verify-move-block",style:{width:m.height,height:m.height,backgroundColor:i,left:"".concat(lt,"px"),transition:Y},children:[(0,t.jsx)(De.Z,{style:{color:"#fff"}}),(0,t.jsx)("div",{className:"verify-sub-block",style:{width:"".concat(Math.floor(parseInt(l.imgWidth)*48/310),"px"),height:l.imgHeight,top:"-".concat(parseInt(l.imgHeight)+j,"px"),backgroundSize:"".concat(l.imgWidth," ").concat(l.imgHeight)},children:(0,t.jsx)("img",{alt:"",src:"data:image/png;base64,".concat(te),style:{width:"100%",height:"100%",display:"block"}})})]})})]})]})})})},Je=Ye,Qe=e(5481),qe=e.n(Qe),_e=e(34687),S=e.n(_e),et=function(n){var j=n.content;return(0,t.jsx)(P.Z,{style:{marginBottom:24},message:j,type:"error",showIcon:!0})},ue=void 0==="1",mt=null,tt=function(n){var j,m=(0,r.useState)(!1),l=(0,u.Z)(m,2),W=l[0],I=l[1],ce=(0,r.useState)(),D=(0,u.Z)(ce,2),G=D[0],K=D[1],Y=(0,Pe.a)(),d=Y.system,z=(0,L.YB)(),le=function(){var C=(0,B.Z)((0,p.Z)().mark(function f(){return(0,p.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:case"end":return i.stop()}},f)}));return function(){return C.apply(this,arguments)}}(),J=(0,r.useRef)(),Q=(0,r.useState)(!1),H=(0,u.Z)(Q,2),q=H[0],_=H[1],ee=function(){var C=(0,B.Z)((0,p.Z)().mark(function f(g,i){var w,v,b;return(0,p.Z)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(_(g),w=J.current.getFieldsValue(),v=w.username,b=w.password,!(v&&b&&i)){y.next=5;break}return y.next=5,te({username:v,password:b,captchaVerification:i});case 5:I(!1);case 6:case"end":return y.stop()}},f)}));return function(g,i){return C.apply(this,arguments)}}(),te=function(){var C=(0,B.Z)((0,p.Z)().mark(function f(g){var i,w,v,b,E,y;return(0,p.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Y.login(g);case 3:if(i=s.sent,!i.success){s.next=18;break}if(w=z.formatMessage({id:"pages.login.success",defaultMessage:"\u767B\u5F55\u6210\u529F\uFF01"}),$.default.success(w),!n.onOk){s.next=10;break}return n.onOk(),s.abrupt("return");case 10:return s.next=12,le();case 12:if(L.m8){s.next=14;break}return s.abrupt("return");case 14:return v=L.m8.location.query,b=v,E=b.redirect,L.m8.push(E||"/"),s.abrupt("return");case 18:K(i.message&&"error"),s.next=25;break;case 21:s.prev=21,s.t0=s.catch(0),y=z.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),$.default.error(y);case 25:I(!1);case 26:case"end":return s.stop()}},f,null,[[0,21]])}));return function(g){return C.apply(this,arguments)}}();return(0,t.jsxs)("div",{className:S().container,children:[(0,t.jsx)("div",{className:S().lang,"data-lang":!0,children:L.pD&&(0,t.jsx)(L.pD,{})}),(0,t.jsxs)("div",{className:S().content,children:[(0,t.jsxs)("div",{className:S().top,children:[(0,t.jsxs)("div",{className:S().header,children:[(0,t.jsx)("img",{alt:"logo",className:S().logo,src:d.avatar?"/api/public/preview/".concat(d==null?void 0:d.avatar):qe()}),(0,t.jsx)("span",{className:S().title,children:d==null?void 0:d.name})]}),(0,t.jsx)("div",{className:S().desc,children:d==null?void 0:d.description})]}),(0,t.jsx)("div",{className:S().main,children:(0,t.jsxs)(ie.ZP,{formRef:J,initialValues:ue?{autoLogin:!0,username:"admin",password:"123456"}:{autoLogin:!0},submitter:{searchConfig:{submitText:z.formatMessage({id:"pages.login.submit",defaultMessage:"\u767B\u5F55"})},render:function(f,g){return g.pop()},submitButtonProps:{loading:W,size:"large",style:{width:"100%"},htmlType:"submit"}},isKeyPressSubmit:!0,onFinish:function(){var C=(0,B.Z)((0,p.Z)().mark(function f(g){var i;return(0,p.Z)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(!W){v.next=2;break}return v.abrupt("return");case 2:(i=d.setting)!==null&&i!==void 0&&i.captchaEnabled?_(!0):te(g),I(!0);case 4:case"end":return v.stop()}},f)}));return function(f){return C.apply(this,arguments)}}(),children:[G==="error"&&(0,t.jsx)(et,{content:z.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF"})}),(0,t.jsx)(ie.V,{name:"username",fieldProps:{size:"large",prefix:(0,t.jsx)(V.Z,{className:S().prefixIcon})},placeholder:ue?"\u7528\u6237\u540D(admin)":"\u7528\u6237\u540D",rules:[{required:!0,message:(0,t.jsx)(L._H,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,t.jsx)(ie.V.Password,{name:"password",fieldProps:{size:"large",prefix:(0,t.jsx)(O.Z,{className:S().prefixIcon})},placeholder:ue?"\u5BC6\u7801(123456)":"\u5BC6\u7801",rules:[{required:!0,message:(0,t.jsx)(L._H,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]}),((j=d.registerInfo)===null||j===void 0?void 0:j.registerEnabled)&&(0,t.jsx)("div",{style:{marginBottom:24,display:"flex",justifyContent:"flex-end"},children:(0,t.jsx)(ze.rU,{to:"/user/register",children:(0,t.jsx)(L._H,{id:"pages.login.registerAccount",defaultMessage:"\u6CE8\u518C"})})})]})})]}),(0,t.jsx)(Je,{isShow:q,verifyCaptcha:ee}),(0,t.jsx)(ne.Z,{})]})},at=(0,Oe.Pi)(tt)},5481:function(M,T,e){M.exports=e.p+"static/logo.eaa834e3.svg"},79743:function(M,T,e){M.exports=e.p+"static/default.aac93cd7.jpg"},42480:function(){}}]);