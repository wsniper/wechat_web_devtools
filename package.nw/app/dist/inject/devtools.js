"use strict";!function(){function e(e,t,n,o){var a={to:e,msg:t,command:n,ext:o};a.comefrom="webframe",a.webviewID=d,window.postMessage(a,"*")}function t(){window.prompt,window.confirm,window.alert;window.alert=function(t){var n={type:"alert",msg:t};e("backgroundjs",n)},window.confirm=function(e){return!0}}function n(t){try{if("appservice"!==t){s=new WebInspector.DeviceModeModel(function(){}),s._target=WebInspector.targetManager.mainTarget(),s._applyTouch(!0,!0),s._target.emulationAgent().invoke_setDeviceMetricsOverride(f,function(){e("backgroundjs","","INIT_DEVTOOLS_SUCCESS")});var o=WebInspector.DOMModel.prototype.setInspectMode;WebInspector.DOMModel.prototype.setInspectMode=function(e,t){"searchForNode"===e?s._applyTouch(!1,!1):setTimeout(function(){s._applyTouch(!0,!0)},1e3/60),o.call(this,e,t)}}else{var a,r=function(e){var t=e.data;a||(a=document.getElementsByTagName("iframe")[0]);var n=t.securityDetails(),o={command:"securityDetails",url:t.url,statusCode:t.statusCode,remoteAddress:t._remoteAddress};if(n){o.protocol=n.protocol,o.securityState=t.securityState();new Date;t.target().networkManager.certificateDetailsPromise(n.certificateId).then(function(e){var t=e.issuer?e.issuer.toLocaleLowerCase():"";t.indexOf("rapidssl")===-1&&t.indexOf("symantec")===-1&&t.indexOf("geotrust")===-1&&t.indexOf("thawte")===-1&&t.indexOf("trustasia")===-1||(o.securityState="secure"),a.contentWindow.postMessage(o,"*")})}else a.contentWindow.postMessage(o,"*")};if(u>=55){var i=(WebInspector.targetManager._targets[0],new WebInspector.NetworkManager(WebInspector.targetManager._targets[0]));i.addEventListener(WebInspector.NetworkManager.Events.ResponseReceived,r),i._networkAgent.setCacheDisabled(!0)}else WebInspector.targetManager._targets[0].networkManager.addEventListener("ResponseReceived",r),WebInspector.targetManager._targets[0].networkManager._networkAgent.setCacheDisabled(!0);InspectorFrontendHost.openInNewTab=function(e){/^http:\/\/\d*\.appservice\.open\.weixin\.qq\.com/.test(e)||window.open(e)}}}catch(e){setTimeout(function(){n(t)},1e3/60)}}function o(){var e=WebInspector.inspectorView.showPanel;WebInspector.inspectorView.showPanel=function(t){w[t]&&(t="console"),localStorage.setItem("panelName",t),e.call(this,t)}}function a(){var e=(document.querySelector(".inspector-view-toolbar"),document.querySelector(".inspector-view-tabbed-pane")||document.querySelector(".insertion-point-main")),t=e.shadowRoot,n={childList:!0,subtree:!0};i(t,n,function(e){for(var t=e.addedNodes,n=0,o=t.length;n<o;n++){var a=t[n];return"tabbed-pane-header-tab"===a.className}},function(){m.forEach(function(e){var n=t.querySelector("#"+e);n.style.display="none",i(n,{attributes:!0},function(e){var t=e.target;t.classList.contains("selected")&&WebInspector.inspectorView.showPanel("console")},function(){})});var e=t.querySelector(".tabbed-pane-tab-slider");i(t.querySelector(".tabbed-pane-header-tabs"),{attributes:!0,subtree:!0},function(n){var o=t.querySelector(".selected"),a=o.offsetLeft,r=o.offsetWidth,i="transform: translateX("+a+"px); width: "+r+"px;";e.style.cssText=i},function(){})})}function r(){l?(a(),o(),n("appservice")):n(),e("contentscript",{},"SHAKE_HANDS")}function i(e,t,n,o){var a=new MutationObserver(function(e){for(var t=0,r=e.length;t<r;t++){var i=e[t];if(n(i)){o(),a.disconnect();break}}});a.observe(e,t)}if("chrome-devtools:"===location.protocol){var s,c=navigator.userAgent,d=parseInt(c.match(/webview\/(\d*)/)[1]),u=(c.match(/chromeRuntimeID\/(.*)\s?/)[1],parseInt(c.match(/Chrome\/(\d\d)/)[1])),l=c.indexOf("asviewdevtools")!==-1,p="",f={width:375,height:667,deviceScaleFactor:2,mobile:!0,fitWindow:!1};window.location.hash="no-back-button",window.location.hash="Again-No-back-button",window.onhashchange=function(){window.location.hash="no-back-button"},t(),window.addEventListener("message",function(n){var o=n.data||{},a=o.command,r=o.msg;if("init"===a)f.width=parseInt(r.width),f.height=parseInt(r.height),f.deviceScaleFactor=parseFloat(r.dpr),s&&s._target.emulationAgent().invoke_setDeviceMetricsOverride(f,function(){e("backgroundjs","","INIT_DEVTOOLS_SUCCESS")}),t(o);else if("setEmulate"===a)f.width=parseInt(r.width),f.height=parseInt(r.height),f.deviceScaleFactor=parseFloat(r.dpr),s._target.emulationAgent().invoke_setDeviceMetricsOverride(f,function(){});else if("SHOW_PANEL"===a){var i=["Wxml","Storage","AppData"],c=r.name;i.indexOf(o.name)&&(p||(p=document.getElementsByTagName("iframe")[0].src.match(/chrome-extension:\/\/([A-Za-z0-9]*)/)[0]),c=""+p+c),WebInspector.inspectorView.showPanel(c)}});var w={element:!0,timeline:!0,profiles:!0,security:!0,audits:!0,resources:!0},m=["tab-elements","tab-timeline","tab-profiles","tab-security","tab-audits","tab-resources"];i(document.body,{childList:!0},function(e){for(var t=e.addedNodes,n=0,o=t.length;n<o;n++){var a=t[n];return"widget vbox root-view"===a.className}},function(){r()})}}();