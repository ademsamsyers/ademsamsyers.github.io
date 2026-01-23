let index = 0;
const slideInterval = 3000; // Masa dalam milisaat (5000ms = 5 saat)
let autoSlideTimer;

// Fungsi untuk gerakkan slide
function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const wrapper = document.getElementById('sliderWrapper');
    
    index += n;

    if (index >= slides.length) {
        index = 0;
    }
    if (index < 0) {
        index = slides.length - 1;
    }

    wrapper.style.transform = `translateX(${-index * 100}%)`;
    
    // Setiap kali user tekan butang, kita restart timer auto-slide
    resetTimer();
}

// Fungsi untuk mulakan auto-slide
function startAutoSlide() {
    autoSlideTimer = setInterval(() => {
        moveSlide(1);
    }, slideInterval);
}

// Fungsi untuk reset timer
function resetTimer() {
    clearInterval(autoSlideTimer);
    startAutoSlide();
}

// Jalankan auto-slide sebaik sahaja website dibuka
startAutoSlide();

window.addEventListener('scroll', function() {
    const motor = document.getElementById('movingMotor');
    const section = document.getElementById('motorSection');
    
    // 1. Dapatkan kedudukan section motor berbanding skrin (viewport)
    const sectionRect = section.getBoundingClientRect();
    const screenHeight = window.innerHeight;

    // 2. Cek kalau bahagian atas section dah masuk dalam skrin
    if (sectionRect.top < screenHeight && sectionRect.bottom > 0) {
        
        // 3. Kira berapa banyak user dah scroll 'dalam' section tu sahaja
        // Kita tolak screenHeight dengan sectionRect.top supaya pengiraan mula dari 0
        let distanceInsideSection = screenHeight - sectionRect.top;
        
        // 4. Set kelajuan (1.5 atau 2.0). 
        // Motor akan mula bergerak dari posisi asalnya (left: -400px)
        let moveX = distanceInsideSection * 1.8; 

        motor.style.transform = `translateX(${moveX}px)`;
    }
});

var swiper = new Swiper(".cinematicSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});