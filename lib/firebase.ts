// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtmL6CXjhL4q5PE1ECTtxxe2o8ztnjN44",
  authDomain: "skillspire-23.firebaseapp.com",
  projectId: "skillspire-23",
  storageBucket: "skillspire-23.appspot.com",
  messagingSenderId: "515514964901",
  appId: "1:515514964901:web:54d6bad5dbfef2874ce64c",
  measurementId: "G-1RF1KYZFG9"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}
export const analytics = getAnalytics(app);
