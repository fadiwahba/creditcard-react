import styles from './CardForm.module.scss';
import NumberFormat from 'react-number-format';
import { useState } from 'react';
import { CreditCard } from '../models/types';
import { MdSimCard } from 'react-icons/md';

const CardForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvcNumber, setCvcNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const onCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCardNumber(e.target.value);
  };

  const onCvcNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCvcNumber(e.target.value);
  };

  const onExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setExpiryDate(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const creditCard: CreditCard = {
      cardNumber,
      cvcNumber,
      expiryDate,
    };
    console.log('Credit Card Submited: ', creditCard);
  };

  const limit = (val: string, max: string) => {
    if (val.length === 1 && val[0] > max[0]) {
      val = '0' + val;
    }
    if (val.length === 2) {
      if (Number(val) === 0) {
        val = '01';
        //this can happen when user paste number
      } else if (val > max) {
        val = max;
      }
    }
    return val;
  };

  const cardExpiry = (val: string) => {
    let month = limit(val.substring(0, 2), '12');
    let year = val.substring(2, 4);

    return month + (year.length ? '/' + year : '');
  };

  return (
    <>
      <h1 className="main_title">Register Card Form</h1>

      <div className={styles.card_shape}>
        <div className={styles.card_header}>
          <div className={styles.card_logo}>
            <svg viewBox="15 24 63 14" id="icon-asb-logo-colour">
              <path
                d="M30.71 28.746h-7.257c-.32 0-.59.214-.59.57v3.3c0 .308.222.467.498.32 1.713-.914 7.27-3.868 7.375-3.922.205-.104.287-.268-.026-.268zm5.16 9.213h-4.313l-1.372-2.47H21.23l-1.293 2.47h-4.34c-.264 0-.5-.173-.328-.484 1.334-2.39 7.185-12.864 7.242-12.963.17-.292.275-.512.78-.512h4.77c.532 0 .612.22.784.516.05.084 5.988 10.556 7.35 12.956.177.31-.058.487-.326.487zm22.957-.525V24.53c0-.288.243-.53.546-.53h12.122c3.51 0 5.212.806 5.212 3.645 0 2.06-.713 2.686-1.74 3.047-.216.07-.198.234 0 .27 1.637.29 2.254 1.108 2.254 3.156 0 3.055-1.86 3.84-4.377 3.84H59.37c-.324 0-.543-.26-.543-.523zm4.95-10.468v2.213l6.7-.002c.814 0 1.287-.32 1.287-1.107 0-.806-.473-1.103-1.286-1.103h-6.7zm0 5.44v2.42h6.8c.95 0 1.586-.37 1.586-1.176 0-.94-.635-1.243-1.586-1.243h-6.8zM15 24.573v7.032c0 .303.167.225.274.026.056-.102 3.103-5.487 4.047-7.147.152-.266-.013-.482-.33-.482h-3.404c-.37 0-.586.263-.586.573zm28.996 4.517h7.475c2.404 0 4.35 1.56 4.35 3.48v1.907c0 1.922-1.946 3.482-4.35 3.482h-8.734c-3.74 0-5.17-1.848-5.266-3.707-.003-.173-.06-.57.583-.57h4.372c.012.79.644 1.145 1.588 1.145h5.26c.952 0 1.585-.36 1.585-1.168 0-.94-.633-1.162-1.586-1.162h-6.64c-3.73 0-5.08-1.908-5.08-3.76v-1.383c0-1.853 1.878-3.354 4.192-3.354h9.304c2.294 0 4.158 1.476 4.19 3.306 0 .234.08.573-.59.573H50.21c-.002-.036-.006-.07-.01-.104l-.01-.052c-.107-.572-.56-.757-1.26-.757h-4.934c-.813 0-1.29.243-1.29 1.052 0 .785.477 1.07 1.29 1.07z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <MdSimCard size={30} />
        </div>
        <div className={styles.card_number}>
          {cardNumber ? cardNumber : '0000 0000 0000 0000'}
        </div>
        <div className="flex_row">
          <div className="w_50">
            <div className={styles.cvc_number}>
              CVC {cvcNumber ? cvcNumber : '000'}
            </div>
          </div>
          <div className="w_50">
            <div className={styles.card_expiry}>
              Expiry {expiryDate ? expiryDate : '00/00'}
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="cardNumber">Credit Card Number</label>
          <NumberFormat
            className="form_control"
            value={cardNumber}
            onChange={onCardNumberChange}
            format="#### #### #### ####"
            mask="_"
            id="cardNumber"
            name="cardNumber"
            placeholder="0000 0000 0000 0000"
            required
          />
        </div>
        <div className="form_group">
          <label htmlFor="cvcNumber">CVC</label>
          <NumberFormat
            className="form_control"
            value={cvcNumber}
            onChange={onCvcNumberChange}
            format="###"
            mask="_"
            id="cvcNumber"
            name="cvcNumber"
            placeholder="000"
            required
          />
        </div>
        <div className="form_group">
          <label htmlFor="expiryDate">Expiry</label>
          <NumberFormat
            className="form_control"
            value={expiryDate}
            onChange={onExpiryDateChange}
            format={cardExpiry}
            mask={['M', 'M', 'Y', 'Y']}
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/YY"
            required
          />
        </div>

        <button type="submit" className="btn btn_primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CardForm;
