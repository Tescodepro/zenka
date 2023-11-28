'use client'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'


function FilterCard({ filterProps, setFilterProps, seoName, fields, filterData }) {
    const router = useRouter();
    const [searchFilters, setSearchFilters] = useState({});
    const [selectedCategories, setSelectedCategories] = useState({});
    const [searchData, setSearchData] = useState({});
    const { productList } = router.query;
    const getFilters = async (table_name) => {
        //await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}ProductOfSubCategory`).then(val => setMenuData(val['data']))
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_filters/${table_name}/${productList}`).then(val => {
            //setSearchData(val['data'])
            setSearchData(prevData => ({ ...prevData, [table_name]: val['data'] }));
        })
    }
    // console.log('seo Name', seoName)
    const handleCheckboxChange = (e, categoryId, categoryName, field) => {
        setSelectedCategories(prevSelectedCategories => {
            if (e.target.checked) {
                const updatedCategories = [
                    ...(prevSelectedCategories[field] || []),
                    categoryId
                ];
                return { ...prevSelectedCategories, [field]: updatedCategories };
            } else {
                if (!prevSelectedCategories[field]) {
                    return prevSelectedCategories;
                }

                const updatedCategories = prevSelectedCategories[field].filter(id => id !== categoryId);
                if (updatedCategories.length === 0) {
                    const { [field]: removedField, ...rest } = prevSelectedCategories;
                    return rest;
                }
                return { ...prevSelectedCategories, [field]: updatedCategories };
            }
        });
    };

    const getFilteredData = () => {
        // console.log('asdasdasd', selectedCategories)
        window.scrollTo(0, 300)
        setFilterProps(selectedCategories)
    }

    const handleSearchFilterChange = (e, field) => {
        const { value } = e.target;
        setSearchFilters(prevSearchFilters => ({ ...prevSearchFilters, [field]: value }));
    };



    const filterCategory = (category, field) => {
        const searchFilter = searchFilters[field] || '';
        return category.value.toLowerCase().includes(searchFilter.toLowerCase());
    };
    const handleClearButtonClick = () => {
        setSelectedCategories(prevSelectedCategories => {
            console.log('optionss', prevSelectedCategories)
            const updatedCategories = {};
            for (const field in prevSelectedCategories) {
                updatedCategories[field] = [];
            }
            return updatedCategories;
        });
        setSearchFilters({});
        window.location.reload()
    }

    useEffect(() => {
        fields?.map((card, index) => {
            if (card.accessor !== "Description" && card.accessor !== "PartNumber") {
                getFilters(card.accessor)
            }
        })
    }, [seoName, fields])


    return (
        <>

            <div className='container mt-4' style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <div style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', }} className="d-flex">
                    {

                        fields?.map((card, index) => {
                            return (
                                <React.Fragment key={index}>
                                    {
                                        card.accessor !== 'PartNumber' && card.accessor !== 'Description' ? <>
                                            <div className='d-inline-block  col-6 col-xs-6  col-md-3 col-lg-3'>
                                                <div className="card h-100 ">
                                                    <div className="card-header text-wrap text-dark">
                                                        {card.Header}
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="form-group   mb-3 ">
                                                            <input
                                                                value={searchFilters[card.accessor] || ''}
                                                                onChange={(e) => handleSearchFilterChange(e, card.accessor)}
                                                                style={{ height: '32px' }} type="text" className="form-control" id={`${card.accessor}`} name={`${card.accessor}`} placeholder="Search Filter" />
                                                        </div>
                                                        <div className='w-100' style={{ height: '180px', overflowX: 'auto' }}>

                                                            {

                                                                Array.isArray(searchData[card.accessor]) && searchData[card.accessor]?.filter((cat) => filterCategory(cat, card.accessor)).map((cat, index) => {
                                                                    const inputId = `input_${card.accessor}_${cat.id}`;
                                                                    return (
                                                                        <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                                                                            <span className="form-check" title={`${cat.value}`}>
                                                                                <input className="form-check-input" value={cat.id} name={cat.value} type="checkbox"
                                                                                    onClick={(e) => handleCheckboxChange(e, cat.id, cat.value, card.accessor)}
                                                                                    id={inputId} />
                                                                                <label className="form-check-label" htmlFor={inputId} >{cat.value}</label>
                                                                            </span>
                                                                        </div>
                                                                    )
                                                                })}
                                                            {/* Diğer üreticilerin form-check bileşenlerini ekleyin */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <></>
                                    }
                                </React.Fragment>

                            )
                        })}
                </div>
            </div>

            <div className='container'>
                <button onClick={() => getFilteredData()} className='btn btn-success mt-3 rounded-pill'>Apply All</button>
                <button onClick={() => handleClearButtonClick()} className='btn btn-secondary mt-3 text-white rounded-pill ms-3'>Clear</button>
            </div>


        </>

    )
}

export default FilterCard