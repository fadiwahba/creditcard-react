import dayjs from 'dayjs';
export interface CreditCard {
  cardNumber: number;
  cvcNumber: number;
  expiryDate: Date | dayjs.Dayjs;
}
