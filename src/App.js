import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container" id="main-container">
        <Weather defaultCity="San Francisco" />
        <footer>
          This website was coded by{" "}
          <a
            href="https://www.linkedin.com/in/judith-charpentier-573b1b155/"
            target="_blank"
            rel="noreferrer"
          >
            Judith Charpentier
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Judith-coder/shecodes-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <div id="copyrightPhoto">Photo by Soly Moses from Pexels</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
