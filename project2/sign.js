// Firebase configuration
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
  
  document.addEventListener("DOMContentLoaded", function () {
    // Sign-Up Form
    document.querySelector(".sign-up form").addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.querySelector(".sign-up input[placeholder='Name']").value.trim();
      const email = document.querySelector(".sign-up input[placeholder='Email']").value.trim();
      const password = document.querySelector(".sign-up input[placeholder='Password']").value;
  
      if (!name || !email || !password) {
        alert("⚠️ Please fill in all fields!");
        return;
      }
  
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          alert("✅ Account created successfully!");
          document.querySelector(".sign-up form").reset();
          window.location.href = window.location.origin + "/project2/index.html";
        })
        .catch((error) => {
          alert("❌ " + error.message);
        });
    });
  
    // Sign-In Form
    document.querySelector(".sign-in form").addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.querySelector(".sign-in input[placeholder='Email']").value.trim();
      const password = document.querySelector(".sign-in input[placeholder='Password']").value;
  
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          alert("🎉 Login successful!");
          window.location.href = window.location.origin + "/project2/index.html";
        })
        .catch((error) => {
          alert("❌ " + error.message);
        });
    });
  
    // Google Sign-In (for both buttons)
    function googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          alert("✅ Google sign-in successful!");
          window.location.href = window.location.origin + "/project2/index.html";
        })
        .catch((error) => {
          alert("❌ " + error.message);
        });
    }
  
    document.getElementById("googleSignIn").addEventListener("click", googleLogin);
    document.getElementById("googleSignIn2").addEventListener("click", googleLogin);
  });
  