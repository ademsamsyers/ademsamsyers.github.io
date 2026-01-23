document.addEventListener("DOMContentLoaded", function() {
    const revBtn = document.getElementById('revBtn');
    const audio = document.getElementById('harleySound');

    if(revBtn && audio) {
        revBtn.addEventListener('click', function() {
            audio.currentTime = 0; 
            audio.play();

            revBtn.style.transform = "scale(0.95)";
            setTimeout(() => {
                revBtn.style.transform = "scale(1)";
            }, 100);
        });
    }
});