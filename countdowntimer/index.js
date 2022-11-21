(function(){
    let hour = document.querySelector('.hour');
    let minute = document.querySelector('.minute');
    let second = document.querySelector('.second');
    let startBtn = document.querySelector('.start');
    let stopBtn = document.querySelector('.stop');
    let resetBtn = document.querySelector('.reset');

    var countdownTimer = null;

    function stopTimer(state) {
        startBtn.innerHTML = (state == 'pause') ? 'Continue' : 'Start';
        stopBtn.style.display = "none";
        startBtn.style.display = "initial";
        clearInterval(countdownTimer);
    }

    function timer() {
        console.log(hour.value);
        console.log(minute.value);
        console.log(second.value);
    }

    function startTimer() {
        if((hour.value == 0) && (minute.value == 0) && (second.value == 0)) {
            return
        }

        startBtn.style.display = "none";
        stopBtn.style.display = "initial";

        countdownTimer = setInterval(() => {
            timer();
        }, 1000);
    }

    startBtn.addEventListener('click', startTimer);
    
    stopBtn.addEventListener('click', function(){
        stopTimer("pause");
    });

    resetBtn.addEventListener('click', function(){
        hour.value = "";
        minute.value = "";
        second.value = "";
        stopTimer();
    });
})();