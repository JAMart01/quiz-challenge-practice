// TODO: Create an array with five question objects

var quizQuestions =  [
    {q:"Red, Green, and Blue (RGB) are the primary colors.", a: "f"},
    {q:"Blue and Orange are complimentary Colors.", a: "t"},
    {q:"In Ancient Greece, Blue was not considered a color.", a: "t"},
    {q:"Black is a color.", a: "f"},
    {q:"An Analogous color scheme must consist of at least 3 colors.", a:"f"},
    {q:"Saturation refers to the intensity of a color.", a: "t"},
    {q:"Green screens are green because human skin does not have green undertones.", a: "t"},
    {q:"Digital screens use subtractive colors.", a: "f"}
];

// TODO: Create a variable to keep track of the score
var quizScore = 0;

// TODO: Iterate over the questions array and display each question in a confirmation box
for (i = 0; i < quizQuestions.length; i++) {
    var quizAnswer = confirm(quizQuestions[i].q);

    // TODO: Check the user's answer against the correct answer
    if (
        (quizAnswer === true && quizQuestions[i].a === "t") || 
        (quizAnswer === false && quizQuestions[i].a === "f" )
    )

    // TODO: Alert the user if they are correct or wrong. Increment the score accordingly
    {
        alert("You got it right, Good Job!");
        quizScore++
    }
    else {
        alert("That was a tough one. Better luck next time!");
    }           
}; 
// TODO: At the end of the game, alert the user with the final score

var quizEnd = function() {
    if (quizScore < 4 || quizScore === 4){
        alert("You scored " + quizScore + " out of " + quizQuestions.length + "." + " Better luck next time!");
    }
    else if (quizScore === 6 ) {
        alert("You scored " + quizScore + " out of " + quizQuestions.length + "." + " Your color knowledge is pretty decent!");
    }

    else if (quizScore === 8) {
        alert("You scored " + quizScore + " out of " + quizQuestions.length + "." + "That's 100%. You're a color master!");
    }
};

quizEnd();





// Question 1: RGB are the primary colors. Answer False RYB are the primary colors  
// Question 2: Blue and Orange are complimentary colors. Answer True 
// Question 3: In Ancient Greece, Blue was not considered a color. Answer True
// Question 4: Black is a color. Answer False. Black is a shade, it is the absence of color. 
// Question 5: An Analogous color scheme must consist of at least 3 colors. False it is a minimum of 2 colors
// Question 6: Saturation refers to the intensity of a color. Answer True
// Question 7: Green screens are green because human skin does not have green undertones. True
// Question 8: Digital screens use subtractive colors. False. Subtractive colors are Cyan, Yellow, and Magenta (CYM), commonly used in printers. RGB are additive colors. 