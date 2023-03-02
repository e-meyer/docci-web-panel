import { initializeApp, getApp } from "firebase/app";
import { getDatabase, ref as ref_database, set, push } from "firebase/database";
import { getStorage, ref as ref_storage, uploadBytes } from "firebase/storage";

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
  const file = document.querySelector("#file-input").files[0];

  const storageRef = ref_storage(storage, "images");

  uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
}
