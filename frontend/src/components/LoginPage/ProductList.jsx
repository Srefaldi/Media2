import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getProducts();
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <main className="flex flex-1 overflow-hidden">
        <section className="flex-1 p-8 overflow-auto">
          <h1 className="font-semibold text-3xl mb-5 text-gray-800">
            Data Evaluasi
          </h1>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
            <div className="mt-4 flex items-center space-x-2 text-gray-700 text-sm">
              <Link to="/products/add" className="button is-primary">
                TAMBAH
              </Link>
            </div>
            <input
              type="search"
              placeholder="Cari..."
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>

          <table className="mt-5 w-full text-left text-gray-700 text-sm border border-spacing-y-2">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="font-semibold px-3 py-2 text-center">KELAS</th>
                <th className="font-semibold px-3 py-2 text-center">NAMA</th>
                <th className="font-semibold px-3 py-2 text-center">NILAI</th>
                <th className="font-semibold px-3 py-2 text-center">BAB</th>
                <th className="font-semibold px-3 py-2 text-center">AKSI</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.uuid} className="border-b border-gray-200">
                  <td className="px-3 py-3 text-center">{index + 1}</td>
                  <td className="px-3 py-3 text-center">{product.name}</td>
                  <td className="px-3 py-3 text-center">{product.price}</td>
                  <td className="px-3 py-3 text-center">{product.user.name}</td>
                  <td className="px-3 py-3 text-center">
                    <Link
                      to={`/products/edit/${product.uuid}`}
                      className="button is-small is-info"
                    >
                      PERBARUI
                    </Link>
                    <button
                      onClick={() => deleteProduct(product.uuid)}
                      className="button is-small is-danger"
                    >
                      HAPUS
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mt-6 space-x-1 select-none">
            <button className="bg-gray-500 text-white text-xs font-semibold px-3 py-1 rounded-l hover:bg-gray-600">
              &laquo;
            </button>
            <button className="bg-gray-500 text-white text-xs font-semibold px-3 py-1 hover:bg-gray-600">
              &lsaquo;
            </button>
            <button className="bg-gray-500 text-white text-xs font-semibold px-3 py-1">
              1
            </button>
            <button className="bg-gray-500 text-white text-xs font-semibold px-3 py-1 hover:bg-gray-600">
              &rsaquo;
            </button>
            <button className="bg-gray-500 text-white text-xs font-semibold px-3 py-1 rounded-r hover:bg-gray-600">
              &raquo;
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductList;
