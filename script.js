const text = `Manaim, your beauty is not just seen — it's felt in the soul.
Your eyes, like twin galaxies, pull my world into orbit.
Your smile is the sunrise that banishes every shadow.
You speak with the grace of moonlight and move like poetry.
Your kindness paints the world in colors I never knew existed.
You are not just beautiful — you are the definition of love itself.
A living poem, a divine masterpiece, my forever muse. 💖`;

let i = 0;
function typeText() {
  const target = document.getElementById("love-text");
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 40);
  }
}
window.onload = function () {
  typeText();
  startHearts();
};

function showSecret() {
  document.getElementById("secret-text").style.display = "block";
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  music.paused ? music.play() : music.pause();
}

function openFullImage(index) {
  const popup = document.getElementById("full-image");
  const img = document.getElementById("popup-img");
  img.src = index === 1
    ? "Screenshot 2025-05-10 194700_edited.jpg"
    : "Adobe Express - file (1).png";
  popup.style.display = "flex";
}

function closeFullImage() {
  document.getElementById("full-image").style.display = "none";
}

function startHearts() {
  const canvas = document.getElementById('heart-canvas');
  const ctx = canvas.getContext('2d');
  let hearts = [];

  resize();
  window.addEventListener('resize', resize);

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawHeart(x, y, size) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-size / 2, -size / 2, -size, size / 3, 0, size);
    ctx.bezierCurveTo(size, size / 3, size / 2, -size / 2, 0, 0);
    ctx.fillStyle = '#ff4d88';
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(h => {
      drawHeart(h.x, h.y, h.size);
      h.y += h.speed;
      if (h.y > canvas.height) {
        h.y = -10;
        h.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(animate);
  }

  function generateHearts() {
    for (let i = 0; i < 60; i++) {
      hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 12 + 6,
        speed: Math.random() * 1.5 + 0.5
      });
    }
  }

  generateHearts();
  animate();
}

