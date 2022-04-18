// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import FBInstantManager from "./FBInstantManager";
@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Node)
  DiemTween: cc.Node = null;
  @property(cc.Node)
  HighScoreLabel: cc.Node = null;
  // @property(cc.Node)
  // DiemLable: cc.Node = null
  Diem: number = 0;
  HighScore: number = 0;

  onLoad() {
    if(FBInstantManager.getInstance().getPlayerId() !== 'localId'){
      FBInstant.player.getDataAsync([
        'Diem',
        'HighScore',
      ]).then(
        function(data){
          this.Diem = data['Diem']
          this.HighScore = data['HighScore']
        }
      )
    }
    else
    {
      this.Diem = Number(cc.sys.localStorage.getItem("diem"));
      this.HighScore = Number(cc.sys.localStorage.getItem("highscore"));
    }
  }

  congDiem() {
    // cc.sys.localStorage.setItem('highscore', 0)
    cc.tween(this.DiemTween)
      .to(0.5, { angle: this.Diem }, { easing: "cubicOut" })
      .call(() => {
        
        if (FBInstantManager.getInstance().getPlayerId() !== 'localId') {
          FBInstant.player.setDataAsync({
            "Diem": this.Diem,
            "HighScore": this.HighScore,
          }).then(function(data){
            console.log("Data setted")
          });
        }else{
          cc.sys.localStorage.setItem("diem", this.Diem);
          cc.sys.localStorage.setItem("highscore", this.HighScore);
        }
        if (this.HighScore <= this.Diem) this.HighScore = this.Diem;
        
      })
      .start();
  }

  update() {
    let diem = Math.floor(this.DiemTween.angle);
    this.node.getComponent(cc.Label).string = diem.toString();
    this.HighScoreLabel.getComponent(cc.Label).string =
      this.HighScore.toString();
  }
}
