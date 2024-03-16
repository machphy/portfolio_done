(function(){
    var words = [
        'AI/ML',
        'Web Development',
        'Open Source Contribution',
        ], i = 0;
    setInterval(function(){
        $('#changingword').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 4000);
      
  })();