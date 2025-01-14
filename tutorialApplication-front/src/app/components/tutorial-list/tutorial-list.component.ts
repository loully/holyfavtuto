import {Component, inject} from '@angular/core';
import {TutorialService} from "../../services/tutorial.service";
import {catchError, of} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";

@Component({
    selector: 'app-tutorial-list',
    standalone: true,
    imports: [
        AsyncPipe,
        MatListModule,
        MatInputModule
    ],
    templateUrl: './tutorial-list.component.html',
    styleUrl: './tutorial-list.component.scss'
})
export class TutorialListComponent {

    public tutorialService = inject(TutorialService);

    errorMessage: string | null = null;
    tutorials = this.loadTutorials();

    private loadTutorials(){
        return this.tutorialService.fetchAllTutorials()
        .pipe(
            catchError(() => {
                this.errorMessage = "Failed to load tutorials";
                return of([]);
            })
        );
    }



    delete(id:number){
        this.tutorialService.deleteTutorial(id).subscribe({
            next: () => {
                console.log(`Tutorial with ID ${id} deleted successfully`);
                // Optionnel : actualise la liste après suppression
                this.tutorials = this.loadTutorials();
            },
            error: err => console.error(`Failed to delete tutorial with ID ${id}:`, err),
        })
    }

}
