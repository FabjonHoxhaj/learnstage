import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStar]'
})
export class StarDirective {
  private normalColor = "#D3D3D3";
  
  @HostBinding("style.color") color = this.normalColor

  @HostBinding("style.fontSize") fontSize = "19px"

  @HostListener("mouseenter") mouseEnter() {
    this.color = "#deb217"
  }

  @HostListener("mouseleave") mouseLeave() {
    this.color = this.normalColor
  }

 /*@HostListener("click") onClick() {
    this.normalColor = "orange";  
    this.color = this.normalColor;
  }*/

  constructor() { }

}
