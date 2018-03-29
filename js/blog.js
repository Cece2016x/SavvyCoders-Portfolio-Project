/* globals $ */

var $footer = $( "#footer" );
var getPosts = $.ajax( "https://jsonplaceholder.typicode.com/posts" );

function generatePosts( posts ){
    var $postsList = $( "<p2>" );
    var $postItems = posts
        .filter(
            ( post ) => post.id < 11
        )
        .map(
            ( post ) => $( "<p2>" ).text( post.title )
        );

    return $postsList.append( $postItems );
}

function appendPosts( posts ){
    var $posts = generatePosts( posts );

    $footer.append( $posts );
}

getPosts.then( appendPosts );
