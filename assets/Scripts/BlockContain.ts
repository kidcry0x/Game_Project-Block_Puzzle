// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BlockContain extends cc.Component {

    @property(cc.Prefab)
    Block: cc.Prefab = null
    Board: cc.Node = null
    HoldingBlockContainer: cc.Node = null
    // VTBlock: cc.Vec2[] = [cc.v2(-36,0),cc.v2(0,36),cc.v2(36,0),cc.v2(0,-36)]
    BlockArray: cc.Node[] = []
    CoTheDat = false
    TouchStartLocation: cc.Vec2 = null
    TouchEndLocation: cc.Vec2 = null
    Index = 0
    Color: cc.SpriteFrame = null
    BlockCount:number = 0
    IndexColor = -1
    TypeNumber = 0
    DiemLabel: cc.Node = null

    Size: cc.Vec2 = null
    Blank: number[] = null

    IndexInQueue: number = -1

    Setable = true

    IndexType: number = -1
    IndexInType: number = -1

    BlockBoard: cc.Node = null

    onLoad()
    {
        this.Board = cc.find('Canvas/Screen2/Board')
        this.BlockBoard = cc.find('Canvas/Screen2/Board/BlockBoard')
        this.node.scale = 0.4
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        // this.Board.on("check",(()=>{
        //     this.checkSetable(this.Size,this.Blank)
        // }) ,this)
        
        this.HoldingBlockContainer = cc.find('Canvas/Screen2/BlockHoldingContainer')
        this.DiemLabel = cc.find('Canvas/Screen2/BangDiem/ScoreLabel/Score')
        // for(let i=0;i<2;i++)
        // {
        //     this.taoBlock(2*i)
        // }
        //Tao block ngau nhien
    }

    khoitao(type: number,colorindex : number, indexintype: number = -1)
    {
        if(type==-1)
        {
            let temp = Math.floor(Math.random()*100)
            {
                this.IndexType = temp
                if(temp<10) this.taoBlockNgang(colorindex,indexintype)
                else if(temp<20)this.taoBlockDoc(colorindex,indexintype)
                else if(temp<30)this.taoBlockNho1(-1)
                else if(temp<50)this.taoBlockLNganNam(colorindex,indexintype)
                else if(temp<65)this.taoBlockLNganDung(colorindex,indexintype)
                else if(temp<80)this.taoBlockLVuongNho(colorindex,indexintype)
                else if(temp<90)this.taoBlockVuongTo(colorindex,indexintype)
                else this.taoBlockNho1(-1)
                console.log("1 khoi da duoc tao")
                console.log("Thong tin khoi:" + this.IndexColor + " " + this.IndexInType)
            }
        }
        else
        {
            let temp = type
            if(temp<10) this.taoBlockNgang(colorindex,indexintype)
            else if(temp<20)this.taoBlockDoc(colorindex,indexintype)
            else if(temp<30)this.taoBlockNho1(colorindex)
            else if(temp<50)this.taoBlockLNganNam(colorindex,indexintype)
            else if(temp<65)this.taoBlockLNganDung(colorindex,indexintype)
            else if(temp<80)this.taoBlockLVuongNho(colorindex,indexintype)
            else if(temp<90)this.taoBlockVuongTo(colorindex,indexintype)
            else this.taoBlockNho1(colorindex)
        }
    }
    blockStorage()
    {
        // console.log("số hàng là:"+ this.Size.x)
        let name = "blockdata" + (this.IndexInQueue).toString()
        console.log(name)
        let datablock = {
            recall: true,
            indextype: this.IndexType,
            indexcolor: this.IndexColor,
            indexintype: this.IndexInType,
            indexinqueue: this.IndexInQueue,
            sizeX: this.Size.x,
            sizeY: this.Size.y,
            blank: this.Blank
        }
        this.Board.getComponent("Board").saveData(name, JSON.stringify(datablock))
        // cc.sys.localStorage.setItem(name, JSON.stringify(datablock))
    }
    onTouchStart(event: cc.Event.EventTouch)
    {
        if(this.Board.getComponent("Board").IsNewbie)
            {
                this.unschedule(this.Board.getComponent("Board").Hand)
                this.Board.getComponent("Board").Hand.active = false
            }
        // this.TouchStartLocation = event.getLocation()
        this.node.scale = 1
        this.Board.getComponent("Board").ColorAnDiem = this.Board.getComponent("Board").ColorArray[this.IndexColor+6]
        // let temp = cc.instantiate(this.node)
        // this.node.addChild(temp)
        // temp.setPosition(cc.v2(0,200))
        
        // this.node.removeFromParent()
        // this.HoldingBlockContainer.addChild(this.node)
        console.log(this.Board.getComponent("Board").zIndex)
        this.Board.getComponent("Board").zIndex +=1
        this.node.zIndex = this.Board.getComponent("Board").zIndex
        this.BlockBoard.sortAllChildren()
        this.Board.getComponent("Board").CarryingNode = this.node
    }

    onTouchMove(event: cc.Event.EventTouch)
    {
        let touch = event.getTouches()[0]
        let touch_pos = touch.getLocation()
        let standard_touch_pos = this.Board.convertToNodeSpaceAR(touch_pos)
        this.node.setPosition(standard_touch_pos)
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
    }
    onTouchEnd(event: cc.Event.EventTouch)
    {
        // this.TouchEndLocation = event.getLocation()
        // console.log(this.node.getPosition())
        for(let i =0;i<this.BlockArray.length;i++)
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
            for(let i=0;i<this.BlockArray.length;i++)
            {
                let n = this.BlockArray[i].getComponent("Block").Ngang
                let d = this.BlockArray[i].getComponent("Block").Doc
                // this.Board.getComponent("Board").BlockArray[this.BlockArray[i].getComponent("Block").Ngang][this.BlockArray[i].getComponent("Block").Doc].destroy()
                this.Board.getComponent("Board").BlockArray[n][d] = this.BlockArray[i]
                this.Board.getComponent("Board").EmptyBlockArray[n][d].scale = 0
                this.Board.getComponent("Board").Prepos[n][d] = 1
                this.Board.getComponent("Board").IndexColorArray[n][d] = this.IndexColor
                // this.Board.getComponent("Board").EmptyBlockArray[n][d].active = false
                // this.Board.addChild(this.BlockArray.shift())
                this.BlockArray[i].setPosition(this.Board.getComponent("Board").VTNgang[this.BlockArray[i].getComponent("Block").Doc],this.Board.getComponent("Board").VTDoc[this.BlockArray[i].getComponent("Block").Ngang])
                this.node.setPosition(0,0)
                // this.Board.getComponent("Board").taoBlock()
                // console.log(this.BlockArray[i].x,this.BlockArray[i].y)
                this.turnOffListener()
                
            }
            if(!this.Board.getComponent("Board").IsNewbie)
            {
                let name = "blockdata" + this.IndexInQueue.toString()
                // console.log(name)
                // let obj = JSON.parse(cc.sys.localStorage.getItem(name))
                let obj = null
                this.Board.getComponent("Board").recallMemory(obj, name)
                // console.log(obj)
                obj.recall = !obj.recall
                // cc.sys.localStorage.setItem(name, JSON.stringify(obj))
                this.Board.getComponent("Board").saveData(name, JSON.stringify(obj))
            }
            this.Board.getComponent("Board").checkAnDiem()
            delete this.Board.getComponent("Board").BlockRemainingArr[this.IndexInQueue]
            this.Board.getComponent("Board").checkSetable()
            // this.node.removeFromParent()
            // this.Board.addChild(this.node)
            this.Board.getComponent("Board").BlockRemaining--
            this.Board.getComponent("Board").BlockAvailable--
            if(!this.Board.getComponent("Board").IsNewbie)
            {
                // cc.sys.localStorage.setItem("BA" , this.Board.getComponent("Board").BlockAvailable)
                // cc.sys.localStorage.setItem("BR" , this.Board.getComponent("Board").BlockRemaining)
                this.Board.getComponent("Board").saveData("BA" , this.Board.getComponent("Board").BlockAvailable)
                this.Board.getComponent("Board").saveData("BR" , this.Board.getComponent("Board").BlockRemaining)
            }
            
            if(this.Board.getComponent("Board").BlockRemaining==0)
            {
                if(this.Board.getComponent("Board").CreateNova) this.Board.getComponent("Board").taoNovaBlock()
                else this.Board.getComponent("Board").taoBlockNgauNhien()
            }
            this.DiemLabel.getComponent("DiemSo").Diem += this.BlockCount
            this.DiemLabel.getComponent("DiemSo").congDiem(this.BlockCount)
            if(this.Board.getComponent("Board").IsNewbie)
            {
                this.Board.emit("nextStep")
            }

            // this.Board.getComponent("Board").checkMerge()
            // for(let i=0;i<2;i++)
            // this.Bo1ard.addChild(this.BlockArray.shift())
        }
        else
        {
            if(this.Board.getComponent("Board").IsNewbie)
            {
                cc.tween(this.node).to(0.1,{x:0,y:-430}).start()
                this.node.scale = 0.4
                this.Board.getComponent("Board").CarryingNode = null
            }
            else{
                // this.node.removeFromParent()
                // this.Board.getComponent("Board").BlockReadyContainer.addChild(this.node)
                cc.tween(this.node).to(0.1,{x:-190+190*this.Index,y:-430}).start()
                this.node.scale = 0.4
                this.Board.getComponent("Board").CarryingNode = null
            }
            
        }
    }
    
    taoBlockNgang(colorindex: number, indexintype: number)
    {
        console.log("da tao block ngang")
        if(colorindex == -1) 
        {
            let color = Math.floor(Math.random()*6)
            // console.log(color)
            this.IndexColor = color
        }
        else this.IndexColor = colorindex
        if(indexintype == -1)
        {
            let leng = Math.floor(Math.random()*4)+2
            this.BlockCount = leng
            this.IndexInType = leng
            this.Size = cc.v2(1,leng)
        }
        else
        {
            this.BlockCount = indexintype
            this.IndexInType = indexintype
            this.Size = cc.v2(1,indexintype)
        }
        this.Blank = []
        for(let i=0;i<this.BlockCount;i++)
        {
            let block = cc.instantiate(this.Block)
            this.node.addChild(block)
            this.BlockArray.push(block)
            block.getComponent("Block").setUp(this.IndexColor)
            block.getComponent("Block").turnOffListener()
            block.setPosition((this.BlockCount-1)*-36+72*i,0)
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor]
        // this.Board.addChild(this.node)
        // block.setPosition(this.VTBlock[index])
        // let number = Math.floor(Math.random()*3)+1
        // block.getComponent("Block").setUp(number)
        // block.getComponent("Block").turnOffListener()
    }
    taoBlockDoc(colorindex: number, indexintype: number)
    {
        if(colorindex == -1) 
        {
            let color = Math.floor(Math.random()*6)
            // console.log(color)
            this.IndexColor = color
        }
        else this.IndexColor = colorindex
        if(indexintype == -1)
        {
            let leng = Math.floor(Math.random()*4)+2
            this.BlockCount = leng
            this.IndexInType = leng
            this.Size = cc.v2(leng,1)
        }
        else
        {
            this.BlockCount = indexintype
            this.IndexInType = indexintype
            this.Size = cc.v2(1,indexintype)
        }
        this.Blank = []
        for(let i=0;i<this.BlockCount;i++)
        {
            let block = cc.instantiate(this.Block)
            this.node.addChild(block)
            this.BlockArray.push(block)
            block.getComponent("Block").setUp(this.IndexColor)
            block.getComponent("Block").turnOffListener()
            block.setPosition(0,(this.BlockCount-1)*-36+72*i)
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor]
        // this.Board.addChild(this.node)
        // block.setPosition(this.VTBlock[index])
        // let number = Math.floor(Math.random()*3)+1
        // block.getComponent("Block").setUp(number)
        // block.getComponent("Block").turnOffListener()
    }
    taoBlockVuongTo(colorindex: number, indexintype: number)
    {
        this.Size = cc.v2(3,3)
        if(colorindex == -1) 
        {
            let color = Math.floor(Math.random()*6)
            // console.log(color)
            this.IndexColor = color
        }
        else this.IndexColor = colorindex
        let arrindex: number[] = []
        let posarr: cc.Vec2[][]= 
        [[cc.v2(-72,72),cc.v2(0,72),cc.v2(72,72)],
        [cc.v2(-72,0),cc.v2(0,0),cc.v2(72,0)],
        [cc.v2(-72,-72),cc.v2(0,-72),cc.v2(72,-72)]]
        
        let type = 0
        if(indexintype==-1)
        {
            type = Math.floor(Math.random()*5)
        }
        else
        type = indexintype
        this.IndexInType = type
        switch(type){
            case 0 :
                {
                    arrindex = [0,1,2,3,6]
                    this.BlockCount = 5
                    this.Blank = [4,5,7,8]
                    break
                } 
            case 1 :
                {
                    arrindex = [0,1,2,5,8]
                    this.Blank = [3,4,6,7]
                    this.BlockCount = 5
                    break
                }
            case 2 :
                {
                    arrindex = [0,3,6,7,8]
                    this.Blank = [1,2,4,5]
                    this.BlockCount = 5
                    break
                }
            case 3 :
                {
                    arrindex = [2,5,6,7,8]
                    this.Blank = [0,1,3,4]
                    this.BlockCount = 5
                    break
                }
            case 4 :
                {
                    arrindex = [0,1,2,3,4,5,6,7,8]
                    this.Blank = []
                    this.BlockCount = 9
                    break
                }
        }
        for(let i=0;i<arrindex.length;i++)
        {
            let block = cc.instantiate(this.Block)
            this.node.addChild(block)
            this.BlockArray.push(block)
            block.getComponent("Block").setUp(this.IndexColor)
            block.getComponent("Block").turnOffListener()
            block.setPosition(posarr[Math.floor(arrindex[i]/3)][arrindex[i]%3])
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor]
    }
    taoBlockLNganNam(colorindex: number, indexintype: number)
    {
        console.log("Day la indexintype cua khoi L nam:  "  + indexintype)
        this.Size=cc.v2(2,3)
        if(colorindex==-1)
        {
            let color = Math.floor(Math.random()*6)
            this.IndexColor = color
        }
        else this.IndexColor = colorindex
        // this.IndexColor = color
        let arrindex: number[] = []
        let posarr: cc.Vec2[][]= 
        [[cc.v2(-72,36),cc.v2(0,36),cc.v2(72,36)],
        [cc.v2(-72,-36),cc.v2(0,-36),cc.v2(72,-36)]]
        let type = 0
        if(indexintype == -1)
        {
            type = Math.floor(Math.random()*4)
            // this.IndexInType = type
        }
        else type = indexintype
        this.IndexInType = type
        switch(type){
            case 0 :
                {
                    arrindex = [0,1,2,3]
                    this.Blank = [4,5]
                    this.BlockCount = 4
                    break
                } 
            case 1 :
                {
                    arrindex = [0,1,2,5]
                    this.Blank = [3,4]
                    this.BlockCount = 4
                    break
                }
            case 2 :
                {
                    arrindex = [0,3,4,5]
                    this.Blank = [1,2]
                    this.BlockCount = 4
                    break
                }
            case 3 :
                {
                    arrindex = [2,3,4,5]
                    this.Blank = [0,1]
                    this.BlockCount = 4
                    break
                }
        }
        for(let i=0;i<4;i++)
        {
            let block = cc.instantiate(this.Block)
            this.node.addChild(block)
            this.BlockArray.push(block)
            block.getComponent("Block").setUp(this.IndexColor)
            block.getComponent("Block").turnOffListener()
            block.setPosition(posarr[Math.floor(arrindex[i]/3)][arrindex[i]%3])
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor]
    }
    taoBlockLNganDung(colorindex: number, indexintype: number)
    {
        console.log("Day la indexintype cua khoi L dung:  "  + indexintype)
        this.Size = cc.v2(3,2)
        if(colorindex == -1)
        {
            let color = Math.floor(Math.random()*6)
            this.IndexColor = color
        }
        else this.IndexColor = colorindex
        // this.IndexColor = color
        let arrindex: number[] = []
        let posarr: cc.Vec2[][]= 
        [[cc.v2(-36,72),cc.v2(36,72)],
        [cc.v2(-36,0),cc.v2(36,0)],
        [cc.v2(-36,-72),cc.v2(36,-72)]]
        // let type = Math.floor(Math.random()*4)let type = 0
        let type = 0
        if(indexintype == -1)
        {
            type = Math.floor(Math.random()*4)
        }
        else type = indexintype
        this.IndexInType = type
        switch(type){
            case 0 :
                {
                    arrindex = [0,1,2,4]
                    this.Blank = [3,5]
                    this.BlockCount = 4
                    break
                } 
            case 1 :
                {
                    arrindex = [0,1,3,5]
                    this.Blank = [2,4]
                    this.BlockCount = 4
                    break
                }
            case 2 :
                {
                    arrindex = [0,2,4,5]
                    this.Blank = [1,3]
                    this.BlockCount = 4
                    break
                }
            case 3 :
                {
                    arrindex = [1,3,4,5]
                    this.Blank = [0,2]
                    this.BlockCount = 4
                    break
                }
        }
        for(let i=0;i<4;i++)
        {
            let block = cc.instantiate(this.Block)
            this.node.addChild(block)
            this.BlockArray.push(block)
            block.getComponent("Block").setUp(this.IndexColor)
            block.getComponent("Block").turnOffListener()
            block.setPosition(posarr[Math.floor(arrindex[i]/2)][arrindex[i]%2])
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor]
    }
    taoBlockLVuongNho(colorindex: number, indexintype: number)
    {
        this.Size = cc.v2(2,2)
        // let color = Math.floor(Math.random()*6)
        // this.IndexColor = color
        if(colorindex == -1)
        {
            let color = Math.floor(Math.random()*6)
            this.IndexColor = color
        }
        else this.IndexColor = colorindex
        let arrindex: number[] = []
        let posarr: cc.Vec2[][]= 
        [[cc.v2(-36,36),cc.v2(36,36)],
        [cc.v2(-36,-36),cc.v2(36,-36)]]
        // let type = Math.floor(Math.random()*5)let type = 0
        let type = 0
        if(indexintype == -1)
        {
            type = Math.floor(Math.random()*5)
        }
        else type = indexintype
        this.IndexInType = type
        switch(type){
            case 0 :
                {
                    arrindex = [0,1,2]
                    this.Blank = [3]
                    this.BlockCount = 3
                    break
                } 
            case 1 :
                {
                    arrindex = [0,1,3]
                    this.Blank = [2]
                    this.BlockCount = 3
                    break
                }
            case 2 :
                {
                    arrindex = [0,2,3]
                    this.Blank = [1]
                    this.BlockCount = 3
                    break
                }
            case 3 :
                {
                    arrindex = [1,2,3]
                    this.Blank = [0]
                    this.BlockCount = 3
                    break
                }
            case 4 :
                {
                    arrindex = [0,1,2,3]
                    this.Blank = []
                    this.BlockCount = 4
                    break
                }
        }
        for(let i=0;i<arrindex.length;i++)
        {
            let block = cc.instantiate(this.Block)
            this.node.addChild(block)
            this.BlockArray.push(block)
            block.getComponent("Block").setUp(this.IndexColor)
            block.getComponent("Block").turnOffListener()
            block.setPosition(posarr[Math.floor(arrindex[i]/2)][arrindex[i]%2])
        }
        this.Color = this.Board.getComponent("Board").ColorArray[this.IndexColor]
    }
    taoBlockNho1(colorindex: number)
    {
        this.Size = cc.v2(1,1)
        this.Blank = []
        let color = 0
        if(colorindex==-1)
        {
            color = Math.floor(Math.random()*6)
        }
        else color = colorindex
        this.IndexColor = color
        // console.log(color)
        this.BlockCount = 1
        let block = cc.instantiate(this.Block)
        this.node.addChild(block)
        this.BlockArray.push(block)
        block.getComponent("Block").setUp(color)
        block.getComponent("Block").turnOffListener()
        block.setPosition(0,0)
        this.Color = this.Board.getComponent("Board").ColorArray[color]
    }
    taoNovaBlock()
    {
        
    }
    turnOffListener()
    {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
    }

    checkSetable(Size: cc.Vec2, Blank: number[])
    {
        // console.log("CheckSetable called at " + this.IndexInQueue + "th Block")
        console.log("da check khoi thu " + this.IndexInQueue)
        let prepos = this.Board.getComponent("Board").Prepos
        // console.log(prepos)
        let setable = false
loop1:
        for(let i=0;i<8-Size.x+1;i++)
        {
loop2:
            for(let j=0;j<8-Size.y+1;j++)
            {
                let count = 0
loop3:
                for(let hi=0;hi<Size.x;hi++)
                {
                    for(let ci=0;ci<Size.y;ci++)
                    {
                        if(!Blank.includes(ci+hi*Size.y))
                        {
                            // console.log("Called")
                            if(prepos[i+hi][j+ci]==0)
                            {
                                count++
                                // console.log("Prepos o vi tri "+[i+hi]+" " +[j+ci]+ " la: "+ prepos[i+hi][j+ci])
                            } 
                        }
                    }
                }
                if(count==Size.x*Size.y-Blank.length)
                {
                    setable = true
                    break loop1
                }
            }
        }
        if(setable == false)
        {
            if(this.Setable==true)
            {
                this.Setable = false
                this.Board.getComponent("Board").BlockAvailable--
            }
            this.turnOffListener()
            // this.Board.on("check",(()=>{
            //     this.checkSetable(this.Size,this.Blank)
            // }) ,this)
            cc.tween(this.node).to(0.5,{opacity:100}).start()
        }
        else
        {
            if(this.Setable==false)
            {
                this.Setable = true
                this.Board.getComponent("Board").BlockAvailable++
            }
            this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
            this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
            this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
            cc.tween(this.node).to(0.5,{opacity:255}).start()
        }
    }
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


