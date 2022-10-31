(function(ns) {

    // 重启当前游戏。 https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.restartMiniProgram.html
    ns.restartGame = ns.restartGame || function() {
        
    };

    // 打开另一个程序。 https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.restartMiniProgram.html
    ns.navigateToOtherProgram = ns.navigateToOtherProgram || function() {
        
    };

    // 退出当前游戏。必须有点击行为才能调用成功。 https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.restartMiniProgram.html
    ns.exitGame = ns.exitGame || function() {
        
    };

    // 重启当前小程序。 https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.restartMiniProgram.html
    ns.restartMiniProgram = ns.restartMiniProgram || function() {
        throw  '"restartMiniProgram" is obsolete, please use "restartGame".';
    };

    // 打开另一个小程序。 https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.navigateToMiniProgram.html
    ns.navigateToMiniProgram = ns.navigateToMiniProgram || function() {
        throw  '"navigateToMiniProgram" is obsolete, please use "navigateToOtherProgram".';
    };

    // 退出当前小程序。必须有点击行为才能调用成功。 https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.exitMiniProgram.html
    ns.exitMiniProgram = ns.exitMiniProgram || function() {
        throw  '"exitMiniProgram" is obsolete, please use "exitGame".';
    };

})(window.api);