
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/SoundController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU291bmRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0RDO1FBakRHLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIscUJBQXFCO1FBQ3JCLDhCQUE4QjtRQUc5QixhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUUzQixnQkFBVSxHQUFxQixFQUFFLENBQUE7UUFFakMsVUFBSSxHQUFHLEtBQUssQ0FBQTs7SUFxQ2hCLENBQUM7SUFqQ0csd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxVQUFVLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQTtJQUNqQyxDQUFDO0lBQ0QsOEJBQVcsR0FBWDtRQUdJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQscUNBQWtCLEdBQWxCO1FBRUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7UUFDdEIsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUNaO1lBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUN4QixVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQTtZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDNUU7YUFFRDtZQUNJLFVBQVUsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFBO1lBQzdCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNsRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDNUU7SUFDTCxDQUFDO0lBQ0QsOEJBQVcsR0FBWDtJQUdBLENBQUM7SUFoREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQU1yQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNLO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFDUTtJQWJoQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0Q1QjtJQUFELGVBQUM7Q0FwREQsQUFvREMsQ0FwRHFDLEVBQUUsQ0FBQyxTQUFTLEdBb0RqRDtrQkFwRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJvYXJkOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gZ2FtZVdpblNmeDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIEJHU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU291bmRCdXR0b246IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBGcmFtZUFycmF5OiBjYy5TcHJpdGVGcmFtZVtdID0gW10gXHJcblxyXG4gICAgTXV0ZSA9IGZhbHNlXHJcblxyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuQm9hcmQub24oXCJQbGF5U291bmRcIix0aGlzLnBsYXlCR1NvdW5kLCB0aGlzKTtcclxuICAgICAgICBnbG9iYWxUaGlzLkF1ZGlvX1ZvbHVtZSA9IDAuNFxyXG4gICAgfVxyXG4gICAgcGxheUJHU291bmQoKVxyXG4gICAgXHJcbiAgICB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkJHU291bmQsIGZhbHNlICwgZ2xvYmFsVGhpcy5BdWRpb19Wb2x1bWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNvdW5kQnV0dG9uQ2xpY2tlZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5NdXRlID0gIXRoaXMuTXV0ZVxyXG4gICAgICAgIGlmKHRoaXMuTXV0ZSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKClcclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5BdWRpb19Wb2x1bWUgPSAwXHJcbiAgICAgICAgICAgIHRoaXMuU291bmRCdXR0b24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLkZyYW1lQXJyYXlbMF1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMuQXVkaW9fVm9sdW1lID0gMC40XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5CR1NvdW5kLCBmYWxzZSAsIGdsb2JhbFRoaXMuQXVkaW9fVm9sdW1lKVxyXG4gICAgICAgICAgICB0aGlzLlNvdW5kQnV0dG9uLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5GcmFtZUFycmF5WzFdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RvcEJHU291bmQoKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=