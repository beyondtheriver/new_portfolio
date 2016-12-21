$(document).ready(function(){
  //opens box
  openBox();
  //animates border radii
  radiiSwitch();
  //controls the parallax and opacity animations
  scroller();
});

function scroller(){
  $(window).scroll(function() {
    var j = $(window).scrollTop();
    $("header img").css('transform', 'translateY(' + (-j*1.1) + 'px)');
    $("#created_by").css('opacity', j/375);
    console.log(j);
    if(j=568){
      $("#news_and_projects").animate({'margin-top': 0}, 1000);
      $("#news").animate({'margin-left': 0}, 1000);
      $("#projects").animate({'margin-right': 0}, 1000);
    }
  });
}

function radiiSwitch(){
  $(".circle_square").mouseenter(function(){
    $( this ).css('border-radius', 0 );
  }).mouseleave(function(){
    $( this ).animate({'border-radius': 100}, 500);
  });
}

function showNews(){
  $("#hidden_news").animate({'opacity':'100%'}, 3000);
};

function openBox(){
  $("#news").click(function(){
    $( this ).animate({}, 1000);
    $( this ).css({
      'border-radius': 0,
      'display': 'block',
      'background-image': 'none',
      'background-color': 'lightgray',
      'width': '75%',
      'height': 'auto',
    });
    $("#news a").css({
      'color': '#4B6A88',
      'font-style': 'bold'
    });
    $("#news h1").css('text-align', 'center');
    $("#hidden_news").css('display', 'block');
    $(".close").css('display', 'block');
  });
  setTimeout(showNews(), 1100);
}


