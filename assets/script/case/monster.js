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

    onLoad () {
        this.canClickCnt = 0;
        let self= this;
        this.node.on(cc.Node.EventType.MOUSE_DOWN , function(){
            cc.log("我被点击了==" + self.canClickCnt + "次");
            if(self.canClickCnt == 5){
                self.node.emit("Over", self.node.name);
            }
            self.canClickCnt ++;
        });
    },

    start () {

    },

    // update (dt) {},
});
