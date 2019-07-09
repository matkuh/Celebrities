$(function() {
  $(".change-exile").on("click", function(event) {
    var id = $(this).data("id");
    var newExile = $(this).data("newExile");

    var newExileState = {
      exile: newExile
    };


    $.ajax("/api/celebrities/" + id, {
      type: "PUT",
      data: newExileState
    }).then(
      function() {
        console.log("changed exile to", newExile);

        location.reload();
      }
    );
  });
  

  $(".create-form").on("submit", function(event) {

    event.preventDefault();

    var newCelebrity = {
      name: $("#ca").val().trim(),
      exile: $("[name=exile]:checked").val()
    };


    $.ajax("/api/celebrity", {
      type: "POST",
      data: newCelebrity
    }).then(
      function() {
        console.log("created new celebrity");

        location.reload();
      }
    );
  });
});
