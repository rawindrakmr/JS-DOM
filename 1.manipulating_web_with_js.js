console.log('Tutorial 11.')

let a=window;
// console.log(a)
// here you will see list of function of the window, window object is global object in JSON, so all the function of the window objects, we can use it by using window.XXXX; eg window.alert(), or we can use alert() directly bcz window is global object. 
// window.alert('hi there')
// or 
// alert('hi there....')

// b=prompt('This will distroy your computer, please enter your name');
// afterpromt your entered name will stored in the variable a 

// a=confirm('are you sure you want to delete page???');
// console.log(a)
// ....after clicking a boolean value:true/false will be assign to a 
// .................................................................................................
// Above methods are not used in modern websites
// ....> document is a part of window object 

let b=window.document;
console.log(b)

// ...o/p:you will see the html docs with head body etc which is tree like structure. it is called DOM 


// #######we can see the height and width of the documents..............################
let c=window.innerHeight;
console.log(c)
c=window.innerWidth;
console.log(c)

// note: you can use it without using window. eg c=innerwidth
// ###############scrollx and scrollY############################## 
// it gives the space how much you have scrolled your documents with respect X and Y axis.
let d=scrollX;
console.log(d)
d=scrollY;
console.log(d)

let e=window.location
console.log(e)
e=window.location.toString();
console.log(e)
let f=window.history
console.log(f)