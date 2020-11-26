$(document).ready(
  function ()  {
    $(".tab_index").mouseenter(
      function () {
        $(this).children(".dropdown").removeClass("inactive");
      }
    )
    $(".tab_index").mouseleave(
      function () {
        $(this).children(".dropdown").addClass("inactive");
      }
    )
  }
);
