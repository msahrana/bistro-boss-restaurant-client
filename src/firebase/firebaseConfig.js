// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKBlTJHFSZHiEUFgbQ2mqeFRpzEwS714w",
  authDomain: "bistro-boss-restaurant-f17c3.firebaseapp.com",
  projectId: "bistro-boss-restaurant-f17c3",
  storageBucket: "bistro-boss-restaurant-f17c3.appspot.com",
  messagingSenderId: "208570311123",
  appId: "1:208570311123:web:c95cf7dccfbf362c484f26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;