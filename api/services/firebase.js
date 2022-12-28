import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDt-5hDvD-7rG7OxsjBL_HzuJptDjZlfuQ",
  authDomain: "siglechat.firebaseapp.com",
  projectId: "siglechat",
  storageBucket: "siglechat.appspot.com",
  messagingSenderId: "859809009380",
  appId: "1:859809009380:web:071ecff58873e5f80666f1",
  measurementId: "G-45V8F4TVXS"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();