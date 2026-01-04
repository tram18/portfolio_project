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
  // Create lightbox element
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
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

  // Add click event to all images in the gallery
  const imageWrappers = document.querySelectorAll(
    ".about-images .image-wrapper"
  );

  imageWrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", function () {
      const img = this.querySelector(".profile-img");
      const caption = this.querySelector(".image-caption");

      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = caption.textContent;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent scrolling
    });
  });

  // Close lightbox on close button click
  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeLightbox();
  });

  // Close lightbox on background click
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close lightbox on ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
  }
});
