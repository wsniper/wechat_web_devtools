"use strict";function init(){function e(e){var t=e.headers.host,p=e.connection.encrypted&&!/^http:/.test(e.url)?"https":"http",i="http"===p?e.url:p+"://"+t+e.url,o=r.parse(i);return o.pureHref=o.href.replace(/\?.*/,"").replace(/\#.*/,""),o}var r=(require("fs"),require("url")),t=require("path"),p=(require("zlib"),require("../../utils/report.js"),require("../../weapp/weApp.js")),i=require("../../config/config.js"),o="https://clients1.google.com/tbproxy/af/",s=i.weappURLRegular,n=i.weappASURLRegular,u=i.weappLocalIdRegular;_exports={shouldUseLocalResponse:function(r,t){var p=e(r),i=p.pureHref;return!!s.test(i)||(0===i.indexOf(o)||(!!n.test(i)||!!u.test(i)))},dealLocalResponse:function(r,i,a){var c=e(r),l=c.pureHref;if(s.test(l)){var f=c.href;p.getResponse(f,function(e,r,p){if(e)return void a(e,r,p||"");t.extname(f).replace(".","");a(200,r,p)})}else 0===l.indexOf(o)?a(400,{},""):n.test(l)?p.getAppservice(l,function(e,r,t){return e?void a(e,{},t):void a(200,r,t)}):u.test(l)&&p.getLocalIdResponse(l.replace(u,"wxfile://"),function(e,r,t){return e?void a(e,{},t):void a(200,r,t)})}}}var _exports;init(),module.exports=_exports;