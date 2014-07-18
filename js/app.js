$(document).ready(function() {
  
   $(".submit").click(function(){
      var number = $('input[name=input-form]').val();
      
      for (var i=1; i<=(number); i++) {
        if (i%15==0) {

          $(".list").append('<p>'+ "fizzbuzz" + '</p>');
        }
        else if (i%3==0) {

          $(".list").append('<p>'+ "fizz" + '</p>');
        } else if (i%5==0) {
        $(".list").append('<p>'+ "buzz" + '</p>');
    
        }

        else {
        $(".list").append('<p>'+ i + '</p>');
    
        }
       }
   });


})
  
