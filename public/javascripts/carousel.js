$(document).ready(function(){

  var owl = $("#owlaccedo");

  owl.owlCarousel({
    loop: true,
    dots:false,
    items:6,
    lazyLoad: true,
    onDragged: callback


  });

  // Custom Navigation Events
  $(".next").click(function(){
      //console.log("entramos en la función click");
      owl.trigger('next.owl.carousel');
  })
  $(".prev").click(function(){
      owl.trigger('prev.owl.carousel');
  })

  $(document).keydown(function (e) {
    switch (e.keyCode) {
      case 37: //left
        owl.trigger('prev.owl.carousel');
        break;
      case 39: //right
        owl.trigger('next.owl.carousel');
        break;
      case 13: //intro
        //console.log($('img').hasClass('arrow'));
        //console.log($("img[class*='arrow']").attr('href'));
        if($('img').hasClass('arrow')){
          $(location).attr('href',$("img[class*='arrow']").attr('href'));
        }
        break;
    }
 })


 // Listen to owl events:
 owl.on('changed.owl.carousel',function(event){
  var prev = event.item.index - 1; 
  var current = event.item.index;
  var before = event.item.index + 1; 
  console.log(current);

  $(event.target).find(".owl-item").eq(prev).find("img").removeClass('arrow');
  $(event.target).find(".owl-item").eq(current).find("img").addClass('arrow');
  $(event.target).find(".owl-item").eq(before).find("img").removeClass('arrow');
  var href = $(event.target).find(".owl-item").eq(current).find("img").attr('href');
  console.log('Image current is ' + href);
});

  // Listen to owl events:
  /*owl.on('changed.owl.carousel', function(event) {
    var currentItem = event.item.index;
    console.log("Current Item " + currentItem);
    console.log(event.target);
    console.log($(this));

    //window.location.hash = currentItem + 1;
  })*/

  $('.link').on('click', function(){

    //console.log($(this).next().attr("href"));
    console.log($(this).children().attr("href"));
    $(location).attr('href',$(this).children().attr("href"));


})

  /*$('.link').on('click', function(event){

        console.log(event.item);
   

  })*/



  function callback(event) {
    console.log(event.item.index);
    // Provided by the core
    var element   = event.target;         // DOM element, in this example .owl-carousel
    var name      = event.type;           // Name of the event, in this example dragged
    var namespace = event.namespace;      // Namespace of the event, in this example owl.carousel
    var items     = event.item.count;     // Number of items
    var item      = event.item.index;     // Position of the current item
    // Provided by the navigation plugin
    var pages     = event.page.count;     // Number of pages
    var page      = event.page.index;     // Position of the current page
    var size      = event.page.size;      // Number of items per page
}



//We have to control this tomorrow
var elemVidio = $('#ourvideo');
console.log(elemVidio);
if (elemVidio.requestFullscreen) {
  elemVidio.requestFullscreen();
}

elemVidio[0].play(); 

elemVidio.on('play',function(){
  console.log('Video has estarted!');
});

elemVidio.on('ended',function(){
$(location).attr('href','/');
});



});