import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AdditionalComponent } from './components/additional/additional.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    AdditionalComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cv-portfolio';

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    const s = this.el.nativeElement.style;
    s.setProperty('--cx', `${e.clientX}px`);
    s.setProperty('--cy', `${e.clientY}px`);
    this.el.nativeElement.classList.add('cursor-active');
  }

  @HostListener('document:mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.classList.remove('cursor-active');
  }
}
