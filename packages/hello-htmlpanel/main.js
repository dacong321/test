//-- 定义一份简单的面板窗口
module.exports = {
	load(){},
	unload(){},

	messages:{
		'open'(){
			Editor.Panel.open('hello-htmlpanel');
		}
	}
}