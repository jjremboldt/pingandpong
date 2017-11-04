

// Frontend logic
$(document).ready(function() {
  $("form#yourNumber").submit(function(event) {
    event.preventDefault();
  $("ul#list").empty();

    var input = $("input#yourNumber").val();
    var result = pingPong(input);
    result.forEach(function(result) {
      $("ul#list").append("<li>" + result + "</li>");
    });
  });
});

// Backend logic
var pingPong = function(input) {
  var resultPongs = [];
  for (var index = 1; index <= input; index++) {
      if (index % 15 === 0) {
      resultPongs.push("pingpong");
    } else if (index % 5 === 0) {
      resultPongs.push("pong");
    } else if (index % 3 === 0) {
      resultPongs.push("ping");
    } else {
      resultPongs.push(index);
    }
  }
  return resultPongs;


};
