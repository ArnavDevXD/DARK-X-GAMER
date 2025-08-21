// Simple animation for FAQ items
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item h3");
  
  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      const p = item.nextElementSibling;
      p.style.display = (p.style.display === "block") ? "none" : "block";
    });
  });
});
