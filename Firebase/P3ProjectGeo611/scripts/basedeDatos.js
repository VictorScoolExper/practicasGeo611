// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWDcPy-jTfAqcUnVXEzZf7i0qmfeYcdto",
  authDomain: "dimabasa611.firebaseapp.com",
  projectId: "dimabasa611",
  storageBucket: "dimabasa611.appspot.com",
  messagingSenderId: "88550609597",
  appId: "1:88550609597:web:5b8a3491d49fd300879dd4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();