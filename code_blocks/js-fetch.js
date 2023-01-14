fetch( 'https://example.com/file.md' )
  .then( response => response.text() )
  .then( (result) => {
    var content = marked.parse(result);
    document.querySelector( '#my-container' ).innerHTML = content;
  });
