const card = document.getElementById('card');
let rotateX = 0, rotateY = 0;
let targetX = 0, targetY = 15;
let isDragging = false;
let startX, startY;

function update() {
    // Suavização do movimento (Interpolação Linear)
    rotateX += (targetX - rotateX) * 0.1;
    rotateY += (targetY - rotateY) * 0.1;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    requestAnimationFrame(update);
}
update();

// Eventos Mouse
window.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX; 
    startY = e.clientY;
});

window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    targetY += dx * 0.5;
    targetX -= dy * 0.5;
    startX = e.clientX; 
    startY = e.clientY;
});

window.addEventListener('mouseup', () => isDragging = false);

// Eventos Touch (Mobile)
window.addEventListener('touchstart', e => {
    isDragging = true;
    startX = e.touches[0].clientX; 
    startY = e.touches[0].clientY;
});

window.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    targetY += dx * 0.5;
    targetX -= dy * 0.5;
    startX = e.touches[0].clientX; 
    startY = e.touches[0].clientY;
});

window.addEventListener('touchend', () => isDragging = false);