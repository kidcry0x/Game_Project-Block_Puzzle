
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