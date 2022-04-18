"use strict";
cc._RF.push(module, '4e0d5apO41O2JyjIsuxjF5q', 'NovaBlock');
// Scripts/NovaBlock.ts

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
        _this.Ngang = null;
        _this.Doc = null;
        _this.PreviousNgang = null;
        _this.PreviousDoc = null;
        _this.CoTheDat = false;
        _this.BoardComponent = null;
        _this.flickingBlock = null;
        _this.BlockBoard = null;
        return _this;
        // update()
        // {
        //     console.log("Vi tri hien tai la: " + this.Ngang + " " + this.Doc)
        // }
    }
    NewClass.prototype.onLoad = function () {
        this.Board = cc.find('Canvas/Screen2/Board');
        this.BoardComponent = this.Board.getComponent("Board");
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.BlockBoard = cc.find('Canvas/Screen2/Board/BlockBoard');
        console.log("Dakhoitao");
        // this.node.getComponent(cc.Animation).play("FlickingNovaBlock")
        this.node.getComponent(cc.Animation).play("NovaChangeColor");
        this.flickingBlock = function (block) {
            block.opacity = 100;
            cc.tween(block).to(0.4, { opacity: 255 }).to(0.4, { opacity: 100 }).start();
        };
    };
    NewClass.prototype.onTouchStart = function () {
        this.Board.getComponent("Board").zIndex += 1;
        this.node.zIndex = this.Board.getComponent("Board").zIndex;
        this.BlockBoard.sortAllChildren();
    };
    NewClass.prototype.onTouchMove = function (event) {
        var touch = event.getTouches()[0];
        var touch_pos = touch.getLocation();
        var standard_touch_pos = this.Board.convertToNodeSpaceAR(touch_pos);
        this.node.setPosition(standard_touch_pos);
    };
    NewClass.prototype.onTouchEnd = function () {
        var _this = this;
        if (this.CoTheDat) {
            var n = this.Ngang;
            var d = this.Doc;
            // this.Board.getComponent("Board").BlockArray[this.BlockArray[i].getComponent("Block").Ngang][this.BlockArray[i].getComponent("Block").Doc].destroy()
            // this.BoardComponent.BlockArray[n][d] = this.BlockArray[i]
            // this.BoardComponent.EmptyBlockArray[n][d].scale = 0
            // this.BoardComponent.Prepos[n][d] = 1
            // this.BoardComponent.IndexColorArray[n][d] = this.IndexColor
            this.node.setPosition(this.Board.getComponent("Board").VTNgang[this.Doc], this.Board.getComponent("Board").VTDoc[this.Ngang]);
            this.BoardComponent.checkAnDiem();
            var _loop_1 = function (i) {
                var _loop_2 = function (j) {
                    if (this_1.Ngang + i < 8 && this_1.Ngang + i >= 0 && this_1.Doc + j < 8 && this_1.Doc + j >= 0) {
                        if (this_1.BoardComponent.Prepos[this_1.Ngang + i][this_1.Doc + j] == 1 && !(i == 0 && j == 0)) {
                            this_1.BoardComponent.EmptyBlockArray[this_1.Ngang + i][this_1.Doc + j].scale = 1;
                            cc.tween(this_1.BoardComponent.BlockArray[this_1.Ngang + i][this_1.Doc + j]).to(0.1, { opacity: 0 }).call(function () {
                                _this.BoardComponent.BlockArray[_this.Ngang + i][_this.Doc + j].destroy();
                            }).start();
                        }
                    }
                };
                for (var j = -1; j < 2; j++) {
                    _loop_2(j);
                }
            };
            var this_1 = this;
            for (var i = -1; i < 2; i++) {
                _loop_1(i);
            }
            this.BoardComponent.taoBlockNgauNhien();
            cc.tween(this.node).to(0.1, { opacity: 0 }).call(function () {
                _this.node.destroy();
            }).start();
        }
        else {
            cc.tween(this.node).to(0.1, { x: 0, y: -430 }).start();
        }
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        // console.log(other.tag)
        if (other.tag == 1) {
            this.CoTheDat = true;
            // console.log('va cham voi empty')
            this.Ngang = other.getComponent("EmptyBlock").Ngang;
            this.Doc = other.getComponent("EmptyBlock").Doc;
            // console.log(other.getComponent("EmptyBlock").Ngang,other.getComponent("EmptyBlock").Doc)
            // console.log(this.Ngang,this.Doc)
            // this.BoardComponent.Prepos[this.Ngang][this.Doc] = 1
            for (var i = -1; i < 2; i++) {
                for (var j = -1; j < 2; j++) {
                    if (this.Ngang + i < 8 && this.Ngang + i >= 0 && this.Doc + j < 8 && this.Doc + j >= 0) {
                        if (this.BoardComponent.Prepos[this.Ngang + i][this.Doc + j] == 1 && !(i == 0 && j == 0)) {
                            // cc.tween(this.BoardComponent.BlockArray[this.Ngang+i][this.Doc+j]).to(0.1,{scale:1.3}).start()
                            this.BoardComponent.BlockArray[this.Ngang + i][this.Doc + j].scale = 1.3;
                        }
                    }
                }
            }
        }
        if (other.tag == 3) {
            this.CoTheDat = true;
        }
    };
    NewClass.prototype.onCollisionExit = function (other, self) {
        if (other.tag == 3) {
            // console.log('exit va cham voi empty')
            console.log("Huy va cham");
            this.CoTheDat = false;
        }
        if (other.tag == 1) {
            this.CoTheDat = false;
            // this.BoardComponent.Prepos[this.Ngang][this.Doc] = 0
            for (var i = -1; i < 2; i++) {
                for (var j = -1; j < 2; j++) {
                    if (this.Ngang + i < 8 && this.Ngang + i >= 0 && this.Doc + j < 8 && this.Doc + j >= 0) {
                        if (this.BoardComponent.Prepos[this.Ngang + i][this.Doc + j] == 1 && !(i == 0 && j == 0)) {
                            // cc.tween(this.BoardComponent.BlockArray[this.Ngang+i][this.Doc+j]).to(0.1,{scale:1}).start()
                            this.BoardComponent.BlockArray[this.Ngang + i][this.Doc + j].scale = 1;
                        }
                    }
                }
            }
            this.Ngang = null;
            this.Doc = null;
            //     this.Ngang = null
            //     this.Doc = null
        }
    };
    NewClass.prototype.turnOffListener = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();