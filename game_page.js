Player1Name= localStorage.getItem("Player1Name");
Player2Name= localStorage.getItem("Player2Name");
document.getElementById("Player1Name").innerHTML=Player1Name+" : ";
document.getElementById("Player2Name").innerHTML=Player2Name+" : ";
Player1Score= 0;
Player2Score= 0;
document.getElementById("Player1Score").innerHTML=Player1Score+" : ";
document.getElementById("Player2Score").innerHTML=Player2Score+" : ";

document.getElementById("PlayerQuestion").innerHTML="Turno de Pergunta - "+ Player1Name;
document.getElementById("PlayerAnswer").innerHTML="Turno de Resposta - "+Player2Name;
function send(){
    getWord= document.getElementById("word").value;
    word=getWord.toLowerCase();
    charAt1=word.charAt(1);
    lengthDivide2= Math.floor(word.length/2);
    charAt2= word.charAt(lengthDivide2);
    lengthMinus1=word.length-1;
    charAt3=word.charAt(lengthMinus1);
    removeCharAt1=word.replace(charAt1, "_");
    removeCharAt2=removeCharAt1.replace(charAt2, "_");
    removeCharAt3=removeCharAt2.replace(charAt3, "_");
    questionWord= "<h4 id='wordDisplay'>P. "+removeCharAt3+"</h4>";
    input_box= "<br>Resposta:<input type='text' id='inputCheckBox'>";
    CheckButton= "<br><br><button class='btn btn-info' onclick='check()'>checar</button>";
    row= questionWord+input_box+CheckButton;
    document.getElementById("output").innerHTML= row;
    document.getElementById("word").value="";
}
questionTurn="player1";
answerTurn="player2";
function check(){
    getAnswer=document.getElementById("input_box").value;
    answer= getAnswer.toLowerCase();
    if(answer==word){
        if(answerTurn=="player1"){
            Player1Score=Player1Score+1;
            document.getElementById("Player1Score").innerHTML= Player1Score;
        }
        else{
            Player2Score=Player2Score+1;
            document.getElementById("Player2Score").innerHTML= Player2Score;
        }
    }
    if(quesionTurn=="player1"){
        questionTurn="player2"
        document.getElementById("PlayerQuestion").innerHTML="Turno de Pergunta: "+Player2Name;
    }
    else{
        questionTurn="player1"
        document.getElementById("PlayerQuestion").innerHTML="Turno de Pergunta: "+Player1Name;
    }
    if(answerTurn=="player1"){
        answerTurn="player2"
        document.getElementById("PlayerAnswer").innerHTML="Turno de Resposta: "+Player2Name;
    }
    else{
        answerTurn="player1"
        document.getElementById("PlayerAnswer").innerHTML="Turno de Resposta: "+Player1Name;
    }
    document.getElementById("output").innerHTML="";
    
}