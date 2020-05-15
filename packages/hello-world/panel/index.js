Editor.Panel.extend({
  style: `
    :host { margin: 5px; }
    h2 { color: #f90; }
  `,

  template: `
    <h2>��׼���</h2>
    <ui-button id="btn">���</ui-button>
    <hr />
    <div>״̬: <span id="label">--</span></div>

	<ui-button id="btn1">���</ui-button>
    <hr />
  `,

  $: {
    btn: '#btn',
    label: '#label',

	btn1: '#btn1',
  },

  ready () {
	//-- ������ť�ĵ��
    this.$btn.addEventListener('confirm', () => {
      this.$label.innerText = '���';
      setTimeout(() => {
        this.$label.innerText = '--';
      }, 500);
	  Editor.Ipc.sendToMain('hello-world:say-hello', 'Hello,  the msg send from panel, this is simple panel');
    });

    this.$btn1.addEventListener('confirm', () => {
      this.$label.innerText = 'myNameBtn1';
      setTimeout(() => {
        this.$label.innerText = '++';
      }, 500);
	  Editor.Ipc.sendToMain('hello-world:msgAAA', 'Hello, the msg send from panel, this is msgAAA clicked');
    });

	let self = this;
    //-- �����Ⱦ���̼���2
    require('electron').ipcRenderer.on('hello-world:my-message2', function(event, args) {
		//Editor.log('ffff');self.$label.innerText = 'my-message2'; 
	});
  },
  //-- �����Ⱦ���̼���1
  message:{
	    'message1': function (event, args) {
			//Editor.log('kkkkk');
			//Editor.Ipc.sendToMain('hello-world:msgAAA', 'message1 received!@');
            //do some work
			// this.$label.innerText = 'my-message1';

			//console.log(args);
			if (event.reply) {
			event.reply(null, 'Fine, thank you!');		
			}
        }
  }
});