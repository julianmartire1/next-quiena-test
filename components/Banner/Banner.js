import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <img src="/banner.png" alt="banner" className={styles.img} />
      <div className={styles.title}>
        <h1>Movie Shop</h1>
        <button className={"button is-success " + styles.button}>VER PELICULAS</button>
      </div>
    </div>
  );
}
