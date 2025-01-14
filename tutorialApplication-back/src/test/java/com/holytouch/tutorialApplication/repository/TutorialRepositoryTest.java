package com.holytouch.tutorialApplication.repository;

import com.holytouch.tutorialApplication.model.Tutorial;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class TutorialRepositoryTest {

    @Autowired
    private TutorialRepository tutorialRepository;

    @BeforeEach
    void setUp() {
    }

    @Test
    void shouldGetAllTutorials(){
        //Arrange (préparer les données) -> already done in data.sql
        //Act (j'appelle les méthodes)
        List<Tutorial> tutorials = tutorialRepository.findAll();

        //Assert (toutes les assertions)
        assertEquals(tutorials.size(), 5);
    }

    void shouldGetTutorialByTitle(){
        //Act
        String tutorialTitle = "Spring JPA H2 application";
        List<Tutorial> foundTutorial = tutorialRepository.findByTitleContaining(tutorialTitle);

        //Assert
        assertNotNull(foundTutorial);
        assertEquals(foundTutorial.size(),1);
    }
}