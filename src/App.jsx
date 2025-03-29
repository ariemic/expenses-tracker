import { useState, useEffect } from 'react';
import BudgetForm from "./BudgetForm.jsx";
import DailyExpenseForm from "./DailyExpenseForm.jsx";
import ExpensesCircle from "./ExpenseCircle.jsx";

const initialCategories = [
  { category: "Jedzenie", budget: 500 },
  { category: "Sport", budget: 500 },
  { category: "Oszczędności", budget: 100 },
  { category: "Rozrywka", budget: 500 }
];


function App() {
  const [userName] = useState("Wojtek");
  const [categories, setCategories] = useState(initialCategories);
  const [expenses, setExpenses] = useState([]);
  const [todayExpense, setTodayExpense] = useState({ amount: "", category: "" });

  // Load saved data from localStorage
  useEffect(() => {
    const savedCategories = localStorage.getItem('budgetCategories');
    const savedExpenses = localStorage.getItem('dailyExpenses');

    if (savedCategories) setCategories(JSON.parse(savedCategories));
    if (savedExpenses) setExpenses(JSON.parse(savedExpenses));
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('budgetCategories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('dailyExpenses', JSON.stringify(expenses));
  }, [expenses]);

  const updateBudget = (newBudgets) => {

    setCategories(prev => {

      // Update existing categories
      const updated = prev.map(cat => ({
        ...cat,
        budget: parseFloat(newBudgets[cat.category] || cat.budget)
      }));

      // Add new categories that don't exist yet
      Object.keys(newBudgets).forEach(key => {
        if (!prev.some(c => c.category === key)) {
          updated.push({ category: key, budget: newBudgets[key] });
        }
      });

      return updated;
    });
  };

  const addDailyExpense = () => {
    if (!todayExpense.amount || !todayExpense.category) return;

    const newExpense = {
      amount: parseFloat(todayExpense.amount),
      category: todayExpense.category,
      date: new Date().toISOString().split('T')[0]
    };

    setExpenses(prev => [...prev, newExpense]);
    setTodayExpense({ amount: "", category: "" });
  };

  // Calculate actual expenses per category
  const actualExpenses = categories.map(cat => {
    const categoryExpenses = expenses.filter(e => e.category === cat.category);
    const total = categoryExpenses.reduce((sum, e) => sum + e.amount, 0);
    return { ...cat, budget: total };
  });

  return (
    <div className='flex flex-col items-center min-h-screen py-8 bg-gray-50'>
      <div className='w-full max-w-6xl px-4'>
        <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>
          Cześć <span className='underline decoration-blue-500'>{userName}</span>
        </h1>

        <div className='grid md:grid-cols-2 gap-8 mb-8'>
          <BudgetForm categories={categories} onUpdate={updateBudget} />
          <DailyExpenseForm
            categories={categories}
            expense={todayExpense}
            onChange={setTodayExpense}
            onSubmit={addDailyExpense}
          />
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h2 className='text-xl font-semibold text-center mb-4'>Planowany budżet</h2>
            <ExpensesCircle data={categories} />
          </div>
          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h2 className='text-xl font-semibold text-center mb-4'>Rzeczywiste wydatki</h2>
            <ExpensesCircle data={actualExpenses} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;