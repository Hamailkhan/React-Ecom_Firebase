import { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/products.services";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";
import Form from "../../../components/form/Form";
import Modal from "../../../components/modal/Modal";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const productsResponse = await getAllProducts();
      setProducts(productsResponse);
    })();
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col">
      <button
        className="btn btn-primary w-11/12"
        onClick={() => setModal(true)}
      >
        Add Product
      </button>

      <div
        className="fixed  top-0 left-0 w-full min-h-full flex justify-center items-center"
        style={
          !modal
            ? { display: "none" }
            : { display: "flex", zIndex: "100", backdropFilter: "blur(50px)" }
        }
      >
        <div className="w-96 bg-white flex justify-center items-center flex-col gap-2 p-2 rounded-md">
          <Form modal={setModal} />
          <button
            className="btn btn-primary w-full max-w-xs"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
      <div
        className={
          products
            ? "flex flex-wrap gap-16 justify-left p-5 min-h-screen w-full"
            : "flex justify-center items-center w-full min-h-screen"
        }
      >
        {products ? (
          products.map((products, idx) => {
            return <DashboardCard {...products} key={idx} />;
          })
        ) : (
          <h1 className="text-5xl">No Data Avalaible Here</h1>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
