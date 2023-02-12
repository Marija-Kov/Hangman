
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

ctx.strokeStyle = 'brown';
ctx.lineWidth = 3;

let hanger = () => {
 ctx.beginPath();   
 ctx.moveTo(40, 295); 
 ctx.lineTo(80, 295);
 ctx.moveTo(55, 295); 
 ctx.lineTo(55, 100); 
 ctx.lineTo(150, 100);
 ctx.lineTo(150, 125);
 ctx.moveTo(55, 150);
 ctx.lineTo(100 , 100);
 ctx.closePath();
 ctx.stroke();
 
}
let head = () => {
    ctx.beginPath(); 
    ctx.arc(150, 140, 15, 0, 2 * Math.PI); 
    ctx.closePath();
    ctx.stroke();
}

let torso = () => {
    ctx.moveTo(150, 153);
    ctx.lineTo(150, 200);
    ctx.stroke();
}

let arm1 = () => {
    ctx.moveTo(150, 170);
    ctx.lineTo(180, 160);
    ctx.stroke(); 
}

let arm2 = () => {
    ctx.moveTo(150, 170);
    ctx.lineTo(120, 160);
    ctx.stroke(); 
}

let leg1 = () => {
    ctx.moveTo(150, 200);
    ctx.lineTo(180, 230);
    ctx.stroke(); 
}

let leg2 = () => {
    ctx.moveTo(150, 200);
    ctx.lineTo(120, 230);
    ctx.stroke(); 
}

let face = () => {
    ctx.moveTo(145, 140);
    ctx.lineTo(150, 135);
    ctx.moveTo(150, 140);
    ctx.lineTo(145, 135);
    
    ctx.moveTo(155, 140);
    ctx.lineTo(160, 135);
    ctx.moveTo(160, 140);
    ctx.lineTo(155, 135);
    
    ctx.moveTo(145, 147);
    ctx.quadraticCurveTo(155, 143, 155, 149);
    ctx.stroke();
}

export { hanger, head, torso, arm1, arm2, leg1, leg2, face }