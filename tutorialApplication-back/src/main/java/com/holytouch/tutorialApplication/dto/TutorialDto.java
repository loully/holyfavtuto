package com.holytouch.tutorialApplication.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TutorialDto {

    private int id;

    @NotNull
    private String title;

    @NotNull
    private String description;

    @NonNull
    private String urlImg;
}
