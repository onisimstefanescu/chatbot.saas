// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initProgressBar();
    initCounterAnimations();
    initParallaxEffect();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling (enhanced version below in ADVANCED FEATURES)
const form = document.getElementById('earlyAccessForm');
const formContainer = form;
const successMessage = document.getElementById('formSuccess');

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Navbar background on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Track button clicks for analytics
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        console.log('Button clicked:', buttonText);

        // Here you can add analytics tracking
        // Example: gtag('event', 'button_click', { button_name: buttonText });
    });
});

// Enhanced Email validation with visual feedback
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', function() {
    const email = this.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && !emailRegex.test(email)) {
        this.classList.add('error');
        this.classList.remove('success');
    } else if (email) {
        this.classList.add('success');
        this.classList.remove('error');
    } else {
        this.classList.remove('error', 'success');
    }
});

// Real-time validation for all inputs
const nameInput = document.getElementById('name');
nameInput.addEventListener('input', function() {
    if (this.value.trim().length >= 2) {
        this.classList.add('success');
        this.classList.remove('error');
    } else if (this.value.length > 0) {
        this.classList.add('error');
        this.classList.remove('success');
    } else {
        this.classList.remove('error', 'success');
    }
});

// Add focus effect to form inputs
document.querySelectorAll('.form-group input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.transition = 'transform 0.2s ease';
    });

    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Console message for developers
console.log('%c👋 Salut, developer!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cInteresant să vezi cum funcționează? Contactează-ne pentru oportunități de colaborare!', 'font-size: 14px; color: #4b5563;');

// ============================================
// ADVANCED FEATURES
// ============================================

// Progress Bar on Scroll
function initProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

// Scroll Animations for Cards
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.problem-card, .benefit-card, .step, .stat-item');

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-on-scroll', 'animated');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        animationObserver.observe(el);
    });
}

// Counter Animation for Stats
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-value, .stat-number');
    let animated = false;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animateCounter(entry.target);
                animated = true;
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const text = element.textContent;
    const hasPercent = text.includes('%');
    const hasPlus = text.includes('+');
    const hasK = text.includes('K');

    let number = parseInt(text.replace(/[^\d]/g, ''));
    if (hasK) number = number / 1000;

    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }

        let displayValue = Math.floor(current);
        if (hasK) displayValue = displayValue + 'K';
        if (hasPlus) displayValue = displayValue + '+';
        if (hasPercent) displayValue = displayValue + '%';

        element.textContent = displayValue;
        element.classList.add('counting');

        setTimeout(() => {
            element.classList.remove('counting');
        }, 100);
    }, duration / steps);
}

// Parallax Effect
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.hero-visual, .dashboard-preview');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(el => {
            const speed = 0.3;
            const yPos = -(scrolled * speed);
            el.style.setProperty('--parallax-offset', `${yPos}px`);
        });
    });
}

// Enhanced Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.boxShadow = 'none';
    }
});

// Typing Effect for Hero Title (Optional)
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    // Uncomment to enable typing effect
    // typeWriter();
}

// Improved Form Submission with Loading State
form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    // Validate all fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
        document.getElementById('name').classList.add('error');
        document.getElementById('name').focus();
        return;
    }

    if (!emailRegex.test(email)) {
        document.getElementById('email').classList.add('error');
        document.getElementById('email').focus();
        return;
    }

    // Add loading spinner
    submitButton.innerHTML = '<span class="spinner"></span> Se trimite...';
    submitButton.disabled = true;

    const formData = {
        name: name,
        email: email,
        website: document.getElementById('website').value.trim(),
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer
    };

    try {
        console.log('Form submitted:', formData);

        // Store in localStorage
        let submissions = JSON.parse(localStorage.getItem('earlyAccessSubmissions') || '[]');
        submissions.push(formData);
        localStorage.setItem('earlyAccessSubmissions', JSON.stringify(submissions));

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Success animation
        formContainer.style.opacity = '0';
        formContainer.style.transform = 'scale(0.9)';

        setTimeout(() => {
            formContainer.style.display = 'none';
            successMessage.style.display = 'block';
            successMessage.style.opacity = '0';
            successMessage.style.transform = 'scale(0.9)';

            setTimeout(() => {
                successMessage.style.opacity = '1';
                successMessage.style.transform = 'scale(1)';
                successMessage.style.transition = 'all 0.5s ease';
            }, 50);
        }, 300);

        // Track conversion
        console.log('🎉 Conversion tracked!');

    } catch (error) {
        console.error('Submission error:', error);

        // Show error message
        const errorMsg = document.createElement('div');
        errorMsg.style.cssText = 'color: #ef4444; margin-top: 1rem; text-align: center;';
        errorMsg.textContent = 'A apărut o eroare. Te rugăm să încerci din nou.';
        form.appendChild(errorMsg);

        setTimeout(() => errorMsg.remove(), 3000);

        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }
});

// Keyboard Navigation Enhancement
document.addEventListener('keydown', (e) => {
    // ESC to close modals (if any)
    if (e.key === 'Escape') {
        // Add modal close logic here
    }

    // Ctrl/Cmd + K for search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Add search functionality here
    }
});

// Detect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    // Disable animations for users who prefer reduced motion
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// Performance monitoring
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.duration > 100) {
                console.warn('Slow interaction detected:', entry);
            }
        }
    });

    observer.observe({ entryTypes: ['measure'] });
}

// Add to viewport check utility
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        console.log('%c🎮 KONAMI CODE ACTIVATED! 🎮', 'font-size: 24px; font-weight: bold; color: #ec4899;');
        document.body.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 500);
    }
});
