import {firestore, initializeApp} from 'firebase';
import firebase from "firebase";

initializeApp ({
    apiKey: "AIzaSyBh9yCPMX7OlqC1hIvcxjIC5RVbd73st5s",
    authDomain: "planktonics-e3a53.firebaseapp.com",
    databaseURL: "https://planktonics-e3a53.firebaseio.com",
    projectId: "planktonics-e3a53",
    storageBucket: "planktonics-e3a53.appspot.com",
    messagingSenderId: "437747135767",
    appId: "1:437747135767:web:cea0d6202e1e1bf79ff352"
});

export const db = firestore();

export const authAPI = {
    auth() {
      return firebase.auth()
    },
    signIn(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
    },
    signOut() {
      return   firebase.auth().signOut()
    },
    user() {
        return firebase.auth().onAuthStateChanged
    }
};

export const userAPI = {
    getUser(email) {
        return db.collection("users").where('email', '==', email).get()
    },
    updateUser(email, fullName, id, nickname, photoURL, docId) {
        return db.collection("users").doc(`${docId}`).update({
            fullName: fullName,
            id: id,
            photoURL: photoURL,
            nickname: nickname
        })
    },
};

export const chatAPI = {
    updateMessageFirebase(newObjectProps) {
        return db.collection("chats").doc('chat').update(newObjectProps)
    },
};

export const usersListAPI = {
    getUsersListFirebase() {
        return db.collection("users").get()
    },
};
