const {encode} = require('gpt-3-encoder');

exports.getTokenNumber = (prompt) => {
  return encode(prompt).length;
}