// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyB226b_ohVrR-WuVO5ZbG34-9pPIPrkaX8",

    authDomain: "sf-forum-demo.firebaseapp.com",

    projectId: "sf-forum-demo",

    storageBucket: "sf-forum-demo.appspot.com",

    messagingSenderId: "1084658864793",

    appId: "1:1084658864793:web:68ade01af57ce987935e08"

};


// Initialize Firebase

export const firebase = initializeApp(firebaseConfig);