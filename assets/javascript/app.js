

$("#start").on("click", function () {
    $("#start").remove()
});

var questions = [{
    question: "What Dallas Cowboy holds the NFL record for most passes to start a career without an interception?",
    answers: ["Tony Romo", "Troy Aikman", "Dak Prescott", "Roger Staubach"],
    correctAnswer: "Dak Prescott",
    image: "assets/images/dak.gif"
}, {
    question: "Who was the first Dallas Cowboy to win the National Football League MVP Award?",
    answers: ["Roger Staubach", "Emmitt Smith", "Randy White", "Bob Lilly"],
    correctAnswer: "Emmitt Smith",
    image: "assets/images/emmitt.gif"
}, {
    question: "The 2014 season ended on an overturned call of a completed catch by what receiver?",
    answers: ["Cole Beasley", "Jason Witten", "Dez Bryant", "Terrance Williams"],
    correctAnswer: "Dez Bryant",
    image: "assets/images/dez.gif"
}, {
    question: "What Dallas Cowboys head coach invented the flex defense?",
    answers: ["Tom Landry", "Jason Garrett", "Jimmy Johnson", "Bill Parcells"],
    correctAnswer: "Tom Landry",
    image: "assets/images/tom.gif"
}, {
    question: "Who purchased the Dallas Cowboys in 1989?",
    answers: ["H.R. Bum Wright", "Clint Murchison, Jr.", "Jerry Jones", "Bedford Wynne"],
    correctAnswer: "Jerry Jones",
    image: "assets/images/jerry.gif"
}, {
    question: "Who was the first player selected by the Dallas Cowboys in an NFL Draft?",
    answers: ["Don Meredith", "Don Perkins", "Mel Renfro", "Bob Lilly"],
    correctAnswer: "Emmitt Smith",
    image: "assets/images/bob.gif"
}, {
    question: "How many years was Troy Aikman in the NFL before he finished a season with more touchdowns than interceptions?",
    answers: ["2", "1", "3", "4"],
    correctAnswer: "3",
    image: "assets/images/3.gif"
}, {
    question: "What undrafted free agent replaced Drew Bledsoe as QB during the 2006 season?",
    answers: ["Quincy Carter", "Vinny Testaverde", "Rodney Peete", "Tony Romo"],
    correctAnswer: "Tony Romo",
    image: "assets/images/romo.gif"
}];

var playGame = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,

    countdown: function (){
        playGame.counter--;
        $("#counter").html(playGame.counter);

    }, 
    loadQuesstion: function(){

    }, 
    nextQuestion: function(){

    },
    timesUp: function(){

    }, 
    results: function(){
        
    },
    selected: function(){

    }, 
    correctAnswers: function(){

    },
    incorrectAnswers: function(){

    }, 
    reset: function(){
        
    }

}

