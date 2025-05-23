document.addEventListener('DOMContentLoaded', function () {
    var acc = document.getElementsByClassName("accordion");
    
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class */
            this.classList.toggle("active");
    
            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});
const images = document.querySelectorAll(".carousel-images img");
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  showImage(currentIndex);
}

// Initialize first image as visible
showImage(currentIndex);