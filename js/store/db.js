// AVENLO DATA STORE ENGINE (FIREBASE FIRESTORE SYNC)
class AvenloStore {
  constructor() {
    this.listeners = [];
    
    // Start with seed data so UI doesn't crash on initial render
    this.data = JSON.parse(JSON.stringify(typeof SEED_DATA !== 'undefined' ? SEED_DATA : {
      users: [], candidateProfiles: [], companyEnquiries: [], services: [], orders: [], settings: {}
    }));
    
    this._initFirebase();
  }

  _initFirebase() {
    if (!window.firebaseDb) {
      console.error('Firebase DB not initialized');
      return;
    }

    const db = window.firebaseDb;
    
    // Helper to auto-seed a collection if it's completely empty
    const syncCollection = (collectionName, seedDataArray, idField = 'id') => {
      db.collection(collectionName).onSnapshot(snap => {
        if (snap.empty && seedDataArray && seedDataArray.length > 0) {
          console.log(`Auto-seeding ${collectionName}...`);
          seedDataArray.forEach(item => {
            const docId = item[idField] || 'doc_' + Date.now() + Math.random();
            db.collection(collectionName).doc(docId).set(item);
          });
        } else {
          this.data[collectionName] = snap.docs.map(doc => doc.data());
          this._emit();
        }
      });
    };

    syncCollection('users', this.data.users, 'id');
    syncCollection('candidateProfiles', this.data.candidateProfiles, 'userId');
    syncCollection('companyEnquiries', this.data.companyEnquiries, 'id');
    syncCollection('services', this.data.services, 'id');
    syncCollection('orders', this.data.orders, 'id');
  }

  _emit() {
    this.listeners.forEach(fn => fn(this.data));
  }

  subscribe(fn) { this.listeners.push(fn); }

  resetData() {
    console.warn("Reset data is disabled when using Firebase.");
  }

  // ─── Users ──────────────────────────
  getUsers() { return this.data.users || []; }
  getUserById(id) { return (this.data.users || []).find(u => u.id === id); }
  getUserByEmail(email) { return (this.data.users || []).find(u => u.email.toLowerCase() === email.toLowerCase()); }

  async createUser(userData) {
    const id = 'usr_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);
    const user = {
      id,
      role: 'candidate',
      avatar: (userData.name || 'U').split(' ').map(w => w[0]).join('').toUpperCase().substr(0, 2),
      createdAt: new Date().toISOString(),
      ...userData
    };
    await window.firebaseDb.collection('users').doc(id).set(user);
    return user;
  }

  async updateUser(id, updates) {
    await window.firebaseDb.collection('users').doc(id).update(updates);
    return { id, ...updates };
  }

  // ─── Candidate Profiles ─────────────
  getCandidateProfile(userId) {
    return (this.data.candidateProfiles || []).find(p => p.userId === userId);
  }

  getAllCandidateProfiles() { return this.data.candidateProfiles || []; }

  async createCandidateProfile(profileData) {
    const userId = profileData.userId;
    await window.firebaseDb.collection('candidateProfiles').doc(userId).set(profileData);
    return profileData;
  }

  async updateCandidateProfile(userId, updates) {
    await window.firebaseDb.collection('candidateProfiles').doc(userId).update(updates);
    return { userId, ...updates };
  }

  // ─── Company Enquiries ──────────────
  getEnquiries() { return this.data.companyEnquiries || []; }
  getCompanyEnquiries() { return this.getEnquiries(); }

  getEnquiryById(id) {
    return (this.data.companyEnquiries || []).find(e => e.id === id);
  }

  async addEnquiry(data) {
    const id = 'enq_' + Date.now();
    const enquiry = {
      id,
      status: 'new',
      assignedTo: null,
      internalNotes: [],
      createdAt: new Date().toISOString(),
      ...data
    };
    await window.firebaseDb.collection('companyEnquiries').doc(id).set(enquiry);
    return enquiry;
  }

  async updateEnquiry(id, updates) {
    await window.firebaseDb.collection('companyEnquiries').doc(id).update(updates);
  }
  async updateCompanyEnquiry(id, updates) { return this.updateEnquiry(id, updates); }

  async addEnquiryNote(id, note) {
    const enquiry = this.getEnquiryById(id);
    if (!enquiry) return;
    const notes = enquiry.internalNotes || [];
    notes.push(note);
    await window.firebaseDb.collection('companyEnquiries').doc(id).update({ internalNotes: notes });
  }

  // ─── Services ───────────────────────
  getServices() { return (this.data.services || []).filter(s => s.active); }
  getAllServices() { return this.data.services || []; }

  async updateService(id, updates) {
    await window.firebaseDb.collection('services').doc(id).update(updates);
  }

  // ─── Orders ─────────────────────────
  getOrders(filters = {}) {
    let orders = this.data.orders || [];
    if (filters.userId) orders = orders.filter(o => o.userId === filters.userId);
    return orders;
  }
  getOrdersByUserId(userId) { return this.getOrders({ userId }); }

  async addOrder(order) {
    const id = 'ord_' + Date.now();
    const newOrder = {
      id,
      status: 'pending',
      createdAt: new Date().toISOString(),
      ...order
    };
    await window.firebaseDb.collection('orders').doc(id).set(newOrder);
    return newOrder;
  }

  // ─── Settings ───────────────────────
  getSettings() { return this.data.settings || {}; }
  updateSettings(updates) {
    // Left local for simplicity unless needed globally
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

  async addCandidateNote(userId, note) {
    const profile = this.getCandidateProfile(userId);
    if (!profile) return;
    const notes = profile.internalNotes || [];
    notes.push(note);
    await window.firebaseDb.collection('candidateProfiles').doc(userId).update({ internalNotes: notes });
  }
}

window.db = new AvenloStore();
