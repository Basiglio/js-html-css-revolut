$(document).ready(function () {
  // COLLEGO IL CLICK AI TAB INDEX
  $(".tab_index span").mouseenter(
    function (){
      console.log("passo sullo span");
     // RIMUOVO CLASSE INACTIVE(DISPLAY NONE)
     $(".dropdown").removeClass("inactive");
    }
  );
  $(".tab_index span").mouseleave(
    function (){
      console.log("passo sullo span");
      // RIMETTO CLASSE INACTIVE
     $(".dropdown").addClass("inactive");
    }
  );
});
