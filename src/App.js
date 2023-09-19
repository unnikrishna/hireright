import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from './components/Home';
import Country from './components/Country';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/country" element={<CountryDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
