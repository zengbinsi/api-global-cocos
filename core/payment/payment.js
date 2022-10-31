(function(ns) {

    // 发起支付。 https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.requestMidasPayment.html
    ns.requesPayment = ns.requesPayment || function(object) {
        
    };

    // 发起米大师支付。 https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.requestMidasPayment.html
    ns.requestMidasPayment = ns.requestMidasPayment || function(object) {
        throw  '"requestMidasPayment" is obsolete, please use "requesPayment".';
    };

    // 发起米大师朋友礼物索要。 https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.requestMidasFriendPayment.html
    ns.requestMidasFriendPayment = ns.requestMidasFriendPayment || function(object) {

    };
    
    

})(window.api);