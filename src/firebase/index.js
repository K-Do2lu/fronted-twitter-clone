import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBR9Vq_GuxODBbgO93GQPLYIVWiBt5zUkg",
    authDomain: "twitter-clone-inflearn-bc572.firebaseapp.com",
    projectId: "twitter-clone-inflearn-bc572",
    storageBucket: "twitter-clone-inflearn-bc572.appspot.com",
    messagingSenderId: "1073135903652",
    appId: "1:1073135903652:web:9e98196e301e0593f3d731"
  };

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()
export const USER_COLLECTION = db.collection('users')