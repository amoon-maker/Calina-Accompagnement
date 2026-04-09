document.addEventListener('DOMContentLoaded', function () {
  const html = document.documentElement;
  const langToggle = document.getElementById('langToggle');
  const themeToggle = document.getElementById('themeToggle');
  const siteLogo = document.getElementById('siteLogo');
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const formToastEl = document.getElementById('formToast');
  const formToastText = document.getElementById('formToastText');
  const formToastTime = document.getElementById('formToastTime');
  const formToastCloseBtn = document.getElementById('formToastCloseBtn');
  const year = document.getElementById('currentYear');
  const termsModal = document.getElementById('termsModal');
  const siteWrap = document.getElementById('siteWrap');
  const navbar = document.getElementById('siteNavbar');
  const navCollapse = document.getElementById('mainNav');
  // backend submission currently disabled.
  // True to be activated when i want to activate SQLite + email sending.
  const enableBackendSubmission = false;
  const contactSubmitEndpoint = '/api/contact';

  const translations = {
    en: {
      navHome: 'Home',
      navAbout: 'About',
      navSessions: 'Sessions',
      navContact: 'Contact',
      themeBtn: 'Dark mode',
      heroEyebrow: 'Emotional accompaniment',
      heroTitle: 'Calina Accompagnement',
      heroCopy: 'A space for Muslim women who have learned to carry their emotions alone and want support in what they are going through.',
      heroBook: 'Book Now',
      heroMessage: 'Message Me',
      aboutOneTitle: 'What this accompaniment makes possible',
      aboutOneItem1: 'Express what feels heavy or confusing.',
      aboutOneItem2: 'Listen deeply to what is happening within you.',
      aboutOneItem3: 'Understand your experience more clearly.',
      aboutOneItem4: 'Regain greater clarity and inner safety.',
      aboutOneItem5: 'Facilitate self-acceptance and access the inner qualities already present in you.',
      aboutOneItem6: 'At your own pace.',
      aboutTwoTitle: 'This accompaniment may be for you if...',
      aboutTwoItem1: 'You feel your emotions deeply, but you do not know what to do with them. You often feel like you are carrying this alone.',
      aboutTwoItem2: 'There may be things you cannot truly express, even with people close to you.',
      aboutTwoItem3: 'You are going through a period of confusion, emotional fatigue, or transition.',
      aboutTwoItem4: 'You feel the need for a safe space to set down what you are living through and regain more calm, clarity, and inner safety.',
      aboutTwoItem5: 'Your faith is important to you, and you want your emotional experience to coexist in harmony with it.',
      aboutThreeTitle: 'The approach',
      aboutThreeItem1: 'A trauma-informed approach.',
      aboutThreeItem2: 'Rooted in somatic presence.',
      aboutThreeItem3: 'Based on Nonviolent Communication as taught by Marshall Rosenberg.',
      aboutThreeItem4: 'Inspired by the principles of Internal Family Systems, polyvagal theory, and attachment theory.',
      aboutFourTitle: 'What this space is not',
      aboutFourP1: 'This is not a place to analyze your story or to follow the steps of a method.',
      aboutFourP2: 'Past experiences can be mentioned, but they are not the center.',
      aboutFourP3: 'It is a space to meet what is happening within you, with presence and listening.',
      aboutFiveTitle: 'What this space is',
      aboutFiveP1: 'This space offers moments to pause.',
      aboutFiveP2: 'Moments to bring presence where there is often tension, pressure, or urgency.',
      aboutFiveP3: 'A place to let what is here exist: emotions, questions, and needs.',
      aboutFiveP4: 'Without forcing anything.',
      aboutFiveP5: 'With listening.',
      aboutFiveP6: 'Moving gently, at the pace of what is alive.',
      sessionsEyebrow: 'Sessions',
      sessionsTitle: 'Session Details and Booking',
      sessionsIntro: 'Review the session format, duration, rate, payment details, availability, and reserve your space directly.',
      sessionBadgeOne: 'Framework',
      sessionCardOneTitle: 'Individual accompaniment',
      sessionCardOneText: 'Each session takes place in a clear, one-to-one format.',
      sessionOneItem1: 'Format: Individual accompaniment',
      sessionOneItem2: 'Duration: 90 minutes',
      sessionOneItem3: 'Modality: Online on Zoom',
      sessionBadgeTwo: 'Rate & Payment',
      sessionCardTwoTitle: 'Clear payment details',
      sessionCardTwoText: 'Simple and transparent details before booking.',
      sessionTwoItem1: 'Rate: $130',
      sessionTwoItem2: 'Payment: Interac e-transfer to calina.arenas@gmail.com',
      sessionTwoItem3: 'Security answer: individuel',
      sessionBadgeThree: 'Schedule & Booking',
      sessionCardThreeTitle: 'Reserve your space',
      sessionCardThreeText: 'Rhythm and frequency are adjusted together based on what feels right for you.',
      sessionThreeItem1: 'Wednesday and Thursday: 10:00 to 16:00',
      sessionThreeItem2: 'Friday: 10:00 to 14:00',
      sessionThreeItem3: 'Direct booking on Calendly',
      sessionBook: 'Reserve My Space',
      sessionTerms: 'View Terms & Conditions',
      quotesTitle: 'Client Reflections',
      quoteOne: '“During a difficult period, Calina’s attentive and caring presence was a blessing. She created a climate of trust in which I felt seen, heard, and recognized with empathy, and it was truly healing. This accompaniment helped me better understand my needs, recognize their legitimacy, and have even more clarity and lightness.”',
      quoteOneAuthor: '— Sylvie G.',
      quoteTwo: '“This session helped me bring deep wounds into awareness, which is essential for the healing process. I felt afterward more energized, more centered, and full of hope.”',
      quoteTwoAuthor: '— A. Z.',
      faqTitle: 'FAQ',
      faqIntro: 'Clear answers to common questions so you can move forward with confidence.',
      faqQ1: 'Is this therapy?',
      faqA1: 'No. This space is not psychotherapy or medical treatment. It is emotional accompaniment rooted in presence, listening, and care.',
      faqQ2: 'Who is this space intended for?',
      faqA2: 'It is intended for Muslim women seeking a softer, clearer, and more emotionally safe environment to meet what they are living.',
      faqQ3: 'How does booking work?',
      faqA3: 'The visitor can read the main details in the Sessions section and then use the Book Now button to open the official Calendly link directly.',
      contactEyebrow: 'Contact',
      contactTitle: 'Send us a message',
      contactIntro: 'If you would like to ask a question before booking, send a message here and you will receive a personal response.',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      formSend: 'Send Message',
      formNamePlaceholder: 'Your name',
      formEmailPlaceholder: 'your@email.com',
      formMessagePlaceholder: 'Write your message here...',
      formIncomplete: 'Please fill in all fields before sending your message.',
      formInvalidEmail: 'Please enter a valid email address before sending your message.',
      formReady: 'Thank you. The form is ready and can be connected later to a real submission endpoint.',
      formSending: 'Sending your message...',
      formSent: 'Thank you. Your message has been sent.',
      formStoredOnly: 'Your message was saved, but email delivery is still pending.',
      formServerError: 'We could not send your message right now. Please try again in a few minutes.',
      toastSuccess: 'Your form was submitted successfully.',
      toastSaved: 'Your message was saved. Email notification is pending.',
      toastNow: 'just now',
      toastClose: 'Close',
      contactLocationTitle: 'Location',
      contactLocation: 'Montréal-Ouest, Quebec',
      contactPhoneTitle: 'Phone',
      contactEmailTitle: 'Email',
      footerLinksTitle: 'Quick links',
      footerBook: 'Book Now',
      footerAbout: 'About',
      footerSessions: 'Sessions',
      footerFaq: 'FAQ',
      footerContact: 'Contact',
      footerTerms: 'Terms & Conditions',
      footerContactTitle: 'Contact',
      footerLocation: 'Montréal-Ouest, Quebec',
      footerNewsTitle: 'Follow our latest news',
      footerBuiltBy: 'Website developed by Amna',
      termsTitle: 'Terms & Conditions',
      termsP1: 'By accessing this website and booking a session, you acknowledge that the services offered here are part of an emotional support and presence-based accompaniment space, and do not constitute psychotherapy, medical treatment, or psychological advice.',
      termsP2: 'I am not a psychologist, physician, or mental health professional recognized by a professional order in Quebec. My accompaniment therefore does not replace medical, psychiatric, psychological, or therapeutic care. It should not be interpreted as a diagnosis, a clinical intervention, or a reserved act under Law 21.',
      termsP3: 'This space is intended to offer attentive, respectful, and compassionate presence within a framework of human and emotional support. If you are experiencing significant distress, a psychological emergency, or require clinical care, it is your responsibility to consult a qualified healthcare professional or the appropriate emergency services.',
      termsP4: 'By using this website or booking a session, you accept these limits and acknowledge that you understand the nature of the service being offered.'
    },
    fr: {
      navHome: 'Accueil',
      navAbout: 'À propos',
      navSessions: 'Séances',
      navContact: 'Contact',
      themeBtn: 'Mode sombre',
      heroEyebrow: 'Accompagnement émotionnel',
      heroTitle: 'Calina Accompagnement',
      heroCopy: 'Un espace pour femmes musulmanes qui ont appris à porter leurs émotions seules et veulent être accompagnées dans ce qu’elles vivent',
      heroBook: 'Réserver',
      heroMessage: 'M’écrire',
      aboutOneTitle: 'Ce que permet l’accompagnement',
      aboutOneItem1: 'Exprimer ce qui est lourd ou confus.',
      aboutOneItem2: 'Écouter profondément ce qui se vit en toi.',
      aboutOneItem3: 'Comprendre mieux ton expérience.',
      aboutOneItem4: 'Retrouver plus de clarté et de sécurité intérieure.',
      aboutOneItem5: 'Faciliter l’acceptation de soi et l’accès aux qualités intérieures déjà présentes en toi.',
      aboutOneItem6: 'À ton rythme.',
      aboutTwoTitle: 'Cet accompagnement est pour toi si…',
      aboutTwoItem1: 'Tu ressens beaucoup tes émotions, mais tu ne sais pas quoi en faire. Tu as souvent l’impression de porter cela seule.',
      aboutTwoItem2: 'Il y a peut-être des choses que tu n’arrives pas vraiment à exprimer, même avec les personnes proches de toi.',
      aboutTwoItem3: 'Tu traverses une période de confusion, de fatigue émotionnelle ou de transition.',
      aboutTwoItem4: 'Tu ressens le besoin d’un espace sûr pour déposer ce que tu vis pour retrouver plus de calme, de clarté et de sécurité intérieure.',
      aboutTwoItem5: 'Ta foi est importante pour toi et tu souhaites que ton expérience émotionnelle coexiste en harmonie avec elle.',
      aboutThreeTitle: 'L’approche',
      aboutThreeItem1: 'Une approche informée par le trauma.',
      aboutThreeItem2: 'Ancrée dans la présence somatique.',
      aboutThreeItem3: 'Basée sur la Communication Consciente Non Violente telle qu’enseignée par Marshall Rosenberg.',
      aboutThreeItem4: 'Inspirée des principes du système relationnel interne (Internal Family Systems), de la théorie polyvagale et de la théorie de l’attachement.',
      aboutFourTitle: 'Ce que cet espace n’est pas',
      aboutFourP1: 'Ce n’est pas un lieu pour analyser ton histoire ni pour suivre les étapes d’une méthode.',
      aboutFourP2: 'Les expériences du passé peuvent être évoquées, mais elles ne sont pas le centre.',
      aboutFourP3: 'C’est un espace pour rencontrer ce qui se vit en toi, avec présence et écoute.',
      aboutFiveTitle: 'Ce que cet espace est',
      aboutFiveP1: 'Cet espace offre des temps d’arrêt.',
      aboutFiveP2: 'Des moments pour amener de la présence là où il y a souvent de la tension, de la pression ou de l’urgence.',
      aboutFiveP3: 'Un lieu pour laisser exister ce qui est là : les émotions, les questions, les besoins.',
      aboutFiveP4: 'Sans rien forcer.',
      aboutFiveP5: 'Avec écoute.',
      aboutFiveP6: 'En avançant doucement, au rythme du vivant.',
      sessionsEyebrow: 'Séances',
      sessionsTitle: 'Détails des séances et réservation',
      sessionsIntro: 'Tu trouveras ici le format, la durée, le tarif, les modalités de paiement, les horaires, et un accès direct pour réserver.',
      sessionBadgeOne: 'Le cadre',
      sessionCardOneTitle: 'Accompagnement individuel',
      sessionCardOneText: 'Chaque séance se déroule dans un cadre clair, en individuel.',
      sessionOneItem1: 'Format : Accompagnement individuel',
      sessionOneItem2: 'Durée : 90 minutes',
      sessionOneItem3: 'Modalité : en ligne sur Zoom',
      sessionBadgeTwo: 'Tarif et paiement',
      sessionCardTwoTitle: 'Détails de paiement',
      sessionCardTwoText: 'Des informations simples et transparentes avant la réservation.',
      sessionTwoItem1: 'Tarif : 130 $',
      sessionTwoItem2: 'Paiement : virement Interac à calina.arenas@gmail.com',
      sessionTwoItem3: 'MP : individuel',
      sessionBadgeThree: 'Horaires et réservation',
      sessionCardThreeTitle: 'Réserve ton espace',
      sessionCardThreeText: 'Le rythme et la fréquence sont ajustés ensemble, selon ce qui est juste pour toi.',
      sessionThreeItem1: 'Mercredi et jeudi : 10h00 à 16h00',
      sessionThreeItem2: 'Vendredi : 10h00 à 14h00',
      sessionThreeItem3: 'Réservation directe via Calendly',
      sessionBook: 'Je réserve mon espace',
      sessionTerms: 'Voir les termes et conditions',
      quotesTitle: 'Paroles de clientes',
      quoteOne: '« Lors d’une période difficile, la présence attentive et bienveillante de Calina a été une bénédiction. Elle a su créer un climat de confiance dans lequel je me suis sentie vue, entendue et reconnue avec empathie et ça a été vraiment guérisseur. Cet accompagnement m’a permis de mieux comprendre mes besoins, d’en reconnaître la légitimité et d’avoir toujours plus de clarté et de légèreté. »',
      quoteOneAuthor: '— Sylvie G.',
      quoteTwo: '« Cette séance m’a aidée à mettre en conscience des blessures profondes, ce qui est essentiel pour le processus de guérison. Je me suis sentie ensuite plus énergisée, plus centrée et pleine d’espoir. »',
      quoteTwoAuthor: '— A. Z.',
      faqTitle: 'Questions fréquentes',
      faqIntro: 'Des réponses claires aux questions fréquentes pour avancer avec confiance.',
      faqQ1: 'Est-ce de la thérapie ?',
      faqA1: 'Non. Cet espace n’est ni de la psychothérapie ni un traitement médical. Il s’agit d’un accompagnement émotionnel fondé sur la présence, l’écoute, et le soin.',
      faqQ2: 'À qui s’adresse cet espace ?',
      faqA2: 'Il s’adresse aux femmes musulmanes qui recherchent un environnement plus doux, plus clair, et émotionnellement sécurisant pour rencontrer ce qu’elles vivent.',
      faqQ3: 'Comment fonctionne la réservation ?',
      faqA3: 'La visiteuse peut lire les principaux détails dans la section Séances puis utiliser le bouton Réserver pour ouvrir directement le lien officiel Calendly.',
      contactEyebrow: 'Contact',
      contactTitle: 'Envoyez-nous un message',
      contactIntro: 'Si tu souhaites poser une question avant de réserver, tu peux envoyer un message ici et recevoir une réponse personnalisée.',
      formName: 'Nom',
      formEmail: 'Courriel',
      formMessage: 'Message',
      formSend: 'Envoyer le message',
      formNamePlaceholder: 'Votre nom',
      formEmailPlaceholder: 'votrecourriel@email.com',
      formMessagePlaceholder: 'Écrivez votre message ici...',
      formIncomplete: 'Veuillez remplir tous les champs avant d’envoyer votre message.',
      formInvalidEmail: 'Veuillez entrer une adresse courriel valide avant d’envoyer votre message.',
      formReady: 'Merci. Le formulaire est prêt et pourra être relié plus tard à une vraie solution d’envoi.',
      formSending: 'Envoi de votre message...',
      formSent: 'Merci. Votre message a été envoyé.',
      formStoredOnly: 'Votre message a été enregistré, mais l’envoi du courriel est en attente.',
      formServerError: 'Nous ne pouvons pas envoyer votre message pour le moment. Veuillez réessayer dans quelques minutes.',
      toastSuccess: 'Votre formulaire a été soumis avec succès.',
      toastSaved: 'Votre message a été enregistré. La notification par courriel est en attente.',
      toastNow: 'à l’instant',
      toastClose: 'Fermer',
      contactLocationTitle: 'Lieu',
      contactLocation: 'Montréal-Ouest, Québec',
      contactPhoneTitle: 'Téléphone',
      contactEmailTitle: 'Courriel',
      footerLinksTitle: 'Liens rapides',
      footerBook: 'Réserver',
      footerAbout: 'À propos',
      footerSessions: 'Séances',
      footerFaq: 'FAQ',
      footerContact: 'Contact',
      footerTerms: 'Termes et conditions',
      footerContactTitle: 'Contact',
      footerLocation: 'Montréal-Ouest, Québec',
      footerNewsTitle: 'Suivre nos nouvelles',
      footerBuiltBy: 'Site développé par Amna',
      termsTitle: 'Termes et conditions',
      termsP1: 'En accédant à ce site web et en réservant une séance, vous reconnaissez que les services offerts ici relèvent d’un espace d’accompagnement émotionnel et de présence, et ne constituent ni un service de psychothérapie, ni un traitement médical, ni un conseil psychologique.',
      termsP2: 'Je ne suis ni psychologue, ni médecin, ni professionnelle de la santé mentale reconnue par un ordre professionnel au Québec. Mon accompagnement ne remplace donc pas un suivi médical, psychiatrique, psychologique ou thérapeutique. Il ne doit pas être interprété comme un diagnostic, une intervention clinique, ou un acte réservé au sens de la Loi 21.',
      termsP3: 'Cet espace a pour intention d’offrir une présence attentive, respectueuse, et bienveillante dans un cadre de soutien humain et émotionnel. Si vous vivez une détresse importante, une urgence psychologique, ou si vous avez besoin d’une prise en charge clinique, il est de votre responsabilité de consulter un professionnel de la santé qualifié ou les services d’urgence appropriés.',
      termsP4: 'En utilisant ce site ou en réservant une séance, vous acceptez ces limites et reconnaissez comprendre la nature du service proposé.'
    }
  };

  function applyLanguage(lang) {
    html.setAttribute('lang', lang);

    // Update all translatable text nodes in one pass.
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        element.setAttribute('placeholder', translations[lang][key]);
      }
    });

    if (langToggle) {
      langToggle.textContent = lang === 'en' ? 'FR' : 'EN';
    }

    if (formToastTime && translations[lang].toastNow) {
      formToastTime.textContent = translations[lang].toastNow;
    }

    if (formToastCloseBtn && translations[lang].toastClose) {
      formToastCloseBtn.setAttribute('aria-label', translations[lang].toastClose);
    }

    if (formToastText && translations[lang].toastSuccess && formToastEl && !formToastEl.classList.contains('show')) {
      formToastText.textContent = translations[lang].toastSuccess;
    }

    localStorage.setItem('calina-language', lang);
    updateThemeButton();
  }

  function showFormToast(message, lang, variant) {
    if (!formToastEl || !window.bootstrap || typeof window.bootstrap.Toast !== 'function') return;

    if (formToastText) {
      formToastText.textContent = message;
    }

    if (formToastTime && translations[lang].toastNow) {
      formToastTime.textContent = translations[lang].toastNow;
    }

    if (formToastCloseBtn && translations[lang].toastClose) {
      formToastCloseBtn.setAttribute('aria-label', translations[lang].toastClose);
    }

    // Keep visual feedback explicit: red for validation errors, green for success.
    formToastEl.classList.remove('toast-success', 'toast-error');
    formToastEl.classList.add(variant === 'error' ? 'toast-error' : 'toast-success');

    const toast = bootstrap.Toast.getOrCreateInstance(formToastEl);
    toast.show();
  }

  async function sendContactFormData(payload) {
    const response = await fetch(contactSubmitEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    let responseBody = null;
    try {
      responseBody = await response.json();
    } catch (_error) {
      // Ignore JSON parsing errors and fail with a generic message below.
    }

    if (!response.ok || !responseBody || !responseBody.ok) {
      throw new Error(responseBody?.error || 'Unable to send your message right now.');
    }

    return responseBody;
  }

  function updateThemeButton() {
    if (!themeToggle) return;

    const currentLang = localStorage.getItem('calina-language') || 'en';
    const currentTheme = localStorage.getItem('calina-theme') || 'light';
    const isDark = currentTheme === 'dark';

    const label = currentLang === 'fr'
      ? (isDark ? 'Activer le mode clair' : 'Activer le mode sombre')
      : (isDark ? 'Activate light mode' : 'Activate dark mode');

    themeToggle.innerHTML = `<span class="mode-icon" aria-hidden="true">${isDark ? '☀' : '☾'}</span>`;
    themeToggle.setAttribute('aria-label', label);
    themeToggle.setAttribute('title', label);
  }

  function applyTheme(mode) {
    const darkMode = mode === 'dark';
    document.body.classList.toggle('dark-mode', darkMode);

    if (siteLogo) {
      siteLogo.src = darkMode
        ? 'images/calina-logo-darkmode.png'
        : 'images/calina-logo.webp';
    }

    localStorage.setItem('calina-theme', mode);
    updateThemeButton();
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (termsModal && siteWrap) {
    termsModal.addEventListener('show.bs.modal', function () {
      siteWrap.classList.add('is-blurred');
    });

    termsModal.addEventListener('hidden.bs.modal', function () {
      siteWrap.classList.remove('is-blurred');
    });
  }

  if (form && feedback) {
    form.addEventListener('submit', async function (event) {
      event.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const submitButton = form.querySelector('button[type="submit"]');
      const lang = localStorage.getItem('calina-language') || 'en';
      const incompleteMessage = translations[lang].formIncomplete;
      const invalidEmailMessage = translations[lang].formInvalidEmail;
      const sendingMessage = translations[lang].formSending;
      const readyMessage = translations[lang].formReady;
      const sentMessage = translations[lang].formSent;
      const storedOnlyMessage = translations[lang].formStoredOnly;
      const serverErrorMessage = translations[lang].formServerError;

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        feedback.textContent = incompleteMessage;
        feedback.className = 'small text-danger';
        showFormToast(incompleteMessage, lang, 'error');
        return;
      }

      // HTML5 validity handles the email pattern; we surface a custom message.
      if (!email.checkValidity()) {
        feedback.textContent = invalidEmailMessage;
        feedback.className = 'small text-danger';
        showFormToast(invalidEmailMessage, lang, 'error');
        return;
      }

      if (!enableBackendSubmission) {
        feedback.textContent = readyMessage;
        feedback.className = 'small text-success';
        showFormToast(translations[lang].toastSuccess, lang, 'success');

        form.reset();
        message.dispatchEvent(new Event('input', { bubbles: true }));
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
      }

      feedback.textContent = sendingMessage;
      feedback.className = 'small text-secondary';

      try {
        const result = await sendContactFormData({
          name: name.value.trim(),
          email: email.value.trim(),
          message: message.value.trim(),
        });

        const successMessage = result.emailed ? sentMessage : storedOnlyMessage;
        const successToast = result.emailed
          ? translations[lang].toastSuccess
          : translations[lang].toastSaved;

        feedback.textContent = successMessage;
        feedback.className = 'small text-success';
        showFormToast(successToast, lang, 'success');

        form.reset();
        message.dispatchEvent(new Event('input', { bubbles: true }));
      } catch (error) {
        const safeErrorMessage = (error && error.message) ? error.message : serverErrorMessage;
        feedback.textContent = safeErrorMessage;
        feedback.className = 'small text-danger';
        showFormToast(safeErrorMessage, lang, 'error');
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
      }
    });
  }

  if (navCollapse && window.bootstrap && typeof window.bootstrap.Collapse === 'function') {
    const bsCollapse = new bootstrap.Collapse(navCollapse, { toggle: false });
    const navLinks = navCollapse.querySelectorAll('.nav-link');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992) {
          bsCollapse.hide();
        }
      });
    });
  }

  if (navbar) {
    const syncNavbarState = () => {
      navbar.classList.toggle('is-scrolled', window.scrollY > 20);
    };

    syncNavbarState();
    window.addEventListener('scroll', syncNavbarState, { passive: true });
  }

 const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -10% 0px'
    });

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => {
      element.classList.add('is-visible');
    });
  }

  const savedLanguage = localStorage.getItem('calina-language') || 'en';
  const savedTheme = localStorage.getItem('calina-theme') || 'light';
  applyLanguage(savedLanguage);
  applyTheme(savedTheme);

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      const currentLang = localStorage.getItem('calina-language') || 'en';
      applyLanguage(currentLang === 'en' ? 'fr' : 'en');
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const currentTheme = localStorage.getItem('calina-theme') || 'light';
      applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
  }

  // Character count & 500-character limit for the message textarea
  (function () {
    const messageTextarea = document.getElementById('message');
    const wordCountEl = document.getElementById('wordCount');
    const MAX_CHARS = 500;

    function countChars(text) {
      return text.length;
    }

    function updateCharCount() {
      if (!messageTextarea || !wordCountEl) return;
      const chars = countChars(messageTextarea.value);
      wordCountEl.textContent = `${chars} / ${MAX_CHARS} characters`;
      if (chars > MAX_CHARS) {
        wordCountEl.classList.add('text-danger');
        wordCountEl.classList.remove('text-muted');
      } else {
        wordCountEl.classList.remove('text-danger');
        wordCountEl.classList.add('text-muted');
      }
    }

    if (messageTextarea) {
      messageTextarea.addEventListener('input', function (e) {
        const chars = countChars(messageTextarea.value);
        if (chars > MAX_CHARS) {
          const cursorPos = messageTextarea.selectionStart;
          messageTextarea.value = messageTextarea.value.slice(0, MAX_CHARS);
          messageTextarea.setSelectionRange(Math.min(cursorPos, MAX_CHARS), Math.min(cursorPos, MAX_CHARS));
        }
        updateCharCount();
      });
      updateCharCount();
    }
  })();
});
