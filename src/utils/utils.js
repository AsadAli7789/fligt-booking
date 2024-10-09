
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLJohAqB_PWc57YV073HU5Jc-f2YSGYKQ",
  authDomain: "flight-2de9d.firebaseapp.com",
  projectId: "flight-2de9d",
  storageBucket: "flight-2de9d.appspot.com",
  messagingSenderId: "917380198581",
  appId: "1:917380198581:web:5be82762aa64863cf8cefc",
  measurementId: "G-EY3P5RWL05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app}