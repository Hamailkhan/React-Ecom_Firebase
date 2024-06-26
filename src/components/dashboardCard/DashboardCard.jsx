import React from "react";
import { NavLink } from "react-router-dom";
import { deleteData, updateData } from "../../services/dashboard.services";

const DashboardCard = (props) => {
  const { title, desc, pid, img, price, qty } = props;

  return (
    // <div className="card w-96 bg-base-100 shadow-xl h-fit">
    //   <figure
    //     className="w-full"
    //     style={{
    //       height: "300px",
    //     }}
    //   >
    //     <img src={img} alt={title} className="w-full h-full object-cover" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{title}</h2>
    //     <p>{desc}</p>
    //     <p>$ {price}</p>
    //     <div className="card-actions justify-end">
    //       <NavLink to={`/product/${pid}`}>
    //         <button className="btn btn-primary">View</button>
    //       </NavLink>
    //       <button className="btn btn-primary" onClick={() => deleteData(pid)}>
    //         Delete
    //       </button>
    //       <NavLink to={`/dashboard/editProduct/${pid}`}>
    //         <button className="btn btn-primary" onClick={() => updateData(pid)}>
    //           Edit
    //         </button>
    //       </NavLink>
    //     </div>
    //   </div>
    // </div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{title}</td>
          <td>{price}</td>
          <td>{qty}</td>
          <td>
            <NavLink to={`/dashboard/editProduct/${pid}`}>
              <button
                className="btn btn-primary"
                onClick={() => updateData(pid)}
              >
                Edit
              </button>
            </NavLink>
          </td>
          <td>{qty}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DashboardCard;
