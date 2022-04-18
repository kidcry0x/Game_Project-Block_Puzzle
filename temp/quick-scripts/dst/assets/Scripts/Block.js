
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