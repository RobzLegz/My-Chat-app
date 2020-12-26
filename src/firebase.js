import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCIZ3SPTPHGrCvPT6po_DnjxQZMUfmp9G8",
    authDomain: "whats-app-clone-2663b.firebaseapp.com",
    projectId: "whats-app-clone-2663b",
    storageBucket: "whats-app-clone-2663b.appspot.com",
    messagingSenderId: "528735119284",
    appId: "1:528735119284:web:281bae4228834b0c9674e1",
    measurementId: "G-H5PF5N488P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;