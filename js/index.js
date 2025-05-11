

// слайдер //
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


 // таймер //

 document.addEventListener('DOMContentLoaded', function() {
    const timerElement = document.querySelector('.banner__timer');
    const daysElement = document.querySelector('.timer__days');
    const hoursElement = document.querySelector('.timer__hours');
    const minutesElement = document.querySelector('.timer__minutes');
    const secondsElement = document.querySelector('.timer__seconds');

    const endDate = new Date(2025, 4, 31, 23, 59, 59);
    
    function updateTimer() {
        const now = new Date();
        const diff = endDate - now;
        
        if (diff <= 0) {
            timerElement.innerHTML = '<div class="timer-ended">Акция завершена!</div>';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
    }

    if (new Date() > endDate) {
        timerElement.innerHTML = '<div class="timer-ended">Акция завершена!</div>';
    } else {
        updateTimer();
        setInterval(updateTimer, 1000);
    }
});
