
const quiz = [
    ["What is Superman's real name?", "Clarke Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"],
    ["What is my real name?", "Lawal Kehinde"]
];

let score = 0;

for(const [question, answer] of quiz){

    const response = prompt(question);
    if(response=== answer){

        alert('Correct!');
        score++;
    }else{

        alert(`Wrong!, The correct answer was ${answer}`);
    }

    //At the end of the game, report the player's score

    alert(`Game over! You scored ${score} point${score !== 1 ? "s": ""}`);
}




alert('Welcome to Quiz Ninja!');

const question = "What is my real name?";
const answer = prompt(question);
alert(`You answered ${answer}`);

