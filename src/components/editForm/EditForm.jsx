import { useForm } from "react-hook-form";
import { onSubmitEdit } from "../../pages/dashboard/editProduct/EditProduct";

const EditForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { pid } = props;

  return (
    <form
      className="w-96 bg-white flex justify-center items-center flex-col gap-2 p-2 rounded-md"
      onSubmit={handleSubmit(onSubmitEdit)}
    >
      <input
        type="text"
        placeholder="title"
        className="input input-bordered w-full max-w-xs capitalize"
        {...register("title", { required: true })}
      />
      {errors.title && <span>required</span>}

      <input
        type="number"
        placeholder="Price"
        className="input input-bordered w-full max-w-xs"
        {...register("price", { required: true })}
      />
      {errors.price && <span>required</span>}
      <input
        type="number"
        placeholder="Quantity"
        className="input input-bordered w-full max-w-xs"
        {...register("qty", { required: true })}
      />
      {errors.qty && <span>required</span>}

      <input
        type="file"
        className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
        {...register("file", { required: true })}
      />
      {errors.file && <span>required</span>}
      <textarea
        name="description"
        placeholder="Description"
        cols="42"
        rows="5"
        className="textarea textarea-bordered resize-none"
        {...register("desc", { required: true })}
      ></textarea>
      {errors.desc && <span>required</span>}
      <button type="submit" className="btn btn-primary w-full max-w-xs">
        Update
      </button>
    </form>
  );
};

export default EditForm;
