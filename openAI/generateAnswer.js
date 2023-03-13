const { Configuration, OpenAIApi} = require("openai");
const promptModel = require('./generatePrompt');
const {getTokenNumber} = require('../utils/utils');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.generateAnswer = async (category, questionLevel, questionType, questionNumber) => {
  
  const prompt = promptModel.generatePrompt(category, questionLevel, questionType, questionNumber);
  const tokenNumber = getTokenNumber(prompt);
  console.log("token#: ", tokenNumber);
  
  return await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
      max_tokens: 4000 - tokenNumber,
      temperature: 0.6,
  });
}