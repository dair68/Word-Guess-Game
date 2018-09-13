var wins = 0;
var previousWord = "";
var word = "";
var currentWord = "";
var guesses = 12;
var guessedLetters = [];
var index = 6;
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
    "GINTAMA",
    "ANGEL BEATS",
    "KILL LA KILL",
    "YURI ON ICE",
    "TOKYO GHOUL",
    "COWBOY BEBOP",
    "GUNDAM",
    "NEON GENESIS EVANGELION",
    "INAZUMA ELEVEN",
    "HUNTER X HUNTER",
    "BOBOBO-BO BO-BOBO",
    "BLEACH",
    "JOJO'S BIZARRE ADVENTURE",
    "CASED CLOSED",
    "HETALIA",
    "MY HERO ACADEMIA",
    "FAIRY TAIL",
    "SWORD ART ONLINE"
];



//makes page display changes
function update() {
    $("#win").text("Wins: " + wins);
    $("#word").text(currentWord);
    $("#remaining").text(guesses);
    $("#guessed").text(guessedLetters.join(","));
}

//sets up page for another game of hangman
function reset() {
    //randomly selecting anime as the hangman word. ensures new word differs from previous.
    // previousWord = word;
    // while (word === previousWord) {
    //     word = anime[Math.floor(Math.random()*anime.length)];
    // }
    word = anime[index];
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



//allows user to guess letter by hitting letter keys
$(document).on("keyup", function(event) {
    key = event.key.toUpperCase();
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
                changeStyle(word);
                index++;
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
                index++;
                reset(); 
            }
            update();
        }
    }
});

//when loading page for first time
reset();
update();


function changeStyle(anime) {
    console.log("switch!");
    if (anime === "ATTACK ON TITAN") {
        $("#themesong").attr("src","assets/songs/AttackOnTitan.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/attack.jpg","alt":"Eren vs Titan"});
        $(".card-title").text("Attack on Titan");
        $(".card-text").text("A tale of humans who must deal with the gigantic, man-eating titans residing just outside their high city walls.");
        $(".card").css("border-color","white");
        $("body").css("background","darkred");
        $("h1").css("color","white");
        $("#game").css({"background":"#580201", "color":"white","border-color":"white"});
        $(".card-body").css({"background":"black","color":"white"});
    }
    if (anime === "SAILOR MOON") {
        $("#themesong").attr("src","assets/songs/SailorMoon.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/sailor.jpg","alt":"Usagi Tsukino"});
        $(".card-title").text("Sailor Moon");
        $(".card-text").text("A show about magical school girl who fights baddies from outer space.");
        $(".card").css("border-color","white");
        $("body").css("background","hotpink");
        $("h1").css("color","honeydew");
        $("#game").css({"background":"#ffbbdd", "color":"honeydew","border-color":"white"});
        $(".card-body").css({"background":"white","color":"black"});
    }
    if (anime === "POKEMON") {
        $("#themesong").attr("src","assets/songs/Pokemon.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/pokemon.jpg","alt":"Ash and friends"});
        $(".card-title").text("Pokemon");
        $(".card-text").text("The unforgettable monster-catching show about a boy who wants to become a Pokemon master, but can't turn 11.");
        $(".card").css("border-color","black");
        $("body").css("background","lightyellow");
        $("h1").css("color","black");
        $("#game").css({"background":"white", "color":"black","border-color":"black"});
        $(".card-body").css({"background":"white","color":"black"});
    }
    //one piece 
    //naruto
    //dragon ball

    // if (anime === "INUYASHA") {
    //     $("#themesong").attr("src","assets/songs/Pokemon.mp3");
    //     document.getElementById("themesong").play();
    //     $(".card-img-top").attr({"src":"assets/images/pokemon.jpg","alt":"Ash and friends"});
    //     $(".card-title").text("Pokemon");
    //     $(".card-text").text("The unforgettable monster-catching show about a boy who wants to become a Pokemon master, but can't turn 11.");
    //     $(".card").css("border-color","black");
    //     $("body").css("background","lightyellow");
    //     $("h1").css("color","black");
    //     $("#game").css({"background":"white", "color":"black","border-color":"black"});
    //     $(".card-body").css({"background":"white","color":"black"});
    // }
}

