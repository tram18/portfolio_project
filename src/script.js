// Simple JavaScript for any interactive elements
// document.addEventListener('DOMContentLoaded', function() {
//     // Add smooth hover effect to service cards
//     const serviceCards = document.querySelectorAll('.service-card');

//     serviceCards.forEach(card => {
//         card.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-5px)';
//             this.style.transition = 'transform 0.3s ease';
//             this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
//         });

//         card.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0)';
//             this.style.boxShadow = 'none';
//         });
//     });

// });

// Add simple animations for tags - About
document.querySelectorAll(".tag").forEach((tag, index) => {
  tag.style.animationDelay = `${index * 0.1}s`;
  tag.addEventListener("click", function () {
    this.style.transform = "scale(1.2)";
    setTimeout(() => {
      this.style.transform = "";
    }, 300);
  });
});

// Image Lightbox functionality
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <span class="lightbox-prev">&lsaquo;</span>
    <span class="lightbox-next">&rsaquo;</span>
    <div class="lightbox-content">
      <span class="lightbox-close">&times;</span>
      <img src="" alt="">
      <div class="lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector(".lightbox-caption");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector(".lightbox-prev");
  const nextBtn = lightbox.querySelector(".lightbox-next");

  const imageWrappers = document.querySelectorAll(
    ".about-images .image-wrapper, .hobbies-grid .hobby-cell"
  );

  let currentIndex = -1;
  const items = [];

  imageWrappers.forEach(function (wrapper, index) {
    const img = wrapper.querySelector(".gallery-img, img");
    const caption = wrapper.querySelector(".image-caption, span");
    if (!img) return;
    items.push({ src: img.src, alt: img.alt, caption: caption ? caption.textContent : "" });

    wrapper.addEventListener("click", function () {
      currentIndex = index;
      showImage(items[index]);
    });
  });

  function showImage(item) {
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightboxCaption.textContent = item.caption;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function navigate(direction) {
    currentIndex = (currentIndex + direction + items.length) % items.length;
    showImage(items[currentIndex]);
  }

  prevBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    navigate(-1);
  });
  nextBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    navigate(1);
  });

  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeLightbox();
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigate(-1);
    if (e.key === "ArrowRight") navigate(1);
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
});
