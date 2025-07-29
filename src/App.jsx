import { useState } from 'react'


function App() {
  

  return (
    <>
    <header>
    <nav class="navbar bg-body-tertiary">
     <div class="container">
      <a href="https://fontmeme.com/fonts/one-piece-manga-font/"><img src="https://fontmeme.com/permalink/250729/f31b4a3dfbe193545ccbe23920ec7db0.png" alt="one-piece-manga-font" border="0"/></a>
        </div>
      </nav>
    </header>
    <main>
      <div className="section m-5">
        <div className="container">
          <div className="form">
            <input className="form-control-lg m-2" type="text" placeholder='Cerca un film'/>
            <a class="btn btn-primary btn-lg " href="#" role="button">Cerca</a>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
