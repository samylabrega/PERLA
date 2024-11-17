window.onload = function() {
    const container = document.querySelector('body');

    function createFloatingElement(type) {
        const element = document.createElement('div');
        element.classList.add('floating', type);
        
        // Posición aleatoria en el ancho de la pantalla
        element.style.left = Math.random() * 100 + 'vw';
        
        // Tamaño aleatorio para variar los elementos
        const size = Math.random() * 30 + 20 + 'px';
        element.style.width = size;
        element.style.height = size;

        // Duración aleatoria para el movimiento
        element.style.animationDuration = Math.random() * 5 + 10 + 's';

        // Añadir el elemento al contenedor
        container.appendChild(element);

        // Eliminar el elemento cuando termine su animación
        setTimeout(() => {
            element.remove();
        }, 15000); // 15 segundos para desaparecer
    }

    // Crear varios elementos flotantes de forma repetitiva
    setInterval(() => {
        createFloatingElement('pearl');
        createFloatingElement('diamond');
    }, 1000); // Crear un nuevo conjunto cada segundo
};
