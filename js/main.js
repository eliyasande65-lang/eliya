// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Contact form -> mailto
const sendBtn = document.getElementById('sendMessageBtn');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const message = document.getElementById('message')?.value || '';
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:eliyasande65@gmail.com?subject=${subject}&body=${body}`;
  });
}

// Service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch(() => {});
  });
}

// PWA install prompt
let deferredPrompt;
const installBanner = document.getElementById('installBanner');
const installBtn = document.getElementById('installBtn');
const installDismiss = document.getElementById('installDismiss');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (installBanner && !sessionStorage.getItem('installDismissed')) {
    installBanner.classList.add('show');
  }
});

if (installBtn) {
  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBanner.classList.remove('show');
  });
}

if (installDismiss) {
  installDismiss.addEventListener('click', () => {
    installBanner.classList.remove('show');
    sessionStorage.setItem('installDismissed', '1');
  });
}

window.addEventListener('appinstalled', () => {
  if (installBanner) installBanner.classList.remove('show');
});
