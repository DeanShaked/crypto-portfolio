// Router Configuration
import { BrowserRouter } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import RouterConfig from "./components/RouterConfig";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <RouterConfig />
      </main>
    </BrowserRouter>
  );
}

export default App;
