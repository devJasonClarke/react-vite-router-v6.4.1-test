import { useState } from "react";
import reactLogo from "../assets/react.svg";
import "../App.css";
import { Link } from "react-router-dom";
import useName from "../hooks/useName";
function Index() {
  const [count, setCount] = useState(0);

  const name = useName("Leroy");

  return (
    <div className="App">
      <h1>{name}</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Index;
