import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { QualificationComponent } from './qualification/qualification.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent, pathMatch:"full"},
  {path:"about", component:AboutComponent, pathMatch:"full"},
  {path:"skills", component:SkillsComponent, pathMatch:"full"},
  {path:"qualification", component:QualificationComponent, pathMatch:"full"},
  {path:"portfolio", component:PortfolioComponent, pathMatch:"full"},
  {path:"contact", component:ContactComponent, pathMatch:"full"},
  {path:"error", component:ErrorComponent, pathMatch:"full"},
  {path:"**", redirectTo:"/error"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
