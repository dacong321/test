cc.Toggle.prototype.setSelectState = function(t) {
cc.log("isSelect==", t);
cc.log("this.toggleGroup==", this.toggleGroup);
cc.log("this._toggleContainer==", this._toggleContainer);
this.toggleGroup || this._toggleContainer;
};