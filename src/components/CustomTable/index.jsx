import React from "react";
import { timeConverter } from "../../helpers";

const CustomTable = ({ data, lengthCols, skipCols, convertTime }) => {
  const headers = Object.keys(data[0]).filter(
    (item) => !skipCols.includes(item)
  );
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          {headers.map((item) => {
            return (
              <th
                key={item}
                className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item, ix) => (
          <tr key={ix}>
            {headers.map((key) => (
              <td
                key={key}
                className="px-6 py-4 text-sm leading-5 text-gray-900"
              >
                {convertTime?.includes(key)
                  ? timeConverter(item[key])
                  : lengthCols?.includes(key)
                  ? item[key].length
                  : item[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
