// AVENLO SUPER-PREMIUM ADMIN OPERATIONS DASHBOARD
class AdminDashboardPage {
  constructor() {
    this.activeTab = 'enquiries'; // 'enquiries', 'talent', 'orders'
    this.mandateFilter = 'all';
    this.talentSearch = '';
    this.expFilter = 'all';
    this.statusFilter = 'all';
    this.selectedMandateId = null;
    this.introModalCandidate = null;
  }

  render() {
    const user = window.auth ? window.auth.getCurrentUser() : null;
    if (!user || user.role !== 'admin') {
      return `
        <div class="dash-shell" style="display:flex;align-items:center;justify-content:center;">
          <div class="dash-card" style="max-width:440px;text-align:center;padding:3rem 2rem;">
            <div style="width:64px;height:64px;border-radius:50%;background:#FEE2E2;color:#DC2626;display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;font-size:1.75rem;">
              🛡️
            </div>
            <h2 style="font-size:1.5rem;margin-bottom:0.5rem;color:#0F172A;">Admin Access Required</h2>
            <p style="color:#64748B;font-size:0.95rem;margin-bottom:1.75rem;">This command center is reserved for Avenlo internal recruiting operations.</p>
            <a href="#login" class="btn btn-navy btn-block">Log In as Admin</a>
          </div>
        </div>
      `;
    }

    const enquiries = (window.db && window.db.getCompanyEnquiries()) || [];
    const profiles = (window.db && window.db.getAllCandidateProfiles()) || [];
    const orders = (window.db && window.db.getOrders()) || [];
    const users = (window.db && window.db.getUsers()) || [];

    const activeMandatesCount = enquiries.filter(e => e.status !== 'Mandate Closed').length;
    const introsCount = enquiries.filter(e => e.status === 'Introductions Sent').length;

    return `
      <div class="dash-shell">
        <div class="dash-container">
          <!-- 1. Executive Operations Header Banner -->
          <div class="dash-hero-card" style="background: linear-gradient(135deg, #0B132B 0%, #1C2541 100%);">
            <div class="dash-hero-inner">
              <div class="dash-user-meta">
                <div class="dash-avatar-ring" style="background:linear-gradient(135deg, #10B981, #059669);">
                  AV
                </div>
                <div class="dash-user-info">
                  <h2>
                    <span>Talent Operations Command</span>
                    <span class="badge" style="background:rgba(16,185,129,0.2);color:#34D399;border:1px solid rgba(52,211,153,0.3);font-size:0.75rem;padding:0.35rem 0.75rem;border-radius:20px;font-weight:700;">
                      <span class="pulse-dot"></span>Internal Operations
                    </span>
                  </h2>
                  <p>
                    Matching verified candidates with partner company mandates • Facilitating high-touch introductions
                  </p>
                </div>
              </div>

              <!-- Top Action Buttons -->
              <div style="display:flex;gap:0.75rem;">
                <button class="btn btn-sm btn-secondary" onclick="window.adminDashboard.resetData()" style="color:#0F172A;font-weight:600;">
                  🔄 Reset Demo State
                </button>
              </div>
            </div>

            <!-- Operational Metrics Bar -->
            <div class="kpi-grid" style="margin-top:2rem;margin-bottom:0;">
              <div class="kpi-card kpi-blue" style="background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.12);color:#FFFFFF;">
                <div class="kpi-header">
                  <span class="kpi-label" style="color:#94A3B8;">Active Mandates</span>
                  <span class="kpi-icon" style="background:rgba(37,99,235,0.2);color:#60A5FA;">🏢</span>
                </div>
                <div class="kpi-value" style="color:#FFFFFF;">${activeMandatesCount}</div>
                <div class="kpi-subtext" style="color:#94A3B8;">${enquiries.length} total company inquiries</div>
              </div>

              <div class="kpi-card kpi-emerald" style="background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.12);color:#FFFFFF;">
                <div class="kpi-header">
                  <span class="kpi-label" style="color:#94A3B8;">Network Talent Pool</span>
                  <span class="kpi-icon" style="background:rgba(16,185,129,0.2);color:#34D399;">👥</span>
                </div>
                <div class="kpi-value" style="color:#34D399;">${profiles.length}</div>
                <div class="kpi-subtext" style="color:#94A3B8;">Confidential candidate records</div>
              </div>

              <div class="kpi-card kpi-amber" style="background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.12);color:#FFFFFF;">
                <div class="kpi-header">
                  <span class="kpi-label" style="color:#94A3B8;">Introductions Facilitated</span>
                  <span class="kpi-icon" style="background:rgba(245,158,11,0.2);color:#FBBF24;">🤝</span>
                </div>
                <div class="kpi-value" style="color:#FBBF24;">${introsCount}</div>
                <div class="kpi-subtext" style="color:#94A3B8;">Human-led candidate matches</div>
              </div>

              <div class="kpi-card kpi-indigo" style="background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.12);color:#FFFFFF;">
                <div class="kpi-header">
                  <span class="kpi-label" style="color:#94A3B8;">Advisory Bookings</span>
                  <span class="kpi-icon" style="background:rgba(99,102,241,0.2);color:#818CF8;">💳</span>
                </div>
                <div class="kpi-value" style="color:#818CF8;">${orders.length}</div>
                <div class="kpi-subtext" style="color:#94A3B8;">Candidate mentorship orders</div>
              </div>
            </div>
          </div>

          <!-- 2. Segmented Pill Tab Bar -->
          <div class="dash-tabs-bar">
            <button class="dash-tab-btn ${this.activeTab === 'enquiries' ? 'active' : ''}" onclick="window.adminDashboard.setTab('enquiries')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7v14M21 7v14M9 21V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12"/></svg>
              <span>Company Hiring Mandates</span>
              <span class="dash-tab-badge">${enquiries.length}</span>
            </button>
            <button class="dash-tab-btn ${this.activeTab === 'talent' ? 'active' : ''}" onclick="window.adminDashboard.setTab('talent')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span>Talent Network Directory</span>
              <span class="dash-tab-badge">${profiles.length}</span>
            </button>
            <button class="dash-tab-btn ${this.activeTab === 'orders' ? 'active' : ''}" onclick="window.adminDashboard.setTab('orders')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              <span>Advisory Bookings</span>
              <span class="dash-tab-badge">${orders.length}</span>
            </button>
          </div>

          <!-- 3. Dynamic Tab Content -->
          <div>
            ${this._renderCurrentTab(enquiries, profiles, users, orders)}
          </div>
        </div>

        <!-- 4. Interactive Candidate Matching Modal -->
        ${this.selectedMandateId ? this._renderMatchingModal(enquiries, profiles, users) : ''}

        <!-- 5. Facilitate Introduction Confirmation Modal -->
        ${this.introModalCandidate ? this._renderIntroModal() : ''}
      </div>
    `;
  }

  setTab(tab) {
    this.activeTab = tab;
    this.selectedMandateId = null;
    this.introModalCandidate = null;
    window.app.render();
  }

  _renderCurrentTab(enquiries, profiles, users, orders) {
    if (this.activeTab === 'talent') {
      return this._renderTalentDirectory(profiles, users);
    }
    if (this.activeTab === 'orders') {
      return this._renderOrdersView(orders);
    }
    return this._renderMandatesView(enquiries, profiles, users);
  }

  // ─── TAB 1: COMPANY HIRING MANDATES ───────────────────────
  _renderMandatesView(enquiries, profiles, users) {
    let filtered = enquiries;
    if (this.mandateFilter !== 'all') {
      filtered = filtered.filter(e => e.status === this.mandateFilter);
    }

    return `
      <div>
        <!-- Controls Bar -->
        <div class="dash-card" style="padding:1.25rem 2rem;margin-bottom:1.5rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
            <div>
              <h3 style="font-size:1.2rem;color:#0F172A;margin:0 0 0.2rem;font-weight:700;">
                Inbound Employer Requirements
              </h3>
              <p style="font-size:0.875rem;color:#64748B;margin:0;">
                Verified hiring leads received via the "For Companies" intake channel.
              </p>
            </div>

            <!-- Filter Pills -->
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
              ${['all', 'New', 'Under Review', 'Matching Talent', 'Introductions Sent'].map(status => `
                <button class="btn btn-sm ${this.mandateFilter === status ? 'btn-navy' : 'btn-secondary'}" onclick="window.adminDashboard.mandateFilter='${status}';window.app.render();" style="font-size:0.8rem;padding:0.35rem 0.85rem;">
                  ${status === 'all' ? 'All Mandates' : status}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Mandates List -->
        <div style="display:flex;flex-direction:column;gap:1.5rem;">
          ${filtered.length === 0 ? `
            <div class="dash-card" style="text-align:center;padding:3rem 1rem;color:#94A3B8;">
              <p style="font-size:1.05rem;margin:0;">No hiring mandates match the selected filter.</p>
            </div>
          ` : filtered.map(enq => `
            <div class="dash-card" style="margin-bottom:0;border-left:5px solid ${enq.status === 'Introductions Sent' ? '#10B981' : enq.status === 'Matching Talent' ? '#2563EB' : '#F59E0B'};">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;margin-bottom:1.25rem;">
                <div>
                  <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.35rem;">
                    <h4 style="font-size:1.3rem;font-weight:800;color:#0F172A;margin:0;">
                      ${enq.companyName || 'Confidential Client'}
                    </h4>
                    <span class="badge ${enq.status === 'Introductions Sent' ? 'badge-mint' : enq.status === 'Matching Talent' ? 'badge-blue' : 'badge-yellow'}" style="font-size:0.78rem;font-weight:700;">
                      ${enq.status || 'New'}
                    </span>
                  </div>
                  <div style="font-size:0.875rem;color:#64748B;">
                    Point of Contact: <strong style="color:#0F172A;">${enq.contactName || enq.contactPerson}</strong> (${enq.designation || 'Talent Acquisition'}) • 
                    <a href="mailto:${enq.email}" style="color:#2563EB;font-weight:600;">${enq.email}</a> • 
                    <span>${enq.phone || '+91 98765 00000'}</span>
                  </div>
                </div>

                <!-- Status Select & Matching Action -->
                <div style="display:flex;align-items:center;gap:0.75rem;">
                  <select class="form-control" style="font-size:0.82rem;padding:0.45rem 0.75rem;width:auto;font-weight:600;" onchange="window.adminDashboard.changeStatus('${enq.id}', this.value)">
                    <option value="New" ${enq.status === 'New' ? 'selected' : ''}>Status: New</option>
                    <option value="Under Review" ${enq.status === 'Under Review' ? 'selected' : ''}>Status: Under Review</option>
                    <option value="Matching Talent" ${enq.status === 'Matching Talent' ? 'selected' : ''}>Status: Matching Talent</option>
                    <option value="Introductions Sent" ${enq.status === 'Introductions Sent' ? 'selected' : ''}>Status: Introductions Sent</option>
                    <option value="Mandate Closed" ${enq.status === 'Mandate Closed' ? 'selected' : ''}>Status: Mandate Closed</option>
                  </select>

                  <button class="btn btn-primary btn-sm" onclick="window.adminDashboard.openMatching('${enq.id}')" style="box-shadow:0 4px 12px rgba(37,99,235,0.25);">
                    ⚡ Match Candidates
                  </button>
                </div>
              </div>

              <!-- Requirement Spec Tiles -->
              <div class="grid grid-4" style="gap:1rem;margin-bottom:1.25rem;">
                <div class="data-tile">
                  <span class="data-tile-label">Role Target</span>
                  <span class="data-tile-value" style="font-size:0.95rem;">${enq.roleTitle || 'Key Engineering Lead'}</span>
                </div>
                <div class="data-tile">
                  <span class="data-tile-label">Experience Bracket</span>
                  <span class="data-tile-value" style="font-size:0.95rem;">${enq.requiredExperience || enq.experienceRequired || '4-8'} Years</span>
                </div>
                <div class="data-tile">
                  <span class="data-tile-label">Location & Mode</span>
                  <span class="data-tile-value" style="font-size:0.95rem;">${enq.location || 'Bengaluru / Hybrid'}</span>
                </div>
                <div class="data-tile">
                  <span class="data-tile-label">Budget / Salary Band</span>
                  <span class="data-tile-value" style="font-size:0.95rem;color:#059669;">${enq.salaryRange || 'Competitive (Market)'}</span>
                </div>
              </div>

              <!-- Requirement Scope Notes -->
              <div style="font-size:0.875rem;color:#334155;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:0.9rem 1.15rem;line-height:1.6;">
                <strong style="color:#0F172A;">Scope & Specifications:</strong>
                ${enq.requirementDetails || enq.additionalInfo || 'Looking for senior candidates with strong technical foundations and team leadership capability.'}
              </div>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  // ─── TAB 2: TALENT NETWORK DIRECTORY ──────────────────────
  _renderTalentDirectory(profiles, users) {
    const userMap = {};
    users.forEach(u => { userMap[u.id] = u; });

    let filtered = profiles;
    if (this.talentSearch) {
      const q = this.talentSearch.toLowerCase();
      filtered = filtered.filter(p => {
        const u = userMap[p.userId] || {};
        return (
          (u.name || '').toLowerCase().includes(q) ||
          (p.title || '').toLowerCase().includes(q) ||
          (p.currentCompany || '').toLowerCase().includes(q) ||
          (p.skills || []).some(s => s.toLowerCase().includes(q))
        );
      });
    }

    if (this.statusFilter !== 'all') {
      filtered = filtered.filter(p => p.networkStatus === this.statusFilter);
    }

    return `
      <div>
        <!-- Search & Filter Controls -->
        <div class="dash-card" style="padding:1.5rem 2rem;margin-bottom:1.5rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
            <div>
              <h3 style="font-size:1.2rem;color:#0F172A;margin:0 0 0.2rem;font-weight:700;">
                Confidential Talent Network Database
              </h3>
              <p style="font-size:0.875rem;color:#64748B;margin:0;">
                Pre-screened candidates available for internal matching. No public search or public profiles.
              </p>
            </div>

            <div style="display:flex;gap:0.75rem;align-items:center;flex-wrap:wrap;">
              <input type="text" class="form-control" style="width:260px;font-size:0.875rem;" placeholder="🔍 Search skills, role, company..." value="${this.talentSearch}" oninput="window.adminDashboard.talentSearch=this.value;window.app.render();">

              <select class="form-control" style="width:auto;font-size:0.875rem;font-weight:600;" onchange="window.adminDashboard.statusFilter=this.value;window.app.render();">
                <option value="all" ${this.statusFilter === 'all' ? 'selected' : ''}>All Candidate Statuses</option>
                <option value="talent_network" ${this.statusFilter === 'talent_network' ? 'selected' : ''}>Network Active</option>
                <option value="new" ${this.statusFilter === 'new' ? 'selected' : ''}>Under Evaluation</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Candidate Cards Grid -->
        <div style="display:flex;flex-direction:column;gap:1.5rem;">
          ${filtered.map(p => {
            const u = userMap[p.userId] || { name: 'Candidate', email: 'confidential@avenlo.in', city: 'Bengaluru' };
            return `
              <div class="dash-card" style="margin-bottom:0;">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;margin-bottom:1.25rem;">
                  <div style="display:flex;gap:1.25rem;align-items:center;">
                    <div class="dash-avatar-ring" style="width:54px;height:54px;font-size:1.25rem;border-radius:12px;">
                      ${u.avatar || u.name.split(' ').map(w => w[0]).join('').substr(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem;">
                        <h4 style="font-size:1.25rem;font-weight:800;color:#0F172A;margin:0;">
                          ${u.name}
                        </h4>
                        <span class="badge ${p.networkStatus === 'talent_network' ? 'badge-mint' : 'badge-yellow'}" style="font-size:0.75rem;font-weight:700;">
                          ${p.networkStatus === 'talent_network' ? '✓ Network Active' : 'Under Review'}
                        </span>
                      </div>
                      <div style="font-size:0.875rem;color:#64748B;">
                        <strong style="color:#0F172A;">${p.title}</strong> • ${p.currentCompany || 'Scaleup'} • ${p.yearsExperience || '5+'} Years Exp • ${u.city || 'Bengaluru'}
                      </div>
                    </div>
                  </div>

                  <!-- Benchmarks Badge -->
                  <div style="text-align:right;">
                    <div style="font-size:0.75rem;color:#64748B;font-weight:700;text-transform:uppercase;">AI Score / Expected CTC</div>
                    <div style="margin-top:0.2rem;">
                      <span style="font-size:1.2rem;font-weight:800;color:#2563EB;">${p.assessmentScore || 91}/100</span> • 
                      <span style="font-size:1.2rem;font-weight:800;color:#0F172A;">₹${p.expectedSalaryLPA || 24} LPA</span>
                    </div>
                  </div>
                </div>

                <!-- Verified Skills Chips -->
                <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:1.25rem;">
                  ${(p.skills || []).map(s => `
                    <span class="skill-chip" style="font-size:0.78rem;">
                      ${s}
                    </span>
                  `).join('')}
                </div>

                <!-- Meta Details Grid -->
                <div class="grid grid-3" style="gap:1rem;margin-bottom:1.25rem;">
                  <div class="data-tile">
                    <span class="data-tile-label">Notice Period</span>
                    <span class="data-tile-value" style="font-size:0.9rem;color:#059669;">${p.noticePeriod || '30 Days'}</span>
                  </div>
                  <div class="data-tile">
                    <span class="data-tile-label">Work Mode Preference</span>
                    <span class="data-tile-value" style="font-size:0.9rem;">${p.workModePreference || 'Hybrid'}</span>
                  </div>
                  <div class="data-tile">
                    <span class="data-tile-label">Verified Resume</span>
                    <span class="data-tile-value" style="font-size:0.9rem;color:#2563EB;">📄 ${p.cvFilename || 'Candidate_CV.pdf'}</span>
                  </div>
                </div>

                <!-- Recruiter Notes & Quick Direct Outreach -->
                <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:1rem 1.25rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
                  <div style="font-size:0.875rem;color:#475569;line-height:1.5;">
                    <strong style="color:#0F172A;">Internal Recruiter Note:</strong> "${p.statusNote || 'Strong candidate profile, verified and ready for matching.'}"
                  </div>
                  <div style="display:flex;gap:0.5rem;">
                    <button class="btn btn-sm btn-secondary" onclick="window.adminDashboard.openNotePrompt('${p.userId}')">
                      📝 Add Note
                    </button>
                    <button class="btn btn-sm btn-navy" onclick="window.toast('Drafted direct candidate alignment email for ${u.name}.', 'info')">
                      Contact Candidate
                    </button>
                  </div>
                </div>
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  // ─── TAB 3: ADVISORY ORDERS & REVENUE ─────────────────────
  _renderOrdersView(orders) {
    return `
      <div class="dash-card">
        <div class="dash-card-header">
          <div>
            <h3 class="dash-card-title">Candidate Career Advisory Orders</h3>
            <p class="dash-card-subtitle">Tracking optional 1-on-1 resume review and mock interview engagements.</p>
          </div>
        </div>

        ${orders.length === 0 ? `
          <div style="text-align:center;padding:3rem 1rem;color:#94A3B8;">
            <p style="font-size:1.05rem;margin:0;">No advisory orders placed yet.</p>
          </div>
        ` : `
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Order Reference</th>
                  <th>Candidate Details</th>
                  <th>Service Requested</th>
                  <th>Professional Fee</th>
                  <th>Status</th>
                  <th>Advisor Assignment</th>
                </tr>
              </thead>
              <tbody>
                ${orders.map(o => `
                  <tr>
                    <td style="font-family:monospace;font-size:0.82rem;color:#64748B;">${o.id || o.transactionRef || 'ord_demo'}</td>
                    <td>
                      <strong style="color:#0F172A;">${o.userName || 'Candidate'}</strong><br>
                      <span style="font-size:0.8rem;color:#64748B;">${o.userEmail || 'confidential@avenlo.in'}</span>
                    </td>
                    <td><strong style="color:#0F172A;">${o.serviceName || o.serviceTitle || 'Resume Overhaul'}</strong></td>
                    <td><strong style="color:#059669;font-size:1rem;">₹${(o.amountINR || o.amount || 1499).toLocaleString('en-IN')}</strong></td>
                    <td><span class="badge badge-mint">${(o.status || 'Active').toUpperCase()}</span></td>
                    <td>
                      <button class="btn btn-sm btn-secondary" onclick="window.toast('Assigned Senior Recruiter to lead ${o.userName}\\'s session.', 'success')">
                        Assign Senior Lead
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>
    `;
  }

  // ─── TALENT MATCHING ENGINE MODAL ─────────────────────────
  _renderMatchingModal(enquiries, profiles, users) {
    const enq = enquiries.find(e => e.id === this.selectedMandateId);
    if (!enq) return '';

    const userMap = {};
    users.forEach(u => { userMap[u.id] = u; });

    // Compute intelligent matches based on role keywords & skills
    const matches = profiles.map(p => {
      const u = userMap[p.userId] || { name: 'Candidate' };
      const reqText = `${enq.roleTitle || ''} ${enq.requirementDetails || ''} ${(enq.requiredSkills || []).join(' ')}`.toLowerCase();
      const candSkills = (p.skills || []).map(s => s.toLowerCase());
      
      let matchedCount = candSkills.filter(s => reqText.includes(s)).length;
      let matchScore = 82 + Math.min(matchedCount * 4, 15);
      
      return { profile: p, user: u, matchScore, matchedSkills: p.skills || [] };
    }).sort((a, b) => b.matchScore - a.matchScore);

    return `
      <div class="dash-modal-backdrop" onclick="if(event.target===this)window.adminDashboard.closeMatching();">
        <div class="dash-modal-box" style="max-width:820px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;">
            <div>
              <span class="badge badge-mint" style="margin-bottom:0.25rem;">AI Talent Matching Engine</span>
              <h3 style="font-size:1.4rem;margin:0;color:#0F172A;">
                Top Candidate Matches for: ${enq.companyName}
              </h3>
              <p style="font-size:0.875rem;color:#64748B;margin:0.25rem 0 0;">
                Target Role: <strong>${enq.roleTitle}</strong> • Experience: <strong>${enq.requiredExperience || enq.experienceRequired || '4-8'} yrs</strong>
              </p>
            </div>
            <button style="border:none;background:none;font-size:1.75rem;cursor:pointer;color:#94A3B8;" onclick="window.adminDashboard.closeMatching();">&times;</button>
          </div>

          <p style="font-size:0.875rem;color:#475569;margin-bottom:1.5rem;line-height:1.6;background:#F8FAFC;padding:0.75rem 1rem;border-radius:8px;border:1px solid #E2E8F0;">
            The algorithm ranked candidates from the Talent Network according to skill taxonomy overlap, compensation suitability, and notice period readiness.
          </p>

          <div style="display:flex;flex-direction:column;gap:1rem;">
            ${matches.slice(0, 3).map(m => `
              <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:12px;padding:1.25rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;box-shadow:0 1px 3px rgba(15,23,42,0.04);">
                <div>
                  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.25rem;">
                    <h4 style="font-size:1.15rem;margin:0;color:#0F172A;font-weight:800;">
                      ${m.user.name} — ${m.profile.title}
                    </h4>
                    <span class="badge badge-mint" style="font-weight:800;">
                      ${m.matchScore}% Match
                    </span>
                  </div>
                  <div style="font-size:0.85rem;color:#64748B;margin-bottom:0.5rem;">
                    ${m.profile.yearsExperience} yrs exp • Expected: ₹${m.profile.expectedSalaryLPA} LPA • Notice: <strong>${m.profile.noticePeriod}</strong> • AI Score: <strong>${m.profile.assessmentScore || 91}/100</strong>
                  </div>
                  <div style="display:flex;gap:0.35rem;flex-wrap:wrap;">
                    ${m.matchedSkills.slice(0, 4).map(s => `
                      <span class="skill-chip" style="font-size:0.72rem;padding:0.15rem 0.5rem;">${s}</span>
                    `).join('')}
                  </div>
                </div>

                <div>
                  <button class="btn btn-navy btn-sm" onclick="window.adminDashboard.openIntroConfirm('${enq.id}', '${m.user.name}', '${m.profile.title}')">
                    Facilitate Introduction &rarr;
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // ─── INTRO CONFIRMATION MODAL ────────────────────────────
  _renderIntroModal() {
    const { mandateId, candidateName, candidateTitle } = this.introModalCandidate;
    const enq = (window.db.getCompanyEnquiries() || []).find(e => e.id === mandateId);
    if (!enq) return '';

    return `
      <div class="dash-modal-backdrop" onclick="if(event.target===this)window.adminDashboard.closeIntroConfirm();">
        <div class="dash-modal-box" style="max-width:560px;">
          <div style="text-align:center;margin-bottom:1.5rem;">
            <div style="width:60px;height:60px;border-radius:50%;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-size:1.5rem;">
              🤝
            </div>
            <h3 style="font-size:1.35rem;margin:0 0 0.5rem;color:#0F172A;">Initiate Human-Led Introduction</h3>
            <p style="font-size:0.875rem;color:#64748B;margin:0;">
              Avenlo facilitates a confidential, curated introduction between the hiring team and candidate.
            </p>
          </div>

          <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:1.25rem;margin-bottom:1.5rem;font-size:0.875rem;line-height:1.6;">
            <div><strong>Company:</strong> ${enq.companyName} (${enq.contactName || enq.contactPerson})</div>
            <div><strong>Target Mandate:</strong> ${enq.roleTitle}</div>
            <div><strong>Matched Candidate:</strong> ${candidateName} (${candidateTitle})</div>
          </div>

          <div style="display:flex;gap:1rem;">
            <button class="btn btn-secondary" style="flex:1;" onclick="window.adminDashboard.closeIntroConfirm();">Cancel</button>
            <button class="btn btn-primary" style="flex:2;" onclick="window.adminDashboard.finalizeIntro('${mandateId}', '${candidateName}')">
              Confirm Introduction
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // ─── ACTION HANDLERS ──────────────────────────────────────
  openMatching(mandateId) {
    this.selectedMandateId = mandateId;
    window.app.render();
  }

  closeMatching() {
    this.selectedMandateId = null;
    window.app.render();
  }

  openIntroConfirm(mandateId, candidateName, candidateTitle) {
    this.introModalCandidate = { mandateId, candidateName, candidateTitle };
    window.app.render();
  }

  closeIntroConfirm() {
    this.introModalCandidate = null;
    window.app.render();
  }

  finalizeIntro(mandateId, candidateName) {
    window.db.updateCompanyEnquiry(mandateId, { status: 'Introductions Sent' });
    this.introModalCandidate = null;
    this.selectedMandateId = null;
    window.toast(`Introduction initiated with ${candidateName}!`, 'success');
    window.app.render();
  }

  changeStatus(mandateId, newStatus) {
    window.db.updateCompanyEnquiry(mandateId, { status: newStatus });
    window.toast(`Mandate status updated to "${newStatus}"`, 'success');
    window.app.render();
  }

  openNotePrompt(userId) {
    const note = prompt('Enter internal recruiter note for this candidate:');
    if (note && note.trim()) {
      window.db.updateCandidateProfile(userId, { statusNote: note.trim() });
      window.toast('Internal recruiter note updated.', 'success');
      window.app.render();
    }
  }

  resetData() {
    if (confirm('Reset operations database to default demo seed values?')) {
      window.db.resetData();
      window.toast('Database reset to factory seed values.', 'info');
      window.app.render();
    }
  }
}

window.adminDashboard = new AdminDashboardPage();
