class Ground{
    constructor(x,y,width,height){
        var properties={
            isStatic:true


        }
        this.body= Bodies.rectangle(x,y,width,height, properties)
        this.width=width;
        this.height=height;
        World.add(game_world,this.body)

    }

display(){
var pos=this.body.position
rectMode(CENTER)
rect(pos.x,pos.y,this.width,this.height)


}

}