import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBg7utPMdO1krCWXwHQQcK7R-ucf9vQVUA",
  authDomain: "e-ride-stage-4-33781.firebaseapp.com",
  projectId: "e-ride-stage-4-33781",
  storageBucket: "e-ride-stage-4-33781.appspot.com",
  messagingSenderId: "260877847861",
  appId: "1:260877847861:web:5205a2ef946d5dce26507c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
