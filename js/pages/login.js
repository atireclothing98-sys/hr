// AVENLO LOGIN PAGE
class LoginPage {
  render() {
    return `
      <section class="section" style="padding-top:4rem;padding-bottom:5rem;">
        <div class="container container-sm">
          <div class="card card-elevated" style="padding:2.5rem;">
            <!-- Brand header -->
            <div style="text-align:center;margin-bottom:2rem;">
              <a href="#home" style="display:inline-block;margin-bottom:1rem;">
                <img src="avenlo_logo_svgs/avenlo-primary.svg" alt="Avenlo" style="height:36px;width:auto;">
              </a>
              <h2 style="font-size:1.5rem;margin-bottom:0.25rem;">Sign In to Avenlo</h2>
              <p style="font-size:0.9rem;color:var(--text-light);">
                Access your career network dashboard or operational controls
              </p>
            </div>

            <!-- Login Form -->
            <form id="loginForm" onsubmit="window.loginPage.handleLogin(event)">
              <div class="form-group">
                <label class="form-label" for="loginEmail">Email Address</label>
                <input type="email" id="loginEmail" class="form-control" placeholder="name@example.com" required>
              </div>

              <div class="form-group">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
                  <label class="form-label" for="loginPassword" style="margin-bottom:0;">Password</label>
                  <a href="javascript:void(0)" onclick="window.toast('Password reset link sent to registered email.', 'info')" style="font-size:0.8rem;color:var(--accent);text-decoration:none;">Forgot password?</a>
                </div>
                <input type="password" id="loginPassword" class="form-control" placeholder="Enter your password" required>
              </div>

              <button type="submit" class="btn btn-navy btn-block" style="padding:0.85rem;margin-top:0.75rem;">
                Sign In
              </button>
            </form>

            <!-- Join prompt -->
            <div style="text-align:center;margin-top:1.75rem;font-size:0.875rem;color:var(--text-light);">
              Don't have an Avenlo account yet?
              <a href="#join" style="color:var(--accent);font-weight:600;text-decoration:none;margin-left:0.25rem;">Join Avenlo &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Signing in...';
    btn.disabled = true;

    const res = await window.auth.login(email, password);

    btn.innerHTML = originalText;
    btn.disabled = false;

    if (res.error) {
      window.toast(res.error, 'danger');
      return;
    }

    window.toast(`Welcome back, ${res.user.name}!`, 'success');
    if (res.user.role === 'admin') {
      window.location.hash = '#admin';
    } else {
      window.location.hash = '#dashboard';
    }
  }

window.loginPage = new LoginPage();
