console.log('Hey this is new tutorial')

let element=document.createElement('li')
// Adding a class name to the li element
element.className='childul'
element.id='createdLi'
element.setAttribute('title', 'mytitle')
element.innerText='This is created my me'
console.log(element)
// now targeting where to append my element.
let ul=document.querySelector('ul.this')
console.log(ul)
ul.appendChild(element)
console.log(element)

// ..............................................................
// Replacing an element:- 
// Suppose we want to delete an element with id=createdLi 
let elem2=document.createElement('h3')
elem2.id='elem2'
elem2.className='elem2'
let tnode=document.createTextNode('This is a created for element2')
elem2.appendChild(tnode)


element.replaceWith(elem2)

// ............................................................... 
let pr=elem2.getAttribute('class')
console.log(elem2,pr)
elem2.removeAttribute('id')
console.log(elem2,pr )
elem2.setAttribute('title', 'myelem2title')
console.log(elem2,pr )


