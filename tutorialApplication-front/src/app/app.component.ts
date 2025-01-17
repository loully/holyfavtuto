import {Component, inject, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TutorialListComponent} from "./components/tutorial-list/tutorial-list.component";
import {TutorialService} from "./services/tutorial.service";
import {Tutorial} from "./models/tutorial.model";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatListModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'tutorialApplication-front';
  logoPath = "../assets/img/logo-100x123px.png";

  constructor(public tutorialService:TutorialService) {
  }

  ngOnInit() {
    this.tutorialService.fetchAllTutorials();
  }
}
