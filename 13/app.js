console.log('/* #### Working with innerText & textContent #### */');
console.log('\n');

const h1 = document.querySelector('h1');
console.log('h1: ', h1);
console.log('h1.innerText: ', h1.innerText);

console.log('\n');
// ul has nested li inside
const ul = document.querySelector('ul');
console.log('ul.innerText: ', ul.innerText);

console.log('\n');
console.log('document.body.innerText: ', document.body.innerText);

// Change the "My WebPage" to "I'm hungry"
h1.innerText = "I'm hungry";

// Will change all the ul and li, to a single ul
ul.innerText = "I'm a big UL";

console.log('\n');
const h2 = document.querySelector('h2');
console.log('h2: ', h2);
console.log('h2.textContent: ', h2.textContent);
h2.textContent = "I'm not hungry";
// .textContent takes all the spacing, all the text and hidden stuff
console.log('h2.textContent: ', h2.textContent);


console.log('\n');
console.log('/* #### innerHTML ####*/');
console.log('\n');

const form = document.querySelector('form');
console.log('form.innerHTML: ', form.innerHTML);

console.log('\n');
const ul2 = document.getElementsByTagName('ul')[1];
console.log("ul2.innerHTML: ", ul2.innerHTML);

// Try this on your own
// form.innerHTML = 'forNewText';
// console.log(form.textContent);
// console.log(form.innerText);

// Try this on your own
// form.innerHTML = '<b>I am a bold tag</b>'

console.log('\n');
h1.innerHTML += ' is cool';
const h3 = document.querySelector('h3');
h3.innerHTML +='<s>!!!!!</s>'

// It doesn't parse the tags with .innerText, it doesn't ignores them
const h4 = document.querySelector('h4');
h4.innerText += '<b>xxx!!!!</b>'


console.log('\n');
console.log('/* #### value, src, href, and more ####*/');

const inputs2 = document.getElementsByTagName('form')[1];
console.log(inputs2);
// Type something in the form2, name, passw, etc inputs and to grab that information execute this
// inputs2[0].value
// inputs2[1].value
// inputs2[2].value
// This gives us, true or false, if is checked or if it's not checked
// inputs2[2].checked
// This gives us the value of the range 100 - 500
// inputs2[3].value

// Reset the input user to empty with this
// inputs2[0].value = ''

// Change the placeholder value
// inputs2[1].placeholder = 'enter easy passw'

console.log('\n');
const a = document.querySelector('a');
console.log('a.href: ', a.href);
// Change the URL
// a.href = 'https://www.google.com'

console.log('\n');
// Update the bear image
// const img = document.querySelector('img');
// img.src = 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'


console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');