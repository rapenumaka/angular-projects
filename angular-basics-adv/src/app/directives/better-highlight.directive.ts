import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer:Renderer2, private elementRef :ElementRef) { }
  ngOnInit(): void {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'orange');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseoleave(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'transparent');
  }



}
