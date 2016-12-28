$(document).ready(function(){
  //controls the parallax and opacity animations
  scroller();
  //opens news box
  openBox();
  //closes news box
  closeBox();
  //opens project box
  openProjects();
  //closes project box
  closeProjects();
});



function scroller(){
  $(window).scroll(function() {
    var j = $(window).scrollTop();
    $("header img").css('transform', 'translateY(' + (-j*1.1) + 'px)');
    $("#created_by").css('opacity', j/375);
    console.log(j);
    if(j=568){
      $(".news_and_projects").animate({'margin-top': 0}, 1000);
      $(".news").animate({'margin-left': 0}, 1000);
      $(".projects").animate({'margin-right': 0}, 1000);
    };
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
