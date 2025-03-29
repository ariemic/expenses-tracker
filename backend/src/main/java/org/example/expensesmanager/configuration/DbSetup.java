package org.example.expensesmanager.configuration;

import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.example.expensesmanager.model.User;
import org.example.expensesmanager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Date;

@Component
@AllArgsConstructor
@NoArgsConstructor
public class DbSetup {
    @Autowired
    private UserRepository userRepository;


    @PostConstruct
    public void addUsers() {
        User user = new User();
        user.setUserName("Wojtek");
        user.setIncome(1000L);
        user.setStartDay(Date.valueOf("2002-02-02"));
        user.setEndDate(Date.valueOf("2003-03-03"));

        userRepository.save(user);
    }



}
