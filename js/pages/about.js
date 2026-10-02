// AVENLO ABOUT PAGE
class AboutPage {
  render() {
    return `
      <section class="section" style="padding-top:3.5rem;">
        <div class="container container-md">
          <div style="text-align:center;margin-bottom:3.5rem;">
            <span class="badge badge-blue" style="margin-bottom:0.75rem;">About Avenlo</span>
            <h1>A smarter way to connect<br>talent and opportunity.</h1>
            <p style="font-size:1.1rem;color:var(--text-light);line-height:1.65;margin-top:1rem;max-width:620px;margin-left:auto;margin-right:auto;">
              Avenlo is a career and talent network that helps professionals build stronger careers and connects companies with relevant talent through a human-led recruitment process supported by technology and AI.
            </p>
          </div>

          <!-- Mission -->
          <div class="card card-elevated" style="padding:2.5rem;margin-bottom:2rem;">
            <h2 style="font-size:1.5rem;margin-bottom:1rem;">Our approach</h2>
            <p style="font-size:1rem;color:var(--text);line-height:1.7;margin-bottom:1.25rem;">
              We believe careers are about people, not just keywords on a database. Avenlo takes a personal approach — understanding each individual's experience, skills and ambitions, and connecting them with companies where they can genuinely contribute and grow.
            </p>
            <p style="font-size:1rem;color:var(--text);line-height:1.7;">
              For companies, we simplify the process. You tell us what you need, and our team works to identify the right talent from our network. No noise. No spam. Just relevant introductions.
            </p>
          </div>

          <!-- Values -->
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.25rem;margin-bottom:3rem;">
            <div class="card">
              <h3 style="font-size:1.1rem;margin-bottom:0.5rem;">Human-Led</h3>
              <p style="font-size:0.9rem;color:var(--text-light);">Real people understanding real needs. Technology supports — it doesn't replace — the human element.</p>
            </div>
            <div class="card">
              <h3 style="font-size:1.1rem;margin-bottom:0.5rem;">AI-Assisted</h3>
              <p style="font-size:0.9rem;color:var(--text-light);">Smart tools to help candidates understand their career direction and help our team identify the right matches.</p>
            </div>
            <div class="card">
              <h3 style="font-size:1.1rem;margin-bottom:0.5rem;">India-First</h3>
              <p style="font-size:0.9rem;color:var(--text-light);">Built for the Indian professional ecosystem, understanding local career dynamics and market realities.</p>
            </div>
            <div class="card">
              <h3 style="font-size:1.1rem;margin-bottom:0.5rem;">Trustworthy</h3>
              <p style="font-size:0.9rem;color:var(--text-light);">We're transparent with candidates and professional with companies. We don't make promises we can't keep.</p>
            </div>
          </div>

          <!-- What We Are Not -->
          <div class="card" style="background:var(--navy);color:#fff;padding:2.5rem;border-color:transparent;">
            <h2 style="color:#fff;font-size:1.4rem;margin-bottom:1rem;">What Avenlo is not</h2>
            <p style="color:#94A3B8;font-size:0.95rem;line-height:1.7;margin-bottom:1.25rem;">
              Avenlo is not a job board. It's not a public marketplace where anyone posts listings and anyone applies. It's not a self-service ATS for companies, and it's not an algorithm that replaces human judgment.
            </p>
            <p style="color:#94A3B8;font-size:0.95rem;line-height:1.7;">
              Avenlo is a <strong style="color:#fff;">career and talent network</strong> — a place where professionals invest in their career growth, and companies access curated, relevant talent through a personal process.
            </p>
          </div>

          <!-- CTA -->
          <div style="text-align:center;margin-top:3.5rem;">
            <h2 style="margin-bottom:0.75rem;">Get started with Avenlo</h2>
            <p style="color:var(--text-light);margin-bottom:2rem;">Whether you're a professional or a company, we'd love to hear from you.</p>
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
window.aboutPage = new AboutPage();
