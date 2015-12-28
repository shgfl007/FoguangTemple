/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  .uib_w_3 */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_page */
         activate_page("#scene_1"); 
         document.getElementById("audio0").pause();
         document.getElementById("audio1_1").play();
         var bgm1_1 = document.getElementById("bgm1_1");
         bgm1_1.volume = 0.3;
         document.getElementById("bgm1_1").play();
    });
    
        /* button  #sidebar_button */
    $(document).on("click", "#sidebar_button", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sidebar"));  
    });
    
        /* button  #sidebar_close */
    $(document).on("click", "#sidebar_close", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sidebar"));  
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
