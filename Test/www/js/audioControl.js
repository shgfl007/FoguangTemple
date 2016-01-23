var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");
var audio5 = document.getElementById("audio5");
//var bgm1 = document.getElementById("bgm1");

audio1.onended = function(){
    //confirm("do you want to continue?");
                
    audio2.play();
};
            
audio2.onended = function(){
    audio3.play();
};

audio3.onended = function(){
    audio4.play();
};

audio4.onended = function(){
    audio5.play();
};

audio5.onended = function(){
    //bgm1.pause();
};