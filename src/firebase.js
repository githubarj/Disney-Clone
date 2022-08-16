import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
import "firebase/compat/auth"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCqBieaOvF8unNSLiycItyYc_i4AKgHzDg",
  authDomain: "disneyplus-7a180.firebaseapp.com",
  projectId: "disneyplus-7a180",
  storageBucket: "disneyplus-7a180.appspot.com",
  messagingSenderId: "221387684838",
  appId: "1:221387684838:web:165078e92d4eed09f1f427",
  measurementId: "G-5YNMT0VLGH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
