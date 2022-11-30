import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appLeftPosition]'
})
export class LeftPositionDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = "red";
  }
}
