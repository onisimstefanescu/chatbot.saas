// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('contactFormSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Get form data
            const company = document.getElementById('company').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            // Grupăm company, phone și message în câmpul "site"
            let siteInfo = message;
            if (company || phone) {
                siteInfo = '';
                if (company) siteInfo += `Firma: ${company}\n`;
                if (phone) siteInfo += `Telefon: ${phone}\n`;
                siteInfo += `\nMesaj:\n${message}`;
            }

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                site: siteInfo
            };

            // Get submit button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            try {
                // Disable button and show loading
                submitBtn.disabled = true;
                submitBtn.textContent = 'Se trimite...';

                // Send to Railway API endpoint
                const response = await fetch('https://chatbot-api-production-f14a.up.railway.app/lead', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log('Contact form submitted successfully:', result);

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
