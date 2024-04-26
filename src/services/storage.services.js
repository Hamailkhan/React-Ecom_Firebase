import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "../firebaseConfig/firebase.config";
import { addProduct } from "./products.services";
import { updateData } from "./dashboard.services";

export const uploadImage = (data) => {
  const file = data.file[0];

  const metadata = {
    name: file.name,
    size: file.size,
    type: file.type,
  };

  const time = new Date();

  const storageRef = ref(storage, "images/" + time.getTime() + "-" + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        addProduct(data, downloadURL);
      });
    }
  );
};

export const editUploadImage = (data) => {
  const file = data.file[0];

  const metadata = {
    name: file.name,
    size: file.size,
    type: file.type,
  };

  const storageRef = ref(storage, "images/" + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        updateData(data, downloadURL);
      });
    }
  );
};
