import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {TutorialService} from "../../services/tutorial.service";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-tutorial',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './add-tutorial.component.html',
  styleUrl: './add-tutorial.component.scss'
})
export class AddTutorialComponent {
  private fb = inject(FormBuilder);
  private service = inject(TutorialService);
  private router = inject(Router);

  readonly form = this.fb.group({
    title: ["", [Validators.required]],
    description: [""],
    published: [false]
  });

  save():void{
    if(this.form.valid){
      const { title, description, published } = this.form.value;
      this.service.addTutorial(
          {
            title: title!,
            description: description!,
            published: published ?? false
          }
      ).subscribe({
        next:() => {
          console.log("Tutorial saved");
          this.router.navigate(['/']);
        },
        error:(err) => console.error("Error when saving tutorial",err)
      });
    } else {
      console.error("Form is invalid", this.form.errors);
    }
  }
}
