class Log{
    constructor(x,y,width,height){
        var properties = {
            restituion:0.8,
            friction:1.2,
            density:1
             
        
    
        }
    this.body = Bodies.rectangle(x,y,width,height,properties)
    this.height = height;
    this.width = width;
    World.add(game_world,this.body)
    }
display(){
    var pos = this.body.position
    var angle = this.body.angle
    push();
    rotate(angle);
    translate(pos.x,pos.y);
    rectMode(CENTER);
    stroke("brown");
    strokeWeight(3);
    rect(0,0,this.width,this.height)
    pop();




}



}