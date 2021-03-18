import Link from 'next/link';
import ActiveLink from '../ActiveLink/ActiveLink';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.links}>
        <Link href="/">
          <a className={`${styles.link} ${styles.logo}`}>
            <span>Ms</span>
          </a>
        </Link>
        <div className={styles.homeFavorite}>
          <ActiveLink activeClassName={styles.linkActive} href="/">
            <a className={`${styles.link} ${styles.home}`}>
              <span>HOME</span>
            </a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.linkActive} href="/favorites">
            <a className={`${styles.link} ${styles.favorite}`}>
              <span>FAVORITOS</span> <i className="far fa-heart"></i>
            </a>
          </ActiveLink>
        </div>
      </div>
    </div>
  );
}
