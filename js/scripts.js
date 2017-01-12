$(document).ready(function() {
  $("form#how-old").submit(function(event){
    event.preventDefault();
    var age = $("input:radio[name=voter]:checked").val();

    if(age === "adult") {
      $("#over-18").show();
    } else {
      $("#under-18").show();
    };
  });
});
