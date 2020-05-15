/*
在插件中可以声明一个特殊的脚本文件（场景脚本），
该脚本和项目中的脚本 （assets 目录下的脚本）具有相同的环境，
也就是说在这个脚本里可以调用引擎 API 和其他项目脚本，实现：

1.遍历场景中的节点，获取或改动数据
2.调用项目中的其他脚本完成工作
*/
//-- 这是一个在插件中的场景脚本
//-- 在package.json中注册此脚本，此脚本就成为了场景脚本
//-- 注册  "scene-script": "scene-walker.js",
module.exports = {
	//-- 由一个或多个 IPC 消息监听方法组成
    'get-canvas-children': function (event) {
		//-- 收到相应的 IPC 消息后，我们在函数体内可以使用包括全部引擎 API 
		//和用户组件脚本里声明的方法和属性。
        var canvas = cc.find('Canvas');
		var camera = cc.find('Canvas/Main Camera');
		Editor.log('Main Camera : ' + camera.children.length);
        Editor.log('children length : ' + canvas.children.length);

        if (event.reply) {
			 Editor.log('event.reply OK');
            event.reply(null, canvas.children.length);
        }

		//在场景脚本中引用模块 和  插件脚本
		//除了通过 cc.find在场景脚本中获取特定的节点， 并操作该节点和挂载的组件以外，
		//还可以引用项目中的 非组件模块
		var handler = cc.require('handler');
		handler.test();
		//或者通过全局变量访问插件脚本
		cc.log("window.ggTestpackage1==", window.ggTestpackage1);//handler.test 被执行，函数中将此赋值
		cc.log("window.ggTestpackage==", window.ggTestpackage); //--插件未运行，undefine
		
    }
};