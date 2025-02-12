import { Component } from '@angular/core';
import { environment } from 'src/environment';
declare var google: any;
interface Contact {
  name: string,
  email: string
}
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  contacts: Contact[] = [
    { name: "Booking", email: "book@example.com" },
    { name: "General", email: "info@example.com" },
    { name: "Technical", email: "tech@example.com" },
  ]
  title: string = "Contact Us";
  path: string = "CONTACT";
  google: any;
  ngAfterViewInit(): void {
    this.loadGoogleMaps();
  }

  private loadGoogleMaps(): void {
    if ((window as any).google) {
      this.initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&callback=initMap`;
      script.defer = true;
      script.async = true;
      document.head.appendChild(script);

      (window as any).initMap = () => this.initMap();
    }
  }

  private initMap(): void {
    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 41.9028, lng: 12.4964 }, // Roma
      zoom: 13
    });

    new google.maps.Marker({
      position: { lat: 41.9028, lng: 12.4964 },
      map,
      title: "Roma"
    });
  }
}





