$(document).ready(function () {
  // COLLEGO IL CLICK AI TAB INDEX
  $(".tab_index span").click(
    function (){
      console.log("clicco sullo span");
     // RIMUOVO CLASSE INACTIVE(DISPLAY NONE)
     $(this).removeClass("inactive");
    }
  );
});
