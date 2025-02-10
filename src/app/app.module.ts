import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { BookingComponent } from './booking/booking.component';
import { TeamComponent } from './team/team.component';
import { ChefCardComponent } from './chef-card/chef-card.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ServiceComponent,
    AboutComponent,
    MenuComponent,
    FoodCardComponent,
    BookingComponent,
    TeamComponent,
    ChefCardComponent,
    TestimonialsComponent,
    TestimonialCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
