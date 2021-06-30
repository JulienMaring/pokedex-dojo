import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appFilterType]'
})
export class FilterTypeDirective implements OnInit {

  private typeToExclude = 'water';
  @Input('appFilterType') type?: string;
  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<unknown>) { }

  ngOnInit(): void {
    if(this.type !== this.typeToExclude) {
      this.viewContainer.createEmbeddedView(this.template);
    }
  }

}
