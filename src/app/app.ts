import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { About } from './components/about/about';

@Component({
  imports: [Hero, Projects, Skills, About],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
