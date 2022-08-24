const printHello = () => {
  console.log("Hello!");
};

const executeAfterDelay = (time, callbackFunction) => {
  return setTimeout(callbackFunction, time)
};

console.log(executeAfterDelay(2000, printHello));
