import axios from 'axios';
import React, { useState, useEffect } from 'react';
import cate_1 from "@assets/img/product/category/robo.png";
import cate_2 from "@assets/img/product/category/box.png";
import cate_3 from "@assets/img/product/category/cable.png";
import cate_4 from "@assets/img/product/category/Connectors.png";
import cate_5 from "@assets/img/product/category/electro.png";
import cate_6 from "@assets/img/product/category/fasteners.png";
import cate_7 from "@assets/img/product/category/circuits.png";
import Image from 'next/image';
import Link from 'next/link';

function CategoryList() {
    const [productCategory, setProductCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredSubCategory, setFilteredSubCategory] = useState([]);

    useEffect(() => {
        getBackCategory();
    }, []);

    const getBackCategory = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_categories`);
            setProductCategory(response.data);
        } catch (error) {
            console.error('Error fetching category data:', error);
        }
    };

    const handleCategoryHover = async (name, tabname) => {
        setSelectedCategory(tabname);
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_subcategories/${name}`);
            setFilteredSubCategory(response.data.subcategory);
        } catch (error) {
            console.error('Error fetching subcategory data:', error);
        }
    };

    const handleCategoryClick = (name) => {
        setSelectedCategory(name);
    };

    const handleSubCategoryClick = (subCategory) => {
        // Burada alt kategoriye tıklandığında yapılmasını istediğiniz işlemleri gerçekleştirebilirsiniz
        // Örneğin, alt kategoriye tıklandığında ilgili sayfaya yönlendirebilirsiniz
        console.log('Clicked subcategory:', subCategory);
    };

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-12'>
                <div  className='d-flex overflow-auto  mt-2  nav-tabs '>
                        {productCategory.map((val, i) => (
                            <li className={`nav-item ${selectedCategory === val.name ? 'active  border rounded' : ''} list-unstyled align-items-center justify-content-center`} key={i}>
                            <a
                              className={`nav-link `}
                              onMouseEnter={() => handleCategoryHover(val.seo_name, val.name)}
                              onMouseLeave={() => setFilteredSubCategory([])}
                              onClick={() => handleCategoryClick(val.name)}
                            >
                              <div className=' align-items-center'>
                                <div className='img-fluid mx-5 pt-2'>
                                  <Image src={cate_7} alt='Category Image' width={50} height={50} />
                                </div>
                                <div className='text-center'>{val.name}</div>
                              </div>
                            </a>
                          </li>
                        ))}
                  </div>
                    <div className='tab-content'>
                        {productCategory.map((val, i) => (
                            <div
                                className={`tab-pane fade ${selectedCategory === val.name ? 'show active' : ''}`}
                                id={`category-${i}`}
                                key={i}
                            >
                                {selectedCategory === val.name && (
                                    <div
                                        className={`subcategory-list  ${selectedCategory === val.name ? 'show active' : ''}`}
                                        onMouseEnter={() => setFilteredSubCategory(filteredSubCategory)}
                                        onMouseLeave={() => setFilteredSubCategory([])}
                                    >
                                        {filteredSubCategory.length > 0 ? (
                                            <ul className='list-group p-2'>
                                                {filteredSubCategory.map((subCategory, index) => (
                                                    <li className='list-unstyled mt-1' key={index}>
                                                        <Link href={`/category-detail/${subCategory.seo_name}`}>
                                                            <span onClick={() => handleSubCategoryClick(subCategory)}>
                                                                {subCategory.name}
                                                            </span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No subcategories available.</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryList;
