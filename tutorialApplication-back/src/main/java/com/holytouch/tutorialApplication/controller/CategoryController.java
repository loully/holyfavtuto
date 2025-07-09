package com.holytouch.tutorialApplication.controller;

import com.holytouch.tutorialApplication.model.Category;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    public List<Category> getAllCategories (){
        return Arrays.asList(Category.values());
    }
}
