// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmAtFAPPTT1mIrTAQS_MQz7uFTquIGX-4",
    authDomain: "whokilledblaze.firebaseapp.com",
    databaseURL: "https://whokilledblaze.firebaseio.com",
    projectId: "whokilledblaze",
    storageBucket: "whokilledblaze.appspot.com",
    messagingSenderId: "182995655400",
    appId: "1:182995655400:web:5f26cf640e75ceba1f875d",
    measurementId: "G-KK1R33SWZN"
  };
import firebase from 'firebase'
import 'firebase/firestore'
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth();
export default {db,auth}