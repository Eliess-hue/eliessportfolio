import { Component, signal } from '@angular/core';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly isMenuOpen = signal(false);

  protected readonly links: NavLink[] = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Projets', href: '#projets' },
    { label: 'Compétences', href: '#competences' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Contact', href: '#contact' },
  ];

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}