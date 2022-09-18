import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlighter]',
})
export class HighlightDirective {
  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.style.background = 'yellow';
  }
}
