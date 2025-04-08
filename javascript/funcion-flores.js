// Crear flores animadas
function createFlowers() {
    const body = document.querySelector('body');
    const flowerColors = ['#ff99cc', '#99ff99', '#99ccff', '#ffcc99', '#cc99ff'];
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            // Crear contenedor de flor
            const flower = document.createElement('div');
            flower.classList.add('flower');
            
            // Posición aleatoria
            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.top = Math.random() * 100 + 'vh';
            
            // Crear centro de la flor
            const center = document.createElement('div');
            center.classList.add('flower-center');
            center.style.backgroundColor = '#ffcc00';
            flower.appendChild(center);
            
            // Color aleatorio para pétalos
            const petalColor = flowerColors[Math.floor(Math.random() * flowerColors.length)];
            
            // Crear pétalos
            for (let j = 0; j < 8; j++) {
                const petal = document.createElement('div');
                petal.classList.add('petal');
                petal.classList.add('petal-' + (j + 1));
                petal.style.backgroundColor = petalColor;
                center.appendChild(petal);
            }
            
            // Añadir al body
            body.appendChild(flower);
            
            // Tamaño aleatorio
            const scale = Math.random() * 1.5 + 0.5;
            flower.style.transform = `scale(${scale})`;
            
            // Animación
            setTimeout(() => {
                flower.style.opacity = '0.9';
                flower.style.transform = `scale(${scale}) translateY(-100vh) rotate(${Math.random() * 360}deg)`;
                flower.style.transition = 'transform 8s ease-out, opacity 8s';
                
                // Eliminar después de la animación
                setTimeout(() => {
                    body.removeChild(flower);
                }, 8000);
            }, 100);
        }, i * 500);
    }
}
