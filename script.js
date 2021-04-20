// Deel 1 - Objecten

const person = {
    name: 'Samantha',
    age: 32,
    evaluations: [7, 10, 9]
}

console.log(person); // het hele object tonen
console.log(person.name); // Dot notation | Alleen de naam tonen
console.log(person.age); // Dot notation | Alleen de leeftijd tonen
console.log(person['name']); // Bracket notation | Alleen de naam tonen 
console.log(person['age']); // Bracket notation | Alleen de leeftijd tonen 
console.log(person.evaluations); // [ 7, 10, 9 ]

// Deel 2 - Arrays

const colors = ['wit', 'beige', 'bruin'];
console.log(colors); // de items tonen = [ 'wit', 'beige', 'bruin' ]
console.log(colors.length); // lengte van de array / hoeveelheid items = 3
console.log(colors[0]); // de eerste kleur tonen = wit
console.log(colors[2]); // de laatste kleur tonen = bruin
console.log(colors[colors.length-1]); // de laatste kleur tonen = bruin

colors.push('zwart'); // extra kleur toevoegen aan items
console.log(colors); // de items tonen = [ 'wit', 'beige', 'bruin', 'zwart' ]

colors.push(5); // getal toevoegen aan items
console.log(colors); // de items tonen = [ 'wit', 'beige', 'bruin', 'zwart', 5 ]

colors.push({greeting: "hi ik ben een object"});
console.log(colors[colors.length - 1].greeting); // het laatste item tonen = hi ik ben een object

// Deel 3 - Bekijk een "real-life" object

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
                food: {
                        favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
        {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
                        favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
        {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
                        favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]

console.log("Laatste kattenras:", catBreeds[2].name);
console.log("Energy level van de 1e kat:", catBreeds[0].energy_level);
console.log("Het 1e temperament van de 2e kat:", catBreeds[1].temperament[0]);

console.log("Het laatste temperament van de 3e kat:", catBreeds[2].temperament[4]);
const lastTemperamentCatThree = catBreeds[2].temperament.length;
console.log("Het laatste temperament van de 3e kat:", catBreeds[2].temperament[lastTemperamentCatThree - 1]);

console.log("Het favoriete voedsel van de 3e kat:", catBreeds[2].food.favourite_food);
