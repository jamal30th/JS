let pets = [
    { name: 'meowasalt', species: 'cat', age: 2 },
    { name: 'Barksalot', species: 'dog', age: 3 },
    {name: 'purrsloud', species: 'dog', age: 8}    
]
console.log(pets.push({ name: 'Puppster', species: 'dog', age: 1 }));
let ourTest = pets.map(nameOnly);
function nameOnly(x) {
    return x.name
}
// console.log(ourTest);
let dogs = pets.filter(onlyDogs);
function onlyDogs(x) {
    return x.species =='dog'
}
// console.log(dogs);
function onlyBabyDogs(x){
    return x.age < 3
}

let babyDogsName = pets.filter(onlyDogs).filter(onlyBabyDogs).map(nameOnly)
console.log(babyDogsName);