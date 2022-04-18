
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/BackUpScripts/DuoBlock');
require('./assets/BackUpScripts/TripleBlock');
require('./assets/Scripts/Block');
require('./assets/Scripts/BlockContain');
require('./assets/Scripts/Board');
require('./assets/Scripts/DiemSo');
require('./assets/Scripts/EmptyBlock');
require('./assets/Scripts/FBInstantManager');
require('./assets/Scripts/Gamecontroller');
require('./assets/Scripts/NovaBlock');
require('./assets/Scripts/PauseMenu');
require('./assets/Scripts/SoundController');
require('./assets/Scripts/StartGameScreen');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BackUpScripts/TripleBlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFja1VwU2NyaXB0c1xcVHJpcGxlQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE0RkM7UUF6RkcsV0FBSyxHQUFjLElBQUksQ0FBQTtRQUN2QixXQUFLLEdBQVksSUFBSSxDQUFBO1FBQ3JCLGFBQU8sR0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxRCxpQkFBVyxHQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDNUUsZ0JBQVUsR0FBYyxFQUFFLENBQUE7UUFDMUIsY0FBUSxHQUFHLEtBQUssQ0FBQTtRQUNoQix3QkFBa0IsR0FBWSxJQUFJLENBQUE7UUFDbEMsc0JBQWdCLEdBQVksSUFBSSxDQUFBO1FBQ2hDLFdBQUssR0FBRyxDQUFDLENBQUE7O0lBaUZiLENBQUM7SUFoRkcseUJBQU0s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TSxDQUFDLENBQUE7UUFDekMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtJQUNqRCxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQTtRQUNiLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFFLENBQUMsRUFDcEI7WUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUNqSTtJQUNMLENBQUM7SUF4RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRztJQUhOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0RjVCO0lBQUQsZUFBQztDQTVGRCxBQTRGQyxDQTVGcUMsRUFBRSxDQUFDLFNBQVMsR0E0RmpEO2tCQTVGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBCbG9jazogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQm9hcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBWVEJsb2NrOiBjYy5WZWMyW10gPSBbY2MudjIoLTcyLDApLGNjLnYyKDAsMCksY2MudjIoNzIsMCldXHJcbiAgICBWVEJsb2NrUXVheTogY2MuVmVjMltdID0gW2NjLnYyKC03MiwwKSxjYy52MigwLDcyKSxjYy52Mig3MiwwKSxjYy52MigwLC03MildXHJcbiAgICBCbG9ja0FycmF5OiBjYy5Ob2RlW10gPSBbXVxyXG4gICAgQ29UaGVEYXQgPSBmYWxzZVxyXG4gICAgVG91Y2hTdGFydExvY2F0aW9uOiBjYy5WZWMyID0gbnVsbFxyXG4gICAgVG91Y2hFbmRMb2NhdGlvbjogY2MuVmVjMiA9IG51bGxcclxuICAgIEluZGV4ID0gMFxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcylcclxuICAgICAgICB0aGlzLkJvYXJkID0gY2MuZmluZCgnQ2FudmFzL1NjcmVlbjIvQm9hcmQnKVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8MztpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRhb0Jsb2NrKGkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuVG91Y2hTdGFydExvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0b3VjaCA9IGV2ZW50LmdldFRvdWNoZXMoKVswXVxyXG4gICAgICAgIGxldCB0b3VjaF9wb3MgPSB0b3VjaC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgbGV0IHN0YW5kYXJkX3RvdWNoX3BvcyA9IHRoaXMuQm9hcmQuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hfcG9zKVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihzdGFuZGFyZF90b3VjaF9wb3MpXHJcbiAgICB9XHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuVG91Y2hFbmRMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgICAgICBpZih0aGlzLlRvdWNoRW5kTG9jYXRpb24uc3ViKHRoaXMuVG91Y2hTdGFydExvY2F0aW9uKS5tYWcoKTwxMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0wO2k8MztpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLkJsb2NrQXJyYXlbaV0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuQ29UaGVEYXQmJnRoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OZ2FuZyE9bnVsbCYmdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLkRvYyE9bnVsbClcclxuICAgICAgICAgICAgdGhpcy5Db1RoZURhdCA9IHRydWVcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvVGhlRGF0ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5Db1RoZURhdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8MztpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQmxvY2tBcnJheVt0aGlzLkJsb2NrQXJyYXlbaV0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuTmdhbmddW3RoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Eb2NdLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja0FycmF5W3RoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OZ2FuZ11bdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLkRvY10gPSB0aGlzLkJsb2NrQXJyYXlbaV1cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuQm9hcmQuYWRkQ2hpbGQodGhpcy5CbG9ja0FycmF5LnNoaWZ0KCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQXJyYXlbaV0uc2V0UG9zaXRpb24odGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5WVE5nYW5nW3RoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Eb2NdLHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuVlREb2NbdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLk5nYW5nXSlcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLDApXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLnRhb0Jsb2NrKClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuQmxvY2tBcnJheVtpXS54LHRoaXMuQmxvY2tBcnJheVtpXS55KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikudGFvQmxvY2tOZ2F1TmhpZW4oKVxyXG4gICAgICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLmNoZWNrTWVyZ2UoKVxyXG4gICAgICAgICAgICAvLyBmb3IobGV0IGk9MDtpPDI7aSsrKVxyXG4gICAgICAgICAgICAvLyB0aGlzLkJvYXJkLmFkZENoaWxkKHRoaXMuQmxvY2tBcnJheS5zaGlmdCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLC00NTApXHJcbiAgICB9XHJcbiAgICB0YW9CbG9jayhpbmRleDogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQmxvY2spXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJsb2NrKVxyXG4gICAgICAgIHRoaXMuQmxvY2tBcnJheS5wdXNoKGJsb2NrKVxyXG4gICAgICAgIGJsb2NrLnNldFBvc2l0aW9uKHRoaXMuVlRCbG9ja1tpbmRleF0pXHJcbiAgICAgICAgbGV0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSozKSsxXHJcbiAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuc2V0VXAobnVtYmVyKVxyXG4gICAgICAgIGJsb2NrLmdldENvbXBvbmVudChcIkJsb2NrXCIpLnR1cm5PZmZMaXN0ZW5lcigpXHJcbiAgICB9XHJcbiAgICByb3RhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuSW5kZXggKytcclxuICAgICAgICBmb3IobGV0IGk9MDtpPDM7aSs9MilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQmxvY2tBcnJheVtpXSkudG8oMC4xLHt4OiB0aGlzLlZUQmxvY2tRdWF5Wyh0aGlzLkluZGV4K2kpJTRdLngseTogdGhpcy5WVEJsb2NrUXVheVsodGhpcy5JbmRleCtpKSU0XS55fSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BlockContain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42b0fC/fxZHGK6h4XBhEwSs', 'BlockContain');
// Scripts/BlockContain.ts

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
var BlockContain = /** @class */ (function (_super) {
    __extends(BlockContain, _super);
    function BlockContain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Block = null;
        _this.Board = null;
        _this.HoldingBlockContainer = null;
        // VTBlock: cc.Vec2[] = [cc.v2(-36,0),cc.v2(0,36),cc.v2(36,0),cc.v2(0,-36)]
        _this.BlockArray = [];
        _this.CoTheDat = false;
        _this.TouchStartLocation = null;
        _this.TouchEndLocation = null;
        _this.Index = 0;
        _this.Color = null;
        _this.BlockCount = 0;
        _this.IndexColor = -1;
        _this.TypeNumber = 0;
        _this.DiemLabel = null;
        _this.Size = null;
        _this.Blank = null;
        _this.IndexInQueue = -1;
        _this.Setable = true;
        _this.IndexType = -1;
        _this.IndexInType = -1;
        _this.BlockBoard = null;
        return _this;
        // update(dt)
        // {
        //     console.log(this.Board.getComponent("Board").BlockArray[this.BlockArray[0].getComponent("Block").Ngang][this.BlockArray[0].getComponent("Block").Doc])
        //     console.log(this.BlockArray[0].getComponent("Block").Ngang)
        //     console.log(this.BlockArray[0].getComponent("Block").Doc)
        //     console.log(this.Board.getComponent("Board").EmptyBlockArray[1][2])
        // }
        // rotate()
        // {
        //     this.Index ++
        //     for(let i=0;i<2;i++)
        //     {
        //         cc.tween(this.BlockArray[i]).to(0.1,{x: this.VTBlock[(this.Index+i*2)%4].x,y: this.VTBlock[(this.Index+i*2)%4].y}).start()
        //     }
        // }
    }
    BlockContain.prototype.onLoad = function () {
        this.Board = cc.find('Canvas/Screen2/Board');
        this.BlockBoard = cc.find('Canvas/Screen2/Board/BlockBoard');
        this.node.scale = 0.4;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        // this.Board.on("check",(()=>{
        //     this.checkSetable(this.Size,this.Blank)
        // }) ,this)
        this.HoldingBlockContainer = cc.find('Canvas/Screen2/BlockHoldingContainer');
        this.DiemLabel = cc.find('Canvas/Screen2/BangDiem/ScoreLabel/Score');
        // for(let i=0;i<2;i++)
        // {
        //     this.taoBlock(2*i)
        // }
        //Tao block ngau nhien
    };
    BlockContain.prototype.khoitao = function (type, colorindex, indexintype) {
        if (indexintype === void 0) { indexintype = -1; }
        if (type == -1) {
            var temp = Math.floor(Math.random() * 100);
            {
                this.IndexType = temp;
                if (temp < 10)
                    this.taoBlockNgang(colorindex, indexintype);
                else if (temp < 20)
                    this.taoBlockDoc(colorindex, indexintype);
                else if (temp < 30)
                    this.taoBlockNho1(-1);
                else if (temp < 50)
                    this.taoBlockLNganNam(colorindex, indexintype);
                else if (temp < 65)
                    this.taoBlockLNganDung(colorindex, indexintype);
                else if (temp < 80)
                    this.taoBlockLVuongNho(colorindex, indexintype);
                else if (temp < 90)
                    this.taoBlockVuongTo(colorindex, indexintype);
                else
                    this.taoBlockNho1(-1);
                console.log("1 khoi da duoc tao");
                console.log("Thong tin khoi:" + this.IndexColor + " " + this.IndexInType);
            }
        }
        else {
            var temp = type;
            if (temp < 10)
                this.taoBlockNgang(colorindex, indexintype);
            else if (temp < 20)
                this.taoBlockDoc(colorindex, indexintype);
            else if (temp < 30)
                this.taoBlockNho1(colorindex);
            else if (temp < 50)
                this.taoBlockLNganNam(colorindex, indexintype);
            else if (temp < 65)
                this.taoBlockLNganDung(colorindex, indexintype);
            else if (temp < 80)
                this.taoBlockLVuongNho(colorindex, indexintype);
            else if (temp < 90)
                this.taoBlockVuongTo(colorindex, indexintype);
            else
                this.taoBlockNho1(colorindex);
        }
    };
    BlockContain.prototype.blockStorage = function () {
        // console.log("số hàng là:"+ this.Size.x)
        var name = "blockdata" + (this.IndexInQueue).toString();
        console.log(name);
        var datablock = {
            recall: true,
            indextype: this.IndexType,
            indexcolor: this.IndexColor,
            indexintype: this.IndexInType,
            indexinqueue: this.IndexInQueue,
            sizeX: this.Size.x,
            sizeY: this.Size.y,
            blank: this.Blank
        };
        this.Board.getComponent("Board").saveData(name, JSON.stringify(datablock));
        // cc.sys.localStorage.setItem(name, JSON.stringify(datablock))
    };
    BlockContain.prototype.onTouchStart = function (event) {
        if (this.Board.getComponent("Board").IsNewbie) {
            this.unschedule(this.Board.getComponent("Board").Hand);
            this.Board.getComponent("Board").Hand.active = false;
        }
        // this.TouchStartLocation = event.getLocation()
        this.node.scale = 1;
        this.Board.getComponent("Board").ColorAnDiem = this.Board.getComponent("Board").ColorArray[this.IndexColor + 6];
        // let temp = cc.instantiate(this.node)
        // this.node.addChild(temp)
        // temp.setPosition(cc.v2(0,200))
        // this.node.removeFromParent()
        // this.HoldingBlockContainer.addChild(this.node)
        console.log(this.Board.getComponent("Board").zIndex);
        this.Board.getComponent("Board").zIndex += 1;
        this.node.zIndex = this.Board.getComponent("Board").zIndex;
        this.BlockBoard.sortAllChildren();
        this.Board.getComponent("Board").CarryingNode = this.node;
    };
    BlockContain.prototype.onTouchMove = function (event) {
        var touch = event.getTouches()[0];
        var touch_pos = touch.getLocation();
        var standard_touch_pos = this.Board.convertToNodeSpaceAR(touch_pos);
        this.node.setPosition(standard_touch_pos);
        // for(let i =0;i<this.BlockArray.length;i++)
        // {
        //     if(this.BlockArray[i].getComponent("Block").CoTheDat&&this.BlockArray[i].getComponent("Block").Ngang!=null&&this.BlockArray[i].getComponent("Block").Doc!=null)
        //     this.CoTheDat = true
        //     else
        //     {
        //         this.CoTheDat = false
        //         break
        //     }
        // }
        // this.Board.getComponent("Board").Check = this.CoTheDat
    };
    BlockContain.prototype.onTouchEnd = function (event) {
        // this.TouchEndLocation = event.getLocation()
        // console.log(this.node.getPosition())
        for (var i = 0; i < this.BlockArray.length; i++) {
            if (this.BlockArray[i].getComponent("Block").CoTheDat && this.BlockArray[i].getComponent("Block").Ngang != null && this.BlockArray[i].getComponent("Block").Doc != null)
                this.CoTheDat = true;
            else {
                this.CoTheDat = false;
                break;
            }
        }
        if (this.CoTheDat) {
            for (var i = 0; i < this.BlockArray.length; i++) {
                var n = this.BlockArray[i].getComponent("Block").Ngang;
                var d = this.BlockArray[i].getComponent("Block").Doc;
                // this.Board.getComponent("Board").BlockArray[this.BlockArray[i].getComponent("Block").Ngang][this.BlockArray[i].getComponent("Block").Doc].destroy()
                this.Board.getComponent("Board").BlockArray[n][d] = this.BlockArray[i];
                this.Board.getComponent("Board").EmptyBlockArray[n][d].scale = 0;
                this.Board.getComponent("Board").Prepos[n][d] = 1;
                this.Board.getComponent("Board").IndexColorArray[n][d] = this.IndexColor;
                // this.Board.getComponent("Board").EmptyBlockArray[n][d].active = false
                // this.Board.addChild(this.BlockArray.shift())
                this.BlockArray[i].setPosition(this.Board.getComponent("Board").VTNgang[this.BlockArray[i].getComponent("Block").Doc], this.Board.getComponent("Board").VTDoc[this.BlockArray[i].getComponent("Block").Ngang]);
                this.node.setPosition(0, 0);
                // this.Board.getComponent("Board").taoBlock()
                // console.log(this.BlockArray[i].x,this.BlockArray[i].y)
                this.turnOffListener();
            }
            if (!this.Board.getComponent("Board").IsNewbie) {
                var name = "blockdata" + this.IndexInQueue.toString();
                // console.log(name)
                // let obj = JSON.parse(cc.sys.localStorage.getItem(name))
                var obj = null;
                this.Board.getComponent("Board").recallMemory(obj, name);
                // console.log(obj)
                obj.recall = !obj.recall;
                // cc.sys.localStorage.setItem(name, JSON.stringify(obj))
                this.Board.getComponent("Board").saveData(name, JSON.stringify(obj));
            }
            this.Board.getComponent("Board").checkAnDiem();
            delete this.Board.getComponent("Board").BlockRemainingArr[this.IndexInQueue];
            this.Board.getComponent("Board").checkSetable();
            // this.node.removeFromParent()
            // this.Board.addChild(this.node)
            this.Board.getComponent("Board").BlockRemaining--;
            this.Board.getComponent("Board").BlockAvailable--;
            if (!this.Board.getComponent("Board").IsNewbie) {
                // cc.sys.localStorage.setItem("BA" , this.Board.getComponent("Board").BlockAvailable)
                // cc.sys.localStorage.setItem("BR" , this.Board.getComponent("Board").BlockRemaining)
                this.Board.getComponent("Board").saveData("BA", this.Board.getComponent("Board").BlockAvailable);
                this.Board.getComponent("Board").saveData("BR", this.Board.getComponent("Board").BlockRemaining);
            }
            if (this.Board.getComponent("Board").BlockRemaining == 0) {
                if (this.Board.getComponent("Board").CreateNova)
                    this.Board.getComponent("Board").taoNovaBlock();
                else
                    this.Board.getComponent("Board").taoBlockNgauNhien();
            }
            this.DiemLabel.getComponent("DiemSo").Diem += this.BlockCount;
            this.DiemLabel.getComponent("DiemSo").congDiem(this.BlockCount);
            if (this.Board.getComponent("Board").IsNewbie) {
                this.Board.emit("nextStep");
            }
            // this.Board.getComponent("Board").checkMerge()
            // for(let i=0;i<2;i++)
            // this.Bo1ard.addChild(this.BlockArray.shift())
        }
        else {
            if (this.Board.getComponent("Board").IsNewbie) {
                cc.tween(this.node).to(0.1, { x: 0, y: -430 }).start();
                this.node.scale = 0.4;
                this.Board.getComponent("Board").CarryingNode = null;
            }
            else {
                // this.node.removeFromParent()
                // this.Board.getComponent("Board").BlockReadyContainer.addChild(this.node)
                cc.tween(this.node).to(0.1, { x: -190 + 190 * this.Index, y: -430 }).start();
                this.node.scale = 0.4;
                this.Board.getComponent("Board").CarryingNode = null;
            }
        }
    };
    BlockContain.prototype.taoBlockNgang = function (colorindex, indexintype) {
        console.log("da tao block ngang");
        if (colorindex == -1) {
            var color = Math.floor(Math.random() * 6);
            // console.log(color)
            this.IndexColor = color;
        }
        else
            this.IndexColor = colorindex;
        if (indexintype == -1) {
            var leng = Math.floor(Math.random() * 4) + 2;
            this.BlockCount = leng;
            this.IndexInType = leng;
            this.Size = cc.v2(1, leng);
        }
        else {
            this.BlockCount = indexintype;
            this.IndexInType = indexintype;
            this.Size = cc.v2(1, indexintype);
        }
        this.Blank = [];
        for (var i = 0; i < this.BlockCount; i++) {
            var block = cc.instantiate(this.Block);
            this.node.addChild(block);
            this.BlockArray.push(block);
            block.getComponent("Block").setUp(this.IndexColor);
            block.getComponent("Block").turnOffListener();
            block.setPosition((this.BlockCount - 1) * -36 + 72 * i, 0);
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor];
        // this.Board.addChild(this.node)
        // block.setPosition(this.VTBlock[index])
        // let number = Math.floor(Math.random()*3)+1
        // block.getComponent("Block").setUp(number)
        // block.getComponent("Block").turnOffListener()
    };
    BlockContain.prototype.taoBlockDoc = function (colorindex, indexintype) {
        if (colorindex == -1) {
            var color = Math.floor(Math.random() * 6);
            // console.log(color)
            this.IndexColor = color;
        }
        else
            this.IndexColor = colorindex;
        if (indexintype == -1) {
            var leng = Math.floor(Math.random() * 4) + 2;
            this.BlockCount = leng;
            this.IndexInType = leng;
            this.Size = cc.v2(leng, 1);
        }
        else {
            this.BlockCount = indexintype;
            this.IndexInType = indexintype;
            this.Size = cc.v2(1, indexintype);
        }
        this.Blank = [];
        for (var i = 0; i < this.BlockCount; i++) {
            var block = cc.instantiate(this.Block);
            this.node.addChild(block);
            this.BlockArray.push(block);
            block.getComponent("Block").setUp(this.IndexColor);
            block.getComponent("Block").turnOffListener();
            block.setPosition(0, (this.BlockCount - 1) * -36 + 72 * i);
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor];
        // this.Board.addChild(this.node)
        // block.setPosition(this.VTBlock[index])
        // let number = Math.floor(Math.random()*3)+1
        // block.getComponent("Block").setUp(number)
        // block.getComponent("Block").turnOffListener()
    };
    BlockContain.prototype.taoBlockVuongTo = function (colorindex, indexintype) {
        this.Size = cc.v2(3, 3);
        if (colorindex == -1) {
            var color = Math.floor(Math.random() * 6);
            // console.log(color)
            this.IndexColor = color;
        }
        else
            this.IndexColor = colorindex;
        var arrindex = [];
        var posarr = [[cc.v2(-72, 72), cc.v2(0, 72), cc.v2(72, 72)],
            [cc.v2(-72, 0), cc.v2(0, 0), cc.v2(72, 0)],
            [cc.v2(-72, -72), cc.v2(0, -72), cc.v2(72, -72)]];
        var type = 0;
        if (indexintype == -1) {
            type = Math.floor(Math.random() * 5);
        }
        else
            type = indexintype;
        this.IndexInType = type;
        switch (type) {
            case 0:
                {
                    arrindex = [0, 1, 2, 3, 6];
                    this.BlockCount = 5;
                    this.Blank = [4, 5, 7, 8];
                    break;
                }
            case 1:
                {
                    arrindex = [0, 1, 2, 5, 8];
                    this.Blank = [3, 4, 6, 7];
                    this.BlockCount = 5;
                    break;
                }
            case 2:
                {
                    arrindex = [0, 3, 6, 7, 8];
                    this.Blank = [1, 2, 4, 5];
                    this.BlockCount = 5;
                    break;
                }
            case 3:
                {
                    arrindex = [2, 5, 6, 7, 8];
                    this.Blank = [0, 1, 3, 4];
                    this.BlockCount = 5;
                    break;
                }
            case 4:
                {
                    arrindex = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                    this.Blank = [];
                    this.BlockCount = 9;
                    break;
                }
        }
        for (var i = 0; i < arrindex.length; i++) {
            var block = cc.instantiate(this.Block);
            this.node.addChild(block);
            this.BlockArray.push(block);
            block.getComponent("Block").setUp(this.IndexColor);
            block.getComponent("Block").turnOffListener();
            block.setPosition(posarr[Math.floor(arrindex[i] / 3)][arrindex[i] % 3]);
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor];
    };
    BlockContain.prototype.taoBlockLNganNam = function (colorindex, indexintype) {
        console.log("Day la indexintype cua khoi L nam:  " + indexintype);
        this.Size = cc.v2(2, 3);
        if (colorindex == -1) {
            var color = Math.floor(Math.random() * 6);
            this.IndexColor = color;
        }
        else
            this.IndexColor = colorindex;
        // this.IndexColor = color
        var arrindex = [];
        var posarr = [[cc.v2(-72, 36), cc.v2(0, 36), cc.v2(72, 36)],
            [cc.v2(-72, -36), cc.v2(0, -36), cc.v2(72, -36)]];
        var type = 0;
        if (indexintype == -1) {
            type = Math.floor(Math.random() * 4);
            // this.IndexInType = type
        }
        else
            type = indexintype;
        this.IndexInType = type;
        switch (type) {
            case 0:
                {
                    arrindex = [0, 1, 2, 3];
                    this.Blank = [4, 5];
                    this.BlockCount = 4;
                    break;
                }
            case 1:
                {
                    arrindex = [0, 1, 2, 5];
                    this.Blank = [3, 4];
                    this.BlockCount = 4;
                    break;
                }
            case 2:
                {
                    arrindex = [0, 3, 4, 5];
                    this.Blank = [1, 2];
                    this.BlockCount = 4;
                    break;
                }
            case 3:
                {
                    arrindex = [2, 3, 4, 5];
                    this.Blank = [0, 1];
                    this.BlockCount = 4;
                    break;
                }
        }
        for (var i = 0; i < 4; i++) {
            var block = cc.instantiate(this.Block);
            this.node.addChild(block);
            this.BlockArray.push(block);
            block.getComponent("Block").setUp(this.IndexColor);
            block.getComponent("Block").turnOffListener();
            block.setPosition(posarr[Math.floor(arrindex[i] / 3)][arrindex[i] % 3]);
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor];
    };
    BlockContain.prototype.taoBlockLNganDung = function (colorindex, indexintype) {
        console.log("Day la indexintype cua khoi L dung:  " + indexintype);
        this.Size = cc.v2(3, 2);
        if (colorindex == -1) {
            var color = Math.floor(Math.random() * 6);
            this.IndexColor = color;
        }
        else
            this.IndexColor = colorindex;
        // this.IndexColor = color
        var arrindex = [];
        var posarr = [[cc.v2(-36, 72), cc.v2(36, 72)],
            [cc.v2(-36, 0), cc.v2(36, 0)],
            [cc.v2(-36, -72), cc.v2(36, -72)]];
        // let type = Math.floor(Math.random()*4)let type = 0
        var type = 0;
        if (indexintype == -1) {
            type = Math.floor(Math.random() * 4);
        }
        else
            type = indexintype;
        this.IndexInType = type;
        switch (type) {
            case 0:
                {
                    arrindex = [0, 1, 2, 4];
                    this.Blank = [3, 5];
                    this.BlockCount = 4;
                    break;
                }
            case 1:
                {
                    arrindex = [0, 1, 3, 5];
                    this.Blank = [2, 4];
                    this.BlockCount = 4;
                    break;
                }
            case 2:
                {
                    arrindex = [0, 2, 4, 5];
                    this.Blank = [1, 3];
                    this.BlockCount = 4;
                    break;
                }
            case 3:
                {
                    arrindex = [1, 3, 4, 5];
                    this.Blank = [0, 2];
                    this.BlockCount = 4;
                    break;
                }
        }
        for (var i = 0; i < 4; i++) {
            var block = cc.instantiate(this.Block);
            this.node.addChild(block);
            this.BlockArray.push(block);
            block.getComponent("Block").setUp(this.IndexColor);
            block.getComponent("Block").turnOffListener();
            block.setPosition(posarr[Math.floor(arrindex[i] / 2)][arrindex[i] % 2]);
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor];
    };
    BlockContain.prototype.taoBlockLVuongNho = function (colorindex, indexintype) {
        this.Size = cc.v2(2, 2);
        // let color = Math.floor(Math.random()*6)
        // this.IndexColor = color
        if (colorindex == -1) {
            var color = Math.floor(Math.random() * 6);
            this.IndexColor = color;
        }
        else
            this.IndexColor = colorindex;
        var arrindex = [];
        var posarr = [[cc.v2(-36, 36), cc.v2(36, 36)],
            [cc.v2(-36, -36), cc.v2(36, -36)]];
        // let type = Math.floor(Math.random()*5)let type = 0
        var type = 0;
        if (indexintype == -1) {
            type = Math.floor(Math.random() * 5);
        }
        else
            type = indexintype;
        this.IndexInType = type;
        switch (type) {
            case 0:
                {
                    arrindex = [0, 1, 2];
                    this.Blank = [3];
                    this.BlockCount = 3;
                    break;
                }
            case 1:
                {
                    arrindex = [0, 1, 3];
                    this.Blank = [2];
                    this.BlockCount = 3;
                    break;
                }
            case 2:
                {
                    arrindex = [0, 2, 3];
                    this.Blank = [1];
                    this.BlockCount = 3;
                    break;
                }
            case 3:
                {
                    arrindex = [1, 2, 3];
                    this.Blank = [0];
                    this.BlockCount = 3;
                    break;
                }
            case 4:
                {
                    arrindex = [0, 1, 2, 3];
                    this.Blank = [];
                    this.BlockCount = 4;
                    break;
                }
        }
        for (var i = 0; i < arrindex.length; i++) {
            var block = cc.instantiate(this.Block);
            this.node.addChild(block);
            this.BlockArray.push(block);
            block.getComponent("Block").setUp(this.IndexColor);
            block.getComponent("Block").turnOffListener();
            block.setPosition(posarr[Math.floor(arrindex[i] / 2)][arrindex[i] % 2]);
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor];
    };
    BlockContain.prototype.taoBlockNho1 = function (colorindex) {
        this.Size = cc.v2(1, 1);
        this.Blank = [];
        var color = 0;
        if (colorindex == -1) {
            color = Math.floor(Math.random() * 6);
        }
        else
            color = colorindex;
        this.IndexColor = color;
        // console.log(color)
        this.BlockCount = 1;
        var block = cc.instantiate(this.Block);
        this.node.addChild(block);
        this.BlockArray.push(block);
        block.getComponent("Block").setUp(color);
        block.getComponent("Block").turnOffListener();
        block.setPosition(0, 0);
        this.Color = this.Board.getComponent("Board").ColorArray[color];
    };
    BlockContain.prototype.taoNovaBlock = function () {
    };
    BlockContain.prototype.turnOffListener = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    BlockContain.prototype.checkSetable = function (Size, Blank) {
        // console.log("CheckSetable called at " + this.IndexInQueue + "th Block")
        console.log("da check khoi thu " + this.IndexInQueue);
        var prepos = this.Board.getComponent("Board").Prepos;
        // console.log(prepos)
        var setable = false;
        loop1: for (var i = 0; i < 8 - Size.x + 1; i++) {
            loop2: for (var j = 0; j < 8 - Size.y + 1; j++) {
                var count = 0;
                loop3: for (var hi = 0; hi < Size.x; hi++) {
                    for (var ci = 0; ci < Size.y; ci++) {
                        if (!Blank.includes(ci + hi * Size.y)) {
                            // console.log("Called")
                            if (prepos[i + hi][j + ci] == 0) {
                                count++;
                                // console.log("Prepos o vi tri "+[i+hi]+" " +[j+ci]+ " la: "+ prepos[i+hi][j+ci])
                            }
                        }
                    }
                }
                if (count == Size.x * Size.y - Blank.length) {
                    setable = true;
                    break loop1;
                }
            }
        }
        if (setable == false) {
            if (this.Setable == true) {
                this.Setable = false;
                this.Board.getComponent("Board").BlockAvailable--;
            }
            this.turnOffListener();
            // this.Board.on("check",(()=>{
            //     this.checkSetable(this.Size,this.Blank)
            // }) ,this)
            cc.tween(this.node).to(0.5, { opacity: 100 }).start();
        }
        else {
            if (this.Setable == false) {
                this.Setable = true;
                this.Board.getComponent("Board").BlockAvailable++;
            }
            this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            cc.tween(this.node).to(0.5, { opacity: 255 }).start();
        }
    };
    __decorate([
        property(cc.Prefab)
    ], BlockContain.prototype, "Block", void 0);
    BlockContain = __decorate([
        ccclass
    ], BlockContain);
    return BlockContain;
}(cc.Component));
exports.default = BlockContain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQmxvY2tDb250YWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBNnJCQztRQTFyQkcsV0FBSyxHQUFjLElBQUksQ0FBQTtRQUN2QixXQUFLLEdBQVksSUFBSSxDQUFBO1FBQ3JCLDJCQUFxQixHQUFZLElBQUksQ0FBQTtRQUNyQywyRUFBMkU7UUFDM0UsZ0JBQVUsR0FBYyxFQUFFLENBQUE7UUFDMUIsY0FBUSxHQUFHLEtBQUssQ0FBQTtRQUNoQix3QkFBa0IsR0FBWSxJQUFJLENBQUE7UUFDbEMsc0JBQWdCLEdBQVksSUFBSSxDQUFBO1FBQ2hDLFdBQUssR0FBRyxDQUFDLENBQUE7UUFDVCxXQUFLLEdBQW1CLElBQUksQ0FBQTtRQUM1QixnQkFBVSxHQUFVLENBQUMsQ0FBQTtRQUNyQixnQkFBVSxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2YsZ0JBQVUsR0FBRyxDQUFDLENBQUE7UUFDZCxlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFDcEIsV0FBSyxHQUFhLElBQUksQ0FBQTtRQUV0QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFBO1FBRXpCLGFBQU8sR0FBRyxJQUFJLENBQUE7UUFFZCxlQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUE7UUFDdEIsaUJBQVcsR0FBVyxDQUFDLENBQUMsQ0FBQTtRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQTs7UUFpcEIxQixhQUFhO1FBQ2IsSUFBSTtRQUNKLDZKQUE2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Q3BEO2FBRUQ7WUFDSSxJQUFHLElBQUksQ0FBQyxPQUFPLElBQUUsS0FBSyxFQUN0QjtnQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtnQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7YUFDcEQ7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNoRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDcEQ7SUFDTCxDQUFDO0lBenFCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNHO0lBSE4sWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTZyQmhDO0lBQUQsbUJBQUM7Q0E3ckJELEFBNnJCQyxDQTdyQnlDLEVBQUUsQ0FBQyxTQUFTLEdBNnJCckQ7a0JBN3JCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tDb250YWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgQmxvY2s6IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEJvYXJkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgSG9sZGluZ0Jsb2NrQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLy8gVlRCbG9jazogY2MuVmVjMltdID0gW2NjLnYyKC0zNiwwKSxjYy52MigwLDM2KSxjYy52MigzNiwwKSxjYy52MigwLC0zNildXHJcbiAgICBCbG9ja0FycmF5OiBjYy5Ob2RlW10gPSBbXVxyXG4gICAgQ29UaGVEYXQgPSBmYWxzZVxyXG4gICAgVG91Y2hTdGFydExvY2F0aW9uOiBjYy5WZWMyID0gbnVsbFxyXG4gICAgVG91Y2hFbmRMb2NhdGlvbjogY2MuVmVjMiA9IG51bGxcclxuICAgIEluZGV4ID0gMFxyXG4gICAgQ29sb3I6IGNjLlNwcml0ZUZyYW1lID0gbnVsbFxyXG4gICAgQmxvY2tDb3VudDpudW1iZXIgPSAwXHJcbiAgICBJbmRleENvbG9yID0gLTFcclxuICAgIFR5cGVOdW1iZXIgPSAwXHJcbiAgICBEaWVtTGFiZWw6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgU2l6ZTogY2MuVmVjMiA9IG51bGxcclxuICAgIEJsYW5rOiBudW1iZXJbXSA9IG51bGxcclxuXHJcbiAgICBJbmRleEluUXVldWU6IG51bWJlciA9IC0xXHJcblxyXG4gICAgU2V0YWJsZSA9IHRydWVcclxuXHJcbiAgICBJbmRleFR5cGU6IG51bWJlciA9IC0xXHJcbiAgICBJbmRleEluVHlwZTogbnVtYmVyID0gLTFcclxuXHJcbiAgICBCbG9ja0JvYXJkOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5Cb2FyZCA9IGNjLmZpbmQoJ0NhbnZhcy9TY3JlZW4yL0JvYXJkJylcclxuICAgICAgICB0aGlzLkJsb2NrQm9hcmQgPSBjYy5maW5kKCdDYW52YXMvU2NyZWVuMi9Cb2FyZC9CbG9ja0JvYXJkJylcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAwLjRcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcylcclxuICAgICAgICAvLyB0aGlzLkJvYXJkLm9uKFwiY2hlY2tcIiwoKCk9PntcclxuICAgICAgICAvLyAgICAgdGhpcy5jaGVja1NldGFibGUodGhpcy5TaXplLHRoaXMuQmxhbmspXHJcbiAgICAgICAgLy8gfSkgLHRoaXMpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5Ib2xkaW5nQmxvY2tDb250YWluZXIgPSBjYy5maW5kKCdDYW52YXMvU2NyZWVuMi9CbG9ja0hvbGRpbmdDb250YWluZXInKVxyXG4gICAgICAgIHRoaXMuRGllbUxhYmVsID0gY2MuZmluZCgnQ2FudmFzL1NjcmVlbjIvQmFuZ0RpZW0vU2NvcmVMYWJlbC9TY29yZScpXHJcbiAgICAgICAgLy8gZm9yKGxldCBpPTA7aTwyO2krKylcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudGFvQmxvY2soMippKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvL1RhbyBibG9jayBuZ2F1IG5oaWVuXHJcbiAgICB9XHJcblxyXG4gICAga2hvaXRhbyh0eXBlOiBudW1iZXIsY29sb3JpbmRleCA6IG51bWJlciwgaW5kZXhpbnR5cGU6IG51bWJlciA9IC0xKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHR5cGU9PS0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRlbXAgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkluZGV4VHlwZSA9IHRlbXBcclxuICAgICAgICAgICAgICAgIGlmKHRlbXA8MTApIHRoaXMudGFvQmxvY2tOZ2FuZyhjb2xvcmluZGV4LGluZGV4aW50eXBlKVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0ZW1wPDIwKXRoaXMudGFvQmxvY2tEb2MoY29sb3JpbmRleCxpbmRleGludHlwZSlcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGVtcDwzMCl0aGlzLnRhb0Jsb2NrTmhvMSgtMSlcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGVtcDw1MCl0aGlzLnRhb0Jsb2NrTE5nYW5OYW0oY29sb3JpbmRleCxpbmRleGludHlwZSlcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGVtcDw2NSl0aGlzLnRhb0Jsb2NrTE5nYW5EdW5nKGNvbG9yaW5kZXgsaW5kZXhpbnR5cGUpXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRlbXA8ODApdGhpcy50YW9CbG9ja0xWdW9uZ05obyhjb2xvcmluZGV4LGluZGV4aW50eXBlKVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0ZW1wPDkwKXRoaXMudGFvQmxvY2tWdW9uZ1RvKGNvbG9yaW5kZXgsaW5kZXhpbnR5cGUpXHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMudGFvQmxvY2tOaG8xKC0xKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxIGtob2kgZGEgZHVvYyB0YW9cIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhvbmcgdGluIGtob2k6XCIgKyB0aGlzLkluZGV4Q29sb3IgKyBcIiBcIiArIHRoaXMuSW5kZXhJblR5cGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRlbXAgPSB0eXBlXHJcbiAgICAgICAgICAgIGlmKHRlbXA8MTApIHRoaXMudGFvQmxvY2tOZ2FuZyhjb2xvcmluZGV4LGluZGV4aW50eXBlKVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRlbXA8MjApdGhpcy50YW9CbG9ja0RvYyhjb2xvcmluZGV4LGluZGV4aW50eXBlKVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRlbXA8MzApdGhpcy50YW9CbG9ja05obzEoY29sb3JpbmRleClcclxuICAgICAgICAgICAgZWxzZSBpZih0ZW1wPDUwKXRoaXMudGFvQmxvY2tMTmdhbk5hbShjb2xvcmluZGV4LGluZGV4aW50eXBlKVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRlbXA8NjUpdGhpcy50YW9CbG9ja0xOZ2FuRHVuZyhjb2xvcmluZGV4LGluZGV4aW50eXBlKVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRlbXA8ODApdGhpcy50YW9CbG9ja0xWdW9uZ05obyhjb2xvcmluZGV4LGluZGV4aW50eXBlKVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRlbXA8OTApdGhpcy50YW9CbG9ja1Z1b25nVG8oY29sb3JpbmRleCxpbmRleGludHlwZSlcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnRhb0Jsb2NrTmhvMShjb2xvcmluZGV4KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJsb2NrU3RvcmFnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJz4buRIGjDoG5nIGzDoDpcIisgdGhpcy5TaXplLngpXHJcbiAgICAgICAgbGV0IG5hbWUgPSBcImJsb2NrZGF0YVwiICsgKHRoaXMuSW5kZXhJblF1ZXVlKS50b1N0cmluZygpXHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgICAgICBsZXQgZGF0YWJsb2NrID0ge1xyXG4gICAgICAgICAgICByZWNhbGw6IHRydWUsXHJcbiAgICAgICAgICAgIGluZGV4dHlwZTogdGhpcy5JbmRleFR5cGUsXHJcbiAgICAgICAgICAgIGluZGV4Y29sb3I6IHRoaXMuSW5kZXhDb2xvcixcclxuICAgICAgICAgICAgaW5kZXhpbnR5cGU6IHRoaXMuSW5kZXhJblR5cGUsXHJcbiAgICAgICAgICAgIGluZGV4aW5xdWV1ZTogdGhpcy5JbmRleEluUXVldWUsXHJcbiAgICAgICAgICAgIHNpemVYOiB0aGlzLlNpemUueCxcclxuICAgICAgICAgICAgc2l6ZVk6IHRoaXMuU2l6ZS55LFxyXG4gICAgICAgICAgICBibGFuazogdGhpcy5CbGFua1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLnNhdmVEYXRhKG5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGFibG9jaykpXHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGFibG9jaykpXHJcbiAgICB9XHJcbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5Jc05ld2JpZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuSGFuZClcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuSGFuZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5Ub3VjaFN0YXJ0TG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMVxyXG4gICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQ29sb3JBbkRpZW0gPSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkNvbG9yQXJyYXlbdGhpcy5JbmRleENvbG9yKzZdXHJcbiAgICAgICAgLy8gbGV0IHRlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGUpXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKHRlbXApXHJcbiAgICAgICAgLy8gdGVtcC5zZXRQb3NpdGlvbihjYy52MigwLDIwMCkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgIC8vIHRoaXMuSG9sZGluZ0Jsb2NrQ29udGFpbmVyLmFkZENoaWxkKHRoaXMubm9kZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLnpJbmRleClcclxuICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLnpJbmRleCArPTFcclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS56SW5kZXhcclxuICAgICAgICB0aGlzLkJsb2NrQm9hcmQuc29ydEFsbENoaWxkcmVuKClcclxuICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkNhcnJ5aW5nTm9kZSA9IHRoaXMubm9kZVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0b3VjaCA9IGV2ZW50LmdldFRvdWNoZXMoKVswXVxyXG4gICAgICAgIGxldCB0b3VjaF9wb3MgPSB0b3VjaC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgbGV0IHN0YW5kYXJkX3RvdWNoX3BvcyA9IHRoaXMuQm9hcmQuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hfcG9zKVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihzdGFuZGFyZF90b3VjaF9wb3MpXHJcbiAgICAgICAgLy8gZm9yKGxldCBpID0wO2k8dGhpcy5CbG9ja0FycmF5Lmxlbmd0aDtpKyspXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBpZih0aGlzLkJsb2NrQXJyYXlbaV0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuQ29UaGVEYXQmJnRoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OZ2FuZyE9bnVsbCYmdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLkRvYyE9bnVsbClcclxuICAgICAgICAvLyAgICAgdGhpcy5Db1RoZURhdCA9IHRydWVcclxuICAgICAgICAvLyAgICAgZWxzZVxyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLkNvVGhlRGF0ID0gZmFsc2VcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQ2hlY2sgPSB0aGlzLkNvVGhlRGF0XHJcbiAgICB9XHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMuVG91Y2hFbmRMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgICBmb3IobGV0IGkgPTA7aTx0aGlzLkJsb2NrQXJyYXkubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Db1RoZURhdCYmdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLk5nYW5nIT1udWxsJiZ0aGlzLkJsb2NrQXJyYXlbaV0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuRG9jIT1udWxsKVxyXG4gICAgICAgICAgICB0aGlzLkNvVGhlRGF0ID0gdHJ1ZVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29UaGVEYXQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLkNvVGhlRGF0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLkJsb2NrQXJyYXkubGVuZ3RoO2krKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG4gPSB0aGlzLkJsb2NrQXJyYXlbaV0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuTmdhbmdcclxuICAgICAgICAgICAgICAgIGxldCBkID0gdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLkRvY1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja0FycmF5W3RoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OZ2FuZ11bdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLkRvY10uZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkJsb2NrQXJyYXlbbl1bZF0gPSB0aGlzLkJsb2NrQXJyYXlbaV1cclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuRW1wdHlCbG9ja0FycmF5W25dW2RdLnNjYWxlID0gMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5QcmVwb3Nbbl1bZF0gPSAxXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkluZGV4Q29sb3JBcnJheVtuXVtkXSA9IHRoaXMuSW5kZXhDb2xvclxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5FbXB0eUJsb2NrQXJyYXlbbl1bZF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuQm9hcmQuYWRkQ2hpbGQodGhpcy5CbG9ja0FycmF5LnNoaWZ0KCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQXJyYXlbaV0uc2V0UG9zaXRpb24odGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5WVE5nYW5nW3RoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Eb2NdLHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuVlREb2NbdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLk5nYW5nXSlcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLDApXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLnRhb0Jsb2NrKClcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuQmxvY2tBcnJheVtpXS54LHRoaXMuQmxvY2tBcnJheVtpXS55KVxyXG4gICAgICAgICAgICAgICAgdGhpcy50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIXRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuSXNOZXdiaWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gXCJibG9ja2RhdGFcIiArIHRoaXMuSW5kZXhJblF1ZXVlLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWUpXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgb2JqID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkpXHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5yZWNhbGxNZW1vcnkob2JqLCBuYW1lKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqKVxyXG4gICAgICAgICAgICAgICAgb2JqLnJlY2FsbCA9ICFvYmoucmVjYWxsXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkob2JqKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuc2F2ZURhdGEobmFtZSwgSlNPTi5zdHJpbmdpZnkob2JqKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLmNoZWNrQW5EaWVtKClcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQmxvY2tSZW1haW5pbmdBcnJbdGhpcy5JbmRleEluUXVldWVdXHJcbiAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuY2hlY2tTZXRhYmxlKClcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgICAgICAvLyB0aGlzLkJvYXJkLmFkZENoaWxkKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja1JlbWFpbmluZy0tXHJcbiAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQmxvY2tBdmFpbGFibGUtLVxyXG4gICAgICAgICAgICBpZighdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5Jc05ld2JpZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQkFcIiAsIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQmxvY2tBdmFpbGFibGUpXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJCUlwiICwgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja1JlbWFpbmluZylcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuc2F2ZURhdGEoXCJCQVwiICwgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja0F2YWlsYWJsZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuc2F2ZURhdGEoXCJCUlwiICwgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja1JlbWFpbmluZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja1JlbWFpbmluZz09MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5DcmVhdGVOb3ZhKSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLnRhb05vdmFCbG9jaygpXHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikudGFvQmxvY2tOZ2F1TmhpZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuRGllbUxhYmVsLmdldENvbXBvbmVudChcIkRpZW1Tb1wiKS5EaWVtICs9IHRoaXMuQmxvY2tDb3VudFxyXG4gICAgICAgICAgICB0aGlzLkRpZW1MYWJlbC5nZXRDb21wb25lbnQoXCJEaWVtU29cIikuY29uZ0RpZW0odGhpcy5CbG9ja0NvdW50KVxyXG4gICAgICAgICAgICBpZih0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLklzTmV3YmllKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkJvYXJkLmVtaXQoXCJuZXh0U3RlcFwiKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLmNoZWNrTWVyZ2UoKVxyXG4gICAgICAgICAgICAvLyBmb3IobGV0IGk9MDtpPDI7aSsrKVxyXG4gICAgICAgICAgICAvLyB0aGlzLkJvMWFyZC5hZGRDaGlsZCh0aGlzLkJsb2NrQXJyYXkuc2hpZnQoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5Jc05ld2JpZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjEse3g6MCx5Oi00MzB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAwLjRcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQ2FycnlpbmdOb2RlID0gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkJsb2NrUmVhZHlDb250YWluZXIuYWRkQ2hpbGQodGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjEse3g6LTE5MCsxOTAqdGhpcy5JbmRleCx5Oi00MzB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAwLjRcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQ2FycnlpbmdOb2RlID0gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdGFvQmxvY2tOZ2FuZyhjb2xvcmluZGV4OiBudW1iZXIsIGluZGV4aW50eXBlOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYSB0YW8gYmxvY2sgbmdhbmdcIilcclxuICAgICAgICBpZihjb2xvcmluZGV4ID09IC0xKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2xvcilcclxuICAgICAgICAgICAgdGhpcy5JbmRleENvbG9yID0gY29sb3JcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB0aGlzLkluZGV4Q29sb3IgPSBjb2xvcmluZGV4XHJcbiAgICAgICAgaWYoaW5kZXhpbnR5cGUgPT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbGVuZyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KSsyXHJcbiAgICAgICAgICAgIHRoaXMuQmxvY2tDb3VudCA9IGxlbmdcclxuICAgICAgICAgICAgdGhpcy5JbmRleEluVHlwZSA9IGxlbmdcclxuICAgICAgICAgICAgdGhpcy5TaXplID0gY2MudjIoMSxsZW5nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSBpbmRleGludHlwZVxyXG4gICAgICAgICAgICB0aGlzLkluZGV4SW5UeXBlID0gaW5kZXhpbnR5cGVcclxuICAgICAgICAgICAgdGhpcy5TaXplID0gY2MudjIoMSxpbmRleGludHlwZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5CbGFuayA9IFtdXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLkJsb2NrQ291bnQ7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5CbG9jaylcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJsb2NrKVxyXG4gICAgICAgICAgICB0aGlzLkJsb2NrQXJyYXkucHVzaChibG9jaylcclxuICAgICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuc2V0VXAodGhpcy5JbmRleENvbG9yKVxyXG4gICAgICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbigodGhpcy5CbG9ja0NvdW50LTEpKi0zNis3MippLDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQ29sb3IgPSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkNvbG9yQXJyYXlbdGhpcy5JbmRleENvbG9yXVxyXG4gICAgICAgIC8vIHRoaXMuQm9hcmQuYWRkQ2hpbGQodGhpcy5ub2RlKVxyXG4gICAgICAgIC8vIGJsb2NrLnNldFBvc2l0aW9uKHRoaXMuVlRCbG9ja1tpbmRleF0pXHJcbiAgICAgICAgLy8gbGV0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSozKSsxXHJcbiAgICAgICAgLy8gYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuc2V0VXAobnVtYmVyKVxyXG4gICAgICAgIC8vIGJsb2NrLmdldENvbXBvbmVudChcIkJsb2NrXCIpLnR1cm5PZmZMaXN0ZW5lcigpXHJcbiAgICB9XHJcbiAgICB0YW9CbG9ja0RvYyhjb2xvcmluZGV4OiBudW1iZXIsIGluZGV4aW50eXBlOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoY29sb3JpbmRleCA9PSAtMSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNilcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29sb3IpXHJcbiAgICAgICAgICAgIHRoaXMuSW5kZXhDb2xvciA9IGNvbG9yXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgdGhpcy5JbmRleENvbG9yID0gY29sb3JpbmRleFxyXG4gICAgICAgIGlmKGluZGV4aW50eXBlID09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGxlbmcgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNCkrMlxyXG4gICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSBsZW5nXHJcbiAgICAgICAgICAgIHRoaXMuSW5kZXhJblR5cGUgPSBsZW5nXHJcbiAgICAgICAgICAgIHRoaXMuU2l6ZSA9IGNjLnYyKGxlbmcsMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gaW5kZXhpbnR5cGVcclxuICAgICAgICAgICAgdGhpcy5JbmRleEluVHlwZSA9IGluZGV4aW50eXBlXHJcbiAgICAgICAgICAgIHRoaXMuU2l6ZSA9IGNjLnYyKDEsaW5kZXhpbnR5cGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQmxhbmsgPSBbXVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5CbG9ja0NvdW50O2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQmxvY2spXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChibG9jaylcclxuICAgICAgICAgICAgdGhpcy5CbG9ja0FycmF5LnB1c2goYmxvY2spXHJcbiAgICAgICAgICAgIGJsb2NrLmdldENvbXBvbmVudChcIkJsb2NrXCIpLnNldFVwKHRoaXMuSW5kZXhDb2xvcilcclxuICAgICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikudHVybk9mZkxpc3RlbmVyKClcclxuICAgICAgICAgICAgYmxvY2suc2V0UG9zaXRpb24oMCwodGhpcy5CbG9ja0NvdW50LTEpKi0zNis3MippKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkNvbG9yID0gdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5Db2xvckFycmF5W3RoaXMuSW5kZXhDb2xvcl1cclxuICAgICAgICAvLyB0aGlzLkJvYXJkLmFkZENoaWxkKHRoaXMubm9kZSlcclxuICAgICAgICAvLyBibG9jay5zZXRQb3NpdGlvbih0aGlzLlZUQmxvY2tbaW5kZXhdKVxyXG4gICAgICAgIC8vIGxldCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMykrMVxyXG4gICAgICAgIC8vIGJsb2NrLmdldENvbXBvbmVudChcIkJsb2NrXCIpLnNldFVwKG51bWJlcilcclxuICAgICAgICAvLyBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgfVxyXG4gICAgdGFvQmxvY2tWdW9uZ1RvKGNvbG9yaW5kZXg6IG51bWJlciwgaW5kZXhpbnR5cGU6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLlNpemUgPSBjYy52MigzLDMpXHJcbiAgICAgICAgaWYoY29sb3JpbmRleCA9PSAtMSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNilcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29sb3IpXHJcbiAgICAgICAgICAgIHRoaXMuSW5kZXhDb2xvciA9IGNvbG9yXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgdGhpcy5JbmRleENvbG9yID0gY29sb3JpbmRleFxyXG4gICAgICAgIGxldCBhcnJpbmRleDogbnVtYmVyW10gPSBbXVxyXG4gICAgICAgIGxldCBwb3NhcnI6IGNjLlZlYzJbXVtdPSBcclxuICAgICAgICBbW2NjLnYyKC03Miw3MiksY2MudjIoMCw3MiksY2MudjIoNzIsNzIpXSxcclxuICAgICAgICBbY2MudjIoLTcyLDApLGNjLnYyKDAsMCksY2MudjIoNzIsMCldLFxyXG4gICAgICAgIFtjYy52MigtNzIsLTcyKSxjYy52MigwLC03MiksY2MudjIoNzIsLTcyKV1dXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHR5cGUgPSAwXHJcbiAgICAgICAgaWYoaW5kZXhpbnR5cGU9PS0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo1KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgdHlwZSA9IGluZGV4aW50eXBlXHJcbiAgICAgICAgdGhpcy5JbmRleEluVHlwZSA9IHR5cGVcclxuICAgICAgICBzd2l0Y2godHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgMCA6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyaW5kZXggPSBbMCwxLDIsMyw2XVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxvY2tDb3VudCA9IDVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsYW5rID0gWzQsNSw3LDhdXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGNhc2UgMSA6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyaW5kZXggPSBbMCwxLDIsNSw4XVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxhbmsgPSBbMyw0LDYsN11cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSA1XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAyIDpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJpbmRleCA9IFswLDMsNiw3LDhdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbGFuayA9IFsxLDIsNCw1XVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxvY2tDb3VudCA9IDVcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDMgOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmluZGV4ID0gWzIsNSw2LDcsOF1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsYW5rID0gWzAsMSwzLDRdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gNVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgNCA6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyaW5kZXggPSBbMCwxLDIsMyw0LDUsNiw3LDhdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbGFuayA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gOVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJyaW5kZXgubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQmxvY2spXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChibG9jaylcclxuICAgICAgICAgICAgdGhpcy5CbG9ja0FycmF5LnB1c2goYmxvY2spXHJcbiAgICAgICAgICAgIGJsb2NrLmdldENvbXBvbmVudChcIkJsb2NrXCIpLnNldFVwKHRoaXMuSW5kZXhDb2xvcilcclxuICAgICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikudHVybk9mZkxpc3RlbmVyKClcclxuICAgICAgICAgICAgYmxvY2suc2V0UG9zaXRpb24ocG9zYXJyW01hdGguZmxvb3IoYXJyaW5kZXhbaV0vMyldW2FycmluZGV4W2ldJTNdKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkNvbG9yID0gdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5Db2xvckFycmF5W3RoaXMuSW5kZXhDb2xvcl1cclxuICAgIH1cclxuICAgIHRhb0Jsb2NrTE5nYW5OYW0oY29sb3JpbmRleDogbnVtYmVyLCBpbmRleGludHlwZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF5IGxhIGluZGV4aW50eXBlIGN1YSBraG9pIEwgbmFtOiAgXCIgICsgaW5kZXhpbnR5cGUpXHJcbiAgICAgICAgdGhpcy5TaXplPWNjLnYyKDIsMylcclxuICAgICAgICBpZihjb2xvcmluZGV4PT0tMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KVxyXG4gICAgICAgICAgICB0aGlzLkluZGV4Q29sb3IgPSBjb2xvclxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMuSW5kZXhDb2xvciA9IGNvbG9yaW5kZXhcclxuICAgICAgICAvLyB0aGlzLkluZGV4Q29sb3IgPSBjb2xvclxyXG4gICAgICAgIGxldCBhcnJpbmRleDogbnVtYmVyW10gPSBbXVxyXG4gICAgICAgIGxldCBwb3NhcnI6IGNjLlZlYzJbXVtdPSBcclxuICAgICAgICBbW2NjLnYyKC03MiwzNiksY2MudjIoMCwzNiksY2MudjIoNzIsMzYpXSxcclxuICAgICAgICBbY2MudjIoLTcyLC0zNiksY2MudjIoMCwtMzYpLGNjLnYyKDcyLC0zNildXVxyXG4gICAgICAgIGxldCB0eXBlID0gMFxyXG4gICAgICAgIGlmKGluZGV4aW50eXBlID09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KVxyXG4gICAgICAgICAgICAvLyB0aGlzLkluZGV4SW5UeXBlID0gdHlwZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHR5cGUgPSBpbmRleGludHlwZVxyXG4gICAgICAgIHRoaXMuSW5kZXhJblR5cGUgPSB0eXBlXHJcbiAgICAgICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIDAgOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmluZGV4ID0gWzAsMSwyLDNdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbGFuayA9IFs0LDVdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gNFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBjYXNlIDEgOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmluZGV4ID0gWzAsMSwyLDVdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbGFuayA9IFszLDRdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gNFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMiA6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyaW5kZXggPSBbMCwzLDQsNV1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsYW5rID0gWzEsMl1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSA0XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAzIDpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJpbmRleCA9IFsyLDMsNCw1XVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxhbmsgPSBbMCwxXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxvY2tDb3VudCA9IDRcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPDQ7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5CbG9jaylcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJsb2NrKVxyXG4gICAgICAgICAgICB0aGlzLkJsb2NrQXJyYXkucHVzaChibG9jaylcclxuICAgICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuc2V0VXAodGhpcy5JbmRleENvbG9yKVxyXG4gICAgICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbihwb3NhcnJbTWF0aC5mbG9vcihhcnJpbmRleFtpXS8zKV1bYXJyaW5kZXhbaV0lM10pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQ29sb3IgPSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkNvbG9yQXJyYXlbdGhpcy5JbmRleENvbG9yXVxyXG4gICAgfVxyXG4gICAgdGFvQmxvY2tMTmdhbkR1bmcoY29sb3JpbmRleDogbnVtYmVyLCBpbmRleGludHlwZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF5IGxhIGluZGV4aW50eXBlIGN1YSBraG9pIEwgZHVuZzogIFwiICArIGluZGV4aW50eXBlKVxyXG4gICAgICAgIHRoaXMuU2l6ZSA9IGNjLnYyKDMsMilcclxuICAgICAgICBpZihjb2xvcmluZGV4ID09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjYpXHJcbiAgICAgICAgICAgIHRoaXMuSW5kZXhDb2xvciA9IGNvbG9yXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgdGhpcy5JbmRleENvbG9yID0gY29sb3JpbmRleFxyXG4gICAgICAgIC8vIHRoaXMuSW5kZXhDb2xvciA9IGNvbG9yXHJcbiAgICAgICAgbGV0IGFycmluZGV4OiBudW1iZXJbXSA9IFtdXHJcbiAgICAgICAgbGV0IHBvc2FycjogY2MuVmVjMltdW109IFxyXG4gICAgICAgIFtbY2MudjIoLTM2LDcyKSxjYy52MigzNiw3MildLFxyXG4gICAgICAgIFtjYy52MigtMzYsMCksY2MudjIoMzYsMCldLFxyXG4gICAgICAgIFtjYy52MigtMzYsLTcyKSxjYy52MigzNiwtNzIpXV1cclxuICAgICAgICAvLyBsZXQgdHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KWxldCB0eXBlID0gMFxyXG4gICAgICAgIGxldCB0eXBlID0gMFxyXG4gICAgICAgIGlmKGluZGV4aW50eXBlID09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHR5cGUgPSBpbmRleGludHlwZVxyXG4gICAgICAgIHRoaXMuSW5kZXhJblR5cGUgPSB0eXBlXHJcbiAgICAgICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIDAgOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmluZGV4ID0gWzAsMSwyLDRdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbGFuayA9IFszLDVdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gNFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBjYXNlIDEgOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmluZGV4ID0gWzAsMSwzLDVdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbGFuayA9IFsyLDRdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gNFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMiA6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyaW5kZXggPSBbMCwyLDQsNV1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsYW5rID0gWzEsM11cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSA0XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAzIDpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJpbmRleCA9IFsxLDMsNCw1XVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxhbmsgPSBbMCwyXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxvY2tDb3VudCA9IDRcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPDQ7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5CbG9jaylcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJsb2NrKVxyXG4gICAgICAgICAgICB0aGlzLkJsb2NrQXJyYXkucHVzaChibG9jaylcclxuICAgICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuc2V0VXAodGhpcy5JbmRleENvbG9yKVxyXG4gICAgICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbihwb3NhcnJbTWF0aC5mbG9vcihhcnJpbmRleFtpXS8yKV1bYXJyaW5kZXhbaV0lMl0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQ29sb3IgPSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkNvbG9yQXJyYXlbdGhpcy5JbmRleENvbG9yXVxyXG4gICAgfVxyXG4gICAgdGFvQmxvY2tMVnVvbmdOaG8oY29sb3JpbmRleDogbnVtYmVyLCBpbmRleGludHlwZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuU2l6ZSA9IGNjLnYyKDIsMilcclxuICAgICAgICAvLyBsZXQgY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNilcclxuICAgICAgICAvLyB0aGlzLkluZGV4Q29sb3IgPSBjb2xvclxyXG4gICAgICAgIGlmKGNvbG9yaW5kZXggPT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNilcclxuICAgICAgICAgICAgdGhpcy5JbmRleENvbG9yID0gY29sb3JcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB0aGlzLkluZGV4Q29sb3IgPSBjb2xvcmluZGV4XHJcbiAgICAgICAgbGV0IGFycmluZGV4OiBudW1iZXJbXSA9IFtdXHJcbiAgICAgICAgbGV0IHBvc2FycjogY2MuVmVjMltdW109IFxyXG4gICAgICAgIFtbY2MudjIoLTM2LDM2KSxjYy52MigzNiwzNildLFxyXG4gICAgICAgIFtjYy52MigtMzYsLTM2KSxjYy52MigzNiwtMzYpXV1cclxuICAgICAgICAvLyBsZXQgdHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo1KWxldCB0eXBlID0gMFxyXG4gICAgICAgIGxldCB0eXBlID0gMFxyXG4gICAgICAgIGlmKGluZGV4aW50eXBlID09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo1KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHR5cGUgPSBpbmRleGludHlwZVxyXG4gICAgICAgIHRoaXMuSW5kZXhJblR5cGUgPSB0eXBlXHJcbiAgICAgICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIDAgOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmluZGV4ID0gWzAsMSwyXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxhbmsgPSBbM11cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSAzXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGNhc2UgMSA6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyaW5kZXggPSBbMCwxLDNdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbGFuayA9IFsyXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxvY2tDb3VudCA9IDNcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDIgOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmluZGV4ID0gWzAsMiwzXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxhbmsgPSBbMV1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSAzXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAzIDpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJpbmRleCA9IFsxLDIsM11cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsYW5rID0gWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gM1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgNCA6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyaW5kZXggPSBbMCwxLDIsM11cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsYW5rID0gW11cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSA0XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxhcnJpbmRleC5sZW5ndGg7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5CbG9jaylcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJsb2NrKVxyXG4gICAgICAgICAgICB0aGlzLkJsb2NrQXJyYXkucHVzaChibG9jaylcclxuICAgICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuc2V0VXAodGhpcy5JbmRleENvbG9yKVxyXG4gICAgICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbihwb3NhcnJbTWF0aC5mbG9vcihhcnJpbmRleFtpXS8yKV1bYXJyaW5kZXhbaV0lMl0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQ29sb3IgPSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkNvbG9yQXJyYXlbdGhpcy5JbmRleENvbG9yXVxyXG4gICAgfVxyXG4gICAgdGFvQmxvY2tOaG8xKGNvbG9yaW5kZXg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLlNpemUgPSBjYy52MigxLDEpXHJcbiAgICAgICAgdGhpcy5CbGFuayA9IFtdXHJcbiAgICAgICAgbGV0IGNvbG9yID0gMFxyXG4gICAgICAgIGlmKGNvbG9yaW5kZXg9PS0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBjb2xvciA9IGNvbG9yaW5kZXhcclxuICAgICAgICB0aGlzLkluZGV4Q29sb3IgPSBjb2xvclxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbG9yKVxyXG4gICAgICAgIHRoaXMuQmxvY2tDb3VudCA9IDFcclxuICAgICAgICBsZXQgYmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJsb2NrKVxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChibG9jaylcclxuICAgICAgICB0aGlzLkJsb2NrQXJyYXkucHVzaChibG9jaylcclxuICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5zZXRVcChjb2xvcilcclxuICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgICAgIGJsb2NrLnNldFBvc2l0aW9uKDAsMClcclxuICAgICAgICB0aGlzLkNvbG9yID0gdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5Db2xvckFycmF5W2NvbG9yXVxyXG4gICAgfVxyXG4gICAgdGFvTm92YUJsb2NrKClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHR1cm5PZmZMaXN0ZW5lcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTZXRhYmxlKFNpemU6IGNjLlZlYzIsIEJsYW5rOiBudW1iZXJbXSlcclxuICAgIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNoZWNrU2V0YWJsZSBjYWxsZWQgYXQgXCIgKyB0aGlzLkluZGV4SW5RdWV1ZSArIFwidGggQmxvY2tcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhIGNoZWNrIGtob2kgdGh1IFwiICsgdGhpcy5JbmRleEluUXVldWUpXHJcbiAgICAgICAgbGV0IHByZXBvcyA9IHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuUHJlcG9zXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJlcG9zKVxyXG4gICAgICAgIGxldCBzZXRhYmxlID0gZmFsc2VcclxubG9vcDE6XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTw4LVNpemUueCsxO2krKylcclxuICAgICAgICB7XHJcbmxvb3AyOlxyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPDgtU2l6ZS55KzE7aisrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwXHJcbmxvb3AzOlxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBoaT0wO2hpPFNpemUueDtoaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgY2k9MDtjaTxTaXplLnk7Y2krKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFCbGFuay5pbmNsdWRlcyhjaStoaSpTaXplLnkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNhbGxlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJlcG9zW2kraGldW2orY2ldPT0wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlByZXBvcyBvIHZpIHRyaSBcIitbaStoaV0rXCIgXCIgK1tqK2NpXSsgXCIgbGE6IFwiKyBwcmVwb3NbaStoaV1baitjaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoY291bnQ9PVNpemUueCpTaXplLnktQmxhbmsubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldGFibGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWsgbG9vcDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzZXRhYmxlID09IGZhbHNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5TZXRhYmxlPT10cnVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNldGFibGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja0F2YWlsYWJsZS0tXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgICAgICAgICAvLyB0aGlzLkJvYXJkLm9uKFwiY2hlY2tcIiwoKCk9PntcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY2hlY2tTZXRhYmxlKHRoaXMuU2l6ZSx0aGlzLkJsYW5rKVxyXG4gICAgICAgICAgICAvLyB9KSAsdGhpcylcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjUse29wYWNpdHk6MTAwfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLlNldGFibGU9PWZhbHNlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNldGFibGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkJsb2NrQXZhaWxhYmxlKytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcylcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuNSx7b3BhY2l0eToyNTV9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlKGR0KVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQmxvY2tBcnJheVt0aGlzLkJsb2NrQXJyYXlbMF0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuTmdhbmddW3RoaXMuQmxvY2tBcnJheVswXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Eb2NdKVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuQmxvY2tBcnJheVswXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OZ2FuZylcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLkJsb2NrQXJyYXlbMF0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuRG9jKVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuRW1wdHlCbG9ja0FycmF5WzFdWzJdKVxyXG4gICAgICAgIFxyXG4gICAgLy8gfVxyXG4gICAgLy8gcm90YXRlKClcclxuICAgIC8vIHtcclxuICAgIC8vICAgICB0aGlzLkluZGV4ICsrXHJcbiAgICAvLyAgICAgZm9yKGxldCBpPTA7aTwyO2krKylcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQmxvY2tBcnJheVtpXSkudG8oMC4xLHt4OiB0aGlzLlZUQmxvY2tbKHRoaXMuSW5kZXgraSoyKSU0XS54LHk6IHRoaXMuVlRCbG9ja1sodGhpcy5JbmRleCtpKjIpJTRdLnl9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59XHJcblxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DiemSo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26fc2xcZDtBtL8pw/6X4Yt7', 'DiemSo');
// Scripts/DiemSo.ts

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
var FBInstantManager_1 = require("./FBInstantManager");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DiemTween = null;
        _this.HighScoreLabel = null;
        // @property(cc.Node)
        // DiemLable: cc.Node = null
        _this.Diem = 0;
        _this.HighScore = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        if (FBInstantManager_1.default.getInstance().getPlayerId() !== 'localId') {
            FBInstant.player.getDataAsync([
                'Diem',
                'HighScore',
            ]).then(function (data) {
                this.Diem = data['Diem'];
                this.HighScore = data['HighScore'];
            });
        }
        else {
            this.Diem = Number(cc.sys.localStorage.getItem("diem"));
            this.HighScore = Number(cc.sys.localStorage.getItem("highscore"));
        }
    };
    NewClass.prototype.congDiem = function () {
        var _this = this;
        // cc.sys.localStorage.setItem('highscore', 0)
        cc.tween(this.DiemTween)
            .to(0.5, { angle: this.Diem }, { easing: "cubicOut" })
            .call(function () {
            if (FBInstantManager_1.default.getInstance().getPlayerId() !== 'localId') {
                FBInstant.player.setDataAsync({
                    "Diem": _this.Diem,
                    "HighScore": _this.HighScore,
                }).then(function (data) {
                    console.log("Data setted");
                });
            }
            else {
                cc.sys.localStorage.setItem("diem", _this.Diem);
                cc.sys.localStorage.setItem("highscore", _this.HighScore);
            }
            if (_this.HighScore <= _this.Diem)
                _this.HighScore = _this.Diem;
        })
            .start();
    };
    NewClass.prototype.update = function () {
        var diem = Math.floor(this.DiemTween.angle);
        this.node.getComponent(cc.Label).string = diem.toString();
        this.HighScoreLabel.getComponent(cc.Label).string =
            this.HighScore.toString();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "DiemTween", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "HighScoreLabel", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGllbVNvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLHVEQUFrRDtBQUVsRDtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBEQztRQXhEQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFDNUIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixlQUFTLEdBQVcsQ0FBQyxDQUFDOztJQWtEeEIsQ0FBQztJQWhEQyx5QkFBTSxHQUFOO1FBQ0UsSUFBRywwQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxTQUFTLEVBQUM7WUFDNUQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLE1BQU07Z0JBQ04sV0FBVzthQUNaLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBUyxJQUFJO2dCQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNwQyxDQUFDLENBQ0YsQ0FBQTtTQUNGO2FBRUQ7WUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQUEsaUJBcUJDO1FBcEJDLDhDQUE4QztRQUM5QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDckIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDckQsSUFBSSxDQUFDO1lBRUosSUFBSSwwQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxTQUFTLEVBQUU7Z0JBQzlELFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO29CQUM1QixNQUFNLEVBQUUsS0FBSSxDQUFDLElBQUk7b0JBQ2pCLFdBQVcsRUFBRSxLQUFJLENBQUMsU0FBUztpQkFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQUk7Z0JBQ0gsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9DLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxLQUFJLENBQUMsU0FBUyxJQUFJLEtBQUksQ0FBQyxJQUFJO2dCQUFFLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQztRQUU5RCxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO1lBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQXZERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ2E7SUFKWixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEQ1QjtJQUFELGVBQUM7Q0ExREQsQUEwREMsQ0ExRHFDLEVBQUUsQ0FBQyxTQUFTLEdBMERqRDtrQkExRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgRkJJbnN0YW50TWFuYWdlciBmcm9tIFwiLi9GQkluc3RhbnRNYW5hZ2VyXCI7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBEaWVtVHdlZW46IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEhpZ2hTY29yZUxhYmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAvLyBEaWVtTGFibGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgRGllbTogbnVtYmVyID0gMDtcclxuICBIaWdoU2NvcmU6IG51bWJlciA9IDA7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGlmKEZCSW5zdGFudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJJZCgpICE9PSAnbG9jYWxJZCcpe1xyXG4gICAgICBGQkluc3RhbnQucGxheWVyLmdldERhdGFBc3luYyhbXHJcbiAgICAgICAgJ0RpZW0nLFxyXG4gICAgICAgICdIaWdoU2NvcmUnLFxyXG4gICAgICBdKS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgdGhpcy5EaWVtID0gZGF0YVsnRGllbSddXHJcbiAgICAgICAgICB0aGlzLkhpZ2hTY29yZSA9IGRhdGFbJ0hpZ2hTY29yZSddXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuRGllbSA9IE51bWJlcihjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkaWVtXCIpKTtcclxuICAgICAgdGhpcy5IaWdoU2NvcmUgPSBOdW1iZXIoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaHNjb3JlXCIpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbmdEaWVtKCkge1xyXG4gICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWdoc2NvcmUnLCAwKVxyXG4gICAgY2MudHdlZW4odGhpcy5EaWVtVHdlZW4pXHJcbiAgICAgIC50bygwLjUsIHsgYW5nbGU6IHRoaXMuRGllbSB9LCB7IGVhc2luZzogXCJjdWJpY091dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoRkJJbnN0YW50TWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFBsYXllcklkKCkgIT09ICdsb2NhbElkJykge1xyXG4gICAgICAgICAgRkJJbnN0YW50LnBsYXllci5zZXREYXRhQXN5bmMoe1xyXG4gICAgICAgICAgICBcIkRpZW1cIjogdGhpcy5EaWVtLFxyXG4gICAgICAgICAgICBcIkhpZ2hTY29yZVwiOiB0aGlzLkhpZ2hTY29yZSxcclxuICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBzZXR0ZWRcIilcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGllbVwiLCB0aGlzLkRpZW0pO1xyXG4gICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlnaHNjb3JlXCIsIHRoaXMuSGlnaFNjb3JlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuSGlnaFNjb3JlIDw9IHRoaXMuRGllbSkgdGhpcy5IaWdoU2NvcmUgPSB0aGlzLkRpZW07XHJcbiAgICAgICAgXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgbGV0IGRpZW0gPSBNYXRoLmZsb29yKHRoaXMuRGllbVR3ZWVuLmFuZ2xlKTtcclxuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRpZW0udG9TdHJpbmcoKTtcclxuICAgIHRoaXMuSGlnaFNjb3JlTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG4gICAgICB0aGlzLkhpZ2hTY29yZS50b1N0cmluZygpO1xyXG4gIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PauseMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5be2aWPDFhC2bV9s3cYPh+5', 'PauseMenu');
// Scripts/PauseMenu.ts

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
        _this.Cloak = null;
        _this.MainOptionMenu = null;
        return _this;
    }
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Cloak", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "MainOptionMenu", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGF1c2VNZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBUUM7UUFMRyxXQUFLLEdBQVksSUFBSSxDQUFBO1FBRXJCLG9CQUFjLEdBQVksSUFBSSxDQUFBOztJQUdsQyxDQUFDO0lBTEc7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNZO0lBTGIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQVE1QjtJQUFELGVBQUM7Q0FSRCxBQVFDLENBUnFDLEVBQUUsQ0FBQyxTQUFTLEdBUWpEO2tCQVJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDbG9hazogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgTWFpbk9wdGlvbk1lbnU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad786mzoFNDeb/aVrB3O4wO', 'Block');
// Scripts/Block.ts

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
        _this.CoTheDat = false;
        _this.DaDat = false;
        _this.Ngang = null;
        _this.Doc = null;
        _this.Number = 0;
        _this.Color = null;
        _this.ComponentBoard = null;
        return _this;
        // anDiem()
        // {
        //     cc.tween(this.node).to(0.1,{scale: 1.3}).to(0.1,{scale: 1}).start()
        //     this.Number +=1
        //     if(this.Number ==5){
        //         cc.tween(this.node).to(0.1,{scale:0}).call(()=>{
        //             this.Board.getComponent("Board").taoEmptyBlock(this.Ngang,this.Doc)
        //         }).call(()=>{
        //             this.node.destroy()
        //         }).start()
        //     }
        //     this.NumberLabel.string = this.Number.toString()
        //     this.node.color = this.ColorArray[this.Number-1]
        // }
        // update(dt)
        // {
        //     console.log(this.Ngang, this.Doc)
        // }
    }
    NewClass.prototype.onLoad = function () {
        // this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        // this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.Board = cc.find('Canvas/Screen2/Board');
        this.ComponentBoard = this.Board.getComponent("Board");
        // this.schedule(this.updateTrangThai,0.2)
    };
    NewClass.prototype.setUp = function (Number) {
        this.Number = Number;
        // this.NumberLabel.string = this.Number.toString()
        this.node.getComponent(cc.Sprite).spriteFrame = this.Board.getComponent("Board").ColorArray[Number];
        this.Color = this.Board.getComponent("Board").ColorArray[Number];
    };
    // onTouchStart(event: cc.Event.EventTouch)
    // {
    //     this.node.opacity = 100
    //     this.Board.getComponent("Board").ColorAnDiem = this.Color
    // }
    // onTouchMove(event: cc.Event.EventTouch)
    // {
    //     let touch = event.getTouches()[0]
    //     let touch_pos = touch.getLocation()
    //     let standard_touch_pos = this.Board.convertToNodeSpaceAR(touch_pos)
    //     this.node.setPosition(standard_touch_pos)
    //     // let touch = event.getTouches()[0]
    //     // let pos = touch.getLocation()
    //     // let prepos = this.node.getPosition()
    //     // prepos.lerp(pos,0.1,prepos)
    //     // this.node.setPosition(prepos)
    // }
    // onTouchEnd(event: cc.Event.EventTouch)
    // {
    //     this.node.opacity = 255
    //     if(this.CoTheDat&&this.Ngang!=null&&this.Doc!=null)
    //     {
    //         this.ComponentBoard.Prepos[this.Ngang][this.Doc] = 1
    //         console.log(this.ComponentBoard.Prepos)
    //         this.Board.getComponent("Board").BlockArray[this.Ngang][this.Doc].destroy()
    //         this.Board.getComponent("Board").BlockArray[this.Ngang][this.Doc] = this.node
    //         this.node.setPosition(this.Board.getComponent("Board").VTNgang[this.Doc],this.Board.getComponent("Board").VTDoc[this.Ngang])
    //         this.ComponentBoard.taoBlockNgauNhien()
    //         this.ComponentBoard.checkAnDiem()
    //         this.turnOffListener()
    //         // this.unschedule(this.updateTrangThai)
    //     }
    //     else
    //     {
    //         this.node.setPosition(0,-450)
    //     }
    // }
    NewClass.prototype.onCollisionEnter = function (other, self) {
        // console.log(other.tag)
        if (other.tag == 1) {
            this.CoTheDat = true;
            // console.log('va cham voi empty')
            this.Ngang = other.getComponent("EmptyBlock").Ngang;
            this.Doc = other.getComponent("EmptyBlock").Doc;
            // console.log(other.getComponent("EmptyBlock").Ngang,other.getComponent("EmptyBlock").Doc)
            // console.log(this.Ngang,this.Doc)
        }
        if (other.tag == 3) {
            this.CoTheDat = true;
        }
    };
    NewClass.prototype.onCollisionExit = function (other, self) {
        if (other.tag == 3) {
            // console.log('exit va cham voi empty')
            this.CoTheDat = false;
        }
        if (other.tag == 1) {
            this.CoTheDat = false;
            this.Ngang = null;
            this.Doc = null;
            //     this.Ngang = null
            //     this.Doc = null
        }
    };
    // updateTrangThai()
    // {
    //     console.log(this.CoTheDat)
    // }
    NewClass.prototype.turnOffListener = function () {
        // this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        // this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        // this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtSUM7UUFqSUcsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixjQUFRLEdBQUcsS0FBSyxDQUFBO1FBQ2hCLFdBQUssR0FBRyxLQUFLLENBQUE7UUFDYixXQUFLLEdBQVcsSUFBSSxDQUFBO1FBQ3BCLFNBQUcsR0FBVyxJQUFJLENBQUE7UUFDbEIsWUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNWLFdBQUssR0FBbUIsSUFBSSxDQUFBO1FBQzVCLG9CQUFjLEdBQVEsSUFBSSxDQUFBOztRQXVHMUIsV0FBVztRQUNYLElBQUk7UUFDSiwwRUFBMEU7UUFDMUUsc0JBQXNCO1FBQ3RCLDJCQUEyQjtRQUMzQiwyREFBMkQ7UUFDM0Qsa0ZBQWtGO1FBQ2xGLHdCQUF3QjtRQUN4QixrQ0FBa0M7UUFDbEMscUJBQXFCO1FBQ3JCLFFBQVE7UUFDUix1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELElBQUk7UUFDSixhQUFhO1FBQ2IsSUFBSTtRQUNKLHdDQUF3QztRQUN4QyxJQUFJO0lBQ1IsQ0FBQztJQXZIRyx5QkFBTSxHQUFOO1FBRUksdUVBQXVFO1FBQ3ZFLHFFQUFxRTtRQUNyRSxtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FB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dCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBCb2FyZDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBDb1RoZURhdCA9IGZhbHNlXHJcbiAgICBEYURhdCA9IGZhbHNlXHJcbiAgICBOZ2FuZzogbnVtYmVyID0gbnVsbFxyXG4gICAgRG9jOiBudW1iZXIgPSBudWxsXHJcbiAgICBOdW1iZXIgPSAwXHJcbiAgICBDb2xvcjogY2MuU3ByaXRlRnJhbWUgPSBudWxsXHJcbiAgICBDb21wb25lbnRCb2FyZDogYW55ID0gbnVsbFxyXG4gICAgXHJcbiAgICBvbkxvYWQoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuQm9hcmQgPSBjYy5maW5kKCdDYW52YXMvU2NyZWVuMi9Cb2FyZCcpXHJcbiAgICAgICAgdGhpcy5Db21wb25lbnRCb2FyZCA9IHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIilcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlVHJhbmdUaGFpLDAuMilcclxuICAgIH1cclxuICAgIHNldFVwKE51bWJlcjogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuTnVtYmVyID0gTnVtYmVyXHJcbiAgICAgICAgLy8gdGhpcy5OdW1iZXJMYWJlbC5zdHJpbmcgPSB0aGlzLk51bWJlci50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5Db2xvckFycmF5W051bWJlcl1cclxuICAgICAgICB0aGlzLkNvbG9yID0gdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5Db2xvckFycmF5W051bWJlcl1cclxuICAgIH1cclxuXHJcbiAgICAvLyBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAxMDBcclxuICAgIC8vICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkNvbG9yQW5EaWVtID0gdGhpcy5Db2xvclxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGxldCB0b3VjaCA9IGV2ZW50LmdldFRvdWNoZXMoKVswXVxyXG4gICAgLy8gICAgIGxldCB0b3VjaF9wb3MgPSB0b3VjaC5nZXRMb2NhdGlvbigpXHJcbiAgICAvLyAgICAgbGV0IHN0YW5kYXJkX3RvdWNoX3BvcyA9IHRoaXMuQm9hcmQuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hfcG9zKVxyXG4gICAgLy8gICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihzdGFuZGFyZF90b3VjaF9wb3MpXHJcbiAgICAvLyAgICAgLy8gbGV0IHRvdWNoID0gZXZlbnQuZ2V0VG91Y2hlcygpWzBdXHJcbiAgICAvLyAgICAgLy8gbGV0IHBvcyA9IHRvdWNoLmdldExvY2F0aW9uKClcclxuICAgIC8vICAgICAvLyBsZXQgcHJlcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKClcclxuICAgIC8vICAgICAvLyBwcmVwb3MubGVycChwb3MsMC4xLHByZXBvcylcclxuICAgIC8vICAgICAvLyB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocHJlcG9zKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTVcclxuICAgIC8vICAgICBpZih0aGlzLkNvVGhlRGF0JiZ0aGlzLk5nYW5nIT1udWxsJiZ0aGlzLkRvYyE9bnVsbClcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuQ29tcG9uZW50Qm9hcmQuUHJlcG9zW3RoaXMuTmdhbmddW3RoaXMuRG9jXSA9IDFcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5Db21wb25lbnRCb2FyZC5QcmVwb3MpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQmxvY2tBcnJheVt0aGlzLk5nYW5nXVt0aGlzLkRvY10uZGVzdHJveSgpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQmxvY2tBcnJheVt0aGlzLk5nYW5nXVt0aGlzLkRvY10gPSB0aGlzLm5vZGVcclxuICAgIC8vICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuVlROZ2FuZ1t0aGlzLkRvY10sdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5WVERvY1t0aGlzLk5nYW5nXSlcclxuICAgIC8vICAgICAgICAgdGhpcy5Db21wb25lbnRCb2FyZC50YW9CbG9ja05nYXVOaGllbigpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuQ29tcG9uZW50Qm9hcmQuY2hlY2tBbkRpZW0oKVxyXG4gICAgLy8gICAgICAgICB0aGlzLnR1cm5PZmZMaXN0ZW5lcigpXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRyYW5nVGhhaSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDAsLTQ1MClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZilcclxuICAgIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvdGhlci50YWcpXHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Db1RoZURhdCA9IHRydWVcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3ZhIGNoYW0gdm9pIGVtcHR5JylcclxuICAgICAgICAgICAgdGhpcy5OZ2FuZyA9IG90aGVyLmdldENvbXBvbmVudChcIkVtcHR5QmxvY2tcIikuTmdhbmdcclxuICAgICAgICAgICAgdGhpcy5Eb2MgPSBvdGhlci5nZXRDb21wb25lbnQoXCJFbXB0eUJsb2NrXCIpLkRvY1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvdGhlci5nZXRDb21wb25lbnQoXCJFbXB0eUJsb2NrXCIpLk5nYW5nLG90aGVyLmdldENvbXBvbmVudChcIkVtcHR5QmxvY2tcIikuRG9jKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLk5nYW5nLHRoaXMuRG9jKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3RoZXIudGFnID09IDMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNvVGhlRGF0ID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXIsIHNlbGYpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2V4aXQgdmEgY2hhbSB2b2kgZW1wdHknKVxyXG4gICAgICAgICAgICB0aGlzLkNvVGhlRGF0ID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Db1RoZURhdCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuTmdhbmcgPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMuRG9jID0gbnVsbFxyXG4gICAgICAgIC8vICAgICB0aGlzLk5nYW5nID0gbnVsbFxyXG4gICAgICAgIC8vICAgICB0aGlzLkRvYyA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGVUcmFuZ1RoYWkoKVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuQ29UaGVEYXQpXHJcbiAgICAvLyB9XHJcbiAgICB0dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcylcclxuICAgICAgICAvLyB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKVxyXG4gICAgfVxyXG4gICAgLy8gYW5EaWVtKClcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMSx7c2NhbGU6IDEuM30pLnRvKDAuMSx7c2NhbGU6IDF9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgdGhpcy5OdW1iZXIgKz0xXHJcbiAgICAvLyAgICAgaWYodGhpcy5OdW1iZXIgPT01KXtcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjEse3NjYWxlOjB9KS5jYWxsKCgpPT57XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLnRhb0VtcHR5QmxvY2sodGhpcy5OZ2FuZyx0aGlzLkRvYylcclxuICAgIC8vICAgICAgICAgfSkuY2FsbCgoKT0+e1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgLy8gICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMuTnVtYmVyTGFiZWwuc3RyaW5nID0gdGhpcy5OdW1iZXIudG9TdHJpbmcoKVxyXG4gICAgLy8gICAgIHRoaXMubm9kZS5jb2xvciA9IHRoaXMuQ29sb3JBcnJheVt0aGlzLk51bWJlci0xXVxyXG4gICAgLy8gfVxyXG4gICAgLy8gdXBkYXRlKGR0KVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuTmdhbmcsIHRoaXMuRG9jKVxyXG4gICAgLy8gfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BackUpScripts/DuoBlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9afb9kYIg5JCJLijOfGNun5', 'DuoBlock');
// BackUpScripts/DuoBlock.ts

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
        _this.VTBlock = [cc.v2(-36, 0), cc.v2(0, 36), cc.v2(36, 0), cc.v2(0, -36)];
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
        for (var i = 0; i < 2; i++) {
            this.taoBlock(2 * i);
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
        for (var i = 0; i < 2; i++) {
            if (this.BlockArray[i].getComponent("Block").CoTheDat && this.BlockArray[i].getComponent("Block").Ngang != null && this.BlockArray[i].getComponent("Block").Doc != null)
                this.CoTheDat = true;
            else {
                this.CoTheDat = false;
                break;
            }
        }
        if (this.CoTheDat) {
            for (var i = 0; i < 2; i++) {
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
            // this.Bo1ard.addChild(this.BlockArray.shift())
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
        for (var i = 0; i < 2; i++) {
            cc.tween(this.BlockArray[i]).to(0.1, { x: this.VTBlock[(this.Index + i * 2) % 4].x, y: this.VTBlock[(this.Index + i * 2) % 4].y }).start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFja1VwU2NyaXB0c1xcRHVvQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyRkM7UUF4RkcsV0FBSyxHQUFjLElBQUksQ0FBQTtRQUN2QixXQUFLLEdBQVksSUFBSSxDQUFBO1FBQ3JCLGFBQU8sR0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3hFLGdCQUFVLEdBQWMsRUFBRSxDQUFBO1FBQzFCLGNBQVEsR0FBRyxLQUFLLENBQUE7UUFDaEIsd0JBQWtCLEdBQVksSUFBSSxDQUFBO1FBQ2xDLHNCQUFnQixHQUFZLElBQUksQ0FBQTtRQUNoQyxXQUFLLEdBQUcsQ0FBQyxDQUFBOztJQWlGYixDQUFDO0lBaEZHLHlCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFD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Q0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFDbkI7WUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQzdIO0lBQ0wsQ0FBQztJQXZGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNHO0lBSE4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJGNUI7SUFBRCxlQUFDO0NBM0ZELEFBMkZDLENBM0ZxQyxFQUFFLENBQUMsU0FBUyxHQTJGakQ7a0JBM0ZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEJsb2NrOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBCb2FyZDogY2MuTm9kZSA9IG51bGxcclxuICAgIFZUQmxvY2s6IGNjLlZlYzJbXSA9IFtjYy52MigtMzYsMCksY2MudjIoMCwzNiksY2MudjIoMzYsMCksY2MudjIoMCwtMzYpXVxyXG4gICAgQmxvY2tBcnJheTogY2MuTm9kZVtdID0gW11cclxuICAgIENvVGhlRGF0ID0gZmFsc2VcclxuICAgIFRvdWNoU3RhcnRMb2NhdGlvbjogY2MuVmVjMiA9IG51bGxcclxuICAgIFRvdWNoRW5kTG9jYXRpb246IGNjLlZlYzIgPSBudWxsXHJcbiAgICBJbmRleCA9IDBcclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcylcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcylcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5Cb2FyZCA9IGNjLmZpbmQoJ0NhbnZhcy9TY3JlZW4yL0JvYXJkJylcclxuICAgICAgICBmb3IobGV0IGk9MDtpPDI7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50YW9CbG9jaygyKmkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuVG91Y2hTdGFydExvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0b3VjaCA9IGV2ZW50LmdldFRvdWNoZXMoKVswXVxyXG4gICAgICAgIGxldCB0b3VjaF9wb3MgPSB0b3VjaC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgbGV0IHN0YW5kYXJkX3RvdWNoX3BvcyA9IHRoaXMuQm9hcmQuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hfcG9zKVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihzdGFuZGFyZF90b3VjaF9wb3MpXHJcbiAgICB9XHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuVG91Y2hFbmRMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgICAgICBpZih0aGlzLlRvdWNoRW5kTG9jYXRpb24uc3ViKHRoaXMuVG91Y2hTdGFydExvY2F0aW9uKS5tYWcoKTwxMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0wO2k8MjtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLkJsb2NrQXJyYXlbaV0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuQ29UaGVEYXQmJnRoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OZ2FuZyE9bnVsbCYmdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLkRvYyE9bnVsbClcclxuICAgICAgICAgICAgdGhpcy5Db1RoZURhdCA9IHRydWVcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvVGhlRGF0ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5Db1RoZURhdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8MjtpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQmxvY2tBcnJheVt0aGlzLkJsb2NrQXJyYXlbaV0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuTmdhbmddW3RoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Eb2NdLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja0FycmF5W3RoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OZ2FuZ11bdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLkRvY10gPSB0aGlzLkJsb2NrQXJyYXlbaV1cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuQm9hcmQuYWRkQ2hpbGQodGhpcy5CbG9ja0FycmF5LnNoaWZ0KCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQXJyYXlbaV0uc2V0UG9zaXRpb24odGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5WVE5nYW5nW3RoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Eb2NdLHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuVlREb2NbdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLk5nYW5nXSlcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLDApXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLnRhb0Jsb2NrKClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuQmxvY2tBcnJheVtpXS54LHRoaXMuQmxvY2tBcnJheVtpXS55KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikudGFvQmxvY2tOZ2F1TmhpZW4oKVxyXG4gICAgICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLmNoZWNrTWVyZ2UoKVxyXG4gICAgICAgICAgICAvLyBmb3IobGV0IGk9MDtpPDI7aSsrKVxyXG4gICAgICAgICAgICAvLyB0aGlzLkJvMWFyZC5hZGRDaGlsZCh0aGlzLkJsb2NrQXJyYXkuc2hpZnQoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB0aGlzLm5vZGUuc2V0UG9zaXRpb24oMCwtNDUwKVxyXG4gICAgfVxyXG4gICAgdGFvQmxvY2soaW5kZXg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBsZXQgYmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJsb2NrKVxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChibG9jaylcclxuICAgICAgICB0aGlzLkJsb2NrQXJyYXkucHVzaChibG9jaylcclxuICAgICAgICBibG9jay5zZXRQb3NpdGlvbih0aGlzLlZUQmxvY2tbaW5kZXhdKVxyXG4gICAgICAgIGxldCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMykrMVxyXG4gICAgICAgIGJsb2NrLmdldENvbXBvbmVudChcIkJsb2NrXCIpLnNldFVwKG51bWJlcilcclxuICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgfVxyXG4gICAgcm90YXRlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLkluZGV4ICsrXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTwyO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQmxvY2tBcnJheVtpXSkudG8oMC4xLHt4OiB0aGlzLlZUQmxvY2tbKHRoaXMuSW5kZXgraSoyKSU0XS54LHk6IHRoaXMuVlRCbG9ja1sodGhpcy5JbmRleCtpKjIpJTRdLnl9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRW1wdHlCbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwrQ0FBMEM7QUFDMUMsaUNBQTRCO0FBRXRCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ09DO1FBL05DLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixTQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFdBQUssR0FBWSxJQUFJLENBQUM7O1FBd050QixXQUFXO1FBQ1gsSUFBSTtRQUNKLGtDQUFrQztRQUNsQyxJQUFJO0lBQ04sQ0FBQztJQXpOQyx5QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQTVCLGlCQW1CQztRQWxCQyxRQUFRO1FBQ1IsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNsQixvQ0FBb0M7WUFFcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JELHlEQUF5RDtZQUN6RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNaLElBQUksQ0FBQztnQkFDSixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7U0FDWjtRQUNELG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsSUFBSTtJQUNOLENBQUM7SUFDRCxrQ0FBZSxHQUFmLFVBQWdCLEtBQUssRUFBRSxJQUFJO1FBQTNCLGlCQWFDO1FBWkMsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckQsb0NBQW9DO1lBQ3BDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ1osSUFBSSxDQUFDO2dCQUNKLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQztpQkFDRCxLQUFLLEVBQUUsQ0FBQztTQUNaO0lBQ0gsQ0FBQztJQUNELG1DQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRTtZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFdkMsOENBQThDO1lBQzlDLDJDQUEyQztZQUMzQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFO2dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUMxQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQUUsTUFBTTt3QkFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQ0FDMUIsSUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29DQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksT0FBTyxFQUNwRDtvQ0FDQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29DQUVyQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQy9DLEVBQUUsQ0FBQyxNQUFNLENBQ1YsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7aUNBQ2pEOzZCQUNGO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQzFCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFBRSxNQUFNO3dCQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dDQUMxQixJQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0NBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxPQUFPLEVBQ3BEO29DQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7b0NBRXZCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FDL0MsRUFBRSxDQUFDLE1BQU0sQ0FDVixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztpQ0FDakQ7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzFCLElBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQ2xFO3dCQUNBLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDNUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDMUIsSUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM1RCxDQUFDLENBQ0YsQ0FBQyxJQUFJLElBQUksT0FBTztnQ0FFakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDNUQsQ0FBQyxDQUNGO3FDQUNFLFlBQVksQ0FBQyxPQUFPLENBQUM7cUNBQ3JCLEtBQUssQ0FDSixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FDbEMsQ0FBQzt5QkFDUDt3QkFDRCxNQUFNO3FCQUNQO2lCQUNGO2FBQ0Y7WUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNuRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUN0QyxDQUFDLENBQ0YsQ0FBQzthQUNIO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1lBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzFCLElBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQ2hFO3dCQUNBLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDMUIsSUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztpQ0FDNUQsSUFBSSxJQUFJLE9BQU87Z0NBRWxCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FDQUM1RCxZQUFZLENBQUMsT0FBTyxDQUFDO3FDQUNyQixLQUFLLENBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUM3QixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQy9CLENBQUM7eUJBQ1A7d0JBQ0QsTUFBTTtxQkFDUDtpQkFDRjthQUNGO1lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDcEMsQ0FBQyxDQUNGLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUN2QyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtnQkFDNUMsS0FDRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ1QsQ0FBQztvQkFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDO3lCQUMxRCxVQUFVLENBQUMsTUFBTSxFQUNwQixDQUFDLEVBQUUsRUFDSDtvQkFDQSxJQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUMzQyxjQUFjLENBQ2YsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FDNUMsSUFBSSxDQUFDLENBQUM7d0JBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQzNDLGNBQWMsQ0FDZixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUMxQyxJQUFJLENBQUMsQ0FBQzt3QkFFUCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQzNDLGNBQWMsQ0FDZixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVc7NEJBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDOzt3QkFFbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUMzQyxjQUFjLENBQ2YsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXOzRCQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQzNDLGNBQWMsQ0FDZixDQUFDLEtBQUssQ0FBQztpQkFDYjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsK0JBQVksR0FBWjtRQUNFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxJQUFHLElBQUksRUFBQztZQUMzQyxLQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDVCxDQUFDLEdBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQyxVQUFVO2lCQUN0RSxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQ2I7Z0JBQ0EsSUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDLFVBQVUsQ0FDcEUsQ0FBQyxDQUNGLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVE7b0JBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUMsVUFBVSxDQUNwRSxDQUFDLENBQ0YsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUk7b0JBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUMsVUFBVSxDQUNwRSxDQUFDLENBQ0YsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUk7b0JBRW5DLFFBQVEsR0FBRyxJQUFJLENBQUM7cUJBQ2I7b0JBQ0gsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsTUFBTTtpQkFDUDthQUNGO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1NBQ3RDO0lBQUEsQ0FBQztJQTNOaUIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdPNUI7SUFBRCxlQUFDO0NBaE9ELEFBZ09DLENBaE9xQyxFQUFFLENBQUMsU0FBUyxHQWdPakQ7a0JBaE9vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEJsb2NrQ29udGFpbiBmcm9tIFwiLi9CbG9ja0NvbnRhaW5cIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuL0JvYXJkXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIE5nYW5nID0gMDtcclxuICBEb2MgPSAwO1xyXG4gIE51bWJlciA9IDA7XHJcbiAgQm9hcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEJvYXJkQ29tcG9uZW50OiBCb2FyZDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5Cb2FyZCA9IGNjLmZpbmQoXCJDYW52YXMvU2NyZWVuMi9Cb2FyZFwiKTtcclxuICAgIHRoaXMuQm9hcmRDb21wb25lbnQgPSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChCb2FyZCk7XHJcbiAgfVxyXG4gIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgIC8vIHRyeSB7XHJcbiAgICBpZiAob3RoZXIudGFnID09IDIpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5Cb2FyZENvbXBvbmVudCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDEwMDtcclxuICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5QcmVwb3NbdGhpcy5OZ2FuZ11bdGhpcy5Eb2NdID0gMTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3ZhIGNoYW0gdm9pIGJsb2NrJywgdGhpcy5OZ2FuZywgdGhpcy5Eb2MpXHJcbiAgICAgIHRoaXMuY2hlY2tTZXRhYmxlKCk7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAuZGVsYXkoMC4wMDUpXHJcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jaGVja0NoYW5nZUNvbG9yKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgb25Db2xsaXNpb25FeGl0KG90aGVyLCBzZWxmKSB7XHJcbiAgICBpZiAob3RoZXIudGFnID09IDIpIHtcclxuICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyMDA7XHJcbiAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuUHJlcG9zW3RoaXMuTmdhbmddW3RoaXMuRG9jXSA9IDA7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdleGl0IHZhIGNoYW0gYmxvY2snKVxyXG4gICAgICB0aGlzLmNoZWNrU2V0YWJsZSgpO1xyXG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLmRlbGF5KDAuMDA1KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2hlY2tDaGFuZ2VDb2xvcigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoZWNrQ2hhbmdlQ29sb3IoKSB7XHJcbiAgICBpZiAoIXRoaXMuQm9hcmRDb21wb25lbnQucGF1c2UpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5Cb2FyZENvbXBvbmVudC5DaGVjayk7XHJcblxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXkpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuQm9hcmRDb21wb25lbnQuQ2hheUxhaSlcclxuICAgICAgaWYgKHRoaXMuQm9hcmRDb21wb25lbnQuQ2hlY2spIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0ZXAyXCIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQm9hcmRDb21wb25lbnQuUHJlcG9zW2ldW2pdID09IDApIGJyZWFrO1xyXG4gICAgICAgICAgICBpZiAoaiA9PSA3KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5Bbk5nYW5nLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5QcmVwb3NbaV1ba10gPT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlbaV1ba10ubmFtZSA9PSBcIkJsb2NrXCJcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0ZXA0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5CbG9ja0FycmF5W2ldW2tdLmdldENvbXBvbmVudChcclxuICAgICAgICAgICAgICAgICAgICBjYy5TcHJpdGVcclxuICAgICAgICAgICAgICAgICAgKS5zcHJpdGVGcmFtZSA9IHRoaXMuQm9hcmRDb21wb25lbnQuQ29sb3JBbkRpZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Cb2FyZENvbXBvbmVudC5QcmVwb3Nbal1baV0gPT0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgIGlmIChqID09IDcpIHtcclxuICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkFuRG9jLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5QcmVwb3Nba11baV0gPT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlba11baV0ubmFtZSA9PSBcIkJsb2NrXCJcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIDJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlba11baV0uZ2V0Q29tcG9uZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLlNwcml0ZVxyXG4gICAgICAgICAgICAgICAgICApLnNwcml0ZUZyYW1lID0gdGhpcy5Cb2FyZENvbXBvbmVudC5Db2xvckFuRGllbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkJvYXJkQ29tcG9uZW50LkFuTmdhbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LlByZXBvc1t0aGlzLkJvYXJkQ29tcG9uZW50LkFuTmdhbmdbaV1dW2pdID09IDBcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LlhvYUFuTmdhbmdJbmRleC5wdXNoKGkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuQmxvY2tBcnJheVt0aGlzLkJvYXJkQ29tcG9uZW50LkFuTmdhbmdbaV1dW1xyXG4gICAgICAgICAgICAgICAgICBrXHJcbiAgICAgICAgICAgICAgICBdLm5hbWUgPT0gXCJCbG9ja1wiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5CbG9ja0FycmF5W3RoaXMuQm9hcmRDb21wb25lbnQuQW5OZ2FuZ1tpXV1bXHJcbiAgICAgICAgICAgICAgICAgIGtcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChcIkJsb2NrXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5zZXRVcChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlbXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkFuTmdhbmdbaV1cclxuICAgICAgICAgICAgICAgICAgICBdW2tdLmdldENvbXBvbmVudChcIkJsb2NrXCIpLk51bWJlclxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuQm9hcmRDb21wb25lbnQuWG9hQW5OZ2FuZ0luZGV4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5Bbk5nYW5nLnNwbGljZShcclxuICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuWG9hQW5OZ2FuZ0luZGV4W2ldLFxyXG4gICAgICAgICAgMVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5Yb2FBbk5nYW5nSW5kZXggPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkJvYXJkQ29tcG9uZW50LkFuRG9jLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5QcmVwb3Nbal1bdGhpcy5Cb2FyZENvbXBvbmVudC5BbkRvY1tpXV0gPT0gMFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuWG9hQW5Eb2NJbmRleC5wdXNoKGkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuQmxvY2tBcnJheVtrXVt0aGlzLkJvYXJkQ29tcG9uZW50LkFuRG9jW2ldXVxyXG4gICAgICAgICAgICAgICAgICAubmFtZSA9PSBcIkJsb2NrXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlba11bdGhpcy5Cb2FyZENvbXBvbmVudC5BbkRvY1tpXV1cclxuICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChcIkJsb2NrXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5zZXRVcChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkJsb2NrQXJyYXlba11bXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkFuRG9jW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OdW1iZXJcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkJvYXJkQ29tcG9uZW50LlhvYUFuRG9jSW5kZXgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkFuRG9jLnNwbGljZShcclxuICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuWG9hQW5Eb2NJbmRleFtpXSxcclxuICAgICAgICAgIDFcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuWG9hQW5Eb2NJbmRleCA9IFtdO1xyXG4gICAgICBpZiAodGhpcy5Cb2FyZENvbXBvbmVudC5DYXJyeWluZ05vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICBpIDxcclxuICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuQ2FycnlpbmdOb2RlLmdldENvbXBvbmVudChcIkJsb2NrQ29udGFpblwiKVxyXG4gICAgICAgICAgICAuQmxvY2tBcnJheS5sZW5ndGg7XHJcbiAgICAgICAgICBpKytcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5Bbk5nYW5nLmluZGV4T2YoXHJcbiAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5DYXJyeWluZ05vZGUuZ2V0Q29tcG9uZW50KFxyXG4gICAgICAgICAgICAgICAgXCJCbG9ja0NvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICkuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OZ2FuZ1xyXG4gICAgICAgICAgICApICE9IC0xIHx8XHJcbiAgICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuQW5Eb2MuaW5kZXhPZihcclxuICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkNhcnJ5aW5nTm9kZS5nZXRDb21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICBcIkJsb2NrQ29udGFpblwiXHJcbiAgICAgICAgICAgICAgKS5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLkRvY1xyXG4gICAgICAgICAgICApICE9IC0xXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuQ2FycnlpbmdOb2RlLmdldENvbXBvbmVudChcclxuICAgICAgICAgICAgICBcIkJsb2NrQ29udGFpblwiXHJcbiAgICAgICAgICAgICkuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5Db2xvckFuRGllbTtcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5Cb2FyZENvbXBvbmVudC5DYXJyeWluZ05vZGUuZ2V0Q29tcG9uZW50KFxyXG4gICAgICAgICAgICAgIFwiQmxvY2tDb250YWluXCJcclxuICAgICAgICAgICAgKS5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkNhcnJ5aW5nTm9kZS5nZXRDb21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICBcIkJsb2NrQ29udGFpblwiXHJcbiAgICAgICAgICAgICAgKS5Db2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY2hlY2tTZXRhYmxlKCkge1xyXG4gICAgbGV0IENvVGhlRGF0ID0gdHJ1ZTtcclxuICAgIGlmKHRoaXMuQm9hcmRDb21wb25lbnQuQ2FycnlpbmdOb2RlIT0gbnVsbCl7XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIGkgPHRoaXMuQm9hcmRDb21wb25lbnQuQ2FycnlpbmdOb2RlLmdldENvbXBvbmVudChCbG9ja0NvbnRhaW4pLkJsb2NrQXJyYXlcclxuICAgICAgICAubGVuZ3RoO2krK1xyXG4gICAgKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkNhcnJ5aW5nTm9kZS5nZXRDb21wb25lbnQoQmxvY2tDb250YWluKS5CbG9ja0FycmF5W1xyXG4gICAgICAgICAgaVxyXG4gICAgICAgIF0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuQ29UaGVEYXQgJiZcclxuICAgICAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkNhcnJ5aW5nTm9kZS5nZXRDb21wb25lbnQoQmxvY2tDb250YWluKS5CbG9ja0FycmF5W1xyXG4gICAgICAgICAgaVxyXG4gICAgICAgIF0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuTmdhbmcgIT0gbnVsbCAmJlxyXG4gICAgICAgIHRoaXMuQm9hcmRDb21wb25lbnQuQ2FycnlpbmdOb2RlLmdldENvbXBvbmVudChCbG9ja0NvbnRhaW4pLkJsb2NrQXJyYXlbXHJcbiAgICAgICAgICBpXHJcbiAgICAgICAgXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Eb2MgIT0gbnVsbFxyXG4gICAgICApXHJcbiAgICAgICAgQ29UaGVEYXQgPSB0cnVlO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBDb1RoZURhdCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLkJvYXJkQ29tcG9uZW50LkNoZWNrID0gQ29UaGVEYXQ7XHJcbiAgfX1cclxuICAvLyB1cGRhdGUoKVxyXG4gIC8vIHtcclxuICAvLyAgICAgY29uc29sZS5sb2codGhpcy5ub2RlLm5hbWUpXHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/StartGameScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3RhcnRHYW1lU2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNkNDO1FBMUNHLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLG9CQUFjLEdBQVksSUFBSSxDQUFBO1FBRTlCLG9CQUFjLEdBQVksSUFBSSxDQUFBO1FBQzlCLHdCQUFrQixHQUFZLElBQUksQ0FBQTtRQUNsQyxzQkFBZ0IsR0FBWSxJQUFJLENBQUE7O0lBa0NwQyxDQUFDO0lBaENHLHlCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNoRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDRCwrQkFBWSxHQUFaLFVBQWEsS0FBMEI7UUFFbkMsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDN0MsMEJBQTBCO0lBQzlCLENBQUM7SUFDRCw2QkFBVSxHQUFWLFVBQVcsS0FBMEI7UUFFakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUMzQyxJQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUMsRUFBRSxFQUM5RDtZQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUE7WUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDcEU7SUFDTCxDQUFDO0lBQ0QsaUNBQWMsR0FBZDtRQUVJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDL0UsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNwRSxDQUFDO0lBekNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNZO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1k7SUFUYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkM1QjtJQUFELGVBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBNkNqRDtrQkE3Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE1haW5DYW1lcmE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJsYWNrQ2xvYWs6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdhbWVjb250cm9sbGVyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTdGFydEdhbWVMYWJlbDogY2MuTm9kZSA9IG51bGxcclxuICAgIFRvdWNoU3RhcnRMb2NhdGlvbjogY2MuVmVjMiA9IG51bGxcclxuICAgIFRvdWNoRW5kTG9jYXRpb246IGNjLlZlYzIgPSBudWxsXHJcblxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcylcclxuICAgICAgICB0aGlzLmxhYmVsQW5pbWF0aW9uKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMubGFiZWxBbmltYXRpb24sMSlcclxuICAgIH1cclxuICAgIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaClcclxuICAgIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRqc2FoZHNhaWxqbGtcIilcclxuICAgICAgICB0aGlzLlRvdWNoU3RhcnRMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgICAgICAvLyB0aGlzLm5vZGUub3BhY2l0eSA9IDEwMFxyXG4gICAgfVxyXG4gICAgb25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaClcclxuICAgIHtcclxuICAgICAgICB0aGlzLlRvdWNoRW5kTG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgaWYodGhpcy5Ub3VjaFN0YXJ0TG9jYXRpb24uc3ViKHRoaXMuVG91Y2hFbmRMb2NhdGlvbikubWFnKCk8MjApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkdhbWVjb250cm9sbGVyLmdldENvbXBvbmVudChcIkdhbWVjb250cm9sbGVyXCIpLmVudGVyR2FtZSgpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxhYmVsQW5pbWF0aW9uKClcclxuICAgIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLlN0YXJ0R2FtZUxhYmVsKS50bygwLjUse3NjYWxlOjEuM30pLnRvKDAuNSx7c2NhbGU6MX0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIHR1cm5Pbkxpc3RlbmVyKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcylcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Board.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5232a68mRFK4aV7kJQbRT0n', 'Board');
// Scripts/Board.ts

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
var FBInstantManager_1 = require("./FBInstantManager");
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GameController = null;
        _this.Block = null;
        _this.EmptyBlock = null;
        _this.EmptyBlockBoard = null;
        _this.ColorArray = [];
        _this.ColorAnDiem = null;
        _this.BlockContain = null;
        _this.BlockReadyContainer = null;
        _this.BlockBoard = null;
        _this.AnNgang = [];
        _this.AnDoc = [];
        _this.XoaAnNgangIndex = [];
        _this.XoaAnDocIndex = [];
        _this.Check = false;
        _this.pause = false;
        _this.BlockRemaining = 0;
        _this.BlockRemainingArr = [];
        _this.zIndex = 0;
        _this.Lose = false;
        _this.Type = -1;
        _this.TypeIndex = -1;
        _this.DiemLabel = null;
        _this.BlockAvailable = 0;
        _this.CloakLose = null;
        _this.NGButton = null;
        _this.LoseImg = null;
        _this.CarryingNode = null;
        _this.NovaBlock = null;
        _this.CreateNova = false;
        _this.IsNewbie = false;
        _this.Note = null;
        _this.NoteLabel = null;
        _this.Hand = null;
        _this.EmptyBlockArray = [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
        ];
        _this.BlockArray = [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
        ];
        _this.Prepos = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ];
        _this.IndexColorArray = [
            [-1, -1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1],
        ];
        _this.DaAn = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ];
        _this.VTNgang = [-252, -180, -108, -36, 36, 108, 180, 252];
        _this.VTDoc = [252, 180, 108, 36, -36, -108, -180, -252];
        _this.IsPlaying = true;
        _this.ChayLai = false;
        _this.UsedBlock = [];
        return _this;
        // update()
        // {
        //   console.log(this.CarryingNode);
        // }
        // taoBlockNgauNhien()
        // {
        //     let temp = Math.floor(Math.random()*40)
        //     if(temp<6) this.taoBlock()
        //     // if(temp>=6&&temp<30) this.taoDuoBlock()
        //     // if(temp >=30) this.taoTripleBlock()
        // }
        // update()
        // {
        //     // console.log(this.DiemLabel.getComponent("DiemSo").Diem)
        //     // var a = JSON.parse(cc.sys.localStorage.getItem('ba')).test
        //     // console.log(a)
        //     // console.log(this.IndexColorArray)
        //     // console.log(this.BlockArray)
        //     // console.log(this.Prepos)
        //     // console.log(this.BlockAvailable)
        //     // console.log(this.EmptyBlockArray)
        //     // console.log(this.BlockRemainingArr)
        //     // console.log(this.BlockRemainingArr[0].zIndex + " " + this.BlockRemainingArr[1].zIndex+ " " + this.BlockRemainingArr[2].zIndex)
        //     if(!this.pause)
        //     {
        //     // console.log(this.BlockArray)
        //     // console.log(this.ChayLai)
        //         if(this.Check)
        //         {
        //             for(let i=0;i<8;i++)
        //             {
        //                 for(let j=0;j<8;j++)
        //                 {
        //                     if(this.Prepos[i][j]==0) break
        //                     if(j==7)
        //                     {
        //                         this.AnNgang.push(i)
        //                         for(let k=0;k<8;k++)
        //                         {
        //                             if(this.Prepos[i][k]==1&&this.BlockArray[i][k].name == "Block")
        //                             {
        //                                 this.BlockArray[i][k].getComponent(cc.Sprite).spriteFrame = this.ColorAnDiem
        //                             }
        //                         }
        //                     }
        //                 }
        //             }
        //             for(let i=0;i<8;i++)
        //             {
        //                 for(let j=0;j<8;j++)
        //                 {
        //                     if(this.Prepos[j][i]==0) break
        //                     if(j==7)
        //                     {
        //                         this.AnDoc.push(i)
        //                         for(let k=0;k<8;k++)
        //                         {
        //                             if(this.Prepos[k][i]==1&&this.BlockArray[k][i].name == "Block")
        //                             {
        //                                 this.BlockArray[k][i].getComponent(cc.Sprite).spriteFrame = this.ColorAnDiem
        //                             }
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //         for(let i=0;i<this.AnNgang.length;i++)
        //         {
        //             for(let j=0;j<8;j++)
        //             {
        //                 if(this.Prepos[this.AnNgang[i]][j]==0)
        //                 {
        //                     this.XoaAnNgangIndex.push(i)
        //                     for(let k=0;k<8;k++)
        //                     {
        //                         if(this.BlockArray[this.AnNgang[i]][k].name == "Block")this.BlockArray[this.AnNgang[i]][k].getComponent("Block").setUp(this.BlockArray[this.AnNgang[i]][k].getComponent("Block").Number)
        //                     }
        //                     break
        //                 }
        //             }
        //         }
        //         for(let i=0;i<this.XoaAnNgangIndex.length;i++)
        //         {
        //             this.AnNgang.splice(this.XoaAnNgangIndex[i],1)
        //         }
        //         this.XoaAnNgangIndex = []
        //         for(let i=0;i<this.AnDoc.length;i++)
        //         {
        //             for(let j=0;j<8;j++)
        //             {
        //                 if(this.Prepos[j][this.AnDoc[i]]==0)
        //                 {
        //                     this.XoaAnDocIndex.push(i)
        //                     for(let k=0;k<8;k++)
        //                     {
        //                         if(this.BlockArray[k][this.AnDoc[i]].name == "Block")this.BlockArray[k][this.AnDoc[i]].getComponent("Block").setUp(this.BlockArray[k][this.AnDoc[i]].getComponent("Block").Number)
        //                     }
        //                     break
        //                 }
        //             }
        //         }
        //         for(let i=0;i<this.XoaAnDocIndex.length;i++)
        //         {
        //             this.AnDoc.splice(this.XoaAnDocIndex[i],1)
        //         }
        //         this.XoaAnDocIndex = []
        //         if(this.CarryingNode!= null)
        //         {
        //             for(let i=0;i<this.CarryingNode.getComponent("BlockContain").BlockArray.length;i++)
        //             {
        //                 if(this.AnNgang.indexOf(this.CarryingNode.getComponent("BlockContain").BlockArray[i].getComponent("Block").Ngang)!=-1||this.AnDoc.indexOf(this.CarryingNode.getComponent("BlockContain").BlockArray[i].getComponent("Block").Doc)!=-1)
        //                 this.CarryingNode.getComponent("BlockContain").BlockArray[i].getComponent(cc.Sprite).spriteFrame = this.ColorAnDiem
        //                 else this.CarryingNode.getComponent("BlockContain").BlockArray[i].getComponent(cc.Sprite).spriteFrame = this.CarryingNode.getComponent("BlockContain").Color
        //             }
        //         }
        //         // console.log(this.CarryingNode)
        //     }
        // }
        // update()
        // {
        //     console.log(this.EmptyBlockArray)
        // }
    }
    Board.prototype.onLoad = function () {
        this.Hand.active = false;
        // let fbinstant = GBInstantManager.getInstance();
        // console.log(fbinstant.getPlayerId());
        var test = [5, 4, 6, 7];
        var jsontest = JSON.stringify(test);
        // console.log(typeof(jsontest))
        this.zIndex = 0;
        this.boardSetUp();
        // console.log(this.BlockArray);
        // console.log(this.BlockArray[0][0].getPosition().x)
        // let islose = cc.sys.localStorage.getItem("IsLose");
        // let islose = false
        this.recallMemory(this.Lose, "IsLose");
        if (this.IsNewbie) {
            // this.IsNewbie = false
            // this.node.on("nextStep",this.tutorialStep1,this)
            this.Note.active = true;
            this.tutorial();
        }
        else if (this.Lose == true) {
            // console.log("New game")
            this.newGame();
            // cc.sys.localStorage.setItem("IsLose", false);
            this.saveData("IsLose", false);
        }
        else
            this.recalldata();
        // console.log("dagoi")
        // this.taoBlockNgauNhien()
        // console.log(cc.sys.localStorage.getItem("diem"))
        this.node.emit("PlaySound");
    };
    Board.prototype.tutorial = function () {
        this.step1();
    };
    Board.prototype.step1 = function () {
        var _this = this;
        this.Hand.active = true;
        this.schedule(function () {
            cc.tween(_this.Hand)
                .call(function () {
                _this.Hand.y = -720;
            })
                .to(0.5, { y: -20 })
                .start();
        }, 0.7);
        this.node.on("nextStep", this.step2, this);
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if (i != 3 && i != 4 && i != 3 && i != 4) {
                    this.EmptyBlockArray[i][j].getComponent(cc.BoxCollider).enabled =
                        false;
                }
            }
        }
        for (var i = 3; i < 5; i++) {
            for (var j = 0; j < 8; j++) {
                if (j != 3 && j != 4) {
                    this.Prepos[i][j] = 1;
                    this.EmptyBlockArray[i][j].scale = 0;
                    var block_1 = cc.instantiate(this.BlockContain);
                    this.BlockBoard.addChild(block_1);
                    block_1.getComponent("BlockContain").khoitao(99, 2);
                    block_1.getComponent("BlockContain").turnOffListener();
                    block_1.scale = 1;
                    block_1.setPosition(0, 0);
                    var childarr = block_1.children;
                    var child = childarr[0];
                    // console.log(child)
                    child.setPosition(this.VTNgang[j], this.VTDoc[i]);
                    child.getComponent("Block").Ngang = i;
                    child.getComponent("Block").Doc = j;
                    this.BlockArray[i][j] = child;
                }
            }
        }
        for (var i = 3; i < 5; i++) {
            for (var j = 0; j < 8; j++) {
                if (j != 3 && j != 4) {
                    this.Prepos[j][i] = 1;
                    this.EmptyBlockArray[j][i].scale = 0;
                    var block_2 = cc.instantiate(this.BlockContain);
                    this.BlockBoard.addChild(block_2);
                    block_2.getComponent("BlockContain").khoitao(99, 2);
                    block_2.getComponent("BlockContain").turnOffListener();
                    block_2.scale = 1;
                    block_2.setPosition(0, 0);
                    var childarr = block_2.children;
                    var child = childarr[0];
                    // console.log(child)
                    child.setPosition(this.VTNgang[i], this.VTDoc[j]);
                    child.getComponent("Block").Ngang = j;
                    child.getComponent("Block").Doc = i;
                    this.BlockArray[j][i] = child;
                }
            }
        }
        var block = cc.instantiate(this.BlockContain);
        this.BlockBoard.addChild(block);
        block.getComponent("BlockContain").khoitao(75, 2, 4);
        block.setPosition(0, -430);
    };
    Board.prototype.step2 = function () {
        var _this = this;
        this.node.off("nextStep", this.step2, this);
        this.node.on("nextStep", this.step3, this);
        // console.log("Step2");
        cc.tween(this.node)
            .delay(1)
            .call(function () {
            _this.NoteLabel.getComponent(cc.Label).string =
                "If you match 3 row or collumn you will recieved a special block called NovaBlock.";
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 8; j++) {
                    if (i != 3 && j != 3) {
                        _this.EmptyBlockArray[i][j].getComponent(cc.BoxCollider).enabled =
                            false;
                    }
                }
            }
            // for(let i=3;i<5;i++)
            // {
            //     for(let j=0;j<8;j++)
            //     {
            //         if(j!=3&&j!=4)
            //         {
            //            this.Prepos[i][j] = 1
            //             this.EmptyBlockArray[i][j].scale = 0
            //             let block = cc.instantiate(this.BlockContain)
            //             this.BlockBoard.addChild(block)
            //             block.getComponent("BlockContain").khoitao(99,2)
            //             block.getComponent("BlockContain").turnOffListener()
            //             block.scale = 1
            //             block.setPosition(0,0)
            //             let childarr = block.children
            //             let child = childarr[0]
            //             // console.log(child)
            //             child.setPosition(this.VTNgang[j],this.VTDoc[i])
            //             child.getComponent("Block").Ngang = i
            //             child.getComponent("Block").Doc = j
            //             this.BlockArray[i][j] = child
            //         }
            //     }
            // }
            for (var i = 2; i < 5; i++) {
                for (var j = 2; j < 5; j++) {
                    if (!(i == 3 && j == 3)) {
                        _this.Prepos[j][i] = 1;
                        _this.EmptyBlockArray[j][i].scale = 0;
                        var block_3 = cc.instantiate(_this.BlockContain);
                        _this.BlockBoard.addChild(block_3);
                        block_3.getComponent("BlockContain").khoitao(99, 2);
                        block_3.getComponent("BlockContain").turnOffListener();
                        block_3.scale = 1;
                        block_3.setPosition(0, 0);
                        var childarr = block_3.children;
                        var child = childarr[0];
                        // console.log(child)
                        child.setPosition(_this.VTNgang[i], _this.VTDoc[j]);
                        child.getComponent("Block").Ngang = j;
                        child.getComponent("Block").Doc = i;
                        _this.BlockArray[j][i] = child;
                    }
                }
            }
            var block = cc.instantiate(_this.NovaBlock);
            _this.BlockBoard.addChild(block);
            block.setPosition(0, -430);
        })
            .start();
    };
    Board.prototype.step3 = function () {
        var _this = this;
        this.node.off("nextStep", this.step3, this);
        console.log("Step3");
        this.IsNewbie = false;
        this.CreateNova = false;
        cc.tween(this.node)
            .call(function () {
            _this.NoteLabel.getComponent(cc.Label).string = "Lets start";
        })
            .delay(1.5)
            .call(function () {
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 8; j++) {
                    if (i != 3 && i != 4 && i != 3 && i != 4) {
                        _this.EmptyBlockArray[i][j].getComponent(cc.BoxCollider).enabled =
                            true;
                    }
                }
            }
            _this.Note.active = false;
            _this.newGame();
        })
            .start();
    };
    Board.prototype.taoNovaBlock = function () {
        var novablock = cc.instantiate(this.NovaBlock);
        this.BlockBoard.addChild(novablock);
        novablock.setPosition(0, -430);
        this.BlockRemaining = 1;
        this.BlockAvailable = 1;
        // cc.sys.localStorage.setItem("BA", this.BlockAvailable);
        // cc.sys.localStorage.setItem("BR", this.BlockRemaining);
        this.saveData("BA", this.BlockAvailable);
        this.saveData("BR", this.BlockRemaining);
    };
    Board.prototype.recallMemory = function (name, key) {
        if (name === void 0) { name = null; }
        console.log("Check name params before", name);
        if (FBInstantManager_1.default.getInstance().getPlayerId() !== "localId") {
            FBInstant.player.getDataAsync([key]).then(function (data) {
                console.log("key", key);
                if (key === "data") {
                    console.log("data get from FB", data[key], key);
                    var dataParsed = JSON.parse(data[key]);
                    name = dataParsed;
                    this.Prepos = name.prepos;
                    // console.log(data.prepos)
                    this.IndexColorArray = name.indexcolor;
                    console.log("data of json params", name);
                }
                else {
                    name = data[key];
                }
                // name = data[key]
            });
        }
        else {
            if (key == "data") {
                name = JSON.parse(cc.sys.localStorage.getItem(key));
                console.log("Data after save", name);
                console.log("temp:", name);
                this.Prepos = name.prepos;
                this.IndexColorArray = name.indexcolor;
            }
            else {
                name = cc.sys.localStorage.getItem(key);
                console.log("name: ", name, "key: ", key);
            }
        }
        console.log("Check name params after", name);
    };
    Board.prototype.recallMemory2 = function (key) {
        return new Promise(function (resolve) {
            if (FBInstantManager_1.default.getInstance().getPlayerId() !== "localId") {
                FBInstant.player.getDataAsync([key]).then(function (data) {
                    console.log("key", key);
                    if (key === "data") {
                        console.log("data get from FB", data[key], key);
                        var dataParsed = JSON.parse(data[key]);
                        resolve(dataParsed);
                    }
                    else {
                        resolve(data[key]);
                    }
                });
            }
            else {
                if (key == "data") {
                    resolve(JSON.parse(cc.sys.localStorage.getItem(key)));
                }
                else {
                    resolve(cc.sys.localStorage.getItem(key));
                }
            }
        });
    };
    Board.prototype.saveData = function (key, value) {
        if (FBInstantManager_1.default.getInstance().getPlayerId() !== "localId") {
            FBInstant.player.setDataAsync({ key: value }).then(function () {
                // console.log("data is setted");
            });
        }
        else {
            cc.sys.localStorage.setItem(key, value);
        }
    };
    Board.prototype.recalldata = function () {
        console.log("data recalled");
        // var data = JSON.parse(cc.sys.localStorage.getItem("data"));
        var datarecall = null;
        // this.recallMemory(datarecall, "data");
        console.log("Check recall memory", datarecall);
        // this.Prepos = data.prepos;
        // // console.log(data.prepos)
        // this.IndexColorArray = data.indexcolor;
        this.recallMemory(this.DiemLabel.getComponent("DiemSo").Diem, "diem");
        // this.DiemLabel.getComponent("DiemSo").Diem = Number(
        //   cc.sys.localStorage.getItem("diem")
        // );
        this.DiemLabel.getComponent("DiemSo").congDiem();
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if (this.Prepos[i][j] == 1) {
                    // console.log("Fjfojdsfjsfjs")
                    this.EmptyBlockArray[i][j].scale = 0;
                    var blockrecall = cc.instantiate(this.BlockContain);
                    this.BlockBoard.addChild(blockrecall);
                    blockrecall
                        .getComponent("BlockContain")
                        .khoitao(99, this.IndexColorArray[i][j]);
                    blockrecall.getComponent("BlockContain").turnOffListener();
                    blockrecall.scale = 1;
                    blockrecall.setPosition(0, 0);
                    var childarr = blockrecall.children;
                    var child = childarr[0];
                    // console.log(child)
                    child.setPosition(this.VTNgang[j], this.VTDoc[i]);
                    child.getComponent("Block").Ngang = i;
                    child.getComponent("Block").Doc = j;
                    this.BlockArray[i][j] = child;
                }
            }
        }
        this.recallRemainingBlock();
    };
    Board.prototype.recallRemainingBlock = function () {
        // this.BlockRemaining = cc.sys.localStorage.getItem("BR");
        this.recallMemory(this.BlockRemaining, "BR");
        this.BlockAvailable = this.BlockRemaining; //cc.sys.localStorage.getItem("BA")
        for (var i = 0; i < 3; i++) {
            var name = "blockdata" + i.toString();
            var datajson = null;
            console.log("Block name: ", name);
            this.recallMemory(datajson, name);
            console.log("datajson: ", datajson);
            var data = JSON.parse(datajson);
            console.log("data :" + data);
            if (data.recall == true) {
                console.log("da recall 1 khoi");
                this.zIndex += 1;
                var blocknn = cc.instantiate(this.BlockContain);
                blocknn.zIndex = this.zIndex;
                blocknn.getComponent("BlockContain").IndexInQueue = i;
                this.BlockRemainingArr.push(blocknn);
                this.BlockBoard.addChild(blocknn);
                blocknn.setPosition(-190 + 190 * i, -430);
                blocknn.getComponent("BlockContain").Index = i;
                blocknn
                    .getComponent("BlockContain")
                    .khoitao(data.indextype, data.indexcolor, data.indexintype);
                // console.log(
                //   "Thong tin block: " +
                //     data.indextype +
                //     " " +
                //     data.indexcolor +
                //     " " +
                //     data.indexintype
                // );
                blocknn
                    .getComponent("BlockContain")
                    .checkSetable(cc.v2(data.sizeX, data.sizeY), data.blank);
                console.log(cc.v2(data.sizeX, data.sizeY) + " " + data.blank);
            }
        }
    };
    Board.prototype.newGame = function () {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                this.EmptyBlockArray[i][j].getComponent(cc.BoxCollider).enabled = false;
            }
        }
        this.zIndex = 0;
        this.BlockBoard.removeAllChildren();
        this.taoBlockNgauNhien();
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                this.Prepos[i][j] = 0;
                this.IndexColorArray[i][j] = -1;
                // this.zIndex = 0
                this.BlockArray[i][j] = this.EmptyBlockArray[i][j];
                this.EmptyBlockArray[i][j].scale = 1;
            }
        }
        var data = {
            prepos: this.Prepos,
            indexcolor: this.IndexColorArray,
        };
        // cc.sys.localStorage.setItem("data", JSON.stringify(data));
        this.saveData("data", JSON.stringify(data));
        this.DiemLabel.getComponent("DiemSo").DiemTween.angle = 0;
        this.DiemLabel.getComponent("DiemSo").Diem = 0;
        // cc.sys.localStorage.setItem("diem", 0);
        this.saveData("diem", 0);
        // this.GameController.getComponent("Gamecontroller").closePauseMenu()
    };
    Board.prototype.boardSetUp = function () {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                this.taoEmptyBlock(i, j);
                // let emptyblock = cc.instantiate(this.EmptyBlock)
                // this.EmptyBlockBoard.addChild(emptyblock)
                // this.BlockArray[i][j] = emptyblock
                // emptyblock.getComponent("EmptyBlock").Ngang = i
                // emptyblock.getComponent("EmptyBlock").Doc = j
                // emptyblock.setPosition(cc.v2(this.VTNgang[i],this.VTDoc[j]))
            }
        }
    };
    Board.prototype.taoBlockNgauNhien = function () {
        this.BlockAvailable = 3;
        this.BlockRemainingArr = [];
        for (var i = 0; i < 3; i++) {
            // console.log("da tao")
            this.zIndex += 1;
            var blocknn = cc.instantiate(this.BlockContain);
            blocknn.zIndex = this.zIndex;
            blocknn.getComponent("BlockContain").IndexInQueue = i;
            this.BlockRemainingArr.push(blocknn);
            this.BlockBoard.addChild(blocknn);
            blocknn.setPosition(-190 + 190 * i, -430);
            blocknn.getComponent("BlockContain").Index = i;
            blocknn.getComponent("BlockContain").khoitao(-1, -1);
            blocknn.getComponent("BlockContain").blockStorage();
        }
        this.BlockRemaining = 3;
        this.checkSetable();
        if (this.BlockAvailable == 0) {
            var blocktemp = this.BlockRemainingArr[2];
            this.BlockRemainingArr.pop();
            blocktemp.destroy();
            var block1 = cc.instantiate(this.BlockContain);
            this.BlockBoard.addChild(block1);
            block1.getComponent("BlockContain").khoitao(99, -1);
            block1.zIndex = this.zIndex;
            block1.getComponent("BlockContain").Index = 2;
            block1.getComponent("BlockContain").IndexInQueue = 2;
            block1.setPosition(-190 + 190 * 2, -430);
            block1.getComponent("BlockContain").blockStorage();
            this.BlockAvailable = 1;
        }
        // cc.sys.localStorage.setItem("BA", this.BlockAvailable);
        // cc.sys.localStorage.setItem("BR", this.BlockRemaining);
        this.saveData("BA", this.BlockAvailable);
        this.saveData("BR", this.BlockRemaining);
    };
    Board.prototype.taoEmptyBlock = function (i, j) {
        var emptyblock = cc.instantiate(this.EmptyBlock);
        this.EmptyBlockBoard.addChild(emptyblock);
        this.BlockArray[i][j] = emptyblock;
        this.EmptyBlockArray[i][j] = emptyblock;
        emptyblock.getComponent("EmptyBlock").Ngang = i;
        emptyblock.getComponent("EmptyBlock").Doc = j;
        emptyblock.setPosition(cc.v2(this.VTNgang[j], this.VTDoc[i]));
    };
    Board.prototype.checkAnDiem = function () {
        var _this = this;
        // this.node.emit("check")
        this.pause = true;
        var sodayan = 0;
        var Hang = [];
        var Cot = [];
        var _loop_1 = function (i) {
            for (var j = 0; j < 8; j++) {
                if (this_1.Prepos[i][j] == 0)
                    break;
                if (j == 7) {
                    sodayan += 1;
                    // this.AnNgang.push(i)
                    Hang.push(i);
                    var _loop_3 = function (k) {
                        if (this_1.Prepos[i][k] == 1 &&
                            this_1.BlockArray[i][k].name == "Block") {
                            // this.BlockArray[i][k].getComponent(cc.Sprite).spriteFrame = this.ColorAnDiem
                            this_1.DaAn[i][k] = 1;
                            this_1.EmptyBlockArray[i][k].scale = 1;
                            cc.tween(this_1.BlockArray[i][k])
                                .to(0.3, { scale: 1.3, opacity: 100 })
                                .call(function () {
                                _this.BlockArray[i][k].destroy();
                                _this.BlockArray[i][k] = _this.EmptyBlockArray[i][k];
                            })
                                .start();
                        }
                    };
                    for (var k = 0; k < 8; k++) {
                        _loop_3(k);
                    }
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < 8; i++) {
            _loop_1(i);
        }
        var _loop_2 = function (i) {
            for (var j = 0; j < 8; j++) {
                if (this_2.Prepos[j][i] == 0)
                    break;
                if (j == 7) {
                    // this.AnDoc.push(i)
                    sodayan += 1;
                    Cot.push(i);
                    var _loop_4 = function (k) {
                        if (this_2.Prepos[k][i] == 1 &&
                            this_2.BlockArray[k][i].name == "Block" &&
                            this_2.DaAn[k][i] != 1) {
                            this_2.EmptyBlockArray[k][i].scale = 1;
                            cc.tween(this_2.BlockArray[k][i])
                                .to(0.3, { scale: 1.3, opacity: 100 })
                                .call(function () {
                                _this.BlockArray[k][i].destroy();
                                _this.BlockArray[k][i] = _this.EmptyBlockArray[k][i];
                            })
                                .start();
                        }
                    };
                    for (var k = 0; k < 8; k++) {
                        _loop_4(k);
                    }
                }
            }
        };
        var this_2 = this;
        for (var i = 0; i < 8; i++) {
            _loop_2(i);
        }
        console.log(Hang, Cot);
        for (var i = 0; i < Hang.length; i++) {
            for (var j = 0; j < 8; j++) {
                this.Prepos[Hang[i]][j] = 0;
                this.IndexColorArray[Hang[i]][j] = -1;
                this.DaAn[Hang[i]][j] = 0;
            }
        }
        for (var i = 0; i < Cot.length; i++) {
            for (var j = 0; j < 8; j++) {
                this.Prepos[j][Cot[i]] = 0;
                this.IndexColorArray[j][Cot[i]] = -1;
                this.DaAn[j][Cot[i]] = 0;
            }
        }
        if (sodayan >= 3)
            this.CreateNova = true;
        this.DiemLabel.getComponent("DiemSo").Diem += 10 * sodayan;
        this.DiemLabel.getComponent("DiemSo").congDiem();
        var data = {
            prepos: this.Prepos,
            indexcolor: this.IndexColorArray,
        };
        // cc.sys.localStorage.setItem("data", JSON.stringify(data));
        // cc.sys.localStorage.setItem(
        //   "diem",
        //   this.DiemLabel.getComponent("DiemSo").Diem
        // );
        this.saveData("data", JSON.stringify(data));
        this.saveData("diem", this.DiemLabel.getComponent("DiemSo").Diem);
        cc.tween(this.node)
            .delay(0.3)
            .call(function () {
            _this.pause = false;
        })
            .start();
    };
    Board.prototype.checkSetable = function () {
        var _this = this;
        for (var a in this.BlockRemainingArr) {
            this.BlockRemainingArr[a]
                .getComponent("BlockContain")
                .checkSetable(this.BlockRemainingArr[a].getComponent("BlockContain").Size, this.BlockRemainingArr[a].getComponent("BlockContain").Blank);
        }
        // console.log(this.BlockRemainingArr[0]==undefined)
        console.log(this.BlockAvailable);
        cc.tween(this.node)
            .delay(0.3)
            .call(function () {
            if (_this.BlockAvailable == 0) {
                //Thua Cuoc
                cc.tween(_this.node)
                    .call(function () {
                    cc.tween(_this.CloakLose).to(2, { opacity: 150 }).start();
                })
                    .delay(1)
                    .call(function () {
                    _this.LoseImg.active = true;
                    _this.LoseImg.scale = 10;
                    cc.tween(_this.LoseImg).to(1, { scale: 1 }).start();
                })
                    .delay(0.5)
                    .call(function () {
                    _this.NGButton.active = true;
                    _this.NGButton.opacity = 0;
                    cc.tween(_this.NGButton).to(1, { opacity: 255 }).start();
                })
                    .start();
                console.log("Thua cuoc");
                _this.Lose = true;
                // cc.sys.localStorage.setItem("IsLose", this.Lose);
                _this.saveData("IsLose", _this.Lose);
            }
        })
            .start();
    };
    Board.prototype.resetLoseImg = function () {
        this.CloakLose.opacity = 0;
        this.LoseImg.active = false;
        this.NGButton.active = false;
    };
    __decorate([
        property(cc.Node)
    ], Board.prototype, "GameController", void 0);
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "Block", void 0);
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "EmptyBlock", void 0);
    __decorate([
        property(cc.Node)
    ], Board.prototype, "EmptyBlockBoard", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Board.prototype, "ColorArray", void 0);
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "BlockContain", void 0);
    __decorate([
        property(cc.Node)
    ], Board.prototype, "BlockReadyContainer", void 0);
    __decorate([
        property(cc.Node)
    ], Board.prototype, "BlockBoard", void 0);
    __decorate([
        property(cc.Node)
    ], Board.prototype, "DiemLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Board.prototype, "CloakLose", void 0);
    __decorate([
        property(cc.Node)
    ], Board.prototype, "NGButton", void 0);
    __decorate([
        property(cc.Node)
    ], Board.prototype, "LoseImg", void 0);
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "NovaBlock", void 0);
    __decorate([
        property(cc.Node)
    ], Board.prototype, "Note", void 0);
    __decorate([
        property(cc.Node)
    ], Board.prototype, "NoteLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Board.prototype, "Hand", void 0);
    Board = __decorate([
        ccclass
    ], Board);
    return Board;
}(cc.Component));
exports.default = Board;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsdURBQWtEO0FBRWxEO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBaTBCQztRQS96QkMsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyxnQkFBVSxHQUFxQixFQUFFLENBQUM7UUFDbEMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRW5DLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLHlCQUFtQixHQUFZLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixhQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLFdBQUssR0FBYSxFQUFFLENBQUM7UUFDckIscUJBQWUsR0FBYSxFQUFFLENBQUM7UUFDL0IsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0IsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLHVCQUFpQixHQUFjLEVBQUUsQ0FBQztRQUNsQyxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsVUFBSSxHQUFHLEtBQUssQ0FBQztRQUViLFVBQUksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsQixlQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFdkIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUUzQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIscUJBQWUsR0FBZ0I7WUFDN0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQ2hELENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztZQUNoRCxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7WUFDaEQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQ2hELENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztZQUNoRCxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7WUFDaEQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQ2hELENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztTQUNqRCxDQUFDO1FBRUYsZ0JBQVUsR0FBZ0I7WUFDeEIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQ2hELENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztZQUNoRCxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7WUFDaEQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQ2hELENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztZQUNoRCxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7WUFDaEQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQ2hELENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztTQUNqRCxDQUFDO1FBRUYsWUFBTSxHQUFlO1lBQ25CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekIsQ0FBQztRQUNGLHFCQUFlLEdBQWU7WUFDNUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMs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QUUsQ0FBQyxJQUFJLENBQUM7MkNBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNRO0lBTTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dUNBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNHO0lBckRGLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FpMEJ6QjtJQUFELFlBQUM7Q0FqMEJELEFBaTBCQyxDQWowQmtDLEVBQUUsQ0FBQyxTQUFTLEdBaTBCOUM7a0JBajBCb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBGQkluc3RhbnRNYW5hZ2VyIGZyb20gXCIuL0ZCSW5zdGFudE1hbmFnZXJcIjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEdhbWVDb250cm9sbGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIEJsb2NrOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgRW1wdHlCbG9jazogY2MuUHJlZmFiID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBFbXB0eUJsb2NrQm9hcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICBDb2xvckFycmF5OiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgQ29sb3JBbkRpZW06IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIEJsb2NrQ29udGFpbjogY2MuUHJlZmFiID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBCbG9ja1JlYWR5Q29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBCbG9ja0JvYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICBBbk5nYW5nOiBudW1iZXJbXSA9IFtdO1xyXG4gIEFuRG9jOiBudW1iZXJbXSA9IFtdO1xyXG4gIFhvYUFuTmdhbmdJbmRleDogbnVtYmVyW10gPSBbXTtcclxuICBYb2FBbkRvY0luZGV4OiBudW1iZXJbXSA9IFtdO1xyXG4gIENoZWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBCbG9ja1JlbWFpbmluZzogbnVtYmVyID0gMDtcclxuICBCbG9ja1JlbWFpbmluZ0FycjogY2MuTm9kZVtdID0gW107XHJcbiAgekluZGV4ID0gMDtcclxuICBMb3NlID0gZmFsc2U7XHJcblxyXG4gIFR5cGU6IG51bWJlciA9IC0xO1xyXG4gIFR5cGVJbmRleDogbnVtYmVyID0gLTE7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgRGllbUxhYmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQmxvY2tBdmFpbGFibGU6IG51bWJlciA9IDA7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQ2xvYWtMb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBOR0J1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgTG9zZUltZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgQ2FycnlpbmdOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIE5vdmFCbG9jazogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgQ3JlYXRlTm92YSA9IGZhbHNlO1xyXG5cclxuICBJc05ld2JpZSA9IGZhbHNlO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIE5vdGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIE5vdGVMYWJlbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgSGFuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEVtcHR5QmxvY2tBcnJheTogY2MuTm9kZVtdW10gPSBbXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgXTtcclxuXHJcbiAgQmxvY2tBcnJheTogY2MuTm9kZVtdW10gPSBbXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgXTtcclxuXHJcbiAgUHJlcG9zOiBOdW1iZXJbXVtdID0gW1xyXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gIF07XHJcbiAgSW5kZXhDb2xvckFycmF5OiBOdW1iZXJbXVtdID0gW1xyXG4gICAgWy0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMV0sXHJcbiAgICBbLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xXSxcclxuICAgIFstMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTFdLFxyXG4gICAgWy0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMV0sXHJcbiAgICBbLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xXSxcclxuICAgIFstMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTFdLFxyXG4gICAgWy0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMV0sXHJcbiAgICBbLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xXSxcclxuICBdO1xyXG4gIERhQW46IE51bWJlcltdW10gPSBbXHJcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgXTtcclxuICBWVE5nYW5nOiBudW1iZXJbXSA9IFstMjUyLCAtMTgwLCAtMTA4LCAtMzYsIDM2LCAxMDgsIDE4MCwgMjUyXTtcclxuICBWVERvYzogbnVtYmVyW10gPSBbMjUyLCAxODAsIDEwOCwgMzYsIC0zNiwgLTEwOCwgLTE4MCwgLTI1Ml07XHJcbiAgSXNQbGF5aW5nID0gdHJ1ZTtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5IYW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gbGV0IGZiaW5zdGFudCA9IEdCSW5zdGFudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZiaW5zdGFudC5nZXRQbGF5ZXJJZCgpKTtcclxuICAgIGxldCB0ZXN0ID0gWzUsIDQsIDYsIDddO1xyXG4gICAgbGV0IGpzb250ZXN0ID0gSlNPTi5zdHJpbmdpZnkodGVzdCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YoanNvbnRlc3QpKVxyXG4gICAgdGhpcy56SW5kZXggPSAwO1xyXG4gICAgdGhpcy5ib2FyZFNldFVwKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkJsb2NrQXJyYXkpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5CbG9ja0FycmF5WzBdWzBdLmdldFBvc2l0aW9uKCkueClcclxuICAgIC8vIGxldCBpc2xvc2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJJc0xvc2VcIik7XHJcbiAgICAvLyBsZXQgaXNsb3NlID0gZmFsc2VcclxuICAgIHRoaXMucmVjYWxsTWVtb3J5KHRoaXMuTG9zZSwgXCJJc0xvc2VcIik7XHJcbiAgICBpZiAodGhpcy5Jc05ld2JpZSkge1xyXG4gICAgICAvLyB0aGlzLklzTmV3YmllID0gZmFsc2VcclxuICAgICAgLy8gdGhpcy5ub2RlLm9uKFwibmV4dFN0ZXBcIix0aGlzLnR1dG9yaWFsU3RlcDEsdGhpcylcclxuICAgICAgdGhpcy5Ob3RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMudHV0b3JpYWwoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5Mb3NlID09IHRydWUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJOZXcgZ2FtZVwiKVxyXG4gICAgICB0aGlzLm5ld0dhbWUoKTtcclxuICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiSXNMb3NlXCIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5zYXZlRGF0YShcIklzTG9zZVwiLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgdGhpcy5yZWNhbGxkYXRhKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImRhZ29pXCIpXHJcbiAgICAvLyB0aGlzLnRhb0Jsb2NrTmdhdU5oaWVuKClcclxuICAgIC8vIGNvbnNvbGUubG9nKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRpZW1cIikpXHJcbiAgICB0aGlzLm5vZGUuZW1pdChcIlBsYXlTb3VuZFwiKTtcclxuICB9XHJcblxyXG4gIHR1dG9yaWFsKCkge1xyXG4gICAgdGhpcy5zdGVwMSgpO1xyXG4gIH1cclxuICBzdGVwMSgpIHtcclxuICAgIHRoaXMuSGFuZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuSGFuZClcclxuICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLkhhbmQueSA9IC03MjA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudG8oMC41LCB7IHk6IC0yMCB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfSwgMC43KTtcclxuICAgIHRoaXMubm9kZS5vbihcIm5leHRTdGVwXCIsIHRoaXMuc3RlcDIsIHRoaXMpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICBpZiAoaSAhPSAzICYmIGkgIT0gNCAmJiBpICE9IDMgJiYgaSAhPSA0KSB7XHJcbiAgICAgICAgICB0aGlzLkVtcHR5QmxvY2tBcnJheVtpXVtqXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPVxyXG4gICAgICAgICAgICBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAzOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKSB7XHJcbiAgICAgICAgaWYgKGogIT0gMyAmJiBqICE9IDQpIHtcclxuICAgICAgICAgIHRoaXMuUHJlcG9zW2ldW2pdID0gMTtcclxuICAgICAgICAgIHRoaXMuRW1wdHlCbG9ja0FycmF5W2ldW2pdLnNjYWxlID0gMDtcclxuICAgICAgICAgIGxldCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQmxvY2tDb250YWluKTtcclxuICAgICAgICAgIHRoaXMuQmxvY2tCb2FyZC5hZGRDaGlsZChibG9jayk7XHJcbiAgICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja0NvbnRhaW5cIikua2hvaXRhbyg5OSwgMik7XHJcbiAgICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja0NvbnRhaW5cIikudHVybk9mZkxpc3RlbmVyKCk7XHJcbiAgICAgICAgICBibG9jay5zY2FsZSA9IDE7XHJcbiAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgIGxldCBjaGlsZGFyciA9IGJsb2NrLmNoaWxkcmVuO1xyXG4gICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRhcnJbMF07XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGlsZClcclxuICAgICAgICAgIGNoaWxkLnNldFBvc2l0aW9uKHRoaXMuVlROZ2FuZ1tqXSwgdGhpcy5WVERvY1tpXSk7XHJcbiAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OZ2FuZyA9IGk7XHJcbiAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Eb2MgPSBqO1xyXG4gICAgICAgICAgdGhpcy5CbG9ja0FycmF5W2ldW2pdID0gY2hpbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMzsgaSA8IDU7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gICAgICAgIGlmIChqICE9IDMgJiYgaiAhPSA0KSB7XHJcbiAgICAgICAgICB0aGlzLlByZXBvc1tqXVtpXSA9IDE7XHJcbiAgICAgICAgICB0aGlzLkVtcHR5QmxvY2tBcnJheVtqXVtpXS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICBsZXQgYmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJsb2NrQ29udGFpbik7XHJcbiAgICAgICAgICB0aGlzLkJsb2NrQm9hcmQuYWRkQ2hpbGQoYmxvY2spO1xyXG4gICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tDb250YWluXCIpLmtob2l0YW8oOTksIDIpO1xyXG4gICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tDb250YWluXCIpLnR1cm5PZmZMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgYmxvY2suc2NhbGUgPSAxO1xyXG4gICAgICAgICAgYmxvY2suc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgICBsZXQgY2hpbGRhcnIgPSBibG9jay5jaGlsZHJlbjtcclxuICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkYXJyWzBdO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coY2hpbGQpXHJcbiAgICAgICAgICBjaGlsZC5zZXRQb3NpdGlvbih0aGlzLlZUTmdhbmdbaV0sIHRoaXMuVlREb2Nbal0pO1xyXG4gICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuTmdhbmcgPSBqO1xyXG4gICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuRG9jID0gaTtcclxuICAgICAgICAgIHRoaXMuQmxvY2tBcnJheVtqXVtpXSA9IGNoaWxkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGJsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5CbG9ja0NvbnRhaW4pO1xyXG4gICAgdGhpcy5CbG9ja0JvYXJkLmFkZENoaWxkKGJsb2NrKTtcclxuICAgIGJsb2NrLmdldENvbXBvbmVudChcIkJsb2NrQ29udGFpblwiKS5raG9pdGFvKDc1LCAyLCA0KTtcclxuICAgIGJsb2NrLnNldFBvc2l0aW9uKDAsIC00MzApO1xyXG4gIH1cclxuICBzdGVwMigpIHtcclxuICAgIHRoaXMubm9kZS5vZmYoXCJuZXh0U3RlcFwiLCB0aGlzLnN0ZXAyLCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vbihcIm5leHRTdGVwXCIsIHRoaXMuc3RlcDMsIHRoaXMpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJTdGVwMlwiKTtcclxuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgLmRlbGF5KDEpXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICB0aGlzLk5vdGVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgICAgICBcIklmIHlvdSBtYXRjaCAzIHJvdyBvciBjb2xsdW1uIHlvdSB3aWxsIHJlY2lldmVkIGEgc3BlY2lhbCBibG9jayBjYWxsZWQgTm92YUJsb2NrLlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoaSAhPSAzICYmIGogIT0gMykge1xyXG4gICAgICAgICAgICAgIHRoaXMuRW1wdHlCbG9ja0FycmF5W2ldW2pdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9XHJcbiAgICAgICAgICAgICAgICBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmb3IobGV0IGk9MztpPDU7aSsrKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgZm9yKGxldCBqPTA7ajw4O2orKylcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYoaiE9MyYmaiE9NClcclxuICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgIHRoaXMuUHJlcG9zW2ldW2pdID0gMVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuRW1wdHlCbG9ja0FycmF5W2ldW2pdLnNjYWxlID0gMFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQmxvY2tDb250YWluKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuQmxvY2tCb2FyZC5hZGRDaGlsZChibG9jaylcclxuICAgICAgICAvLyAgICAgICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja0NvbnRhaW5cIikua2hvaXRhbyg5OSwyKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJsb2NrLmdldENvbXBvbmVudChcIkJsb2NrQ29udGFpblwiKS50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJsb2NrLnNjYWxlID0gMVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJsb2NrLnNldFBvc2l0aW9uKDAsMClcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgY2hpbGRhcnIgPSBibG9jay5jaGlsZHJlblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkYXJyWzBdXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2hpbGQpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2hpbGQuc2V0UG9zaXRpb24odGhpcy5WVE5nYW5nW2pdLHRoaXMuVlREb2NbaV0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuTmdhbmcgPSBpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuRG9jID0galxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuQmxvY2tBcnJheVtpXVtqXSA9IGNoaWxkXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgIGZvciAobGV0IGogPSAyOyBqIDwgNTsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmICghKGkgPT0gMyAmJiBqID09IDMpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5QcmVwb3Nbal1baV0gPSAxO1xyXG4gICAgICAgICAgICAgIHRoaXMuRW1wdHlCbG9ja0FycmF5W2pdW2ldLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgICBsZXQgYmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJsb2NrQ29udGFpbik7XHJcbiAgICAgICAgICAgICAgdGhpcy5CbG9ja0JvYXJkLmFkZENoaWxkKGJsb2NrKTtcclxuICAgICAgICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja0NvbnRhaW5cIikua2hvaXRhbyg5OSwgMik7XHJcbiAgICAgICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tDb250YWluXCIpLnR1cm5PZmZMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICAgIGJsb2NrLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgICBsZXQgY2hpbGRhcnIgPSBibG9jay5jaGlsZHJlbjtcclxuICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZGFyclswXTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGlsZClcclxuICAgICAgICAgICAgICBjaGlsZC5zZXRQb3NpdGlvbih0aGlzLlZUTmdhbmdbaV0sIHRoaXMuVlREb2Nbal0pO1xyXG4gICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChcIkJsb2NrXCIpLk5nYW5nID0gajtcclxuICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Eb2MgPSBpO1xyXG4gICAgICAgICAgICAgIHRoaXMuQmxvY2tBcnJheVtqXVtpXSA9IGNoaWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuTm92YUJsb2NrKTtcclxuICAgICAgICB0aGlzLkJsb2NrQm9hcmQuYWRkQ2hpbGQoYmxvY2spO1xyXG4gICAgICAgIGJsb2NrLnNldFBvc2l0aW9uKDAsIC00MzApO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcbiAgc3RlcDMoKSB7XHJcbiAgICB0aGlzLm5vZGUub2ZmKFwibmV4dFN0ZXBcIiwgdGhpcy5zdGVwMywgdGhpcyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlN0ZXAzXCIpO1xyXG4gICAgdGhpcy5Jc05ld2JpZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5DcmVhdGVOb3ZhID0gZmFsc2U7XHJcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICB0aGlzLk5vdGVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiTGV0cyBzdGFydFwiO1xyXG4gICAgICB9KVxyXG4gICAgICAuZGVsYXkoMS41KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChpICE9IDMgJiYgaSAhPSA0ICYmIGkgIT0gMyAmJiBpICE9IDQpIHtcclxuICAgICAgICAgICAgICB0aGlzLkVtcHR5QmxvY2tBcnJheVtpXVtqXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPVxyXG4gICAgICAgICAgICAgICAgdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLk5vdGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZXdHYW1lKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuICB0YW9Ob3ZhQmxvY2soKSB7XHJcbiAgICBsZXQgbm92YWJsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5Ob3ZhQmxvY2spO1xyXG4gICAgdGhpcy5CbG9ja0JvYXJkLmFkZENoaWxkKG5vdmFibG9jayk7XHJcbiAgICBub3ZhYmxvY2suc2V0UG9zaXRpb24oMCwgLTQzMCk7XHJcbiAgICB0aGlzLkJsb2NrUmVtYWluaW5nID0gMTtcclxuICAgIHRoaXMuQmxvY2tBdmFpbGFibGUgPSAxO1xyXG4gICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQkFcIiwgdGhpcy5CbG9ja0F2YWlsYWJsZSk7XHJcbiAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJCUlwiLCB0aGlzLkJsb2NrUmVtYWluaW5nKTtcclxuICAgIHRoaXMuc2F2ZURhdGEoXCJCQVwiLCB0aGlzLkJsb2NrQXZhaWxhYmxlKTtcclxuICAgIHRoaXMuc2F2ZURhdGEoXCJCUlwiLCB0aGlzLkJsb2NrUmVtYWluaW5nKTtcclxuICB9XHJcbiAgcmVjYWxsTWVtb3J5KG5hbWU6IGFueSA9IG51bGwsIGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNoZWNrIG5hbWUgcGFyYW1zIGJlZm9yZVwiLCBuYW1lKTtcclxuXHJcbiAgICBpZiAoRkJJbnN0YW50TWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFBsYXllcklkKCkgIT09IFwibG9jYWxJZFwiKSB7XHJcbiAgICAgIEZCSW5zdGFudC5wbGF5ZXIuZ2V0RGF0YUFzeW5jKFtrZXldKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJrZXlcIiwga2V5KTtcclxuXHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJkYXRhXCIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBnZXQgZnJvbSBGQlwiLCBkYXRhW2tleV0sIGtleSk7XHJcblxyXG4gICAgICAgICAgbGV0IGRhdGFQYXJzZWQgPSBKU09OLnBhcnNlKGRhdGFba2V5XSk7XHJcbiAgICAgICAgICBuYW1lID0gZGF0YVBhcnNlZDtcclxuICAgICAgICAgIHRoaXMuUHJlcG9zID0gbmFtZS5wcmVwb3M7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnByZXBvcylcclxuICAgICAgICAgIHRoaXMuSW5kZXhDb2xvckFycmF5ID0gbmFtZS5pbmRleGNvbG9yO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIG9mIGpzb24gcGFyYW1zXCIsIG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuYW1lID0gZGF0YVtrZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBuYW1lID0gZGF0YVtrZXldXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGtleSA9PSBcImRhdGFcIikge1xyXG4gICAgICAgIG5hbWUgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGEgYWZ0ZXIgc2F2ZVwiLCBuYW1lKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZW1wOlwiLCBuYW1lKTtcclxuICAgICAgICB0aGlzLlByZXBvcyA9IG5hbWUucHJlcG9zO1xyXG4gICAgICAgIHRoaXMuSW5kZXhDb2xvckFycmF5ID0gbmFtZS5pbmRleGNvbG9yO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hbWUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5hbWU6IFwiLCBuYW1lLCBcImtleTogXCIsIGtleSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkNoZWNrIG5hbWUgcGFyYW1zIGFmdGVyXCIsIG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcmVjYWxsTWVtb3J5MihrZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIGlmIChGQkluc3RhbnRNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0UGxheWVySWQoKSAhPT0gXCJsb2NhbElkXCIpIHtcclxuICAgICAgICBGQkluc3RhbnQucGxheWVyLmdldERhdGFBc3luYyhba2V5XSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJrZXlcIiwga2V5KTtcclxuICAgICAgICAgIGlmIChrZXkgPT09IFwiZGF0YVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBnZXQgZnJvbSBGQlwiLCBkYXRhW2tleV0sIGtleSk7XHJcbiAgICAgICAgICAgIGxldCBkYXRhUGFyc2VkID0gSlNPTi5wYXJzZShkYXRhW2tleV0pO1xyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGFQYXJzZWQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhW2tleV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChrZXkgPT0gXCJkYXRhXCIpIHtcclxuICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZURhdGEoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgIGlmIChGQkluc3RhbnRNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0UGxheWVySWQoKSAhPT0gXCJsb2NhbElkXCIpIHtcclxuICAgICAgRkJJbnN0YW50LnBsYXllci5zZXREYXRhQXN5bmMoeyBrZXk6IHZhbHVlIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YSBpcyBzZXR0ZWRcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVjYWxsZGF0YSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YSByZWNhbGxlZFwiKTtcclxuICAgIC8vIHZhciBkYXRhID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXRhXCIpKTtcclxuICAgIGxldCBkYXRhcmVjYWxsOiBhbnkgPSBudWxsO1xyXG4gICAgLy8gdGhpcy5yZWNhbGxNZW1vcnkoZGF0YXJlY2FsbCwgXCJkYXRhXCIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQ2hlY2sgcmVjYWxsIG1lbW9yeVwiLCBkYXRhcmVjYWxsKTtcclxuXHJcbiAgICAvLyB0aGlzLlByZXBvcyA9IGRhdGEucHJlcG9zO1xyXG4gICAgLy8gLy8gY29uc29sZS5sb2coZGF0YS5wcmVwb3MpXHJcbiAgICAvLyB0aGlzLkluZGV4Q29sb3JBcnJheSA9IGRhdGEuaW5kZXhjb2xvcjtcclxuICAgIHRoaXMucmVjYWxsTWVtb3J5KHRoaXMuRGllbUxhYmVsLmdldENvbXBvbmVudChcIkRpZW1Tb1wiKS5EaWVtLCBcImRpZW1cIik7XHJcbiAgICAvLyB0aGlzLkRpZW1MYWJlbC5nZXRDb21wb25lbnQoXCJEaWVtU29cIikuRGllbSA9IE51bWJlcihcclxuICAgIC8vICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGllbVwiKVxyXG4gICAgLy8gKTtcclxuICAgIHRoaXMuRGllbUxhYmVsLmdldENvbXBvbmVudChcIkRpZW1Tb1wiKS5jb25nRGllbSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICBpZiAodGhpcy5QcmVwb3NbaV1bal0gPT0gMSkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJGamZvamRzZmpzZmpzXCIpXHJcbiAgICAgICAgICB0aGlzLkVtcHR5QmxvY2tBcnJheVtpXVtqXS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICBsZXQgYmxvY2tyZWNhbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJsb2NrQ29udGFpbik7XHJcbiAgICAgICAgICB0aGlzLkJsb2NrQm9hcmQuYWRkQ2hpbGQoYmxvY2tyZWNhbGwpO1xyXG4gICAgICAgICAgYmxvY2tyZWNhbGxcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChcIkJsb2NrQ29udGFpblwiKVxyXG4gICAgICAgICAgICAua2hvaXRhbyg5OSwgdGhpcy5JbmRleENvbG9yQXJyYXlbaV1bal0pO1xyXG4gICAgICAgICAgYmxvY2tyZWNhbGwuZ2V0Q29tcG9uZW50KFwiQmxvY2tDb250YWluXCIpLnR1cm5PZmZMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgYmxvY2tyZWNhbGwuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgYmxvY2tyZWNhbGwuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgICBsZXQgY2hpbGRhcnIgPSBibG9ja3JlY2FsbC5jaGlsZHJlbjtcclxuICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkYXJyWzBdO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coY2hpbGQpXHJcbiAgICAgICAgICBjaGlsZC5zZXRQb3NpdGlvbih0aGlzLlZUTmdhbmdbal0sIHRoaXMuVlREb2NbaV0pO1xyXG4gICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuTmdhbmcgPSBpO1xyXG4gICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuRG9jID0gajtcclxuICAgICAgICAgIHRoaXMuQmxvY2tBcnJheVtpXVtqXSA9IGNoaWxkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5yZWNhbGxSZW1haW5pbmdCbG9jaygpO1xyXG4gIH1cclxuICByZWNhbGxSZW1haW5pbmdCbG9jaygpIHtcclxuICAgIC8vIHRoaXMuQmxvY2tSZW1haW5pbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJCUlwiKTtcclxuICAgIHRoaXMucmVjYWxsTWVtb3J5KHRoaXMuQmxvY2tSZW1haW5pbmcsIFwiQlJcIik7XHJcbiAgICB0aGlzLkJsb2NrQXZhaWxhYmxlID0gdGhpcy5CbG9ja1JlbWFpbmluZzsgLy9jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJCQVwiKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgbGV0IG5hbWUgPSBcImJsb2NrZGF0YVwiICsgaS50b1N0cmluZygpO1xyXG4gICAgICBsZXQgZGF0YWpzb24gPSBudWxsO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkJsb2NrIG5hbWU6IFwiLCBuYW1lKTtcclxuXHJcbiAgICAgIHRoaXMucmVjYWxsTWVtb3J5KGRhdGFqc29uLCBuYW1lKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YWpzb246IFwiLCBkYXRhanNvbik7XHJcblxyXG4gICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoZGF0YWpzb24pO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJkYXRhIDpcIiArIGRhdGEpO1xyXG5cclxuICAgICAgaWYgKGRhdGEucmVjYWxsID09IHRydWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhIHJlY2FsbCAxIGtob2lcIik7XHJcbiAgICAgICAgdGhpcy56SW5kZXggKz0gMTtcclxuICAgICAgICBsZXQgYmxvY2tubiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQmxvY2tDb250YWluKTtcclxuICAgICAgICBibG9ja25uLnpJbmRleCA9IHRoaXMuekluZGV4O1xyXG4gICAgICAgIGJsb2Nrbm4uZ2V0Q29tcG9uZW50KFwiQmxvY2tDb250YWluXCIpLkluZGV4SW5RdWV1ZSA9IGk7XHJcbiAgICAgICAgdGhpcy5CbG9ja1JlbWFpbmluZ0Fyci5wdXNoKGJsb2Nrbm4pO1xyXG4gICAgICAgIHRoaXMuQmxvY2tCb2FyZC5hZGRDaGlsZChibG9ja25uKTtcclxuICAgICAgICBibG9ja25uLnNldFBvc2l0aW9uKC0xOTAgKyAxOTAgKiBpLCAtNDMwKTtcclxuICAgICAgICBibG9ja25uLmdldENvbXBvbmVudChcIkJsb2NrQ29udGFpblwiKS5JbmRleCA9IGk7XHJcbiAgICAgICAgYmxvY2tublxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChcIkJsb2NrQ29udGFpblwiKVxyXG4gICAgICAgICAgLmtob2l0YW8oZGF0YS5pbmRleHR5cGUsIGRhdGEuaW5kZXhjb2xvciwgZGF0YS5pbmRleGludHlwZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXHJcbiAgICAgICAgLy8gICBcIlRob25nIHRpbiBibG9jazogXCIgK1xyXG4gICAgICAgIC8vICAgICBkYXRhLmluZGV4dHlwZSArXHJcbiAgICAgICAgLy8gICAgIFwiIFwiICtcclxuICAgICAgICAvLyAgICAgZGF0YS5pbmRleGNvbG9yICtcclxuICAgICAgICAvLyAgICAgXCIgXCIgK1xyXG4gICAgICAgIC8vICAgICBkYXRhLmluZGV4aW50eXBlXHJcbiAgICAgICAgLy8gKTtcclxuICAgICAgICBibG9ja25uXHJcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KFwiQmxvY2tDb250YWluXCIpXHJcbiAgICAgICAgICAuY2hlY2tTZXRhYmxlKGNjLnYyKGRhdGEuc2l6ZVgsIGRhdGEuc2l6ZVkpLCBkYXRhLmJsYW5rKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjYy52MihkYXRhLnNpemVYLCBkYXRhLnNpemVZKSArIFwiIFwiICsgZGF0YS5ibGFuayk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbmV3R2FtZSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKSB7XHJcbiAgICAgICAgdGhpcy5FbXB0eUJsb2NrQXJyYXlbaV1bal0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuekluZGV4ID0gMDtcclxuICAgIHRoaXMuQmxvY2tCb2FyZC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgdGhpcy50YW9CbG9ja05nYXVOaGllbigpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICB0aGlzLlByZXBvc1tpXVtqXSA9IDA7XHJcbiAgICAgICAgdGhpcy5JbmRleENvbG9yQXJyYXlbaV1bal0gPSAtMTtcclxuICAgICAgICAvLyB0aGlzLnpJbmRleCA9IDBcclxuICAgICAgICB0aGlzLkJsb2NrQXJyYXlbaV1bal0gPSB0aGlzLkVtcHR5QmxvY2tBcnJheVtpXVtqXTtcclxuICAgICAgICB0aGlzLkVtcHR5QmxvY2tBcnJheVtpXVtqXS5zY2FsZSA9IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICBwcmVwb3M6IHRoaXMuUHJlcG9zLFxyXG4gICAgICBpbmRleGNvbG9yOiB0aGlzLkluZGV4Q29sb3JBcnJheSxcclxuICAgIH07XHJcbiAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXRhXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIHRoaXMuc2F2ZURhdGEoXCJkYXRhXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIHRoaXMuRGllbUxhYmVsLmdldENvbXBvbmVudChcIkRpZW1Tb1wiKS5EaWVtVHdlZW4uYW5nbGUgPSAwO1xyXG4gICAgdGhpcy5EaWVtTGFiZWwuZ2V0Q29tcG9uZW50KFwiRGllbVNvXCIpLkRpZW0gPSAwO1xyXG4gICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGllbVwiLCAwKTtcclxuICAgIHRoaXMuc2F2ZURhdGEoXCJkaWVtXCIsIDApO1xyXG4gICAgLy8gdGhpcy5HYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoXCJHYW1lY29udHJvbGxlclwiKS5jbG9zZVBhdXNlTWVudSgpXHJcbiAgfVxyXG5cclxuICBib2FyZFNldFVwKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICB0aGlzLnRhb0VtcHR5QmxvY2soaSwgaik7XHJcbiAgICAgICAgLy8gbGV0IGVtcHR5YmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkVtcHR5QmxvY2spXHJcbiAgICAgICAgLy8gdGhpcy5FbXB0eUJsb2NrQm9hcmQuYWRkQ2hpbGQoZW1wdHlibG9jaylcclxuICAgICAgICAvLyB0aGlzLkJsb2NrQXJyYXlbaV1bal0gPSBlbXB0eWJsb2NrXHJcbiAgICAgICAgLy8gZW1wdHlibG9jay5nZXRDb21wb25lbnQoXCJFbXB0eUJsb2NrXCIpLk5nYW5nID0gaVxyXG4gICAgICAgIC8vIGVtcHR5YmxvY2suZ2V0Q29tcG9uZW50KFwiRW1wdHlCbG9ja1wiKS5Eb2MgPSBqXHJcbiAgICAgICAgLy8gZW1wdHlibG9jay5zZXRQb3NpdGlvbihjYy52Mih0aGlzLlZUTmdhbmdbaV0sdGhpcy5WVERvY1tqXSkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRhb0Jsb2NrTmdhdU5oaWVuKCkge1xyXG4gICAgdGhpcy5CbG9ja0F2YWlsYWJsZSA9IDM7XHJcbiAgICB0aGlzLkJsb2NrUmVtYWluaW5nQXJyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImRhIHRhb1wiKVxyXG4gICAgICB0aGlzLnpJbmRleCArPSAxO1xyXG4gICAgICBsZXQgYmxvY2tubiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQmxvY2tDb250YWluKTtcclxuICAgICAgYmxvY2tubi56SW5kZXggPSB0aGlzLnpJbmRleDtcclxuICAgICAgYmxvY2tubi5nZXRDb21wb25lbnQoXCJCbG9ja0NvbnRhaW5cIikuSW5kZXhJblF1ZXVlID0gaTtcclxuICAgICAgdGhpcy5CbG9ja1JlbWFpbmluZ0Fyci5wdXNoKGJsb2Nrbm4pO1xyXG4gICAgICB0aGlzLkJsb2NrQm9hcmQuYWRkQ2hpbGQoYmxvY2tubik7XHJcbiAgICAgIGJsb2Nrbm4uc2V0UG9zaXRpb24oLTE5MCArIDE5MCAqIGksIC00MzApO1xyXG4gICAgICBibG9ja25uLmdldENvbXBvbmVudChcIkJsb2NrQ29udGFpblwiKS5JbmRleCA9IGk7XHJcbiAgICAgIGJsb2Nrbm4uZ2V0Q29tcG9uZW50KFwiQmxvY2tDb250YWluXCIpLmtob2l0YW8oLTEsIC0xKTtcclxuICAgICAgYmxvY2tubi5nZXRDb21wb25lbnQoXCJCbG9ja0NvbnRhaW5cIikuYmxvY2tTdG9yYWdlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLkJsb2NrUmVtYWluaW5nID0gMztcclxuICAgIHRoaXMuY2hlY2tTZXRhYmxlKCk7XHJcbiAgICBpZiAodGhpcy5CbG9ja0F2YWlsYWJsZSA9PSAwKSB7XHJcbiAgICAgIGxldCBibG9ja3RlbXAgPSB0aGlzLkJsb2NrUmVtYWluaW5nQXJyWzJdO1xyXG4gICAgICB0aGlzLkJsb2NrUmVtYWluaW5nQXJyLnBvcCgpO1xyXG4gICAgICBibG9ja3RlbXAuZGVzdHJveSgpO1xyXG4gICAgICBsZXQgYmxvY2sxID0gY2MuaW5zdGFudGlhdGUodGhpcy5CbG9ja0NvbnRhaW4pO1xyXG4gICAgICB0aGlzLkJsb2NrQm9hcmQuYWRkQ2hpbGQoYmxvY2sxKTtcclxuICAgICAgYmxvY2sxLmdldENvbXBvbmVudChcIkJsb2NrQ29udGFpblwiKS5raG9pdGFvKDk5LCAtMSk7XHJcbiAgICAgIGJsb2NrMS56SW5kZXggPSB0aGlzLnpJbmRleDtcclxuICAgICAgYmxvY2sxLmdldENvbXBvbmVudChcIkJsb2NrQ29udGFpblwiKS5JbmRleCA9IDI7XHJcbiAgICAgIGJsb2NrMS5nZXRDb21wb25lbnQoXCJCbG9ja0NvbnRhaW5cIikuSW5kZXhJblF1ZXVlID0gMjtcclxuICAgICAgYmxvY2sxLnNldFBvc2l0aW9uKC0xOTAgKyAxOTAgKiAyLCAtNDMwKTtcclxuICAgICAgYmxvY2sxLmdldENvbXBvbmVudChcIkJsb2NrQ29udGFpblwiKS5ibG9ja1N0b3JhZ2UoKTtcclxuICAgICAgdGhpcy5CbG9ja0F2YWlsYWJsZSA9IDE7XHJcbiAgICB9XHJcbiAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJCQVwiLCB0aGlzLkJsb2NrQXZhaWxhYmxlKTtcclxuICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkJSXCIsIHRoaXMuQmxvY2tSZW1haW5pbmcpO1xyXG4gICAgdGhpcy5zYXZlRGF0YShcIkJBXCIsIHRoaXMuQmxvY2tBdmFpbGFibGUpO1xyXG4gICAgdGhpcy5zYXZlRGF0YShcIkJSXCIsIHRoaXMuQmxvY2tSZW1haW5pbmcpO1xyXG4gIH1cclxuXHJcbiAgdGFvRW1wdHlCbG9jayhpOiBudW1iZXIsIGo6IG51bWJlcikge1xyXG4gICAgbGV0IGVtcHR5YmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkVtcHR5QmxvY2spO1xyXG4gICAgdGhpcy5FbXB0eUJsb2NrQm9hcmQuYWRkQ2hpbGQoZW1wdHlibG9jayk7XHJcbiAgICB0aGlzLkJsb2NrQXJyYXlbaV1bal0gPSBlbXB0eWJsb2NrO1xyXG4gICAgdGhpcy5FbXB0eUJsb2NrQXJyYXlbaV1bal0gPSBlbXB0eWJsb2NrO1xyXG4gICAgZW1wdHlibG9jay5nZXRDb21wb25lbnQoXCJFbXB0eUJsb2NrXCIpLk5nYW5nID0gaTtcclxuICAgIGVtcHR5YmxvY2suZ2V0Q29tcG9uZW50KFwiRW1wdHlCbG9ja1wiKS5Eb2MgPSBqO1xyXG4gICAgZW1wdHlibG9jay5zZXRQb3NpdGlvbihjYy52Mih0aGlzLlZUTmdhbmdbal0sIHRoaXMuVlREb2NbaV0pKTtcclxuICB9XHJcbiAgQ2hheUxhaSA9IGZhbHNlO1xyXG4gIFVzZWRCbG9jazogY2MuVmVjMltdID0gW107XHJcblxyXG4gIGNoZWNrQW5EaWVtKCkge1xyXG4gICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJjaGVja1wiKVxyXG4gICAgdGhpcy5wYXVzZSA9IHRydWU7XHJcbiAgICBsZXQgc29kYXlhbiA9IDA7XHJcbiAgICBsZXQgSGFuZzogbnVtYmVyW10gPSBbXTtcclxuICAgIGxldCBDb3Q6IG51bWJlcltdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gICAgICAgIGlmICh0aGlzLlByZXBvc1tpXVtqXSA9PSAwKSBicmVhaztcclxuICAgICAgICBpZiAoaiA9PSA3KSB7XHJcbiAgICAgICAgICBzb2RheWFuICs9IDE7XHJcbiAgICAgICAgICAvLyB0aGlzLkFuTmdhbmcucHVzaChpKVxyXG4gICAgICAgICAgSGFuZy5wdXNoKGkpO1xyXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHRoaXMuUHJlcG9zW2ldW2tdID09IDEgJiZcclxuICAgICAgICAgICAgICB0aGlzLkJsb2NrQXJyYXlbaV1ba10ubmFtZSA9PSBcIkJsb2NrXCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgLy8gdGhpcy5CbG9ja0FycmF5W2ldW2tdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5Db2xvckFuRGllbVxyXG4gICAgICAgICAgICAgIHRoaXMuRGFBbltpXVtrXSA9IDE7XHJcbiAgICAgICAgICAgICAgdGhpcy5FbXB0eUJsb2NrQXJyYXlbaV1ba10uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQmxvY2tBcnJheVtpXVtrXSlcclxuICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IDEuMywgb3BhY2l0eTogMTAwIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuQmxvY2tBcnJheVtpXVtrXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuQmxvY2tBcnJheVtpXVtrXSA9IHRoaXMuRW1wdHlCbG9ja0FycmF5W2ldW2tdO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gICAgICAgIGlmICh0aGlzLlByZXBvc1tqXVtpXSA9PSAwKSBicmVhaztcclxuICAgICAgICBpZiAoaiA9PSA3KSB7XHJcbiAgICAgICAgICAvLyB0aGlzLkFuRG9jLnB1c2goaSlcclxuICAgICAgICAgIHNvZGF5YW4gKz0gMTtcclxuICAgICAgICAgIENvdC5wdXNoKGkpO1xyXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHRoaXMuUHJlcG9zW2tdW2ldID09IDEgJiZcclxuICAgICAgICAgICAgICB0aGlzLkJsb2NrQXJyYXlba11baV0ubmFtZSA9PSBcIkJsb2NrXCIgJiZcclxuICAgICAgICAgICAgICB0aGlzLkRhQW5ba11baV0gIT0gMVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB0aGlzLkVtcHR5QmxvY2tBcnJheVtrXVtpXS5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5CbG9ja0FycmF5W2tdW2ldKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMywgeyBzY2FsZTogMS4zLCBvcGFjaXR5OiAxMDAgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0FycmF5W2tdW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0FycmF5W2tdW2ldID0gdGhpcy5FbXB0eUJsb2NrQXJyYXlba11baV07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKEhhbmcsIENvdCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEhhbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICB0aGlzLlByZXBvc1tIYW5nW2ldXVtqXSA9IDA7XHJcbiAgICAgICAgdGhpcy5JbmRleENvbG9yQXJyYXlbSGFuZ1tpXV1bal0gPSAtMTtcclxuICAgICAgICB0aGlzLkRhQW5bSGFuZ1tpXV1bal0gPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gICAgICAgIHRoaXMuUHJlcG9zW2pdW0NvdFtpXV0gPSAwO1xyXG4gICAgICAgIHRoaXMuSW5kZXhDb2xvckFycmF5W2pdW0NvdFtpXV0gPSAtMTtcclxuICAgICAgICB0aGlzLkRhQW5bal1bQ290W2ldXSA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzb2RheWFuID49IDMpIHRoaXMuQ3JlYXRlTm92YSA9IHRydWU7XHJcbiAgICB0aGlzLkRpZW1MYWJlbC5nZXRDb21wb25lbnQoXCJEaWVtU29cIikuRGllbSArPSAxMCAqIHNvZGF5YW47XHJcbiAgICB0aGlzLkRpZW1MYWJlbC5nZXRDb21wb25lbnQoXCJEaWVtU29cIikuY29uZ0RpZW0oKTtcclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICBwcmVwb3M6IHRoaXMuUHJlcG9zLFxyXG4gICAgICBpbmRleGNvbG9yOiB0aGlzLkluZGV4Q29sb3JBcnJheSxcclxuICAgIH07XHJcbiAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXRhXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgIC8vICAgXCJkaWVtXCIsXHJcbiAgICAvLyAgIHRoaXMuRGllbUxhYmVsLmdldENvbXBvbmVudChcIkRpZW1Tb1wiKS5EaWVtXHJcbiAgICAvLyApO1xyXG4gICAgdGhpcy5zYXZlRGF0YShcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgdGhpcy5zYXZlRGF0YShcImRpZW1cIiwgdGhpcy5EaWVtTGFiZWwuZ2V0Q29tcG9uZW50KFwiRGllbVNvXCIpLkRpZW0pO1xyXG4gICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAuZGVsYXkoMC4zKVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXVzZSA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrU2V0YWJsZSgpIHtcclxuICAgIGZvciAobGV0IGEgaW4gdGhpcy5CbG9ja1JlbWFpbmluZ0Fycikge1xyXG4gICAgICB0aGlzLkJsb2NrUmVtYWluaW5nQXJyW2FdXHJcbiAgICAgICAgLmdldENvbXBvbmVudChcIkJsb2NrQ29udGFpblwiKVxyXG4gICAgICAgIC5jaGVja1NldGFibGUoXHJcbiAgICAgICAgICB0aGlzLkJsb2NrUmVtYWluaW5nQXJyW2FdLmdldENvbXBvbmVudChcIkJsb2NrQ29udGFpblwiKS5TaXplLFxyXG4gICAgICAgICAgdGhpcy5CbG9ja1JlbWFpbmluZ0FyclthXS5nZXRDb21wb25lbnQoXCJCbG9ja0NvbnRhaW5cIikuQmxhbmtcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5CbG9ja1JlbWFpbmluZ0FyclswXT09dW5kZWZpbmVkKVxyXG4gICAgY29uc29sZS5sb2codGhpcy5CbG9ja0F2YWlsYWJsZSk7XHJcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgIC5kZWxheSgwLjMpXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5CbG9ja0F2YWlsYWJsZSA9PSAwKSB7XHJcbiAgICAgICAgICAvL1RodWEgQ3VvY1xyXG4gICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5DbG9ha0xvc2UpLnRvKDIsIHsgb3BhY2l0eTogMTUwIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5kZWxheSgxKVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5Mb3NlSW1nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5Mb3NlSW1nLnNjYWxlID0gMTA7XHJcbiAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5Mb3NlSW1nKS50bygxLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5kZWxheSgwLjUpXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLk5HQnV0dG9uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5OR0J1dHRvbi5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLk5HQnV0dG9uKS50bygxLCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGh1YSBjdW9jXCIpO1xyXG4gICAgICAgICAgdGhpcy5Mb3NlID0gdHJ1ZTtcclxuICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIklzTG9zZVwiLCB0aGlzLkxvc2UpO1xyXG4gICAgICAgICAgdGhpcy5zYXZlRGF0YShcIklzTG9zZVwiLCB0aGlzLkxvc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG4gIHJlc2V0TG9zZUltZygpIHtcclxuICAgIHRoaXMuQ2xvYWtMb3NlLm9wYWNpdHkgPSAwO1xyXG4gICAgdGhpcy5Mb3NlSW1nLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5OR0J1dHRvbi5hY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIHVwZGF0ZSgpXHJcbiAgLy8ge1xyXG4gIC8vICAgY29uc29sZS5sb2codGhpcy5DYXJyeWluZ05vZGUpO1xyXG5cclxuICAvLyB9XHJcbiAgLy8gdGFvQmxvY2tOZ2F1TmhpZW4oKVxyXG4gIC8vIHtcclxuICAvLyAgICAgbGV0IHRlbXAgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNDApXHJcbiAgLy8gICAgIGlmKHRlbXA8NikgdGhpcy50YW9CbG9jaygpXHJcbiAgLy8gICAgIC8vIGlmKHRlbXA+PTYmJnRlbXA8MzApIHRoaXMudGFvRHVvQmxvY2soKVxyXG4gIC8vICAgICAvLyBpZih0ZW1wID49MzApIHRoaXMudGFvVHJpcGxlQmxvY2soKVxyXG4gIC8vIH1cclxuICAvLyB1cGRhdGUoKVxyXG4gIC8vIHtcclxuICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5EaWVtTGFiZWwuZ2V0Q29tcG9uZW50KFwiRGllbVNvXCIpLkRpZW0pXHJcbiAgLy8gICAgIC8vIHZhciBhID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JhJykpLnRlc3RcclxuICAvLyAgICAgLy8gY29uc29sZS5sb2coYSlcclxuICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5JbmRleENvbG9yQXJyYXkpXHJcbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuQmxvY2tBcnJheSlcclxuICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5QcmVwb3MpXHJcbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuQmxvY2tBdmFpbGFibGUpXHJcbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuRW1wdHlCbG9ja0FycmF5KVxyXG4gIC8vICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkJsb2NrUmVtYWluaW5nQXJyKVxyXG4gIC8vICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkJsb2NrUmVtYWluaW5nQXJyWzBdLnpJbmRleCArIFwiIFwiICsgdGhpcy5CbG9ja1JlbWFpbmluZ0FyclsxXS56SW5kZXgrIFwiIFwiICsgdGhpcy5CbG9ja1JlbWFpbmluZ0FyclsyXS56SW5kZXgpXHJcbiAgLy8gICAgIGlmKCF0aGlzLnBhdXNlKVxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuQmxvY2tBcnJheSlcclxuICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5DaGF5TGFpKVxyXG4gIC8vICAgICAgICAgaWYodGhpcy5DaGVjaylcclxuICAvLyAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPDg7aSsrKVxyXG4gIC8vICAgICAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7ajw4O2orKylcclxuICAvLyAgICAgICAgICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5QcmVwb3NbaV1bal09PTApIGJyZWFrXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBpZihqPT03KVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQW5OZ2FuZy5wdXNoKGkpXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrPTA7azw4O2srKylcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuUHJlcG9zW2ldW2tdPT0xJiZ0aGlzLkJsb2NrQXJyYXlbaV1ba10ubmFtZSA9PSBcIkJsb2NrXCIpXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQmxvY2tBcnJheVtpXVtrXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuQ29sb3JBbkRpZW1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPDg7aSsrKVxyXG4gIC8vICAgICAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7ajw4O2orKylcclxuICAvLyAgICAgICAgICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5QcmVwb3Nbal1baV09PTApIGJyZWFrXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBpZihqPT03KVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQW5Eb2MucHVzaChpKVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaz0wO2s8ODtrKyspXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLlByZXBvc1trXVtpXT09MSYmdGhpcy5CbG9ja0FycmF5W2tdW2ldLm5hbWUgPT0gXCJCbG9ja1wiKVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQXJyYXlba11baV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLkNvbG9yQW5EaWVtXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLkFuTmdhbmcubGVuZ3RoO2krKylcclxuICAvLyAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgICBmb3IobGV0IGo9MDtqPDg7aisrKVxyXG4gIC8vICAgICAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgICAgICAgaWYodGhpcy5QcmVwb3NbdGhpcy5Bbk5nYW5nW2ldXVtqXT09MClcclxuICAvLyAgICAgICAgICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5Yb2FBbk5nYW5nSW5kZXgucHVzaChpKVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrPTA7azw4O2srKylcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLkJsb2NrQXJyYXlbdGhpcy5Bbk5nYW5nW2ldXVtrXS5uYW1lID09IFwiQmxvY2tcIil0aGlzLkJsb2NrQXJyYXlbdGhpcy5Bbk5nYW5nW2ldXVtrXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5zZXRVcCh0aGlzLkJsb2NrQXJyYXlbdGhpcy5Bbk5nYW5nW2ldXVtrXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OdW1iZXIpXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLlhvYUFuTmdhbmdJbmRleC5sZW5ndGg7aSsrKVxyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgIHRoaXMuQW5OZ2FuZy5zcGxpY2UodGhpcy5Yb2FBbk5nYW5nSW5kZXhbaV0sMSlcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICAgIHRoaXMuWG9hQW5OZ2FuZ0luZGV4ID0gW11cclxuICAvLyAgICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5BbkRvYy5sZW5ndGg7aSsrKVxyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8ODtqKyspXHJcbiAgLy8gICAgICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgICAgICBpZih0aGlzLlByZXBvc1tqXVt0aGlzLkFuRG9jW2ldXT09MClcclxuICAvLyAgICAgICAgICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5Yb2FBbkRvY0luZGV4LnB1c2goaSlcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaz0wO2s8ODtrKyspXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5CbG9ja0FycmF5W2tdW3RoaXMuQW5Eb2NbaV1dLm5hbWUgPT0gXCJCbG9ja1wiKXRoaXMuQmxvY2tBcnJheVtrXVt0aGlzLkFuRG9jW2ldXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5zZXRVcCh0aGlzLkJsb2NrQXJyYXlba11bdGhpcy5BbkRvY1tpXV0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuTnVtYmVyKVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5Yb2FBbkRvY0luZGV4Lmxlbmd0aDtpKyspXHJcbiAgLy8gICAgICAgICB7XHJcbiAgLy8gICAgICAgICAgICAgdGhpcy5BbkRvYy5zcGxpY2UodGhpcy5Yb2FBbkRvY0luZGV4W2ldLDEpXHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgICB0aGlzLlhvYUFuRG9jSW5kZXggPSBbXVxyXG4gIC8vICAgICAgICAgaWYodGhpcy5DYXJyeWluZ05vZGUhPSBudWxsKVxyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5DYXJyeWluZ05vZGUuZ2V0Q29tcG9uZW50KFwiQmxvY2tDb250YWluXCIpLkJsb2NrQXJyYXkubGVuZ3RoO2krKylcclxuICAvLyAgICAgICAgICAgICB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIGlmKHRoaXMuQW5OZ2FuZy5pbmRleE9mKHRoaXMuQ2FycnlpbmdOb2RlLmdldENvbXBvbmVudChcIkJsb2NrQ29udGFpblwiKS5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLk5nYW5nKSE9LTF8fHRoaXMuQW5Eb2MuaW5kZXhPZih0aGlzLkNhcnJ5aW5nTm9kZS5nZXRDb21wb25lbnQoXCJCbG9ja0NvbnRhaW5cIikuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Eb2MpIT0tMSlcclxuICAvLyAgICAgICAgICAgICAgICAgdGhpcy5DYXJyeWluZ05vZGUuZ2V0Q29tcG9uZW50KFwiQmxvY2tDb250YWluXCIpLkJsb2NrQXJyYXlbaV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLkNvbG9yQW5EaWVtXHJcbiAgLy8gICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5DYXJyeWluZ05vZGUuZ2V0Q29tcG9uZW50KFwiQmxvY2tDb250YWluXCIpLkJsb2NrQXJyYXlbaV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLkNhcnJ5aW5nTm9kZS5nZXRDb21wb25lbnQoXCJCbG9ja0NvbnRhaW5cIikuQ29sb3JcclxuICAvLyAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkNhcnJ5aW5nTm9kZSlcclxuICAvLyAgICAgfVxyXG4gIC8vIH1cclxuICAvLyB1cGRhdGUoKVxyXG4gIC8vIHtcclxuICAvLyAgICAgY29uc29sZS5sb2codGhpcy5FbXB0eUJsb2NrQXJyYXkpXHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/FBInstantManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '751b9fwm91HgYZElRJUzrU0', 'FBInstantManager');
// Scripts/FBInstantManager.ts

"use strict";
// import GameController from './GameController';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LEADERBOARD_NAME = 'Hexa Leaderboard.';
var DATA_KEY = 'userData';
var GBInstantManager = /** @class */ (function () {
    // protected _gameController: GameController = cc
    //     .find('GameController')
    //     .getComponent('GameController');
    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    function GBInstantManager() {
        this.playerId = '';
    }
    GBInstantManager_1 = GBInstantManager;
    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    GBInstantManager.getInstance = function () {
        if (!GBInstantManager_1.instance) {
            GBInstantManager_1.instance = new GBInstantManager_1();
        }
        return GBInstantManager_1.instance;
    };
    GBInstantManager.prototype.getPlayerId = function () {
        if (!this.playerId) {
            try {
                this.playerId = FBInstant.player.getID();
            }
            catch (err) {
                this.playerId = 'localId';
            }
        }
        if (this.playerId)
            return this.playerId;
    };
    GBInstantManager.prototype.getPlayerPhoto = function () {
        if (this.playerId)
            return FBInstant.player.getPhoto();
    };
    GBInstantManager.prototype.getPlayerName = function () {
        if (this.playerId)
            return FBInstant.player.getName();
    };
    GBInstantManager.prototype.getShareImg = function (cb) {
        var _this = this;
        if (this.shareImg) {
            return cb(this.shareImg);
        }
        cc.resources.load('Base64/ShareImg', function (err, file) {
            _this.shareImg = file.text;
            cb(_this.shareImg);
        });
    };
    GBInstantManager.prototype.shareGame = function () {
        this.getShareImg(function (img) {
            var sharePlayerID = FBInstant.player.getID();
            FBInstant.shareAsync({
                intent: 'REQUEST',
                image: img,
                text: "Let's play hexa reach the star!",
                data: { sharePlayerID: sharePlayerID },
            });
        });
    };
    GBInstantManager.prototype.invitePlay = function (customData) {
        if (customData === void 0) { customData = { playerScore: 0, playerId: '' }; }
        var postInvite = function (leaderboardName) {
            FBInstant.getLeaderboardAsync(leaderboardName)
                .then(function (leaderboard) {
                return leaderboard.setScoreAsync(customData.playerScore, '');
            })
                .then(function () {
                return FBInstant.postSessionScoreAsync(customData.playerScore);
            })
                .then(function () {
                FBInstant.updateAsync({
                    action: 'LEADERBOARD',
                    name: leaderboardName,
                    text: FBInstant.player.getName() + " has been achieved " + customData.playerScore + " and invite you to play Hexa Reach The Star",
                })
                    .then(function () {
                    cc.log('send invite - update leaderboard');
                    FBInstant.context
                        .switchAsync('')
                        .then(function () {
                        console.log('switch back context success', FBInstant.context.getType(), FBInstant.context.getID());
                    })
                        .catch(function (err) {
                        console.log('switch back context err', err);
                    });
                })
                    .catch(function (err) {
                    console.log('errr', err);
                });
            })
                .catch(function (err) {
                console.log('err', err);
            });
        };
        var contextFunc = FBInstant.context.chooseAsync;
        var param = [];
        if (customData.playerId) {
            contextFunc = FBInstant.context.createAsync;
            param.push(customData.playerId);
        }
        contextFunc.apply(void 0, param).then(function () {
            var leaderboardName = LEADERBOARD_NAME + FBInstant.context.getID();
            postInvite(leaderboardName);
        })
            .catch(function (err) {
            if (err === void 0) { err = null; }
            console.log('fail?', err);
        });
    };
    GBInstantManager.prototype.getConnectedPlayers = function (cb) {
        try {
            FBInstant.player
                .getConnectedPlayersAsync()
                .then(function (players) {
                var data = players.map(function (p) {
                    return {
                        id: p.getID(),
                        name: p.getName(),
                        photo: p.getPhoto(),
                    };
                });
                cb(data);
            })
                .catch(function (err) {
                console.log('get list fail', err);
            });
        }
        catch (err) {
            cc.log('error:', err);
        }
    };
    GBInstantManager.prototype.setPlayerData = function (data, cb) {
        try {
            if (!FBInstant)
                return cb(null);
        }
        catch (err) {
            return cb(null);
        }
        var saveData = {};
        saveData[DATA_KEY] = data;
        FBInstant.player
            .setDataAsync(saveData)
            .then(function () {
            cb(null);
        })
            .catch(function (err) {
            cb(err);
        });
    };
    GBInstantManager.prototype.getPlayerData = function (cb) {
        try {
            if (!FBInstant)
                return cb(null, null);
        }
        catch (err) {
            return cb(null, null);
        }
        FBInstant.player
            .getDataAsync([DATA_KEY])
            .then(function (data) {
            cb(null, data[DATA_KEY]);
        })
            .catch(function (err) {
            cb(err, null);
        });
    };
    GBInstantManager.prototype.createShortcut = function (cb) {
        try {
            FBInstant.canCreateShortcutAsync().then(function (result) {
                if (result) {
                    FBInstant.createShortcutAsync()
                        .then(function () {
                        console.log('--- create shortcut success');
                        cb(true);
                    })
                        .catch(function () {
                        console.log('--- create shortcut fail');
                        cb(false);
                    });
                }
                cb(false);
            });
        }
        catch (exc) {
            console.error(exc);
            cb(false);
        }
    };
    GBInstantManager.prototype.subcribeBot = function (cb) {
        try {
            FBInstant.player
                .canSubscribeBotAsync()
                .then(function (result) {
                if (result) {
                    FBInstant.player
                        .subscribeBotAsync()
                        .then(function () {
                        console.log('--- subcribe bot success');
                        cb(true);
                    })
                        .catch(function (e) {
                        console.log('--- subcribe bot fail', e);
                        cb(false);
                    });
                }
                else {
                    cb(false);
                }
            })
                .catch(function (err) {
                console.log('can not subcribe bot', err);
                cb(false);
            });
        }
        catch (exc) {
            console.log(exc);
            cb(false);
        }
    };
    GBInstantManager.prototype.getLocale = function () {
        return FBInstant.getLocale();
    };
    GBInstantManager.prototype.setSessionData = function (data) {
        FBInstant.setSessionData(data);
    };
    GBInstantManager.prototype.inviteGame = function (playerScore) {
        if (playerScore === void 0) { playerScore = 100; }
        this.getShareImg(function (img) {
            var invitorPlayerID = FBInstant.player.getID();
            FBInstant.inviteAsync({
                image: img,
                text: {
                    default: FBInstant.player.getName() + " has been achieved " + playerScore + " and invite you to play Hexa Reach The Star",
                },
                data: { invitorPlayerID: invitorPlayerID },
            })
                .then(function () {
                console.log('--- send invite game success');
            })
                .catch(function (err) {
                console.log('--- send invite game fail', err);
            });
        });
    };
    GBInstantManager.prototype.playWithFriend = function () {
        return FBInstant.context.chooseAsync();
    };
    GBInstantManager.prototype.sendInviteAfterPlay = function (playerScore) {
        if (FBInstant.context.getType() !== 'SOLO') {
            var playerName_1 = FBInstant.player.getName();
            var leaderBoardContextName_1 = LEADERBOARD_NAME + FBInstant.context.getID();
            this.getShareImg(function (img) {
                FBInstant.updateAsync({
                    action: 'CUSTOM',
                    cta: 'PLAY NOW',
                    text: {
                        default: playerName_1 + " has " + playerScore + " when playing Hexa: Reach the Start",
                    },
                    image: img,
                    template: 'play_turn',
                    strategy: 'IMMEDIATE',
                    notification: 'NO_PUSH',
                }).then(function () {
                    console.log('Send invite player done');
                });
            });
            FBInstant.postSessionScoreAsync(playerScore).then(function () {
                console.log('Post Session score done');
                FBInstant.getLeaderboardAsync(leaderBoardContextName_1)
                    .then(function (leaderboard) {
                    return leaderboard.setScoreAsync(playerScore);
                })
                    .then(function () {
                    console.log('Update score leaderboard done');
                });
            });
        }
    };
    GBInstantManager.prototype.getLeaderBoard = function () {
        return new Promise(function (resolve) {
            FBInstant.getLeaderboardAsync(LEADERBOARD_NAME + FBInstant.context.getID())
                .then(function (leaderboard) {
                leaderboard.getEntriesAsync().then(function (data) {
                    resolve({
                        response: true,
                        leaderBoard: data,
                    });
                });
            })
                .catch(function (err) {
                resolve({
                    response: false,
                    leaderBoard: '',
                    err: err,
                });
            });
        });
    };
    var GBInstantManager_1;
    GBInstantManager = GBInstantManager_1 = __decorate([
        ccclass
    ], GBInstantManager);
    return GBInstantManager;
}());
exports.default = GBInstantManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRkJJbnN0YW50TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWlEOzs7Ozs7OztBQUUzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDO0FBQzdDLElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUc1QjtJQU1JLGlEQUFpRDtJQUNqRCw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBRXZDOzs7T0FHRztJQUNIO1FBVlEsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQVVDLENBQUM7eUJBZFAsZ0JBQWdCO0lBZ0JqQzs7Ozs7T0FLRztJQUNXLDRCQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLGtCQUFnQixDQUFDLFFBQVEsRUFBRTtZQUM1QixrQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQkFBZ0IsRUFBRSxDQUFDO1NBQ3REO1FBRUQsT0FBTyxrQkFBZ0IsQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVNLHNDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSTtnQkFDQSxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDNUM7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDVixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQzthQUM3QjtTQUNKO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUM1QyxDQUFDO0lBRU0seUNBQWMsR0FBckI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFF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QWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gJy4vR2FtZUNvbnRyb2xsZXInO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IExFQURFUkJPQVJEX05BTUUgPSAnSGV4YSBMZWFkZXJib2FyZC4nO1xyXG5jb25zdCBEQVRBX0tFWSA9ICd1c2VyRGF0YSc7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHQkluc3RhbnRNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBHQkluc3RhbnRNYW5hZ2VyO1xyXG5cclxuICAgIHByaXZhdGUgc2hhcmVJbWc7XHJcbiAgICBwcml2YXRlIHBsYXllcklkID0gJyc7XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIF9nYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBjY1xyXG4gICAgLy8gICAgIC5maW5kKCdHYW1lQ29udHJvbGxlcicpXHJcbiAgICAvLyAgICAgLmdldENvbXBvbmVudCgnR2FtZUNvbnRyb2xsZXInKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBTaW5nbGV0b24ncyBjb25zdHJ1Y3RvciBzaG91bGQgYWx3YXlzIGJlIHByaXZhdGUgdG8gcHJldmVudCBkaXJlY3RcclxuICAgICAqIGNvbnN0cnVjdGlvbiBjYWxscyB3aXRoIHRoZSBgbmV3YCBvcGVyYXRvci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc3RhdGljIG1ldGhvZCB0aGF0IGNvbnRyb2xzIHRoZSBhY2Nlc3MgdG8gdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGltcGxlbWVudGF0aW9uIGxldCB5b3Ugc3ViY2xhc3MgdGhlIFNpbmdsZXRvbiBjbGFzcyB3aGlsZSBrZWVwaW5nXHJcbiAgICAgKiBqdXN0IG9uZSBpbnN0YW5jZSBvZiBlYWNoIHN1YmNsYXNzIGFyb3VuZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBHQkluc3RhbnRNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoIUdCSW5zdGFudE1hbmFnZXIuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgR0JJbnN0YW50TWFuYWdlci5pbnN0YW5jZSA9IG5ldyBHQkluc3RhbnRNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gR0JJbnN0YW50TWFuYWdlci5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGxheWVySWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllcklkKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcklkID0gRkJJbnN0YW50LnBsYXllci5nZXRJRCgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVySWQgPSAnbG9jYWxJZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcklkKSByZXR1cm4gdGhpcy5wbGF5ZXJJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGxheWVyUGhvdG8oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVySWQpIHJldHVybiBGQkluc3RhbnQucGxheWVyLmdldFBob3RvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBsYXllck5hbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVySWQpIHJldHVybiBGQkluc3RhbnQucGxheWVyLmdldE5hbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNoYXJlSW1nKGNiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hhcmVJbWcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNiKHRoaXMuc2hhcmVJbWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoJ0Jhc2U2NC9TaGFyZUltZycsIChlcnIsIGZpbGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaGFyZUltZyA9IGZpbGUudGV4dDtcclxuICAgICAgICAgICAgY2IodGhpcy5zaGFyZUltZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNoYXJlR2FtZSgpIHtcclxuICAgICAgICB0aGlzLmdldFNoYXJlSW1nKChpbWcpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2hhcmVQbGF5ZXJJRCA9IEZCSW5zdGFudC5wbGF5ZXIuZ2V0SUQoKTtcclxuXHJcbiAgICAgICAgICAgIEZCSW5zdGFudC5zaGFyZUFzeW5jKHtcclxuICAgICAgICAgICAgICAgIGludGVudDogJ1JFUVVFU1QnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiTGV0J3MgcGxheSBoZXhhIHJlYWNoIHRoZSBzdGFyIVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBzaGFyZVBsYXllcklEIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnZpdGVQbGF5KGN1c3RvbURhdGEgPSB7IHBsYXllclNjb3JlOiAwLCBwbGF5ZXJJZDogJycgfSkge1xyXG4gICAgICAgIGNvbnN0IHBvc3RJbnZpdGUgPSAobGVhZGVyYm9hcmROYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIEZCSW5zdGFudC5nZXRMZWFkZXJib2FyZEFzeW5jKGxlYWRlcmJvYXJkTmFtZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChsZWFkZXJib2FyZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWFkZXJib2FyZC5zZXRTY29yZUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21EYXRhLnBsYXllclNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGQkluc3RhbnQucG9zdFNlc3Npb25TY29yZUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21EYXRhLnBsYXllclNjb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRkJJbnN0YW50LnVwZGF0ZUFzeW5jKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnTEVBREVSQk9BUkQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBsZWFkZXJib2FyZE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGAke0ZCSW5zdGFudC5wbGF5ZXIuZ2V0TmFtZSgpfSBoYXMgYmVlbiBhY2hpZXZlZCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRGF0YS5wbGF5ZXJTY29yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGFuZCBpbnZpdGUgeW91IHRvIHBsYXkgSGV4YSBSZWFjaCBUaGUgU3RhcmAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKCdzZW5kIGludml0ZSAtIHVwZGF0ZSBsZWFkZXJib2FyZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRkJJbnN0YW50LmNvbnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3dpdGNoQXN5bmMoJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzd2l0Y2ggYmFjayBjb250ZXh0IHN1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRkJJbnN0YW50LmNvbnRleHQuZ2V0VHlwZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRkJJbnN0YW50LmNvbnRleHQuZ2V0SUQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N3aXRjaCBiYWNrIGNvbnRleHQgZXJyJywgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJyJywgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyJywgZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBjb250ZXh0RnVuYyA9IEZCSW5zdGFudC5jb250ZXh0LmNob29zZUFzeW5jO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtID0gW107XHJcblxyXG4gICAgICAgIGlmIChjdXN0b21EYXRhLnBsYXllcklkKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHRGdW5jID0gRkJJbnN0YW50LmNvbnRleHQuY3JlYXRlQXN5bmM7XHJcbiAgICAgICAgICAgIHBhcmFtLnB1c2goY3VzdG9tRGF0YS5wbGF5ZXJJZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250ZXh0RnVuYyguLi5wYXJhbSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVhZGVyYm9hcmROYW1lID1cclxuICAgICAgICAgICAgICAgICAgICBMRUFERVJCT0FSRF9OQU1FICsgRkJJbnN0YW50LmNvbnRleHQuZ2V0SUQoKTtcclxuICAgICAgICAgICAgICAgIHBvc3RJbnZpdGUobGVhZGVyYm9hcmROYW1lKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIgPSBudWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmFpbD8nLCBlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29ubmVjdGVkUGxheWVycyhjYikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIEZCSW5zdGFudC5wbGF5ZXJcclxuICAgICAgICAgICAgICAgIC5nZXRDb25uZWN0ZWRQbGF5ZXJzQXN5bmMoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHBsYXllcnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcGxheWVycy5tYXAoKHApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwLmdldElEKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwLmdldE5hbWUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvOiBwLmdldFBob3RvKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBsaXN0IGZhaWwnLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZygnZXJyb3I6JywgZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFBsYXllckRhdGEoZGF0YSwgY2IpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIUZCSW5zdGFudCkgcmV0dXJuIGNiKG51bGwpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzYXZlRGF0YSA9IHt9O1xyXG4gICAgICAgIHNhdmVEYXRhW0RBVEFfS0VZXSA9IGRhdGE7XHJcblxyXG4gICAgICAgIEZCSW5zdGFudC5wbGF5ZXJcclxuICAgICAgICAgICAgLnNldERhdGFBc3luYyhzYXZlRGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IobnVsbCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYihlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGxheWVyRGF0YShjYikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghRkJJbnN0YW50KSByZXR1cm4gY2IobnVsbCwgbnVsbCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCBudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEZCSW5zdGFudC5wbGF5ZXJcclxuICAgICAgICAgICAgLmdldERhdGFBc3luYyhbREFUQV9LRVldKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IobnVsbCwgZGF0YVtEQVRBX0tFWV0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IoZXJyLCBudWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZVNob3J0Y3V0KGNiKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgRkJJbnN0YW50LmNhbkNyZWF0ZVNob3J0Y3V0QXN5bmMoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBGQkluc3RhbnQuY3JlYXRlU2hvcnRjdXRBc3luYygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0gY3JlYXRlIHNob3J0Y3V0IHN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLSBjcmVhdGUgc2hvcnRjdXQgZmFpbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNiKGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXhjKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXhjKTtcclxuICAgICAgICAgICAgY2IoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3ViY3JpYmVCb3QoY2IpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBGQkluc3RhbnQucGxheWVyXHJcbiAgICAgICAgICAgICAgICAuY2FuU3Vic2NyaWJlQm90QXN5bmMoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRkJJbnN0YW50LnBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZUJvdEFzeW5jKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tIHN1YmNyaWJlIGJvdCBzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLSBzdWJjcmliZSBib3QgZmFpbCcsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2FuIG5vdCBzdWJjcmliZSBib3QnLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNiKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGV4Yykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleGMpO1xyXG4gICAgICAgICAgICBjYihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2NhbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIEZCSW5zdGFudC5nZXRMb2NhbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2Vzc2lvbkRhdGEoZGF0YSkge1xyXG4gICAgICAgIEZCSW5zdGFudC5zZXRTZXNzaW9uRGF0YShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW52aXRlR2FtZShwbGF5ZXJTY29yZSA9IDEwMCkge1xyXG4gICAgICAgIHRoaXMuZ2V0U2hhcmVJbWcoKGltZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbnZpdG9yUGxheWVySUQgPSBGQkluc3RhbnQucGxheWVyLmdldElEKCk7XHJcblxyXG4gICAgICAgICAgICBGQkluc3RhbnQuaW52aXRlQXN5bmMoe1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBgJHtGQkluc3RhbnQucGxheWVyLmdldE5hbWUoKX0gaGFzIGJlZW4gYWNoaWV2ZWQgJHtwbGF5ZXJTY29yZX0gYW5kIGludml0ZSB5b3UgdG8gcGxheSBIZXhhIFJlYWNoIFRoZSBTdGFyYCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGludml0b3JQbGF5ZXJJRCB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0gc2VuZCBpbnZpdGUgZ2FtZSBzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tIHNlbmQgaW52aXRlIGdhbWUgZmFpbCcsIGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheVdpdGhGcmllbmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIEZCSW5zdGFudC5jb250ZXh0LmNob29zZUFzeW5jKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbmRJbnZpdGVBZnRlclBsYXkocGxheWVyU2NvcmUpIHtcclxuICAgICAgICBpZiAoRkJJbnN0YW50LmNvbnRleHQuZ2V0VHlwZSgpICE9PSAnU09MTycpIHtcclxuICAgICAgICAgICAgbGV0IHBsYXllck5hbWUgPSBGQkluc3RhbnQucGxheWVyLmdldE5hbWUoKTtcclxuICAgICAgICAgICAgbGV0IGxlYWRlckJvYXJkQ29udGV4dE5hbWUgPVxyXG4gICAgICAgICAgICAgICAgTEVBREVSQk9BUkRfTkFNRSArIEZCSW5zdGFudC5jb250ZXh0LmdldElEKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldFNoYXJlSW1nKChpbWcpID0+IHtcclxuICAgICAgICAgICAgICAgIEZCSW5zdGFudC51cGRhdGVBc3luYyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnQ1VTVE9NJyxcclxuICAgICAgICAgICAgICAgICAgICBjdGE6ICdQTEFZIE5PVycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBgJHtwbGF5ZXJOYW1lfSBoYXMgJHtwbGF5ZXJTY29yZX0gd2hlbiBwbGF5aW5nIEhleGE6IFJlYWNoIHRoZSBTdGFydGAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogaW1nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAncGxheV90dXJuJyxcclxuICAgICAgICAgICAgICAgICAgICBzdHJhdGVneTogJ0lNTUVESUFURScsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uOiAnTk9fUFVTSCcsXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VuZCBpbnZpdGUgcGxheWVyIGRvbmUnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIEZCSW5zdGFudC5wb3N0U2Vzc2lvblNjb3JlQXN5bmMocGxheWVyU2NvcmUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Bvc3QgU2Vzc2lvbiBzY29yZSBkb25lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgRkJJbnN0YW50LmdldExlYWRlcmJvYXJkQXN5bmMobGVhZGVyQm9hcmRDb250ZXh0TmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAobGVhZGVyYm9hcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlYWRlcmJvYXJkLnNldFNjb3JlQXN5bmMocGxheWVyU2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXBkYXRlIHNjb3JlIGxlYWRlcmJvYXJkIGRvbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMZWFkZXJCb2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgRkJJbnN0YW50LmdldExlYWRlcmJvYXJkQXN5bmMoXHJcbiAgICAgICAgICAgICAgICBMRUFERVJCT0FSRF9OQU1FICsgRkJJbnN0YW50LmNvbnRleHQuZ2V0SUQoKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAudGhlbigobGVhZGVyYm9hcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZWFkZXJib2FyZC5nZXRFbnRyaWVzQXN5bmMoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWFkZXJCb2FyZDogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWFkZXJCb2FyZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
