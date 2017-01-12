$(document).ready(function(){
  //controls the parallax and opacity animations
  scroller();
  //reveals story on.hover() .created_by
  storyReveal();
  //animates project text
  textWidener();
  //opens Projects modal
  openProjects();
  //closes Projects modal
  closeProjects();
});


function scroller(){
  $(window).scroll(function() {
    // int value of distance from top of window
    var j = $(window).scrollTop();
    // parallax: moves the logo up faster than a natural scroll
    $("header img").css('transform', 'translateY(' + (-j*1.1) + 'px)');
    $("#created_by").css('opacity', j/375);
    console.log(j);
  });
};

function storyReveal(){
  var opacity_level = $("#created_by").css('opacity');
  console.log(opacity_level);
  $("#created_by").hover(function(){
    if(opacity_level > 0 && opacity_level < 100){
      $(this).animate({'opacity': 0}, 1000);
    }
  }, function(){
    if(opacity_level > 0 && opacity_level < 100){
      $(this).animate({'opacity': 100}, 1000);
    }
  });
};

function textWidener(){
  $(".projects").hover(function(){
    $(this).animate(
      {
        'letter-spacing': '50px',
        'font-size': '3rem',
        'background-color': 'rgba(0,255,127,.5)'
      }, 1000);
  }, function(){
    $(this).animate(
      {
        'letter-spacing': '3px',
        'font-size': '1rem'
      }, 1000);
  })
};

function openProjects(){
  $(".projects").click(function(){
    $(".modal").show();
    $(".close").show();
  });
};

function closeProjects(){
  $(".close").click(function(){
    $(this).hide();
    $(".modal").hide();
  })
};
