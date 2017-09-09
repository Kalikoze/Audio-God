import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCZgEvtKdixq8DGrAxUWWusQWKo-ymgLn8",
  authDomain: "audio-god.firebaseapp.com",
  databaseURL: "https://audio-god.firebaseio.com",
  projectId: "audio-god",
  storageBucket: "",
  messagingSenderId: "569136803253"
};

firebase.initializeApp(config);
export default firebase;


// <script src="https://www.gstatic.com/firebasejs/4.3.1/firebase.js"></script>
// <script src="https://www.gstatic.com/firebasejs/4.3.0/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/4.3.0/firebase-auth.js"></script>
// <script src="https://www.gstatic.com/firebasejs/4.3.0/firebase-database.js"></script>
