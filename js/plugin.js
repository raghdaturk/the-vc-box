 $(document).ready(function() {

     /// Start Loading animations

     $('.loading').fadeIn('slow', function() {
         $("body").addClass("active");
         $('.loading').delay(8000).fadeOut();
         setTimeout(function() {
             $("body").removeClass("active");
         }, 8000);
     });

     /// End  Loading animations

     $('.m-click .text').click(function() {
         $('.menu').addClass("active");
         $('body').addClass("active");
         $('.m-click .text').fadeOut("");
         $('.m-click .menu-clos').fadeIn("");
     });

     $('.m-click .menu-clos').click(function() {
         $('.menu').removeClass("active");
         $('body').removeClass("active");
         $('.m-click .text').fadeIn("");
         $('.m-click  .menu-clos').fadeOut("");
     });

     $('.navmenu a,.alphabet a').click(function() {
         $('.navmenu a,.alphabet a').removeClass("active");
         $(this).addClass("active");
     });


     /// End  Menu  

     (function($) {
         $(window).on("load", function() {

             /* Page Scroll to id fn call */
             $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
                 highlightSelector: "#navigation-menu a"
             });

             /* demo functions */
             $("a[rel='next']").click(function(e) {
                 e.preventDefault();
                 var to = $(this).parent().parent("section").next().attr("id");
                 $.mPageScroll2id("scrollTo", to);
             });

         });
     })(jQuery);


     /// End  Scroll  



     $('.responsive').slick({
         dots: true,
         infinite: false,
         speed: 1000,
         slidesToShow: 3,
         slidesToScroll: 3,
         responsive: [{
                 breakpoint: 1199,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                 }
             },
             {
                 breakpoint: 800,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                 }
             },



         ]
     });

     $('.filter').click(function() {
         $(this).toggleClass("active");
     });




 });