
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Gamecontroller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e78e67omzBJlITJD7+9kTrM', 'Gamecontroller');
// Scripts/Gamecontroller.ts

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
        _this.PauseButton = null;
        _this.PauseMenu = null;
        _this.Cloak = null;
        _this.MainOptionMenu = null;
        _this.MainCamera = null;
        _this.BlackCloak = null;
        _this.Screen1 = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = ???????????????????????????????????????????????????????????????
        this.Cloak.active = false;
        this.MainOptionMenu.scale = 0;
        this.BlackCloak.opacity = 0;
        this.MainCamera.x = -5000;
        // cc.sys.localStorage.setItem("test", Number(100))
        // console.log(typeof(cc.sys.localStorage.getItem("test")))
        // cc.sys.localStorage.setItem('highscore', Number(0))
        // cc.sys.localStorage.setItem('diem', Number(0))
    };
    NewClass.prototype.openPauseMenu = function () {
        this.MainOptionMenu.active = true;
        this.Cloak.active = true;
        cc.tween(this.MainOptionMenu).to(0.2, { scale: 1.3 }).to(0.1, { scale: 1 }).start();
    };
    NewClass.prototype.closePauseMenu = function () {
        var _this = this;
        this.Cloak.active = false;
        cc.tween(this.MainOptionMenu).to(0.1, { scale: 1.3 }).to(0.2, { scale: 0 }).call(function () {
            _this.MainOptionMenu.active = false;
        }).start();
    };
    // update()
    // {
    //     console.log(this.MainCamera.getPosition().x, this.MainCamera.getPosition().y)
    // }
    NewClass.prototype.enterGame = function () {
        var _this = this;
        cc.tween(this.BlackCloak).to(0.5, { opacity: 255 }).call(function () {
            _this.MainCamera.x = 0;
        }).to(0.5, { opacity: 0 }).start();
    };
    NewClass.prototype.outGame = function () {
        var _this = this;
        cc.tween(this.BlackCloak).to(0.5, { opacity: 255 }).call(function () {
            _this.MainCamera.x = -5000;
        }).to(0.5, { opacity: 0 }).start();
        this.Screen1.getComponent("StartGameScreen").turnOnListener();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Board", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "PauseButton", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "PauseMenu", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Cloak", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "MainOptionMenu", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "MainCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "BlackCloak", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Screen1", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4REM7UUEzREcsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUUzQixlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsb0JBQWMsR0FBWSxJQUFJLENBQUE7UUFFOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFMUIsYUFBTyxHQUFZLElBQUksQ0FBQTs7SUE2QzNCLENBQUM7SUEzQ0cseUJBQU0sR0FBTjtRQUVJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ2hELHVIQUF1SDtRQUN2SCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQTtRQUN6QixtREFBbUQ7UUFDbkQsMkRBQTJEO1FBQzNELHNEQUFzRDtRQUN0RCxpREFBaUQ7SUFDckQsQ0FBQztJQUNELGdDQUFhLEdBQWI7UUFFSSxJQUFJLENB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Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJvYXJkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBQYXVzZUJ1dHRvbjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgUGF1c2VNZW51OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDbG9hazogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgTWFpbk9wdGlvbk1lbnU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE1haW5DYW1lcmE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJsYWNrQ2xvYWs6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFNjcmVlbjE6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9ID8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P1xyXG4gICAgICAgIHRoaXMuQ2xvYWsuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLk1haW5PcHRpb25NZW51LnNjYWxlID0gMFxyXG4gICAgICAgIHRoaXMuQmxhY2tDbG9hay5vcGFjaXR5ID0gMFxyXG4gICAgICAgIHRoaXMuTWFpbkNhbWVyYS54ID0gLTUwMDBcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0ZXN0XCIsIE51bWJlcigxMDApKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZihjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZXN0XCIpKSlcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hzY29yZScsIE51bWJlcigwKSlcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RpZW0nLCBOdW1iZXIoMCkpXHJcbiAgICB9XHJcbiAgICBvcGVuUGF1c2VNZW51KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLk1haW5PcHRpb25NZW51LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLkNsb2FrLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBjYy50d2Vlbih0aGlzLk1haW5PcHRpb25NZW51KS50bygwLjIse3NjYWxlOjEuM30pLnRvKDAuMSx7c2NhbGU6MX0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIGNsb3NlUGF1c2VNZW51KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLkNsb2FrLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5NYWluT3B0aW9uTWVudSkudG8oMC4xLHtzY2FsZToxLjN9KS50bygwLjIse3NjYWxlOjB9KS5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuTWFpbk9wdGlvbk1lbnUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUoKVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuTWFpbkNhbWVyYS5nZXRQb3NpdGlvbigpLngsIHRoaXMuTWFpbkNhbWVyYS5nZXRQb3NpdGlvbigpLnkpXHJcbiAgICAvLyB9XHJcbiAgICBlbnRlckdhbWUoKVxyXG4gICAge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuQmxhY2tDbG9haykudG8oMC41LHtvcGFjaXR5OjI1NX0pLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5NYWluQ2FtZXJhLnggPSAwXHJcbiAgICAgICAgfSkudG8oMC41LHtvcGFjaXR5OjB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBvdXRHYW1lKClcclxuICAgIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLkJsYWNrQ2xvYWspLnRvKDAuNSx7b3BhY2l0eToyNTV9KS5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuTWFpbkNhbWVyYS54ID0gLTUwMDBcclxuICAgICAgICB9KS50bygwLjUse29wYWNpdHk6MH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLlNjcmVlbjEuZ2V0Q29tcG9uZW50KFwiU3RhcnRHYW1lU2NyZWVuXCIpLnR1cm5Pbkxpc3RlbmVyKClcclxuICAgIH1cclxufVxyXG4iXX0=