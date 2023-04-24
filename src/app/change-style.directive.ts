import { Directive, Input,ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeStyle]'
})
export class ChangeStyleDirective {


  @Input()  clicked : Boolean = true;
  @Input()  answers : any;

  constructor(private el : ElementRef,private render:Renderer2) { }

  @HostListener('click') getAnswer(){
    for(let i=0;i<1;i++){
      if(this.clicked){
        this.render.setStyle(this.el.nativeElement,'background','green');
        this.render.setStyle(this.el.nativeElement,'color','efff');
        this.render.setStyle(this.el.nativeElement,'border','2px solid grey');
      }else{
      this.render.setStyle(this.el.nativeElement,'background','blue');
      this.render.setStyle(this.el.nativeElement,'color','white');
      this.render.setStyle(this.el.nativeElement,'border','2px solid orange');
      }
    }
    
    
  }

}
