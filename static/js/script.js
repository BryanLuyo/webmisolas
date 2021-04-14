
$('.owl-video').owlCarousel({
  loop:true,  
  nav:false,    
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      }, 
      1000:{
          items:3
      }
  }
})

$('.owl-playa').owlCarousel({
  loop:true,  
  nav:true,
  margin:20,  
  autoplay:true,
  dots:false,          
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      }, 
      1000:{
          items:4
      }
  }
})



  AOS.init();

  $("#mouse-scroll").click(function(){
    // alert("hola");
    var x=  $('.playas').offset().top + -0;
    $('html, body').animate({
      scrollTop: x
    }, 1500);
  });
  
