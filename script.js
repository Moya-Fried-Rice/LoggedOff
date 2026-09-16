/* ============================================================
   LoggedOff — JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- Navbar scroll effect ---
  const nav = document.querySelector('.nav');
  if (nav) {
    const handleScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // --- Mobile nav toggle ---
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.nav__mobile-menu');

  const closeMobileMenu = () => {
    if (toggle && mobileMenu) {
      toggle.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('.nav__mobile-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // --- Chatbot toggle & accessibility ---
  const chatbotToggle = document.querySelector('.chatbot__toggle');
  const chatbotWindow = document.querySelector('.chatbot__window');
  const chatbotClose = document.querySelector('.chatbot__close');

  const openChatbot = () => {
    if (chatbotWindow && chatbotToggle) {
      chatbotWindow.classList.add('open');
      chatbotToggle.style.display = 'none';
      const input = chatbotWindow.querySelector('.chatbot__input');
      if (input && !input.disabled) input.focus();
    }
  };

  const closeChatbot = () => {
    if (chatbotWindow && chatbotToggle) {
      chatbotWindow.classList.remove('open');
      chatbotToggle.style.display = 'flex';
      chatbotToggle.focus();
    }
  };

  if (chatbotToggle && chatbotWindow) {
    chatbotToggle.addEventListener('click', openChatbot);
  }

  if (chatbotClose) {
    chatbotClose.addEventListener('click', closeChatbot);
  }

  // Close chatbot and mobile menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (chatbotWindow && chatbotWindow.classList.contains('open')) {
        closeChatbot();
      }
      if (mobileMenu && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    }
  });

  // --- Active nav link synchronization ---
  const pathParts = window.location.pathname.split('/');
  let currentPage = pathParts.pop() || 'index.html';
  if (currentPage === '' || currentPage === '/') {
    currentPage = 'index.html';
  }

  const matchingDesktopLink = document.querySelector(`.nav__link[href="${currentPage}"]`);
  const matchingMobileLink = document.querySelector(`.nav__mobile-link[href="${currentPage}"]`);

  if (matchingDesktopLink || matchingMobileLink) {
    document.querySelectorAll('.nav__link, .nav__mobile-link').forEach(link => {
      link.classList.remove('active');
    });
    if (matchingDesktopLink) matchingDesktopLink.classList.add('active');
    if (matchingMobileLink) matchingMobileLink.classList.add('active');
  }

  // --- Scroll animations ---
  const animatedElements = document.querySelectorAll(
    '.card, .stat-card, .service-block, .contact-card, .product-showcase, .note-card'
  );

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
      observer.observe(el);
    });
  } else {
    // Fallback if IntersectionObserver is not supported
    animatedElements.forEach(el => {
      el.classList.add('animate-in');
    });
  }
});
