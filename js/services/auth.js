// AVENLO AUTH SERVICE
class AuthService {
  constructor() {
    this.SESSION_KEY = 'avenlo_session';
    this.currentUser = this._loadSession();
    this.listeners = [];

    if (window.firebaseAuth) {
      window.firebaseAuth.onAuthStateChanged(async (user) => {
        if (user) {
          const doc = await window.firebaseDb.collection('users').doc(user.uid).get();
          if (doc.exists) {
            this._saveSession({ id: user.uid, email: user.email, ...doc.data() });
          }
        } else {
          this._saveSession(null);
        }
      });
    }
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

  async login(email, password) {
    try {
      const userCredential = await window.firebaseAuth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      
      const doc = await window.firebaseDb.collection('users').doc(user.uid).get();
      if (!doc.exists) {
        return { error: 'Account data missing in database.' };
      }
      
      const userData = { id: user.uid, email: user.email, ...doc.data() };
      this._saveSession(userData);
      return { user: userData };
    } catch (error) {
      let msg = 'Login failed. Please check your credentials.';
      if (error.code === 'auth/user-not-found') msg = 'No account found with this email.';
      if (error.code === 'auth/wrong-password') msg = 'Incorrect password.';
      return { error: msg };
    }
  }

  async logout() {
    try {
      await window.firebaseAuth.signOut();
      this._saveSession(null);
    } catch (error) {
      console.error(error);
    }
  }

  async register(userData, profileData) {
    try {
      const userCredential = await window.firebaseAuth.createUserWithEmailAndPassword(userData.email, userData.password);
      const user = userCredential.user;
      
      const newUser = {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        city: userData.city,
        role: 'candidate',
        createdAt: new Date().toISOString()
      };

      await window.firebaseDb.collection('users').doc(user.uid).set(newUser);

      if (profileData) {
        await window.firebaseDb.collection('candidateProfiles').doc(user.uid).set({
          userId: user.uid,
          networkStatus: 'new',
          statusNote: 'New profile. Pending review.',
          assessmentCompleted: false,
          ...profileData
        });
      }

      const sessionUser = { id: user.uid, ...newUser };
      this._saveSession(sessionUser);
      return { user: sessionUser };
    } catch (error) {
      let msg = error.message;
      if (error.code === 'auth/email-already-in-use') msg = 'An account with this email already exists.';
      return { error: msg };
    }
  }

  switchDemoUser(role) {
    // Only used for local demo fallback
    const users = window.db.getUsers();
    const user = users.find(u => u.role === role);
    if (user) this._saveSession(user);
  }
}

window.auth = new AuthService();
