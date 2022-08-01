importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

//  import firebase from "../src/firebase";

firebase.initializeApp({
    apiKey: "AIzaSyDv0E9oNJ1jr1WZuucXH1DseTokN0vzgUk",
    authDomain: "fir-crud-62d82.firebaseapp.com",
    projectId: "fir-crud-62d82",
    storageBucket: "fir-crud-62d82.appspot.com",
    messagingSenderId: "1087673770801",
    appId: "1:1087673770801:web:76b4d4cf216a8ba9bd8610",
    measurementId: "G-ETJSPT2DZM"
})
const messaging=firebase.messaging()
messaging.onBackgroundMessage(function(payload){
console.log("receive background  message: ", payload)
const notificationTitle=payload.notification.title;
const notificationOptions={
    body:payload.notification.body,
};
self.registration.showNotification(notificationTitle,
notificationOptions);
});