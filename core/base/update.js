(function(ns) {

    /** 更新客户端版本。当判断用户小程序所在客户端版本过低时，可使用该接口跳转到更新微信页面。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.updateWeChatApp.html */
    ns.updateEnvApp = function(object) {

    };

    /** 更新客户端版本。当判断用户小程序所在客户端版本过低时，可使用该接口跳转到更新微信页面。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.updateWeChatApp.html */
    ns.updateWeChatApp = ns.updateWeChatApp || function(object) {
        throw  '"updateWeChatApp" is obsolete, please use "updateEnvApp".';
    };
    
    /** 获取全局唯一的版本更新管理器，用于管理小程序更新。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getUpdateManager.html */
    ns.getUpdateManager = ns.getUpdateManager || function() {

    };

})(window.api);