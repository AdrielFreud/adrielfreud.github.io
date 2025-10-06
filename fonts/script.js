document.addEventListener('DOMContentLoaded', function() {
    const startDate = new Date('2017-11-05T00:00:00'); // Your start date
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();
        const diff = now - startDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        const remainingAfterYears = diff % (1000 * 60 * 60 * 24 * 365.25);

        const months = Math.floor(remainingAfterYears / (1000 * 60 * 60 * 24 * 30.44)); // Average month
        const remainingAfterMonths = remainingAfterYears % (1000 * 60 * 60 * 24 * 30.44);

        const days = Math.floor(remainingAfterMonths / (1000 * 60 * 60 * 24));
        const remainingAfterDays = remainingAfterMonths % (1000 * 60 * 60 * 24);

        const hours = Math.floor(remainingAfterDays / (1000 * 60 * 60));
        const remainingAfterHours = remainingAfterDays % (1000 * 60 * 60);

        const minutes = Math.floor(remainingAfterHours / (1000 * 60));
        const remainingAfterMinutes = remainingAfterHours % (1000 * 60);

        const seconds = Math.floor(remainingAfterMinutes / 1000);

        countdownElement.textContent = 
            `${years} anos, ${months} meses, ${days} dias, ` +
            `${String(hours).padStart(2, '0')} horas, ${String(minutes).padStart(2, '0')} minutos e ${String(seconds).padStart(2, '0')} segundos`;
    }

    // Update every second
    setInterval(updateCountdown, 1000);
    // Initial call to display immediately
    updateCountdown();
});
