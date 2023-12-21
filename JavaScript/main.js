// Code By AbdulWaris
import {
  db,
  set,
  ref,
  dbRef,
  get,
  child,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
} from "./firebaseConfig.js";

let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productDes = document.getElementById("productDes");
console.log(productDes);

let formAddBtn = document.getElementById("formAddBtn");
let formUpdateBtn = document.getElementById("formUpdateBtn");

// Functions
const handleAddProduct = (e) => {
  e.preventDefault();
  set(ref(db, "products/" + productName.value), {
    name: productName.value,
    price: productPrice.value,
    des: productDes.innerHTML,
  })
    .then(() => {
      console.log("Product Added");
    })
    .catch((err) => {
      console.log("Error Found");
    });
};
const handleUpdateProduct = () => {};

// Checking Updates from the Database

get(child(dbRef, `products/${productName.value}`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });

formAddBtn.addEventListener("click", handleAddProduct);
