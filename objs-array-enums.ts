// OBJECTS


// Assigning type object removes object type details when hovering over object.
// It will also complain that keys don't exist even though they do since TS is not made aware of it

// const person: object = {
//   name: 'Alex',
//   age: 24
// }


//To be more specific, but better to let TS handle this inferrence

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Alex',
//   age: 24
// }


// Instead leave as this, TS handles inference for this object

const person = {
  name: 'Alex',
  age: 24,
  hobbies: ['Puzzles', 'Singing'],
  role: [2, 'author']
}


//NB: Accessing key that does not exist in object raises error

// console.log(person.nickname);


//Hovering over object variable gives object type, looks like object and gives details of object

console.log(person.age);

/*
*
*
*/

// ARRAY

// Complains because it expects all values in array to be of type string
// FavouriteActivities[1] is a number

// let favouriteActivities: string[];
// favouriteActivities = ['Sport', 1];


// To support mix of types, use any[].
// NB: Avoid because it renders  TS useless

// let favouriteActivities: any[];
// favouriteActivities = ['Sport', 1];


// Hobby is inferred as a string by TS, thus using string methods on hobby throws no error

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase());

  // This will throw error
  // console.log(hobby.map());
}


// Tuple
// Type that exists in TS not JS
// These are fixed length and type Array
// To make person2.role a tuple:
//                              prevent replacing type at speicic role index
//                              prevent increase or decrease of array (tuple) length

const person2: {
  role: [number, string];
} = {
  role: [2, 'Admin'],
}

// These will throw error

// person2.role[1] = 2;
// person2.role = ['2', 'Admin'];    Need to match types
// person2.role = [3, 'Admin', 3];   Need exact length


// Will not throw error
person2.role = [3, 'Admin']; //Correct length and types passed


// Will not throw error...sadly, a TS exception
// person2.role.push('3rd role value');


/*
*
*
*/

// ENUM
// Type that exists in TS not JS
// Make value assignment human readable and prevent use of wrong values, e.g a number not linked to a role
// enum{ NEW, OLD }

// Example
// Using Global Var
// IDS as global var
const ADMIN_AS_GLOBAL = 0
const READ_ONLY_AS_GLOBAL = 1
const AUTHOR_AS_GLOBAL = 2

const person3 = {
  role: 2
}

if (person3.role === AUTHOR_AS_GLOBAL) {
  console.log('Now you know I am an author, using global var (not error proof)')
}


// Using enum
// Convention is to start with uppercase character
// enum is a custom type

enum Role { ADMIN, READ_ONLY, AUTHOR }

//Can use text and other behaviours
// enum Role { ADMIN = 'ADMIN', READ_ONLY = 'UP', AUTHOR = 500 }

// To start from a specific number, i.e, not 0
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR }

if (person3.role === Role.AUTHOR) {
  console.log('Now you know I am an author, WITH THE POWER OF ENUM. TOTALLY RAD!!')
}

/*
*
*
*/

// ANY
// Best to avoid
// Gives same experience as JS

// any
// any[]
