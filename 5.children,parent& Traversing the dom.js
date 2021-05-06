console.log('Children Parents and Traversing')
let cont =document.querySelector('.no')
cont=document.querySelector('.container')

console.log(cont.childNodes)



// if use childNodes it will give all the tag with the specific class but it will consder eery new line as Text, so it will give tag name and Text. 
let nodeNamme=cont.childNodes[0].nodeName
nodeNamme=cont.childNodes[1].nodeName
console.log(nodeNamme)
let nodeType=cont.childNodes[0].nodeType
nodeType=cont.childNodes[3].nodeType
console.log(nodeType)
// ans: 3

// node types
/* 1. element
2. Attributes
3.Text Node
8. comment
9.document
10.docType  */

// If you do not want text and comment there
console.log(cont.children)

// ........................................................................ 
let container=document.querySelector('div.container')
// console.log(container.children[0])
console.log(container.children[2].children)


// ................................................. 
console.log(container.firstChild)
console.log(container.firstElementChild)
// it will skip the text(text bcz of new line)

console.log(container.lastChild)
console.log(container.lastElementChild)
console.log(container.childElementCount)
console.log(container.firstElementChild.parentNode)
console.log(container.firstElementChild.nextSibling)
console.log(container.firstElementChild.nextElementSibling)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling)
