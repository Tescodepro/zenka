import { FooterSix, Header, Wrapper } from "@layout/index";
import React, { useEffect, useState } from "react";
import SEO from "@components/seo";
import AboutArea from "@components/abouts/about-page-com/about";

export default function About() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/product');
      const data = await response.json();
      setProducts(data.products || []);
      setTotalPages(Math.ceil((data.products || []).length / 10)); // 10 ürün sayısıyla sayfa başına ürün sayısını belirleyebilirsiniz
    } catch (error) {
      console.log('Veriler alınırken bir hata oluştu:', error);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const renderProducts = () => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    // console.log("asd", products);
    if (products) {

      const pageProducts = products.slice(startIndex, endIndex);

      return pageProducts.map((product, index) => (
        <tr key={index}>  
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.category}</td>
        </tr>
      ));
    }
  };

  const renderPagination = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={currentPage === i ? 'active' : ''}>
          <button onClick={() => goToPage(i)}>{i}</button>
        </li>
      );
    }

    return (
      <ul className="pagination">
        {pages}
      </ul>
    );
  };

  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <h1>Ürünler</h1>
      <table>
        <thead>
          <tr>
            <th>Ürün Adı</th>
            <th>Fiyat</th>
            <th>Kategori</th>
          </tr>
        </thead>
        <tbody>
          {renderProducts()}
        </tbody>
      </table>
      {renderPagination()}
    </Wrapper>
  );


}

