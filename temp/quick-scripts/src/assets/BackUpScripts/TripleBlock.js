"use strict";
cc._RF.push(module, 'f3f6fZduGBMaJsJ8KRSsGWo', 'TripleBlock');
// BackUpScripts/TripleBlock.ts

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
        _this.Block = null;
        _this.Board = null;
        _this.VTBlock = [cc.v2(-72, 0), cc.v2(0, 0), cc.v2(72, 0)];
        _this.VTBlockQuay = [cc.v2(-72, 0), cc.v2(0, 72), cc.v2(72, 0), cc.v2(0, -72)];
        _this.BlockArray = [];
        _this.CoTheDat = false;
        _this.TouchStartLocation = null;
        _this.TouchEndLocation = null;
        _this.Index = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.Board = cc.find('Canvas/Screen2/Board');
        for (var i = 0; i < 3; i++) {
            this.taoBlock(i);
        }
    };
    NewClass.prototype.onTouchStart = function (event) {
        this.TouchStartLocation = event.getLocation();
    };
    NewClass.prototype.onTouchMove = function (event) {
        var touch = event.getTouches()[0];
        var touch_pos = touch.getLocation();
        var standard_touch_pos = this.Board.convertToNodeSpaceAR(touch_pos);
        this.node.setPosition(standard_touch_pos);
    };
    NewClass.prototype.onTouchEnd = function (event) {
        this.TouchEndLocation = event.getLocation();
        if (this.TouchEndLocation.sub(this.TouchStartLocation).mag() < 10) {
            this.rotate();
        }
        for (var i = 0; i < 3; i++) {
            if (this.BlockArray[i].getComponent("Block").CoTheDat && this.BlockArray[i].getComponent("Block").Ngang != null && this.BlockArray[i].getComponent("Block").Doc != null)
                this.CoTheDat = true;
            else {
                this.CoTheDat = false;
                break;
            }
        }
        if (this.CoTheDat) {
            for (var i = 0; i < 3; i++) {
                this.Board.getComponent("Board").BlockArray[this.BlockArray[i].getComponent("Block").Ngang][this.BlockArray[i].getComponent("Block").Doc].destroy();
                this.Board.getComponent("Board").BlockArray[this.BlockArray[i].getComponent("Block").Ngang][this.BlockArray[i].getComponent("Block").Doc] = this.BlockArray[i];
                // this.Board.addChild(this.BlockArray.shift())
                this.BlockArray[i].setPosition(this.Board.getComponent("Board").VTNgang[this.BlockArray[i].getComponent("Block").Doc], this.Board.getComponent("Board").VTDoc[this.BlockArray[i].getComponent("Block").Ngang]);
                this.node.setPosition(0, 0);
                // this.Board.getComponent("Board").taoBlock()
                console.log(this.BlockArray[i].x, this.BlockArray[i].y);
                this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
                this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
                this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            }
            this.Board.getComponent("Board").taoBlockNgauNhien();
            this.Board.getComponent("Board").checkMerge();
            // for(let i=0;i<2;i++)
            // this.Board.addChild(this.BlockArray.shift())
        }
        else
            this.node.setPosition(0, -450);
    };
    NewClass.prototype.taoBlock = function (index) {
        var block = cc.instantiate(this.Block);
        this.node.addChild(block);
        this.BlockArray.push(block);
        block.setPosition(this.VTBlock[index]);
        var number = Math.floor(Math.random() * 3) + 1;
        block.getComponent("Block").setUp(number);
        block.getComponent("Block").turnOffListener();
    };
    NewClass.prototype.rotate = function () {
        this.Index++;
        for (var i = 0; i < 3; i += 2) {
            cc.tween(this.BlockArray[i]).to(0.1, { x: this.VTBlockQuay[(this.Index + i) % 4].x, y: this.VTBlockQuay[(this.Index + i) % 4].y }).start();
        }
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "Block", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();