import { useState } from "react";


const emptyForm = {
  description: "",
  type: "",
  amount: "",
  date: "",
};

const incomeTypes = [
  { value: "salary", label: "Salary" },
  { value: "freelance", label: "Freelance" },
  { value: "investments", label: "Investments" },
  { value: "scholarship", label: "Scholarship" },
  { value: "other", label: "Other Income" },
];

function IncomeForm({ onSave }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); 
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.type) {
      newErrors.type = "Please select an income type";
    }

    if (formData.amount === "") {
      newErrors.amount = "Amount is required";
    } else if (Number(formData.amount) <= 0) {
      newErrors.amount = "Amount must be greater than 0";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; 
    onSave({
      id: Date.now(),
      ...formData,
      description: formData.description.trim(),
      amount: Number(formData.amount),
    });

    setFormData(emptyForm);
    setErrors({});
  };

  const inputClass = (field) =>
    `w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-500 focus:ring-red-400"
        : "border-gray-300 focus:ring-blue-500"
    }`;

  return (
    <div className="mt-2">
      <div className="w-full p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl text-center pb-4 font-semibold">
          Add Your Income
        </h1>

        <form onSubmit={handleSubmit} noValidate className="grid grid-cols-2 gap-4">
          
          <div className="col-span-2">
            <label className="block mb-2 font-medium">Description</label>
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
              type="text"
              placeholder="Enter description"
              className={inputClass("description")}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          
          <div>
            <label className="block mb-2 font-medium">Amount</label>
            <input
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              type="number"
              min="0"
              placeholder="Enter amount"
              className={inputClass("amount")}
            />
            {errors.amount && (
              <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
            )}
          </div>

          {/* Type */}
          <div>
            <label className="block mb-2 font-medium">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={inputClass("type")}
            >
              <option value="">Select Type</option>
              {incomeTypes.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            {errors.type && (
              <p className="text-red-500 text-sm mt-1">{errors.type}</p>
            )}
          </div>

         
          <div>
            <label className="block mb-2 font-medium">Date</label>
            <input
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="date"
              className={inputClass("date")}
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date}</p>
            )}
          </div>

         
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Add Income
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IncomeForm;