var stress = 0;

$(document).ready(function(){
  $("form#stress-test").submit(function(event){
  event.preventDefault();
 $("input:checkbox[name=warningsigns]:checked").each(function(){
   var warnings = $(this).val();
   stress += 1;
 });

 $("input:checkbox[name=health]:checked").each(function(){
   var negHealth = $(this).val();
   stress += 1;
 });

 $("input:checkbox[name=coping]:checked").each(function(){
   var copingMethod = $(this).val();
   stress -= 1;
 });


  if (stress <= 4) {
    $("#light-results").show();
  } else if (stress >= 5 && stress <=8) {
    $("#med-results").show();
  } else {
    $("#heavy-results").show();
  };
});
});
