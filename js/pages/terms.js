// AVENLO TERMS OF SERVICE
class TermsPage {
  render() {
    return `
      <section class="section" style="padding-top:3.5rem;padding-bottom:5rem;">
        <div class="container container-md">
          <div style="margin-bottom:2.5rem;text-align:center;">
            <span class="badge badge-mint" style="margin-bottom:0.5rem;">Legal Framework</span>
            <h1>Terms of Service</h1>
            <p style="color:var(--text-light);font-size:0.95rem;">Last Updated: October 2025 • Avenlo Technologies India</p>
          </div>

          <div class="card card-elevated" style="padding:2.5rem;line-height:1.75;color:var(--text);">
            <h3 style="font-size:1.3rem;margin-bottom:0.75rem;color:var(--navy);">1. Overview & Service Scope</h3>
            <p style="margin-bottom:1.5rem;">
              Avenlo (<strong>avenlo.in</strong>) operates an India-first <strong>Career & Talent Network</strong>. We assist ambitious professionals in refining their career profiles and connect relevant candidates with partner organizations through human-led recruiting advisory supported by proprietary technology and AI analysis.
            </p>

            <h3 style="font-size:1.3rem;margin-bottom:0.75rem;color:var(--navy);">2. Candidate Terms & Zero-Fee Talent Network</h3>
            <p style="margin-bottom:1rem;">
              <strong>Joining the Avenlo Talent Network is 100% free for candidates.</strong> Avenlo does not charge candidates any fees, commissions, or placement cuts for joining the network or being placed with partner employers.
            </p>
            <ul style="padding-left:1.5rem;margin-bottom:1.5rem;">
              <li><strong>Accuracy of Information:</strong> Candidates agree to provide truthful, authentic information regarding education, employment history, and technical competencies.</li>
              <li><strong>Network Matching:</strong> Inclusion in the Talent Network does not guarantee employment. Avenlo's talent advisors review requirements and initiate introductions when a strong dual-sided alignment is identified.</li>
              <li><strong>Optional Career Services:</strong> Certain optional career enhancement services (such as specialized 1-on-1 executive mentorship or expert resume reviews) may carry distinct, transparent service fees stated at the time of purchase.</li>
            </ul>

            <h3 style="font-size:1.3rem;margin-bottom:0.75rem;color:var(--navy);">3. Company & Employer Terms</h3>
            <p style="margin-bottom:1.5rem;">
              Organizations partnering with Avenlo submit hiring requirements through our advisory intake channels. Engagement terms, search scopes, and commercial arrangements are formalized through bespoke bilateral master service agreements (MSAs). <strong>Avenlo does not publish fixed fee sheets, public commission percentages, or self-service ATS access</strong> on public web properties.
            </p>

            <h3 style="font-size:1.3rem;margin-bottom:0.75rem;color:var(--navy);">4. Intellectual Property & Brand Rights</h3>
            <p style="margin-bottom:1.5rem;">
              All trademarks, service marks, algorithms, assessment methodologies, and website content are the exclusive intellectual property of Avenlo Technologies. Candidates retain full ownership of their pre-existing resume text and personal credentials.
            </p>

            <h3 style="font-size:1.3rem;margin-bottom:0.75rem;color:var(--navy);">5. Governing Law & Jurisdiction</h3>
            <p style="margin-bottom:0;">
              These terms are governed by the laws of India. Any disputes arising from or relating to the service shall be subject to the exclusive jurisdiction of the competent courts in <strong>Bengaluru, Karnataka, India</strong>.
            </p>
          </div>
        </div>
      </section>
    `;
  }
}

window.termsPage = new TermsPage();
