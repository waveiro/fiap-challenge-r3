import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  constructor(private readonly navController: NavController) { }

  goToBusCardTopUp() {
    this.navController.navigateForward('topup-bus-card');
  }

}
