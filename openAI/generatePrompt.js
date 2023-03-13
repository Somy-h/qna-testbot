const {QUESTION_TYPE, getQuestionType} = require('../controllers/qestion-type'); 

const booleanTemplate = `
  Example of {%QUESTION_TYPE%} questions:
  JavaScript is a compiled language.
  Answer: False
  
  JavaScript supports multi-threaded programming.
  Answer: False
  `;

const multipleTemplete = `Example of {%QUESTION_TYPE%} question: 
  What is the syntax for a for loop in JavaScript? 
  A. for(i = 0, i < 10, i++ 
  B. for (i = 0; i < 10; i++) 
  C. for i = 1 to 10 
  D. for (i <= 10; i++) 
  Answer: B
  `;

const customTemplate = "\n\nUsing the formatting of the example above generate {%NUMBER%} {%LEVEL%} {%CATEGORY%} questions."

const getPrompt = (questionType) => {
  switch (questionType) {
    case QUESTION_TYPE.TRUE_FALSE:
      return booleanTemplate + customTemplate;
    case QUESTION_TYPE.MULTIPLE_CHOICE:
      return multipleTemplete + customTemplate;
    default:
      return customTemplate;
  }
}

exports.generatePrompt = (category, questionLevel, questionType, amoutOfQuestion) => {
  
  console.log("questionType: " + questionType);
  let outputPrompt = getPrompt(questionType);
  console.log("before replace:", outputPrompt);

  let output = outputPrompt.replace(/{%QUESTION_TYPE%}/g, getQuestionType(questionType));
  output = output.replace(/{%NUMBER%}/g, amoutOfQuestion);
  output = output.replace(/{%LEVEL%}/g, questionLevel);
  output = output.replace(/{%CATEGORY%}/g, category);

  console.log(output);
  return output;
}

