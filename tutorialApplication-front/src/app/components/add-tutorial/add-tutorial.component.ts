import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {TutorialService} from "../../services/tutorial.service";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {Router} from "@angular/router";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-add-tutorial',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  templateUrl: './add-tutorial.component.html',
  styleUrl: './add-tutorial.component.scss'
})
export class AddTutorialComponent {
  private fb = inject(FormBuilder);
  private service = inject(TutorialService);
  private router = inject(Router);
  protected categories = ['Food', 'Tech', 'Deco'];

  readonly form = this.fb.group({
    title: ["", [Validators.required]],
    urlImg: [""],
    description: [""],
    category:[""],
    img: [""]
  });

  save():void{
    if(this.form.valid){
      const { title, urlImg, description  } = this.form.value;
      this.service.addTutorial(
          {
            title: title!,
            urlImg: urlImg ?? "",
            description: description!
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
