"use strict";
cc._RF.push(module, 'd9008lIQJ9D1rVsTJUcuQib', 'SoundController');
// Scripts/SoundController.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Board = null;
        // @property(cc.Node)
        // gameWinSfx: cc.Node = null;
        _this.BGSound = null;
        _this.SoundButton = null;
        _this.FrameArray = [];
        _this.Mute = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.Board.on("PlaySound", this.playBGSound, this);
        globalThis.Audio_Volume = 0.4;
    };
    NewClass.prototype.playBGSound = function () {
        cc.audioEngine.play(this.BGSound, false, globalThis.Audio_Volume);
    };
    NewClass.prototype.soundButtonClicked = function () {
        this.Mute = !this.Mute;
        if (this.Mute) {
            cc.audioEngine.stopAll();
            globalThis.Audio_Volume = 0;
            this.SoundButton.getComponent(cc.Sprite).spriteFrame = this.FrameArray[0];
        }
        else {
            globalThis.Audio_Volume = 0.4;
            cc.audioEngine.play(this.BGSound, false, globalThis.Audio_Volume);
            this.SoundButton.getComponent(cc.Sprite).spriteFrame = this.FrameArray[1];
        }
    };
    NewClass.prototype.stopBGSound = function () {
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Board", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "BGSound", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "SoundButton", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "FrameArray", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();