
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