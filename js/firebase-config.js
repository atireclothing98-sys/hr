// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnqbJj-20vXODe53eipL_ydSvWF_EaBzg",
  authDomain: "avenlo-caca6.firebaseapp.com",
  projectId: "avenlo-caca6",
  storageBucket: "avenlo-caca6.firebasestorage.app",
  messagingSenderId: "365710383405",
  appId: "1:365710383405:web:1806ae820d7acb3dbedba4",
  measurementId: "G-EDN38WM4GM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebaseDb = firebase.firestore();
window.firebaseAuth = firebase.auth();
