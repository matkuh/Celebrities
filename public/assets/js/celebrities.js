$(function() {
  $(".change-exile").on("click", function(event) {
    var id = $(this).data("id");
    var newexile = $(this).data("newexile");

    var newexileState = {
      exiled: newexile
    };

    $.ajax("/api/celebrities/" + id, {
      type: "PUT",
      data: newexileState
    }).then(
      function() {
        console.log("changed exile to", newexile);
        location.reload();
      }
    );
  });
  
  $(".delete").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/celebrities/" + id, 
    {type: "DELETE"}).then(
      function(){
        location.reload();
      }
    );
  });
  

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newcelebrity = {
      celebrity_name: $("#ca").val().trim(),
      exiled: $("[name=exiled]:checked").val().trim()
    };

    $.ajax("/api/celebrities", {
      type: "POST",
      data: newcelebrity
    }).then(
      function() {
        console.log("created new celebrity");
        location.reload();
      }
    );
  });
});
