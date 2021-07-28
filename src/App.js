import "./App.scss";
import { Home } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
