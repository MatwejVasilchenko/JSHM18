const getUsersByAgeRange = (min, max) => users.filter(user => user.age >= min && user.age <= max);

console.log(getUsersByAgeRange(20, 30));
