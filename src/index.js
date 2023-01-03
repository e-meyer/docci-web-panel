import { initializeApp, getApp } from "firebase/app";
import { getDatabase, ref as ref_database, set, push } from "firebase/database";
import { getStorage, ref as ref_storage, uploadBytes } from "firebase/storage";

console.log(getStorage);
// console.log(storage);

const firebaseConfig = {
  apiKey: "AIzaSyDMF-AggrvoAEqWbJSJAcVbATBuhgtP6ao",
  authDomain: "docci-store.firebaseapp.com",
  databaseURL: "https://docci-store-default-rtdb.firebaseio.com",
  projectId: "docci-store",
  storageBucket: "docci-store.appspot.com",
  messagingSenderId: "590438102072",
  appId: "1:590438102072:web:155b28dea0489b811e22cd",
  measurementId: "G-G25KZMNZSK",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app, "gs://docci-store.appspot.com");

function writeUserData(userId, username, email, imageUrl) {
  const db = getDatabase(app);

  const databaseRef = ref_database(db, "users/" + userId);

  set(databaseRef, {
    username: username,
    email: email,
    profile_picture: imageUrl,
  });
}

var sendButton = document
  .querySelector("#send")
  .addEventListener("click", () => addProduct());

function addProduct() {
  // const databaseRef = ref(db, "product");

  const file = document.querySelector("#file-input").files[0];

  const fileName = file.name;

  const storageRef = ref_storage(storage, "images");
  // const imagesRef = ref_storage(storageRef, "images");
  // const spaceRef = ref_storage(imagesRef, fileName);

  uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });

  // imagesRef.put(file).then(() => {
  //   console.log("asdasdasdsa");
  // });

  // const email = document.getElementById("email").value;
  // push(databaseRef, email);

  // imageRef.getDownloadURL().then((url) => {
  //   db.ref_database("product").set({
  //     fileName: url,
  //   });
  // });
}

/* <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
        import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
        import { storage } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";


        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyDMF-AggrvoAEqWbJSJAcVbATBuhgtP6ao",
            authDomain: "docci-store.firebaseapp.com",
            databaseURL: "https://docci-store-default-rtdb.firebaseio.com",
            projectId: "docci-store",
            storageBucket: "docci-store.appspot.com",
            messagingSenderId: "590438102072",
            appId: "1:590438102072:web:155b28dea0489b811e22cd",
            measurementId: "G-G25KZMNZSK"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        const analytics = getAnalytics(app);

        const storageRef = storage.ref();

        var sendButton = document.querySelector('#send').addEventListener('click', () => {
            const email = document.getElementById('email').value
            push(ref(database, 'emails'), email)
        })

    </script> */
