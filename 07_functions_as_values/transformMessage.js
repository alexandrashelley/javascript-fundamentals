const uppercaseMessage = (message) => {
  return message.toUpperCase();
};
// uppercaseMessage takes a message as an argument, and transforms it into uppercase

const lowercaseMessage = (message) => {
  return message.toLowerCase();
};

// message is a string argument, transformFunction is a placeholder name for calling
// one of the above functions (uppercaseMessage or lowercaseMessage)
const transform = (message, transformFunction) => {
  // return the given function with string to transform (message argument)
  return transformFunction(message)
};

console.log(transform("HELLO", lowercaseMessage));