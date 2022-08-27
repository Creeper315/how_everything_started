import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useEffect } from 'react';
import { useTable, useSortBy } from 'react-table';

function UserTable({ showError, musicStarted }) {
    function getdata() {
        let arr = [
            'Spider man, spider3@gmail.com, 1234567890, Earth ',
            'Hulk, green@163.com, 1234567890, Earth ',
            'Iron man, irm@outlook.com, 1234567890, Earth ',
            'Lily Du, lily315@gmail.com, 1234567890, Earth ',
            'Dr. Strange, 135796315@qq.com ,1234567890, Earth ',
            'Thanos, thhhhhno@outlook.com, 1234567890, Titan ',
            'Thor, thr@gmail.com, 1234567890, Asgard ',
        ];
        // let arr = allData;
        return arr.map((e) => {
            let a = e.split(',');

            let obj = {};
            for (let [i, e] of a.entries()) {
                // console.log(i, e);
                let k = 'col' + i;
                obj[k] = e.trim();
            }
            return obj;
        });
    }

    const data = React.useMemo(() => getdata(), []);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Username',
                accessor: 'col0', // accessor is the "key" in the data
            },
            {
                Header: 'Email',
                accessor: 'col1',
            },
            {
                Header: 'Phone',
                accessor: 'col2', // accessor is the "key" in the data
            },
            {
                Header: 'Address',
                accessor: 'col3', // accessor is the "key" in the data
            },
            {
                Header: 'Info',
                accessor: 'col4', // accessor is the "key" in the data
                Cell: (info) => {
                    return (
                        <div>
                            <button
                                style={{
                                    cursor: 'pointer',
                                    padding: '3px 5px',
                                }}
                                // className="bombRightOut"
                                onClick={(e) => {
                                    if (musicStarted.current) return;
                                    let n = info.data[info.row.id].col0;
                                    if (n !== 'Lily Du') {
                                        e.currentTarget.classList.add(
                                            'btn-nothing'
                                        );
                                        e.currentTarget.innerText = 'nothing';
                                        return;
                                    }
                                    e.currentTarget.classList.add(
                                        'bombRightOut'
                                    );
                                    showError();
                                }}
                            >
                                View Info
                            </button>
                        </div>
                    );
                },
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data }, useSortBy);

    //bombRightOut

    return (
        <div className="react-table">
            <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps()
                                    )}
                                    style={{
                                        borderBottom: 'solid 3px red',
                                        color: 'black',
                                    }}
                                >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? '🔽'
                                                : '🔼'
                                            : '↕'}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: '10px',
                                                border: 'solid 1px gray',
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;
