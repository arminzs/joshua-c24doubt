class Ground{
    constructor(x,y,width,height){
        //declaring options for the body in JSON format
        var groundOptions={
            isStatic:true        
        }
        
        //adding ground to the Physics Engine
        this.body = Bodies.rectangle(x,y,width,height,groundOptions);
        this.width=width
        this.height=height
        World.add(world, this.body);  
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}

