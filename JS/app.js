// const users = ["adedamola", "alaran", "emmanuel"];
// console.log(users);
// users.push("adegoke");
// console.log(users);

// inheritance
const initialUsers = ["ada", "goke", "solo"]

// const currentUsers = initialUsers
// currentUsers.push('omo', 'tosho');
// console.log(currentUsers);
console.log(initialUsers);

// when copying an object or an array , and you dont want the one you copied from to be modified, do not use the
// method above because this just points currentUsers to the original initialUsers array and there for when you 
// modify the currentUsers initial users are also modified, instead we use the rest an spread operators.

const currentUsers = [...initialUsers];
currentUsers.push('omo', 'tosho');
console.log(currentUsers);
