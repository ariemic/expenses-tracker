package org.example.expensesmanager;

import jakarta.annotation.PostConstruct;
import org.example.expensesmanager.model.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Date;

@SpringBootApplication
public class ExpensesManagerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ExpensesManagerApplication.class, args);
    }


}
