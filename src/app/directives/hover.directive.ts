import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = '#AC0101'
  
  }
  @HostListener ('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.color = ''

  }


  constructor(private el: ElementRef) {


  }

}
