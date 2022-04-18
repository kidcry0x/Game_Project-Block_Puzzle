
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