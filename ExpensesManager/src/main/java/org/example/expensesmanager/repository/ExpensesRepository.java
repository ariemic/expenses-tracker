package org.example.expensesmanager.repository;

import org.example.expensesmanager.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpensesRepository extends JpaRepository<Expense, Long> {
}
