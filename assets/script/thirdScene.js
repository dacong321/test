// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var config = require("config");
cc.Class({
    extends: cc.Component,

    properties: {
    },


    onLoad() {
        this.addEvent();
        this.initMonster();
    },

    start () {

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
                    self.killMonsterOneByOne();
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
        // new 一个对象池
        this.monsterPoor = new cc.NodePool();
        let monsterCnt = 5;
        for(let i = 0 ; i < monsterCnt ; i++){
            cc.log("prefab=", prefab);
            let mt = cc.instantiate(prefab);
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
    //-------------------------事件的使用----------------------------------------------------------
    addEvent(){
        this.node.on("KFC", function(event){
            cc.log("hhh 收到了", event);
        });
    },
    sendLocalEvent(){
        this.node.emit("KFC", {Key: 123});
    }
});
