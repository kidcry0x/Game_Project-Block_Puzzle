// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    Block: cc.Prefab = null
    Board: cc.Node = null
    VTBlock: cc.Vec2[] = [cc.v2(-36,0),cc.v2(0,36),cc.v2(36,0),cc.v2(0,-36)]
    BlockArray: cc.Node[] = []
    CoTheDat = false
    TouchStartLocation: cc.Vec2 = null
    TouchEndLocation: cc.Vec2 = null
    Index = 0
    onLoad()
    {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.Board = cc.find('Canvas/Screen2/Board')
        for(let i=0;i<2;i++)
        {
            this.taoBlock(2*i)
        }
    }
    onTouchStart(event: cc.Event.EventTouch)
    {
        this.TouchStartLocation = event.getLocation()
    }

    onTouchMove(event: cc.Event.EventTouch)
    {
        let touch = event.getTouches()[0]
        let touch_pos = touch.getLocation()
        let standard_touch_pos = this.Board.convertToNodeSpaceAR(touch_pos)
        this.node.setPosition(standard_touch_pos)
    }
    onTouchEnd(event: cc.Event.EventTouch)
    {
        this.TouchEndLocation = event.getLocation()
        if(this.TouchEndLocation.sub(this.TouchStartLocation).mag()<10)
        {
            this.rotate()
        }
        for(let i =0;i<2;i++)
        {
            if(this.BlockArray[i].getComponent("Block").CoTheDat&&this.BlockArray[i].getComponent("Block").Ngang!=null&&this.BlockArray[i].getComponent("Block").Doc!=null)
            this.CoTheDat = true
            else
            {
                this.CoTheDat = false
                break
            }
        }
        if(this.CoTheDat)
        {
            for(let i=0;i<2;i++)
            {
                this.Board.getComponent("Board").BlockArray[this.BlockArray[i].getComponent("Block").Ngang][this.BlockArray[i].getComponent("Block").Doc].destroy()
                this.Board.getComponent("Board").BlockArray[this.BlockArray[i].getComponent("Block").Ngang][this.BlockArray[i].getComponent("Block").Doc] = this.BlockArray[i]
                // this.Board.addChild(this.BlockArray.shift())
                this.BlockArray[i].setPosition(this.Board.getComponent("Board").VTNgang[this.BlockArray[i].getComponent("Block").Doc],this.Board.getComponent("Board").VTDoc[this.BlockArray[i].getComponent("Block").Ngang])
                this.node.setPosition(0,0)
                // this.Board.getComponent("Board").taoBlock()
                console.log(this.BlockArray[i].x,this.BlockArray[i].y)
                this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
                this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
                this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
            }
            this.Board.getComponent("Board").taoBlockNgauNhien()
            this.Board.getComponent("Board").checkMerge()
            // for(let i=0;i<2;i++)
            // this.Bo1ard.addChild(this.BlockArray.shift())
        }
        else this.node.setPosition(0,-450)
    }
    taoBlock(index: number)
    {
        let block = cc.instantiate(this.Block)
        this.node.addChild(block)
        this.BlockArray.push(block)
        block.setPosition(this.VTBlock[index])
        let number = Math.floor(Math.random()*3)+1
        block.getComponent("Block").setUp(number)
        block.getComponent("Block").turnOffListener()
    }
    rotate()
    {
        this.Index ++
        for(let i=0;i<2;i++)
        {
            cc.tween(this.BlockArray[i]).to(0.1,{x: this.VTBlock[(this.Index+i*2)%4].x,y: this.VTBlock[(this.Index+i*2)%4].y}).start()
        }
    }
}
