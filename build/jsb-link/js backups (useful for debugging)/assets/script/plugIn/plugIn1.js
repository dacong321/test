var ggbaolou = "9999";

window.ggTestpackage = "scene-script scene-walker.js";

(function() {
console.log("插件运行了吗？");
window.plugInVar = "plugInVar";
function o(o) {
if (o) return o;
}
o.prototype.Down = function() {
cc.log("Emitter Down");
return "我是返回值";
};
o.prototype.tt = function() {
testVar = this.Down();
console.log("testVar ==", testVar);
console.log("test  PlugIn ==> Emitter.prototype.tt this1 ==", this);
};
var t = new o();
t.Down();
t.tt();
console.log("test  PlugIn this1 ==", this);
testTest = function(o, t) {
console.log("++++++++++++++++++++++++++++ e.length ==", o.length);
for (let t = 0; t < o.length; t++) console.log(t + "------------", o[t]);
console.log("***************************");
for (let o = 0; o < 10; o++) console.log(o + "------------", t[o]);
};
testTest([ "abc", "def", "hij" ], [ "aabbcc", "ddeeff", "hhiijj" ]);
testZuoYongYu = function() {
for (var o = 0; o < 10; o++) console.log(o);
for (o = 1; o <= 5; o++) setTimeout(function() {
console.log(o);
}, 1e3 * o);
};
})();

(function() {
function o(o) {
if (o) {
cc.log("Base 被触发");
return o;
}
}
o.prototype.test1 = function() {
console.log("test1");
};
o.prototype.test2 = function() {
console.log("test2");
};
o.prototype.test3 = function() {
console.log("test3");
};
o.test4 = function() {
console.log("test444444");
};
var t = Object.create(o.prototype);
console.log("BaseObj", t);
console.log("BaseObj.prototype", t.prototype);
console.log("BaseObj._proto__", t._proto__);
console.log("Base.prototype", o.prototype);
var e = new Object();
console.log("BaseObj2", e);
t.test11 = function() {};
console.log("BaseObj", t);
console.log("Base", o);
window.Base = o;
cc.log("windowBase===", o);
let n = new o();
cc.log("baseObj===", n);
console.log("test  PlugIn this2 ==", this);
})();