const pergunta =  prompt('Alguma coisa')

const display = document.getElementById('timer');
const startBtn = document.getElementById("start-btn");
const stopAudioBtn = document.getElementById('stopAudio')
const audio = document.getElementById("audio")

startBtn.addEventListener('click', () => {
    const hours = document.getElementById("hours-input");
    const minutes = document.getElementById("minutes-input");
    const seconds = document.getElementById("seconds-input");

    let duration = parseInt(hours.value * 60 * 60) + parseInt(minutes.value * 60) + parseInt(seconds.value);

    timer(duration, display);
});

const timer = (duration, display) => {
    let timer = duration;
    let hours, minutes, seconds;

    intervalId = setInterval(() => {
        hours = Math.floor((timer / 60) / 60);
        minutes = Math.floor((timer / 60) % 60);
        seconds = Math.floor((timer % 60));

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = `${hours}:${minutes}:${seconds}`;

        timer -= 1;

        if (timer < 0) {
            const audio = document.getElementById("audio")
            
            clearInterval(intervalId)
            display.innerHTML = "Time's Up!"
            audio.play()
        }

    }, 1000);
}


stopAudioBtn.addEventListener('click' , ()=> {
    audio.pause()
})


    