import {Injectable, signal} from '@angular/core';
import {Tutorial} from "../models/tutorial.model";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  tutorials = signal<Tutorial[]>([]);
  currentIndex = signal<number>(1);

  private url = "http://localhost:8080/api/tutorials";

  constructor(private http:HttpClient) { }

  //Get all tutorials in local
/*  getAllTutorials(): Tutorial[] {
    return this.tutorials().map(tutorial => tutorial.copy());
  }*/

  //Fetch all tutorials from api
  fetchAllTutorials(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(this.url).pipe(
      tap((data) => {
        this.tutorials.set(data);
      }),
      catchError((e) => {
        console.error("Error when loading date", e);
        return of([]);
      })
    );
  }

  //Get tutorial in local
  getTutorial(id:number) : Observable<Tutorial> | undefined {
    return this.http.get<Tutorial>(`${this.url}/${id}`);
  }

  //Add tutorial in local
/*  addTutorial(tutorial: Tutorial): Tutorial {
    const newTutorial = tutorial.copy();
    newTutorial.id = this.currentIndex;
    this.tutorials.update(tutorial => [...tutorial, newTutorial]);
    this.currentIndex.update(this.currentIndex = this.currentIndex +1);
    return newTutorial;
  }*/

  //Add tutorial to api
  addTutorial(tutorial:Tutorial): Observable<Tutorial> {
    console.log("Tutorial sent: ",tutorial);
    return this.http.post<Tutorial>(this.url, tutorial)
        .pipe(
        catchError((error) => {
          console.error("Error during POST request:", error);
          return throwError(error);
        })
    );;
  }

  //Update tutorial in local
/*  updateTutorial(tutorial:Tutorial): Tutorial {
    this.tutorials.update(tutorials =>
        tutorials.map(tuto => tuto.id === tutorial.id ? tutorial.copy() : tuto
        )
    );
    return tutorial;
  }*/

  //Update tutorial to api
  updateTutorial(tutorial:Tutorial) {
    return this.http.put<Tutorial>(`${this.url}/${tutorial.id}`, tutorial);
  }

  //Delete tutorial locally
/*  deleteTutorial(id:number) {
    this.tutorials.update((tutorials:Tutorial[]) =>
      tutorials.filter(tuto => tuto.id !== id)
    );
  }*/

  //Delete tutorial through api
  deleteTutorial(id: number){
    console.log("request to delete tutorial id:"+ id + "using this url : "+`${this.url}/${id}`);
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
        catchError((err) => {
          console.log("Error while deleting tutorial", err);
              return throwError(() => err);
        })
    );
  }
}
