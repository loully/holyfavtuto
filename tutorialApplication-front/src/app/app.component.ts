import {Component, inject, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TutorialListComponent} from "./components/tutorial-list/tutorial-list.component";
import {TutorialService} from "./services/tutorial.service";
import {Tutorial} from "./models/tutorial.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'tutorialApplication-front';

  constructor(public tutorialService:TutorialService) {
  }

  ngOnInit() {
    this.tutorialService.fetchAllTutorials();
  }
}
