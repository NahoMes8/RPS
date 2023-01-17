function computerChoice(){
    let random=Math.floor(Math.random()*3+1);
   if(random===1){
    return "rock";
   }else if(random===2){
    return "paper";
   }else if(random ===3){
    return "scissors";
   }
}

 function playRound(PLAYER , COMPUTER){
    if(PLAYER === "rock" && COMPUTER === "rock"){
        console.log(`1 ${PLAYER}  2 ${COMPUTER}`);
        return 'you both chose rock!';
    }else if(PLAYER === "paper" && COMPUTER === "paper"){
        console.log(`1 ${PLAYER}  2 ${COMPUTER}`);
        return 'you both chose paper!'
    }else if (PLAYER === "scissors" && COMPUTER === "scissors"){
        console.log(`1 ${PLAYER}  2 ${COMPUTER}`);
        return 'you both chose scissors!'
    }else if(PLAYER === "rock" && COMPUTER === "paper"){
        cScore=++cScore;
        console.log(`1 ${PLAYER}  2 ${COMPUTER}`);
        return 'you lost! paper covers rock!'
    }else if (PLAYER ==="rock" && COMPUTER === "scissors"){
        pScore=++pScore;
        console.log(`1 ${PLAYER}  2 ${COMPUTER}`);
        return 'you won! rock crushes scissors!'
    }else if(PLAYER === "paper" && COMPUTER === "rock"){
        pScore=++pScore;
        console.log(`1 ${PLAYER}  2 ${COMPUTER}`);
        return 'you won! paper crushes rock!'
    }else if(PLAYER === "paper" && COMPUTER === "scissors"){
        cScore=++cScore;
        console.log(`1 ${PLAYER}  2 ${COMPUTER}`);
        return 'you lost!scissors cut paper!'
    }else if(PLAYER ==="scissors" && COMPUTER ==="paper"){
        pScore=++pScore;
        console.log(`1 ${PLAYER}  2 ${COMPUTER}`);
        return 'you won! scissors cut paper!'
    }else if(PLAYER ==="scissors" && COMPUTER ==="rock"){
        cScore=++cScore;
        console.log(`1 ${PLAYER}  2 ${COMPUTER}`);
        return 'you lost!rock crushes scissors!';
    }
 }

 let pScore=0;
 let cScore=0;


 function game(){
       for(let i=0;i<5;i++){
        const PLAYER= prompt("choose", "Rock,Paper,Scissors").toLowerCase();
        const COMPUTER =computerChoice();
        console.log(playRound(PLAYER, COMPUTER));
        console.log(`${PLAYER}:${pScore} ${COMPUTER}:${cScore}`);
    }
    if(pScore===cScore){
        console.log("you both are tied");
    }else if(pScore>cScore){
        console.log("you beat computer");
    }else if(pScore<cScore){
        console.log("computer beat you")
    }
 }
 game();
