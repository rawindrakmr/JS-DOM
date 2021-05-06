console.log('This is events tutorial')

document.getElementById('heading').addEventListener('click', function(){
console.log('you have clicked the heading');
})

// here function can be any function name defined by us.
document.getElementById('heading').addEventListener('click', function(e){
    let variable;
    console.log('you heve clicked the heading');
    variable=e.target;
    variable=e.target.className;
    variable=e.target.classList;
    variable=e.target.id;
    console.log(variable)
});