class Drop{
    constructor(x,y, radius){
        var options = {
            'friction' : 5,
            'restitution':1
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.rain);
    }

    display(){
        fill(20, 135, 206);
        ellipseMode(CENTER);
        ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
    }

    fall(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,600), y:random(0,400)});
        }
    }
}