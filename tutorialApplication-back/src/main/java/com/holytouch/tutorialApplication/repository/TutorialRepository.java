package com.holytouch.tutorialApplication.repository;

import com.holytouch.tutorialApplication.model.Tutorial;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TutorialRepository extends JpaRepository<Tutorial, Integer> {
    List<Tutorial> findByTitleContaining(String title);
    boolean existsByTitle(String title);
}
