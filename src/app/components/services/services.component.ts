import { Component } from '@angular/core';
import { ServiceListService } from 'src/app/services/service-list.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: any;
  constructor(private serviceListService: ServiceListService) { }
  ngOnInit(): void {
    this.serviceListService.getData().subscribe(
      (data) => {
        this.services = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
