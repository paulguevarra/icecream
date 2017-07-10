$(document).ready(function()  {

    var iceCreams = ["chocolate", "vanilla", "cherry"];

    iceCreams.forEach(function(iceCream) {
      $("ul").append("<li>" + iceCream);

  });
});
