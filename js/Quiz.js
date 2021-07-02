class Quiz {
  constructor(){}

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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
    //write code to change the background color here
    background ("purple")
    //write code to show a heading for showing the result of Quiz
    text("Result",350,0)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if(allContestants != undefined){
      if(allContestants.contestant1.answer == 2){
        fill("green")
        text(allContestants.contestant1.name,250,200)
      }
      else if(allContestants.contestant2.answer == 2){
        fill("green")
        text(allContestants.contestant2.name,450,200)
      }
      text(allContestants.contestant1.name,250,200)
      text(allContestants.contestant2.name,450,200)
    }
    else{
      text(" ",100,200)
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
  }
}
