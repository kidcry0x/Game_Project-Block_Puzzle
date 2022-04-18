"use strict";
cc._RF.push(module, '1eca9LC1wxCTZcdbCeIjZy0', 'EmptyBlock');
// Scripts/EmptyBlock.ts

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
var BlockContain_1 = require("./BlockContain");
var Board_1 = require("./Board");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Ngang = 0;
        _this.Doc = 0;
        _this.Number = 0;
        _this.Board = null;
        return _this;
        // update()
        // {
        //     console.log(this.node.name)
        // }
    }
    NewClass.prototype.onLoad = function () {
        this.Board = cc.find("Canvas/Screen2/Board");
        this.BoardComponent = this.Board.getComponent(Board_1.default);
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        var _this = this;
        // try {
        if (other.tag == 2) {
            // console.log(this.BoardComponent);
            this.node.opacity = 100;
            this.BoardComponent.Prepos[this.Ngang][this.Doc] = 1;
            // console.log('va cham voi block', this.Ngang, this.Doc)
            this.checkSetable();
            cc.tween(this.node)
                .delay(0.005)
                .call(function () {
                _this.checkChangeColor();
            })
                .start();
        }
        // } catch (error) {
        //   console.log(error);
        // }
    };
    NewClass.prototype.onCollisionExit = function (other, self) {
        var _this = this;
        if (other.tag == 2) {
            this.node.opacity = 200;
            this.BoardComponent.Prepos[this.Ngang][this.Doc] = 0;
            // console.log('exit va cham block')
            this.checkSetable();
            cc.tween(this.node)
                .delay(0.005)
                .call(function () {
                _this.checkChangeColor();
            })
                .start();
        }
    };
    NewClass.prototype.checkChangeColor = function () {
        if (!this.BoardComponent.pause) {
            console.log(this.BoardComponent.Check);
            // console.log(this.BoardComponent.BlockArray)
            // console.log(this.BoardComponent.ChayLai)
            if (this.BoardComponent.Check) {
                console.log("step2");
                for (var i = 0; i < 8; i++) {
                    for (var j = 0; j < 8; j++) {
                        if (this.BoardComponent.Prepos[i][j] == 0)
                            break;
                        if (j == 7) {
                            this.BoardComponent.AnNgang.push(i);
                            for (var k = 0; k < 8; k++) {
                                if (this.BoardComponent.Prepos[i][k] == 1 &&
                                    this.BoardComponent.BlockArray[i][k].name == "Block") {
                                    console.log("step4");
                                    this.BoardComponent.BlockArray[i][k].getComponent(cc.Sprite).spriteFrame = this.BoardComponent.ColorAnDiem;
                                }
                            }
                        }
                    }
                }
                for (var i = 0; i < 8; i++) {
                    for (var j = 0; j < 8; j++) {
                        if (this.BoardComponent.Prepos[j][i] == 0)
                            break;
                        if (j == 7) {
                            this.BoardComponent.AnDoc.push(i);
                            for (var k = 0; k < 8; k++) {
                                if (this.BoardComponent.Prepos[k][i] == 1 &&
                                    this.BoardComponent.BlockArray[k][i].name == "Block") {
                                    console.log("check 2");
                                    this.BoardComponent.BlockArray[k][i].getComponent(cc.Sprite).spriteFrame = this.BoardComponent.ColorAnDiem;
                                }
                            }
                        }
                    }
                }
            }
            for (var i = 0; i < this.BoardComponent.AnNgang.length; i++) {
                for (var j = 0; j < 8; j++) {
                    if (this.BoardComponent.Prepos[this.BoardComponent.AnNgang[i]][j] == 0) {
                        this.BoardComponent.XoaAnNgangIndex.push(i);
                        for (var k = 0; k < 8; k++) {
                            if (this.BoardComponent.BlockArray[this.BoardComponent.AnNgang[i]][k].name == "Block")
                                this.BoardComponent.BlockArray[this.BoardComponent.AnNgang[i]][k]
                                    .getComponent("Block")
                                    .setUp(this.BoardComponent.BlockArray[this.BoardComponent.AnNgang[i]][k].getComponent("Block").Number);
                        }
                        break;
                    }
                }
            }
            for (var i = 0; i < this.BoardComponent.XoaAnNgangIndex.length; i++) {
                this.BoardComponent.AnNgang.splice(this.BoardComponent.XoaAnNgangIndex[i], 1);
            }
            this.BoardComponent.XoaAnNgangIndex = [];
            for (var i = 0; i < this.BoardComponent.AnDoc.length; i++) {
                for (var j = 0; j < 8; j++) {
                    if (this.BoardComponent.Prepos[j][this.BoardComponent.AnDoc[i]] == 0) {
                        this.BoardComponent.XoaAnDocIndex.push(i);
                        for (var k = 0; k < 8; k++) {
                            if (this.BoardComponent.BlockArray[k][this.BoardComponent.AnDoc[i]]
                                .name == "Block")
                                this.BoardComponent.BlockArray[k][this.BoardComponent.AnDoc[i]]
                                    .getComponent("Block")
                                    .setUp(this.BoardComponent.BlockArray[k][this.BoardComponent.AnDoc[i]].getComponent("Block").Number);
                        }
                        break;
                    }
                }
            }
            for (var i = 0; i < this.BoardComponent.XoaAnDocIndex.length; i++) {
                this.BoardComponent.AnDoc.splice(this.BoardComponent.XoaAnDocIndex[i], 1);
            }
            this.BoardComponent.XoaAnDocIndex = [];
            if (this.BoardComponent.CarryingNode != null) {
                for (var i = 0; i <
                    this.BoardComponent.CarryingNode.getComponent("BlockContain")
                        .BlockArray.length; i++) {
                    if (this.BoardComponent.AnNgang.indexOf(this.BoardComponent.CarryingNode.getComponent("BlockContain").BlockArray[i].getComponent("Block").Ngang) != -1 ||
                        this.BoardComponent.AnDoc.indexOf(this.BoardComponent.CarryingNode.getComponent("BlockContain").BlockArray[i].getComponent("Block").Doc) != -1)
                        this.BoardComponent.CarryingNode.getComponent("BlockContain").BlockArray[i].getComponent(cc.Sprite).spriteFrame =
                            this.BoardComponent.ColorAnDiem;
                    else
                        this.BoardComponent.CarryingNode.getComponent("BlockContain").BlockArray[i].getComponent(cc.Sprite).spriteFrame =
                            this.BoardComponent.CarryingNode.getComponent("BlockContain").Color;
                }
            }
        }
    };
    NewClass.prototype.checkSetable = function () {
        var CoTheDat = true;
        if (this.BoardComponent.CarryingNode != null) {
            for (var i = 0; i < this.BoardComponent.CarryingNode.getComponent(BlockContain_1.default).BlockArray
                .length; i++) {
                if (this.BoardComponent.CarryingNode.getComponent(BlockContain_1.default).BlockArray[i].getComponent("Block").CoTheDat &&
                    this.BoardComponent.CarryingNode.getComponent(BlockContain_1.default).BlockArray[i].getComponent("Block").Ngang != null &&
                    this.BoardComponent.CarryingNode.getComponent(BlockContain_1.default).BlockArray[i].getComponent("Block").Doc != null)
                    CoTheDat = true;
                else {
                    CoTheDat = false;
                    break;
                }
            }
            this.BoardComponent.Check = CoTheDat;
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();