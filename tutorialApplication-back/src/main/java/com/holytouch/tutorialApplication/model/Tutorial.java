package com.holytouch.tutorialApplication.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name="tutorials")
public class Tutorial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NonNull
    @Column(name = "title")
    private String title;

    @NonNull
    @Column(name = "description")
    private String description;

    @NonNull
    @Column(name = "is_published")
    private boolean isPublished;

    public Tutorial(String title, String description, boolean isPublished) {
        this.title = title;
        this.description = description;
        this.isPublished = isPublished;
    }
}
