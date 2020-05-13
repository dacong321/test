// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});


module.exports = {
    request: function(obj) {
        var httpRequest = new XMLHttpRequest();
        var time = 5*1000;
        var timeout = false;

        // 超时设置
        var timer = setTimeout(function(){
            timeout = true;
            httpRequest.abort();
        }, time);

        var url = obj.url;

        // 组织请求参数
        if (typeof obj.data == 'object') {
            console.info('obj.data=' + JSON.stringify(obj.data));
            var kvs = []
            for (var k in obj.data) {
               kvs.push(encodeURIComponent(k) + '=' + encodeURIComponent(obj.data[k]));
            }
            url += '?';
            url += kvs.join('&');
        }

        httpRequest.open(obj.method?obj.method:'GET', url, true);
        
        httpRequest.onreadystatechange = function () {
            var response = httpRequest.responseText;
            console.info('http url cb:' +  url + ' readyState:' + httpRequest.readyState + ' status:' + httpRequest.status);
            clearTimeout(timer);

            if (httpRequest.readyState == 4) {
                console.info('http success:' + url + ' resp:' + response);
                var resJson = JSON.parse(response);
                if (typeof obj.success == 'function') {
                    //obj.success(response);
                    obj.success(resJson);
                }
            } else {
                console.info('http fail:' + url);
                if (typeof obj.fail == 'function') {
                    obj.fail(response);
                }
            }
        };
        httpRequest.send();
    }
}