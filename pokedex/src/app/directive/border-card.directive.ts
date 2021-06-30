import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private defaultColor = '#f5f5f5';
  private initialColor = '#009688'
  @Input('appBorderCard') color = '#009688';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.color || this.initialColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.defaultColor);
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = 'solid 4px' + color;
  }
}
