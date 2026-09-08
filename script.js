// Simple animated wave lines using Canvas
const canvas = document.getElementById('wave');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = 200;

let time = 0;

function drawWave() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1;
  for (let i = 0; i < 20; i++) {
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
      const y = 100 + Math.sin(x * 0.01 + time + i * 0.3) * 15;
      ctx.lineTo(x, y + i * 4);
    }
    ctx.stroke();
  }
  time += 0.02;
  requestAnimationFrame(drawWave);
}

drawWave();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
});
