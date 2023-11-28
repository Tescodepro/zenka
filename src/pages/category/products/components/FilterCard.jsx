import Link from 'next/link';
import React, { useState } from 'react'


function FilterCard() {
    let data = [
        {
            "id": 1,
            "title": "Manufacturer",
            "description": "Kart 1 açıklama",
            "category": [
                { id: 1, name: "Kategori 1" },
                { id: 2, name: "Kategori 2" },
                { id: 3, name: "Kategori 3" },
                { id: 4, name: "Kategori 4" },
                { id: 5, name: "Kategori 5" },
                { id: 6, name: "Kategori 6" },
                { id: 7, name: "Kategori 30" },
                { id: 8, name: "Kategori 36" }
            ]
        },
        {
            "id": 2,
            "title": "Series",
            "description": "Kart 2 açıklama",
            "category": [
                { id: 9, name: "Kategori 7" },
                { id: 10, name: "Kategori 8" },
                { id: 11, name: "Kategori 9" },
                { id: 12, name: "Kategori 10" },
                { id: 13, name: "Kategori 11" },
                { id: 14, name: "Kategori 12" }
            ]
        },
        {
            "id": 3,
            "title": "Packaging",
            "description": "Kart 3 açıklama",
            "category": [
                { id: 15, name: "Kategori 13" },
                { id: 16, name: "Kategori 14" },
                { id: 17, name: "Kategori 15" },
                { id: 18, name: "Kategori 16" },
                { id: 19, name: "Kategori 17" },
                { id: 20, name: "Kategori 18" },
            ]
        },
        {
            "id": 4,
            "title": "Product Status",
            "description": "Kart 4 açıklama",
            "category": [
                { id: 21, name: "Kategori 19" },
                { id: 22, name: "Kategori 20" },
                { id: 23, name: "Kategori 21" },
                { id: 24, name: "Kategori 22" },
                { id: 25, name: "Kategori 23" },
                { id: 26, name: "Kategori 24" },
            ]
        },
        {
            "id": 5,
            "title": "Cable Type",
            "description": "Kart 5 açıklama",
            "category": [
                { id: 27, name: "Kategori 20" },
                { id: 28, name: "Kategori 19" },
                { id: 29, name: "Kategori 21" },
                { id: 30, name: "Kategori 22" },
                { id: 31, name: "Kategori 23" },
                { id: 32, name: "Kategori 24" },
            ]
        },
        {
            "id": 6,
            "title": "Kart 6",
            "description": "Kart 6 açıklama",
            "category": [
                { id: 99, name: "Kategori 19" },
                { id: 33, name: "Kategori 20" },
                { id: 34, name: "Kategori 21" },
                { id: 35, name: "Kategori 22" },
                { id: 36, name: "Kategori 23" },
                { id: 37, name: "Kategori 24" }
            ]
        },
        {
            "id": 7,
            "title": "Kart 7",
            "description": "Kart 7 açıklama",
            "category": [
                { id: 39, name: "Kategori 19" },
                { id: 40, name: "Kategori 20" },
                { id: 41, name: "Kategori 21" },
                { id: 42, name: "Kategori 22" },
                { id: 43, name: "Kategori 23" },
                { id: 44, name: "Kategori 24" }
            ]
        },
        {
            "id": 8,
            "title": "Kart 8",
            "description": "Kart 8 açıklama",
            "category": [
                { id: 45, name: "Kategori 19" },
                { id: 46, name: "Kategori 20" },
                { id: 47, name: "Kategori 21" },
                { id: 48, name: "Kategori 22" },
                { id: 49, name: "Kategori 23" },
                { id: 50, name: "Kategori 24" }
            ]
        },
        {
            "id": 9,
            "title": "Kart 9",
            "description": "Kart 9 açıklama",
            "category": [
                { id: 50, name: "Kategori 19" },
                { id: 51, name: "Kategori 20" },
                { id: 52, name: "Kategori 21" },
                { id: 53, name: "Kategori 22" },
                { id: 54, name: "Kategori 23" },
                { id: 55, name: "Kategori 24" }
            ]
        },
        {
            "id": 10,
            "title": "Kart 10",
            "description": "Kart 10 açıklama",
            "category": [
                { id: 56, name: "Kategori 19" },
                { id: 57, name: "Kategori 20" },
                { id: 58, name: "Kategori 21" },
                { id: 59, name: "Kategori 22" },
                { id: 60, name: "Kategori 23" },
                { id: 61, name: "Kategori 24" }
            ]
        }
    ]




    return (
        <>
            <div className='container mt-4' style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <div style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', }} className="d-flex">
                    {data.map((card, i) => {
                        return (
                            <div key={i} className='d-inline-block col-6 col-xs-6  col-md-3 col-lg-2'>
                                <div key={card.id} className="card  ">
                                    <div className="card-header text-dark">
                                        {card.title}
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group   mb-3 ">
                                            <input style={{ width: '', height: '32px' }} type="text" className="form-control" placeholder="Search Filter" />
                                        </div>
                                        <div className='w-100' style={{ height: '180px', overflowX: 'auto' }}>
                                            {card.category.map((cat, index) => {
                                                const filterOptionId = `filterOption${index + 1}`;
                                                return (<>
                                                    <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <span className="form-check" title={`${cat.name}`}>
                                                            <input className="form-check-input" type="checkbox" onChange={(e) => console.log('first e value', e)} id={`input${cat.id}`} />
                                                            <label className="form-check-label" htmlFor={`input${cat.id}`} >{cat.name}</label>
                                                        </span>


                                                    </div>
                                                </>)
                                            })}

                                            {/* Diğer üreticilerin form-check bileşenlerini ekleyin */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>



        </>

    )
}

export default FilterCard