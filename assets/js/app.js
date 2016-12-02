// sanity check
console.log("app.js linked.");

window.alert("Boring Content enter at your own risk!");
var userResponse = window.prompt("Are you in WDI-34?");

if(userResponse.toLowerCase() === "yes"){
  window.alert("Feel Free to email me with suggestions.")
}
$(document).ready(function(){
    // code in here DOES wait for DOM to be ready
    // best place for DOM element selectors
    // best place to *call* functions that interact with the DOM
    var greeting = $('#alert');
    greeting.on('mouseover', popUpYay);
});

// code down here does not wait for DOM to be ready
// great place to define functions, even if they interact with the DOM
function popUpYay(event){
    alert('Yay!');
    // DOM interaction is planned here - but only gets executed when function is called
    $('body').append('Yay!');
}
