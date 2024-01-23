import './App.css'
import Header from "./Component/Header/indexHeader";

function App() {
  return (
    
    <div className="App">
      <Header/>
      <header className="App-header">
     
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Ana Durães <code></code> meu app em react
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
