const getName = () => {
  return 'Michael';
}

const callFunction = (aFunction) => {
  console.log(aFunction);
}

callFunction(getName);

callFunction(getName());