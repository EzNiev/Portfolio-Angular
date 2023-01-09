import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  skills: Skills[]=[];
  constructor(private SSkills: SkillsService) { }

  ngOnInit(): void {
    this.cargarSkills();
  }

  cargarSkills():void{
    this.SSkills.buscar().subscribe(data => {this.skills=data});
  }
}
