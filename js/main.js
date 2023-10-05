/* top button */
let topBtn = $('.top_btn');
topBtn.click(function(e){
  e.preventDefault();
  $('body,html').animate({scrollTop:0},500);
});


/* skill progress */
let skill = $('.skill_list li');
let barWrap = $('.progress .bar_wrap');
let bar = barWrap.find('.bar');
let barCount = barWrap.find('.count');

skill.click(function(){
  let rate = $(this).attr('data-rate');
  $({rate:0}).animate({rate:rate},{
    duration: 1500,
    progress:function(){
      let now = Math.ceil(this.rate);
      barCount.text(now+'%');
      bar.css({width:`${now}%`});
    }
  });
  skill.removeClass('active');
  $(this).addClass('active');
});



/* header link */





/* site swiper slide */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,



  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* AOS scroll */
AOS.init({
  duration: 1000,
  offset: 1000
});


/* header shrink, aside buttons show, skill animation */
let header = $('.header');
let asideBtns = $('.aside_btns');
let myswitch = false;
$(window).scroll(function(){
  let sct = $(this).scrollTop();
  if(sct >= header.offset().top){
    header.addClass('shrink');
    asideBtns.addClass('show');
  } else{
    header.removeClass('shrink');
    asideBtns.removeClass('show');
  }

  if(sct >= skill.offset().top-500){
    if(!myswitch){
      skill.eq(0).trigger('click');
      myswitch=true;
    }
  }
});