var someSelector = prompt( "Give me a Selector" );
var greetUser = function greetUser(){
    var firstName = prompt( "What's your name?" );

    if( !firstName ){
        greetUser();
    }
    else{
        document.querySelector( "h1" ).textContent += " "  +  firstName;
    }
};

greetUser();


console.log( document.querySelectorAll( someSelector ) );
