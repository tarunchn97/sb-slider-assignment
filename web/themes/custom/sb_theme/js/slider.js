const sbSlider = ($) => {
  Drupal.behaviors.sbSlider = {
    attach(context) {
      $(document, context).ready(function(){
        $('.slider__tabs').slick({
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1000,
          slidesToShow: 1,
          cssEase: 'ease-in-out',
          arrows: true,
          nextArrow: $(".tab-wrapper .slick-next"),
          prevArrow: $(".tab-wrapper .slick-previous"),
          responsive: [
            {
              breakpoint: 1800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                centerMode: true,
                variableWidth: true
              },
            },
          ],
        });
      });;
    },
  };


  $(document).ready(function () {
      $("#nav-tabContent-article").hide();
      $("#nav-tabContent-basic").hide();
      $("#nav-tabContent-sb").show();
      
    $("#nav-profile-tab").click(function(){
      $("#nav-tabContent-article").show();
      $("#nav-tabContent-basic").hide();
      $("#nav-tabContent-sb").hide();
    });
    $("#nav-contact-tab").click(function(){
      $("#nav-tabContent-article").hide();
      $("#nav-tabContent-basic").show();
      $("#nav-tabContent-sb").hide();
    });
    $("#nav-home-tab").click(function(){
      $("#nav-tabContent-article").hide();
      $("#nav-tabContent-basic").hide();
      $("#nav-tabContent-sb").show();
    });
  });


};
sbSlider(jQuery);

