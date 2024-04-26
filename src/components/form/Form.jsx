import { useForm } from "react-hook-form";
import { onSubmit } from "../../pages/dashboard/addProduct/AddProduct";
import { useState } from "react";

const Form = () => {
  const [pointer, setPointer] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="w-96 bg-white flex justify-center items-center flex-col gap-2 p-2 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
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
        placeholder="Discount"
        className="input input-bordered w-full max-w-xs"
        {...register("discount", { required: true })}
      />
      {errors.discount && <span>required</span>}
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
        Add
      </button>
    </form>
  );
};

export default Form;
