class Pig{
    constructor(x,y){
        var properties={
            restitution: 0.8,
            friction: 1.2,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,50,50,properties)
        this.width = 50;
        this.height = 50;
        World.add(game_world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle  = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        stroke("red");
        strokeWeight(3);
        rect(0,0,this.width,this.height)
        pop();


    }
}