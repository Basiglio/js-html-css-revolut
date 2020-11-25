$(document).ready(function () {

  // IMPOSTO IL MOUSEHOVER SU SUBSCRIPTION
  $("#subscription").mouseover(
    function () {
      // RIMUOVO CLASSE INACTIVE(DISPLAY NONE)
      $("#dropdown_subscription").removeClass("inactive");
    }
  );
  $("#subscription").mouseout(
    function () {
      // AGGIUNGO CLASSE ACTIVE(DISPLAY BLOCK)
      $("#dropdown_subscription").addClass("active");
    }
  );
});
