
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