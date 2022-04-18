"use strict";
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