var myPetsArray = [
    {
        animalType: "Dog",
        name: "Pujdo",
    },
    {
        animalType: "Cat",
        name: "Maca",
    },
    {
        animalType: "Bird",
        name: "Tweety",
    },
];

function myPetsFunction(pets) {
    return pets.name;
}

myPetsFunction(myPetsArray[1]);
console.log(myPetsFunction(myPetsArray[1]));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;