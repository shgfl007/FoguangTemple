//function to deal with the audios

function audio_pauser(sceneNum) {
    "use strict";
    
    //sceneNum as a number
    var audios = document.getElementsByTagName('audio');
    for(var i = 0; i < audios.length; i++){
        if(audios[i] != (sceneNum-1)){
            audios[i].pause();
        }else{
            var isSupp = audios[i].canPlayType("audio/mpeg");
            var isSupp0 = audios[i].canPlayType("audio/wav");
            audios[i].load();
            audios[i].play();
        }
    }
    
}
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
    
        /* button  #scene2_sidebar_button */
    $(document).on("click", "#scene2_sidebar_button", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#scene2_sidebar"));  
    });
    
        /* button  #scene2_sidebar_close */
    $(document).on("click", "#scene2_sidebar_close", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#scene2_sidebar"));  
    });
    
        /* button  #transition_cont */
    
    
        /* button  #scene_2_sidebar */
    $(document).on("click", "#scene_2_sidebar", function(evt)
    {
        audio_pauser(2); 
        /*global activate_subpage */
         activate_subpage("#scene_1_transition"); 
    });
    
        /* button  #scene_1_sidebar */
    
    
        /* button  #transition_cont */
    $(document).on("click", "#transition_cont", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#scene_2_sub");
        //init the audio element
        var scene2_audio = document.getElementById("s2_audio");
        var supp = scene2_audio.canPlayType("audio/mpeg");
        var supp0 = scene2_audio.canPlayType("audio/wav");
        if(supp === ""){
                if(supp0 === ""){
                    scene2_audio.src="media/scnen2/audio/001.ogg";
                }else{
                    scene2_audio.src="media/scene2/audio/001.wav";
                }
            } else {
                scene2_audio.src="media/scene2/audio/001.mp3";
            }
            
        
         var bgm2 = document.getElementById("bgm2");
         supp = bgm2.canPlayType("audio/mpeg");
         supp0 = bgm2.canPlayType("audio/wav");
         if(supp === ""){
                if(supp0 === ""){
                    //ogg
                    bgm2.src="media/scene2/bgm/001.ogg";
                }else{
                    //wav
                    bgm2.src="media/scene2/bgm/001.wav";
                }
            } else {
                //mp3
                bgm2.src="media/scene2/bgm/001.mp3";
            }
        document.getElementById("bgm2").volume = 0.3;
            document.getElementById("bgm2").play();
            document.getElementById("s2_audio").play();
    });
    
        /* button  #scene_1_sidebar */
    
    
        /* button  #button_to_s1 */
    $(document).on("click", "#button_to_s1", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_37_52");
        console.log("button to s1 pressed");
        //init img and audio
        $('div#s1_img1').fadeIn(2000);
         document.getElementById("audio0").pause();
         document.getElementById("audio1_1").play();
         var bgm1_1 = document.getElementById("bgm1_1");
         bgm1_1.volume = 0.3;
         document.getElementById("bgm1_1").play();
    });
    
        /* button  #scene_1_sidebar */
    $(document).on("click", "#scene_1_sidebar", function(evt)
    {
        audio_pauser(1); 
        /*global activate_subpage */
         activate_subpage("#transition_to_s1"); 
    });
    
        /* button  .uib_w_3 */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#transition_to_s1"); 
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_28", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_25").modal("toggle");  
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
