"use strict";
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