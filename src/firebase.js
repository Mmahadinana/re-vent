import firebase from 'firebase/app';
import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCzcRLzZm0DUAPcPe2bxIPMKKoKer-9kwI",
    authDomain: "revents-9571e.firebaseapp.com",
    databaseURL: "https://revents-9571e.firebaseio.com",
    projectId: "revents-9571e",
    storageBucket: "revents-9571e.appspot.com",
    messagingSenderId: "249375633699",
    appId: "1:249375633699:web:1f6ccd157d313b62505c96",
    measurementId: "G-RCS6BX6B4F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;