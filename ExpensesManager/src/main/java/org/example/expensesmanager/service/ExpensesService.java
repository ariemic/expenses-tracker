package org.example.expensesmanager.service;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.example.expensesmanager.model.Category;
import org.example.expensesmanager.model.Expense;
import org.example.expensesmanager.model.User;
import org.example.expensesmanager.repository.ExpensesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ExpensesService{
    @Autowired
    private ExpensesRepository expensesRepository;

    public void addExpenseToUser(long userId, long categoryId, int amount) {
        User user = new User();
        user.setUserId(userId);
        Category category = new Category();
        category.setUser(user);
        category.setCategoryId(categoryId);

        Expense expense = new Expense();
        expense.setAmount(amount);
        expense.setUser(user);
        expense.setCategory(category);
        expensesRepository.save(expense);
    }

}
