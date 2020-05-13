// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var http = require('http');
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

        SendBtn:{
            default:null,
            type:cc.Button
        },

        responstData:{
            default:null,
            type:cc.Label
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //this.httpRequest();
    },

    start () {

    },
    //-- 测试需要的服务端在NodeJs中找，例如demo 中运行node.http.js
    httpRequest: function() {

        var obj = {
            'url' : 'http://127.0.0.1:8181/',
            'success' : function(jsonData) {
                this.responstData.string = jsonData['info'];
            }.bind(this)
        }
        
        http.request(obj);
    },

    beginTouch:function(){
        this.httpRequest();
        console.log(this.responstData);
        this.addLable();
    },
    addLable(){
        this.recMsg = new cc.Node("recMsgNode");
        let lab = this.recMsg.addComponent(cc.Label);
        this.recMsg.parent = this.node;
        this.recMsg.y += 200;
        lab.string =  this.responstData.string;
    },
    // update (dt) {},
});
