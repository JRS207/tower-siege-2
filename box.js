class box{
    constructor(x,y,width,height){
        var options={
        restitution:0.4,
        density:1.0,

    }
    this.body.Bodies.rectangle(x,y,width,height,options)
    this.height=height
    this.width=width
    World.add(world,this.body)
}
  display(){
      var pos=this.body.position
  }
  
}