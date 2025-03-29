package org.example.expensesmanager.service;

import lombok.AllArgsConstructor;
import org.example.expensesmanager.dto.CategoryDTO;
import org.example.expensesmanager.model.Category;
import org.example.expensesmanager.model.User;
import org.example.expensesmanager.repository.CategoryRepository;
import org.example.expensesmanager.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CategoryService {
    private CategoryRepository categoryRepository;
    private UserRepository userRepository;

//    public Category saveCategory(CategoryDTO categoryDTO){
//        User user = userRepository.findById(categoryDTO.userId()).orElseThrow();
//        float percentage = ((float) user.getIncome() /categoryDTO.maxAmount());
//
//        return Category.builder()
//                .user(user)
//                .categoryName(categoryDTO.name())
//                .maxAmount(categoryDTO.maxAmount())
//                .percentage(percentage)
//                .build();
//    }

    public List<Category> getUserCategories(long userId) {
        return categoryRepository.getCategoriesByUser(userId);
    }
}
