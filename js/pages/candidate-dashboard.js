// AVENLO SUPER-PREMIUM CANDIDATE DASHBOARD
class CandidateDashboardPage {
  constructor() {
    this.activeTab = 'profile'; // 'profile', 'assessment', 'services'
    this.isEditingProfile = false;
    this.isAssessing = false;
    this.bookingService = null;
  }

  render() {
    const user = window.auth ? window.auth.getCurrentUser() : null;
    if (!user) {
      return `
        <div class="dash-shell" style="display:flex;align-items:center;justify-content:center;">
          <div class="dash-card" style="max-width:440px;text-align:center;padding:3rem 2rem;">
            <div style="width:64px;height:64px;border-radius:50%;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;font-size:1.75rem;">
              🔒
            </div>
            <h2 style="font-size:1.5rem;margin-bottom:0.5rem;color:#0F172A;">Sign In Required</h2>
            <p style="color:#64748B;font-size:0.95rem;margin-bottom:1.75rem;">Please log in to your candidate account to access your Talent Network dashboard.</p>
            <a href="#login" class="btn btn-primary btn-block">Log In to Avenlo</a>
          </div>
        </div>
      `;
    }

    const profile = (window.db && window.db.getCandidateProfile(user.id)) || {
      title: 'Senior Software Engineer',
      yearsExperience: '5-8',
      industry: 'Software & Technology',
      currentCompany: 'Growth Stage Tech',
      skills: ['React', 'TypeScript', 'Node.js', 'System Architecture', 'Cloud Infrastructure'],
      desiredRoles: ['Staff Engineer', 'Engineering Manager'],
      preferredLocations: ['Bengaluru', 'Remote'],
      workModePreference: 'Hybrid / Remote',
      expectedSalaryLPA: 28,
      noticePeriod: '30 Days',
      careerGoals: 'Transition into high-impact Staff UI or Fullstack Architecture leadership role.',
      cvFilename: `${user.name.replace(/\s+/g, '_')}_CV.pdf`,
      profileCompletion: 90,
      networkStatus: 'talent_network',
      statusNote: 'Profile verified and actively eligible for partner company mandates.',
      assessmentScore: 91
    };

    return `
      <div class="dash-shell">
        <div class="dash-container">
          <!-- 1. Executive Command Header Banner -->
          <div class="dash-hero-card">
            <div class="dash-hero-inner">
              <div class="dash-user-meta">
                <div class="dash-avatar-ring">
                  ${user.avatar || user.name.split(' ').map(w => w[0]).join('').toUpperCase().substr(0, 2)}
                </div>
                <div class="dash-user-info">
                  <h2>
                    <span>${user.name}</span>
                    <span class="badge" style="background:rgba(16,185,129,0.2);color:#34D399;border:1px solid rgba(52,211,153,0.3);font-size:0.75rem;padding:0.35rem 0.75rem;border-radius:20px;font-weight:700;">
                      <span class="pulse-dot"></span>Talent Network Active
                    </span>
                  </h2>
                  <p>
                    ${profile.title || 'Technical Specialist'} • ${user.city || 'Bengaluru'} • ${profile.yearsExperience || '5+'} Years Exp
                  </p>
                </div>
              </div>

              <!-- Quick Meta Highlights -->
              <div style="display:flex;gap:1rem;flex-wrap:wrap;">
                <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);padding:0.75rem 1.25rem;border-radius:10px;text-align:right;">
                  <span style="font-size:0.72rem;text-transform:uppercase;color:#94A3B8;letter-spacing:0.05em;font-weight:700;display:block;">Expected CTC</span>
                  <strong style="font-size:1.15rem;color:#FFFFFF;">₹ ${profile.expectedSalaryLPA || 24} LPA</strong>
                </div>
                <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);padding:0.75rem 1.25rem;border-radius:10px;text-align:right;">
                  <span style="font-size:0.72rem;text-transform:uppercase;color:#94A3B8;letter-spacing:0.05em;font-weight:700;display:block;">AI Score</span>
                  <strong style="font-size:1.15rem;color:#38BDF8;">${profile.assessmentScore || 91}/100</strong>
                </div>
              </div>
            </div>

            <!-- Profile Health Bar -->
            <div style="margin-top:1.75rem;padding-top:1.25rem;border-top:1px solid rgba(255,255,255,0.1);">
              <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.82rem;margin-bottom:0.4rem;">
                <span style="color:#94A3B8;font-weight:600;">Profile Completeness & Verification Status</span>
                <span style="color:#34D399;font-weight:700;">${profile.profileCompletion || 90}% Ready for Mandates</span>
              </div>
              <div style="height:6px;background:rgba(255,255,255,0.15);border-radius:3px;overflow:hidden;">
                <div style="width:${profile.profileCompletion || 90}%;height:100%;background:linear-gradient(90deg, #3B82F6, #10B981);border-radius:3px;"></div>
              </div>
            </div>
          </div>

          <!-- 2. Segmented Pill Tab Bar -->
          <div class="dash-tabs-bar">
            <button class="dash-tab-btn ${this.activeTab === 'profile' ? 'active' : ''}" onclick="window.candidateDashboard.setTab('profile')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>Profile & Verified CV</span>
            </button>
            <button class="dash-tab-btn ${this.activeTab === 'assessment' ? 'active' : ''}" onclick="window.candidateDashboard.setTab('assessment')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <span>AI Career Intelligence</span>
              <span class="dash-tab-badge">PRO</span>
            </button>
            <button class="dash-tab-btn ${this.activeTab === 'services' ? 'active' : ''}" onclick="window.candidateDashboard.setTab('services')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              <span>Advisory & Mentorship</span>
            </button>
          </div>

          <!-- 3. Dynamic Tab Content -->
          <div>
            ${this._renderCurrentTab(user, profile)}
          </div>
        </div>

        <!-- 4. Interactive Booking Modal (if opened) -->
        ${this.bookingService ? this._renderBookingModal(user) : ''}
      </div>
    `;
  }

  setTab(tab) {
    this.activeTab = tab;
    this.isEditingProfile = false;
    window.app.render();
  }

  _renderCurrentTab(user, profile) {
    if (this.activeTab === 'assessment') {
      return this._renderAssessmentView(user, profile);
    }
    if (this.activeTab === 'services') {
      return this._renderServicesView(user);
    }
    return this._renderProfileView(user, profile);
  }

  // ─── TAB 1: PROFILE & CV VIEW ─────────────────────────────
  _renderProfileView(user, profile) {
    if (this.isEditingProfile) {
      return this._renderEditForm(user, profile);
    }

    return `
      <div class="grid grid-3" style="gap:2rem;align-items:start;">
        <!-- Left 2 Cols: Comprehensive Profile Information -->
        <div style="grid-column: span 2;">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3 class="dash-card-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                  Professional Summary & Credentials
                </h3>
                <p class="dash-card-subtitle">Verified background details reviewed by Avenlo talent advisors.</p>
              </div>
              <button class="btn btn-sm btn-secondary" onclick="window.candidateDashboard.isEditingProfile=true;window.app.render();">
                ✏️ Edit Profile
              </button>
            </div>

            <!-- Details Grid -->
            <div class="grid grid-2" style="gap:1.25rem;margin-bottom:1.75rem;">
              <div class="data-tile">
                <span class="data-tile-label">Current Role & Specialization</span>
                <span class="data-tile-value">${profile.title || 'Specialist'}</span>
              </div>
              <div class="data-tile">
                <span class="data-tile-label">Experience Bracket</span>
                <span class="data-tile-value">${profile.yearsExperience || '5+'} Years</span>
              </div>
              <div class="data-tile">
                <span class="data-tile-label">Current / Most Recent Firm</span>
                <span class="data-tile-value">${profile.currentCompany || 'Not disclosed'}</span>
              </div>
              <div class="data-tile">
                <span class="data-tile-label">Notice Period</span>
                <span class="data-tile-value" style="color:#059669;">${profile.noticePeriod || '30 Days'}</span>
              </div>
              <div class="data-tile">
                <span class="data-tile-label">Industry Classification</span>
                <span class="data-tile-value">${profile.industry || 'Software & Technology'}</span>
              </div>
              <div class="data-tile">
                <span class="data-tile-label">Academic Background</span>
                <span class="data-tile-value">${profile.education || 'B.Tech / Bachelor Degree'}</span>
              </div>
            </div>

            <!-- Verified Skills Taxonomy -->
            <div style="margin-bottom:1.75rem;">
              <span style="font-size:0.78rem;font-weight:700;text-transform:uppercase;color:#64748B;letter-spacing:0.05em;display:block;margin-bottom:0.75rem;">
                Verified Core Competencies
              </span>
              <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
                ${(profile.skills || ['JavaScript', 'React', 'Node.js', 'System Architecture']).map(s => `
                  <span class="skill-chip">
                    <span style="color:#2563EB;">●</span> ${s}
                  </span>
                `).join('')}
              </div>
            </div>

            <!-- Career Goals Quote Box -->
            <div>
              <span style="font-size:0.78rem;font-weight:700;text-transform:uppercase;color:#64748B;letter-spacing:0.05em;display:block;margin-bottom:0.5rem;">
                Career Aspiration & Next Trajectory
              </span>
              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-left:4px solid #2563EB;border-radius:8px;padding:1.25rem;font-size:0.95rem;color:#334155;line-height:1.65;font-style:italic;">
                "${profile.careerGoals || 'Seeking high-ownership engineering architecture roles at Series B+ technology scaleups in Bengaluru or Remote.'}"
              </div>
            </div>
          </div>

          <!-- Opportunity Preferences Card -->
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3 class="dash-card-title">Opportunity Matching Preferences</h3>
                <p class="dash-card-subtitle">These preferences guide our team when aligning client mandates.</p>
              </div>
            </div>

            <div class="grid grid-3" style="gap:1.25rem;">
              <div class="data-tile" style="background:#EFF6FF;border-color:#BFDBFE;">
                <span class="data-tile-label" style="color:#1D4ED8;">Target Annual Compensation</span>
                <span class="data-tile-value" style="color:#1E40AF;font-size:1.25rem;">₹ ${profile.expectedSalaryLPA || 24} LPA</span>
              </div>
              <div class="data-tile">
                <span class="data-tile-label">Work Mode Flexibility</span>
                <span class="data-tile-value">${profile.workModePreference || 'Hybrid / Remote'}</span>
              </div>
              <div class="data-tile">
                <span class="data-tile-label">Preferred Work Hubs</span>
                <span class="data-tile-value">${(profile.preferredLocations || ['Bengaluru', 'Remote']).join(', ')}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right 1 Col: CV Management & Network Protocol -->
        <div>
          <!-- CV Card -->
          <div class="dash-card">
            <div class="dash-card-header" style="margin-bottom:1rem;padding-bottom:0.75rem;">
              <h4 class="dash-card-title" style="font-size:1.1rem;">Verified Resume / CV</h4>
            </div>

            <div style="border:1px solid #E2E8F0;background:#F8FAFC;border-radius:12px;padding:1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;">
              <div style="width:48px;height:48px;border-radius:10px;background:#FEE2E2;color:#DC2626;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.9rem;flex-shrink:0;">
                PDF
              </div>
              <div style="overflow:hidden;flex:1;">
                <div style="font-weight:700;font-size:0.95rem;color:#0F172A;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                  ${profile.cvFilename || 'Candidate_CV.pdf'}
                </div>
                <div style="font-size:0.75rem;color:#059669;font-weight:600;margin-top:0.2rem;display:flex;align-items:center;gap:0.3rem;">
                  <span>✓</span> Synced with Talent Pool
                </div>
              </div>
            </div>

            <div style="display:flex;flex-direction:column;gap:0.6rem;">
              <input type="file" id="cvFileInput" accept=".pdf,.doc,.docx" style="display:none;" onchange="window.candidateDashboard.handleCVUpload(this)">
              <button class="btn btn-sm btn-outline-primary btn-block" onclick="document.getElementById('cvFileInput').click()">
                📂 Upload Revised CV
              </button>
              <button class="btn btn-sm btn-secondary btn-block" onclick="window.toast('Downloading ${profile.cvFilename || 'CV'}...', 'info')">
                ⬇️ Download Verified Copy
              </button>
            </div>
          </div>

          <!-- Network Protocol Banner -->
          <div class="dash-card" style="background:linear-gradient(135deg, rgba(37,99,235,0.04), rgba(16,185,129,0.06));border-color:rgba(37,99,235,0.2);">
            <div style="display:flex;gap:0.75rem;align-items:flex-start;margin-bottom:0.75rem;">
              <div style="width:32px;height:32px;border-radius:8px;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.9rem;">
                🛡️
              </div>
              <h5 style="font-size:0.95rem;color:#0F172A;margin:0.25rem 0 0;font-weight:700;">Human-Led Matching</h5>
            </div>
            <p style="font-size:0.85rem;color:#64748B;line-height:1.6;margin:0;">
              Your profile is strictly confidential. When a partner employer submits a requirement aligned with your background and CTC expectations, an Avenlo senior advisor contacts you directly to review the opportunity before any introduction is made.
            </p>
          </div>
        </div>
      </div>
    `;
  }

  // ─── TAB 2: AI CAREER ASSESSMENT VIEW ──────────────────────
  _renderAssessmentView(user, profile) {
    if (this.isAssessing) {
      return `
        <div class="dash-card" style="padding:4rem 2rem;text-align:center;max-width:620px;margin:0 auto;">
          <div class="spinner" style="width:52px;height:52px;border:3px solid #E2E8F0;border-top-color:#2563EB;border-radius:50%;margin:0 auto 1.5rem;animation:spin 0.9s linear infinite;"></div>
          <h3 style="font-size:1.4rem;color:#0F172A;margin-bottom:0.5rem;">Benchmarking Career Trajectory...</h3>
          <p style="font-size:0.95rem;color:#64748B;line-height:1.65;max-width:480px;margin:0 auto;">
            Analyzing current Indian tech hiring standards, compensation percentiles for ${profile.title || 'your role'}, and cross-industry skill demand curves.
          </p>
        </div>
      `;
    }

    return `
      <div>
        <!-- Top Assessment Overview -->
        <div class="dash-card">
          <div class="dash-card-header">
            <div>
              <span class="badge badge-mint" style="margin-bottom:0.5rem;">AI Career Intelligence • Model 2025.4</span>
              <h3 class="dash-card-title">Talent Competency & Market Benchmark Report</h3>
              <p class="dash-card-subtitle">Real-time evaluation against current India tech compensation bands and leadership criteria.</p>
            </div>
            <button class="btn btn-navy" onclick="window.candidateDashboard.triggerAssessment('${user.id}')">
              ⚡ Re-run AI Analysis
            </button>
          </div>

          <!-- 4 KPI Score Cards -->
          <div class="kpi-grid">
            <div class="kpi-card kpi-blue">
              <div class="kpi-header">
                <span class="kpi-label">Profile Strength</span>
                <span class="kpi-icon" style="background:#EFF6FF;color:#2563EB;">🎯</span>
              </div>
              <div class="kpi-value">${profile.assessmentScore || 91}<span style="font-size:1.2rem;color:#94A3B8;">/100</span></div>
              <div class="kpi-subtext" style="color:#059669;font-weight:600;">Top 8% in peer engineering cohort</div>
            </div>

            <div class="kpi-card kpi-emerald">
              <div class="kpi-header">
                <span class="kpi-label">Market Demand Index</span>
                <span class="kpi-icon" style="background:#ECFDF5;color:#10B981;">📈</span>
              </div>
              <div class="kpi-value">94<span style="font-size:1.2rem;color:#94A3B8;">%</span></div>
              <div class="kpi-subtext" style="color:#10B981;font-weight:600;">High demand in Bengaluru / Remote</div>
            </div>

            <div class="kpi-card kpi-amber">
              <div class="kpi-header">
                <span class="kpi-label">CTC Growth Upside</span>
                <span class="kpi-icon" style="background:#FEF3C7;color:#D97706;">💰</span>
              </div>
              <div class="kpi-value">+28<span style="font-size:1.2rem;color:#94A3B8;">%</span></div>
              <div class="kpi-subtext" style="color:#D97706;font-weight:600;">Potential upside in next mandate</div>
            </div>

            <div class="kpi-card kpi-indigo">
              <div class="kpi-header">
                <span class="kpi-label">Recruiter Readiness</span>
                <span class="kpi-icon" style="background:#EEF2FF;color:#6366F1;">⭐</span>
              </div>
              <div class="kpi-value">A+</div>
              <div class="kpi-subtext" style="color:#6366F1;font-weight:600;">Immediate client presentation ready</div>
            </div>
          </div>

          <!-- Deep-dive 2 columns -->
          <div class="grid grid-2" style="gap:2rem;">
            <!-- Radar / Skill Breakdown Bars -->
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:1.75rem;">
              <h4 style="font-size:1.1rem;color:#0F172A;margin-bottom:1.25rem;font-weight:700;">
                📊 Competency Dimension Radar
              </h4>

              <div style="margin-bottom:1.15rem;">
                <div style="display:flex;justify-content:space-between;font-size:0.875rem;margin-bottom:0.35rem;">
                  <span style="font-weight:600;color:#0F172A;">System Architecture & Scale</span>
                  <strong style="color:#2563EB;">92%</strong>
                </div>
                <div class="dash-progress-track">
                  <div class="dash-progress-fill" style="width:92%;"></div>
                </div>
              </div>

              <div style="margin-bottom:1.15rem;">
                <div style="display:flex;justify-content:space-between;font-size:0.875rem;margin-bottom:0.35rem;">
                  <span style="font-weight:600;color:#0F172A;">Technical Execution & Modern Frameworks</span>
                  <strong style="color:#10B981;">96%</strong>
                </div>
                <div class="dash-progress-track">
                  <div class="dash-progress-fill" style="width:96%;background:linear-gradient(90deg,#10B981,#34D399);"></div>
                </div>
              </div>

              <div style="margin-bottom:1.15rem;">
                <div style="display:flex;justify-content:space-between;font-size:0.875rem;margin-bottom:0.35rem;">
                  <span style="font-weight:600;color:#0F172A;">Engineering Leadership & Mentorship</span>
                  <strong style="color:#F59E0B;">84%</strong>
                </div>
                <div class="dash-progress-track">
                  <div class="dash-progress-fill" style="width:84%;background:linear-gradient(90deg,#F59E0B,#FBBF24);"></div>
                </div>
              </div>

              <div>
                <div style="display:flex;justify-content:space-between;font-size:0.875rem;margin-bottom:0.35rem;">
                  <span style="font-weight:600;color:#0F172A;">Product Sense & Cross-Functional Impact</span>
                  <strong style="color:#6366F1;">88%</strong>
                </div>
                <div class="dash-progress-track">
                  <div class="dash-progress-fill" style="width:88%;background:linear-gradient(90deg,#6366F1,#818CF8);"></div>
                </div>
              </div>
            </div>

            <!-- Strategic Feedback & Recommendations -->
            <div style="display:flex;flex-direction:column;gap:1.25rem;">
              <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:12px;padding:1.5rem;">
                <h4 style="font-size:1.05rem;color:#059669;margin-bottom:0.75rem;font-weight:700;display:flex;align-items:center;gap:0.4rem;">
                  <span>✓</span> Primary Differentiators
                </h4>
                <ul style="margin:0;padding-left:1.25rem;font-size:0.875rem;color:#334155;line-height:1.7;">
                  <li>Strong hands-on mastery in ${(profile.skills || ['modern stacks']).slice(0, 3).join(', ')}.</li>
                  <li>Clear demonstration of scaling production apps to high DAU volume.</li>
                  <li>Clean communication skills, facilitating swift leadership interview rounds.</li>
                </ul>
              </div>

              <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:12px;padding:1.5rem;">
                <h4 style="font-size:1.05rem;color:#2563EB;margin-bottom:0.75rem;font-weight:700;display:flex;align-items:center;gap:0.4rem;">
                  <span>★</span> Recommended Strategic Levers
                </h4>
                <ul style="margin:0;padding-left:1.25rem;font-size:0.875rem;color:#334155;line-height:1.7;">
                  <li>Highlight quantified metrics on resume (e.g. 50% faster latency, ₹10M infrastructure savings).</li>
                  <li>Emphasize distributed systems and asynchronous event streaming experience.</li>
                  <li>Consider booking an Avenlo 1-on-1 mock interview to calibrate for top-tier CTO rounds.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ─── TAB 3: ADVISORY & MENTORSHIP SERVICES ────────────────
  _renderServicesView(user) {
    const services = (window.db && window.db.getServices()) || [];
    const orders = (window.db && window.db.getOrders({ userId: user.id })) || [];

    return `
      <div>
        <!-- Intro -->
        <div style="margin-bottom:2rem;">
          <h3 style="font-size:1.4rem;color:#0F172A;margin-bottom:0.35rem;font-weight:800;">
            Personalized Career Acceleration Services
          </h3>
          <p style="color:#64748B;font-size:0.95rem;max-width:700px;margin:0;line-height:1.6;">
            Joining the Avenlo Talent Network is always 100% free. If you want direct 1-on-1 coaching or a complete CV overhaul from senior recruiters who hire for top tier tech firms, you can optionally book below.
          </p>
        </div>

        <!-- Service Cards Grid -->
        <div class="grid grid-3" style="gap:1.5rem;margin-bottom:3rem;">
          ${services.map(s => `
            <div class="dash-card" style="display:flex;flex-direction:column;justify-content:space-between;margin-bottom:0;border-top:4px solid #2563EB;">
              <div>
                <span class="badge badge-mint" style="margin-bottom:0.75rem;font-size:0.75rem;font-weight:700;">
                  1-on-1 Advisory
                </span>
                <h4 style="font-size:1.2rem;font-weight:700;color:#0F172A;margin-bottom:0.5rem;">
                  ${s.title}
                </h4>
                <p style="font-size:0.875rem;color:#64748B;line-height:1.6;margin-bottom:1.25rem;">
                  ${s.description}
                </p>
                <div style="font-size:0.85rem;color:#334155;background:#F8FAFC;padding:0.75rem;border-radius:8px;margin-bottom:1.25rem;">
                  <strong style="color:#0F172A;">Turnaround:</strong> ${s.turnaround || '2-3 Business Days'}
                </div>
              </div>

              <div>
                <div style="display:flex;justify-content:space-between;align-items:baseline;padding:0.75rem 0;border-top:1px solid #E2E8F0;margin-bottom:1rem;">
                  <span style="font-size:0.85rem;color:#64748B;font-weight:600;">Professional Fee</span>
                  <span style="font-size:1.5rem;font-weight:800;color:#0F172A;">₹${(s.priceINR || 1499).toLocaleString('en-IN')}</span>
                </div>
                <button class="btn btn-navy btn-block" onclick="window.candidateDashboard.openBookingModal('${s.id}')">
                  Book Service &rarr;
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Orders Table -->
        <div class="dash-card">
          <div class="dash-card-header">
            <div>
              <h4 class="dash-card-title">Your Advisory Engagements & Receipts</h4>
              <p class="dash-card-subtitle">Active and past 1-on-1 consultations with Avenlo senior advisors.</p>
            </div>
          </div>

          ${orders.length === 0 ? `
            <div style="text-align:center;padding:2.5rem 1rem;color:#94A3B8;">
              <div style="font-size:2rem;margin-bottom:0.5rem;">📋</div>
              <p style="margin:0;font-size:0.95rem;">You haven't requested any optional advisory services yet.</p>
            </div>
          ` : `
            <div class="dash-table-wrap">
              <table class="dash-table">
                <thead>
                  <tr>
                    <th>Order Ref</th>
                    <th>Service Name</th>
                    <th>Date</th>
                    <th>Fee Paid</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${orders.map(o => `
                    <tr>
                      <td style="font-family:monospace;font-size:0.8rem;color:#64748B;">${o.id || o.transactionRef || 'ord_demo'}</td>
                      <td><strong style="color:#0F172A;">${o.serviceName || o.serviceTitle || 'Career Advisory'}</strong></td>
                      <td style="color:#64748B;font-size:0.85rem;">${new Date(o.createdAt || Date.now()).toLocaleDateString()}</td>
                      <td><strong>₹${(o.amountINR || o.amount || 1499).toLocaleString('en-IN')}</strong></td>
                      <td><span class="badge badge-mint">${(o.status || 'Active').toUpperCase()}</span></td>
                      <td>
                        <button class="btn btn-sm btn-secondary" onclick="window.toast('Senior advisor assignment in progress for this order.', 'info')">
                          View Details
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `}
        </div>
      </div>
    `;
  }

  // ─── EDIT PROFILE FORM ──────────────────────────────────
  _renderEditForm(user, profile) {
    return `
      <div class="dash-card" style="max-width:840px;margin:0 auto;">
        <div class="dash-card-header">
          <div>
            <h3 class="dash-card-title">Edit Professional Profile</h3>
            <p class="dash-card-subtitle">Update your credentials to optimize client matching accuracy.</p>
          </div>
          <button class="btn btn-sm btn-secondary" onclick="window.candidateDashboard.isEditingProfile=false;window.app.render();">
            Cancel
          </button>
        </div>

        <form onsubmit="window.candidateDashboard.saveProfile(event)">
          <div class="grid grid-2" style="gap:1.25rem;">
            <div class="form-group">
              <label class="form-label">Professional Title *</label>
              <input type="text" id="profTitle" class="form-control" value="${profile.title || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Current Company / Organization</label>
              <input type="text" id="profCompany" class="form-control" value="${profile.currentCompany || ''}">
            </div>
          </div>

          <div class="grid grid-2" style="gap:1.25rem;">
            <div class="form-group">
              <label class="form-label">Years of Experience</label>
              <input type="text" id="profExp" class="form-control" value="${profile.yearsExperience || '5'}">
            </div>
            <div class="form-group">
              <label class="form-label">Notice Period</label>
              <select id="profNotice" class="form-control">
                <option value="Immediate" ${profile.noticePeriod === 'Immediate' ? 'selected' : ''}>Immediate</option>
                <option value="15 Days" ${profile.noticePeriod === '15 Days' ? 'selected' : ''}>15 Days</option>
                <option value="30 Days" ${profile.noticePeriod === '30 Days' ? 'selected' : ''}>30 Days</option>
                <option value="60 Days" ${profile.noticePeriod === '60 Days' ? 'selected' : ''}>60 Days</option>
                <option value="90 Days" ${profile.noticePeriod === '90 Days' ? 'selected' : ''}>90 Days</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Verified Skills (comma separated) *</label>
            <input type="text" id="profSkills" class="form-control" value="${(profile.skills || []).join(', ')}" required>
          </div>

          <div class="grid grid-2" style="gap:1.25rem;">
            <div class="form-group">
              <label class="form-label">Expected Annual Compensation (₹ LPA)</label>
              <input type="number" id="profSalary" class="form-control" value="${profile.expectedSalaryLPA || 24}">
            </div>
            <div class="form-group">
              <label class="form-label">Work Mode Preference</label>
              <select id="profMode" class="form-control">
                <option value="Hybrid" ${profile.workModePreference === 'Hybrid' ? 'selected' : ''}>Hybrid (Bengaluru / Preferred)</option>
                <option value="Remote" ${profile.workModePreference === 'Remote' ? 'selected' : ''}>Fully Remote</option>
                <option value="On-Site" ${profile.workModePreference === 'On-Site' ? 'selected' : ''}>On-Site (Office)</option>
                <option value="Flexible" ${profile.workModePreference === 'Flexible' ? 'selected' : ''}>Flexible</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Career Trajectory & Growth Aspiration</label>
            <textarea id="profGoals" class="form-control" rows="3">${profile.careerGoals || ''}</textarea>
          </div>

          <div style="display:flex;justify-content:flex-end;gap:1rem;margin-top:1.5rem;">
            <button type="button" class="btn btn-secondary" onclick="window.candidateDashboard.isEditingProfile=false;window.app.render();">Cancel</button>
            <button type="submit" class="btn btn-primary" style="min-width:160px;">Save Profile</button>
          </div>
        </form>
      </div>
    `;
  }

  // ─── BOOKING MODAL (RAZORPAY SIMULATION) ──────────────────
  _renderBookingModal(user) {
    const s = this.bookingService;
    return `
      <div class="dash-modal-backdrop" onclick="if(event.target===this)window.candidateDashboard.closeBookingModal();">
        <div class="dash-modal-box">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
            <div>
              <span class="badge badge-mint" style="margin-bottom:0.25rem;">Avenlo Advisory Checkout</span>
              <h3 style="font-size:1.35rem;margin:0;color:#0F172A;">${s.title}</h3>
            </div>
            <button style="border:none;background:none;font-size:1.5rem;cursor:pointer;color:#94A3B8;" onclick="window.candidateDashboard.closeBookingModal();">&times;</button>
          </div>

          <p style="font-size:0.9rem;color:#64748B;line-height:1.6;margin-bottom:1.5rem;">
            ${s.description}
          </p>

          <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:1.25rem;margin-bottom:1.5rem;">
            <div style="display:flex;justify-content:space-between;font-size:0.875rem;margin-bottom:0.5rem;">
              <span style="color:#64748B;">Candidate</span>
              <strong style="color:#0F172A;">${user.name} (${user.email})</strong>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:0.875rem;margin-bottom:0.5rem;">
              <span style="color:#64748B;">Turnaround Time</span>
              <strong style="color:#059669;">${s.turnaround || '2-3 Business Days'}</strong>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:1.15rem;padding-top:0.75rem;border-top:1px solid #E2E8F0;margin-top:0.75rem;">
              <span style="font-weight:700;color:#0F172A;">Total Professional Fee</span>
              <strong style="color:#2563EB;font-size:1.35rem;">₹${(s.priceINR || 1499).toLocaleString('en-IN')}</strong>
            </div>
          </div>

          <div style="display:flex;gap:1rem;">
            <button class="btn btn-secondary" style="flex:1;" onclick="window.candidateDashboard.closeBookingModal();">Cancel</button>
            <button class="btn btn-primary" style="flex:2;" onclick="window.candidateDashboard.confirmBooking('${s.id}')">
              Confirm & Pay ₹${(s.priceINR || 1499).toLocaleString('en-IN')}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // ─── ACTION HANDLERS ──────────────────────────────────────
  saveProfile(e) {
    e.preventDefault();
    const user = window.auth.getCurrentUser();
    if (!user) return;

    const title = document.getElementById('profTitle').value.trim();
    const currentCompany = document.getElementById('profCompany').value.trim();
    const yearsExperience = document.getElementById('profExp').value.trim();
    const noticePeriod = document.getElementById('profNotice').value;
    const skillsRaw = document.getElementById('profSkills').value;
    const skills = skillsRaw.split(',').map(s => s.trim()).filter(Boolean);
    const expectedSalaryLPA = Number(document.getElementById('profSalary').value) || 24;
    const workModePreference = document.getElementById('profMode').value;
    const careerGoals = document.getElementById('profGoals').value.trim();

    window.db.updateCandidateProfile(user.id, {
      title,
      currentCompany,
      yearsExperience,
      noticePeriod,
      skills,
      expectedSalaryLPA,
      workModePreference,
      careerGoals,
      profileCompletion: 95
    });

    this.isEditingProfile = false;
    window.toast('Profile details successfully updated!', 'success');
    window.app.render();
  }

  handleCVUpload(input) {
    const user = window.auth.getCurrentUser();
    if (!user) return;

    if (input.files && input.files[0]) {
      const fileName = input.files[0].name;
      window.db.updateCandidateProfile(user.id, {
        cvFilename: fileName
      });
      window.toast(`CV revised: ${fileName}`, 'success');
      window.app.render();
    }
  }

  triggerAssessment(userId) {
    this.isAssessing = true;
    window.app.render();

    setTimeout(() => {
      const newScore = Math.floor(Math.random() * 6) + 91;
      window.db.updateCandidateProfile(userId, {
        assessmentCompleted: true,
        assessmentScore: newScore,
        profileCompletion: 98
      });
      this.isAssessing = false;
      window.toast('AI Career Benchmark re-calculated!', 'success');
      window.app.render();
    }, 1200);
  }

  openBookingModal(serviceId) {
    const service = (window.db.getServices() || []).find(s => s.id === serviceId);
    if (service) {
      this.bookingService = service;
      window.app.render();
    }
  }

  closeBookingModal() {
    this.bookingService = null;
    window.app.render();
  }

  confirmBooking(serviceId) {
    const user = window.auth.getCurrentUser();
    const s = this.bookingService;
    if (!user || !s) return;

    window.db.addOrder({
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      serviceId: s.id,
      serviceName: s.title,
      amountINR: s.priceINR || 1499,
      status: 'confirmed',
      paymentMethod: 'Razorpay UPI/Card'
    });

    this.bookingService = null;
    window.toast(`Booked "${s.title}"! Avenlo advisor assigned.`, 'success');
    this.activeTab = 'services';
    window.app.render();
  }
}

window.candidateDashboard = new CandidateDashboardPage();
