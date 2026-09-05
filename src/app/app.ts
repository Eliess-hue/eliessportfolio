import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

@Component({
  imports: [Navbar, Hero, Projects, Skills, About, Contact],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
