const toggleButton = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
const slider = document.querySelector('.reviews-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: 350,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: -350,
        behavior: 'smooth'
    });
});
// Set the offer end date (YYYY-MM-DDTHH:MM:SS format)
const offerEndDate = new Date("2025-06-14T23:59:59").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = offerEndDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector('.countdown-timer').innerHTML = "<p>Offer Expired!</p>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days < 10 ? `0${days}` : days;
    document.getElementById('hours').innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
// FAQ Accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close other active items
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

