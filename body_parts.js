
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');


ctx.strokeStyle = 'grey';
ctx.lineWidth = 3;

let hanger = () => {
 ctx.beginPath();   
 ctx.moveTo(30, 295);
 ctx.lineTo(80, 295);
 ctx.moveTo(55, 295);
 ctx.lineTo(55, 20);
 ctx.lineTo(150, 20);
 ctx.lineTo(150, 75);
 ctx.moveTo(55, 80);
 ctx.lineTo(100 , 20);
 ctx.closePath();
 ctx.stroke();
 
}
let head = () => {
    ctx.beginPath(); 
    ctx.arc(150, 100, 25, 0, 2 * Math.PI); 
    ctx.closePath();
    ctx.stroke();
}

let torso = () => {
    ctx.moveTo(150, 125);
    ctx.lineTo(150, 190);
    ctx.stroke();
}

let arm1 = () => {
    ctx.moveTo(150, 140);
    ctx.lineTo(180, 150);
    ctx.stroke(); 
}

let arm2 = () => {
    ctx.moveTo(150, 140);
    ctx.lineTo(120, 150);
    ctx.stroke(); 
}

let leg1 = () => {
    ctx.moveTo(150, 190);
    ctx.lineTo(180, 220);
    ctx.stroke(); 
}

let leg2 = () => {
    ctx.moveTo(150, 190);
    ctx.lineTo(120, 220);
    ctx.stroke(); 
}

let face = () => {
    ctx.moveTo(140, 95);
    ctx.lineTo(150, 105);
    ctx.moveTo(150, 95);
    ctx.lineTo(140, 105);
    
    ctx.moveTo(155, 95);
    ctx.lineTo(165, 105);
    ctx.moveTo(165, 95);
    ctx.lineTo(155, 105);
    
    ctx.moveTo(145, 115);
    ctx.quadraticCurveTo(155, 105, 165, 115);
    ctx.stroke();
}

export { hanger, head, torso, arm1, arm2, leg1, leg2, face }