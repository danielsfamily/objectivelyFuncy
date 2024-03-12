// YOUR CODE GOES HERE!!!
/******
 * 
 * ******************/

function getFirstName(obj) {
  return obj.firstName;
};

function getLastName(obj) {
  return obj.lastName;
};

function getFullName(obj) {
  return obj.firstName + " " + obj.lastName;
};

function setFirstName(person, newFirstName) {
  person.firstName = newFirstName;
  return person;
}

function setAge (obj,num) {
  obj.age = num;
  return obj;
}
function giveBirthday(person) {
  if ('age' in person) {
      person.age += 1;
  } else {
      person.age = 1;
  }
  return person;
}
function marry(person1, person2) {
  person1.married = true;
  person1.spouseName = `${person2.firstName} ${person2.lastName}`;
  
  person2.married = true;
  person2.spouseName = `${person1.firstName} ${person1.lastName}`;
}

function divorce(person1, person2) {
  person1.married = false;
  delete person1.spouseName;
  
  person2.married = false;
  delete person2.spouseName;
}


/******************/
// Our code here. Don't touch!
if (typeof getFirstName === "undefined") {
  getFirstName = undefined;
}

if (typeof getLastName === "undefined") {
  getLastName = undefined;
}

if (typeof getFullName === "undefined") {
  getFullName = undefined;
}

if (typeof setFirstName === "undefined") {
  setFirstName = undefined;
}

if (typeof setAge === "undefined") {
  setAge = undefined;
}

if (typeof giveBirthday === "undefined") {
  giveBirthday = undefined;
}

if (typeof marry === "undefined") {
  marry = undefined;
}

if (typeof divorce === "undefined") {
  divorce = undefined;
}

module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
};
