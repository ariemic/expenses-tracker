import { useState } from "react";

function BudgetForm({ categories, onUpdate }) {
  const [errors, setErrors] = useState({});
  const [newCategory, setNewCategory] = useState("");
  const [newCategoryBudget, setNewCategoryBudget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Validation
    const newErrors = {};
    categories.forEach(c => {
      const value = data[c.category];
      if (!value || isNaN(value)) {
        newErrors[c.category] = "Wprowadź poprawną kwotę";
      } else if (parseFloat(value) <= 0) {
        newErrors[c.category] = "Kwota musi być większa od 0";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onUpdate(data);
    console.log(data)
    alert("Budżet został zaktualizowany!");
  };



  const handleAddCategory = (e) => {
    e.preventDefault();

    if (!newCategory.trim()) {
      alert("Wprowadź nazwę kategorii");
      return;
    }

    if (!newCategoryBudget || isNaN(newCategoryBudget)) {
      alert("Wprowadź poprawną kwotę");
      return;
    }

    if (parseFloat(newCategoryBudget) <= 0) {
      alert("Kwota musi być większa od 0");
      return;
    }


    onUpdate({
      ...Object.fromEntries(categories.map(c => [c.category, c.budget])),
      [newCategory.trim()]: parseFloat(newCategoryBudget)
    });

    setNewCategory("");
    setNewCategoryBudget("");
    alert(`Dodano nową kategorię: ${newCategory}`);
  };



  return (
    <div className='bg-white p-6 rounded-xl shadow-md'>
      <h2 className='text-xl font-semibold text-center text-gray-700 mb-4'>
        Zdefiniuj swój <span className='underline decoration-blue-500'>budżet</span>
      </h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        {categories.map((c) => (
          <div key={c.category} className='space-y-1'>
            <div className='flex items-center'>
              <label className='font-medium w-30 text-gray-700'>{c.category}:</label>
              <input
                type="number"
                name={c.category}
                min="1"
                step="1"
                defaultValue={c.budget}
                className={`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors[c.category] ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                }`}
                required
              />
            </div>
            {errors[c.category] && (
              <p className='text-red-500 text-sm pl-24'>{errors[c.category]}</p>
            )}
          </div>
        ))}

        <div className='space-y-1'>
          <div className='flex items-center'>
            <label className='font-medium w-30 text-gray-700'>Nowa kategoria:</label>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className='w-46 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 mr-2'
              placeholder="Nazwa kategorii"
            />
            <input
              type="number"
              value={newCategoryBudget}
              onChange={(e) => setNewCategoryBudget(e.target.value)}
              min="1"
              step="1"
              className='w-46 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200'
              placeholder="Kwota"
            />
          </div>
        </div>

        <div className='flex space-x-4'>
          <button
            type='submit'
            className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors'
          >
            Aktualizuj budżet
          </button>
          <button
            onClick={handleAddCategory}
            className='w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors'
          >
            Dodaj kategorię
          </button>
        </div>
      </form>
    </div>
  );
}

export default BudgetForm;