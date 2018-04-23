var canvas = document.getElementById("main");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// window.onresize = function() {
//   // var image = new Image();
//   // image.src = canvas.toDataURL("image/png");
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   // ctx.drawImage(image,0,0);
//   drawDivin(canvas.width/2,canvas.height/2,120,[0,0,0],ctx)
// }

function drawYin(cx, cy, r, ctx, rotate) {
  var s = Math.PI/8;
  var p = s/2+(rotate || 0);
  for(var i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 2*i*s+p, 2*i*s+s+p);
    ctx.stroke();
  }
}

function drawYan(cx, cy, r, ctx) {
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, 2*Math.PI);
  ctx.stroke();
}

function drawDivin(cx, cy, r, yao, ctx) {
  var yr = r/yao.length;
  for(var i = 0; i < yao.length; i++) {
    if(yao[i] === 1) {
      drawYan(cx, cy, yr*(i+1), ctx);
    } else if(yao[i] === 0) {
      drawYin(cx, cy, yr*(i+1), ctx);
    }
  }
}

function drawTaiji(cx, cy, r, ctx) {
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, 2*Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy-r/2, r/2, -Math.PI/2+0.1, Math.PI/2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy-r/2, r/8, 0, 2*Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy+r/2, r/2, Math.PI/2+0.1, -Math.PI/2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy+r/2, r/8, 0, 2*Math.PI);
  ctx.stroke();
}

var befor = [[1,1,1],[1,1,0],[0,1,0],[1,0,0],[0,0,0],[0,0,1],[1,0,1],[0,1,1]];
var after = [[1,0,1],[0,0,0],[0,1,1],[1,1,1],[0,1,0],[1,0,0],[0,0,1],[1,1,0]];

function headPic(cx, cy, r, yao, ctx) {
  drawTaiji(cx, cy, r, ctx);
  for(var i = 0; i < 8; i++) {
    var dx = Math.sin(Math.PI/4*i)*1.618*r,
        dy = Math.cos(Math.PI/4*i-Math.PI)*1.618*r;
    drawDivin(cx+dx,cy+dy,r/3,yao[i],ctx);
  }
}

ctx.lineWidth = 3;
ctx.fillStyle = "#eee";

ctx.rect(0,0,canvas.width,canvas.height);
ctx.fill();
headPic(canvas.width/2,canvas.height/2,canvas.height/5,after,ctx);
