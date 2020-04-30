
// Click function that will display and hide the chosen links.

$(document).ready(function () {
  // Hide displayed paragraphs
  $("#search-header").click(function () {
    $("#div2").hide();
    $("#div3").hide();
  });
  $("#notes-header").click(function () {
    $("#div1").hide();
    $("#div3").hide();
  });
  $("#contact-header").click(function () {
    $("#div1").hide();
    $("#div2").hide();
  });

  // Show hidden paragraphs
  $("#search-header").click(function () {
    $("#div1").show();
  });
  $("#notes-header").click(function () {
    $("#div2").show();
  });
  $("#contact-header").click(function () {
    $("#div3").show();
  });
});