console.log('Hey this is JavaScript Tutorial')
/*
element selector
1. Single element selector :if we wanted to target an element eg: target by id
2.Multi element  selector:eg: target by class 

*/
let element=document.getElementById('myfirst')
// element=element.className
// element=element.childNodes;
// element=element.parentNode;
element.style.color='red'
// so you can target the css also using js 
element.innerText='Rawindra is is good programmer'
// you can change the HTML content using JS 
element.innerHTML='<b>Rawindra is a good boy</b>'
// you can change the html content using js 
console.log(element)

console.log(element.innerHTML)
// you can grab the html content inside js console 
console.log(element.innerText)
// you can grab the text content inside js console 


let sel=document.querySelector('#myfirst')
sel=document.querySelector('.child')
sel=document.querySelector('h1')
// you will get first h1 element

sel=document.querySelector('div')
// you will get first div element
sel.style.color='green'

console.log(sel)

// 2.)Multi element selector: you can select multiple elements from the dom and iterate through it. 
let elems=document.getElementsByClassName('child')
// will give you all the elements with class name child 
// console.log(elems)
// console.log(elems[0])
// console.log(elems[1])

elems=document.getElementsByClassName('container')
console.log(elems[0].getElementsByClassName('child'))


// ...........................................................
let elemns=document.getElementsByTagName('div')
// console.log(elemns)
// as above we get the HTMLAllCollection, where all the classes are DataView, we can iterate through theloop in it  
// Array.from(elemns).forEach(element => {
//     console.log(element)
//     element.style.color='yellow'
    
// });

// or we can use for loop as well
for (let index = 0; index < elemns.length; index++) {
    const element = elemns[index];
    console.log(element);
    element.style.color='red'
    
}