import {Component, inject, OnInit, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tutorial-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tutorial-details.component.html',
  styleUrl: './tutorial-details.component.scss'
})

export class TutorialDetailsComponent implements OnInit {

  private route = inject(ActivatedRoute);

  tutorialId = signal<number | undefined>(undefined);

  ngOnInit():void {
    const params = this.route.snapshot.params;
    this.tutorialId.set(params['id'] ? parseInt(params['id']) : undefined);

  }



}
