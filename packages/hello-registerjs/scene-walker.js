/*
�ڲ���п�������һ������Ľű��ļ��������ű�����
�ýű�����Ŀ�еĽű� ��assets Ŀ¼�µĽű���������ͬ�Ļ�����
Ҳ����˵������ű�����Ե������� API ��������Ŀ�ű���ʵ�֣�

1.���������еĽڵ㣬��ȡ��Ķ�����
2.������Ŀ�е������ű���ɹ���
*/
//-- ����һ���ڲ���еĳ����ű�
//-- ��package.json��ע��˽ű����˽ű��ͳ�Ϊ�˳����ű�
//-- ע��  "scene-script": "scene-walker.js",
module.exports = {
	//-- ��һ������ IPC ��Ϣ�����������
    'get-canvas-children': function (event) {
		//-- �յ���Ӧ�� IPC ��Ϣ�������ں������ڿ���ʹ�ð���ȫ������ API 
		//���û�����ű��������ķ��������ԡ�
        var canvas = cc.find('Canvas');
		var camera = cc.find('Canvas/Main Camera');
		Editor.log('Main Camera : ' + camera.children.length);
        Editor.log('children length : ' + canvas.children.length);

        if (event.reply) {
			 Editor.log('event.reply OK');
            event.reply(null, canvas.children.length);
        }

		//�ڳ����ű�������ģ�� ��  ����ű�
		//����ͨ�� cc.find�ڳ����ű��л�ȡ�ض��Ľڵ㣬 �������ýڵ�͹��ص�������⣬
		//������������Ŀ�е� �����ģ��
		var handler = cc.require('handler');
		handler.test();
		//����ͨ��ȫ�ֱ������ʲ���ű�
		cc.log("window.ggTestpackage1==", window.ggTestpackage1);//handler.test ��ִ�У������н��˸�ֵ
		cc.log("window.ggTestpackage==", window.ggTestpackage); //--���δ���У�undefine
		
    }
};