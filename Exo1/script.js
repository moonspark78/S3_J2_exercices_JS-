let dogs = ['Golden Retrieve', 'Bouvier bernois', 'Beagle'];
//ajoute deux races de chiens à la fin du tableau
dogs.push('Chihuahua', 'Akita Inu');
console.log(dogs);
//tri le tableau par ordre alphabétique
dogs.sort()
console.log(dogs);
//à partir de ce tableau, créé un nouveau tableau d’objets (un objet, une race)
let newTable = dogs.map((dog) => {
    return {name: dog}
});
console.log(newTable);
//pour chaque race, ajouter la propriété nativeCountry et lui donner sa valeur 

let contries = {
    'Golden Retrieve': 'Angleterre',
    'Bouvier bernois': 'Suisse',
    'Beagle': 'Angleterre',
    'Chihuahua': 'Mexique',
    'Akita Inu': 'Japon'
}
let newTable2 = dogs.map((dog) => {
    return {
        name: dog,
        nativeCountry: contries[dog]
    }
});
console.log(newTable2);
