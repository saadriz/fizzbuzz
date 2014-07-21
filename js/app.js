$(document).ready(function() {
  
   $(".submit").click(function(){

    var number = +$('input[name=input-form]').val();
    
    $(".list").find('li').remove();
    
    if (number >= 1 && number <=100) {

    for (var i=1; i<=(number); i++) {
        if (i%15==0) {

          $(".list").append('<li>'+ "fizzbuzz" + '</li>');
        }
        else if (i%3==0) {

          $(".list").append('<li>'+ "fizz" + '</li>');
        } else if (i%5==0) {
        $(".list").append('<li>'+ "buzz" + '</li>');
    
        }

        else {
        $(".list").append('<li>'+ i + '</li>');
    
        }
       }
     } else {
      alert("Please enter a number between 1 and 100")
    };
     
   });


})
  
