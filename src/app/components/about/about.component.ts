import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const mx = x / rect.width;   // 0 → 1
    const my = y / rect.height;  // 0 → 1

    const s = this.el.nativeElement.style;
    s.setProperty('--gx', `${x}px`);
    s.setProperty('--gy', `${y}px`);
    s.setProperty('--mx', `${mx}`);
    s.setProperty('--my', `${my}`);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.classList.add('is-hovered');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.classList.remove('is-hovered');
    const s = this.el.nativeElement.style;
    s.setProperty('--gx', '50%');
    s.setProperty('--gy', '40%');
  }
}
