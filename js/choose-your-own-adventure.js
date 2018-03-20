var story = {
    "Start": "I know this woman who always love to shop. She shops so much that basement became a store or a shop.",
    "Stop": "She open a up an shop since she have establish and build her credit because shee didn't want to use debit or cash.",
    "Cash": "Carrying cash started to become over rated for her and she then started up an business plan or attempted to create one.",
    "One": "One Day everything she every wanted came true and she had to decided to built and estate or buy one multiple houses.",
    "Houses": "After deciding estate or house, she chose that everyone wants to be happy. So now she's at the closing and they say debit or cash."
};

var choice = prompt( story.Start );
var output = document.querySelector( "#output" );

if( choice === "Start" ){
    output.text( story.Start );
}
else if( choice === "Stop" ){
    choice = prompt( story[choice] );
    if( choice === "Cash" || choice === "One" ){
        output.text( story[choice] );
    }
}
else if( choice === "Cash" ){
    choice = prompt( story.Cash );
    if( choice === "Houses" || choice === "One" ){
        output.text( story[choice] );
    }
}
else if( choice === "One " ){
    choice = prompt( story.Houses );
    if( choice === "Houses" || choice === "One" ){
        output.text( story[choice] );
    }
}
else if( choice === "Houses" ){
    choice = prompt( story.Houses );
    output.text( story[ "One" ] );
}
else{
    output.text( story( "Look wrong way" ) );
}
