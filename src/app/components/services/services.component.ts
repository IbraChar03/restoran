import { Component } from '@angular/core';
import { ServiceListService } from 'src/app/services/service-list.service';
import { Service } from 'src/app/services/service-list.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = [];
  constructor(private serviceListService: ServiceListService) { }
  ngOnInit(): void {
    this.services = this.serviceListService.getServices();
  }
}
