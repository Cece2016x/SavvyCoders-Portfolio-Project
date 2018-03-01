var story = {
    "Start": "I know this woman who always love to shop. She shops so much that basement became a store or a shop.",
    "Shop": "She open a up an shop since she have establish and build her credit because shee didn't want to use debit or cash.",
    "Cash": "Carrying cash started to become over rated for her and she then started up an business plan or attempted to create one.",
    "One": "One Day everything she every wanted came true and she had to decided to built and estate or buy multiple houses.",
    "Houses": "After deciding estate or house, she chose that everyone wants to be happy. So now she's at the closing and they say debit or cash."
};

var choice = prompt( story.Start );

if( choice === "Shop" ){
    choice = prompt( story.Shop );
}
else if( choice === "Cash" ){
    choice = prompt( story.Cash );
}
else{
    console.log( "HTML and Learning Arrays and Objects" );
}
