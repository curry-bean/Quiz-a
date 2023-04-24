import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {ModalService} from '../modal.service';
import {Observable} from 'rxjs';
import { interval } from 'rxjs';
import { TotalService } from '../total.service';


@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  // myReactiveForm!: FormGroup ;


  @ViewChild("namePerson") nameKey!:ElementRef;
  @ViewChild("emailPerson") emailKey!:ElementRef;

  // email verificationion
  @ViewChild("email") eKey!:ElementRef;


  public display$!: Observable<'open' | 'close'>;


  public femail:string="" 
  public id:string='';
  // reactive form
  myReactiveForm = new FormGroup({
    fname: new FormControl(''),
    email: new FormControl(''),
  });
  fmail: void | undefined;
  
  // email verification
  myEmailReactiveForm = new FormGroup({
    
    email: new FormControl(''),
  });

  constructor(private router:Router,private modalService:ModalService,private totalService:TotalService) { }

  ngOnInit(): void {
    this.display$ = this.modalService.watch();
  }

  onSubmit() {
    localStorage.setItem("namePerson",this.nameKey.nativeElement.value);
    localStorage.setItem("emailPerson",this.emailKey.nativeElement.value);
    
    // set variable id to return of function getUniqueId
    this.id=this.genUniqueId();
    console.log(this.id);
    localStorage.setItem("id",this.id)

  
    // open modal Function
    this.open();
    this.startCounter();

    
    
 }

//  modal
  open() {
    this.modalService.open();

  }

  close() {
    this.modalService.close();
  }


//  generate id when user is registered
  genUniqueId(): string {
    const dateStr = Date
      .now()
      .toString(36); // convert num to base 36 and stringify

    const randomStr = Math
      .random()
      .toString(36)
      .substring(2, 8); // start at index 2 to skip decimal point

    return `${dateStr}-${randomStr}`;
  }

  // timer
interval$:any;
timer=10;
second$:any;
  startCounter(){
    this.interval$ = interval(1000)
    .subscribe(val=>{
      this.timer--;
        if(this.timer===0){
            this.router.navigate(["/"])
            this.close();
        } 
    })
  }

}
