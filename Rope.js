class Rope{
  constructor(bodyA,pointB){
      var option={
        bodyA:bodyA,
        pointB:pointB,
        stifness:1.2,
        length:400
      }
      this.pointB=pointB; 
      this.rope=Constraint.create(option)
      World.add(world,this.rope)

  }
  display(){
      if(this.rope.bodyA){
          var pointA=this.rope.bodyA.position;
          var pointB = this.pointB ;
          push();
          stroke(48,22,8);
          strokeWeight(0);
          line(pointB.x,pointB.y,pointA.x,pointA.y);
          pop();

      }
  }
}