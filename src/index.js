import { initializeApp, getApp } from "firebase/app";
import { getDatabase, ref as ref_database, set, push } from "firebase/database";
import { getStorage, ref as ref_storage, uploadBytes } from "firebase/storage";

require("dotenv").config();

const apiKey = process.env.API_KEY;
const authDomain = process.env.AUTH_DOMAIN;
const databaseUrl = process.env.DATABASE_URL;
const projectId = process.env.PROJECT_ID;
const storageBucket = process.env.STORAGE_BUCKET;
const messagingSenderId = process.env.MESSAGING_SENDER_ID;
const appId = process.env.APP_ID;
const measurementId = process.env.MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseUrl,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
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
