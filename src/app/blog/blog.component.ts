import { Component, OnInit,ElementRef, ViewChild} from '@angular/core';
import { Hero } from '../hero';
import {  Router} from '@angular/router';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ModalService } from '../modal.service';




@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  @ViewChild("Uid") idKey!:ElementRef;

  public display$!: Observable<'open' | 'close'>;
  public btnName :any;
  public quizAttempts:number=1;
  public attempts:number=0;
  public Uniqueid:any;
  public Uid:any;
  public testHtml:string="";
  public testWpress:string="";
  public testJsBasic:string="";
  public testJsIntermediate:string="";
 
  

    IdForm = new FormGroup({
     id: new FormControl(''),
    });
    
  submitted = false;

 
  constructor(private router:Router,private modalService:ModalService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.display$ = this.modalService.watch();

  }

 
  // store name in local storage
  startQuizH(){
      this.testHtml = "HTML";
      this.open();
  }
  startQuizW(){
    this.testWpress = "Wordpress";
    this.open();
  }
  startQuizB(){
    this.testJsBasic = "JavaScript(Basic)";
    this.open();
  }
  startQuizI(){
    this.testJsIntermediate = "JavaScript(Intermediate)";
    this.open();
  }


  //  modal
  open() {
    this.modalService.open();

  }

  
  close() {
    this.modalService.close();
  }

 
  onSubmit() {
    this.Uniqueid = localStorage.getItem("id");
    localStorage.setItem("Uid",this.idKey.nativeElement.value)

    this.Uid = localStorage.getItem("Uid");
    console.log(this.Uniqueid === this.Uid);
    console.log(this.Uniqueid );
    console.log( this.Uid);

  
    this.submitted = true;
    // stop here if form is invalid
    if (this.IdForm.invalid) {
     
    }
    //True if all the fields are filled
    if(this.submitted && this.Uniqueid === this.Uid)
    {
      if(this.testHtml === "HTML"){
        this.router.navigate(["/html"]);
        this.close();
      }else if(this.testWpress === "Wordpress"){
        this.router.navigate(["/wordpress"]);
        this.close();
      }else if(this.testJsBasic === "JavaScript(Basic)"){
        this.router.navigate(["/JsBasic"]);
        this.close();
      }else if(this.testJsIntermediate === "JavaScript(Intermediate)"){
        this.router.navigate(["/JsIntermediate"]);
        this.close();
      }
    }
  }
 
  contacts = new Hero("","","");

  newHero(){
    this.contacts = new Hero("","","")
  };

   // submit form


  // onSubmit(){this.submitted=true;}

  saveName(event:any){
    if(localStorage.getItem("emailPerson") !== null){
      console.log(localStorage.getItem("emailPerson"));
        this.router.navigate(['/blog']);
        alert("You have already Registered")
    }else{
      console.log(" null");
      this.router.navigate(['/names']);
    }
  }

  quizPath(){

  }





}
