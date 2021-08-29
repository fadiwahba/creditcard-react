import styles from './Navigation.module.scss';
import { MdKeyboardBackspace } from 'react-icons/md';

interface IProps {
  isMenuOpen: boolean;
  onMenuCloseClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const Navigation: React.FC<IProps> = ({ isMenuOpen, onMenuCloseClick }) => {
  const handleMenuBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onMenuCloseClick(e);
  };

  return (
    <nav
      className={
        isMenuOpen ? styles.menu + ' ' + styles.menu_show : styles.menu
      }
    >
      <div className="grid">
        <button
          className={styles.menu_back_icon + ' btn btn_icon'}
          onClick={(e) => handleMenuBtnClick(e)}
        >
          <MdKeyboardBackspace size={40} />
        </button>

        <div className={styles.title}>Menu</div>
      </div>
      <div className={styles.menu_content}>
        <ul>
          <li>
            <a href="/">link item</a>
          </li>
          <li>
            <a href="/">link item</a>
          </li>
          <li>
            <a href="/">link item</a>
          </li>
          <li>
            <a href="/">link item</a>
          </li>
          <li>
            <a href="/">link item</a>
          </li>
        </ul>
        <p>This is menu content</p>
      </div>
    </nav>
  );
};

export default Navigation;
