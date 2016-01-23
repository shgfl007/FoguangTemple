var canvas = document.getElementById('scene2Map');
var context = canvas.getContext('2d');
var circles = [];

var draw = function (context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = fillcolor;
    context.fill();
    context.lineWidth = linewidth;
    context.strokeStyle = strokestyle;
    context.stroke();

    context.fillStyle = fontcolor;
    context.textAlign = textalign;
    context.font = fonttype;

    context.fillText(filltext, x, y);    
};

var Circle = function(x, y, radius) {
    this.left = x - radius;
    this.top = y - radius;
    this.right = x + radius;
    this.bottom = y + radius;
};

var drawCircle = function (context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext, circles) {
    draw(context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext);
    var circle = new Circle(x, y, radius);
    circles.push(circle);  
};

drawCircle(context, 100, canvas.height / 2, "#FF4A28", 25, 0, "#FF4A28", "white", "center", "bold 32px Arial", "!", circles);
drawCircle(context, 300, canvas.height / 3 * 2, "#FF4A28", 25, 0, "#FF4A28", "white", "center", "bold 32px Arial", "!", circles);

$('#scene2Map').click(function (e) {
//                                            var clickedX = e.pageX - this.offsetLeft;
//                                            var clickedY = e.pageY - this.offsetTop;
      var clickedX = e.pageX - this.offsetLeft - 10;
      var clickedY = e.pageY - this.offsetTop - 50;

    for (var i = 0; i < circles.length; i++) {
        if (clickedX < circles[i].right && clickedX > circles[i].left && clickedY > circles[i].top && clickedY < circles[i].bottom) {
            //alert ('clicked number ' + (i + 1));
            //activate_subpage("#test_page");
            if(i==1){
                $("#s2_jingzhuang").modal("toggle");
            }else if(i === 0){
                $("#s2_wenshu").modal("toggle");
            }
             
        }
    }
});
