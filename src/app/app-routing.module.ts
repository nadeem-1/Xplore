import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import{PostDetailComponent} from'./post-detail/post-detail.component';
import { NewsComponent } from './news/news.component';
import { ScienceComponent } from './science/science.component';
import { SportComponent } from './sport/sport.component';
import { TechComponent } from './tech/tech.component';
import { LivenewsComponent } from './livenews/livenews.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import{AboutComponent} from './about/about.component';
const routes: Routes = [
  {path:'' , redirectTo:'home' ,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'blog',component:BlogComponent},
  {path:'blog/:id',component:PostDetailComponent},
  {path:'news',component:NewsComponent},
  {path:'science',component:ScienceComponent},
  {path:'sports',component:SportComponent},
  {path:'technology',component:TechComponent},
  {path:'livenews',component:LivenewsComponent},
  {path:'signup', component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
