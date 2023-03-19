import logo from './logo.svg';
import './web-sandbox';
import './App.css';


function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

      <web-sandbox entry="http://192.168.10.103:8080" name={'app1'} />

    </div>
  );
}

export default App;
