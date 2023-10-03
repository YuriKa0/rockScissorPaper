
let comChoice = ['바위', '가위', '보'];
const opponent = document.querySelector('.opponent img');
const btns = document.querySelectorAll('.btn_wrap button');
const playerScore = document.querySelector('.player_score');
const oppoScore = document.querySelector('.opponent_score');
const replay = document.querySelector('.replay');
let scorePlayer= 0;
let scoreOpp = 0; 
playerScore.innerText = scorePlayer;
oppoScore.innerText = scoreOpp;
// console.log(replay);
btns.forEach((btn, index) => {
  btn.addEventListener('click',()=>{
    const random = Math.floor(Math.random() * comChoice.length);
    console.log(scorePlayer);
    if( (index+1)%3 == random ){
      scorePlayer++;
      opponent.setAttribute('src',`./img/hand${(index+1)%3}.png`);
      //이김
      playerScore.innerText = scorePlayer;
      
    }else if((index+2)%3 == random){
      //졌음
      scoreOpp++; 
      oppoScore.innerText = scoreOpp;
      opponent.setAttribute('src',`./img/hand${(index+2)%3}.png`);
    }else if(index == random){
      opponent.setAttribute('src',`./img/hand${index}.png`);
    }
  });
});

if(playerScore.innerText == 5 ){
  alert('dfjeg');
}

replay.addEventListener('click',()=>{
  scorePlayer = 0;
  scoreOpp = 0;
  oppoScore.innerText = scoreOpp;
  playerScore.innerText = scorePlayer;
})