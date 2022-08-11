const person1 = {name: "John Doe"};
const updated1 = Object.assign({}, person1, {name: "Isaac Doe"});
//console.log(updated1);

const person2 = {name: "John Doe"};
const updated2 = {...person2, name: "Isaac Doe"}; //this is called spread operator
//console.log(updated2);

const number = [1,2,3]
const newNumber = [...number, 4]
const index = number.indexOf(2);
const addInBetween = [...number.slice(0, index), 4, ...number.slice(index)];
//console.log(newNumber);
//console.log(addInBetween);

const user = {
    name: "John Doe",
    address: {
        country: "USA",
        state: "CA"
    }
}
const userUpdated = {
    ...user, //spread user up till address
    address: {
        ...user.address, state: "NY" //spread address up till state and modify that
    }, name: "Isaac Doe" //changes name to Isaac Doe
}; //this changes the state in the user object
//i copy user object as a whole, then i add the address object and copy the user.address and then i modify it
//console.log(userUpdated);

module.exports = {user, userUpdated};