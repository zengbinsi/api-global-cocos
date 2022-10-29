(function(ns) {

    // 启动参数
    const launchInfo = {};
    // 唤醒参数
    const enterInfo = {};

    // 监听小游戏回到前台的事件。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.onShow.html
    ns.onShow = ns.onShow || function(listener) {

    };

    // 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.onHide.html
    ns.onHide = ns.onHide || function(listener) {

    };

    // 移除小游戏回到前台的事件的监听函数。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.offShow.html
    ns.offShow = ns.offShow || function(listener) {

    };

    // 移除小游戏隐藏到后台事件的监听函数。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.offHide.html
    ns.offHide = ns.offHide || function(listener) {

    };

    // 获取小游戏冷启动时的参数。热启动参数通过 wx.onShow 接口获取。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getLaunchOptionsSync.html
    ns.getLaunchOptionsSync = ns.getLaunchOptionsSync || function(listener) {
        
    };

    // 获取小游戏打开的参数（包括冷启动和热启动）。https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getEnterOptionsSync.html
    ns.getEnterOptionsSync = ns.getEnterOptionsSync || function(listener) {

    };
    
    

})(window.api);