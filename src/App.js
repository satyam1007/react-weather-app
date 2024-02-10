import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherApp from './components/weatherApp/WeatherApp';
import Weather from './components/weatherApp/Weather.jsx'
import { WeatherProvider } from './context/WeatherContext.jsx';

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <WeatherApp />
        <Router>
          <Routes>
            <Route path="/location/:city" element={<Weather />} />
          </Routes>
        </Router>
      </div>
    </WeatherProvider>
  );
}

export default App;
