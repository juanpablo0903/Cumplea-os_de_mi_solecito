document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURACIÓN DEL CONTADOR ---
    // ¡¡¡IMPORTANTE!!! CAMBIA ESTA FECHA POR EL CUMPLEAÑOS DE TU NOVIA
    // Formato: 'Mes dia, año hh:mm:ss' -> Ejemplo: 'Nov 17, 2025 00:00:00'
    const birthdayDate = new Date('Nov 18, 2025 00:00:00').getTime();

    const countdownSection = document.getElementById('countdown-section');
    const birthdayContent = document.getElementById('birthday-content');

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = birthdayDate - now;

        // Si el tiempo ya pasó
        if (distance < 0) {
            clearInterval(interval);
            showBirthdayContent();
            return;
        }

        // Cálculos de tiempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Mostrar en la página
        document.getElementById('days').innerText = formatTime(days);
        document.getElementById('hours').innerText = formatTime(hours);
        document.getElementById('minutes').innerText = formatTime(minutes);
        document.getElementById('seconds').innerText = formatTime(seconds);

    }, 1000);
    
    // Función para añadir un cero si el número es menor a 10
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    // --- LÓGICA PARA MOSTRAR EL REGALO ---
    function showBirthdayContent() {
        // Ocultar el contador
        countdownSection.style.display = 'none';
        
        // Mostrar el contenido del cumpleaños
        birthdayContent.classList.remove('hidden');

        // Lanzar confeti 🎉
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 }
        });
    }
});