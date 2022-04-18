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
    Ngang: number = null
    Doc: number = null
    PreviousNgang: number = null
    PreviousDoc: number = null
    CoTheDat = false
    BoardComponent: any = null
    flickingBlock: any = null
    BlockBoard: cc.Node = null

    onLoad()
    {
        this.Board = cc.find('Canvas/Screen2/Board')
        this.BoardComponent = this.Board.getComponent("Board")
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.BlockBoard = cc.find('Canvas/Screen2/Board/BlockBoard')
        console.log("Dakhoitao")
        // this.node.getComponent(cc.Animation).play("FlickingNovaBlock")
        this.node.getComponent(cc.Animation).play("NovaChangeColor")
        this.flickingBlock= function (block: cc.Node)
        {
            block.opacity = 100
            cc.tween(block).to(0.4,{opacity:255}).to(0.4,{opacity:100}).start()
        }
        
    }

    onTouchStart()
    {
        this.Board.getComponent("Board").zIndex +=1
        this.node.zIndex = this.Board.getComponent("Board").zIndex
        this.BlockBoard.sortAllChildren()
    }

    onTouchMove(event)
    {
        let touch = event.getTouches()[0]
        let touch_pos = touch.getLocation()
        let standard_touch_pos = this.Board.convertToNodeSpaceAR(touch_pos)
        this.node.setPosition(standard_touch_pos)
        
    }

    onTouchEnd()
    {
        if(this.CoTheDat)
        {
            let n = this.Ngang
            let d = this.Doc
            // this.Board.getComponent("Board").BlockArray[this.BlockArray[i].getComponent("Block").Ngang][this.BlockArray[i].getComponent("Block").Doc].destroy()
            // this.BoardComponent.BlockArray[n][d] = this.BlockArray[i]
            // this.BoardComponent.EmptyBlockArray[n][d].scale = 0
            // this.BoardComponent.Prepos[n][d] = 1
            // this.BoardComponent.IndexColorArray[n][d] = this.IndexColor
            this.node.setPosition(this.Board.getComponent("Board").VTNgang[this.Doc],this.Board.getComponent("Board").VTDoc[this.Ngang])
            this.BoardComponent.checkAnDiem()
            for(let i=-1;i<2;i++)
            {
                for(let j=-1;j<2;j++)
                {
                    if(this.Ngang+i<8&&this.Ngang+i>=0&&this.Doc+j<8&&this.Doc+j>=0)
                    {
                        if(this.BoardComponent.Prepos[this.Ngang+i][this.Doc+j] == 1&&!(i==0&&j==0))
                        {
                            this.BoardComponent.EmptyBlockArray[this.Ngang+i][this.Doc+j].scale = 1
                            cc.tween(this.BoardComponent.BlockArray[this.Ngang+i][this.Doc+j]).to(0.1,{opacity:0}).call(()=>{
                                this.BoardComponent.BlockArray[this.Ngang+i][this.Doc+j].destroy()
                            }).start()
                        }
                    }
                }
            }
            this.BoardComponent.taoBlockNgauNhien()
            cc.tween(this.node).to(0.1,{opacity:0}).call(()=>{
                this.node.destroy()
            }).start()
        }
        else
        {
            cc.tween(this.node).to(0.1,{x:0,y:-430}).start()
        }
    }

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
            // this.BoardComponent.Prepos[this.Ngang][this.Doc] = 1
            for(let i=-1;i<2;i++)
            {
                for(let j=-1;j<2;j++)
                {
                    if(this.Ngang+i<8&&this.Ngang+i>=0&&this.Doc+j<8&&this.Doc+j>=0)
                    {
                        if(this.BoardComponent.Prepos[this.Ngang+i][this.Doc+j] == 1&&!(i==0&&j==0))
                        {
                            // cc.tween(this.BoardComponent.BlockArray[this.Ngang+i][this.Doc+j]).to(0.1,{scale:1.3}).start()
                            this.BoardComponent.BlockArray[this.Ngang+i][this.Doc+j].scale = 1.3
                        }
                    }
                }
            }
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
            console.log("Huy va cham")
            this.CoTheDat = false
        }
        if (other.tag == 1)
        {
            this.CoTheDat = false
            // this.BoardComponent.Prepos[this.Ngang][this.Doc] = 0
            for(let i=-1;i<2;i++)
            {
                for(let j=-1;j<2;j++)
                {
                    if(this.Ngang+i<8&&this.Ngang+i>=0&&this.Doc+j<8&&this.Doc+j>=0)
                    {
                        if(this.BoardComponent.Prepos[this.Ngang+i][this.Doc+j] == 1&&!(i==0&&j==0))
                        {
                            // cc.tween(this.BoardComponent.BlockArray[this.Ngang+i][this.Doc+j]).to(0.1,{scale:1}).start()
                            this.BoardComponent.BlockArray[this.Ngang+i][this.Doc+j].scale = 1
                        }
                    }
                }
            }
            this.Ngang = null
            this.Doc = null
            
            
            
        //     this.Ngang = null
        //     this.Doc = null
        }
    }
    turnOffListener()
    {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
    }
    // update()
    // {
    //     console.log("Vi tri hien tai la: " + this.Ngang + " " + this.Doc)
    // }
}
