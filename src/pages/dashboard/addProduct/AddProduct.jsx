import Form from "../../../components/form/Form";
import { uploadImage } from "../../../services/storage.services";

export const onSubmit = async (data) => {
  const addProductResponse = await uploadImage(data);
};

const AddProduct = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Form />
    </div>
  );
};

export default AddProduct;
