$(document).ready(function(){

  var owl = $("#owlaccedo");

  owl.owlCarousel({
    loop: true,
    dots:false,
    items:6,
    lazyLoad: true

  });

  
  var owluser = $("#owluser");

  owluser.owlCarousel({
    loop: true,
    dots:false,
    items:6,
    lazyLoad: true,
    autoplay: true

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

          var data = {};
					//data.title = "title";
					//data.message = "message";
					$.ajax({
						type: 'POST',
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        url: window.location.href + $("img[class*='arrow']").attr('href'),						
                        success: function(data) {
                            //console.log('success');
                            //console.log(JSON.stringify(data));
                            $(location).attr('href', '/film?url='+ data.movie);
                            
                        }
                    });
           }
        break;
    }
 })


 // Listen to owl events:
 owl.on('changed.owl.carousel',function(event){
  var prev = event.item.index - 1; 
  var current = event.item.index;
  var before = event.item.index + 1; 
  //console.log(current);

  $(event.target).find(".owl-item").eq(prev).find("img").removeClass('arrow');
  $(event.target).find(".owl-item").eq(current).find("img").addClass('arrow');
  $(event.target).find(".owl-item").eq(before).find("img").removeClass('arrow');
  //var href = $(event.target).find(".owl-item").eq(current).find("img").attr('href');
  //console.log('Image current is ' + href);
});


  $('.link').on('click', function(){

          var data = {};
					//data.title = "title";
					//data.message = "message";
					$.ajax({
						type: 'POST',
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        url: window.location.href + $(this).children().attr("href"),						
                        success: function(data) {
                            //console.log('success');
                            //console.log(JSON.stringify(data));
                            $(location).attr('href', '/film?url='+ data.movie);
                            
                        }
                    });

})

if (window.location.pathname == '/film'){

  elemVidio.on('ended',function(){
  $(location).attr('href','/');
  });

}


});