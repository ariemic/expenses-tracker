package org.example.expensesmanager.controller;

import lombok.AllArgsConstructor;
import org.example.expensesmanager.model.Category;
import org.example.expensesmanager.model.Expense;
import org.example.expensesmanager.model.User;
import org.example.expensesmanager.service.CategoryService;
import org.example.expensesmanager.service.ExpensesService;
import org.example.expensesmanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private ExpensesService expensesService;

//    public record setUserConfiguration(){
//    }
    @PostMapping("/{user_id}/configuration")
    ResponseEntity<Map<String, Object>> handleUserConfiguration(@PathVariable("user_id") int userId) {
        // check if user exists

        Map<String, Object> response = new HashMap<>();

        return ResponseEntity.ok(response);
    }

    public record getUserExpensesRequest(Date startDate, Date endDate) {}
    @GetMapping("/{user_id}/expenses")
    ResponseEntity<Map<String, Object>> getUserExpenses(@PathVariable("user_id") int userId, @RequestBody getUserExpensesRequest request) {

        Map<String, Object> response = new HashMap<>();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{user_id}")
    public User getUser(@PathVariable("user_id") long userId){
        User userById = userService.findUserById(userId);
        return userById;
    }

    record addUserExpenseRequest(long categoryId, int amount) {}
    @PostMapping("/{user_id}")
    public void addUserExpense(@PathVariable("user_id") long userId, @RequestBody addUserExpenseRequest request){
       expensesService.addExpenseToUser(userId, request.categoryId, request.amount);
    }

    record getUserCategoriesResponse() {}
    @GetMapping("/{user_id}/categories")
    public List<Category> getUserCategories(@PathVariable("user_id") long userId) {
        return categoryService.getUserCategories(userId);
    }
}

