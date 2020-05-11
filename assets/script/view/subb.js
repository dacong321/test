// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
let Base = require("Base");
cc.Class({
    extends: Base,

    properties: {
        num2 : 666,
        ssi : cc.v2(7,8),
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log("subb onLoad 被执行");
    },

    start () {
        cc.log("subb start 被执行");
    },

    // update (dt) {},
    test11(){
        cc.log("subb test11 被执行");
    },
    testBase(){
        cc.log("子类覆盖测试基类的函数");
    },
});
