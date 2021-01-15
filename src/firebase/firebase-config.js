import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAPeJm6lZ5IlHuJiaaqYgGks81hMFMHsaU",
    authDomain: "todolist-43898.firebaseapp.com",
    projectId: "todolist-43898",
    storageBucket: "todolist-43898.appspot.com",
    messagingSenderId: "499126387257",
    appId: "1:499126387257:web:438a9e38e50141c11983e8"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };