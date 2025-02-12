import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu!: any;
  constructor(private menuService: MenuService) { }
  ngOnInit(): void {
    this.menuService.getData().subscribe({
      next: (response) => {
        this.menu = response;
        console.log("menu ", this.menu);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


}
