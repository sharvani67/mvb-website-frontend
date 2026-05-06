export default function WaveDivider(){

return(

<div className="relative w-full overflow-hidden leading-none">

<svg
viewBox="0 0 1440 200"
preserveAspectRatio="none"
className="w-full h-[120px]"
>

<defs>

<linearGradient id="waveGrad">

<stop offset="0%" stopColor="#ff2d7a"/>
<stop offset="25%" stopColor="#ff7a00"/>
<stop offset="50%" stopColor="#ffd400"/>
<stop offset="75%" stopColor="#38d66b"/>
<stop offset="100%" stopColor="#00a8ff"/>

</linearGradient>

</defs>

<path
fill="url(#waveGrad)"
fillOpacity="0.25"
d="M0,80 C300,200 900,0 1440,100 L1440,200 L0,200 Z"
>

<animate
attributeName="d"
dur="8s"
repeatCount="indefinite"
values="
M0,80 C300,200 900,0 1440,100 L1440,200 L0,200 Z;
M0,120 C400,0 1000,200 1440,80 L1440,200 L0,200 Z;
M0,80 C300,200 900,0 1440,100 L1440,200 L0,200 Z
"
/>

</path>

</svg>

</div>

);

}