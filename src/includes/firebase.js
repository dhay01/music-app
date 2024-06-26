import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBMTkZ2ohuiJKLIyw-T_foOKul-CdiJuFQ",
    authDomain: "music-1c428.firebaseapp.com",
    projectId: "music-1c428",
    storageBucket: "music-1c428.appspot.com",
    appId: "1:983448288123:web:97ed3630cab74a7f361bde"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
db.enablePersistence().catch((error)=>{
    console.log("Persistence failed: ", error);
});

const userCollection = db.collection("users");
const commentsCollection = db.collection('comments');
const songsCollection = db.collection("songs");


export {
    auth,
    db,
    userCollection,
    songsCollection,
    storage,
    commentsCollection,
}