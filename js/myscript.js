$(document).ready(function () {
  // COLLEGO IL CLICK AI TAB INDEX
  $(".tab_index span").mouseenter(
    function (){
      console.log("passo sullo span");
     // RIMUOVO CLASSE INACTIVE(DISPLAY NONE)
     $(this).children().removeClass("inactive");
    }
  );
});
