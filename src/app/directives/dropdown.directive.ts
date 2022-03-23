import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    const dropdown = this.elRef.nativeElement.querySelector('.dropdown-menu');
    this.isOpen ? this.renderer.addClass(dropdown, 'show') : this.renderer.removeClass(dropdown, 'show');
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  }
}
