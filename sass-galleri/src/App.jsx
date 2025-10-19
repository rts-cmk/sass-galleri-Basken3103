
function App() {

  return (
    <div>
      <header className="header">
        <div className="search-container">
         <input type="text" placeholder="Search..." className="search-input"></input>
        </div>
        <hr></hr>
      </header>
      

      <main className="explore-section">
        <h1 className="section-title">Explore</h1>

        <nav className="category-nav">
          <ul>
            <a>Lifestyle</a>
            <a>Food</a> 
            <a>Home</a> 
            <a>Travel</a>
            <a>More ▼</a>
          </ul>
        </nav>






      </main>

    </div>
  )
}

export default App
