document.addEventListener('DOMContentLoaded', function () {
  const faqs = document.querySelectorAll('.faq');
  
  faqs.forEach((faq) => {
    const question = faq.querySelector('.question');
    const answer = faq.querySelector('.answer');
    const icon = question.querySelector('img');

    question.addEventListener('click', function () {
      answer.classList.toggle("hidden");

      // Toggle between icons
      if (icon.src.includes("icon-plus.svg")) {
        icon.src = "assets/images/icon-minus.svg"; // Switch to minus icon when active
        question.setAttribute("aria-expanded", "true"); // Update aria attribute
        answer.setAttribute("aria-hidden", "false"); // Answer is visible
      } else {
        icon.src = "assets/images/icon-plus.svg"; // Switch back to plus icon when inactive
        question.setAttribute("aria-expanded", "false"); // Update aria attribute
        answer.setAttribute("aria-hidden", "true"); // Answer is hidden
      }
    });
  });
});
