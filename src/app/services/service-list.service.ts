import { Injectable } from '@angular/core';

export interface Service {
  title: string;
  description: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {

  private services: Service[] = [
    {
      title: 'Master Chefs',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: 'fa-solid fa-user-tie'
    },
    {
      title: 'Quality Food',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: 'fa-solid fa-utensils'
    },
    {
      title: 'Online Order',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: 'fa-solid fa-cart-plus'
    },
    {
      title: '24/7 Service',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: 'fa-solid fa-headset'
    },
    {
      title: '24/7 Service',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: 'fa-solid fa-headset'
    },
    {
      title: 'Quality Food',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: 'fa-solid fa-utensils'
    },
    {
      title: 'Online Order',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: 'fa-solid fa-cart-plus'
    },
    {
      title: 'Master Chefs',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: 'fa-solid fa-user-tie'
    }
  ];

  constructor() { }

  getServices(): Service[] {
    return this.services;
  }
}