import styles from './Filter.module.css';

export default function Filter() {
  return (
    <div className={styles.categories}>
      <span className={styles.subtitle}>¿Cúal es tu género favorito?</span>
      <div className="select">
        <select>
          <option>SELECCIONA UN GÉNERO</option>
        </select>
      </div>
    </div>
  );
}
