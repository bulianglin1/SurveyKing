(self.webpackChunksurvey_king=self.webpackChunksurvey_king||[]).push([[6389],{96389:function(e,r,t){"use strict";t.d(r,{ff:function(){return g},SB:function(){return n.SB},Xn:function(){return n.Xn},vW:function(){return n.vW},CL:function(){return n.CL},XO:function(){return n.XO},R6:function(){return n.R6},Op:function(){return n.Op},d0:function(){return n.d0},kb:function(){return n.kb},MA:function(){return n.MA},iq:function(){return n.iq}});var n=t(37191),i={components:{},decorators:{},answerSheet:{}},a="antd";function u(l,d){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:a;i.components[c]||(i.components[c]={}),i.components[c][l]=d}function _(l,d){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:a;i.decorators[c]||(i.decorators[c]={}),i.decorators[c][l]=d}function o(l,d){i.answerSheet[l]=d}function s(l,d){return i.components[l][d]}function f(l,d){return i.decorators[l][d]}function p(l){return i.answerSheet[l]}var m=t(67294),v=m.createContext({theme:a}),b=m.createContext({theme:a}),g=m.createContext({})},37191:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{R6:function(){return parseOptionTypes},Op:function(){return parseQuestionVariable},d0:function(){return parseVariableValue},SB:function(){return checkIsMobile},vW:function(){return formulaParse},kb:function(){return randomId},CL:function(){return isWechat},iq:function(){return schemaHasAttribute},XO:function(){return parseInitialValuesFromUrlParameter},Xn:function(){return flatSurveySchema},MA:function(){return renderResultMessage}});var _Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(32059),_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_construct_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9963),_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(94657),_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11849),_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(83279),_formulajs_formulajs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(17243),_formulajs_formulajs__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_formulajs_formulajs__WEBPACK_IMPORTED_MODULE_0__),nanoid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(17244),computeFunction={getAgeFromIdNum:function(r){var t=computeFunction.getBirthdayFromIdNum(r),n=new Date(t),i=new Date,a=i.getFullYear()-n.getFullYear();return(i.getMonth()<n.getMonth()||i.getMonth()==n.getMonth()&&i.getDate()<n.getDate())&&a--,a},getBirthdayFromIdNum:function(r){var t=(r+"").length,n="";if(t===18&&(n=r.substr(6,4)+"/"+r.substr(10,2)+"/"+r.substr(12,2)),t===15){var i="";i=r.charAt(6)+r.charAt(7),parseInt(i)<10?n="20"+r.substr(6,2)+"/"+r.substr(8,2)+"/"+r.substr(10,2):n="19"+r.substr(6,2)+"/"+r.substr(8,2)+"/"+r.substr(10,2)}return n}},groupFieldsByName=function(r){var t={};return r.forEach(function(n){var i=n.name;t[i]||(t[i]=[]),t[i].push(n)}),t};function findOptionInExpression(e){return(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(new Set(e.match(/(\w+\.\w+\.\w+)/g))).map(function(r){var t=r.startsWith("_"),n=r.substring(0,r.lastIndexOf("."));t&&(n=n.substring(1));var i=r.substring(r.lastIndexOf(".")+1);return{source:r,isFillBlank:t,name:n,optionId:i}})}function computeExpress(form,express){var fn=computeFunction,expr=express;findOptionInExpression(express).forEach(function(e){var r=e.name,t=e.isFillBlank,n=e.optionId,i=e.source,a=form.query(r).get("value"),u=a&&a[n],_=u;u!==void 0?t||(_="true"):t?_="undefined":_="false",expr=expr.replaceAll(i,_)});try{return eval(expr)}catch(e){}}function isValid(e){return e==null||typeof e=="number"&&e.toString()==="NaN"||typeof e=="number"&&e.toString()==="Infinity"?!1:!(typeof e=="string"&&e.trim()==="")}function isEmpty(e){return!isValid(e)||Object.keys(e).length===0||Object.values(e).filter(function(r){return!!r}).length===0}function isMatrixEmpty(e){if(e.toString()==="[object Object]"){var r=!0;for(var t in e){var n=Object.values(e[t]).filter(function(i){return isValid(i)}).length;n>0&&(r=!1)}return r}return!1}function isVoid(e){var r=["SplitLine","Pagination","Remark"];return r.includes(e)}function isDataNode(e){var r=["FillBlank","Textarea","User","Dept","MultipleBlank","HorzBlank","Signature","Radio","Checkbox","Select","Cascader","MatrixAuto","MatrixRadio","MatrixCheckbox","MatrixFillBlank","MatrixScore","MatrixNps","Upload","Score","Nps","Address","Drug"];return r.includes(e)}function filterSchema(e){var r,t=((r=e.children)===null||r===void 0?void 0:r.filter(function(i){return i.type!=="Pagination"}))||[],n=(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},e),{},{children:t});return n}function parseOptionTypes(e){var r,t={};return(r=e.children)===null||r===void 0||r.forEach(function(n){if(n.type==="QuestionSet")n.children&&Object.assign(t,parseOptionTypes(n));else{var i,a=["FillBlank","MultipleBlank","MatrixFillBlank","HorzBlank","Nps"],u="boolean";a.includes(n.type)&&(u="number"),t[n.id]=u,(i=n.children)===null||i===void 0||i.forEach(function(_){t[_.id]=u})}}),t}function parsePagination(e,r){var t=1;if(r){var n;t=((n=e.children)===null||n===void 0?void 0:n.filter(function(a){var u;return(isDataNode(a.type)||a.type==="QuestionSet")&&((u=a.attribute)===null||u===void 0?void 0:u.display)!=="hidden"}).length)||1}else{var i;t=((i=e.children)===null||i===void 0?void 0:i.filter(function(a){return a.type==="Pagination"}).length)||1}return{current:1,pageSize:t}}function groupByPagination(e,r){var t,n,i=[],a=[];if(r){var u;return(u=e.children)===null||u===void 0||u.filter(function(o){var s;return o.type!=="Pagination"&&((s=o.attribute)===null||s===void 0?void 0:s.display)!=="hidden"}).forEach(function(o){isDataNode(o.type)||o.type==="QuestionSet"?(a=[o],i.push(a)):a.push(o)}),i}var _=(t=e.children)===null||t===void 0?void 0:t.find(function(o){return o.type==="Pagination"});return _?((n=e.children)===null||n===void 0||n.forEach(function(o){o.type==="Pagination"?(a=[],i.push(a)):a.push(o)}),i):e.children?[e.children]:[]}function parseExpression(e){for(var r={},t=0;t<e.length;){var n=e[t],i=e[t+1];if(n==="#"&&i==="{"){t++;for(var a="#",u="",_=!1;n!=="}";)n=e[t],a+=n,t++,n!=="."&&!_&&n!=="{"&&n!=="}"?u+=n:n==="."&&(_=!0);a+"";var o=r[u];o||(o=new Set,r[u]=o),o.add(a)}else t++}return r}function parseQuestionVariable(e){return e.substring(2,e.length-1).split(".").map(function(r){return r.replace("_","")})}function parseVariableValue(e,r,t,n){var i=t.substring(2,t.length-1).split("."),a=(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(i,2),u=a[0],_=a[1];if(u.startsWith("_")&&n)return r?Object.keys(r).map(function(o){var s=r[o];return s===!0?n[o]:n[o]||""+s}).join(";"):void 0;if(u&&!_)return r&&e[u]==="boolean"?!0:r?Object.values(r)[0]:"";if(u&&_){if(e[_]==="boolean")return!!(r&&r[_]!==void 0);if(r)return r[_]}}function getQuestionExpress(e,r){var t,n={};return(t=e.children)===null||t===void 0||t.forEach(function(i){var a=i.attribute&&i.attribute[r];a&&(n[i.id]=a)}),n}var ENVS={compile:function(r,t){var n=Object.keys(t||{}),i=n.map(function(a){return t[a]});return(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_construct_js__WEBPACK_IMPORTED_MODULE_4__.Z)(Function,n.concat(["return (".concat(r,");")])).apply(void 0,(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(i))}};function parseAttribute(e,r){var t={};if(isDataNode(e.type)){var n;(n=e.children)===null||n===void 0||n.forEach(function(a){var u=a.attribute&&a.attribute[r];u&&(t[e.id]||(t[e.id]={}),t[e.id][a.id]=u)})}else{var i;(i=e.children)===null||i===void 0||i.forEach(function(a){Object.assign(t,parseAttribute(a,r))})}return t}function isNumeric(e){return typeof e=="number"?e:typeof e!="string"?!1:!isNaN(e)&&!isNaN(parseFloat(e))}function cleanValue(e,r){var t;if(r&&(t=r.attribute)!==null&&t!==void 0&&t.numericScale){var n=Math.round(e*Math.pow(10,r.attribute.numericScale))/Math.pow(10,r.attribute.numericScale);return isValid(n)?n:void 0}if(!!isValid(e))return isNumeric(e)?Math.round(e*1e3)/1e3:e}function checkIsMobile(){var e=!1;return function(r){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}var formulaKeys=Object.keys(_formulajs_formulajs__WEBPACK_IMPORTED_MODULE_0___default());formulaKeys.forEach(function(e){window[e]=_formulajs_formulajs__WEBPACK_IMPORTED_MODULE_0___default()[e]});function formulaParse(e,r){for(var t=0,n=[],i=!0;t<e.length;){var a=e[t],u=e[t+1];if(a==="#"&&u==="{"){for(var _="";a!=="}";)_+=a,t++,a=e[t];_+="}",t++;var o=r(_);if(isValid(o))typeof o=="string"?n.push("'".concat(o.replaceAll("'","\\'"),"'")):n.push(o);else{i=!1;break}}else n.push(a),t++}if(!i)return{success:!0,result:void 0};try{var s=ENVS.compile(n.join(""),{});return{success:!0,result:s}}catch(f){return console.error("\u516C\u5F0F\u89E3\u6790\u5931\u8D25",n.join("")),{success:!1}}}function parseFloatExpression(exp){var _exp$match,newExp=exp;return(_exp$match=exp.match(/(\([\d\.\+\-\*\/]{3,}\))/g))===null||_exp$match===void 0||_exp$match.forEach(function(m){try{var val=Number(eval(m).toFixed(3));newExp=newExp.replace(m,val)}catch(e){}}),newExp}function randomId(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,r=(0,nanoid__WEBPACK_IMPORTED_MODULE_5__.kP)("_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",e);return r()}function isWechat(){return/MicroMessenger/i.test(window.navigator.userAgent)}function findPos(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=r;if(e.offsetParent){do t+=e.offsetTop;while(e=e.offsetParent);return t}}function scrollToDataId(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=document.querySelector("[data-id='".concat(e,"']"));if(t){var n=findPos(t,r);window.scroll({top:n})}}function schemaHasAttribute(e){for(var r,t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return((r=e.children)===null||r===void 0?void 0:r.some(function(a){return!!(a.attribute&&n.some(function(u){var _;return((_=a.attribute)===null||_===void 0?void 0:_[u])!==void 0})||schemaHasAttribute.apply(void 0,[a].concat(n)))}))||!1}function parseInitialValuesFromUrlParameter(e,r){var t,n={};function i(u){var _;(_=u.children)===null||_===void 0||_.forEach(function(o){n[o.id]={type:u.type,qId:u.id}})}e==null||(t=e.children)===null||t===void 0||t.forEach(function(u){if(u.type==="QuestionSet"){var _;(_=u.children)===null||_===void 0||_.forEach(function(o){return i(o)})}else i(u)});var a={};return Object.keys(r.query).forEach(function(u){var _=r.query[u];n[u]&&(a[n[u].qId]=(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},a[n[u].qId]),{},(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},u,_)))}),a}function parseRedirectUrl(e,r){var t,n=e;return(t=e.match(/(#\{.+?\})/g))===null||t===void 0||t.forEach(function(i){var a=i.replace("#{","").replace("}","");r[a]&&(n=n.replaceAll(i,Object.values(r[a]).join(",")))}),n}function flatSurveySchema(e){var r,t,n=[];return isDataNode(e.type)&&((r=e.attribute)===null||r===void 0?void 0:r.display)!=="hidden"&&n.push(e),(t=e.children)===null||t===void 0||t.forEach(function(i){return n.push.apply(n,(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(flatSurveySchema(i)))}),n}function schemaId2title(e){var r={},t=function n(i){r[i.id]=i.title,i.children&&i.children.forEach(n)};return t(e),r}function renderResultMessage(e,r,t,n){r||(r="\u95EE\u5377\u5230\u6B64\u7ED3\u675F\uFF0C\u611F\u8C22\u60A8\u7684\u53C2\u4E0E\uFF01");var i=new DOMParser,a=i.parseFromString(r,"text/html");a.querySelectorAll(".ql-label").forEach(function(p){p.textContent="".concat(n||0)});var u=parseOptionTypes(e),_=schemaId2title(e);a.querySelectorAll(".ql-score-logic").forEach(function(p){var m=p.dataset.formula;if(m){var v=formulaParse(m,function(b){var g=parseQuestionVariable(b),l=(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(g,1),d=l[0],c=t[d];return d==="score"?n:parseVariableValue(u,c,b,_)});v.success&&(p.innerHTML=v.result)}});for(var o=Array.from(a.body.childNodes),s=0;s<o.length;s++){var f;(f=document.getElementById("result-message"))===null||f===void 0||f.appendChild(o[s])}}}}]);
