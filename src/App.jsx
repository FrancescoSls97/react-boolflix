import { useState } from 'react'




function App() {
  
  const [films, setFilms] =  useState([])
  const [searchTerms, setSearchTerms] = useState('')
  const api_key = import.meta.env.VITE_KEY
  const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}
&query=${searchTerms}`
  
  
  const handleSearch = () => {
    if (searchTerms.trim() === '') {
      setFilms([]);
      return;
    }
  
    fetch(api_url)
    .then(res => res.json())
    .then(data =>{
      console.log(data.results); 
      setFilms(data.results) 
    })
    .catch(error => {
      console.error('Errore durante la ricerca', error);
      
    });
  };

  return (
    <>
    <header>
    <nav className="navbar bg-body-tertiary">
     <div className="container">
      <a href="https://fontmeme.com/fonts/one-piece-manga-font/"><img src="https://fontmeme.com/permalink/250729/f31b4a3dfbe193545ccbe23920ec7db0.png" alt="one-piece-manga-font" border="0"/></a>
        </div>
      </nav>
    </header>
    <main>
      <div className="section m-5">
        <div className="container">
          <div className="form">
            <input className="form-control-lg m-2" type="text" value={searchTerms} onChange={(e) =>  setSearchTerms(e.target.value)} placeholder='Cerca un film'/>
            <button className="btn btn-primary btn-lg " href="#" role="button" onClick={handleSearch}>Cerca</button>
          </div>
          <h2>Risultati</h2>
          {films.map(film => (
            <div className='results' key={film.id}>
              <h3>{film.title}</h3>
              <h5 className="fs3">Titolo Originale: {film.original_title}</h5>
              <p>Lingua: {film.original_language}</p>
              <p>Voto: {film.vote}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
    </>
  )
}

export default App
