(function(ns) {

    // 设置窗口大小，该接口仅适用于 PC 平台。 https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.setWindowSize.html
    ns.setWindowSize = ns.setWindowSize || function(object) {

    };

    // 监听窗口尺寸变化事件。 https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.onWindowResize.html
    ns.onWindowResize = ns.onWindowResize || function(listener) {

    };

    // 移除窗口尺寸变化事件的监听函数。 https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.offWindowResize.html
    ns.offWindowResize = ns.offWindowResize || function(listener) {

    };
    
    

})(window.api);