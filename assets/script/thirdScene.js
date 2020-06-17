// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var config = require("config");     //这个config不是cocos组件，不用this调用,直接 config.某某某
var timeClock = require("timeClock"); //这个timeColck是cocos组件，timeClock类型可以被继承。类型如果不被继承需要被实例化使用， new timeClock();
cc.Class({
    extends: cc.Component,

    properties: {
        A:{
            default:null,
            type:cc.Node
        },
        B: cc.Node,
        C: cc.Node,
        MaskNode:cc.Node,
        Graphics:cc.Graphics,
    },


    onLoad() {
        this.addEvent();
        this.initMonster();
    },

    start () {
        cc.log("MaskNode", this.MaskNode);
        this.drawGraphics();
    },
    drawGraphics(){
     

        this.Graphics.moveTo(20, 100);
        this.Graphics.lineTo(20, 20);
        this.Graphics.lineTo(70, 20);
        this.Graphics.fill();
        // this.Graphics.fillColor = new cc.Color().fromHEX('#0000ff');
        // this.Graphics.circle(200, 200, 200);
        // this.Graphics.fill();

    },
    //-------------------------事件的使用----------------------------------------------------------
    addEvent(){
        //-------------------------------------
        this.node.on("KFC", function(arg1){
            cc.log("hhh 收到了", arg1);
            cc.log("arguments", arguments);
        });

        //--------------------------------------系统点击和触摸事件--------------------------------
        //-- 测试触摸事件支持节点树的冒泡
        this.A.on(cc.Node.EventType.TOUCH_END, function(event){
            console.log("A has been touch", event);
        }, this);
        //-- 父节点的触摸或鼠标事件先于它的任何子节点派发，使用第四个参数
        this.B.on(cc.Node.EventType.TOUCH_END, function(event){
            console.log("B has been touch");
            //-- 这句是禁止冒泡的
           //event.stopPropagation();
        }, this, true);
        this.C.on(cc.Node.EventType.TOUCH_END, function(event){
            console.log("C has been touch");
        }, this);



        //-- 定时器设置暂停和重启系统事件
        let time = 5000;
        let self = this;
        let cbPause = function(){
            //暂停节点上注册的所有节点系统事件，节点系统事件包含触摸和点击事件，参数为true则暂停本节点和其子节点的节点系统事件
            self.A.pauseSystemEvents(true);
            cc.log("暂停节点上注册的所有节点系统事件，节点系统事件包含触摸和点击事件，参数为true则暂停本节点和其子节点的节点系统事件")
        };  
        let cbResume = function(){
            //-- 不加参数只恢复了A
            self.A.resumeSystemEvents();
            cc.log("恢复节点上注册的所有节点系统事件，节点系统事件包含触摸和点击事件，参数为true则恢复本节点和其子节点的节点系统事件")
        };

        let tObj = new timeClock();
        tObj.setTimer(cbPause, time);
        tObj.setTimer(cbResume, time * 2);
    },
    sendLocalEvent(){
        this.node.emit("KFC", {Key: 123}, 99, "oo");
    },
    //-------------------------对象池的使用----------------------------------------------------------
    // update (dt) {},
    initMonster(){
        let self = this;
        cc.loader.loadRes("testPreFab/monster", cc.Prefab, function(err, prefab){
                if(err){
                    cc.log("加载monster 失败");
                }else{
                    cc.log("加载monster OK");
                    self.preMonster = prefab;
                    self.initObjectPoor(prefab);
                    self.setMonsterToScene(2);
                    //self.killMonster();
                    //self.killMonsterOneByOne();
                    self.sendLocalEvent();
                }
        })
    },
    killMonster(){
        let scene = cc.director.getScene();
        let self = this;
        //-- 十秒后移除怪
        setTimeout(function(){
            //-- 未知 是否加载完成
            for(let i = 0; i < scene.children.length; i++){
                if(scene.children[i].name == "monster"){
                    //-- 返回给对象池
                    self.monsterPoor.put(scene.children[i]);
                    i = i-1;
                }
            }
            cc.log("this.monsterPoor ==" , self.monsterPoor);
            cc.log("scene.children ==" , scene.children);
        }, 1000);
    },
    createMonster(){
        let monster = null;
        if(this.monsterPoor.size() > 0){
            monster = this.monsterPoor.get();
        }else{
            monster = cc.instantiate(this.preMonster);
        }
        return monster;
    },
    // 添加对象到场景
    setMonsterToScene(cnt) {
        let scene = cc.director.getScene();

        for (let i = 0; i < cnt; i++) {
            let monster = this.createMonster();
            scene.addChild(monster);
            monster.x = config.monsterSrcPos.X * 5 * i;
            monster.y = config.monsterSrcPos.Y * 5 * i;
            cc.log("monster +" + i);
        }
    },
    initObjectPoor(prefab) {
        let self = this;
        // new 一个对象池
        this.monsterPoor = new cc.NodePool();
        let monsterCnt = 5;
        for(let i = 0 ; i < monsterCnt ; i++){
            cc.log("prefab=", prefab);
            let mt = cc.instantiate(prefab);
            mt.name = "monster" + i + 1;
            mt.on("Over", function(){
                cc.log("arguments === ", arguments);
                self.monsterPoor.put(mt);
                cc.log("self.monsterPoor === ", self.monsterPoor);
            })
            if(mt){
                //-- 将对象放入对象池
                this.monsterPoor.put(mt);
                cc.log("实例化 Ok");
            } else{
                cc.log("实例化 mt", mt);
            }
        }
    },
    killMonsterOneByOne(){
        let scene = cc.director.getScene();
        let needKillCnt = 4;
        let cb = function(){
            if(needKillCnt > 0){
                cc.log("Kill Monster");
                for(let i = 0; i < scene.children.length; i++){
                    if(scene.children[i].name == "monster"){
                        //-- 返回给对象池
                        this.monsterPoor.put(scene.children[i]);
                        break;
                    }
                }
            }else{
                this.unschedule(this.callback);
            }
            needKillCnt--;
        }
        this.schedule(cb, 1);
    },

});
