"use strict";
cc._RF.push(module, '8abf8iRgFxFjYfVARUp6167', 'StartGameScreen');
// Scripts/StartGameScreen.ts

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
        _this.MainCamera = null;
        _this.BlackCloak = null;
        _this.Gamecontroller = null;
        _this.StartGameLabel = null;
        _this.TouchStartLocation = null;
        _this.TouchEndLocation = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.labelAnimation();
        this.schedule(this.labelAnimation, 1);
    };
    NewClass.prototype.onTouchStart = function (event) {
        // console.log("djsahdsailjlk")
        this.TouchStartLocation = event.getLocation();
        // this.node.opacity = 100
    };
    NewClass.prototype.onTouchEnd = function (event) {
        this.TouchEndLocation = event.getLocation();
        if (this.TouchStartLocation.sub(this.TouchEndLocation).mag() < 20) {
            this.Gamecontroller.getComponent("Gamecontroller").enterGame();
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        }
    };
    NewClass.prototype.labelAnimation = function () {
        cc.tween(this.StartGameLabel).to(0.5, { scale: 1.3 }).to(0.5, { scale: 1 }).start();
    };
    NewClass.prototype.turnOnListener = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "MainCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "BlackCloak", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Gamecontroller", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "StartGameLabel", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();