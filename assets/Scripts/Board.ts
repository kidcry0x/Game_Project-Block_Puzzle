// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import FBInstantManager from "./FBInstantManager";
@ccclass
export default class Board extends cc.Component {
  @property(cc.Node)
  GameController: cc.Node = null;
  @property(cc.Prefab)
  Block: cc.Prefab = null;
  @property(cc.Prefab)
  EmptyBlock: cc.Prefab = null;
  @property(cc.Node)
  EmptyBlockBoard: cc.Node = null;
  @property(cc.SpriteFrame)
  ColorArray: cc.SpriteFrame[] = [];
  ColorAnDiem: cc.SpriteFrame = null;
  @property(cc.Prefab)
  BlockContain: cc.Prefab = null;
  @property(cc.Node)
  BlockReadyContainer: cc.Node = null;
  @property(cc.Node)
  BlockBoard: cc.Node = null;
  AnNgang: number[] = [];
  AnDoc: number[] = [];
  XoaAnNgangIndex: number[] = [];
  XoaAnDocIndex: number[] = [];
  Check: boolean = false;
  pause: boolean = false;
  BlockRemaining: number = 0;
  BlockRemainingArr: cc.Node[] = [];
  zIndex = 0;
  Lose = false;

  Type: number = -1;
  TypeIndex: number = -1;
  @property(cc.Node)
  DiemLabel: cc.Node = null;

  BlockAvailable: number = 0;
  @property(cc.Node)
  CloakLose: cc.Node = null;
  @property(cc.Node)
  NGButton: cc.Node = null;
  @property(cc.Node)
  LoseImg: cc.Node = null;
  CarryingNode: cc.Node = null;
  @property(cc.Prefab)
  NovaBlock: cc.Prefab = null;

  CreateNova = false;

  IsNewbie = false;
  @property(cc.Node)
  Note: cc.Node = null;
  @property(cc.Node)
  NoteLabel: cc.Node = null;
  @property(cc.Node)
  Hand: cc.Node = null;

  EmptyBlockArray: cc.Node[][] = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ];

  BlockArray: cc.Node[][] = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ];

  Prepos: Number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
  IndexColorArray: Number[][] = [
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
  ];
  DaAn: Number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
  VTNgang: number[] = [-252, -180, -108, -36, 36, 108, 180, 252];
  VTDoc: number[] = [252, 180, 108, 36, -36, -108, -180, -252];
  IsPlaying = true;

  onLoad() {
    this.Hand.active = false;
    // let fbinstant = GBInstantManager.getInstance();
    // console.log(fbinstant.getPlayerId());
    let test = [5, 4, 6, 7];
    let jsontest = JSON.stringify(test);
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
    } else if (this.Lose == true) {
      // console.log("New game")
      this.newGame();
      // cc.sys.localStorage.setItem("IsLose", false);
      this.saveData("IsLose", false);
    } else this.recalldata();
    // console.log("dagoi")
    // this.taoBlockNgauNhien()
    // console.log(cc.sys.localStorage.getItem("diem"))
    this.node.emit("PlaySound");
  }

  tutorial() {
    this.step1();
  }
  step1() {
    this.Hand.active = true;
    this.schedule(() => {
      cc.tween(this.Hand)
        .call(() => {
          this.Hand.y = -720;
        })
        .to(0.5, { y: -20 })
        .start();
    }, 0.7);
    this.node.on("nextStep", this.step2, this);
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (i != 3 && i != 4 && i != 3 && i != 4) {
          this.EmptyBlockArray[i][j].getComponent(cc.BoxCollider).enabled =
            false;
        }
      }
    }
    for (let i = 3; i < 5; i++) {
      for (let j = 0; j < 8; j++) {
        if (j != 3 && j != 4) {
          this.Prepos[i][j] = 1;
          this.EmptyBlockArray[i][j].scale = 0;
          let block = cc.instantiate(this.BlockContain);
          this.BlockBoard.addChild(block);
          block.getComponent("BlockContain").khoitao(99, 2);
          block.getComponent("BlockContain").turnOffListener();
          block.scale = 1;
          block.setPosition(0, 0);
          let childarr = block.children;
          let child = childarr[0];
          // console.log(child)
          child.setPosition(this.VTNgang[j], this.VTDoc[i]);
          child.getComponent("Block").Ngang = i;
          child.getComponent("Block").Doc = j;
          this.BlockArray[i][j] = child;
        }
      }
    }
    for (let i = 3; i < 5; i++) {
      for (let j = 0; j < 8; j++) {
        if (j != 3 && j != 4) {
          this.Prepos[j][i] = 1;
          this.EmptyBlockArray[j][i].scale = 0;
          let block = cc.instantiate(this.BlockContain);
          this.BlockBoard.addChild(block);
          block.getComponent("BlockContain").khoitao(99, 2);
          block.getComponent("BlockContain").turnOffListener();
          block.scale = 1;
          block.setPosition(0, 0);
          let childarr = block.children;
          let child = childarr[0];
          // console.log(child)
          child.setPosition(this.VTNgang[i], this.VTDoc[j]);
          child.getComponent("Block").Ngang = j;
          child.getComponent("Block").Doc = i;
          this.BlockArray[j][i] = child;
        }
      }
    }
    let block = cc.instantiate(this.BlockContain);
    this.BlockBoard.addChild(block);
    block.getComponent("BlockContain").khoitao(75, 2, 4);
    block.setPosition(0, -430);
  }
  step2() {
    this.node.off("nextStep", this.step2, this);
    this.node.on("nextStep", this.step3, this);
    // console.log("Step2");
    cc.tween(this.node)
      .delay(1)
      .call(() => {
        this.NoteLabel.getComponent(cc.Label).string =
          "If you match 3 row or collumn you will recieved a special block called NovaBlock.";
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            if (i != 3 && j != 3) {
              this.EmptyBlockArray[i][j].getComponent(cc.BoxCollider).enabled =
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
        for (let i = 2; i < 5; i++) {
          for (let j = 2; j < 5; j++) {
            if (!(i == 3 && j == 3)) {
              this.Prepos[j][i] = 1;
              this.EmptyBlockArray[j][i].scale = 0;
              let block = cc.instantiate(this.BlockContain);
              this.BlockBoard.addChild(block);
              block.getComponent("BlockContain").khoitao(99, 2);
              block.getComponent("BlockContain").turnOffListener();
              block.scale = 1;
              block.setPosition(0, 0);
              let childarr = block.children;
              let child = childarr[0];
              // console.log(child)
              child.setPosition(this.VTNgang[i], this.VTDoc[j]);
              child.getComponent("Block").Ngang = j;
              child.getComponent("Block").Doc = i;
              this.BlockArray[j][i] = child;
            }
          }
        }
        let block = cc.instantiate(this.NovaBlock);
        this.BlockBoard.addChild(block);
        block.setPosition(0, -430);
      })
      .start();
  }
  step3() {
    this.node.off("nextStep", this.step3, this);
    console.log("Step3");
    this.IsNewbie = false;
    this.CreateNova = false;
    cc.tween(this.node)
      .call(() => {
        this.NoteLabel.getComponent(cc.Label).string = "Lets start";
      })
      .delay(1.5)
      .call(() => {
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            if (i != 3 && i != 4 && i != 3 && i != 4) {
              this.EmptyBlockArray[i][j].getComponent(cc.BoxCollider).enabled =
                true;
            }
          }
        }
        this.Note.active = false;
        this.newGame();
      })
      .start();
  }
  taoNovaBlock() {
    let novablock = cc.instantiate(this.NovaBlock);
    this.BlockBoard.addChild(novablock);
    novablock.setPosition(0, -430);
    this.BlockRemaining = 1;
    this.BlockAvailable = 1;
    // cc.sys.localStorage.setItem("BA", this.BlockAvailable);
    // cc.sys.localStorage.setItem("BR", this.BlockRemaining);
    this.saveData("BA", this.BlockAvailable);
    this.saveData("BR", this.BlockRemaining);
  }
  recallMemory(name: any = null, key: string) {
    console.log("Check name params before", name);

    if (FBInstantManager.getInstance().getPlayerId() !== "localId") {
      FBInstant.player.getDataAsync([key]).then(function (data) {
        console.log("key", key);

        if (key === "data") {
          console.log("data get from FB", data[key], key);

          let dataParsed = JSON.parse(data[key]);
          name = dataParsed;
          this.Prepos = name.prepos;
          // console.log(data.prepos)
          this.IndexColorArray = name.indexcolor;
          console.log("data of json params", name);
        } else {
          name = data[key];
        }
        // name = data[key]
      });
    } else {
      if (key == "data") {
        name = JSON.parse(cc.sys.localStorage.getItem(key));
        console.log("Data after save", name);

        console.log("temp:", name);
        this.Prepos = name.prepos;
        this.IndexColorArray = name.indexcolor;
      } else {
        name = cc.sys.localStorage.getItem(key);
        console.log("name: ", name, "key: ", key);
      }
    }

    console.log("Check name params after", name);
  }

  recallMemory2(key: string) {
    return new Promise((resolve) => {
      if (FBInstantManager.getInstance().getPlayerId() !== "localId") {
        FBInstant.player.getDataAsync([key]).then(function (data) {
          console.log("key", key);
          if (key === "data") {
            console.log("data get from FB", data[key], key);
            let dataParsed = JSON.parse(data[key]);
            resolve(dataParsed);
          } else {
            resolve(data[key]);
          }
        });
      } else {
        if (key == "data") {
          resolve(JSON.parse(cc.sys.localStorage.getItem(key)));
        } else {
          resolve(cc.sys.localStorage.getItem(key));
        }
      }
    });
  }

  saveData(key: string, value: any) {
    if (FBInstantManager.getInstance().getPlayerId() !== "localId") {
      FBInstant.player.setDataAsync({ key: value }).then(function () {
        // console.log("data is setted");
      });
    } else {
      cc.sys.localStorage.setItem(key, value);
    }
  }

  recalldata() {
    console.log("data recalled");
    // var data = JSON.parse(cc.sys.localStorage.getItem("data"));
    let datarecall: any = null;
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
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.Prepos[i][j] == 1) {
          // console.log("Fjfojdsfjsfjs")
          this.EmptyBlockArray[i][j].scale = 0;
          let blockrecall = cc.instantiate(this.BlockContain);
          this.BlockBoard.addChild(blockrecall);
          blockrecall
            .getComponent("BlockContain")
            .khoitao(99, this.IndexColorArray[i][j]);
          blockrecall.getComponent("BlockContain").turnOffListener();
          blockrecall.scale = 1;
          blockrecall.setPosition(0, 0);
          let childarr = blockrecall.children;
          let child = childarr[0];
          // console.log(child)
          child.setPosition(this.VTNgang[j], this.VTDoc[i]);
          child.getComponent("Block").Ngang = i;
          child.getComponent("Block").Doc = j;
          this.BlockArray[i][j] = child;
        }
      }
    }
    this.recallRemainingBlock();
  }
  recallRemainingBlock() {
    // this.BlockRemaining = cc.sys.localStorage.getItem("BR");
    this.recallMemory(this.BlockRemaining, "BR");
    this.BlockAvailable = this.BlockRemaining; //cc.sys.localStorage.getItem("BA")
    for (let i = 0; i < 3; i++) {
      let name = "blockdata" + i.toString();
      let datajson = null;
      console.log("Block name: ", name);

      this.recallMemory(datajson, name);

      console.log("datajson: ", datajson);

      let data = JSON.parse(datajson);

      console.log("data :" + data);

      if (data.recall == true) {
        console.log("da recall 1 khoi");
        this.zIndex += 1;
        let blocknn = cc.instantiate(this.BlockContain);
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
  }
  newGame() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.EmptyBlockArray[i][j].getComponent(cc.BoxCollider).enabled = false;
      }
    }
    this.zIndex = 0;
    this.BlockBoard.removeAllChildren();
    this.taoBlockNgauNhien();
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
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
  }

  boardSetUp() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.taoEmptyBlock(i, j);
        // let emptyblock = cc.instantiate(this.EmptyBlock)
        // this.EmptyBlockBoard.addChild(emptyblock)
        // this.BlockArray[i][j] = emptyblock
        // emptyblock.getComponent("EmptyBlock").Ngang = i
        // emptyblock.getComponent("EmptyBlock").Doc = j
        // emptyblock.setPosition(cc.v2(this.VTNgang[i],this.VTDoc[j]))
      }
    }
  }

  taoBlockNgauNhien() {
    this.BlockAvailable = 3;
    this.BlockRemainingArr = [];
    for (let i = 0; i < 3; i++) {
      // console.log("da tao")
      this.zIndex += 1;
      let blocknn = cc.instantiate(this.BlockContain);
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
      let blocktemp = this.BlockRemainingArr[2];
      this.BlockRemainingArr.pop();
      blocktemp.destroy();
      let block1 = cc.instantiate(this.BlockContain);
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
  }

  taoEmptyBlock(i: number, j: number) {
    let emptyblock = cc.instantiate(this.EmptyBlock);
    this.EmptyBlockBoard.addChild(emptyblock);
    this.BlockArray[i][j] = emptyblock;
    this.EmptyBlockArray[i][j] = emptyblock;
    emptyblock.getComponent("EmptyBlock").Ngang = i;
    emptyblock.getComponent("EmptyBlock").Doc = j;
    emptyblock.setPosition(cc.v2(this.VTNgang[j], this.VTDoc[i]));
  }
  ChayLai = false;
  UsedBlock: cc.Vec2[] = [];

  checkAnDiem() {
    // this.node.emit("check")
    this.pause = true;
    let sodayan = 0;
    let Hang: number[] = [];
    let Cot: number[] = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.Prepos[i][j] == 0) break;
        if (j == 7) {
          sodayan += 1;
          // this.AnNgang.push(i)
          Hang.push(i);
          for (let k = 0; k < 8; k++) {
            if (
              this.Prepos[i][k] == 1 &&
              this.BlockArray[i][k].name == "Block"
            ) {
              // this.BlockArray[i][k].getComponent(cc.Sprite).spriteFrame = this.ColorAnDiem
              this.DaAn[i][k] = 1;
              this.EmptyBlockArray[i][k].scale = 1;
              cc.tween(this.BlockArray[i][k])
                .to(0.3, { scale: 1.3, opacity: 100 })
                .call(() => {
                  this.BlockArray[i][k].destroy();
                  this.BlockArray[i][k] = this.EmptyBlockArray[i][k];
                })
                .start();
            }
          }
        }
      }
    }
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.Prepos[j][i] == 0) break;
        if (j == 7) {
          // this.AnDoc.push(i)
          sodayan += 1;
          Cot.push(i);
          for (let k = 0; k < 8; k++) {
            if (
              this.Prepos[k][i] == 1 &&
              this.BlockArray[k][i].name == "Block" &&
              this.DaAn[k][i] != 1
            ) {
              this.EmptyBlockArray[k][i].scale = 1;
              cc.tween(this.BlockArray[k][i])
                .to(0.3, { scale: 1.3, opacity: 100 })
                .call(() => {
                  this.BlockArray[k][i].destroy();
                  this.BlockArray[k][i] = this.EmptyBlockArray[k][i];
                })
                .start();
            }
          }
        }
      }
    }
    console.log(Hang, Cot);
    for (let i = 0; i < Hang.length; i++) {
      for (let j = 0; j < 8; j++) {
        this.Prepos[Hang[i]][j] = 0;
        this.IndexColorArray[Hang[i]][j] = -1;
        this.DaAn[Hang[i]][j] = 0;
      }
    }
    for (let i = 0; i < Cot.length; i++) {
      for (let j = 0; j < 8; j++) {
        this.Prepos[j][Cot[i]] = 0;
        this.IndexColorArray[j][Cot[i]] = -1;
        this.DaAn[j][Cot[i]] = 0;
      }
    }
    if (sodayan >= 3) this.CreateNova = true;
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
      .call(() => {
        this.pause = false;
      })
      .start();
  }

  checkSetable() {
    for (let a in this.BlockRemainingArr) {
      this.BlockRemainingArr[a]
        .getComponent("BlockContain")
        .checkSetable(
          this.BlockRemainingArr[a].getComponent("BlockContain").Size,
          this.BlockRemainingArr[a].getComponent("BlockContain").Blank
        );
    }
    // console.log(this.BlockRemainingArr[0]==undefined)
    console.log(this.BlockAvailable);
    cc.tween(this.node)
      .delay(0.3)
      .call(() => {
        if (this.BlockAvailable == 0) {
          //Thua Cuoc
          cc.tween(this.node)
            .call(() => {
              cc.tween(this.CloakLose).to(2, { opacity: 150 }).start();
            })
            .delay(1)
            .call(() => {
              this.LoseImg.active = true;
              this.LoseImg.scale = 10;
              cc.tween(this.LoseImg).to(1, { scale: 1 }).start();
            })
            .delay(0.5)
            .call(() => {
              this.NGButton.active = true;
              this.NGButton.opacity = 0;
              cc.tween(this.NGButton).to(1, { opacity: 255 }).start();
            })
            .start();
          console.log("Thua cuoc");
          this.Lose = true;
          // cc.sys.localStorage.setItem("IsLose", this.Lose);
          this.saveData("IsLose", this.Lose);
        }
      })
      .start();
  }
  resetLoseImg() {
    this.CloakLose.opacity = 0;
    this.LoseImg.active = false;
    this.NGButton.active = false;
  }

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
