package com.holytouch.tutorialApplication.service;

import com.holytouch.tutorialApplication.dto.TutorialDto;
import com.holytouch.tutorialApplication.exception.TutorialNotFoundException;
import com.holytouch.tutorialApplication.model.Tutorial;
import com.holytouch.tutorialApplication.repository.TutorialRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TutorialService {

    private final TutorialRepository tutorialRepository;

    public TutorialService(TutorialRepository tutorialRepository) {
        this.tutorialRepository = tutorialRepository;
    }

    public Tutorial createTutorial(TutorialDto tutorialDto) {
        if(tutorialRepository.existsByTitle(tutorialDto.getTitle())) {
            throw new IllegalArgumentException("Already existing Tutorial with the same name");
        }
        Tutorial newTutorial = new Tutorial(tutorialDto.getTitle(), tutorialDto.getDescription(), tutorialDto.getUrlImg());
        return tutorialRepository.save(newTutorial);
    }

    public Optional<Tutorial> getTutorialById(int id) {
        return tutorialRepository.findById(id);
    }

    public List<Tutorial> getAllTutorials() {
        return tutorialRepository.findAll();
    }

    public Tutorial updateTutorial(int id, TutorialDto tutorialDto) {
        Tutorial existingTutorial = tutorialRepository.findById(id).orElseThrow(TutorialNotFoundException::new);
        if(tutorialRepository.findById(id).isPresent()){
            existingTutorial.setTitle(tutorialDto.getTitle());
            existingTutorial.setDescription(tutorialDto.getDescription());
            existingTutorial.setUrlImg(tutorialDto.getUrlImg());
        }
        return tutorialRepository.save(existingTutorial);
    }

    public void deleteTutorial(int id) {
        tutorialRepository.findById(id)
                .ifPresentOrElse(tutorial ->
                    tutorialRepository.deleteById(id),
                        ()-> {throw new TutorialNotFoundException();}
                );

    }
}
