import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyB6sVPEVKnnrOYKP9e0cJsw6c-CRckMRx4",
  authDomain: "tienda-9ab8a.firebaseapp.com",
  projectId: "tienda-9ab8a",
  storageBucket: "tienda-9ab8a.appspot.com",
  messagingSenderId: "632275995639",
  appId: "1:632275995639:web:45fa938d3420be1088bcf2",
  measurementId: "G-EPFR7M6QZY"
});

// Initialize Firebase
export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);






