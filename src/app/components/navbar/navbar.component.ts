import { Component, HostListener, Input } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() pageTitle: string = "";
  @Input() pagePath: string = "";
  data: any;
  isScrolled: boolean = false;
  dropdownVisible: boolean = false;


  constructor(private service: SettingsService) { }

  ngOnInit(): void {
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

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
