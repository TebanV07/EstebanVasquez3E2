// Suggested code may be subject to a license. Learn more: ~LicenseLog:1549155066.
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  userName: string = 'Esteban Vasquez';
  theme: string = 'violetgreen';

  widthMenu: number = 25;
  visibleMenu: boolean = true;
  

  setTheme(color:string): void {
    this.theme = color;
  }
  alternateVisibility(): void {
    this.visibleMenu = !this.visibleMenu;
  }
  setSize(): void {
    this.widthMenu += 10;
    if (this.widthMenu > 100) {
      this.widthMenu = 50;
    }
  }
}