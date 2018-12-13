$( document ).ready(function() {
   $("#main-navigation-link").click(function(){
     $(".main-navigation, #main-navigation-link, .content").toggleClass("active");
   });
});
