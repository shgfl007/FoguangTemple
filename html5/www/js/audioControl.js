var audio1 = document.getElementById("audio1_1");
var count = 0;

audio1.onended = function(){
    
    //alert("count is " + count);
    var isSupp = audio1.canPlayType("audio/mpeg");
    var isSupp0 = audio1.canPlayType("audio/wav");
    if(count === 0){
        if(isSupp === ""){
            if(isSupp0 === ""){
                audio1.src="media/scene1/audio/2.ogg";
            }else{
                audio1.src="media/scene1/audio/2.wav";
            }
            
        } else {
            audio1.src="media/scene1/audio/2.mp3";
        }
        alert(audio1.src);
    }else if(count == 1){
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
    count++;
    if(count == 6){
        audio1.pause();
    }else{
        audio1.load();
        audio1.play();
    }
    
    
//    if(count == 5){
//        audio1.pause();
//    }
};

//function myFunction() { 
//    isSupp = vid.canPlayType("video/mp4");
//    if (isSupp == "") {
//        vid.src = "movie.ogg";
//    } else {
//        vid.src = "movie.mp4";
//    }
//    vid.load();
//} 