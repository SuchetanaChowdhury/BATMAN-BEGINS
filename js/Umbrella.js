class Umbrella{
    constructor(x, y, radius) {
        var options = {
             'isStatic': true,
             'density':1.0
         }
        this.body = Bodies.circle(x, y, radius, options);
        //this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage("images/man.png")
      }

    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 500, 500);
        // ellipseMode(CENTER);
        // ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}