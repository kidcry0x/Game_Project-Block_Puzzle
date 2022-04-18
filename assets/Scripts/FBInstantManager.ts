// import GameController from './GameController';

const { ccclass, property } = cc._decorator;

const LEADERBOARD_NAME = 'Hexa Leaderboard.';
const DATA_KEY = 'userData';

@ccclass
export default class GBInstantManager {
    private static instance: GBInstantManager;

    private shareImg;
    private playerId = '';

    // protected _gameController: GameController = cc
    //     .find('GameController')
    //     .getComponent('GameController');

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() {}

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): GBInstantManager {
        if (!GBInstantManager.instance) {
            GBInstantManager.instance = new GBInstantManager();
        }

        return GBInstantManager.instance;
    }

    public getPlayerId() {
        if (!this.playerId) {
            try {
                this.playerId = FBInstant.player.getID();
            } catch (err) {
                this.playerId = 'localId';
            }
        }

        if (this.playerId) return this.playerId;
    }

    public getPlayerPhoto() {
        if (this.playerId) return FBInstant.player.getPhoto();
    }

    public getPlayerName() {
        if (this.playerId) return FBInstant.player.getName();
    }

    private getShareImg(cb) {
        if (this.shareImg) {
            return cb(this.shareImg);
        }

        cc.resources.load('Base64/ShareImg', (err, file) => {
            this.shareImg = file.text;
            cb(this.shareImg);
        });
    }

    public shareGame() {
        this.getShareImg((img) => {
            const sharePlayerID = FBInstant.player.getID();

            FBInstant.shareAsync({
                intent: 'REQUEST',
                image: img,
                text: "Let's play hexa reach the star!",
                data: { sharePlayerID },
            });
        });
    }

    public invitePlay(customData = { playerScore: 0, playerId: '' }) {
        const postInvite = (leaderboardName) => {
            FBInstant.getLeaderboardAsync(leaderboardName)
                .then((leaderboard) => {
                    return leaderboard.setScoreAsync(
                        customData.playerScore,
                        ''
                    );
                })
                .then(() => {
                    return FBInstant.postSessionScoreAsync(
                        customData.playerScore
                    );
                })
                .then(() => {
                    FBInstant.updateAsync({
                        action: 'LEADERBOARD',
                        name: leaderboardName,
                        text: `${FBInstant.player.getName()} has been achieved ${
                            customData.playerScore
                        } and invite you to play Hexa Reach The Star`,
                    })
                        .then(() => {
                            cc.log('send invite - update leaderboard');
                            FBInstant.context
                                .switchAsync('')
                                .then(() => {
                                    console.log(
                                        'switch back context success',
                                        FBInstant.context.getType(),
                                        FBInstant.context.getID()
                                    );
                                })
                                .catch((err) => {
                                    console.log('switch back context err', err);
                                });
                        })
                        .catch((err) => {
                            console.log('errr', err);
                        });
                })
                .catch((err) => {
                    console.log('err', err);
                });
        };

        let contextFunc = FBInstant.context.chooseAsync;
        const param = [];

        if (customData.playerId) {
            contextFunc = FBInstant.context.createAsync;
            param.push(customData.playerId);
        }

        contextFunc(...param)
            .then(() => {
                const leaderboardName =
                    LEADERBOARD_NAME + FBInstant.context.getID();
                postInvite(leaderboardName);
            })
            .catch((err = null) => {
                console.log('fail?', err);
            });
    }

    public getConnectedPlayers(cb) {
        try {
            FBInstant.player
                .getConnectedPlayersAsync()
                .then((players) => {
                    const data = players.map((p) => {
                        return {
                            id: p.getID(),
                            name: p.getName(),
                            photo: p.getPhoto(),
                        };
                    });

                    cb(data);
                })
                .catch((err) => {
                    console.log('get list fail', err);
                });
        } catch (err) {
            cc.log('error:', err);
        }
    }

    public setPlayerData(data, cb) {
        try {
            if (!FBInstant) return cb(null);
        } catch (err) {
            return cb(null);
        }

        const saveData = {};
        saveData[DATA_KEY] = data;

        FBInstant.player
            .setDataAsync(saveData)
            .then(() => {
                cb(null);
            })
            .catch((err) => {
                cb(err);
            });
    }

    public getPlayerData(cb) {
        try {
            if (!FBInstant) return cb(null, null);
        } catch (err) {
            return cb(null, null);
        }

        FBInstant.player
            .getDataAsync([DATA_KEY])
            .then((data) => {
                cb(null, data[DATA_KEY]);
            })
            .catch((err) => {
                cb(err, null);
            });
    }

    public createShortcut(cb) {
        try {
            FBInstant.canCreateShortcutAsync().then((result) => {
                if (result) {
                    FBInstant.createShortcutAsync()
                        .then(() => {
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
        } catch (exc) {
            console.error(exc);
            cb(false);
        }
    }

    public subcribeBot(cb) {
        try {
            FBInstant.player
                .canSubscribeBotAsync()
                .then((result) => {
                    if (result) {
                        FBInstant.player
                            .subscribeBotAsync()
                            .then(() => {
                                console.log('--- subcribe bot success');
                                cb(true);
                            })
                            .catch(function (e) {
                                console.log('--- subcribe bot fail', e);
                                cb(false);
                            });
                    } else {
                        cb(false);
                    }
                })
                .catch((err) => {
                    console.log('can not subcribe bot', err);
                    cb(false);
                });
        } catch (exc) {
            console.log(exc);
            cb(false);
        }
    }

    public getLocale() {
        return FBInstant.getLocale();
    }

    public setSessionData(data) {
        FBInstant.setSessionData(data);
    }

    public inviteGame(playerScore = 100) {
        this.getShareImg((img) => {
            const invitorPlayerID = FBInstant.player.getID();

            FBInstant.inviteAsync({
                image: img,
                text: {
                    default: `${FBInstant.player.getName()} has been achieved ${playerScore} and invite you to play Hexa Reach The Star`,
                },
                data: { invitorPlayerID },
            })
                .then(() => {
                    console.log('--- send invite game success');
                })
                .catch((err) => {
                    console.log('--- send invite game fail', err);
                });
        });
    }

    public playWithFriend() {
        return FBInstant.context.chooseAsync();
    }

    public sendInviteAfterPlay(playerScore) {
        if (FBInstant.context.getType() !== 'SOLO') {
            let playerName = FBInstant.player.getName();
            let leaderBoardContextName =
                LEADERBOARD_NAME + FBInstant.context.getID();

            this.getShareImg((img) => {
                FBInstant.updateAsync({
                    action: 'CUSTOM',
                    cta: 'PLAY NOW',
                    text: {
                        default: `${playerName} has ${playerScore} when playing Hexa: Reach the Start`,
                    },
                    image: img,
                    template: 'play_turn',
                    strategy: 'IMMEDIATE',
                    notification: 'NO_PUSH',
                }).then(function () {
                    console.log('Send invite player done');
                });
            });

            FBInstant.postSessionScoreAsync(playerScore).then(() => {
                console.log('Post Session score done');

                FBInstant.getLeaderboardAsync(leaderBoardContextName)
                    .then(function (leaderboard) {
                        return leaderboard.setScoreAsync(playerScore);
                    })
                    .then(() => {
                        console.log('Update score leaderboard done');
                    });
            });
        }
    }

    public getLeaderBoard() {
        return new Promise((resolve) => {
            FBInstant.getLeaderboardAsync(
                LEADERBOARD_NAME + FBInstant.context.getID()
            )
                .then((leaderboard) => {
                    leaderboard.getEntriesAsync().then((data) => {
                        resolve({
                            response: true,
                            leaderBoard: data,
                        });
                    });
                })
                .catch((err) => {
                    resolve({
                        response: false,
                        leaderBoard: '',
                        err,
                    });
                });
        });
    }
}
