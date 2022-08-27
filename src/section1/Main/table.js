import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useEffect } from 'react';
import { useTable, useSortBy } from 'react-table';

function Example() {
    const weatherData = [
        'Calgary 4.4 16.5 -7.1 23.6',
        'Edmonton 2.6 16.2 -12.1 28.3',
        'Ottawa 6.4 21.0 -10.3 31.3',
        'Regina 3.1 18.9 -14.7 33.6',
        'Toronto 8.2 21.5 -5.5 27.0',
        'Vancouver 10.4 18.0 3.6 14.4',
        'Winnepeg 3.0 19.7 -16.4 36.1',
    ];
    const weatherCol = [
        'Annual Temperature',
        'Average',
        'High',
        'Low',
        'Swing',
    ];
    function getdata() {
        let arr = weatherData;
        return arr.map((e) => {
            let a = e.split(' ');
            let obj = {};
            for (let [i, e] of a.entries()) {
                let k = 'col' + i;
                obj[k] = e;
            }
            return obj;
        });
    }
    function getColName() {
        let arr = weatherCol;
        return arr.map((ele, idx) => {
            let obj = {};
            obj.Header = ele;
            obj.accessor = 'col' + idx;
            return obj;
        });
    }
    const data = React.useMemo(() => getdata(), []);

    const columns = React.useMemo(
        () => getColName(),

        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data }, useSortBy);
    // let kk = ['2', 3, <div></div>];
    // console.log(typeof kk[0] == 'string', typeof kk[2] == 'object');
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

export default Example;
