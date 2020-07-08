const game = () =>{
   let pscore = 0;
   let cscore = 0

   const startGame = ()=>{
      const intro = document.querySelector('.intro');
      const match = document.querySelector('.match');
      const playbtn = document.querySelector('.intro button');

      playbtn.addEventListener("click", () =>{
           match.classList.add('fadeIn');
           intro.classList.add('fadeOut');
      });
   };
   const playMatch = () => {
      const options = document.querySelectorAll('.options button');
      const playerHand = document.querySelector('.player-hand');
      const computerHand = document.querySelector('.computer-hand');
      const hands = document.querySelectorAll('.hands.img');

      hands.forEach(hand => {
        hand.addEventListener('animationend', function(){
          this.style.animation = "";
        });
      });

      const computerOptions = ["rock", "paper", "scisors"];
      options.forEach(option => {
         option.addEventListener("click", function(){
             const computerNumber = Math.floor(Math.random() *3);
             const computerChoice = computerOptions[computerNumber];
             setTimeout(() => {

               compareHands(this.textContent, computerChoice);
               playerHand.src= `image/${this.textContent}.png`;
               computerHand.src=  `image/${computerChoice}.png`;
             }, 2000);
             playerHand.style.animation = "shakePlayer 2s ease";
             computerHand.style.animation = "shakeComputer 2s ease";
         });
      });
   };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pscore;
    computerScore.textContent = cscore;
  };
  const compareHands = (playerChoice, computerChoice) =>{
    //update Text
     const winner = document.querySelector('.winner');
     //check for a tie
     if(playerChoice === computerChoice){
       winner.textContent = "It's a tie";
       return;
     }
     //check for rock
     if(playerChoice === 'rock')
     {
        if(computerChoice === 'scissors')
        {
          winner.textContent="Player Wins";
          pscore++;
          updateScore();
          return;
        }
        else {
          {
            winner.textContent="Computer Wins";
            cscore++;
            updateScore();
            return;
          }
        }
     }
     if(playerChoice === 'paper')
     {

          if(computerChoice === 'rock')
          {
            winner.textContent="Player Wins";
            pscore++;
            updateScore();
            return;
          }
          else {
            {
              winner.textContent="Computer Wins";
              cscore++;
              updateScore();
              return;
            }
          }
     }
     if(playerChoice === 'scissors')
     {

          if(computerChoice === 'paper')
          {
            winner.textContent="Player Wins";
            pscore++;
            updateScore();
            return;
          }
          else {
            {
              winner.textContent="Computer Wins";
              cscore++;
              updateScore();
              return;
            }
          }
     }

  };

   //calling functions
   startGame();
   playMatch();


};

game();
