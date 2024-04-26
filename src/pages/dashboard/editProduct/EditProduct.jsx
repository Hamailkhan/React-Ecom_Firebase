import { useEffect, useState } from "react";
import EditForm from "../../../components/editForm/EditForm";
import { getProductsById } from "../../../services/products.services";
import { editUploadImage } from "../../../services/storage.services";
import { useParams } from "react-router-dom";

export const onSubmitEdit = async (editData) => {
  const addProductResponse = await editUploadImage(editData);
};

const EditProduct = () => {
  const [edit, setEdit] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const editData = await getProductsById(id);
      setEdit(editData);
    })();
  }, [id]);

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <EditForm {...edit} />
    </div>
  );
};

export default EditProduct;
