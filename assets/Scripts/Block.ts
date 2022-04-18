// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    Board: cc.Node = null

    CoTheDat = false
    DaDat = false
    Ngang: number = null
    Doc: number = null
    Number = 0
    Color: cc.SpriteFrame = null
    ComponentBoard: any = null
    
    onLoad()
    {
        // this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        // this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.Board = cc.find('Canvas/Screen2/Board')
        this.ComponentBoard = this.Board.getComponent("Board")
        // this.schedule(this.updateTrangThai,0.2)
    }
    setUp(Number: number)
    {
        this.Number = Number
        // this.NumberLabel.string = this.Number.toString()
        this.node.getComponent(cc.Sprite).spriteFrame = this.Board.getComponent("Board").ColorArray[Number]
        this.Color = this.Board.getComponent("Board").ColorArray[Number]
    }

    // onTouchStart(event: cc.Event.EventTouch)
    // {
    //     this.node.opacity = 100
    //     this.Board.getComponent("Board").ColorAnDiem = this.Color
    // }

    // onTouchMove(event: cc.Event.EventTouch)
    // {
    //     let touch = event.getTouches()[0]
    //     let touch_pos = touch.getLocation()
    //     let standard_touch_pos = this.Board.convertToNodeSpaceAR(touch_pos)
    //     this.node.setPosition(standard_touch_pos)
    //     // let touch = event.getTouches()[0]
    //     // let pos = touch.getLocation()
    //     // let prepos = this.node.getPosition()
    //     // prepos.lerp(pos,0.1,prepos)
    //     // this.node.setPosition(prepos)
    // }

    // onTouchEnd(event: cc.Event.EventTouch)
    // {
    //     this.node.opacity = 255
    //     if(this.CoTheDat&&this.Ngang!=null&&this.Doc!=null)
    //     {
    //         this.ComponentBoard.Prepos[this.Ngang][this.Doc] = 1
    //         console.log(this.ComponentBoard.Prepos)
    //         this.Board.getComponent("Board").BlockArray[this.Ngang][this.Doc].destroy()
    //         this.Board.getComponent("Board").BlockArray[this.Ngang][this.Doc] = this.node
    //         this.node.setPosition(this.Board.getComponent("Board").VTNgang[this.Doc],this.Board.getComponent("Board").VTDoc[this.Ngang])
    //         this.ComponentBoard.taoBlockNgauNhien()
    //         this.ComponentBoard.checkAnDiem()
    //         this.turnOffListener()
    //         // this.unschedule(this.updateTrangThai)
    //     }
    //     else
    //     {
    //         this.node.setPosition(0,-450)
    //     }
    // }

    onCollisionEnter(other, self)
    {
        // console.log(other.tag)
        if (other.tag == 1)
        {
            this.CoTheDat = true
            // console.log('va cham voi empty')
            this.Ngang = other.getComponent("EmptyBlock").Ngang
            this.Doc = other.getComponent("EmptyBlock").Doc
            // console.log(other.getComponent("EmptyBlock").Ngang,other.getComponent("EmptyBlock").Doc)
            // console.log(this.Ngang,this.Doc)
        }
        if (other.tag == 3)
        {
            this.CoTheDat = true
        }
    }

    onCollisionExit(other, self)
    {
        if (other.tag == 3)
        {
            // console.log('exit va cham voi empty')
            this.CoTheDat = false
        }
        if (other.tag == 1)
        {
            this.CoTheDat = false
            this.Ngang = null
            this.Doc = null
        //     this.Ngang = null
        //     this.Doc = null
        }
    }
    // updateTrangThai()
    // {
    //     console.log(this.CoTheDat)
    // }
    turnOffListener()
    {
        // this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        // this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        // this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
    }
    // anDiem()
    // {
    //     cc.tween(this.node).to(0.1,{scale: 1.3}).to(0.1,{scale: 1}).start()
    //     this.Number +=1
    //     if(this.Number ==5){
    //         cc.tween(this.node).to(0.1,{scale:0}).call(()=>{
    //             this.Board.getComponent("Board").taoEmptyBlock(this.Ngang,this.Doc)
    //         }).call(()=>{
    //             this.node.destroy()
    //         }).start()
    //     }
    //     this.NumberLabel.string = this.Number.toString()
    //     this.node.color = this.ColorArray[this.Number-1]
    // }
    // update(dt)
    // {
    //     console.log(this.Ngang, this.Doc)
    // }
}