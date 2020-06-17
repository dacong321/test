
cc.Class({
    name: 'cc.MyComponent',
    extends: cc.Component,
    properties: {
        webview :{
            default: null,
            type: cc.WebView
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var webviewEventHandler = new cc.Component.EventHandler();
        webviewEventHandler.target = this.onDestroy;// 事件处理代码组件所在节点
        webviewEventHandler.component = 'cc.MyComponent';
        webviewEventHandler.handler = "callback";
        webviewEventHandler.customEventData = "foobar";

        this.webview.webviewEvents.push(webviewEventHandler);
    },

    start () {
    },

    //注意参数的顺序和类型是固定的
    callback: function (webview, eventType, customEventData) {
        //这里 webview 是一个 WebView 组件对象实例
        // 这里的 eventType === cc.WebView.EventType enum 里面的值
        //这里的 customEventData 参数就等于你之前设置的 "foobar"
        cc.log("我被调用了吗");
        cc.log("eventType == ",eventType)
    }

    // update (dt) {},
});
