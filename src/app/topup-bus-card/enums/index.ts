export interface TopupModel {
  cardType?: CardType;
  cardNumber?: string;
  valueToTopup?: number;
  paymentMethod?: PaymentMethod;
}

export enum CardType {
  BOM,
  BilheteUnico
}
export enum PaymentMethod {
  checkingAccount,
  creditCard
}
