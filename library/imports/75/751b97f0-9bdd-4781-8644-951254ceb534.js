"use strict";
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