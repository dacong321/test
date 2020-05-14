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
  `,

  $: {
    btn: '#btn',
    label: '#label',
  },

  ready () {
    this.$btn.addEventListener('confirm', () => {
      this.$label.innerText = '���';
      setTimeout(() => {
        this.$label.innerText = '--';
      }, 500);
	  Editor.Ipc.sendToMain('hello-world:say-hello', 'Hello, this is simple panel');
    });
  },
});