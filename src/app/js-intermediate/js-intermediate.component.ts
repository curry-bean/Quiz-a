import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { interval } from 'rxjs';
import { QuizService } from '../quiz.service';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-js-intermediate',
  templateUrl: './js-intermediate.component.html',
  styleUrls: ['./js-intermediate.component.css']
})
export class JsIntermediateComponent implements OnInit {

  public fullname:any;
  public questionsList:any=[];
  public currentQuestion:number=0;
  public answers:any;
  public correctAnswers:any;
  activeState:any;


  public points:number=0;
  public counter:number=0;

  public theCorrectAnswerA:any=[];
  public theCorrectAnswerB:boolean=false;
  public theCorrectAnswerC:boolean=false;
  public theCorrectAnswerD:boolean=false;

  
  public clickedAnswer:string="";
  public total:number=0;
  public data:number=0;
  public type:string="JavaScript Intermediate";

  wrongAnswers:number=0;
  rightAnswers:number=0;
  notAnswered:string="You have not Answered this Question !!!"
  
  

  interval$:any;
  $scope:any;

  progressbar:string="0";
  correctType:any;
  // retrieve data from input value using #name = template reference

  constructor(private quizService:QuizService,private totalService:TotalService ,private modalService: NgbModal,private router:Router) { }

  ngOnInit(): void {
    // get name from loacal storage and place it in variable name
    this.fullname=localStorage.getItem("name")!;
      this.getQuestionList();
      // this.getAnswersList();
      
  }


  // modal popup
  public open(modal: any): void {
    this.modalService.open(modal);
  }


  // call the service function to acquire qsts in api 
  getQuestionList(){
    this.quizService.getQuizQuestionsJsInt()
    .subscribe((data: any)=>{
      this.questionsList=data;
      console.log(this.questionsList);

      // counter to start only when questions are generated
      this.startCounter();
    });
  }


 

  // Arrow Button Functions
  nextQuestion(){

    this.getProgressbarPercentage();
  }
 

  // Not clicked lists
   clicked=false;

  // get value of clicked lists
  getAnswerClicked(answer:any) {
    this.clicked = !this.clicked;

    // change color when li is clicked
    this.activeState = answer;

    console.log(this.questionsList[this.currentQuestion].correct_answers)

    // get value of answer clicked
    this.clickedAnswer =answer.key;
    console.log(this.clickedAnswer);
    
  }



// submit Quiz
submitted=false;

  submitQuiz(){
    this.currentQuestion++;
    this.submitted=!this.submitted;
 
    // progress bar
    this.getProgressbarPercentage();

    console.log(this.clickedAnswer);

    // Convert object to array
    const obj =this.questionsList[this.currentQuestion].correct_answers
      console.log(this.questionsList[this.currentQuestion].correct_answers)

    const maps = Object.keys(obj).map(key => ({type: key, value: obj[key]}));
      console.log(maps);
      

    for (let i = 0; i < maps.length; i++) {
      this.correctAnswers = maps[i].value === "true";
      this.correctType = maps[i].type === "";
      console.log(maps[i].type);
      console.log("type");

    console.log(this.clickedAnswer+"_correct" === maps[i].type);

      console.log("Answers");
      console.log(this.correctAnswers);
      if(this.correctAnswers){
        console.log("yeeeey");  
        if(this.clickedAnswer+"_correct" === maps[i].type){
          this.rightAnswers++;
           console.log(this.clickedAnswer === "answer_a");

        }else if(this.clickedAnswer+"_correct" === maps[i].type){
          this.rightAnswers++;
           console.log(this.clickedAnswer === "answer_b");

        }else if(this.clickedAnswer+"_correct" === maps[i].type){
          this.rightAnswers++;
            console.log(this.clickedAnswer === "answer_c");

        }else if(this.clickedAnswer+"_correct" === maps[i].type){
          this.rightAnswers++;
            console.log(this.clickedAnswer === "answer_d");

        }else{
          this.wrongAnswers++;
        }
      }else{
        console.log("noooo");
        this.wrongAnswers++;
      }

    }
  }


// counter
timer=20;
second$:any;
second=60;
  startCounter(){
    this.interval$ = interval(60000)
    .subscribe(val=>{
      this.timer--;
        if(this.timer===0){
            this.router.navigate(["/"])
        } 
    })
    this.second$ = interval(1000).subscribe(res=>{
      this.second--;
      if(this.second == 0){
        this.second = 60;
        this.second --;
      }
    })
  }



// progress bar percentage
  getProgressbarPercentage(){
    this.progressbar = ((this.currentQuestion/this.questionsList.length)*100).toString();
    return this.progressbar;
  }

  // calculate total score
  finalsubmitQuiz(){
    this.total=Math.round((this.rightAnswers *100)/15);

    // navigate to results page
    this.router.navigate(['/results']);

    // send data to service
  
    this.totalService.setData(this.total)
    this.totalService.setType(this.type)
  }

}
