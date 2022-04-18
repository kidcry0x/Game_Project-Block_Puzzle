
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BlockContain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42b0fC/fxZHGK6h4XBhEwSs', 'BlockContain');
// Scripts/BlockContain.ts

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
var BlockContain = /** @class */ (function (_super) {
    __extends(BlockContain, _super);
    function BlockContain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Block = null;
        _this.Board = null;
        _this.HoldingBlockContainer = null;
        // VTBlock: cc.Vec2[] = [cc.v2(-36,0),cc.v2(0,36),cc.v2(36,0),cc.v2(0,-36)]
        _this.BlockArray = [];
        _this.CoTheDat = false;
        _this.TouchStartLocation = null;
        _this.TouchEndLocation = null;
        _this.Index = 0;
        _this.Color = null;
        _this.BlockCount = 0;
        _this.IndexColor = -1;
        _this.TypeNumber = 0;
        _this.DiemLabel = null;
        _this.Size = null;
        _this.Blank = null;
        _this.IndexInQueue = -1;
        _this.Setable = true;
        _this.IndexType = -1;
        _this.IndexInType = -1;
        _this.BlockBoard = null;
        return _this;
        // update(dt)
        // {
        //     console.log(this.Board.getComponent("Board").BlockArray[this.BlockArray[0].getComponent("Block").Ngang][this.BlockArray[0].getComponent("Block").Doc])
        //     console.log(this.BlockArray[0].getComponent("Block").Ngang)
        //     console.log(this.BlockArray[0].getComponent("Block").Doc)
        //     console.log(this.Board.getComponent("Board").EmptyBlockArray[1][2])
        // }
        // rotate()
        // {
        //     this.Index ++
        //     for(let i=0;i<2;i++)
        //     {
        //         cc.tween(this.BlockArray[i]).to(0.1,{x: this.VTBlock[(this.Index+i*2)%4].x,y: this.VTBlock[(this.Index+i*2)%4].y}).start()
        //     }
        // }
    }
    BlockContain.prototype.onLoad = function () {
        this.Board = cc.find('Canvas/Screen2/Board');
        this.BlockBoard = cc.find('Canvas/Screen2/Board/BlockBoard');
        this.node.scale = 0.4;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        // this.Board.on("check",(()=>{
        //     this.checkSetable(this.Size,this.Blank)
        // }) ,this)
        this.HoldingBlockContainer = cc.find('Canvas/Screen2/BlockHoldingContainer');
        this.DiemLabel = cc.find('Canvas/Screen2/BangDiem/ScoreLabel/Score');
        // for(let i=0;i<2;i++)
        // {
        //     this.taoBlock(2*i)
        // }
        //Tao block ngau nhien
    };
    BlockContain.prototype.khoitao = function (type, colorindex, indexintype) {
        if (indexintype === void 0) { indexintype = -1; }
        if (type == -1) {
            var temp = Math.floor(Math.random() * 100);
            {
                this.IndexType = temp;
                if (temp < 10)
                    this.taoBlockNgang(colorindex, indexintype);
                else if (temp < 20)
                    this.taoBlockDoc(colorindex, indexintype);
                else if (temp < 30)
                    this.taoBlockNho1(-1);
                else if (temp < 50)
                    this.taoBlockLNganNam(colorindex, indexintype);
                else if (temp < 65)
                    this.taoBlockLNganDung(colorindex, indexintype);
                else if (temp < 80)
                    this.taoBlockLVuongNho(colorindex, indexintype);
                else if (temp < 90)
                    this.taoBlockVuongTo(colorindex, indexintype);
                else
                    this.taoBlockNho1(-1);
                console.log("1 khoi da duoc tao");
                console.log("Thong tin khoi:" + this.IndexColor + " " + this.IndexInType);
            }
        }
        else {
            var temp = type;
            if (temp < 10)
                this.taoBlockNgang(colorindex, indexintype);
            else if (temp < 20)
                this.taoBlockDoc(colorindex, indexintype);
            else if (temp < 30)
                this.taoBlockNho1(colorindex);
            else if (temp < 50)
                this.taoBlockLNganNam(colorindex, indexintype);
            else if (temp < 65)
                this.taoBlockLNganDung(colorindex, indexintype);
            else if (temp < 80)
                this.taoBlockLVuongNho(colorindex, indexintype);
            else if (temp < 90)
                this.taoBlockVuongTo(colorindex, indexintype);
            else
                this.taoBlockNho1(colorindex);
        }
    };
    BlockContain.prototype.blockStorage = function () {
        // console.log("số hàng là:"+ this.Size.x)
        var name = "blockdata" + (this.IndexInQueue).toString();
        console.log(name);
        var datablock = {
            recall: true,
            indextype: this.IndexType,
            indexcolor: this.IndexColor,
            indexintype: this.IndexInType,
            indexinqueue: this.IndexInQueue,
            sizeX: this.Size.x,
            sizeY: this.Size.y,
            blank: this.Blank
        };
        this.Board.getComponent("Board").saveData(name, JSON.stringify(datablock));
        // cc.sys.localStorage.setItem(name, JSON.stringify(datablock))
    };
    BlockContain.prototype.onTouchStart = function (event) {
        if (this.Board.getComponent("Board").IsNewbie) {
            this.unschedule(this.Board.getComponent("Board").Hand);
            this.Board.getComponent("Board").Hand.active = false;
        }
        // this.TouchStartLocation = event.getLocation()
        this.node.scale = 1;
        this.Board.getComponent("Board").ColorAnDiem = this.Board.getComponent("Board").ColorArray[this.IndexColor + 6];
        // let temp = cc.instantiate(this.node)
        // this.node.addChild(temp)
        // temp.setPosition(cc.v2(0,200))
        // this.node.removeFromParent()
        // this.HoldingBlockContainer.addChild(this.node)
        console.log(this.Board.getComponent("Board").zIndex);
        this.Board.getComponent("Board").zIndex += 1;
        this.node.zIndex = this.Board.getComponent("Board").zIndex;
        this.BlockBoard.sortAllChildren();
        this.Board.getComponent("Board").CarryingNode = this.node;
    };
    BlockContain.prototype.onTouchMove = function (event) {
        var touch = event.getTouches()[0];
        var touch_pos = touch.getLocation();
        var standard_touch_pos = this.Board.convertToNodeSpaceAR(touch_pos);
        this.node.setPosition(standard_touch_pos);
        // for(let i =0;i<this.BlockArray.length;i++)
        // {
        //     if(this.BlockArray[i].getComponent("Block").CoTheDat&&this.BlockArray[i].getComponent("Block").Ngang!=null&&this.BlockArray[i].getComponent("Block").Doc!=null)
        //     this.CoTheDat = true
        //     else
        //     {
        //         this.CoTheDat = false
        //         break
        //     }
        // }
        // this.Board.getComponent("Board").Check = this.CoTheDat
    };
    BlockContain.prototype.onTouchEnd = function (event) {
        // this.TouchEndLocation = event.getLocation()
        // console.log(this.node.getPosition())
        for (var i = 0; i < this.BlockArray.length; i++) {
            if (this.BlockArray[i].getComponent("Block").CoTheDat && this.BlockArray[i].getComponent("Block").Ngang != null && this.BlockArray[i].getComponent("Block").Doc != null)
                this.CoTheDat = true;
            else {
                this.CoTheDat = false;
                break;
            }
        }
        if (this.CoTheDat) {
            for (var i = 0; i < this.BlockArray.length; i++) {
                var n = this.BlockArray[i].getComponent("Block").Ngang;
                var d = this.BlockArray[i].getComponent("Block").Doc;
                // this.Board.getComponent("Board").BlockArray[this.BlockArray[i].getComponent("Block").Ngang][this.BlockArray[i].getComponent("Block").Doc].destroy()
                this.Board.getComponent("Board").BlockArray[n][d] = this.BlockArray[i];
                this.Board.getComponent("Board").EmptyBlockArray[n][d].scale = 0;
                this.Board.getComponent("Board").Prepos[n][d] = 1;
                this.Board.getComponent("Board").IndexColorArray[n][d] = this.IndexColor;
                // this.Board.getComponent("Board").EmptyBlockArray[n][d].active = false
                // this.Board.addChild(this.BlockArray.shift())
                this.BlockArray[i].setPosition(this.Board.getComponent("Board").VTNgang[this.BlockArray[i].getComponent("Block").Doc], this.Board.getComponent("Board").VTDoc[this.BlockArray[i].getComponent("Block").Ngang]);
                this.node.setPosition(0, 0);
                // this.Board.getComponent("Board").taoBlock()
                // console.log(this.BlockArray[i].x,this.BlockArray[i].y)
                this.turnOffListener();
            }
            if (!this.Board.getComponent("Board").IsNewbie) {
                var name = "blockdata" + this.IndexInQueue.toString();
                // console.log(name)
                // let obj = JSON.parse(cc.sys.localStorage.getItem(name))
                var obj = null;
                this.Board.getComponent("Board").recallMemory(obj, name);
                // console.log(obj)
                obj.recall = !obj.recall;
                // cc.sys.localStorage.setItem(name, JSON.stringify(obj))
                this.Board.getComponent("Board").saveData(name, JSON.stringify(obj));
            }
            this.Board.getComponent("Board").checkAnDiem();
            delete this.Board.getComponent("Board").BlockRemainingArr[this.IndexInQueue];
            this.Board.getComponent("Board").checkSetable();
            // this.node.removeFromParent()
            // this.Board.addChild(this.node)
            this.Board.getComponent("Board").BlockRemaining--;
            this.Board.getComponent("Board").BlockAvailable--;
            if (!this.Board.getComponent("Board").IsNewbie) {
                // cc.sys.localStorage.setItem("BA" , this.Board.getComponent("Board").BlockAvailable)
                // cc.sys.localStorage.setItem("BR" , this.Board.getComponent("Board").BlockRemaining)
                this.Board.getComponent("Board").saveData("BA", this.Board.getComponent("Board").BlockAvailable);
                this.Board.getComponent("Board").saveData("BR", this.Board.getComponent("Board").BlockRemaining);
            }
            if (this.Board.getComponent("Board").BlockRemaining == 0) {
                if (this.Board.getComponent("Board").CreateNova)
                    this.Board.getComponent("Board").taoNovaBlock();
                else
                    this.Board.getComponent("Board").taoBlockNgauNhien();
            }
            this.DiemLabel.getComponent("DiemSo").Diem += this.BlockCount;
            this.DiemLabel.getComponent("DiemSo").congDiem(this.BlockCount);
            if (this.Board.getComponent("Board").IsNewbie) {
                this.Board.emit("nextStep");
            }
            // this.Board.getComponent("Board").checkMerge()
            // for(let i=0;i<2;i++)
            // this.Bo1ard.addChild(this.BlockArray.shift())
        }
        else {
            if (this.Board.getComponent("Board").IsNewbie) {
                cc.tween(this.node).to(0.1, { x: 0, y: -430 }).start();
                this.node.scale = 0.4;
                this.Board.getComponent("Board").CarryingNode = null;
            }
            else {
                // this.node.removeFromParent()
                // this.Board.getComponent("Board").BlockReadyContainer.addChild(this.node)
                cc.tween(this.node).to(0.1, { x: -190 + 190 * this.Index, y: -430 }).start();
                this.node.scale = 0.4;
                this.Board.getComponent("Board").CarryingNode = null;
            }
        }
    };
    BlockContain.prototype.taoBlockNgang = function (colorindex, indexintype) {
        console.log("da tao block ngang");
        if (colorindex == -1) {
            var color = Math.floor(Math.random() * 6);
            // console.log(color)
            this.IndexColor = color;
        }
        else
            this.IndexColor = colorindex;
        if (indexintype == -1) {
            var leng = Math.floor(Math.random() * 4) + 2;
            this.BlockCount = leng;
            this.IndexInType = leng;
            this.Size = cc.v2(1, leng);
        }
        else {
            this.BlockCount = indexintype;
            this.IndexInType = indexintype;
            this.Size = cc.v2(1, indexintype);
        }
        this.Blank = [];
        for (var i = 0; i < this.BlockCount; i++) {
            var block = cc.instantiate(this.Block);
            this.node.addChild(block);
            this.BlockArray.push(block);
            block.getComponent("Block").setUp(this.IndexColor);
            block.getComponent("Block").turnOffListener();
            block.setPosition((this.BlockCount - 1) * -36 + 72 * i, 0);
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor];
        // this.Board.addChild(this.node)
        // block.setPosition(this.VTBlock[index])
        // let number = Math.floor(Math.random()*3)+1
        // block.getComponent("Block").setUp(number)
        // block.getComponent("Block").turnOffListener()
    };
    BlockContain.prototype.taoBlockDoc = function (colorindex, indexintype) {
        if (colorindex == -1) {
            var color = Math.floor(Math.random() * 6);
            // console.log(color)
            this.IndexColor = color;
        }
        else
            this.IndexColor = colorindex;
        if (indexintype == -1) {
            var leng = Math.floor(Math.random() * 4) + 2;
            this.BlockCount = leng;
            this.IndexInType = leng;
            this.Size = cc.v2(leng, 1);
        }
        else {
            this.BlockCount = indexintype;
            this.IndexInType = indexintype;
            this.Size = cc.v2(1, indexintype);
        }
        this.Blank = [];
        for (var i = 0; i < this.BlockCount; i++) {
            var block = cc.instantiate(this.Block);
            this.node.addChild(block);
            this.BlockArray.push(block);
            block.getComponent("Block").setUp(this.IndexColor);
            block.getComponent("Block").turnOffListener();
            block.setPosition(0, (this.BlockCount - 1) * -36 + 72 * i);
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor];
        // this.Board.addChild(this.node)
        // block.setPosition(this.VTBlock[index])
        // let number = Math.floor(Math.random()*3)+1
        // block.getComponent("Block").setUp(number)
        // block.getComponent("Block").turnOffListener()
    };
    BlockContain.prototype.taoBlockVuongTo = function (colorindex, indexintype) {
        this.Size = cc.v2(3, 3);
        if (colorindex == -1) {
            var color = Math.floor(Math.random() * 6);
            // console.log(color)
            this.IndexColor = color;
        }
        else
            this.IndexColor = colorindex;
        var arrindex = [];
        var posarr = [[cc.v2(-72, 72), cc.v2(0, 72), cc.v2(72, 72)],
            [cc.v2(-72, 0), cc.v2(0, 0), cc.v2(72, 0)],
            [cc.v2(-72, -72), cc.v2(0, -72), cc.v2(72, -72)]];
        var type = 0;
        if (indexintype == -1) {
            type = Math.floor(Math.random() * 5);
        }
        else
            type = indexintype;
        this.IndexInType = type;
        switch (type) {
            case 0:
                {
                    arrindex = [0, 1, 2, 3, 6];
                    this.BlockCount = 5;
                    this.Blank = [4, 5, 7, 8];
                    break;
                }
            case 1:
                {
                    arrindex = [0, 1, 2, 5, 8];
                    this.Blank = [3, 4, 6, 7];
                    this.BlockCount = 5;
                    break;
                }
            case 2:
                {
                    arrindex = [0, 3, 6, 7, 8];
                    this.Blank = [1, 2, 4, 5];
                    this.BlockCount = 5;
                    break;
                }
            case 3:
                {
                    arrindex = [2, 5, 6, 7, 8];
                    this.Blank = [0, 1, 3, 4];
                    this.BlockCount = 5;
                    break;
                }
            case 4:
                {
                    arrindex = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                    this.Blank = [];
                    this.BlockCount = 9;
                    break;
                }
        }
        for (var i = 0; i < arrindex.length; i++) {
            var block = cc.instantiate(this.Block);
            this.node.addChild(block);
            this.BlockArray.push(block);
            block.getComponent("Block").setUp(this.IndexColor);
            block.getComponent("Block").turnOffListener();
            block.setPosition(posarr[Math.floor(arrindex[i] / 3)][arrindex[i] % 3]);
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor];
    };
    BlockContain.prototype.taoBlockLNganNam = function (colorindex, indexintype) {
        console.log("Day la indexintype cua khoi L nam:  " + indexintype);
        this.Size = cc.v2(2, 3);
        if (colorindex == -1) {
            var color = Math.floor(Math.random() * 6);
            this.IndexColor = color;
        }
        else
            this.IndexColor = colorindex;
        // this.IndexColor = color
        var arrindex = [];
        var posarr = [[cc.v2(-72, 36), cc.v2(0, 36), cc.v2(72, 36)],
            [cc.v2(-72, -36), cc.v2(0, -36), cc.v2(72, -36)]];
        var type = 0;
        if (indexintype == -1) {
            type = Math.floor(Math.random() * 4);
            // this.IndexInType = type
        }
        else
            type = indexintype;
        this.IndexInType = type;
        switch (type) {
            case 0:
                {
                    arrindex = [0, 1, 2, 3];
                    this.Blank = [4, 5];
                    this.BlockCount = 4;
                    break;
                }
            case 1:
                {
                    arrindex = [0, 1, 2, 5];
                    this.Blank = [3, 4];
                    this.BlockCount = 4;
                    break;
                }
            case 2:
                {
                    arrindex = [0, 3, 4, 5];
                    this.Blank = [1, 2];
                    this.BlockCount = 4;
                    break;
                }
            case 3:
                {
                    arrindex = [2, 3, 4, 5];
                    this.Blank = [0, 1];
                    this.BlockCount = 4;
                    break;
                }
        }
        for (var i = 0; i < 4; i++) {
            var block = cc.instantiate(this.Block);
            this.node.addChild(block);
            this.BlockArray.push(block);
            block.getComponent("Block").setUp(this.IndexColor);
            block.getComponent("Block").turnOffListener();
            block.setPosition(posarr[Math.floor(arrindex[i] / 3)][arrindex[i] % 3]);
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor];
    };
    BlockContain.prototype.taoBlockLNganDung = function (colorindex, indexintype) {
        console.log("Day la indexintype cua khoi L dung:  " + indexintype);
        this.Size = cc.v2(3, 2);
        if (colorindex == -1) {
            var color = Math.floor(Math.random() * 6);
            this.IndexColor = color;
        }
        else
            this.IndexColor = colorindex;
        // this.IndexColor = color
        var arrindex = [];
        var posarr = [[cc.v2(-36, 72), cc.v2(36, 72)],
            [cc.v2(-36, 0), cc.v2(36, 0)],
            [cc.v2(-36, -72), cc.v2(36, -72)]];
        // let type = Math.floor(Math.random()*4)let type = 0
        var type = 0;
        if (indexintype == -1) {
            type = Math.floor(Math.random() * 4);
        }
        else
            type = indexintype;
        this.IndexInType = type;
        switch (type) {
            case 0:
                {
                    arrindex = [0, 1, 2, 4];
                    this.Blank = [3, 5];
                    this.BlockCount = 4;
                    break;
                }
            case 1:
                {
                    arrindex = [0, 1, 3, 5];
                    this.Blank = [2, 4];
                    this.BlockCount = 4;
                    break;
                }
            case 2:
                {
                    arrindex = [0, 2, 4, 5];
                    this.Blank = [1, 3];
                    this.BlockCount = 4;
                    break;
                }
            case 3:
                {
                    arrindex = [1, 3, 4, 5];
                    this.Blank = [0, 2];
                    this.BlockCount = 4;
                    break;
                }
        }
        for (var i = 0; i < 4; i++) {
            var block = cc.instantiate(this.Block);
            this.node.addChild(block);
            this.BlockArray.push(block);
            block.getComponent("Block").setUp(this.IndexColor);
            block.getComponent("Block").turnOffListener();
            block.setPosition(posarr[Math.floor(arrindex[i] / 2)][arrindex[i] % 2]);
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor];
    };
    BlockContain.prototype.taoBlockLVuongNho = function (colorindex, indexintype) {
        this.Size = cc.v2(2, 2);
        // let color = Math.floor(Math.random()*6)
        // this.IndexColor = color
        if (colorindex == -1) {
            var color = Math.floor(Math.random() * 6);
            this.IndexColor = color;
        }
        else
            this.IndexColor = colorindex;
        var arrindex = [];
        var posarr = [[cc.v2(-36, 36), cc.v2(36, 36)],
            [cc.v2(-36, -36), cc.v2(36, -36)]];
        // let type = Math.floor(Math.random()*5)let type = 0
        var type = 0;
        if (indexintype == -1) {
            type = Math.floor(Math.random() * 5);
        }
        else
            type = indexintype;
        this.IndexInType = type;
        switch (type) {
            case 0:
                {
                    arrindex = [0, 1, 2];
                    this.Blank = [3];
                    this.BlockCount = 3;
                    break;
                }
            case 1:
                {
                    arrindex = [0, 1, 3];
                    this.Blank = [2];
                    this.BlockCount = 3;
                    break;
                }
            case 2:
                {
                    arrindex = [0, 2, 3];
                    this.Blank = [1];
                    this.BlockCount = 3;
                    break;
                }
            case 3:
                {
                    arrindex = [1, 2, 3];
                    this.Blank = [0];
                    this.BlockCount = 3;
                    break;
                }
            case 4:
                {
                    arrindex = [0, 1, 2, 3];
                    this.Blank = [];
                    this.BlockCount = 4;
                    break;
                }
        }
        for (var i = 0; i < arrindex.length; i++) {
            var block = cc.instantiate(this.Block);
            this.node.addChild(block);
            this.BlockArray.push(block);
            block.getComponent("Block").setUp(this.IndexColor);
            block.getComponent("Block").turnOffListener();
            block.setPosition(posarr[Math.floor(arrindex[i] / 2)][arrindex[i] % 2]);
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor];
    };
    BlockContain.prototype.taoBlockNho1 = function (colorindex) {
        this.Size = cc.v2(1, 1);
        this.Blank = [];
        var color = 0;
        if (colorindex == -1) {
            color = Math.floor(Math.random() * 6);
        }
        else
            color = colorindex;
        this.IndexColor = color;
        // console.log(color)
        this.BlockCount = 1;
        var block = cc.instantiate(this.Block);
        this.node.addChild(block);
        this.BlockArray.push(block);
        block.getComponent("Block").setUp(color);
        block.getComponent("Block").turnOffListener();
        block.setPosition(0, 0);
        this.Color = this.Board.getComponent("Board").ColorArray[color];
    };
    BlockContain.prototype.taoNovaBlock = function () {
    };
    BlockContain.prototype.turnOffListener = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    BlockContain.prototype.checkSetable = function (Size, Blank) {
        // console.log("CheckSetable called at " + this.IndexInQueue + "th Block")
        console.log("da check khoi thu " + this.IndexInQueue);
        var prepos = this.Board.getComponent("Board").Prepos;
        // console.log(prepos)
        var setable = false;
        loop1: for (var i = 0; i < 8 - Size.x + 1; i++) {
            loop2: for (var j = 0; j < 8 - Size.y + 1; j++) {
                var count = 0;
                loop3: for (var hi = 0; hi < Size.x; hi++) {
                    for (var ci = 0; ci < Size.y; ci++) {
                        if (!Blank.includes(ci + hi * Size.y)) {
                            // console.log("Called")
                            if (prepos[i + hi][j + ci] == 0) {
                                count++;
                                // console.log("Prepos o vi tri "+[i+hi]+" " +[j+ci]+ " la: "+ prepos[i+hi][j+ci])
                            }
                        }
                    }
                }
                if (count == Size.x * Size.y - Blank.length) {
                    setable = true;
                    break loop1;
                }
            }
        }
        if (setable == false) {
            if (this.Setable == true) {
                this.Setable = false;
                this.Board.getComponent("Board").BlockAvailable--;
            }
            this.turnOffListener();
            // this.Board.on("check",(()=>{
            //     this.checkSetable(this.Size,this.Blank)
            // }) ,this)
            cc.tween(this.node).to(0.5, { opacity: 100 }).start();
        }
        else {
            if (this.Setable == false) {
                this.Setable = true;
                this.Board.getComponent("Board").BlockAvailable++;
            }
            this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            cc.tween(this.node).to(0.5, { opacity: 255 }).start();
        }
    };
    __decorate([
        property(cc.Prefab)
    ], BlockContain.prototype, "Block", void 0);
    BlockContain = __decorate([
        ccclass
    ], BlockContain);
    return BlockContain;
}(cc.Component));
exports.default = BlockContain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQmxvY2tDb250YWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBNnJCQztRQTFyQkcsV0FBSyxHQUFjLElBQUksQ0FBQTtRQUN2QixXQUFLLEdBQVksSUFBSSxDQUFBO1FBQ3JCLDJCQUFxQixHQUFZLElBQUksQ0FBQTtRQUNyQywyRUFBMkU7UUFDM0UsZ0JBQVUsR0FBYyxFQUFFLENBQUE7UUFDMUIsY0FBUSxHQUFHLEtBQUssQ0FBQTtRQUNoQix3QkFBa0IsR0FBWSxJQUFJLENBQUE7UUFDbEMsc0JBQWdCLEdBQVksSUFBSSxDQUFBO1FBQ2hDLFdBQUssR0FBRyxDQUFDLENBQUE7UUFDVCxXQUFLLEdBQW1CLElBQUksQ0FBQTtRQUM1QixnQkFBVSxHQUFVLENBQUMsQ0FBQTtRQUNyQixnQkFBVSxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2YsZ0JBQVUsR0FBRyxDQUFDLENBQUE7UUFDZCxlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFDcEIsV0FBSyxHQUFhLElBQUksQ0FBQTtRQUV0QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFBO1FBRXpCLGFBQU8sR0FBRyxJQUFJLENBQUE7UUFFZCxlQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUE7UUFDdEIsaUJBQVcsR0FBVyxDQUFDLENBQUMsQ0FBQTtRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQTs7UUFpcEIxQixhQUFhO1FBQ2IsSUFBSTtRQUNKLDZKQUE2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Q3BEO2FBRUQ7WUFDSSxJQUFHLElBQUksQ0FBQyxPQUFPLElBQUUsS0FBSyxFQUN0QjtnQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtnQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7YUFDcEQ7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNoRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDcEQ7SUFDTCxDQUFDO0lBenFCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNHO0lBSE4sWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTZyQmhDO0lBQUQsbUJBQUM7Q0E3ckJELEFBNnJCQyxDQTdyQnlDLEVBQUUsQ0FBQyxTQUFTLEdBNnJCckQ7a0JBN3JCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tDb250YWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgQmxvY2s6IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEJvYXJkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgSG9sZGluZ0Jsb2NrQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLy8gVlRCbG9jazogY2MuVmVjMltdID0gW2NjLnYyKC0zNiwwKSxjYy52MigwLDM2KSxjYy52MigzNiwwKSxjYy52MigwLC0zNildXHJcbiAgICBCbG9ja0FycmF5OiBjYy5Ob2RlW10gPSBbXVxyXG4gICAgQ29UaGVEYXQgPSBmYWxzZVxyXG4gICAgVG91Y2hTdGFydExvY2F0aW9uOiBjYy5WZWMyID0gbnVsbFxyXG4gICAgVG91Y2hFbmRMb2NhdGlvbjogY2MuVmVjMiA9IG51bGxcclxuICAgIEluZGV4ID0gMFxyXG4gICAgQ29sb3I6IGNjLlNwcml0ZUZyYW1lID0gbnVsbFxyXG4gICAgQmxvY2tDb3VudDpudW1iZXIgPSAwXHJcbiAgICBJbmRleENvbG9yID0gLTFcclxuICAgIFR5cGVOdW1iZXIgPSAwXHJcbiAgICBEaWVtTGFiZWw6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgU2l6ZTogY2MuVmVjMiA9IG51bGxcclxuICAgIEJsYW5rOiBudW1iZXJbXSA9IG51bGxcclxuXHJcbiAgICBJbmRleEluUXVldWU6IG51bWJlciA9IC0xXHJcblxyXG4gICAgU2V0YWJsZSA9IHRydWVcclxuXHJcbiAgICBJbmRleFR5cGU6IG51bWJlciA9IC0xXHJcbiAgICBJbmRleEluVHlwZTogbnVtYmVyID0gLTFcclxuXHJcbiAgICBCbG9ja0JvYXJkOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5Cb2FyZCA9IGNjLmZpbmQoJ0NhbnZhcy9TY3JlZW4yL0JvYXJkJylcclxuICAgICAgICB0aGlzLkJsb2NrQm9hcmQgPSBjYy5maW5kKCdDYW52YXMvU2NyZWVuMi9Cb2FyZC9CbG9ja0JvYXJkJylcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAwLjRcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcylcclxuICAgICAgICAvLyB0aGlzLkJvYXJkLm9uKFwiY2hlY2tcIiwoKCk9PntcclxuICAgICAgICAvLyAgICAgdGhpcy5jaGVja1NldGFibGUodGhpcy5TaXplLHRoaXMuQmxhbmspXHJcbiAgICAgICAgLy8gfSkgLHRoaXMpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5Ib2xkaW5nQmxvY2tDb250YWluZXIgPSBjYy5maW5kKCdDYW52YXMvU2NyZWVuMi9CbG9ja0hvbGRpbmdDb250YWluZXInKVxyXG4gICAgICAgIHRoaXMuRGllbUxhYmVsID0gY2MuZmluZCgnQ2FudmFzL1NjcmVlbjIvQmFuZ0RpZW0vU2NvcmVMYWJlbC9TY29yZScpXHJcbiAgICAgICAgLy8gZm9yKGxldCBpPTA7aTwyO2krKylcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudGFvQmxvY2soMippKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvL1RhbyBibG9jayBuZ2F1IG5oaWVuXHJcbiAgICB9XHJcblxyXG4gICAga2hvaXRhbyh0eXBlOiBudW1iZXIsY29sb3JpbmRleCA6IG51bWJlciwgaW5kZXhpbnR5cGU6IG51bWJlciA9IC0xKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHR5cGU9PS0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRlbXAgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkluZGV4VHlwZSA9IHRlbXBcclxuICAgICAgICAgICAgICAgIGlmKHRlbXA8MTApIHRoaXMudGFvQmxvY2tOZ2FuZyhjb2xvcmluZGV4LGluZGV4aW50eXBlKVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0ZW1wPDIwKXRoaXMudGFvQmxvY2tEb2MoY29sb3JpbmRleCxpbmRleGludHlwZSlcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGVtcDwzMCl0aGlzLnRhb0Jsb2NrTmhvMSgtMSlcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGVtcDw1MCl0aGlzLnRhb0Jsb2NrTE5nYW5OYW0oY29sb3JpbmRleCxpbmRleGludHlwZSlcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGVtcDw2NSl0aGlzLnRhb0Jsb2NrTE5nYW5EdW5nKGNvbG9yaW5kZXgsaW5kZXhpbnR5cGUpXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRlbXA8ODApdGhpcy50YW9CbG9ja0xWdW9uZ05obyhjb2xvcmluZGV4LGluZGV4aW50eXBlKVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0ZW1wPDkwKXRoaXMudGFvQmxvY2tWdW9uZ1RvKGNvbG9yaW5kZXgsaW5kZXhpbnR5cGUpXHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMudGFvQmxvY2tOaG8xKC0xKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxIGtob2kgZGEgZHVvYyB0YW9cIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhvbmcgdGluIGtob2k6XCIgKyB0aGlzLkluZGV4Q29sb3IgKyBcIiBcIiArIHRoaXMuSW5kZXhJblR5cGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRlbXAgPSB0eXBlXHJcbiAgICAgICAgICAgIGlmKHRlbXA8MTApIHRoaXMudGFvQmxvY2tOZ2FuZyhjb2xvcmluZGV4LGluZGV4aW50eXBlKVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRlbXA8MjApdGhpcy50YW9CbG9ja0RvYyhjb2xvcmluZGV4LGluZGV4aW50eXBlKVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRlbXA8MzApdGhpcy50YW9CbG9ja05obzEoY29sb3JpbmRleClcclxuICAgICAgICAgICAgZWxzZSBpZih0ZW1wPDUwKXRoaXMudGFvQmxvY2tMTmdhbk5hbShjb2xvcmluZGV4LGluZGV4aW50eXBlKVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRlbXA8NjUpdGhpcy50YW9CbG9ja0xOZ2FuRHVuZyhjb2xvcmluZGV4LGluZGV4aW50eXBlKVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRlbXA8ODApdGhpcy50YW9CbG9ja0xWdW9uZ05obyhjb2xvcmluZGV4LGluZGV4aW50eXBlKVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRlbXA8OTApdGhpcy50YW9CbG9ja1Z1b25nVG8oY29sb3JpbmRleCxpbmRleGludHlwZSlcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnRhb0Jsb2NrTmhvMShjb2xvcmluZGV4KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJsb2NrU3RvcmFnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJz4buRIGjDoG5nIGzDoDpcIisgdGhpcy5TaXplLngpXHJcbiAgICAgICAgbGV0IG5hbWUgPSBcImJsb2NrZGF0YVwiICsgKHRoaXMuSW5kZXhJblF1ZXVlKS50b1N0cmluZygpXHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgICAgICBsZXQgZGF0YWJsb2NrID0ge1xyXG4gICAgICAgICAgICByZWNhbGw6IHRydWUsXHJcbiAgICAgICAgICAgIGluZGV4dHlwZTogdGhpcy5JbmRleFR5cGUsXHJcbiAgICAgICAgICAgIGluZGV4Y29sb3I6IHRoaXMuSW5kZXhDb2xvcixcclxuICAgICAgICAgICAgaW5kZXhpbnR5cGU6IHRoaXMuSW5kZXhJblR5cGUsXHJcbiAgICAgICAgICAgIGluZGV4aW5xdWV1ZTogdGhpcy5JbmRleEluUXVldWUsXHJcbiAgICAgICAgICAgIHNpemVYOiB0aGlzLlNpemUueCxcclxuICAgICAgICAgICAgc2l6ZVk6IHRoaXMuU2l6ZS55LFxyXG4gICAgICAgICAgICBibGFuazogdGhpcy5CbGFua1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLnNhdmVEYXRhKG5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGFibG9jaykpXHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGFibG9jaykpXHJcbiAgICB9XHJcbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5Jc05ld2JpZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuSGFuZClcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuSGFuZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5Ub3VjaFN0YXJ0TG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMVxyXG4gICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQ29sb3JBbkRpZW0gPSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkNvbG9yQXJyYXlbdGhpcy5JbmRleENvbG9yKzZdXHJcbiAgICAgICAgLy8gbGV0IHRlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGUpXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKHRlbXApXHJcbiAgICAgICAgLy8gdGVtcC5zZXRQb3NpdGlvbihjYy52MigwLDIwMCkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgIC8vIHRoaXMuSG9sZGluZ0Jsb2NrQ29udGFpbmVyLmFkZENoaWxkKHRoaXMubm9kZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLnpJbmRleClcclxuICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLnpJbmRleCArPTFcclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS56SW5kZXhcclxuICAgICAgICB0aGlzLkJsb2NrQm9hcmQuc29ydEFsbENoaWxkcmVuKClcclxuICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkNhcnJ5aW5nTm9kZSA9IHRoaXMubm9kZVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0b3VjaCA9IGV2ZW50LmdldFRvdWNoZXMoKVswXVxyXG4gICAgICAgIGxldCB0b3VjaF9wb3MgPSB0b3VjaC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgbGV0IHN0YW5kYXJkX3RvdWNoX3BvcyA9IHRoaXMuQm9hcmQuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hfcG9zKVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihzdGFuZGFyZF90b3VjaF9wb3MpXHJcbiAgICAgICAgLy8gZm9yKGxldCBpID0wO2k8dGhpcy5CbG9ja0FycmF5Lmxlbmd0aDtpKyspXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBpZih0aGlzLkJsb2NrQXJyYXlbaV0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuQ29UaGVEYXQmJnRoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OZ2FuZyE9bnVsbCYmdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLkRvYyE9bnVsbClcclxuICAgICAgICAvLyAgICAgdGhpcy5Db1RoZURhdCA9IHRydWVcclxuICAgICAgICAvLyAgICAgZWxzZVxyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLkNvVGhlRGF0ID0gZmFsc2VcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQ2hlY2sgPSB0aGlzLkNvVGhlRGF0XHJcbiAgICB9XHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMuVG91Y2hFbmRMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgICBmb3IobGV0IGkgPTA7aTx0aGlzLkJsb2NrQXJyYXkubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Db1RoZURhdCYmdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLk5nYW5nIT1udWxsJiZ0aGlzLkJsb2NrQXJyYXlbaV0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuRG9jIT1udWxsKVxyXG4gICAgICAgICAgICB0aGlzLkNvVGhlRGF0ID0gdHJ1ZVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29UaGVEYXQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLkNvVGhlRGF0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLkJsb2NrQXJyYXkubGVuZ3RoO2krKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG4gPSB0aGlzLkJsb2NrQXJyYXlbaV0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuTmdhbmdcclxuICAgICAgICAgICAgICAgIGxldCBkID0gdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLkRvY1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja0FycmF5W3RoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OZ2FuZ11bdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLkRvY10uZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkJsb2NrQXJyYXlbbl1bZF0gPSB0aGlzLkJsb2NrQXJyYXlbaV1cclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuRW1wdHlCbG9ja0FycmF5W25dW2RdLnNjYWxlID0gMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5QcmVwb3Nbbl1bZF0gPSAxXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkluZGV4Q29sb3JBcnJheVtuXVtkXSA9IHRoaXMuSW5kZXhDb2xvclxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5FbXB0eUJsb2NrQXJyYXlbbl1bZF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuQm9hcmQuYWRkQ2hpbGQodGhpcy5CbG9ja0FycmF5LnNoaWZ0KCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQXJyYXlbaV0uc2V0UG9zaXRpb24odGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5WVE5nYW5nW3RoaXMuQmxvY2tBcnJheVtpXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Eb2NdLHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuVlREb2NbdGhpcy5CbG9ja0FycmF5W2ldLmdldENvbXBvbmVudChcIkJsb2NrXCIpLk5nYW5nXSlcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLDApXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLnRhb0Jsb2NrKClcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuQmxvY2tBcnJheVtpXS54LHRoaXMuQmxvY2tBcnJheVtpXS55KVxyXG4gICAgICAgICAgICAgICAgdGhpcy50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIXRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuSXNOZXdiaWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gXCJibG9ja2RhdGFcIiArIHRoaXMuSW5kZXhJblF1ZXVlLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWUpXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgb2JqID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkpXHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5yZWNhbGxNZW1vcnkob2JqLCBuYW1lKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqKVxyXG4gICAgICAgICAgICAgICAgb2JqLnJlY2FsbCA9ICFvYmoucmVjYWxsXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkob2JqKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuc2F2ZURhdGEobmFtZSwgSlNPTi5zdHJpbmdpZnkob2JqKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLmNoZWNrQW5EaWVtKClcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQmxvY2tSZW1haW5pbmdBcnJbdGhpcy5JbmRleEluUXVldWVdXHJcbiAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuY2hlY2tTZXRhYmxlKClcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgICAgICAvLyB0aGlzLkJvYXJkLmFkZENoaWxkKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja1JlbWFpbmluZy0tXHJcbiAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQmxvY2tBdmFpbGFibGUtLVxyXG4gICAgICAgICAgICBpZighdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5Jc05ld2JpZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQkFcIiAsIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQmxvY2tBdmFpbGFibGUpXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJCUlwiICwgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja1JlbWFpbmluZylcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuc2F2ZURhdGEoXCJCQVwiICwgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja0F2YWlsYWJsZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuc2F2ZURhdGEoXCJCUlwiICwgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja1JlbWFpbmluZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja1JlbWFpbmluZz09MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5DcmVhdGVOb3ZhKSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLnRhb05vdmFCbG9jaygpXHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikudGFvQmxvY2tOZ2F1TmhpZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuRGllbUxhYmVsLmdldENvbXBvbmVudChcIkRpZW1Tb1wiKS5EaWVtICs9IHRoaXMuQmxvY2tDb3VudFxyXG4gICAgICAgICAgICB0aGlzLkRpZW1MYWJlbC5nZXRDb21wb25lbnQoXCJEaWVtU29cIikuY29uZ0RpZW0odGhpcy5CbG9ja0NvdW50KVxyXG4gICAgICAgICAgICBpZih0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLklzTmV3YmllKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkJvYXJkLmVtaXQoXCJuZXh0U3RlcFwiKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLmNoZWNrTWVyZ2UoKVxyXG4gICAgICAgICAgICAvLyBmb3IobGV0IGk9MDtpPDI7aSsrKVxyXG4gICAgICAgICAgICAvLyB0aGlzLkJvMWFyZC5hZGRDaGlsZCh0aGlzLkJsb2NrQXJyYXkuc2hpZnQoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5Jc05ld2JpZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjEse3g6MCx5Oi00MzB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAwLjRcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQ2FycnlpbmdOb2RlID0gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkJsb2NrUmVhZHlDb250YWluZXIuYWRkQ2hpbGQodGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjEse3g6LTE5MCsxOTAqdGhpcy5JbmRleCx5Oi00MzB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAwLjRcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQ2FycnlpbmdOb2RlID0gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdGFvQmxvY2tOZ2FuZyhjb2xvcmluZGV4OiBudW1iZXIsIGluZGV4aW50eXBlOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYSB0YW8gYmxvY2sgbmdhbmdcIilcclxuICAgICAgICBpZihjb2xvcmluZGV4ID09IC0xKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2xvcilcclxuICAgICAgICAgICAgdGhpcy5JbmRleENvbG9yID0gY29sb3JcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB0aGlzLkluZGV4Q29sb3IgPSBjb2xvcmluZGV4XHJcbiAgICAgICAgaWYoaW5kZXhpbnR5cGUgPT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbGVuZyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KSsyXHJcbiAgICAgICAgICAgIHRoaXMuQmxvY2tDb3VudCA9IGxlbmdcclxuICAgICAgICAgICAgdGhpcy5JbmRleEluVHlwZSA9IGxlbmdcclxuICAgICAgICAgICAgdGhpcy5TaXplID0gY2MudjIoMSxsZW5nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSBpbmRleGludHlwZVxyXG4gICAgICAgICAgICB0aGlzLkluZGV4SW5UeXBlID0gaW5kZXhpbnR5cGVcclxuICAgICAgICAgICAgdGhpcy5TaXplID0gY2MudjIoMSxpbmRleGludHlwZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5CbGFuayA9IFtdXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLkJsb2NrQ291bnQ7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5CbG9jaylcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJsb2NrKVxyXG4gICAgICAgICAgICB0aGlzLkJsb2NrQXJyYXkucHVzaChibG9jaylcclxuICAgICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuc2V0VXAodGhpcy5JbmRleENvbG9yKVxyXG4gICAgICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbigodGhpcy5CbG9ja0NvdW50LTEpKi0zNis3MippLDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQ29sb3IgPSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkNvbG9yQXJyYXlbdGhpcy5JbmRleENvbG9yXVxyXG4gICAgICAgIC8vIHRoaXMuQm9hcmQuYWRkQ2hpbGQodGhpcy5ub2RlKVxyXG4gICAgICAgIC8vIGJsb2NrLnNldFBvc2l0aW9uKHRoaXMuVlRCbG9ja1tpbmRleF0pXHJcbiAgICAgICAgLy8gbGV0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSozKSsxXHJcbiAgICAgICAgLy8gYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuc2V0VXAobnVtYmVyKVxyXG4gICAgICAgIC8vIGJsb2NrLmdldENvbXBvbmVudChcIkJsb2NrXCIpLnR1cm5PZmZMaXN0ZW5lcigpXHJcbiAgICB9XHJcbiAgICB0YW9CbG9ja0RvYyhjb2xvcmluZGV4OiBudW1iZXIsIGluZGV4aW50eXBlOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoY29sb3JpbmRleCA9PSAtMSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNilcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29sb3IpXHJcbiAgICAgICAgICAgIHRoaXMuSW5kZXhDb2xvciA9IGNvbG9yXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgdGhpcy5JbmRleENvbG9yID0gY29sb3JpbmRleFxyXG4gICAgICAgIGlmKGluZGV4aW50eXBlID09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGxlbmcgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNCkrMlxyXG4gICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSBsZW5nXHJcbiAgICAgICAgICAgIHRoaXMuSW5kZXhJblR5cGUgPSBsZW5nXHJcbiAgICAgICAgICAgIHRoaXMuU2l6ZSA9IGNjLnYyKGxlbmcsMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gaW5kZXhpbnR5cGVcclxuICAgICAgICAgICAgdGhpcy5JbmRleEluVHlwZSA9IGluZGV4aW50eXBlXHJcbiAgICAgICAgICAgIHRoaXMuU2l6ZSA9IGNjLnYyKDEsaW5kZXhpbnR5cGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQmxhbmsgPSBbXVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5CbG9ja0NvdW50O2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQmxvY2spXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChibG9jaylcclxuICAgICAgICAgICAgdGhpcy5CbG9ja0FycmF5LnB1c2goYmxvY2spXHJcbiAgICAgICAgICAgIGJsb2NrLmdldENvbXBvbmVudChcIkJsb2NrXCIpLnNldFVwKHRoaXMuSW5kZXhDb2xvcilcclxuICAgICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikudHVybk9mZkxpc3RlbmVyKClcclxuICAgICAgICAgICAgYmxvY2suc2V0UG9zaXRpb24oMCwodGhpcy5CbG9ja0NvdW50LTEpKi0zNis3MippKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkNvbG9yID0gdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5Db2xvckFycmF5W3RoaXMuSW5kZXhDb2xvcl1cclxuICAgICAgICAvLyB0aGlzLkJvYXJkLmFkZENoaWxkKHRoaXMubm9kZSlcclxuICAgICAgICAvLyBibG9jay5zZXRQb3NpdGlvbih0aGlzLlZUQmxvY2tbaW5kZXhdKVxyXG4gICAgICAgIC8vIGxldCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMykrMVxyXG4gICAgICAgIC8vIGJsb2NrLmdldENvbXBvbmVudChcIkJsb2NrXCIpLnNldFVwKG51bWJlcilcclxuICAgICAgICAvLyBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgfVxyXG4gICAgdGFvQmxvY2tWdW9uZ1RvKGNvbG9yaW5kZXg6IG51bWJlciwgaW5kZXhpbnR5cGU6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLlNpemUgPSBjYy52MigzLDMpXHJcbiAgICAgICAgaWYoY29sb3JpbmRleCA9PSAtMSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNilcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29sb3IpXHJcbiAgICAgICAgICAgIHRoaXMuSW5kZXhDb2xvciA9IGNvbG9yXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgdGhpcy5JbmRleENvbG9yID0gY29sb3JpbmRleFxyXG4gICAgICAgIGxldCBhcnJpbmRleDogbnVtYmVyW10gPSBbXVxyXG4gICAgICAgIGxldCBwb3NhcnI6IGNjLlZlYzJbXVtdPSBcclxuICAgICAgICBbW2NjLnYyKC03Miw3MiksY2MudjIoMCw3MiksY2MudjIoNzIsNzIpXSxcclxuICAgICAgICBbY2MudjIoLTcyLDApLGNjLnYyKDAsMCksY2MudjIoNzIsMCldLFxyXG4gICAgICAgIFtjYy52MigtNzIsLTcyKSxjYy52MigwLC03MiksY2MudjIoNzIsLTcyKV1dXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHR5cGUgPSAwXHJcbiAgICAgICAgaWYoaW5kZXhpbnR5cGU9PS0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo1KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgdHlwZSA9IGluZGV4aW50eXBlXHJcbiAgICAgICAgdGhpcy5JbmRleEluVHlwZSA9IHR5cGVcclxuICAgICAgICBzd2l0Y2godHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgMCA6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyaW5kZXggPSBbMCwxLDIsMyw2XVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxvY2tDb3VudCA9IDVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsYW5rID0gWzQsNSw3LDhdXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGNhc2UgMSA6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyaW5kZXggPSBbMCwxLDIsNSw4XVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxhbmsgPSBbMyw0LDYsN11cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSA1XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAyIDpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJpbmRleCA9IFswLDMsNiw3LDhdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbGFuayA9IFsxLDIsNCw1XVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxvY2tDb3VudCA9IDVcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDMgOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmluZGV4ID0gWzIsNSw2LDcsOF1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsYW5rID0gWzAsMSwzLDRdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gNVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgNCA6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyaW5kZXggPSBbMCwxLDIsMyw0LDUsNiw3LDhdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbGFuayA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gOVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJyaW5kZXgubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQmxvY2spXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChibG9jaylcclxuICAgICAgICAgICAgdGhpcy5CbG9ja0FycmF5LnB1c2goYmxvY2spXHJcbiAgICAgICAgICAgIGJsb2NrLmdldENvbXBvbmVudChcIkJsb2NrXCIpLnNldFVwKHRoaXMuSW5kZXhDb2xvcilcclxuICAgICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikudHVybk9mZkxpc3RlbmVyKClcclxuICAgICAgICAgICAgYmxvY2suc2V0UG9zaXRpb24ocG9zYXJyW01hdGguZmxvb3IoYXJyaW5kZXhbaV0vMyldW2FycmluZGV4W2ldJTNdKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkNvbG9yID0gdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5Db2xvckFycmF5W3RoaXMuSW5kZXhDb2xvcl1cclxuICAgIH1cclxuICAgIHRhb0Jsb2NrTE5nYW5OYW0oY29sb3JpbmRleDogbnVtYmVyLCBpbmRleGludHlwZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF5IGxhIGluZGV4aW50eXBlIGN1YSBraG9pIEwgbmFtOiAgXCIgICsgaW5kZXhpbnR5cGUpXHJcbiAgICAgICAgdGhpcy5TaXplPWNjLnYyKDIsMylcclxuICAgICAgICBpZihjb2xvcmluZGV4PT0tMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KVxyXG4gICAgICAgICAgICB0aGlzLkluZGV4Q29sb3IgPSBjb2xvclxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMuSW5kZXhDb2xvciA9IGNvbG9yaW5kZXhcclxuICAgICAgICAvLyB0aGlzLkluZGV4Q29sb3IgPSBjb2xvclxyXG4gICAgICAgIGxldCBhcnJpbmRleDogbnVtYmVyW10gPSBbXVxyXG4gICAgICAgIGxldCBwb3NhcnI6IGNjLlZlYzJbXVtdPSBcclxuICAgICAgICBbW2NjLnYyKC03MiwzNiksY2MudjIoMCwzNiksY2MudjIoNzIsMzYpXSxcclxuICAgICAgICBbY2MudjIoLTcyLC0zNiksY2MudjIoMCwtMzYpLGNjLnYyKDcyLC0zNildXVxyXG4gICAgICAgIGxldCB0eXBlID0gMFxyXG4gICAgICAgIGlmKGluZGV4aW50eXBlID09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KVxyXG4gICAgICAgICAgICAvLyB0aGlzLkluZGV4SW5UeXBlID0gdHlwZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHR5cGUgPSBpbmRleGludHlwZVxyXG4gICAgICAgIHRoaXMuSW5kZXhJblR5cGUgPSB0eXBlXHJcbiAgICAgICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIDAgOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmluZGV4ID0gWzAsMSwyLDNdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbGFuayA9IFs0LDVdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gNFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBjYXNlIDEgOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmluZGV4ID0gWzAsMSwyLDVdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbGFuayA9IFszLDRdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gNFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMiA6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyaW5kZXggPSBbMCwzLDQsNV1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsYW5rID0gWzEsMl1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSA0XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAzIDpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJpbmRleCA9IFsyLDMsNCw1XVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxhbmsgPSBbMCwxXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxvY2tDb3VudCA9IDRcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPDQ7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5CbG9jaylcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJsb2NrKVxyXG4gICAgICAgICAgICB0aGlzLkJsb2NrQXJyYXkucHVzaChibG9jaylcclxuICAgICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuc2V0VXAodGhpcy5JbmRleENvbG9yKVxyXG4gICAgICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbihwb3NhcnJbTWF0aC5mbG9vcihhcnJpbmRleFtpXS8zKV1bYXJyaW5kZXhbaV0lM10pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQ29sb3IgPSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkNvbG9yQXJyYXlbdGhpcy5JbmRleENvbG9yXVxyXG4gICAgfVxyXG4gICAgdGFvQmxvY2tMTmdhbkR1bmcoY29sb3JpbmRleDogbnVtYmVyLCBpbmRleGludHlwZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF5IGxhIGluZGV4aW50eXBlIGN1YSBraG9pIEwgZHVuZzogIFwiICArIGluZGV4aW50eXBlKVxyXG4gICAgICAgIHRoaXMuU2l6ZSA9IGNjLnYyKDMsMilcclxuICAgICAgICBpZihjb2xvcmluZGV4ID09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjYpXHJcbiAgICAgICAgICAgIHRoaXMuSW5kZXhDb2xvciA9IGNvbG9yXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgdGhpcy5JbmRleENvbG9yID0gY29sb3JpbmRleFxyXG4gICAgICAgIC8vIHRoaXMuSW5kZXhDb2xvciA9IGNvbG9yXHJcbiAgICAgICAgbGV0IGFycmluZGV4OiBudW1iZXJbXSA9IFtdXHJcbiAgICAgICAgbGV0IHBvc2FycjogY2MuVmVjMltdW109IFxyXG4gICAgICAgIFtbY2MudjIoLTM2LDcyKSxjYy52MigzNiw3MildLFxyXG4gICAgICAgIFtjYy52MigtMzYsMCksY2MudjIoMzYsMCldLFxyXG4gICAgICAgIFtjYy52MigtMzYsLTcyKSxjYy52MigzNiwtNzIpXV1cclxuICAgICAgICAvLyBsZXQgdHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KWxldCB0eXBlID0gMFxyXG4gICAgICAgIGxldCB0eXBlID0gMFxyXG4gICAgICAgIGlmKGluZGV4aW50eXBlID09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHR5cGUgPSBpbmRleGludHlwZVxyXG4gICAgICAgIHRoaXMuSW5kZXhJblR5cGUgPSB0eXBlXHJcbiAgICAgICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIDAgOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmluZGV4ID0gWzAsMSwyLDRdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbGFuayA9IFszLDVdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gNFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBjYXNlIDEgOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmluZGV4ID0gWzAsMSwzLDVdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbGFuayA9IFsyLDRdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gNFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMiA6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyaW5kZXggPSBbMCwyLDQsNV1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsYW5rID0gWzEsM11cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSA0XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAzIDpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJpbmRleCA9IFsxLDMsNCw1XVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxhbmsgPSBbMCwyXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxvY2tDb3VudCA9IDRcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPDQ7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5CbG9jaylcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJsb2NrKVxyXG4gICAgICAgICAgICB0aGlzLkJsb2NrQXJyYXkucHVzaChibG9jaylcclxuICAgICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuc2V0VXAodGhpcy5JbmRleENvbG9yKVxyXG4gICAgICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbihwb3NhcnJbTWF0aC5mbG9vcihhcnJpbmRleFtpXS8yKV1bYXJyaW5kZXhbaV0lMl0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQ29sb3IgPSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkNvbG9yQXJyYXlbdGhpcy5JbmRleENvbG9yXVxyXG4gICAgfVxyXG4gICAgdGFvQmxvY2tMVnVvbmdOaG8oY29sb3JpbmRleDogbnVtYmVyLCBpbmRleGludHlwZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuU2l6ZSA9IGNjLnYyKDIsMilcclxuICAgICAgICAvLyBsZXQgY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNilcclxuICAgICAgICAvLyB0aGlzLkluZGV4Q29sb3IgPSBjb2xvclxyXG4gICAgICAgIGlmKGNvbG9yaW5kZXggPT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNilcclxuICAgICAgICAgICAgdGhpcy5JbmRleENvbG9yID0gY29sb3JcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB0aGlzLkluZGV4Q29sb3IgPSBjb2xvcmluZGV4XHJcbiAgICAgICAgbGV0IGFycmluZGV4OiBudW1iZXJbXSA9IFtdXHJcbiAgICAgICAgbGV0IHBvc2FycjogY2MuVmVjMltdW109IFxyXG4gICAgICAgIFtbY2MudjIoLTM2LDM2KSxjYy52MigzNiwzNildLFxyXG4gICAgICAgIFtjYy52MigtMzYsLTM2KSxjYy52MigzNiwtMzYpXV1cclxuICAgICAgICAvLyBsZXQgdHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo1KWxldCB0eXBlID0gMFxyXG4gICAgICAgIGxldCB0eXBlID0gMFxyXG4gICAgICAgIGlmKGluZGV4aW50eXBlID09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo1KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHR5cGUgPSBpbmRleGludHlwZVxyXG4gICAgICAgIHRoaXMuSW5kZXhJblR5cGUgPSB0eXBlXHJcbiAgICAgICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIDAgOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmluZGV4ID0gWzAsMSwyXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxhbmsgPSBbM11cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSAzXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGNhc2UgMSA6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyaW5kZXggPSBbMCwxLDNdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbGFuayA9IFsyXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxvY2tDb3VudCA9IDNcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDIgOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmluZGV4ID0gWzAsMiwzXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmxhbmsgPSBbMV1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSAzXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAzIDpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJpbmRleCA9IFsxLDIsM11cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsYW5rID0gWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CbG9ja0NvdW50ID0gM1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgNCA6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyaW5kZXggPSBbMCwxLDIsM11cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsYW5rID0gW11cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJsb2NrQ291bnQgPSA0XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxhcnJpbmRleC5sZW5ndGg7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5CbG9jaylcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJsb2NrKVxyXG4gICAgICAgICAgICB0aGlzLkJsb2NrQXJyYXkucHVzaChibG9jaylcclxuICAgICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuc2V0VXAodGhpcy5JbmRleENvbG9yKVxyXG4gICAgICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbihwb3NhcnJbTWF0aC5mbG9vcihhcnJpbmRleFtpXS8yKV1bYXJyaW5kZXhbaV0lMl0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQ29sb3IgPSB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkNvbG9yQXJyYXlbdGhpcy5JbmRleENvbG9yXVxyXG4gICAgfVxyXG4gICAgdGFvQmxvY2tOaG8xKGNvbG9yaW5kZXg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLlNpemUgPSBjYy52MigxLDEpXHJcbiAgICAgICAgdGhpcy5CbGFuayA9IFtdXHJcbiAgICAgICAgbGV0IGNvbG9yID0gMFxyXG4gICAgICAgIGlmKGNvbG9yaW5kZXg9PS0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBjb2xvciA9IGNvbG9yaW5kZXhcclxuICAgICAgICB0aGlzLkluZGV4Q29sb3IgPSBjb2xvclxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbG9yKVxyXG4gICAgICAgIHRoaXMuQmxvY2tDb3VudCA9IDFcclxuICAgICAgICBsZXQgYmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJsb2NrKVxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChibG9jaylcclxuICAgICAgICB0aGlzLkJsb2NrQXJyYXkucHVzaChibG9jaylcclxuICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5zZXRVcChjb2xvcilcclxuICAgICAgICBibG9jay5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgICAgIGJsb2NrLnNldFBvc2l0aW9uKDAsMClcclxuICAgICAgICB0aGlzLkNvbG9yID0gdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5Db2xvckFycmF5W2NvbG9yXVxyXG4gICAgfVxyXG4gICAgdGFvTm92YUJsb2NrKClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHR1cm5PZmZMaXN0ZW5lcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTZXRhYmxlKFNpemU6IGNjLlZlYzIsIEJsYW5rOiBudW1iZXJbXSlcclxuICAgIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNoZWNrU2V0YWJsZSBjYWxsZWQgYXQgXCIgKyB0aGlzLkluZGV4SW5RdWV1ZSArIFwidGggQmxvY2tcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhIGNoZWNrIGtob2kgdGh1IFwiICsgdGhpcy5JbmRleEluUXVldWUpXHJcbiAgICAgICAgbGV0IHByZXBvcyA9IHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuUHJlcG9zXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJlcG9zKVxyXG4gICAgICAgIGxldCBzZXRhYmxlID0gZmFsc2VcclxubG9vcDE6XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTw4LVNpemUueCsxO2krKylcclxuICAgICAgICB7XHJcbmxvb3AyOlxyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPDgtU2l6ZS55KzE7aisrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwXHJcbmxvb3AzOlxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBoaT0wO2hpPFNpemUueDtoaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgY2k9MDtjaTxTaXplLnk7Y2krKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFCbGFuay5pbmNsdWRlcyhjaStoaSpTaXplLnkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNhbGxlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJlcG9zW2kraGldW2orY2ldPT0wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlByZXBvcyBvIHZpIHRyaSBcIitbaStoaV0rXCIgXCIgK1tqK2NpXSsgXCIgbGE6IFwiKyBwcmVwb3NbaStoaV1baitjaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoY291bnQ9PVNpemUueCpTaXplLnktQmxhbmsubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldGFibGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWsgbG9vcDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzZXRhYmxlID09IGZhbHNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5TZXRhYmxlPT10cnVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNldGFibGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZC5nZXRDb21wb25lbnQoXCJCb2FyZFwiKS5CbG9ja0F2YWlsYWJsZS0tXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50dXJuT2ZmTGlzdGVuZXIoKVxyXG4gICAgICAgICAgICAvLyB0aGlzLkJvYXJkLm9uKFwiY2hlY2tcIiwoKCk9PntcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY2hlY2tTZXRhYmxlKHRoaXMuU2l6ZSx0aGlzLkJsYW5rKVxyXG4gICAgICAgICAgICAvLyB9KSAsdGhpcylcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjUse29wYWNpdHk6MTAwfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLlNldGFibGU9PWZhbHNlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNldGFibGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJvYXJkLmdldENvbXBvbmVudChcIkJvYXJkXCIpLkJsb2NrQXZhaWxhYmxlKytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcylcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuNSx7b3BhY2l0eToyNTV9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlKGR0KVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuQmxvY2tBcnJheVt0aGlzLkJsb2NrQXJyYXlbMF0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuTmdhbmddW3RoaXMuQmxvY2tBcnJheVswXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5Eb2NdKVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuQmxvY2tBcnJheVswXS5nZXRDb21wb25lbnQoXCJCbG9ja1wiKS5OZ2FuZylcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLkJsb2NrQXJyYXlbMF0uZ2V0Q29tcG9uZW50KFwiQmxvY2tcIikuRG9jKVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuQm9hcmQuZ2V0Q29tcG9uZW50KFwiQm9hcmRcIikuRW1wdHlCbG9ja0FycmF5WzFdWzJdKVxyXG4gICAgICAgIFxyXG4gICAgLy8gfVxyXG4gICAgLy8gcm90YXRlKClcclxuICAgIC8vIHtcclxuICAgIC8vICAgICB0aGlzLkluZGV4ICsrXHJcbiAgICAvLyAgICAgZm9yKGxldCBpPTA7aTwyO2krKylcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQmxvY2tBcnJheVtpXSkudG8oMC4xLHt4OiB0aGlzLlZUQmxvY2tbKHRoaXMuSW5kZXgraSoyKSU0XS54LHk6IHRoaXMuVlRCbG9ja1sodGhpcy5JbmRleCtpKjIpJTRdLnl9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59XHJcblxyXG5cclxuIl19