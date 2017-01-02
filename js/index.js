$(document).ready(function(){
  //controls the parallax and opacity animations
  scroller();
  //reveals story on.hover() .created_by
  storyReveal();
  //animates project text
  textWidener();
  openProjects();
  closeProjects();
});

function textWidener(){
  $(".projects").hover(function(){
    $(this).animate(
      {
        'letter-spacing': '50px',
        'font-size': '3rem'
      }, 1000);
  }, function(){
    $(this).animate(
      {
        'letter-spacing': '3px',
        'font-size': '1rem'
      }, 1000);
  })
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

function scroller(){
  $(window).scroll(function() {
    var j = $(window).scrollTop();
    $("header img").css('transform', 'translateY(' + (-j*1.1) + 'px)');
    $("#created_by").css('opacity', j/375);
    console.log(j);
  });
};

function openBox(){
  var newsDisplay = $(".hidden_news").css('display');
  // if (newsDisplay == 'none'){
    $("#news").click(function(){
      $(this).removeClass("news").addClass("news_open");
      //previously hidden news now displayed
      $(".hidden_news").show();
      //close button appears
      $(".close").show();
    });
  // };
};

function closeBox(){
    $(".close").click(function(){
      $("#news").removeClass("news_open").addClass("news");
      //hidden news again hidden
      $(".hidden_news").hide();
      //close button disappears
      $(".close").hide();
    });
};

function openProjects(){
  $(".projects").click(function(){
    $(".modal").show();
  });
};

function closeProjects(){
  $(".modal").click(function(){
    $(this).hide();
  })
};
