import React, { useEffect } from 'react'
import { useTable, usePagination } from 'react-table'
import Link from 'next/link';
import { AiOutlineCaretRight, AiOutlineCaretLeft, AiFillForward, AiFillBackward } from "react-icons/ai";
function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 2, pageSize: 30  },
        },
        usePagination
    )
    useEffect(() => {
        console.log('gelen1111', data)
    }, [])

    // Render the UI for your table
    return (
        <React.Fragment>

            <div className='container d-block   mt-15'>
                <div className="row table-responsive ">
                    <div className="col-12 col-sm-12 ">
                        <table className='table  table-striped  table-xl table-hover' {...getTableProps()}>
                            <thead className=''>
                                {headerGroups.map((headerGroup, i) => (
                                    <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column, j) => (
                                            <th key={j} {...column.getHeaderProps()}>{column.render('Header')}</th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {page.map((row, i) => {
                                    prepareRow(row)
                                    return (
                                        <React.Fragment key={i}>
                                            <tr  {...row.getRowProps()}>
                                                {row.cells.map((cell, j) => {
                                                    // console.log("qweqwe", cell.render("Cell"))
                                                    // Resim sütunu için kontrol ekleyin
                                                    if (cell.column.id === 'image') {
                                                        return (
                                                            <React.Fragment key={j}>
                                                                <td key={cell.column.id} {...cell.getCellProps()}>
                                                                    <div>
                                                                        <Link href={`/product-details/${cell.row.original.firstName}`}>
                                                                            <div className="row">
                                                                                <div className="col-3">
                                                                                    <img
                                                                                        height={50}
                                                                                        width={150}
                                                                                        src={cell.value}
                                                                                        alt="Resim"
                                                                                        className=" img-fluid img-thumbnail "
                                                                                    />
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    {/* <span>{cell.row.original.firstName}</span> */}
                                                                                    {/* <span>description:{cell.row.original.description}</span> */}
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </div>

                                                                </td>
                                                            </React.Fragment>
                                                        );
                                                    }

                                                    return <td key={cell.column.id} {...cell.getCellProps()}><div>
                                                        {cell.render('Cell')}

                                                    </div></td>
                                                })}
                                            </tr>
                                        </React.Fragment>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="d-flex  align-items-center justify-content-end mb-5 pb-5">
                    <div className=" me-4 mb-4 pb-5">
                        <select
                            className='form-select form-select-sm mt-4 '
                            value={pageSize}
                            onChange={e => {
                                setPageSize(Number(e.target.value))
                            }}
                        >
                            {[10, 20, 30, 40, 50].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="pb-5">
                        <button className='btn btn-light' onClick={() => { gotoPage(0); scrollTo(0, 0); }} disabled={!canPreviousPage}>
                            <AiFillBackward />
                        </button>{' '}
                        <button className='btn btn-light' onClick={() => { previousPage(); scrollTo(0, 0); }} disabled={!canPreviousPage}>
                            <AiOutlineCaretLeft />
                        </button>{' '}
                        <button className='btn btn-light' onClick={() => { nextPage(); scrollTo(0, 0) }} disabled={!canNextPage}>
                            <AiOutlineCaretRight />
                        </button>{' '}
                        <button className='btn btn-light' onClick={() => { gotoPage(pageCount - 1); scrollTo(0, 0); }} disabled={!canNextPage}>
                            <AiFillForward />
                        </button>{' '}
                        <span>
                            Page{' '}
                            <strong>
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>{' '}
                        </span >
                        <span className='ms-2 '>
                            | Go to page:{' '}
                            <input
                                min={0}
                                max={pageOptions.length}
                                type="number"
                                className='form-control form-control-sm d-inline '
                                defaultValue={pageIndex + 1}
                                onChange={e => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                                    gotoPage(page)
                                    scrollTo(0, 0)
                                }}
                                style={{ width: '100px', height: '20px' }}
                            />
                        </span>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

Table.defaultProps = {
    columns: [],
    data: []
};

export default Table