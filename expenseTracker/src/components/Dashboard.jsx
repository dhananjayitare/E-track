import React, { useState, useEffect } from "react";

import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";

import IncomeReport from "./IncomeReport";
import ExpenseReport from "./ExpenseReport";
import Summary from "./Summary";

function Dashboard() {
  const [openIncomeForm, setOpenIncomeForm] = useState(false);
  const [openExpenseForm, setOpenExpenseForm] = useState(false);

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expenses) => expenses.id !== id));
  };

  const handleDelete = (id) => {
    setIncomes((prev) => prev.filter((incomes) => incomes.id !== id));
  };

  const loadData = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
      return [];
    }
  };

  const [incomes, setIncomes] = useState(() => loadData("incomes"));
  const [expenses, setExpenses] = useState(() => loadData("expenses"));

  const handleAddExpense = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense]);
    setOpenExpenseForm(false);
  };

  const handleAddIncome = (income) => {
    setIncomes((prev) => [...prev, income]);
    setOpenIncomeForm(false);
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [incomes]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 grid grid-cols-2 md:grid-cols-2 gap-6">
          <div><h1 className="text-3xl font-bold text-gray-800">Expense Tracker</h1>
          <p className="text-gray-500 mt-0">Track your income and expenses</p>
          </div>
          {/* Status Buttons */}
          <div className="flex mt-4 ml-auto">
            <button
              onClick={() => setOpenIncomeForm(true)}
              type="button"
              className="px-4 py-2 bg-yellow-400! text-black! rounded-l-md! hover:bg-red-200!"
            >
              Income
            </button>

            {openIncomeForm && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="relative w-full max-w-2xl">
                  <button
                    onClick={() => setOpenIncomeForm(false)}
                    className="absolute right-3 top-2 text-xl size-8"
                  >
                    ×
                  </button>

                  <IncomeForm
                    onSave={handleAddIncome}
                    onClose={() => setOpenIncomeForm(false)}
                  />
                </div>
              </div>
            )}

            <button
              onClick={() => setOpenExpenseForm(true)}
              type="button"
              className="px-4 py-2 bg-green-600! text-white rounded-r-md! hover:bg-blue-400!"
            >
              Expense
            </button>

            {openExpenseForm && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="relative w-full max-w-2xl">
                  <button
                    onClick={() => setOpenExpenseForm(false)}
                    className="absolute right-3 top-2 text-xl size-8"
                  >
                    ×
                  </button>
                  <ExpenseForm
                    onSave={handleAddExpense}
                    onClose={() => setOpenExpenseForm(false)}
                  />
                </div>
              </div>
            )}
          </div>

          
        </div>

        <Summary expenses={expenses} incomes={incomes} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <IncomeReport incomes={incomes} onDelete={handleDelete} />
          <ExpenseReport expenses={expenses} onDelete={handleDeleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
