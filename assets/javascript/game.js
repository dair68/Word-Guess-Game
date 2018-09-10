var wins = 0;
var previousWord = "";
var word = "";
var currentWord = "";
var guesses = 12;
var guessedLetters = [];
var anime = [
    "ATTACK ON TITAN",
    "SAILOR MOON",
    "POKEMON",
    "ONE PIECE",
    "NARUTO",
    "DRAGON BALL",
    "INUYASHA",
    "FULLMETAL ALCHEMIST",
    "YOUR LIE IN APRIL",
    "ONE PUNCH MAN",
    "YUGIOH",
    "DEATH NOTE",
    "GIN TAMA",
    "ANGEL BEATS",
    "KILL LA KILL",
    "YURI ON ICE",
    "TOKYO GHOUL",
    "COWBOY BEBOP"
];

function reset() {
    //randomly selecting anime as the hangman word. ensures new word differs from previous.
    previousWord = word;
    while (word === previousWord) {
        word = anime[Math.floor(Math.random()*anime.length)];
    }
    console.log(word);
    currentWord = "-".repeat(word.length);
    //replacing appropriate dashes with spaces
    for (var i=0; i<word.length; i++) {
        if (word[i] === " ") {
            currentWord = currentWord.substring(0,i) + " " + currentWord.substring(i+1);
        }
    }
    guesses = 12;
    guessedLetters = [];
}

function update() {
    $("#win").text("Wins: " + wins);
    $("#word").text(currentWord);
    $("#remaining").text(guesses);
    $("#guessed").text(guessedLetters.join(","));
}

$(document).on("keyup", function(event) {
    key = event.key.toUpperCase();
    // console.log(key);
    //making sure key is letter, and not already guessed
    if ("A" <= key && key <= "Z" && !guessedLetters.includes(key)) {
        //guessed correct letter!
        if (word.includes(key)) {
            // console.log("match");
            for (var i=0; i<word.length; i++) {
                if (word[i] === key) {
                    currentWord = currentWord.substring(0,i) + key + currentWord.substring(i+1);
                }
            }
            //finished guessing the word
            if (word === currentWord) {
                wins++;
                reset();
            }
            //out of guesses
            else if (guesses === 0) {
                reset();
            }
            update();
        }
        //guessed incorrect letter
        else {
            guesses--;
            guessedLetters.push(key);
            //out of guesses
            if (guesses === 0) {
                reset();
            }
            update();
        }
    }
});

reset();
update();