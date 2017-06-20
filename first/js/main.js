$(document).ready(function(){
      $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
      });
    
    $('li').eq(0).click(function(){
    $(".main").show();
    $(".portfolio").hide();
    });
     $('li').eq(1).click(function(){
    $(".portfolio").show();
         $(".main").hide();

    });
    
     $('.basket').click(function(){
    $(".basketReq").toggle();
         $("#lock_on").toggle();
    $('#checkout, #lock_on').click(function(){
        $(".basketReq").hide();
        $("#lock_on").hide();
    })
})
   for(var i = 0; i <=5 ; i++){
       $("figure").eq(i).click(function(){
          $(".aboutDress").toggle();
          $("#lock_on").toggle();
           $('#add, #lock_on').click(function(){
             $(".aboutDress").hide();
             $("#lock_on").hide();
    })
       })
   }
     
})