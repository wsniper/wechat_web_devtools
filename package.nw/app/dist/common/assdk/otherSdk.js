"use strict";function init(){function e(e,t){o.stopPullDownRefresh(e,t),t({errMsg:"stopPullDownRefresh:ok"})}function t(e,t){o.sendASSDK("openSetting",e,t)}var o=require("../../actions/webviewActions.js");require("../../stores/projectStores.js");_exports={openSetting:t,stopPullDownRefresh:e}}var _exports;init(),module.exports=_exports;