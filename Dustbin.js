class Dustbin{
    constructor(x,y){
   var options= {
       restitution:0.8,
       isStatic:true
   }
    this.width= 200
    this.height=200
    this.body= Bodies.rectangle(x,y,this.width,this.height,options)
    World.add(world,this.body);
        } 
    display(){
        var pos = this.body.position;
        var angle= this.body.position;
        push ()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.width,this.height)
        pop ()
    }}

