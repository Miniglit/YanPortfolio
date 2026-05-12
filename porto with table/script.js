document.addEventListener("DOMContentLoaded", function () {
  let profileImage = document.querySelector(".profile img"); // Pilih gambar profil
  let hoverSound = document.getElementById("hoverSound"); // Pilih elemen audio

  profileImage.addEventListener("mouseenter", function () {
    hoverSound.currentTime = 0; // Reset suara ke awal
    hoverSound.play(); // Mainkan suara
  });
});

let slides = document.querySelectorAll(".slide");
let slider = document.querySelector(".slider");
let index = 0;

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  slider.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector(".next").onclick = () => showSlide(index + 1);
document.querySelector(".prev").onclick = () => showSlide(index - 1);

// Auto play setiap 3 detik
setInterval(() => showSlide(index + 1), 5000);
