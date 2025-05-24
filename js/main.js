document.addEventListener('DOMContentLoaded', () => {
  // Language Translations
  const translations = {
    ar: {
      'title': 'PDCA لمكافحة الآفات - حلول إدارة الآفات الاحترافية',
      'nav-home': 'الرئيسية',
      'nav-services': 'الخدمات',
      'nav-who': 'من نحن',
      'nav-why': 'لماذا نحن',
      'nav-deals': 'عملياتنا',
      'nav-previous': 'أعمالنا السابقة',
      'nav-contact': 'اتصل بنا',
      'lang-toggle': 'English',
      'hero-title': 'مرحبًا بكم في <span class="text-pdca-green">PDCA</span>',
      'hero-subtitle': 'حلول مكافحة الآفات الاحترافية',
      'hero-description': 'نقدم خدمات إدارة الآفات الفعالة للعقارات السكنية والتجارية، باستخدام أحدث الأساليب والمعدات لضمان بقاء مساحتك خالية من الآفات.',
      'hero-cta': 'خدماتنا',
      'services-title': 'خدماتنا',
      'services-description': 'تتشرف شركة PDCA لمكافحة الآفات بتقديم أفضل خدمات مكافحة الآفات لكم. وذلك لأننا نمتلك أفضل فريق متخصص ومجهز جيدًا يستخدم أحدث الأساليب لمكافحة جميع أنواع الحشرات. نحن نتميز في مكافحة القوارض، الحشرات الطائرة، والحشرات الزاحفة.',
      'service-ant-title': 'إبادة النمل',
      'service-ant-description': 'القضاء الكامل على مستعمرات النمل باستخدام علاجات متخصصة',
      'service-moth-title': 'إبادة العث',
      'service-moth-description': 'مكافحة فعالة للعث لحماية الأقمشة والمواد الغذائية',
      'service-mosquito-title': 'إبادة البعوض',
      'service-mosquito-description': 'مكافحة شاملة للبعوض للأماكن الداخلية والخارجية',
      'service-beetle-title': 'إبادة الخنافس',
      'service-beetle-description': 'علاجات مستهدفة لأنواع الخنافس المختلفة والتفشي',
      'services-additional': 'نقدم لكم أفضل خدمات مكافحة الآفات للشركات، المصانع، المراكز التجارية، الفنادق والمنتجعات السياحية، الشقق، الفلل، المطاعم، المقاهي، المستشفيات، المدارس، السفن السياحية، وأكثر.',
      'services-commercial': 'العقارات التجارية',
      'services-residential': 'العقارات السكنية',
      'services-hospitality': 'صناعة الضيافة',
      'services-healthcare': 'المستشفيات والمراكز الصحية',
      'who-title': 'من نحن',
      'who-description-1': 'كلمة PDCA مأخوذة من شهادة ISO 9001، وهي إحدى أدوات تنظيم العمليات التشغيلية. وتعني (التخطيط - التنفيذ - التحقق - التصحيح، أو إعادة المحاولة في حال الفشل).',
      'who-description-2': 'لذلك، منذ بداية تشكيل الفريق وتأسيسه وحتى رضا العملاء، تسير الأمور بهذه الطريقة — الطريقة للوصول إلى أعلى مستويات الرضا.',
      'who-plan-title': 'التخطيط:',
      'who-plan-description': 'نقوم بتحليل احتياجات مكافحة الآفات الخاصة بك بعناية',
      'who-do-title': 'التنفيذ:',
      'who-do-description': 'ننفذ حلول مكافحة الآفات المستهدفة',
      'who-check-title': 'التحقق:',
      'who-check-description': 'نراقب ونقيم الفعالية',
      'who-act-title': 'التصحيح:',
      'who-act-description': 'نحسن نهجنا للحصول على أفضل النتائج',
      'why-title': 'لماذا تختارنا',
      'why-description': 'تمتلك شركة PDCA فريقًا متكاملًا متخصصًا في مبيدات الصحة العامة. تم تشكيل الفريق من خلال التخصص ولديه خبرة تصل إلى 15 عامًا في سلامة الأغذية ومكافحة الآفات. بالإضافة إلى ذلك، يوجد فريق مراقبة الجودة ومنظم العمليات الذي يضمن الجودة من خلال تقارير أسبوعية وشهرية وسنوية، مدعومة بالإحصاءات التي تشير إلى نجاح البرنامج والإجراءات التصحيحية في حالة الأخطاء.',
      'why-specialized-title': 'فريق متخصص',
      'why-specialized-description': 'فريق مكافحة الآفات المتكامل متخصص في مبيدات الصحة العامة',
      'why-experience-title': 'خبرة تزيد عن 15 عامًا',
      'why-experience-description': 'فريق تم تشكيله من خلال التخصص مع خبرة تصل إلى 15 عامًا',
      'why-quality-title': 'مراقبة الجودة',
      'why-quality-description': 'فريق مراقبة الجودة المخصص لضمان التميز في الخدمة',
      'why-reporting-title': 'تقارير منتظمة',
      'why-reporting-description': 'تقارير أسبوعية وشهرية وسنوية مدعومة بالإحصاءات',
      'why-success-title': 'تتبع النجاح',
      'why-success-description': 'إحصاءات شاملة تشير إلى نجاح البرنامج',
      'why-foodsafety-title': 'خبرة في سلامة الأغذية',
      'why-foodsafety-description': 'متخصصون في سلامة الأغذية ومكافحة الآفات الشاملة',
      'deals-title': 'عملياتنا',
      'deals-description': 'يقوم الفريق بإجراء فحص الموقع، وإجراء تقييم المخاطر لتحديد البرنامج، وتحديد تكلفة العقد، وبعد الاتفاق، يتم تنفيذ البرنامج. يتم مراقبة الفريق من قبل مدير الموقع وموظف PDCA.',
      'deals-step1-title': 'الخطوة 1: فحص الموقع',
      'deals-step1-description': 'يقوم فريقنا بإجراء فحص شامل للموقع لفهم نطاق العمل المطلوب.',
      'deals-step2-title': 'الخطوة 2: تقييم المخاطر',
      'deals-step2-description': 'نقوم بإجراء تقييم مفصل للمخاطر لتحديد البرنامج المناسب لاحتياجاتك.',
      'deals-step3-title': 'الخطوة 3: الاتفاق على العقد',
      'deals-step3-description': 'بعد تحديد تكلفة العقد، نتابع بعد الاتفاق مع جميع الأطراف.',
      'deals-step4-title': 'الخطوة 4: تنفيذ البرنامج',
      'deals-step4-description': 'ننفذ برنامج مكافحة الآفات مع فريقنا الخبير والمعدات.',
      'deals-step5-title': 'الخطوة 5: المراقبة والتقارير',
      'deals-step5-description': 'يقوم مدير الموقع وموظف PDCA بمراقبة التقدم مع تقارير مفصلة.',
      'deals-step6-title': 'الخطوة 6: تحليل الأداء',
      'deals-step6-description': 'نولد الإحصاءات، ونتتبع التقدم، ونناقش حالة البرنامج في اجتماعات مشتركة.',
      'deals-improvement-title': 'عملية التحسين المستمر',
      'deals-improvement-description': 'يتم تقديم تقرير بعد كل خدمة، ويتم تسجيل الزيارات الأسبوعية والمرور، ويتم إنشاء الإحصاءات، ويتم مناقشة حالة البرنامج خلال اجتماع مشترك بين مدير الموقع وPDCA. هذا يضمن الشفافية والتحسين المستمر في خدمات مكافحة الآفات لدينا.',
      'deals-weekly': 'تقارير أسبوعية',
      'deals-statistics': 'تحليل إحصائي',
      'deals-meetings': 'اجتماعات مشتركة',
      'deals-progress': 'تتبع التقدم',
      'previous-title': 'أعمالنا السابقة',
      'previous-description': 'نحن فخورون بتقديم خدمات مكافحة الآفات لمجموعة واسعة من الشركاء الموقرين عبر مختلف الصناعات. إليك بعض الشركات التي عملنا معها.',
      'contact-title': 'اتصل بنا',
      'contact-description': 'هل لديك أسئلة أو جاهز لجدولة خدمة مكافحة الآفات؟ تواصل مع فريقنا من الخبراء اليوم.',
      'contact-form-title': 'أرسل لنا رسالة',
      'form-success': 'شكرًا لك! تم إرسال رسالتك. سنرد عليك قريبًا.',
      'form-name': 'الاسم الكامل',
      'form-email': 'عنوان البريد الإلكتروني',
      'form-phone': 'رقم الهاتف',
      'form-message': 'رسالتك',
      'form-submit': 'إرسال الرسالة',
      'contact-info-title': 'PDCA لمكافحة الآفات',
      'contact-info-subtitle': 'حلول إدارة الآفات الاحترافية',
      'contact-info-heading': 'معلومات الاتصال',
      'contact-email-title': 'البريد الإلكتروني',
      'contact-phone-title': 'الهاتف',
      'contact-address-title': 'العنوان',
      'contact-address': 'مدينة أكتوبر - سيتي ستار مول - B3 - F3',
      'contact-hours-title': 'ساعات العمل',
      'contact-hours-weekdays': 'الأحد - الخميس',
      'contact-hours-weekends': 'الجمعة - السبت',
      'footer-description': 'حلول مكافحة الآفات الاحترافية باستخدام أحدث الأساليب والمعدات لضمان إدارة فعالة للآفات لكل من العقارات السكنية والتجارية.',
      'footer-links-title': 'روابط سريعة',
      'footer-services-title': 'الخدمات',
      'footer-service-residential': 'مكافحة الآفات السكنية',
      'footer-service-commercial': 'مكافحة الآفات التجارية',
      'footer-service-termite': 'مكافحة النمل الأبيض',
      'footer-service-rodent': 'مكافحة القوارض',
      'footer-service-mosquito': 'مكافحة البعوض',
      'footer-service-bedbug': 'علاج بق الفراش',
      'footer-contact-title': 'معلومات الاتصال',
      'footer-copyright': '© 2025 PDCA لمكافحة الآفات. جميع الحقوق محفوظة.',
      'footer-iso': 'شركة معتمدة بشهادة ISO 9001'
    },
    en: {
      'title': 'PDCA Pest Control - Professional Pest Management Solutions',
      'nav-home': 'Home',
      'nav-services': 'Services',
      'nav-who': 'Who We Are',
      'nav-why': 'Why Us',
      'nav-deals': 'Our Process',
      'nav-previous': 'Previous Work',
      'nav-contact': 'Contact',
      'lang-toggle': 'العربية',
      'hero-title': 'Welcome to <span class="text-pdca-green">PDCA</span>',
      'hero-subtitle': 'Professional Pest Control Solutions',
      'hero-description': 'We provide effective pest management services for residential and commercial properties, using the latest methods and equipment to ensure your space remains pest-free.',
      'hero-cta': 'Our Services',
      'services-title': 'Our Services',
      'services-description': 'PDCA Pest Control Company is honored to provide you with the best pest control services. This is because we have the best specialized and well-equipped team using the latest methods to combat all types of insects. We excel in fighting rodents, flying insects, and crawling insects.',
      'service-ant-title': 'Ant Extermination',
      'service-ant-description': 'Complete elimination of ant colonies with specialized treatments',
      'service-moth-title': 'Moth Extermination',
      'service-moth-description': 'Effective moth control to protect your fabrics and foodstuffs',
      'service-mosquito-title': 'Mosquito Extermination',
      'service-mosquito-description': 'Comprehensive mosquito control for indoor and outdoor spaces',
      'service-beetle-title': 'Beetle Extermination',
      'service-beetle-description': 'Targeted treatments for various beetle species and infestations',
      'services-additional': 'We offer you the best pest control services for companies, factories, commercial malls, hotels and tourist resorts, apartments, villas, restaurants, cafes, hospitals, schools, cruise ships, and more.',
      'services-commercial': 'Commercial Properties',
      'services-residential': 'Residential Properties',
      'services-hospitality': 'Hospitality Industry',
      'services-healthcare': 'Healthcare Facilities',
      'who-title': 'Who We Are',
      'who-description-1': 'The word PDCA is derived from the ISO 9001 certificate, and it is one of the tools for organizing operational processes. It means (Plan - Do - Check - Act, or retry if it fails).',
      'who-description-2': 'Therefore, from the beginning of forming the team and establishing it to customer satisfaction, things proceed with this method — the way to reach the highest levels of satisfaction.',
      'who-plan-title': 'Plan:',
      'who-plan-description': 'We carefully analyze your specific pest control needs',
      'who-do-title': 'Do:',
      'who-do-description': 'We implement targeted pest control solutions',
      'who-check-title': 'Check:',
      'who-check-description': 'We monitor and evaluate the effectiveness',
      'who-act-title': 'Act:',
      'who-act-description': 'We refine our approach for optimal results',
      'why-title': 'Why Choose Us',
      'why-description': 'PDCA Company has a fully integrated pest control team specialized in public health pesticides. The team has been formed through specialization and has up to 15 years of experience in food safety and pest control. In addition, there is a quality monitoring team and an operations organizer who ensures quality through weekly, monthly, and yearly reports, supported by statistics that indicate the program’s success and corrective actions in case of errors.',
      'why-specialized-title': 'Specialized Team',
      'why-specialized-description': 'Fully integrated pest control team specialized in public health pesticides',
      'why-experience-title': '15+ Years Experience',
      'why-experience-description': 'Team formed through specialization with up to 15 years of experience',
      'why-quality-title': 'Quality Monitoring',
      'why-quality-description': 'Dedicated quality monitoring team ensuring service excellence',
      'why-reporting-title': 'Regular Reporting',
      'why-reporting-description': 'Weekly, monthly, and yearly reports backed by statistics',
      'why-success-title': 'Success Tracking',
      'why-success-description': 'Comprehensive statistics that indicate program success',
      'why-foodsafety-title': 'Food Safety Expertise',
      'why-foodsafety-description': 'Specialized in food safety and comprehensive pest control',
      'deals-title': 'Our Process',
      'deals-description': 'The team conducts a site inspection, conducts a risk assessment to determine the program, determines the contract cost, and, after agreement, implements the program. The team is monitored by a site manager and a PDCA employee.',
      'deals-step1-title': 'Step 1: Site Inspection',
      'deals-step1-description': 'Our team conducts a thorough site inspection to understand the scope of work required.',
      'deals-step2-title': 'Step 2: Risk Assessment',
      'deals-step2-description': 'We perform a detailed risk assessment to determine the appropriate program for your needs.',
      'deals-step3-title': 'Step 3: Contract Agreement',
      'deals-step3-description': 'After determining the contract cost, we proceed upon agreement with all parties.',
      'deals-step4-title': 'Step 4: Program Implementation',
      'deals-step4-description': 'We implement the pest control program with our expert team and equipment.',
      'deals-step5-title': 'Step 5: Monitoring & Reporting',
      'deals-step5-description': 'A site manager and PDCA employee monitor progress with detailed reports.',
      'deals-step6-title': 'Step 6: Performance Analysis',
      'deals-step6-description': 'We generate statistics, track progress, and discuss program status in joint meetings.',
      'deals-improvement-title': 'Continuous Improvement Process',
      'deals-improvement-description': 'A report is presented after each service, traffic and weekly visits are recorded, statistics are generated, and the program status is discussed during a joint meeting between the site manager and PDCA. This ensures transparency and continuous improvement in our pest control services.',
      'deals-weekly': 'Weekly Reports',
      'deals-statistics': 'Statistical Analysis',
      'deals-meetings': 'Joint Meetings',
      'deals-progress': 'Progress Tracking',
      'previous-title': 'Our Previous Work',
      'previous-description': 'We are proud to have provided pest control services to a wide range of esteemed partners across various industries. Here are some of the companies we’ve worked with.',
      'contact-title': 'Contact Us',
      'contact-description': 'Have questions or ready to schedule a pest control service? Get in touch with our team of experts today.',
      'contact-form-title': 'Send Us a Message',
      'form-success': 'Thank you! Your message has been sent. We\'ll get back to you soon.',
      'form-name': 'Full Name',
      'form-email': 'Email Address',
      'form-phone': 'Phone Number',
      'form-message': 'Your Message',
      'form-submit': 'Send Message',
      'contact-info-title': 'PDCA Pest Control',
      'contact-info-subtitle': 'Professional Pest Management Solutions',
      'contact-info-heading': 'Contact Information',
      'contact-email-title': 'Email',
      'contact-phone-title': 'Phone',
      'contact-address-title': 'Address',
      'contact-address': 'October city - city star mall - B3 - F3',
      'contact-hours-title': 'Business Hours',
      'contact-hours-weekdays': 'Sunday - Thursday',
      'contact-hours-weekends': 'Friday - Saturday',
      'footer-description': 'Professional pest control solutions using the latest methods and equipment to ensure effective pest management for both residential and commercial properties.',
      'footer-links-title': 'Quick Links',
      'footer-services-title': 'Services',
      'footer-service-residential': 'Residential Pest Control',
      'footer-service-commercial': 'Commercial Pest Control',
      'footer-service-termite': 'Termite Control',
      'footer-service-rodent': 'Rodent Control',
      'footer-service-mosquito': 'Mosquito Control',
      'footer-service-bedbug': 'Bed Bug Treatment',
      'footer-contact-title': 'Contact Information',
      'footer-copyright': '© 2025 PDCA Pest Control. All rights reserved.',
      'footer-iso': 'ISO 9001 Certified Company'
    }
  };

  // Initialize language from localStorage or default to Arabic
  let currentLang = localStorage.getItem('language') || 'ar';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  // Function to update content based on language
  function updateContent(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
    document.title = translations[lang].title;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('language-toggle').textContent = translations[lang]['lang-toggle'];
    document.getElementById('mobile-language-toggle').textContent = translations[lang]['lang-toggle'];
    localStorage.setItem('language', lang);
  }

  // Initial content update
  updateContent(currentLang);

  // Language toggle functionality
  const toggleButtons = [document.getElementById('language-toggle'), document.getElementById('mobile-language-toggle')];
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      updateContent(currentLang);
    });
  });

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  // Close mobile menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });

  // Navbar background change on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.remove('bg-transparent');
      navbar.classList.add('bg-white', 'shadow-md');
    } else {
      navbar.classList.remove('bg-white', 'shadow-md');
      navbar.classList.add('bg-transparent');
    }
  });

  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const submitButton = document.getElementById('submit-form');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitButton.disabled = true;
    submitButton.textContent = currentLang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...';

    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    try {
      // Placeholder for actual form submission logic
      // Since no backend API is provided, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      formSuccess.classList.remove('hidden');
      contactForm.reset();
      setTimeout(() => {
        formSuccess.classList.add('hidden');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert(currentLang === 'ar' ? 'حدث خطأ أثناء إرسال النموذج. حاول مرة أخرى.' : 'An error occurred while submitting the form. Please try again.');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = translations[currentLang]['form-submit'];
    }
  });
});