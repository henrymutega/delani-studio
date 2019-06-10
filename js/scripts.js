$(document).ready(function() {
  $("#designs").hide();
  $(".design").click(function() {
    $("#designs").toggle();
    $(".design").hide();
  });
  $("#develops").hide();
  $(".develop").click(function() {
    $("#develops").toggle();
    $(".develop").hide();
  });
  $("#products").hide();
  $(".product").click(function() {
    $("#products").toggle();
    $(".product").hide();
  });
});
$(document).ready(function() {
  $("#designs").click(function() {
    $(".design").toggle();
    $("#designs").hide();
  });
  $("#develops").click(function() {
    $(".develop").toggle();
    $("#develops").hide();
  });
  $("#products").click(function() {
    $(".product").toggle();
    $("#products").hide();
  });

$(".project").hide();
$(".project").hover(function(){
  $(this).find(".project").toggle();
});
});

$(document).ready(function(){
  $("#submit").click(function(){
    var nam = $("#name").val();
    var email = $("#mail").val();
    if(nam== "" ){
      alert("Enter your name please.");
      return;
    }else if (email== "") {
      alert("Enter your email please.");
      return;
    }else {
      alert(nam + " We have received your information. Thank you for reaching out to us.");
      reset;
    }
  });
});
