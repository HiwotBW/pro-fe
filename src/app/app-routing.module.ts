import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ItconsultingComponent } from './itconsulting/itconsulting.component';
import { TrainingComponent } from './training/training.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  }, {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }, {
    path: "about-us",
    component: AboutUsComponent
  }, {
    path: "contact-us",
    component: ContactUsComponent
  }, {
    path: "it-consulting",
    component: ItconsultingComponent
  },
  {
    path: "training",
    component: TrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

