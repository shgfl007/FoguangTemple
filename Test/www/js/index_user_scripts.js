(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
//    $('.menu_button').click(function(){
//        $('.mypanel').panel('toggle');
//    });
     
     /* button  .uib_w_28 */
    $(document).on("click", ".uib_w_28", function(evt)
    {
         activate_page("#scene_1"); 
         var audio0 = document.getElementById("audio0");
         audio0.pause();
         var audio1 = document.getElementById("audio1");
         audio1.play();
         var bgm1 = document.getElementById("bgm1");
         bgm1.volume = 0.3;
         bgm1.play();
         
        //af.ui.loadContent("#scene_1",false,false,"fade");
    });
    
        /* button  Button */
    
    
        /* button  Button */
    
    
//     $(document).on("click", ".menu_button", function(evt){
//            $('.mypanel').panel('toggle');
//     });
     
        /* button  #menu_button */
    $(document).on("click", "#menu_button", function(evt)
    {
        /* your code goes here */ 
        $('.side_menu').slideToggle(300);
        
    });
    
     
        /* button  #menu_button */
    $(document).on("click", "#menu_button", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#side_menu"));  
    });
    
        /* button  #sidebar_button */
    $(document).on("click", "#sidebar_button", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#side_menu"));  
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
