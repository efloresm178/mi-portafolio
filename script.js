/* ==========================================================================
   PORTAFOLIO - Idioma (ES/EN), tema (oscuro/claro) y formulario de contacto
   ========================================================================== */

// Diccionario de traducciones. Los nombres propios, empresas y tecnologías no se traducen.
const translations = {
    es: {
        'meta.title': 'Esteban Flores | Desarrollador de Software · Infraestructura TI · Linux · SQL',
        'meta.description': 'Portafolio de Esteban Flores, estudiante de Ingeniería en Sistemas con experiencia práctica en soporte técnico, infraestructura, servidores Linux, bases de datos SQL y desarrollo de aplicaciones web.',

        'a11y.skip': 'Saltar al contenido',
        'a11y.nav': 'Navegación principal',
        'a11y.lang': 'Cambiar idioma a inglés',
        'a11y.themeToLight': 'Activar modo claro',
        'a11y.themeToDark': 'Activar modo oscuro',

        'nav.about': 'Sobre mí',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',

        'hero.avatarAlt': 'Foto de perfil de Esteban Flores',
        'hero.status': 'Disponible para proyectos',
        'hero.role': 'Desarrollador de Software<span class="role-sep" aria-hidden="true">|</span>Infraestructura&nbsp;TI<span class="role-sep" aria-hidden="true">|</span>Linux<span class="role-sep" aria-hidden="true">|</span>SQL',
        'hero.bio': 'Estudiante de Ingeniería en Sistemas con experiencia práctica en soporte técnico, infraestructura, servidores Linux, bases de datos SQL y desarrollo de aplicaciones web.',
        'hero.ctaProjects': 'Ver Proyectos',
        'hero.ctaContact': 'Contactar',
        'hero.languagesAria': 'Idiomas',
        'hero.flagEs': 'Bandera de Costa Rica',
        'hero.flagEn': 'Bandera de Estados Unidos',
        'hero.langEs': 'Español',
        'hero.levelEs': 'Native',
        'hero.langEn': 'Inglés',
        'hero.levelEn': 'B2+ • Professional',

        'about.badge': 'Presentación',
        'about.title': 'Sobre mí',
        'about.p1': 'Soy <strong>Esteban Flores</strong>, estudiante de <strong>Ingeniería en Sistemas</strong> y profesional de TI enfocado en el <strong>desarrollo de software</strong> y la infraestructura tecnológica.',
        'about.p2': 'Mi experiencia en <strong>soporte técnico</strong>, <strong>bases de datos SQL</strong> y <strong>servidores Linux</strong> me ha dado una base sólida en <strong>infraestructura</strong> y en el diagnóstico y resolución de problemas (<em>troubleshooting</em>).',
        'about.p3': 'Complemento esa base con el desarrollo de aplicaciones web, buscando soluciones claras y mantenibles, y con un <strong>aprendizaje continuo</strong> de nuevas tecnologías.',

        'exp.badge': 'Trayectoria',
        'exp.title': 'Experiencia',
        'exp.job1.role': 'Analista de Datos / Soporte',
        'exp.job1.b1': 'Análisis de datos y gestión de consultas.',
        'exp.job1.b2': 'Soporte técnico especializado para asegurar la estabilidad de los sistemas internos.',
        'exp.job2.role': 'Agente de NOC',
        'exp.job2.b1': 'Monitoreo de infraestructura de red, servidores Linux y sistemas críticos.',
        'exp.job2.b2': 'Troubleshooting y análisis de logs para la detección temprana y resolución de incidentes.',
        'exp.job2.b3': 'Soporte avanzado en servicios web, DNS y correo electrónico.',

        'projects.badge': 'Portafolio',
        'projects.title': 'Proyectos Destacados',
        'projects.demo': 'Ver demo',
        'projects.p1.alt': 'Captura de pantalla del Juego de Baseball',
        'projects.p1.title': 'Juego de Baseball',
        'projects.p1.tag': 'Diseño UI',
        'projects.p1.desc': 'Juego de mesa interactivo basado en dinámicas de dados, donde cada resultado desencadena acciones estratégicas y jugadas de baseball en tiempo real.',
        'projects.p2.title': 'Tienda Online',
        'projects.p2.desc': 'Proyecto en constante evolución desarrollado durante el curso. Actualmente incluye página de inicio, productos destacados, multimedia e iFrames. ¡En actualización continua!',
        'projects.p2.note': 'Alojado en el plan gratuito de Render: la primera carga puede tardar unos segundos.',

        'skills.title': 'Tecnologías',
        'skills.hint': 'Pasa el cursor para pausar',

        'contact.badge': 'Hablemos',
        'contact.title': 'Contacto',
        'contact.desc': '¿Tienes una oportunidad laboral, un proyecto en mente o quieres conversar sobre tecnología? ¡Envíame un mensaje!',
        'contact.name': 'Tu nombre',
        'contact.namePh': 'Ej. María Pérez',
        'contact.email': 'Tu correo electrónico',
        'contact.emailPh': 'nombre@correo.com',
        'contact.subject': 'Asunto',
        'contact.subjectPh': 'Ej. Oportunidad laboral',
        'contact.message': 'Mensaje',
        'contact.messagePh': 'Cuéntame sobre tu proyecto o consulta...',
        'contact.send': 'Enviar mensaje',
        'contact.sending': 'Enviando...',
        'contact.success': '¡Mensaje enviado! Te responderé lo antes posible.',
        'contact.error': 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por LinkedIn.',
        'contact.linkedin': 'Conectar en la red',
        'contact.github': 'Explorar repositorios',

        'footer.role': 'Desarrollador de Software',
        'footer.rights': 'Todos los derechos reservados'
    },
    en: {
        'meta.title': 'Esteban Flores | Software Developer · IT Infrastructure · Linux · SQL',
        'meta.description': 'Portfolio of Esteban Flores, a Systems Engineering student with hands-on experience in technical support, infrastructure, Linux servers, SQL databases and web application development.',

        'a11y.skip': 'Skip to content',
        'a11y.nav': 'Main navigation',
        'a11y.lang': 'Switch language to Spanish',
        'a11y.themeToLight': 'Switch to light mode',
        'a11y.themeToDark': 'Switch to dark mode',

        'nav.about': 'About me',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        'hero.avatarAlt': 'Profile photo of Esteban Flores',
        'hero.status': 'Available for projects',
        'hero.role': 'Software Developer<span class="role-sep" aria-hidden="true">|</span>IT&nbsp;Infrastructure<span class="role-sep" aria-hidden="true">|</span>Linux<span class="role-sep" aria-hidden="true">|</span>SQL',
        'hero.bio': 'Systems Engineering student with hands-on experience in technical support, infrastructure, Linux servers, SQL databases and web application development.',
        'hero.ctaProjects': 'View Projects',
        'hero.ctaContact': 'Get in touch',
        'hero.languagesAria': 'Languages',
        'hero.flagEs': 'Costa Rica flag',
        'hero.flagEn': 'United States flag',
        'hero.langEs': 'Spanish',
        'hero.levelEs': 'Native',
        'hero.langEn': 'English',
        'hero.levelEn': 'B2+ • Professional',

        'about.badge': 'Introduction',
        'about.title': 'About me',
        'about.p1': 'I\'m <strong>Esteban Flores</strong>, a <strong>Systems Engineering</strong> student and IT professional focused on <strong>software development</strong> and technology infrastructure.',
        'about.p2': 'My experience in <strong>technical support</strong>, <strong>SQL databases</strong> and <strong>Linux servers</strong> has given me a solid foundation in <strong>infrastructure</strong> and in diagnosing and solving problems (<em>troubleshooting</em>).',
        'about.p3': 'I build on that foundation by developing web applications, aiming for clear and maintainable solutions, and by <strong>continuously learning</strong> new technologies.',

        'exp.badge': 'Career',
        'exp.title': 'Experience',
        'exp.job1.role': 'Data Analyst / Support',
        'exp.job1.b1': 'Data analysis and request management.',
        'exp.job1.b2': 'Specialized technical support to keep internal systems stable.',
        'exp.job2.role': 'NOC Agent',
        'exp.job2.b1': 'Monitoring of network infrastructure, Linux servers and critical systems.',
        'exp.job2.b2': 'Troubleshooting and log analysis for early detection and resolution of incidents.',
        'exp.job2.b3': 'Advanced support for web services, DNS and email.',

        'projects.badge': 'Portfolio',
        'projects.title': 'Featured Projects',
        'projects.demo': 'Live demo',
        'projects.p1.alt': 'Screenshot of the Baseball Game',
        'projects.p1.title': 'Baseball Game',
        'projects.p1.tag': 'UI Design',
        'projects.p1.desc': 'Interactive board game built around dice mechanics, where each roll triggers strategic actions and baseball plays in real time.',
        'projects.p2.title': 'Online Store',
        'projects.p2.desc': 'Project under continuous evolution developed throughout the course. Currently features a home page, featured products, multimedia, and iFrames. Continuously updated!',
        'projects.p2.note': 'Hosted on Render\'s free plan: the first load may take a few seconds.',

        'skills.title': 'Technologies',
        'skills.hint': 'Hover to pause',

        'contact.badge': 'Let\'s talk',
        'contact.title': 'Contact',
        'contact.desc': 'Do you have a job opportunity, a project in mind, or just want to talk about technology? Send me a message!',
        'contact.name': 'Your name',
        'contact.namePh': 'e.g. Jane Smith',
        'contact.email': 'Your email',
        'contact.emailPh': 'name@email.com',
        'contact.subject': 'Subject',
        'contact.subjectPh': 'e.g. Job opportunity',
        'contact.message': 'Message',
        'contact.messagePh': 'Tell me about your project or question...',
        'contact.send': 'Send message',
        'contact.sending': 'Sending...',
        'contact.success': 'Message sent! I\'ll get back to you as soon as possible.',
        'contact.error': 'The message could not be sent. Please try again or reach me on LinkedIn.',
        'contact.linkedin': 'Connect on LinkedIn',
        'contact.github': 'Browse repositories',

        'footer.role': 'Software Developer',
        'footer.rights': 'All rights reserved'
    }
};

const LANG_KEY = 'lang';
const THEME_KEY = 'theme';

// localStorage puede no estar disponible (modo privado, bloqueos); nunca debe romper la página.
function readPref(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
}

function savePref(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* sin persistencia */ }
}

let currentLang = readPref(LANG_KEY) === 'en' ? 'en' : 'es';
let formStatus = null; // 'sending' | 'success' | 'error' | null

function t(key) {
    return translations[currentLang][key] ?? translations.es[key] ?? '';
}

/* --- IDIOMA --- */
function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'));

    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        el.innerHTML = t(el.dataset.i18nHtml);
    });

    // Formato: "atributo:clave; atributo2:clave2"
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        el.dataset.i18nAttr.split(';').forEach(pair => {
            const [attr, key] = pair.split(':').map(s => s.trim());
            if (attr && key) el.setAttribute(attr, t(key));
        });
    });

    document.querySelectorAll('.lang-opt').forEach(opt => {
        opt.classList.toggle('is-active', opt.dataset.lang === lang);
    });

    updateThemeLabel();
    renderFormStatus();
}

/* --- TEMA --- */
function currentTheme() {
    return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

function updateThemeLabel() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const label = currentTheme() === 'light' ? t('a11y.themeToDark') : t('a11y.themeToLight');
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
}

function applyTheme(theme) {
    if (theme === 'light') {
        document.documentElement.dataset.theme = 'light';
    } else {
        delete document.documentElement.dataset.theme;
    }
    updateThemeLabel();
}

/* --- FORMULARIO DE CONTACTO (Formspree vía fetch) --- */
function renderFormStatus() {
    const status = document.getElementById('form-status');
    const btnLabel = document.querySelector('.btn-submit span');
    if (!status || !btnLabel) return;

    btnLabel.textContent = formStatus === 'sending' ? t('contact.sending') : t('contact.send');
    status.classList.remove('is-success', 'is-error');

    if (formStatus === 'success' || formStatus === 'error') {
        status.textContent = t('contact.' + formStatus);
        status.classList.add('is-' + formStatus);
        status.hidden = false;
    } else {
        status.textContent = '';
        status.hidden = true;
    }
}

function initContactForm() {
    const form = document.querySelector('.contacto-form');
    if (!form) return;
    const submitBtn = form.querySelector('.btn-submit');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        formStatus = 'sending';
        submitBtn.disabled = true;
        submitBtn.setAttribute('aria-busy', 'true');
        renderFormStatus();

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            });
            if (!response.ok) throw new Error('HTTP ' + response.status);
            form.reset();
            formStatus = 'success';
            if (typeof gtag === 'function') gtag('event', 'formulario_enviado');
        } catch (error) {
            formStatus = 'error';
        } finally {
            submitBtn.disabled = false;
            submitBtn.removeAttribute('aria-busy');
            renderFormStatus();
        }
    });
}

/* --- INICIALIZACIÓN --- */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-year]').forEach(el => {
        el.textContent = new Date().getFullYear();
    });

    applyLanguage(currentLang);

    document.getElementById('lang-toggle')?.addEventListener('click', () => {
        const next = currentLang === 'es' ? 'en' : 'es';
        savePref(LANG_KEY, next);
        applyLanguage(next);
    });

    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        const next = currentTheme() === 'light' ? 'dark' : 'light';
        savePref(THEME_KEY, next);
        applyTheme(next);
    });

    initContactForm();
});

// Al recargar la página, fuerza el scroll arriba (comportamiento original)
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});
