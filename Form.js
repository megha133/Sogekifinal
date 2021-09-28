class Form {

    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter your Team name");
      this.button = createButton('Start');
      this.greeting = createElement('h2');
      this.title = createElement('h1');
      this.reset = createButton('Reset');
      this.description=createElement('h5');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.description.hide();
      //this.title.hide();
    }
  
    display(){
      this.title.html("Sogeki-Hei");
      this.title.position(displayWidth/2 - 40, 100);
      this.description.html("Sogeki-hei means SNIPER in Japanese")
      this.description.position(displayWidth/2-100,140);
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name+"Snipers only shoot to kill")
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  
    }
  }
  