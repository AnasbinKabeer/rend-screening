let stopwatch;
let isRunning = false;
let elapsedSeconds = 0;

function startStopwatch() {
    if (isRunning) {
        clearInterval(stopwatch);
    } else {
        const warningBellMinutes = parseInt(document.getElementById('inputWarningBellMinutes').value) || 0;
        const warningBellSeconds = parseInt(document.getElementById('inputWarningBellSeconds').value) || 0;
        const lastBellMinutes = parseInt(document.getElementById('inputLastBellMinutes').value) || 0;
        const lastBellSeconds = parseInt(document.getElementById('inputLastBellSeconds').value) || 0;


        stopwatch = setInterval(function () {
            elapsedSeconds++;
            const displayMinutes = Math.floor(elapsedSeconds / 60);
            const displaySeconds = elapsedSeconds % 60;

            document.getElementById('minutes').innerText = displayMinutes < 10 ? '0' + displayMinutes : displayMinutes;
            document.getElementById('seconds').innerText = displaySeconds < 10 ? '0' + displaySeconds : displaySeconds;

            checkAndPlayBell(warningBellMinutes, warningBellSeconds, 'warning.mp3');
            checkAndPlayBell(lastBellMinutes, lastBellSeconds, 'last.mp3');
        }, 1000);
    }

    isRunning = !isRunning;
}

function resetStopwatch() {
    clearInterval(stopwatch);
    isRunning = false;
    elapsedSeconds = 0;
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
}

function checkAndPlayBell(bellMinutes, bellSeconds, soundFile) {
    if (elapsedSeconds === (bellMinutes * 60 + bellSeconds)) {
        const fullPath = '/sounds/' + soundFile; // Constructing the full path
        playSound(fullPath);
    }
}

function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}


checkAndPlayBell(1, 30, 'warning.mp3'); // Check if elapsed time is 1 minute and 30 seconds for the warning bell
checkAndPlayBell(2, 0, 'last.mp3'); // Check if elapsed
