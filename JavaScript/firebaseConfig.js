import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  get,
  child,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmrK4sAD50fZpd0h-CdKdD-A-iIOA300s",
  authDomain: "sample-cru.firebaseapp.com",
  databaseURL: "https://sample-cru-default-rtdb.firebaseio.com",
  projectId: "sample-cru",
  storageBucket: "sample-cru.appspot.com",
  messagingSenderId: "504376783720",
  appId: "1:504376783720:web:e0305e030195ceb02bdcdd",
  measurementId: "G-CGR1W0QBZS",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(getDatabase());
const productsRef = ref(db, "products/");

export {
  db,
  dbRef,
  set,
  ref,
  get,
  child,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
};
