// Eventos de botones
document.getElementById('btnYes').addEventListener('click', function() {
    document.getElementById('messageYes').style.display = 'block';
    document.getElementById('messageNo').style.display = 'none';
    createHearts();
    createFlowers(); // Añadir flores cuando dice "Sí"
    
    // Hacer que el botón "No" se escape al pasar el ratón
    const btnNo = document.getElementById('btnNo');
    btnNo.style.opacity = '0.5';
});

document.getElementById('btnNo').addEventListener('mouseenter', function() {
    // Movimiento aleatorio del botón "No"
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    this.style.transform = `translate(${x}px, ${y}px)`;
});

document.getElementById('btnNo').addEventListener('click', function() {
    document.getElementById('messageNo').style.display = 'block';
    document.getElementById('messageYes').style.display = 'none';
});
