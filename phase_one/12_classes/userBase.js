const User = require('./user')

class UserBase {
  constructor(arrayOfUsers) {
    this.arrayOfUsers = arrayOfUsers;
  }
  getCount() {
    return this.arrayOfUsers.length;
  }

  getNames() {
    return this.arrayOfUsers.map((user) => user.getName());
  }

  getIntroductions() {
    return this.arrayOfUsers.map((user) => user.getIntroduction());
  }
}

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

module.exports = UserBase;

// const userBase = new UserBase(users);
// userBase.getCount();
// userBase.getNames();
// userBase.getIntroductions();
