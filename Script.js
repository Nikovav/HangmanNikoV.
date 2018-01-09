
var words =["echo","bandit","sledge","smoke","lesion","jackal","valkyrie","pulse","vigil","mute","electromagnetic","niko","chris"];
var guesses = 6;
var guessedLetters = [];
var word;
function startGame() {
    word = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    guesses = 6;
    printWord();
    console.log(word);
    document.getElementById("outcome").innerHTML = "";
    document.getElementById("guesses").innerHTML = "";
    document.getElementById("guesses").innerHTML = guesses;

}

function printWord() {
    var show = "";
    for (var i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i]) === -1) {
            show += "_ ";
        } else {
            show += word[i];
        }
    }
    document.getElementById("pushed").innerHTML = show;
    return show;
}
function guessLetter() {
    var output = document.getElementById("letters").value;
    guessedLetters.push(output);
    console.log(output);
    var printed = printWord();
    printWord();
    if (printed.indexOf(output) == -1) {
        guesses = guesses - 1;
        document.getElementById("guesses").innerHTML = guesses;
    } else {
        if (printed.indexOf("_") == -1) {
            document.getElementById("outcome").innerHTML = "You had " + guesses + " guesses left, please press start to play again";
            document.getElementById("guesses").innerHTML = "YOU WON ONE MY DUDE";
        }
    }

    if (guesses == 0) {
        document.getElementById("guesses").innerHTML = "You lost my friend, please press start to try again";
    }
}
//
//
// }
    // printWord();
    // if(word.indexOf(output) == -1){
    //  guesses = guesses - 1;
    //     document .getElementById("guesses").innerHTML = guesses;
    //     }
    // }























// if(word.indexOf(output) == -1){
//     guesses = guesses - 1;
// // document .getElementById("guesses").innerHTML = guesses;





