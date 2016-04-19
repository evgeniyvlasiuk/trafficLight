

  var sec = 0;

function Svet() {
  switch (true) {
    
  case sec<11 :
   $('.red').css('background', "#FF0000");
   $('.orange').css('background', "#492400");
   $('.green').css('background', "#072600");
   $(".red").html("10"-sec);
  
   break;
  case 10<sec && sec<15:
   $('.red').css('background', "#FF0000");
   $('.orange').css('background', "#FF7B00");
   $('.green').css('background', "#072600");
    $(".red").html("--");
  
   
   break;
  case 14<sec && sec<25:
   $('.red').css('background', "#140505");
   $('.orange').css('background', "#492400");
   $('.green').css('background', "#3FDD18");
    $(".green").html("24"-sec);
   
   break;
  case sec == 26:
   $('.red').css('background', "#140505");
   $('.orange').css('background', "#492400");
   $('.green').css('background', "#131C10");
   $(".green").html("--");
   break;
  case sec == 27:
   $('.red').css('background', "#140505");
   $('.orange').css('background', "#492400");
   $('.green').css('background', "#3FDD18");
   $(".green").html("--");
   break;
  case sec == 28:
   $('.red').css('background', "#140505");
   $('.orange').css('background', "#492400");
   $('.green').css('background', "#131C10");
   $(".green").html("--");
   break;
  case sec == 29:
   $('.red').css('background', "#140505");
   $('.orange').css('background', "#492400");
   $('.green').css('background', "#3FDD18");
   $(".green").html("--");
   sec=0;
   break;
  }
  
}



$(document).ready(function() {
  console.log('START');

     setInterval(function(){
          sec = sec+1;
          Svet();
  
          console.log(sec);
          }, 500)
   
  
});


