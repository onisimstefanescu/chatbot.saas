// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('contactFormSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value,
                timestamp: new Date().toISOString()
            };

            // Get submit button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            try {
                // Disable button and show loading
                submitBtn.disabled = true;
                submitBtn.textContent = 'Se trimite...';

                // Send to Google Apps Script Web App
                const response = await fetch('https://script.google.com/macros/s/AKfycbyIgzHLcQ2P-Yr_eNgHACdmY7kE5v7tWKzKCNk0lMAmB3-gHCHaKJHq_YZ8B7BYU32B/exec', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                // Hide form and show success message
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';

                // Optional: Track conversion
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'contact_form_submit', {
                        'event_category': 'contact',
                        'event_label': 'Contact Form'
                    });
                }

            } catch (error) {
                console.error('Error:', error);

                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;

                // Show error message
                alert('A apărut o eroare. Te rugăm să trimiți un email direct la contact@chatinteligent.ro');
            }
        });
    }

    // Form validation - real-time
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email && !emailRegex.test(email)) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
            }
        });
    }
});
