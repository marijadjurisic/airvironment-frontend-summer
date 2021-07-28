import "./App.scss";
import { Header } from "./components";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
