import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_kB4ebjDoQd_LNx4QKDnfWhn4akIRd2g",
    authDomain: "my-project-3796c.firebaseapp.com",
    projectId: "my-project-3796c",
    storageBucket: "my-project-3796c.appspot.com",
    messagingSenderId: "28453415258",
    appId: "1:28453415258:web:d1d339c98e0be1bdc2eb63",
    measurementId: "G-ELQTEHY967"
  };

export default firebase.initializeApp(firebaseConfig)