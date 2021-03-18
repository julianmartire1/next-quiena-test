import Head from 'next/head';
import Filter from '../../components/Filter/Filter';
import Header from '../../components/Header/Header';
import Movies from '../../components/Movies/Movies';
import useAppContext from '../../context';
import styles from '../../styles/Favorites.module.css';

export default function Favorites() {
  const { favorites } = useAppContext();

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>

      <Header />

      <Filter />

      <div className={styles.title}>Tus pelis favoritas</div>

      <Movies key="movies2" movies={favorites} paginate={false} />
    </div>
  );
}
