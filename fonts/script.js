// Função para iniciar o áudio do YouTube e mostrar o conteúdo
function startAudio() {
    const overlay = document.getElementById('play-overlay');
    const mainContent = document.getElementById('main-content');
    const youtubeAudio = document.getElementById('youtube-audio');

    // 1. Inicia o vídeo/áudio do YouTube
    // Atualiza o src com autoplay=1
    let src = youtubeAudio.src;
    if (src.indexOf('autoplay=0') !== -1) {
        src = src.replace('autoplay=0', 'autoplay=1');
        youtubeAudio.src = src;
    }
    
    // 2. Esconde o overlay e mostra o conteúdo principal
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        mainContent.style.visibility = 'visible';
        mainContent.style.opacity = '1';
    }, 500); // Meio segundo para transição suave

    // 3. Inicia o cronômetro
    updateCountdown(); 
    setInterval(updateCountdown, 1000);
}


// Função original do cronômetro
function updateCountdown() {
    // Data de início do namoro: 05/11/2017
    const startDate = new Date('2017-11-05T00:00:00'); 
    const countdownElement = document.getElementById('countdown');
    const now = new Date();
    let diff = now - startDate;

    const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;
    const MS_PER_MONTH = 1000 * 60 * 60 * 24 * 30.44; // Mês médio

    const years = Math.floor(diff / MS_PER_YEAR);
    diff %= MS_PER_YEAR;

    const months = Math.floor(diff / MS_PER_MONTH);
    diff %= MS_PER_MONTH;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff %= (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    countdownElement.innerHTML = 
        `<strong>${years}</strong> anos, <strong>${months}</strong> meses, <strong>${days}</strong> dias,<br>` +
        `<strong>${String(hours).padStart(2, '0')}</strong>h, <strong>${String(minutes).padStart(2, '0')}</strong>m e <strong>${String(seconds).padStart(2, '0')}</strong>s`;
}
