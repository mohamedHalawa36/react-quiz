import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Quiz from "./components/Quiz";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
function App() {
  return (
    <Provider store={Store}>
      <Quiz />
    </Provider>
  );
}

export default App;
