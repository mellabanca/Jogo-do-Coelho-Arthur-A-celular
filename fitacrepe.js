class Fitacrepe{
    constructor(corpo1,corpo2){
        var ultimabolacha=corpo1.body.bodies.length-2;
        this.tecbond=Constraint.create({
            bodyA:corpo1.body.bodies[ultimabolacha],
            pointA:{x:0,y:0},
            bodyB:corpo2,
            pointB:{x:0,y:0},
            length:-10,
            stiffness:0.01
        })
        World.add(engine.world,this.tecbond);
    }
invisible(){
    World.remove(engine.world,this.tecbond);   
}



}