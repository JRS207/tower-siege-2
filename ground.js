class ground{
    constructor(x,y,width,height){
        var options={
            isStatic=true
        }
        this.body=Bodies.rectangle(x,y,width,height,positions)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
    var pos=this.body.positions
    rectmode(CENTER)
    fill("brown")
    
    }
}