
/**********************

esempio oggetto
serve a descrivere un determinato elemento

var persona = {
    altezza: 178,
    nome: "Federico",
    eta: 23
    
}

**********************/

var score = {
    userScore: 0,
    cpuScore:0
}

var userPick;
var cpuPick;

var allOptions = [
    {
        name:"sasso",
        image:"assets/sasso.png"
    },
    {
        name:"carta",
        image:"assets/carta.png"
    },
    {
        name:"forbice",
        image:"assets/forbice.png"
    },
]

var possibleUserPicks = document.getElementsByClassName("user-choice");

for(var i = 0; i < possibleUserPicks.length; i++){
    possibleUserPicks[i].addEventListener('click', onUserPic);
}

function onUserPic(){
    userPick = this.dataset.name;
    generateCpuPick();
    

    var cpuPickImage = "<img src='" + cpuPick.image + "' />";
    var cpuPickText = "<h3>" + cpuPick.name  + "</h3>";

    document.getElementById("computer-choice").innerHTML = cpuPickImage + cpuPickText;
    document.getElementById("result").innerHTML = cheWhoWon(); 

    document.getElementById("player-score").innerHTML = score.userScore;
    document.getElementById("cpu-score").innerHTML = score.cpuScore;
}

/***** alternativa al ciclo for, quando hai pochi elementi****/
//document.getElementsByClassName("user-choice")[0].addEventListener('click');
//document.getElementsByClassName("user-choice")[1].addEventListener('click');
//document.getElementsByClassName("user-choice")[2].addEventListener('click');

function generateCpuPick(){
 cpuPick = allOptions[Math.floor(Math.random() * allOptions.length)];
 
}


function cheWhoWon(){
    
if( userPick == cpuPick.name ){
    return "Hai pareggiato";
}else{

    if(userPick == "sasso"){
        if(cpuPick.name == "forbice"){
            score.userScore++;
            return "Hai vinto";
        }else{
            score.cpuScore++;
            return "Hai perso";
        }
    } 
    
    if(userPick == "carta"){
        if(cpuPick.name == "sasso"){
            score.userScore++;
            return "Hai vinto";
        }else{
            score.cpuScore++;
            return "Hai perso";
        }
    }
    
    if(userPick == "forbice"){
        if(cpuPick.name == "carta"){
            score.userScore++;
            return "Hai vinto";
        }else{
            score.cpuScore++;
            return "Hai perso";
        }
    } 
}



}