(function(ns) {

    // 通过 WebSocket 连接发送数据。需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。 https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.sendSocketMessage.html
    ns.sendSocketMessage = ns.sendSocketMessage || function(object) {

    };

    // 监听 WebSocket 连接打开事件。 https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketOpen.html
    ns.onSocketOpen = ns.onSocketOpen || function(object) {

    };

    // 监听 WebSocket 接受到服务器的消息事件。 https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketMessage.html
    ns.onSocketMessage = ns.onSocketMessage || function(object) {

    };

    // 监听 WebSocket 错误事件。 https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketError.html
    ns.onSocketError = ns.onSocketError || function(object) {

    };

    // 监听 WebSocket 连接关闭事件。 https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketClose.html
    ns.onSocketClose = ns.onSocketClose || function(object) {

    };

    // 创建一个 WebSocket 连。 https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.connectSocket.html
    ns.connectSocket = ns.connectSocket || function(object) {

    };

    // 关闭 WebSocket 连接。 https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.closeSocket.html
    ns.closeSocket = ns.closeSocket || function(object) {

    };
    
    

})(window.api);
