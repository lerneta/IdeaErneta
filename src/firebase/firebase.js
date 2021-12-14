import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBWC_Bj3CHJQjUibWsEjdmZZ0v-KGwm7YA",
    authDomain: "desafiocoder-2f8a8.firebaseapp.com",
    projectId: "desafiocoder-2f8a8",
    storageBucket: "desafiocoder-2f8a8.appspot.com",
    messagingSenderId: "669240881973",
    appId: "1:669240881973:web:53258c6c07cd9b3fb2127c"
};


const app = firebase.initializeApp(firebaseConfig)


export function getFirestore() {
    return firebase.firestore(app)
};
