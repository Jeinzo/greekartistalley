// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");
  const galleryImages = document.querySelectorAll(".art-grid img");

  // Open lightbox when a thumbnail is clicked
  galleryImages.forEach(img => {
    img.addEventListener("click", function () {
      lightbox.style.display = "flex";   // show modal
      lightboxImg.src = this.src;        // copy clicked image
      lightboxImg.alt = this.alt;
    });
  });

  // Close lightbox and redirect to index.html
  closeBtn.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  // Optional: close when clicking outside the image
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      window.location.href = "index.html";
    }
  });
});
