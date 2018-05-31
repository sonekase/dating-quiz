$(document).ready(function() {
  $("#name").submit(function(event) {
    event.preventDefault();
    var music = $("input:radio[name=music]:checked").val();
    var food = $("input:radio[name=food]:checked").val();
    var movie = $("input:radio[name=movie]:checked").val();
    var dob = $("#born").val();
  });

});
