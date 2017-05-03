$(document).ready(function(){
  $("#items").hide();

  $("form#forms").submit(function(event){
    $("#items").show();
    $("#forms").hide();
    event.preventDefault();
    var items =["1", "2", "3", "4", "5"]
    items.forEach(function(n){
      $("ul").append($("<li>" + $("input#item"+n).val() + "</li>"));

    });




  })
})
