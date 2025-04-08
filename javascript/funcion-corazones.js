// Crear corazones animados
function createHearts() {
    const body = document.querySelector('body');
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // Posición aleatoria
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            
            // Tamaño aleatorio
            const size = Math.random() * 20 + 15;
            heart.style.width = size + 'px';
            heart.style.height = size + 'px';
            
            heart.style.before = size + 'px';
            heart.style.after = size + 'px';
            
            // Añadir al body
            body.appendChild(heart);
            
            // Animación
            setTimeout(() => {
                heart.style.opacity = '0.7';
                heart.style.transform = 'rotate(45deg) translateY(-100vh)';
                heart.style.transition = 'transform 5s, opacity 5s';
                
                // Eliminar después de la animación
                setTimeout(() => {
                    body.removeChild(heart);
                }, 5000);
            }, 100);
        }, i * 300);
    }
}
