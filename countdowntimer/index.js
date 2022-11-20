(function(){
    let hour = document.querySelector('.hour');
    let minute = document.querySelector('.minute');
    let second = document.querySelector('.second');
    let startBtn = document.querySelector('.start');
    let stopBtn = document.querySelector('.stop');
    let resetBtn = document.querySelector('.reset');

    var countdownTimer = null;

    function stopTimer(state) {

    }

    function startTimer() {
        if((hour.value == 0) && (minute.value == 0) && (second.value == 0)) {
            return
        }
    }

    startBtn.addEventListener('click', startTimer);

    stopBtn.addEventListener('click', function(){
        stopTimer();
    });

    resetBtn.addEventListener('click', function(){
        stopTimer();
    });
})();