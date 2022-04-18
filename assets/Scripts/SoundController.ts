// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    Board: cc.Node = null

    // @property(cc.Node)
    // gameWinSfx: cc.Node = null;

    @property(cc.AudioClip)
    BGSound: cc.AudioClip = null
    @property(cc.Node)
    SoundButton: cc.Node = null
    @property(cc.SpriteFrame)
    FrameArray: cc.SpriteFrame[] = [] 

    Mute = false



    // LIFE-CYCLE CALLBACKS:

    onLoad()
    {
        this.Board.on("PlaySound",this.playBGSound, this);
        globalThis.Audio_Volume = 0.4
    }
    playBGSound()
    
    {
        cc.audioEngine.play(this.BGSound, false , globalThis.Audio_Volume);
    }

    soundButtonClicked()
    {
        this.Mute = !this.Mute
        if(this.Mute) 
        {
            cc.audioEngine.stopAll()
            globalThis.Audio_Volume = 0
            this.SoundButton.getComponent(cc.Sprite).spriteFrame = this.FrameArray[0]
        }
        else 
        {
            globalThis.Audio_Volume = 0.4
            cc.audioEngine.play(this.BGSound, false , globalThis.Audio_Volume)
            this.SoundButton.getComponent(cc.Sprite).spriteFrame = this.FrameArray[1]
        }
    }
    stopBGSound()
    {

    }
}
