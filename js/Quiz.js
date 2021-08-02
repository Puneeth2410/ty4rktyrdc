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
    customElements.hide();

    //write code to change the background color here
    green.changeBachgroundcolour

    //write code to show a heading for showing the result of Quiz
    heading.show();
    result.show();
    

    //call getContestantInfo( ) here
    getContestantInfo();

    //write condition to check if contestantInfor is not undefined
    if(! contestantInfornotdefined){

    }

    //write code to add a note here
    note.add();

    //write code to highlight contest who answered correctly
    answercorrect.highlighcontest();
    
  }

}
