window.__require = function e(t, c, o) {
function n(i, r) {
if (!c[i]) {
if (!t[i]) {
var a = i.split("/");
a = a[a.length - 1];
if (!t[a]) {
var l = "function" == typeof __require && __require;
if (!r && l) return l(a, !0);
if (s) return s(a, !0);
throw new Error("Cannot find module '" + i + "'");
}
}
var u = c[i] = {
exports: {}
};
t[i][0].call(u.exports, function(e) {
return n(t[i][1][e] || e);
}, u, u.exports, e, t, c, o);
}
return c[i].exports;
}
for (var s = "function" == typeof __require && __require, i = 0; i < o.length; i++) n(o[i]);
return n;
}({
Base: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "04eae3L6WBL0bKiJAwf+DD1", "Base");
cc.Class({
extends: cc.Component,
properties: {
num: 222,
size: cc.v2(100, 156)
},
onLoad: function() {
cc.log("base onLoad 被执行");
},
start: function() {
cc.log("base start 被执行");
},
testBase: function() {
cc.log("测试基类的函数");
}
});
cc._RF.pop();
}, {} ],
HelloWorld: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "269cdN3SqRO3JcFnXFnWCsj", "HelloWorld");
var o = e("http");
cc.Class({
extends: cc.Component,
properties: {
SendBtn: {
default: null,
type: cc.Button
},
responstData: {
default: null,
type: cc.Label
}
},
onLoad: function() {},
start: function() {},
httpRequest: function() {
var e = {
url: "http://127.0.0.1:8181/",
success: function(e) {
this.responstData.string = e.info;
}.bind(this)
};
o.request(e);
},
beginTouch: function() {
this.httpRequest();
console.log(this.responstData);
this.addLable();
},
addLable: function() {
this.recMsg = new cc.Node("recMsgNode");
var e = this.recMsg.addComponent(cc.Label);
this.recMsg.parent = this.node;
this.recMsg.y += 200;
e.string = this.responstData.string;
}
});
cc._RF.pop();
}, {
http: "http"
} ],
clipNode: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "62d4b9hsqdPmZZmUM5b72Pv", "clipNode");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
clipEvent: function(e, t) {
cc.log("clipEvent 被触发，打印参数" + e + t);
},
clipEvent2: function() {
cc.log("clipEvent2222");
},
diergeClip: function() {
cc.log("第二个clip");
}
});
cc._RF.pop();
}, {} ],
config: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "adca4elnmZAW6u3pYiIx/Bl", "config");
t.exports = {
monsterPos: [ {
X: 10,
Y: 10
}, {
X: 20,
Y: 20
}, {
X: 30,
Y: 30
}, {
X: 40,
Y: 40
}, {
X: 50,
Y: 50
} ],
monsterSrcPos: {
X: 10,
Y: 10
}
};
cc._RF.pop();
}, {} ],
createHelper: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "21a41qiNbVKuoS6VIPv3B0B", "createHelper");
var o = {
createSprite: function(e, t, c) {
var o = new cc.Node(e).addComponent(cc.Sprite);
o.type = cc.Sprite.Type.SIMPLE;
o.sizeMode = cc.Sprite.SizeMode.TRIMMED;
null != c && "undefined" != typeof c && this.changeSpriteFrame(o, t, c);
return o;
},
changeSpriteFrame: function(e, t, c, o) {
if (null == e.spriteFrame || e.spriteFrame.name != c) {
var n = t + c;
cc.loader.loadRes(n, cc.SpriteFrame, function(t, c) {
t ? cc.log("加载模块失败") : e.spriteFrame = c;
});
} else o && o();
}
};
t.exports = o;
cc._RF.pop();
}, {} ],
ddCom: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "e88cc1+XxtAGairXVi/RKdR", "ddCom");
window.gg = {};
gg.testData1 = 11;
gg.testFunc = function() {
console.log("输出的 testFunc");
};
gg.createHelper = e("createHelper");
cc._RF.pop();
}, {
createHelper: "createHelper"
} ],
dianmiacAdd: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "b23fa8PoN5GaZay9DSS1SSV", "dianmiacAdd");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
dianmiacAddTest: function() {
cc.log("dianmiacAddTest===");
}
});
cc._RF.pop();
}, {} ],
globalNode: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "06a24tMMg5PFqdztQ5jQuK8", "globalNode");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
cc.log("正在执行预制体的onLoad");
gg.globalNode = this;
},
start: function() {},
testFuncInGlobalNode: function() {
cc.log("在全局节点的函数");
}
});
cc._RF.pop();
}, {} ],
handler: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "ee827k7TgpAB7KDaKmBqbkR", "handler");
var o = {
test: function() {
cc.log("handler.test 被执行");
window.ggTestpackage1 = "scene-script scene-walker.js111";
}
};
t.exports = o;
cc._RF.pop();
}, {} ],
http: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "67bb109YBdFPJAiM5RYJRHe", "http");
var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
t.exports = {
request: function(e) {
var t = new XMLHttpRequest(), c = setTimeout(function() {
!0;
t.abort();
}, 5e3), n = e.url;
if ("object" == o(e.data)) {
console.info("obj.data=" + JSON.stringify(e.data));
var s = [];
for (var i in e.data) s.push(encodeURIComponent(i) + "=" + encodeURIComponent(e.data[i]));
n += "?";
n += s.join("&");
}
t.open(e.method ? e.method : "GET", n, !0);
t.onreadystatechange = function() {
var o = t.responseText;
console.info("http url cb:" + n + " readyState:" + t.readyState + " status:" + t.status);
clearTimeout(c);
if (4 == t.readyState) {
console.info("http success:" + n + " resp:" + o);
var s = JSON.parse(o);
"function" == typeof e.success && e.success(s);
} else {
console.info("http fail:" + n);
"function" == typeof e.fail && e.fail(o);
}
};
t.send();
}
};
cc._RF.pop();
}, {} ],
init: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "24be2HZHoJHnIqFufNebEIp", "init");
var o = e("handler");
e("ddCom");
cc.Class({
extends: cc.Component,
properties: {
foo: {
default: null,
type: cc.SpriteFrame,
serializable: !0
},
bar: {
get: function() {
return this._bar;
},
set: function(e) {
this._bar = e;
}
},
toggleSingle1: {
default: null,
type: cc.Toggle
},
toggleSingle2: {
default: null,
type: cc.Toggle
},
toggleDouble: {
default: null,
type: cc.Toggle
},
nodeRoot: {
default: null,
type: cc.Node
},
usedNotify: {
default: 0,
type: cc.Integer,
notify: function() {
cc.log("usedNotify被重新赋值了 this.usedNotify = ", this.usedNotify);
}
}
},
onLoad: function() {
cc.log("init onLoad 被执行");
},
start: function() {
cc.log("==========================");
this.testUsedNotify();
cc.log("==========================");
},
usedNaviate: function(e) {
if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
cc.log("原生接口");
jsb.reflection.callStaticMethod("com/CommonUtils", "hello", "(Ljava/lang/String;)V", "this is a message from js");
} else cc.log("没钓到原生接口");
},
useNaviate2: function() {
cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/CommonUtils", "hello", "(Ljava/lang/String;)V", "this is a message from js 666 单选");
},
useNaviate3: function() {
cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", "title", "hahahahha");
},
testggCom: function() {
cc.log("gg===", gg);
},
testGlobalNode: function() {
cc.log("globalNode 并不随场景的切换而消失");
var e = cc.director.getScene();
cc.log("sence == ", e);
cc.log("然后将 全局节点放在场景上");
cc.loader.loadRes("testPreFab/GlobalNode", cc.Prefab, function(t, c) {
if (t) cc.log("加载预制体失败"); else {
cc.log("加载预制体成功");
var o = cc.instantiate(c);
e.addChild(o);
gg.globalNode.testFuncInGlobalNode();
}
});
},
testCreateHersSprite: function() {
var e = gg.createHelper.createSprite("testSp", "testRes/", "club_desk_base_blue");
if (null != e && "undefined" != typeof e) {
this.node.addChild(e.node);
cc.log("sp ===", e);
}
},
testHandler: function() {
o.test();
},
findProperties: function() {
cc.log("---------------------------");
cc.log("this.toggleSingle1", this.toggleSingle1);
cc.log("this.toggleDouble", this.toggleDouble);
var e = new cc.Node("toggleContainer");
e.addComponent(cc.ToggleContainer);
e.parent = this.node;
var t = new cc.Node("TTT");
t.addComponent(cc.Toggle);
t.parent = e;
cc.log("new cc.Toggle()", t.getComponent(cc.Toggle));
this.testToggle = t.getComponent(cc.Toggle);
cc.log("---------------------------");
},
testDouhaoUsed: function() {
cc.log(1);
cc.log("sss");
cc.log(function() {
var e = 0;
return e += 1;
}());
},
testSub: function() {
cc.log("this == ", this);
var e = this.node.getComponent("subb");
cc.log("suba == ", e);
e.testBase();
},
testPlugInJsGlobalVar: function() {
cc.log("====它在插件脚本中的立即执行函数中 放入了window属性了 ", plugInVar);
cc.log("====它在插件脚本中，未在任何函数内包含 不放入window属性，他也是全局域的 ", ggbaolou);
},
testPlugInBase: function() {
cc.log("Base", Base);
Base.test4();
new Base().test1();
},
testPlugInAddProtoTypeUsed: function() {
this.toggleSingle1.setSelectState(!0);
this.findProperties();
this.testToggle.setSelectState(!0);
},
testccJsAndAddNode: function() {
var e = cc.js.getClassByName("dianmiacAdd");
cc.log("js ==", e);
if (e) {
this.nodeRoot.addComponent(e);
cc.log("this.nodeRoot", this.nodeRoot);
this.nodeRoot.getComponent("dianmiacAdd").dianmiacAddTest();
} else cc.log("没有此Js脚本");
},
testGetClassByName: function() {
cc.js.getClassByName("subb") ? cc.log(" cc.js.getClassByName") : cc.log("Cant find class");
cc.log("==========================");
cc.log("cc.js. == ", cc.js);
},
testClipAnimation: function() {
var e = cc.find("clipNode", this.node).getComponent(cc.Animation);
this.node.runAction(cc.sequence(cc.callFunc(function() {
e.play("clipNode");
cc.log("第一个动作");
}), cc.delayTime(3.5), cc.callFunc(function() {
e.play("clipNode22");
})));
},
clipEvent: function(e, t) {
cc.log("clipEvent 被触发，打印参数" + e + t);
},
clipEvent2: function() {
cc.log("clipEvent2222");
},
testReadJson: function() {
cc.loader.loadRes("config/peizi", function(e, t) {
e ? cc.log("Cant Laoded") : cc.log("Json = ", t.json);
});
},
testUsedNotify: function() {
this.usedNotify = 2;
cc.log("this.usedNotify = 2;", this.usedNotify);
}
});
cc._RF.pop();
}, {
ddCom: "ddCom",
handler: "handler"
} ],
monster: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "1e9127S3P1KDbHEuDvrLKyz", "monster");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.canClickCnt = 0;
var e = this;
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
cc.log("我被点击了==" + e.canClickCnt + "次");
5 == e.canClickCnt && e.node.emit("Over", e.node.name);
e.canClickCnt++;
});
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"runtime-resource": [ function(e, t, c) {
"use strict";
cc._RF.push(t, "e17075jgZ9BMqs8Unl4A+8C", "runtime-resource");
cc._RF.pop();
}, {} ],
subb: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "1ae05RTWDxFuYQYrNlzj0oM", "subb");
var o = e("Base");
cc.Class({
extends: o,
properties: {
num2: 666,
ssi: cc.v2(7, 8)
},
onLoad: function() {
cc.log("subb onLoad 被执行");
},
start: function() {
cc.log("subb start 被执行");
},
test11: function() {
cc.log("subb test11 被执行");
},
testBase: function() {
cc.log("子类覆盖测试基类的函数");
}
});
cc._RF.pop();
}, {
Base: "Base"
} ],
thirdScene: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "a5c15Jjb6BD7rvdmjO03HN6", "thirdScene");
var o = e("config"), n = e("timeClock");
cc.Class({
extends: cc.Component,
properties: {
A: {
default: null,
type: cc.Node
},
B: cc.Node,
C: cc.Node,
MaskNode: cc.Node,
Graphics: cc.Graphics
},
onLoad: function() {
this.addEvent();
this.initMonster();
},
start: function() {
cc.log("MaskNode", this.MaskNode);
this.drawGraphics();
},
drawGraphics: function() {
this.Graphics.moveTo(20, 100);
this.Graphics.lineTo(20, 20);
this.Graphics.lineTo(70, 20);
this.Graphics.fill();
},
addEvent: function() {
this.node.on("KFC", function(e) {
cc.log("hhh 收到了", e);
cc.log("arguments", arguments);
});
this.A.on(cc.Node.EventType.TOUCH_END, function(e) {
console.log("A has been touch", e);
}, this);
this.B.on(cc.Node.EventType.TOUCH_END, function(e) {
console.log("B has been touch");
}, this, !0);
this.C.on(cc.Node.EventType.TOUCH_END, function(e) {
console.log("C has been touch");
}, this);
var e = this, t = new n();
t.setTimer(function() {
e.A.pauseSystemEvents(!0);
cc.log("暂停节点上注册的所有节点系统事件，节点系统事件包含触摸和点击事件，参数为true则暂停本节点和其子节点的节点系统事件");
}, 5e3);
t.setTimer(function() {
e.A.resumeSystemEvents();
cc.log("恢复节点上注册的所有节点系统事件，节点系统事件包含触摸和点击事件，参数为true则恢复本节点和其子节点的节点系统事件");
}, 1e4);
},
sendLocalEvent: function() {
this.node.emit("KFC", {
Key: 123
}, 99, "oo");
},
initMonster: function() {
var e = this;
cc.loader.loadRes("testPreFab/monster", cc.Prefab, function(t, c) {
if (t) cc.log("加载monster 失败"); else {
cc.log("加载monster OK");
e.preMonster = c;
e.initObjectPoor(c);
e.setMonsterToScene(2);
e.sendLocalEvent();
}
});
},
killMonster: function() {
var e = cc.director.getScene(), t = this;
setTimeout(function() {
for (var c = 0; c < e.children.length; c++) if ("monster" == e.children[c].name) {
t.monsterPoor.put(e.children[c]);
c -= 1;
}
cc.log("this.monsterPoor ==", t.monsterPoor);
cc.log("scene.children ==", e.children);
}, 1e3);
},
createMonster: function() {
return this.monsterPoor.size() > 0 ? this.monsterPoor.get() : cc.instantiate(this.preMonster);
},
setMonsterToScene: function(e) {
for (var t = cc.director.getScene(), c = 0; c < e; c++) {
var n = this.createMonster();
t.addChild(n);
n.x = 5 * o.monsterSrcPos.X * c;
n.y = 5 * o.monsterSrcPos.Y * c;
cc.log("monster +" + c);
}
},
initObjectPoor: function(e) {
var t = this, c = this;
this.monsterPoor = new cc.NodePool();
for (var o = function(o) {
cc.log("prefab=", e);
var n = cc.instantiate(e);
n.name = "monster" + o + 1;
n.on("Over", function() {
cc.log("arguments === ", arguments);
c.monsterPoor.put(n);
cc.log("self.monsterPoor === ", c.monsterPoor);
});
if (n) {
t.monsterPoor.put(n);
cc.log("实例化 Ok");
} else cc.log("实例化 mt", n);
}, n = 0; n < 5; n++) o(n);
},
killMonsterOneByOne: function() {
var e = cc.director.getScene(), t = 4;
this.schedule(function() {
if (t > 0) {
cc.log("Kill Monster");
for (var c = 0; c < e.children.length; c++) if ("monster" == e.children[c].name) {
this.monsterPoor.put(e.children[c]);
break;
}
} else this.unschedule(this.callback);
t--;
}, 1);
}
});
cc._RF.pop();
}, {
config: "config",
timeClock: "timeClock"
} ],
timeClock: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "e23f6L0Ic9OEZoMb1uFdDwP", "timeClock");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
setTimer: function(e, t) {
setTimeout(e, t);
}
});
cc._RF.pop();
}, {} ],
ttestt: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "825ffKKTmhEObAy5R+Bn8Ij", "ttestt");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
cc.log("ttestt onLoad 被执行");
},
start: function() {},
AAAA: function() {
cc.log("AAAAAA被执行");
}
});
cc._RF.pop();
}, {} ],
webView: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "c1c2dPlWgtPyouNiR6TFMux", "webView");
cc.Class({
name: "cc.MyComponent",
extends: cc.Component,
properties: {
webview: {
default: null,
type: cc.WebView
}
},
onLoad: function() {
var e = new cc.Component.EventHandler();
e.target = this.onDestroy;
e.component = "cc.MyComponent";
e.handler = "callback";
e.customEventData = "foobar";
this.webview.webviewEvents.push(e);
},
start: function() {},
callback: function(e, t, c) {
cc.log("我被调用了吗");
cc.log("eventType == ", t);
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "HelloWorld", "clipNode", "config", "handler", "monster", "createHelper", "globalNode", "timeClock", "webView", "ddCom", "init", "http", "thirdScene", "ttestt", "Base", "dianmiacAdd", "subb", "runtime-resource" ]);