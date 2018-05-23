
var randNumBtn15and100;
var crystalSum;
var winCount = 0;
var loseCount = 0;
// Use a function to initialize users score and random number
function startGame() {
    
    $('#score').html('0');
    // create random number variable between 19 and 120.
    randNumBtn15and100 = Math.floor(Math.random() * (121-19)) + 19;
    // generate random number in html element id randNum when page loads
    $('#numRand').html(randNumBtn15and100);
    //create variables for each crystal
    var crystalA = $("#crystalA");
    var crystalB = $("#crystalB");
    var crystalC = $("#crystalC");
    var crystalD = $("#crystalD");
    // variable of each crystal + previous crystal
    crystalSum = 0;
    
    // assigned random value attribute to each id crystal button between the numbers 1 and 12 each time the page loads
    $("#crystalA").attr("randomValue", Math.floor(Math.random() * 13) + 1);
    $("#crystalB").attr("randomValue", Math.floor(Math.random() * 13) + 1);
    $("#crystalC").attr("randomValue", Math.floor(Math.random() * 13) + 1);
    $("#crystalD").attr("randomValue", Math.floor(Math.random() * 13) + 1);
}

startGame();

//add on.click listener to all buttons with the class btnwrap
$('.btnwrap').on('click', function (event) {
    var randCrysNum = parseInt($(this).attr("randomValue"));
    console.log("randcrysnum - "+randCrysNum);
    console.log("crystalsum - "+crystalSum);
    console.log("this attr randomvalue - "+ $(this).attr("randomValue"));
    crystalSum += randCrysNum;
    if(crystalSum === randNumBtn15and100){
        var win = $('#score');
        win.html('you win');
        winCount++;
        $('#numGamesWon').html(winCount);
        setTimeout(startGame, 1500);
    }   
    else if(crystalSum < randNumBtn15and100){
        
        $('#score').html(crystalSum);
        
    }
    else {
        var lose = $('#score');
        lose.html('you lose'); 
        loseCount++;
        $('#numGamesLost').html(loseCount);
        setTimeout(startGame, 1500);
    }

 
    
});

    




