import FloatingInput from "./FloatingInput";

import { useState } from "react";
function ExpenseReport({ expenses = [], onDelete }) {
 
 
       const [search, setSearch] = useState("");
       const filteredExpense = expenses.filter((expense) => {
       const searchText = search.toLowerCase();
   
        return (
         expense.type?.toLowerCase().includes(searchText) ||
         expense.description?.toLowerCase().includes(searchText) ||
         expense.amount?.toString().includes(searchText)
       );
     });
  
  return (
    <div className="flex flex-col h-[32rem] max-h-[80vh] w-full max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
  
  <div className="shrink-0 p-4 sm:p-6 border-b border-gray-200">
    <h2 className="text-xl font-semibold text-gray-800">Monthly Expense</h2>
    <div className="text-sm text-gray-500 mt-2">
      <FloatingInput 
      search={search}
          setSearch={setSearch}/>
    </div>
  </div>

  
  <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
    {filteredExpense.length === 0 && ( 
          <p className="text-gray-500 text-center py-6"> 
          {search ? "No matching expense found." : "No expense added yet."} </p>
        )}

    {filteredExpense.map((expense) => (
      <div
        key={expense.id}
        className="grid grid-cols-[1fr_auto] sm:grid-cols-[2fr_1fr_auto] items-center gap-x-4 gap-y-1 px-4 sm:px-6 py-3"
      >
        
        <div className="min-w-0">
          <p className="text-sm font-medium text-gray-800 truncate">
            {expense.type}
          </p>
          <p className="text-sm text-gray-600 truncate">
            {expense.description}
          </p>
        </div>

        
        <div className="text-right sm:order-3">
          <p className="text-sm font-medium text-red-600">
            - ₹{expense.amount}
          </p>
          <button
            className="text-xs text-red-500 hover:text-red-700 hover:underline"
            onClick={() => onDelete(expense.id)}
          >
            Delete
          </button>
        </div>

      
        <p className="text-xs sm:text-sm text-gray-500 sm:order-2 sm:text-center">
          {expense.date}
        </p>
      </div>
    ))}
  </div>

  
  {/* <div className="shrink-0 flex justify-between items-center px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50">
    <span className="font-semibold text-gray-800">Total Expense</span>
    <span className="font-bold text-red-600">
      ₹ {totalAmount.toLocaleString("en-IN")}
    </span>
  </div> */}
</div>
  );
}

export default ExpenseReport
