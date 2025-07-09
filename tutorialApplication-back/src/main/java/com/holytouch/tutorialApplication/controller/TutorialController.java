package com.holytouch.tutorialApplication.controller;

import com.holytouch.tutorialApplication.dto.TutorialDto;
import com.holytouch.tutorialApplication.exception.TutorialNotFoundException;
import com.holytouch.tutorialApplication.model.Tutorial;
import com.holytouch.tutorialApplication.repository.TutorialRepository;
import com.holytouch.tutorialApplication.service.TutorialService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class TutorialController {

    @Autowired
    TutorialService tutorialService;

    @PostMapping ("/tutorials")
    public Tutorial createTutorial(@Valid @RequestBody TutorialDto tutorialDto){
        System.out.println("Received Tutorial: {}"+ tutorialDto);
        return tutorialService.createTutorial(tutorialDto);
    }

    @GetMapping("/tutorials/{id}")
    public Tutorial getTutorialById(@PathVariable("id") int id){
        Optional<Tutorial> selectedTutorial = tutorialService.getTutorialById(id);
        return selectedTutorial.orElseThrow(() -> new TutorialNotFoundException());
    }


    @GetMapping("/tutorials")
    public List<Tutorial> getAllTutorials(){
        return tutorialService.getAllTutorials();
    }


    @PutMapping("/tutorials/{id}")
    public Tutorial updateTutorial(@PathVariable("id") int id, @Valid @RequestBody TutorialDto tutorialDto){
        return tutorialService.updateTutorial(id, tutorialDto);
    }



    @DeleteMapping("/tutorials/{id}")
    public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") int id) {
        System.out.println("Receive request to delete tutorial" + id);
        tutorialService.deleteTutorial(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
