import "./css/App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./components/Movies";
function App() {
  return (
    <>
      <Navbar />

      <Movies />
    </>
  );
}

export default App;
