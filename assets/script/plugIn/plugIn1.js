//-- 在cocoscreator中设置plugIn插件脚本
//-- 不在任何函数内声明的局部变量在插件脚本内都会暴露成全局变量
var ggbaolou = "9999";

(function(){
    console.log("插件运行了吗？");
    //-- 在函数内的变量入过想暴露则，可以把它设为全局变量window的属性。
    var plugInVar = "plugInVar";
    window.plugInVar = plugInVar;
    function Emitter(obj){
        if(obj){
            return obj;
        }
    };
    Emitter.prototype.Down = function(){
        // -- 局部变量
        var testVar = "woshitestVar";
        cc.log("Emitter Down");
        return "我是返回值";
    };
    Emitter.prototype.tt = function(){
        // --未用use strict，未定义的变量一旦赋值就变成了全局变量
        testVar = this.Down();
        console.log("testVar ==", testVar);
    };

    var EmiterObj = new Emitter();
    EmiterObj.Down();
    EmiterObj.tt();
})();

// // -- 插件中暴露在函数外的变量 在其他脚本中在直接写变量名使用即可。
// (function(){
//     let url = "ws://127.0.0.1:8080";
//     this.socket = null;
//     this.socket = new WebSocket(url);
    
//     console.log("this.socket == ", this.socket);
// })();
(function(){
    function Base(obj){
        if(obj){
            cc.log("Base 被触发")
            return obj;
        }
    };
    Base.prototype.test1 = function(){
        console.log("test1");
    }
    Base.prototype.test2 = function(){
        console.log("test2");
    };
    Base.prototype.test3 = function(){
        console.log("test3");
    };
    Base.test4 = function(){
        console.log("test444444");
    };
    var BaseObj = Object.create(Base.prototype);
    console.log("BaseObj", BaseObj);
    console.log("BaseObj.prototype", BaseObj.prototype);
    console.log("Base.prototype", Base.prototype);


    BaseObj.test11 = function(){};
    console.log("BaseObj", BaseObj);
    console.log("Base", Base);
    window.Base = Base;
    cc.log("windowBase===", Base);
 //   BaseObj.prototype.test12 = function(){};
// Base
// __proto__:
// test1: ƒ ()
// test2: ƒ ()
// test3: ƒ ()
// constructor: ƒ Base(obj)
// __proto__: Object



})();