// script.js
$(document).ready(function(){
  $(".game img").click(function(){
    const target = $(this).parent().data("target"); // which info box to open

    // Close all other info boxes
    $(".game-info").not(target).slideUp();

    // Toggle the one that belongs to this image
    $(target).slideToggle();
  });
});
