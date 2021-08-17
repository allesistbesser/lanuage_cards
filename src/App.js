import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <div className="navbarapp">
        <Navbar /> *Mesu<strong>T</strong>epebas*
      </div>
      <div>
       <Header />
      </div>
      <div>
        {" "}
        <Card />
      </div>
    </div>
  );
}

export default App;
