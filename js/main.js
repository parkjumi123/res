$(function(){

  //gnb
  $('.logo-area .gnb-item.child').hover(function(e){
    e.preventDefault();
   
    $('.header-area').addClass('active');   
    $(this).find('.sub-list').show();
  },function(){
    $('.header-area').removeClass('active');
    $(this).find('.sub-list').hide();

  
  })

  //첫번째슬라이드
  var swiper = new Swiper(".sc-visual .visual-wrap", {
    loop:true,  

   autoplay: {                
     delay:3000,
     disableOnInteraction: false,
   },
  });


  //두번째 슬라이드
  var swiper = new Swiper(".sc-people .content-wrap", {
    slidesPerView: 1,
    spaceBetween: 30,
    
    navigation: {
      nextEl: ".people-area .next",
      prevEl: ".people-area .prev",
    },
    breakpoints: {
      768: {
        slidesPerView: "auto",
      },
    },
    
  });



  //세번째 슬라이드
  var swiper = new Swiper(".sc-benefits .content-wrap", {
    slidesPerView: 1,
    spaceBetween: 30,
    
   navigation: {
    nextEl: ".sc-benefits .next",
    prevEl: ".sc-benefits .prev",
  },
//반응형
  breakpoints: {
    768: {
      slidesPerView: "auto",
    },
  },
  });



  //모바일 menu
  $('.button-menu').click(function(e){
    e.preventDefault();

    $(this).toggleClass('active')
    $('.sub-menu').toggleClass('on');
  })




  $('.btn-down').click(function(e){
    e.preventDefault();

    $(this).siblings('.sub-list').stop().slideToggle();
    $(this).toggleClass('on')
})




//footer
  $('.site-wrap').click(function(e){
    e.preventDefault();
    
    $(this).siblings('.site-list').stop().slideToggle();
   
    $('.site-list').css({'padding':'0 12px'});
    $('.site-wrap').toggleClass('on');
    $('.site-wrap').toggleClass('color');
 
})


})