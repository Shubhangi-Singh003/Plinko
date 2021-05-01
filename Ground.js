class Ground{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
        
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
      rectMode(CENTER);
     // translate(this.body.position.x, this.body.position.y);
      //fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };