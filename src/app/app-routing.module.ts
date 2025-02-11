import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { TestimonialPageComponent } from './pages/testimonial-page/testimonial-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutPageComponent },
  { path: "service", component: ServicePageComponent },
  { path: "menu", component: MenuPageComponent },
  { path: "contact", component: ContactPageComponent },
  { path: "booking", component: BookingPageComponent },
  { path: "testimonial", component: TestimonialPageComponent },
  { path: "team", component: TeamPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
