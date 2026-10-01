function Summary({ expenses = [], incomes = [] }) {
  const totalExpense = expenses.reduce(
    (sum, expense) => sum + (Number(expense.amount) || 0),
    0
  );

   const totalIncome = incomes.reduce(
    (sum, income) => sum + (Number(income.amount) || 0),
    0
  );

 

  const balance = totalIncome - totalExpense;

  const format = (n) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <p className="text-gray-500 text-sm font-medium">Total Income</p>
        <h2 className="text-2xl font-bold text-green-600 mt-2">
          {format(totalIncome)}
        </h2>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <p className="text-gray-500 text-sm font-medium">Total Expense</p>
        <h2 className="text-2xl font-bold text-red-600 mt-2">
          {format(totalExpense)}
        </h2>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <p className="text-gray-500 text-sm font-medium">Balance</p>
        <h2
          className={`text-2xl font-bold mt-2 ${
            balance >= 0 ? "text-blue-600" : "text-red-600"
          }`}
        >
          {format(balance)}
        </h2>
      </div>
    </div>
  );
}

export default Summary;