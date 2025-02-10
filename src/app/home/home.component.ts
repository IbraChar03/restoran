import { Component } from '@angular/core';
import { Service, ServiceListService } from '../service-list.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services: Service[] = [];

  constructor(private serviceListService: ServiceListService) { }

  ngOnInit(): void {
    this.services = this.serviceListService.getServices();
  }

}
