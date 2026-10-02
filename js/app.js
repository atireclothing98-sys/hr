// AVENLO APPLICATION ROUTER & CORE CONTROLLER
class AvenloApp {
  constructor() {
    this.mainContainer = null;
    this.currentRoute = 'home';
  }

  init() {
    this.mainContainer = document.getElementById('appMain');
    
    // Setup router
    window.addEventListener('hashchange', () => this.handleRoute());

    // Subscribe to auth changes to update navbar/footer
    if (window.auth) {
      window.auth.subscribe(() => {
        if (window.navbar) window.navbar.render();
        this.render();
      });
    }

    // Initial render
    this.handleRoute();
  }

  handleRoute() {
    let hash = window.location.hash.replace('#', '') || 'home';
    
    // Route guards
    const user = window.auth ? window.auth.getCurrentUser() : null;

    if (hash === 'dashboard') {
      if (!user) {
        window.toast('Please log in to access your Candidate Dashboard.', 'info');
        window.location.hash = '#login';
        return;
      }
    }

    if (hash === 'admin') {
      if (!user || user.role !== 'admin') {
        window.toast('Admin access required. Please log in with admin credentials.', 'warning');
        window.location.hash = '#login';
        return;
      }
    }

    this.currentRoute = hash;

    // Render navigation and footer
    if (window.navbar) window.navbar.render();
    if (window.footer) window.footer.render();

    this.render();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    if (!this.mainContainer) return;

    let contentHtml = '';

    switch (this.currentRoute) {
      case 'home':
        contentHtml = window.homePage ? window.homePage.render() : '<div class="container">Loading...</div>';
        break;
      case 'candidates':
        contentHtml = window.candidatesPage ? window.candidatesPage.render() : '<div class="container">Loading...</div>';
        break;
      case 'companies':
        contentHtml = window.companiesPage ? window.companiesPage.render() : '<div class="container">Loading...</div>';
        break;
      case 'about':
        contentHtml = window.aboutPage ? window.aboutPage.render() : '<div class="container">Loading...</div>';
        break;
      case 'contact':
        contentHtml = window.contactPage ? window.contactPage.render() : '<div class="container">Loading...</div>';
        break;
      case 'join':
        contentHtml = window.joinPage ? window.joinPage.render() : '<div class="container">Loading...</div>';
        break;
      case 'login':
        contentHtml = window.loginPage ? window.loginPage.render() : '<div class="container">Loading...</div>';
        break;
      case 'privacy':
        contentHtml = window.privacyPage ? window.privacyPage.render() : '<div class="container">Loading...</div>';
        break;
      case 'terms':
        contentHtml = window.termsPage ? window.termsPage.render() : '<div class="container">Loading...</div>';
        break;
      case 'dashboard':
        contentHtml = window.candidateDashboard ? window.candidateDashboard.render() : '<div class="container">Loading...</div>';
        break;
      case 'admin':
        contentHtml = window.adminDashboard ? window.adminDashboard.render() : '<div class="container">Loading...</div>';
        break;
      default:
        contentHtml = window.homePage ? window.homePage.render() : '<div class="container">Page not found</div>';
        break;
    }

    this.mainContainer.innerHTML = contentHtml;
  }

  navigate(route) {
    window.location.hash = '#' + route;
  }
}

// GLOBAL TOAST NOTIFICATION SYSTEM
window.toast = function(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toastEl = document.createElement('div');
  toastEl.className = `toast-item toast-${type}`;

  let icon = 'ℹ️';
  if (type === 'success') icon = '✓';
  if (type === 'warning') icon = '⚠️';
  if (type === 'danger' || type === 'error') icon = '✕';

  toastEl.innerHTML = `
    <div style="font-weight:700;margin-right:0.5rem;">${icon}</div>
    <div style="flex:1;">${message}</div>
  `;

  container.appendChild(toastEl);

  setTimeout(() => {
    toastEl.style.opacity = '0';
    toastEl.style.transform = 'translateY(10px)';
    toastEl.style.transition = 'all 0.3s ease';
    setTimeout(() => toastEl.remove(), 300);
  }, 4000);
};

window.toast.show = function(message, type) {
  window.toast(message, type);
};

// Initialize Application on DOMContentLoaded
window.app = new AvenloApp();
window.router = window.app;

document.addEventListener('DOMContentLoaded', () => {
  window.navbar = new AvenloNavbar();
  window.footer = new AvenloFooter();
  window.app.init();
});
