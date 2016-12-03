// sanity check
console.log("app.js linked.");

window.alert("Please hoover mouse over Contacts to see a jQuery event in action")


var cheers = '<iframe width="560" height="315" src="https://www.youtube.com/embed/barWV7RWkq0" frameborder="0" allowfullscreen></iframe>';

$(document).ready(function(){
    // code in here DOES wait for DOM to be ready
    // best place for DOM element selectors
    // best place to *call* functions that interact with the DOM
    var greeting = $('#alert');
    greeting.on('mouseover', popUp);
});

// code down here does not wait for DOM to be ready
// great place to define functions, even if they interact with the DOM
function popUp(event){
    alert('It worked !');
    // DOM interaction is planned here - but only gets executed when function is called
    $('body').append('Yay!');
}
