import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAcEkn4GocXQpJtC-Y0CJl5v2FDoM5x94Q",
    authDomain: "ito-react.firebaseapp.com",
    projectId: "ito-react",
    storageBucket: "ito-react.appspot.com",
    messagingSenderId: "410948514330",
    appId: "1:410948514330:web:33784d12cf127b2f0d17a3"
  };

  if(firebase.apps.length == 0){
      firebase.initializeApp(firebaseConfig)
  }
