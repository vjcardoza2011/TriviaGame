$("#start").on("click", function () {
    playGame.start();
});

$(document).on("click", "#end", function(){
    playGame.done();
});

var questions = [{
    question: "What Dallas Cowboy holds the NFL record for most passes to start a career without an interception?",
    answers: ["Tony Romo", "Troy Aikman", "Dak Prescott", "Roger Staubach"],
    correctAnswer: "Dak Prescott"
    
}, {
    question: "Who was the first Dallas Cowboy to win the National Football League MVP Award?",
    answers: ["Roger Staubach", "Emmitt Smith", "Randy White", "Bob Lilly"],
    correctAnswer: "Emmitt Smith"

}, {
    question: "The 2014 season ended on an overturned call of a completed catch by what receiver?",
    answers: ["Cole Beasley", "Jason Witten", "Dez Bryant", "Terrance Williams"],
    correctAnswer: "Dez Bryant"

}, {
    question: "What Dallas Cowboys head coach invented the flex defense?",
    answers: ["Tom Landry", "Jason Garrett", "Jimmy Johnson", "Bill Parcells"],
    correctAnswer: "Tom Landry"

}, {
    question: "Who purchased the Dallas Cowboys in 1989?",
    answers: ["H.R. Bum Wright", "Clint Murchison, Jr.", "Jerry Jones", "Bedford Wynne"],
    correctAnswer: "Jerry Jones"

}, {
    question: "Who was the first player selected by the Dallas Cowboys in an NFL Draft?",
    answers: ["Don Meredith", "Don Perkins", "Mel Renfro", "Bob Lilly"],
    correctAnswer: "Emmitt Smith"

}, {
    question: "How many years was Troy Aikman in the NFL before he finished a season with more touchdowns than interceptions?",
    answers: ["2", "1", "3", "4"],
    correctAnswer: "3"

}, {
    question: "What undrafted free agent replaced Drew Bledsoe as QB during the 2006 season?",
    answers: ["Quincy Carter", "Vinny Testaverde", "Rodney Peete", "Tony Romo"],
    correctAnswer: "Tony Romo"
    
}];

var playGame = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function (){
        playGame.counter--;
        $("#counter").html(playGame.counter);
        if(playGame.counter<=0){
            console.log("Time's up!");
            playGame.done();
        }

    }, 
    start: function(){
        timer=setInterval(playGame.countdown, 1000);
        $("#subwrapper").prepend('<h2>Time Remaining: <span id ="counter">120</span> Seconds</h2>')
        $("#start").remove();
        for(var i=0; i < questions.length; i++){
           $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
           for (var j =0; j < questions[i].answers.length; j++){
            $("#subwrapper").append("<input type = 'radio' name ='question-'" + i + "' value= ' " +questions[i].answers[j]+"'>"+questions[i].answers[j])
           }
        }
        
        $("#subwrapper").append('<br><button id="end">Submit</button>')
    },
    done: function(){
        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val()==questions[0].correctAnswer){
                playGame.correct++;
            } else {
                playGame.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function(){
            if($(this).val()==questions[1].correctAnswer){
                playGame.correct++;
            } else {
                playGame.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function(){
            if($(this).val()==questions[2].correctAnswer){
                playGame.correct++;
            } else {
                playGame.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function(){
            if($(this).val()==questions[3].correctAnswer){
                playGame.correct++;
            } else {
                playGame.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function(){
            if($(this).val()==questions[4].correctAnswer){
                playGame.correct++;
            } else {
                playGame.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function(){
            if($(this).val()==questions[5].correctAnswer){
                playGame.correct++;
            } else {
                playGame.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function(){
            if($(this).val()==questions[6].correctAnswer){
                playGame.correct++;
            } else {
                playGame.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function(){
            if($(this).val()==questions[7].correctAnswer){
                playGame.correct++;
            } else {
                playGame.incorrect++;
            }
        });

        this.result();
    },
    result: function(){
        clearInterval(timer);
       $("#subwrapper h2").remove();

       $("#subwrapper").html("<h2>Game over!</h2>");
       $("#subwrapper").append("<br><h3> Correct Answers: "+ this.correct+ "</h3>");
       $("#subwrapper").append("<h3> Incorrect Answers: "+ this.incorrect+ "</h3>");
       $("#subwrapper").append("<h3> Unanswered: "+ (questions.length -(this.incorrect+this.correct))+"</h3>");
    }
}