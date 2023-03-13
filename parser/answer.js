const getAnswer = (questionData) => {
  const alines = questionData.split('\n').filter(line => 
  line.startsWith('Answer:'));
  //console.log(alines);

  if (alines && alines.length > 0) {
    return alines[0].substring(alines[0].indexOf(':') + 1)?.trim();
  }
  return "";
} 

exports.parsingAnswer = (data) => {
  
  return getAnswer(data)
}

exports.parsingMutipleAnswer = (data, choices) => {

    const answer = getAnswer(data);
    if (answer) {
      return choices.findIndex(choice => choice.startsWith(answer));
    }
    return -1;
}