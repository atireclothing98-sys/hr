// AVENLO FOR COMPANIES PAGE
class CompaniesPage {
  constructor() { this.submitted = false; }

  render() {
    if (this.submitted) return this._renderSuccess();

    return `
      <section class="hero-section" style="padding:4rem 0 3rem;">
        <div class="container">
          <div class="hero-content">
            <span class="badge badge-mint" style="margin-bottom:0.75rem;">For Companies</span>
            <h1>Find the right talent<br><span class="accent">for your team.</span></h1>
            <p class="hero-subtitle">
              Tell Avenlo what you're looking for. Our team will understand your requirement and help identify relevant talent from our network.
            </p>
            <div class="hero-cta-group">
              <a href="#companies-form" class="btn btn-navy btn-lg" onclick="setTimeout(()=>document.getElementById('companiesForm')?.scrollIntoView({behavior:'smooth'}),100)">Contact Avenlo</a>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works for Companies -->
      <section class="section section-alt">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">How It Works</span>
            <h2>Simple. Personal. Effective.</h2>
            <p>A straightforward process to help you find the right people.</p>
          </div>

          <div class="process-grid">
            <div class="process-step">
              <div class="step-num">01</div>
              <h4>Contact Avenlo</h4>
              <p>Tell us what kind of talent you're looking for.</p>
            </div>
            <div class="process-step">
              <div class="step-num">02</div>
              <h4>Share Your Requirement</h4>
              <p>Provide information about the role and your expectations.</p>
            </div>
            <div class="process-step">
              <div class="step-num">03</div>
              <h4>We Identify Talent</h4>
              <p>Our team searches the Avenlo talent network.</p>
            </div>
            <div class="process-step">
              <div class="step-num">04</div>
              <h4>We Connect</h4>
              <p>We introduce relevant candidates to the company.</p>
            </div>
            <div class="process-step">
              <div class="step-num">05</div>
              <h4>You Decide</h4>
              <p>The company and candidate handle the final hiring decision.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Company Enquiry Form -->
      <section class="section" id="companiesForm">
        <div class="container container-md">
          <div class="section-header">
            <span class="section-tag">Get Started</span>
            <h2>Tell us what you need</h2>
            <p>Share your hiring requirement and the Avenlo team will get in touch.</p>
          </div>

          <div class="card card-elevated" style="padding:2.5rem;">
            <form id="companyEnquiryForm" onsubmit="window.companiesPage.handleSubmit(event)">

              <h4 style="font-size:0.95rem;color:var(--text-heading);margin-bottom:1rem;border-bottom:1px solid var(--border);padding-bottom:0.5rem;">Company Details</h4>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Company Name *</label>
                  <input type="text" class="form-control" id="cmpName" required placeholder="e.g. Acme Technologies">
                </div>
                <div class="form-group">
                  <label class="form-label">Website</label>
                  <input type="url" class="form-control" id="cmpWebsite" placeholder="https://example.com">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Industry *</label>
                  <select class="form-control" id="cmpIndustry">
                    <option value="Software & Internet">Software & Internet</option>
                    <option value="FinTech">FinTech / Payments</option>
                    <option value="HealthTech">HealthTech / AI</option>
                    <option value="SaaS & Cloud">SaaS & Enterprise Cloud</option>
                    <option value="E-Commerce">E-Commerce & Logistics</option>
                    <option value="AI & DeepTech">AI & DeepTech</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Company Size</label>
                  <select class="form-control" id="cmpSize">
                    <option value="1-20 employees">1–20 (Early Stage)</option>
                    <option value="20-100 employees">20–100 (Scaleup)</option>
                    <option value="100-500 employees" selected>100–500 (Growth)</option>
                    <option value="500+ employees">500+ (Enterprise)</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Location *</label>
                <input type="text" class="form-control" id="cmpLocation" required placeholder="e.g. Bengaluru, Mumbai">
              </div>

              <h4 style="font-size:0.95rem;color:var(--text-heading);margin:1.75rem 0 1rem;border-bottom:1px solid var(--border);padding-bottom:0.5rem;">Contact Person</h4>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Name *</label>
                  <input type="text" class="form-control" id="cmpContact" required placeholder="e.g. Priya Sharma">
                </div>
                <div class="form-group">
                  <label class="form-label">Work Email *</label>
                  <input type="email" class="form-control" id="cmpEmail" required placeholder="priya@company.com">
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Phone Number *</label>
                <input type="tel" class="form-control" id="cmpPhone" required placeholder="+91 98765 43210">
              </div>

              <h4 style="font-size:0.95rem;color:var(--text-heading);margin:1.75rem 0 1rem;border-bottom:1px solid var(--border);padding-bottom:0.5rem;">Hiring Requirement</h4>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Role / Position *</label>
                  <input type="text" class="form-control" id="cmpRole" required placeholder="e.g. Senior Frontend Engineer">
                </div>
                <div class="form-group">
                  <label class="form-label">Number of People *</label>
                  <input type="number" class="form-control" id="cmpOpenings" min="1" value="1" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Required Experience *</label>
                  <input type="text" class="form-control" id="cmpExp" required placeholder="e.g. 4–7 years">
                </div>
                <div class="form-group">
                  <label class="form-label">Key Skills *</label>
                  <input type="text" class="form-control" id="cmpSkills" required placeholder="e.g. React, TypeScript, Node.js">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Location</label>
                  <input type="text" class="form-control" id="cmpRoleLoc" placeholder="e.g. Bengaluru, Remote">
                </div>
                <div class="form-group">
                  <label class="form-label">Work Mode</label>
                  <select class="form-control" id="cmpWorkMode">
                    <option value="Hybrid" selected>Hybrid</option>
                    <option value="Remote (India)">Remote (India)</option>
                    <option value="Onsite">Onsite</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Expected Salary Range</label>
                  <input type="text" class="form-control" id="cmpSalary" placeholder="e.g. ₹20–30 LPA">
                </div>
                <div class="form-group">
                  <label class="form-label">Employment Type</label>
                  <select class="form-control" id="cmpType">
                    <option value="Full-time" selected>Full-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Part-time">Part-time</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Expected Joining Timeline</label>
                <select class="form-control" id="cmpTimeline">
                  <option value="Immediate">Immediate</option>
                  <option value="Within 30 Days" selected>Within 30 Days</option>
                  <option value="30-60 Days">30–60 Days</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Additional Information</label>
                <textarea class="form-control" id="cmpNotes" rows="3" placeholder="Anything else we should know about the role or your team..."></textarea>
              </div>

              <div style="margin-top:2rem;display:flex;justify-content:flex-end;">
                <button type="submit" class="btn btn-navy btn-lg" id="cmpSubmitBtn">Contact Avenlo</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    `;
  }

  _renderSuccess() {
    return `
      <section class="section" style="min-height:60vh;display:flex;align-items:center;">
        <div class="container" style="text-align:center;max-width:560px;margin:0 auto;">
          <div style="width:64px;height:64px;border-radius:50%;background:var(--mint-light);color:#059669;display:flex;align-items:center;justify-content:center;font-size:1.75rem;margin:0 auto 1.5rem;">✓</div>
          <h1 style="font-size:2rem;margin-bottom:0.75rem;">Thanks for reaching out.</h1>
          <p style="font-size:1.1rem;color:var(--text-light);line-height:1.65;margin-bottom:2rem;">
            We've received your requirement. The Avenlo team will review it and get in touch with you.
          </p>
          <a href="#home" class="btn btn-primary" onclick="window.companiesPage.submitted=false;">Back to Home</a>
        </div>
      </section>
    `;
  }

  handleSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('cmpSubmitBtn');
    btn.disabled = true;
    btn.textContent = 'Submitting...';

    const skills = document.getElementById('cmpSkills').value.split(',').map(s => s.trim()).filter(Boolean);

    const data = {
      companyName: document.getElementById('cmpName').value,
      website: document.getElementById('cmpWebsite').value,
      industry: document.getElementById('cmpIndustry').value,
      companySize: document.getElementById('cmpSize').value,
      location: document.getElementById('cmpLocation').value,
      contactPerson: document.getElementById('cmpContact').value,
      email: document.getElementById('cmpEmail').value,
      phone: document.getElementById('cmpPhone').value,
      roleTitle: document.getElementById('cmpRole').value,
      openings: Number(document.getElementById('cmpOpenings').value) || 1,
      requiredExperience: document.getElementById('cmpExp').value,
      requiredSkills: skills,
      workMode: document.getElementById('cmpWorkMode').value,
      salaryRange: document.getElementById('cmpSalary').value,
      employmentType: document.getElementById('cmpType').value,
      joiningTimeline: document.getElementById('cmpTimeline').value,
      additionalInfo: document.getElementById('cmpNotes').value
    };

    setTimeout(() => {
      window.db.addEnquiry(data);
      this.submitted = true;
      window.router.render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  }
}

window.companiesPage = new CompaniesPage();
