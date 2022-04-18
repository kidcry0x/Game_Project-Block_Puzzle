
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