import { Injectable } from '@angular/core';
import { Skill } from '../class/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills: Skill[] = [
    {
      id:  1,
      habilidad: "HTML CSS",
      progress: 100,
    },
    {
      id:  2,
      habilidad: "javascript",
      progress: 80,
    },
    {
      id:  3,
      habilidad: "angular",
      progress: 50,
    },
    {
      id:  4,
      habilidad: "MySQL",
      progress: 10,
    },
    {
      id:  5,
      habilidad: "R",
      progress: 90,
    },
  ]

  constructor() { }

  getSkills() {
    return this.skills;
  }
}
