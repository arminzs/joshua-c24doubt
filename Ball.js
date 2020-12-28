class Ball{
    constructor(x,y,radius){
        //declaring options for the body in JSON format
        var options={
             
            restitution:0.3,
            friction:0.5,
            density:1.2
              
        }
         
        //adding ground to the Physics Engine
        this.body = Bodies.circle(x,y,radius ,options);
        this.radius=radius
        World.add(world, this.body);  
    }
    display(){
        var ballposition=this.body.position;
        push ()
        translate (ballposition.x,ballposition.y)
       // rotate(this.body.angle)
        ellipseMode(CENTER)
        ellipse(0,0,this.radius*2)
        pop ()
    }
}

