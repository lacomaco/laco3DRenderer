import { Laco3DRender } from "./renderer/laco3DRender";

const render = new Laco3DRender();
setTimeout(()=>{
    console.log('render!');
    render.drawTriangle();
    render.testGPGPU();
},1000)