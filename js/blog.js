/* globals $ */

var getPosts = $.ajax( "https://jsonplaceholder.typicode.com/posts" );


getPosts.then( ( posts ) => console.log( posts[0] ) );
