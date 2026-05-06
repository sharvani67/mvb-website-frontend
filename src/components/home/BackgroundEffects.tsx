import FlowParticles from "./FlowParticles";
import NeuralNetwork from "./NeuralNetwork";
import ParallaxNetwork from "./ParallaxNetwork";

export default function BackgroundEffects(){

return(

<div className="absolute inset-0 overflow-hidden">

<ParallaxNetwork/>
<NeuralNetwork/>
<FlowParticles/>

</div>

);

}