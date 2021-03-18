import useAppContext from '../../context';
import styles from './Paginate.module.css';

export default function Paginate() {
  const {
    page,

    setPageState,
  } = useAppContext();

  const current = page;

  const pages = [1, 2, 3];

  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.footer}>
      <nav className="pagination" role="navigation" aria-label="pagination">
        <ul className="pagination-list">
          {pages &&
            pages.map((p) => (
              <li key={p}>
                <a
                  className={
                    'pagination-link ' + (current == p ? 'is-current' : '')
                  }
                  onClick={() => {
                    setPageState(p);
                    toTop();
                  }}
                >
                  {p}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
