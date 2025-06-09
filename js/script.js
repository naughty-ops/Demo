document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  const loader = document.querySelector('.loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('fade-out');
    }, 1000);
  }

  // Mobile Menu Toggle
  
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  
  if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show");
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !isExpanded);
  });
  }
  
  
  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Video Fallback for Mobile
  const bgVideo = document.querySelector('.bg-video');
  if (bgVideo) {
    // Check if mobile and video is not playing
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      bgVideo.addEventListener('error', function() {
        // Fallback to poster image if video fails to load
        this.style.display = 'none';
        document.querySelector('.blur').style.background = 'linear-gradient(rgba(0, 51, 141, 0.8), rgba(0, 51, 141, 0.6))';
      });
    }
  }

  // Dropdown Menu
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 1200) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    });
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
});

// Toggle dropdown function
function toggleDropdown(event) {
  if (window.innerWidth > 1200) return; // Only for mobile
  
  event.preventDefault();
  const parentLi = event.target.closest('li');
  parentLi.classList.toggle('active');
}