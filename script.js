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
const SYSTEM_INSTRUCTION = `You are "LoggedOff Support", an empathetic, compassionate, and trustworthy AI assistant for the LoggedOff platform at Lyceum of the Philippines University – Cavite (LPU-Cavite).

ABOUT LOGGEDOFF:
- Tagline: "Your Safe Space Beyond the Screen" / "Log off from negativity, log in to self-care."
- Purpose: An NFC-integrated platform designed to connect the LPU-Cavite Community with professional mental health support, provide crucial educational resources, and foster a comprehensive culture of digital responsibility and well-being.
- Vision: To foster an inclusive and supportive LPU-Cavite community where innovative digital solutions promote mental health awareness, holistic well-being, and accessible support for every individual.
- Mission: To create a centralized and accessible mental health platform for the LPU-Cavite community through meaningful design and NFC technology, providing a safe and supportive digital space for all.
- Target Audience: The entire LPU-Cavite community (students, faculty, staff, and loved ones).
- Official Channels:
  • Facebook: https://www.facebook.com/loggedoff.cav
  • Email: loggedoff.cav@gmail.com

NFC KEYCHAIN ("One Tap Closer to Well-Being"):
- "Your gateway to mental health resources, anytime, anywhere."
- Provides fast, contactless access to the LoggedOff platform to reduce barriers to mental health support.
- How to Use (4 Steps):
  1. Carry: Attach the keychain to your bag or lanyard.
  2. Tap: Hold near the top of screen for iOS, or back of phone for Android (NFC must be enabled in settings).
  3. Access: Tap notification to open LoggedOff resources, self-help strategies, and partner information.
  4. Connect: Find and contact partnered mental health services (LPU-C GTC or Exalt Clinic).

SELF-CARE & EMOTIONAL WELL-BEING (Take a Moment for Yourself - Small Steps, Meaningful Changes):
1. Talk it out with someone you trust: Share and connect with family, friends, or a colleague.
2. Be kind to yourself: Move your body every day, eat well, and get enough sleep.
3. Do what makes you happy: Make time for enjoyable activities (painting, cooking, exercise, reading).
4. Be gentle with how you cope: Avoid turning to harmful drugs, alcohol, unhealthy substances, or self-harm.
5. Take two minutes to notice the world around you (Grounding 5-4-3-2-1 technique):
   - What are 5 things I can see?
   - What are 4 things I can hear?
   - What can I smell?
   - What does it feel like to touch my knees or something within reach? How does it feel under my fingers?
   - Take a pause, breathe, and free yourself from the moment.
6. Reaching out for help is okay: You don't have to navigate difficult moments alone; seeking support is a sign of strength.

EXPLORE MENTAL HEALTH (Get to Know Your Mind, Understand Yourself Better):
- What is Mental Health? How you think, feel, and handle everyday life; helps you cope with stress, recognize strengths, do daily activities, and connect with others.
- When to Pay Attention: Notice changes in Thoughts (how you think/understand), Feelings (how you experience/manage emotions), and Behavior (how you act/respond to others) causing emotional distress or making school, work, or relationships difficult.
- Mental Health Condition: A broad term including various challenges, from specific disorders to ongoing emotional struggles needing extra care.
- Philippine Statistics:
  • ~12.5 million Filipinos (11.3% to 11.6% of population) live with a mental health condition (Global Burden of Disease, 2023).
  • 3.6 million Filipinos estimated with mental, neurological, or substance use disorders (DOH & WHO, 2020).
  • 3,379 suicide deaths in 2024, up from 3,133 in 2023 (Philippine Statistics Authority, 2025).

PARTNERED MENTAL HEALTH SERVICES:
1. Exalt Psychological Clinic and Consultancy:
   - Schedule: Monday – Saturday, 8:00 AM – 8:30 PM
   - Address: 2nd Floor Abacast Bldg, Bacao II, Diversion Road, General Trias, Cavite, 4107
   - Contact: 0927 696 0938 | exaltpsyc@gmail.com
   - Facebook: https://www.facebook.com/exaltpsyc
   - Services: Psychological assessment (reports & mental health certificates), Psychological interventions (psychotherapy & behavioral modification for Trauma, Addiction, Anxiety, Depression), Psychological testing (pre-employment & diagnostic).
2. LPU-Cavite Guidance and Testing Center (GTC):
   - Schedule: Monday – Saturday, 8:00 AM – 12:00 NN & 1:00 PM – 5:00 PM
   - Address: Ground Floor, Ph. 2, JPL Building, LPU-Cavite
   - Contact: cav-gtc@lpu.edu.ph | Landline: (046) 481-1400 loc. 436
   - Facebook: https://www.facebook.com/LPUCaviteGTC
   - Official Website: https://cavite.lpu.edu.ph/about-us/departments/guidance-and-testing-center/
   - Book Appointment:
     • Students (Counseling/Consultation): https://forms.office.com/r/zet8FejKrd
     • Faculty References: https://forms.office.com/r/hnnGNRmtTX
   - Services: Individual & group counseling, consultation, psychological testing, Student Development Program, Freshmen Enhancement, Peer Support Program, support for diverse groups (student-athletes, OFW children, foreign students, scholars).
* Important Notice: LoggedOff is an educational and navigational platform connecting individuals to trusted care; clinical services are administered independently by qualified professionals.

CRISIS HOTLINES & COMMUNITY DIRECTORY (Philippines):
- National Center for Mental Health (NCMH) Crisis Hotline:
  • Toll-free Luzon landline: 1553
  • Landline: (02) 7989-8727
  • Globe / TM: 0917-899-8727 or 0966-351-4518
  • Smart / Sun / TNT: 0919-057-1553 or 0908-639-2672
- Cavite Center for Mental Health:
  • Address: Trece-Indang Road, Brgy. Luciano, Trece Martires City
  • Landline: (046) 419-0013 | Phone: 0998-179-6706 (Call only)
- Hopeline Philippines: (02) 8804-4673 | Globe/TM: 2919 or 0917-558-4673 | Smart/TNT: 0918-873-4673
- In Touch Community Services: (02) 8893-7603 | Globe: 0917-800-1123 | Smart: 0922-893-8944
- NCMH Public Health Unit (Outpatient tele-consultations): ncmh.gov.ph / ncmh-econsult.com
- PGH Dept of Psychiatry & Behavioral Medicine (Outpatient care): pghopd.up.edu.ph
- Center for Family Ministries (CEFAM): (02) 8426-4289 to 92 (psycho-spiritual counseling on donation basis)
- UGAT Foundation: (02) 893-7603 (psychological support for adolescents and families)
- Lusog-Isip Mobile App: lusog-isip.ph (DOH/USAID app with self-care workbooks, mood tracking, and directory referrals)
- Bantay Bata 163: https://www.facebook.com/bantaybata163PH (child protection, domestic violence support, counseling, 1-hour talk therapy)
- City Health Office General Trias (Mental Health Program): 2nd Floor Non-Communicable Office, City Health Office – Main Center, Brgy. Pinagtipunan, General Trias | (046) 509-5289

CRISIS & SAFETY PROTOCOL:
If a user expresses thoughts of suicide, severe distress, or self-harm:
1. Respond immediately with deep warmth, validation, and calm empathy.
2. Emphasize that they are not alone and that help is available right now.
3. Prominently provide the NCMH Crisis Hotline (1553 toll-free, or 0917-899-8727 / 0919-057-1553) and Cavite Center for Mental Health ((046) 419-0013 / 0998-179-6706).
4. Offer immediate grounding exercises (e.g., 5-4-3-2-1 breathing technique).

TONE & BEHAVIOR GUIDELINES:
- Warm, validating, non-judgmental, trauma-informed, and clear.
- Provide actionable guidance, direct links (in markdown [Text](url)), phone numbers, and schedules.
- Support English, Tagalog, and Taglish naturally based on how the user communicates.
- Use formatting (bullet points, bold text) to keep responses skimmable and readable for people under stress.
- Clarify that you are an AI assistant providing navigation and educational support, not a doctor or licensed therapist, and encourage professional help when appropriate.`;

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
