let text = 1;


function ChangePMA(){
    if(text === 3){
        document.getElementById('whatIsThis').innerHTML = "ובקיצור כדי שהיה לנו יותר כיף לשחק!";
        text = 1;
    } 
    if(text === 2){
        document.getElementById('whatIsThis').innerHTML = "סיפוק בזמן משחק";
        text += 1;
    }
    if(text === 1){
        document.getElementById('whatIsThis').innerHTML = "חווית גיימינג טובה יותר";
        text += 1;
    }

    console.log(text);
}


function ChangingText(){
    setInterval(ChangePMA, 3000);
}