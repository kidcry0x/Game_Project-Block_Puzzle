
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/EmptyBlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRW1wdHlCbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwrQ0FBMEM7QUFDMUMsaUNBQTRCO0FBRXRCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ09DO1FBL05DLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixTQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFdBQUssR0FBWSxJQUFJLENBQUM7O1FBd050QixXQUFXO1FBQ1gsSUFBSTtRQUNKLGtDQUFrQztRQUNsQyxJQUFJO0lBQ04sQ0FBQztJQXpOQyx5QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQTVCLGlCQW1CQztRQWxCQyxRQUFRO1FBQ1IsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNsQixvQ0FBb0M7WUFFcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFD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RW5DLFFBQVEsR0FBRyxJQUFJLENBQUM7cUJBQ2I7b0JBQ0gsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsTUFBTTtpQkFDUDthQUNGO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1NBQ3RDO0lBQUEsQ0FBQztJQTNOaUIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdPNUI7SUFBRCxlQUFDO0NBaE9ELEFBZ09DLENBaE9xQyxFQUFFLENBQUMsU0FBUyxHQWdPakQ7a0JBaE9vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEJsb2NrQ29udGFpbiBmcm9tIFwiLi9CbG9ja0NvbnRhaW5cIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuL0JvYXJkXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIE5nYW5nID0gMDtcclxuICBEb2MgPSAwO1xyXG4gIE51bWJlciA9IDA7XHJcbiAgQm9hcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEJvYXJkQ29tcG9uZW50OiBCb2FyZDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5Cb2FyZCA9IGNjLmZpbmQoXCJDYW52YXMvU2NyZWVuMi9Cb2FyZFwiKTtcclxuICAgIHRoaXMuQm9hcmRDb21wb25lbnQgPSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChCb2FyZCk7XHJcbiAgfVxyXG4gIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgIC8vIHRyeSB7XHJcbiAgICBpZiAob3RoZXIudGFnID09IDIpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5Cb2FyZENvbXBvbmVudCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDEwMDtcclxuICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5QcmVwb3NbdGhpcy5OZ2FuZ11bdGhpcy5Eb2NdID0gMTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3ZhIGNoYW0gdm9pIGJsb2NrJywgdGhpcy5OZ2FuZywgdGhpcy5Eb2MpXHJcbiAgICAgIHRoaXMuY2hlY2tTZXRhYmxlKCk7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAuZGVsYXkoMC4wMDUpXHJcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jaGVja0NoYW5nZUNvbG9yKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgb25Db2xsaXNpb25FeGl0KG90aGVyLCBzZWxmKSB7XHJcbiAgICBpZiAob3RoZXIudGFnID09IDIpIHtcclxuICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyMDA7XHJcbiAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuUHJlcG9zW3RoaXMuTmdhbmddW3RoaXMuRG9jXSA9IDA7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdleGl0IHZhIGNoYW0gYmxvY2snKVxyXG4gICAgICB0aGlzLmNoZWNrU2V0YWJsZSgpO1xyXG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLmRlbGF5KDAuMDA1KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2hlY2tDaGFuZ2VDb2xvcigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoZWNrQ2hhbmdlQ29sb3IoKSB7XHJcbiAgICBpZiAoIXRoaXMuQm9hcmRDb21wb25lbnQucGF1c2UpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5Cb2FyZENvbXBvbmVudC5DaGVjayk7XHJcblxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXkpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuQm9hcmRDb21wb25lbnQuQ2hheUxhaSlcclxuICAgICAgaWYgKHRoaXMuQm9hcmRDb21wb25lbnQuQ2hlY2spIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0ZXAyXCIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQm9hcmRDb21wb25lbnQuUHJlcG9zW2ldW2pdID09IDApIGJyZWFrO1xyXG4gICAgICAgICAgICBpZiAoaiA9PSA3KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5Bbk5nYW5nLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5QcmVwb3NbaV1ba10gPT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlbaV1ba10ubmFtZSA9PSBcIkJsb2NrXCJcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0ZXA0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5CbG9ja0FycmF5W2ldW2tdLmdldENvbXBvbmVudChcclxuICAgICAgICAgICAgICAgICAgICBjYy5TcHJpdGVcclxuICAgICAgICAgICAgICAgICAgKS5zcHJpdGVGcmFtZSA9IHRoaXMuQm9hcmRDb21wb25lbnQuQ29sb3JBbkRpZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Cb2FyZENvbXBvbmVudC5QcmVwb3Nbal1baV0gPT0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgIGlmIChqID09IDcpIHtcclxuICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkFuRG9jLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5QcmVwb3Nba11baV0gPT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlba11baV0ubmFtZSA9PSBcIkJsb2NrXCJcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIDJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlba11baV0uZ2V0Q29tcG9uZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLlNwcml0ZVxyXG4gICAgICAgICAgICAgICAgICApLnNwcml0ZUZyYW1lID0gdGhpcy5Cb2FyZENvbXBvbmVudC5Db2xvckFuRGllbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkJvYXJkQ29tcG9uZW50LkFuTmdhbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LlByZXBvc1t0aGlzLkJvYXJkQ29tcG9uZW50LkFuTmdhbmdbaV1dW2pdID09IDBcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LlhvYUFuTmdhbmdJbmRleC5wdXNoKGkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuQmxvY2tBcnJheVt0aGlzLkJvYXJkQ29tcG9uZW50LkFuTmdhbmdbaV1dW1xyXG4gICAgICAgICAgICAgICAgICBrXHJcbiAgICAgICAgICAgICAgICBdLm5hbWUgPT0gXCJCbG9ja1wiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5CbG9ja0FycmF5W3RoaXMuQm9hcmRDb21wb25lbnQuQW5OZ2FuZ1tpXV1bXHJcbiAgICAgICAgICAgICAgICAgIGtcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChcIkJsb2NrXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5zZXRVcChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlbXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkFuTmdhbmdbaV1cclxuICAgICAgICAgICAgICAgICAgICBdW2tdLmdldENvbXBvbmVudChcIkJsb2NrXCIpLk51bWJlclxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuQm9hcmRDb21wb25lbnQuWG9hQW5OZ2FuZ0luZGV4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5Bbk5nYW5nLnNwbGljZShcclxuICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuWG9hQW5OZ2FuZ0luZGV4W2ldLFxyXG4gICAgICAgICAgMVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5Yb2FBbk5nYW5nSW5kZXggPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkJvYXJkQ29tcG9uZW50LkFuRG9jLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5QcmVwb3Nbal1bdGhpcy5Cb2FyZENvbXBvbmVudC5BbkRvY1tpXV0gPT0gMFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuWG9hQW5Eb2NJbmRleC5wdXNoKGkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuQmxvY2tBcnJheVtrXVt0aGlzLkJvYXJkQ29tcG9uZW50LkFuRG9jW2ldXVxyXG4gICAgICAgICAgICAgICAgICAubmFtZSA9PSBcIkJsb2NrXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlba11bdGhpcy5Cb2FyZENvbXBvbmVudC5BbkRvY1tpXV1cclxuICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChcIkJsb2NrXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5zZXRVcChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlba11bXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkFuRG9jW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OdW1iZXJcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkJvYXJkQ29tcG9uZW50LlhvYUFuRG9jSW5kZXgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkFuRG9jLnNwbGljZShcclxuICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuWG9hQW5Eb2NJbmRleFtpXSxcclxuICAgICAgICAgIDFcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuWG9hQW5Eb2NJbmRleCA9IFtdO1xyXG4gICAgICBpZiAodGhpcy5Cb2FyZENvbXBvbmVudC5DYXJyeWluZ05vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICBpIDxcclxuICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuQ2FycnlpbmdOb2RlLmdldENvbXBvbmVudChcIkJsb2NrQ29udGFpblwiKVxyXG4gICAgICAgICAgICAuQmxvY2tBcnJheS5sZW5ndGg7XHJcbiAgICAgICAgICBpKytcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5Bbk5nYW5nLmluZGV4T2YoXHJcbiAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5DYXJyeWluZ05vZGUuZ2V0Q29tcG9uZW50KFxyXG4gICAgICAgICAgICAgICAgXCJCbG9ja0NvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICkuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OZ2FuZ1xyXG4gICAgICAgICAgICApICE9IC0xIHx8XHJcbiAgICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuQW5Eb2MuaW5kZXhPZihcclxuICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkNhcnJ5aW5nTm9kZS5nZXRDb21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICBcIkJsb2NrQ29udGFpblwiXHJcbiAgICAgICAgICAgICAgKS5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLkRvY1xyXG4gICAgICAgICAgICApICE9IC0xXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuQ2FycnlpbmdOb2RlLmdldENvbXBvbmVudChcclxuICAgICAgICAgICAgICBcIkJsb2NrQ29udGFpblwiXHJcbiAgICAgICAgICAgICkuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5Db2xvckFuRGllbTtcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5DYXJyeWluZ05vZGUuZ2V0Q29tcG9uZW50KFxyXG4gICAgICAgICAgICAgIFwiQmxvY2tDb250YWluXCJcclxuICAgICAgICAgICAgKS5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkNhcnJ5aW5nTm9kZS5nZXRDb21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICBcIkJsb2NrQ29udGFpblwiXHJcbiAgICAgICAgICAgICAgKS5Db2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY2hlY2tTZXRhYmxlKCkge1xyXG4gICAgbGV0IENvVGhlRGF0ID0gdHJ1ZTtcclxuICAgIGlmKHRoaXMuQm9hcmRDb21wb25lbnQuQ2FycnlpbmdOb2RlIT0gbnVsbCl7XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIGkgPHRoaXMuQm9hcmRDb21wb25lbnQuQ2FycnlpbmdOb2RlLmdldENvbXBvbmVudChCbG9ja0NvbnRhaW4pLkJsb2NrQXJyYXlcclxuICAgICAgICAubGVuZ3RoO2krK1xyXG4gICAgKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkNhcnJ5aW5nTm9kZS5nZXRDb21wb25lbnQoQmxvY2tDb250YWluKS5CbG9ja0FycmF5W1xyXG4gICAgICAgICAgaVxyXG4gICAgICAgIF0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuQ29UaGVEYXQgJiZcclxuICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkNhcnJ5aW5nTm9kZS5nZXRDb21wb25lbnQoQmxvY2tDb250YWluKS5CbG9ja0FycmF5W1xyXG4gICAgICAgICAgaVxyXG4gICAgICAgIF0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuTmdhbmcgIT0gbnVsbCAmJlxyXG4gICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuQ2FycnlpbmdOb2RlLmdldENvbXBvbmVudChCbG9ja0NvbnRhaW4pLkJsb2NrQXJyYXlbXHJcbiAgICAgICAgICBpXHJcbiAgICAgICAgXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Eb2MgIT0gbnVsbFxyXG4gICAgICApXHJcbiAgICAgICAgQ29UaGVEYXQgPSB0cnVlO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBDb1RoZURhdCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkNoZWNrID0gQ29UaGVEYXQ7XHJcbiAgfX1cclxuICAvLyB1cGRhdGUoKVxyXG4gIC8vIHtcclxuICAvLyAgICAgY29uc29sZS5sb2codGhpcy5ub2RlLm5hbWUpXHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==