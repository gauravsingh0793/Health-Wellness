// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDX-zmj-1PCTG7c48BVDsilfvY-v0eqcbo",
    authDomain: "health-421da.firebaseapp.com",
    projectId: "health-421da",
    storageBucket: "health-421da.appspot.com",
    messagingSenderId: "18949078192",
    appId: "1:18949078192:web:73c4152a54018279f5cf75",
    measurementId: "G-FQDM26Z26V"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  document.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.getElementById("signup-form");
    const signInForm = document.getElementById("signin-form");
    const container = document.getElementById("container");
    const loginBtn = document.getElementById("login");
    const registerBtn = document.getElementById("register");
  
    // Toggle between Sign In / Sign Up
    registerBtn.addEventListener("click", () => {
      container.classList.add("active");
    });
  
    loginBtn.addEventListener("click", () => {
      container.classList.remove("active");
    });
  
    // ✅ Sign-Up
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("signup-name").value.trim();
      const email = document.getElementById("signup-email").value.trim();
      const password = document.getElementById("signup-password").value;
  
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          return userCredential.user.updateProfile({
            displayName: name
          });
        })
        .then(() => {
          alert("✅ Sign up successful!");
          signUpForm.reset();
          window.location.href = "/project2/index.html";
        })
        .catch((error) => {
          alert("❌ " + error.message);
        });
    });
  
    // ✅ Sign-In
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = document.getElementById("signin-email").value.trim();
      const password = document.getElementById("signin-password").value;
  
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          alert("✅ Sign in successful!");
          window.location.href = "/project2/index.html";
        })
        .catch((error) => {
          alert("❌ " + error.message);
        });
    });
  
    // ✅ Google Sign-In (for both buttons)
    function googleLogin(e) {
      e.preventDefault();
      const provider = new firebase.auth.GoogleAuthProvider();
  
      firebase.auth().signInWithPopup(provider)
        .then(() => {
          alert("✅ Google login successful!");
          window.location.href = "/project2/index.html";
        })
        .catch((error) => {
          alert("❌ " + error.message);
        });
    }
  
    document.getElementById("googleSignIn").addEventListener("click", googleLogin);
    document.getElementById("googleSignIn2").addEventListener("click", googleLogin);
  });
  