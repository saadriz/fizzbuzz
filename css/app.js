$(document).ready(function() {
  
  var number = $("input[name=input-form]").val();

  function addnewitem () {
    $(".list").prepend("<li>"+number+"</li>"); 
    console.log("added")
   }
  
   $(".submit").click(function(){
    addnewitem(); 
    console.log("submitted")
   
   });


})
  
