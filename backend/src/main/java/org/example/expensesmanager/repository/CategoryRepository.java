package org.example.expensesmanager.repository;

import org.example.expensesmanager.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query("select c from Category c where c.user.userId = :userId")
    List<Category> getCategoriesByUser(Long userId);
}
