// --- ¡IMPORTANTE! CAMBIA ESTA FECHA ---
// Formato: "Mes Día, Año HH:MM:SS" 
const birthdayDate = new Date("Oct 18, 2025 00:00:00").getTime();

// Elementos del DOM
const countdownContainer = document.getElementById('countdown-container');
const birthdayContent = document.getElementById('birthday-content');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// Actualizar el contador cada segundo
const countdownInterval = setInterval(() => {
    // Obtener la fecha y hora actual
    const now = new Date().getTime();

    // Calcular la distancia entre ahora y la fecha de cumpleaños
    const distance = birthdayDate - now;

    // Si la cuenta regresiva terminó
    if (distance < 0) {
        clearInterval(countdownInterval); // Detener el contador
        showBirthdayContent(); // Mostrar el contenido del cumpleaños
        return;
    }

    // Cálculos de tiempo para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado en los elementos correspondientes
    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;

}, 1000);

// Función para mostrar el contenido y lanzar confeti
function showBirthdayContent() {
    countdownContainer.style.display = 'none'; // Ocultar cuenta regresiva
    birthdayContent.classList.remove('hidden'); // Mostrar contenido

    // Función para lanzar el confeti
    function launchConfetti() {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });
    }

    launchConfetti(); // Lanzar al desbloquear
    setInterval(launchConfetti, 8000); // Y seguir lanzando

}
