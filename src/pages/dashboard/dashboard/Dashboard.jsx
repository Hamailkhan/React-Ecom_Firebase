import { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/products.services";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";

const Dashboard = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const productsResponse = await getAllProducts();
      setProducts(productsResponse);
    })();
  }, []);

  return (
    <div
      className={
        products
          ? "flex flex-wrap gap-16 justify-left p-5 min-h-screen w-11/13"
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
  );
};

export default Dashboard;
