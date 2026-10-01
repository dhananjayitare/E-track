import FloatingInput from "./FloatingInput";
import { useState } from "react";

function IncomeReport({ incomes = [], onDelete }) {
    const [search, setSearch] = useState("");
    const filteredIncomes = incomes.filter((income) => {
    const searchText = search.toLowerCase();

     return (
      income.type?.toLowerCase().includes(searchText) ||
      income.description?.toLowerCase().includes(searchText) ||
      income.amount?.toString().includes(searchText)
    );
  });

  return (
    <div className="flex flex-col h-[32rem] max-h-[80vh] w-full max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="shrink-0 p-4 sm:p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          Recent Transactions
        </h2>
        <p className="text-sm text-gray-500 mt-1">Your latest Income </p>
      </div>

      <div className="shrink-0 px-4 sm:px-6 py-4 border-b border-gray-100">
        <FloatingInput 
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
        {filteredIncomes.length === 0 && ( 
          <p className="text-gray-500 text-center py-6"> 
          {search ? "No matching income found." : "No income added yet."} </p>
        )}

        {filteredIncomes.map((income) => (
          <div
            key={income.id}
            className="grid grid-cols-[1fr_auto] sm:grid-cols-[2fr_1fr_auto] items-center gap-x-4 gap-y-1 px-4 sm:px-6 py-3"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">
                {income.type}
              </p>
              <p className="text-sm text-gray-600 truncate">
                {income.description}
              </p>
            </div>

            <div className="text-right sm:order-3">
              <p className="text-sm font-semibold text-green-600">
                + ₹{income.amount}
              </p>
              <button
                className="text-xs text-red-500 hover:text-red-700 hover:underline"
                onClick={() => onDelete(income.id)}
              >
                Delete
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 sm:order-2 sm:text-center">
              {income.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IncomeReport;
