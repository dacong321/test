'use strict';
//-- �����ڳ������Cocos Creator���������б����أ��ڼ��سɹ������������ڳ����е�load����
module.exports = {
  load () {
	/*
    // �� package ����ȷ���ص�ʱ��ִ��
	Editor.log('lxk package load!');
	let fs = require('fs');
	let path = require('path');
	//������غ�����Ŀ��Ŀ¼�Զ�����ָ���ļ���
	fs.mkdirSync(path.join(Editor.Project.path, 'myNewFolder'));
	Editor.success('New floder created');
	*/
  },

  unload () {
    // �� package ����ȷж�ص�ʱ��ִ��
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