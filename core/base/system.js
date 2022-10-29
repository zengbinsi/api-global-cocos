(function(ns) {

    /** 跳转系统蓝牙设置页。仅支持安卓。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.openSystemBluetoothSetting.html */
    ns.openSystemBluetoothSetting = ns.openSystemBluetoothSetting || function(object) {

    };
    
    /** 跳转系统微信授权管理页。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.openAppAuthorizeSetting.html */
    ns.openAppAuthorizeSetting = ns.openAppAuthorizeSetting || function(object) {

    };
    
    /** 获取窗口信息。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getWindowInfo.html */
    ns.getWindowInfo = ns.getWindowInfo || function() {

    };
    
    /** 获取设备设置。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemSetting.html */
    ns.getSystemSetting = ns.getSystemSetting || function() {

    };
    
    /** getSystemInfo 的同步版本。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoSync.html */
    ns.getSystemInfoSync = ns.getSystemInfoSync || function() {

    };
    
    /** 异步获取系统信息。需要一定的微信客户端版本支持，在不支持的客户端上，会使用同步实现来返回。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoAsync.html */
    ns.getSystemInfoAsync = ns.getSystemInfoAsync || function(object) {

    };

    ns.getSystemInfo = function() {
        throw  '"getSystemInfo" is obsolete, please use "getSystemInfoSync".';
    };

    /** 获取设备基础信息。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getDeviceInfo.html */
    ns.getDeviceInfo = ns.getDeviceInfo || function() {
        
    };

    /** 获取微信 APP 基础信息。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppBaseInfo.html */
    ns.getAppBaseInfo = ns.getAppBaseInfo || function() {

    };

    /** 获取微信 APP 授权设置。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppAuthorizeSetting.html */
    ns.getAppAuthorizeSetting = ns.getAppAuthorizeSetting || function() {

    };

})(window.api);