import firebase from "firebase/app";
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDrmI7B-iC7e7WiY2hYTRw9AED6LsnauYI",
    authDomain: "beyond-main-website.firebaseapp.com",
    projectId: "beyond-main-website",
    storageBucket: "beyond-main-website.appspot.com",
    messagingSenderId: "955850676902",
    appId: "1:955850676902:web:e0d58e19123c5c37b5b267",
    measurementId: "G-CZWHSKRXBS"

};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const analytics = firebase.analytics;

export { firebase, analytics };