function openPopup(element) {
    const modal = document.getElementById("motorModal");
    const modalImg = document.getElementById("imgPopup");
    const captionText = document.getElementById("caption");
    const clickedImg = element.getElementsByTagName('img')[0];

    modal.style.display = "block";
    modalImg.src = clickedImg.src;
    captionText.innerHTML = clickedImg.alt;
}

function closePopup() {
    document.getElementById("motorModal").style.display = "none";
}

