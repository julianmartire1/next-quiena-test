import Movie from '../Movie/Movie';
import Paginate from '../Paginate/Paginate';
import styles from './Movies.module.css';

export default function Movies({ movies, paginate = true }) {

  return (
    <div className="container">
      <div className={styles.movies}>
        {movies &&
          movies.map((m) => (
            <Movie
              key={m.id}
              movie={m}
            />
          ))}

        {paginate && <Paginate />}
      </div>
    </div>
  );
}
