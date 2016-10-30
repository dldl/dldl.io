$(function() {
  var colors = ["#f29928","#fe351e","#7fba00","#ffba02","#00a4ef"];
  $('.site').each(function(i) {
    var rand = Math.floor(Math.random()*colors.length);
    $(this).css("background-color", colors[rand]);
    colors.splice(rand,1);
  });
});
