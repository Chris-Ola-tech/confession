function showConfession() {
      document.getElementById('welcome').classList.remove('active');
      document.getElementById('confession').classList.add('active');
    }










    document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".hidden-line");
  const music = document.getElementById("bg-music");
  const startBtn = document.getElementById("start-btn");

  startBtn.addEventListener("click", () => {
    // Hide button after click
    startBtn.style.display = "none";

    // Play music with fade-in
    music.volume = 0;
    music.play().then(() => {
      let fade = setInterval(() => {
        if (music.volume < 1) {
          music.volume += 0.1;
        } else {
          clearInterval(fade);
        }
      }, 300);
    });

    // Reveal lines one by one
    lines.forEach((line, i) => {
      setTimeout(() => {
        line.classList.add("show-line");
      }, i * 20000); // 4s per line
    });

    // Floating hearts generator
    const heartsContainer = document.getElementById("hearts");
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (6 + Math.random() * 4) + "s";
      heart.innerHTML = "❤️";
      heartsContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 10000);
    }, 1000);
  });
});
