import { child, get, push, ref, set } from "firebase/database";
import { db } from "../firebaseConfig/firebase.config";

const dbRef = ref(db);

export const getAllProducts = async () => {
  try {
    const response = await get(child(dbRef, "products"));

    if (response.exists()) {
      const data = response.val();
      return Object.values(data);
    }
  } catch (error) {
    console.log("error");
  }
};

export const addProduct = async (data, img) => {
  try {
    const productKey = push(child(dbRef, "products")).key;
    const productEntityRef = ref(db, "products" + "/" + productKey);

    const response = await set(productEntityRef, {
      pid: productKey,
      img,
      ...data,
    });

    return response;
  } catch (error) {
    console.error("Error", error);
  }
};

export const getProductsById = async (pid) => {
  try {
    const response = await get(child(dbRef, `products/${pid}`));

    if (response.exists()) {
      return response.val();
    } else {
      alert("No data here");
    }
  } catch (error) {
    console.log(error);
  }
};
