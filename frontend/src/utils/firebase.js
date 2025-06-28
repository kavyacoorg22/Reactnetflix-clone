// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsOL6t-dDYTgKvp6xL-B6qJI1Xh0TvByM",
  authDomain: "netflix-clone-react-4542e.firebaseapp.com",
  projectId: "netflix-clone-react-4542e",
  storageBucket: "netflix-clone-react-4542e.firebasestorage.app",
  messagingSenderId: "652130580487",
  appId: "1:652130580487:web:34d9feb8dc75bd0e4412a2",
  measurementId: "G-ZB5VX47WL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);