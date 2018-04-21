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
  // ctx.arc(cx, cy, r, 0, Math.PI);
  // ctx.arc(cx, cy, r, Math.PI, 2*Math.PI);
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
    } else {
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

function headPic(cx, cy, r, ctx) {
  drawTaiji(cx, cy, r, ctx);
  drawDivin(cx, cy-r*2, r/3, [1,1,1], ctx);
  drawDivin(cx+Math.sin(Math.PI/4)*2*r, cy-Math.cos(Math.PI/4)*2*r, r/3, [1,1,0], ctx);
  drawDivin(cx+r*2, cy, r/3, [0,1,0], ctx);
  drawDivin(cx+Math.sin(Math.PI/4)*2*r, cy+Math.cos(Math.PI/4)*2*r, r/3, [1,0,0], ctx);
  drawDivin(cx-r*2, cy, r/3, [1,0,1], ctx);
  drawDivin(cx-Math.sin(Math.PI/4)*2*r, cy+Math.cos(Math.PI/4)*2*r, r/3, [0,0,1], ctx);
  drawDivin(cx, cy+r*2, r/3, [0,0,0], ctx);
  drawDivin(cx-Math.sin(Math.PI/4)*2*r, cy-Math.cos(Math.PI/4)*2*r, r/3, [0,1,1], ctx);
}

headPic(canvas.width/2,canvas.height/2,150,ctx);

// drawTaiji(canvas.width/2,canvas.height/2,100,ctx);
// drawDivin(canvas.width/2,canvas.height/2,120,[0,0,0],ctx)

// drawYan(100,100,40,ctx);
// drawYin(100,100,20,ctx);
// drawYan(100,100,60,ctx);

// ctx.beginPath();
// ctx.arc(95,50,40,0,2);
// ctx.stroke();
