cc.Toggle.prototype.setSelectState = function(isSelect) {
    cc.log("isSelect==", isSelect);
    cc.log("this.toggleGroup==", this.toggleGroup);
    cc.log("this._toggleContainer==", this._toggleContainer);
    var group = this.toggleGroup || this._toggleContainer;
}