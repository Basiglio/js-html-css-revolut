$(document).ready(
  function ()  {
    $(".tab_index").mouseenter(
      function () {
        $(this).children(".dropdown").addClass("active");
      }
    )
    $(".tab_index").mouseleave(
      function () {
        $(this).children(".dropdown").removeClass("active");
      }
    )
    // IMPOSTO IL CLICK
    $(".tab_index").click(
      function () {
        $(this).siblings(".tab_index").children(".dropdown").removeClass("active");
        $(this).children(".dropdown").toggleClass("active");
      }
    )
  }
);
