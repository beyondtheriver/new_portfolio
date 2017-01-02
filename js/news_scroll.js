$(document).ready(function(){

  var newsItem = $(".newsitem").first();
  displayNewsItems();

  function displayNewsItems(){
    console.log(newsItem.next().length);
    if (newsItem.next().length === 0 && newsItem.is(':hidden')){
      newsItem.fadeIn('fast');
      newsItem.fadeOut(6000);
      newsItem = $(".newsitem").first();
    } else {
      newsItem.fadeIn('fast');
      newsItem.fadeOut(6000);
      newsItem = newsItem.next();
      console.log(newsItem);
    }
  }

  window.setInterval(displayNewsItems, 5900);
});
