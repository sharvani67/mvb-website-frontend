import { useEffect, useRef } from "react";

export default function ParallaxNetwork(){

const canvasRef = useRef<HTMLCanvasElement>(null);

useEffect(()=>{

const canvas = canvasRef.current!;
const ctx = canvas.getContext("2d")!;

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const nodes = Array.from({length:40}).map(()=>({
x:Math.random()*width,
y:Math.random()*height
}));

let mouseX = width/2;
let mouseY = height/2;

window.addEventListener("mousemove",(e)=>{

mouseX = e.clientX;
mouseY = e.clientY;

});

function draw(){

ctx.clearRect(0,0,width,height);

nodes.forEach(n=>{

const dx = (mouseX - width/2)*0.02;
const dy = (mouseY - height/2)*0.02;

const x = n.x + dx;
const y = n.y + dy;

ctx.beginPath();
ctx.arc(x,y,2.5,0,Math.PI*2);
ctx.fillStyle="#00a8ff";
ctx.fill();

});

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
height:"100%",
opacity:0.3,
pointerEvents:"none",
zIndex:0
}}
/>

);

}