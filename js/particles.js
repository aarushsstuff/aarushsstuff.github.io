const c = document.getElementById("particles");
const ctx = c.getContext("2d");
let w, h, particles = [];

function resize() {
  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const particleCount = window.innerWidth < 768 ? 40 : 80;

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 0.75 + 1.5, 
    dx: (Math.random() - .5) * 0.25, 
    dy: (Math.random() - .5) * 0.25
  });
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  
  ctx.fillStyle = "rgba(166, 107, 255, 0.2)"; 
  
  particles.forEach(p => {
    p.x += p.dx; p.y += p.dy;
    
    if (p.x < 0 || p.x > w) p.dx *= -1;
    if (p.y < 0 || p.y > h) p.dy *= -1;
    
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.shadowBlur = 5;
    ctx.shadowColor = "rgba(165, 107, 255, 0.3)";
  });
  
  ctx.shadowBlur = 0;
  
  requestAnimationFrame(draw);
}
draw();