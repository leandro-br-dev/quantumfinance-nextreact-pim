import styles from './header.module.css';
import classNames from 'classnames';
import { Help } from '@material-ui/icons';
import { Button } from '@material-ui/core/';

export default class header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.navLeft}>
          <ul>
            <li className={styles.link}>
              <a href="/pages/sobre">
                <h6>Sobre</h6>
              </a>
            </li>
            <li className={styles.link}>
              <a href="/pages/investimentos">
                <h6>Investimentos</h6>
              </a>
            </li>
            <li className={styles.link}>
              <a href="/pages/servicos">
                <h6>Serviços</h6>
              </a>
            </li>
            <li className={styles.link}>
              <a href="/pages/planos-e-promocoes">
                <h6>Planos e Promoções</h6>
              </a>
            </li>
            <li className={classNames(styles.homeBroker, styles.esquerda)}>
              <a href="/pages/home-broker">
                <h6>Home Broker</h6>
              </a>
            </li>
          </ul>
        </nav>

        <nav className={styles.navRight}>
          <ul>
            <li className={classNames(styles.link)}>
              <Help color="disabled" fontSize="small" />
            </li>
            <li className={styles.link}>
              <a href="/pages/sobre">
                <small>Atendimento</small>
              </a>
            </li>
            <li className={styles.link}>
              <a>
                <small>|</small>
              </a>
            </li>
            <li className={styles.link}>
              <a href="/pages/investimentos">
                <small>Login</small>
              </a>
            </li>

            <Button variant="contained">Abra sua conta</Button>
          </ul>
        </nav>
      </header>
    );
  }
}
