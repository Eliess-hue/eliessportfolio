import { Component } from '@angular/core';

interface Project {
  name: string;
  pitch: string;
  stack: string[];
  demoUrl: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects: Project[] = [
    {
      name: 'Générateur de Devis',
      pitch: "Application complète de gestion de devis clients : création, envoi par email, export PDF et suivi des statuts, avec authentification et gestion des rôles.",
      stack: ['Spring Boot', 'PostgreSQL', 'React', 'JWT', 'Tailwind'],
      demoUrl: 'https://devisgeneratorproject.vercel.app',
    },
    {
      name: 'ItemManage',
      pitch: "Application de gestion de stock et d'inventaire : suivi des mouvements, historique exportable et tableau de bord, pensée pour une utilisation métier simple et efficace.",
      stack: ['Spring Boot', 'MongoDB', 'Vue 3', 'Tailwind'],
      demoUrl: 'https://itemmanage-frontend.vercel.app/',
    },
  ];
}