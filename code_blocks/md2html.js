<script>  

        // get markdown content  
        var body_location = 'markdown/README.markdown';
                
        function getText(myUrl){
            var result = null;
            $.ajax( { url: myUrl, 
                      type: 'get', 
                      dataType: 'html',
                      async: false,
                      success: function(data) { result = data; } 
                    }
            );
            FileReady = true;
            return result;
        }

        var markdown_source = getText(body_location);

        // convert markdown to html
        var output = markdown.toHTML( markdown_source );
        document.write(output);

      </script>
