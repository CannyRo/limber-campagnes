import { Directive, ElementRef, inject, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Directive({
  selector: '[NavActive]',
  standalone: true
})
export class NavActiveDirective {
  navLinkName: string;
  currentRoute = input<string|undefined>();
  route = inject(ActivatedRoute);

  constructor(private el : ElementRef) {
    this.navLinkName = this.el.nativeElement;
    console.log("this.navLinkName ", this.navLinkName);
    this.getPath();
  }

  private getPath() {
    let path = this.route.snapshot.params[''];
    console.log("params => ");
  }

}
