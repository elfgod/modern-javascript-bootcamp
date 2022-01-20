
// typeof value is "undefined" NOT undefined
// MANUAL CHECK
function multiply(x, y) {
  //  this won't work because we always gone get an string back from typeof
  if(typeof y === undefined)
  return x * y
}
console.log(multiply(4)); // undefined

console.log('\n');
function multiply2(x, y) {
  if (typeof y === 'undefined') {
    y = 1;
  }
  return x * y;
}
console.log(multiply2(4));
console.log(multiply2(4, 5));

console.log('\n');
function multiply3(x, y) {
  y = typeof y === 'undefined' ? 1 : y
  return x * y;
}
console.log(multiply3(4));
console.log(multiply3(4, 5));

console.log('\n');
function multiply4(a , b = 1) {
  return a * b;
}
console.log(multiply4(4));
console.log(multiply4(4, 5));

const greet = (person, greeting = 'hi') => {
  console.log(`${greeting}, ${person}!`);
  
}
console.log(greet('tim'));
console.log(greet('tim', 'YOO'));

console.log('\n');
const blah = (x, y = [1, 2, 3]) => {
  console.log(x, y);
}
console.log(blah(1));
console.log(blah(1, 3));

console.log('\n');
// passing 2 Default Parameters
const greet2 = (person, greeting = 'hi', punctuation = '!' ) => {
  console.log(`${greeting}, ${person}${punctuation}`);
}
console.log(greet2('anya'));
console.log(greet2('rose', '?'));

console.log('\n');
console.log(Math.max(3, 4, 5, 6, 7,12 ,19, 99, 3));
console.log(Math.min(3, 4, 5, 6, 7,12 ,19, 99, 3));
console.log(Math.min([3, 4, 5, 6, 7,12 ,19, 99, 3]));

console.log('\n');
function giveMeFour(a, b, c, d) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  console.log('d', d); 
}
console.log(giveMeFour(4, 5, 6, 7));

const colors = ['red', 'orange', 'yellow', 'green'];
console.log(giveMeFour(colors))
console.log('\n');
console.log(giveMeFour(...colors));
console.log('\n');
console.log(giveMeFour(...('GOAT')));


console.log('\n');
const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods];
console.log("mollusca: ", mollusca);
// The order matters
const mollusca2 = [...gastropods, ...cephalopods];
console.log("mollusca2");
 
console.log("mollusca + garden slug", ['garden slug', gastropods]);

console.log("mollusca + garden slug", ['garden slug', ...gastropods, ...cephalopods]);

const inverts = [...cnidaria, ...gastropods, ...cephalopods];
console.log("inverts: ", inverts);

console.log(cephalopods.concat(gastropods));

// Spread clones, a new Array in memory, with a new unique reference
const cephCopy = [...cephalopods];
console.log("cephCopy: ", cephCopy);
// false, They are not the same
console.log("cephCopy === cephalopods: ", cephCopy === cephalopods);

console.log('\n');
console.log("abcdefg".split(''));
console.log([...['abcdegf']]);
console.log([...'abcdefg']);
console.log([...'abc', ...'def', ...'HELLO!!']);
console.log([...'abc', ...'def', 'HELLO!!']);

console.log('\n');
const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true, legs: 4 };

const dog = {
  ...canine,
  isPet: true,
  adorable: true
}
console.log("dog: ", dog);

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
}
console.log("houseCat: ", houseCat);

const catDog = {
  ...canine, ...feline
}
console.log("catDog: ", catDog);

const tripod = {
  ...canine,
  legs: 3
}
console.log(tripod);

// Orders does matter
const tripod2 = {
  legs: 3,
  ...canine
}
console.log("tripod2: ", tripod2);

// Creating an Object from catDog that was created from 2 other objects
const catDogClone = {
  ...catDog
}
console.log("catDogClone: ", catDogClone);
// Not the same reference
console.log("catDogClone === catDog: ?", catDogClone === catDog);

console.log('\n');
// You can only Spread Objects into another Objects, this is the only context
// const arrayObjectSpread = [...dog]; // Error object is not iterable

// console.log(Math.max(...dog)); // Error is not iterable
// We get key value pairs based in indexis
console.log({...[4, 5, 6]});
console.log({...'abcde'});
const random = [...'hello', {
  ...catDog
}];
console.log("random: ", random);
console.log('\n');
const random2 = [[...'hello'], {
  ...catDog
}];
console.log("random2: ", random2);
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');

