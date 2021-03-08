import React from 'react';

export const Table = ({ data, columns }) => {
  if (!data.length) {
    return null;
  }

  return (
    <table className="table-auto text-sm text-green-900 border-solid border border-gray-300 min-w-max m-5">
      <thead className="hidden sm:table-header-group">
        <tr className="border-solid border-t border-gray-300">
          {columns.map((column) => (
            <th className="p-4" key={column}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="font-light">
        {data.map((row, index) => (
          <tr
            className="border-solid border-t border-gray-300 odd:bg-green-900 odd:bg-opacity-10 sm:odd:bg-gray-50"
            key={index}
          >
            {row.map((cell, index) => (
              <td className="flex sm:table-cell justify-between sm:justify-center p-4" key={index}>
                <div className="sm:hidden w-1/2 flex font-semibold">{columns[index]}</div>
                <div className="w-1/2 sm:w-full">{cell}</div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};