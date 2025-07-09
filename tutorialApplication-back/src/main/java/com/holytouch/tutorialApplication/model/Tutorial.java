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
    @Column(name= "url_img")
    private String urlImg;

    @NonNull
    @Enumerated(EnumType.STRING)
    @Column(name= "category")
    private Category category;

    public Tutorial(@NonNull String title, @NonNull String description, @NonNull String urlImg, @NonNull Category category) {
        this.title = title;
        this.description = description;
        this.urlImg = urlImg;
        this.category = category;
    }
}
