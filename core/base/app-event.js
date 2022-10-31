(function(ns) {

    // 监听未处理的 Promise 拒绝事件。 https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onUnhandledRejection.html
    ns.onUnhandledRejection = ns.onUnhandledRejection || function(listener) {

    };

    // 监听全局错误事件。 https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onError.html
    ns.onError = ns.onError || function(listener) {

    };

    // 监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功。 https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html
    ns.onAudioInterruptionEnd = ns.onAudioInterruptionEnd || function(listener) {

    };

    // 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停 https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html
    ns.onAudioInterruptionBegin = ns.onAudioInterruptionBegin || function(listener) {

    };

    // 移除未处理的 Promise 拒绝事件的监听函数 https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offUnhandledRejection.html
    ns.offUnhandledRejection = ns.offUnhandledRejection || function(listener) {

    };
    
    // 移除全局错误事件。 https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offError.html
    ns.offError = ns.offError || function(listener) {

    };

    // 移除音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功。 https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offAudioInterruptionEnd.html
    ns.offAudioInterruptionEnd = ns.offAudioInterruptionEnd || function(listener) {

    };

    // 移除音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停 https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offAudioInterruptionBegin.html
    ns.offAudioInterruptionBegin = ns.offAudioInterruptionBegin || function(listener) {

    };

})(window.api);