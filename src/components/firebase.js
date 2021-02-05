import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBGnSG5Z2WhEfF8INtMXGmzi0wCCXpQLVI',
  authDomain: 'igotfiveonit-87979.firebaseapp.com',
  projectId: 'igotfiveonit-87979',
  storageBucket: 'igotfiveonit-87979.appspot.com',
  messagingSenderId: '456548070802',
  appId: '1:456548070802:web:36071a8d7dcb72cff6bd4b',
  measurementId: 'G-39HCHNW82D',
};

//Initalize the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Initialize the firebase database

const db = firebaseApp.firestore();

// Authorization handles signing in and out etc..
const auth = firebase.auth();

export { db, auth };
