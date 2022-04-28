// Components
import Header from "./components/Header/Header";
import RouterConfig from "./components/RouterConfig";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <RouterConfig />
      </main>
    </div>
  );
}

export default App;
