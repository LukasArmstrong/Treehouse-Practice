//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1, Hide spoiler
$(".spoiler span").hide();
//2 add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3 wheb a button pressed
$("button").click(function(){
  $(this).prev().show();
  $(this).remove();
})
  //3.1 show spoiler
  //3.2 get rid o button
