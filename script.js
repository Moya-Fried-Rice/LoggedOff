/* ============================================================
   LoggedOff — JavaScript with Gemini AI Support Chatbot
   NFC-Integrated Platform for Cyberbullying Awareness,
   Digital Safety & Mental Health Support (LPU-Cavite)
   ============================================================ */

// --- Gemini API Configuration ---
const configuredApiKey = window.LOGGEDOFF_CONFIG?.apiKey;

const GEMINI_CONFIG = {
  apiKey: configuredApiKey,
  primaryModel: 'gemini-3.5-flash-lite',
  fallbackModel: 'gemini-3.5-flash',
  endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/'
};

// --- Comprehensive System Instruction ---
const SYSTEM_INSTRUCTION = `You are "LoggedOff Support", an empathetic, compassionate, and knowledgeable AI assistant for the LoggedOff platform at Lyceum of the Philippines University – Cavite (LPU-Cavite).

CORE IDENTITY & PLATFORM DETAILS:
- Platform Name: LoggedOff
- Tagline: "Your Safe Space Beyond the Screen"
- About: Logged Off is an NFC-integrated platform designed to connect the LPU-C Community with professional mental health support, provide crucial educational resources, and foster a comprehensive culture of digital responsibility.
- Vision: To foster an inclusive and supportive LPU-Cavite community where innovative digital solutions promote mental health awareness, holistic well-being, and accessible support for every individual.
- Mission: To create a centralized and accessible mental health platform for the LPU-Cavite community through meaningful design and NFC technology, providing a safe and supportive digital space for all.
- Contact LoggedOff:
  * Facebook: https://www.facebook.com/loggedoff.cav
  * Email: loggedoff.cav@gmail.com

NFC TECHNOLOGY & KEYCHAIN:
- Tagline: "One Tap Closer to Well-Being. Access mental health resources with just one tap."
- Keychain Purpose: "Your gateway to mental health resources, anytime, anywhere." The Logged Off NFC Keychain provides a convenient way to access our mental health platform anytime, anywhere.
- How to Use: "Tap. Connect. Access Support."
  1. Enable NFC on your compatible smartphone (iOS or Android).
  2. Bring your phone close to the LoggedOff keychain.
  3. Tap the notification that appears to immediately open the Logged Off platform and discover available support services in seconds.
- Why NFC?: Making mental health support more accessible. NFC technology offers a fast, convenient, and contactless way to access mental health information and support. By integrating NFC into LoggedOff, we aim to reduce barriers to accessing reliable resources and encourage the LPU-Cavite community to prioritize mental well-being.

PARTNERED SERVICES:
1. Exalt Psychological Clinic and Consultancy
   - Contact Phone: 0927 696 0938
   - Email: exaltpsyc@gmail.com
   - Facebook Page: Exalt Psychological Clinic and Consultancy (https://www.facebook.com/exaltpsyc)
   - Office Schedule: Monday – Saturday 8:00 AM – 8:30 PM
   - Address: 2nd Floor Abacast Bldg, Bacao II, Diversion Road, General Trias, Philippines, 4107
   - Services:
     * Psychological assessment (providing psychological reports and mental health certificates)
     * Psychological interventions (psychotherapy and behavioral modification techniques to address psychological problems such as Trauma, Addiction, Anxiety, and Depression)
     * Psychological Testing (pre-employment and for diagnosis)

2. LPU-C Guidance and Testing Center (GTC)
   - Contact Email: cav-gtc@lpu.edu.ph
   - Landline: (046) 481-1400 loc. 436
   - Facebook Page: LPU Cavite – Guidance and Testing Center (https://fb.com/LPUCaviteGTC)
   - Official Department Website: https://cavite.lpu.edu.ph/about-us/departments/guidance-and-testing-center/
   - Book an Appointment:
     * Counseling / Consultation for Students: https://forms.office.com/r/zet8FejKrd
     * References for Faculty: https://forms.office.com/r/hnnGNRmtTX
   - Address: Ground Floor, Ph. 2 of the JPL Building, Lyceum of the Philippines University – Cavite
   - Office Schedule: Monday – Saturday 8:00 AM – 12:00 NN & 1:00 PM – 5:00 PM
   - Programs and Services:
     * Individual and Group Counseling
     * Interviews, Consultation, and Follow-up
     * Referral
     * Testing & Information
     * Initial Interview and Exit Survey
     * Evaluation of University Programs and Services
     * Student Development Program
     * Freshmen Enhancement Program / High School Life Adjustment
     * Mental Health and Well-being Advocacy Program
     * Career Guidance Program
     * Peer Support Program
     * Support Program for Diverse Groups (Student-Athletes, Children of OFWs, Foreign Students, Scholars)

CRISIS & EMERGENCY HOTLINES (PHILIPPINES):
*CRITICAL SAFETY PROTOCOL: If a user mentions self-harm, suicidal thoughts, extreme crisis, abuse, or urgent distress, respond immediately with empathy, validate their feelings gently, and highlight these crisis hotlines prominently:*
- National Center for Mental Health (NCMH) Crisis Hotline (24/7, Toll-Free Luzon-wide):
  * Toll-Free Landline: 1553 (Luzon-wide)
  * Landline: (02) 7989-8727
  * Globe / TM: 0917-899-8727 or 0966-351-4518
  * Smart / Sun / TNT: 0919-057-1553 or 0908-639-2672
- Hopeline Philippines (Natasha Goulbourn Foundation):
  * Landline: (02) 8804-4673
  * Globe / TM: 2919 or 0917-558-4673
  * Smart / TNT: 0918-873-4673
- In Touch Community Service:
  * Landline: (02) 8893-7603
  * Globe: 0917-800-1123
  * Smart: 0922-893-8944
- NCMH Public Health Unit (Outpatient Department):
  * Offers free psychiatric evaluation and tele-consultations: https://ncmh.gov.ph or https://ncmh-econsult.com
- PGH Department of Psychiatry & Behavioral Medicine:
  * Offers free consultations for outpatient care at Philippine General Hospital: https://pghopd.up.edu.ph
- Center for Family Ministries (CEFAM):
  * Psycho-spiritual counseling on donation basis: Landline: (02) 8426-4289 to 92
- UGAT Foundation:
  * Offers psychological support for adolescents and families: (02) 893-7603
- Lusog-Isip Mobile App:
  * DOH/USAID app providing self-care workbooks, mood tracking, and direct directory referrals to local psychologists: https://lusog-isip.ph
- Bantay Bata 163:
  * Free and confidential support for child abuse, domestic violence, counseling, mental health initiatives, and 1-hour talk therapy session upon assessment: https://www.facebook.com/bantaybata163PH

STATISTICS & CONTEXT:
- 12.5 million Filipinos (11.3 to 11.6 percent of the population) are estimated to live with a mental health condition (Global Burden of Disease, reported 2023).
- 3.6 million Filipinos were estimated to have a mental, neurological, or substance use disorder in a 2020 WHO assessment, likely an undercount per the DOH.
- 3,379 Filipinos died by suicide in 2024, up from 3,133 in 2023 (Philippine Statistics Authority, 2025).
- Always remind users: "You are not alone. Help is available."

BEHAVIORAL GUIDELINES:
1. Warmth & Validation: Greet users with care. Listen without judgment. Validate feelings of stress, anxiety, academic pressure, cyberbullying, or loneliness.
2. Direct, Actionable Help: Provide clear contact information, links, and guidance on how to book appointments (such as the LPU-C GTC forms or Exalt Clinic contact).
3. Language: Support English, Tagalog, and Taglish naturally. Respond in whichever language the user uses.
4. Formatting: Keep answers easy to skim when someone is stressed. Use bullet points and bold headers. Avoid overwhelming blocks of text.
5. Safety Disclaimer: You are a compassionate supportive AI assistant and educational guide, not a licensed medical doctor or therapist. Always encourage connecting with qualified professionals when medical or deep therapeutic intervention is needed.`;

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
    animatedElements.forEach(el => {
      el.classList.add('animate-in');
    });
  }

  // ============================================================
  // LoggedOff Chatbot Implementation
  // ============================================================
  const chatbotToggle = document.querySelector('.chatbot__toggle');
  const chatbotWindow = document.querySelector('.chatbot__window');
  const chatbotClose = document.querySelector('.chatbot__close');
  const chatbotClear = document.querySelector('.chatbot__clear');
  const chatbotBody = document.querySelector('.chatbot__body');
  const chatbotForm = document.querySelector('.chatbot__footer');
  const chatbotInput = document.querySelector('.chatbot__input');
  const chatbotSendBtn = document.querySelector('.chatbot__send');
  const quickButtons = document.querySelectorAll('.chatbot__quick-btn');

  const STORAGE_KEY = 'loggedoff_chat_history_v1';
  let conversationHistory = []; // { role: 'user'|'model', parts: [{ text: string }] }
  let isGenerating = false;

  const INITIAL_BOT_HTML = `
    Hello! 🌿 Welcome to <strong>LoggedOff</strong> — your safe space beyond the screen.<br><br>
    I can guide you to professional mental health care at <strong>LPU-Cavite GTC</strong>, share details on <strong>Exalt Clinic</strong>, explain our <strong>NFC keychain</strong>, or provide emergency crisis hotlines. How can I support you today?
  `;

  // --- Markdown Formatter & Sanitizer ---
  function formatMarkdown(text) {
    if (!text) return '';

    // 1. Escape HTML
    let out = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // 2. Bold: **text**
    out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // 3. Italic: *text*
    out = out.replace(/(^|[^*])\*(?!\s)([^*]+?)\*(?!\*)/g, '$1<em>$2</em>');

    // 4. Markdown links: [text](url)
    out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // 5. Raw URLs not already linked
    out = out.replace(/(^|[\s(])(https?:\/\/[^\s<)]+)/g, '$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>');

    // 6. Emails
    out = out.replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, '<a href="mailto:$1">$1</a>');

    // 7. Hotline: 1553
    out = out.replace(/(?<=\s|^|\()(1553)(?=\s|$|\)|\.)/g, '<a href="tel:1553" title="Call NCMH Hotline">1553</a>');

    // 8. Bulleted Lists
    const lines = out.split('\n');
    let inList = false;
    const formatted = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (/^[\*\-\•]\s+/.test(trimmed)) {
        if (!inList) {
          formatted.push('<ul class="chatbot__list">');
          inList = true;
        }
        formatted.push(`<li>${trimmed.replace(/^[\*\-\•]\s+/, '')}</li>`);
      } else {
        if (inList) {
          formatted.push('</ul>');
          inList = false;
        }
        formatted.push(line);
      }
    }
    if (inList) formatted.push('</ul>');

    return formatted.join('\n').replace(/\n\n+/g, '<br><br>').replace(/\n/g, '<br>');
  }

  // --- Render Messages ---
  function renderHistory() {
    if (!chatbotBody) return;
    chatbotBody.innerHTML = '';

    // Initial greeting
    const welcomeEl = document.createElement('div');
    welcomeEl.className = 'chatbot__message chatbot__message--bot';
    welcomeEl.innerHTML = INITIAL_BOT_HTML;
    chatbotBody.appendChild(welcomeEl);

    // Replay saved conversation
    conversationHistory.forEach(item => {
      const msgEl = document.createElement('div');
      const text = item.parts?.[0]?.text || '';
      if (item.role === 'user') {
        msgEl.className = 'chatbot__message chatbot__message--user';
        msgEl.textContent = text;
      } else {
        msgEl.className = 'chatbot__message chatbot__message--bot';
        msgEl.innerHTML = formatMarkdown(text);
      }
      chatbotBody.appendChild(msgEl);
    });

    scrollToBottom();
  }

  function scrollToBottom() {
    if (chatbotBody) {
      chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }
  }

  // --- Save / Load Session Storage ---
  function loadHistory() {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        conversationHistory = JSON.parse(saved);
      }
    } catch (e) {
      conversationHistory = [];
    }
    renderHistory();
  }

  function saveHistory() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(conversationHistory));
    } catch (e) {
      // Storage unavailable or quota exceeded
    }
  }

  // --- Show Typing Indicator ---
  function showTypingIndicator() {
    const existing = chatbotBody.querySelector('.chatbot__typing');
    if (existing) return existing;

    const typingEl = document.createElement('div');
    typingEl.className = 'chatbot__typing';
    typingEl.innerHTML = `
      <span class="chatbot__typing-dot"></span>
      <span class="chatbot__typing-dot"></span>
      <span class="chatbot__typing-dot"></span>
    `;
    chatbotBody.appendChild(typingEl);
    scrollToBottom();
    return typingEl;
  }

  function removeTypingIndicator() {
    const typingEl = chatbotBody?.querySelector('.chatbot__typing');
    if (typingEl) typingEl.remove();
  }

  // --- API Call to Gemini ---
  async function callGemini(contents) {
    const payload = {
      system_instruction: {
        parts: [{ text: SYSTEM_INSTRUCTION }]
      },
      contents: contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000
      }
    };

    // Local development may use config.js; deployed builds use the Vercel
    // function so the API key stays in server-side environment variables.
    if (!GEMINI_CONFIG.apiKey) {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `API request failed with status ${response.status}`);
      }

      const data = await response.json();
      return data.text;
    }

    const url = `${GEMINI_CONFIG.endpoint}${GEMINI_CONFIG.primaryModel}:generateContent?key=${GEMINI_CONFIG.apiKey}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        // Fallback to secondary model
        const fallbackUrl = `${GEMINI_CONFIG.endpoint}${GEMINI_CONFIG.fallbackModel}:generateContent?key=${GEMINI_CONFIG.apiKey}`;
        const fallbackRes = await fetch(fallbackUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!fallbackRes.ok) {
          const errData = await fallbackRes.json().catch(() => ({}));
          throw new Error(errData.error?.message || `API request failed with status ${fallbackRes.status}`);
        }
        const fallbackData = await fallbackRes.json();
        return fallbackData.candidates?.[0]?.content?.parts?.[0]?.text;
      }

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text;
    } catch (error) {
      console.error('LoggedOff Gemini Error:', error);
      throw error;
    }
  }

  // --- Send Message Handler ---
  async function handleSendMessage(userText) {
    const text = (userText || chatbotInput?.value || '').trim();
    if (!text || isGenerating) return;

    // Reset input
    if (chatbotInput) {
      chatbotInput.value = '';
    }

    // Append user message to state & UI
    conversationHistory.push({
      role: 'user',
      parts: [{ text: text }]
    });

    const userMsgEl = document.createElement('div');
    userMsgEl.className = 'chatbot__message chatbot__message--user';
    userMsgEl.textContent = text;
    chatbotBody.appendChild(userMsgEl);
    scrollToBottom();

    // Disable input while generating
    isGenerating = true;
    if (chatbotInput) chatbotInput.disabled = true;
    if (chatbotSendBtn) chatbotSendBtn.disabled = true;
    showTypingIndicator();

    try {
      // Call Gemini API with conversation history
      const botReply = await callGemini(conversationHistory);

      removeTypingIndicator();

      if (botReply) {
        conversationHistory.push({
          role: 'model',
          parts: [{ text: botReply }]
        });
        saveHistory();

        const botMsgEl = document.createElement('div');
        botMsgEl.className = 'chatbot__message chatbot__message--bot';
        botMsgEl.innerHTML = formatMarkdown(botReply);
        chatbotBody.appendChild(botMsgEl);
      } else {
        throw new Error('Empty response received');
      }
    } catch (err) {
      removeTypingIndicator();

      // Show friendly error message
      const errorEl = document.createElement('div');
      errorEl.className = 'chatbot__message--error';
      errorEl.innerHTML = `
        Unable to load response right now. If you need urgent support, please dial <strong>1553</strong> (NCMH Crisis Hotline).
        <br><button type="button" class="chatbot__retry-btn">Retry Message</button>
      `;
      chatbotBody.appendChild(errorEl);

      const retryBtn = errorEl.querySelector('.chatbot__retry-btn');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => {
          errorEl.remove();
          // Pop last user message and resend
          const last = conversationHistory.pop();
          if (last) {
            handleSendMessage(last.parts[0].text);
          }
        });
      }
    } finally {
      isGenerating = false;
      if (chatbotInput) {
        chatbotInput.disabled = false;
        chatbotInput.focus();
      }
      if (chatbotSendBtn) {
        chatbotSendBtn.disabled = false;
      }
      scrollToBottom();
    }
  }

  // --- Chat Window Open / Close ---
  const openChatbot = () => {
    if (chatbotWindow && chatbotToggle) {
      chatbotWindow.classList.add('open');
      chatbotToggle.style.display = 'none';
      if (chatbotInput && !chatbotInput.disabled) {
        setTimeout(() => chatbotInput.focus(), 100);
      }
      scrollToBottom();
    }
  };

  const closeChatbot = () => {
    if (chatbotWindow && chatbotToggle) {
      chatbotWindow.classList.remove('open');
      chatbotToggle.style.display = 'flex';
      chatbotToggle.focus();
    }
  };

  if (chatbotToggle) chatbotToggle.addEventListener('click', openChatbot);
  if (chatbotClose) chatbotClose.addEventListener('click', closeChatbot);

  // Clear chat history
  if (chatbotClear) {
    chatbotClear.addEventListener('click', () => {
      if (confirm('Start a new conversation?')) {
        conversationHistory = [];
        try {
          sessionStorage.removeItem(STORAGE_KEY);
        } catch (e) {}
        renderHistory();
        if (chatbotInput) chatbotInput.focus();
      }
    });
  }

  // Quick prompt buttons
  quickButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.getAttribute('data-query');
      if (query) {
        handleSendMessage(query);
      }
    });
  });

  // Submit via form (Enter key or click send)
  if (chatbotForm) {
    chatbotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSendMessage();
    });
  }

  // Close on Escape key
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

  // Initialize chat history on load
  loadHistory();

  // --- Contact Card Accordion ---
  const contactCards = document.querySelectorAll('.contact-card');
  contactCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Don't toggle if clicking a link inside the card
      if (e.target.tagName === 'A' || e.target.closest('a')) return;
      this.classList.toggle('active');
    });
  });
});
