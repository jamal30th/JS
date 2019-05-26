// console.log(document.getElementById("header-title"));

// let headerTitle = document.getElementById("header-title")
// let header = document.getElementById("main-header")
// console.log(headerTitle);
// headerTitle.textContent = "Hello"
// headerTitle.innerText = "Goodbye"

// console.log(header);
// header.style.borderBottom = "3px solid black"

//get elements by class


// let items = document.getElementsByClassName("list-group-item");

// items[1].textContent = "Happy New Year"
// items[1].style.fontWeight = "bold"
// items[0].textContent = "Happy Birth day"
// items[0].style.backgroundColor = "yellow"
// items[2].style.backgroundColor = "red"
// items[2].style.color = "white"

// for (let i = 0; i < items.length; i++) {
// items[i].style.backgroundColor ="#f4f4f4"
    
// }

//get elements by query selector
/*let header = document.querySelector('#main-header')
header.style.borderBottom = "solid 4px red"

let input = document.querySelector('input')
input.value = "Hello world"

let submit = document.querySelector('input[type= "submit"]')
submit.value= "SEND"
let items = document.querySelector(".list-group-item")
items.style.color = 'red'
let lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.color = 'blue'

let secondItem = document.querySelector('.list-group-item:nth-child(2)')
secondItem.style.color= 'green'
*/

//QUERYSELECTOR ALL
// let title = document.querySelectorAll('.title')
// title[1].textContent = 'Hello'
// let title1 = document.querySelectorAll('.title')
// title1[0].textContent = " Add items listneer"

/*let even = document.querySelectorAll('li:nth-child(even)')
for (let i = 0; i < even.length; i++) {
    even[i].style.backgroundColor = '#f4f4f4'
    
}
let odd = document.querySelectorAll('li:nth-child(odd)')
for (let i = 0; i < odd.length; i++) {
   odd[i].style.backgroundColor= '#ccc'
    
}

let secondItem = document.querySelector('.list-group-item:nth-child(2)')
secondItem.textContent = 'Buy carrot'

let firstItem = document.querySelector('.list-group-item:nth-Child(1)')
 firstItem.textContent= 'Doctor appointment'
*/

/*

LESSON2:
*/
//TRAVERSING THE DOM
//parent node
let itemList = document.querySelector('#items');
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);


//parent element
// let itemList = document.querySelector('#items');
// itemList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentElement);

//child Node

// console.log(itemList.childNodes);
// console.log(itemList.children);
// itemList.children[0].style.color = 'red'
// itemList.children[1].style.backgroundColor = 'yellow'

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello1'
// itemList.lastElementChild.textContent = 'Hello4'

// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = 'green'

//create Div
/*
let newDiv = document.createElement('div')
newDiv.className = "hello"
newDiv.id = "Hello1"
newDiv.setAttribute('title', 'Hello div')
newDiv.setAttribute('name', 'myDiv')

let newDivText = document.createTextNode('Hello World')
newDiv.appendChild(newDivText)
let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1')
container.insertBefore(newDiv, h1)
newDiv.style.fontSize = "30px"

*/

