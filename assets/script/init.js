// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

// var sub1 = require("subb");
// var ttestt = require("ttestt");
var handle = require("handler");
require("ddCom");
cc.Class({
    extends: cc.Component,

    properties: {
        foo: {
            // ATTRIBUTES:
            default: null,        // The default value will be used only when the component attaching
                                  // to a node for the first time
            type: cc.SpriteFrame, // optional, default is typeof default
            serializable: true,   // optional, default is true
        },
        bar: {
            get () {
                return this._bar;
            },
            set (value) {
                this._bar = value;
            }
        },
        toggleSingle1:{
            default:null,
            type:cc.Toggle,
        },
        toggleSingle2:{
            default:null,
            type:cc.Toggle,
        },
        toggleDouble:{
            default:null,
            type:cc.Toggle,
        },
        nodeRoot: {
            default: null,
            type: cc.Node,
        },
        usedNotify:{
            //-- 必须要有default,usedNotify被赋值时notify才会被触发
            default:0,
            type: cc.Integer,
            notify(){
                cc.log("usedNotify被重新赋值了 this.usedNotify = ", this.usedNotify);
            }
        }
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        cc.log("init onLoad 被执行");
        
    },

    start () {
        cc.log("==========================");
        //this.testSub();
        //this.testHandler(); 
        //this.testPlugInBase();
         //this.testDouhaoUsed();
        //this.testccJsAndAddNode();
        //this.testPlugInAddProtoTypeUsed();
        //this.testCreateHersSprite();
        //this.testggCom();
        //this.testPlugInJsGlobalVar();
        //this.testGlobalNode();
        //this.testClipAnimation();
        //this.testReadJson();
        this.testUsedNotify();
        cc.log("==========================");
    },

    // update (dt) {},
    //-- 调用原生接口
    usedNaviate(msg){
        let level = 100;
        //-- js中调用java方法
        //-- 传入 Java 的类名，方法名，方法签名，参数就可以直接调用 Java 的静态方法，并且可以获得 Java 方法的返回值。
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            cc.log("原生接口");
           // msg = this.buffer_string + '\n[cclog][' + clock + '][' + tag + ']' + msg;

            //-- 方法签名分别是 I    Ljava/lang/String;    Ljava/lang/String;    即int string string
            //jsb.reflection.callStaticMethod("com/CommonUtils", "log", "(ILjava/lang/String;Ljava/lang/String;)V", level, 'cclog', msg);

            jsb.reflection.callStaticMethod("com/CommonUtils", "hello", "(Ljava/lang/String;)V", "this is a message from js");
            return;
        }else{
            cc.log("没钓到原生接口");
        }
    },
    useNaviate2(){
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod("com/CommonUtils", "hello", "(Ljava/lang/String;)V", "this is a message from js 666 单选");
        }
    },
    useNaviate3() {
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", "title", "hahahahha");
        }
    },
    //-- 测试全局域中的数据，只需require不需要拿东西接，就可使用gg的东西
    testggCom(){
        //-- 表示只要require了，并且require的数据在全局域中，就可以打印出全局域中的属性
        cc.log("gg===", gg);
    },
    //-- 制作globalNode预制体组件，将预制体组件放倒场景中
    testGlobalNode(){
          cc.log("globalNode 并不随场景的切换而消失");
          let sence = cc.director.getScene();
          cc.log("sence == ", sence);

        // cc_Scene
        // anchorX: (...)
        // anchorY: (...)
        // angle: (...)
        // autoReleaseAssets: false
        // children: Array(2)
        // 0: cc_Node {_name: "Canvas", _objFlags: 0, _parent: cc_Scene, _children: Array(1), _active: true, …}
        // 1: cc_Node {_name: "PROFILER-NODE", _objFlags: 64, _parent: cc_Scene, _children: Array(2), _active: true, …}
        cc.log("然后将 全局节点放在场景上");
        cc.loader.loadRes("testPreFab/GlobalNode", cc.Prefab, function(err, preFab){
            if(err){
                cc.log("加载预制体失败");
            }else{
                cc.log("加载预制体成功");
                let a = cc.instantiate(preFab);
                sence.addChild(a);  //只有附加到场景（节点）上才可以 执行预置体中js组件的onLoad
                gg.globalNode.testFuncInGlobalNode();
            }
        })
   
    },
    //-- 测试自己组合的函数
    testCreateHersSprite(){
        let sp = gg.createHelper.createSprite("testSp", "testRes/", "club_desk_base_blue");
        if(sp != null && typeof sp !="undefined"){
            this.node.addChild(sp.node);
            cc.log("sp ===", sp);
        }
    },
    // -- 测试require出的js的handle
    testHandler() {
        handle.test();
    },
    // -- 测试组件附加到节点上后组件的属性，和本身编辑器中节点上拖拽做好的组件的对比。（对比说明1.组件要添加到节点上。）
    findProperties(){
        cc.log("---------------------------");
        cc.log("this.toggleSingle1", this.toggleSingle1);
        cc.log("this.toggleDouble", this.toggleDouble);
        let togCon = new cc.Node("toggleContainer");
        togCon.addComponent(cc.ToggleContainer);
        togCon.parent = this.node;

        //let togObj = new cc.Toggle();
        let tNode = new cc.Node("TTT");
        tNode.addComponent(cc.Toggle);
        tNode.parent = togCon;
        cc.log("new cc.Toggle()", tNode.getComponent(cc.Toggle));
        this.testToggle = tNode.getComponent(cc.Toggle);
        cc.log("---------------------------");
    },
    // -- 测试逗号表达式
    testDouhaoUsed(){

        var args = 1,s2 ="sss";
        cc.log(args);
        cc.log(s2);
        function ttes(){
            var i = 0;
            return (i+=1, i);
        }
        cc.log(ttes());
    },
    // -- 测试子类继承父类（子类继承父类，子类脚本附加到节点上，父类当然不用附加到节点）
    testSub(){
        cc.log("this == ", this);

        let suba = this.node.getComponent("subb");
        cc.log("suba == ", suba);
        // cc.log("sub1 == ", sub1);
        // cc.log("sub1.num2 == ", sub1.num2);
        // cc.log("sub1.num == ", sub1.num);
        suba.testBase();

    },
    //-- 测试插件脚本中的全局变量
    testPlugInJsGlobalVar(){
        cc.log("====它在插件脚本中的立即执行函数中 放入了window属性了 ", plugInVar); 
        cc.log("====它在插件脚本中，未在任何函数内包含 不放入window属性，他也是全局域的 ", ggbaolou);
    },
    // -- 测试插件脚本，在内存中存在，并且调用静态方法和对象方法
    testPlugInBase(){
        // -- 插件脚本的类型可以直接拿来用
        cc.log("Base", Base);
        // -- 插件类型自带的属性
        Base.test4();
        // --创建插件类型对象
        let obj = new Base();
        obj.test1();

    },
    // --测试另一个插件脚本（在属性检查器中，允许编辑器加载的脚本）
    testPlugInAddProtoTypeUsed(){
        // --调用插件暴露出的函数。
        this.toggleSingle1.setSelectState(true);
        // --自己组成组件，然后调用插件暴露出的函数
        this.findProperties();
        this.testToggle.setSelectState(true);
    },
    // -- 获取此脚本是否存在，存在则附加到节点上，然后在节点上获取组件进行操作。
    testccJsAndAddNode(){
        let js = cc.js.getClassByName("dianmiacAdd");
        cc.log("js ==", js);
        if (js) {
            this.nodeRoot.addComponent(js);
            cc.log("this.nodeRoot", this.nodeRoot);
            this.nodeRoot.getComponent("dianmiacAdd").dianmiacAddTest();
        }else{
            cc.log("没有此Js脚本");
        }
    },
    // -- 测试
    testGetClassByName() {
        if (cc.js.getClassByName("subb")) {
            cc.log(" cc.js.getClassByName");
        } else {
            cc.log("Cant find class");
        }
        cc.log("==========================");
        cc.log("cc.js. == ", cc.js);
    },
    //-- 测试clip动画
    testClipAnimation(){
        let clipNode = cc.find("clipNode", this.node);
        let clip = clipNode.getComponent(cc.Animation);
        this.node.runAction(cc.sequence(
            cc.callFunc(function () { clip.play("clipNode");  cc.log("第一个动作")},
                ),
                //-- 中间间隔的时间要把第一个动画播完的，不播完第一个动画的事件有可能不被触发。
                cc.delayTime(3.5),
                cc.callFunc(function () {
                    clip.play("clipNode22");
                })
        ));
      
    },
    //=====================================================================
    //-- 这个两个函数没有绑在NodeClip节点上，所以，节点上的事件找不到此二个函数。
    clipEvent(string1, string2){
        cc.log("clipEvent 被触发，打印参数" + string1 + string2);
    },
    clipEvent2(){
        cc.log("clipEvent2222");
    },
    //=====================================================================
    //-- 测试json
    testReadJson(){
        cc.loader.loadRes("config/peizi", function(err, jsonObj){
            if(err){
                cc.log("Cant Laoded");
                return;
            }
            cc.log("Json = ", jsonObj.json);
        })
    },
    //=====================================================================
    testUsedNotify(){
        this.usedNotify = 2;
        cc.log( "this.usedNotify = 2;",  this.usedNotify)
    },
});
