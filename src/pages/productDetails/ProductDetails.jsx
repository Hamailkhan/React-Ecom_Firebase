import { useParams } from "react-router-dom";
import CardDetails from "../../components/cardDetails/CardDetails";
import { useEffect, useState } from "react";
import { getProductsById } from "../../services/products.services";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const productData = await getProductsById(id);
      setProduct(productData);
    })();
  }, [id]);

  return (
    <div className="w-10/13 min-h-screen flex justify-center items-center">
      <CardDetails {...product} />
    </div>
  );
};

export default ProductDetails;
