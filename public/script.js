// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDMF-AggrvoAEqWbJSJAcVbATBuhgtP6ao",
//   authDomain: "docci-store.firebaseapp.com",
//   databaseURL: "https://docci-store-default-rtdb.firebaseio.com",
//   projectId: "docci-store",
//   storageBucket: "docci-store.appspot.com",
//   messagingSenderId: "590438102072",
//   appId: "1:590438102072:web:155b28dea0489b811e22cd",
//   measurementId: "G-G25KZMNZSK",
  
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// const analytics = getAnalytics(app);

// var firebaseRef = database.ref('emails')

// var sendButton = document.querySelector('#send').addEventListener('click', () => {
//     const email = document.getElementById('email').value
//     firebaseRef.push(email)
// })