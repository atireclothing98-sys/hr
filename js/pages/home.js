// AVENLO HOME PAGE
class HomePage {
  render() {
    return `
      <!-- HERO -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content animate-in">
            <span class="section-tag">Career & Talent Network</span>
            <h1>Build Your Career.<br><span class="accent">Find Your Opportunity.</span></h1>
            <p class="hero-subtitle">
              Avenlo helps professionals build stronger careers and connects companies with relevant talent through a smarter, more personal approach to careers and recruitment.
            </p>
            <div class="hero-cta-group">
              <a href="#join" class="btn btn-primary btn-lg">
                Join Avenlo
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="#companies" class="btn btn-navy btn-lg">For Companies</a>
            </div>
            <div class="hero-trust">
              <div class="hero-trust-item">
                <h4>Human-Led</h4>
                <p>Personal approach</p>
              </div>
              <div class="hero-trust-item">
                <h4>AI-Assisted</h4>
                <p>Smarter insights</p>
              </div>
              <div class="hero-trust-item">
                <h4>India-First</h4>
                <p>Built for Indian careers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TWO PATHWAYS -->
      <section class="section section-alt">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Ecosystem</span>
            <h2>One platform. Two paths.</h2>
            <p>Whether you're building your career or building your team, Avenlo is your partner.</p>
          </div>

          <div class="pathways-grid">
            <!-- Candidates -->
            <div class="pathway-card candidate card-elevated">
              <span class="badge badge-blue" style="margin-bottom:1rem;">For Candidates</span>
              <h3>Build a career that moves forward.</h3>
              <p>Create your professional profile, strengthen your CV, understand your skills and career direction, and become part of the Avenlo Talent Network.</p>
              <ul class="feature-list">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Professional profile & career preferences</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>CV improvement & insights</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>AI-assisted career assessment</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Skill-gap analysis & career guidance</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Talent network access — opportunities through Avenlo</span>
                </li>
              </ul>
              <a href="#join" class="btn btn-primary" style="width:100%;">Join Avenlo</a>
            </div>

            <!-- Companies -->
            <div class="pathway-card company card-elevated">
              <span class="badge badge-mint" style="margin-bottom:1rem;">For Companies</span>
              <h3>Find people who fit.</h3>
              <p>Tell us what you're looking for and our team will help identify relevant talent from the Avenlo network.</p>
              <ul class="feature-list">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Share your hiring requirement</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Tell us about the role and expectations</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Avenlo identifies relevant talent</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>We handle the initial process</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Connect with suitable candidates</span>
                </li>
              </ul>
              <a href="#companies" class="btn btn-navy" style="width:100%;">Contact Avenlo</a>
            </div>
          </div>
        </div>
      </section>

      <!-- HOW IT WORKS — CANDIDATES -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">How It Works</span>
            <h2>Your path with Avenlo</h2>
            <p>A smarter, more personal approach to career development and opportunities.</p>
          </div>

          <div class="process-grid">
            <div class="process-step">
              <div class="step-num">01</div>
              <h4>Create Your Profile</h4>
              <p>Tell us about your experience, skills and career goals.</p>
            </div>
            <div class="process-step">
              <div class="step-num">02</div>
              <h4>Understand Your Career</h4>
              <p>Use Avenlo's tools and AI-assisted assessment to understand your strengths.</p>
            </div>
            <div class="process-step">
              <div class="step-num">03</div>
              <h4>Join the Network</h4>
              <p>Your profile becomes part of the Avenlo talent network.</p>
            </div>
            <div class="process-step">
              <div class="step-num">04</div>
              <h4>Discover Opportunities</h4>
              <p>When Avenlo identifies a relevant opportunity, our team contacts you.</p>
            </div>
            <div class="process-step">
              <div class="step-num">05</div>
              <h4>Move Forward</h4>
              <p>Avenlo helps facilitate the next steps in your career.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- AI SECTION -->
      <section class="ai-section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">AI-Assisted Intelligence</span>
            <h2>Your career, understood better.</h2>
            <p>Avenlo uses AI-assisted tools to help candidates understand their skills, career direction and development opportunities.</p>
          </div>

          <div class="ai-features-grid">
            <div class="ai-feature-card">
              <div class="ai-icon">📄</div>
              <h4>CV Insights</h4>
              <p>Identify strengths, gaps and opportunities for improvement in your CV.</p>
            </div>
            <div class="ai-feature-card">
              <div class="ai-icon">🎯</div>
              <h4>Career Assessment</h4>
              <p>Understand your interests, experience and career direction.</p>
            </div>
            <div class="ai-feature-card">
              <div class="ai-icon">⚡</div>
              <h4>Skill Analysis</h4>
              <p>Identify areas where additional development may help your career.</p>
            </div>
            <div class="ai-feature-card">
              <div class="ai-icon">🧭</div>
              <h4>Career Recommendations</h4>
              <p>Suggest relevant career paths and learning areas based on your profile.</p>
            </div>
          </div>

          <p class="ai-disclaimer">
            AI is used as an assistive technology to support career development. Avenlo does not use AI to make final hiring decisions.
          </p>
        </div>
      </section>

      <!-- BOTTOM CTA -->
      <section class="section section-alt">
        <div class="container">
          <div style="text-align:center;max-width:600px;margin:0 auto;">
            <h2>Ready to take the next step?</h2>
            <p style="color:var(--text-light);font-size:1.05rem;margin:1rem 0 2rem;line-height:1.65;">
              Whether you're a professional looking to grow your career or a company looking for the right talent, Avenlo is here to help.
            </p>
            <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
              <a href="#join" class="btn btn-primary btn-lg">Join Avenlo</a>
              <a href="#companies" class="btn btn-navy btn-lg">Contact Avenlo</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

window.homePage = new HomePage();
