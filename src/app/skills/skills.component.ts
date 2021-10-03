import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  section1:boolean = true;
  section2:boolean = true;
  section3:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  togglesection1(){
    this.section1 = !this.section1;
    this.section2 = true;
    this.section3 = true;
  }

  togglesection2(){
    this.section1 = true;
    this.section2 = !this.section2;
    this.section3 = true;
  }

  togglesection3(){
    this.section1 = true;
    this.section2 = true;
    this.section3 = !this.section3;
  }

}
