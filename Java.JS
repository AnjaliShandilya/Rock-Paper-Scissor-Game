let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const drawGame = () => {
    console.log("Game was drawGame.")
    msg.innerText="Game was draw, Play again";
    msg.style.backgroundColor = "orange";
};
const showWin= (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText=`You Win!, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText=`You Lose!, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const genComChoice= () =>{
    let options=["rock","paper","scissor"];
    const randInx= Math.floor(Math.random()*3);
    return options[randInx];
};

const playGame= (userChoice)=>{
    const compChoice= genComChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true; 

        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false:true; 
        }
        else if(userChoice==="paper"){
            userWin = compChoice === "scissor" ? false:true;
        }
        else{
            userWin = compChoice ==="rock" ? false:true;
        }
        showWin(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});