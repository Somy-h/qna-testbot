const answerModel = require('../openAI/generateAnswer');
const parser = require('../parser/parser');
const {QUESTION_TYPE} = require('./qestion-type');

exports.getQuestions = async (req, res) => {
  try {

    //Get Params
    const category = req.params.category;
    const difficultyLevel = req.params.level;
    const amountOfQuestion = req.params.number * 1; // type number
    const questionType = (req.params.type) ? parseInt(req.params.type) : QUESTION_TYPE.MULTIPLE_CHOICE; 
    
    console.log("controller getQuestions: ", category, difficultyLevel, questionType);
    const completion = await answerModel.generateAnswer(category, difficultyLevel, questionType, amountOfQuestion);
    // received data from OpenAI
    console.log(completion.data.choices[0]);

    const result = parser.parser(category, difficultyLevel, questionType, amountOfQuestion, completion.data.choices[0].text);
    console.log("result:", result);

    res.status(200).json(result);

  } catch (err) {
    console.log(err);
    res.status(500).json({
      error : {
        message: 'An error occurred during your request.'
      }
    });
  } 
};
