const { QUESTION_TYPE } = require('../controllers/qestion-type');
const { parsingAnswer, parsingMutipleAnswer } = require('./answer');
const { parsingMultipleChoice } = require('./mutipleChoice');

const getQuestion = (questionData, questionType) => {

  //getting the start index of the question
  let questionStartIndex = 0;
  let questionStart = questionData.match(/[0-9]+.\s*/);
  if (questionStart) { // excluding the numeric index of the question
    questionStartIndex = questionStart.index + questionStart[0].length;
  } 

  //getting the end index of the question
  let questionEndIndex = questionStartIndex;
  if (questionType === QUESTION_TYPE.MULTIPLE_CHOICE) {
    questionEndIndex = questionData.indexOf('A.') - 1;
  } else if (questionType === QUESTION_TYPE.TRUE_FALSE) {
    questionEndIndex = questionData.indexOf('Answer:') - 1;
  }

  return questionData.substring(questionStartIndex, questionEndIndex)?.trim();
}


exports.parsingQuestion = (questions, questionType) => {
  return questions.map(question => {
    const result = { 
      question : getQuestion(question, questionType),
    }
    console.log("typeof questionType", typeof questionType, questionType);
    console.log(questionType === QUESTION_TYPE);
    if (questionType === QUESTION_TYPE.MULTIPLE_CHOICE) {
      const choices = parsingMultipleChoice(question);
      return {
        ...result,
        choices : choices,
        answer : parsingMutipleAnswer(question, choices)
      }
    } else {
      return {
        ...result,
        answer : parsingAnswer(question)
      }
    }
  });
 } 
