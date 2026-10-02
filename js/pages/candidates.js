// AVENLO FOR CANDIDATES PAGE
class CandidatesPage {
  render() {
    return `
      <section class="hero-section" style="padding:4rem 0 3rem;">
        <div class="container">
          <div class="hero-content">
            <span class="badge badge-blue" style="margin-bottom:0.75rem;">For Candidates</span>
            <h1>Build a career that<br><span class="accent">moves forward.</span></h1>
            <p class="hero-subtitle">
              Create your professional profile, strengthen your CV, understand your skills and career direction, and become part of the Avenlo Talent Network.
            </p>
            <div class="hero-cta-group">
              <a href="#join" class="btn btn-primary btn-lg">Join Avenlo</a>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works for Candidates -->
      <section class="section section-alt">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">How It Works</span>
            <h2>Your path with Avenlo</h2>
            <p>No endless applications. No recruiter spam. A smarter way to build your career.</p>
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
              <p>Use Avenlo's tools and AI-assisted assessment to understand your strengths and development areas.</p>
            </div>
            <div class="process-step">
              <div class="step-num">03</div>
              <h4>Join the Talent Network</h4>
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
              <p>Avenlo helps facilitate the next steps.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- What You Get -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Career Tools</span>
            <h2>Everything you need to grow</h2>
            <p>Avenlo provides the tools and support to help you understand and advance your career.</p>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5rem;">
            <div class="card card-elevated">
              <div style="font-size:1.5rem;margin-bottom:0.75rem;">👤</div>
              <h3 style="font-size:1.1rem;margin-bottom:0.5rem;">Professional Profile</h3>
              <p style="font-size:0.9rem;color:var(--text-light);">Build a comprehensive career profile that captures your skills, experience and goals.</p>
            </div>
            <div class="card card-elevated">
              <div style="font-size:1.5rem;margin-bottom:0.75rem;">📄</div>
              <h3 style="font-size:1.1rem;margin-bottom:0.5rem;">CV Improvement</h3>
              <p style="font-size:0.9rem;color:var(--text-light);">Get insights and feedback on your CV to present your experience effectively.</p>
            </div>
            <div class="card card-elevated">
              <div style="font-size:1.5rem;margin-bottom:0.75rem;">⚡</div>
              <h3 style="font-size:1.1rem;margin-bottom:0.5rem;">Career Assessment</h3>
              <p style="font-size:0.9rem;color:var(--text-light);">AI-assisted assessment to understand your strengths, gaps and career direction.</p>
            </div>
            <div class="card card-elevated">
              <div style="font-size:1.5rem;margin-bottom:0.75rem;">🎯</div>
              <h3 style="font-size:1.1rem;margin-bottom:0.5rem;">Skill-Gap Insights</h3>
              <p style="font-size:0.9rem;color:var(--text-light);">Identify areas where development can unlock new career opportunities.</p>
            </div>
            <div class="card card-elevated">
              <div style="font-size:1.5rem;margin-bottom:0.75rem;">🧭</div>
              <h3 style="font-size:1.1rem;margin-bottom:0.5rem;">Career Guidance</h3>
              <p style="font-size:0.9rem;color:var(--text-light);">Receive suggestions on relevant career paths, learning areas and growth.</p>
            </div>
            <div class="card card-elevated">
              <div style="font-size:1.5rem;margin-bottom:0.75rem;">🌐</div>
              <h3 style="font-size:1.1rem;margin-bottom:0.5rem;">Talent Network</h3>
              <p style="font-size:0.9rem;color:var(--text-light);">Join the Avenlo network. When a relevant opportunity arises, we contact you.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Optional Career Services -->
      <section class="section section-alt">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Career Services</span>
            <h2>Optional career development</h2>
            <p>Joining the Avenlo Talent Network is free. These optional services provide additional career support.</p>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.25rem;max-width:860px;margin:0 auto;">
            ${window.db.getServices().map(svc => `
              <div class="card card-elevated" style="text-align:center;">
                <h3 style="font-size:1.1rem;margin-bottom:0.5rem;">${svc.title}</h3>
                <p style="font-size:0.88rem;color:var(--text-light);margin-bottom:1.25rem;">${svc.description}</p>
                <div style="font-size:1.5rem;font-weight:800;color:var(--text-heading);margin-bottom:1rem;">₹${svc.priceINR.toLocaleString('en-IN')}</div>
                <button class="btn btn-secondary btn-sm" onclick="window.payment.initiateCheckout('${svc.id}', window.auth.getCurrentUser())">Get Started</button>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Bottom CTA -->
      <section class="section">
        <div class="container" style="text-align:center;">
          <div style="background:var(--navy);border-radius:var(--radius-xl);padding:3.5rem 2rem;color:#fff;">
            <h2 style="color:#fff;margin-bottom:0.75rem;">Ready to join Avenlo?</h2>
            <p style="color:#94A3B8;max-width:500px;margin:0 auto 2rem;font-size:1rem;">
              Create your profile and become part of the Avenlo Talent Network.
            </p>
            <a href="#join" class="btn btn-primary btn-lg">Join Avenlo</a>
          </div>
        </div>
      </section>
    `;
  }
}

window.candidatesPage = new CandidatesPage();
