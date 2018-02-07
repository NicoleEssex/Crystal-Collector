//create score variable
var score = 0;
var randNumBtn15and100 = Math.floor(Math.random() * 101) + 15;

// create multiple javascript objects with 2 properties and 1 method
 function Crystal (name, value) {
     this.name = name;
     this.value = value;

 };
 var aCrystal = new Crystal ('a', 15);
 console.log(aCrystal);
 var bCrystal = new Crystal ('b', 5);
 console.log(bCrystal);
 var cCrystal = new Crystal ('c', 10);
 console.log(cCrystal);
 var dCrystal = new Crystal ('d', 2);
console.log(dCrystal);


// Use a function to initialize users score and random number
function resetGame() {
    $('#score').empty();
   $('#numRand').empty();
}

// generate random number in html element id randNum when page loads
$('#numRand').html(randNumBtn15and100);



//add on.click listener to all buttons with the class btnwrap
$('.btnwrap').on('click', function() {
    alert('clicked');
});


// // create a an array with 4 javascipt objects
// var crystals = [
//     {
//         name: "crystalA",
//         value: "15",
//     },
//     {
//         name: "crystalB",
//         value: "5",
//     },
//     {
//         name: "crystalC",
//         value: "10",
//     },
//     {
//         name: "crystalD",
//         value: "2",
//     }
// ];
// //  console log 2 properties for each object in array
// for (var i=0; i<crystals; i++) {
//     console.log(crystals[i].name);
//     console.log(crystals[i].value);
// }