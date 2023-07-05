$(document).ready(function(){
 $("#voting").submit(function(){
   $("#Hawa").prepend("<div class='alert alert-success' role='alert'>Thank you "+$('#Hawa input[name=name]').val() +", for your voting!</div>");
   
 
 return false;
});
 $('td').click(function(){
   $(this).toggleclass('.Highlight');
 })
  
});