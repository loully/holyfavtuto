package com.holytouch.tutorialApplication.service;

import com.holytouch.tutorialApplication.model.Category;
import com.holytouch.tutorialApplication.model.Tutorial;
import com.holytouch.tutorialApplication.repository.TutorialRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

class TutorialServiceTest {

    @Mock
    private TutorialRepository tutorialRepository;

    @InjectMocks
    private TutorialService tutorialService;

    private Tutorial tutorial;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        tutorial = new Tutorial("Test Title", "Test Description", "", Category.COOKING);
    }

    @Test
    void shouldGetTutorialById() {
        when(tutorialRepository.findById(1)).thenReturn(Optional.of(tutorial));

        Tutorial resultTutorial = tutorialRepository.findById(1).get();

        assertThat(resultTutorial).isNotNull();
        verify(tutorialRepository, times(1)).findById(1);
    }

    @Test
    void shouldDeleteTutorial() {
        when(tutorialRepository.findById(1)).thenReturn(Optional.of(tutorial));
        doNothing().when(tutorialRepository).deleteById(1);
        tutorialService.deleteTutorial(1);

        verify(tutorialRepository,times(1)).deleteById(1);

    }
}