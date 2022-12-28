$(".container-two").click(function(){
  $(".title-one").text("Belloooo...");
  setTimeout(function(){
    $(".title-one").text("Helloooo...");
  },5000);
});

$(".container-four").click(function(){

  var audio = new Audio("Sounds/Minion Beedo.mp3");
  audio.play();
    $(".title-two").text("Ouuchhhhh");
   setTimeout(function(){
     $(".title-two").text("Don't touch me");
   }, 5000);
})

setTimeout(function(){
  $(".changer").replaceWith("<img src='https://i.pinimg.com/originals/9a/aa/cc/9aaacce2b76d69fd278d86272fcc5f47.gif' class='changer-1'>");
},10000)
