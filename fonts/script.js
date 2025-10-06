document.addEventListener('DOMContentLoaded', function() {
    // Apenas a lógica do contador será inicializada aqui,
    // a inicialização completa do site e da música é feita por startExperience().
});

// Função para iniciar a experiência (música e visualização do site)
function startExperience() {
    const overlay = document.getElementById('play-overlay');
    const mainContent = document.getElementById('main-content');
    const youtubeAudio = document.getElementById('youtube-audio');

    // 1. Inicia o vídeo/áudio do YouTube
    // Substitui autoplay=0 por autoplay=1 no src do iframe
    let src = youtubeAudio.src;
    if (src.includes('autoplay=0')) {
        src = src.replace('autoplay=0', 'autoplay=1');
        youtubeAudio.src = src;
    } else {
        // Fallback ou se já estiver com autoplay, tentar tocar
        youtubeAudio.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
    
    // 2. Esconde o overlay com uma transição suave
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        // 3. Mostra o conteúdo principal com uma transição suave
        mainContent.classList.add('show'); 
    }, 500); // Tempo para a transição de opacidade do overlay

    // 4. Inicia o cronômetro
    updateCountdown(); 
    setInterval(updateCountdown, 1000); // Atualiza a cada segundo
}

// Função para atualizar o cronômetro
function updateCountdown() {
    const startDate = new Date('2017-11-05T00:00:00'); // Data de início do namoro
    const countdownElement = document.getElementById('countdown');
    const now = new Date();
    let diff = now - startDate;

    // Constantes para calcular tempo em milissegundos
    const MS_PER_SECOND = 1000;
    const MS_PER_MINUTE = MS_PER_SECOND * 60;
    const MS_PER_HOUR = MS_PER_MINUTE * 60;
    const MS_PER_DAY = MS_PER_HOUR * 24;
