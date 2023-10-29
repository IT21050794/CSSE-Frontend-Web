import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

import { config } from "../constants/config";
//require('dotenv').config();

const firebaseConfig = {
  apiKey: 'AIzaSyDZK16D9x99pZoDig-8xOxcughTbyOUWIU',
  authDomain: 'uee-sliit.firebaseapp.com',
  databaseURL: 'https://uee-sliit-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'uee-sliit',
  storageBucket: 'uee-sliit.appspot.com',
  messagingSenderId: '593619385820',
  appId: '1:593619385820:web:309d4880a73eff9b10a319',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();
const storage = getStorage();
const auth = getAuth();

export { db, storage, auth };
