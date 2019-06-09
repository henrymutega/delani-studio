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
