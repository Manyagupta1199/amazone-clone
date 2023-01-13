// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA05utmhpMvZPKV1NthuQAP2_dBtR-0gDU",
    authDomain: "clone-557dc.firebaseapp.com",
    projectId: "clone-557dc",
    storageBucket: "clone-557dc.appspot.com",
    messagingSenderId: "700580265981",
    appId: "1:700580265981:web:cae328b975cd0f902ce394",
    measurementId: "G-SB8QNZ4C17"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db,auth};