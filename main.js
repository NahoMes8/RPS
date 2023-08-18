
const comp=document.querySelector('#computer');
const resultDisplay=document.querySelector('#text');
const btns=document.querySelectorAll('button');
const ptext=document.querySelector('#player');
const playerScore=document.querySelector('.playerScore');
const computerScore=document.querySelector('.computerScore');
const gwinner=document.getElementById('gwinner');
const reset=document.getElementById('b');
let userChoice;
let computerChoice;
let result;
let pScore=0;
let cScore=0;
let i=1;
        
            
            btns.forEach((btn) =>{
                btn.addEventListener('click', e =>{
                    userChoice=e.target.id;
                    ptext.innerText=userChoice;
                    random();
                    playRound();
                    
                    game();
                });
           
            });
            
           


    
    function random(){
        const RPS=['rock','paper','scissors'];
        computerChoice=RPS[Math.floor(Math.random()*RPS.length)];
        comp.innerText=computerChoice;
       

        
    }

function playRound(){
    if(computerChoice === userChoice){
        result="draw";
    }else if(userChoice==="rock" && computerChoice==="paper"){
        result="you lose: paper covers rock";
        cScore=cScore+1;
    }else if(userChoice==="rock" && computerChoice==="scissors"){
        result="you win:rock crushes scissor";
        pScore=pScore+1;
    }else if(userChoice==="paper" && computerChoice==="rock"){
        result="you win: paper covers rock";
        pScore=pScore+1;
    }else if(userChoice==="paper" && computerChoice==="scissors"){
        result="you lose: scissor cuts paper"
        cScore=cScore+1;
    }else if(userChoice==="scissors" && computerChoice==="paper"){
        result="you win: scissor cuts paper";
        pScore=pScore+1;
    }else if(userChoice==="scissors" && computerChoice==="rock"){ 
        result="you lose: rock crushes scissors";
        cScore=cScore+1;
    }
    playerScore.innerText=pScore;
    computerScore.innerText=cScore;
    resultDisplay.innerText = result;
}



function game(){
    if(pScore==5){
        gwinner.innerText="player wins";
        playerScore.innerText=0;
        computerScore.innerText=0;
    }else if(cScore==5){
        gwinner.innerText="computer wins";
        playerScore.innerText=0;
        computerScore.innerText=0;
    }
}
