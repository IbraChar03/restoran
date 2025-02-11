import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { FoodCardComponent } from './components/food-card/food-card.component';
import { BookingComponent } from './components/booking/booking.component';
import { TeamComponent } from './components/team/team.component';
import { ChefCardComponent } from './components/chef-card/chef-card.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { ServicesComponent } from './components/services/services.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';

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
    TestimonialCardComponent,
    AboutPageComponent,
    ServicePageComponent,
    ServicesComponent,
    MenuPageComponent,
    ContactPageComponent,
    BookingPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
