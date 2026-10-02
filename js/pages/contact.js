// AVENLO CONTACT PAGE
class ContactPage {
  constructor() {
    this.submitted = false;
  }

  render() {
    if (this.submitted) {
      return `
        <section class="section" style="padding-top:4rem;">
          <div class="container container-sm">
            <div class="card card-elevated" style="text-align:center;padding:3rem 2rem;">
              <div style="width:64px;height:64px;background:#ecfdf5;color:#059669;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h2 style="font-size:1.75rem;margin-bottom:0.75rem;">Message Received</h2>
              <p style="color:var(--text-light);line-height:1.6;margin-bottom:2rem;">
                Thank you for reaching out to Avenlo. Our team in Bengaluru has received your message and will respond within 24 business hours.
              </p>
              <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
                <a href="#home" class="btn btn-secondary">Return Home</a>
                <button class="btn btn-navy" onclick="window.contactPage.submitted=false;window.app.render();">Send Another Message</button>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    return `
      <section class="section" style="padding-top:3.5rem;">
        <div class="container">
          <div style="text-align:center;max-width:680px;margin:0 auto 3rem;">
            <span class="badge badge-mint" style="margin-bottom:0.75rem;">Get In Touch</span>
            <h1>Contact Avenlo</h1>
            <p style="font-size:1.1rem;color:var(--text-light);line-height:1.65;margin-top:0.75rem;">
              Whether you are an ambitious professional looking to grow your career or an organization seeking exceptional talent, our team is here to assist you.
            </p>
          </div>

          <div class="grid grid-2" style="gap:2.5rem;align-items:start;">
            <!-- Contact Form -->
            <div class="card card-elevated" style="padding:2.25rem;">
              <h3 style="font-size:1.35rem;margin-bottom:0.5rem;">Send Us a Message</h3>
              <p style="font-size:0.9rem;color:var(--text-light);margin-bottom:1.75rem;">
                Fill out the details below and we will get back to you promptly.
              </p>

              <form id="generalContactForm" onsubmit="window.contactPage.handleSubmit(event)">
                <div class="form-group">
                  <label class="form-label" for="contactName">Full Name *</label>
                  <input type="text" id="contactName" class="form-control" placeholder="e.g. Meera Nair" required>
                </div>

                <div class="grid grid-2" style="gap:1rem;">
                  <div class="form-group">
                    <label class="form-label" for="contactEmail">Email Address *</label>
                    <input type="email" id="contactEmail" class="form-control" placeholder="name@company.com" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="contactPhone">Phone Number</label>
                    <input type="tel" id="contactPhone" class="form-control" placeholder="+91 98765 43210">
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="contactSubject">I am reaching out regarding *</label>
                  <select id="contactSubject" class="form-control" required>
                    <option value="">Select an inquiry type</option>
                    <option value="Candidate Network Inquiry">Candidate Network / Career Inquiry</option>
                    <option value="Hiring & Talent Partnership">Hiring & Talent Partnership (Employer)</option>
                    <option value="Career Advisory Services">Career Advisory & Resume Review Services</option>
                    <option value="Partnership & Press">Partnership, Press & Media</option>
                    <option value="General Support">General Support</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="contactMessage">Message *</label>
                  <textarea id="contactMessage" class="form-control" rows="4" placeholder="How can we assist you?" required></textarea>
                </div>

                <button type="submit" class="btn btn-navy btn-block" style="padding:0.875rem;">
                  Send Message
                </button>
              </form>
            </div>

            <!-- Contact Information & Quick Actions -->
            <div>
              <div class="card" style="padding:2rem;margin-bottom:1.5rem;">
                <h4 style="font-size:1.15rem;margin-bottom:1.25rem;">Avenlo Network Hub</h4>
                
                <div style="display:flex;gap:1rem;margin-bottom:1.25rem;align-items:flex-start;">
                  <div style="width:40px;height:40px;border-radius:8px;background:var(--accent-light);color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <strong style="display:block;font-size:0.95rem;color:var(--navy);">Location</strong>
                    <span style="font-size:0.9rem;color:var(--text-light);line-height:1.5;display:block;">
                      Indiranagar, 100 Feet Road<br>Bengaluru, Karnataka 560038, India
                    </span>
                  </div>
                </div>

                <div style="display:flex;gap:1rem;margin-bottom:1.25rem;align-items:flex-start;">
                  <div style="width:40px;height:40px;border-radius:8px;background:var(--mint-light);color:var(--mint);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <strong style="display:block;font-size:0.95rem;color:var(--navy);">Direct Email</strong>
                    <a href="mailto:hello@avenlo.in" style="font-size:0.9rem;color:var(--accent);text-decoration:none;">hello@avenlo.in</a>
                  </div>
                </div>

                <div style="display:flex;gap:1rem;align-items:flex-start;">
                  <div style="width:40px;height:40px;border-radius:8px;background:var(--primary-subtle);color:var(--navy);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <strong style="display:block;font-size:0.95rem;color:var(--navy);">Response Time</strong>
                    <span style="font-size:0.9rem;color:var(--text-light);line-height:1.5;display:block;">
                      Monday – Friday, 9:30 AM – 6:30 PM IST<br>Typical reply within 4 hours
                    </span>
                  </div>
                </div>
              </div>

              <!-- Quick Routing Cards -->
              <div class="card" style="padding:1.5rem;background:linear-gradient(135deg, rgba(37,99,235,0.04), rgba(50,213,131,0.06));border-color:rgba(37,99,235,0.15);margin-bottom:1.5rem;">
                <h4 style="font-size:1.05rem;color:var(--navy);margin-bottom:0.4rem;">Looking for Specific Support?</h4>
                <p style="font-size:0.875rem;color:var(--text-light);margin-bottom:1rem;line-height:1.5;">
                  Jump straight into the dedicated pathway for faster resolution:
                </p>
                <div style="display:flex;gap:0.75rem;flex-direction:column;">
                  <a href="#join" class="btn btn-sm btn-outline-primary" style="text-align:left;justify-content:space-between;display:flex;align-items:center;">
                    <span>Join Avenlo Talent Network (Candidates)</span>
                    <span>&rarr;</span>
                  </a>
                  <a href="#companies" class="btn btn-sm btn-outline-primary" style="text-align:left;justify-content:space-between;display:flex;align-items:center;">
                    <span>Submit Hiring Requirement (Companies)</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const phone = document.getElementById('contactPhone')?.value.trim();
    const subject = document.getElementById('contactSubject')?.value;
    const message = document.getElementById('contactMessage')?.value.trim();

    if (!name || !email || !message) {
      window.toast('Please fill in all required fields.', 'warning');
      return;
    }

    if (window.db && window.db.createContactMessage) {
      window.db.createContactMessage({ name, email, phone, subject, message });
    }

    this.submitted = true;
    window.app.render();
    window.toast('Your message has been sent successfully.', 'success');
  }
}

window.contactPage = new ContactPage();
