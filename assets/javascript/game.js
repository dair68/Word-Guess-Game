var wins = 0;
var previousWord = "";
var word = "";
var currentWord = "";
var guesses = 12;
var guessedLetters = [];
var index = 14;
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var anime = [
    "ATTACK ON TITAN",
    "SAILOR MOON",
    "POKEMON",
    "ONE PIECE",
    "NARUTO",
    "DRAGON BALL",
    "INUYASHA",
    "FULLMETAL ALCHEMIST",
    "YU-GI-OH!",
    "ONE PUNCH MAN", 
    "DEATH NOTE",
    "GINTAMA",
    "TOKYO GHOUL",
    "BLEACH",
    "MY HERO ACADEMIA",
    "KILL LA KILL",
    "YURI ON ICE",
    "COWBOY BEBOP",
    "JOJO'S BIZARRE ADVENTURE",
    "CASED CLOSED",
    "GUNDAM",
    "NEON GENESIS EVANGELION",
    "INAZUMA ELEVEN",
    "HUNTER X HUNTER",
    "BOBOBO-BO BO-BOBO",
    
    "HETALIA",
    "FAIRY TAIL",
    "SWORD ART ONLINE",
    "YOUR LIE IN APRIL",
    "ANGEL BEATS"
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
    currentWord = "_".repeat(word.length);
    //replacing appropriate dashes with spaces
    for (var i=0; i<word.length; i++) {
        if (!alphabet.includes(word[i])) {
            currentWord = currentWord.substring(0,i) + word[i] + currentWord.substring(i+1);
        }
    }
    guesses = 12;
    guessedLetters = [];
    
}



//allows user to guess letter by hitting letter keys
$(document).on("keyup", function(event) {
    key = event.key.toUpperCase();
    //making sure key is letter, and not already guessed
    if (alphabet.includes(key) && !guessedLetters.includes(key)) {
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

function changeStyle(anime) {
    console.log("switch!");
    if (anime === "ATTACK ON TITAN") {
        $("#themesong").attr("src","assets/songs/AttackOnTitan.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/attack.jpg","alt":"Eren vs Titan"});
        $(".card-title").text("Attack on Titan");
        $(".card-text").text("An intense tale of humans who must deal with the gigantic, man-eating titans residing just outside their high city walls.");
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
        $(".card-text").text("A show about a magical school girl named Usagi Tsukino who fights baddies from outer space. One of many space warriors, she is the one named Sailor Moon!");
        $(".card").css("border-color","honeydew");
        $("body").css("background","hotpink");
        $("h1").css("color","honeydew");
        $("#game").css({"background":"#ffbbdd", "color":"white","border-color":"white"});
        $(".card-body").css({"background":"honeydew","color":"grey"});
    }
    if (anime === "POKEMON") {
        $("#themesong").attr("src","assets/songs/Pokemon.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/pokemon.jpg","alt":"Ash and friends"});
        $(".card-title").text("Pokemon");
        $(".card-text").text("The unforgettable monster-catching show about a boy who wants to become a Pokemon master, but can't turn 11.");
        $(".card").css("border-color","black");
        $("body").css("background","turquoise");
        $("h1").css("color","black");
        $("#game").css({"background":"#fce376", "color":"black","border-color":"black"});
        $(".card-body").css({"background":"lightyellow","color":"black"});
    }
    if (anime === "ONE PIECE") {
        $("#themesong").attr("src","assets/songs/OnePiece.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/piece.jpg","alt":"Monkey D. Luffy and the crew"});
        $(".card-title").text("One Piece");
        $(".card-text").text("This insanely popular show chronicles the swashbuckling adventures of pirate Monkey D. Luffy and his friends in their search for the elusive 'One Piece' treasure. Did I mention that the protagonist has the powers of rubber?");
        $(".card").css("border-color","black");
        $("body").css("background","aqua");
        $("h1").css("color","black");
        $("#game").css({"background":"lightgreen", "color":"black","border-color":"black"});
        $(".card-body").css({"background":"lightyellow","color":"black"});
    }
    if (anime === "NARUTO") {
        $("#themesong").attr("src","assets/songs/Naruto.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/naruto.jpg","alt":"title ninja Naruto"});
        $(".card-title").text("Naruto");
        $(".card-text").text("One of the most popular animes ever, this over decade-long series tells the story the young titular ninja in his dream becoming the next Hokage. Try the Naruto run next time you're late for work!");
        $(".card").css("border-color","black");
        $("body").css("background","lightyellow");
        $("h1").css("color","black");
        $("#game").css({"background":"black", "color":"white","border-color":"black"});
        $(".card-body").css({"background":"white","color":"black"});
    }
    if (anime === "DRAGON BALL") {
        $("#themesong").attr("src","assets/songs/Dragonball.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/dragonball.jpg","alt":"Goku and friends"});
        $(".card-title").text("Dragon Ball");
        $(".card-text").text("An action packed series featuring tailed-Saiyans, intense episode-spanning fights, and wish granting balls. On a scale of 1-10, this show is over 9000!");
        $(".card").css("border-color","black");
        $("body").css("background","#f48033");
        $("h1").css("color","black");
        $("#game").css({"background":"darkblue", "color":"yellow","border-color":"black"});
        $(".card-body").css({"background":"lightyellow","color":"black"});
    }
    if (anime === "INUYASHA") {
        $("#themesong").attr("src","assets/songs/Inuyasha.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/inuyasha.jpg","alt":"Inuyasha and Kagome"});
        $(".card-title").text("Inuyasha");
        $(".card-text").text("Schoolgirl Kagome and half-demon Inuyasha team up in search of the shards of a powerful ancient jewel across demon-filled feudal Japan. My personal favorite.");
        $(".card").css("border-color","black");
        $("body").css("background","purple");
        $("h1").css("color","white");
        $("#game").css({"background":"white", "color":"black","border-color":"black"});
        $(".card-body").css({"background":"white","color":"black"});
    }
    if (anime === "FULLMETAL ALCHEMIST") {
        $("#themesong").attr("src","assets/songs/FullMetalAlchemist.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/alchemist.jpg","alt":"Edward, Alphonse, and the rest of the characters looking badass."});
        $(".card-title").text("Fullmetal Alchemist");
        $(".card-text").text("A well-crafted story of two alchemy practicing brothers who search for the Philosopher's Stone in order to restore their bodies. There are actually two different animes: the original Fullmetal Alchemist and the more manga-faithful Fullmetal Alchemist: Brotherhood. Both are well worth watching.");
        $(".card").css("border-color","black");
        $("body").css("background","darkblue");
        $("h1").css("color","white");
        $("#game").css({"background":"white", "color":"black","border-color":"black"});
        $(".card-body").css({"background":"lightgrey","color":"black"});
    }
    if (anime === "YU-GI-OH!") {
        $("#themesong").attr("src","assets/songs/Yugioh.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/yugioh.jpg","alt":"Yami Yugi holding a card"});
        $(".card-title").text("Yu-Gi-Oh!");
        $(".card-text").text("A show featuring a children's card game and a child containing the spirit of an ancient Pharaoh. The 4Kids dub has been amusingly parodied on Yu-Gi-Oh The Abridged Series, which can be found on Youtube.");
        $(".card").css("border-color","black");
        $("body").css("background","black");
        $("h1").css("color","white");
        $("#game").css({"background":"goldenrod", "color":"black","border-color":"white"});
        $(".card-body").css({"background":"chocolate","color":"black"});
    }
    if (anime === "ONE PUNCH MAN") {
        $("#themesong").attr("src","assets/songs/OnePunchMan.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/punch.jpg","alt":"Saitama"});
        $(".card-title").text("One Punch Man");
        $(".card-text").text("A silly show that parodies the superhero genre by featuring a protagonist who can defeat anything with just one punch. Over-the-top, yet ultimately doomed villians combined with an entertaining dynamic between the protagonist and his cyborg sidekick make this one a winner.");
        $(".card").css("border-color","black");
        $("body").css("background","khaki");
        $("h1").css("color","black");
        $("#game").css({"background":"skyblue", "color":"black","border-color":"black"});
        $(".card-body").css({"background":"lightyellow","color":"black"});
    }
    if (anime === "DEATH NOTE") {
        $("#themesong").attr("src","assets/songs/Death.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/death.jpg","alt":"Light Yagami and some creepy-looking figures"});
        $(".card-title").text("Death Note");
        $(".card-text").text("A psychological thriller surrounding a notebook with the power to kill anyone anywhere, and the owner's increasing madness. With the involvement of a cult and the authorities, the stakes are high.");
        $(".card").css("border-color","black");
        $("body").css("background","black");
        $("h1").css("color","white");
        $("#game").css({"background":"grey", "color":"white","border-color":"black"});
        $(".card-body").css({"background":"darkgrey","color":"white"});
    }
    if (anime === "GINTAMA") {
        $("#themesong").attr("src","assets/songs/Gintama.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/gintama.jpeg","alt":"Kagura, Gintoki, and Shinpachi"});
        $(".card-title").text("Gintama");
        $(".card-text").text("A show starring lazy samurai Gintoki and his friends as they attempt odd jobs to make ends meet. With amusing pop-culture references, unpredictable storylines, and fourth-wall breaks, this show remains endlessly entertaining.");
        $(".card").css("border-color","black");
        $("body").css("background","mintcream");
        $("h1").css("color","black");
        $("#game").css({"background":"lightgreen", "color":"black","border-color":"black"});
        $(".card-body").css({"background":"lightblue","color":"black"});
    }
    if (anime === "TOKYO GHOUL") {
        $("#themesong").attr("src","assets/songs/ghoul.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/Ghoul.jpg","alt":"Ken Kaneki"});
        $(".card-title").text("Tokyo Ghoul");
        $(".card-text").text("A show starring a young man who must live with the horrifying fate of being turned part ghoul. Featuring action, horror, and tragedy, this series isn't for the faint of heart.");
        $(".card").css("border-color","white");
        $("body").css("background","black");
        $("h1").css("color","white");
        $("#game").css({"background":"red", "color":"white","border-color":"white"});
        $(".card-body").css({"background":"grey","color":"white"});
    }
    if (anime === "BLEACH") {
        $("#themesong").attr("src","assets/songs/Bleach.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/bleach.jpg","alt":"Ichigo Kurosaki and co"});
        $(".card-title").text("Bleach");
        $(".card-text").text("A long running show centered on orange-hairedp Ichigo Kurosaki and his job as a Soul Reaper: destroy evil spirits and send good spirits to the afterlife. Filled to the brim with awesome moments, it's no wonder that the show's popularity is still going strong.");
        $(".card").css("border-color","black");
        $("body").css("background","white");
        $("h1").css("color","black");
        $("#game").css({"background":"black", "color":"white","border-color":"black"});
        $(".card-body").css({"background":"grey","color":"white"});
    }
    if (anime === "MY HERO ACADEMIA") {
        $("#themesong").attr("src","assets/songs/MyHero.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/hero.jpg","alt":"Izuku and friends"});
        $(".card-title").text("My Hero Academia");
        $(".card-text").text("An anime about underdog Izuku and his journey to becoming a certified hero under his mentor, the legendary All Might. Several characters and superpowers add up to form a show with many spectacular and poignant moments.");
        $(".card").css("border-color","black");
        $("body").css("background","gold");
        $("h1").css("color","black");
        $("#game").css({"background": "green", "color":"white","border-color":"black"});
        $(".card-body").css({"background":"firebrick","color":"white"});
    }
    if (anime === "KILL LA KILL") {
        $("#themesong").attr("src","assets/songs/Kill.mp3");
        document.getElementById("themesong").play();
        $(".card-img-top").attr({"src":"assets/images/kill.jpg","alt":"Ryuko Matoi"});
        $(".card-title").text("Kill la Kill");
        $(".card-text").text("A wild anime featuring schoolgirl Ryuko Matoi and her sentient, power-granting uniform. She's trying to find out the truth behind the murder of her father while at war with the student council president. Fun stuff.");
        $(".card").css("border-color","black");
        $("body").css("background","white");
        $("h1").css("color","black");
        $("#game").css({"background": "firebrick", "color":"white","border-color":"black"});
        $(".card-body").css({"background":"navy","color":"white"});
    }
}


//when loading page for first time
reset();
update();