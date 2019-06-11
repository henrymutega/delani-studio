// Business (or back-end) logic:
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
});

// portfolio part
$(document).ready(function(){
  $(".jam").hide();
  $("#jam").hover(function () {
   $(this).find(".jam").toggle();
 });
 $(".jim").hide();
 $("#jim").hover(function () {
  $(this).find(".jim").toggle();
});
$(".jik").hide();
$("#jik").hover(function () {
 $(this).find(".jik").toggle();
});
$(".jak").hide();
$("#jak").hover(function () {
 $(this).find(".jak").toggle();
});
$(".jos").hide();
$("#jos").hover(function () {
 $(this).find(".jos").toggle();
});
$(".jek").hide();
$("#jek").hover(function () {
 $(this).find(".jek").toggle();
});
$(".jok").hide();
$("#jok").hover(function () {
 $(this).find(".jok").toggle();
});
$(".juk").hide();
$("#juk").hover(function () {
 $(this).find(".juk").toggle();
});
});

//  user interface (or front-end) logic:
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
      event.preventDefault();
    }
  });
});
