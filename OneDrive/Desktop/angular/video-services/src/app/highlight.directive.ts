import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  // ElementRef is used to access the DOM element

  @Input() appHighlight: string = ''

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHighlight);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight("lightgreen");
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // el.nativeElement.style.backgroundColor = "lightgreen";
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'lightgreen')
  }

  private highlight(color: string){
    // this.el.nativeElement.style.backgroundColor = color;
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color)
  }

}
