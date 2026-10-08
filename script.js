document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scrolling for local hash anchors
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Contact Modal Handlers
  const modal = document.getElementById("contactModal");
  const openModalBtns = document.querySelectorAll(".open-contact-modal");
  const closeModalBtn = document.getElementById("closeModal");
  const contactForm = document.getElementById("contactForm");
  const formSuccessMessage = document.getElementById("formSuccessMessage");

  const openModal = () => {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
  };

  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // Reset Form and Views after closing transition finishes
    setTimeout(() => {
      contactForm.reset();
      contactForm.style.display = "flex";
      formSuccessMessage.classList.add("hidden");
    }, 300);
  };

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeModalBtn.addEventListener("click", closeModal);

  // Close when clicking overlay outside card
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // Handle Form Submission (Dummy - No Backend)
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Hide Form, Show Success State
    contactForm.style.display = "none";
    formSuccessMessage.classList.remove("hidden");

    // Automatically close modal after 2 seconds
    setTimeout(() => {
      closeModal();
    }, 2200);
  });
});