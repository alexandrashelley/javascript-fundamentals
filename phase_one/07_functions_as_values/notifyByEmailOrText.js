const notifyByEmail = (emailAddress) => {
  return `Email sent to: ${emailAddress}`
}

const notifyByText = (phoneNumber) => {
  return `Text sent to: ${phoneNumber}`
}

// contactInfo is a user-inputted email address or phone number
const notify = (contactInfo, notifyFunction) => {
  return notifyFunction(contactInfo);
}

console.log(notify('alex@gmail.com', notifyByEmail));
console.log(notify('07123456789', notifyByText));