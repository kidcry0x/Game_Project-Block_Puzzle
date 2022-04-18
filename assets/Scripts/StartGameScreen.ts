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
    MainCamera: cc.Node = null
    @property(cc.Node)
    BlackCloak: cc.Node = null
    @property(cc.Node)
    Gamecontroller: cc.Node = null
    @property(cc.Node)
    StartGameLabel: cc.Node = null
    TouchStartLocation: cc.Vec2 = null
    TouchEndLocation: cc.Vec2 = null

    onLoad()
    {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.labelAnimation()
        this.schedule(this.labelAnimation,1)
    }
    onTouchStart(event: cc.Event.EventTouch)
    {
        // console.log("djsahdsailjlk")
        this.TouchStartLocation = event.getLocation()
        // this.node.opacity = 100
    }
    onTouchEnd(event: cc.Event.EventTouch)
    {
        this.TouchEndLocation = event.getLocation()
        if(this.TouchStartLocation.sub(this.TouchEndLocation).mag()<20)
        {
            this.Gamecontroller.getComponent("Gamecontroller").enterGame()
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
            this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        }
    }
    labelAnimation()
    {
        cc.tween(this.StartGameLabel).to(0.5,{scale:1.3}).to(0.5,{scale:1}).start()
    }
    turnOnListener()
    {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
    }
}
