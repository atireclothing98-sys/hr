// AVENLO PRIVACY POLICY
class PrivacyPage {
  render() {
    return `
      <section class="section" style="padding-top:3.5rem;padding-bottom:5rem;">
        <div class="container container-md">
          <div style="margin-bottom:2.5rem;text-align:center;">
            <span class="badge badge-mint" style="margin-bottom:0.5rem;">Data Protection & Trust</span>
            <h1>Privacy Policy</h1>
            <p style="color:var(--text-light);font-size:0.95rem;">Last Updated: October 2025 • Effective for Avenlo Technologies India</p>
          </div>

          <div class="card card-elevated" style="padding:2.5rem;line-height:1.75;color:var(--text);">
            <h3 style="font-size:1.3rem;margin-bottom:0.75rem;color:var(--navy);">1. Our Core Privacy Commitment</h3>
            <p style="margin-bottom:1.5rem;">
              At Avenlo (<strong>avenlo.in</strong>), your privacy is the cornerstone of our Career & Talent Network. Unlike traditional job portals or public social aggregators, <strong>Avenlo does not maintain a publicly searchable candidate directory</strong>. Your profile, resume, contact details, and career aspirations are strictly confidential and accessible only to authorized Avenlo talent advisors.
            </p>

            <h3 style="font-size:1.3rem;margin-bottom:0.75rem;color:var(--navy);">2. Information We Collect</h3>
            <p style="margin-bottom:0.75rem;">To deliver our personalized career advisory and talent matching services, we collect:</p>
            <ul style="padding-left:1.5rem;margin-bottom:1.5rem;">
              <li><strong>Candidate Account Data:</strong> Name, verified email address, phone number, current city, and login credentials.</li>
              <li><strong>Professional Details:</strong> Resume/CV, work history, skill taxonomy, educational background, notice period, compensation expectations, and career goals.</li>
              <li><strong>Career Assessment Data:</strong> Self-assessments, AI-assisted competency scores, and professional development preferences.</li>
              <li><strong>Employer Inquiry Data:</strong> Company name, hiring manager contact information, role requirements, and technical specifications.</li>
            </ul>

            <h3 style="font-size:1.3rem;margin-bottom:0.75rem;color:var(--navy);">3. How We Use Candidate Information</h3>
            <p style="margin-bottom:0.75rem;">Your data is utilized solely for:</p>
            <ul style="padding-left:1.5rem;margin-bottom:1.5rem;">
              <li>Evaluating fit for specialized career mandates submitted by partner organizations.</li>
              <li>Conducting AI-assisted profile enhancement and career trajectory benchmarking.</li>
              <li>Facilitating human-led recruiter introductions when a mutual opportunity arises.</li>
              <li>Delivering optional candidate development services (such as CV reviews or mock interviews) upon explicit request.</li>
            </ul>

            <h3 style="font-size:1.3rem;margin-bottom:0.75rem;color:var(--navy);">4. No Public Scraping or Directory Indexing</h3>
            <p style="margin-bottom:1.5rem;">
              We guarantee that candidate records are never exposed to search engines (Google, Bing, etc.) or open web scrapers. We never sell, rent, or trade candidate personal data to third-party marketing brokers.
            </p>

            <h3 style="font-size:1.3rem;margin-bottom:0.75rem;color:var(--navy);">5. Compliance with India DPDP Act 2023</h3>
            <p style="margin-bottom:1.5rem;">
              Avenlo complies with India's Digital Personal Data Protection (DPDP) Act 2023. You have full sovereignty over your information:
            </p>
            <ul style="padding-left:1.5rem;margin-bottom:1.5rem;">
              <li><strong>Right to Rectification:</strong> Edit or update your professional skills, CV, and preferences directly via your candidate dashboard anytime.</li>
              <li><strong>Right to Erasure:</strong> Request permanent removal of your resume and profile from our Talent Network by emailing <a href="mailto:privacy@avenlo.in" style="color:var(--accent);">privacy@avenlo.in</a>.</li>
            </ul>

            <h3 style="font-size:1.3rem;margin-bottom:0.75rem;color:var(--navy);">6. Security Measures</h3>
            <p style="margin-bottom:1.5rem;">
              All records, resumes, and communications are encrypted in transit using industry-standard TLS 1.3 and at rest with AES-256 standards. Access is restricted on a strict need-to-know basis.
            </p>

            <h3 style="font-size:1.3rem;margin-bottom:0.75rem;color:var(--navy);">7. Contact Our Data Protection Officer</h3>
            <p style="margin-bottom:0;">
              If you have any questions or data requests, contact our Data Protection Team at:
              <br><strong>Email:</strong> <a href="mailto:privacy@avenlo.in" style="color:var(--accent);">privacy@avenlo.in</a>
              <br><strong>Office:</strong> Avenlo Network, Indiranagar, 100 Feet Road, Bengaluru, Karnataka 560038, India
            </p>
          </div>
        </div>
      </section>
    `;
  }
}

window.privacyPage = new PrivacyPage();
