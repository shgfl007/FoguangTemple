(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  .uib_w_28 */
    $(document).on("click", ".uib_w_28", function(evt)
    {
         activate_page("#scene_1"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
