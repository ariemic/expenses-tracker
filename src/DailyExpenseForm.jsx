function DailyExpenseForm({ categories, expense, onChange, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className='bg-white p-6 rounded-xl shadow-md'>
      <h2 className='text-xl font-semibold text-center text-gray-700 mb-4'>
        Dzisiejsze wydatki
      </h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='space-y-1'>
          <label className='font-medium text-gray-700'>Kwota:</label>
          <input
            type="number"
            min="1"
            step="1"
            value={expense.amount}
            onChange={(e) => onChange({...expense, amount: e.target.value})}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200'
            required
          />
        </div>

        <div className='space-y-1'>
          <label className='font-medium text-gray-700'>Kategoria:</label>
          <select
            value={expense.category}
            onChange={(e) => onChange({...expense, category: e.target.value})}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200'
            required
          >
            <option value="">Wybierz kategorię</option>
            {categories.map(c => (
              <option key={c.category} value={c.category}>{c.category}</option>
            ))}
          </select>
        </div>

        <button
          type='submit'
          className='w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors mt-4'
        >
          Dodaj wydatek
        </button>
      </form>
    </div>
  );
}

export default DailyExpenseForm;