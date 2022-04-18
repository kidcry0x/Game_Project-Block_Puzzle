
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