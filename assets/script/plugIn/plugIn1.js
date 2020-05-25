//-- 在cocoscreator中设置plugIn插件脚本
//-- 不在任何函数内声明的局部变量在插件脚本内都会暴露成全局变量
var ggbaolou = "9999";
window.ggTestpackage = "scene-script scene-walker.js";

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
        testVar = this.Down();//-- 这里应该是tt的调用对象
        console.log("testVar ==", testVar);
        console.log("test  PlugIn ==> Emitter.prototype.tt this1 ==", this); //测试结果 这里应该是tt的调用对象 
    };

    var EmiterObj = new Emitter();
    EmiterObj.Down();
    EmiterObj.tt();

    console.log("test  PlugIn this1 ==", this); //test  PlugIn this1 == Window


    testTest= function(e, t) {
        console.log("++++++++++++++++++++++++++++ e.length ==", e.length);
        for (let a = 0; a < e.length; a++) {console.log(a + "------------", e[a]);}
        console.log("***************************");
        for (let n = 0; n < 10; n++) {console.log(n + "------------", t[n]);}
        };
    //let obj1 = {a:"abc", b:"def", c:"hij"};
    //let obj2 = {aa:"aabbcc", bb:"ddeeff", cc:"hhiijj"};

    let obj1  = ["abc", "def", "hij"];
    let obj2 = ["aabbcc", "ddeeff","hhiijj"];
    testTest(obj1,obj2);

    //console.log("=============================");
    //for (var n = 0; n < 10; n++) console.log(n + "------------", obj2[n]);

    testZuoYongYu = function(){
        for(var i=0; i<10; i++) {
            console.log( i );
            }
        
        for (var i = 1; i <= 5; i++) {
            setTimeout(function timer() {
            console.log(i);
            }, i * 1000);
        }
        //每次打印出来都将会是6，延迟函数的回调会在循环结束时才执行
        //根据作用域的工作原理，实际情况是尽管循环中的五个函数是在各个迭代中分别定义的，
        //但是它们都被封闭在一个共享的全局作用域中，因此实际上只有一个i。
    }

    /**
     * 在 ES5 及之前版本，JavaScript 只拥有函数作用域，没有块作用域（with 和 try...catch 除外）。在 ES6 中，JS 引入了块作用域，{ } 内是单独的一个作用域。采用 let 或者 const 声明的变量会挟持所在块的作用域，也就是说，这声明关键字会将变量绑定到所在的任意作用域中（通常是 {...} 内部）。
     */

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

    console.log("test  PlugIn this2 ==", this); //test  PlugIn this2 == Window
})();


