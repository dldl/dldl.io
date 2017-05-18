$(function() {
  var colors = ["#f29928","#fe351e","#7fba00","#ffba02","#00a4ef"];
  var darkenColors = ["#E58C1B","#F12811","#72AD00","#F2AD00","#0097E2"]
  $('.site').each(function(i) {
    var rand = Math.floor(Math.random()*colors.length);
    $(this).css("background-color", colors[rand]);
    $(this).children().first().css("background-color", darkenColors[rand]);
    colors.splice(rand,1);
    darkenColors.splice(rand,1);
  });
});
