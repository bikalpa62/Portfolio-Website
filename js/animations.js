// Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
    // Elements to animate on scroll
    const animateElements = [
        '.highlight-card',
        '.project-card',
        '.project-item',
        '.skill-category',
        '.skill-item',
        '.timeline-item',
        '.interest-card',
        '.education-item',
        '.contact-item',
        '.faq-item'
    ];
    
    // Add animation class to elements based on scroll position
    function checkScroll() {
        animateElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animate-in');
                }
            });
        });
    }
    
    // Initial check on page load
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Hero section typing animation
    const heroTitleElement = document.querySelector('.hero-content h1 .highlight');
    
    if (heroTitleElement) {
        const text = heroTitleElement.textContent;
        heroTitleElement.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitleElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
    
    // Skill bar animation
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (skillBars.length > 0) {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease-in-out';
                bar.style.width = width;
            }, 300);
        });
    }
    
    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length > 0) {
        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 300 + (index * 200));
        });
    }
    
    // Project image hover effect
    const projectImages = document.querySelectorAll('.project-image');
    
    if (projectImages.length > 0) {
        projectImages.forEach(image => {
            image.addEventListener('mouseenter', () => {
                image.classList.add('hover');
            });
            
            image.addEventListener('mouseleave', () => {
                image.classList.remove('hover');
            });
        });
    }
    
    // Contact form input animation
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    if (formInputs.length > 0) {
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
            
            // Check if input already has value (e.g., on page refresh)
            if (input.value) {
                input.parentElement.classList.add('focused');
            }
        });
    }
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        /* Animation styles */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-in {
            animation: fadeIn 0.6s ease forwards;
        }
        
        .project-image.hover {
            transform: scale(1.05);
            transition: transform 0.3s ease;
        }
        
        .form-group.focused label {
            color: var(--primary-color);
            font-size: 0.85rem;
            transform: translateY(-1.25rem);
            transition: all 0.3s ease;
        }
        
        @keyframes navLinkFade {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
        }
    `;
    document.head.appendChild(style);
});

// Preload animation
window.addEventListener('load', () => {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="spinner"></div>
    `;
    
    // Add preloader to body
    document.body.appendChild(preloader);
    
    // Add CSS for preloader
    const style = document.createElement('style');
    style.textContent = `
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        
        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(30, 136, 229, 0.2);
            border-top-color: var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        .preloader.fade-out {
            opacity: 0;
            visibility: hidden;
        }
    `;
    document.head.appendChild(style);
    
    // Fade out preloader after content is loaded
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 800);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId !== '#') {
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});