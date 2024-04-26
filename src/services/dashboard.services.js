import { ref, remove, update } from "firebase/database";
import { db } from "../firebaseConfig/firebase.config";

export const deleteData = async (pid) => {
  await remove(ref(db, "products/" + pid))
    .then(() => alert("Product Deleted"))
    .catch((error) => console.log(error));
};

export const updateData = async (data, img) => {
  const { title, price, qty, desc } = data;

  const l = window.location.href.split("/").pop();

  await update(ref(db, "products/" + l), {
    title,
    qty,
    desc,
    price,
    img,
  })
    .then(() => alert("Data Updated"))
    .catch((error) => alert("Error", error));
};
