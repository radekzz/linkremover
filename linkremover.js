$( document ).ready(function() {

var articletitle = "";    //For message for users insert some text here. Comment out this line if you use previous line.
articletitle = $('.entry-title').text();  //uncomment this line if you want replace links by post title

// comment if you want to keep link text without a href tag
//$('.entry-content a:not("[rel=tag]")').remove();

//removing a href tag from links with various text
$('.entry-content a:not("[rel=tag]")').replaceWith(function() {
    return $.text([this]);
});

//replacing text contains link with title
$('body .entry-content *:contains("http")').not( "footer" ).contents().filter(function() { 
return (this.nodeType == 3) && this.nodeValue.match(/\S/); 
}).wrap("http").replaceWith(articletitle);

});