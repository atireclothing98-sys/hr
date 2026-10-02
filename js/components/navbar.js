// AVENLO NAVBAR
class AvenloNavbar {
  constructor() {
    this.container = document.getElementById('siteHeader');
    this.mobileOpen = false;
  }

  render() {
    const user = window.auth.getCurrentUser();
    const route = window.location.hash.replace('#', '') || 'home';

    let rightHtml = '';
    if (user) {
      const dashRoute = user.role === 'admin' ? 'admin' : 'dashboard';
      const firstName = (user.name || 'User').split(' ')[0];
      rightHtml = `
        <a href="#${dashRoute}" class="btn btn-sm btn-secondary nav-login-link" style="font-weight:600;">
          ${user.role === 'admin' ? 'Admin Console' : 'Dashboard'}
        </a>
        <div class="nav-user-pill" id="navUserPill" onclick="window.navbar.toggleUserMenu(event)" title="User Menu">
          <div class="user-avatar">${user.avatar || 'U'}</div>
          <span style="font-size:0.85rem;font-weight:600;color:var(--text-heading);padding-right:2px;">${firstName}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
        </div>
        ${this._userDropdown(user)}
      `;
    } else {
      rightHtml = `
        <a href="#login" class="nav-link nav-login-link" style="font-weight:600;">Login</a>
        <a href="#join" class="btn btn-primary btn-sm">Join Avenlo</a>
      `;
    }

    this.container.innerHTML = `
      <div class="container">
        <nav class="navbar">
          <a href="#home" class="nav-brand">
            <img src="avenlo_logo_svgs/avenlo-primary.svg" alt="Avenlo — Build Your Career. Find Your Opportunity." style="height:36px;width:auto;">
          </a>

          <ul class="nav-menu">
            <li><a href="#home" class="nav-link ${route === 'home' || route === '' ? 'active' : ''}">Home</a></li>
            <li><a href="#candidates" class="nav-link ${route === 'candidates' ? 'active' : ''}">For Candidates</a></li>
            <li><a href="#companies" class="nav-link ${route === 'companies' ? 'active' : ''}">For Companies</a></li>
            <li><a href="#about" class="nav-link ${route === 'about' ? 'active' : ''}">About</a></li>
            <li><a href="#contact" class="nav-link ${route === 'contact' ? 'active' : ''}">Contact</a></li>
          </ul>

          <div class="nav-actions">
            ${rightHtml}
            <button class="mobile-nav-toggle" onclick="window.navbar.toggleMobile()" aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${this.mobileOpen
                  ? '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
                  : '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>'}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <div class="mobile-drawer ${this.mobileOpen ? 'open' : ''}" id="mobileDrawer">
        <ul>
          <li><a href="#home" class="nav-link" onclick="window.navbar.closeMobile()">Home</a></li>
          <li><a href="#candidates" class="nav-link" onclick="window.navbar.closeMobile()">For Candidates</a></li>
          <li><a href="#companies" class="nav-link" onclick="window.navbar.closeMobile()">For Companies</a></li>
          <li><a href="#about" class="nav-link" onclick="window.navbar.closeMobile()">About</a></li>
          <li><a href="#contact" class="nav-link" onclick="window.navbar.closeMobile()">Contact</a></li>
        </ul>
        <div class="mobile-cta-group">
          ${user
            ? `<a href="#${user.role === 'admin' ? 'admin' : 'dashboard'}" class="btn btn-secondary" onclick="window.navbar.closeMobile()">My Dashboard</a>
               <button class="btn btn-ghost" onclick="window.auth.logout(); window.navbar.closeMobile(); window.router.navigate('home'); window.toast.show('Logged out.','info');">Log Out</button>`
            : `<a href="#join" class="btn btn-primary" onclick="window.navbar.closeMobile()">Join Avenlo</a>
               <a href="#login" class="btn btn-secondary" onclick="window.navbar.closeMobile()">Login</a>`
          }
        </div>
      </div>
    `;
  }

  _userDropdown(user) {
    return `
      <div id="userDropdown" style="display:none;position:absolute;top:calc(100% + 10px);right:0;background:#FFFFFF;border:1px solid var(--border);border-radius:12px;box-shadow:0 12px 30px -4px rgba(15,23,42,0.18);width:250px;z-index:1100;overflow:hidden;animation:fadeIn 0.15s ease;">
        <div style="padding:1rem 1.25rem;border-bottom:1px solid var(--border);background:#F8FAFC;">
          <div style="font-weight:700;color:var(--text-heading);font-size:0.92rem;line-height:1.3;">${user.name}</div>
          <div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${user.email}</div>
          <span class="badge ${user.role === 'admin' ? 'badge-yellow' : 'badge-mint'}" style="margin-top:0.5rem;font-size:0.72rem;font-weight:700;">
            ${user.role === 'admin' ? 'Operations Admin' : 'Talent Network Active'}
          </span>
        </div>
        <div style="padding:0.5rem;">
          <a href="#${user.role === 'admin' ? 'admin' : 'dashboard'}" class="dash-dropdown-link" onclick="window.navbar.hideUserMenu()">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18M15 9h6M15 15h6"/></svg>
            <span>${user.role === 'admin' ? 'Admin Console' : 'My Dashboard'}</span>
          </a>
          <button class="dash-dropdown-link" style="width:100%;border:none;background:none;cursor:pointer;color:#DC2626;font-weight:600;text-align:left;" onclick="window.auth.logout();window.navbar.hideUserMenu();window.router.navigate('home');window.toast.show('Logged out successfully.','info');">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    `;
  }

  toggleUserMenu(e) {
    e.stopPropagation();
    const d = document.getElementById('userDropdown');
    if (d) {
      const isVisible = d.style.display === 'block';
      d.style.display = isVisible ? 'none' : 'block';
      const pill = document.getElementById('navUserPill');
      if (pill) {
        if (!isVisible) pill.classList.add('open');
        else pill.classList.remove('open');
      }
    }
  }

  hideUserMenu() {
    const d = document.getElementById('userDropdown');
    if (d) d.style.display = 'none';
    const pill = document.getElementById('navUserPill');
    if (pill) pill.classList.remove('open');
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
    this.render();
  }

  closeMobile() {
    this.mobileOpen = false;
  }
}

window.navbar = new AvenloNavbar();

document.addEventListener('click', () => {
  if (window.navbar) window.navbar.hideUserMenu();
});
