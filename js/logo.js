$(document).ready(function(){

  beyond_scroller();
  river_widens();
  everything_disappears();

});


function river_widens(){
  // the words the & river
  var river = $(".river");
  // using scroll() to control how the text in river widens
  $(window).scroll(function(){
    // d is distance from the top
    var d = $(window).scrollTop();
    // adjusts the letter spacing to widen 'river'
    river.css('letter-spacing', d + 'px');
  });
}

function beyond_scroller(){
  // the letter 'b' in beyond
  var logo_b = $(".b");
  // the letter 'd' in beyond
  var logo_d = $(".d");
  // the partial word 'eyon' in beyond
  var logo_eyon = $(".eyon");
  // the word 'the' in the logo
  var the = $(".the");

  $(window).scroll(function(){
    // distance from top of window
    var d = $(window).scrollTop();
    // moves b left
    logo_b.css('transform', 'translateX(' + -d * 1.1 + 'px)');
    // moves d right
    logo_d.css('transform', 'translateX(' + d * 1.1 + 'px)');
    // moves eyon to the top, but slowly
    logo_eyon.css('transform', 'translate(-50%, ' + -d * 1.01 + 'px)');
    // moves the to the top with 'eyon'
    the.css('transform', 'translate(-50%, ' + -d * 1.01 + 'px)');;
  });
}

function everything_disappears(){
  // entire logo
  var everything = $(".logo_wrapper");
  $(window).scroll(function(){
    var d = $(window).scrollTop();
    // alpha value for opacity in rgba
    var slider = 1.0 - d/200;
    // uses the slider variable to adjust alpha opacity
    everything.css('color', 'rgba(0,0,181, ' + slider + ')');
    everything.css('text-shadow', '0.1rem 0.1rem rgba(255,255,255, ' + slider + ')');
    // hides the logo so there's no interference with other elements
    if (slider <= 0){
      everything.css('display', 'none');
    } else if (slider > 0){
      everything.css('display', 'block');
    }
  })
};
