$(document).ready(function(){

  displayNewsItems();

});

function displayNewsItems(){
  var $newsItem = $("section #news_list .news_item").first();
  if ($newsItem.next().length === 0 && $newsItem.is(':hidden')){
    $newsItem.fadeIn('fast', function(){

    });
    $newsItem.fadeOut(5000, function(){

    });
    $newsItem = $(".news_item").first();
  } else {
    $newsItem.fadeIn('fast', function(){

    });
    $newsItem.fadeOut(5000, function(){

    });
    $newsItem = $newsItem.next();
  }
}

function displayNewsItems2(){
  var $newsItem = $(".news_item").first();
  if ($newsItem.css('display') == 'none'){
    $newsItem.fadeIn('fast');
    $newsItem.fadeOut(5000);
    $newsItem = $(".news_item").next();
    console.log($newsItem);
  }

}
