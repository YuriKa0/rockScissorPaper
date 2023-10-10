// 메인화면
let comChoice = ['바위', '가위', '보'];
const gameMain = document.querySelector('.game_main');
const player = document.querySelector('.player img');
const opponent = document.querySelector('.opponent img');
const btns = document.querySelectorAll('.btn_wrap button');
const playerScore = document.querySelector('.player_score');
const oppoScore = document.querySelector('.opponent_score');
const youwin = document.querySelector('.win');
const youlose = document.querySelector('.lose');
const replay = document.querySelector('.replay');
const message = document.querySelector('.comment');
let scorePlayer= 0;
let scoreOpp = 0; 
let stateClick = false;
playerScore.innerText = scorePlayer;
oppoScore.innerText = scoreOpp;
console.log(stateClick);

let gameStart = setTimeout(ready,800);
let noChoice;

//가위바위보 선택버튼
btns.forEach((btn, index) => {
  btn.addEventListener('click',()=>{
    clearTimeout(noChoice);
    const random = Math.floor(Math.random() * comChoice.length);
    console.log(scorePlayer);
      player.setAttribute('src',`./img/player${index}.png`);

    if( (index+1)%3 == random ){
      scorePlayer++;
      opponent.setAttribute('src',`./img/opponent${(index+1)%3}.png`);
      //이김
      playerScore.innerText = scorePlayer;
      message.innerText = '승!';
      if(index == 0){
        player.setAttribute('alt',`바위`);
        opponent.setAttribute('alt',`가위`);
      }else if(index == 1){
        player.setAttribute('alt',`가위`);
        opponent.setAttribute('alt',`보`);
      }else if(index == 2){
        player.setAttribute('alt',`보`);
        opponent.setAttribute('alt',`바위`);
      }
      
    }else if((index+2)%3 == random){
      //졌음
      scoreOpp++; 
      oppoScore.innerText = scoreOpp;
      opponent.setAttribute('src',`./img/opponent${(index+2)%3}.png`);
      message.innerText = '패...';
      if(index == 0){
        player.setAttribute('alt',`바위`);
        opponent.setAttribute('alt',`보`);
      }else if(index == 1){
        player.setAttribute('alt',`가위`);
        opponent.setAttribute('alt',`바위`);
      }else if(index == 2){
        player.setAttribute('alt',`보`);
        opponent.setAttribute('alt',`가위`);
      }
    }else if(index == random){
      opponent.setAttribute('src',`./img/opponent${index}.png`);
      opponent.setAttribute('alt',`./img/opponent${index}.png`);
      message.innerText = '비겼네?';
      if(index == 0){
        player.setAttribute('alt',`바위`);
        opponent.setAttribute('alt',`바위`);
      }else if(index == 1){
        player.setAttribute('alt',`가위`);
        opponent.setAttribute('alt',`가위`);
      }else if(index == 2){
        player.setAttribute('alt',`보`);
        opponent.setAttribute('alt',`보`);
      }
    }
    if(scorePlayer == 5 ){
      setTimeout(()=>{
        window.location.href='win.html';
      },1500);
    }else if(scoreOpp == 5){
      setTimeout(()=>{
        window.location.href='lose.html';
      },1500);
      
    }
    setTimeout(ready,1500);
  });
});

//변수 모음
function ready() {
  stateClick = false;

  player.setAttribute('src',`./img/player.png`);
  player.setAttribute('alt',`나`);
  opponent.setAttribute('src',`./img/opponent.png`);
  opponent.setAttribute('alt',`컴퓨터`);
  message.innerText='안 내면'; 
  setTimeout(readyMessage2,1000);
}
const readyMessage2 = () => {
  message.innerText='진다';
  setTimeout(readyMessage3,1000);
}
const readyMessage3 = () => {
  message.innerText='가위!';
  setTimeout(readyMessage4,500);
}
const readyMessage4 = () => {
  message.innerText='바위!';
  setTimeout(readyMessage5,500);
}
const readyMessage5 = () => {
  
  message.innerText='보!';
  
  noChoice = setTimeout(()=>{
    
    scoreOpp++;
    oppoScore.innerText = scoreOpp;
    message.innerText = '패...';
    setTimeout(ready,1500);
  },1500);
  if(scoreOpp == 5){
    clearTimeout(ready);
    setTimeout(()=>{
      window.location.href='lose.html';
    },1500);
  }
  
  // if(stateClick){
  //   clearTimeout(noChoice);
  // }
}
// replay.addEventListener('click',()=>{
//   scorePlayer = 0;
//   scoreOpp = 0;
//   oppoScore.innerText = scoreOpp;
//   playerScore.innerText = scorePlayer;
// })