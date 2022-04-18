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
    @property(cc.Node)
    PauseButton: cc.Node = null
    @property(cc.Node)
    PauseMenu: cc.Node = null
    @property(cc.Node)
    Cloak: cc.Node = null
    @property(cc.Node)
    MainOptionMenu: cc.Node = null
    @property(cc.Node)
    MainCamera: cc.Node = null
    @property(cc.Node)
    BlackCloak: cc.Node = null
    @property(cc.Node)
    Screen1: cc.Node = null

    onLoad()
    {
        cc.director.getCollisionManager().enabled = true
        // cc.director.getCollisionManager().enabledDebugDraw = ???????????????????????????????????????????????????????????????
        this.Cloak.active = false
        this.MainOptionMenu.scale = 0
        this.BlackCloak.opacity = 0
        this.MainCamera.x = -5000
        // cc.sys.localStorage.setItem("test", Number(100))
        // console.log(typeof(cc.sys.localStorage.getItem("test")))
        // cc.sys.localStorage.setItem('highscore', Number(0))
        // cc.sys.localStorage.setItem('diem', Number(0))
    }
    openPauseMenu()
    {
        this.MainOptionMenu.active = true
        this.Cloak.active = true
        cc.tween(this.MainOptionMenu).to(0.2,{scale:1.3}).to(0.1,{scale:1}).start()
    }
    closePauseMenu()
    {
        this.Cloak.active = false
        cc.tween(this.MainOptionMenu).to(0.1,{scale:1.3}).to(0.2,{scale:0}).call(()=>{
            this.MainOptionMenu.active = false
        }).start()
    }
    // update()
    // {
    //     console.log(this.MainCamera.getPosition().x, this.MainCamera.getPosition().y)
    // }
    enterGame()
    {
        cc.tween(this.BlackCloak).to(0.5,{opacity:255}).call(()=>{
            this.MainCamera.x = 0
        }).to(0.5,{opacity:0}).start()
    }
    outGame()
    {
        cc.tween(this.BlackCloak).to(0.5,{opacity:255}).call(()=>{
            this.MainCamera.x = -5000
        }).to(0.5,{opacity:0}).start()
        this.Screen1.getComponent("StartGameScreen").turnOnListener()
    }
}
