function myMove( ){
    var elem = document.getElementById( "animate" );
    var pos = 0;
    var id = animateP1( frame, 5 );

    function frame(){
        if( pos == 350 ){
            clearInterval( id );
        }
        else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
