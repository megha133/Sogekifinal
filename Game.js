class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    background(bg2)
    //target1 = createSprite(1000,500);
    //target1.addImage(target_1);
    //target1.scale = 0.9;

  

    s1 = createSprite(150,height -70);
    s1.addImage(s_1);
    s1.scale = 0.7;
    s1.debug=true
    s1.setCollider("circle",-20,-80,20)
    

    s2 = createSprite(450,height - 60);
    s2.addImage(s_2);
    s2.scale = 0.7;
    s2.debug=true
    s2.setCollider("circle",-30,-50,10)
    

    s3 = createSprite(350,height - 80);
    s3.addImage(s_3);
    s3.scale = 0.7;
    s3.debug=true
    s3.setCollider("circle",-10,-50,10)
    

    s4 = createSprite(520,height - 90);
    s4.addImage(s_4);
    s4.scale = 0.7;
    s4.debug=true
    s4.setCollider("circle",0,-40,10)

    s5 = createSprite(width - 100,height - 70);
    s5.addImage(s_5);
    s5.scale = 0.7;
    s5.debug=true
    s5.setCollider("circle",-10,-50,10)

    s6 = createSprite(width - 250,height - 100);
    s6.addImage(s_6);
    s6.scale = 0.7;
    s6.debug=true
    s6.setCollider("circle",5,-40,10) 

    s7 = createSprite(width - 150,height/2 - 10);
    s7.addImage(s_7);
    s7.scale = 0.7;
    s7.debug=true
    s7.setCollider("circle",10,-50,10)

    s8 = createSprite(width/2 + 150,height - 70);
    s8.addImage(s_8);
    s8.scale = 0.7;
    s8.debug=true
    s8.setCollider("circle",20,-50,20)

    player1=[s1,s2,s3,s4]
    player2=[s5,s6,s7,s8]
    mydepth=s8.depth

    gun1=createSprite(width/2,height - 80,50,50)
    gun1.addImage(gun_2)
    gun1.scale=0.5
              //gun1.x=mouseX
              //gun1.y=mouseY

    gun2=createSprite(width/2,height - 80,50,50)
    gun2.addImage(gun_1)
    gun2.scale=0.5
              //gun2.x=mouseX
              //gun2.y=mouseY
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(bg);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;

         
          if (index === player.index){
            stroke(10);
            fill("red");
            textSize(30)
            fill("red")
            text("Name:"+player.name, 50, 100)
            text("You have Killed:"+player.playersKilled, 50, 130)
            
            team = "player"+index

            for(var i=0; i<4;i++){
              if(team === "player1"){
                if(player1[i])
                ellipse(player1[i].x, player1[i].y-30, 20,20)
               
              }
              else if (team === "player2"){
                if(player2[i])
                ellipse(player2[i].x, player2[i].y-30, 20,20)
              } 
            }

            if(team === "player1"){
              gun2.visible=false 
  
                if (keyDown("left")&& gun1.x >100){
                  gun1.x-=3
                }
                if (keyDown("right")&&gun1.x<width-100){
                  gun1.x+=3
                }
                if (keyDown("up")&&gun1.y>200){
                  gun1.y-=3
                }
                if (keyDown("down")&&gun1.y<height-60){
                  gun1.y+=3
                }
                
                if (keyWentDown("space")){
                  var bullet=createSprite(gun1.x-50,gun1.y-10)
                  bullet.addImage(b_1)
                  bullet.scale=0.3
                  bullet.lifetime=200
                  bullets1.add(bullet)
                }
                if (keyWentUp("space")){
                  this.shoot1(bullets1[bullets1.length-1])
                }

                
                this.playersBeenKilled(bullets1, player1, killedbyplayer1)
  
            }else if (team === "player2"){
              gun1.visible=false
              // gun2.x=mouseX
               //gun2.y=mouseY 
               if (keyDown("left")&&gun2.x>100){
                 gun2.x-=3
               }
               if (keyDown("right")&&gun2.x<width-100){
                 gun2.x+=3
               }
               if (keyDown("up")&&gun2.y>200){
                 gun2.y-=3
               }
               if (keyDown("down")&&gun2.y<height-60){
                 gun2.y+=3
               }
               
               if (keyWentDown("space")){
                 var bullet=createSprite(gun2.x-0.90,gun2.y-10)
                 bullet.addImage(b_1)
                 bullet.scale=0.3
                 bullet.lifetime=200
                 bullets2.add(bullet)
               }
               if (keyWentUp("space")){
                 this.shoot2(bullets2[bullets2.length-1])
               }
               
               this.playersBeenKilled(bullets2, player2, killedbyplayer2)
   
            }

            
            

            camera.position.x = displayWidth/2;
            camera.position.y = displayHeight/2;
          }
         
          if(allPlayers[plr].playersKilled===4){
            winner = allPlayers[plr].name
            gameState =2
            game.update(2)
            console.log(winner)
          }


        }
      }
  
      drawSprites();
    }
  shoot1(bullet){
    shotsound.play()
    bullet.setSpeedAndDirection(-10,30)
  }

  shoot2(bullet){
    shotsound.play()
    bullet.setSpeedAndDirection(10,-20)
  }
  end(){
    background(bg2)

    textSize(30)
    fill("white")
    text(winner+" is the Winner", width/2-50, height/2)

  }


  playersBeenKilled(bullets1, player1, killedbyplayer1){
    for(var i=0;i<player1.length;i++){
      for(var j=0;j<bullets1.length;j++){
        if(bullets1.get(j).isTouching(player1[i])){
          killedbyplayer1 +=1
          bullets1.get(j).destroy()
          player1[i].destroy()
         
          player1.splice(i,1)

          player.playersKilled += killedbyplayer1
          
          player.update()
        }
      }
    }
  }


}
  
  