var i = 1;
var window_size = window.matchMedia('(max-width: 768px)');

var slider = {
	slides:['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'],
	frame:0, 
	fr:0,

init: function() { 
	document.getElementById("scr1").style.backgroundImage = "url('1.jpg')";
	document.getElementById("scr2").style.backgroundImage = "url('2.jpg')";
	document.getElementById("scr3").style.backgroundImage = "url('3.jpg')";
	document.getElementById("scr4").style.backgroundImage = "url('4.jpg')";
	document.getElementById("scr5").style.backgroundImage = "url('5.jpg')";
	document.getElementById("scr6").style.backgroundImage = "url('6.jpg')";
	document.getElementById("scr7").style.backgroundImage = "url('7.jpg')";
	document.getElementById("scr8").style.backgroundImage = "url('8.jpg')";
	document.getElementById("miniscr1").style.backgroundImage = "url('1.jpg')";
    document.getElementById("miniscr2").style.backgroundImage = "url('2.jpg')";
    document.getElementById("miniscr3").style.backgroundImage = "url('3.jpg')";
    document.getElementById("miniscr4").style.backgroundImage = "url('4.jpg')";
    document.getElementById("miniscr5").style.backgroundImage = "url('5.jpg')";
    document.getElementById("miniscr6").style.backgroundImage = "url('6.jpg')";
    document.getElementById("miniscr7").style.backgroundImage = "url('7.jpg')";
    document.getElementById("miniscr8").style.backgroundImage = "url('8.jpg')";  
},

left: function() { 
	if(window.matchMedia('(max-width: 768px)').matches){
       	 this.frame--;
         $('#mini').animate({marginLeft: "+=52px"});
		 $('#big').animate({marginLeft: "+=310px"});
           if(this.frame < 0){ 
       	     this.frame = this.slides.length-1;
		     $('#mini').animate({marginLeft: "-=416px"});
		     $('#big').animate({marginLeft: "-=2480px"});
		   }
    }
    else{
       	this.frame--;
		 $('#mini').animate({marginLeft: "+=57px"});
         $('#big').animate({marginLeft: "+=620px"});
           if(this.frame < 0){ 
           	this.frame = this.slides.length-1;
		    $('#mini').animate({marginLeft: "-=451px"});
		    $('#big').animate({marginLeft: "-=4960px"});}
		   }
		slider.bord()
	},

	right: function() { 
		this.frame++;
        console.log(this.frame);
		if(window.matchMedia('(max-width: 768px)').matches){
       	    if(this.frame > 7){
			  this.frame = 0;
			  $('#mini').animate({marginLeft: "52px"});
			  $('#big').animate({marginLeft: "310px"});
		    }
            $('#mini').animate({marginLeft: "-=52px"});
		    $('#big').animate({marginLeft: "-=310px"});
		}
        else{
            if(this.frame > 7){
			  this.frame = 0;
			  $('#mini').animate({marginLeft: "57px"});
			  $('#big').animate({marginLeft: "620px"});
		    }
		    $('#mini').animate({marginLeft: "-=57px"});
		    $('#big').animate({marginLeft: "-=620px"});
		 
		 }
				
		slider.bord();

	},


		bord: function(){
			switch(true){
				case this.frame == 0:  
				$('#miniscr1').css('border', "2px solid #FFFFFF"); 
				$('#miniscr2').css('border', "none");
                $('#miniscr3').css('border', "none");
	            $('#miniscr4').css('border', "none");   
	            $('#miniscr5').css('border', "none");
                $('#miniscr6').css('border', "none");
	            $('#miniscr7').css('border', "none");
	            $('#miniscr8').css('border', "none");

				break;
				case this.frame == 1:  
			    $('#miniscr2').css('border', "2px solid #FFFFFF"); 
				$('#miniscr1').css('border', "none");
                $('#miniscr3').css('border', "none");
	            $('#miniscr4').css('border', "none");   
	            $('#miniscr5').css('border', "none");
                $('#miniscr6').css('border', "none");
	            $('#miniscr7').css('border', "none");
	            $('#miniscr8').css('border', "none");  
				break;
				case this.frame == 2:  
				$('#miniscr3').css('border', "2px solid #FFFFFF"); 
				$('#miniscr2').css('border', "none");
                $('#miniscr1').css('border', "none");
	            $('#miniscr4').css('border', "none");   
	            $('#miniscr5').css('border', "none");
                $('#miniscr6').css('border', "none");
	            $('#miniscr7').css('border', "none");
	            $('#miniscr8').css('border', "none"); 
				break;
				case this.frame == 3: 
				$('#miniscr4').css('border', "2px solid #FFFFFF"); 
				$('#miniscr2').css('border', "none");
                $('#miniscr3').css('border', "none");
	            $('#miniscr1').css('border', "none");   
	            $('#miniscr5').css('border', "none");
                $('#miniscr6').css('border', "none");
	            $('#miniscr7').css('border', "none");
	            $('#miniscr8').css('border', "none");   
				break;
				case this.frame == 4:
				$('#miniscr5').css('border', "2px solid #FFFFFF"); 
				$('#miniscr2').css('border', "none");
                $('#miniscr3').css('border', "none");
	            $('#miniscr4').css('border', "none");   
	            $('#miniscr1').css('border', "none");
                $('#miniscr6').css('border', "none");
	            $('#miniscr7').css('border', "none");
	            $('#miniscr8').css('border', "none");
				break;
				case this.frame == 5:  
				$('#miniscr6').css('border', "2px solid #FFFFFF"); 
				$('#miniscr2').css('border', "none");
                $('#miniscr3').css('border', "none");
	            $('#miniscr4').css('border', "none");   
	            $('#miniscr5').css('border', "none");
                $('#miniscr1').css('border', "none");
	            $('#miniscr7').css('border', "none");
	            $('#miniscr8').css('border', "none");
				break;
				case this.frame == 6:  
		    	$('#miniscr7').css('border', "2px solid #FFFFFF"); 
				$('#miniscr2').css('border', "none");
                $('#miniscr3').css('border', "none");
	            $('#miniscr4').css('border', "none");   
	            $('#miniscr5').css('border', "none");
                $('#miniscr6').css('border', "none");
	            $('#miniscr1').css('border', "none");
	            $('#miniscr8').css('border', "none");  
				break;
				case this.frame == 7: 
				$('#miniscr8').css('border', "2px solid #FFFFFF"); 
				$('#miniscr2').css('border', "none");
                $('#miniscr3').css('border', "none");
	            $('#miniscr4').css('border', "none");   
	            $('#miniscr5').css('border', "none");
                $('#miniscr6').css('border', "none");
	            $('#miniscr7').css('border', "none");
	            $('#miniscr1').css('border', "none");
				break;
			}

         
		},
	
	start: function() {
		this.frame = 0;
    
	   var go = setInterval(function() { 
	 	slider.right();
	   },3000);
   
       $("#stop").on('click', function(){
        i=1;
        clearInterval(go);
        console.log(i);
       });
    } 
}

$(document).ready(function() {
   slider.init();
   slider.start();
   console.log(window_size);

  
   $("#play").on('click', function(){
	   if (i==1) {
	   slider.start();
	   i+=1;
	   }
   });

    $("#miniscr1").on('click', function(){
    	
	     $('#mini').animate({marginLeft: "0"});
		 $('#big').animate({marginLeft: "0"});
		 slider.frame=0;
		 slider.bord();
    });
    
    $("#miniscr2").on('click', function(){
    	 if(window.matchMedia('(max-width: 768px)').matches)  {
    	 $('#mini').animate({marginLeft: "-52"});
		 $('#big').animate({marginLeft: "-310"});}
		 else{
         $('#mini').animate({marginLeft: "-57"});
		 $('#big').animate({marginLeft: "-620"});
		 }
		 slider.frame=1;
		 slider.bord();
    });
    $("#miniscr3").on('click', function(){
         if(window.matchMedia('(max-width: 768px)').matches)  {
    	 $('#mini').animate({marginLeft: "-104"});
		 $('#big').animate({marginLeft: "-620"});}
		 else{
         $('#mini').animate({marginLeft: "-114"});
		 $('#big').animate({marginLeft: "-1240"});
		}
		 slider.frame=2;
		 slider.bord();
    });
    $("#miniscr4").on('click', function(){
         if(window.matchMedia('(max-width: 768px)').matches)  {
    	 $('#mini').animate({marginLeft: "-156"});
		 $('#big').animate({marginLeft: "-930"});}
		 else{
         $('#mini').animate({marginLeft: "-171"});
		 $('#big').animate({marginLeft: "-1860"});
		}
		 slider.frame=3;
		 slider.bord();
    });
    $("#miniscr5").on('click', function(){
         if(window.matchMedia('(max-width: 768px)').matches)  {
    	 $('#mini').animate({marginLeft: "-208"});
		 $('#big').animate({marginLeft: "-1240"});}
		 else{
         $('#mini').animate({marginLeft: "-228"});
		 $('#big').animate({marginLeft: "-2480"});
		}
		slider.frame=5;
		 slider.bord();
    });
    $("#miniscr6").on('click', function(){
        if(window.matchMedia('(max-width: 768px)').matches)  {
    	 $('#mini').animate({marginLeft: "-260"});
		 $('#big').animate({marginLeft: "-1550"});}
		 else{
         $('#mini').animate({marginLeft: "-285"});
		 $('#big').animate({marginLeft: "-3100"});
		}
		 slider.frame=5;
		 slider.bord();
    });
    $("#miniscr7").on('click', function(){

		 if(window.matchMedia('(max-width: 768px)').matches)  {
    	 $('#mini').animate({marginLeft: "-312"});
		 $('#big').animate({marginLeft: "-1860"});}
		 else{
         $('#mini').animate({marginLeft: "-342"});
		 $('#big').animate({marginLeft: "-3720"});
		}
		 slider.frame=6;
		 slider.bord();
    });
    $("#miniscr8").on('click', function(){
    if(window.matchMedia('(max-width: 768px)').matches)  {
    	 $('#mini').animate({marginLeft: "-364"});
		 $('#big').animate({marginLeft: "-2170"});}
		 else{
         $('#mini').animate({marginLeft: "-399"});
		 $('#big').animate({marginLeft: "-4340"});
		}
		 slider.frame=7;
		 slider.bord();
    });
});