let CreatorHelper = {};
CreatorHelper.createSprite = function(name, path, imageName){
    let node = new cc.Node(name);
    let sprCom = node.addComponent(cc.Sprite);
    //-- 设置输配方案
    sprCom.type = cc.Sprite.Type.SIMPLE;
    sprCom.sizeMode = cc.Sprite.SizeMode.TRIMMED;
    //-- 设置精灵纹理
    if(imageName != null && typeof imageName != "undefined"){
        this.changeSpriteFrame(sprCom, path, imageName);
    }
    return sprCom;
}

CreatorHelper.changeSpriteFrame = function(sprCom, path, imageName, cb){
    if(sprCom.spriteFrame != null && sprCom.spriteFrame.name == imageName){
        if(cb){
            cb();
        }
        return;
    }
    let namePath = path + imageName;
    cc.loader.loadRes(namePath, cc.SpriteFrame, function(err, spriteFrame){
        if(err){
            cc.log("加载模块失败");
        }else{
            sprCom.spriteFrame = spriteFrame;
        }
    })
}

module.exports = CreatorHelper;