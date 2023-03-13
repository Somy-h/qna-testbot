const { parsingQuestion } = require('./question');

//const { explainationParser } = require('./explaination');


exports.parser = (category, difficultyLevel, questionType, numberOfQuestion, data) => {
  try {
    //Seperate questions 
    const questions = data.replace(/(Answer:\s[\w]+[\s]+)/ig, "$1{%###%}").split("{%###%}");  
    console.log("questions: ", questions);

    const result = {
      category: category,
      difficultyLevel: difficultyLevel,
      questionType: questionType,
      amountOfQuestion: numberOfQuestion,
      questions: parsingQuestion(questions, questionType),
    }

    return result;
  } catch (err) {
    console.log(err);
  }
} 