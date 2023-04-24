import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  private total = new BehaviorSubject("")
  currentData = this.total.asObservable();

  private type = new BehaviorSubject("")
  currentType = this.type.asObservable();

  private id = new BehaviorSubject("")
  currentId = this.id.asObservable();


  constructor() { }

  setData(total:any) {
    this.total.next(total);
  }
  setType(type:any) {
    this.type.next(type);
  }
  setId(type:any) {
    this.id.next(type);
  }
}
