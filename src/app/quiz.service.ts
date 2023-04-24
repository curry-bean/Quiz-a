import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

@Pipe({
  name: 'objectToArray',
})
export class QuizService {

  constructor(private http:HttpClient) { }
  BaseHtmlUrl="https://quizapi.io/api/v1/questions?apiKey=UvJWWhRup0tmxi53AsB11ruaJogO2Zjjt968vlHr&category=code&difficulty=Medium&limit=15&tags=HTML"

  BaseWordPressUrl="https://quizapi.io/api/v1/questions?apiKey=UvJWWhRup0tmxi53AsB11ruaJogO2Zjjt968vlHr&difficulty=Easy&limit=15&tags=WordPress"

  BaseJsBUrl="https://quizapi.io/api/v1/questions?apiKey=UvJWWhRup0tmxi53AsB11ruaJogO2Zjjt968vlHr&category=code&difficulty=Easy&limit=15&tags=JavaScript"

  BaseJsIUrl="https://quizapi.io/api/v1/questions?apiKey=UvJWWhRup0tmxi53AsB11ruaJogO2Zjjt968vlHr&limit=15&tags=JavaScript"

  ApiKey="UvJWWhRup0tmxi53AsB11ruaJogO2Zjjt968vlHr"

  getQuizQuestions(){
    return this.http.get(this.BaseHtmlUrl);
  };
  getQuizQuestionsWpress(){
    return this.http.get(this.BaseWordPressUrl);
  };
  getQuizQuestionsJsBasic(){
    return this.http.get(this.BaseJsBUrl);
  };
  getQuizQuestionsJsInt(){
    return this.http.get(this.BaseJsIUrl);
  };
}
