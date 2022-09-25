import { uauth } from "./config/unstoppableDomain";

function App() {

  const login =() => uauth.login();

  return (
    <div className="App">
      <header className="App-header">
        <p>Web 3 login with unstoppable domains</p>
      </header>
      <div className="body">
        <p>Login with Unstoppable Domains to view the portfolio</p>
        <button className="button bg-black text-white p-2 m-2 rounded" onClick={login}>
          <p>Login to unstoppable</p>
        </button>
      </div>
    </div>
  );
}

export default App;
