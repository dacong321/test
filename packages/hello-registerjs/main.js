
module.exports = {
	
	load(){

	},
	unload(){},
	
	messages:{
		'open'(){
			Editor.log('qqqqq!123');
			//-- ����������չ������������̺���Ⱦ�����У�
			//������ʹ������Ľӿ����� scene-walker.js ������Ϣ��������չ������ foobar����
			
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