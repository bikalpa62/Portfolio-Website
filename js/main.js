// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    
    // Animate Burger
    burger.classList.toggle('toggle');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    });
});

// Project Filters (for projects.html)
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter projects
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Project Modal (for projects.html)
const modal = document.getElementById('project-modal');
const modalBody = document.querySelector('.modal-body');
const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
const closeModal = document.querySelector('.close-modal');

if (viewDetailsButtons.length > 0) {
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get project details
            const projectItem = button.closest('.project-item');
            const projectTitle = projectItem.querySelector('h3').textContent;
            const projectCategory = projectItem.querySelector('.project-category').textContent;
            const projectDescription = projectItem.querySelector('p:not(.project-category)').textContent;
            const projectTags = projectItem.querySelector('.project-tags').innerHTML;
            
            // Populate modal
            modalBody.innerHTML = `
                <h2>${projectTitle}</h2>
                <p class="modal-category">${projectCategory}</p>
                <div class="modal-image placeholder"></div>
                <div class="modal-description">
                    <h3>Project Description</h3>
                    <p>${projectDescription}</p>
                    <h3>Technologies Used</h3>
                    <div class="modal-tags">${projectTags}</div>
                </div>
            `;
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Skills Tab Navigation (for skills.html)
const skillTabs = document.querySelectorAll('.skill-category');
const skillContents = document.querySelectorAll('.skills-tab-content');

if (skillTabs.length > 0) {
    // Set default active tab
    skillTabs[0].classList.add('active');
    skillContents[0].classList.add('active');
    
    skillTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            skillTabs.forEach(tab => tab.classList.remove('active'));
            skillContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            skillContents[index].classList.add('active');
        });
    });
}

// FAQ Accordion (for contact.html)
const faqItems = document.querySelectorAll('.faq-item');

if (faqItems.length > 0) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Toggle active class
            item.classList.toggle('active');
        });
    });
}

// Contact Form Validation (for contact.html)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            formStatus.textContent = 'Please fill in all fields';
            formStatus.className = 'form-status error';
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formStatus.textContent = 'Please enter a valid email address';
            formStatus.className = 'form-status error';
            return;
        }
        
        // Form submission logic would go here (backend integration)
        // For now, just show success message
        formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
        formStatus.className = 'form-status success';
        
        // Reset form
        contactForm.reset();
    });
}

// Resume Download Button (for about.html)
const resumeBtn = document.getElementById('resume-btn');

if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // In a real implementation, this would be a link to a PDF file
        alert('Resume downloading functionality would be implemented here. Currently this is just a demonstration.');
    });
}