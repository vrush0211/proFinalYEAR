// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiMwUIiYkTFHL3IqhlhavQO_IGk9ZMoio",
  authDomain: "auto-timetable-generator.firebaseapp.com",
  projectId: "auto-timetable-generator",
  storageBucket: "auto-timetable-generator.appspot.com",
  messagingSenderId: "869066736645",
  appId: "1:869066736645:web:991020def6bda4f13d086c",
  measurementId: "G-6QNNFYPMC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });