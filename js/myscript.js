$(document).ready(function () {


  // COLLEGO IL MOUSE ENTER A SUBSCRIPTION
  $("#subscription").mouseenter(
    function (){
     // RIMUOVO CLASSE INACTIVE(DISPLAY NONE)
     $(".dropdown_subscription").removeClass("inactive");
    }
  );
  $("#subscription").mouseleave(
    function (){
      // RIMETTO CLASSE INACTIVE
     $(".dropdown_subscription").addClass("inactive");
    }
  );
  // COLLEGO IL MOUSE ENTER A WHO
  $("#who").mouseenter(
    function (){
     // RIMUOVO CLASSE INACTIVE(DISPLAY NONE)
     $(".dropdown_who").removeClass("inactive");
    }
  );
  $("#who").mouseleave(
    function (){
      // RIMETTO CLASSE INACTIVE
     $(".dropdown_who").addClass("inactive");
    }
  );
  // COLLEGO IL MUOSE ENTER A HELP
  $("#help").mouseenter(
    function (){
     // RIMUOVO CLASSE INACTIVE(DISPLAY NONE)
     $(".dropdown_help").removeClass("inactive");
    }
  );
  $("#help").mouseleave(
    function (){
      // RIMETTO CLASSE INACTIVE
     $(".dropdown_help").addClass("inactive");
    }
  );
});
