
  // $('body').css('display', 'none');
        // $('body').fadeIn(1000);

//timecard fade in on scroll animation
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          var right_of_object = $(this).offset().left + $(this).outerWidth();
          var right_of_window = $(window).scrollLeft() + $(window).width();
          /* If the object is completely visible in the window, fade it it */
          if(right_of_object < right_of_window){
            $(this).animate({'opacity':'1'},500);
            setTimeout(
              function()
              {$('.timeline-img').fadeIn(500);
                //do something special
              }, 5000);
              var heightT = 100;
              var heightL = 170;
              var node = $('.timeline-node').position().left;
              var position = $('.timeline-each').position();
              var positionF = position.left;
              var width = $('.timeline-each').width();
              var starting = 150;
              $('.timeline-list').line(node + 450,heightT,positionF + width,heightL,{color:"#606060", stroke:3, zindex:-1});
              $('.timeline-list').line(node + 549,heightT,positionF + 499 + width,heightL,{color:"#606060", stroke:3, zindex:-1});
              $('.timeline-list').line(node + 1110,heightT,positionF + 940 + width,heightL,{color:"#606060", stroke:3, zindex:-1});
              $('.timeline-list').line(node + 2240,heightT,positionF + 1390 + width,heightL,{color:"#606060", stroke:3, zindex:-1});
              $('.timeline-list').line(node + 2370,heightT,positionF + 1990 + width,heightL,{color:"#606060", stroke:3, zindex:-1});
              $('.timeline-list').line(node + 2460,heightT,positionF + 2460 + width,heightL,{color:"#606060", stroke:3, zindex:-1});

          }
          else if( right_of_window > right_of_object ){

              $(this).animate({'opacity':'1'},800);
          }
      });
  });


$( document ).ready(function() {
    $('.random').css("border","3px solid red");
    // // $('.timeline-each').css('opacity','0.5');
    // // $("h1, h2, p").addClass("blue");
    //  $("div").css("border","3px solid red");
  var audio1 = document.getElementById("audio1_1");
  $('body').css('backgroundImage','url("../../img/layout/slide-bg.png")');

//jquery mouse horizontal scroll
  (function() {
  function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.documentElement.scrollLeft -= (delta*20); // Multiplied by 40
      document.body.scrollLeft -= (delta*20); // Multiplied by 40
      e.preventDefault();
  }
  if (window.addEventListener) {
      // IE9, Chrome, Safari, Opera
      window.addEventListener("mousewheel", scrollHorizontally, false);
      // Firefox
      window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
      // IE 6/7/8
      window.attachEvent("onmousewheel", scrollHorizontally);
  }
  })();
;});
