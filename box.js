

         class Box{
          constructor(x, y, width, height, angle) {
              var options = {
                restitution : 0.7,
                friction : 0.6,
                isStatic : false,
                
              }
              this.body = Bodies.rectangle(x, y, width, height, options);
              this.width = width;
              this.height = height;
              this.Visibility =255;
              World.add(world, this.body);
              
            }
            display(){
              
              
              var angle = this.body.angle;
              if(this.body.speed<2.5){
              push();
              translate(this.body.position.x, this.body.position.y);
              rotate(angle);
              rectMode(CENTER);
              rect(0, 0, this.width, this.height);
              pop();
              }else {
                World.remove(world, this.body)
                push();
                this.Visibility = this.Visibility -10;
                tint(255, this.Visibility)
                
                pop();
              }
            }
            score(){
      
              if(this.Visibility<0 && this.Visibility > -105){
                score++;
              }
      
            }
          }
      
