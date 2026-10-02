// AVENLO CANDIDATE REGISTRATION (JOIN AVENLO)
class JoinPage {
  constructor() {
    this.step = 1;
    this.formData = {
      name: '',
      email: '',
      phone: '',
      city: 'Bengaluru',
      password: '',
      currentRole: '',
      yearsExperience: '4',
      industry: 'Software & Technology',
      currentCompany: '',
      skills: ['React', 'JavaScript', 'Node.js'],
      education: '',
      desiredRoles: '',
      preferredLocations: ['Bengaluru', 'Remote'],
      workMode: 'Hybrid',
      expectedSalaryLPA: 24,
      noticePeriod: '30 Days',
      careerGoals: '',
      cvFilename: ''
    };
  }

  render() {
    return `
      <section class="section" style="padding-top:3.5rem;padding-bottom:5rem;">
        <div class="container container-md">
          <!-- Header -->
          <div style="text-align:center;margin-bottom:2.5rem;">
            <span class="badge badge-mint" style="margin-bottom:0.75rem;">Avenlo Talent Network</span>
            <h1 style="font-size:2.25rem;">Join Avenlo</h1>
            <p style="font-size:1.05rem;color:var(--text-light);max-width:540px;margin:0.5rem auto 0;line-height:1.6;">
              Build your verified career profile and join our curated network. When suitable opportunities arise, our team connects directly with you.
            </p>
          </div>

          <!-- Stepper Progress Bar -->
          <div class="stepper-wrap" style="margin-bottom:2.5rem;">
            <div class="step-item ${this.step >= 1 ? 'active' : ''} ${this.step > 1 ? 'completed' : ''}">
              <div class="step-circle">${this.step > 1 ? '✓' : '1'}</div>
              <div class="step-label">Account</div>
            </div>
            <div class="step-line ${this.step >= 2 ? 'completed' : ''}"></div>
            <div class="step-item ${this.step >= 2 ? 'active' : ''} ${this.step > 2 ? 'completed' : ''}">
              <div class="step-circle">${this.step > 2 ? '✓' : '2'}</div>
              <div class="step-label">Experience</div>
            </div>
            <div class="step-line ${this.step >= 3 ? 'completed' : ''}"></div>
            <div class="step-item ${this.step >= 3 ? 'active' : ''} ${this.step > 3 ? 'completed' : ''}">
              <div class="step-circle">${this.step > 3 ? '✓' : '3'}</div>
              <div class="step-label">CV & Goals</div>
            </div>
            <div class="step-line ${this.step >= 4 ? 'completed' : ''}"></div>
            <div class="step-item ${this.step >= 4 ? 'active' : ''}">
              <div class="step-circle">4</div>
              <div class="step-label">Network Ready</div>
            </div>
          </div>

          <!-- Step Content Container -->
          <div class="card card-elevated" style="padding:2.5rem;">
            ${this._renderCurrentStep()}
          </div>

          <!-- Footer reassurance -->
          <div style="text-align:center;margin-top:1.5rem;font-size:0.875rem;color:var(--text-light);">
            <span>Already have an Avenlo account? <a href="#login" style="color:var(--accent);font-weight:600;text-decoration:none;">Log In</a></span>
          </div>
        </div>
      </section>
    `;
  }

  _renderCurrentStep() {
    switch (this.step) {
      case 1:
        return this._renderStep1();
      case 2:
        return this._renderStep2();
      case 3:
        return this._renderStep3();
      case 4:
        return this._renderStep4();
      default:
        return this._renderStep1();
    }
  }

  _renderStep1() {
    return `
      <form id="joinStep1Form" onsubmit="window.joinPage.handleStep1(event)">
        <h3 style="font-size:1.25rem;margin-bottom:0.4rem;">Step 1: Create Your Account</h3>
        <p style="font-size:0.9rem;color:var(--text-light);margin-bottom:1.75rem;">
          Your contact information is strictly confidential and never displayed publicly.
        </p>

        <div class="grid grid-2" style="gap:1rem;">
          <div class="form-group">
            <label class="form-label" for="regName">Full Name *</label>
            <input type="text" id="regName" class="form-control" value="${this.formData.name}" placeholder="e.g. Vikram Malhotra" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="regEmail">Email Address *</label>
            <input type="email" id="regEmail" class="form-control" value="${this.formData.email}" placeholder="vikram@example.com" required>
          </div>
        </div>

        <div class="grid grid-2" style="gap:1rem;">
          <div class="form-group">
            <label class="form-label" for="regPhone">Phone Number *</label>
            <input type="tel" id="regPhone" class="form-control" value="${this.formData.phone}" placeholder="+91 98765 43210" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="regCity">Current City *</label>
            <select id="regCity" class="form-control" required>
              <option value="Bengaluru" ${this.formData.city === 'Bengaluru' ? 'selected' : ''}>Bengaluru</option>
              <option value="Mumbai" ${this.formData.city === 'Mumbai' ? 'selected' : ''}>Mumbai</option>
              <option value="Hyderabad" ${this.formData.city === 'Hyderabad' ? 'selected' : ''}>Hyderabad</option>
              <option value="Pune" ${this.formData.city === 'Pune' ? 'selected' : ''}>Pune</option>
              <option value="Delhi NCR" ${this.formData.city === 'Delhi NCR' ? 'selected' : ''}>Delhi NCR</option>
              <option value="Chennai" ${this.formData.city === 'Chennai' ? 'selected' : ''}>Chennai</option>
              <option value="Kolkata" ${this.formData.city === 'Kolkata' ? 'selected' : ''}>Kolkata</option>
              <option value="Remote / Other" ${this.formData.city === 'Remote / Other' ? 'selected' : ''}>Remote / Other</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="regPassword">Create Password *</label>
          <input type="password" id="regPassword" class="form-control" placeholder="Minimum 6 characters" minlength="6" required>
          <span style="font-size:0.75rem;color:var(--text-light);margin-top:0.25rem;display:block;">
            Used to securely log into your candidate dashboard.
          </span>
        </div>

        <div style="display:flex;justify-content:flex-end;margin-top:1.5rem;">
          <button type="submit" class="btn btn-navy" style="min-width:140px;">
            Continue &rarr;
          </button>
        </div>
      </form>
    `;
  }

  _renderStep2() {
    return `
      <form id="joinStep2Form" onsubmit="window.joinPage.handleStep2(event)">
        <h3 style="font-size:1.25rem;margin-bottom:0.4rem;">Step 2: Professional Profile</h3>
        <p style="font-size:0.9rem;color:var(--text-light);margin-bottom:1.75rem;">
          Tell us about your background so we can match you accurately with appropriate roles.
        </p>

        <div class="grid grid-2" style="gap:1rem;">
          <div class="form-group">
            <label class="form-label" for="regRole">Current or Most Recent Role *</label>
            <input type="text" id="regRole" class="form-control" value="${this.formData.currentRole}" placeholder="e.g. Senior Product Designer" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="regExp">Total Years of Experience *</label>
            <select id="regExp" class="form-control" required>
              <option value="0-1" ${this.formData.yearsExperience === '0-1' ? 'selected' : ''}>0 - 1 year (Entry / Graduate)</option>
              <option value="1-3" ${this.formData.yearsExperience === '1-3' ? 'selected' : ''}>1 - 3 years (Early Career)</option>
              <option value="3-5" ${this.formData.yearsExperience === '3-5' ? 'selected' : ''}>3 - 5 years (Mid-Level)</option>
              <option value="5-8" ${this.formData.yearsExperience === '5-8' ? 'selected' : ''}>5 - 8 years (Senior)</option>
              <option value="8-12" ${this.formData.yearsExperience === '8-12' ? 'selected' : ''}>8 - 12 years (Staff / Lead)</option>
              <option value="12+" ${this.formData.yearsExperience === '12+' ? 'selected' : ''}>12+ years (Principal / Director / Executive)</option>
            </select>
          </div>
        </div>

        <div class="grid grid-2" style="gap:1rem;">
          <div class="form-group">
            <label class="form-label" for="regIndustry">Primary Industry *</label>
            <select id="regIndustry" class="form-control" required>
              <option value="Software & Technology" ${this.formData.industry === 'Software & Technology' ? 'selected' : ''}>Software & Technology</option>
              <option value="Fintech & Banking" ${this.formData.industry === 'Fintech & Banking' ? 'selected' : ''}>Fintech & Banking</option>
              <option value="E-Commerce & D2C" ${this.formData.industry === 'E-Commerce & D2C' ? 'selected' : ''}>E-Commerce & D2C</option>
              <option value="Healthcare & Healthtech" ${this.formData.industry === 'Healthcare & Healthtech' ? 'selected' : ''}>Healthcare & Healthtech</option>
              <option value="SaaS & Enterprise" ${this.formData.industry === 'SaaS & Enterprise' ? 'selected' : ''}>SaaS & Enterprise</option>
              <option value="Consulting & Analytics" ${this.formData.industry === 'Consulting & Analytics' ? 'selected' : ''}>Consulting & Analytics</option>
              <option value="Other" ${this.formData.industry === 'Other' ? 'selected' : ''}>Other Industry</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="regCompany">Current / Past Company</label>
            <input type="text" id="regCompany" class="form-control" value="${this.formData.currentCompany}" placeholder="e.g. Razorpay, Swiggy, Infosys">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="regSkills">Core Skills (comma separated) *</label>
          <input type="text" id="regSkills" class="form-control" value="${this.formData.skills.join(', ')}" placeholder="e.g. React, Node.js, System Architecture, AWS" required>
          <span style="font-size:0.75rem;color:var(--text-light);margin-top:0.25rem;display:block;">
            Add your strongest technical or business skills.
          </span>
        </div>

        <div class="form-group">
          <label class="form-label" for="regEdu">Highest Degree & College</label>
          <input type="text" id="regEdu" class="form-control" value="${this.formData.education}" placeholder="e.g. B.Tech Computer Science, BITS Pilani">
        </div>

        <div style="display:flex;justify-content:space-between;margin-top:1.5rem;">
          <button type="button" class="btn btn-secondary" onclick="window.joinPage.step=1;window.app.render();">
            &larr; Back
          </button>
          <button type="submit" class="btn btn-navy" style="min-width:140px;">
            Continue &rarr;
          </button>
        </div>
      </form>
    `;
  }

  _renderStep3() {
    return `
      <form id="joinStep3Form" onsubmit="window.joinPage.handleStep3(event)">
        <h3 style="font-size:1.25rem;margin-bottom:0.4rem;">Step 3: CV Upload & Career Goals</h3>
        <p style="font-size:0.9rem;color:var(--text-light);margin-bottom:1.75rem;">
          Share your resume and preferences so our team knows what you're seeking.
        </p>

        <!-- CV Upload Drag-drop simulator -->
        <div class="form-group">
          <label class="form-label">Upload CV / Resume (PDF or DOCX) *</label>
          <div class="cv-upload-zone" id="cvDropZone" onclick="document.getElementById('cvFileInput').click()" style="border:2px dashed var(--border);border-radius:10px;padding:2rem;text-align:center;cursor:pointer;background:var(--bg-subtle);transition:all 0.2s ease;">
            <input type="file" id="cvFileInput" accept=".pdf,.doc,.docx" style="display:none;" onchange="window.joinPage.handleFileChosen(this)">
            <div style="width:48px;height:48px;background:var(--accent-light);color:var(--accent);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 0.75rem;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            </div>
            <div id="cvFileNameDisplay">
              ${this.formData.cvFilename ? `
                <div style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.4rem 0.85rem;background:#ecfdf5;color:#059669;border-radius:6px;font-weight:600;font-size:0.9rem;">
                  <span>📄 ${this.formData.cvFilename}</span>
                  <span style="font-size:0.75rem;">(Ready)</span>
                </div>
              ` : `
                <div style="font-weight:600;color:var(--navy);margin-bottom:0.25rem;">Click to browse or drag & drop your CV here</div>
                <div style="font-size:0.8rem;color:var(--text-light);">Supports PDF, DOC, DOCX up to 10MB</div>
              `}
            </div>
          </div>
        </div>

        <div class="grid grid-2" style="gap:1rem;">
          <div class="form-group">
            <label class="form-label" for="regTargetRole">Desired Next Role *</label>
            <input type="text" id="regTargetRole" class="form-control" value="${this.formData.desiredRoles}" placeholder="e.g. Lead Engineer or Engineering Manager" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="regSalary">Expected Annual Compensation (₹ LPA) *</label>
            <input type="number" id="regSalary" class="form-control" value="${this.formData.expectedSalaryLPA}" min="3" max="150" placeholder="e.g. 28" required>
          </div>
        </div>

        <div class="grid grid-2" style="gap:1rem;">
          <div class="form-group">
            <label class="form-label" for="regNotice">Notice Period *</label>
            <select id="regNotice" class="form-control" required>
              <option value="Immediate" ${this.formData.noticePeriod === 'Immediate' ? 'selected' : ''}>Immediate (Available right now)</option>
              <option value="15 Days" ${this.formData.noticePeriod === '15 Days' ? 'selected' : ''}>15 Days</option>
              <option value="30 Days" ${this.formData.noticePeriod === '30 Days' ? 'selected' : ''}>30 Days / 1 Month</option>
              <option value="60 Days" ${this.formData.noticePeriod === '60 Days' ? 'selected' : ''}>60 Days / 2 Months</option>
              <option value="90 Days" ${this.formData.noticePeriod === '90 Days' ? 'selected' : ''}>90 Days / 3 Months</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="regWorkMode">Work Mode Preference *</label>
            <select id="regWorkMode" class="form-control" required>
              <option value="Hybrid" ${this.formData.workMode === 'Hybrid' ? 'selected' : ''}>Hybrid (Bengaluru / Preferred)</option>
              <option value="Remote" ${this.formData.workMode === 'Remote' ? 'selected' : ''}>Fully Remote</option>
              <option value="On-Site" ${this.formData.workMode === 'On-Site' ? 'selected' : ''}>On-Site (Office)</option>
              <option value="Flexible" ${this.formData.workMode === 'Flexible' ? 'selected' : ''}>Flexible / Open to discussion</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="regCareerGoals">What are you looking for in your next career chapter?</label>
          <textarea id="regCareerGoals" class="form-control" rows="3" placeholder="Tell us about the kind of team, challenges, scale, or leadership opportunities you're excited about.">${this.formData.careerGoals}</textarea>
        </div>

        <div style="display:flex;justify-content:space-between;margin-top:1.5rem;">
          <button type="button" class="btn btn-secondary" onclick="window.joinPage.step=2;window.app.render();">
            &larr; Back
          </button>
          <button type="submit" class="btn btn-navy" style="min-width:180px;">
            Complete Registration &rarr;
          </button>
        </div>
      </form>
    `;
  }

  _renderStep4() {
    return `
      <div style="text-align:center;padding:1.5rem 0;">
        <div style="width:72px;height:72px;border-radius:50%;background:#ecfdf5;color:#059669;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>

        <h2 style="font-size:1.85rem;margin-bottom:0.75rem;">Welcome to the Avenlo Network</h2>
        <p style="font-size:1.05rem;color:var(--text-light);max-width:540px;margin:0 auto 2rem;line-height:1.65;">
          Your profile is registered with Avenlo. Our talent matching team reviews verified profiles when matching with vetted company mandates.
        </p>

        <!-- Recommended next step: AI Career Assessment -->
        <div class="card" style="background:linear-gradient(135deg, rgba(37,99,235,0.04), rgba(50,213,131,0.06));border-color:rgba(37,99,235,0.2);padding:1.75rem;margin-bottom:2rem;text-align:left;">
          <div style="display:flex;gap:1.25rem;align-items:center;flex-wrap:wrap;">
            <div style="width:48px;height:48px;background:var(--accent);color:#fff;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <div style="flex:1;min-width:240px;">
              <h4 style="font-size:1.1rem;color:var(--navy);margin-bottom:0.25rem;">Unlock Your AI Career Assessment</h4>
              <p style="font-size:0.875rem;color:var(--text-light);margin:0;">
                Get personalized market benchmarking, skill radar analysis, and recruiter-readiness scoring inside your dashboard.
              </p>
            </div>
          </div>
        </div>

        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <a href="#dashboard" class="btn btn-navy btn-lg">
            Open Candidate Dashboard &rarr;
          </a>
        </div>
      </div>
    `;
  }

  handleStep1(e) {
    e.preventDefault();
    this.formData.name = document.getElementById('regName').value.trim();
    this.formData.email = document.getElementById('regEmail').value.trim();
    this.formData.phone = document.getElementById('regPhone').value.trim();
    this.formData.city = document.getElementById('regCity').value;
    this.formData.password = document.getElementById('regPassword').value;

    if (!this.formData.name || !this.formData.email || !this.formData.password) {
      window.toast('Please fill in all required fields.', 'warning');
      return;
    }

    // Check if email already registered
    const existing = window.db && window.db.getUserByEmail(this.formData.email);
    if (existing) {
      window.toast('An account with this email already exists. Please log in.', 'danger');
      return;
    }

    this.step = 2;
    window.app.render();
  }

  handleStep2(e) {
    e.preventDefault();
    this.formData.currentRole = document.getElementById('regRole').value.trim();
    this.formData.yearsExperience = document.getElementById('regExp').value;
    this.formData.industry = document.getElementById('regIndustry').value;
    this.formData.currentCompany = document.getElementById('regCompany').value.trim();
    const skillsRaw = document.getElementById('regSkills').value;
    this.formData.skills = skillsRaw.split(',').map(s => s.trim()).filter(Boolean);
    this.formData.education = document.getElementById('regEdu').value.trim();

    this.step = 3;
    window.app.render();
  }

  handleFileChosen(input) {
    if (input.files && input.files[0]) {
      this.formData.cvFilename = input.files[0].name;
      const display = document.getElementById('cvFileNameDisplay');
      if (display) {
        display.innerHTML = `
          <div style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.4rem 0.85rem;background:#ecfdf5;color:#059669;border-radius:6px;font-weight:600;font-size:0.9rem;">
            <span>📄 ${this.formData.cvFilename}</span>
            <span style="font-size:0.75rem;">(Ready)</span>
          </div>
        `;
      }
    }
  }

  async handleStep3(e) {
    e.preventDefault();
    this.formData.desiredRoles = document.getElementById('regTargetRole').value.trim();
    this.formData.expectedSalaryLPA = Number(document.getElementById('regSalary').value) || 20;
    this.formData.noticePeriod = document.getElementById('regNotice').value;
    this.formData.workMode = document.getElementById('regWorkMode').value;
    this.formData.careerGoals = document.getElementById('regCareerGoals').value.trim();

    if (!this.formData.cvFilename) {
      // If user didn't upload a file manually, set a clean standard CV filename
      const cleanName = (this.formData.name || 'Candidate').replace(/\s+/g, '_');
      this.formData.cvFilename = `${cleanName}_CV.pdf`;
    }

    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Creating Profile...';
    btn.disabled = true;

    // Register user and create candidate profile
    const regResult = await window.auth.register({
      name: this.formData.name,
      email: this.formData.email,
      phone: this.formData.phone,
      city: this.formData.city,
      password: this.formData.password
    }, {
      title: this.formData.currentRole,
      yearsExperience: this.formData.yearsExperience,
      industry: this.formData.industry,
      currentCompany: this.formData.currentCompany,
      skills: this.formData.skills,
      education: this.formData.education,
      desiredRoles: [this.formData.desiredRoles],
      preferredLocations: [this.formData.city, 'Remote'],
      workModePreference: this.formData.workMode,
      expectedSalaryLPA: this.formData.expectedSalaryLPA,
      noticePeriod: this.formData.noticePeriod,
      careerGoals: this.formData.careerGoals,
      cvFilename: this.formData.cvFilename,
      profileCompletion: 85,
      networkStatus: 'talent_network',
      statusNote: 'Profile registered & verified in Talent Network.'
    });

    btn.innerHTML = originalText;
    btn.disabled = false;

    if (regResult.error) {
      window.toast(regResult.error, 'danger');
      return;
    }

    window.toast('Welcome to Avenlo! Profile created successfully.', 'success');
    this.step = 4;
    window.app.render();
  }
}

window.joinPage = new JoinPage();
