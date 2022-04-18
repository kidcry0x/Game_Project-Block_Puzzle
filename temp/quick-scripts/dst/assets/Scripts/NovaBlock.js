
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/NovaBlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTm92YUJsb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd0tDO1FBdEtHLFdBQUssR0FBWSxJQUFJLENBQUE7UUFDckIsV0FBSyxHQUFXLElBQUksQ0FBQTtRQUNwQixTQUFHLEdBQVcsSUFBSSxDQUFBO1FBQ2xCLG1CQUFhLEdBQVcsSUFBSSxDQUFBO1FBQzVCLGlCQUFXLEdBQVcsSUFBSSxDQUFBO1FBQzFCLGNBQVEsR0FBRyxLQUFLLENBQUE7UUFDaEIsb0JBQWMsR0FBUSxJQUFJLENBQUE7UUFDMUIsbUJBQWEsR0FBUSxJQUFJLENBQUE7UUFDekIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7O1FBMEoxQixXQUFXO1FBQ1gsSUFBSTtRQUNKLHdFQUF3RTtRQUN4RSxJQUFJO0lBQ1IsQ0FBQztJQTVKRyx5QkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMs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LENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDckUsQ0FBQztJQW5LZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdLNUI7SUFBRCxlQUFDO0NBeEtELEFBd0tDLENBeEtxQyxFQUFFLENBQUMsU0FBUyxHQXdLakQ7a0JBeEtvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQm9hcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBOZ2FuZzogbnVtYmVyID0gbnVsbFxyXG4gICAgRG9jOiBudW1iZXIgPSBudWxsXHJcbiAgICBQcmV2aW91c05nYW5nOiBudW1iZXIgPSBudWxsXHJcbiAgICBQcmV2aW91c0RvYzogbnVtYmVyID0gbnVsbFxyXG4gICAgQ29UaGVEYXQgPSBmYWxzZVxyXG4gICAgQm9hcmRDb21wb25lbnQ6IGFueSA9IG51bGxcclxuICAgIGZsaWNraW5nQmxvY2s6IGFueSA9IG51bGxcclxuICAgIEJsb2NrQm9hcmQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLkJvYXJkID0gY2MuZmluZCgnQ2FudmFzL1NjcmVlbjIvQm9hcmQnKVxyXG4gICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQgPSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcylcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcylcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5CbG9ja0JvYXJkID0gY2MuZmluZCgnQ2FudmFzL1NjcmVlbjIvQm9hcmQvQmxvY2tCb2FyZCcpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEYWtob2l0YW9cIilcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkZsaWNraW5nTm92YUJsb2NrXCIpXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJOb3ZhQ2hhbmdlQ29sb3JcIilcclxuICAgICAgICB0aGlzLmZsaWNraW5nQmxvY2s9IGZ1bmN0aW9uIChibG9jazogY2MuTm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJsb2NrLm9wYWNpdHkgPSAxMDBcclxuICAgICAgICAgICAgY2MudHdlZW4oYmxvY2spLnRvKDAuNCx7b3BhY2l0eToyNTV9KS50bygwLjQse29wYWNpdHk6MTAwfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoU3RhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuekluZGV4ICs9MVxyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLnpJbmRleFxyXG4gICAgICAgIHRoaXMuQmxvY2tCb2FyZC5zb3J0QWxsQ2hpbGRyZW4oKVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0b3VjaCA9IGV2ZW50LmdldFRvdWNoZXMoKVswXVxyXG4gICAgICAgIGxldCB0b3VjaF9wb3MgPSB0b3VjaC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgbGV0IHN0YW5kYXJkX3RvdWNoX3BvcyA9IHRoaXMuQm9hcmQuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hfcG9zKVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihzdGFuZGFyZF90b3VjaF9wb3MpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaEVuZCgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5Db1RoZURhdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBuID0gdGhpcy5OZ2FuZ1xyXG4gICAgICAgICAgICBsZXQgZCA9IHRoaXMuRG9jXHJcbiAgICAgICAgICAgIC8vIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQmxvY2tBcnJheVt0aGlzLkJsb2NrQXJyYXlbaV0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuTmdhbmddW3RoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Eb2NdLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAvLyB0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlbbl1bZF0gPSB0aGlzLkJsb2NrQXJyYXlbaV1cclxuICAgICAgICAgICAgLy8gdGhpcy5Cb2FyZENvbXBvbmVudC5FbXB0eUJsb2NrQXJyYXlbbl1bZF0uc2NhbGUgPSAwXHJcbiAgICAgICAgICAgIC8vIHRoaXMuQm9hcmRDb21wb25lbnQuUHJlcG9zW25dW2RdID0gMVxyXG4gICAgICAgICAgICAvLyB0aGlzLkJvYXJkQ29tcG9uZW50LkluZGV4Q29sb3JBcnJheVtuXVtkXSA9IHRoaXMuSW5kZXhDb2xvclxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5WVE5nYW5nW3RoaXMuRG9jXSx0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLlZURG9jW3RoaXMuTmdhbmddKVxyXG4gICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LmNoZWNrQW5EaWVtKClcclxuICAgICAgICAgICAgZm9yKGxldCBpPS0xO2k8MjtpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0tMTtqPDI7aisrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuTmdhbmcraTw4JiZ0aGlzLk5nYW5nK2k+PTAmJnRoaXMuRG9jK2o8OCYmdGhpcy5Eb2Mraj49MClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuQm9hcmRDb21wb25lbnQuUHJlcG9zW3RoaXMuTmdhbmcraV1bdGhpcy5Eb2Mral0gPT0gMSYmIShpPT0wJiZqPT0wKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5FbXB0eUJsb2NrQXJyYXlbdGhpcy5OZ2FuZytpXVt0aGlzLkRvYytqXS5zY2FsZSA9IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQm9hcmRDb21wb25lbnQuQmxvY2tBcnJheVt0aGlzLk5nYW5nK2ldW3RoaXMuRG9jK2pdKS50bygwLjEse29wYWNpdHk6MH0pLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlbdGhpcy5OZ2FuZytpXVt0aGlzLkRvYytqXS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LnRhb0Jsb2NrTmdhdU5oaWVuKClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjEse29wYWNpdHk6MH0pLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMSx7eDowLHk6LTQzMH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZilcclxuICAgIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvdGhlci50YWcpXHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Db1RoZURhdCA9IHRydWVcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3ZhIGNoYW0gdm9pIGVtcHR5JylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuTmdhbmcgPSBvdGhlci5nZXRDb21wb25lbnQoXCJFbXB0eUJsb2NrXCIpLk5nYW5nXHJcbiAgICAgICAgICAgIHRoaXMuRG9jID0gb3RoZXIuZ2V0Q29tcG9uZW50KFwiRW1wdHlCbG9ja1wiKS5Eb2NcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3RoZXIuZ2V0Q29tcG9uZW50KFwiRW1wdHlCbG9ja1wiKS5OZ2FuZyxvdGhlci5nZXRDb21wb25lbnQoXCJFbXB0eUJsb2NrXCIpLkRvYylcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5OZ2FuZyx0aGlzLkRvYylcclxuICAgICAgICAgICAgLy8gdGhpcy5Cb2FyZENvbXBvbmVudC5QcmVwb3NbdGhpcy5OZ2FuZ11bdGhpcy5Eb2NdID0gMVxyXG4gICAgICAgICAgICBmb3IobGV0IGk9LTE7aTwyO2krKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPS0xO2o8MjtqKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5OZ2FuZytpPDgmJnRoaXMuTmdhbmcraT49MCYmdGhpcy5Eb2Mrajw4JiZ0aGlzLkRvYytqPj0wKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5Cb2FyZENvbXBvbmVudC5QcmVwb3NbdGhpcy5OZ2FuZytpXVt0aGlzLkRvYytqXSA9PSAxJiYhKGk9PTAmJmo9PTApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlbdGhpcy5OZ2FuZytpXVt0aGlzLkRvYytqXSkudG8oMC4xLHtzY2FsZToxLjN9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlbdGhpcy5OZ2FuZytpXVt0aGlzLkRvYytqXS5zY2FsZSA9IDEuM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29UaGVEYXQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXIsIHNlbGYpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2V4aXQgdmEgY2hhbSB2b2kgZW1wdHknKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkh1eSB2YSBjaGFtXCIpXHJcbiAgICAgICAgICAgIHRoaXMuQ29UaGVEYXQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3RoZXIudGFnID09IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNvVGhlRGF0ID0gZmFsc2VcclxuICAgICAgICAgICAgLy8gdGhpcy5Cb2FyZENvbXBvbmVudC5QcmVwb3NbdGhpcy5OZ2FuZ11bdGhpcy5Eb2NdID0gMFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9LTE7aTwyO2krKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPS0xO2o8MjtqKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5OZ2FuZytpPDgmJnRoaXMuTmdhbmcraT49MCYmdGhpcy5Eb2Mrajw4JiZ0aGlzLkRvYytqPj0wKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5Cb2FyZENvbXBvbmVudC5QcmVwb3NbdGhpcy5OZ2FuZytpXVt0aGlzLkRvYytqXSA9PSAxJiYhKGk9PTAmJmo9PTApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlbdGhpcy5OZ2FuZytpXVt0aGlzLkRvYytqXSkudG8oMC4xLHtzY2FsZToxfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5CbG9ja0FycmF5W3RoaXMuTmdhbmcraV1bdGhpcy5Eb2Mral0uc2NhbGUgPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5OZ2FuZyA9IG51bGxcclxuICAgICAgICAgICAgdGhpcy5Eb2MgPSBudWxsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuTmdhbmcgPSBudWxsXHJcbiAgICAgICAgLy8gICAgIHRoaXMuRG9jID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHR1cm5PZmZMaXN0ZW5lcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpXHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUoKVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiVmkgdHJpIGhpZW4gdGFpIGxhOiBcIiArIHRoaXMuTmdhbmcgKyBcIiBcIiArIHRoaXMuRG9jKVxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==