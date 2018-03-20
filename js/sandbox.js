/* globals $ */
var css = {
    "background-color": "purple",
    "position": "fixed",
    "top": 0
};
var animations = {
    "font-size": "500%",
    "top": "20vh"
};

var $h1 = $( "<h1>" )
    .text( "Hello my Peeps" )
    .css( css )
    .animate( animations, animationsOptions )
    .on( "click", () => {
        $( "h1" ).text( "Let's Get It" ).css( "background-color", "hotpink" );
    } );

var animationsOptions = {
    "duration": 10000,
    "complete": animateH2
};


var $h2 = $( "<h2>" )
    .text( " I said my Peeps" )
    .css( "position", "fixed" );

var animationsOptions = {
    "duration": 10000,
    "complete": animateH2
};

function animateH2(){
    $h2.animate( { "left": "100vw"  } );
}

$( "#output" )
    .append( $h1, $h2 );
