class drops
{
    constructor(x,y,r)
    {
        this.x = x;
        this.y = y;
        this.r = r;
        var options=
        {
            isStatic : false,
            restitution : 0.4,
            friction : 0.2,
            density : 0.3
        }
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body);
        this.dropdown = this.body;
        World.add(world,this.dropdown)
        
        
    }

    display()
    {
        push();
        var maxdrops = 100;
        for(var i=0; i < maxdrops; i++)
        {
            this.dropdown.push(new drops(random(0,400), random(0,400)));
        }
      
        fill("blue")
        ellipseMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        ellipse(0,0,this.r);
        pop();
    }
}