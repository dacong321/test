// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

//-- 这个脚本必须挂载在 clipNode 节点上。 在clipNode节点上的clip动画触发的事件 会找下方相应的函数。动画编辑器的FUNCTION是clipEvent， 参数是动画编辑器的"xxx" "ssss"
//-- 在制作动画的时候 动画编辑器下方有一个clip：的一个多选框， 是用来选择多个动画进行编辑的！！！
//-- 制作动画前，是要先选择一个带有 Animation 组件的动画节点，然后在进行操作的。在动画编辑器上方显示的是此节点的名字，下方属性列表才是动画的属性。
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    clipEvent(string1, string2){
        cc.log("clipEvent 被触发，打印参数" + string1 + string2);
    },
    clipEvent2(){
        cc.log("clipEvent2222");
    },
    diergeClip(){
        cc.log("第二个clip");
    },
});
