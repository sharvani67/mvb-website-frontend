import { useEffect, useRef } from "react";

export default function NeuralNetwork(){

const canvasRef = useRef<HTMLCanvasElement>(null);

useEffect(()=>{

const canvas = canvasRef.current!;
const ctx = canvas.getContext("2d")!;

const width = window.innerWidth;
const height = window.innerHeight * 2;

canvas.width = width;
canvas.height = height;

const nodes = Array.from({length:30}).map(()=>({

x: Math.random()*width,
y: Math.random()*height,
vx:(Math.random()-0.5)*0.3,
vy:(Math.random()-0.5)*0.3

}));

function draw(){

ctx.clearRect(0,0,width,height);

nodes.forEach(n=>{

n.x += n.vx;
n.y += n.vy;

if(n.x < 0 || n.x > width) n.vx *= -1;
if(n.y < 0 || n.y > height) n.vy *= -1;

ctx.beginPath();
ctx.arc(n.x,n.y,2.5,0,Math.PI*2);
ctx.fillStyle="#00a8ff";
ctx.fill();

});

for(let i=0;i<nodes.length;i++){

for(let j=i+1;j<nodes.length;j++){

const dx = nodes[i].x-nodes[j].x;
const dy = nodes[i].y-nodes[j].y;
const dist = Math.sqrt(dx*dx+dy*dy);

if(dist < 180){

ctx.beginPath();
ctx.moveTo(nodes[i].x,nodes[i].y);
ctx.lineTo(nodes[j].x,nodes[j].y);
ctx.strokeStyle="rgba(0,168,255,.15)";
ctx.lineWidth=1;
ctx.stroke();

}

}

}

requestAnimationFrame(draw);

}

draw();

},[]);

return(

<canvas
ref={canvasRef}
style={{
position:"absolute",
top:0,
left:0,
width:"100%",
height:"200%",
opacity:0.35,
pointerEvents:"none",
zIndex:0
}}
/>

);

}