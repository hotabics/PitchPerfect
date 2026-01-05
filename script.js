// Smooth scrolling for navigation links
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

// Navbar scroll effect
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        nav.style.background = 'rgba(15, 23, 42, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
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

// Observe elements for animation
document.querySelectorAll('.persona-card, .feature-card, .step, .pricing-card, .testimonial').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Traffic light demo simulation (cycles through colors)
const demoLight = document.querySelector('.silent-companion-demo .light');
const demoMetric = document.querySelector('.silent-companion-demo .metric');
const demoLabel = document.querySelector('.silent-companion-demo .metric-label');

if (demoLight) {
    let state = 0;
    const states = [
        { color: 'green', wpm: 155, label: 'Optimāls temps', class: 'active' },
        { color: 'yellow', wpm: 175, label: 'Nedaudz par ātru', class: '' },
        { color: 'green', wpm: 145, label: 'Lēnāk, labāk', class: 'active' }
    ];
    
    setInterval(() => {
        state = (state + 1) % states.length;
        const currentState = states[state];
        
        demoLight.className = `light ${currentState.color} ${currentState.class}`;
        if (demoMetric) demoMetric.innerHTML = `${currentState.wpm} <span>WPM</span>`;
        if (demoLabel) demoLabel.textContent = currentState.label;
    }, 3000);
}

// CTA button click tracking (placeholder for analytics)
document.querySelectorAll('.btn-primary, .pricing-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Add analytics tracking here
        console.log('CTA clicked:', e.target.textContent.trim());
    });
});

// Mobile menu toggle (if needed in future)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-content');
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '☰';
    menuBtn.style.display = 'none';
    
    // Show on mobile
    if (window.innerWidth < 768) {
        menuBtn.style.display = 'block';
    }
    
    nav.appendChild(menuBtn);
};

// Initialize
window.addEventListener('load', () => {
    console.log('Pitch Perfect MVP Landing Page loaded');
});
