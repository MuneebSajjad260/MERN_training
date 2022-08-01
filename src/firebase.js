
import{initializeApp}from 'firebase/app';
import {getMessaging,getToken,onMessage} from 'firebase/messaging'

// import {getFirestore} from '@firebase/firestore'
 const firebaseConfig= {
    apiKey: "AIzaSyDv0E9oNJ1jr1WZuucXH1DseTokN0vzgUk",
    authDomain: "fir-crud-62d82.firebaseapp.com",
    projectId: "fir-crud-62d82",
    storageBucket: "fir-crud-62d82.appspot.com",
    messagingSenderId: "1087673770801",
    appId: "1:1087673770801:web:76b4d4cf216a8ba9bd8610",
    measurementId: "G-ETJSPT2DZM"
  };
  
const firebaseApp=initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
export const gettoken = (setTokenFound) => {
  return getToken(messaging, {vapidKey: 'BP7lUmaSuN0bF5Vsd8vaLYxd_hKqqHMyVXuiVefe82IVOt14Z49NAAwS1ymDWohUUva0BnrNziH3pw42FG6UMtA'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("receive foreground message",payload)
       resolve(payload);
    });
});