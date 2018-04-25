$(document).ready(function()  {

// jQuery .fadeIn Number 1
$(".box").fadeIn(1000);

// jQuery .hover Number 2
$(".logo").hover(function() {
  // jQuery .css Number 3
  $(this).css("opacity", "1");
}, function() {
  $(this).css("opacity", ".75");
});

// jQuery .click Number 4
  $(".video_button.beauty").click(function() {
    // jQuery .hasClass Number 5
    if ($(".video_container.beauty").hasClass("beauty_border")) {
      // jQuery .removeClass Number 6
      $(".beauty").removeClass("beauty_border")
    } else {
      $(".video_container.beauty").removeClass("lifestyle", "travel")
      // jQuery .addClass Number 7
      $(".beauty").addClass("beauty_border")
    }
  });

  $(".video_button.lifestyle").click(function() {
    if ($(".video_container.lifestyle").hasClass("lifestyle_border")) {
      $(".lifestyle").removeClass("lifestyle_border")
  } else {
    $(".video_container.lifestyle").removeClass("beauty", "travel")
    $(".lifestyle").addClass("lifestyle_border")
  }
  });

  $(".video_button.travel").click(function() {
    if ($(".video_container.travel").hasClass("travel_border")) {
      $(".travel").removeClass("travel_border")
  } else {
    $(".video_container.travel").removeClass("beauty", "lifestyle")
    $(".travel").addClass("travel_border")
  }
  });


});
