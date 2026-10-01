import React, { useState } from "react";

function MonthSelect() {
  const [month, setMonth] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex items-center gap-2 mb-3">
      

      <select
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md bg-white outline-none focus:ring-2 focus:ring-blue-500 h-10 w-fit"
      >
        <option value="">Choose Month...</option>

        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MonthSelect;