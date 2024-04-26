import Card from "../../components/card/Card";
import { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../../services/products.services";
import { SearchData } from "../../context/SearchContext";
// import { searchData } from "../../components/nav/Nav";
// import { search } from "../../components/header/Header";

// export const searchFilter = (val) => {
//   const [search, setSearch] = useState("");
//   setSearch(val);
// };

const Home = () => {
  const [products, setProducts] = useState(null);

  const { search } = useContext(SearchData);

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
        products
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search);
          })
          .map((products, idx) => {
            return <Card {...products} key={idx} />;
          })
      ) : (
        <h1 className="text-5xl">No Data Avalaible Here</h1>
      )}
      {/* {products ? (
        products.map((products, idx) => {
          return <Card {...products} key={idx} />;
        })
      ) : (
        // : "No Data Avalaible Here"}
        <Card />
      )} */}
    </div>
  );
};

export default Home;
