// Initialize AOS (animations on scroll)
AOS.init();

// Contact form validation (simple)
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert("Thank you for your message!");
      document.getElementById("contactForm").reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
