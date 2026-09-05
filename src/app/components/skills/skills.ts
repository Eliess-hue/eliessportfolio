import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  direction: 'left' | 'right';
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly categories: SkillCategory[] = [
    {
      title: 'Backend',
      direction: 'right',
      skills: [
        { name: 'Java', icon: 'openjdk' },
        { name: 'Spring Boot', icon: 'springboot' },
        { name: 'Spring Security', icon: 'springsecurity' },
        { name: 'PHP', icon: 'php' },
      ],
    },
    {
      title: 'Frontend',
      direction: 'left',
      skills: [
        { name: 'React', icon: 'react' },
        { name: 'Vue 3', icon: 'vuedotjs' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
      ],
    },
    {
      title: 'Bases de données',
      direction: 'right',
      skills: [
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'MariaDB', icon: 'mariadb' },
      ],
    },
    {
      title: 'DevOps / Outils',
      direction: 'left',
      skills: [
        { name: 'Docker', icon: 'docker' },
        { name: 'GitHub Actions', icon: 'githubactions' },
        { name: 'Git', icon: 'git' },
      ],
    },
  ];
}