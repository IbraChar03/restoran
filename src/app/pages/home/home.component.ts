import { Component, HostListener } from '@angular/core';
import { ServiceListService } from '../../services/service-list.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any;
  isScrolled: boolean = false;

  constructor(private serviceSettings: SettingsService) { }

  ngOnInit(): void {
    this.serviceSettings.getData().subscribe({
      next: (response) => {
        this.data = response.headerItems;
        console.log(response.headerItems);
      },
      error: (err) => {
        console.error('error', err);
      }
    });
  }

  dropdownVisible: boolean = false;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

}
