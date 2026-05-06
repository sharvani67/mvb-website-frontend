import { useEffect, useRef } from "react";

export default function FlowParticles() {

const canvasRef = useRef<HTMLCanvasElement | null>(null);

useEffect(() => {

const canvas = canvasRef.current!;
const ctx = canvas.getContext("2d")!;

let width = window.innerWidth;
let height = window.innerHeight * 2;

canvas.width = width;
canvas.height = height;

const particles = Array.from({ length: 80 }).map(() => ({
x: Math.random() * width,
y: Math.random() * height,
speed: 0.3 + Math.random()
}));

function draw(){

ctx.clearRect(0,0,width,height);

particles.forEach(p=>{

p.y -= p.speed;

if(p.y < 0){
p.y = height;
p.x = Math.random()*width;
}

ctx.beginPath();
ctx.arc(p.x,p.y,1.6,0,Math.PI*2);
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
height:"200%",
opacity:0.3,
pointerEvents:"none",
zIndex:0
}}
/>

);

}