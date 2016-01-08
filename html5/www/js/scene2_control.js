$(document).ready(function(){
    //alert("scene 2 audio js");
    //var audio2 = document.getElementById("scene2_audio");
    var audio2 = document.getElementById("s2_audio");
    
    var count2 = 0;
    audio2.onended = function(){
        var isSupp = audio2.canPlayType("audio/mpeg");
        var isSupp0 = audio2.canPlayType("audio/wav");
        //alert("audio ended");
        if(count2 === 0){
            //alert("count2 is 0");
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio2.src="media/scnen2/audio/002.ogg";
                }else{
                    audio2.src="media/scene2/audio/002.wav";
                }
            } else {
                audio2.src="media/scene2/audio/002.mp3";
            }
            //alert(audio2.src);
        }else if(count2 == 1){
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio2.src="media/scnen2/audio/003.ogg";
                }else{
                    audio2.src="media/scene2/audio/003.wav";
                }
            } else {
                audio2.src="media/scene2/audio/003.mp3";
            }
        }else if(count2 == 2){
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio2.src="media/scnen2/audio/004.ogg";
                }else{
                    audio2.src="media/scene2/audio/004.wav";
                }
            } else {
                audio2.src="media/scene2/audio/004.mp3";
            }
        }else if(count2 == 3){
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio2.src="media/scnen2/audio/005.ogg";
                }else{
                    audio2.src="media/scene2/audio/005.wav";
                }
            } else {
                audio2.src="media/scene2/audio/005.mp3";
            }
        }else if(count2 == 4){
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio2.src="media/scnen2/audio/006.ogg";
                }else{
                    audio2.src="media/scene2/audio/006.wav";
                }
            } else {
                audio2.src="media/scene2/audio/006.mp3";
            }
        }else if(count2 == 5){
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio2.src="media/scnen2/audio/007.ogg";
                }else{
                    audio2.src="media/scene2/audio/007.wav";
                }
            } else {
                audio2.src="media/scene2/audio/007.mp3";
            }
        }else if(count2 == 6){
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio2.src="media/scnen2/audio/008.ogg";
                }else{
                    audio2.src="media/scene2/audio/008.wav";
                }
            } else {
                audio2.src="media/scene2/audio/008.mp3";
            }
            //change bgm
            var bgm2 = document.getElementById("bgm2");
            var bgm2Supp0 = bgm2.canPlayType("audio/mpeg");
            var bgm2Supp = bgm2.canPlayType("audio/wav");
            if(bgm2Supp0 === ""){
                if(bgm2Supp === ""){
                    //ogg
                    bgm2.src="media/scnen2/bgm/002.ogg";
                }else{
                    //wav
                    bgm2.src="media/scene2/bgm/002.wav";
                }
            } else {
                //mp3
                bgm2.src="media/scene2/bgm/002.mp3";
            }
            //alert(bgm2.src);
            bgm2.load();
            bgm2.play();
            
        }else if(count2 == 7){
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio2.src="media/scnen2/audio/009.ogg";
                }else{
                    audio2.src="media/scene2/audio/009.wav";
                }
            } else {
                audio2.src="media/scene2/audio/009.mp3";
            }
        }else if(count2 == 8){
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio2.src="media/scnen2/audio/010.ogg";
                }else{
                    audio2.src="media/scene2/audio/010.wav";
                }
            } else {
                audio2.src="media/scene2/audio/010.mp3";
            }
        }else if(count2 == 9){
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio2.src="media/scnen2/audio/011.ogg";
                }else{
                    audio2.src="media/scene2/audio/011.wav";
                }
            } else {
                audio2.src="media/scene2/audio/011.mp3";
            }
            
            var bgm2 = document.getElementById("bgm2");
            var bgm2Supp0 = bgm2.canPlayType("audio/mpeg");
            var bgm2Supp = bgm2.canPlayType("audio/wav");
            if(bgm2Supp0 === ""){
                if(bgm2Supp === ""){
                    //ogg
                    bgm2.src="media/scnen2/bgm/003.ogg";
                }else{
                    //wav
                    bgm2.src="media/scene2/bgm/003.wav";
                }
            } else {
                //mp3
                bgm2.src="media/scene2/bgm/003.mp3";
            }
            //alert(bgm2.src);
            bgm2.load();
            bgm2.play();
        }else if(count2 == 10){
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio2.src="media/scnen2/audio/012.ogg";
                }else{
                    audio2.src="media/scene2/audio/012.wav";
                }
            } else {
                audio2.src="media/scene2/audio/012.mp3";
            }
        }else if(count2 == 11){
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio2.src="media/scnen2/audio/013.ogg";
                }else{
                    audio2.src="media/scene2/audio/013.wav";
                }
            } else {
                audio2.src="media/scene2/audio/013.mp3";
            }
        }else if(count2 == 12){
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio2.src="media/scnen2/audio/014.ogg";
                }else{
                    audio2.src="media/scene2/audio/014.wav";
                }
            } else {
                audio2.src="media/scene2/audio/014.mp3";
            }
            
            var bgm2 = document.getElementById("bgm2");
            var bgm2Supp0 = bgm2.canPlayType("audio/mpeg");
            var bgm2Supp = bgm2.canPlayType("audio/wav");
            if(bgm2Supp0 === ""){
                if(bgm2Supp === ""){
                    //ogg
                    bgm2.src="media/scnen2/bgm/004.ogg";
                }else{
                    //wav
                    bgm2.src="media/scene2/bgm/004.wav";
                }
            } else {
                //mp3
                bgm2.src="media/scene2/bgm/004.mp3";
            }
            //alert(bgm2.src);
            bgm2.load();
            bgm2.play();
        }
        
        
        count2++;
        if(count2 == 14){
            count2 = 0;
            audio2.pause();
            
            var bgm2 = document.getElementById("bgm2");
            var bgm2Supp0 = bgm2.canPlayType("audio/mpeg");
            var bgm2Supp = bgm2.canPlayType("audio/wav");
            if(bgm2Supp0 === ""){
                if(bgm2Supp === ""){
                    //ogg
                    bgm2.src="media/scnen2/bgm/005.ogg";
                }else{
                    //wav
                    bgm2.src="media/scene2/bgm/005.wav";
                }
            } else {
                //mp3
                bgm2.src="media/scene2/bgm/005.mp3";
            }
            //alert(bgm2.src);
            bgm2.load();
            bgm2.play();
            
            //add the interactive map to the page
            $("div#scene2_canvas_holder").html('<canvas id="scene2Map" width="502" height="511"></canvas>'+'<script type="text/javascript" src="js/scene2MapCanvas.js"></script>');
            
        }else{
            audio2.load();
            audio2.play();
        }

    };
        
});