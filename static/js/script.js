/*$(function(){
      
  alert('ancho - - ' + $(window).width() + ' - - alto - - ' + $(window).height() )

})*/

$('.owl-video').owlCarousel({
  loop:true,  
  nav:false,    
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
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
  dots:false,          
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      }, 
      1000:{
          items:4
      }
  }
})



  AOS.init();


$('.burger, .overlay').click(function(){
  $('.burger').toggleClass('clicked');
  $('.overlay').toggleClass('show');
  $('nav').toggleClass('show');
  $('body').toggleClass('overflow');
});



var $nav= $('header');
var $navTop = $nav.offset().top;

var pegarNav= function(){
  var $scrollTop = $(window).scrollTop();
  if($scrollTop >= $navTop){
    $nav.addClass('fixed');   
  }
  else{
    $nav.removeClass('fixed');      
  }
}


$(window).on('scroll',pegarNav);


