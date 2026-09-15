import './App.css'

export default function App() {
  return (
    <>
      <div className="blue_head">
        <div className="glav_text">
          <h1 className="emoji">Emoji Finder</h1>
          <h2 className="find">Find emoji by keywords</h2>
        </div>
      </div>

      <div className="input_menu">
        <input className="input" type="text" placeholder="Placeholder" />
      </div>

      <div className="cards-container">
        <div className="card">
          <h1 className="card-emoji">💯</h1>
          <h2 className="card-title">100</h2>
          <h3 className="card-description">
            Hundred, points, symbol, wow, win, perfect, parties
          </h3>
        </div>

        <div className="card">
          <h1 className="card-emoji">🔢</h1>
          <h2 className="card-title">1234</h2>
          <h3 className="card-description">
            Input symbol for numbers symbol
          </h3>
        </div>

        <div className="card">
          <h1 className="card-emoji">🔢</h1>
          <h2 className="card-title">1234</h2>
          <h3 className="card-description">
            Input symbol for numbers symbol
          </h3>
        </div>
      </div>
    </>
  )
}