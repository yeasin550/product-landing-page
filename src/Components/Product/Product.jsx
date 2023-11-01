import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("low"); // 'low' or 'high'
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const sortedProducts = [...products]; // Create a copy of the products array to avoid mutating the original array

  // Sort products based on the selected sort order
  if (sortOrder === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mb-12 lg:mt-[750px] mt-[150px]">
      <h1 className="text-center font-semibold text-4xl" data-aos="fade-right">
        NEW PRODUCTS
      </h1>
      <p
        className="text-center text-lg"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        Per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc
        nobis videntur parum clar
      </p>
      <div className="relative w-full mx-auto lg:max-w-sm mt-5">
        <select
          className="w-full p-2.5 text-gray-500 bg-white border border-orange-500 rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:pl-12 mt-9">
        {currentProducts.map((product) => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </div>

      <div
        className="mb-4 flex justify-end mr-5 space-x-4 mt-8"
        aria-label="Pagination"
      >
        {Array(Math.ceil(sortedProducts.length / productsPerPage))
          .fill(0)
          .map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`rounded-lg border border-teal-500 px-4 py-2 ${
                currentPage === index + 1
                  ? "bg-teal-500 text-white"
                  : "text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Product;
