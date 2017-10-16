var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");


var questionsBasic = {

	Question1: BasicCard (
		"What is the third largest planet in the solar system?",
		"Uranus"
	),

	Question2: BasicCard (
		"Who was known as the Great Emancipator??",
		"Abraham Lincoln"
	),

	Question3: BasicCard (
		"Who lost Super Bowl XL?",
		"Seattle Seahawks"
	),

	Question4: BasicCard (
		"A Triangle has one right angle and a 45 degree angle. What is the degree of the remaining angle?",
		"45"
	),

	Question5: BasicCard (
		"What is England's National Sport?",
		"Cricket"
	),

	Question6: BasicCard (
		"Was Benjamin Franklin on Mount Rushmore?",
		"No"
	),
};

var questionsCloze = {

	Question1: ClozeCard (
		"Lincoln was known as the Great Emancipator", 
		"Lincoln"
	),

	Question2: ClozeCard (
		"England's national sport is Cricket",
		"Cricket"
	),
}


console.log("\n");
console.log(questionsBasic.Question1);
console.log("\n");
console.log(questionsBasic.Question2);
console.log("\n");
console.log(questionsBasic.Question3);
console.log("\n");
console.log(questionsBasic.Question4);
console.log("\n");
console.log(questionsBasic.Question5);
console.log("\n");
console.log(questionsBasic.Question6);
console.log("\n");

console.log("\n");
console.log(questionsCloze.Question1);
console.log("\n");
console.log(questionsCloze.Question2);






