import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyByIAkR6rqbCLv_VgKhr9NmidqCxeby1L4",
    authDomain: "fireblogvue-fda55.firebaseapp.com",
    projectId: "fireblogvue-fda55",
    storageBucket: "fireblogvue-fda55.appspot.com",
    messagingSenderId: "419175813879",
    appId: "1:419175813879:web:087e801d166175ae5039f2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};

export default firebaseApp.firestore();