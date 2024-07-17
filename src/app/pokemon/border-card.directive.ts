import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appBorderCard]",
})

//Exercice ajouter les propriétés pour paramétrer la largeur d'une carte
//ajouter les propriétés pour paramétrer et préciser le type de la bordure(double treait, pointillés) d'une carte
export class BorderCardDirective {
  private initialColor: string = "#f5f5f5";
  private defautHeight: number = 180;
  private defaultColor: string = "#009688";

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defautHeight);
  }

  @Input("appBorderCard") borderColor: string; //alias
  //  @Input() appBorderCard: string; sans alias

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px  ${color}`;
  }
}
