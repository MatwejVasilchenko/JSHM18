const getUsersByGender = (gender) => users.filter(user => user.gender === gender).map(user => user.name);

console.log(getUsersByGender('female'));
