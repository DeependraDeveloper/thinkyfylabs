let userData = [];

class User {
  constructor(name, gender, number, age, location) {
    this.name = name;
    this.gender = gender;
    this.number = number;
    this.age = age;
    this.location = location;
  }

  add_user(name, gender, num, age, location) {
    let createUser = new User(name, gender, num, age, location);
    userData.push(createUser);
    return createUser;
  }

  UpdateUserDetails(newName, newGender, newNumber, newAge, newLocation) {
    this.name = newName || this.name;
    this.gender = newGender || this.gender;
    this.number = newNumber || this.number;
    this.age = newAge || this.age;
    this.location = newLocation || this.location;
  }

  get_User_Details() {
    return userData;
  }
}

let newUser = new User().add_user("suresh", "male", 8632294456, 23, {
  x: 10,
  y: 15,
});

newUser.UpdateUserDetails("suresh Bandari");

console.log(newUser.get_User_Details());
