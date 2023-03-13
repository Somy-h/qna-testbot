
exports.QUESTION_TYPE = {
  TRUE_FALSE: 1,
  MULTIPLE_CHOICE: 2,
  CODE: 3,
};

const QUESTION_TYPE = exports.QUESTION_TYPE;
exports.getQuestionType = (questionType) => {
  switch (questionType) {
    case QUESTION_TYPE.TRUE_FALSE:
      return "true or false";
    case QUESTION_TYPE.MULTIPLE_CHOICE:
      return "multiple choice";
    case QUESTION_TYPE.CODE:
      return "code";
    default:
      return "multiple choice";
  }
}