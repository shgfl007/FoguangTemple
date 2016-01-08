$(document).ready(function(){
    alert("this is the test js file");
    
    var audio1 = document.getElementById("audio1_1");
    var count = 0;

    //how to use count
    //0 -> scene 1 track no.1
    //1 -> scene 1 track no.2
    //2 -> scene 1 track no.3
    //3 -> scene 1 track no.4
    //4 -> scene 1 track no.5
    //5 -> scene 1 track no.6
    //alert(count);

    audio1.onended = function(){

        //alert("count is " + count);
        var isSupp = audio1.canPlayType("audio/mpeg");
        var isSupp0 = audio1.canPlayType("audio/wav");
        if(count === 0){
            $('div#s1_img1').fadeTo(200,0);
            var img1 = document.getElementById("s1_img_tag");
            img1.src = "img/scene1/005temple_layout.png";
            $('div#s1_img1').fadeTo(2000,1);
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio1.src="media/scene1/audio/2.ogg";
                }else{
                    audio1.src="media/scene1/audio/2.wav";
                }

            } else {
                audio1.src="media/scene1/audio/2.mp3";
            }
            //alert(audio1.src);
        }else if(count == 1){
            $('div#s1_img1').fadeTo(2000,0);
            $('div#scene1_media_placeholder').html('<figure class="margin-auto widget uib_w_10 d-margins img-align video_sizing" data-uib="media/video" data-ver="0">'+'<video autoplay id="scene1_vid">'+'<source src="videos/scene1_1.webm" type="video/webm">'+'<source src="videos/scene1_1.mp4" type="video/mp4">'+'</video>'+'</figure>');
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio1.src="media/scene1/audio/3.ogg";
                }else{
                    audio1.src="media/scene1/audio/3.wav";
                }
            } else {
                audio1.src="media/scene1/audio/3.mp3";
            }
        }else if (count == 2){
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio1.src="media/scene1/audio/4.ogg";
                }else{
                    audio1.src="media/scene1/audio/4.wav";
                }
            } else {
                audio1.src="media/scene1/audio/4.mp3";
            }
        }else if (count == 3) {
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio1.src="media/scene1/audio/5.ogg";
                }else{
                    audio1.src="media/scene1/audio/5.wav";
                }        } else {
                audio1.src="media/scene1/audio/5.mp3";
            }
        }else if(count == 4) {
            if(isSupp === ""){
                audio1.src="media/scene1/audio/6.ogg";
            } else {
                audio1.src="media/scene1/audio/6.mp3";
            }
            document.getElementById("bgm1_1").pause();
        }
        //alert(count);
        count++;
        if(count == 6){
            audio1.pause();
            $('div#scene1_media_placeholder').fadeTo(2000,0);
            $('div#scene1_media_placeholder').html(" ");
            
            //reset the scene
            count = 0;
            alert(count + " reset");
            if(isSupp === ""){
                if(isSupp0 === ""){
                    audio1.src="media/scene1/audio/1.ogg";
                }else{
                    audio1.src="media/scene1/audio/1.wav";
                }

            } else {
                audio1.src="media/scene1/audio/1.mp3";
            }
            //go to transitional page
            //activate_page("#scene_1_transition");
            activate_subpage("#scene_1_transition");
            
            
            //init page 2 audios 
//            activate_page("#scene_2");
//            document.getElementById("bgm2").volume = 0.3;
//            document.getElementById("bgm2").play();
//            document.getElementById("scene2_audio").play();
        }else{
            audio1.load();
            audio1.play();
        }


    //    if(count == 5){
    //        audio1.pause();
    //    }
    };
});

