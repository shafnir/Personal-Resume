document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
    });

    window.addEventListener('scroll', () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'all 0.6s ease-out';
            }
        });
    });
});

document.querySelector(".contact-btn").addEventListener("mouseover", function () {
    this.classList.add("hover");
});

document.querySelector(".contact-btn").addEventListener("mouseleave", function () {
    this.classList.remove("hover");
});
