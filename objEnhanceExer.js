//Chris Hart Submission 12/4/20

//Rewrite in ES2015
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }


// createInstructor('Chris', 'Hart')

function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName,
    }
  }


//   var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"


var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
  [favoriteNumber]: 'Favorite Number'
};



// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

var instructor2 = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye (){
    return this.firstName + " says bye!";
  }
}


//generate animal object

//const d = createAnimal("dog", "bark", "Woooof!")

function createAnimal(species, verb, noise){
  return {
    species: species,
    [verb](){
      return noise;
    }
  }
}