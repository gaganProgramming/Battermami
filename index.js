const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// FaQ section
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('open');

        // Close others if one is opened
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('open');
            }
        });
    });
});


// Contact section

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const message = document.getElementById('message').value;

//     if (name === '' || email === '' || phone === '' || message === '') {
//         alert('Please fill in all fields.');
//     } else {
//         alert('Thank you for your message! We will get back to you soon.');
//         document.getElementById('contact-form').reset(); // Clear the form
//     }
// });

