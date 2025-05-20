let dogs = ['Golden Retrieve', 'Bouvier bernois', 'Beagle'];
dogs.push('Chihuahua', 'Akita Inu');
console.log(dogs);
dogs.sort()
console.log(dogs);
let newTable = dogs.map((dog) => {
    return {name: dog}
});
console.log(newTable);
