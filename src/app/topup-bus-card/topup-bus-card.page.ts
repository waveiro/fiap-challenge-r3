import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';
import { TopupModel, PaymentMethod, CardType } from './enums';

@Component({
  selector: 'app-topup-bus-card',
  templateUrl: './topup-bus-card.page.html',
  styleUrls: ['./topup-bus-card.page.scss'],
})
export class TopupBusCardPage implements OnInit {

  TOPUP_STEPS = {
    cardType: 0,
    cardNumber: 1,
    valueToTopUp: 2,
    paymentMethod: 3,
    report: 4,
    password: 5,
    success: 6
  };

  step: number = this.TOPUP_STEPS.cardType;
  model: TopupModel;

  paymentMethods = PaymentMethod;
  cardTypes = CardType;

  valuesToTopUp = [10, 12, 15, 20, 25, 35, 40, 50, 100];
  today: number = Date.now();
  moveToFinalStep: boolean = false;
  cardsTypeMap = new Map([
    [CardType.BOM, "BOM"],
    [CardType.BilheteUnico, "Bilhete Único"],
  ])

  @ViewChild("cardNumberField") cardNumberField: any;

  constructor(private readonly navCtrl: NavController) { }

  ngOnInit() {
    this.model = {};
  }

  nextStep() {
    if (this.moveToFinalStep) this.step = this.TOPUP_STEPS.report;
    else this.step++;


    if (this.step === this.TOPUP_STEPS.cardNumber) this.gotoNextField(this.cardNumberField);
  }

  goToStep(step: number) {
    this.step = step;
    this.moveToFinalStep = true;
  }

  reset() {
    this.step = 0;
  }

  cardSelected(event) {
    console.log(event.detail.value);
    this.model.cardType = event.detail.value;
  }

  valueToTopupSelected(event) {
    this.model.valueToTopup = Number(event.detail.value);
  }

  paymentMethodSelected(value: PaymentMethod) {
    this.model.paymentMethod = value;
    this.step = this.TOPUP_STEPS.report;
  }

  confirmPaymentClick(nextElement) {
    this.step = this.TOPUP_STEPS.password;
    this.gotoNextField(nextElement);
  }

  isCurrentStepValid() {
    switch (this.step) {
      case 0:
        return this.model.cardType != null;
      case 1:
        return this.model.cardNumber != null;
      case 2:
        return this.model.valueToTopup != null;
      case 3:
        return this.model.paymentMethod != null;
      default:
        break;
    }
  }

  gotoNextField(nextElement) {
    nextElement.setFocus();
  }

  showSuccessScreen() {
    this.step = this.TOPUP_STEPS.success;
  }

  goToHomePage() {
    let navigationExtras: NavigationOptions = {
      queryParams: {
        message: `Recarga de R$ ${this.model.valueToTopup},00 no cartão ${this.cardsTypeMap.get(this.model.cardType)} realizado com sucesso`,
        icon: 'bus-outline'
      }
    };
    this.navCtrl.navigateForward("home", navigationExtras);
  }
}

