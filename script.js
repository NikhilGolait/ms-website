// const menuOpenButton = document.querySelector("#menu-open-button");
// const menuCloseButton = document.querySelector("#menu-close-button");
// menuOpenButton.addEventListener("click", () => {
//     document.body.classList.toggle("show-mobile-menu");
// });


// menuCloseButton.addEventListener("click", () => menuOpenButton.click
// ());




// document.addEventListener("scroll", function () {
//     let sections = document.querySelectorAll("section");
//     sections.forEach((section, index) => {
//         let position = section.getBoundingClientRect().top;
//         let windowHeight = window.innerHeight;
//         if (position < windowHeight - 100) {
//             section.classList.add("visible");
//         }
//     });
// });









const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');
const menu = document.querySelector('.menu');
const dropdown = document.querySelector('.dropdown');
const languageBt = document.querySelector('.language-bt');
const dropdownContent = document.querySelector('.dropdown-content');
const navLinks = document.querySelectorAll('.menu .link');
const sections = document.querySelectorAll('section');
const categoryCards = document.querySelectorAll('.category-card');


menuOpenButton.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden'; 
});

menuCloseButton.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = ''; 
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });
});


languageBt.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
});


document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdownContent.classList.remove('show');
    }
});


function change1() {
    document.getElementById("Home").textContent = "Home";
    document.getElementById("Dashboard").textContent = "Dashboard";
    document.getElementById("pc").textContent = "Stock";
    document.getElementById("Schemes").textContent = "Spare Parts";
    document.getElementById("Login").textContent = "Login";
    document.getElementById("SignUp").textContent = "Sign Up";
    languageBt.innerHTML = '🌐 English';
    dropdownContent.classList.remove('show');
}

function change2() {
    document.getElementById("Home").textContent = "होम";
    document.getElementById("Dashboard").textContent = "डैशबोर्ड";
    document.getElementById("pc").textContent = "स्टॉक";
    document.getElementById("Schemes").textContent = "स्पेयर पार्ट्स";
    document.getElementById("Login").textContent = "लॉग इन";
    document.getElementById("SignUp").textContent = "साइन अप";
    languageBt.innerHTML = '🌐 हिन्दी';
    dropdownContent.classList.remove('show');
}

function change3() {
    document.getElementById("Home").textContent = "मुख्यपृष्ठ";
    document.getElementById("Dashboard").textContent = "डॅशबोर्ड";
    document.getElementById("pc").textContent = "स्टॉक";
    document.getElementById("Schemes").textContent = "स्पेअर पार्ट्स";
    document.getElementById("Login").textContent = "लॉगिन";
    document.getElementById("SignUp").textContent = "साइन अप";
    languageBt.innerHTML = '🌐 मराठी';
    dropdownContent.classList.remove('show');
}


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});


categoryCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});





document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('.head');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});







const lazyImages = document.querySelectorAll('.image-container img');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '200px 0px'
    });

    lazyImages.forEach(img => {
        if (!img.classList.contains('loaded')) {
            imageObserver.observe(img);
        }
    });
}


document.querySelector('.footer-bottom p').innerHTML = 
    `&copy; ${new Date().getFullYear()} Maruti Suzuki. All Rights Reserved.`;


const loginLink = document.getElementById('Login');
const signupLink = document.getElementById('SignUp');

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Login functionality will be implemented here');
    
});

signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Sign Up functionality will be implemented here');
    
});


function simulateInventoryUpdate() {
    const inventoryItems = ['Engine Parts', 'Transmission', 'Brake Systems', 'Electrical Components', 'Suspension'];
    const randomItem = inventoryItems[Math.floor(Math.random() * inventoryItems.length)];
    const randomQuantity = Math.floor(Math.random() * 100) + 1;
    
    console.log(`AI Inventory Update: ${randomQuantity} units of ${randomItem} processed`);
}
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
    }, 2000);
});


setInterval(simulateInventoryUpdate, 5000);



