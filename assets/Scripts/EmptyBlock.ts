// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BlockContain from "./BlockContain";
import Board from "./Board";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  Ngang = 0;
  Doc = 0;
  Number = 0;
  Board: cc.Node = null;
  BoardComponent: Board;

  onLoad() {
    this.Board = cc.find("Canvas/Screen2/Board");
    this.BoardComponent = this.Board.getComponent(Board);
  }
  onCollisionEnter(other, self) {
    // try {
    if (other.tag == 2) {
      // console.log(this.BoardComponent);
      
      this.node.opacity = 100;
      this.BoardComponent.Prepos[this.Ngang][this.Doc] = 1;
      // console.log('va cham voi block', this.Ngang, this.Doc)
      this.checkSetable();
      cc.tween(this.node)
        .delay(0.005)
        .call(() => {
          this.checkChangeColor();
        })
        .start();
    }
    // } catch (error) {
    //   console.log(error);
    // }
  }
  onCollisionExit(other, self) {
    if (other.tag == 2) {
      this.node.opacity = 200;
      this.BoardComponent.Prepos[this.Ngang][this.Doc] = 0;
      // console.log('exit va cham block')
      this.checkSetable();
      cc.tween(this.node)
        .delay(0.005)
        .call(() => {
          this.checkChangeColor();
        })
        .start();
    }
  }
  checkChangeColor() {
    if (!this.BoardComponent.pause) {
      console.log(this.BoardComponent.Check);

      // console.log(this.BoardComponent.BlockArray)
      // console.log(this.BoardComponent.ChayLai)
      if (this.BoardComponent.Check) {
        console.log("step2");

        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            if (this.BoardComponent.Prepos[i][j] == 0) break;
            if (j == 7) {
              this.BoardComponent.AnNgang.push(i);
              for (let k = 0; k < 8; k++) {
                if (
                  this.BoardComponent.Prepos[i][k] == 1 &&
                  this.BoardComponent.BlockArray[i][k].name == "Block"
                ) {
                  console.log("step4");

                  this.BoardComponent.BlockArray[i][k].getComponent(
                    cc.Sprite
                  ).spriteFrame = this.BoardComponent.ColorAnDiem;
                }
              }
            }
          }
        }
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            if (this.BoardComponent.Prepos[j][i] == 0) break;
            if (j == 7) {
              this.BoardComponent.AnDoc.push(i);
              for (let k = 0; k < 8; k++) {
                if (
                  this.BoardComponent.Prepos[k][i] == 1 &&
                  this.BoardComponent.BlockArray[k][i].name == "Block"
                ) {
                  console.log("check 2");

                  this.BoardComponent.BlockArray[k][i].getComponent(
                    cc.Sprite
                  ).spriteFrame = this.BoardComponent.ColorAnDiem;
                }
              }
            }
          }
        }
      }
      for (let i = 0; i < this.BoardComponent.AnNgang.length; i++) {
        for (let j = 0; j < 8; j++) {
          if (
            this.BoardComponent.Prepos[this.BoardComponent.AnNgang[i]][j] == 0
          ) {
            this.BoardComponent.XoaAnNgangIndex.push(i);
            for (let k = 0; k < 8; k++) {
              if (
                this.BoardComponent.BlockArray[this.BoardComponent.AnNgang[i]][
                  k
                ].name == "Block"
              )
                this.BoardComponent.BlockArray[this.BoardComponent.AnNgang[i]][
                  k
                ]
                  .getComponent("Block")
                  .setUp(
                    this.BoardComponent.BlockArray[
                      this.BoardComponent.AnNgang[i]
                    ][k].getComponent("Block").Number
                  );
            }
            break;
          }
        }
      }
      for (let i = 0; i < this.BoardComponent.XoaAnNgangIndex.length; i++) {
        this.BoardComponent.AnNgang.splice(
          this.BoardComponent.XoaAnNgangIndex[i],
          1
        );
      }
      this.BoardComponent.XoaAnNgangIndex = [];
      for (let i = 0; i < this.BoardComponent.AnDoc.length; i++) {
        for (let j = 0; j < 8; j++) {
          if (
            this.BoardComponent.Prepos[j][this.BoardComponent.AnDoc[i]] == 0
          ) {
            this.BoardComponent.XoaAnDocIndex.push(i);
            for (let k = 0; k < 8; k++) {
              if (
                this.BoardComponent.BlockArray[k][this.BoardComponent.AnDoc[i]]
                  .name == "Block"
              )
                this.BoardComponent.BlockArray[k][this.BoardComponent.AnDoc[i]]
                  .getComponent("Block")
                  .setUp(
                    this.BoardComponent.BlockArray[k][
                      this.BoardComponent.AnDoc[i]
                    ].getComponent("Block").Number
                  );
            }
            break;
          }
        }
      }
      for (let i = 0; i < this.BoardComponent.XoaAnDocIndex.length; i++) {
        this.BoardComponent.AnDoc.splice(
          this.BoardComponent.XoaAnDocIndex[i],
          1
        );
      }
      this.BoardComponent.XoaAnDocIndex = [];
      if (this.BoardComponent.CarryingNode != null) {
        for (
          let i = 0;
          i <
          this.BoardComponent.CarryingNode.getComponent("BlockContain")
            .BlockArray.length;
          i++
        ) {
          if (
            this.BoardComponent.AnNgang.indexOf(
              this.BoardComponent.CarryingNode.getComponent(
                "BlockContain"
              ).BlockArray[i].getComponent("Block").Ngang
            ) != -1 ||
            this.BoardComponent.AnDoc.indexOf(
              this.BoardComponent.CarryingNode.getComponent(
                "BlockContain"
              ).BlockArray[i].getComponent("Block").Doc
            ) != -1
          )
            this.BoardComponent.CarryingNode.getComponent(
              "BlockContain"
            ).BlockArray[i].getComponent(cc.Sprite).spriteFrame =
              this.BoardComponent.ColorAnDiem;
          else
            this.BoardComponent.CarryingNode.getComponent(
              "BlockContain"
            ).BlockArray[i].getComponent(cc.Sprite).spriteFrame =
              this.BoardComponent.CarryingNode.getComponent(
                "BlockContain"
              ).Color;
        }
      }
    }
  }
  checkSetable() {
    let CoTheDat = true;
    if(this.BoardComponent.CarryingNode!= null){
    for (
      let i = 0;
      i <this.BoardComponent.CarryingNode.getComponent(BlockContain).BlockArray
        .length;i++
    ) {
      if (
        this.BoardComponent.CarryingNode.getComponent(BlockContain).BlockArray[
          i
        ].getComponent("Block").CoTheDat &&
        this.BoardComponent.CarryingNode.getComponent(BlockContain).BlockArray[
          i
        ].getComponent("Block").Ngang != null &&
        this.BoardComponent.CarryingNode.getComponent(BlockContain).BlockArray[
          i
        ].getComponent("Block").Doc != null
      )
        CoTheDat = true;
      else {
        CoTheDat = false;
        break;
      }
    }
    this.BoardComponent.Check = CoTheDat;
  }}
  // update()
  // {
  //     console.log(this.node.name)
  // }
}
