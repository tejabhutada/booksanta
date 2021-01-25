import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyC77y4MQF2WT5_IMw5zcERdgLq8dy3nY_I",
    authDomain: "booksanta-e5a6d.firebaseapp.com",
    projectId: "booksanta-e5a6d",
    storageBucket: "booksanta-e5a6d.appspot.com",
    messagingSenderId: "728286198938",
    appId: "1:728286198938:web:f81cd024cb581e3abff323"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();