import useAppContext from '../../context';
import styles from './Movie.module.css';

export default function Movie({ movie }) {
    const {
      favorites,
  
      setfavoritesState,
    } = useAppContext();
  const getRate = (r) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (r > i)
        stars.push(
          <i key={`${i}${r}`} className={'fas fa-star ' + styles.star}></i>
        );
      else if (r > 0)
        stars.push(
          <i
          key={`${i}${r}`}
            className={'fas fa-star-half-alt ' + styles.star}
          ></i>
        );
      else
        stars.push(
          <i key={`${i}${r}`} className={'far fa-star ' + styles.star}></i>
        );
      r -= i;
    }

    return stars;
  };

  const addToFavorites = (movie) => {
    const fav = [...favorites];

    const removeIndex = fav.map((item) => item.id).indexOf(movie.id);

    if (removeIndex != -1) {
      fav.splice(removeIndex, 1);
    } else {
      fav.push(movie);
    }

    setfavoritesState(fav);
  };

  const isFavorite = (movie) => {
    return !!favorites.find((m) => m.id == movie.id)
      ? styles.favorite + ' ' + styles.favoriteActive
      : styles.favorite;
  };

  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }
  
  return (
    <div className={styles.margin} key={movie.id}>
      <div className={isFavorite(movie)} onClick={() => addToFavorites(movie)}>
        <i className="far fa-heart"></i>
      </div>
      <div className={styles.movie}>
        <img
          className={styles.img}
          src={'https://image.tmdb.org/t/p/w780' + movie.poster_path}
        />

        <div className={styles.content}>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.genre}>{movie.title}</div>

          <p className={styles.overview}>{movie.overview}</p>

          <div>{getRate(movie.vote_average)}</div>
        </div>
      </div>
    </div>
  );
}
