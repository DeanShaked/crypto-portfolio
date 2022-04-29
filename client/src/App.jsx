// Router Configuration
import { BrowserRouter } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import RouterConfig from "./components/RouterConfig";
import AppModals from "./layout/AppModals";

// Styles
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="main">
          <RouterConfig />
        </main>
        <AppModals />
      </BrowserRouter>
    </>
  );
}

export default App;
