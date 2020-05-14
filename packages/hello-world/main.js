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
  },

  unload () {
    // 当 package 被正确卸载的时候执行
	Editor.log('lxk package unload!');
  },

  messages: {
    'say-hello' (str) {
		if(str!= null && typeof str != "undefine"){
			Editor.log(str);
		}else{
			Editor.log('Hello World!123');
		}
    },
	'open' () {
      // open entry panel registered in package.json
      Editor.Panel.open('hello-world');
    }
  },
};