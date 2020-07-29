class package{
    constructor(){
        var options = {
            restitution = 0.7,
        }
        this.body = Bodies.package(options);
        World.add (world,this.body);
    }
}