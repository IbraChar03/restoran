import { Component, HostListener } from '@angular/core';
import { Service, ServiceListService } from '../../services/service-list.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services: Service[] = [];
  data: any;
  isScrolled: boolean = false;

  constructor(private serviceListService: ServiceListService, private service: SettingsService) { }

  ngOnInit(): void {
    this.services = this.serviceListService.getServices();
    this.service.getData().subscribe({
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
