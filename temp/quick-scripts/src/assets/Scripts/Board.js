"use strict";
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