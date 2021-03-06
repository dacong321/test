'use strict';
//-- 这份入口程序会在Cocos Creator的主进程中被加载，在加载成功后，他会调用入口程序中的load函数
module.exports = {
  load () {
	/*
    // 当 package 被正确加载的时候执行
	Editor.log('lxk package load!');
	let fs = require('fs');
	let path = require('path');
	//插件加载后在项目根目录自动创建指定文件夹
	fs.mkdirSync(path.join(Editor.Project.path, 'myNewFolder'));
	Editor.success('New floder created');
	*/

	//-- 主进程消息监听1
	//-- 除了使用messages字段内注册外，还可以使用Ipc接口来监听
	require('electron').ipcMain.on('hello-world:msgAAA', function(event, args) {Editor.log(args);});
  },

  unload () {
    // 当 package 被正确卸载的时候执行
	Editor.log('lxk package unload!');
  },

  //-- 主进程消息监听2
  messages: {
    'say-hello' (event, str) {
		if(str!= null && typeof str != "undefine"){
			Editor.log(str);
		}else{
			Editor.log('menu msg Hello World!123');
		}
    },
	'open' () {
      // open entry panel registered in package.json
      Editor.Panel.open('hello-world');
    },
	'sendToPanelMsg1' (){	
		Editor.log('begin sendToPanelMsg1!');
		//-- 主进程向面板发送消息
		Editor.Ipc.sendToPanel('hello-world', 'message1', 'main process send to panel',function(err, answer){
			if(err){
				Editor.log('message1 Callack send err!');
			}else{
				Editor.log('message1 Callack send OK!');
			}
			Editor.log(answer);
		});
		Editor.log('end sendToPanelMsg1!');
	},
	'sendToPanelMsg2' (){	
		Editor.log('begin sendToPanelMsg2!');
		//-- 主进程向面板发送消息
		//Editor.Ipc.sendToPanel('hello-world', 'hello-world:my-message2', 'main process send to panel');
		Editor.Ipc.sendToPanel('hello-world', 'my-message2', 'main process send to panel',function(err, answer){
			if(err){
				Editor.log('message2 Callack send err!');
			}else{
				Editor.log('message2 Callack send OK!');
			}
			Editor.log(answer);
		});
		Editor.log('end sendToPanelMsg2!');
	},
  },
};