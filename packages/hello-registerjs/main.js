
module.exports = {
	
	load(){

	},
	unload(){},
	
	messages:{
		'open'(){
			Editor.log('qqqqq!123');
			//-- 接下来在扩展包程序的主进程和渲染进程中，
			//都可以使用下面的接口来向 scene-walker.js 发送消息（假设扩展包名是 foobar）：
			
			Editor.Scene.callSceneScript('hello-registerjs', 'get-canvas-children', function (err, length) {
						if(err){
							Editor.log('err');
						}else{
							Editor.log(`get-canvas-children callback : length - ${length}`);
							console.log(`get-canvas-children callback : length - ${length}`);
						}
			});
		
		},
	}
}