(function(ns) {

    // 加快触发 JavaScriptCore 垃圾回收（Garbage Collection）。GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。 https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.triggerGC.html
    ns.triggerGC = ns.triggerGC || function() {

    };

    // 小程序测速上报。使用前，需要在小程序管理后台配置。 https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.reportPerformance.html
    ns.reportPerformance = ns.reportPerformance || function(id, value, dimensions) {

    };

    // 获取性能管理器 https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.getPerformance.html
    ns.getPerformance = ns.getPerformance || function() {

    };
    
    

})(window.api);