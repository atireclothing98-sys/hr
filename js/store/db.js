// AVENLO DATA STORE ENGINE
class AvenloStore {
  constructor() {
    this.KEY = 'avenlo_db_v3';
    this.listeners = [];
    this.data = this._load();
  }

  _load() {
    try {
      const stored = localStorage.getItem(this.KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) { /* ignore */ }
    const seed = JSON.parse(JSON.stringify(SEED_DATA));
    this._save(seed);
    return seed;
  }

  _save(data) {
    try { localStorage.setItem(this.KEY, JSON.stringify(data || this.data)); } catch (e) { /* ignore */ }
  }

  _emit() {
    this._save();
    this.listeners.forEach(fn => fn(this.data));
  }

  subscribe(fn) { this.listeners.push(fn); }

  resetData() {
    localStorage.removeItem(this.KEY);
    this.data = JSON.parse(JSON.stringify(SEED_DATA));
    this._emit();
  }

  // ─── Users ──────────────────────────
  getUsers() { return this.data.users || []; }
  getUserById(id) { return this.data.users.find(u => u.id === id); }
  getUserByEmail(email) { return this.data.users.find(u => u.email.toLowerCase() === email.toLowerCase()); }

  createUser(userData) {
    const id = 'usr_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);
    const user = {
      id,
      role: 'candidate',
      avatar: (userData.name || 'U').split(' ').map(w => w[0]).join('').toUpperCase().substr(0, 2),
      createdAt: new Date().toISOString(),
      ...userData
    };
    this.data.users.push(user);
    this._emit();
    return user;
  }

  updateUser(id, updates) {
    const idx = this.data.users.findIndex(u => u.id === id);
    if (idx === -1) return null;
    Object.assign(this.data.users[idx], updates);
    this._emit();
    return this.data.users[idx];
  }

  // ─── Candidate Profiles ─────────────
  getCandidateProfile(userId) {
    return (this.data.candidateProfiles || []).find(p => p.userId === userId);
  }

  getAllCandidateProfiles() { return this.data.candidateProfiles || []; }

  createCandidateProfile(profileData) {
    if (!this.data.candidateProfiles) this.data.candidateProfiles = [];
    this.data.candidateProfiles.push(profileData);
    this._emit();
    return profileData;
  }

  updateCandidateProfile(userId, updates) {
    if (!this.data.candidateProfiles) return null;
    const idx = this.data.candidateProfiles.findIndex(p => p.userId === userId);
    if (idx === -1) return null;
    Object.assign(this.data.candidateProfiles[idx], updates);
    this._emit();
    return this.data.candidateProfiles[idx];
  }

  // ─── Company Enquiries ──────────────
  getEnquiries() { return this.data.companyEnquiries || []; }
  getCompanyEnquiries() { return this.getEnquiries(); }

  getEnquiryById(id) {
    return (this.data.companyEnquiries || []).find(e => e.id === id);
  }

  addEnquiry(data) {
    if (!this.data.companyEnquiries) this.data.companyEnquiries = [];
    const enquiry = {
      id: 'enq_' + Date.now(),
      status: 'new',
      assignedTo: null,
      internalNotes: [],
      createdAt: new Date().toISOString(),
      ...data
    };
    this.data.companyEnquiries.push(enquiry);
    this._emit();
    return enquiry;
  }

  updateEnquiry(id, updates) {
    const idx = (this.data.companyEnquiries || []).findIndex(e => e.id === id);
    if (idx === -1) return null;
    Object.assign(this.data.companyEnquiries[idx], updates);
    this._emit();
    return this.data.companyEnquiries[idx];
  }
  updateCompanyEnquiry(id, updates) { return this.updateEnquiry(id, updates); }

  addEnquiryNote(id, note) {
    const enquiry = this.getEnquiryById(id);
    if (!enquiry) return;
    if (!enquiry.internalNotes) enquiry.internalNotes = [];
    enquiry.internalNotes.push(note);
    this._emit();
  }

  // ─── Services ───────────────────────
  getServices() { return (this.data.services || []).filter(s => s.active); }
  getAllServices() { return this.data.services || []; }

  updateService(id, updates) {
    const idx = (this.data.services || []).findIndex(s => s.id === id);
    if (idx === -1) return null;
    Object.assign(this.data.services[idx], updates);
    this._emit();
    return this.data.services[idx];
  }

  // ─── Orders ─────────────────────────
  getOrders(filters = {}) {
    let orders = this.data.orders || [];
    if (filters.userId) orders = orders.filter(o => o.userId === filters.userId);
    return orders;
  }
  getOrdersByUserId(userId) { return this.getOrders({ userId }); }

  addOrder(order) {
    if (!this.data.orders) this.data.orders = [];
    const newOrder = {
      id: 'ord_' + Date.now(),
      status: 'pending',
      createdAt: new Date().toISOString(),
      ...order
    };
    this.data.orders.push(newOrder);
    this._emit();
    return newOrder;
  }

  // ─── Settings ───────────────────────
  getSettings() { return this.data.settings || {}; }
  updateSettings(updates) {
    this.data.settings = { ...this.data.settings, ...updates };
    this._emit();
  }

  // ─── Internal Talent Matching ───────
  searchCandidates(filters = {}) {
    const profiles = this.getAllCandidateProfiles();
    return profiles.filter(p => {
      const user = this.getUserById(p.userId);
      if (!user) return false;

      if (filters.skills && filters.skills.length > 0) {
        const candSkills = (p.skills || []).map(s => s.toLowerCase());
        const match = filters.skills.some(s => candSkills.includes(s.toLowerCase()));
        if (!match) return false;
      }

      if (filters.minExp && p.yearsExperience < Number(filters.minExp)) return false;
      if (filters.maxSalary && p.expectedSalaryLPA > Number(filters.maxSalary)) return false;

      if (filters.location) {
        const locs = (p.preferredLocations || []).map(l => l.toLowerCase());
        if (!locs.some(l => l.includes(filters.location.toLowerCase())) &&
            !(user.city || '').toLowerCase().includes(filters.location.toLowerCase())) return false;
      }

      if (filters.workMode && filters.workMode !== 'all') {
        if (!(p.workModePreference || '').toLowerCase().includes(filters.workMode.toLowerCase())) return false;
      }

      if (filters.query) {
        const q = filters.query.toLowerCase();
        const searchable = [user.name, p.title, p.currentCompany, p.industry, ...(p.skills || []), ...(p.desiredRoles || [])].join(' ').toLowerCase();
        if (!searchable.includes(q)) return false;
      }

      return true;
    }).map(p => ({ ...p, user: this.getUserById(p.userId) }));
  }

  addCandidateNote(userId, note) {
    const profile = this.getCandidateProfile(userId);
    if (!profile) return;
    if (!profile.internalNotes) profile.internalNotes = [];
    profile.internalNotes.push(note);
    this._emit();
  }
}

window.db = new AvenloStore();
