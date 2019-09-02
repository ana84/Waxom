$(document).ready(function() {
  //SEARCH-BOX SHOW
    $(".search").click(function(){
        $("#input").fadeToggle();
    });
    
  $(".banner-slide").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1
  });
 
//Counter
    $(".num").counterUp({
        delay: 10,
        time: 1000
    });

//Burger-btn
  $(".js-burger-btn").click(function() {
    $(this).toggleClass("active-btn");
    $(".js-menu").slideToggle();
  });

//Video
  const srcInit = $(".video-box iframe").attr("src");
  $(".js-toggle-video").click(function() {
    const video = $(".video-box iframe");
    const videoClass = 'video--unactive';
    const content = $(".video .content");
     
    let src = $(".video-box iframe").data("src");
    $(".js-toggle-video").fadeToggle(videoClass);
    video.toggleClass();
    content.fadeToggle();
    if ($(this).hasClass('play-btn')) {
      video.attr("src", src);
    } else {
      video.attr("src", srcInit);
    }
  });
});
