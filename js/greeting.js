/* globals $ */
var $user = $( "input" );
var $h1 = $( "h1" );
var title = $h1.text();


function greetUser(){
    var firstName = $user.val();

    if( firstName ){
        $h1.text( title + " " + firstName );
    }
}

function inputCallback( event ){
    if( event.which === 13 ){
        greetUser();
    }
}

$user.on( "keypress", inputCallback );
$( "#greet" ).on( "click", greetUser );
