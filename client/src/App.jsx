// Router Configuration
import { BrowserRouter } from "react-router-dom";

// Components
import FirstInit from "./layout/FirstInit";
import Header from "./components/Header/Header";
import RouterConfig from "./components/RouterConfig";
import AppModals from "./layout/AppModals";

// Styles
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <FirstInit />
        <Header />
        <main className="main h-screen">
          <RouterConfig />
        </main>
        <AppModals />
      </BrowserRouter>
    </>
  );
}

export default App;
