import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef ) {
    console.log('directiva llamada');
    // el.nativeElement.style.backgroundColor = "red";
   }

   @Input("appResaltado") nuevoColor:string;

   @HostListener('mouseenter') mouseEnter(){
    this.resaltar(this.nuevoColor || 'orange')
   }
   @HostListener('mouseleave') mouseSalio(){
    this.resaltar(this.nuevoColor = null)
   }

   private resaltar( color:string ){
      this.el.nativeElement.style.background = color
   }

}
