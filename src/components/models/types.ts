import dayjs from 'dayjs';
export interface CreditCard {
  cardNumber: string;
  cvcNumber: string;
  expiryDate: Date | dayjs.Dayjs;
}
