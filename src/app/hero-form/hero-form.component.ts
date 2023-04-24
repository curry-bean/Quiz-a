import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  // form

  powers = [
    'Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'
  ]

  county=[
    'Kiambu','Nairobi','Mombasa',
    'Nakuru','Kajiado','Narok'
  ]

  // model = new Hero(1,'alice','aa@gmail.com',
  // this.powers[0],this.county[0],'words of wisdom','dr Chickleman');

  // // add new Hero
  // newHero(){
  //  this.model = new Hero(2,'','','',);
  // }

  // // submit form
  // submitted=false

  // onSubmit(){this.submitted=true;}

}
