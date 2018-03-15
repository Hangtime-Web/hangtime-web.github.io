jQuery(document).ready(function(){
    "use strict";
//    $('#slider-carousel').carouFredSel({
//        responsive:true,
//        width:'100%;',
//        circular:true,
//        
//        scroll:
//               {
//                 items:1,
//                 duration:500,
//                 pouseOnHover:true
//                  },
//                auto:true,
//                items:
//                        
//                        {
//                         visible:
//                                       {
//                                       min:1,
//                                       max:1
//                                       },
//                                       height:"variable"
//                        },
//        
//        
//                pagination:
//                            {
//                              container:".sliderpager",         
//                              pageAnchorBuilder:false
//                            },
//        
//    });
    
    $('.portfolio-carousel').carouFredSel({
        responsive:true,
        width:'100%;',
        circular:true,
        prev: '#prev', 
        next: '#next',
        
        scroll:
               {
                 items:1,
                 duration:500,
                 pouseOnHover:true
                  },
                auto:true,
                items:
                        
                        {
                         visible:
                                       {
                                       min:1,
                                       max:4
                                       },
                                       height:"variable"
                        },
        
    });
    
    $(window).scroll(function(){
       
        var top=$(window).scrollTop();
        
        if(top>=100) {
            $("header").addClass('secondary');
        }
        
        else if ($("header").hasClass('secondary')){
            
                 $("header").removeClass('secondary');
            
                 }
    });
    
    $('#menu').slicknav({
        label:'',
    })
    
    
    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
    
    
});
