// script.js

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPause');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const progressBar = document.querySelector('.progress-bar');

// Establecer el volumen inicial bajo
audio.volume = 0.2; // Ajusta el volumen (0.0 a 1.0)

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
});

stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.textContent = 'Play';
});

audio.addEventListener('timeupdate', () => {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percentage + '%';
});

progressBar.addEventListener('click', (e) => {
    const clickX = e.offsetX;
    const width = progressBar.clientWidth;
    const newTime = (clickX / width) * audio.duration;
    audio.currentTime = newTime;
});
