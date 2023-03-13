exports.parsingMultipleChoice = (data) => {

  const choices = data.split('\n').filter(line => 
    line.startsWith('A.') || line.startsWith('B.') || line.startsWith('C.') || line.startsWith('D.'));
  console.log(choices);

  
  return choices;
}