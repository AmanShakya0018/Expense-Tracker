import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../contexts/financial-record-context";

export const FinancialRecordForm = () => {
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const { addRecord } = useFinancialRecords();
  const { user } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newRecord = {
      userId: user?.id ?? "",
      date: new Date(),
      description: description,
      amount: parseFloat(amount),
      category: category,
      paymentMethod: paymentMethod,
    };

    addRecord(newRecord);
    setDescription("");
    setAmount("");
    setCategory("");
    setPaymentMethod("");
  };

  return (
    <div className="block mb-2 text-m font-medium text-white dark:text-white">
      <form onSubmit={handleSubmit}>
        <div >
          <label className="font-semibold block mb-1.5">Description:</label>
          <input
            type="text"
            required
            className="w-full p-2.5 mt-1.5 mb-3.5 bg-transparent border border-gray-300 rounded-md text-sm text-gray-300"
            placeholder="Describe your Expense"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div >
          <label className="font-semibold block mb-1.5">Amount:</label>
          <input
            type="number"
            required
            className="w-full p-2.5 mt-1.5 mb-3.5 bg-transparent border border-gray-300 rounded-md text-sm text-gray-300"
            placeholder="Enter amount of your expense"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div >
          <label className="font-semibold block mb-1.5">Category:</label>
          <select
            required
            className="w-full p-2.5 mt-1.5 mb-3.5 bg-transparent border border-gray-300 rounded-md text-sm text-gray-300"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option className="text-black" value="">Select a Category</option>
            <option className="text-black" value="Food">Food</option>
            <option className="text-black" value="Rent">Rent</option>
            <option className="text-black" value="Salary">Salary</option>
            <option className="text-black" value="Utilities">Utilities</option>
            <option className="text-black" value="Entertainment">Entertainment</option>
            <option className="text-black" value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="font-semibold block mb-1.5">Payment Method:</label>
          <select
            required
            className="w-full p-2.5 mt-1.5 mb-3.5 bg-transparent border border-gray-300 rounded-md text-sm text-gray-300"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option className="text-black" value="">Select a Payment Method</option>
            <option className="text-black" value="Credit Card">Credit Card</option>
            <option className="text-black" value="Cash">Cash</option>
            <option className="text-black" value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="text-gray-00 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add record</button>
      </form>
    </div>
  );
};
