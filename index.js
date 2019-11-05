let count = 0;

const counter = document.getElementById('counter');

counter.innerText = count;
counter.style = 'color: red';

// const listItems = document.getElementsByTagName('li');

// const orderedListItem = document.querySelector('.list-item');

// const orderedList = document.querySelectorAll('.list-item');

// console.log(orderedListItem);
// console.log(orderedList);

const span = document.querySelector('span');

let toggleClass = () => {
    span.classList.toggle('span-class');
    console.log(span.className);
}

let inputValue = '';

const input = document.getElementById('my-input');
input.addEventListener('keypress', function(e){
    inputValue = e.target.value;
    console.log(inputValue);
});

// let inputValue = () => {
//     console.log(input.value);
// }

let incrementCount = () => {
    count++
    counter.innerText = count;
}

let decrementCount = () => {
    count--
    counter.innerText = count;
}

let clearCount = () => {
    count = 0;
    counter.innerText = count;
}

// Capture the elements
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
// Add Events
parent.addEventListener('click', function(){
    console.log('parent was clicked');
});
child.addEventListener('click', function(e){
    e.stopPropagation();
    console.log('child was clicked');
});

const form = document.querySelector('form');
form.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Stopped submission');
})

const newButton = document.createElement('button');

newButton.innerText = 'Super Cool Button';

document.body.appendChild(newButton);

//newButton.remove();

newButton.getAttribute('class');
//newButton.setAttribute('class', 'new-class')

console.log(newButton.parentNode)