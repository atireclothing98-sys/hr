// AVENLO AUTH SERVICE
class AuthService {
  constructor() {
    this.SESSION_KEY = 'avenlo_session';
    this.currentUser = this._loadSession();
    this.listeners = [];
  }

  _loadSession() {
    try {
      const data = localStorage.getItem(this.SESSION_KEY);
      if (data) return JSON.parse(data);
    } catch (e) { /* ignore */ }
    return null;
  }

  _saveSession(user) {
    if (user) localStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
    else localStorage.removeItem(this.SESSION_KEY);
    this.currentUser = user;
    this.listeners.forEach(fn => fn(user));
  }

  subscribe(fn) { this.listeners.push(fn); }

  getCurrentUser() { return this.currentUser; }
  getRole() { return this.currentUser ? this.currentUser.role : null; }
  isLoggedIn() { return !!this.currentUser; }
  isAdmin() { return this.currentUser && this.currentUser.role === 'admin'; }
  isCandidate() { return this.currentUser && this.currentUser.role === 'candidate'; }

  login(email, password) {
    const user = window.db.getUserByEmail(email);
    if (!user) return { error: 'No account found with that email address.' };
    if (user.password !== password) return { error: 'Incorrect password. Please try again.' };
    this._saveSession(user);
    return { user };
  }

  logout() {
    this._saveSession(null);
  }

  register(userData, profileData) {
    const existing = window.db.getUserByEmail(userData.email);
    if (existing) return { error: 'An account with this email already exists.' };

    const user = window.db.createUser({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      city: userData.city,
      password: userData.password,
      role: 'candidate'
    });

    if (profileData) {
      window.db.createCandidateProfile({
        userId: user.id,
        networkStatus: 'new',
        statusNote: 'New profile. Pending review.',
        assessmentCompleted: false,
        assessmentScore: null,
        strengths: [],
        skillGaps: [],
        suggestedDirections: [],
        suggestedLearning: [],
        internalNotes: [],
        ...profileData
      });
    }

    this._saveSession(user);
    return { user };
  }

  switchDemoUser(role) {
    const users = window.db.getUsers();
    const user = users.find(u => u.role === role);
    if (user) this._saveSession(user);
  }
}

window.auth = new AuthService();
