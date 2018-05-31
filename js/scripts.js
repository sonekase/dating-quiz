$(document).ready(function() {
  $("#you").submit(function(event) {
    event.preventDefault();

    var music = $("input:radio[name=music]:checked").val();
    var food = $("input:radio[name=food]:checked").val();
    var movie = $("input:radio[name=movie]:checked").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var dob = $("#born").val();
    var celebrity = "me";

    if(gender === "female") {
      if(music === "Rap") {
        celebrity = " Drake";
        $("body").css("background-image", "url('img/drake.jpg')");
      } else if (music === "Rock") {
        celebrity = " Bruno Mars";
        $("body").css("background-image", "url('img/bruno.jpg')");
      } else {
        celebrity = " Bob Marley";
        $("body").css("background-image", "url('img/bob.jpg')");
      }
    } else if(gender === "male") {
      if(music === "Rap") {
        celebrity = " Jennifer Lopez";
        $("body").css("background-image", "url('img/jlo.jpg')");
      } else if (music === "Rock") {
        celebrity = " Brittney Spears";
        $("body").css("background-image", "url('img/spears.jpg')");
      } else {
        celebrity = " Taylor Swift";
        $("body").css("background-image", "url('img/taylor.jpg')");
      }
    } else {
      celebrity = " R2D2";
      $("body").css("background-image", "url('img/r2d2.jpg')");
    }

    $("#result").text(celebrity);

  });

});
