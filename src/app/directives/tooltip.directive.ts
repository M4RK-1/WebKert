import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input() appTooltip: string = ''; // Initialize with an empty string

  private tooltipElement: HTMLElement | null = null; // Initialize as null

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltipElement) {
      this.tooltipElement = document.createElement('span');
      this.tooltipElement.textContent = this.appTooltip;
      this.tooltipElement.className = 'tooltip';
      document.body.appendChild(this.tooltipElement);
    }
    this.setPosition();
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipElement) {
      document.body.removeChild(this.tooltipElement);
      this.tooltipElement = null;
    }
  }

  private setPosition() {
    if (this.tooltipElement) {
      const rect = this.el.nativeElement.getBoundingClientRect();
      this.tooltipElement.style.left = `${rect.left + window.scrollX}px`;
      this.tooltipElement.style.top = `${rect.top + window.scrollY - this.tooltipElement.offsetHeight}px`;
    }
  }
}
