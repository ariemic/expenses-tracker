package org.example.expensesmanager.service;

import lombok.AllArgsConstructor;
import org.example.expensesmanager.model.Expense;
import org.example.expensesmanager.model.User;
import org.example.expensesmanager.repository.ExpensesRepository;
import org.example.expensesmanager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ExpensesRepository expensesRepository;

    public User findUserById(long userId){
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User with id" + userId + " not found"));
    }

    public Expense createNewExpense(long userId) {

//        return expensesRepository.save();
        return null;
    }
}
