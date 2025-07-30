import { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'




function App() {

  const [films, setFilms] = useState([])
  const [searchTerms, setSearchTerms] = useState('')
  const [series, setSeries] = useState([])
  const api_key = import.meta.env.VITE_KEY
  const films_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchTerms}`
  const series_api_url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchTerms}`


  const handleSearch = (e) => {
    e.preventDefault()

    if (searchTerms.trim() === '') {
      setFilms([]);
      setSeries([]);
      return;
    }
    // ricerca film
    fetch(films_api_url)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setFilms(data.results)
      })
      .catch(error => {
        console.error('Errore durante la ricerca', error);

      });

    // ricerca sereie tv
    fetch(series_api_url)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setSeries(data.results)
      })
      .catch(error => {
        console.error('Errore durante la ricerca', error);

      })
  };



  function countryFlag(flag) {
    if (flag == 'ja') {
      return 'jp';
    }

    if (flag == 'en') {
      return 'gb';
    }

    if (flag == 'uk') {
      return 'ua';
    }

    if (flag == 'usa') {
      return 'us';
    }

    return flag;
  }

  function starRate(Number) {
    if (Number === 1) {
      return (
        <p>

          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-regular fa-star text-warning"></i>
          <i className="fa-regular fa-star text-warning"></i>
          <i className="fa-regular fa-star text-warning"></i>
          <i className="fa-regular fa-star text-warning"></i>

        </p>
      )
    }
    else if (Number === 2) {
      return (
        <p>

          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-regular fa-star text-warning"></i>
          <i className="fa-regular fa-star text-warning"></i>
          <i className="fa-regular fa-star text-warning"></i>

        </p>
      )
    }
    else if (Number === 3) {
      return (
        <p>

          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-regular fa-star text-warning"></i>
          <i className="fa-regular fa-star text-warning"></i>

        </p>
      )
    }
    else if (Number === 4) {
      return (
        <p>

          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-regular fa-star text-warning"></i>

        </p>
      )
    }
    else if (Number === 5) {
      return (
        <p>

          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>

        </p>
      )
    }
  }


  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg p-4">
          <div className="container-fluid">
            <a className="navbar-brand" href="https://fontmeme.com/one-piece-font/"><img src="https://fontmeme.com/permalink/250730/185e11edf4f20e69fe19536f8ce5c067.png" alt="one-piece-font" border="0" /></a>
            <form onChange={handleSearch} className="d-flex">
              <input className="form-control me-3" type="search" placeholder="Cerca un film o una serie" value={searchTerms} onChange={(e) => setSearchTerms(e.target.value)} />
            </form>
          </div>
        </nav>
      </header>
      <main>
        <div className="section m-5">
          <div className="container-fluid">
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-4">
              {films.map(film => (
                <div className="col" key={film.id}>
                  <div className="card h-100">
                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w342${film.poster_path}`} alt={film.title} />
                    <div className="card-body">
                      <h4>{film.title}</h4>
                      <p className='fs-5'>Titolo Originale: {film.original_title}</p>

                      <p>Lingua: <ReactCountryFlag className="emojiFlag" countryCode={countryFlag(film.original_language)} svg /></p>

                      <div>Voto: {starRate(Math.ceil(film.vote_average) / 2)}</div>

                    </div>
                  </div>
                </div>
              ))}
              {series.map(serie => (
                <div className="col" key={serie.id}>
                  <div className="card">
                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`} alt={serie.name} />
                    <div className="card-body">
                      <h4>{serie.name}</h4>
                      <p className='fs-3'>Titolo Originale: {serie.original_name}</p>
                      <p>Lingua: <ReactCountryFlag className="emojiFlag" countryCode={countryFlag(serie.original_language)} svg /></p>
                      <div> Voto: {starRate(Math.ceil(serie.vote_average) / 2)} </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App