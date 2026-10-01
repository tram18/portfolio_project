(function () {
  function initLightbox() {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    if (!lightbox || !lightboxImg) return;

    var triggers = document.querySelectorAll("[data-lightbox]");

    function open(src) {
      lightboxImg.src = src;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    }

    function close() {
      lightbox.hidden = true;
      lightboxImg.src = "";
      document.body.style.overflow = "";
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function (event) {
        event.preventDefault();
        open(trigger.getAttribute("href"));
      });
    });

    lightbox.addEventListener("click", close);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") close();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLightbox);
  } else {
    initLightbox();
  }
})();
